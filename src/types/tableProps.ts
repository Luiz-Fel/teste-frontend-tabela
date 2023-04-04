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

export interface TableHeadersProps {
    label: string;
    key: string;
}

export interface TableProps {
    tableData: {
        headers: TableHeadersProps[],
        data: TableRowProps[],
    };
}
  