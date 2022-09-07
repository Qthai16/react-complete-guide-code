import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const [filteredExpenses, setFilterExpenses] = useState(props.expenses);

  useEffect(() => {
    setFilterExpenses(props.expenses)
  }, [props.expenses])
  
  const filterYearHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
  };
  return (
      <Card className="expenses">
        <ExpensesFilter onFilteredYear={filterYearHandler} year={filteredYear}/>
        {filteredExpenses
        .filter((item) => {
            // console.log("item.date.getFullYear()", item.date.getFullYear())
            // console.log("item.date.getFullYear().toString() === filteredYear", item.date.getFullYear().toString() === filteredYear)
            return item.date.getFullYear().toString() === filteredYear;
            // return true;
          })
        .map((item, index, array) => {
            return <div>
                <ExpenseItem
                  key={index + item.title}
                  title={item.title}
                  amount={item.amount}
                  date={item.date}
                />
              </div>
          })}
      </Card>
  );
}

export default Expenses;
