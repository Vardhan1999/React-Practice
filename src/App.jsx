import React, { useState } from "react"

function App() {

  const [active, setActive] = useState("tab1");

  return (
    <div>
      <button onClick={() => setActive("tab1")}>Tab 1</button>
      <button onClick={() => setActive("tab2")}>Tab 2</button>
      <div>
        {active === 'tab1' && <p>Content of Tab 1</p>}
        {active === 'tab2' && <p>Content of Tab 2</p>}
      </div>
    </div>
  )
}

export default App
