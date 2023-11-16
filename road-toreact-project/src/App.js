
import * as React from 'react';
import ToDoList from './TodoList';
import AddToForm  from './AddTodoForm';
import { useState } from "react";
import { useEffect } from 'react';

const useSemiPersistentState = (initialTodoList) => {
  const [todoList, setTodoList] = useState(initialTodoList);

  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};
function App(){
  const initialTodoList = JSON.parse(localStorage.getItem('savedTodoList')) || [];
  const[todoList,setTodoList] = useSemiPersistentState(initialTodoList)
  const addTodo = (newTodo) => {
    console.log("This is newTodo",newTodo)
    setTodoList(currTodoList => [...currTodoList,newTodo])
  }
  

return (
  <>
  <div>
    <h1>ToDoList</h1>
    <AddToForm addTo={{ onAddTodo: addTodo }} />
    <ToDoList todoList={todoList} />
  </div>
  </>
);

}

export default App;
