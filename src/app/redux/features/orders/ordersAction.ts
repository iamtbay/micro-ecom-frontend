import { baseUrl } from "@/axios/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkUser } from "../auth/authActions";

export const getOrders = createAsyncThunk(
  "orders/getOrders",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(checkUser());

    try {
      const {
        auth: { user },
      } = thunkAPI.getState();

      const { data } = await baseUrl.get(`api/v1/orders/${user.user_id}`);
      return data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("An unknown error occured");
    }
  }
);

export const getOrderByID = createAsyncThunk(
  "orders/getOrderByID",
  async (orderID: string, thunkAPI) => {
    try {
      const { data } = await baseUrl.get(`api/v1/order/${orderID}`);
      return data;
    } catch (error: any) {
      if (error.response && error.respons.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("An unknown error occured");
    }
  }
);
export const deleteOrder = createAsyncThunk(
  "orders/deleteOrder",
  async (orderID: string, thunkAPI) => {
    try {
      const { data } = await baseUrl.delete(`api/v1/order/${orderID}`);
      return data;
    } catch (error: any) {
      if (error.response && error.respons.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("An unknown error occured");
    }
  }
);
// export const newOrder = createAsyncThunk(
//   "orders/newOrder",
//   async (credentials, thunkAPI) => {
//     try {
//       const { data } = await baseUrl.post(`orders/newOrder`);
//       return data;
//     } catch (error: any) {
//       if (error.response && error.respons.data) {
//         return thunkAPI.rejectWithValue(error.response.data);
//       }
//       return thunkAPI.rejectWithValue("An unknown error occured");
//     }
//   }
// );
