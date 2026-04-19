import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // addToCart:(state,action)=>{
    //     state.push(action.payload);
    // },
    addToCart: (state, action) => {
      const existing = state.find((item) => item.id === action.payload.id);

      if (existing) {
        existing.quantity += 1; 
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    decreaseQty: (state, action) => {
      const item = state.find((i) => i.id === action.payload);

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          return state.filter((i) => i.id !== action.payload);
        }
      }
    },
  },
});

export const { addToCart, removeCart, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
