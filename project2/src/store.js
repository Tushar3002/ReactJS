import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice"; //any name instead of cartReducer


export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});