import { useState } from 'react';
import { Box, Button, Modal } from '@mui/material';
import { Snackbar } from '@mui/material';

import ProductForm from '../forms/ProductForm';

const CreateProduct = () => {
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleOpen = (e) => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
  };
  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 5, ml: 5 }}
        onClick={handleOpen}
      >
        Add New Product
      </Button>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message="Product added!"
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
            width: '45%',
            height: '55%',
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
