"use client";
import React, { useEffect } from "react";
import CartProduct from "../components/Cart/CartProduct";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import PriceComponent from "./PriceComponent";
import Loading from "../components/Loading";
import { getCart } from "../redux/features/cart/cartAction";
import { useAppDispatch } from "../hooks/useAppDispatch";

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [cart.shouldFetchCart]);
  return (
    <>
      {cart.isLoading ? (
        <Loading />
      ) : cart.cartItems.length < 1 ? (
        <p>Cart is empty, start shopping now.</p>
      ) : (
        <div className="flex flex-col gap-2">
          <PriceComponent
            cartItemsLength={cart.cartItems.length}
            total_price={cart.total_price}
          />
          {/* prods */}
          <section className="flex flex-col gap-2 pb-20 sm:pb-0 items-center">
            {cart.cartItems.map((product) => (
              <CartProduct key={product._id} {...product} />
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default CartPage;
