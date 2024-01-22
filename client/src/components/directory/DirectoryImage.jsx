import { Box, Typography } from '@mui/material';
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
          to={`/${title}`}
          variant="button"
          sx={{
            fontWeight: 'bold',
            textDecoration: 'none',
            color: 'black',
            backgroundColor: 'white',
            border: '1px solid black',
            padding: '0.5rem',
          }}
        >
          Shop {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default DirectoryImage;
