// layouts/PrivateLayout.js
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import Header from "./Header";

const PrivateLayout = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" />;

  return (
    <>
        <Header/>
        <Outlet/>
    </>
);
};

export default PrivateLayout;