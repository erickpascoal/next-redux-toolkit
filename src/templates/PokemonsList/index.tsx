/* eslint-disable @next/next/no-img-element */
import { useReduxSelector } from "hooks/useReduxSelector";
import { pokemonSelector } from "store/selectors";

export function PokemonListTemplate() {
  const { pokemons } = useReduxSelector(pokemonSelector);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name}>
          <h1>{pokemon.name}</h1>
          <p>{pokemon.url}</p>
        </div>
      ))}
    </div>
  );
}
