import React from "react";
import Todo from "./projects/Todo/Todo"; // or "./projects/Todo/Todo.jsx"

const App = () => {
  return (
    <section>
      <Todo />
    </section>
  );
};

export default App; // ✅ Correct placement (outside the function)