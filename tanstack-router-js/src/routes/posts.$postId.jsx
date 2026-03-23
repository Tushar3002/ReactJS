import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
})

function RouteComponent() {

  const {postId}=Route.useParams()
  return <div>Hello "/posts/$postId"!

    <h1>POST ID : {postId }</h1>
  </div>
}
