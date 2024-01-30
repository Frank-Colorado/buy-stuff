// MUI components
import { Grid, Typography, TextField, Button } from '@mui/material';

const CheckoutDetails = () => {
  return (
    <Grid
      item
      xs={12}
      sm={8}
      sx={{
        my: 2,
      }}
    >
      <form>
        <Typography variant="h5" textTransform="uppercase" sx={{ mb: 2 }}>
          Shipping Address
        </Typography>
        <TextField
          size="small"
          placeholder="Recipient Name"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          size="small"
          placeholder="Address Line 1"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          size="small"
          placeholder="Address Line 2"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          size="small"
          placeholder="City"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          size="small"
          placeholder="State"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          size="small"
          placeholder="Zip Code"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <Typography variant="h5" textTransform="uppercase" sx={{ mb: 2 }}>
          Billing Address
        </Typography>
        <TextField
          size="small"
          placeholder="Name on Card"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          size="small"
          placeholder="Address Line 1"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          size="small"
          placeholder="Address Line 2"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          size="small"
          placeholder="City"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          size="small"
          placeholder="State"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          size="small"
          placeholder="Zip Code"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <Typography variant="h5" textTransform="uppercase" sx={{ mb: 2 }}>
          Payment Information
        </Typography>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Grid>
  );
};

export default CheckoutDetails;
