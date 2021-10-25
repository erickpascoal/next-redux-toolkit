/* eslint-disable @next/next/no-img-element */
import { useReduxSelector } from "hooks/useReduxSelector";
import { pokemonSelector } from "store/selectors";

export function PokemonListTemplate() {
  const pokemonState = useReduxSelector(pokemonSelector);

  return (
    <div>
      {pokemonState.pokemons.length}
      {pokemonState.pokemons.map((pokemon: any) => (
        <div key={pokemon.name}>
          <h1>{pokemon.name}</h1>
          <p>{pokemon.url}</p>
        </div>
      ))}
    </div>
  );
}
