import { TableHeadProps } from "../../types/tableProps";
import { Th, ThContent, Thead, Tr } from "./styles";

function TableHead({
  headers,
  selectedColumn,
  sortDirection,
  sortTable,
}: TableHeadProps) {

      const renderTableHeadCell = (column: string, label: string) => {
        const isSorted = selectedColumn === column;
        const icon = sortDirection === "asc" ? "▲" : "▼";

        return (
          <Th onClick={() => sortTable(column)}>
            <ThContent>
              <div>{label}</div>
              <span
                style={{color: isSorted ? "black" : "transparent",}}>
                {icon}
              </span>
            </ThContent>
          </Th>
        );
      };

  return (
    <Thead>
      <Tr>
        {headers.map((header) => (
          renderTableHeadCell(header.key, header.label)
        ))}
      </Tr>
    </Thead>
  );
}

export default TableHead;
