import React, { useState, Fragment, useRef } from "react";
import classes from "./UserForm.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../Modal/ErrorModal";

const UserForm = (props) => {
  const enteredName = useRef();
  const enteredAge = useRef();
  const [showError, setShowError] = useState(false);
  const addUserHandler = (event) => {
    event.preventDefault();
    const name = enteredName.current.value;
    const age = enteredAge.current.value;
    if (name.trim().length === 0) {
      setShowError(true);
      return;
    }
    if (+age < 1) {
      setShowError(true);
      return;
    }
    props.onAddUser({ name: name, age: age, id: Math.random().toString() });
    enteredName.current.value = '';
    enteredAge.current.value = 0;
  };
  const errorHeader = "Invalid input";
  const errorMessage = "Please enter a valid name and age (non-empty values)";
  const closeErrorHandler = () => {
    setShowError(false);
  };
  return (
    <Fragment>
      {showError && <ErrorModal
        header={errorHeader}
        message={errorMessage}
        action={closeErrorHandler}
      />}
      <Card cssClass={classes.input}>
        <form onSubmit={addUserHandler}>
          <label>Username</label>
          <input
            className={classes.input}
            id="username"
            type="text"
            ref={enteredName}
          ></input>
          <label>Age (years)</label>
          <input
            className={classes.input}
            id="age"
            type="number"
            ref={enteredAge}
          ></input>
        <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default UserForm;
