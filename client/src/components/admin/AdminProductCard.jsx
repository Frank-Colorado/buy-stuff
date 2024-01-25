import {
  Grid,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from '@mui/material';

const AdminProductCard = () => {
  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          alt="placeholder"
          height="75"
          sx={{ width: '30%', border: '1px solid black' }}
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQIDBQQH/8QANBAAAgECAwUFBwMFAAAAAAAAAAECAxEEITESMkFRchMiYXGBBTNCQ1KR8BQjsWKhwdHh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7iAAAAAAGU68Iu17vwA1IbSV3kjzSxE3uxsUcXO0pO7WYHsuSePacdYNeKkHUfKYHrbS1EZKSunc8SlKWkLLxZWUZQe3FtSbzswOgDxRxNSOtpL7M3p4mnPK7i/EDYAAAAAAAAAADKrVUMrXlyJxFVUaMqj0ijx0ZXSlJ3b1YGlRynvPLkiIxSL2vFBICLErImxFgLZSHZrkVAEyaisjJ5mlhYDPZK7K5G1hYDODlC7i2s9OB6KNZTey8pcuZjLJI89WUo9+G9DvAdQFYSU4qUdGrosAAAAAAeD2tL9unSvvzV/JMxoNpzg9VmZ+05udfL4cl6Fqk1HE06nw1Fr5geqjK5ojxUqmxibcHwPYgLAhMkCLCxIAWIsLkgLEMMrJ2QFajskzCrJQw1Wo+Ksia1TaUYx4tnmxE+0nToR55gdL2fPaoKL1hZf2v/k9RzcBUSxteHCWnovz7HSAAAAUrT7OnKb4IuefGqcoRUFdbXe8gOZWW49bakOPaUJUXvRzj4r/hvUgs73SfqV2HKKaa2lo1wKObTrVHi6bl8Lz8TuRdzmSwrxGNpNdxxblOPOy4etj30pXzA3JRVEkEtkMAAEyABJlVlZGhhXbast56AcnF46dKpGnSp7dThyR6PZ0ZrarYh5pXlYzjgZU/aVfammk1s35WPc1HZ2E+7rK3Eoww83SnCrLXau/XX+TunIVOdSOxTidSjGUaUIzd5JWbILgAAAAKTpQnvLMweDje8ZNHqAHnw+GVKcptpyat5I8dLu5csjqHM0qzX9TA2RYoiwEggkACABLMG/36fUjZ6GHz6XUgPXVwkKlXtHdStYvGhTj8JqAISSySSRIAAAAAAAAAA5kvfz6mdM5kvfT6mBoixVE3Am5JUlMCQVuSAbMfn0+pGrMvnQ6kB0wAAAAAAAAAAAAA5svez6mdI5r95LqYF0CESABFxcCQQADKfMh1Fyj3l4MDpgAAAAAAAAAAAABzHvy82dM5r3n5gSmSVTFwJBUAWFypIEkMkh6AdIEIkAAAAAAAAAAABzms2zonieFnFvYeXmBkQa/p6vL+P9kdhW+lfnqBmDTsKttxfnqOxq/QBmC/Y1voJWHrPhb7AUJLrDVeLRb9JKW80B6oZxT8CxEVZEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k="
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '70%',
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="h7">Product Name</Typography>
            <Typography variant="h7">Product Price</Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: '4.5rem',
                bgcolor: 'red',
              }}
            >
              Delete
            </Button>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default AdminProductCard;
