import React, { useState } from "react";

function AddToForm(props) {
  const [todoTitle, setTodoTitle] = useState('');

  function handleAddTodo(event) {
    event.preventDefault();
    const newTodoTitle = event.target.elements.title.value;
    console.log(newTodoTitle);
    setTodoTitle(newTodoTitle);
    props.onAddTodo(newTodoTitle);
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input type="text" name="title" id="todoTitle" />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddToForm;
