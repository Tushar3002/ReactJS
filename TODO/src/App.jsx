import React, { useState } from "react";
import "./App.css";
function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [check,setCheck]=useState(true)
  console.log(check);
  
  console.log(task);

  function addData() {
    setList([...list, task]);
    setTask("");
    
  }

  // console.log(list);

  const handleDelete = (val) => {
    // console.log(list);
    console.log(val);
    const updatedList=list.filter(x=> x!==val)
    
    setList(updatedList)
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
          {list.map((val, idx) => (
            <li key={idx} className="task-item" onClick={()=>!setCheck}>
              <span >{val}</span>
              <button className="delete-btn" onClick={() => handleDelete(val)}>
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
