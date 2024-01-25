import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';

import AdminProductCard from './AdminProductCard';

const ManageProducts = () => {
  return (
    <Box>
      <Typography variant="h2" textAlign="center" sx={{ mt: 5 }}>
        Manage Products
      </Typography>
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
        <AdminProductCard />
      </Grid>
    </Box>
  );
};

export default ManageProducts;
