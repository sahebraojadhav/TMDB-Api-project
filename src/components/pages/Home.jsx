import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Navbar from "../navbar/Navbar";
import "./Home.css";
import axios from "axios";
import { Movie } from "@mui/icons-material";
import StarIcon from '@mui/icons-material/Star';

import { searchMovie } from "../apis/omdb";

function Home() {
  const [MovieList, setMovieList] = useState([]);

  async function downloadDefaultMovie(...args) {
    const urls = args.map((name) => searchMovie(name));
    console.log(urls);
    const response = await axios.all(urls.map((url) => axios.get(url)));
    console.log(response);
    const movies = response.map((movieResponse) => movieResponse.data.Search);
    setMovieList([].concat(...movies));
  }

  useEffect(() => {
    downloadDefaultMovie("harry", "avengers", "batman");
  }, []);

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
          />
        ))}
      </div>
      <div className="rating-card">
        <h4>Give us rating</h4>
        <StarIcon/>
      </div>
    </div>
  );
}

export default Home;
