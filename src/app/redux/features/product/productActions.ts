import { baseUrl } from "@/axios/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllFavorites } from "../favorite/favoriteActions";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (page: number, thunkAPI) => {
    try {
      const { data } = await baseUrl.get(
        `api/v1/products?page=${String(page)}`
      );
      thunkAPI.dispatch(getAllFavorites());
      return data;
    } catch (error: any) {
      if (error.response && error.respons.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("An unknown error occured");
    }
  }
);

//
export const getSingleProductById = createAsyncThunk(
  "product/getSingleProduct",
  async (productID: string, thunkAPI) => {
    try {
      const { data } = await baseUrl.get(`api/v1/product/${productID}`);
      return data.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("An unknown error occured");
    }
  }
);
