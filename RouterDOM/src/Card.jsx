import React from 'react'

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
      </div>
    </li>
  )
}

export default Card