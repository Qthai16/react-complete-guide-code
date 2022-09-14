import React, { useState } from "react";
import classes from "./UserForm.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../Modal/ErrorModal";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [showError, setShowError] = useState(false);
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (name.trim().length === 0) {
      setShowError(true);
      return;
    }
    if (+age < 1) {
      setShowError(true);
      return;
    }
    props.onAddUser({ name: name, age: age, id: Math.random().toString() });
    setName("");
    setAge(0);
  };
  const errorHeader = "Invalid input";
  const errorMessage = "Please enter a valid name and age (non-empty values)";
  const closeErrorHandler = () => {
    setShowError(false);
  };
  return (
    <div>
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
            onChange={nameChangeHandler}
            value={name}
          ></input>
          <label>Age (years)</label>
          <input
            className={classes.input}
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={age}
          ></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
