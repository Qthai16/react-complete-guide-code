import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  let dataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 }
  ];
  for (const expenses of props.filteredExpenses){
    const currentMonth = expenses.date.getMonth();
    dataPoints[currentMonth].value += expenses.amount;
  }
  const amountArr = dataPoints.map(item => item.value);
  let maxValue = Math.max(...amountArr);
  return (
    <div>
      <Chart dataPoints={dataPoints} maxValue={maxValue}/>
    </div>
  );
};

export default ExpensesChart;
