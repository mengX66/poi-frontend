import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const avatarColorMapping = (score) => {
  switch (true) {
    case (score >= 9):
      return '#2e7d32'
    case (score >= 7 && score < 9):
      return '#7cb342'
    case (score >= 5 && score < 7):
      return '#cddc39'
    default: 
      return '#bdbdbd'
  }
}
const useStyles = makeStyles({
  card: {
    marginBottom: 10,
    paddingBottom: 5,
  },
  avatar: {
    backgroundColor: props => avatarColorMapping(props),
    color: 'white'
  }
});

const BusinessCard = ({
  bizInfo,
  onClick,
  active,
  onAddressClick,
  onCallClick
}) => {
  const {
    score, id, geo, address,
    name, phone, website,
    quoteFromSuburb, description
  } = bizInfo;
  const classes = useStyles(score);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>{score}</Avatar>
        }
        title={name}
      />
      <CardActionArea>
        <CardContent onClick={() => onAddressClick(geo)}>
          <Typography variant="body2" color="textSecondary" component="p">
            {address}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          size="small" color="primary" onClick={() => onClick({ geo, id })}>
          {active === id ? 'Collapse' : 'Learn More'}
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={() => onCallClick(phone)}
        >
          Call
        </Button>
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: active === id,
          })}
          onClick={() => onClick({ geo, id })}
          aria-expanded={active === id}
          aria-label="show more"
        >
          <Icon className="fa fa-plus-circle" />
        </IconButton> */}
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
          <Typography paragraph>Description: {description}</Typography>
          <Typography paragraph>Quote received: {quoteFromSuburb}</Typography>
          <RadarChart />
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default BusinessCard;