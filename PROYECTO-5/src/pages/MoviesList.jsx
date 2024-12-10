import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { CardContent, 
         CardMedia, 
         Typography, 
         CircularProgress, 
         Card, 
         CardActionArea, 
         Grid2, 
         Container,
         ButtonGroup,
         Button,
         Pagination } from '@mui/material';

import '../components/moviesList.css'

const API_KEY = 'f76d94834aca1cb630bca53ecf4e4c56'
const IMG_POSTER = 'https://image.tmdb.org/t/p/original'

export const MoviesList = () => {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(20)
  
  const changePage = (page) => {
    setPage(page)
  }

  const fetchMovies = () => {

    setLoading(true)

    const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`

    fetch(API_URL)
      .then(response => response.json())
      .then(data => { setMovies(data.results) })
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

                  {/* <CardContent sx={{backgroundColor: 'black'}}>
                    <Typography gutterBottom variant="h6" sx={{color: 'white'}}>
                      {movie.title}
                    </Typography>

                  </CardContent> */}
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
                      onChange={(event, newPage) => {
                        changePage(newPage);
                      }}
                      sx={{backgroundColor: 'white', borderRadius: '15px'}}
              />
          </Grid2>
      </>
    )

}
