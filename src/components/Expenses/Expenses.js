import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
				{props.items.map((item) => (
					<div key={item.id}>
						<ExpenseItem
							title={item.title}
							amount={item.amount}
							date={item.date}
						/>
					</div>
				))}
			</Card>
		</div>
	);
};

export default Expenses;
