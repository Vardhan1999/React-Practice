import { cache, useEffect, useState } from "react";

function useLocalStorage(key, initial) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial
    }
    catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch { }
  }, [key, state])

  return [state, setState];
}

export default function App() {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />

      <p>Hello, {name || "stranger"}</p>
    </div>
  )
}
