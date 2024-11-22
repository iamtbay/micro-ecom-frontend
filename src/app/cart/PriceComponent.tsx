import CheckoutButton from "../components/CheckoutButton";
interface Props {
  total_price: number;
  cartItemsLength: number;
}

const PriceComponent = ({ total_price, cartItemsLength }: Props) => {
  return (
    <>
      <section
        className="
    sm:flex
    hidden sm:block self-end gap-4 bg-slate-200 p-4 rounded-xl text-sm
    w-1/2
    self-center
    justify-between"
        
      >
        <div>
          <p className="font-medium">
            <span className="font-bold">{total_price.toFixed(2)} € </span>
          </p>
          <p>{`${cartItemsLength} products`}</p>
        </div>
        <CheckoutButton />
      </section>
      {/* price div mobile */}
      <section
        className="headersbottom-5 left-0 right-0 bottom-0 fixed
    bg-gray-200 w-full sm:hidden p-4 flex justify-between rounded-2xl "
      >
        <div className=" ">
          <p className="font-medium">
            Total <span className="font-bold">{total_price.toFixed(2)} € </span>
          </p>
          <p>{`${cartItemsLength} products`}</p>
        </div>
        <CheckoutButton />
      </section>
    </>
  );
};
export default PriceComponent;
