import { useState } from 'react'
import './ExpenseForm.style.css'

export const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleCangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const amountCangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }

  const dateCangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })

  // const titleCangeHandler = (event) => {
  //   // in case of using previous state (...prevState) it's necessary 
  //   // to use callback in the state setter to provide an actual state
  //   // callback guarantee to provide the latest snapchot of the state
  //   setUserInput((prevState) => ({
  //     ...prevState,
  //     enteredTitle: event.target.value,
  //   }))
  // }

  // const amountCangeHandler = (event) => {
  //   setUserInput((prevState) => ({
  //     ...prevState,
  //     enteredAmount: event.target.value,
  //   }))
  // }

  // const dateCangeHandler = (event) => {
  //   setUserInput((prevState) => ({
  //     ...prevState,
  //     enteredDate: event.target.value,
  //   }))
  // }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleCangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountCangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2300-01-01"
            onChange={dateCangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}
