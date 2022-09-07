import React, { useState } from 'react'
import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'

const NewExpenses = (props) => {
    const saveNewExpenseItemHandler = (enteredExpenseItem) => {
        const expenseItems = {
            ...enteredExpenseItem,
            id: Math.random().toString()
        };
        props.onUpdateExpenses(expenseItems);
    };
    const [showForm, setShowForm] = useState(false);
    const showFormHandler = (value) => {
        setShowForm(value);
    }
    const addNewItemHandler = () => {
        setShowForm(true);
      };
    return (
        <div className='new-expense'>
            {!showForm && <button type="button" onClick={addNewItemHandler}>Add expense item</button>}
            {showForm && <ExpenseForm onSaveExpenseItem={saveNewExpenseItemHandler} onShowForm={showFormHandler}/>}
        </div>
    );
}

export default NewExpenses;