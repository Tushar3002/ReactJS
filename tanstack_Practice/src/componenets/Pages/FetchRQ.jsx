import React, { useEffect, useState } from "react";
import { deletePost, fetchPost } from "../API/api";
import { keepPreviousData, QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

function FetchRQ() {
  // const [posts,setPosts]=useState([])

  // useEffect(()=>{
  //     fetchData()
  // },[])

  const queryClient=useQueryClient()
  const [pageNumber,setPageNumber]=useState(0)
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts",pageNumber], //in place of state
    queryFn: ()=>fetchPost(pageNumber), //IN place of useEffect
    placeholderData:keepPreviousData  //it does not show the pending or loadinf msg anymore
  });

  const deleteMutation=useMutation({
    mutationFn:(id)=>deletePost(id),
    onSuccess:(data,id)=>{
      queryClient.setQueryData(["posts",pageNumber],(cur)=>{
        return cur?.filter((postId)=>postId.id!==id)
      })
    }
  })

  if (isPending) return <p>Pending ...</p>;
  if (isError) return <p>Error : {error.message || "Something is wrong"}</p>;
  return (
  <div className="container">
    <ul className="post-list">
      {data?.map((cur) => (
        <li key={cur.id} className="post-card">
          <NavLink to={`/rq/${cur.id}`}>
            <div className="title-row">
              <h6>{cur.id}</h6>
              <h4>Title: {cur.title}</h4>
              
            </div>
            <p className="body">BODY: {cur.body}</p>
          </NavLink>

          <button onClick={()=>deleteMutation.mutate(cur.id)}>Delete</button>
        </li>
      ))}
    </ul>

    <div className="page">
      <button disabled={pageNumber===0?true:false} onClick={()=>setPageNumber((prev)=>prev-3)}>Prev</button>
      <p>{pageNumber/3 +1}</p>
      <button onClick={()=>setPageNumber((prev)=>prev+3)}>Next</button>
    </div>
  </div>
);
}

export default FetchRQ;
