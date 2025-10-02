import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const items = ["Apple", "Banana", "Cherry", "Date", "Onion"];
  const filtered = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <input placeholder="Search..." onChange={(e) => setQuery(e.target.value)} value={query} />
      <ul>
        {
          filtered.map((item, idx) => (<li key={idx}>{item}</li>))
        }
      </ul>
    </div>
  )
}
