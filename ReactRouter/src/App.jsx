import React from 'react'
import { Routes, Route, Link, Navigate } from 'react-router'
import Home from './Home.jsx'
import About from './About.jsx'
import Navbar from './Navbar.jsx'
import PageNotFound from './PageNotFound.jsx'
import College from './College.jsx'
import Student from './Student.jsx'
import Department from './Department.jsx'
import Details from './Details.jsx'
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/user'>
          
          <Route path='about' element={<About />} />
        </Route>
        
   
        <Route path='/college' element={<College />}>
          <Route path='student' element={<Student />} />
          <Route path='department' element={<Department />} />
          <Route path='details' element={<Details />} />
        </Route>
        
        <Route path='/student' element={<Student />}/>

        <Route path='/student/:id' element={<Details/>}/>


        {/* <Route path='*' element={<PageNotFound/>} /> */}
        {/* <Route path='*'  element={<Navigate to='/' />} /> */}

      </Routes>
    </div>
  )
}

export default App
