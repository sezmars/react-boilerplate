import{s as i,j as e,m as p,k as g,o as x,p as h,d as c,B as j,H as v}from"./index-1435744e.js";import{F as y,I as u}from"./Input-924bbee6.js";import{u as f}from"./useMutation-7691fc56.js";import{S as L,L as b}from"./Logo-fc6d5b19.js";import"./iconBase-30174b52.js";const w=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`,S=i.label`
  font-weight: 500;
`,E=i.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`,d=({label:s,error:r,children:o})=>e.jsxs(w,{children:[s&&e.jsx(S,{htmlFor:o.props.id,children:s}),o,r&&e.jsx(E,{children:r})]}),F=()=>{const s=p(),r=g(),{mutate:o,isLoading:l}=f({mutationFn:({email:t,password:n})=>x({email:t,password:n}),onSuccess:t=>{s.setQueryData(["user"],t.user),r("/dashboard",{replace:!0})},onError:t=>{console.error("ERROR: ",t),h.error("Provided email or password are incorrect")}});return{login:o,isLoading:l}},C=()=>{const[s,r]=c.useState(""),[o,l]=c.useState(""),{login:t,isLoading:n}=F(),m=a=>{a.preventDefault(),!(!s||!o)&&t({email:s,password:o},{onSettled:()=>{r(""),l("")}})};return e.jsxs(y,{onSubmit:m,children:[e.jsx(d,{label:"Email address",children:e.jsx(u,{type:"email",id:"email",autoComplete:"username",value:s,onChange:a=>r(a.target.value),disabled:n})}),e.jsx(d,{label:"Password",children:e.jsx(u,{type:"password",id:"password",autoComplete:"current-password",value:o,onChange:a=>l(a.target.value),disabled:n})}),e.jsx(d,{children:e.jsx(j,{size:"large",disabled:n,children:n?e.jsx(L,{}):"Log in"})})]})},R=i.main`
  display: flex;
  min-height: 100dvh;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--color-grey-50);
`,P=i.div``,I=()=>e.jsx(R,{children:e.jsxs(P,{children:[e.jsx(b,{}),e.jsx(v,{as:"h4",children:"Log in to your account"}),e.jsx(C,{})]})});export{I as default};
