import React, { useRef } from "react";

import classes from "./AddTask.module.css";

function AddTask(props) {
  const textRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const task = {
      text: textRef.current.value,
    };

    props.onAddTask(task);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={textRef} />
      </div>
      <button>Add Task</button>
    </form>
  );
}

export default AddTask;
