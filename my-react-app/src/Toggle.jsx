import React, { useState } from 'react'

function Toggle() {
    const [display,setDisplay]=useState(true)
  return (
    <div>
        
        <button onClick={()=>setDisplay(!display)}> Click </button>
        {
          display?<h1>Y2j</h1>:null
        }
    </div>

  )
}

export default Toggle