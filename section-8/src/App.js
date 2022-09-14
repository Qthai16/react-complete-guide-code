import React, { useState } from "react";
import UserForm from "./components/User/UserForm";
import UserList from "./components/UserList/UserList";
// import Card from "./components/UI/Card/Card";

const App = () => {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (user) => {
    setUserList((prevUserList) => {
      const updatedUserList = [...prevUserList];
      updatedUserList.unshift(user);
      return updatedUserList;
    });
  };
  return (
    <div>
      <UserForm className="user" onAddUser={addUserHandler}></UserForm>
      <UserList className="user-list" userList={userList}></UserList>
    </div>
  );
};

export default App;
