import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext';

function Header() {
      const { user } = useAuth();
  return (
    <div>
        <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>

      {!user ? (
        <Link to="/login">Login</Link>
      ) : (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/logout">Logout</Link>
        </>
      )}
    </div>
  )
}

export default Header