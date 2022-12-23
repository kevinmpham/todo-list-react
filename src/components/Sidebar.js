import React from 'react'

function Sidebar(props) {
  const { filterTodos, uniqueTags } = props;

  return (
    <div className="sidebar">
      <div id="all-todos-button" className="sidebar-button" onClick={() => filterTodos({ filterType: "all", filterData: "" })}>All Todos</div>
      <div></div>
      <div>Filter by Tag:</div>
      {uniqueTags.map(tag => {
        return <div className="sidebar-button" key={tag} onClick={() => filterTodos({ filterType: "tag", filterData: tag })}>{tag}</div>
      })}
    </div >
  )
}

export default Sidebar
