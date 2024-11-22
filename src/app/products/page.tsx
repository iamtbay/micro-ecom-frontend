"use client";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useSearchParams } from "next/navigation";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useEffect } from "react";
import { getProducts } from "../redux/features/product/productActions";
import { Product } from "../redux/features/product/productSlice";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination/pagination";

const ProductPage = () => {
  const { products, pages, isLoading } = useSelector(
    (state: RootState) => state.products
  );
  const param = useSearchParams();
  const page = param?.get("page") ?? "1";
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (page) {
      dispatch(getProducts(Number(page)));
    }
  }, [page, dispatch]);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div
          className="w-full flex flex-wrap gap-4 p-2 
    justify-between
    sm:justify-between"
        >
          {" "}
          {products?.length < 1 ? (
            <div>
              <p>No products to show</p>
            </div>
          ) : (
            products?.map((product: Product) => (
              <ProductCard key={product._id} {...product} />
            ))
          )}
          {products && (
            <Pagination
              totalPages={pages?.totalPage}
              currentPage={Number(page)}
            />
          )}
        </div>
      )}
    </>
  );
};
export default ProductPage;
