type Props = {
  brand?:string
  name?: string;
  content?: string;
};
const ProductInfoComponent = ({name,content,brand}: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-bold">{brand}</p>
      <p className="text-md font-bold">{name}</p>
      <p className="text-sm">{content}</p>
    </div>
  );
};
export default ProductInfoComponent;
