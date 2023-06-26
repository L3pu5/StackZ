import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
    background: { default: "#222222"},
    mode: 'dark',
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#7986cb',
    },
    success: {
      main: '#00e676',
    },
    info: {
      main: '#ba68c8',
    },
  },
});
export default theme;