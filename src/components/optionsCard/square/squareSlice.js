import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../../hooks/http.hook";

const initialState = {
  squares: [],
  ceilingHeight: 0.0,
  squaresLoadingStatus: "idle",
  total: 0,
};

export const fetchSquares = createAsyncThunk("squares/fetchSquares", () => {
  const { request } = useHttp();
  return request("http://localhost:3001/squares");
});

const squareSlice = createSlice({
  name: "squares",
  initialState,
  reducers: {
    changeSquare: (state, action) => {
      if (action.payload.id === "ceiling_height") {
        state.ceilingHeight = action.payload.value;
      } else {
        state.squares.forEach((item, i) => {
          if (item.id === action.payload.id) {
            state.squares[i].value = action.payload.value;
          }
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSquares.pending, (state) => {
        state.squaresLoadingStatus = "loading";
      })
      .addCase(fetchSquares.fulfilled, (state, action) => {
        state.squaresLoadingStatus = "idle";
        state.squares = action.payload;
      })
      .addCase(fetchSquares.rejected, (state) => {
        state.squaresLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = squareSlice;

export default reducer;

export const { changeSquare } = actions;
