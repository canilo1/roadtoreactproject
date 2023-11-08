import React from "react";
import ToDoListItem from "./TodoListItem";
function ToDoList({todoList}){
    return(
      <ul>
  {todoList.map(function(todo) {
    return <ToDoListItem key={todo.id} todo={todo} />;
  })}
</ul>

    )
}
export default ToDoList;
