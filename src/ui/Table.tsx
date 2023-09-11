import { createContext, useContext, ReactNode } from 'react';
import styled from 'styled-components';

interface TableContextType {
  columns: string;
}

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;

  @media (max-width: 768px) {
    overflow: scroll;
  }
`;

interface CommonRowProps {
  columns: string;
}

const CommonRow = styled.div<CommonRowProps>`
  justify-content: space-between;
  display: flex;
  column-gap: 2.4rem;
  align-items: center;
  transition: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  *:not(img) {
    min-width: 150px;
  }
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const TableContext = createContext<TableContextType | undefined>(undefined);

interface TableProps {
  columns: string;
  children: ReactNode;
}

const Table = ({ columns, children }: TableProps) => {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
};

const Header = ({ children }: { children: ReactNode }) => {
  const { columns } = useContext(TableContext)!;
  return (
    <StyledHeader role="row" columns={columns} as="header">
      {children}
    </StyledHeader>
  );
};

const Row = ({ children }: { children: ReactNode }) => {
  const { columns } = useContext(TableContext)!;

  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
};

interface BodyProps<T> {
  data: T[] | undefined;
  render: (item: T, index: number) => ReactNode;
}

// eslint-disable-next-line func-style
function Body<T>({ data, render }: BodyProps<T>) {
  if (!data?.length) return <Empty>No data to show at the moment</Empty>;

  return <StyledBody>{data?.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
