import React from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./CartModal.module.css";
import { MealDetails } from "../Meals/Meals";

const CartModalAction = (props) => {
  return (
    <>
      <Button
        className={classes["actions__amount-button"]}
        onClick={() => {
          props.onAddMeal({
            ...props.item,
            amount: -1,
          });
        }}
      >
        -
      </Button>
      <Button
        className={classes["actions__amount-button"]}
        onClick={() => {
          props.onAddMeal({
            ...props.item,
            amount: 1,
          });
        }}
      >
        +
      </Button>
    </>
  );
};

const CartModal = (props) => {
  return (
    <Card className={classes.modal}>
      <div className={classes.content}>
        {props.mealItems.map((item, index) => {
          if (+item.amount <= 0) return <></>;
          const id = `${item.name} ${index}`;
          return (
            <div className={classes["cart-control"]} key={id}>
              <MealDetails
                name={item.name}
                amount={item.amount}
                prices={item.prices}
              />
              <div className={classes["cart-action"]}>
                <CartModalAction onAddMeal={props.onAddMeal} item={item} />
              </div>
            </div>
          );
        })}
        <div className={classes["cart-message"]}>
          <div>{props.message}</div>
          <div>{`$${Math.ceil(props.totalPrices)}`}</div>
        </div>
      </div>
      <footer className={classes.actions}>
        <Button
          className={classes.actions__button}
          type="button"
          onClick={props.onCloseCart}
        >
          Close
        </Button>
        <Button
          className={classes.actions__button}
          type="button"
          onClick={props.onShowCart}
        >
          Order
        </Button>
      </footer>
    </Card>
  );
};

export default CartModal;
