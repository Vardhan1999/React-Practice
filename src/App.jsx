import React, { useEffect, useState } from "react";

function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay)

    return () => clearTimeout(t)
  }, [value, delay])

  return debounced;
}

export default function App() {
  const [q, setQ] = useState("");
  const debouncedQ = useDebounce(q, 500);
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (!debouncedQ) {
      setResult([]);
      return;
    }

    const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Guava'];

    setResult(
      items.filter((i) => i.toLowerCase().includes(debouncedQ.toLowerCase()))
    )
  }, [debouncedQ]);

  return (
    <div>
      <input placeholder="Search.." value={q} onChange={(e) => setQ(e.target.value)} />
      <p>Searching for: {debouncedQ}</p>

      <ul>
        {result.map((r) => (<li key={r}>
          {r}
        </li>))}
      </ul>
    </div>
  )
}