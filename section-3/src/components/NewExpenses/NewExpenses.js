import React from 'react'
import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'

const NewExpenses = (props) => {
    const saveNewExpenseItemHandler = (enteredExpenseItem) => {
        const expenseItems = {
            ...enteredExpenseItem,
            id: Math.random().toString()
        };
        props.onUpdateExpenses(expenseItems);
        console.log(expenseItems);
    };
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseItem={saveNewExpenseItemHandler}/>
        </div>
    );
}

export default NewExpenses;