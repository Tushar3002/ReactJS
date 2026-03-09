import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Card from '../components/Card'

function Movie() {
    const [data,setData]=useState()
    const API="https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=interstellar&page=1"
    const getMovies=async()=>{
        try {
            const res=await axios.get(API)
            console.log(res.data.Search);
            setData(res.data.Search)
            
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        getMovies()
    },[])
  return (
    <ul className='movie-grid'>
        {data && data.map(ele=>{
            return <Card key={ele.imdbID} movie={ele}/>
        })}
    </ul>
  )
}

export default Movie