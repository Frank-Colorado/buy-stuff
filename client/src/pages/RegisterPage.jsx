import { Box, Typography, Button } from '@mui/material';
import SignupForm from '../components/forms/SignupForm';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
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
        <Typography variant="h2" textTransform="uppercase">
          Register
        </Typography>
        <SignupForm />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="subtitle1">Already have an account?</Typography>
        <Typography
          component={Link}
          to="/login"
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
          Login Here!
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterPage;
