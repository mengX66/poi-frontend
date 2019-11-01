import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse, Link } from '@material-ui/core';
import RadarChart from './RadarChart';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { cardUseStyles } from './styles/style';

const BusinessCard = ({
  bizInfo,
  onClick,
  active,
  onCallClick,
}) => {
  const {
    final_score, id, latitude, longitude, address,
    name, website, suburb, state,
    quoteFromSuburb, description, m1, m2, m3, m4, m5
  } = bizInfo;
  
  const score = parseFloat(final_score).toFixed(1);
  const prepareMetricsValue = (m) => {
    return parseFloat(parseFloat(m).toFixed(1))/10;
  };
  const metrics = {
    metrics1: prepareMetricsValue(m1),
    metrics2: prepareMetricsValue(m2),
    metrics3: prepareMetricsValue(m3),
    metrics4: prepareMetricsValue(m4),
    metrics5: prepareMetricsValue(m5)
  }
  const geo = {
    lat: latitude || -33.8682645,
    lng: longitude || 151.2015845
  }
  const classes = cardUseStyles(parseInt(score));

  return (
    <Card className={classes.card}>
      <CardHeader
        title={name}
        action={
          <Avatar className={classes.avatar}>{score || 'N/A'}</Avatar>
        }
      />
      <CardActionArea>
        <CardContent onClick={() => onClick({ geo, id })}>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Address: ${address || '1'}${suburb ? `, ${suburb}` : ''}${state ? `, ${state}` : ''}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          style={{ marginLeft: 10 }}
          variant="contained"
          size="small"
          color="primary"
          onClick={() => onCallClick(bizInfo)}
        >
          <a style={{ textDecoration: 'none', color: 'white' }} href={`tel:${bizInfo.phone}`}>Call</a>
        </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: active === id,
          })}
          onClick={() => onClick({ geo, id })}
          aria-expanded={active === id}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={active === id} timeout="auto" unmountOnExit>
        <CardContent>
          {website &&
            <Typography paragraph>
              Website:{` `}
              <Link href={website} target='_blank'>
                {website}
              </Link>
            </Typography>
          }
          {description && <Typography paragraph>Description: {description}</Typography>}
          {quoteFromSuburb && <Typography paragraph>Job received in the same area: {quoteFromSuburb}</Typography>}
          <RadarChart metrics={metrics} />
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default BusinessCard;