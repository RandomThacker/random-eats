import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state, action)=>{
            //directly modifying the state over here
            state.items.push(action.payload)
        },
        removeItem:(state, action)=>{
            // state.items.splice(state.items.indexOf(action.payload),1)
            state.items = state.items.filter((item) => item?.card?.info?.id !== action.payload?.card?.info?.id);
            
        },
        clearCart:(state)=>{
            state.items.length = 0
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions

export default cartSlice.reducer