import React, { useContext } from 'react'
import { AppContext } from './UserContext'

function Child() {
  // const data=useContext(AppContext)
  const {userData,myName}=useContext(AppContext)
  return (
    <div>Name is {userData.name}
    <h1>{myName}</h1></div>
  )
}

export default Child