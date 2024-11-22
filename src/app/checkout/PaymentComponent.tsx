import React from "react";
import InputComponent from "../components/InputComponent";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface CardDetails {
  number: string;
  expiryDate: string;
  cvc: string;
}
interface Props {
  cardDetails: CardDetails;
  handleCardChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckout: (e: React.FormEvent<HTMLFormElement>) => void;
}

const PaymentComponent = ({
  cardDetails,
  handleCheckout,
  handleCardChange,
}: Props) => {
  const { total_price } = useSelector((state: RootState) => state.cart);

  return (
    <div className="text-sm">
      <form
        className="flex flex-col gap-2 justify-center items-center"
        onSubmit={handleCheckout}
      >
        <div>
          <InputComponent
            type="text"
            name="cardNumber"
            value={cardDetails.number}
            onChange={handleCardChange}
            labelText="Card Number"
          />
        </div>
        <div>
          <InputComponent
            type="text"
            name="expiryDate"
            value={cardDetails.expiryDate}
            onChange={handleCardChange}
            labelText="Expiry Date"
          />
        </div>
        <div>
          <InputComponent
            type="text"
            name="cvc"
            value={cardDetails.cvc}
            onChange={handleCardChange}
            labelText="CVC"
          />
        </div>
        <button
          type="submit"
          className="bg-lime-400 hover:bg-lime-500 duration-500 p-2 rounded-2xl self-center w-1/2 font-bold"
        >
          {`Pay ${total_price}`}
        </button>
      </form>
    </div>
  );
};
export default PaymentComponent;
