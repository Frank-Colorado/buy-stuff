// MUI components
import { Grid, Box, Typography, TextField, Button } from '@mui/material';

const CheckoutDetails = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={8}>
        <form>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Shipping Address
          </Typography>
          <TextField
            placeholder="Recipient Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Address Line 1"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Address Line 2"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="City"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="State"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Zip Code"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <Typography variant="h5" sx={{ mb: 2 }}>
            Billing Address
          </Typography>
          <TextField
            placeholder="Name on Card"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Address Line 1"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Address Line 2"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="City"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="State"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Zip Code"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <Typography variant="h5" sx={{ mb: 2 }}>
            Payment Information
          </Typography>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default CheckoutDetails;
