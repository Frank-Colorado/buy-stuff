// components for admin page
import AdminSidebar from '../components/admin/AdminSidebar.jsx';
import ManageProducts from '../components/admin/ManageProducts.jsx';
import CreateProduct from '../components/admin/CreateProduct.jsx';

import { Grid, Box, Button, Typography } from '@mui/material';

import Auth from '../utils/auth.js';

const AdminPage = () => {
  // Check if user is admin
  const isAdmin = Auth.isAdmin();
  // If not admin, redirect to home page
  if (!isAdmin) {
    window.location.replace('/');
  }

  return (
    <Grid
      container
      sx={{
        minHeight: 'calc(100vh - 10.5rem)',
      }}
    >
      <Grid item xs={2} sx={{ borderRight: '1px solid black' }}>
        <AdminSidebar />
      </Grid>
      <Grid item xs={10}>
        <CreateProduct />
        <ManageProducts />
      </Grid>
    </Grid>
  );
};

export default AdminPage;
