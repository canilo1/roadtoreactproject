import React from "react";
import ToDoListItem from "./TodoListItem";
const todoList = [
    { id: 1, title: "Complete assignment" },
    { id: 2, title: "Buy groceries" },
    { id: 3, title: "Go for a run" }
  ];
function ToDoList(){
    return(
      <ul>
  {todoList.map(function(todo) {
    return <ToDoListItem key={todo.id} todo={todo} />;
  })}
</ul>

    )
}
export default ToDoList;
