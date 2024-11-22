import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import productReducer from "./features/product/productSlice";
import reviewReducer from "./features/reviews/reviewsSlice";
import cartReducer from "./features/cart/cartSlice";
import addressReducer from "./features/address/addressSlice";
import orderReducer from "./features/orders/ordersSlice";
import favoriteReducer from "./features/favorite/favoriteSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    reviews: reviewReducer,
    cart: cartReducer,
    addresses: addressReducer,
    orders: orderReducer,
    favorites: favoriteReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
