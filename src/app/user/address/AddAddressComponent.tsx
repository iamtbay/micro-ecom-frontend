"use client";
import InputComponent from "@/app/components/InputComponent";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import CloseIcon from "@/app/icons/CloseIcon";
import { addNewAddress } from "@/app/redux/features/address/addressAction";
import React, { useState } from "react";

type Props = {
  handleVisible: () => void;
};
const AddAddressComponent = (props: Props) => {
  const dispatch = useAppDispatch();
  const [addressInfo, setAddressInfo] = useState({
    address_name: "",
    street: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
    phone_number: "", // add this to db
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addNewAddress(addressInfo));
    props.handleVisible();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddressInfo((val) => ({
      ...val,
      [name]: value,
    }));
  };
  return (
    <div className="bg-gray-300 rounded-xl p-2 absolute w-full flex flex-col z-[9999]">
      <p
        onClick={props.handleVisible}
        className="absolute top-5 right-5 cursor-pointer border-2 rounded-full p-1 hover:border-red-300 duration-500"
      >
        <CloseIcon />
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center justify-center"
      >
        <InputComponent
          name="address_name"
          value={addressInfo.address_name}
          onChange={handleChange}
          labelText="Address Name"
        />

        <InputComponent
          name="street"
          value={addressInfo.street}
          onChange={handleChange}
          labelText="Street"
        />
        <InputComponent
          name="city"
          value={addressInfo.city}
          onChange={handleChange}
          labelText="City"
        />
        <InputComponent
          name="state"
          value={addressInfo.state}
          onChange={handleChange}
          labelText="State"
        />
        <InputComponent
          name="postal_code"
          value={addressInfo.postal_code}
          onChange={handleChange}
          labelText="Postal Code"
        />
        <InputComponent
          name="country"
          value={addressInfo.country}
          onChange={handleChange}
          labelText="Country"
        />
        <InputComponent
          name="phone_number"
          value={addressInfo.phone_number}
          onChange={handleChange}
          labelText="Phone Number"
        />

        <button
          type="submit"
          className="bg-lime-400 hover:bg-lime-500 duration-500 px-4 py-2 rounded-3xl
          text-xs
          "
        >
          {" "}
          Add Address
        </button>
      </form>
    </div>
  );
};

export default AddAddressComponent;
