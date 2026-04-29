import { useState, useEffect } from "react";
import { createProduct } from "../api/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: "",
    stock: "",
    category: "",
  });

  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      navigate("/login");
    } else if (user.role !== "admin") {
      navigate("/");
    }
  }, [user, loading, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProduct({
        ...form,
        price: Number(form.price),
      });

      setForm({
        name: "",
        price: "",
        description: "",
        imageUrl: "",
        stock: "",
        category: "",
      });

      navigate("/");
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  if (loading) return <p>Loading...</p>;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
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
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />

        <input
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />

        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />

        <input
          name="imageUrl"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
        <input
          name="stock"
          placeholder="STOCK"
          value={form.stock}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />
        <input
          name="category"
          placeholder="CTEGORY"
          value={form.category}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

// import {z} from 'zod'
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';

// const schema=z.object({
//   name:z.string().min(2,"Product Name required"),
//     price:z.coerce.number().positive("Price should be positive"),
//     description:z.string().optional(),
//     imageUrl:z.string().url().optional()
// });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     resolver: zodResolver(schema),
//   });
