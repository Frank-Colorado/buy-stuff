// React hooks
import { useEffect } from 'react';
// Redux hooks
import { useDispatch } from 'react-redux';
import { clearCart } from '../store/slices/cartSlice';
// GraphQL hooks
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../graphQL/mutations';
// MUI components
import { Box, Typography } from '@mui/material';

const SuccessPage = () => {
  // Redux dispatch
  const dispatch = useDispatch();
  // GraphQL mutation to add an order
  const [addOrder] = useMutation(ADD_ORDER);

  // useEffect hook to handle adding an order after a successful payment
  useEffect(() => {
    // Save the order to the database
    const saveOrder = async () => {
      try {
        // Get the user's cart from localStorage
        const cart = JSON.parse(localStorage.getItem('userCart'));
        // A variable for the subtotal
        let subtotal = 0;
        // Create a products array to hold the cart items
        const products = cart.map((item) => {
          // For each item in the cart, add the item's price multiplied by the quantity to the subtotal
          subtotal += item.price * item.quantity;
          return {
            productId: item.id,
            selectedSize: item.size,
            quantity: item.quantity,
          };
        });
        // If the cart is not empty, create an order
        if (cart.length > 0) {
          // Add the order to the database
          await addOrder({
            variables: {
              products,
              subtotal,
              paymentStatus: true,
            },
          });
        }
        // Clear the cart in localStorage
        localStorage.removeItem('userCart');
        // Clear the cart in the Redux store
        dispatch(clearCart());
      } catch (error) {
        console.error('Error saving order: ', error);
      }
    };
    // Call the saveOrder function
    saveOrder();
  }, [addOrder]);

  return (
    <Box
      sx={{
        height: 'calc(100vh - 10.5rem)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50%',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Thank you for your purchase!
        </Typography>
        <Typography variant="body1">
          Your order has been placed and will be shipped shortly.
        </Typography>
      </Box>
    </Box>
  );
};

export default SuccessPage;
