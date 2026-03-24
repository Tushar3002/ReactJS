import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../features/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Cart</h1>

      {cartItems.length === 0 && <p>Cart is empty</p>}

      {cartItems.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <h4>{item.title}</h4>
          <p>₹ {item.price}</p>

          <button onClick={() => dispatch(removeCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;