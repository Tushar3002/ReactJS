import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    const [rcount,setRCount]=useState(10)
  return (
    <div>
        <h1>{count}</h1>
        <h1>{rcount}</h1>
        <button onClick={()=>setCount(count+1)}>Count</button>
        <button onClick={()=>setRCount(rcount-1)}>RCount</button>
    </div>
    
  )
}

export default Counter