import * as React from 'react';
function getTitle(title){
  return title;
}
const todoList = [
  { id: 1, title: "Complete assignment" },
  { id: 2, title: "Buy groceries" },
  { id: 3, title: "Go for a run" }
];
function App(){
  return (
   <div>
    <h1>ToDoList</h1>
    <ul>{todoList.map(function(item){
      return <li>{[item.title]}</li>
    })}</ul>
   </div>
  );
}
export default App;