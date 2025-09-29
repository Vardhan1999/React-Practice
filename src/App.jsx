import { useState } from "react";

export default function App() {

  const [items, setItems] = useState(["Item A", "Item B", "Item C"]);
  const [dragIndex, setDragIndex] = useState(null);

  function onDragStart(e, idx) {
    setDragIndex(idx);
    e.dataTransfer.effectAllowed = "move";
  }

  function onDrop(e, idx) {
    e.preventDefault();
    const newItems = [...items];
    const [moved] = newItems.splice(dragIndex, 1);
    newItems.splice(idx, 0, moved);
    setItems(newItems);
    setDragIndex(null);
  }

  function onDragOver(e) {
    e.preventDefault();
  }

  return (
    <ul>
      {items.map((it, idx) => (
        <li
          key={it}
          draggable
          onDragStart={(e) => onDragStart(e, idx)}
          onDragOver={onDragOver}
          onDrop={(e) => onDrop(e, idx)}
        >
          {it}
        </li>
      ))}
    </ul>
  );
}
