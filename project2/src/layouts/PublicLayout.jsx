// layouts/PublicLayout.js
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import App from "../App";


const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
};

export default PublicLayout;