import React, { useState } from "react";

export default function App() {
  const items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);
  const [page, setPage] = useState(1);
  const perPage = 5;
  const start = (page - 1) * perPage;
  const paginated = items.slice(start, start + perPage);

  return (
    <div>
      <ul>{paginated.map(item => <li key={item}>{item}</li>)}</ul>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
      <button disabled={start + perPage >= items.length} onClick={() => setPage(page + 1)}>Next</button>
    </div>
  )
}
