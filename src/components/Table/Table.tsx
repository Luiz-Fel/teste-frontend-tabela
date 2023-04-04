import { useState } from "react";
import { TableProps, TableRowProps } from "../../types/tableProps"
import TableBody from "../TableBody/TableBody"
import TableHead from "../TableHead/TableHead"
import { TableComponent } from "./styles"


function Table( { tableData : args } : TableProps) {

  const { data, headers } = args; 

  const [tableData, setTableData] = useState<TableRowProps[]>(data);
  const [selectedColumn, setSelectedColumn] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">(
    "asc"
  );

  return (
    <TableComponent>
        <TableHead  headers={headers}/>
        <TableBody  data={data} />
    </TableComponent>
  )
}

export default Table