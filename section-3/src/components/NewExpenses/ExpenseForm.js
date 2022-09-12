import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState(0);
  // const [enteredDate, setEnteredDate] = useState('2019-01-01');
  const [userInput, setUserInput] = useState({
    title: "",
    amount: 0,
    date: "2019-01-01",
  });
  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput((prevState) => {
      return { ...userInput, title: event.target.value };
    });
    // console.log(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...userInput, amount: event.target.value };
    });
    // console.log(event.target.value);
  };
  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput((prevState) => {
      return { ...userInput, date: event.target.value };
    });
    // console.log(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseItem = {
      title: userInput.title,
      amount: +userInput.amount,
      date: new Date(userInput.date),
    };
    setUserInput({
      title: "",
      amount: 0,
      date: "",
    });
    props.onSaveExpenseItem(expenseItem);
    props.onShowForm(false);
    console.log(expenseItem);
  };
  const cancelHandler = (event) => {
    props.onShowForm(false);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.date}
            onChange={dateChangeHandler}
            required
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add expense</button>
          <button type="button" onClick={cancelHandler}>Cancel</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
