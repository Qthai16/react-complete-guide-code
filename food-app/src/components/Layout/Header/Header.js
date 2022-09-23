import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>{props.label}</h1>
        <HeaderCartButton totalAmount={props.totalAmount} onShowCart={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Meals picture"></img>
      </div>
    </>
  );
};

export default Header;
