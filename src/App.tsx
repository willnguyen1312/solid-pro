import { batch, createSignal } from "solid-js";

export function App() {
  const [count1, setCount1] = createSignal(1);
  const increment1 = () => setCount1(count1() + 1);

  const [count2, setCount2] = createSignal(1);
  const increment2 = () => setCount2(count2() + 1);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          increment1();
        }}
      >
        {count1()}
      </button>

      <button
        type="button"
        onClick={() => {
          increment2();
        }}
      >
        {count2()}
      </button>

      <button
        onclick={() => {
          // batch(() => {
          //   setCount1(count1() + 1);
          //   debugger;
          //   setCount2(count2() + 1);
          // });

          setCount1(count1() + 1);
          debugger;
          setCount2(count2() + 1);
        }}
      >
        Increment all
      </button>
    </>
  );
}
