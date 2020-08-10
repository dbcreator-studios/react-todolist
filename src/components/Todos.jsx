import React from "react";
import Todo from "./Todo";
import PropType from "prop-types";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos">
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              index={index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              completeTodo={completeTodo}
            />
          );
        })}
      {todos.length === 0 && (
        <div className="todo-placeholder-text">
          Add todo by clicking
          <span className="todo-btn-placeholder-text"> Add</span> button on the
          top left corner.
        </div>
      )}
    </section>
  );
};

Todos.propType = {
  todos: PropType.arrayOf(
    PropType.shape({
      text: PropType.string.isRequired,
      isCompleted: PropType.bool.isRequired
    })
  ),
  completeTodo: PropType.func.isRequired
};

export default Todos;
