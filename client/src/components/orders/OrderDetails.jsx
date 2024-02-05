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

const OrderDetails = ({ order }) => {
  // Get the products and subtotal from the order object
  const { products, subtotal } = order;
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
      }}
    >
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>PRODUCT</TableCell>
              <TableCell align="center">QUANTITY</TableCell>
              <TableCell align="right">TOTAL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={`${product.productId._id}-${product.selectedSize}`}
              >
                <TableCell
                  sx={{
                    width: '35%',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src={product.productId.imageUrl}
                      alt={product.productId.name}
                      style={{ width: '50px', height: '50px' }}
                    />
                    <Box
                      sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}
                    >
                      <Typography
                        component={Link}
                        to={`/products/${product.productId._id}`}
                        variant="subtitle1"
                        sx={{
                          textDecoration: 'none',
                          color: 'black',
                        }}
                      >
                        {product.productId.name}
                      </Typography>
                      <Typography variant="subtitle2">
                        {product.selectedSize}
                      </Typography>
                      <Typography variant="subtitle2">
                        ${product.productId.price}.00
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="center">{product.quantity}</TableCell>
                <TableCell align="right">
                  ${product.productId.price * product.quantity}.00
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          mt: 2,
          width: '25%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h7" textTransform="uppercase">
          subtotal
        </Typography>
        <Typography
          variant="h7"
          sx={{
            mr: 2,
          }}
        >
          ${subtotal}.00
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderDetails;
