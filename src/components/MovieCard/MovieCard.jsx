import React from 'react'
import './moviecard.css'
function MovieCard({Title,Year,Type,Poster}) {
  return (
    <div className='movie-card'>
       <div className="movie-image">
        <img src={Poster} alt="Image" />
       </div>
       <div className="movie-title">
        <span>{Title}</span>
       </div>
       <div className="movie-year">
        <span>Release in:{Year}</span>
       </div>
       <div className="movie-type">
        <span>Type:{Type}</span>
       </div>
    </div>
  )
}

export default MovieCard