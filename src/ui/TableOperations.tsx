import styled from 'styled-components';

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export default TableOperations;
