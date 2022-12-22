import React, { useRef, useEffect } from 'react'

function TodoForm(props) {
  const { handleAddTodo, handleEditTodo, formType, todoId, closeEditForm, closeAddForm } = props;
  const todoTextRef = useRef();
  const todoTagRef = useRef();
  let closeOutside = false;

  function handleAddClick(e) {
    e.preventDefault();
    handleAddTodo(todoTextRef.current.value, todoTagRef.current.value);
    todoTextRef.current.value = '';
    todoTagRef.current.value = '';
  }

  function handleEditClick(e) {
    e.preventDefault();
    handleEditTodo(todoId, todoTextRef.current.value, todoTagRef.current.value);
    closeEditForm();
  }

  function handleOutsideClick(e) {
    if (!(e.target.classList.contains("todo-form-element") || e.target.parentElement.classList.contains("todo-form-element")) && closeOutside) {
      { formType === "add" && closeAddForm() };
      { formType === "edit" && closeEditForm() };
    }
    closeOutside = true;
  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick)

    return () => {
      document.removeEventListener("click", handleOutsideClick)
    };
  }, []);


  return (
    <div className="todo-form todo-form-element" id="todo-form">
      <div className="todo-header todo-form-element">
        <p>Add/Edit Todo</p>

        {formType === "add" && <button onClick={closeAddForm}>Close</button>}
        {formType === "edit" && <button onClick={closeEditForm}>Close</button>}
      </div>
      <form className="input-form todo-form-element">
        <div className="todo-form-element">
          <label htmlFor="todo-input">Enter Todo: </label>
          <input type="text" name="todo-input" id="todo-input" ref={todoTextRef}></input>
        </div>
        <div className="todo-form-element">
          <label htmlFor="todo-tag">Enter Tag (optional): </label>
          <input type="text" name="todo-tag" id="todo-tag" ref={todoTagRef}></input>
        </div>
        {formType === "add" && <button type="submit" onClick={handleAddClick}>Add</button>}
        {formType === "edit" && <button type="submit" onClick={handleEditClick}>Edit</button>}
      </form>
    </div>
  )
}

export default TodoForm