import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../graphQL/mutations';
import Auth from '../../utils/auth';

const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignupForm = () => {
  // Form and Error State
  const [formState, setFormState] = useState(initialState);
  const [errorState, setErrorState] = useState(null);

  // GraphQL CreateUser Mutation
  const [createUser] = useMutation(CREATE_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formState;

    if (password.length < 5) {
      setErrorState('Password must be at least 5 characters!');
      return;
    }

    if (password !== confirmPassword) {
      setErrorState('Passwords Do Not Match!');
      return;
    }

    try {
      const { data } = await createUser({
        variables: { ...formState },
      });

      if (data) {
        // use auth to set the token to local storage
        Auth.login(data.createUser.token);
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
          value={formState.username}
          onChange={handleChange}
          name="username"
          placeholder="Full Name"
          required
          size="small"
          fullWidth
          variant="outlined"
          sx={{ mb: 1 }}
        />
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
          placeholder="Password (min 5 characters)"
          required
          size="small"
          fullWidth
          variant="outlined"
          sx={{ mb: 1 }}
        />
        <TextField
          value={formState.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
          size="small"
          fullWidth
          variant="outlined"
          sx={{ mb: 1 }}
        />
        <Button fullWidth variant="contained" sx={{ mb: 1 }} type="submit">
          Register
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

export default SignupForm;
