import { createSlice } from "@reduxjs/toolkit";
import { getReviewsById } from "./reviewAction";

interface Review {
  _id: string;
  product_id: string;
  user_id: string;
  name: string;
  surname: string;
  point: number;
  comment: string;
  date: string;
}

interface ReviewsState {
  isLoading: boolean;
  reviews: Review[];
}

const initialState: ReviewsState = {
  isLoading: false,
  reviews: [
    {
      _id: "",
      product_id: "",
      user_id: "",
      name: "",
      surname: "",
      point: 1,
      comment: "",
      date: new Date().toISOString(),
    },
  ],
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviewsById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReviewsById.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        state.reviews = payload ?? [];
      })
      .addCase(getReviewsById.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = reviewsSlice.actions;
export default reviewsSlice.reducer;
