// MUI components
import { Grid, Box, Typography, Button } from '@mui/material';
const ProductDetails = ({ product }) => {
  return (
    <Grid
      container
      sx={{
        mt: 5,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Grid item md={5}>
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ width: '100%', border: '1px solid black' }}
        />
      </Grid>
      <Grid item md={7}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Box>
            <Typography variant="h4">{product.name}</Typography>
            <Typography variant="h5">${product.price}</Typography>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Button variant="contained" color="primary" fullWidth>
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Grid>
      <Box>
        <Typography variant="h4">Description</Typography>
        <Typography variant="body1">{product.description}</Typography>
      </Box>
    </Grid>
  );
};

export default ProductDetails;
