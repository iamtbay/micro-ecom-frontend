"use client";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Loading from "../components/Loading";
import SingleFavProduct from "./SingleFavProduct";
import { useEffect } from "react";

const FavoritePage = () => {
  const { products, isLoading } = useSelector(
    (state: RootState) => state.favorites
  );

  useEffect(() => {}, []);
  return (
    <div className="flex flex-col justify-center gap-2 content-center items-center">
      <p>Favorites</p>
      <div className="flex flex-col justify-center gap-2 w-[75%]">
        {isLoading ? (
          <Loading />
        ) : (
          products.map((product) => (
            <SingleFavProduct
              key={product.product_id}
              favProductID={product.product_id}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default FavoritePage;
