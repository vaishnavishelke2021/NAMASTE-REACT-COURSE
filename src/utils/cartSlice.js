import { createSlice } from "@reduxjs/toolkit";


const cartSlice =  createSlice({
    name: 'cart',
    initialState: {
        items : ['pizza', 'burgir']
    },
    reducers: {
        addItem: (state, action)=>{
            // mutating the state 
            state.items.push(action.payload);
        },
        removeItem: (state)=>{
            state.items.pop();
        },
        clearCart: (state)=>{
            state.items.length = 0;
        }
    }
})


export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;