import { ExpenseItem } from './ExpenseItem'
import { Card } from '../Utils/Card'
import { NewExpense } from '../NewExpense/NewExpense'

const expenses = [
  {
    id: 'e1',
    title: 'Star Ship',
    price: 1095,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New Desk', price: 199, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Insurance',
    price: 295,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'A Mask',
    price: 450,
    date: new Date(2021, 5, 12),
  },
]

export const Expenses = () => {
  return (
    <>
      <NewExpense />
      <Card>
        {expenses.map((cur, ind) => (
          <ExpenseItem key={ind} item={cur} />
        ))}
      </Card>
    </>
  )
}
