import { ChartBar } from './ChartBar'
import './Chart.style.css'

export const Chart = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value)
  const totalMax = Math.max(...dataPointsValues)

  return (
    <div className="chart">
      {dataPoints &&
        dataPoints.length > 0 &&
        dataPoints.map((dataPoint, id) => (
          <ChartBar
            key={id}
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
          />
        ))}
    </div>
  )
}
