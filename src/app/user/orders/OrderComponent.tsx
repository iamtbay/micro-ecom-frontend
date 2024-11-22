import { Order } from "@/app/redux/features/orders/ordersSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";

const OrderComponent = (order: Order) => {
  const date = new Date(order?.order_date || Date.now());
  const router = useRouter();
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const handleShow = () => {
    setShowDetails(!showDetails);
  };
  const handleNavigate = (id: string) => {
    router.push(`/product/${id}`);
  };
  return (
    <>
      <div className="flex border-2 border-lime-400 rounded-2xl gap-2 text-sm p-2 justify-between items-center">
        <p
          className="text-xs cursor-pointer hover:underline"
          onClick={handleShow}
        >{`${order.products && order.products.length} ${
          order.products && order.products.length > 1 ? "products" : "product"
        }`}</p>
        <p>{order.total_price.toFixed(2)} €</p>
        <p>
          {date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {showDetails && (
        <section className="text-sm">
          <table className="bg-lime-400 w-full rounded-2xl">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {order.products.map((product) => (
                <tr key={product._id}>
                  <td
                    className="hover:underline cursor-pointer"
                    onClick={() => handleNavigate(product._id)}
                  >
                    {product.name}
                  </td>
                  <td>{product.price.toFixed(2)} €</td>
                  <td>{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
};
export default OrderComponent;
