import { IPokemonReponse } from "./types";

export const pokemonApi = {
  async loadPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data: IPokemonReponse = await response.json();
    return data;
  },
};
