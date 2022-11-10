import React from "react";

function Footer({ justArray, setArray, setFilterType, filterType}) {
  const unCompleted = justArray.filter((todo) => todo.completed === false);
  const completed = justArray.filter((todo) => todo.completed === true);

  const clearCompleted= (e)=>{
   
    setArray(justArray.filter(todo=>todo.completed===false))
    } 

  return (
    <footer className="footer">

      <span className="todo-count">

        <strong>{unCompleted.length} </strong>
        items left

      </span>

      <ul className="filters">
        <li key={1}>
          <span className={filterType === 'all' ? 'selected' : ''} id="all" onClick={() => setFilterType('all')}>
            All
          </span>
        </li>
        <li key={2}>
          <span className={filterType === 'active' ? 'selected' : ''} id="active" onClick={() => setFilterType('active')}>
            Active
          </span>
        </li>
        <li key={3}>
          <span className={filterType === 'completed' ? 'selected' : ''} id="completed" onClick={() => setFilterType('completed')}>
            Completed
          </span>
        </li>
      </ul>

      <button className={completed.length===0 ? "hidden": "clear-completed"} onClick={clearCompleted}>Clear completed</button>

    </footer>
  );
}

export default Footer;
