import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CardContent, CardMedia, Typography, CircularProgress, Card, CardActionArea, Grid2 } from '@mui/material';

import '../components/moviesList.css'

const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'f76d94834aca1cb630bca53ecf4e4c56'
const IMG_POSTER = 'https://image.tmdb.org/t/p/original'

export const MoviesList = () => {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    setLoading(true)

    fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => { setMovies(data.results) })
      .catch(error => console.error(error))
      .finally(() => setLoading(false))
  }, []);

  if (!loading) {
    return (
      <Grid2 container spacing={2} sx={{padding: '20px'}}>
        {
        movies.map(recipe => (
          <Grid2 item key={recipe.id} xs={12} md={6} lg={4}>
            <Card>
              <CardActionArea
              component={Link}
              to={`/recetas/${recipe.title}`}
              state={{recipe}}
              >
                <CardMedia
                  component="img"
                  // width="10%"
                  height="300px"
                  image={`${IMG_POSTER}/${recipe.poster_path}`}
                  alt={recipe.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {recipe.title}
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
