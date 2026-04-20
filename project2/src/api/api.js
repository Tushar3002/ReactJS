import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// 🔐 attach token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

// 📦 PRODUCTS
export const getProducts = () => {
  return api.get("/products");
};

export const createProduct = (data) => {
  return api.post("/products", data);
};

// 🔐 AUTH
export const loginUser = (data) => api.post("/auth/login", data);
export const registerUser = (data) => api.post("/auth/register", data);