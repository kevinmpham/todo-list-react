import React from 'react'

function Todo(props) {
  const { todo, handleComplete, handleRemoveTodo } = props

  return (
    <li className="todo-item">
      <input type="checkbox" checked={todo.complete} onChange={() => handleComplete(todo.id)}></input>
      {todo.text}
      <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
    </li>
  )
}

export default Todo