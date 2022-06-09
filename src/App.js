// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {

  // getting data from local storage
  let getLocalTodoItems = () => {
    let list = localStorage.getItem("Todo");
    // console.log("list", list);
    if (list) {
      return JSON.parse(localStorage.getItem("Todo"));
    } else {
      return [];
    }
  };

  //  One state to track input value and another state is to store all input values in an array
  const [val, setVal] = useState("");
  const [todo, setTodo] = useState(getLocalTodoItems());

  // setting todo values into local storage
  useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(todo));
  }, [todo]);

  // on submitting Add button, todo items diplays down
  const handleSubmit = () => {
    if (val === "") {
      return [];
    } else {
      setTodo([...todo, val]);
      setVal("");
    }
  };

  // function to remove all todo items
  const RemoveAll = () => {
    setTodo([]);
  };

  // function to remove each selected todo item
  const deleteitem = (ind) => {
    let updateditems  = todo.filter((ele, id) => {
      return ind !== id;
    });
    setTodo(updateditems);
  };

  return (
    <div className="App">
      <div className="cleardata">
        <button onClick={RemoveAll}> Remove All </button>
      </div>
      <h2>TailNode To-Do List </h2>
      <div className="">
        <input
          className="input"
          type="text"
          placeholder="Enter Text..."
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <span>
          <button className="button" onClick={handleSubmit}>
            Return
          </button>
        </span>
      </div>
      <div className="">
        <ul>
          {todo.map((ele, ind) => {
            return (
              <div className="output">
                <li key={ind}> {ele} </li>
                <span className="deleteitem">
                  <i className="fa fa-trash" onClick={() => deleteitem(ind)} />
                </span>
              </div>
            );
          })}
        </ul>
      </div>
      
    </div>
  );
}

export default App;
