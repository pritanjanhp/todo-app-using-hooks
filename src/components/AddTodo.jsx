import React, { useRef, useState } from 'react';

function AddTodo({ onCancel, onAdd }) {
  const ref = useRef();
  // const time = useRef('');

  const handleAdd = () => {
    const newTodo = ref.current.value;
    onAdd(newTodo);
    ref.current.value = '';
  };

  // const handleAddTodo = (todo) => {
  //   ref.current = [...ref.current, todo];
  //   if (todo === 'particularTodo') {
  //     timeRef.current = new Date().toLocaleTimeString();
  //   }
  // }

  return (
    <div className='todo-blur'>
      <div className='add-todo-button'>
        <h3>Add Todo</h3>
        <textarea className='add-todo-text'
          ref={ref}
          placeholder="Enter your Todo here.."
        />
        <div className='add-todo-text-button'>
          <button onClick={onCancel} className='todo-cancel-done'> Cancel
          </button>
          <button onClick={handleAdd} className='todo-cancel-done'> Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
