import React, {useState} from "react";
import "./User.css";

const User = (props) => {
  return (
    <div className="user">
      <label>Username</label>
      <input type="text"></input>
      <label>Age (years)</label>
      <input type="number"></input>
      <button type="button" onClick={props.onAddUser}>Add user</button>
    </div>
  );
};

export default User;
