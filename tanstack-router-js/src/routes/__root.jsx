import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div>
          <h1>
            Root Route</h1>
    
            <div className='p-2 flex gap-2 mb-4 bg-teal-500'>
              <Link to={'/'} className='[&.active:font-bold]'>Home</Link>
              <Link to={'/about'} className='[&.active:font-bold]'>Avout</Link>
              <Link to={'/{-$locale}/archive/{-$year}/{-$Date}'} params={{
                locale:'eng',
                year:'',
                Date:'17'
              }} className='[&.active:font-bold]'>Archive</Link>
              <br />
      <Link
        to="/products"
        search={{
          sort_by: "price",
        //   product_type: ["shoes", "t-shirts"],
        //   pagination: {
        //     page: 1,
        //     pageSize: 10,
        //   },
        //   colors: ["red", "blue"],
        //   sale: true,
        }}
      >
        Products with Filters
      </Link>
            </div>
            <Outlet/>
            <TanStackRouterDevtools/>
          
        </div>
  )
}
