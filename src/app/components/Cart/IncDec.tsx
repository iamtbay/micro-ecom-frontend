import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import {
  getCart,
  updateCartQuantity,
} from "@/app/redux/features/cart/cartAction";
import { RootState } from "@/app/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

interface Props {
  productID: string;
  action: string;
}
const IncDec = (props: Props) => {
  const dispatch = useAppDispatch();
  const { shouldFetchCart } = useSelector((state: RootState) => state.cart);

  const handleClick = () => {
    switch (props.action) {
      case "DECREASE":
        dispatch(
          updateCartQuantity({
            productID: props.productID,
            set_exact: false,
            quantity: -1,
          })
        );
        break;
      case "INCREASE":
        dispatch(
          updateCartQuantity({
            productID: props.productID,
            set_exact: false,
            quantity: 1,
          })
        );
        break;
    }
  };
  useEffect(() => {
    if (shouldFetchCart) {
      dispatch(getCart());
    }
  }, [shouldFetchCart, dispatch]);

  return (
    <div className="cursor-pointer bg-lime-400 duration-500 hover:bg-lime-500 rounded-full p-2 items-center justify-center">
      <p onClick={handleClick} className="">
        {props.action === "DECREASE" ? `-` : `+`}
      </p>
    </div>
  );
};
export default IncDec;
