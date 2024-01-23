// components for admin page
import UserSidebar from '../components/navbars/UserSidebar.jsx';
import ProductList from '../components/admin/ProductList.jsx';
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
    <Grid container sx={{ height: '100%  ' }}>
      <Grid item xs={3}>
        <UserSidebar />
      </Grid>
      <Grid item xs={9}>
        <Box>
          <Button variant="contained" color="primary" sx={{ mt: 5 }}>
            Add New Product
          </Button>
        </Box>
        <Typography variant="h2" textAlign="center" sx={{ mt: 5 }}>
          Manage Products
        </Typography>
        <ProductList />
      </Grid>
    </Grid>
  );
};

export default AdminPage;
