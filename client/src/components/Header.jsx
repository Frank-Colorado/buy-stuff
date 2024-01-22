import { Box, Typography, AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ height: '6.5rem' }}>
          <Typography
            component={Link}
            to="/"
            align="center"
            variant="h2"
            sx={{ fontWeight: 'bold', textDecoration: 'none', color: 'Black' }}
          >
            Odachi
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 7 }}>
            <Button
              component={Link}
              to="/register"
              variant="text"
              sx={{
                color: '#000000',
                backgroundColor: 'white',
                mr: 2,
                '&:hover': {
                  backgroundColor: '#000000',
                  color: 'white',
                },
              }}
            >
              Register
            </Button>
            <Button
              component={Link}
              to="/login"
              variant="text"
              sx={{
                color: '#000000',
                backgroundColor: 'white',
                '&:hover': {
                  borderBottom: '2px solid #000000',
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
