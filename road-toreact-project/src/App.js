
import * as React from 'react';
import ToDoList from './TodoList';
import AddToForm  from './AddTodoForm';
function getTitle(title){
  return title;
}
function App(){
  return (
   <div>
    <h1>ToDoList</h1>
  <ToDoList />
  <AddToForm />
   </div>

  );
}

export default App;
