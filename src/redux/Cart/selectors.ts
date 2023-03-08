import { RootState } from "../store";

export const selectBasket = (state: RootState) => {
  return state.basketReducer;
};

export const selectBasketItem =
  (id: number, setSize: number[], activeCategory: number) =>
  (state: RootState) => {
    return state.basketReducer.items.find(
      (obj) =>
        obj.id === id && obj.setSize === setSize[activeCategory] + " pieces"
    );
  };
