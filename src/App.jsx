import { useState } from "react"

export default function App() {


  const [text, setText] = useState("Copy this text");
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />

      <button onClick={copy}>Copy</button>
      {copied && <span>Copied!</span>}
    </div>
  )
}
