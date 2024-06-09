import React from "react";
import AbcIcon from '@mui/icons-material/Abc';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LiveTvIcon from '@mui/icons-material/LiveTv';

import "./navbar.css";
function Navbar() {

 

  return (
    <div className="nav-div">
      <div className="live-tv">
      <LiveTvIcon style={{fontSize:'40px',color:"white"}} variant="large"/>
       Movies
      </div>
      <div className="navbar">
        <input type="text" className="input-field" placeholder="search...." />
        <button className="search-btn">Search</button>
      </div>
      <div className="night-mode">
      <ModeNightIcon style={{fontSize:'50px',color:"white"}} className="navbar-icon"/> 
      </div>
    </div>
  );
}

export default Navbar;
