import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CardContent, CardMedia, Typography, CircularProgress, Card, CardActionArea, Grid2 } from '@mui/material';

import '../components/moviesList.css'


const API_KEY = 'f76d94834aca1cb630bca53ecf4e4c56'
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
const IMG_POSTER = 'https://image.tmdb.org/t/p/original'

export const MoviesList = () => {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setLoading(true)

    fetch(API_URL)
      .then(response => response.json())
      .then(data => { setMovies(data.results) })
      .catch(error => { 
        console.log('Error de Fetch: ', error)
      })
      .finally(() => setLoading(false))
  }, []);

  if (!loading) {
    return (
      <Grid2 container spacing={2} sx={{padding: '20px', backgroundColor: 'black', color: 'white'}}>
        {
        movies.map(movie => (
          <Grid2 item xs={12} md={6} lg={4} key={movie.id}>
            <Card>
              <CardActionArea
                component={Link}
                to={`/movie/${movie.title}`}
                state={{movie}}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={`${IMG_POSTER}/${movie.poster_path}`}
                  alt={movie.title}
                />
                <CardContent sx={{backgroundColor: 'black'}}>
                  <Typography gutterBottom variant="h6" sx={{color: 'white'}}>
                    {movie.title}
                  </Typography>

                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        ))
        }
      </Grid2>
    )
  } else {
      return (
        <Grid2 container justifyContent="center" alignItems="center" sx={{height: '100vh'}}>
        <CircularProgress size="5rem" />
        </Grid2>
      )
   }

}
