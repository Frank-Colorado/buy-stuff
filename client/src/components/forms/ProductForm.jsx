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

const ProductForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    category: 'Mens',
    subtype: 'Shirt',
    size: ['XS'],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 5,
      }}
    >
      <form
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
          value={formState.size}
          onChange={(_event, newSizes) => {
            setFormState({
              ...formState,
              size: newSizes,
            });
          }}
          size="large"
          name="size"
          sx={{ mt: 1 }}
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
          onClick={() => {
            console.log(formState);
          }}
        >
          Add Product
        </Button>
      </form>
    </Box>
  );
};

export default ProductForm;
