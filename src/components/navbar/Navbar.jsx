import React, { useRef } from "react";
import AbcIcon from "@mui/icons-material/Abc";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LiveTvIcon from "@mui/icons-material/LiveTv";

import "./navbar.css";
function Navbar() {
  const resultListRef = useRef(null);

  return (
    <div className="nav-div">
      <div className="live-tv">
        <LiveTvIcon
          style={{ fontSize: "40px", color: "white" }}
          variant="large"
        />
        Movies
      </div>
      <div className="navbar">
        <input
          id="movie-search-input"
          type="text"
          onFocus={()=>
            {resultListRef.current.style.display='block'}
          }
          onBlur={()=>{
            resultListRef.current.style.display='none'
          }}
          className="input-field"
          placeholder="search...."
        />
        <button className="search-btn">Search</button>
        <div className="result-list" ref={resultListRef}>
            <div className="result">result 1</div>
            <div className="result">result 1</div>
            <div className="result">result 1</div>
          
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
