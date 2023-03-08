import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, SortItem, SortTypeEnum } from "./types";

const initialState: FilterSliceState = {
  activeCategory: 0,
  searchValue: "",
  selectedSort: {
    name: "Rating (descending)",
    sortType: SortTypeEnum.RATING_DESK,
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<number>) => {
      state.activeCategory = action.payload;
    },
    setSelectedSort: (state, action: PayloadAction<SortItem>) => {
      state.selectedSort = action.payload;
    },
    setFilters: (state, action: PayloadAction<FilterSliceState>) => {
      state.activeCategory = Number(action.payload.activeCategory);
      state.selectedSort = action.payload.selectedSort;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const {
  setActiveCategory,
  setSelectedSort,
  setFilters,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
