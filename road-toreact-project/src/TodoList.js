import React from "react";
const todoList = [
    { id: 1, title: "Complete assignment" },
    { id: 2, title: "Buy groceries" },
    { id: 3, title: "Go for a run" }
  ];
function ToDoList(){
    return(
        <ul>{todoList.map(function(item){
            return <li>{[item.title]}</li>
          })}</ul>
    )
}
export default ToDoList;
