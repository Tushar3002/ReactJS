import React from 'react'
import { NavLink, Outlet } from 'react-router'

function College() {
  return (
    <div className="college">
        <h1>College</h1>
        <NavLink className={"link"} to="student" >Student</NavLink>
        <NavLink className={"link"} to="department" >Department</NavLink>
        <NavLink className={"link"} to="details" >Details</NavLink>
        <Outlet/>
    </div>
  )
}

export default College