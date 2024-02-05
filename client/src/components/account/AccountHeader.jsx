// MUI components
import { Box, Typography } from '@mui/material';
// Auth Utility
import Auth from '../../utils/auth';

const AccountHeader = ({ name }) => {
  // Handle logging out
  const handleLogout = () => {
    Auth.logout();
  };
  return (
    <Box
      sx={{
        height: '10rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        my: 6,
      }}
    >
      <Typography
        onClick={handleLogout}
        textTransform="uppercase"
        variant="h7"
        sx={{
          cursor: 'pointer',
          '&::after': {
            content: '""',
            display: 'block',
            width: '5%',
            height: '1px',
            backgroundColor: 'black',
            transition: 'transform .5s ease',
            transformOrigin: 'left',
          },
          '&:hover::after': {
            transform: 'scaleX(0)',
          },
        }}
      >
        logout
      </Typography>
      <Typography variant="h5" textTransform="uppercase">
        My account
      </Typography>
      <Typography variant="h7">Welcome back, {name}!</Typography>
    </Box>
  );
};

export default AccountHeader;
