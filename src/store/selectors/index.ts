import { ReduxStore } from "store/store";

export const counterSelector = (state: ReduxStore) => state.counter;

export const calculatorSelector = (state: ReduxStore) => state.calculator;

export const pokemonSelector = (state: ReduxStore) => state.pokemon;
