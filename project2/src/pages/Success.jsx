import { Link, useLocation } from "react-router-dom";

const Success = () => {
  const { state } = useLocation();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-green-600">
        Order Placed Successfully
      </h1>

      {state && (
        <div className="mt-4 text-center">
          <p className="text-lg">Order ID: {state.orderId}</p>
          <p className="text-lg">Total: ₹ {state.total}</p>
        </div>
      )}

      <Link
        to="/"
        className="mt-4 text-blue-500 underline"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Success;