import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
        <Link to='/'>Form</Link>
        <Link to='/zod'>ZodForm</Link>
    </div>
  )
}

export default Header