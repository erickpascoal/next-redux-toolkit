/* eslint-disable @next/next/no-img-element */
import { useReduxSelector } from "hooks/useReduxSelector";
import { pokemonSelector } from "store/selectors";

export function PokemonListTemplate() {
  // const { pokemons } = useReduxSelector(pokemonSelector);

  const pokemons: any = [
    {
      name: "erick",
      url: "https://avatars.githubusercontent.com/u/92316688?v=4",
    },
  ];

  return (
    <div>
      {pokemons.map((pokemon: any) => (
        <div key={pokemon.name}>
          <h1>{pokemon.name}</h1>
          <p>{pokemon.url}</p>
        </div>
      ))}
    </div>
  );
}
