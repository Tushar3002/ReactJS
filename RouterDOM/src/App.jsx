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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
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
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;

  // return(
  //   <div>
  //     <Routes>
  //       <Route path='/' element={<Home/>}/>
  //       <Route path='/about' element={<About/>}/>
  //     </Routes>
  //   </div>
  // )
}

export default App;
