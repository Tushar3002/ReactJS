// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useAuth } from '../auth/AuthContext';

// function Header() {
//       const { user } = useAuth();
//   return (
//     <div className='flex gap-3 '>
//         <Link to="/">Home</Link>
//       <Link to="/about">About Us</Link>

//       {!user ? (
//         <Link to="/login">Login</Link>
//       ) : (
//         <>
//           <Link to="/dashboard">Dashboard</Link>
//           <Link to="/logout">Logout</Link>
//         </>
//       )}
//     </div>
//   )
// }

// export default Header


import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

function Header() {
  const { user } = useAuth();

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo / Brand */}
        <h1 className="text-xl font-bold tracking-wide">
          MyApp
        </h1>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link 
            to="/" 
            className="hover:text-blue-400 transition duration-200"
          >
            Home
          </Link>

          <Link 
            to="/about" 
            className="hover:text-blue-400 transition duration-200"
          >
            About Us
          </Link>

          {!user ? (
            <Link 
              to="/login" 
              className="bg-blue-500 hover:bg-blue-600 px-4 py-1.5 rounded-md transition duration-200"
            >
              Login
            </Link>
          ) : (
            <>
              <Link 
                to="/dashboard" 
                className="hover:text-blue-400 transition duration-200"
              >
                Dashboard
              </Link>

              <Link 
                to="/logout" 
                className="bg-red-500 hover:bg-red-600 px-4 py-1.5 rounded-md transition duration-200"
              >
                Logout
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;