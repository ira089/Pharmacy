import {createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 768,
        desktop: 1440,
      },
    },
  });

  export default theme