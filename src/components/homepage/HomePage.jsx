import React from 'react'
import HomePageRender from './HomePageRender'
import "./homepage.css"

function HomePage() {
  return (
    <>
     <div className='home-div'>
      <HomePageRender/>
      <HomePageRender/>
      <HomePageRender/>
      <HomePageRender/>
     </div>
     <button>next</button>
     <button>Prev</button>
    </>
   
    
  )
}

export default HomePage
