import axios from "axios";
import { useLayoutEffect } from "react";


const api=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/"
})

export const getPost=()=>{
    return api.get('/posts')
}

export const deletePost=(id)=>{
    return api.delete(`/posts/${id}`)
}

export const addPost=(post)=>{
    return api.post('/posts',post)
}

export const updatePost=(id,post)=>{
    return api.put(`/posts/${id}`,post)
}

//=================OR
// import axios from "axios";

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// export const getPost = () => {
//   return axios.get(BASE_URL);
// };

// export const deletePost = (id) => {
//   return axios.delete(`${BASE_URL}/${id}`);
// };

// export const addPost = (post) => {
//   return axios.post(BASE_URL, post);
// };

// export const updatePost = (id, post) => {
//   return axios.put(`${BASE_URL}/${id}`, post);
// };


//==============OR

// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com",
// });

// export const getPost = async () => {
//   const res = await api.get("/posts");
//   return res.data;
// };

// export const deletePost = async (id) => {
//   const res = await api.delete(`/posts/${id}`);
//   return res.data;
// };

// export const addPost = async (post) => {
//   const res = await api.post("/posts", post);
//   return res.data;
// };

// export const updatePost = async (id, post) => {
//   const res = await api.put(`/posts/${id}`, post);
//   return res.data;
// };

