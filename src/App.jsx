import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", address: "" });

  function next() {
    setStep((s) => Math.min(3, s + 1));
  }

  function prev() {
    setStep((s) => Math.max(1, s - 1));
  }

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  if (step === 3) {
    return (
      <div>
        <h3>Review</h3>
        <pre>{JSON.stringify(form, null, 2)}</pre>
        <button onClick={prev}>Back</button>
        <button onClick={() => alert("Submitted!")}>Submit</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Step {step}</h2>

      {step === 1 && (
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
        />
      )}

      {step === 2 && (
        <>
          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
          <input
            placeholder="Address"
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
          />
        </>
      )}

      <div>
        <button onClick={prev} disabled={step === 1}>
          Prev
        </button>
        <button onClick={next}>{step === 2 ? "Review" : "Next"}</button>
      </div>
    </div>
  );
}
