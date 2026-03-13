import axios from 'axios'

const api=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/"
});


export const fetchPost=async()=>{
   const res = await api.get('/posts')
   return res.status === 200 ? res.data : [];
}


export const fetchInd=async(id)=>{
   const res = await api.get(`/posts/${id}`)
   return res.status === 200 ? res.data : [];
}
