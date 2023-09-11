import styled from 'styled-components';
import { ReactElement, ReactNode } from 'react';

const StyledFormRow = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;
  padding: 1.2rem 0;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

interface FormRowProps {
  label?: string;
  error?: string;
  children: ReactNode;
}

const FormRow = ({ label, error, children }: FormRowProps) => {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={(children as ReactElement)?.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
};

export default FormRow;
