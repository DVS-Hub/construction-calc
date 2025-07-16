import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../../hooks/http.hook";

const initialState = {
  requiredWorks: [],
  requiredWorksLoadingStatus: "idle",
};

export const fetchRequiredWorks = createAsyncThunk(
  "requiredWorks/fetchRequiredWorks",
  () => {
    const { request } = useHttp();
    return request("http://localhost:3001/operations");
  }
);

const requiredWorksSlice = createSlice({
  name: "requiredWorks",
  initialState,
  reducers: {
    changeCheck: (state, action) => {
      state.requiredWorks.forEach((item, i) => {
        if (item.id === action.payload.id) {
          state.requiredWorks[i].check = action.payload.value;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRequiredWorks.pending, (state) => {
        state.requiredWorksLoadingStatus = "loading";
      })
      .addCase(fetchRequiredWorks.fulfilled, (state, action) => {
        state.requiredWorksLoadingStatus = "idle";
        state.requiredWorks = action.payload.map((item) => ({
          ...item,
          check: false,
        }));
      })
      .addCase(fetchRequiredWorks.rejected, (state) => {
        state.requiredWorksLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = requiredWorksSlice;
export default reducer;
export const { changeCheck } = actions;
