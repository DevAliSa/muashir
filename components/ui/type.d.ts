interface DataTableColumn<T> {
  header: string;
  cellClassName?: string;
  cell: (row: T, rowIndex?: number) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  data: T[];
  rowKey?: (row: T, rowIndex: number) => React.Key;
  tableClassName?: string;
  headerRowClassName?: string;
  headrCellClassName?: string;
  bodyRowClassname?: string;
  bodyCellClassName?: string;
  headerClassName?: string;
  rowClassName?: string;
}

interface TrendingCoinItem {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
  large: string;
  price_change_percentage_24h?: {
    usd: number;
  };
}

interface TrendingCoin {
  item: TrendingCoinItem;
}
