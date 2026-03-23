import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
        <h4 className='bg-blue-300'>
          About Page
        </h4>
      </div>
  )
}
