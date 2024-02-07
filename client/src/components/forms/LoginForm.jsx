// React Hooks
import { useState } from 'react';
// MUI components
import { Box, TextField, Button, Typography } from '@mui/material';
// GraphQL hooks
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../graphQL/mutations';
// Auth Utils
import Auth from '../../utils/auth';

// Initial State for form
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

  // Change Handler
  const handleChange = (e) => {
    // Get the name and value from the event target
    const { name, value } = e.target;

    // Set the form state
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Handle for form submission
  const handleSubmit = async (e) => {
    // Prevent the default form submission
    e.preventDefault();

    try {
      // Use the loginUser mutation to login the user
      const { data } = await loginUser({
        variables: { ...formState },
      });

      // If there is data, then login the user
      if (data) {
        // Use the Auth.login util to create a token in local storage
        Auth.login(data.login.token);
      }
    } catch (err) {
      // If there is an error, log it to the console and set the error state
      console.error(err);
      setErrorState(err.message);
      return;
    }
    // Reset the form state and error state
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
