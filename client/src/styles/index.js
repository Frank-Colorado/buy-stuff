import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#000000',
    },
  },
  typography: {
    h2: {
      fontSize: '2.2rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    }
  }
});
