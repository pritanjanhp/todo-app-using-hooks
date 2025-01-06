import React from 'react';

function Header({ onAddClick }) {
  return (
    <header className='header'>
      <h1>ToDo APP</h1>
      <button className='add-button' onClick={onAddClick}> + </button>
    </header>
  );
}

export default Header;
