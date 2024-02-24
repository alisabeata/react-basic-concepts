import { useState } from 'react'
import './App.css'
import { NewExpense } from './components/NewExpense/NewExpense'
import { Expenses } from './components/Expenses/Expenses'

const INIT_EXPENSES = [
  {
    id: 'e1',
    title: 'Star Ship',
    price: 1095,
    date: new Date(2024, 7, 14),
  },
  {
    id: 'e3',
    title: 'Insurance',
    price: 295,
    date: new Date(2023, 2, 28),
  },
  { id: 'e2', title: 'New Desk', price: 199, date: new Date(2023, 2, 12) },
  {
    id: 'e4',
    title: 'A Mask',
    price: 450,
    date: new Date(2022, 5, 12),
  },
]

function App() {
  const [expenses, setExpenses] = useState(INIT_EXPENSES)

  const addExpenseHendler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses])
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHendler} />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
