import React, { useState } from "react";
import classes from "./Meals.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const Meals = (props) => {
  const [amount, setMealAmount] = useState(0);
  const addMealHandler = () => {
    // setMealAmount((prevAmount) => +prevAmount + 1);
    props.onAddMeal({
      name: props.name,
      prices: props.prices,
      amount: +amount
    })
  };
  const changeAmountHandler = (event) => {
    event.preventDefault();
    const enteredAmount = event.target.value;
    if (enteredAmount > 0) setMealAmount(enteredAmount);
  };
  return (
    <Card>
      <div className={classes["meal-control"]}>
        <div className={classes["meal-details"]}>
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
        </div>
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
    </Card>
  );
};

export default Meals;
