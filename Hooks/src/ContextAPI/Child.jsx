import React, { useContext } from 'react'
import { AppContext } from './UserContext'

function Child() {
    const data=useContext(AppContext)
  return (
    <div>Name is {data.name}</div>
  )
}

export default Child