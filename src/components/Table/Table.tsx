import { useState } from "react";
import { TableProps, TableRowProps } from "../../types/tableProps";
import TableBody from "../TableBody/TableBody";
import TableHead from "../TableHead/TableHead";
import { TableComponent } from "./styles";

function Table({ tableData: args }: TableProps) {
  const { data, headers } = args;
   // Declare state variables for managing the table.
  const [tableData, setTableData] = useState<TableRowProps[]>(data);
  const [selectedColumn, setSelectedColumn] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  
  // Function to sort the table by column.
  const sortTable = (columnName: string) => {
    const sortedData = [...tableData];
    /*If the column that was clicked is the same as the selected column,
     reverse the sort direction*/
    if (selectedColumn === columnName) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      return setTableData(sortedData.reverse());
    }

    setSelectedColumn(columnName); // Set the selected column to the column that was clicked
    sortedData.sort((a: TableRowProps, b: TableRowProps) => // Sort the table data by the selected column
      a[columnName as keyof TableRowProps] >
      b[columnName as keyof TableRowProps]
        ? 1
        : -1
    );

    return setTableData(sortedData);
  };
  return (
    <TableComponent>
      <TableHead
        headers={headers}
        sortTable={sortTable}
        selectedColumn={selectedColumn}
        sortDirection={sortDirection}
      />
      <TableBody data={data} />
    </TableComponent>
  );
}

export default Table;
