import React, { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  // const [check, setCheck] = useState(true);
  const toggleTask = (idx) => {
    const updatedList = list.map((item, i) =>
      i === idx ? { ...item, completed: !item.completed } : item,
    );
    setList(updatedList);
    saveData(updatedList);
  };

  // console.log(check);

  // console.log(task);

  // function addData() {
  //   setList([...list, task]);
  //   setTask("");

  // }

  function addData() {
    const updatedList = [...list, { text: task, completed: false }];

    // console.log(list);
    // console.log(updatedList);
    
    setList(updatedList);
    saveData(updatedList);
    setTask("");
  }
  function loadData() {
    const savedList = localStorage.getItem("todos");
    if (savedList) {
      setList(JSON.parse(savedList));
    }
  }

  function saveData(data) {
    localStorage.setItem("todos", JSON.stringify(data));
  }
  useEffect(() => {
    loadData();
  }, []);

  // console.log(list);

  // const handleDelete = (val) => {
  //   // console.log(list);
  //   console.log(val);
  //   const updatedList=list.filter(x=> x!==val)

  //   setList(updatedList)
  // };
  const handleDelete = (val) => {
    const updatedList = list.filter((x) => x !== val);
    setList(updatedList);
    saveData(updatedList);
  };
  return (
    <div className="container">
      <div className="todo">
        <header>
          <h1>Todo List</h1>
        </header>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter your Work"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="btn" onClick={addData}>
            ADD DATA
          </button>
        </div>
      </div>

      <div>
        <ul className="tast-list">
          {list.map((item, idx) => (
            <li key={idx} className="task-item">
              <span
                onClick={() => toggleTask(idx)}
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                  color: item.completed ? "gray" : "white",
                  cursor: "pointer",
                }}
              >
                {item.text}
              </span>
              <button className="delete-btn" onClick={() => handleDelete(item)}>
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
