// React hooks
import { useState } from 'react';
// MUI components
import {
  Box,
  Button,
  MenuItem,
  InputAdornment,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
// GraphQL hooks
import { useMutation } from '@apollo/client';
import { CREATE_PRODUCT } from '../../graphQL/mutations';
// Redux hooks
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/index';

// Items for the subtype select menu
const subtypes = [
  {
    value: 'Shirt',
  },
  {
    value: 'Pants',
  },
  {
    value: 'Shorts',
  },
  {
    value: 'Outerwear',
  },
  {
    value: 'Top',
  },
  {
    value: 'Dress',
  },
  {
    value: 'Skirt',
  },
];

// Items for the size toggle buttons
const sizeButtons = ['XS', 'S', 'M', 'L', 'XL'];

// Initial state for the form
const initialState = {
  name: '',
  description: '',
  price: 0,
  imageUrl: '',
  category: 'Mens',
  subtype: 'Shirt',
  sizes: ['XS'],
};

const ProductForm = ({ snackBar, edit }) => {
  // Form State
  const [formState, setFormState] = useState(initialState);
  // Redux dispatch
  const dispatch = useDispatch();
  // GraphQL mutation
  const [createProduct] = useMutation(CREATE_PRODUCT);
  // Handlers for the form inputs
  const handleChange = (e) => {
    // Destructure the name and value properties off of event.target
    const { name, value } = e.target;
    // Update the form state with the key being the input's name and the value being the input's value
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // Handler for the form submission
  const handleSubmit = async (e) => {
    // Prevent the default behavior of form submission
    e.preventDefault();
    // Destructure the price property off of formState
    const { price } = formState;
    // Turn the price into a number so it can be stored in the database correctly
    const parsedPrice = parseFloat(price);

    try {
      // Send the mutation request
      const { data } = await createProduct({
        variables: { ...formState, price: parsedPrice },
      });
      // If the mutation is successful
      if (data) {
        // Then we add the product to the Redux store
        dispatch(addProduct(data.addClothing));
        // Display a snackbar to let the user know the product was added successfully
        snackBar(true);
      }
    } catch (err) {
      console.error(err);
      // Here we would would use a snackbar to display an error message
      return;
    }
    // Reset the form state
    setFormState({ ...initialState });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        mt: 5,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '75%',
          alignItems: 'center',
        }}
      >
        <TextField
          value={formState.name}
          onChange={handleChange}
          label="Product Name"
          name="name"
          size="small"
          variant="outlined"
          fullWidth
          required
          sx={{ mt: 1 }}
        />
        <TextField
          value={formState.description}
          onChange={handleChange}
          label="Description"
          name="description"
          multiline
          rows={4}
          size="small"
          variant="outlined"
          fullWidth
          required
          sx={{ mt: 1 }}
        />
        <TextField
          value={formState.price}
          onChange={handleChange}
          label="Price"
          name="price"
          size="small"
          variant="outlined"
          fullWidth
          required
          InputProps={{
            type: 'number',
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          sx={{
            mt: 1,
            '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
              {
                WebkitAppearance: 'none',
              },
          }}
        />
        <TextField
          value={formState.imageUrl}
          onChange={handleChange}
          label="Image URL"
          name="imageUrl"
          size="small"
          variant="outlined"
          fullWidth
          required
          sx={{ mt: 1 }}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <TextField
            value={formState.category}
            onChange={handleChange}
            name="category"
            select
            label="Category"
            size="small"
            variant="outlined"
            defaultValue="Mens"
            sx={{
              mt: 1,
              width: '48%',
            }}
          >
            <MenuItem
              value="Mens"
              sx={{
                '&:hover': {
                  backgroundColor: '#E0E0E0',
                },
              }}
            >
              Mens
            </MenuItem>
            <MenuItem
              value="Womens"
              sx={{
                '&:hover': {
                  backgroundColor: '#E0E0E0',
                },
              }}
            >
              Womens
            </MenuItem>
          </TextField>
          <TextField
            value={formState.subtype}
            onChange={handleChange}
            name="subtype"
            select
            label="Clothing Type"
            size="small"
            variant="outlined"
            defaultValue="Shirt"
            sx={{
              mt: 1,
              width: '48%',
            }}
          >
            {subtypes.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                sx={{
                  '&:hover': {
                    backgroundColor: '#E0E0E0',
                  },
                }}
              >
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <ToggleButtonGroup
          value={formState.sizes}
          onChange={(_event, newSizes) => {
            setFormState({
              ...formState,
              sizes: newSizes,
            });
          }}
          size="large"
          name="size"
          required
          sx={{
            mt: 3,
          }}
        >
          {sizeButtons.map((size) => (
            <ToggleButton key={size} value={size} sx={{ width: '75px' }}>
              {size}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        {edit ? (
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
            Save Changes
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 1 }}
            type="submit"
          >
            Add Product
          </Button>
        )}
      </form>
    </Box>
  );
};

export default ProductForm;
