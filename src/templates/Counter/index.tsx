import { useReduxDispatch } from "hooks/useReduxDispatch";
import { useReduxSelector } from "hooks/useReduxSelector";
import { counterSelector } from "store/selectors";
import { counterActions } from "store/slices/counterSlice";

export function CounterTemplate() {
  const dispatch = useReduxDispatch();
  const counterState = useReduxSelector(counterSelector);

  function handleIncrement() {
    dispatch(counterActions.increment());
  }

  function handleDecrement() {
    dispatch(counterActions.decrement());
  }

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      Contador: {counterState.value}
      <button type="button" onClick={handleDecrement}>
        -
      </button>
      <button type="button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
