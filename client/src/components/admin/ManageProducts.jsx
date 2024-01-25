// My components
import AdminProductCard from './AdminProductCard';
// MUI components
import { Box, Typography, Grid } from '@mui/material';
// Redux hooks
import { useSelector } from 'react-redux';

const ManageProducts = () => {
  // Grab the products from the store
  const products = useSelector((state) => state.product);

  return (
    <Box>
      <Typography variant="h2" textAlign="center" sx={{ mt: 5 }}>
        Manage Products
      </Typography>
      <Grid
        container
        columnSpacing={6}
        rowSpacing={5}
        sx={{
          mt: 2,
          mb: 5,
          px: { xs: 0, sm: 0, md: 5 },
        }}
      >
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={product._id}>
            <AdminProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ManageProducts;
