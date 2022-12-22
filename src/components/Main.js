import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import Sidebar from './Sidebar';
import TodoForm from './TodoForm';

function Main() {
  const [todoList, setTodoList] = useState([]);
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const [showTodoForm, setShowTodoForm] = useState(false);
  const [filter, setFilter] = useState({ filterType: "all", filterData: "" });
  const [uniqueTags, setUniqueTags] = useState([]);

  function handleAddTodo(todoText, todoTag) {
    const newTodoList = [...todoList, { text: todoText, tag: todoTag, id: uuidv4(), complete: false }]
    setTodoList(newTodoList);
    setShowTodoForm(false);
  }

  function handleRemoveTodo(id) {
    const newTodoList = [...todoList].filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  }

  function handleComplete(id) {
    const newTodoList = [...todoList];
    const todo = newTodoList.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodoList(newTodoList);
  }

  function handleEditTodo(id, text, tag) {
    const newTodoList = [...todoList];
    const todo = newTodoList.find(todo => todo.id === id);
    todo.text = text;
    todo.tag = tag;
    setTodoList(newTodoList);
  }

  function filterTodos(newFilter) {
    let newTodoList = [...todoList];
    const { filterType, filterData } = newFilter;
    if (filterType === "all") {

    } else if (filterType === "tag") {
      newTodoList = newTodoList.filter(todo => todo.tag === filterData);
    }
    setFilteredTodoList(newTodoList);
    if (newFilter != filter) {
      setFilter(newFilter);
    }
  }

  function findUniqueTags() {
    const allTags = [];
    [...todoList].forEach(todo => allTags.push(todo.tag));
    const unique = [... new Set(allTags)]
    setUniqueTags(unique);
  }

  useEffect(() => {
    filterTodos(filter);
    findUniqueTags();
  }, [todoList]);

  return (
    <div className="main">
      <Sidebar filterTodos={filterTodos} uniqueTags={uniqueTags} />
      <div className="content">
        <div className="add-button-div">
          <button id="add-button" onClick={() => setShowTodoForm(!showTodoForm)}>Add Todo</button>
        </div>
        {showTodoForm ? <TodoForm handleAddTodo={handleAddTodo} formType="add" closeAddForm={() => setShowTodoForm(false)} /> : null}
        <TodoList todoList={filteredTodoList} handleComplete={handleComplete} handleRemoveTodo={handleRemoveTodo} handleEditTodo={handleEditTodo} />
      </div>
    </div>
  )
}

export default Main