import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) =>{
    let expensesContent =  <p>No available expanses.</p>;
  if (props.expenses.length === 0){
    return <h2 className="expenses-list__fallback">No available content!</h2>
  }
  else
  return (
    <ul className="expenses-list">
        {props.expenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))}

    </ul>
  )

}

export default ExpensesList;