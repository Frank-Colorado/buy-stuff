import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../graphQL/mutations';
import Auth from '../../utils/auth';

const initialState = {
  email: '',
  password: '',
};

const LoginForm = () => {
  // Form and Error State
  const [formState, setFormState] = useState(initialState);
  const [errorState, setErrorState] = useState(null);

  // GraphQL Login Mutation
  const [loginUser] = useMutation(LOGIN_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await loginUser({
        variables: { ...formState },
      });

      if (data) {
        Auth.login(data.login.token);
      }
    } catch (err) {
      console.error(err);
      setErrorState(err.message);
      return;
    }
    setFormState({ ...initialState });
    setErrorState(null);
  };

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <TextField
          value={formState.email}
          onChange={handleChange}
          name="email"
          placeholder="Email"
          required
          type="email"
          size="small"
          fullWidth
          variant="outlined"
          sx={{ mb: 1 }}
        />
        <TextField
          value={formState.password}
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password"
          required
          size="small"
          fullWidth
          variant="outlined"
          sx={{ mb: 1 }}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{
            mb: 1,
            color: 'white',
            bgColor: 'black',
            background: 'linear-gradient(to left, black 50%, white 50%) right',
            backgroundSize: '200%',
            transition: 'all 0.5s ease',
            '&:hover': {
              color: 'black',
              backgroundPosition: 'left',
            },
          }}
          type="submit"
        >
          Login
        </Button>
      </form>
      {errorState && (
        <Typography variant="body1" color="error" textAlign="center">
          {errorState}
        </Typography>
      )}
    </Box>
  );
};

export default LoginForm;
