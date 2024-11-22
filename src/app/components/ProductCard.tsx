import Image from "next/image";
import FavoriteIcon from "../icons/FavoriteIcon";
import { useRouter } from "next/navigation";
import AddToCartButton from "./AddToCartButton";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import FavoriteIconDel from "../icons/FavoriteIconDel";
import { useAppDispatch } from "../hooks/useAppDispatch";
import {
  addToFavorites,
  deleteFromFavorites,
} from "../redux/features/favorite/favoriteActions";

type Props = {
  _id: string;
  name: string;
  brand: string;
  price: number;
};
const ProductCard = (props: Props) => {
  const { products } = useSelector((state: RootState) => state.favorites);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const route = useRouter();
  const handleRoute = () => {
    route.push(`/product/${props._id}`);
  };

  const handleHover = () => {
    setShowBtn(true);
  };
  const handleHoverOff = () => {
    setShowBtn(false);
  };

  const check = products.find((product) => product.product_id === props._id);

  const handleFavAdd = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    dispatch(addToFavorites(props._id));
  };
  const handleFavDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    dispatch(deleteFromFavorites(props._id));
  };
  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOff}
      onClick={handleRoute}
      className="bg-gray-200 
      rounded-2xl flex flex-col
      items-center justify-between 
     
      w-[45%] sm:w-[45%] md:w-[30%] lg:w-[23%] 
      min-h-[300px] sm:h-60 md:h-[80%]
      overflow-hidden relative cursor-pointer border-2 border-white gap-2 
      hover:border-2 hover:border-lime-400 duration-500"
    >
      <Image
        src="https://placehold.co/200x200"
        width={200}
        height={200}
        alt={`${props.name} image`}
        priority={true}
        quality={60}
      />
      <section className="flex flex-col text-sm w-full px-2 gap-1">
        <p>{props.name}</p>
        <p className="font-bold text-xs">{props.brand}</p>
        <p>{props.price} €</p>
      </section>

      {
        <AddToCartButton
          _id={props?._id}
          name={props?.name}
          quantity={1}
          price={props?.price}
          showBtn={showBtn}
        />
      }

      <div className="absolute right-2 top-2 cursor-pointer rounded-full p-1 flex hover:bg-slate-100 duration-500 ">
        {check ? (
          <div onClick={handleFavDelete}>
            <FavoriteIconDel />
          </div>
        ) : (
          <div onClick={handleFavAdd}>
            <FavoriteIcon />
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductCard;
