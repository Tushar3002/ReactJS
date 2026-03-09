import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from './Card';

function Movie() {
    const moviesData=useLoaderData()
    console.log(moviesData);


    
  return (
    <div>Movie

        <ul className="movie-grid">
            {moviesData && moviesData.Search.map((movie)=>{
                return <Card key={movie.imdbID} movie={movie}/>
            })}
        </ul>
    </div>
    
  )
}

export default Movie