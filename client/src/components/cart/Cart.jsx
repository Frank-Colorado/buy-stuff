// My components
import CartItem from './CartItem';
// MUI components
import { Box, Typography, Button, IconButton, Divider } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Cart = ({ handleCartClose }) => {
  return (
    <Box sx={{ width: { xs: '75vw', md: '30vw', lg: '20vw' } }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 3,
          py: 2,
          height: '10vh',
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
        // If there is overflow, make the box scrollable and keep it from growing
        sx={{
          maxHeight: '80vh',
          minHeight: '80vh',
          overflow: 'auto',
        }}
      >
        <CartItem />
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
          height: '10vh',
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
