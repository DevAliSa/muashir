import React from 'react';
import DataTable from '@/components/ui/DataTable';

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback" className="space-y-4 animate-pulse">
      <div className="h-6 w-48 rounded bg-gray-200/30 dark:bg-gray-700/30" />

      <div className="grid grid-cols-3 gap-4">
        <div className="h-20 rounded bg-gray-200/30 dark:bg-gray-700/30" />
        <div className="h-20 rounded bg-gray-200/30 dark:bg-gray-700/30" />
        <div className="h-20 rounded bg-gray-200/30 dark:bg-gray-700/30" />
      </div>

      <div className="h-48 rounded bg-gray-200/30 dark:bg-gray-700/30" />
    </div>
  );
};

export const TrendingCoinsFallback = () => {
  const columns = [
    {
      header: 'Name',
      cellClassName: 'name-cell',
      cell: () => (
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gray-200/30 dark:bg-gray-700/30" />
          <div className="h-4 w-24 rounded bg-gray-200/30 dark:bg-gray-700/30" />
        </div>
      ),
    },
    {
      header: 'Rank',
      cellClassName: 'rank-cell',
      cell: () => (
        <div className="h-4 w-6 rounded bg-gray-200/30 dark:bg-gray-700/30" />
      ),
    },
    {
      header: 'Price (BTC)',
      cellClassName: 'price-cell',
      cell: () => (
        <div className="h-4 w-20 rounded bg-gray-200/30 dark:bg-gray-700/30" />
      ),
    },
  ];

  const data = new Array(6).fill({});

  return (
    <div id="trending-coins-fallback">
      <DataTable
        data={data}
        columns={columns as any}
        rowKey={(_, i) => i}
        tableClassName="trending-coins-table"
        headerClassName="py-3!"
        bodyCellClassName="py-2!"
      />
    </div>
  );
};

export default null;
