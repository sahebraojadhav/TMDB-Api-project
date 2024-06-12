import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { searchMovieById } from '../apis/omdb';
import MovieCard from '../MovieCard/MovieCard';
import Navbar from '../navbar/Navbar';
import './movie-details.css'
import {Rating} from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'

function MovieDetails() {
  const [movie,setMovie]=useState({});
  const {id}=useParams();

  const downloadMovie=async ()=>{
    const response=await axios.get(searchMovieById(id));
    console.log(response.data);
    setMovie(response.data);
    console.log(movie);
  }

  useEffect(()=>{
    downloadMovie();
  },[id])

  

  return (
    <>
    <Navbar/>
     <div className="main-div">
     <div className='movie-detils'>
       {movie && <MovieCard
        Title={movie.Title}
        Year={movie.Year}
        Type={movie.Type}
        Poster={movie.Poster}
        id={movie.imdbID}
       />} 
      </div>
      
      <div className="movie-details-second-part">
      {
          movie && <div className="movie-details-second">
            <div className='movie-info'>
              Plot: {movie.Plot}
            </div>
            <div className='movie-info'>
              Actors: {movie.Actors}
            </div>
            
            <div className='movie-info'>
             Rating:<Rating items={10} value={Math.floor(movie.imdbRating)} style={{maxWidth:100}}/>
            </div>
          </div>
        }
      </div>
     </div>
    </>
   
  )
}

export default MovieDetails
