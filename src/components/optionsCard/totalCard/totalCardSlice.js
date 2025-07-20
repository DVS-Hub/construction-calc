import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../../hooks/http.hook";

const initialState = {
  currency: 0,
};

export const fetchCurrency = createAsyncThunk("totalCard/fetchCurrency", () => {
  const { request } = useHttp();
  return request("http://localhost:3002/api/currency/daily_json.js");
});

const totalCardSlice = createSlice({
  name: "totalCard",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrency.pending, (state) => {
        state.totalCardLoadingStatus = "loading";
      })
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        state.totalCardLoadingStatus = "idle";
        state.currency = action.payload.Valute.USD.Value;
      })
      .addCase(fetchCurrency.rejected, (state) => {
        state.totalCardLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = totalCardSlice;
export default reducer;
export const { changeTotal } = actions;
