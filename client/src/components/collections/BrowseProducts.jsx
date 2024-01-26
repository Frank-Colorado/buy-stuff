// React hooks
import { useState } from 'react';
// My components
import ProductCard from './ProductCard';
import FilterSelect from '../general/FilterSelect';
// MUI components
import { Box, Typography, Grid } from '@mui/material';
// Utils
import filterProducts from '../../utils/filter.js';

// Options for the Type select input
const typeOptions = [
  'All',
  'Shirt',
  'Pants',
  'Shorts',
  'Outerwear',
  'Top',
  'Dress',
  'Skirt',
];

const BrowseProducts = ({ products }) => {
  // State for the type filter
  const [type, setType] = useState('All');

  // Filter the products based on the type
  const filteredProducts = filterProducts(products, 'All', type);

  // Handler for the select input's onChange event
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <Box>
      <Box>
        <FilterSelect
          label="Type"
          options={typeOptions}
          value={type}
          handleState={handleTypeChange}
        />
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          mt: 2,
          mb: 5,
        }}
      >
        {
          // If there are no products, display a message
          filteredProducts.length === 0 ? (
            <Box sx={{ width: '100%', textAlign: 'center' }}>
              <Typography variant="h4">
                Sorry, no products match your filter.
              </Typography>
            </Box>
          ) : (
            // Otherwise, display the products
            filteredProducts.map((product) => (
              <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
                <ProductCard product={product} />
              </Grid>
            ))
          )
        }
      </Grid>
    </Box>
  );
};

export default BrowseProducts;
