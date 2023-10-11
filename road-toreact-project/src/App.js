import * as React from 'react';
function getTitle(title){
  return title;
}
const ToDoList  = [{id:1,title:[{}]}]

function App(){
  return (
   <div>
    <h1>ToDoList [{ToDoList}]</h1>
    <label htmlFor = "search" >Search:</label>
    <input id = "search"type = "text"/>
   </div>
  );
}
export default App;