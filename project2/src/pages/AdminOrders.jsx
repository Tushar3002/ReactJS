import { useEffect, useState } from "react";
import { api } from "../api/api";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await api.get("/orders/admin");
      setOrders(res.data);
      console.log("FETCH",res.data);
      
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/orders/${id}/status`, { status });
      fetchOrders(); // refresh
    } catch (err) {
      console.error(err);
    }
  };

  const updatePaymentStatus= async(id,paymentStatus)=>{
    try {
      await api.put(`/orders/${id}/paymentStatus`,{paymentStatus})
      fetchOrders()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Orders</h1>

      {orders.map((order) => (
        <div key={order.id} className="bg-white p-4 mb-4 shadow rounded">
          
          <div className="flex justify-between">
            <p><b>Order ID:</b> {order.id}</p>
            <p><b>Total:</b> ₹ {order.totalPrice}</p>
          </div>

          <p className="text-sm text-gray-500">
            {new Date(order.createdAt).toLocaleString()}
          </p>

          {/* Items */}
          <div className="mt-2">
            {order.OrderItems?.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.Product?.name} x {item.quantity}</span>
                <span>₹ {item.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-3">
            <span>Status:</span>

            <select
              value={order.status}
              onChange={(e) => updateStatus(order.id, e.target.value)}
              className="border p-1 rounded"
            >
              <option value="pending">Pending</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
            </select>

            
          </div>

          <div className="mt-3 flex items-center gap-3">
            <span>Payment : </span>

            <select
              value={order.paymentStatus}
              onChange={(e) => updatePaymentStatus(order.id, e.target.value)}
              className="border p-1 rounded"
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select> 
          </div>
          <div>
            <span>Payment Method : </span><span> {order.paymentMethod}</span>
          </div>

        </div>
      ))}
    </div>
  );
};

export default AdminOrders;