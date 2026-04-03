import axios from 'axios';

export const api = axios.create({
    baseURL: "https://dummyjson.com",
});

//https://fakestoreapi.com