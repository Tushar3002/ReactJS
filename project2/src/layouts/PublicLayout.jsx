// layouts/PublicLayout.js
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import App from "../App";
import Footer from "../components/Footer";


const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />  
    </div>
  )
};

export default PublicLayout;