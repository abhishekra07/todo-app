import { useState } from 'react';
import './App.css';

export default function App() {
  const [searchInput, setSearchInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    if (searchInput.trim() !== '') {
      setTodos([...todos, { id: Date.now(), task: searchInput }]);
      setSearchInput('');
    }
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }

  return (
    <div className="container">
      <h1 className="heading">Todo App</h1>
      <div className="sub-container">
        <input
          type="search"
          placeholder="add task here...!"
          className="search"
          value={searchInput}
          onChange={handleChange}
        />
        <button className="btn" onClick={handleClick}>Add</button>
        <div className="list-container">
          <ul>
            {todos.length > 0 && todos.map(todo => (
              <li key={todo.id}>
                <input type="checkbox" id={`checkbox${todo.id}`} className="checkbox" />
                <label htmlFor={`checkbox${todo.id}`} className="task">{todo.task}</label>
                {/* <span className="icon" onClick={() => handleEdit(todo.id, prompt("Enter new task", todo.task))}><i className="fas fa-edit"></i></span> */}
                <span className="icon delete-btn" onClick={() => handleDelete(todo.id)}><i className="fas fa-trash-alt"></i></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}