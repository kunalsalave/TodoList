 import { useState } from "react";

 const  TodoForm = ({onAddTodo}) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value);
      };

      const handleFormSubmit = (e) => {
        e.preventDefault();
        onAddTodo (inputValue)
        setInputValue("");
      }

    return (
        <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
    );
 };

 export default TodoForm;