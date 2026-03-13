import React, { useEffect, useState } from "react";
import { fetchPost } from "../API/api";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

function FetchRQ() {
  // const [posts,setPosts]=useState([])

  // useEffect(()=>{
  //     fetchData()
  // },[])

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts"], //in place of state
    queryFn: fetchPost, //IN place of useEffect
  });

  if (isPending) return <p>Pending ...</p>;
  if (isError) return <p>Error : {error.message || "Something is wrong"}</p>;
  return (
    <div>
      <ul>
        {data?.map((cur, idx) => {
          return (
            <li key={cur.id}>
              <NavLink to={`/rq/${cur.id}`}>
                <div>
                  <h1>Title:</h1>
                  <p>{cur.title}</p>
                </div>
                <p>BODY : {cur.body}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FetchRQ;
