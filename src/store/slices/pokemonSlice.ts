import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pokemonService } from "services/pokemon";
import { HYDRATE } from "next-redux-wrapper";
interface IPokemon {
  name: string;
  url: string;
}

interface IState {
  pokemons: IPokemon[];
}

const initialState: IState = {
  pokemons: [],
};

export const pokemonSlice = createSlice({
  name: "@pokemon",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<{ pokemons: IPokemon[] }>) => {
      console.log("setList", state, action.payload);
      state.pokemons = action.payload.pokemons;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.pokemons = action.payload.pokemon.pokemons;
    },
  },
});

export const pokemonActions = pokemonSlice.actions;

export const pokemonReducer = pokemonSlice.reducer;

export function loadPokemons() {
  return async function (dispatch: any) {
    const pokemons = await pokemonService.loadPokemons();
    await dispatch(pokemonActions.setList({ pokemons }));
  };
}
