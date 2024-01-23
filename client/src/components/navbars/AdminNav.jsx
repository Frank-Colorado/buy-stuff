import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminNav = () => {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'black',
        display: 'flex',
        justifyContent: 'end',
      }}
    >
      <Typography
        component={Link}
        to="/admin"
        sx={{ color: 'white', textDecoration: 'none', mr: 5 }}
      >
        Admin
      </Typography>
    </Box>
  );
};

export default AdminNav;
