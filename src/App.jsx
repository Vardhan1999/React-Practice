import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div style={{
      background: dark ? "#333" : "#fff",
      color: dark ? "#333" : "#000",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease"
    }}>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <p>{dark ? "Dark Mode" : "Light Mode"}</p>
    </div>
  )
}
