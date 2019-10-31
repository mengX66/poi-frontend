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
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { avatarColorMapping } from './utils/utils';

const useStyles = makeStyles(theme => ({
  card: {
    margin: '10px 0',
    paddingBottom: 5
  },
  avatar: {
    backgroundColor: props => avatarColorMapping(props),
    color: 'white'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const BusinessCard = ({
  bizInfo,
  onClick,
  active,
  onCallClick,
}) => {
  const {
    score, id, geo, address,
    name, website,
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
        <CardContent onClick={() => onClick({ geo, id })}>
          <Typography variant="body2" color="textSecondary" component="p">
            {address}
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
          <Typography paragraph>Description: {description}</Typography>
          <Typography paragraph>Quote received: {quoteFromSuburb}</Typography>
          <RadarChart />
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default BusinessCard;