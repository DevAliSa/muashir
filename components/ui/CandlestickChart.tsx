'use client';
const CandlestickChart = ({children,data,coinId,heoght = 360, initialPeriod = 'daily', }: CondlestickChartProps) => {
  return (
    <div id="candlestick-chart">
        <div className="chart-header">
            <div className="flex-1">{children}</div>
        </div>
    </div>
  )
}

export default CandlestickChart;