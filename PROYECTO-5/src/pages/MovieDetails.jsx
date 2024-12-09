import { Typography, Container } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';

export const MovieDetails = () => {

    const location = useLocation();
    const movie = location.state?.movie;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {movie.title}
      </Typography>
    </Container>
  )
}
