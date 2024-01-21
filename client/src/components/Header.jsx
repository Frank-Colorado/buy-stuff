import { Box, Typography, AppBar, Toolbar } from '@mui/material';
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
            sx={{ fontWeight: 'bold', textDecoration: 'none', color: 'white' }}
          >
            Fresh n Stuff
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
