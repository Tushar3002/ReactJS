// layouts/PrivateLayout.js
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivateLayout = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" />;

  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
);
};

export default PrivateLayout;