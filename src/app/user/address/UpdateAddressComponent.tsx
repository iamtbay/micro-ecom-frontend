import InputComponent from "@/app/components/InputComponent";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import CloseIcon from "@/app/icons/CloseIcon";
import { updateAddress } from "@/app/redux/features/address/addressAction";
import {
  handleEditAction,
  handleEditChange,
} from "@/app/redux/features/address/addressSlice";
import { RootState } from "@/app/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const UpdateAddressComponent = () => {
  const { editAddress } = useSelector((state: RootState) => state.addresses);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateAddress(editAddress));

    //close the modal
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleEditChange({ name, value }));
  };

  const handleVisible = () => {
    dispatch(handleEditAction());
  };
  useEffect(() => {}, []);
  return (
    <div className="bg-gray-300 rounded-xl p-2 absolute w-full flex flex-col z-[9999]">
      <p
        onClick={handleVisible}
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
          value={editAddress.address_name}
          onChange={handleChange}
          labelText="Address Name"
        />

        <InputComponent
          name="street"
          value={editAddress.street}
          onChange={handleChange}
          labelText="Street"
        />
        <InputComponent
          name="city"
          value={editAddress.city}
          onChange={handleChange}
          labelText="City"
        />
        <InputComponent
          name="state"
          value={editAddress.state}
          onChange={handleChange}
          labelText="State"
        />
        <InputComponent
          name="postal_code"
          value={editAddress.postal_code}
          onChange={handleChange}
          labelText="Postal Code"
        />
        <InputComponent
          name="country"
          value={editAddress.country}
          onChange={handleChange}
          labelText="Country"
        />
        <InputComponent
          name="phone_number"
          value={editAddress.phone_number}
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
          Update Address
        </button>
      </form>
    </div>
  );
};
export default UpdateAddressComponent;
