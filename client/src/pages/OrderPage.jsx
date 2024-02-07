// My components
import OrderHeader from '../components/orders/OrderHeader';
import OrderDetails from '../components/orders/OrderDetails';
// MUI components
import { Grid, Box, CircularProgress } from '@mui/material';
// GraphQL hooks
import { useQuery } from '@apollo/client';
import { QUERY_ORDER_BY_ID } from '../graphQL/queries';
// React Router hooks
import { useParams } from 'react-router-dom';

const OrderPage = () => {
  // Get the order ID from the URL
  const { id } = useParams();
  // Query the order data
  const { loading, error, data } = useQuery(QUERY_ORDER_BY_ID, {
    variables: { orderId: id },
  });

  const order = data?.getOrder || {};

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
          <OrderHeader order={order} />
          <OrderDetails order={order} />
        </Grid>
      )}
    </Grid>
  );
};

export default OrderPage;
