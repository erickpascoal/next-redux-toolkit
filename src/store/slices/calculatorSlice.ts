import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICalculatorPayload {
  number1: number;
  number2: number;
}

const initialState = {
  value: 0,
};

export const calculatorSlice = createSlice({
  name: "@calculator",
  initialState,
  reducers: {
    sum: (state, action: PayloadAction<ICalculatorPayload>) => {
      const { number1, number2 } = action.payload;
      state.value = number1 + number2;
    },
    subtract: (state, action: PayloadAction<ICalculatorPayload>) => {
      const { number1, number2 } = action.payload;
      state.value = number1 - number2;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const calculatorActions = calculatorSlice.actions;

export const calculatorReducer = calculatorSlice.reducer;
