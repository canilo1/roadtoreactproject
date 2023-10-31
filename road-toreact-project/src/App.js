
import * as React from 'react';
import ToDoList from './TodoList';
import AddToForm  from './AddTodoForm';
import { useState } from "react";

function getTitle(title){
  return title;
}
function App(){
  const [newTodo, setNewTodo] = useState(''); 
  return (
   <div>
    <h1>ToDoList</h1>
  <ToDoList />
  <AddToForm onAddTodo  = {setNewTodo} />
  <p>{newTodo}</p>
   </div>

  );
}

export default App;
