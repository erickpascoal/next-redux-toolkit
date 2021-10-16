import { useReduxDispatch } from "hooks/useReduxDispatch";
import { pokemonService } from "services/pokemon";
import { loadPokemons, pokemonActions } from "store/slices/pokemonSlice";
import { PokemonListTemplate } from "templates/PokemonsList";

function PokemonList() {
  return <PokemonListTemplate />;
}

export async function getServerSideProps(context: any) {
  // const { store } = context;

  // store.dispatch(loadPokemons());

  const pokemons = await pokemonService.loadPokemons();
  console.log("asdasdasd", pokemons);

  return {
    props: { pokemons }, // will be passed to the page component as props
  };
}

export default PokemonList;
