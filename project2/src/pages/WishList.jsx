import { useEffect, useState } from "react";
import { getWish, removeWish } from "../api/api";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchWishlist = async () => {
    try {
      const res = await getWish();
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

      setWishlist((prev) =>
        prev.filter((item) => item.id !== productId)
      );
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Wishlist </h2>

      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <div style={{ display: "grid", gap: "15px" }}>
          {wishlist.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                width="150"
              />

              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              <button onClick={() => handleRemove(item.id)}>
                Remove 
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;