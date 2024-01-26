// React hooks
import { useParams } from 'react-router-dom';
// My components
import BrowseProducts from '../components/collections/BrowseProducts';
// MUI components
import { Grid, Box, Typography, CircularProgress } from '@mui/material';
// GraphQL hooks
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT_BY_CATEGORY } from '../graphQL/queries';

const CollectionsPage = () => {
  const { category } = useParams();
  const { loading, data } = useQuery(QUERY_PRODUCT_BY_CATEGORY, {
    variables: { category: category },
  });

  const products = data?.clothingByCategory || [];

  return (
    <Grid container sx={{ minHeight: 'calc(100vh - 10.5rem)' }}>
      <Grid
        item
        xs={12}
        sx={{
          px: { xs: 0, md: 10 },
        }}
      >
        {loading ? (
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Box>
            <Box
              sx={{
                width: '100%',
              }}
            >
              <Typography variant="h2" align="left" sx={{ my: 2 }}>
                Browse {category}'s Collection
              </Typography>
            </Box>
            <BrowseProducts products={products} />
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default CollectionsPage;
