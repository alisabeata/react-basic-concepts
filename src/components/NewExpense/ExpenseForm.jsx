import { useState } from 'react'
import './ExpenseForm.style.css'

// An alternative way how to handle the state:
// const [userInput, setUserInput] = useState({
//   enteredTitle: '',
//   enteredAmount: '',
//   enteredDate: '',
// })

// const titleChangeHandler = (event) => {
//   // in case of using previous state (...prevState) it's necessary
//   // to use callback in the state setter to provide an actual state
//   // callback guarantee to provide the latest snapchot of the state
//   setUserInput((prevState) => ({
//     ...prevState,
//     enteredTitle: event.target.value,
//   }))
// }

// const amountChangeHandler = (event) => {
//   setUserInput((prevState) => ({
//     ...prevState,
//     enteredAmount: event.target.value,
//   }))
// }

// const dateChangeHandler = (event) => {
//   setUserInput((prevState) => ({
//     ...prevState,
//     enteredDate: event.target.value,
//   }))
// }

export const ExpenseForm = ({ onCancel, onSaveExpenceData }) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (enteredTitle && enteredAmount && enteredDate) {
      const expenseData = {
        title: enteredTitle,
        price: enteredAmount,
        date: new Date(enteredDate),
      }

      onSaveExpenceData(expenseData)

      setEnteredTitle('')
      setEnteredAmount('')
      setEnteredDate('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2300-01-01"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onCancel} type="button">
          Close
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}
