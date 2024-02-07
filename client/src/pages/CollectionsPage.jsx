// React hooks
import { useState, useEffect } from 'react';
// React Router hooks
import { useParams } from 'react-router-dom';
// My components
import BrowseProducts from '../components/collections/BrowseProducts';
// MUI components
import { Grid, Box, Typography, CircularProgress, Button } from '@mui/material';
// GraphQL hooks
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT_BY_CATEGORY } from '../graphQL/queries';

const CollectionsPage = () => {
  // State for the pagination
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [hasMore, setHasMore] = useState(true);
  const [filter, setFilter] = useState('All');

  // Get the category from the URL
  const { category } = useParams();

  // Query for the products
  const { loading, data, fetchMore } = useQuery(QUERY_PRODUCT_BY_CATEGORY, {
    variables: { category: category, limit: 8, offset: (page - 1) * limit },
  });

  // If there is data, set products to the data, otherwise set it to an empty array
  const products = data?.clothingByCategory.clothing || [];

  // useEffect hook to check if there are more products to load
  useEffect(() => {
    // If the filter is not 'All', then there are no more products to load
    if (filter !== 'All') {
      setHasMore(false);
      return;
    }
    if (data) {
      // If the current number of products is less than the total number of products
      // then there are more products to load
      if (
        data.clothingByCategory.clothing.length < data.clothingByCategory.count
      ) {
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    }
  }, [data, limit, page, filter]);

  // Pagination handler
  const handleLoadMore = async () => {
    // We use fetchMore to fetch additional products
    fetchMore({
      // We update the offset variable with the new page number
      variables: {
        offset: page * limit,
      },
    });
    // Then we update the page number
    setPage((prevPage) => prevPage + 1);
  };

  // Handler for the filter for the products
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

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
              display: 'flex',
              height: '100%',
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
                Browse {category} Collection
              </Typography>
            </Box>
            <BrowseProducts
              products={products}
              filter={filter}
              handleFilter={handleFilterChange}
            />
            {hasMore && (
              <Button
                onClick={handleLoadMore}
                variant="contained"
                fullWidth
                sx={{
                  mb: 2,
                  color: 'white',
                  bgColor: 'black',
                  background:
                    'linear-gradient(to left, black 50%, white 50%) right',
                  backgroundSize: '200%',
                  transition: 'all 0.5s ease',
                  '&:hover': {
                    color: 'black',
                    backgroundPosition: 'left',
                  },
                }}
              >
                Load More
              </Button>
            )}
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default CollectionsPage;
