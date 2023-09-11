import{s as i,j as e,m as g,k as p,o as h,p as x,d,B as j,H as y}from"./index-abe93b17.js";import{F as v,I as u}from"./Input-e69540b4.js";import{u as f}from"./useMutation-bcf85a1b.js";import{S as L,L as b}from"./Logo-5bc35228.js";import"./iconBase-722f28e0.js";const w=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`,S=i.label`
  font-weight: 500;
`,E=i.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`,c=({label:o,error:r,children:s})=>e.jsxs(w,{children:[o&&e.jsx(S,{htmlFor:s.props.id,children:o}),s,r&&e.jsx(E,{children:r})]}),F=()=>{const o=g(),r=p(),{mutate:s,isLoading:l}=f({mutationFn:({email:t,password:n})=>h({email:t,password:n}),onSuccess:t=>{o.setQueryData(["user"],t.user),r("/dashboard",{replace:!0})},onError:t=>{console.error("ERROR: ",t),x.error("Provided email or password are incorrect")}});return{login:s,isLoading:l}},C=()=>{const[o,r]=d.useState(""),[s,l]=d.useState(""),{login:t,isLoading:n}=F(),m=a=>{a.preventDefault(),!(!o||!s)&&t({email:o,password:s},{onSettled:()=>{r(""),l("")}})};return e.jsxs(v,{onSubmit:m,children:[e.jsx(c,{label:"Email address",children:e.jsx(u,{type:"email",id:"email",autoComplete:"username",value:o,onChange:a=>r(a.target.value),disabled:n})}),e.jsx(c,{label:"Password",children:e.jsx(u,{type:"password",id:"password",autoComplete:"current-password",value:s,onChange:a=>l(a.target.value),disabled:n})}),e.jsx(c,{children:e.jsx(j,{size:"large",disabled:n,children:n?e.jsx(L,{}):"Log in"})})]})},R=i.main`
  // min-height: 100vh;
  // display: grid;
  // grid-template-columns: 48rem;
  /* align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);*/

  display: flex;
  min-height: 100dvh;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--color-grey-50);
`,k=i.div``,I=()=>e.jsx(R,{children:e.jsxs(k,{children:[e.jsx(b,{}),e.jsx(y,{as:"h4",children:"Log in to your account"}),e.jsx(C,{})]})});export{I as default};
