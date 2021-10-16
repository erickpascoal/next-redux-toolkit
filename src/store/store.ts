import { configureStore } from "@reduxjs/toolkit";
import { calculatorReducer } from "./slices/calculatorSlice";
import { counterReducer } from "./slices/counterSlice";
import { pokemonReducer } from "./slices/pokemonSlice";

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    counter: counterReducer,
    pokemon: pokemonReducer,
  },
});

export type ReduxStore = ReturnType<typeof store.getState>;
export type ReduxDispatch = typeof store.dispatch;
