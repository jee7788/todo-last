import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, text]);
    setText("");
  };

  const handleRemove = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      <ul className="todo-list">
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
