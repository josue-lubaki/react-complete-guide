import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

		// give to parent an expenseData
		props.onAddExpense(expenseData);

		// close automatically after adding data
		stopEditHandler();
	};

	const startEditHandler = () => {
		setIsEditing(true);
	};

	const stopEditHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className='new-expense'>
			{!isEditing && (
				<button onClick={startEditHandler}>Add New Expense </button>
			)}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={stopEditHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
