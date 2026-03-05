import React, { useState } from 'react'

function UseState() {
  const [count,setCount]=useState(0)

  const handleCounter=(val)=>{
    if(val==="inc") setCount((prev)=>prev+1)
    if(val==="dec") setCount((prev)=>prev-1)
  }
  return (
    <div>
      <button onClick={()=>handleCounter("inc")}>+</button>
      <h1>{count}</h1>
      <button onClick={()=>handleCounter("dec")}>-</button>

    </div>
  )
}

export default UseState