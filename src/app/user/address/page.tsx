"use client";
import { useEffect, useState } from "react";
import AddAddressComponent from "./AddAddressComponent";
import AddressComponent from "./AddressComponent";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { getAddresses } from "@/app/redux/features/address/addressAction";
import AddNewAddressButton from "./AddNewAddressButton";
import UpdateAddressComponent from "./UpdateAddressComponent";
import Loading from "@/app/components/Loading";

const Address = () => {
  const dispatch = useAppDispatch();
  const [addAddress, setAddAddress] = useState<boolean>(false);
  const { addresses, isLoading, isEdit } = useSelector(
    (state: RootState) => state.addresses
  );
  const handleVisible = () => {
    setAddAddress(!addAddress);
  };

  useEffect(() => {
    dispatch(getAddresses());
  }, []);
  return (
    <div className="flex gap-4 flex-col relative">
      <AddNewAddressButton handleVisible={handleVisible} />

      <div className="flex flex-col gap-4">
        <p>Saved Addresses</p>
        <section className="flex flex-wrap gap-2 justify-center">
          {isLoading ? (
            <Loading />
          ) : addresses ? (
            addresses.map((address) => (
              <AddressComponent key={address.id} {...address} />
            ))
          ) : (
            <p className="italic underline">No address record...</p>
          )}
        </section>
      </div>
      {addAddress && <AddAddressComponent handleVisible={handleVisible} />}
      {isEdit && <UpdateAddressComponent />}
    </div>
  );
};
export default Address;
