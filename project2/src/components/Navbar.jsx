import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
      <h1 className="text-xl font-semibold"><Link to='/'>MyStore</Link></h1>

      <div className="flex items-center gap-6">
        <Link 
          to="/" 
          className="hover:text-gray-300 transition duration-200"
        >
          Home
        </Link>

        <Link 
          to="/cart" 
          className="relative hover:text-gray-300 transition duration-200"
        >
          Cart
          <span className="ml-1 bg-red-500 text-xs px-2 py-0.5 rounded-full">
            {cartItems.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;