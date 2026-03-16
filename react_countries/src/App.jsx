import React from 'react'
import Home from './pages/Home'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import MainLayout from './component/Layout/MainLayout'
import Country from './pages/Country'
import ErrorPage from './pages/ErrorPage'
import "./App.css"
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import CountryDetails from './component/Layout/CountryDetails'

function App() {
  const routes=createBrowserRouter(
    [
      {
      path:"/",
      element:<MainLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path:"country",
          element:<Country/>
        },
        {
          path:"country/:id",
          element:<CountryDetails/>
        }
      ]
    }
    ]
  )
  return (
    <RouterProvider router={routes}/>
  )
}

export default App