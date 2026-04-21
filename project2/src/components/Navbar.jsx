import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../auth/AuthContext";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  const { user, logout } = useAuth();

  const role = user?.role;

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
      <h1 className="text-xl font-semibold">
        <Link to="/">MyStore</Link>
      </h1>

      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>

        <Link to="/cart" className="relative hover:text-gray-300">
          Cart
          <span className="ml-1 bg-red-500 text-xs px-2 py-0.5 rounded-full">
            {cartItems.length}
          </span>
        </Link>

        {/* 🔐 ADMIN ONLY */}
        {role === "admin" && (
          <Link to="/add" className="hover:text-gray-300">
            Add Product
          </Link>
        )}

        {/* 🔐 AUTH BUTTONS */}
        {user ? (
          <button
            onClick={logout}
            className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
            <Link to="/register" className="hover:text-gray-300">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;