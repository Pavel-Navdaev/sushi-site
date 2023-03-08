import { RootState } from "../store";

export const selectSushi = (state: RootState) => {
  return state.sushiReducer;
};
