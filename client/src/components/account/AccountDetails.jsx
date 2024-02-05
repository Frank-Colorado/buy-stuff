// MUI components
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
// React Router
import { Link } from 'react-router-dom';

const AccountDetails = ({ orders }) => {
  return (
    <Box>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ORDER</TableCell>
              <TableCell>DATE</TableCell>
              <TableCell>PAYMENT STATUS</TableCell>
              <TableCell>FULFILLMENT STATUS</TableCell>
              <TableCell>TOTAL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => {
              const date = new Date(
                parseInt(order.purchaseDate)
              ).toLocaleDateString();

              return (
                <TableRow key={order._id}>
                  <TableCell component="th" scope="row" sx={{ width: '20%' }}>
                    <Typography
                      component={Link}
                      to={`account/orders/${order._id}`}
                      variant="subtitle1"
                      sx={{
                        width: 'fit-content',
                        textDecoration: 'none',
                        color: 'black',
                        '&::after': {
                          content: '""',
                          display: 'block',
                          width: '100%',
                          height: '1px',
                          backgroundColor: 'black',
                          transition: 'transform .5s ease',
                          transformOrigin: 'left',
                        },
                        '&:hover::after': {
                          transform: 'scaleX(0)',
                        },
                      }}
                    >
                      #{order._id}
                    </Typography>
                  </TableCell>
                  <TableCell>{date}</TableCell>
                  <TableCell>
                    {order.paymentStatus ? 'PAID' : 'UNPAID'}
                  </TableCell>
                  <TableCell>
                    {order.fulfillmentStatus ? 'FULFILLED' : 'PENDING'}
                  </TableCell>
                  <TableCell>${order.subtotal}.00</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AccountDetails;
