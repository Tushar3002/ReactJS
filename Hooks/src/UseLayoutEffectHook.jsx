//useLayoutEffect() runs synchronously after a render before teh screen is updated

//useEffect() runs asynchronously and after a render is painted to the screen


import React, { useLayoutEffect, useState } from 'react'



function UseLayoutEffectHook() {

    const [num,setNum]=useState(0)
    useLayoutEffect(()=>{
        if(num===0) setNum(Math.floor(num + Math.random()*100))
    },[num])
  return (
    <div>
        
        <p>Random : {num}</p>
        <button onClick={()=>setNum(0)}>Random Number</button>
    </div>
  )
}

export default UseLayoutEffectHook