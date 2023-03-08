import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchSushiProps, SushiItem } from "./types";
import axios from "axios";

export const getSushi = createAsyncThunk<SushiItem[], SearchSushiProps>(
  "sushi/fetchByIdStatus",
  async (props) => {
    const { search, category, sort, order } = props;
    const { data } = await axios.get<SushiItem[]>(
      `https://63e1f84dad0093bf29c538ae.mockapi.io/items?${search}${category}${sort}&order=${order}`
    );
    return data;
  }
);
