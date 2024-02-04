// React hooks
import { useState, useEffect } from 'react';
// MUI components
import { Grid, Typography, TextField, Button } from '@mui/material';
// React Country Selector
import { CountryDropdown } from 'react-country-region-selector';
// GraphQL hooks
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../graphQL/queries';
// Stripe API
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

// Initial state for the address portion of the form
const initialAddressState = {
  line1: '',
  line2: '',
  city: '',
  state: '',
  zip: '',
  country: '',
};

const CheckoutDetails = () => {
  // State for the form
  const [shippingAddress, setShippingAddress] = useState({
    ...initialAddressState,
  });
  const [billingAddress, setBillingAddress] = useState({
    ...initialAddressState,
  });
  const [recipientName, setRecipientName] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');

  // GraphQL query to get the checkout session
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  // useEffect hook to handle the checkout session data
  useEffect(() => {
    if (data) {
      stripePromise.then((stripe) => {
        stripe.redirectToCheckout({
          sessionId: data.checkout.session,
        });
      });
    }
  }, [data]);

  // Handle shipping address changes
  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value,
    });
  };

  // Handle billing address changes
  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingAddress({
      ...billingAddress,
      [name]: value,
    });
  };

  // Handle recipient name change
  const handleRecipientNameChange = (e) => {
    setRecipientName(e.target.value);
  };

  // Handle name on card change
  const handleNameOnCardChange = (e) => {
    setNameOnCard(e.target.value);
  };

  // Handle form submit
  const handleFormSubmit = async (e) => {
    // Prevent the default form behavior
    e.preventDefault();
    // Create an object to hold the form data
    const checkoutData = {
      guestEmail: '',
      shippingAddress: {
        name: recipientName,
        ...shippingAddress,
      },
      billingAddress: {
        name: nameOnCard,
        ...billingAddress,
      },
    };
    // Get the cart items from local storage
    const cart = JSON.parse(localStorage.getItem('userCart'));
    // Use the getCheckout query to get the checkout session
    getCheckout({
      variables: {
        items: cart,
        form: checkoutData,
      },
    });
  };

  return (
    <Grid
      item
      xs={12}
      sm={8}
      sx={{
        my: 2,
      }}
    >
      <form onSubmit={handleFormSubmit}>
        <Typography variant="h5" textTransform="uppercase" sx={{ mb: 2 }}>
          Shipping Address
        </Typography>
        <TextField
          value={recipientName}
          onChange={handleRecipientNameChange}
          name="recipientName"
          required
          size="small"
          placeholder="Recipient Name"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          value={shippingAddress.line1}
          onChange={handleShippingChange}
          name="line1"
          required
          size="small"
          placeholder="Address Line 1"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          value={shippingAddress.line2}
          onChange={handleShippingChange}
          name="line2"
          size="small"
          placeholder="Address Line 2"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          value={shippingAddress.city}
          onChange={handleShippingChange}
          name="city"
          required
          size="small"
          placeholder="City"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          value={shippingAddress.state}
          onChange={handleShippingChange}
          name="state"
          required
          size="small"
          placeholder="State"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          value={shippingAddress.zip}
          onChange={handleShippingChange}
          name="zip"
          required
          size="small"
          placeholder="Zip Code"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <CountryDropdown
          value={shippingAddress.country}
          onChange={(val) =>
            handleShippingChange({
              target: {
                name: 'country',
                value: val,
              },
            })
          }
          required
          valueType="short"
          style={{
            width: '100%',
            fontSize: '1rem',
            lineHeight: '1',
            fontWeight: '400',
            textAlign: 'left',
            padding: '10px, 5px',
            margin: '10px auto',
            height: '40px',
            border: '1px solid rgba(0, 0, 0, 0.23)',
            borderRadius: '4px',
            outline: 'none',
          }}
        />

        <Typography variant="h5" textTransform="uppercase" sx={{ mb: 2 }}>
          Billing Address
        </Typography>
        <TextField
          value={nameOnCard}
          onChange={handleNameOnCardChange}
          name="nameOnCard"
          required
          size="small"
          placeholder="Name on Card"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          value={billingAddress.line1}
          onChange={handleBillingChange}
          name="line1"
          required
          size="small"
          placeholder="Address Line 1"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          value={billingAddress.line2}
          onChange={handleBillingChange}
          name="line2"
          size="small"
          placeholder="Address Line 2"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          value={billingAddress.city}
          onChange={handleBillingChange}
          name="city"
          required
          size="small"
          placeholder="City"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          value={billingAddress.state}
          onChange={handleBillingChange}
          name="state"
          required
          size="small"
          placeholder="State"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          value={billingAddress.zip}
          onChange={handleBillingChange}
          name="zip"
          required
          size="small"
          placeholder="Zip Code"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <CountryDropdown
          value={billingAddress.country}
          onChange={(val) =>
            handleBillingChange({
              target: {
                name: 'country',
                value: val,
              },
            })
          }
          required
          valueType="short"
          style={{
            width: '100%',
            fontSize: '1rem',
            lineHeight: '1',
            fontWeight: '400',
            textAlign: 'left',
            padding: '10px, 5px',
            margin: '10px auto',
            height: '40px',
            border: '1px solid rgba(0, 0, 0, 0.23)',
            borderRadius: '4px',
            outline: 'none',
          }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Continue to Payment
        </Button>
      </form>
    </Grid>
  );
};

export default CheckoutDetails;
