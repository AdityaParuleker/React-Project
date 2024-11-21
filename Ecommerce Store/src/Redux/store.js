import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";

const store = configureStore({
  reducer: {
    allCart: cartSlice,
  },
});

export default store;
