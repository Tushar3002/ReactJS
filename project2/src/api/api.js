import axios from 'axios';

export const api = axios.create({
    // baseURL: "https://dummyjson.com",
    baseURL: "http://localhost:5000/api"
});

//https://fakestoreapi.com