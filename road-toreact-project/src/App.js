
import * as React from 'react';
import ToDoList from './TodoList';
import AddToForm  from './AddTodoForm';
import { useState } from "react";
import { useEffect } from 'react';

function App(){
  const[todoList,setTodoList] = useState([])
  useEffect(() => {
    localStorage.setItem("todoList",todoList)
    console.log('todoList has changed:', todoList);
  }, [todoList]); 
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
