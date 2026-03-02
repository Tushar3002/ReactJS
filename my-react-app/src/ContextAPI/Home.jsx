import React, { useContext } from 'react'
import { MyContext } from './Index'

function Home() {
    const {myName,age}=useContext(MyContext)
  return (
    <div>
        <h1>Home</h1>
        <h3>Name : {myName}</h3>
        <h5>Age : {age}</h5>
    </div>
  )
}

export default Home