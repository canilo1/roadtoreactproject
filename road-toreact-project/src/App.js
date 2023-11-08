import logo from './logo.svg';
import './App.css';

<<<<<<< Updated upstream
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import * as React from 'react';
import ToDoList from './TodoList';
import AddToForm  from './AddTodoForm';
import { useState } from "react";
function App(){
  const[todoList,setTodoList] =useState([])
  function addTodo(newTodo){
    setTodoList([...todoList,newTodo])
  }

  return (
   <div>
    <h1>ToDoList</h1>
  <ToDoList todoList = {todoList} />
  <AddToForm onAddTodo  = {addTodo} />
   </div>

>>>>>>> Stashed changes
  );
}

export default App;
