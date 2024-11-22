import { createSlice } from "@reduxjs/toolkit";
import { deleteOrder, getOrderByID, getOrders } from "./ordersAction";

interface Product {
  _id: string;
  name: string;
  quantity: number;
  price: number;
}
export interface Order {
  order_id: string;
  customer_id: string;
  products: Product[];
  address_id: string;
  total_price: number;
  order_date: string;
}

interface InitialState {
  orders: Order[];
  isLoading: boolean;
}

const initialState: InitialState = {
  isLoading: true,
  orders: [
    {
      order_id: "",
      customer_id: "",
      products: [],
      address_id: "",
      total_price: 0,
      order_date: "",
    },
  ],
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //get orders
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, { payload }) => {
        state.orders = payload.data;
        state.isLoading = false;
      })
      .addCase(getOrders.rejected, (state) => {
        state.isLoading = false;
      })
      //get order by id
      .addCase(getOrderByID.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderByID.fulfilled, (state, { payload }) => {
        const isExist = state.orders.find(
          (order) => order.order_id === payload.data.order_id
        );
        if (!isExist) {
          state.orders.push(payload.data);
        }
        state.isLoading = false;
      })
      .addCase(getOrderByID.rejected, (state) => {
        state.isLoading = false;
      })
      //delete order
      .addCase(deleteOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteOrder.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteOrder.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = orderSlice.actions;
export default orderSlice.reducer;
