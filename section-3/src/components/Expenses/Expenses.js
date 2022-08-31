import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((item, index, array) => {
        return (
          <div>
            <ExpenseItem
              key={index + item.title}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          </div>
        );
      })}
    </Card>
  );
}

export default Expenses;
