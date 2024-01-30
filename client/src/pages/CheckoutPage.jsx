// My components
import CheckoutDetails from '../components/checkout/CheckoutDetails.jsx';
// MUI components
import { Grid } from '@mui/material';
// Stripe
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { publishableKey } from '../stripe/config.js';

const stripePromise = loadStripe(publishableKey);

const CheckoutPage = () => {
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
      <Elements stripe={stripePromise}>
        <CheckoutDetails />
      </Elements>
    </Grid>
  );
};

export default CheckoutPage;
