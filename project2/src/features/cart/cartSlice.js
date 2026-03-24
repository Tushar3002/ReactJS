import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload);
        },
        removeCart:(state,action)=>{
            return state.filter(item=>item.id!==action.payload);
        }
    }
})

export const {addToCart,removeCart}=cartSlice.actions;
export default cartSlice.reducer;