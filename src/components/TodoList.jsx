import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggleComplete, onUpdateTodo, onDeleteTodo }) {
  return (
    <ul style={{ padding: 0 }}>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onToggleComplete={() => onToggleComplete(index)}
          onUpdate={updatedText => onUpdateTodo(index, updatedText)}
          onDelete={() => onDeleteTodo(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
