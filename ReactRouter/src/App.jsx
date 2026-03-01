import React from 'react'
import { Routes, Route, Link, Navigate } from 'react-router'
import Home from './Home.jsx'
import About from './About.jsx'
import Navbar from './Navbar.jsx'
import PageNotFound from './PageNotFound.jsx'
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='*' element={<PageNotFound/>} /> */}
        <Route path='*'  element={<Navigate to='/' />} />
      </Routes>
    </div>
  )
}

export default App
