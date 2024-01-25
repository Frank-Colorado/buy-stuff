import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from '@mui/material';

const AdminProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        alt="product image"
        height="75"
        sx={{ width: '30%', objectFit: 'contain', border: '1px solid black' }}
        src={imageUrl}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '70%',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h7">{name}</Typography>
          <Typography variant="h7">${price}.00</Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: '4.5rem',
              bgcolor: 'red',
            }}
          >
            Delete
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
};

export default AdminProductCard;
