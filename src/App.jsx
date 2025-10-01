import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  function addTodos() {
    if (!text.trim()) return;
    setTodo([...todo, { id: crypto.randomUUID(), text, completed: false }]);
    setText("");
  }

  function toggleTodo(id) {
    setTodo(todo.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  function deleteTodo(id) {
    setTodo(
      todo.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <h2>Todo List</h2>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Enter Todos..." />
      <button onClick={addTodos}>Add</button>
      <ul>
        {todo.map(todo => (<li key={todo.id}>
          <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>))}
      </ul>
    </div>
  )
}
