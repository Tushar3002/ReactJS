import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./componenets/Pages/Home";
import FetchOld from "./componenets/Pages/FetchOld";
import FetchRQ from "./componenets/Pages/FetchRQ";
import MainLayout from "./componenets/Layout/MainLayout";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FetchRQDetails from "./componenets/UI/FetchRQDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/old",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
      },
      {
        path: "/rq/:id",
        element: <FetchRQDetails />,
      },
    ],
  },
]);
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
