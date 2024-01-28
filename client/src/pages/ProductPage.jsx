// React Router hooks
import { useParams } from 'react-router-dom';
// My components
import ProductDetails from '../components/product/ProductDetails';
// MUI components
import { Grid, Box, Typography, CircularProgress, Button } from '@mui/material';
// GraphQL hooks
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT_BY_ID } from '../graphQL/queries';

const ProductPage = () => {
  // Get the id from the URL
  const { id } = useParams();

  // Query for the product
  const { loading, data } = useQuery(QUERY_PRODUCT_BY_ID, {
    variables: { clothingId: id },
  });

  // Get the product from the data
  // If there is no product, set it to an empty object
  const product = data?.clothingById || {};

  return (
    <Grid
      container
      sx={{
        minHeight: 'calc(100vh - 10.5rem)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid item xs={12} md={10} lg={8}>
          {Object.keys(product).length === 0 ? (
            <Box sx={{ textAlign: 'center', mt: 10 }}>
              <Typography variant="h4">Sorry, No Product Found.</Typography>
            </Box>
          ) : (
            <ProductDetails product={product} />
          )}
        </Grid>
      )}
    </Grid>
  );
};

export default ProductPage;
