import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'


import React from 'react'
import Home from './pages/Home';

function App() {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    }
  ])

    return <RouterProvider router={router}/>;
  
}

export default App
