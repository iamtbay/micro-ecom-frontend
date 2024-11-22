"use client";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import FavoriteIconDel from "../icons/FavoriteIconDel";
import { deleteFromFavorites } from "../redux/features/favorite/favoriteActions";
import React from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useRouter } from "next/navigation";

interface Props {
  favProductID: string;
}

const SingleFavProduct = ({ favProductID }: Props) => {
  const { products } = useSelector((state: RootState) => state.products);
  const index = products.findIndex((products) => products._id === favProductID);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    dispatch(deleteFromFavorites(favProductID));
  };

  const handleRedirect = () => {
    router.push(`/product/${favProductID}`);
  };

  return (
    <div
      className="border-2 bg-lime-400 rounded-xl flex flex-row justify-between gap-4 items-center text-sm p-2 cursor-pointer hover:bg-lime-500 duration-500"
      onClick={handleRedirect}
    >
      <div>
        <p>{products[index].name}</p>
        <p className="text-xs">{products[index].brand}</p>
        <p className="font-bold">{products[index].price.toFixed(2)} €</p>
      </div>
      <div
        className="rounded-full p-1 hover:bg-slate-100 duration-500 cursor-pointer"
        onClick={handleClick}
      >
        <FavoriteIconDel />
      </div>
    </div>
  );
};

export default SingleFavProduct;
