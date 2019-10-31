import { makeStyles } from '@material-ui/core/styles';

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