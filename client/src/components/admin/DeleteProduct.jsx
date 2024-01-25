// MUI components
import { Box, Typography, Button } from '@mui/material';
// GraphQL hooks
import { useMutation } from '@apollo/client';
import { DELETE_PRODUCT } from '../../graphQL/mutations';
// Redux hooks
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../store/index';

const DeleteProduct = ({ product, setModal }) => {
  // Redux dispatch setup
  const dispatch = useDispatch();
  // GraphQL mutation setup
  const [removeProduct] = useMutation(DELETE_PRODUCT);
  // Delete Handler
  const handleDelete = async () => {
    try {
      // Send the mutation request
      const { data } = await removeProduct({
        variables: { clothingId: product },
      });
      // If the mutation is successful
      if (data) {
        // Then we remove the product from the store
        dispatch(deleteProduct(product));
        // Close the modal
        setModal(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
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
      <Button
        onClick={handleDelete}
        variant="contained"
        color="error"
        sx={{ width: '40%', m: 2 }}
      >
        Delete
      </Button>
      <Button
        onClick={() => setModal(false)}
        variant="contained"
        color="primary"
        sx={{ width: '40%' }}
      >
        No
      </Button>
    </Box>
  );
};

export default DeleteProduct;
