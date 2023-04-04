export interface TableRowProps {
    name: string;
    type: string;
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
    total: number;
}

export interface TableProps {
    tableData: TableRowProps[];
}
  