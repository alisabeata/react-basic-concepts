import { ExpenseItem } from './ExpenseItem'

export const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <p>No expenses found</p>
  }
  return (
    <>
      {expenses.map((cur) => (
        <ExpenseItem key={cur.id} item={cur} />
      ))}
    </>
  )
}
