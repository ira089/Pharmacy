import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      desktop: 1440,
    },
  },
  palette: {
    green: {
      main: '#59b17a',
    },
  },
});

export default theme;
