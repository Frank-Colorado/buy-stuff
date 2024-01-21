import { Box, Typography, AppBar, Toolbar } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: '6.5rem' }}>
        <Toolbar>
          <Typography variant="h2">Fresh n Stuff</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
