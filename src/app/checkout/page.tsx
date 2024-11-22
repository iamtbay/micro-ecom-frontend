"use client";
import React, { useState } from "react";
import AddressComponent from "./AddressComponent";
import PaymentComponent from "./PaymentComponent";
import OrderSummary from "./OrderSummary";
import StepButton from "./StepButton";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { checkOutAction } from "../redux/features/cart/cartAction";
import { useRouter } from "next/navigation";

const CheckOut = () => {
  const [steps, setSteps] = useState<number>(1);
  const [cardDetails, setCardDetails] = useState({
    number: "1234123412341234",
    expiryDate: "12/24",
    cvc: "511",
  });
  const [shippingAddressID, setShippingAddressID] = useState({
    address_id: "",
  });
  // const [deliveryMethods, setDeliveryMethods] = useState([
  //   { id: "1", method: "Delivery to home", price: 6.0 },
  //   { id: "2", method: "Delivery to parcel locker", price: 0 },
  // ]);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails((cardDetail) => ({ ...cardDetail, [name]: value }));
  };

  const handleAddressSelection = (addressID: string) => {
    setShippingAddressID({ address_id: addressID });
    handleStepsForward();
  };

  const handleCheckout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(checkOutAction({ shippingAddressID, router }));
  };

  const handleStepsForward = () => {
    if (steps <= 2) {
      setSteps((steps) => steps + 1);
    }
  };

  const handleStepsPrevious = () => {
    if (steps >= 2) {
      setSteps((steps) => steps - 1);
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {/* step 1 */}
      <div className="flex flex-col gap-4 min-h-[400px] min-w-[400px] border-2 rounded-2xl bg-gray-300 p-4">
        <section className="flex justify-between">
          {/* <BackwardIcon />
          <ForwardIcon /> */}
          <StepButton
            handleStep={handleStepsPrevious}
            labelText={"Previous"}
            steps={steps}
            isPrevious={true}
          />
          <StepButton
            handleStep={handleStepsForward}
            labelText={"Next"}
            steps={steps}
            isPrevious={false}
          />
        </section>

        {steps === 1 && (
          <AddressComponent
            shippingAddressID={shippingAddressID.address_id}
            handleAddressSelection={handleAddressSelection}
          />
        )}

        {/* step 2 */}
        {/* {steps === 2 && (
          <DeliveryMethodComponent deliveryMethods={deliveryMethods} />
        )} */}
        {/* step 3 */}
        {steps === 2 && <OrderSummary />}
        {/* step 4 */}
        {steps === 3 && (
          <PaymentComponent
            handleCheckout={handleCheckout}
            handleCardChange={handleCardChange}
            cardDetails={cardDetails}
          />
        )}
      </div>
    </div>
  );
};
export default CheckOut;
