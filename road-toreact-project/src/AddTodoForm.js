import React from "react";
const handleAddTodo = (event) => {
event.preventDefault()
const todoTitle = event.title
console.log(todoTitle)

}

function AddToForm(props){
    function handleAddTodo(event){
        event.preventDefault();
        const todoTitle = event.title
        props(todoTitle);
        console.log(todoTitle)
        
    }
    return(
        <form onsubmit = {handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input type="text" name = "title" id="todoTitle" />
        <button type="submit">Add</button>
    </form>
    )

}export default AddToForm;
