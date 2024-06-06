import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "All Cart Items",
  initialState: [],
  reducers: {
    setAllCartItems: (state, { payload }) => {
      return payload;
    },
  },
});
export const { setAllCartItems } = cartSlice.actions;
export default cartSlice;
