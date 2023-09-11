import{s as r,j as e,N as d,f as a,h as c,x as u,d as x,v as g,O as m}from"./index-afb46ae3.js";import{L as p,S as h}from"./Logo-e89d2200.js";import{r as v,b as j,n as f,s as y,t as b,u as k,v as w,w as H,x as S}from"./index.esm-c1fa6bf0.js";import{u as L}from"./useMutation-2aa671db.js";import"./iconBase-f5bb4411.js";const M=r.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,i=r(d)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;

    @media (max-width: 768px) {
      padding: 0;
      font-size: 1rem;
      gap: 0.7rem;
      flex-direction: column;
    }
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`,O=()=>e.jsx("nav",{children:e.jsxs(M,{children:[e.jsx("li",{children:e.jsxs(i,{to:"/dashboard",children:[e.jsx(v,{}),e.jsx("span",{children:"Home"})]})}),e.jsx("li",{children:e.jsxs(i,{to:"/bookings",children:[e.jsx(j,{}),e.jsx("span",{children:"Bookings"})]})}),e.jsx("li",{children:e.jsxs(i,{to:"/cabins",children:[e.jsx(f,{}),e.jsx("span",{children:"Cabins"})]})}),e.jsx("li",{children:e.jsxs(i,{to:"/users",children:[e.jsx(y,{}),e.jsx("span",{children:"Users"})]})}),e.jsx("li",{children:e.jsxs(i,{to:"/settings",children:[e.jsx(b,{}),e.jsx("span",{children:"Settings"})]})})]})}),C=r.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,N=()=>e.jsxs(C,{children:[e.jsx(p,{}),e.jsx(O,{})]}),t=r.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`,A=()=>{const s=a(),o=c(),{mutate:n,isLoading:l}=L({mutationFn:u,onSuccess:()=>{o.removeQueries(),s("/login",{replace:!0})}});return{logout:n,isLoading:l}},U=()=>{const{logout:s,isLoading:o}=A();return e.jsx(t,{disabled:o,onClick:s,children:o?e.jsx(h,{}):e.jsx(k,{})})},D=()=>{const{isDarkMode:s,toggleDarkMode:o}=x();return e.jsx(t,{onClick:o,children:s?e.jsx(w,{}):e.jsx(H,{})})},z=r.ul`
  display: flex;
  gap: 0.4rem;
`,R=()=>{const s=a();return e.jsxs(z,{children:[e.jsx("li",{children:e.jsx(t,{onClick:()=>s("/account"),children:e.jsx(S,{})})}),e.jsx("li",{children:e.jsx(D,{})}),e.jsx("li",{children:e.jsx(U,{})})]})},T=r.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`,B=r.img`
  display: block;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`,Q=r.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 10rem;
`,$=()=>{const{user:s}=g(),{fullName:o,avatar:n}=s.user_metadata;return e.jsxs(T,{children:[e.jsx(B,{src:n||"default-user.jpg",alt:`Avatar of ${o}`}),e.jsx(Q,{children:o})]})},q=r.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`,E=()=>e.jsxs(q,{children:[e.jsx($,{}),e.jsx(R,{})]}),F=r.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 6rem 1fr;
  }
`,I=r.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`,_=r.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`,W=()=>e.jsxs(F,{children:[e.jsx(E,{}),e.jsx(N,{}),e.jsx(I,{children:e.jsx(_,{children:e.jsx(m,{})})})]});export{W as default};
