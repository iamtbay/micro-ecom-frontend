import { createAsyncThunk } from "@reduxjs/toolkit";
import { Address, handleEditAction } from "./addressSlice";
import { baseUrl } from "@/axios/axios";

export const addNewAddress = createAsyncThunk(
  "address/new",
  async (credentials: Address, thunkAPI) => {
    try {
      const response = await baseUrl.post("api/v1/address", credentials);
      console.log(response.data);
      thunkAPI.dispatch(getAddresses());
      return response.data;
    } catch (error: any) {
      console.log(error);

      if (error.response && error.respons.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("An unknown error occured");
    }
  }
);

export const getAddresses = createAsyncThunk(
  "address/get",
  async (_, thunkAPI) => {
    try {
      const response = await baseUrl.get("api/v1/address");
      return response.data;
    } catch (error: any) {
      console.log(error);

      if (error.response && error.respons.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("An unknown error occured");
    }
  }
);

export const updateAddress = createAsyncThunk(
  "address/update",
  async (credentials: Address, thunkAPI) => {
    try {
      const response = await baseUrl.patch(
        `api/v1/address/${credentials.id}`,
        credentials
      );
      thunkAPI.dispatch(getAddresses());
      thunkAPI.dispatch(handleEditAction());
      return response.data;
    } catch (error: any) {
      console.log(error);

      if (error.response && error.respons.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("An unknown error occured");
    }
  }
);

export const deleteAddress = createAsyncThunk(
  "address/delete",
  async (addressID: string, thunkAPI) => {
    try {
      const response = await baseUrl.delete(`api/v1/address/${addressID}`);
      thunkAPI.dispatch(getAddresses());
      return response.data;
    } catch (error: any) {
      console.log(error);

      if (error.response && error.respons.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("An unknown error occured");
    }
  }
);

export const getSingleAddress = createAsyncThunk(
  "address/getSingle",
  async (credentials: Address, thunkAPI) => {
    try {
      const response = await baseUrl.get(`api/v1/address/${credentials.id}`);
      return response.data;
    } catch (error: any) {
      console.log(error);

      if (error.response && error.respons.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("An unknown error occured");
    }
  }
);
