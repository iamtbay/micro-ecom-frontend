"use client";
import React, { useEffect } from "react";
import Search from "../Search/Search";
import Link from "next/link";
import UserIconsSection from "./UserIconsSection";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { checkUser } from "@/app/redux/features/auth/authActions";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { getCart } from "@/app/redux/features/cart/cartAction";
import { usePathname } from "next/navigation";
import { closeUserModal } from "@/app/redux/features/auth/authSlice";

const Navbar = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const router = usePathname();

  useEffect(() => {
    dispatch(checkUser());
    dispatch(getCart());
  }, [isAuthenticated, dispatch]);

  useEffect(() => {
    dispatch(closeUserModal());
  }, [router, dispatch]);

  return (
    <main className="p-2 md:p-0">
      <div className="w-full flex flex-wrap items-center justify-between align-center content-center gap-4 sm:hidden">
        <nav>
          <Link href="/" className="text-3xl w-1/2 font-updock cursor-pointer">
            tyrcae
          </Link>
        </nav>

        <UserIconsSection />
        <nav className="mx-auto">
          <Search />
        </nav>
      </div>

      {/* desktop */}
      <div className="w-full hidden sm:block sm:flex align-center items-center justify-between">
        <nav>
          <Link href="/" className="text-3xl w-1/2 font-updock cursor-pointer">
            tyrcae
          </Link>
        </nav>
        <nav>
          <ul className="flex gap-4">
            <Search />
          </ul>
        </nav>
        <UserIconsSection />
      </div>
    </main>
  );
};

export default Navbar;
