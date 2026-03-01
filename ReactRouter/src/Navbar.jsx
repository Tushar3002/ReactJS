import React from 'react'
import { Link } from 'react-router'
import './header.css'

function Navbar() {
  return (
    <div className='header'>
        <div>
            <Link className='link' to='/'><h1>LOGO</h1></Link>
        </div>
    <div>
        <ul>
            <li><Link className='link' to='/'>Home</Link></li>
            <li><Link className='link' to='/about'>About</Link></li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar
