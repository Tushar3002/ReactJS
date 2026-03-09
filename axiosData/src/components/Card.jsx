import React from 'react'
// import { NavLink } from 'react-router-dom'


function Card({ movie }) {
  return (
    <li className="movie-card">
      <div className="card">
        <img 
          src={movie.Poster} 
          alt={movie.Title} 
          className="poster"
        />

        <div className="card-content">
          <h3>{movie.Title}</h3>
          <p>Year: {movie.Year}</p>
        </div>
        {/* <NavLink to={`/movie/${movie.imdbID}`}>
            <button>Watch</button>
        </NavLink> */}
      </div>
    </li>
  )
}

export default Card