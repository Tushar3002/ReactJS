import React from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import AppLayout from "./AppLayout";
import Contact from "./Contact";
import { ErrorPage } from "./ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        // {
        //   path:'*',
        //   element:<ErrorPage/>
        // } it wont work in this but will work in traditional way of using react router dom
      ],
    },
  ]);
  return <RouterProvider router={router} />;

  // return(
  //   <div>
  //     <Routes>
  //       <Route path='/' element={<Home/>}/>
  //       <Route path='/about' element={<About/>}/>
  //       <Route path='/contact' element={<Contact/>}/>
  //       <Route path='*' element={<ErrorPage/>}/>
  //     </Routes>
  //   </div>
  // )
}

export default App;
