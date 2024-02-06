import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
    divider: 'rgba(0,0,0,0.8)',
  },
  typography: {
    h2: {
      fontFamily: 'EB Garamond, serif',
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '0.17rem',
    },
    h3: {
      fontFamily: 'EB Garamond, serif',
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: 'EB Garamond, serif',
      fontSize: '2rem',
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: 'EB Garamond, serif',
      fontSize: '1.5rem',
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: 'EB Garamond, serif',
      fontSize: '1.25rem',
      lineHeight: 1.2,
    },
    h7: {
      fontFamily: 'EB Garamond, serif',
      fontSize: '1rem',
      lineHeight: 1.2,
    },
    body1: {
      fontFamily: 'EB Garamond, sans-serif',
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    subtitle1: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
});
