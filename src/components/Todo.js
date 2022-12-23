import React, { useState } from 'react'
import TodoForm from './TodoForm'

function Todo(props) {
  const { todo, handleComplete, handleRemoveTodo, handleEditTodo } = props
  const [showEditTodo, setShowEditTodo] = useState(false)

  return (
    <>
      <li className="todo-item">
        <input type="checkbox" checked={todo.complete} onChange={() => handleComplete(todo.id)}></input>
        {todo.text}
        <div className="todo-buttons">
          <button onClick={() => setShowEditTodo(!showEditTodo)}>Edit</button>
          <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
        </div>
      </li>
      {showEditTodo && <TodoForm handleEditTodo={handleEditTodo} formType="edit" todoId={todo.id} closeEditForm={() => setShowEditTodo(false)} />}
    </>
  )
}

export default Todo