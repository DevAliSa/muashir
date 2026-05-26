'use client';
import type { ReactNode } from 'react';
import { PERIOD_BUTTONS } from './home/constants';

type CandlestickChartProps = {
  children?: ReactNode;
  data?: any[];
  coinId: string;
  height?: number;
  initialPeriod?: 'daily' | 'hourly' | 'weekly';
};

const CandlestickChart = ({
  children,
  data,
  coinId,
  height = 360,
  initialPeriod = 'daily',
}: CandlestickChartProps) => {
  const loading = false;

  return (
    <div id="candlestick-chart">
      <div className="chart-header">
        <div className="flex-1">{children}</div>
      </div>

      <div className="button-group">
        <span className="text-sm mx-2 font-medium text-purple-100/50">Period:</span>
        {PERIOD_BUTTONS.map(({ value, label }) => (
        <button key={value} className="config-button" onClick={() => {}} disabled={loading}>
          {label}
        </button>
        ))}
      </div>
    </div>
  );
};

export default CandlestickChart;