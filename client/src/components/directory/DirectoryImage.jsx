// MUI components
import { Box, Typography } from '@mui/material';
// React Router components
import { Link } from 'react-router-dom';

const DirectoryImage = ({ image, title }) => {
  return (
    <Box
      style={{
        backgroundImage: `url(${image})`,
      }}
      sx={{
        width: '50%',
        height: '100%',
        float: 'left',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
      >
        <Typography
          component={Link}
          to={`/collections/${title}`}
          variant="button"
          sx={{
            fontWeight: 'bold',
            textDecoration: 'none',
            color: 'black',
            backgroundColor: 'white',
            padding: '0.5rem',
            background: 'linear-gradient(to left, white 50%, black 50%) right',
            backgroundSize: '200%',
            transition: 'all 0.5s ease',
            '&:hover': {
              color: 'white',
              backgroundPosition: 'left',
            },
          }}
        >
          Shop {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default DirectoryImage;
