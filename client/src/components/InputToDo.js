import React, { Fragment, useState } from 'react';

const InputToDo = () => {

  const [description, setDescription] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();

    try {
     const body = { description };
     const response = await fetch("http://localhost:5000/todos",{
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(body)
     })

     console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  }

  return <Fragment>
      <h1 className="text-center mt-5">
          ToDo List
      </h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
        <button className="btn btn-info form-control col-2 ml-3">Add ToDo</button>
      </form>
  </Fragment>;
}

export default InputToDo;