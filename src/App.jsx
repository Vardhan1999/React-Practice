import { useEffect, useState } from "react";

export default function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);

    return () => clearInterval(interval);
  }, [])

  return <h2>Timer: {seconds}s</h2>
}
