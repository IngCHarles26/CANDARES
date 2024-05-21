import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./slices/headerSlice";

export const store = configureStore({
  reducer:{
    header: headerSlice,
  }
})

export type TypeStore = ReturnType<typeof store.getState>;