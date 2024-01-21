import { Box, Typography, AppBar, Toolbar } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h1" color="secondary">
            Fresh n Stuff
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
