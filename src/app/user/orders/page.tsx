"use client";
import Loading from "@/app/components/Loading";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { checkUser } from "@/app/redux/features/auth/authActions";
import { getOrders } from "@/app/redux/features/orders/ordersAction";
import { RootState } from "@/app/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import OrderComponent from "./OrderComponent";

const OrdersPage = () => {
  const { isLoading, orders } = useSelector((state: RootState) => state.orders);
  const dispatch = useAppDispatch();

  const handleFetches = async () => {
    await dispatch(checkUser());
    await dispatch(getOrders());
  };

  useEffect(() => {
    handleFetches();
  }, []);
  return (
    <div>
      Orders
      <section className="flex flex-col gap-2">
        {isLoading ? (
          <Loading />
        ) : orders ? (
          orders.map((order) => (
            <OrderComponent key={order.order_id} {...order} />
          ))
        ) : (
          <p>No order</p>
        )}
      </section>
    </div>
  );
};
export default OrdersPage;
