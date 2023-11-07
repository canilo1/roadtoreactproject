import React from "react";

const ToDoListItem = (props) => {
  console.log("This is props", props);
  console.log("This is props.todo", props.todo);
  return <li>{props.todo.title}</li>;
};

export default ToDoListItem;
