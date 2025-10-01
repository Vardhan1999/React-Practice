import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
