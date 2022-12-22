import React from 'react'
import Todo from './Todo';

function TodoList(props) {
  const { todoList, handleComplete, handleRemoveTodo, handleEditTodo } = props;

  return (
    <ul className="todo-list">
      {todoList.map(todo => {
        return <Todo key={todo.id} todo={todo} handleComplete={handleComplete} handleRemoveTodo={handleRemoveTodo} handleEditTodo={handleEditTodo} />
      })}
    </ul>
  )
}

export default TodoList