import { pokemonService } from "services/pokemon";
import { PokemonListTemplate } from "templates/PokemonsList";

function PokemonList() {
  return <PokemonListTemplate />;
}

// export async function getServerSideProps(context: any) {
//   // const { store } = context;

//   // store.dispatch(loadPokemons());

//   const pokemons = await pokemonService.loadPokemons();

//   return {
//     props: { pokemons }, // will be passed to the page component as props
//   };
// }

export default PokemonList;
