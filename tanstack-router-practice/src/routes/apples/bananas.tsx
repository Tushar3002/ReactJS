import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/apples/bananas')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/apples/bananas"!</div>
}
