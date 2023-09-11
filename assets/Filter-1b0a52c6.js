import{s as d,y as u,u as v,j as c}from"./index-452c50d8.js";const b=d.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`,i=d.button`
  background-color: var(--color-grey-0);
  border: none;

  ${e=>e.active&&u`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`,m=({filterField:e,options:o})=>{var l;const[a,t]=v(),s=a.get(e)||((l=o==null?void 0:o.at(0))==null?void 0:l.value),n=r=>{a.set(e,r),a.get("page")&&a.set("page","1"),t(a)};return c.jsx(b,{children:o.map(r=>c.jsx(i,{onClick:()=>n(r.value),active:r.value===s,disabled:r.value===s,children:r.label},r.value))})};export{m as F};
