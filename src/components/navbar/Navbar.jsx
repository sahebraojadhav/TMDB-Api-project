import React, { useRef, useState } from "react";
import AbcIcon from "@mui/icons-material/Abc";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import "./navbar.css";
import useMovieList from "../hooks/useMovieList";
import { Movie } from "@mui/icons-material";
import useDebounce from "../hooks/useDebounce";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Navbar() {
  const resultListRef = useRef(null);
  const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [movieList] = useMovieList(searchTerm);
  const navigator=useNavigate();

  console.log("movieList", movieList);

  function handleAutoCompleteClick(e,movieImdbId){
    console.log("we are on 19")
    console.log(e.target,movieImdbId);
    navigator(`/movie/${movieImdbId}`);
  }

  return (
    <div className="nav-div">
      <div className="live-tv">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <LiveTvIcon
          style={{ fontSize: "40px", color: "white" }}
          variant="large"
        />
        Movies
        </Link>
      </div>
      <div className="navbar">
        <input
          id="movie-search-input"
          type="text"
          onFocus={() => setIsAutoCompleteVisible(true)}
          onBlur={() => {
            setIsAutoCompleteVisible(false);
          }}
          onChange={useDebounce((e) => {
            setSearchTerm(e.target.value);
          })}
          className="input-field"
          placeholder="search...."
        />
        <button className="search-btn">Search</button>
        <div
          className="result-list"
          style={{ display: isAutoCompleteVisible ? "block" : "none" }}
        >
          AutoComplete results are here...
          {movieList &&
            movieList.map((movie) => (
              <div key={movie.imdbID} className="autocomplete-result" onMouseDown={(e)=>handleAutoCompleteClick(e,movie.imdbID)}>
                {movie.Title}
              </div>
            ))}
        </div>
      </div>
      <div className="night-mode">
        <ModeNightIcon
          style={{ fontSize: "50px", color: "white" }}
          className="navbar-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
