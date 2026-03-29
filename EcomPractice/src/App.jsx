import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import MainLayout from "./Layout/MainLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/auth",
          element: <Auth />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
      ],
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
