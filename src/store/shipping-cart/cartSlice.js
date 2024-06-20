import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : [];
const totalAmount = localStorage.getItem('totalAmount') !== null ? JSON.parse(localStorage.getItem('totalAmount')) : 0;
const totalQuantity = localStorage.getItem('totalQuantity') !== null ? JSON.parse(localStorage.getItem('totalQuantity')) : 0;

const setItemFunc = (item, totalAmount, totalQuantity) =>  {
  localStorage.setItem('cartItems', JSON.stringify(item));
  localStorage.setItem('totalAmount', JSON.stringify(totalAmount));
  localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));

}

const initialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount
}

const cartSlice = createSlice({
  name: 'cart', 
  initialState: initialState,

  reducers: {
    addItem(state, action){
      const newItem = action.payload
      const exitingItem = state.cartItems.find(item => item.id === newItem.id)
      state.totalQuantity++

      if(!exitingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price
        });

      }
      else {
        exitingItem.quantity++
        exitingItem.totalPrice = Number(exitingItem.totalPrice)
        + Number(newItem.price)
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      // set to location storage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map(item => item)));
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
    },

    // remove item

    removeItem(state, action) {
      const id = action.payload;
      const exitingItem = state.cartItems.find(item => item.id === id);
      state.totalQuantity--

      if(exitingItem.quantity === 1){
        state.cartItems = state.cartItems.filter(item => item.id !== id);
      } else {
        exitingItem.quantity--;
        exitingItem.totalPrice = Number(exitingItem.totalPrice) - Number(exitingItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      // set to location storage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map(item => item)));
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
    },

    // delete item 
    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      if(existingItem) {
        state.cartItems = state.cartItems.filter(item => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      // set to location storage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map(item => item)));
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
    }

  }
});

export const cartActions = cartSlice.actions;
export default cartSlice;


// 'Cascadia Code', Melon, Monaco, 'Courier New', monospace 