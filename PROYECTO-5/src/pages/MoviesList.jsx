import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { CardContent, 
         CardMedia, 
         Typography, 
         CircularProgress, 
         Card, 
         CardActionArea, 
         Grid2, 
         Pagination } from '@mui/material';

const API_KEY = import.meta.env.VITE_API_KEY

const marceloRiq = 'Af76d94834aca1cb630bca53ecf4e4c561'

const IMG_POSTER = 'https://image.tmdb.org/t/p/original'

export const MoviesList = () => {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(50)
  
  const changePage = (page) => {
    setPage(page)
  }

  const fetchMovies = () => {

    setLoading(true)

    const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}&language=es-MX`

    fetch(API_URL)
      .then(response => response.json())
      .then(data => { setMovies(data.results) })
      // La siguiente linea trae 47557 páginas, no es necesario
      // se adapto con la variable "page" para trabajar con useState en 50 páginas
      // .then( setTotalPages(Math.ceil(movies.total_pages)) ) 
      .catch(error => { 
        console.log('Error de Fetch: ', error)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchMovies()
  }, [page])

  if (loading) {
    return (
      <Grid2 
        container 
        justifyContent="center" 
        alignItems="center" 
        sx={{height: '100vh'}}>
      <CircularProgress />
      </Grid2>
    )
  }

    return (
      <>
        <Grid2 container spacing={4} sx={{
          padding: '20px', 
          backgroundColor: 'black', 
          color: 'white',
          alignItems: "center",
          justifyContent: "center"}}>
          {
          movies.map(movie => (
            <Grid2 item xs={12} md={6} lg={4} key={movie.id}>
              <Card sx={{backgroundColor: "black"}}>
                <CardActionArea
                  component={Link}
                  to={`/movie/${movie.title}`}
                  state={{movie}}
                >
                  <CardMedia
                    component="img"
                    height="420"
                    image={`${IMG_POSTER}/${movie.poster_path}`}
                    alt={movie.title}
                    sx={{objectFit: 'contain',  borderRadius: '15px'}}
                  />

                   <CardContent sx={{backgroundColor: 'black'}}>
                    <Typography 
                    gutterBottom 
                    variant="h6" 
                    sx={{
                      color: 'white',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      textAlign: 'center',
                      }}>
                      {movie.title}
                    </Typography>

                  </CardContent>  
                </CardActionArea>
              </Card>
            </Grid2>
          ))
          }

        </Grid2 >
        <Grid2 container spacing={4} sx={{
          padding: '20px', 
          backgroundColor: 'black', 
          color: 'white',
          alignItems: "center",
          justifyContent: "center"}}>

              <Pagination
                      color='primary'
                      count={totalPages}
                      page={page}
                      // este bloque es para activar las 47557 páginas
                      // onChange={(event, newPage) => {
                      //   changePage(newPage);
                      // }}
                      onChange={(event, page) => {
                        changePage(page);
                      }}
                      sx={{backgroundColor: 'white', borderRadius: '15px'}}
              />
          </Grid2>
      </>
    )

}
