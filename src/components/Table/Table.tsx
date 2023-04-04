import { useState } from "react";
import { TableProps, TableRowProps } from "../../types/tableProps";
import TableBody from "../TableBody/TableBody";
import TableHead from "../TableHead/TableHead";
import { TableComponent } from "./styles";

function Table({ tableData: args }: TableProps) {
  const { data, headers } = args;

  const [tableData, setTableData] = useState<TableRowProps[]>(data);
  const [selectedColumn, setSelectedColumn] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const sortTable = (columnName: string) => {
    const sortedData = [...tableData];
    if (selectedColumn === columnName) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      return setTableData(sortedData.reverse());
    }

    setSelectedColumn(columnName);
    sortedData.sort((a: TableRowProps, b: TableRowProps) =>
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
