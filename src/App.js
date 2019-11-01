import React, { useState, useEffect } from 'react';
import Map from './Map/index';
import CssBaseline from '@material-ui/core/CssBaseline';
import BusinessCard from './BusinessCard';
import SelectBox from './SelectBox';
import FormModal from './FormModal';
import { AppBar, Tabs, Tab, Fab, Typography } from '@material-ui/core';
import TabPanel from './TabPanel';
import { appUseStyles } from './styles/style';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import axios from 'axios';

const App = () => {
  const classes = appUseStyles();

  const [categories, setCategories] = useState([]);
  const [geo, setGeo] = useState(null);
  const [category, setCategory] = useState(null);
  const [active, setActive] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [formItem, setFormItem] = React.useState(false);
  const [tab, setTab] = React.useState('category');
  const [dark, setDark] = React.useState(false);
  const [bizList, setBizList] = React.useState([]);
  const [savedBizList, setSavedBizList] = React.useState([]);

  useEffect(async () => {
    axios.get('https://pio.staging.oneflare.com.au/api/v5/poi_categories')
      .then((response) => {
        if (response.status === 200) setCategories(response.data)
      }).catch(error => {
        console.log(error)
      });
  }, []);

  const onCardClick = ({ geo, id }) => {
    setGeo(geo)
    setActive(active === id ? null : id)
  };

  const onSelect = (categoryId) => {
    setCategory(categoryId)
    fetchBiz(categoryId)
  };

  const onCallClick = (item) => {
    setOpen(true);
    setFormItem(item)
  }

  const onSubmit = ({ payload, id, categoryId }) => {
    // TODO: 
    axios.post(`https://fleo.serveo.net/api/v5/poi_businesses/${id}/poi_responses`, null, { params: payload })
      // axios.post(`https://pio.staging.oneflare.com.au/api/v5/poi_businesses/${id}/poi_responses`, null, { params: payload })
      .then((response) => {
        if (response.status === 200) {
          fetchBiz(categoryId);
          console.log('Re-fetch!')
        }
      }).catch(error => {
        console.log(error)
      });
  }

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `wrapped-tabpanel-${index}`,
    };
  }

  const renderBizCards = (bizList) => {
    return bizList.map(item =>
      <BusinessCard
        active={active}
        key={item.id}
        bizInfo={item}
        onCallClick={onCallClick}
        onClick={onCardClick} />
    )
  };

  const fetchBiz = (categoryId) => {
    axios.get(`https://pio.staging.oneflare.com.au/api/v5/poi_categories/${categoryId}/poi_businesses`)
      .then((response) => {
        if (response.status === 200) setBizList(response.data.slice(0, 20))
      }).catch(error => {
        console.log(error)
      });
  }

  const fetchSaved = () => {
    // TODO
    axios.get(`https://fleo.serveo.net/api/v5/poi_businesses/search`, { params: { call_later: true } })
      // axios.get(`https://pio.staging.oneflare.com.au/api/v5/poi_categories/${category || 1}/poi_businesses`, { call_later: true })
      .then((response) => {
        if (response.status === 200) setSavedBizList(response.data.slice(0, 20))
      }).catch(error => {
        console.log(error)
      });
  }

  const muiTheme = createMuiTheme({
    palette: {
      type: dark ? 'dark' : 'light'
    }
  });

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Map geo={geo} />
      <div className={classes.rightStyle}>
        <AppBar position="static">
          <Tabs variant="fullWidth" value={tab} onChange={(e, newValue) => setTab(newValue)} aria-label="wrapped label tabs example">
            <Tab
              value="category"
              label="All Business"
              {...a11yProps('category')}
            />
            <Tab onClick={fetchSaved} value="saved" label="Saved Business" {...a11yProps('saved')} />
          </Tabs>
        </AppBar>
        <TabPanel value={tab} index="category">
          <SelectBox category={category} onSelect={onSelect} categoryList={categories} />
          <div className={classes.bizList}>
            {category ? renderBizCards(bizList) :
              <Typography className={classes.welcome}>👋 Welcome to POI Rating System!</Typography>
            }
          </div>
        </TabPanel>
        <TabPanel value={tab} index="saved">
          <div className={classes.bizList} style={{ maxHeight: '93vh' }}>
            {renderBizCards(savedBizList)}
          </div>
        </TabPanel>
        <FormModal
          categoryId={category}
          formItem={formItem}
          active={active}
          onSubmit={onSubmit}
          open={open}
          handleClose={() => setOpen(false)}
        />
      </div>
      <Fab aria-label="theme"
        onClick={() => setDark(dark ? false : true)}
        className={classes.fab} color={dark ? 'secondary' : 'default'}>
        {dark ? <Brightness7Icon /> : <Brightness3Icon />}
      </Fab>
    </MuiThemeProvider>
  );
}

export default App;
