// My components
import AdminProductCard from './AdminProductCard';
// MUI components
import { Box, Typography, Grid, Select } from '@mui/material';
// Redux hooks
import { useSelector } from 'react-redux';

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
  // Grab the products from the store
  const products = useSelector((state) => state.product);

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
          <Select
            native
            sx={{
              height: '1.5rem',
              width: '7.8rem',
              ml: 1,
            }}
          >
            <option value="">All</option>
            <option value="Mens">Mens</option>
            <option value="Womens">Womens</option>
          </Select>
          <Select
            native
            sx={{
              height: '1.5rem',
              width: '7.8rem',
              ml: 1,
            }}
          >
            {typeOptions.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
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
