import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const DirectoryImage = ({ image, name }) => {
  console.log(name);
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
        '&::after': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        },
      }}
    >
      <Typography
        component={Link}
        to={`/${name}`}
        variant="h3"
        sx={{
          position: 'relative',
          zIndex: 2,
          color: 'white',
          textDecoration: 'none',
          textAlign: 'center',
          marginTop: '20rem',
          fontWeight: 'bold',
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default DirectoryImage;
