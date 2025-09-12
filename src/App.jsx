import React, { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        minHeight: "100vh",
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
      }}
    >
      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
      <p>{dark ? "Dark Mode" : "Light Mode"}</p>
    </div>
  );
}
