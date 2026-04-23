import { useEffect, useState } from "react";
import { api } from "../api/api";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await api.get("/orders");
      setOrders(res.data);
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">My Orders</h1>

      {orders.map(order => (
        <div key={order.id} className="border p-4 mb-4">
          <h2>Order #{order.id}</h2>
          <p>Status: {order.status}</p>
          <p>Total: ₹ {order.totalPrice}</p>

          {order.OrderItems.map(item => (
            <div key={item.id} className="flex gap-4 mt-2">
              <img src={item.Product.imageUrl} className="w-16" />
              <div>
                <p>{item.Product.name}</p>
                <p>Qty: {item.quantity}</p>
                <p>₹ {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;