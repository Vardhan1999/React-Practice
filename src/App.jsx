import React, { useState } from "react";

export default function App() {
  const questions = [
    { id: 1, q: "2+2=?", options: ["3", "4", "5"], answer: 1 },
    { id: 2, q: "Capital of France?", options: ["Paris", "London", "Rome"], answer: 0 },
  ]

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  function choose(optionIndex) {
    if (optionIndex === questions[index].answer) {
      setScore((s) => s + 1);
    }
    const next = index + 1;
    if (next >= questions.length) {
      setFinished(true);
    }
    else {
      setIndex(next)
    }
  }

  if (finished) {
    return (
      <div>
        Your Score:{score}/{questions.length}
      </div>
    )
  }

  const current = questions[index];

  return (
    <div>
      <h3>{current.q}</h3>
      <ul>
        {current.options.map((opt, i) => (
          <li key={i}>
            <button onClick={() => choose(i)}>{opt}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}