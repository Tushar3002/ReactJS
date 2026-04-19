import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

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
          className="bg-amber-400  rounded-xl m-3 p-1 hover:bg-amber-600 cursor-pointer "
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>

        <Link
          className="mx-5 text-lg hover:text-blue-700 hover:text-xl "
          to={`/product/${product.id}`}
        >
          View Details
        </Link>
      </div>
      {/* <div className="p-4 flex flex-col gap-2">
        <h4 className="text-lg font-semibold text-gray-800">
          {product.title.slice(0, 40)}
        </h4>

        <p className="text-green-600 text-xl font-bold">₹ {product.price}</p>

        <div className="flex items-center justify-between mt-3">
          <button
            className="bg-amber-600 text-white px-3 py-1 rounded-lg hover:bg-amber-700 active:scale-95 transition"
            onClick={() => dispatch(addToCart(product))}
          >
            Add
          </button>

          <Link
            className="text-blue-600 hover:underline hover:text-blue-800 transition"
            to={`/product/${product.id}`}
          >
            Details →
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default ProductCard;
