import React, { useEffect, useState } from 'react'


function Clock({color="white"}) {
    const [clock,setClock]=useState(0)
    useEffect(()=>{
         setInterval(()=>{
            setClock(new Date().toLocaleTimeString())
         },[])
        }
    )
  return (
    <div style={{backgroundColor:"black", borderRadius:"10px",width:"200px", paddingLeft:"20px"}}>
        <h1 style={{color:color}}>{clock}</h1>
    </div>
  )
}

export default Clock