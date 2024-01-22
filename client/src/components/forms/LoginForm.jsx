import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const initialState = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [formState, setFormState] = useState(initialState);
  const [errorState, setErrorState] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formState;

    console.log({ email, password });

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
        <Button fullWidth variant="contained" sx={{ mb: 1 }} type="submit">
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
