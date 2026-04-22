import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import AddProduct from "../pages/AddProduct";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PublicLayout from "../layouts/PublicLayout";
import GuestRoute from "./GuestRoute";
import { getProducts } from "../api/api";
import Checkout from "../pages/Checkout";
import Success from "../pages/Success";
import AdminRoute from "./AdminRoute";
import AdminDashBoard from "../pages/AdminDashBoard";
import AdminProducts from "../pages/AdminProducts";
import PrivateLayout from "../layouts/PrivateLayout";

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      
      {
        element: <GuestRoute />,
        children: [
          { path: "/login", element: <Login /> },
          { path: "/register", element: <Register /> },
        ],
      },
      {
        element: <AdminRoute />,
        children: [
          {
            path: "/admin",
            element: <AdminDashBoard />,
          },
          {
            path: "/add-product",
            element: <AddProduct />,
          },
          {
            path:"/admin/products",
            element:<AdminProducts/>
          }
        ],
      },
    ],
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ]
  }
]);

export default router;
