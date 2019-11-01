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
    score, id, latitude, longitude, address,
    name, website, suburb, state,
    quoteFromSuburb, description, m1, m2, m3, m4, m5
  } = bizInfo;
  const metrics = {
    metrics1: typeof (m1) === Number ? m1 : 0.7,
    metrics2: typeof (m2) === Number ? m2 : 0.8,
    metrics3: typeof (m3) === Number ? m2 : 0.9,
    metrics4: typeof (m4) === Number ? m4 : 0.67,
    metrics5: typeof (m5) === Number ? m5 : 0.8
  }
  const geo = {
    lat: latitude || -33.8682645,
    lng: longitude || 151.2015845
  }
  const classes = cardUseStyles(score);

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