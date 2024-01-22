import { Box, Typography, Button } from '@mui/material';

import SignupForm from '../components/forms/SignupForm';

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
        <Typography
          textTransform="uppercase"
          sx={{
            fontSize: '2.2rem',
            fontWeight: 'bold',
            lineHeight: '1',
          }}
        >
          Register
        </Typography>
        <SignupForm />
      </Box>
      <Typography>
        Already have an account?
        <Button color="secondary" href="/login">
          Login
        </Button>
      </Typography>
    </Box>
  );
};

export default RegisterPage;
