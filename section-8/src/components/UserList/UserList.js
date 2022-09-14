import React from "react";
import Card from "../UI/Card/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  if (props.userList.length === 0) return <div></div>;
  return (
    <Card cssClass={classes.users}>
      <ul>
        {props.userList.map((item) => {
          return (
            <li key={item.id}>
              {item.name} ({item.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
