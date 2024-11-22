import { useRouter } from "next/navigation";

const CheckoutButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/checkout")
  };
  return (
    <button
      className="bg-lime-400 p-2 rounded-2xl hover:bg-lime-500 duration-500 text-sm "
      onClick={handleClick}
    >
      Checkout
    </button>
  );
};
export default CheckoutButton;
