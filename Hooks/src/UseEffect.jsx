import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [screenWidth,setScreenWidth]=useState(window.innerWidth)
    const handleScreen=()=>{
        setScreenWidth(()=>window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener("resize",handleScreen)

        return () => {
      window.removeEventListener("resize", handleScreen);
    };
  }, []);
    // window.addEventListener("resize",handleScreen)
  return (
    <div>
        <h1>{screenWidth}</h1>
    </div>
  )
}

export default UseEffect

// Use useEffect for side effects like:

// API calls

// Event listeners

// timers

// subscriptions

// Because React renders many times, but you usually want side effects only once or when dependencies change.