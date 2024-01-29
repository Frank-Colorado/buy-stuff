// Redux hooks
import { useDispatch } from 'react-redux';
import {
  removeItem,
  incrementItem,
  decrementItem,
} from '../../store/slices/cartSlice';
// MUI components
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartItem = ({ item: { cartId, image, name, size, price, quantity } }) => {
  // Redux dispatch setup
  const dispatch = useDispatch();

  // Handle removing the item from the cart
  const handleRemoveItem = () => {
    dispatch(removeItem(cartId));
  };

  const handleQuantityIncrement = () => {
    dispatch(incrementItem(cartId));
  };

  const handleQuantityDecrement = () => {
    if (quantity > 1) {
      dispatch(decrementItem(cartId));
    }
  };

  return (
    <Box sx={{ mt: 2, height: '23%', p: 2 }}>
      <Card
        sx={{
          display: 'flex',
          boxShadow: 'none',
          height: '100%',
        }}
      >
        <CardMedia
          component="img"
          alt="cart image"
          sx={{ width: '35%', objectFit: 'contain' }}
          // placeholder image
          src={image}
        />

        <CardContent
          sx={{
            width: '65%',
            p: 0,
            height: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              height: '75%',
              p: 2,
            }}
          >
            <Typography variant="h7" fontWeight="bold">
              {name}
            </Typography>
            <Typography variant="h7" fontWeight="bold">
              Size: {size}
            </Typography>
            <Typography variant="h7" fontWeight="bold">
              ${price}.00
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              height: '43%',
            }}
          >
            <Box
              sx={{
                px: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '75%',
                width: '45%',
                border: '1px solid black',
              }}
            >
              <IconButton
                onClick={handleQuantityDecrement}
                sx={{
                  width: '30%',
                  '&:hover': {
                    color: 'black',
                  },
                }}
              >
                <RemoveIcon />
              </IconButton>
              <Typography
                sx={{ width: '40%' }}
                variant="h7"
                fontWeight="bold"
                align="center"
              >
                {quantity}
              </Typography>
              <IconButton
                onClick={handleQuantityIncrement}
                sx={{
                  width: '30%',
                  '&:hover': {
                    color: 'black',
                  },
                }}
              >
                <AddIcon />
              </IconButton>
            </Box>
            <Typography
              onClick={handleRemoveItem}
              textTransform="uppercase"
              variant="h7"
              sx={{
                cursor: 'pointer',
                '&::after': {
                  content: '""',
                  display: 'block',
                  width: '100%',
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
              Remove
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CartItem;
