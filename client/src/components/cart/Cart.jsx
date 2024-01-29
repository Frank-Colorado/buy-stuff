// My components
import CartItem from './CartItem';
// MUI components
import { Box, Typography, Button, IconButton, Divider } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
// Redux hooks
import { useSelector } from 'react-redux';

const Cart = ({ handleCartClose }) => {
  // Redux state
  const cart = useSelector((state) => state.cart);

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
      <Divider />
      <Box
        sx={{
          display: 'flex',
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
          variant="contained"
          color="primary"
          sx={{
            width: '80%',
          }}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
