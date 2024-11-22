import { createSlice } from "@reduxjs/toolkit";
import {
  addToFavorites,
  deleteFromFavorites,
  getAllFavorites,
} from "./favoriteActions";

export interface Products {
  product_id: string;
}

interface InitialState {
  isLoading: boolean;
  products: Products[];
}

const initialState: InitialState = {
  isLoading: true,
  products: [],
};

const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get
    builder.addCase(getAllFavorites.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllFavorites.fulfilled, (state, { payload }) => {
      state.products = payload.data.favorites ?? [];
      state.isLoading = false;
    });
    builder.addCase(getAllFavorites.rejected, (state) => {
      state.isLoading = true;
    });

    //add
    builder.addCase(addToFavorites.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addToFavorites.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(addToFavorites.rejected, (state) => {
      state.isLoading = false;
    });

    //delete
    builder.addCase(deleteFromFavorites.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteFromFavorites.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteFromFavorites.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {} = favoriteSlice.actions;
export default favoriteSlice.reducer;
