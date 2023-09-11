import{s as l,j as e,h as g,f as p,l as x,n as h,r as c,B as j,H as f}from"./index-0f9aff97.js";import{F as v,I as u}from"./Input-09883a5b.js";import{u as y}from"./useMutation-07c9b950.js";import{S as L,L as b}from"./Logo-96a04d78.js";import"./iconBase-101a9d9e.js";const w=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`,S=l.label`
  font-weight: 500;
`,E=l.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`,d=({label:o,error:s,children:r})=>e.jsxs(w,{children:[o&&e.jsx(S,{htmlFor:r.props.id,children:o}),r,s&&e.jsx(E,{children:s})]}),F=()=>{const o=g(),s=p(),{mutate:r,isLoading:i}=y({mutationFn:({email:t,password:n})=>x({email:t,password:n}),onSuccess:t=>{o.setQueryData(["user"],t.user),s("/dashboard",{replace:!0})},onError:t=>{console.error("ERROR: ",t),h.error("Provided email or password are incorrect")}});return{login:r,isLoading:i}},C=()=>{const[o,s]=c.useState(""),[r,i]=c.useState(""),{login:t,isLoading:n}=F(),m=a=>{a.preventDefault(),!(!o||!r)&&t({email:o,password:r},{onSettled:()=>{s(""),i("")}})};return e.jsxs(v,{onSubmit:m,children:[e.jsx(d,{label:"Email address",children:e.jsx(u,{type:"email",id:"email",autoComplete:"username",value:o,onChange:a=>s(a.target.value),disabled:n})}),e.jsx(d,{label:"Password",children:e.jsx(u,{type:"password",id:"password",autoComplete:"current-password",value:r,onChange:a=>i(a.target.value),disabled:n})}),e.jsx(d,{children:e.jsx(j,{size:"large",disabled:n,children:n?e.jsx(L,{}):"Log in"})})]})},R=l.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`,I=()=>e.jsxs(R,{children:[e.jsx(b,{}),e.jsx(f,{as:"h4",children:"Log in to your account"}),e.jsx(C,{})]});export{I as default};
