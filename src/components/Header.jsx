import React, { useState } from 'react';

function Header({ addTask }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      addTask(input);
      setInput('');
    }
  };

  return (
    <header className="header">
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button onClick={handleAdd}>Add</button>
    </header>
  );
}

export default Header;
