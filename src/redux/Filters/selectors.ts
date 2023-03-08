import { RootState } from "../store";

export const selectFilter = (state: RootState) => {
  return state.filterReducer;
};
export const selectSort = (state: RootState) => {
  return state.filterReducer.selectedSort;
};
