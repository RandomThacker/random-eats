import { createSlice } from "@reduxjs/toolkit";

const cartSLice = createSlice({
    name: 'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state, action)=>{
            //directly modifying the state over here
            state.items.push(action.payload)
        },
        removeItem:(state)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            state.items.length = 0
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSLice.actions

export default createSlice.reducer