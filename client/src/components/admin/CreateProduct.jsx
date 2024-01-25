// React hooks
import { useState } from 'react';
// MUI components
import { Box, Button, Modal, Snackbar } from '@mui/material';
// My components
import ProductForm from '../forms/ProductForm';

const CreateProduct = () => {
  // State for modal and snackbar
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Handlers for modal
  const handleOpen = (_e) => {
    setOpen(true);
  };

  const handleClose = (_e) => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 5, ml: 7 }}
        onClick={handleOpen}
      >
        Add New Product
      </Button>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message="Product Added Successfully!"
        sx={{
          '& .MuiSnackbarContent-root': {
            backgroundColor: 'green',
          },
        }}
      />
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '100%', sm: '100%', md: '75%', lg: '45%' },
            height: { xs: '75%', sm: '75%', md: '80%', lg: '60%' },
            bgcolor: 'white',
          }}
        >
          <ProductForm snackBar={setSnackbarOpen} />
        </Box>
      </Modal>
    </Box>
  );
};

export default CreateProduct;
