import{s as o,j as e}from"./index-1435744e.js";const i=o.div`
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
`,s=o.label`
  font-weight: 500;
`,a=o.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`,d=o.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: end;
  @media (max-width: 768px) {
    align-items: center;
  }
`,m=({label:r,error:n,children:t})=>e.jsxs(i,{children:[r&&e.jsx(s,{htmlFor:t==null?void 0:t.props.id,children:r}),e.jsxs(d,{children:[t,n&&e.jsx(a,{children:n})]})]});export{m as F};
