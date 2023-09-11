import{s as B,j as e,h as E,f as I,n as x,r as h,e as L,H as $,B as g}from"./index-9ca2f825.js";import{u as F,a as N,B as R,b as G,c as H}from"./useBooking-d89c1365.js";import{R as M}from"./Row-e86015b6.js";import{f as n}from"./helpers-34206ec0.js";import{u as Q}from"./apiBookings-397b7e64.js";import{u as T}from"./useMutation-f033b708.js";import{a as q}from"./useSettings-c51433a2.js";import"./index.esm-961c086a.js";import"./iconBase-f40a5180.js";import"./Flag-19fc1309.js";import"./index-51c1973d.js";const z=B.div`
  display: flex;
  gap: 1.6rem;

  & input[type='checkbox'] {
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
  }

  & input[type='checkbox']:disabled {
    accent-color: var(--color-brand-600);
  }

  & label {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`,p=({checked:t,onChange:r,disabled:a=!1,id:o,children:s})=>e.jsxs(z,{children:[e.jsx("input",{type:"checkbox",id:o,checked:t,onChange:r,disabled:a}),e.jsx("label",{htmlFor:a?"":o,children:s})]}),A=()=>{const t=E(),r=I(),{mutate:a,isLoading:o}=T({mutationFn:({bookingId:s,breakfast:l})=>Q(s,{status:"checked-in",isPaid:!0,...l}),onSuccess:async s=>{x.success(`Booking #${s.id} successfully checked in`),await t.invalidateQueries({active:!0}),r("/")},onError:()=>x.error("There was an error while checking in")});return{checkin:a,isCheckingIn:o}},b=B.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`,D=()=>{const[t,r]=h.useState(!1),[a,o]=h.useState(!1),{booking:s,isLoading:l}=F(),{settings:j,isLoading:C}=q();h.useEffect(()=>r((s==null?void 0:s.isPaid)??!1),[s]);const f=N(),{checkin:k,isCheckingIn:m}=A();if(l||C)return e.jsx(L,{});const{id:c,guests:y,totalPrice:d,numGuests:v,hasBreakfast:P,numNights:S}=s,i=j.breakfastPrice*S*v,w=()=>{t&&k(a?{bookingId:c,breakfast:{hasBreakfast:!0,extrasPrice:i,totalPrice:d+i}}:{bookingId:c,breakfast:{}})};return e.jsxs(e.Fragment,{children:[e.jsxs(M,{type:"horizontal",children:[e.jsxs($,{as:"h1",children:["Check in booking #",c]}),e.jsx(R,{onClick:f,children:"← Back"})]}),e.jsx(G,{booking:s}),!P&&e.jsx(b,{children:e.jsxs(p,{checked:a,onChange:()=>{o(u=>!u),r(!1)},id:"breakfast",children:["Want to add breakfast for ",n(i),"?"]})}),e.jsx(b,{children:e.jsxs(p,{checked:t,onChange:()=>r(u=>!u),disabled:t||m,id:"confirm",children:["I confirm that ",y.fullName," has paid the total amount of"," ",a?`${n(d+i)} (${n(d)} + ${n(i)})`:n(d)]})}),e.jsxs(H,{children:[e.jsxs(g,{onClick:w,disabled:!t||m,children:["Check in booking #",c]}),e.jsx(g,{variation:"secondary",onClick:f,children:"Back"})]})]})},se=()=>e.jsx(D,{});export{se as default};
