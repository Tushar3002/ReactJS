import { createBrowserRouter, Navigate } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import About from "../Pages/About";
import GuestRoutes from "./GuestRoutes";
import Login from "../Pages/Login";
import PrivateLayout from "../layouts/PrivateLayout";
import DashBoard from "../Pages/DashBoard";
import Home from "../Pages/Home";
import Logout from "../Pages/Logout";
import ForgotPassword from "../Pages/ForgotPassword";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
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
        element: <GuestRoutes />, 
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/forgot",
            element: <ForgotPassword />,
          },
        ],
      },
    ],
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/login"} />,
  },
]);
