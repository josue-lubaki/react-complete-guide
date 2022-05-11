import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';

function Expenses(props) {
	return (
		<Card className='expenses'>
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
	);
}

export default Expenses;
