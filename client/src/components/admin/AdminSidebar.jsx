// MUI components
import { Box, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const AdminSidebar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 5,
      }}
    >
      <AccountCircleIcon sx={{ fontSize: 80 }} />
      <Typography variant="h2" textAlign="center" sx={{ mt: 2 }}>
        Admin
      </Typography>
    </Box>
  );
};

export default AdminSidebar;
