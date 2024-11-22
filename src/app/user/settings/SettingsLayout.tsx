import Loading from "@/app/components/Loading";
import { RootState } from "@/app/redux/store";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

interface Props {
  children: React.ReactNode;
}
const SettingsLayout = ({ children }: Props) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth");
    }
  }, [isAuthenticated]);
  return (
    <>
      {isAuthenticated ? (
        <div className="flex flex-col gap-2">
          <section className="bg-lime-400 p-2 rounded-2xl border-2 border-skate-400 text-sm flex gap-2 justify-center">
            <Link
              className={`${
                pathname === "/user/settings" && "font-bold"} hover:underline`}
              href={"/user/settings"}
            >
              Personal Settings
            </Link>
            <Link
              className={`${
                pathname === "/user/settings/password" && "font-bold"
              } hover:underline `}
              href={"/user/settings/password"}
            >
              Password
            </Link>
          </section>
          <main>{children}</main>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default SettingsLayout;
