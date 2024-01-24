import { useState } from 'react';
import {
  Box,
  Button,
  MenuItem,
  InputAdornment,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import { useMutation } from '@apollo/client';
import { CREATE_PRODUCT } from '../../graphQL/mutations';

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

const initialState = {
  name: '',
  description: '',
  price: 0,
  imageUrl: '',
  category: 'Mens',
  subtype: 'Shirt',
  sizes: ['XS'],
};

const ProductForm = ({ snackBar }) => {
  const [formState, setFormState] = useState(initialState);

  const [createProduct] = useMutation(CREATE_PRODUCT);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { price } = formState;
    const parsedPrice = parseFloat(price);

    try {
      const { data } = await createProduct({
        variables: { ...formState, price: parsedPrice },
      });
      if (data) {
        // Here we would would use a snackbar to display a success message

        // Then we would update Redux state with the new product
        console.log(data);
      }
    } catch (err) {
      console.error(err);
      // Here we would would use a snackbar to display an error message
      return;
    }
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
          width: '50%',
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
            // remove arrows from number input
            // disable browser arrows
            '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
              {
                WebkitAppearance: 'none',
                margin: 0,
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
          <ToggleButton value="XS" sx={{ width: '75px' }}>
            XS
          </ToggleButton>
          <ToggleButton
            sx={{
              width: '75px',
            }}
            value="S"
          >
            S
          </ToggleButton>
          <ToggleButton sx={{ width: '75px' }} value="M">
            M
          </ToggleButton>
          <ToggleButton sx={{ width: '75px' }} value="L">
            L
          </ToggleButton>
          <ToggleButton sx={{ width: '75px' }} value="XL">
            XL
          </ToggleButton>
        </ToggleButtonGroup>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 1 }}
          type="submit"
        >
          Add Product
        </Button>
      </form>
      <Button onClick={() => snackBar(true)}>Open</Button>
    </Box>
  );
};

export default ProductForm;
