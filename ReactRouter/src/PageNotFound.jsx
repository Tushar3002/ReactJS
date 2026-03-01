import React from 'react'
import { Link } from 'react-router'

function PageNotFound() {
  return (
    <div style={{textAlign:"center"}}>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  )
}

export default PageNotFound
