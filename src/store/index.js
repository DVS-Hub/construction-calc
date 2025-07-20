import { configureStore } from "@reduxjs/toolkit";
import squares from "../components/optionsCard/square/squareSlice";
import requiredWorks from "../components/optionsCard/requiredWorks/requiredWorksSlice";
import totalCard from "../components/optionsCard/totalCard/totalCardSlice";

export const store = configureStore({
  reducer: { squares, requiredWorks, totalCard },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare(),
  devTools: process.env.NODE_ENV !== "production",
});
