import { useState } from 'react'
import { ExpenseDate } from './ExpenseDate'
import './ExpenseItem.style.css'

export const ExpenseItem = ({ item }) => {
  const [title, setTitle] = useState(item.title)

  return (
    <article className="expense-item">
      <ExpenseDate date={item.date} />
      <div className="expense-item__descr">
        <h2>{title}</h2>
        <div className="expense-item__price">{item.price}€</div>
      </div>
      <button onClick={() => setTitle('u')}>Change title</button>
    </article>
  )
}
