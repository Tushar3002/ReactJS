import React from "react";
import Navbar from "./components/Navbar";
import { Outlet, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import { Provider } from "react-redux";
import { store } from "./store";
import router from "./routes/router";
function App() {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </Provider>
    </>
  );
}

export default App;