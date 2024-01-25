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
// My components
import DeleteProduct from './DeleteProduct';

const AdminProductCard = ({ product }) => {
  // State for the deleteModal
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  // Destructor the product
  const { name, price, imageUrl, _id } = product;
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
        <Box>
          <DeleteProduct product={_id} setModal={setOpenDeleteModal} />
        </Box>
      </Modal>
    </Box>
  );
};

export default AdminProductCard;
