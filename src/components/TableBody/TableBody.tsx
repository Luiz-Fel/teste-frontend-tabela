import { TableBodyProps } from "../../types/tableProps"
import { Tbody, Td, Tr } from "./styles"

function TableBody({ data }: TableBodyProps) {
  // Render the table row with each cell containing data from the Pokemon object
  return (
    <Tbody>

      {data.map((pokemon) => (
        <Tr>
          <Td><p>{pokemon.name}</p></Td>
          <Td><p>{pokemon.type}</p></Td>
          <Td><p>{pokemon.hp}</p></Td>
          <Td><p>{pokemon.attack}</p></Td>
          <Td><p>{pokemon.defense}</p></Td>
          <Td><p>{pokemon.spAttack}</p></Td>
          <Td><p>{pokemon.spDefense}</p></Td>
          <Td><p>{pokemon.speed}</p></Td>
          <Td><p>{pokemon.total}</p></Td>
        </Tr>
      ))}
    </Tbody>
  )
}

export default TableBody