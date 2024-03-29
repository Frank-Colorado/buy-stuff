// My components
import CartItem from './CartItem';
// MUI components
import { Box, Typography, Button, IconButton, Divider } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
// React router hooks
import { useNavigate } from 'react-router-dom';

const Cart = ({ handleCartClose, cart }) => {
  // React router hooks
  const navigate = useNavigate();

  // Handle the checkout button
  const handleCheckout = () => {
    // Close the cart
    handleCartClose();
    // Navigate to the checkout page
    navigate('/checkout');
  };

  return (
    <Box
      sx={{ height: '100vh', width: { xs: '85vw', md: '70vw', lg: '20vw' } }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 3,
          py: 2,
          height: '10%',
        }}
      >
        <Typography variant="h5" noWrap component="div">
          Cart
        </Typography>
        <IconButton onClick={handleCartClose}>
          <CloseOutlinedIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box
        sx={{
          height: '80%',
          overflow: 'auto',
        }}
      >
        {cart.length > 0 ? (
          cart.map((item) => <CartItem key={item.cartId} item={item} />)
        ) : (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
              Your cart is empty
            </Typography>
          </Box>
        )}
      </Box>
      <Divider sx={{ display: cart.length > 0 ? 'flex' : 'none' }} />
      <Box
        sx={{
          display: cart.length > 0 ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '10%',
        }}
      >
        <Button
          onClick={handleCheckout}
          variant="contained"
          color="primary"
          sx={{
            width: '80%',
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
        >
          Checkout - $
          {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}.00
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
