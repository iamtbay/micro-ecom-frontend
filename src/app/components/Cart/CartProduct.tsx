import Image from "next/image";
import DeleteIcon from "../../icons/DeleteIcon";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  deleteProductOnCart,
  updateCartQuantity,
} from "../../redux/features/cart/cartAction";
import React, { useState } from "react";
import IncDec from "./IncDec";

type Props = {
  _id: string;
  name?: string;
  price: number;
  quantity: number;
};
const CartProduct = (props: Props) => {
  const [decrease, increase] = ["DECREASE", "INCREASE"];
  const [quantity, setQuantity] = useState<number>(props.quantity);
  const dispatch = useAppDispatch();

  const handleBlur = () => {
    dispatch(
      updateCartQuantity({
        productID: props._id,
        set_exact: true,
        quantity,
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteProductOnCart(props._id));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div className="w-full md:w-1/2 flex gap-2 items-center justify-between bg-gray-300 rounded-2xl p-4">
      <div className="flex justify-center w-1/4">
        <Image
          width={80}
          height={80}
          src="https://placehold.co/40x40"
          alt={props.name || ""}
        />
      </div>
      {/*  */}
      <div className="flex flex-col text-sm gap-2 w-1/4 justify-center items-center">
        <p>{props.name}</p>
        <div className="flex gap-2 justify-center items-center">
          <IncDec productID={props._id} action={decrease} />
          <input
            type="text"
            className="text-xs w-8 py-2 text-center"
            value={quantity}
            onBlur={handleBlur}
            onChange={handleInputChange}
          />
          <IncDec productID={props._id} action={increase} />
        </div>
      </div>

      <div className="flex text-sm w-1/4 justify-center ">
        <p>{(props.price * props.quantity).toFixed(2) || "0"}</p>
      </div>

      <div className="w-1/4 flex justify-center" onClick={handleDelete}>
        <div className="cursor-pointer px-2 py-2 bg-red-300 hover:bg-red-500 duration-1000 rounded-full">
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};
export default CartProduct;
