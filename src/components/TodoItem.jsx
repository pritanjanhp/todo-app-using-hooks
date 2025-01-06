import React, { useState, useRef } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";

function TodoItem({ todo, onToggleComplete, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  const handleSave = () => {
    const updatedText = inputRef.current.value.trim();
    if (updatedText) {
      onUpdate(updatedText);
    }
    setIsEditing(false);
  };

  return (
    <li className='todo-item'
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
      <input type="checkbox" checked={todo.completed} onChange={onToggleComplete} style={{ marginRight: '10px' }}
      />
      {isEditing ? (
        <input ref={inputRef} defaultValue={todo.text} className='input-text' />
      ) : (
        <span style={{ flexGrow: 1 }}>{todo.text}</span>
      )}
      {isEditing ? (
        <button onClick={handleSave} className='input-save'>
          <TiTickOutline />
        </button>
      ) : (
        <button onClick={() => setIsEditing(true)} className='input-edit'>
          <CiEdit />
        </button>
      )}
      <button onClick={onDelete} className='input-delete'>
        <MdDeleteOutline />
      </button>
    </li>
  );
}

export default TodoItem;
