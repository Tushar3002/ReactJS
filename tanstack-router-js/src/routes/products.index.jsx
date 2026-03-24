import { createFileRoute } from '@tanstack/react-router'
import z from 'zod'
import {fallback, zodValidator} from '@tanstack/zod-adapter'


const productSearchParamsSchema = z.object({
  sort_by: fallback(z.enum(["newest", "oldest", "price"]),'newest') ,     //.catch("newest"),
  product_type: z.enum(["shoes", "t-shirts"]).default("shoes"),
  pagination: z
    .object({
      page: z.number().default(1),
      pageSize: z.number().default(10),
    })
    .default({}),
  colors: z.array(z.enum(["red", "blue", "green"])).optional(),
  sale: z.boolean().default(true),
});

export const Route = createFileRoute('/products/')({
  component: RouteComponent,
  validateSearch: zodValidator(productSearchParamsSchema),
  errorComponent:()=> <h1>Error</h1>
})

function RouteComponent() {
  const seach=Route.useSearch()
  console.log(seach);
  
  return <div>Hello "/products/"!</div>
}
