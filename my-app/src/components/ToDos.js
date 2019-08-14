import React from "react";

const ToDos = ({ todos, deleteToDo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="todo-item" key={todo.id}>
          <h1>Description: {todo.content}</h1>
          <p>Priority: {todo.priority}</p>
          <a
            onClick={() => deleteToDo(todo.id)}
            className="waves-effect waves-light btn"
          >
            Remove
          </a>
        </div>
      );
    })
  ) : (
    <p>You do not have any more todos! Take the rest of the day off!</p>
  );

  return <div className="todo-list">{todoList}</div>;
};

export default ToDos;
