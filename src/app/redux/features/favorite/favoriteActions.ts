import { baseUrl } from "@/axios/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllFavorites = createAsyncThunk(
  "favorites/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await baseUrl.get("/api/v1/favorites");
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

export const addToFavorites = createAsyncThunk(
  "favorites/add",
  async (productID: string, thunkAPI) => {
    try {
      const response = await baseUrl.post(`/api/v1/favorites/${productID}`);
      thunkAPI.dispatch(getAllFavorites());
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

export const deleteFromFavorites = createAsyncThunk(
  "favorites/delete",
  async (productID: string, thunkAPI) => {
    try {
      const response = await baseUrl.delete(`/api/v1/favorites/${productID}`);
      thunkAPI.dispatch(getAllFavorites());
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
