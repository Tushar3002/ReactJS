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
      <AuthProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </AuthProvider>
      
    </>
  );
}

export default App;
