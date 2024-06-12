import {Routes,Route} from 'react-router-dom'

import React from 'react'
import MovieDetails from '../pages/MovieDetails'
import Home from '../pages/Home'
import Error from '../pages/Error'

function Mainroutes() {
  return (
    <Routes>
      {/*Routes contain multiple route*/}
      <Route path='/' element={<Home/>}/>
      <Route path='/movie/:id' element={<MovieDetails/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
  )
}

export default Mainroutes
