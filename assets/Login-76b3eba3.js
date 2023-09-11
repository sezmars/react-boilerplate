import{s as l,j as e,m as g,k as p,o as x,p as h,d as c,B as j,H as f}from"./index-f9cf1646.js";import{F as v,I as u}from"./Input-5be619cb.js";import{u as y}from"./useMutation-bbbe9705.js";import{S as L,L as b}from"./Logo-686c48d0.js";import"./iconBase-1320fb7d.js";const w=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`,S=l.label`
  font-weight: 500;
`,E=l.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`,d=({label:o,error:r,children:s})=>e.jsxs(w,{children:[o&&e.jsx(S,{htmlFor:s.props.id,children:o}),s,r&&e.jsx(E,{children:r})]}),F=()=>{const o=g(),r=p(),{mutate:s,isLoading:i}=y({mutationFn:({email:t,password:n})=>x({email:t,password:n}),onSuccess:t=>{o.setQueryData(["user"],t.user),r("/dashboard",{replace:!0})},onError:t=>{console.error("ERROR: ",t),h.error("Provided email or password are incorrect")}});return{login:s,isLoading:i}},C=()=>{const[o,r]=c.useState(""),[s,i]=c.useState(""),{login:t,isLoading:n}=F(),m=a=>{a.preventDefault(),!(!o||!s)&&t({email:o,password:s},{onSettled:()=>{r(""),i("")}})};return e.jsxs(v,{onSubmit:m,children:[e.jsx(d,{label:"Email address",children:e.jsx(u,{type:"email",id:"email",autoComplete:"username",value:o,onChange:a=>r(a.target.value),disabled:n})}),e.jsx(d,{label:"Password",children:e.jsx(u,{type:"password",id:"password",autoComplete:"current-password",value:s,onChange:a=>i(a.target.value),disabled:n})}),e.jsx(d,{children:e.jsx(j,{size:"large",disabled:n,children:n?e.jsx(L,{}):"Log in"})})]})},R=l.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`,H=()=>e.jsxs(R,{children:[e.jsx(b,{}),e.jsx(f,{as:"h4",children:"Log in to your account"}),e.jsx(C,{})]});export{H as default};
