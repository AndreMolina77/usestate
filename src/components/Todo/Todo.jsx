import React, { useState } from "react";
import "./Todo.css";

// Todo.jsx

const Todo = () => {
    // Estado para manejar la lista de tareas
    const [todos, setTodos] = useState([]);
    // Estado para manejar el valor del input
    const [task, setTask] = useState("");

    // Función para agregar una nueva tarea
    const addTodo = () => {
        if (task.trim() === "") return; // Evitar agregar tareas vacías
        setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
        setTask(""); // Limpiar el input
    };

    // Nueva función para eliminar una tarea
    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    



    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <div className="todo-input">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Agrega una tarea..."
                />
                <button onClick={addTodo}>Agregar</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? "completed" : ""}>
                        <span>
                            {todo.text}{" "}
                            <button onClick={() => removeTodo(todo.id)}>X</button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;

