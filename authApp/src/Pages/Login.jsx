// Pages/Login.js
import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

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