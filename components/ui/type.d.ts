interface DataTableProps <T> {
    columns: any[];
    data: T[];
    rowKey: string;
    tableClassName?: string;
    headerRowClassName?: string;
    headrCellClassName?: string;
    bodyRowClassname?: string;
    bodyCellClassName?: string;
    headerClassName?: string;
    rowClassName?: string;
    


}