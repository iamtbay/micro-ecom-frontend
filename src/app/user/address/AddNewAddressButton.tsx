interface Props {
  handleVisible: () => void;
}
const AddNewAddressButton = ({ handleVisible }: Props) => {
  return (
    <div className="flex justify-end">
      <button
        className="text-xs bg-lime-400 hover:bg-lime-500 duration-500 rounded-3xl py-2 px-4 "
        onClick={handleVisible}
      >
        Add new Address
      </button>
    </div>
  );
};
export default AddNewAddressButton;
