import styled from "styled-components";

export const TableComponent = styled.table`
  width: 100%;
  max-width: 100%;
  display: block;
  overflow-x: auto;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #ddd;

  @media (max-width: 767px) {
    td {
      padding: 0.8rem 0.625rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    td {
      padding: 0.8rem 0.2rem;
    }
    th {
      word-wrap: break-word;
    }
  }

  @media (min-width: 1024px) {
    display: table;
    font-size: 1.125rem;
    td {
      padding: 0.9375rem;
    }
  }
`;
