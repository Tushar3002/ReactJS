import React from "react";
import { fetchInd } from "../API/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function FetchRQDetails() {
  const { id } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["post"], //in place of state
    queryFn: () => fetchInd(id), //IN place of useEffect
  });
    console.log(data);

  if (isPending) return <p>Pending ...</p>;
  if (isError) return <p>Error : {error.message || "Something is wrong"}</p>;

  return <div>Hello {id}
    <ul>
        <li>
            <h1>{data.title}</h1>
            <h5>{data.body}</h5>
        </li>
    </ul>
  </div>;
}

export default FetchRQDetails;
