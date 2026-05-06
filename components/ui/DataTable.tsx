import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from './utils';

const DataTable = <T,>({
  columns,
  data,
  rowKey,
  tableClassName,
  headerRowClassName,
  headrCellClassName,
  bodyRowClassname,
  bodyCellClassName,
  headerClassName,
}: DataTableProps<T>) => {
  const getRowKey = (row: T, rowIndex: number): React.Key => {
    if (rowKey) {
      return rowKey(row, rowIndex);
    }
    return rowIndex;
  };

  return (
    <Table className={cn('custom-scrollbar', tableClassName)}>
      <TableHeader className={headerClassName}>
        <TableRow className={cn('hover:bg-transparent!', headerRowClassName)}>
          {columns.map((column, i) => (
            <TableHead
              key={i}
              className={cn('bg-dark-100/50 py-4 first:pl-5 last:pr-5')}
            >
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow
            key={getRowKey(row, rowIndex)}
            className={cn(
              'overflow-hidden rounded-lg border-b border-purple-100/5 hover:bg-dark-400/30! relative',
              bodyRowClassname
            )}
          >
            {columns.map((column, columnIndex) => (
              <TableCell
                key={columnIndex}
                className={cn(
                  'py-4 first:pl-5 last:pr-5',
                  column.cellClassName,
                  bodyCellClassName
                )}
              >
                {column.cell(row, rowIndex)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
