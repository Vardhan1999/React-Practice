import { useState } from "react";

export default function App() {

  const [todos, setTodos] = useState([
    { id: "t1", text: "Buy milk", completed: false },
    { id: "t2", text: "Read book", completed: false },
  ]);
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState("");

  function startEdit(todo) {
    setEditingId(todo.id);
    setDraft(todo.text);
  }

  function save(id) {
    setTodos((ts) =>
      ts.map((t) => (t.id === id ? { ...t, text: draft } : t))
    );
    setEditingId(null);
    setDraft("");
  }

  function toggleDone(id) {
    setTodos((ts) =>
      ts.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function del(id) {
    setTodos((ts) => ts.filter((t) => t.id !== id));
  }

    return (
    <ul>
      {todos.map((t) => (
        <li key={t.id}>
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => toggleDone(t.id)}
          />
          {editingId === t.id ? (
            <>
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
              />
              <button onClick={() => save(t.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span>{t.text}</span>
              <button onClick={() => startEdit(t)}>Edit</button>
              <button onClick={() => del(t.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );

}
