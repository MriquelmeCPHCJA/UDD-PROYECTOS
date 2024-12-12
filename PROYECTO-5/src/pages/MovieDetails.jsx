import { Typography, Container, Grid2 } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';

export const MovieDetails = () => {

    const location = useLocation();
    const movie = location.state?.movie;
    const IMG_POSTER = 'https://image.tmdb.org/t/p/original'

  return (
    <div style={{
      backgroundImage: `url(${IMG_POSTER}${movie.backdrop_path})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      // height: '70vh',
      // width: '100%',
      // position: 'relative',
      padding: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        borderRadius: '10px',
        // border: '1px solid white',
        width: '60%',
        padding: '5px',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
        
      }}>
        <div style={{
          color: 'white',
          border: '1px solid yellow',
          borderRadius: '10px',
        }}>
          <img src={`${IMG_POSTER}/${movie.poster_path}`} style={{
            width: '350px',
            height: '450px',
            borderRadius: '10px',
          }} />
          
        </div>

        <div style={{
          color: 'white',
          border: '1px solid green',
          }}>
          <div>
            <Typography variant="h4" style={{
              color: 'white',
              // textAlign: 'center',
              margin: '10px',
              padding: '0 20px'
            }}>
              {movie.title}
            </Typography>
          </div>
          <div>
            <p variant="h6" style={{
              color: 'white',
              // textAlign: 'center',
              margin: '10px',
              padding: '0 20px'
            }}>
              {movie.tagline}
            </p>
          </div>
          <div>
            <p variant="h6" style={{
              color: 'white',
              // textAlign: 'center',
              margin: '10px',
              padding: '0 20px'
            }}>
              <strong style={{textDecoration: 'underline'}}>Fecha de Lanzamiento:</strong> {movie.release_date}
            </p>
          </div>
          <div>
            <p variant="h6" style={{
              color: 'white',
              textAlign: 'justify',
              margin: '10px',
              padding: '0 20px'
            }}>
              <strong style={{
                textDecoration: 'underline',
                border: '1px solid white',
              }}>Descripción:</strong> {movie.overview}
            </p>
          </div>
          <div>
            <p variant="h6" style={{
              color: 'white',
              // textAlign: 'center',
              margin: '10px',
              padding: '0 20px'
            }}>
              {movie.vote_average} Votos
            </p>
          </div>
          <div>
            <p variant="h6" style={{
              color: 'white',
              // textAlign: 'center',
              margin: '10px',
              padding: '0 20px'
            }}>
              {movie.vote_count} votos
            </p>
          </div>
          <div>
            <p variant="h6" style={{
              color: 'white',
              // textAlign: 'center',
              margin: '10px',
              padding: '0 20px'
            }}>
              {movie.popularity} popularidad
            </p>
          </div>
          <div>
            <p variant="h6" style={{
              color: 'white',
              // textAlign: 'center',
              margin: '10px',
              padding: '0 20px'
            }}>
              {movie.original_language} idioma original
            </p>
          </div>
          <div>
            <p variant="h6" style={{
              color: 'white',
              // textAlign: 'center',
              margin: '10px',
              padding: '0 20px'
            }}>
              {movie.original_title} título original
            </p>
          </div>
          <div>
            <p variant="h6" style={{
              color: 'white',
              // textAlign: 'center',
              margin: '10px',
              padding: '0 20px'
            }}>
              {movie.adult ? 'Para adultos' : 'Para todo público'}
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}
