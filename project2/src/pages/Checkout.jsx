import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { clearCart } from "../features/cart/cartSlice";
import { api, createOrder } from "../api/api";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [loading, setLoading] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    if (!address.trim()) {
      alert("Please enter shipping address");
      return;
    }

    try {
      setLoading(true);

      const items = cartItems.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      }));

      const res = await createOrder({
        items,
        shippingAddress: address,
        paymentMethod,
      });

      navigate("/success", {
        state: {
          total,
          orderId: res.data.orderId,
        },
      });
    } catch (err) {
      console.error(err);
      alert("Order failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter Address"
        className="w-full border p-2 mb-4 rounded"
      />

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Order Summary</h2>

        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>₹ {item.price * item.quantity}</span>
          </div>
        ))}

        <hr className="my-3" />

        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>₹ {total}</span>
        </div>

        <button
          onClick={handlePlaceOrder}
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 mt-4 rounded"
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </div>
      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
      >
        <option value="COD">Cash on Delivery</option>
        <option value="UPI">UPI</option>
      </select>
    </div>
  );
};

export default Checkout;
