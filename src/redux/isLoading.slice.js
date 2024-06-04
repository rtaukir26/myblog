import { createSlice } from "@reduxjs/toolkit";

const isLoadingSlice = createSlice({
  name: "common loading state",
  initialState: true,
  reducers: {
    setIsLoadingRedux: (state, { payload }) => {
      return payload;
    },
  },
});

export const { setIsLoadingRedux } = isLoadingSlice.actions;
export default isLoadingSlice;
