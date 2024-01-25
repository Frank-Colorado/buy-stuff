// React Hooks
import { useState } from 'react';
// My components
import AdminProductCard from './AdminProductCard';
import FilterSelect from '../general/FilterSelect';
// MUI components
import { Box, Typography, Grid, Select } from '@mui/material';
// Redux hooks
import { useSelector } from 'react-redux';

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
  const filterProducts = () => {
    // First filter by category
    let filteredProducts = products.filter((product) => {
      if (category === 'All') {
        return products;
      } else {
        return product.category === category;
      }
    });
    // Then filter by type
    filteredProducts = filteredProducts.filter((product) => {
      if (type === 'All') {
        return filteredProducts;
      } else {
        return product.subtype === type;
      }
    });
    return filteredProducts;
  };

  console.log(filterProducts());

  // Handle change for the select inputs
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
          <Typography variant="h2" sx={{ mr: { xs: 0, md: 30 } }}>
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
