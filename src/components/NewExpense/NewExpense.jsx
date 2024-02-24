import { useState } from 'react'
import { ExpenseForm } from './ExpenseForm'
import './NewExpense.style.css'

export const NewExpense = ({ onAddExpense }) => {
  const [startEditing, setStartEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    onAddExpense(expenseData)

    setStartEditing(false)
  }

  return (
    <div className="new-expense">
      {!startEditing ? (
        <button onClick={() => setStartEditing(true)}>Add new expense +</button>
      ) : (
        <ExpenseForm
          onCancel={() => setStartEditing(false)}
          onSaveExpenceData={saveExpenseDataHandler}
        />
      )}
    </div>
  )
}
