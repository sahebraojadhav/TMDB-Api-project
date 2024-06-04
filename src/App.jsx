import { useState } from 'react'
import './App.css'
import HomePage from './components/homepage/HomePage'
import Navbar from './components/navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HomePage/>
     hellow guys
    </>
  )
}

export default App
