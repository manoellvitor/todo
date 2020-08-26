import React, { Fragment } from 'react';
import './App.css';

// Components
import InputToDo from "./components/InputToDo"
function App() {
  return (
    <Fragment>
      <div className="container">
        <InputToDo />
      </div>
    </Fragment>
  );
}

export default App;
