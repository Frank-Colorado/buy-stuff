import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';

const ManageProducts = () => {
  return (
    <Box>
      <Typography variant="h2" textAlign="center" sx={{ mt: 5 }}>
        Manage Products
      </Typography>
      <Grid container columnGap={9} rowGap={7} sx={{ my: 5, px: '2rem' }}>
        <Card sx={{ display: 'flex', width: '30%', height: '6rem' }}>
          <CardMedia
            component="img"
            sx={{ width: '35%', height: '100%' }}
            src="https://via.placeholder.com/75x35"
            alt="placeholder"
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '65%',
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h7">Product Name</Typography>
              <Typography variant="h7">Product Price</Typography>
              <Button variant="contained" color="primary">
                Delete
              </Button>
            </CardContent>
          </Box>
        </Card>
      </Grid>
    </Box>
  );
};

export default ManageProducts;
