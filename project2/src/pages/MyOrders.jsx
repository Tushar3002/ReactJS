import { useEffect, useState } from "react";
import { api, getOrders, getSingleProducts, getUser } from "../api/api";
import { useAuth } from "../auth/AuthContext";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [curUser,setCurUser]=useState("")
  const {user}= useAuth()
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await getOrders();
        setOrders(res.data);
        console.log(res.data);
        console.log(user.id);
        
      } catch (err) {
        setError("Failed to load orders");
        console.error(err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  useEffect(()=>{
    const singleProduct=async()=>{
      try {
        const res=await getUser(user.id)
        console.log(res.data);
        setCurUser(res.data)
      } catch (err) {
        setError("Failed to load orders");
        console.error(err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    }
    singleProduct()
  },[])

  if (loading) {
    return <p className="p-6">Loading orders...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-500">{error}</p>;
  }

  if (orders.length === 0) {
    return <p className="p-6">No orders found</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Name : {curUser.name}</h1>

      {orders.map((order) => (
        <div key={order.id} className="border p-4 mb-4 rounded">
          <h2 className="font-semibold">Order #{order.id}</h2>

          <p className="text-sm text-gray-600">
            Status: <span className="font-medium">{order.status}</span>
          </p>

          <p className="font-medium">Total: ₹ {order.totalPrice.toFixed(2)}</p>

          <div className="mt-3 space-y-2">
            {order.OrderItems?.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center border-t pt-2"
              >
                <img
                  src={item.Product?.imageUrl}
                  alt={item.Product?.name}
                  className="w-16 h-16 object-cover rounded border"
                />

                <div>
                  <p className="font-medium">
                    {item.Product?.name || "Unknown Product"}
                  </p>
                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity}
                  </p>
                  <p className="text-sm">₹ {item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;