
import * as React from 'react';
import ToDoList from './TodoList';
import AddToForm  from './AddTodoForm';
import { useState } from "react";

function App(){
  const[todoList,setTodoList] = useState([])
  
  const addTodo = (newTodo) => {
    setTodoList(currTodoList => [...currTodoList,newTodo])
  }
  return (
   <div>
    <h1>ToDoList</h1>
    <AddToForm onAddTodo  = {addTodo} />
  <ToDoList todoList = {todoList} />

   </div>

  );
}

export default App;
