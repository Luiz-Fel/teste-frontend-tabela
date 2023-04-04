import TableBody from "../TableBody/TableBody"
import TableHead from "../TableHead/TableHead"
import { TableComponent } from "./Styles"


function Table() {
  return (
    <TableComponent>
        <TableHead />
        <TableBody />
    </TableComponent>
  )
}

export default Table