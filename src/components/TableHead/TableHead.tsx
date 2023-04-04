import { TableHeadProps } from "../../types/tableProps";
import { Th, Thead, Tr } from "./styles";

function TableHead({ headers }: TableHeadProps) {
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
