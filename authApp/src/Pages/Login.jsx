// Pages/Login.js
import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

import '../App.css'

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (form.username === "tj" && form.password === "111") {
      const fakeResponse = {
        token: "abc123",
        user: { name: form.username },
      };

      login(fakeResponse);

      navigate("/dashboard"); 
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        type="text"
        name="username"
        placeholder="Enter username"
        value={form.username}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={form.password}
        onChange={handleChange}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

// import { useState } from "react";
// import { useAuth } from "../auth/AuthContext";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     username: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (form.username === "tj" && form.password === "111") {
//       const fakeResponse = {
//         token: "abc123",
//         user: { name: form.username },
//       };

//       login(fakeResponse);
//       navigate("/dashboard");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
//       <form 
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           Login
//         </h2>

//         {/* Username */}
//         <input
//           type="text"
//           name="username"
//           placeholder="Enter username"
//           value={form.username}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         {/* Password */}
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter password"
//           value={form.password}
//           onChange={handleChange}
//           className="w-full mb-6 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         {/* Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;