import styled, { css } from 'styled-components';

interface FormProps {
  type?: 'modal' | 'regular';
}

const Form = styled.form<FormProps>`
  ${(props) =>
    props.type === 'regular' &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === 'modal' &&
    css`
      width: 80rem;

      @media (max-width: 768px) {
        width: 20rem;
      }
    `}

  overflow: hidden;
  font-size: 1.4rem;

  /* new code */
  gap: 10px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1rem;
  }
`;

Form.defaultProps = {
  type: 'regular',
};

export default Form;
