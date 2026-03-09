import React from 'react'
import { useLoaderData } from 'react-router-dom'

function MovieDetails() {
  const movieDetail = useLoaderData()
  console.log(movieDetail)

  return (
    <div className="movie-detail-container">

      <div className="movie-detail-card">

        <div className="poster-section">
          <img src={movieDetail.Poster} alt={movieDetail.Title} />
        </div>

        <div className="info-section">
          <h1>{movieDetail.Title}</h1>

          <p className="tagline">
            {movieDetail.Year} • {movieDetail.Runtime} • {movieDetail.Rated}
          </p>

          <p><strong>Genre:</strong> {movieDetail.Genre}</p>
          <p><strong>Director:</strong> {movieDetail.Director}</p>
          <p><strong>Actors:</strong> {movieDetail.Actors}</p>
          <p><strong>Language:</strong> {movieDetail.Language}</p>
          <p><strong>Country:</strong> {movieDetail.Country}</p>

          <p className="plot">
            <strong>Plot:</strong> {movieDetail.Plot}
          </p>

          <div className="ratings">
            ⭐ IMDb Rating: {movieDetail.imdbRating} / 10  
            <br />
            🎬 Awards: {movieDetail.Awards}
          </div>

        </div>

      </div>

    </div>
  )
}

export default MovieDetails