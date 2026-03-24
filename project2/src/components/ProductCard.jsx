import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid gray", padding: "10px", width: "200px" }}>
      <img src={product.image} alt="" width="100%" height="150px" />
      <h4>{product.title.slice(0, 20)}...</h4>
      <p>₹ {product.price}</p>

      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>

      <br />

      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;