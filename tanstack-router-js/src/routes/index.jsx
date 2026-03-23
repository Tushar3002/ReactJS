import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
        <h4 className='bg-blue-300'>
          Home Page
        </h4>
      </div>
  )
}
