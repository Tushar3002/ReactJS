import axios from 'axios';

export const api = axios.create({
    // baseURL: "https://dummyjson.com",
    baseURL: "http://localhost:5000/api"
});

export const getproducts=()=>{
    return api.get('/')
}

export const createProduct = (data) => {
  return api.post("/products", data);
};
//https://fakestoreapi.com