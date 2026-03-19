import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import { getPokemonList } from '../api/pokemon'
import { Link } from '@tanstack/react-router'
import type { Key } from 'react'

export const Route = createFileRoute('/pokemon/')({
  component: RouteComponent,
  loader: getPokemonList
})

function RouteComponent() {
    const pokemons=Route.useLoaderData()
  return (<div>
    <h1>Pokemon</h1>
    <ul>
        {pokemons.map((pokemon: { id: Key | null | undefined; name: any })=>{
           return (
             <li key={pokemon.id}>
            <Link to={`/pokemon/$id`} params={{
                id:pokemon.id
            }}>{pokemon.name}</Link>
        </li>
           )
        })}
    </ul>
  </div>)
}


