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


/* Components */


//Table Component
export interface TableProps {
    tableData: {
        headers: TableHeadersProps[],
        data: TableRowProps[],
    };
}

//Table Head Component
export interface TableHeadProps {
    headers: TableHeadersProps[];
}

//Table Body Component
export interface TableBodyProps {
    data: TableRowProps[];
}
  