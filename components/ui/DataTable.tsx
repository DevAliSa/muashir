import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { cn } from "./utils";
  const DataTable = <T,>({columns, data, rowKey, tableClassName, headerRowClassName, headrCellClassName, bodyRowClassname, bodyCellClassName, headerClassName}: DataTableProps<T>) => {
    return (
        <Table className={cn('custom-scrollbar', tableClassName)}>
            <TableHeader className={headerClassName}>
                <TableRow className={cn('hover:bg-transparent!', headerRowClassName)}>
                    {columns.map((column, i) => (
                        <TableHead key={i} className={cn('bg-dark-100/50  py-4 first:pl-5 last:pr-5')}>
                            {column.header}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((row, rowIndex) => (
                    <TableRow key={rowKey(row, rowIndex)} className={cn('hover:bg-dark-100/50', bodyRowClassname)}>
                        {columns.map((column, i) => (
                            <TableCell>
                                {column.cell(row, rowIndex)}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        )
}
export default DataTable;