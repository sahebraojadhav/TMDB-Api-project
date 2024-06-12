import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { searchMovieById } from '../apis/omdb';
import MovieCard from '../MovieCard/MovieCard';
import Navbar from '../navbar/Navbar';
import './movie-details.css'

function MovieDetails() {
  const [movie,setMovie]=useState({});
  const {id}=useParams();

  const downloadMovie=async ()=>{
    const response=await axios.get(searchMovieById(id));
    console.log(response.data);
    setMovie(response.data);
  }

  useEffect(()=>{
    downloadMovie();
  },[id])

  return (
    <>
    <Navbar/>
     <div className='movie-detils'>
       {movie && <MovieCard
        Title={movie.Title}
        Year={movie.Year}
        Type={movie.Type}
        Poster={movie.Poster}
       />} 
    </div>
    </>
   
  )
}

export default MovieDetails
