import { ExpenseDate } from './ExpenseDate'
import './ExpenseItem.style.css'

export const ExpenseItem = ({ item }) => {
  return (
    <article className="expense-item">
      <ExpenseDate date={item.date} />
      <div className="expense-item__descr">
        <h2>{item.title}</h2>
        <div className="expense-item__price">{item.price}€</div>
      </div>
    </article>
  )
}
