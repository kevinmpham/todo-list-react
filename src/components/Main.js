import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function Main() {
  const [todoList, setTodoList] = useState([]);
  const todoTextRef = useRef();

  function handleAddTodo(e) {
    e.preventDefault();
    const todoText = todoTextRef.current.value;
    const newTodoList = [...todoList, { text: todoText, id: uuidv4(), complete: false }]
    setTodoList(newTodoList);
    todoTextRef.current.value = '';
  }

  function handleRemoveTodo(id) {
    const newTodoList = [...todoList];
    const todoIndex = newTodoList.findIndex(todo => todo.id === id);
    newTodoList.splice(todoIndex, 1);
    setTodoList(newTodoList);
  }

  function handleComplete(id) {
    const newTodoList = [...todoList];
    const todo = newTodoList.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodoList(newTodoList);
  }

  useEffect(() => {
    console.log(todoList)
  }, [todoList])

  return (
    <div className="main">
      <form>
        <label htmlFor="todo-input">Enter Todo:</label>
        <input type="text" name="todo-input" id="todo-input" ref={todoTextRef}></input>
        <button type="submit" onClick={handleAddTodo}>Add</button>
      </form>
      <TodoList todoList={todoList} handleComplete={handleComplete} handleRemoveTodo={handleRemoveTodo} />
    </div>
  )
}

export default Main