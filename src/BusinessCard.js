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
    quoteFromSuburb, description
  } = bizInfo;

  const geo = {
    lat: latitude,
    lng: longitude
  }
  const classes = cardUseStyles(score);

  return (
    <Card className={classes.card}>
      <CardHeader
        title={name}
        action={
          <Avatar className={classes.avatar}>{score}</Avatar>
        }
      />
      <CardActionArea>
        <CardContent onClick={() => onClick({ geo, id })}>
          <Typography variant="body2" color="textSecondary" component="p">
            {`${address} ${suburb} ${state}`}
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
          Call
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
          <RadarChart />
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default BusinessCard;