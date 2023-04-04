import { useState } from "react";
import { TableProps, TableRowProps } from "../../types/tableProps"
import TableBody from "../TableBody/TableBody"
import TableHead from "../TableHead/TableHead"
import { TableComponent } from "./Styles"


function Table( { tableData : data } : TableProps) {

  const [tableData, setTableData] = useState<TableRowProps[]>(data);
  const [selectedColumn, setSelectedColumn] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">(
    "asc"
  );

  return (
    <TableComponent>
        <TableHead />
        <TableBody />
    </TableComponent>
  )
}

export default Table