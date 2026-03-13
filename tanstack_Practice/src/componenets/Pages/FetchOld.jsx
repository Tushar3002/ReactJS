import React, { useEffect, useState } from 'react'
import { fetchPost } from '../API/api';

function FetchOld() {

    const [posts,setPosts]=useState([])

    const fetchData=async()=>{
        try {
            const res=await fetchPost()
            setPosts(res)
            // console.log(res);
            console.log(res);
            
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
        <ul>
            {posts&&posts.map((cur,idx)=>{
                return(
                    <li key={idx}>
                    {cur.title}
                </li>
                )
            })}
        </ul>
    </div>
  )
}

export default FetchOld