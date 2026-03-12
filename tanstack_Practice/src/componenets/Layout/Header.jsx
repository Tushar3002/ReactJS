import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
        <div>
            <NavLink to={"/"}>TAN</NavLink>
            <ul>
                <li>
                    <NavLink to={"/"}>HOME</NavLink>
                </li>
                <li>
                    <NavLink to={"/old"}>FetchOld</NavLink>
                </li>
                <li>
                    <NavLink to={"/rq"}>FetchRQ</NavLink>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header