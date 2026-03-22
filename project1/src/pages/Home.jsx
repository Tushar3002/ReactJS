import React, { useEffect, useState } from 'react';
import { fetchPokemon } from '../api/pokemonFetch';

function Home() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      console.log(data.results);
      setPokemon(data.results); // store it
    };
    fetchData();
  }, []);

  return (
    <div className="container">

      <h1 className="title">Pokémon</h1>

      <div className="pokemon-grid">

        {pokemon.map((p, index) => {
          const id = p.url.split("/")[6]; // extract ID

          return (
            <div className="pokemon-card" key={index}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={p.name}
              />
              <p>{p.name}</p>
            </div>
          );
        })}

      </div>

    </div>
  );
}

export default Home;