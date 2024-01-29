// React hooks
import { useState } from 'react';
// My components
import Cart from './Cart';
// MUI components
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Drawer,
} from '@mui/material';
// React Router hooks
import { Link } from 'react-router-dom';
// Auth
import Auth from '../../utils/auth';

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

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
          <Box sx={{ display: 'flex', mr: 7 }}>
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
            <Button onClick={handleOpenDrawer}>Your Cart</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={openDrawer} anchor="right">
        <Cart handleCartClose={handleCloseDrawer} />
      </Drawer>
    </Box>
  );
};

export default Header;
