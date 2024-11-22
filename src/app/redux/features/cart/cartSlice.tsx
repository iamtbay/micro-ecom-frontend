import { createSlice } from "@reduxjs/toolkit";
import {
  checkOutAction,
  deleteProductOnCart,
  getCart,
} from "./cartAction";

export interface CartItem {
  _id?: string;
  name?: string;
  quantity: number;
  price: number;
}
interface CartState {
  isLoading: boolean;
  cartItems: CartItem[];
  total_price: number;
  shouldFetchCart: boolean;
}
const initialState: CartState = {
  isLoading: false,
  cartItems: [],
  total_price: 0,
  shouldFetchCart: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fetcher: (state) => {
      state.shouldFetchCart = true;
    },
    resetCart: (state) => {
      state.cartItems = [];
      state.total_price = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCart.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { products, total_price } = payload.data ?? {};
        state.cartItems = products ?? [];
        state.total_price = total_price ?? 0;
        state.shouldFetchCart = false;
      })
      .addCase(getCart.rejected, (state) => {
        state.isLoading = false;
        state.shouldFetchCart = false;
      })
      //checkout
      .addCase(checkOutAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkOutAction.fulfilled, (state) => {
        state.isLoading = false;
        state.shouldFetchCart = true;
      })
      .addCase(checkOutAction.rejected, (state) => {
        state.isLoading = false;
        state.shouldFetchCart = false;
      })
      //
      .addCase(deleteProductOnCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProductOnCart.fulfilled, (state) => {
        state.isLoading = false;
        state.shouldFetchCart = false;
      })
      .addCase(deleteProductOnCart.rejected, (state) => {
        state.isLoading = false;
        state.shouldFetchCart = false;
      });
  },
});

export const { fetcher, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
