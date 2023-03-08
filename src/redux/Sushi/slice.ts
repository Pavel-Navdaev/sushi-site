import { createSlice } from "@reduxjs/toolkit";
import { Status, SushiSliceState } from "./types";
import { getSushi } from "./asyncActions";

const initialState: SushiSliceState = {
  items: [],
  status: Status.LOADING,
};

export const sushiSlice = createSlice({
  name: "sushi",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSushi.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(getSushi.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(getSushi.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const { setItems } = sushiSlice.actions;

export default sushiSlice.reducer;
