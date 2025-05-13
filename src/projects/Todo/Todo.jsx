import React, { useEffect, useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./Todo.css";
import TodoForm from "./TodoForm";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handleFormSubmit = (inputValue) => {
    if (!inputValue.trim()) return;

    // Prevent duplicate
    if (tasks.some(task => task.text === inputValue)) return;

    // Add new task object
    setTasks(prevTasks => [
      ...prevTasks,
      { text: inputValue, completed: false }
    ]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDeleteTodo = (taskToDelete) => {
    setTasks(prevTasks =>
      prevTasks.filter(task => task.text !== taskToDelete.text)
    );
  };

  const handleCheckTodo = (index) => {
    setTasks(prevTasks =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleClearAll = () => {
    setTasks([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{dateTime}</h2>
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul className="todo-list">
          {tasks.map((task, index) => (
            <li key={index} className="todo-item">
              <span className={task.completed ? "checkList" : "notCheckList"}>
                {task.text}
              </span>
              <button
                className="check-btn"
                onClick={() => handleCheckTodo(index)}
              >
                <MdCheck />
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDeleteTodo(task)}
              >
                <MdDeleteForever />
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <button className="clear-btn" onClick={handleClearAll}>
          Clear All
        </button>
      </section>
    </section>
  );
};

export default Todo;