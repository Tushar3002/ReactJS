import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getProducts = () => {
  return api.get("/products");
};

export const getSingleProducts = (id) => {
  return api.get(`/products/${id}`);
};

export const createProduct = (data) => {
  return api.post("/products", data);
};

export const deleteProduct=(id)=>{
  return api.delete(`/products/${id}`)
}

export const editProduct=(id,data)=>{
  return api.put(`/products/${id}`,data)
}

export const loginUser = (data) => api.post("/auth/login", data);
export const registerUser = (data) => api.post("/auth/register", data);

export const createOrder = (data) => api.post("/orders", data);