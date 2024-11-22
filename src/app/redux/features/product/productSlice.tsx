import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getSingleProductById } from "./productActions";
import { RootState } from "../../store";

export interface Product {
  _id: string;
  name: string;
  brand: string;
  content: string;
  price: number;
  added_by: string;
}
interface PageInformations {
  currentPage: number;
  totalPage: number;
  totalProduct: number;
}
interface ProductState {
  products: Product[];
  pages: PageInformations;
  isLoading: boolean;
}
const initialState: ProductState = {
  isLoading: false,
  pages: {
    totalProduct: 1,
    currentPage: 1,
    totalPage: 1,
  },
  products: [
    {
      _id: "",
      name: "",
      brand: "",
      content: "",
      price: 0,
      added_by: "",
    },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, {}) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.products = payload.data;
        state.pages = payload.pages;
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state, {}) => {
        state.products = [];
        state.isLoading = false;
      })
      //single product by id
      .addCase(getSingleProductById.pending, (state, {}) => {
        state.isLoading = true;
      })
      .addCase(getSingleProductById.fulfilled, (state, { payload }) => {
        const productExists = state.products.find(
          (product) => product._id === payload._id
        );
        if (!productExists) {
          state.products.push(payload);
        } else {
          const index = state.products.findIndex(
            (product) => product._id === payload._id
          );
          state.products[index] = payload;
        }
        state.isLoading = false;
      })
      .addCase(getSingleProductById.rejected, (state, {}) => {
        state.isLoading = false;
      });
  },
});

export const selectProductById = (state: RootState, productID: string) => {
  return state.products.products.find(
    (product: Product) => product._id === productID
  );
};

export const {} = productSlice.actions;
export default productSlice.reducer;
