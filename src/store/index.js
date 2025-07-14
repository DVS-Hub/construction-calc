import { configureStore } from "@reduxjs/toolkit";
import squares from "../components/optionsCard/square/squareSlice";

export const store = configureStore({
  reducer: { squares },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare(),
  devTools: process.env.NODE_ENV !== "production",
});
