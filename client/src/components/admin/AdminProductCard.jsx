// React hooks
import { useState } from 'react';
// MUI components
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Modal,
} from '@mui/material';

const AdminProductCard = ({ product }) => {
  // State for the deleteModal
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  // Destructor the product
  const { name, price, imageUrl } = product;
  return (
    <Box>
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
              onClick={() => setOpenDeleteModal(true)}
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
      <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '25%',
            height: '20%',
            bgcolor: 'white',
          }}
        >
          <Typography fontWeight="bold" sx={{ fontSize: '1.3rem' }}>
            Are you sure you want to delete this product?
          </Typography>
          <Button variant="contained" color="error" sx={{ width: '40%', m: 2 }}>
            Delete
          </Button>
          <Button
            onClick={() => setOpenDeleteModal(false)}
            variant="contained"
            color="primary"
            sx={{ width: '40%' }}
          >
            No
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default AdminProductCard;
