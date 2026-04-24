import { useState } from "react";
import { registerUser } from "../api/api";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);
      alert("Registered! Now login");
      setForm({ name: "", email: "", password: "" });
      navigate("/login");

    } catch (err) {
      // alert(err.response?.data?.message || "Error");
        console.log(err.response.data);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Register</h2>

        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;