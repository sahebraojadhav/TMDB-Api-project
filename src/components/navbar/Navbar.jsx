import React from "react";
import AbcIcon from '@mui/icons-material/Abc';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LiveTvIcon from '@mui/icons-material/LiveTv';

import "./navbar.css";
function Navbar() {

 

  return (
    <div className="nav-div">
      <LiveTvIcon style={{fontSize:'60px'}} variant="large"/>
      <div className="navbar">
        <input type="text" className="input-field" placeholder="search...." />
        <button className="search-btn">Search</button>
      </div>
    <ModeNightIcon style={{fontSize:'50px'}} className="navbar-icon"/> 
    </div>
  );
}

export default Navbar;
