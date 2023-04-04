import { TableHeadProps } from "../../types/tableProps";
import { Th, Thead, Tr } from "./styles";

function TableHead({ headers, selectedColumn, sortDirection, sortTable }: TableHeadProps) {

  const icon = sortDirection === "asc" ? "▲" : "▼"

  return (
    <Thead>
      <Tr>
        {headers.map((header) => (
          <Th>{header.label}</Th>
        ))}
      </Tr>
    </Thead>
  );
}

export default TableHead;
