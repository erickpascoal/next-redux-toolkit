import { useReduxDispatch } from "hooks/useReduxDispatch";
import { useState } from "react";
import { calculatorActions } from "store/slices/calculatorSlice";

export function Form() {
  const dispatch = useReduxDispatch();

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  function handleSum() {
    dispatch(calculatorActions.sum({ number1, number2 }));
  }
  function handleSubtract() {
    dispatch(calculatorActions.subtract({ number1, number2 }));
  }

  function handleReset() {
    dispatch(calculatorActions.reset());
    setNumber1(0);
    setNumber2(0);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Numero 1"
        onChange={(event) => setNumber1(Number(event.target.value))}
        value={number1}
      />

      <input
        type="text"
        placeholder="Numero 2"
        onChange={(event) => setNumber2(Number(event.target.value))}
        value={number2}
      />

      <br />
      <br />

      <button type="button" onClick={handleSum}>
        Somar
      </button>
      <button type="button" onClick={handleSubtract}>
        Subtrair
      </button>

      <button type="button" onClick={handleReset}>
        Resetar
      </button>
    </form>
  );
}
