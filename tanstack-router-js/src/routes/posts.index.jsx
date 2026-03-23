import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/posts/"!

    <Link to={'/posts/$postId'} params={{postId:"123"}}>GO</Link>
  </div>
}
