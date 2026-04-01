import axios from 'axios'

// export const getRec=async()=>{
//     return axios.get('https://dummyjson.com/recipes')
// }

export const getRec = async ({ request }) => {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page")) || 1; 
  const limit = 10; 
  const skip = (page - 1) * limit;

  const res = await axios.get(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`);
  return { ...res.data, page, limit }; 
};

export const getIdRec=async({params })=>{
    return axios.get(`https://dummyjson.com/recipes/${params.id}`)
}