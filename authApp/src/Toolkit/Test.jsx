//slice  //not used just reference /auth/authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const initialState = {
  user: token ? { token } : null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const data = action.payload;
      localStorage.setItem("token", data.token);
      state.user = data.user;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.user = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { login, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;



// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});


// main.jsx or index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);



import { useSelector } from "react-redux";

const user = useSelector((state) => state.auth.user);




import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

const dispatch = useDispatch();

dispatch(login({
  token: "abc123",
  user: { name: "John" }
}));




// 🔁 If you used Redux Toolkit instead

// This line:

// const { user, loading } = useAuth();

// becomes:

import { useSelector } from "react-redux";

const user1 = useSelector((state) => state.auth.user);
const loading = useSelector((state) => state.auth.loading);

// Everything else stays almost the same:

return user ? <Navigate to="/dashboard" /> : <Outlet />;