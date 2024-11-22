"use client";
import CartIcon from "@/app/icons/CartIcon";
import FavoriteIcon from "@/app/icons/FavoriteIcon";
import ProfileIcon from "@/app/icons/ProfileIcon";
import Link from "next/link";
import UserSetting from "./UserSetting";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { setShowUserModal } from "@/app/redux/features/auth/authSlice";
import { useEffect } from "react";
import { getCart } from "@/app/redux/features/cart/cartAction";
import { getAllFavorites } from "@/app/redux/features/favorite/favoriteActions";

const UserIconsSection = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const favProducts = useSelector(
    (state: RootState) => state.favorites.products
  );
  const { showUserModal } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  const handleShowUserModal = () => {
    dispatch(setShowUserModal());
  };

  useEffect(() => {
    dispatch(getCart());
    dispatch(getAllFavorites());
  }, [dispatch]);

  return (
    <>
      <nav className="hidden sm:block">
        <ul className="flex gap-4">
          <li className="relative">
            {showUserModal && <UserSetting />}
            <section className="cursor-pointer" onClick={handleShowUserModal}>
              <ProfileIcon />
            </section>
          </li>
          <li className="relative">
            <Link href="/favorites">
              <FavoriteIcon />
              <span className="flex items-center justify-center text-xs font-bold rounded-full p-1 w-[25px] bg-lime-400 absolute top-[70%] right-[30%]">
                {favProducts.length < 10 ? favProducts.length : "9+"}
              </span>
            </Link>
          </li>
          <li className="relative">
            <Link href="/cart">
              <CartIcon />
              <span className="flex items-center justify-center text-xs font-bold rounded-full p-1 w-[25px] bg-lime-400 absolute top-[70%] right-[30%]">
                {cartItems.length < 10 ? cartItems.length : "9+"}
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* mobile */}
      <nav className="block sm:hidden ">
        <ul className="flex gap-4 w-1/2">
          <li className="relative">
            {showUserModal && <UserSetting />}
            <section className="cursor-pointer" onClick={handleShowUserModal}>
              <ProfileIcon />
            </section>
          </li>
          <li>
            <Link href="/favorites">
              <FavoriteIcon />
            </Link>
          </li>
          <li className="relative">
            <Link href="/cart">
              <CartIcon />
              <span className="flex items-center justify-center text-xs font-bold rounded-full p-1 w-[25px] bg-lime-400 absolute top-[70%] right-[30%]">
                {cartItems.length < 10 ? cartItems.length : "9+"}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default UserIconsSection;
