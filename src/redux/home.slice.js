import { createSlice } from "@reduxjs/toolkit";

const allProductsSlice = createSlice({
  name: "All producs",
  initialState: [],
  reducers: {
    setAllProductsRedux: (state, { payload }) => {
      return payload;
    },
  },
});

export const { setAllProductsRedux } = allProductsSlice.actions;

export default allProductsSlice;
