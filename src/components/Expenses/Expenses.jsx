import { useState } from 'react'
import { Card } from '../Utils/Card'
import { ExpensesFilter } from './ExpensesFilter'
import { ExpensesChart } from './ExpensesChart'
import { ExpensesList } from './ExpensesList'

export const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2024')

  const handleChangeFilter = (year) => {
    setFilteredYear(year)
  }

  const filteredExpensesArr = expenses.filter((expense) => {
    return (
      expense.date.getFullYear().toString() === filteredYear
    )
  })

  return (
    <>
      <ExpensesChart expenses={filteredExpensesArr} />
      <Card>
        <ExpensesFilter onChangeFilter={handleChangeFilter} />
        <ExpensesList expenses={filteredExpensesArr} />
      </Card>
    </>
  )
}
