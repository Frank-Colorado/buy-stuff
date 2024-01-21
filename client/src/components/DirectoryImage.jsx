import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const DirectoryImage = ({ image, name }) => {
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
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.3)',
          zIndex: 1,
        },
      }}
    >
      <Typography
        component={Link}
        to="/{name}"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          webkitTransform: 'translate(-50%, -50%)',
          MozTransform: 'translate(-50%, -50%)',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          textTransform: 'uppercase',
          background: 'white',
          color: 'black',
          padding: '8px 10px',
          border: '1px solid black',
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default DirectoryImage;
