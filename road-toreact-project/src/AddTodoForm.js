import React, { useState } from "react";

function AddToForm({addTo}) {
  const [todoTitle, setTodoTitle] = useState('');

  // Function to handle changes in the input field
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  // Function to handle adding a new todo
  const handleAddTodo = (event) => {
    event.preventDefault();

    const newTodo = {
      title: todoTitle,
      id: Date.now(), // Placeholder for generating a unique identifier
    };

    addTo.onAddTodo(newTodo);

    // Clear the todoTitle state by setting it to an empty string
    setTodoTitle('');
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input
        type="text"
        name="title"
        id="todoTitle"
        onChange={handleTitleChange}
        value={todoTitle}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddToForm;
