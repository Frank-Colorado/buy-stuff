// React hooks
import { useState, useEffect } from 'react';
// Redux hooks
import { useSelector, useDispatch } from 'react-redux';
import { setCart } from '../../store';
// My components
import Cart from '../cart/Cart';
import AdminNav from './AdminNav';
// MUI components
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Badge,
  Drawer,
  IconButton,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagSharpIcon from '@mui/icons-material/ShoppingBagSharp';
// React Router hooks
import { Link } from 'react-router-dom';
// Auth
import Auth from '../../utils/auth';

const Header = () => {
  // Redux dispatch setup
  const dispatch = useDispatch();
  // State to control the cart drawer
  const [openDrawer, setOpenDrawer] = useState(false);
  // Get the user's cart from the Redux store
  const cart = useSelector((state) => state.cart);

  // useEffect hooks to handle updating the cart state from localStorage
  useEffect(() => {
    // Function to get the user's cart from localStorage
    const getCart = () => {
      // Get the user's cart from localStorage
      const userCart = JSON.parse(localStorage.getItem('userCart')) || [];
      // Update the cart state in the Redux store
      dispatch(setCart(userCart));
    };
    // If the cart is empty, get the user's cart from localStorage
    if (!cart.length) {
      getCart();
    }
  }, [cart.length, dispatch]);

  // Handle opening the cart drawer
  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  // Handle closing the cart drawer
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  // Check if the user is logged in
  const isLoggedIn = Auth.loggedIn();
  // Check if the user is an admin
  const isAdmin = Auth.isAdmin();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="secondary" sx={{ height: '6.5rem' }}>
        {isAdmin && <AdminNav />}
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Typography
            component={Link}
            to="/"
            align="center"
            variant="h2"
            sx={{
              fontWeight: 'bold',
              textDecoration: 'none',
              color: 'Black',
              ml: 6,
            }}
          >
            Odachi
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: 'flex',
              mr: 7,
            }}
          >
            <IconButton
              component={Link}
              to={isLoggedIn ? '/account' : '/login'}
              color="inherit"
              aria-label="account"
              sx={{
                mr: 2,
              }}
            >
              <PersonIcon
                color="primary"
                sx={{
                  fontSize: '2.7rem',
                }}
              />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="cart"
              onClick={handleOpenDrawer}
            >
              <Badge badgeContent={cart.length} color="primary">
                <ShoppingBagSharpIcon fontSize="large" color="primary" />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={openDrawer} anchor="right">
        <Cart handleCartClose={handleCloseDrawer} cart={cart} />
      </Drawer>
    </Box>
  );
};

export default Header;
