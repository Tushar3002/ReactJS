import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/{-$locale}/archive/{-$year}/{-$Date}')({
  component: RouteComponent,
})

function RouteComponent() {
    const {locale,year,Date} = Route.useParams()
  return <div>Hello "/-$locale/archive/-$year/-$Date"!

    <div>
        <h3>Locale {locale}</h3>
        <h3>Year {year}</h3>
        <h3>Date {Date}</h3>
    </div>
  </div>
}
