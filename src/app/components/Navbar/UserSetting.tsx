"use client";

import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { RootState } from "@/app/redux/store";
import { logout } from "@/app/redux/features/auth/authActions";
import Link from "next/link";
import { useSelector } from "react-redux";

const UserSetting = () => {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="absolute flex flex-col bg-lime-400 top-[110%] left-[-150%] gap-2 px-6 py-2 rounded-2xl z-50">
      {isAuthenticated ? (
        <>
          <p className="text-sm font-bold capitalize">{user.name}</p>
          <ul className="flex flex-col gap-2 text-xs">
            <Link className="hover:underline" href={"/user/address"}>
              Addresses
            </Link>
            <Link className="hover:underline" href={"/user/orders"}>
              Orders
            </Link>
            <Link className="hover:underline" href={"/user/settings"}>
              Settings
            </Link>
            <Link
              className="hover:underline"
              href={"/"}

              onClick={handleLogout}
            >
              Logout
            </Link>
          </ul>
        </>
      ) : (
        <>
          <Link href="/auth" className="flex flex-col items-center gap-2 ">
            <p className="text-sm">Login</p>
          </Link>
        </>
      )}
    </div>
  );
};
export default UserSetting;
