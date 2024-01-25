// React Hooks
import { useState } from 'react';
// My components
import AdminProductCard from './AdminProductCard';
import FilterSelect from '../general/FilterSelect';
// MUI components
import { Box, Typography, Grid } from '@mui/material';
// Redux hooks
import { useSelector } from 'react-redux';
// Utils
import filterProducts from '../../utils/filter.js';

// Options for the Category select input
const categoryOptions = ['All', 'Mens', 'Womens'];

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

const ManageProducts = () => {
  // State for the category filter
  const [category, setCategory] = useState('All');

  // State for the type filter
  const [type, setType] = useState('All');

  // Grab the products from the store
  const products = useSelector((state) => state.product);

  // Filter the products based on the category and type
  const filteredProducts = filterProducts(products, category, type);

  // Handlers for the select input's onChange events
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setType('All');
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          mt: { xs: 3, md: 1 },
        }}
      >
        <Box
          sx={{
            pl: 6,
          }}
        >
          <FilterSelect
            state={category}
            handleState={handleCategoryChange}
            options={categoryOptions}
          />
          <FilterSelect
            state={type}
            handleState={handleTypeChange}
            options={typeOptions}
          />
        </Box>
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography variant="h2" sx={{ mr: { xs: 0, md: 45 } }}>
            Manage Products
          </Typography>
        </Box>
      </Box>

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
        {
          // If there are no products, display a message
          filteredProducts.length === 0 ? (
            <Box sx={{ width: '100%', textAlign: 'center' }}>
              <Typography variant="h4">No products found</Typography>
            </Box>
          ) : (
            filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={product._id}>
                <AdminProductCard product={product} />
              </Grid>
            ))
          )
        }
      </Grid>
    </Box>
  );
};

export default ManageProducts;
