import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const isInCart = cartItems.some((item) => item.id === product.id);
  return (
    <div className="border border-amber-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-200 bg-white">
      <div className="bg-slate-100 flex items-center justify-center h-50 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-contain h-full w-full"
        />
      </div>
      <div className="bg-slate-200 flex justify-around p-3">
        <h4 className="text-xl">{product.name.slice(0, 15)}</h4>
        <p className="text-green-600 text-lg">₹ {product.price}</p>
      </div>

      <div>
        <button
          className={`bg-amber-400 rounded-xl m-3 p-1 cursor-pointer ${
            isInCart ? "bg-gray-400 cursor-not-allowed" : "hover:bg-amber-600"
          }`}
          onClick={() => dispatch(addToCart(product))}
          disabled={isInCart}
        >
          {isInCart ? "Added" : "Add to Cart"}
        </button>

        <Link
          className="mx-5 text-lg hover:text-blue-700 hover:text-xl "
          to={`/product/${product.id}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
