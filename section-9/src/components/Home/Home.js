import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";
import AuthContext from "../../contexts/auth-context";

const Home = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button type="button" className="btn" onClick={authCtx.onLogout}>
        Logout
      </Button>
    </Card>
  );
};

export default Home;
