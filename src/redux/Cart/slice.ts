import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketItem, BasketSliceState } from "./types";

const initialState: BasketSliceState = {
  items: [],
  totalPrice: 0,
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<BasketItem>) => {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id && obj.setSize === action.payload.setSize
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return +(obj.price * obj.count + sum).toFixed(2);
      }, 0);
    },
    minusItem: (
      state,
      action: PayloadAction<{ id: number; setSize: string }>
    ) => {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id && obj.setSize === action.payload.setSize
      );
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return +(obj.price * obj.count + sum).toFixed(2);
      }, 0);
    },
    removeItem: (
      state,
      action: PayloadAction<{ id: number; setSize: string }>
    ) => {
      state.items = state.items.filter(
        (obj) =>
          obj.id !== action.payload.id || obj.setSize !== action.payload.setSize
      );
      state.totalPrice = state.items.reduce((sum, obj) => {
        return +(obj.price * obj.count + sum).toFixed(2);
      }, 0);
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } =
  basketSlice.actions;

export default basketSlice.reducer;
