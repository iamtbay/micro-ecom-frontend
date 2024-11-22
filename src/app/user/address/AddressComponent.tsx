"use client";
import SettingsIcon from "@/app/icons/SettingsIcon";
import { useState } from "react";
import AddressSettings from "./AddressSettings";
import {
  Address,
  handleEditAction,
  handleEditAddress,
} from "@/app/redux/features/address/addressSlice";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { deleteAddress } from "@/app/redux/features/address/addressAction";

const AddressComponent = (address: Address) => {
  const dispatch = useAppDispatch();
  const [showIcons, setShowIcons] = useState<boolean>(false);

  const handleShow = () => {
    setShowIcons(!showIcons);
  };
  const handleDelete = () => {
    console.log("Delete");
    dispatch(deleteAddress(address?.id || ""));
  };

  const handleEdit = async () => {
    await dispatch(handleEditAddress(address));
    await dispatch(handleEditAction());
  };
  return (
    <div
      className={`rounded-2xl ${
        showIcons ? "p-2 md:p-4 justify-center items-center" : "p-2 md:p-4"
      } 
      border-2 w-[45%] md:w-[32%] relative flex flex-col overflow-hidden`}
    >
      <div
        onClick={handleShow}
        className="absolute top-1 right-1 rounded-3xl border-2 md:top-2 md:right-2 cursor-pointer hover:border-green-300 hover:scale-110 duration-500"
      >
        <SettingsIcon />
      </div>
      <p className="text-xs md:text-sm">{address.address_name}</p>
      <p className="text-xs md:text-sm">{address.street}</p>
      <p className="text-xs md:text-sm">{`${address.city} | ${address.country}`}</p>
      <p className="text-xs md:text-sm">{address.postal_code}</p>
      {showIcons && (
        <AddressSettings
          handleShow={handleShow}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      )}
    </div>
  );
};
export default AddressComponent;
