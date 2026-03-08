import React from "react";
import { NavLink, useNavigate } from "react-router-dom";


export const ErrorPage = () => {
    const navigate = useNavigate();
    function handleGoHome() {
        navigate(-1); //  take back to the previous page
    }
  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      {/* <NavLink to="/" style={{color: "blue", textDecoration: "underline"}}>
        Go back to Home
      </NavLink> */}
        <button onClick={() => handleGoHome()} style={{marginTop: "20px", padding: "10px 20px", fontSize: "16px"}}>
        Go back to Home
      </button>
    </div>
  );
};