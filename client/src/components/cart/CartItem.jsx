// MUI components
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartItem = () => {
  return (
    <Box sx={{ mt: 2, bgcolor: 'pink', height: '20vh' }}>
      <Card
        sx={{
          display: 'flex',
          boxShadow: 'none',
          height: '100%',
          p: 2,
        }}
      >
        <CardMedia
          component="img"
          alt="cart image"
          sx={{ width: '35%', objectFit: 'contain' }}
          // placeholder image
          src="https://via.placeholder.com/150"
        />

        <CardContent
          sx={{
            width: '65%',
            p: 0,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              height: '70%',
              p: 2,
            }}
          >
            <Typography variant="h7" fontWeight="bold">
              Product Name
            </Typography>
            <Typography variant="h7" fontWeight="bold">
              $100
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              height: '45%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '75%',
                width: '40%',
                border: '1px solid black',
              }}
            >
              <IconButton
                sx={{
                  '&:hover': {
                    color: 'black',
                  },
                }}
              >
                <RemoveIcon />
              </IconButton>
              <Typography variant="h7" fontWeight="bold">
                1
              </Typography>
              <IconButton
                sx={{
                  '&:hover': {
                    color: 'black',
                  },
                }}
              >
                <AddIcon />
              </IconButton>
            </Box>
            <Typography
              textTransform="uppercase"
              variant="h7"
              sx={{
                pr: 2,
                cursor: 'pointer',
                '&::after': {
                  content: '""',
                  display: 'block',
                  width: '100%',
                  height: '1px',
                  backgroundColor: 'black',
                  transition: 'transform .5s ease',
                  transformOrigin: 'left',
                },
                '&:hover::after': {
                  transform: 'scaleX(0)',
                },
              }}
            >
              Remove
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CartItem;
