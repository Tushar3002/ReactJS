//it doesnot re render
// it can refer to an DOM element like in below

import React, { useRef } from 'react'

function UseRefHook() {
    const myRef=useRef();

    const changeColor=()=>{
        myRef.current.focus()
        myRef.current.style.backgroundColor="blue"
    }
  return (
    <div>
        <input type="text" ref={myRef} />
        <br /><br /><br />
        <button onClick={changeColor}>Click</button>
    </div>
  )
}

export default UseRefHook