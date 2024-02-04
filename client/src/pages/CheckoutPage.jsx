// My components
import CheckoutDetails from '../components/checkout/CheckoutDetails.jsx';
// MUI components
import { Grid } from '@mui/material';

const CheckoutPage = () => {
  // Get the user's cart from localStorage
  const cart = JSON.parse(localStorage.getItem('userCart'));
  // If the cart is empty, redirect to the home page
  if (!cart || cart.length === 0) {
    window.location.replace('/');
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        minHeight: 'calc(100vh - 10.5rem)',
      }}
    >
      <CheckoutDetails />
    </Grid>
  );
};

export default CheckoutPage;
