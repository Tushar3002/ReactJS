// Pages/Logout.js
import { useEffect } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();                
    navigate("/login");     
  }, []);

  return <div>Logging out...</div>;
}

export default Logout;