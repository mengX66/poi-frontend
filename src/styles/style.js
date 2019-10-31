import { makeStyles } from '@material-ui/core/styles';
import { avatarColorMapping } from '../utils/utils';

export const appUseStyles = makeStyles(theme => (
  {
    rightStyle: {
      position: 'absolute',
      left: '65%',
      top: 0,
      width: '35%',
      overflowY: 'scroll'
    },
    bizList: {
      maxHeight: '85vh', overflow: 'auto', padding: '0 20px'
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));

 export const cardUseStyles = makeStyles(theme => ({
    card: {
      margin: '10px 0',
      paddingBottom: 5
    },
    avatar: {
      backgroundColor: props => avatarColorMapping(props),
      color: 'white',
      margin: 5
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