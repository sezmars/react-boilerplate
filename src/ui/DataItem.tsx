import styled from 'styled-components';
import React from 'react';
import { PropsWithChildren } from '../utils/types.ts';

const StyledDataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }
`;

const DataItem = ({
  icon,
  label,
  children,
}: {
  icon: React.JSX.Element;
  label: string;
  children: PropsWithChildren<string | string[]>;
}) => {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
};

export default DataItem;
