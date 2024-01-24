// components for admin page
import AdminSidebar from '../components/admin/AdminSidebar.jsx';
import ProductList from '../components/admin/ManageProducts.jsx';
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
    <Grid container sx={{ height: '100%' }}>
      <Grid item xs={2} sx={{ borderRight: '1px solid black' }}>
        <AdminSidebar />
      </Grid>
      <Grid item xs={10}>
        <CreateProduct />
        <Typography variant="h2" textAlign="center" sx={{ mt: 5 }}>
          Manage Products
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AdminPage;
