import React, { Fragment } from "react";
import "./App.css";

// Components
import InputToDo from "./components/InputToDo";
import ListToDo from "./components/ListToDo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputToDo />
        <ListToDo />
      </div>
    </Fragment>
  );
}

export default App;
