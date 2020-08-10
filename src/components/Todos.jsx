import React from "react";
import Todo from "./Todo";
import PropType from "prop-types";

const Todos = ({ todos }) => {
  return (
    <section className="todos">
      {todos.map((todo, key) => {
        return <Todo text={todo.text} key={key} />;
      })}
    </section>
  );
};

Todos.propType = {
  todos: PropType.arrayOf(
    PropType.shape({
      text: PropType.string
    })
  )
};

export default Todos;
