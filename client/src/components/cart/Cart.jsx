// MUI components
import { Box, Typography, IconButton } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Cart = ({ handleCartClose }) => {
  return (
    <Box sx={{ width: { xs: '75vw', md: '30vw', lg: '20vw' } }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 3,
          py: 2,
        }}
      >
        <Typography variant="h5" noWrap component="div">
          Cart
        </Typography>
        <IconButton onClick={handleCartClose}>
          <CloseOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Cart;
