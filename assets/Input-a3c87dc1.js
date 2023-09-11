import{s as e,y as o}from"./index-a84ab2bb.js";const d=e.form`
  ${r=>r.type==="regular"&&o`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${r=>r.type==="modal"&&o`
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
`;d.defaultProps={type:"regular"};const i=e.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;export{d as F,i as I};
