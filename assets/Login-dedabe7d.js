import{s as i,j as e,m as g,k as p,o as h,p as x,d as c,B as j,H as y}from"./index-47e742b1.js";import{F as v,I as u}from"./Input-97270cfc.js";import{u as f}from"./useMutation-79e89d2f.js";import{S as L,L as b}from"./Logo-cf1ca5d0.js";import"./iconBase-1ea16344.js";const w=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`,S=i.label`
  font-weight: 500;
`,E=i.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`,d=({label:s,error:t,children:o})=>e.jsxs(w,{children:[s&&e.jsx(S,{htmlFor:o.props.id,children:s}),o,t&&e.jsx(E,{children:t})]}),F=()=>{const s=g(),t=p(),{mutate:o,isLoading:l}=f({mutationFn:({email:r,password:n})=>h({email:r,password:n}),onSuccess:r=>{s.setQueryData(["user"],r.user),t("/dashboard",{replace:!0})},onError:r=>{console.error("ERROR: ",r),x.error("Provided email or password are incorrect")}});return{login:o,isLoading:l}},C=()=>{const[s,t]=c.useState(""),[o,l]=c.useState(""),{login:r,isLoading:n}=F(),m=a=>{a.preventDefault(),!(!s||!o)&&r({email:s,password:o},{onSettled:()=>{t(""),l("")}})};return e.jsxs(v,{onSubmit:m,children:[e.jsx(d,{label:"Email address",children:e.jsx(u,{type:"email",id:"email",autoComplete:"username",value:s,onChange:a=>t(a.target.value),disabled:n})}),e.jsx(d,{label:"Password",children:e.jsx(u,{type:"password",id:"password",autoComplete:"current-password",value:o,onChange:a=>l(a.target.value),disabled:n})}),e.jsx(d,{children:e.jsx(j,{size:"large",disabled:n,children:n?e.jsx(L,{}):"Log in"})})]})},R=i.main`
  // min-height: 100vh;
  // display: grid;
  // grid-template-columns: 48rem;
  /* align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);*/

  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: space-evenly;
`,P=i.div``,I=()=>e.jsx(R,{children:e.jsxs(P,{children:[e.jsx(b,{}),e.jsx(y,{as:"h4",children:"Log in to your account"}),e.jsx(C,{})]})});export{I as default};
