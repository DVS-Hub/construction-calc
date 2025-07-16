import { configureStore } from "@reduxjs/toolkit";
import squares from "../components/optionsCard/square/squareSlice";
import requiredWorks from "../components/optionsCard/requiredWorks/requiredWorksSlice";

export const store = configureStore({
  reducer: { squares, requiredWorks },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare(),
  devTools: process.env.NODE_ENV !== "production",
});
