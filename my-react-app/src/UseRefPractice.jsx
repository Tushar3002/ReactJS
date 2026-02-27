import React, { useRef } from 'react'

function UseRefPractice() {
    const userRef=useRef(null)
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(userRef.current.value);
        
    }
  return (
    <div>
        <form action="" method="get" onSubmit={handleSubmit}>
            <label htmlFor="user">Name : </label>
            <input ref={userRef} type="text" id='user' />
            <input type="submit" name="" id="" />
        </form>
    </div>
  )
}

export default UseRefPractice