import React from "react";
import CartIcon from "../../UI/CartIcon/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={() => {props.onShowCart()}}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{props.totalAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
