import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { getAddresses } from "../redux/features/address/addressAction";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

// interface Address {
//   id: string;
//   name: string;
//   street: string;
//   city: string;
//   state: string;
//   postal_code: string;
//   country: string;
// }
interface Props {
  //   addresses: Address[];
  shippingAddressID: string;
  handleAddressSelection: (id: string) => void;
}
const AddressComponent = ({
  shippingAddressID,
  handleAddressSelection,
}: Props) => {
  const dispatch = useAppDispatch();
  const { addresses } = useSelector((state: RootState) => state.addresses);

  const handleAddress = (id: string) => {
    handleAddressSelection(id);
  };

  useEffect(() => {
    dispatch(getAddresses());
  }, []);
  return (
    <div className="flex flex-col ">
      <p>Select address</p>
      <p className="text-sm">Select an address to delivery your package</p>
      <div className="flex flex-col gap-2 justify-between">
        {addresses.map((address) => (
          <div
            key={address.id}
            className={`
              p-2 text-xs border-2 rounded-xl cursor-pointer hover:bg-lime-500 duration-500
              ${address.id === shippingAddressID ? "bg-lime-500" : " "}
              `}
            onClick={() => handleAddress(address.id)}
          >
            <p className="font-bold">{address.address_name}</p>
            <p>{`${address.street}, ${address.city}`}</p>
            <p>{`${address.state} | ${address.postal_code}`}</p>
            <p>{address.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AddressComponent;
