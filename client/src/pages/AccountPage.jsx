// My Components
import AccountHeader from '../components/account/AccountHeader';
import AccountDetails from '../components/account/AccountDetails';
// MUI components
import { Grid, Box, CircularProgress } from '@mui/material';
// GraphQL hooks
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../graphQL/queries';
// Custom Auth
import Auth from '../utils/auth';

const AccountPage = () => {
  // Check if user is logged in
  const loggedIn = Auth.loggedIn();
  // if not logged in, redirect to home page
  if (!loggedIn) {
    window.location.assign('/');
  }

  // Query user data
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me || {};

  return (
    <Grid
      container
      sx={{
        minHeight: 'calc(100vh - 10.5rem)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid item xs={12} md={10} lg={8}>
          <AccountHeader name={user.username} />
          <AccountDetails orders={user.orders} />
        </Grid>
      )}
    </Grid>
  );
};

export default AccountPage;
