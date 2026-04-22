import { useState } from "react";
import { createProduct } from "../api/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: "",
  });
const navigate = useNavigate();

useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    return navigate("/login");
  }

  try {
    const decoded = jwtDecode(token);

    if (decoded.role !== "admin") {
      return navigate("/"); // block normal users
    }
  } catch (err) {
    console.error("Invalid token");
    navigate("/login");
  }
}, [navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createProduct({
        ...form,
        price: Number(form.price),
      });
      setForm({
  name: "",
  price: "",
  description: "",
  imageUrl: "",
});
      console.log("Created:", res.data);
      navigate("/");
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Add Product</h2>

        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="description"
          placeholder="Description"
            value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          name="imageUrl"
          placeholder="Image URL"
            value={form.imageUrl}

          onChange={(e) =>
            setForm({ ...form, imageUrl: e.target.value })
          }
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;