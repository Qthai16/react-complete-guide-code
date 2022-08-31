import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const expenseItems = props.expenses.map((item, index, array) => (
    <div>
      <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
    </div>
  ));
  return <Card className="expenses">{expenseItems}</Card>;
}

export default Expenses;
