import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { clearCart } from "../features/cart/cartSlice";
import { api } from "../api/api";



const handlePlaceOrder = () => {
  dispatch(clearCart());
  navigate("/success");
};

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();
const dispatch = useDispatch();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
  try {
    const items = cartItems.map(item => ({
      productId: item.id,
      quantity: item.quantity
    }));

    await api.post("/orders", { items });

    dispatch(clearCart());
    navigate("/success");

  } catch (err) {
    console.error(err);
  }
};

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {/* Address (basic for now) */}
      <input
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
          className="w-full bg-green-600 text-white py-2 mt-4 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;