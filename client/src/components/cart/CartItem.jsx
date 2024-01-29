// React hooks
import { useState } from 'react';
// Redux hooks
import { useDispatch } from 'react-redux';
import { removeItem } from '../../store/slices/cartSlice';
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

const CartItem = ({ item }) => {
  // Redux dispatch setup
  const dispatch = useDispatch();
  // Local state for now
  const [quantityState, setQuantityState] = useState(item.quantity);

  const handleRemoveItem = () => {
    dispatch(removeItem(item.cartId));
  };

  const handleQuantityIncrement = () => {
    setQuantityState(quantityState + 1);
  };

  const handleQuantityDecrement = () => {
    if (quantityState > 1) {
      setQuantityState(quantityState - 1);
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
          src={item.image}
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
              {item.name}
            </Typography>
            <Typography variant="h7" fontWeight="bold">
              Size: {item.size}
            </Typography>
            <Typography variant="h7" fontWeight="bold">
              ${item.price}.00
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
                {quantityState}
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
