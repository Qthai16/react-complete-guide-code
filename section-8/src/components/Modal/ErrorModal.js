import React from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from './ErrorModal.module.css'

const ErrorModal = (props) => {
  const errorHeader = props.header.length === 0 ? "Error" : props.header;
  const errorMessage = props.message.length === 0 ? "Error" : props.message;
  return (
    <Card cssClass={classes.modal}>
      <header className={classes.header}>
        <h2>{errorHeader}</h2>
      </header>
      <div className={classes.content}>
        <p>{errorMessage}</p>
      </div>
      <footer className={classes.actions}>
        <Button type="button" onClick={props.action}>
          Okay
        </Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
