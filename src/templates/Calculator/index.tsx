import { Form } from "./Form";
import { Result } from "./Result";

export function CalculatorTemplate() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Form />
      <Result />
    </div>
  );
}
