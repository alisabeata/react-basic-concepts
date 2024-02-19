import './ExpenseDate.style.css'

export const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString('en-US', { month: 'long' })
  const day = date.toLocaleString('en-US', { day: '2-digit' })
  const year = date.getFullYear()
  const datetime = `${year}-${day}-${date.toLocaleString('en-US', {
    month: '2-digit',
  })}`

  return (
    <time className="expense-date" dateTime={datetime}>
      <span>{month} </span>
      <span>{day}, </span>
      <span>{year}</span>
    </time>
  )
}
