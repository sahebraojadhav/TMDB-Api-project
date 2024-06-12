import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Navbar from "../navbar/Navbar";
import "./Home.css";
import axios from "axios";
import { Movie } from "@mui/icons-material";
import StarIcon from '@mui/icons-material/Star';

import { searchMovie } from "../apis/omdb";
import useMovieList from "../hooks/useMovieList";

function Home() {

  const [MovieList]=useMovieList('harry','avengers','batman');

  return (
    <div className="main-home-div">
      {/*navbar*/}
      {/*MovieList*/}
      {/*pagination button*/}
      <Navbar />
      <div className="movie-card-div">
        {MovieList.map((movie, idx) => (
          <MovieCard
            key={idx}
            Title={movie.Title}
            Year={movie.Year}
            Type={movie.Type}
            Poster={movie.Poster}
            id={movie.imdbID}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Home;
