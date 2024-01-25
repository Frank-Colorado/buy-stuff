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
  Snackbar,
} from '@mui/material';
// My components
import DeleteProduct from './DeleteProduct';
import ProductForm from '../forms/ProductForm';

const AdminProductCard = ({ product }) => {
  // State for the deleteModal
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  // State for the editModal
  const [openEditModal, setOpenEditModal] = useState(false);
  // State for the snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  // Destructure the product
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
            <Typography
              onClick={() => setOpenEditModal(true)}
              variant="h7"
              fontWeight="bold"
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  color: 'blue',
                },
              }}
            >
              {name}
            </Typography>
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message="Product Updated Successfully!"
        sx={{
          '& .MuiSnackbarContent-root': {
            backgroundColor: 'green',
          },
        }}
      />
      <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '45%',
            height: '55%',
            bgcolor: 'white',
          }}
        >
          <Typography>
            <ProductForm edit snackBar={setSnackbarOpen} product={product} />
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default AdminProductCard;
