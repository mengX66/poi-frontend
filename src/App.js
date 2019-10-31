import React, { useState } from 'react';
import Map from './Map/index';
import BusinessCard from './BusinessCard';
import SelectBox from './SelectBox';
import FormModal from './FormModal';

// TODO: Mocked
const businessList = [
  { id: 0, name: 'Shop 1', phone: '+61412345678', geo: { lat: -33.877959, lng: 151.1995674 }, address: 'Shop 33 1 Rider Blvd, Rhodes, NSW 2138', score: 9.5, quoteFromSuburb: 40, website: 'http://www.google.com', description: 'Whatever' },
  { id: 1, name: 'Shop 2', phone: '+61412345678', geo: { lat: -33.8745281, lng: 151.2039918 }, address: '20 Braemar St, Mascot NSW 2138', score: 8.9, quoteFromSuburb: 30, website: 'http://www.google.com', description: 'Whatever' },
  { id: 2, name: 'Shop 3', phone: '+61412345678', geo: { lat: -33.8783069, lng: 151.2006451 }, address: 'Shop 4, 12 Nicolle Walk, Darling Square, Haymarket NSW 2000', score: 8.6, quoteFromSuburb: 20, website: 'http://www.google.com', description: 'Whatever' },
  { id: 3, name: 'Shop 4', phone: '+61412345678', geo: { lat: -33.8713069, lng: 151.2006451 }, address: 'Shop 4, 12 Nicolle Walk, Darling Square, Haymarket NSW 2000', score: 7.5, quoteFromSuburb: 20, website: 'http://www.google.com', description: 'Whatever' },
  { id: 4, name: 'Shop 5', phone: '+61412345678', geo: { lat: -33.8773069, lng: 151.1996451 }, address: 'Shop 4, 12 Nicolle Walk, Darling Square, Haymarket NSW 2000', score: 5.5, quoteFromSuburb: 20, website: 'http://www.google.com', description: 'Whatever' }
];

const App = () => {
  const [geo, setGeo] = useState(null);
  const [category, setCategory] = useState(0);
  const [active, setActive] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [formItem, setFormItem] = React.useState(false);

  const rightStyle = {
    position: 'absolute',
    left: '65%',
    top: 0,
    padding: '20px 0 20px 20px',
    width: '35%',
    overflowY: 'scroll'
  };

  const onCardClick = ({ geo, id }) => {
    setGeo(geo)
    setActive(active === id ? null : id)
  };

  const onSelect = (categoryId) => {
    setCategory(categoryId)
  };

  const onCallClick = (item) => {
    setOpen(true);
    setFormItem(item)
    // window.open(`tel:${item.phone}`)
  }

  const onSubmit = (feedback) => {
    console.log(feedback)
    
  }
  return (
    <>
      <Map geo={geo} />
      <div style={rightStyle}>
        <SelectBox category={category} onSelect={onSelect} />
        <div style={{
          maxHeight: '88vh', overflow: 'auto'
        }}>
          {businessList.map(item =>
            <BusinessCard
              active={active}
              key={item.id}
              bizInfo={item}
              onCallClick={onCallClick}
              onClick={onCardClick} />
          )}
        </div>
        <FormModal
          formItem={formItem}
          active={active}
          onSubmit={onSubmit}
          open={open}
          handleClose={() => setOpen(false)}
        />
      </div>
    </>
  );
}

export default App;
