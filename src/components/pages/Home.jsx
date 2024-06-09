import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import Navbar from '../navbar/Navbar'
import './Home.css'
import axios from 'axios'
import { Movie } from '@mui/icons-material'

import {searchMovie} from '../apis/omdb'

function Home() {
  const[MovieList,setMovieList]=useState([]);

  async function downloadDefaultMovie(movieName){
    const response=await axios.get(searchMovie(movieName));
    console.log(response.data);
    setMovieList(response.data.Search);
  }

  useEffect(()=>{
    downloadDefaultMovie('harry');
  },[])
  

  return (
    <div>
      {/*navbar*/}
      {/*MovieList*/}
      {/*pagination button*/}
      <Navbar/>
      <div className="movie-card-div">
     {
       MovieList.map((movie,idx)=>(<MovieCard key={idx} Title={movie.Title} Year={movie.Year} Type={movie.Type} Poster={movie.Poster}/>))
     }

      

      </div>

      
    </div>
  )
}

export default Home
