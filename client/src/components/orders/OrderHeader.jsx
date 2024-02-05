// MUI components
import { Box, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// React Router
import { Link } from 'react-router-dom';

const OrderHeader = ({ order }) => {
  // Get the order ID and purchase date from the order object
  const { _id, purchaseDate } = order;
  // Format the purchase date
  const date = new Date(parseInt(purchaseDate));
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <Box
      sx={{
        height: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        my: 6,
      }}
    >
      <Typography
        component={Link}
        to="/account"
        textTransform="uppercase"
        variant="h7"
        sx={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: 'black',
        }}
      >
        <ChevronLeftIcon />
        Back to account
      </Typography>
      <Typography variant="h5" textTransform="uppercase">
        Order #{_id}
      </Typography>
      <Typography variant="h7">Order placed on {formattedDate} </Typography>
    </Box>
  );
};

export default OrderHeader;
