// React Router hooks
import { useParams } from 'react-router-dom';
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

  const product = data?.clothingById || {};

  console.log(product);

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
        </Grid>
      )}
    </Grid>
  );
};

export default ProductPage;
