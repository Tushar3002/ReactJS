import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

const activeProps={
  style:{
    fontWeight:"bold"
  }
}

function RootComponent() {
  return (
    <>
      <h1>My APP</h1>
      <ul>
        <li>
          <Link to={'/'} activeProps={activeProps}>Home</Link>
        </li>
        <li>
          <Link to={'/profile'} activeProps={activeProps}>Profile</Link>
        </li>
        <li>
          <Link to={'/pokemon'}activeProps={activeProps}>Char</Link>
        </li>
      </ul>
      <Outlet/>
    </>
  )
}
