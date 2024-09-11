import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartSlice from "./cartPage.slice";
import isLoadingSlice from "./isLoading.slice";
import allProductsSlice from "./home.slice";

const store = configureStore({
  reducer: {
    cartSlice: cartSlice.reducer,
    isLoadingSlice: isLoadingSlice.reducer,
    allProductsSlice: allProductsSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable state invariant middleware
      immutableCheck: false, // Disable immutable state invariant middleware
    }).concat(logger),
});

export default store;
