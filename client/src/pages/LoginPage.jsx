import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '40.0rem',
          margin: '4rem auto',
          border: '1px solid black',
          padding: '1rem',
        }}
      >
        <Typography variant="h2" textTransform="uppercase" sx={{ mb: 3 }}>
          Login
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="subtitle1">Need to Create an Account?</Typography>
        <Typography
          component={Link}
          to="/register"
          variant="subtitle1"
          sx={{
            ml: 1,
            textDecoration: 'none',
            color: 'black',
            '&:hover': {
              borderBottom: '1px solid black',
              transition: 'all 0.4s ease-in',
            },
          }}
        >
          Register Here!
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
