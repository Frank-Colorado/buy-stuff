// MUI components
import { Grid, Box, CircularProgress } from '@mui/material';
// GraphQL hooks
import { useQuery } from '@apollo/client';
import { QUERY_ORDER_BY_ID } from '../graphql/queries';
// React Router hooks
import { useParams } from 'react-router-dom';

const OrderPage = () => {
  // Get the order ID from the URL
  const { id } = useParams();
  // Query the order data
  const { loading, error, data } = useQuery(QUERY_ORDER_BY_ID, {
    variables: { orderId: id },
  });

  console.log(error);

  const order = data?.getOrder || {};
  console.log(order);

  return (
    <Grid
      container
      sx={{
        minHeight: 'calc(100vh - 10.5rem)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid item xs={12} md={10} lg={8}>
          {/** Order details */}
        </Grid>
      )}
    </Grid>
  );
};

export default OrderPage;
