import{s as B,j as e,m as E,k as I,p as x,d as h,i as L,H as $,f as n,B as g}from"./index-a71a39d0.js";import{u as F,B as N,a as R,b as G}from"./useBooking-a7a07624.js";import{R as H}from"./Row-24c4039e.js";import{u as M}from"./useMoveBack-9577d278.js";import{u as Q}from"./apiBookings-08b21e69.js";import{u as T}from"./useMutation-b4b59496.js";import{a as q}from"./useSettings-a40e1b49.js";import"./index.esm-2ca2ad89.js";import"./iconBase-6b13aead.js";import"./Flag-f3ccbeb3.js";import"./index-4d50b375.js";const z=B.div`
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
`,p=({checked:a,onChange:r,disabled:t=!1,id:o,children:s})=>e.jsxs(z,{children:[e.jsx("input",{type:"checkbox",id:o,checked:a,onChange:r,disabled:t}),e.jsx("label",{htmlFor:t?"":o,children:s})]}),A=()=>{const a=E(),r=I(),{mutate:t,isLoading:o}=T({mutationFn:({bookingId:s,breakfast:l})=>Q(s,{status:"checked-in",isPaid:!0,...l}),onSuccess:async s=>{x.success(`Booking #${s.id} successfully checked in`),await a.invalidateQueries({active:!0}),r("/")},onError:()=>x.error("There was an error while checking in")});return{checkin:t,isCheckingIn:o}},b=B.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`,D=()=>{const[a,r]=h.useState(!1),[t,o]=h.useState(!1),{booking:s,isLoading:l}=F(),{settings:j,isLoading:C}=q();h.useEffect(()=>r((s==null?void 0:s.isPaid)??!1),[s]);const k=M(),{checkin:f,isCheckingIn:m}=A();if(l||C)return e.jsx(L,{});const{id:c,guests:y,totalPrice:d,numGuests:v,hasBreakfast:P,numNights:S}=s,i=j.breakfastPrice*S*v,w=()=>{a&&f(t?{bookingId:c,breakfast:{hasBreakfast:!0,extrasPrice:i,totalPrice:d+i}}:{bookingId:c,breakfast:{}})};return e.jsxs(e.Fragment,{children:[e.jsxs(H,{type:"horizontal",children:[e.jsxs($,{as:"h1",children:["Check in booking #",c]}),e.jsx(N,{onClick:k,children:"← Back"})]}),e.jsx(R,{booking:s}),!P&&e.jsx(b,{children:e.jsxs(p,{checked:t,onChange:()=>{o(u=>!u),r(!1)},id:"breakfast",children:["Want to add breakfast for ",n(i),"?"]})}),e.jsx(b,{children:e.jsxs(p,{checked:a,onChange:()=>r(u=>!u),disabled:a||m,id:"confirm",children:["I confirm that ",y.fullName," has paid the total amount of"," ",t?`${n(d+i)} (${n(d)} + ${n(i)})`:n(d)]})}),e.jsxs(G,{children:[e.jsxs(g,{onClick:w,disabled:!a||m,children:["Check in booking #",c]}),e.jsx(g,{variation:"secondary",onClick:k,children:"Back"})]})]})},se=()=>e.jsx(D,{});export{se as default};
