import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  // const [filteredExpenses, setFilterExpenses] = useState(props.expenses);

  // useEffect(() => {
  //   setFilterExpenses(props.expenses);
  // }, [props.expenses]);
  const filteredExpenses = props.expenses.filter(item => item.date.getFullYear().toString() === filteredYear);

  const filterYearHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter onFilteredYear={filterYearHandler} year={filteredYear} />
      <ExpensesChart filteredExpenses={filteredExpenses}/>
      <ExpensesList expensesItems={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
