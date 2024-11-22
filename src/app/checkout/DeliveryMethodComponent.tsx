interface DeliveryMethod {
  id: string;
  method: string;
  price: number;
}
interface Props {
  deliveryMethods: DeliveryMethod[];
}

const DeliveryMethodComponent = ({ deliveryMethods }: Props) => {
  return (
    <div className="flex flex-col ">
      <p>select delivery method</p>
      <p className="text-sm">Select a delivery method</p>
      <div className="flex gap-2 justify-start ">
        {deliveryMethods.map((deliveryMethod: DeliveryMethod) => (
          <div
            key={deliveryMethod.id}
            className="p-2 text-xs border-2 rounded-xl cursor-pointer hover:bg-lime-500 duration-500"
          >
            <p className="font-bold">{deliveryMethod.method}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DeliveryMethodComponent;
