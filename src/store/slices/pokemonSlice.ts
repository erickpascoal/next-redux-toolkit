import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pokemonService } from "services/pokemon";

interface IPokemon {
  name: string;
  url: string;
}

interface IState {
  pokemons: IPokemon[];
}

const initialState: IState = {
  pokemons: [
    {
      name: "erick",
      url: "https://avatars.githubusercontent.com/u/92316688?v=4",
    },
  ],
};

export const pokemonSlice = createSlice({
  name: "@pokemon",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<{ pokemons: IPokemon[] }>) => {
      state.pokemons = action.payload.pokemons;
    },
  },
});

export const pokemonActions = pokemonSlice.actions;

export const pokemonReducer = pokemonSlice.reducer;

export function loadPokemons() {
  console.log("loadPokemons");

  return async function (dispatch: any) {
    const pokemons = await pokemonService.loadPokemons();

    console.log("pokemons", pokemons);

    dispatch(pokemonActions.setList({ pokemons }));
  };
}
