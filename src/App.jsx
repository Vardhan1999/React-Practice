import React, { useState } from "react"


export default function App() {

  const [open, setOpen] = useState();
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && (
        <div>
          <div>Modal Content</div>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      )}
    </div>)
}

