import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="nav-container">
        <NavLink to={"/"} className="logo">TAN</NavLink>

        <ul className="nav-links">
          <li>
            <NavLink to={"/"}>HOME</NavLink>
          </li>
          <li>
            <NavLink to={"/old"}>FetchOld</NavLink>
          </li>
          <li>
            <NavLink to={"/rq"}>FetchRQ</NavLink>
          </li>
          <li>
            <NavLink to={"/infinite"}>InfiniteScroll</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header