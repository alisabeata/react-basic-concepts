import { Chart } from '../Chart/Chart'

export const ExpensesChart = () => {
  const dataPoints = [
    {
      label: 'Jan',
      value: 10,
    },
    {
      label: 'Feb',
      value: 20,
    },
    {
      label: 'Mar',
      value: 30,
    },
    {
      label: 'Apr',
      value: 40,
    },
    {
      label: 'May',
      value: 50,
    },
    {
      label: 'Jun',
      value: 40,
    },
    {
      label: 'Jul',
      value: 30,
    },
    {
      label: 'Aug',
      value: 20,
    },
    {
      label: 'Sep',
      value: 20,
    },
    {
      label: 'Oct',
      value: 10,
    },
    {
      label: 'Nov',
      value: 20,
    },
    {
      label: 'Dec',
      value: 30,
    },
  ]
  return <Chart dataPoints={dataPoints} />
}
