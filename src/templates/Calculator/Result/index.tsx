import { useReduxSelector } from "hooks/useReduxSelector";
import { calculatorSelector } from "store/selectors";

export function Result() {
  const calculatorState = useReduxSelector(calculatorSelector);

  return <div>Resultado: {calculatorState.value}</div>;
}
