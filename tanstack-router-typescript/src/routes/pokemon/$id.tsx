import { createFileRoute } from '@tanstack/react-router'
import { getPokemon } from '../api/pokemon'

export const Route = createFileRoute('/pokemon/$id')({
  component: RouteComponent,
  loader:async({params})=>await getPokemon(params.id)
})

function RouteComponent() {

    const {id}=Route.useParams()
    const pokemon=Route.useLoaderData()
    console.log(pokemon);
    
  return <div>
    
    <h2>({id}) {pokemon.name}</h2>
    <div>
        <img src={pokemon.sprites.front_default} alt="" />
    </div>
  </div>
}
