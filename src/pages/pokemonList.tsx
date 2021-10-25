import { loadPokemons } from "store/slices/pokemonSlice";
import { reduxWrapper } from "store/store";
import { PokemonListTemplate } from "templates/PokemonsList";

function PokemonList() {
  return <PokemonListTemplate />;
}

export const getServerSideProps = reduxWrapper.getServerSideProps(
  (store) => async () => {
    await Promise.all([store.dispatch(loadPokemons())]);

    console.log("State on server", store.getState().pokemon.pokemons.length);

    return {
      props: {},
    };
  }
);

export default PokemonList;
