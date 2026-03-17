import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { MdDelete } from "react-icons/md";
import { addTask, deleteTask, fetchTask } from "../Store";

function Todo() {
  const [todo, setTodo] = useState("");

  const tasks = useSelector((state) => state.task);
  // console.log("React States : ",state.task);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTask(todo));
    return setTodo("");
  }

  function handleDelete(id) {
    dispatch(deleteTask(id));
  }

  function handleFetch() {
    dispatch(fetchTask());
  }

  return (
    <div className="container">
      <div className="todo">
        <header>
          <h1>Todo List</h1>
        </header>

        <div className="input-box">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your Work"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button className="btn">ADD DATA</button>
          </form>
        </div>
      </div>
      <button onClick={handleFetch}>Fetch</button>

      <div>
        <ul className="task-list">
          {tasks.map((cur, idx) => {
            return (
              <li key={idx} className="task-item">
                <div>{cur}</div>
                <div>
                  <MdDelete
                    style={{ color: "red" }}
                    onClick={() => {
                      handleDelete(idx);
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
