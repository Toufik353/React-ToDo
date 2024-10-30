import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, deleteTask, toggleTaskCompletion, editTask }) {
  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <ToDoItem 
          key={task.id} 
          task={task} 
          deleteTask={deleteTask} 
          toggleTaskCompletion={toggleTaskCompletion} 
          editTask={editTask} 
        />
      ))}
    </ul>
  );
}

export default ToDoList;
