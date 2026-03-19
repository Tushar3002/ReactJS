import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <button >Home</button>
    <Link to='/about'>About</Link>
    {/* <Link to='/a'>About</Link> */}
  </div>
}
