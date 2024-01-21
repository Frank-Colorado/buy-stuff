import { Box, Typography, AppBar, Toolbar } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ height: '6.5rem' }}>
          <Typography align="center" variant="h2">
            Fresh n Stuff
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
