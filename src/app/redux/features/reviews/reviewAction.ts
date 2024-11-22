import { baseUrl } from "@/axios/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReviewsById = createAsyncThunk(
  "reviews/getReviews",
  async (id: string, thunkAPI) => {
    try {
      const { data } = await baseUrl.get(`api/v1/reviews/${id}`);
      return data.data;
    } catch (error: any) {
      if (error.response && error.respons.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue("An unknown error occured");
    }
  }
);
