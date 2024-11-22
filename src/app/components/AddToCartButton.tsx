import React from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { addProductToCart } from "../redux/features/cart/cartAction";
import { usePathname } from "next/navigation";

interface Props {
  showBtn: boolean;
  _id?: string;
  name?: string;
  quantity: number;
  price: number;
}
const AddToCartButton = ({ showBtn, _id, name, quantity, price }: Props) => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(addProductToCart({ _id, name, quantity, price }));
  };
  return (
    <button
      onClick={handleClick}
      className={`bg-lime-400 rounded-2xl px-4 py-2 duration-500 w-full text-sm bottom-0 left-0 right-0 hover:bg-lime-500 
      ${pathname === "/" ? (showBtn ? "opacity-100" : "opacity-0") : ""}
      `}
    >
      Add to Cart
    </button>
  );
};
export default AddToCartButton;
