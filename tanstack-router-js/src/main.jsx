import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRootRoute, createRoute, createRouter, Link, Outlet, RouterProvider } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { routeTree } from './routeTree.gen.js'

//Code Based 
// const rootRoute=createRootRoute({
//   component:()=>(
//     <div>
//       <h1>
//         Root Route</h1>

//         <div className='p-2 flex gap-2 mb-4 bg-teal-500'>
//           <Link to={'/'} className='[&.active:font-bold]'>Home</Link>
//           <Link to={'/about'} className='[&.active:font-bold]'>Avout</Link>
//         </div>
//         <Outlet/>
//         <TanStackRouterDevtools/>
      
//     </div>
//   )
// })

// const indexRoute=createRoute({
//   getParentRoute:()=>rootRoute,
//   path:'/',
//   component:function index(){
//     return(
//       <div>
//         <h4 className='bg-blue-300'>
//           Home Page
//         </h4>
//       </div>
//     )
//   }
// })

// const aboutRoute=createRoute({
//   getParentRoute:()=>rootRoute,
//   path:'/about',
//   component:function index(){
//     return(
//       <div>
//         <h3 className='bg-red-700'>
//           About Page
//         </h3>
//       </div>
//     )
//   }
// })

// const routeTree=rootRoute.addChildren([indexRoute,aboutRoute])

const router=createRouter({routeTree})

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
