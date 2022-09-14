import React from "react";
import classes from "./User.module.css";

const User = (props) => {
  return <li className={classes.user} key={props.id}>{props.name} ({props.age} years old)</li>
};

export default User;
