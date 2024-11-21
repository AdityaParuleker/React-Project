import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartslice",
  initialState: {
    carts: [],
  },
  reducers: {
    update: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty = action.payload.qnty;
      } else {
        state.carts = [...state.carts, action.payload];
      }
    },
    addToCart: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        state.carts = [...state.carts, temp];
      }
    },
    removeCart: (state, action) => {
      const data = state.carts.filter((item) => item.id != action.payload);
      state.carts = data;
    },
    removeSingle: (state, action) => {
      const dec = state.carts.findIndex((item) => item.id == action.payload.id);

      if (state.carts[dec].qnty >= 1) {
        state.carts[dec].qnty -= 1;
      }
    },
    empty: (state, action) => {
      state.carts = [];
    },
  },
});

export const { addToCart, update, removeCart, removeSingle, empty } =
  cartSlice.actions;
export default cartSlice.reducer;
