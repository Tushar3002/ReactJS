import { useEffect, useState } from "react";
import { getWish, removeWish } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const fetchWishlist = async () => {
    try {
      const res = await getWish();
      console.log("WishList", res.data.wishlist);

      setWishlist(res.data.wishlist);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const handleRemove = async (productId) => {
    try {
      await removeWish(productId);

      setWishlist((prev) => prev.filter((item) => item.id !== productId));
    } catch (err) {
      console.error(err);
    }
  };
  console.log("TJ", wishlist);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Wishlist </h2>

      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <div style={{ display: "grid", gap: "15px" }}>
          {wishlist.map((item) => {
            const isInCart = cartItems.some((cart) => cart.id === item.id);

            return (
              <div key={item.id} className="border p-3 rounded-xl">
                <img src={item.imageUrl} alt={item.name} width="150" />

                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                <button
                  className={`bg-amber-400 px-3 py-1 rounded ${
                    isInCart ? "bg-gray-400 cursor-not-allowed" : ""
                  }`}
                  onClick={() => dispatch(addToCart(item))}
                  disabled={isInCart}
                >
                  {isInCart ? "Added" : "Add to Cart"}
                </button>

                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
