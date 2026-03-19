import React from 'react'
import {
  createRoute,
  createRouter,
  RouterProvider,
  Link,
  useParams,
  useLoaderData,
} from '@tanstack/react-router'

const rootRoute = createRoute({
  path: '/',
  component: () => <h1>Home</h1>,
})

const aboutRoute = createRoute({
  path: 'about',
  getParentRoute: () => rootRoute,
  component: () => <h1>About</h1>,
})

const userRoute = createRoute({
  path: 'user/$id',
  getParentRoute: () => rootRoute,
  loader: async ({ params }) => ({
    id: params.id,
    name: `User ${params.id}`,
    email: `user${params.id}@example.com`,
  }),
  component: () => {
    const params = useParams()
    const user = useLoaderData()
    return (
      <div>
        <h1>User Page</h1>
        <p>ID: {params.id}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    )
  },
})

const router = createRouter({
  routeTree: rootRoute.addChildren([aboutRoute, userRoute]),
})

export default function App() {
  return (
    <RouterProvider router={router}>
      <nav>
        <Link to={rootRoute}>Home</Link> |{' '}
        <Link to={aboutRoute}>About</Link> |{' '}
        <Link to={userRoute} params={{ id: 1 }}>User 1</Link> |{' '}
        <Link to={userRoute} params={{ id: 2 }}>User 2</Link>
      </nav>
    </RouterProvider>
  )
}