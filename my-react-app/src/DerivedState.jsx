import React, { useState } from 'react'

function DerivedState() {
    const [users,setUsers] = useState([])
    const [user,setUser] = useState('')
    const handleSubmit=()=>{
        setUsers([...users,user])
        console.log([...users]);
        setUser('')
    }

    const total=users.length
    const last=users[total-1]
    const unique=[...new Set(users)].length

    

  return (
    <div>

        <h1>Derived State </h1>

        <h1>Total Users : {total}</h1>
        <h1>Latest User : {last}</h1>
        <h1>Unique Users : {unique}</h1>

        Eneter Your Name : <input type="text" onChange={(e)=>setUser(e.target.value)} placeholder='UserName' value={user}  />
        <button onClick={handleSubmit}>ADD USERS</button> 
        {
            users.map((x,idx)=>(
                <h3 key={idx}>{x}</h3>
            ))
        }
    </div>
  )
}

export default DerivedState
