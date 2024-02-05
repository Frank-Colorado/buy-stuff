// MUI components
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
// React router hooks
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  // React router hook
  const navigate = useNavigate();
  // Destructure the product
  const { name, price, imageUrl, _id } = product;

  // Click handler for redirecting to the product page
  const handleClick = () => {
    navigate(`/products/${_id}`);
  };

  return (
    <Box>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 5,
        }}
      >
        <CardMedia
          component="img"
          alt="product image"
          height="180"
          sx={{ objectFit: 'contain', cursor: 'pointer' }}
          onClick={handleClick}
          src={imageUrl}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            onClick={handleClick}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: 'blue',
              },
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="h7"
            fontWeight="bold"
            sx={{
              my: 1,
            }}
          >
            ${price}.00
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default ProductCard;
