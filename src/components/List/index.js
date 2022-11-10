import React, { useEffect, useState } from "react";

function List({ justArray, setArray, filterType }) {
  const [filteredArray, setFilteredArray] = useState([...justArray]);

  const deleteItem = (key) => {
    setArray(
      justArray.filter((employee) => {
        return employee.key !== key;
      })
    );
  };

  const updateChecked = (e) => {
    const newArray = justArray.map((item) => {
      if (item.key + "" === e.target.name)
        return { ...item, completed: e.target.checked };
      else return item;
    });
    setArray(newArray);
  };

  useEffect(() => {
    let newArray = [...justArray];

    if (filterType === "active")
      newArray = newArray.filter((item) => !item.completed);
    else if (filterType === "completed")
      newArray = newArray.filter((item) => item.completed);

    setFilteredArray(newArray);
  }, [filterType, justArray]);

  // const inputOnChange = e => {
  //   const newArray = justArray.map(item => {
  //     if(item.key + "" === e.target.name)
  //     return {...item, inTodo: e.target.value}
  //   else
  //     return item
  //   })
  //   setArray(newArray)
  // }

  const checkedAll = (e) => {
    console.log(e.target.checked);
    setArray(
      justArray.map((item) =>
        e.target.checked === true
          ? { ...item, completed: true }
          : { ...item, completed: false }
      )
    );
  };

  let y = justArray.length ? true : false;

  return (
    <div className="main">
      <input
        className="toggle-all"
        type="checkbox"
        id="toggle-all"
        onChange={checkedAll}
      />
      <label htmlFor="toggle-all" hidden={!y} />
      <ul className="todo-list">
        {filteredArray.map((item) => {
          return (
            <>
              <li
                key={item.key}
                className={item.completed ? "completed" : null}
              >
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    name={item.key}
                    checked={item.completed}
                    onChange={updateChecked}
                  />

                  <label name={item.key} mv-mode="mv-editor">
                    {item.inTodo}
                    {/* <input className="mv-editor" type='text' name={item.key} onChange={inputOnChange} value={item.inTodo}/>  */}
                  </label>

                  <button
                    className="destroy"
                    onClick={() => deleteItem(item.key)}
                  />
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
