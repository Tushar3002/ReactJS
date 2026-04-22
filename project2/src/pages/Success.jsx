import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-green-600">
        Order Placed Successfully 
      </h1>

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