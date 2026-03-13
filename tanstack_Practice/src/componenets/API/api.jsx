import axios from 'axios'

const api=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/"
});


export const fetchPost=async(pageNumber)=>{
   const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`)
   return res.status === 200 ? res.data : [];
}


export const fetchInd=async(id)=>{
   const res = await api.get(`/posts/${id}`)
   return res.status === 200 ? res.data : [];
}

export const deletePost=async(id)=>{
    return api.delete(`/posts/${id}`)
}