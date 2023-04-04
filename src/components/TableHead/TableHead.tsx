import { TableHeadProps } from "../../types/tableProps";
import { Th, ThContent, Thead, Tr } from "./styles";

function TableHead({
  headers,
  selectedColumn,
  sortDirection,
  sortTable,
}: TableHeadProps) {

  const icon = sortDirection === "asc" ? "▲" : "▼";
  return (
    <Thead>
      <Tr>
        {headers.map((header) => (
          <Th>
            <ThContent>{header.label}</ThContent>
          </Th>
        ))}
      </Tr>
    </Thead>
  );
}

export default TableHead;
