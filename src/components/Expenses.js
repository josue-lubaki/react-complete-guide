import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
	return (
		<div className='expenses'>
			{props.items.map((item) => (
				<div key={item.id}>
					<ExpenseItem
						title={item.title}
						amount={item.amount}
						date={item.date}
					/>
				</div>
			))}
		</div>
	);
}

export default Expenses;
