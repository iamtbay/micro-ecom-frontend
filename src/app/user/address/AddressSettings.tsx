import CloseIcon from "@/app/icons/CloseIcon";
import DeleteIcon from "@/app/icons/DeleteIcon";
import EditIcon from "@/app/icons/EditIcon";

type Props = {
  handleShow: () => void;
  handleDelete: () => void;
  handleEdit: () => void;
};
const AddressSettings = (props: Props) => {
  return (
    <div
      className="flex flex-col justify-center items-center rounded-2xl
        absolute top-0 left-0 w-full h-full bg-blue-200
         z-10 overflow-hidden
        "
    >
      <div
        onClick={props.handleShow}
        className="cursor-pointer bg-gray-400 hover:bg-gray-500 w-full 
            flex justify-center items-center h-[50%] duration-500"
      >
        <CloseIcon />{" "}
      </div>
      <div className="flex justify-between items-center h-[50%] bg-green-200 w-full">
        <div
          onClick={props.handleEdit}
          className="cursor-pointer bg-orange-300 hover:bg-orange-400 flex w-[50%] flex justify-center items-center h-full duration-500"
        >
          <EditIcon />
        </div>

        <div
          onClick={props.handleDelete}
          className="cursor-pointer bg-red-400 hover:bg-red-500 flex w-[50%] flex justify-center items-center h-full  duration-500"
        >
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};
export default AddressSettings;
