import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "1. Semangat Belajar"
    },
    {
      text: "2. Semangat Belajar"
    },
    {
      text: "3. Semangat Belajar"
    },
    {
      text: "4. Semangat Belajar"
    },
    {
      text: "5. Semangat Belajar"
    },
    {
      text: "6. Semangat Belajar"
    },
    {
      text: "7. Semangat Belajar"
    },
    {
      text: "8. Semangat Belajar"
    },
    {
      text: "9. Semangat Belajar"
    },
    {
      text: "10. Semangat Belajar"
    }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
