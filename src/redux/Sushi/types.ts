export type SushiItem = {
  id: number;
  title: string;
  price: number;
  setSize: number[];
  imgUrl: string;
};
export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
export interface SushiSliceState {
  items: SushiItem[];
  status: Status;
}

export type SearchSushiProps = {
  search: string;
  category: string;
  sort: string;
  order: string;
};
