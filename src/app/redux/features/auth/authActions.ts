import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "@/axios/axios";
import { User, UserInfo } from "./authSlice";
import { resetCart } from "../cart/cartSlice";
import { getCart } from "../cart/cartAction";

//
export const checkUser = createAsyncThunk("auth/check", async (_, thunkAPI) => {
  try {
    const response = await baseUrl.get("api/v1/auth/check");
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
    return thunkAPI.rejectWithValue("An unknown error occured");
  }
});
//
export const login = createAsyncThunk(
  "auth/login",
  async (credentials: UserInfo, thunkAPI) => {
    try {
      const { data } = await baseUrl.post(`api/v1/auth/login`, credentials);
      thunkAPI.dispatch(getCart());
      return data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("An unknown error occured");
    }
  }
);

//
export const register = createAsyncThunk(
  "auth/register",
  async (credentials: UserInfo, thunkAPI) => {
    try {
      const { data } = await baseUrl.post(`api/v1/auth/signup`, credentials);
      return data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("An unknown error occured");
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const { data } = await baseUrl.post(`api/v1/auth/logout`);
    thunkAPI.dispatch(resetCart());
    return data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
    return thunkAPI.rejectWithValue("An unknown error occured");
  }
});

//
export const updateUserInfo = createAsyncThunk(
  "auth/updateInfo",
  async (credentials: User, thunkAPI) => {
    try {
      const response = await baseUrl.patch("api/v1/auth/edit", credentials);
      console.log(response.data);
      
      thunkAPI.dispatch(checkUser());
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("An unknown error occured");
    }
  }
);
