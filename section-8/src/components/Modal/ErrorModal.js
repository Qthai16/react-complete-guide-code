import React from "react";
import ReactDOM from "react-dom";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./ErrorModal.module.css";

const ModalOverlay = (props) => {
  return (
    <Card cssClass={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button type="button" onClick={props.onAction}>
          Okay
        </Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  const errorHeader = props.header.length === 0 ? "Error" : props.header;
  const errorMessage = props.message.length === 0 ? "Error" : props.message;
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay
          title={errorHeader}
          message={errorMessage}
          onAction={props.action}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
