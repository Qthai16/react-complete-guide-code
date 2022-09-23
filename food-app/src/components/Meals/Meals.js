import React, { useState } from "react";
import classes from "./Meals.module.css";
import Button from "../UI/Button/Button";

export const MealDetails = (props) => {
  const validAmount = props?.amount > 0 ? true : false;
  const validDescription = props?.description?.length > 0 ? true : false;
  return (<div className={classes["meal-details"]}>
    <div className="meal-details__name" style={{ fontWeight: "bold" }}>
      {props.name}
    </div>
    <div className="meal-details__description" style={{ fontStyle: "italic" }}>
      {validDescription && props.description}
    </div>
    <div
      className="meal-details__prices"
      style={{ fontWeight: "bold", color: "#8a2b06" }}
    >
      {props.prices}
      {validAmount && <span className={classes["meal-details__amount"]}>{`x${props.amount}`}</span>}
    </div>
  </div>);
};

const Meals = (props) => {
  const [amount, setMealAmount] = useState(0);
  const addMealHandler = () => {
    props.onAddMeal({
      name: props.name,
      prices: props.prices,
      amount: +amount,
    });
  };
  const changeAmountHandler = (event) => {
    event.preventDefault();
    const enteredAmount = event.target.value;
    if (enteredAmount > 0) setMealAmount(enteredAmount);
  };
  return (
    <div className={classes["meal-control"]}>
    <MealDetails name={props.name} description={props.description} prices={props.prices}/>
      {/* <div className={classes["meal-details"]}>
        <div className="meal-details__name" style={{ fontWeight: "bold" }}>
          {props.name}
        </div>
        <div
          className="meal-details__description"
          style={{ fontStyle: "italic" }}
        >
          {props.description}
        </div>
        <div
          className="meal-details__prices"
          style={{ fontWeight: "bold", color: "#8a2b06" }}
        >
          {props.prices}
        </div>
      </div> */}
      <div className={classes["meal-action"]}>
        <label htmlFor="amount" style={{ fontWeight: "bold" }}>
          Amount
          <input
            id="amount"
            type="number"
            step="1"
            min="1"
            value={amount}
            onChange={changeAmountHandler}
          />
        </label>
        <Button onClick={addMealHandler}>+Add</Button>
      </div>
    </div>
  );
};

export default Meals;
