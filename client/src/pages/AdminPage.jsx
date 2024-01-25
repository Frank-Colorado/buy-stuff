// components for admin page
import AdminSidebar from '../components/admin/AdminSidebar.jsx';
import ManageProducts from '../components/admin/ManageProducts.jsx';
import CreateProduct from '../components/admin/CreateProduct.jsx';
// React hooks
import { useEffect } from 'react';
// Redux hooks
import { useDispatch } from 'react-redux';
import { setProducts } from '../store/index.js';
// GraphQL hooks
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from '../graphQL/queries.js';
// MUI components
import { Grid, Box, CircularProgress } from '@mui/material';
// Utils
import Auth from '../utils/auth.js';

const AdminPage = () => {
  // Check if user is admin
  const isAdmin = Auth.isAdmin();
  // If not admin, redirect to home page
  if (!isAdmin) {
    window.location.replace('/');
  }

  // Setting up the hooks
  const dispatch = useDispatch();
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

  useEffect(() => {
    // If data exists
    if (data) {
      // Set the products in the store
      dispatch(setProducts(data.allClothing));
    }
  }, [data, dispatch]);

  return (
    <Grid
      container
      sx={{
        minHeight: 'calc(100vh - 10.5rem)',
      }}
    >
      <Grid
        item
        xs={2}
        sx={{
          display: { xs: 'none', md: 'block' },
          borderRight: '1px solid black',
        }}
      >
        <AdminSidebar />
      </Grid>
      <Grid item xs={10}>
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
          <>
            <CreateProduct />
            <ManageProducts />
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default AdminPage;
