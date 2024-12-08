import React from 'react'
import { Link } from 'react-router-dom'
import '../components/home.css'

export const Home = () => {
  return (
    <div className='container-home'>
      <div>
        <h2 className='titulo-home'>MARFLIX</h2>
      </div>
      <div>
      <Link to="/movies" className='btn-explorar'>EXPLORAR</Link>
      </div>
      
    </div>
  )
}
