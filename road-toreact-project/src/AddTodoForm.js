import React from "react";
function AddToForm(){
    return(
        <form>
        <label htmlFor="todoTitle">Title</label>
        <input type="text" id="todoTitle" />
        <button type="submit">Add</button>
    </form>
    )

}export default AddToForm;
