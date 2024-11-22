"use client";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const OrderSummary = () => {
  const { cartItems, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );
  return (
    <div className="flex flex-col bg-red-200 gap-2 justify-start max-h-[400px] overflow-y-scroll">
      <p className="font-bold">Order Summary</p>
      {cartItems.map((cartItem) => (
        <div
          className="flex flex-col border-2 p-2 rounded-xl text-sm"
          key={cartItem._id}
        >
          <div>
            <p>{cartItem.name}</p>
          </div>
          <div className="flex gap-2">
            <p>{cartItem.quantity}</p>
            <p>x</p>
            <p>{cartItem.price} €</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default OrderSummary;
