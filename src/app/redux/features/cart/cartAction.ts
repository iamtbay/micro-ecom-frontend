import { baseUrl } from "@/axios/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CartItem } from "./cartSlice";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const getCart = createAsyncThunk("cart/getCart", async (_, thunkAPI) => {
  try {
    const response = await baseUrl.get(`api/v1/cart`);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
    return thunkAPI.rejectWithValue("An unknown error occured");
  }
});

export const addProductToCart = createAsyncThunk(
  "cart/addToCart",
  async (product: CartItem, thunkAPI) => {
    try {
      const response = await baseUrl.post(
        `api/v1/cart/new/${product._id}`,
        product,
        { withCredentials: true }
      );
      thunkAPI.dispatch(getCart());
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("An unknown error occured");
    }
  }
);

export interface UpdateQuantityCredentials {
  productID: string;
  set_exact: boolean;
  quantity: number;
}

export const updateCartQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async (credentials: UpdateQuantityCredentials, thunkAPI) => {
    try {
      const response = await baseUrl.patch(
        `api/v1/cart/${credentials.productID}?quantity=${String(
          credentials.quantity
        )}`,
        credentials
      );
      thunkAPI.dispatch(getCart());
      return response.data;
    } catch (error: any) {
      console.log(error);

      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("An unknown error occured");
    }
  }
);

export const deleteProductOnCart = createAsyncThunk(
  "cart/deleteProduct",
  async (productID: string, thunkAPI) => {
    try {
      const response = await baseUrl.delete(`api/v1/cart/${productID}`);
      thunkAPI.dispatch(getCart());
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("An unknown error occured");
    }
  }
);

interface AddressInterface {
  address_id: string;
}
export const checkOutAction = createAsyncThunk(
  "cart/checkout",
  async (
    {
      shippingAddressID,
      router,
    }: { shippingAddressID: AddressInterface; router: AppRouterInstance },
    thunkAPI
  ) => {
    try {
      const response = await baseUrl.post(
        `api/v1/cart/checkout`,
        shippingAddressID
      );
      
      router.push("/user/orders");

      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        console.log(error);

        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("An unknown error occured");
    }
  }
);
