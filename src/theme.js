import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#ec407a',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#e9ebee',
      dark: '#999999',
    },
  },
});

export default theme;
