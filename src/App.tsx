import { createSignal } from "solid-js";

export function App() {
  const [count, setCount] = createSignal(1);
  const increment = () => setCount((count) => count + 1);

  return (
    <button type="button" onClick={increment}>
      {count()}
    </button>
  );
}
