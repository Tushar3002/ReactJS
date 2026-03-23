import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts_/$postId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/posts/$postId/edit"!</div>
}
