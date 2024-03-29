// React hooks
import { useState } from 'react';
// MUI components
import {
  Grid,
  Box,
  Typography,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
// Redux hooks
import { useDispatch, useSelector } from 'react-redux';
import { addItem, incrementItem } from '../../store/index';

// Array of size options
const sizeOptions = ['XS', 'S', 'M', 'L', 'XL'];

const ProductDetails = ({ product }) => {
  // Redux dispatch setup
  const dispatch = useDispatch();
  // Get the cart state from the Redux store
  const cart = useSelector((state) => state.cart);
  // State to keep track of the selected size
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  // Handle the change of the selected size
  const handleSizeChange = (_event, newSize) => {
    setSelectedSize(newSize);
  };

  // Handle adding the item to the cart
  const handleAddToCart = () => {
    // If the user hasn't selected a size, return early
    if (!selectedSize) return;
    // Create a new item object to add to the cart
    const newItem = {
      cartId: `${product._id}-${selectedSize}`,
      id: product._id,
      image: product.imageUrl,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity: 1,
    };
    // Check to see if this item is already in the cart
    const itemInCart = cart.find((item) => item.cartId === newItem.cartId);
    if (itemInCart) {
      // If the item is already in the cart and the sizes are the same, increment the quantity
      dispatch(incrementItem(newItem.cartId));
      // Get the userCart array from local storage
      const userCart = JSON.parse(localStorage.getItem('userCart'));
      // Find the item to update
      const itemToUpdate = userCart.find(
        (item) => item.cartId === newItem.cartId
      );
      // Update the item's quantity
      itemToUpdate.quantity += 1;
      // Store the updated userCart array in local storage
      localStorage.setItem('userCart', JSON.stringify(userCart));
      return;
    }
    // Dispatch the action to add the item to the cart
    dispatch(addItem(newItem));
    // Create a userCart array to store in local storage
    const userCart = JSON.parse(localStorage.getItem('userCart')) || [];
    // Add the new item to the userCart array
    userCart.push(newItem);
    // Store the userCart array in local storage
    localStorage.setItem('userCart', JSON.stringify(userCart));
  };

  return (
    <Grid
      container
      sx={{
        mt: 5,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Grid
        item
        md={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh * 0.5)',
        }}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{
            objectFit: 'contain',
            width: '90%',
            height: '100%',
          }}
        />
      </Grid>
      <Grid item md={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'start',
            height: '100%',
          }}
        >
          <Box>
            <Typography variant="h4">{product.name}</Typography>
            <Typography variant="h5">${product.price}.00</Typography>
          </Box>
          <Box sx={{ width: '100%' }}>
            <ToggleButtonGroup
              value={selectedSize}
              fullWidth
              exclusive
              onChange={handleSizeChange}
              sx={{ mb: 2 }}
            >
              {sizeOptions.map((size) => (
                <ToggleButton
                  key={size}
                  value={size}
                  disabled={!product.sizes.includes(size)}
                >
                  {size}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
            <Button
              onClick={handleAddToCart}
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                color: 'white',
                bgColor: 'black',
                background:
                  'linear-gradient(to left, black 50%, white 50%) right',
                backgroundSize: '200%',
                transition: 'all 0.5s ease',
                '&:hover': {
                  color: 'black',
                  backgroundPosition: 'left',
                },
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Grid>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4">Description</Typography>
        <Typography variant="body1">{product.description}</Typography>
      </Box>
    </Grid>
  );
};

export default ProductDetails;
