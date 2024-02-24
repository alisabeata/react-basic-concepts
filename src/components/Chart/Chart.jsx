import { ChartBar } from './ChartBar'
import './Chart.style.css'

export const Chart = ({ dataPoints }) => (
  <div className="chart">
    {dataPoints &&
      dataPoints.length > 0 &&
      dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={100}
          label={dataPoint.label}
        />
      ))}
  </div>
)
