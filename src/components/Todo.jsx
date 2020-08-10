import React from "react";
import PropTypes from "prop-types";

const Todo = ({ index, text, isCompleted, completeTodo }) => {
  return (
    <div className="todo" onClick={() => completeTodo(index)}>
      <span
        className="todo-text"
        style={{ textDecoration: isCompleted ? "line-through" : "initial" }}
      >
        {text}
      </span>
    </div>
  );
};

Todo.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  completeTodo: PropTypes.func.isRequired
};

export default Todo;
