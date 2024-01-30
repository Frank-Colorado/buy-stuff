// My components
import CheckoutDetails from '../components/checkout/CheckoutDetails.jsx';
// MUI components
import { Grid } from '@mui/material';

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
      <CheckoutDetails />
    </Grid>
  );
};

export default CheckoutPage;
