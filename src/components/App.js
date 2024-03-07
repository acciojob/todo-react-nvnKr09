import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(todo);
  console.log(todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      setTodos([...todos, todo.trim()]);
      setTodo("");
    }
  };

  const handleDelete = (index)=>{
    const newTodos = todos.filter( (_, idx) => idx !== index);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className="top">
        <h1>To-Do List</h1>
        <div className="search">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      </div>
      <div className="todo-list-container">
        <ul className="todo-list">
        {todos.map((todo, index) => (
            <li>
              <span>{todo}</span>
              <button onClick={() => handleDelete(index)}>Delete</button>
              {index}
            </li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
