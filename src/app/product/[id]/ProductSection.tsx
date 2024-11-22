"use client";
import { useSelector } from "react-redux";
import ImageComponent from "./ImageComponent";
import ProductInfoComponent from "./productInfoComponent";
import SizeSelectComponent from "./SizeSelectComponent";
import { RootState } from "@/app/redux/store";
import { selectProductById } from "@/app/redux/features/product/productSlice";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { getSingleProductById } from "@/app/redux/features/product/productActions";
import Loading from "@/app/components/Loading";
import AddToCartButton from "@/app/components/AddToCartButton";

const ProductSection = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading } = useSelector((state: RootState) => state.products);
  const product = useSelector((state: RootState) =>
    selectProductById(state, String(id))
  );

  useEffect(() => {
    if (!product) {
      dispatch(getSingleProductById(String(id)));
    }
  }, [product, id, dispatch]);
  return (
    <>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="flex min-w-[300px] md:p-2 gap-4 flex-col md:flex-row md:justify-between">
          <ImageComponent />
          <section className="w-full md:w-1/3 flex flex-col gap-8">
            <ProductInfoComponent
              name={product?.name}
              content={product?.content}
              brand={product?.brand}
            />
            <SizeSelectComponent />
            <AddToCartButton
              _id={product?._id}
              name={product?.name}
              quantity={1}
              price={product?.price}
            />
            {/* <button
              className="bg-lime-400 hover:bg-lime-500 rounded-2xl py-2 px-4 duration-500 text-white text-sm"
              onClick={handleClick}
            >
              Add to Cart
            </button> */}
          </section>
        </div>
      )}
    </>
  );
};
export default ProductSection;
