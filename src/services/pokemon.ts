import { pokemonApi } from "api/pokemon";

export const pokemonService = {
  async loadPokemons() {
    const data = await pokemonApi.loadPokemons();

    return data.results;
  },
};
