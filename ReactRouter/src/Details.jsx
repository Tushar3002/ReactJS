import React from 'react'
import { useParams } from 'react-router'

function Details() {
    const param=useParams()
    
    console.log(param);
    
  return (
    <div>
        <h1>Stud Detail</h1>

        <h3>User ID is : {param.id}</h3>
    </div>
  )
}

export default Details