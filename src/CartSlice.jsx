import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },

  
  reducers: {
    addItem: (state, action) => {
    const {name,image,cost} = action.payload;

    const exisitingItem = state.items.find(item => item.name === name);
    if(exisitingItem){
        exisitingItem.quantity ++;
    } else{
        state.items.push({name,image,cost,quantiy:1})
    }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item =>  item !== action.payload);
    },
    updateQuantity: (state, action) => {

    
    },
  },

  
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
