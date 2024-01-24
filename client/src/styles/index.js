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
      fontSize: '2.2rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
  },
});
