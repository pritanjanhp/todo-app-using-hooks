import React, { useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [isPopUp, setIsPopUp] = useState(false);

    const addTodo = (newTodo) => {
        if (newTodo.trim()) {
            setTodos([...todos, { text: newTodo, completed: false }]);
        }
        setIsPopUp(false);
    };

    const toggleComplete = (idx) => {
        const updatedTodos = todos.map((todo, i) =>
            i === idx ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const updateTodo = (idx, updatedText) => {
        const updatedTodos = todos.map((todo, i) =>
            i === idx ? { ...todo, text: updatedText } : todo
        );
        setTodos(updatedTodos);
    };

    const deleteTodo = (idx) => {
        const updatedTodos = todos.filter((_, i) => i !== idx);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <div className={`container ${isPopUp ? "blur-background" : ""}`}>
                <Header onAddClick={() => setIsPopUp(true)} />
                <TodoList todos={todos} onToggleComplete={toggleComplete} onUpdateTodo={updateTodo} onDeleteTodo={deleteTodo}
                />
            </div>
            {isPopUp && (<AddTodo onCancel={() => setIsPopUp(false)}
                onAdd={addTodo}
            />)}
        </div>
    );
}

export default TodoApp;
