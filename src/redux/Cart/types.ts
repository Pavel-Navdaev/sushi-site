export type BasketItem = {
  title: string;
  price: number;
  imgUrl: string;
  setSize: string;
  count: number;
  id: number;
};

export interface BasketSliceState {
  items: BasketItem[];
  totalPrice: number;
}
