import { Box, Typography, AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
  const isLoggedIn = Auth.loggedIn();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar sx={{ height: '6.5rem' }}>
          <Typography
            component={Link}
            to="/"
            align="center"
            variant="h2"
            sx={{ fontWeight: 'bold', textDecoration: 'none', color: 'Black' }}
          >
            Odachi
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 7 }}>
            {isLoggedIn ? (
              <Button
                onClick={Auth.logout}
                variant="text"
                sx={{
                  mr: 2,
                  '&:hover': {
                    borderBottom: '2px solid #000000',
                  },
                }}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  component={Link}
                  to="/register"
                  variant="text"
                  sx={{
                    mr: 2,
                    '&:hover': {
                      backgroundColor: '#000000',
                      color: 'white',
                    },
                  }}
                >
                  Register
                </Button>
                <Button
                  component={Link}
                  to="/login"
                  variant="text"
                  sx={{
                    '&:hover': {
                      borderBottom: '2px solid #000000',
                    },
                  }}
                >
                  Login
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
