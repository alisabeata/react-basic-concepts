import { useState } from 'react'
import { Card } from '../Utils/Card'
import { ExpensesFilter } from './ExpensesFilter'
import { ExpensesChart } from './ExpensesChart'
import { ExpensesList } from './ExpensesList'

export const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('')

  const handleChangeFilter = (year) => {
    setFilteredYear(year)
  }

  const filteredExpensesArr = expenses.filter((expense) => {
    return filteredYear
      ? expense.date.getFullYear().toString() === filteredYear
      : true
  })

  console.log(filteredYear, filteredExpensesArr)

  return (
    <>
      <ExpensesChart />
      <Card>
        <ExpensesFilter onChangeFilter={handleChangeFilter} />
        <ExpensesList expenses={filteredExpensesArr} />
      </Card>
    </>
  )
}
