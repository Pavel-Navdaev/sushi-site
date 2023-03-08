export enum SortTypeEnum {
  RATING_ASC = "rating",
  RATING_DESK = "-rating",
  PRICE_ASK = "price",
  PRICE_DESK = "-rating",
  TITLE_ASK = "alphabet",
  TITLE_DESK = "-alphabet",
}
export type SortItem = {
  name: string;
  sortType: SortTypeEnum;
};
export interface FilterSliceState {
  activeCategory: number;
  searchValue: string;
  selectedSort: SortItem;
}
