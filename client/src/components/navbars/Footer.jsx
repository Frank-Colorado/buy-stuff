import { AppBar, Box, Toolbar, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'black',
          height: '4rem',
        }}
      >
        <Toolbar sx={{}}>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <IconButton
              aria-label="GitHub"
              href="https://github.com/Frank-Colorado/friendly-octo-disco.git"
              target="_blank"
              sx={{
                color: 'white',
                '&:hover': {
                  transform: 'scale(1.2)',
                  transition: '0.5s ease-in',
                },
              }}
            >
              <GitHubIcon
                sx={{
                  width: '2.5rem',
                  height: '2rem',
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
