import{s as B,j as e,h as E,f as I,n as x,r as h,e as L,H as $,B as g}from"./index-984d768b.js";import{u as F,B as N,a as R,b as G}from"./useBooking-2b5b604e.js";import{R as H}from"./Row-f80d0cb8.js";import{u as M}from"./useMoveBack-152d6aec.js";import{f as n}from"./helpers-34206ec0.js";import{u as Q}from"./apiBookings-179d4618.js";import{u as T}from"./useMutation-a635d694.js";import{a as q}from"./useSettings-65dd0b99.js";import"./index.esm-6990797f.js";import"./iconBase-2f78fa08.js";import"./Flag-14580bca.js";import"./index-c6ee634e.js";const z=B.div`
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
`,p=({checked:t,onChange:a,disabled:r=!1,id:o,children:s})=>e.jsxs(z,{children:[e.jsx("input",{type:"checkbox",id:o,checked:t,onChange:a,disabled:r}),e.jsx("label",{htmlFor:r?"":o,children:s})]}),A=()=>{const t=E(),a=I(),{mutate:r,isLoading:o}=T({mutationFn:({bookingId:s,breakfast:l})=>Q(s,{status:"checked-in",isPaid:!0,...l}),onSuccess:async s=>{x.success(`Booking #${s.id} successfully checked in`),await t.invalidateQueries({active:!0}),a("/")},onError:()=>x.error("There was an error while checking in")});return{checkin:r,isCheckingIn:o}},b=B.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`,D=()=>{const[t,a]=h.useState(!1),[r,o]=h.useState(!1),{booking:s,isLoading:l}=F(),{settings:j,isLoading:C}=q();h.useEffect(()=>a((s==null?void 0:s.isPaid)??!1),[s]);const f=M(),{checkin:k,isCheckingIn:m}=A();if(l||C)return e.jsx(L,{});const{id:c,guests:y,totalPrice:d,numGuests:v,hasBreakfast:P,numNights:S}=s,i=j.breakfastPrice*S*v,w=()=>{t&&k(r?{bookingId:c,breakfast:{hasBreakfast:!0,extrasPrice:i,totalPrice:d+i}}:{bookingId:c,breakfast:{}})};return e.jsxs(e.Fragment,{children:[e.jsxs(H,{type:"horizontal",children:[e.jsxs($,{as:"h1",children:["Check in booking #",c]}),e.jsx(N,{onClick:f,children:"← Back"})]}),e.jsx(R,{booking:s}),!P&&e.jsx(b,{children:e.jsxs(p,{checked:r,onChange:()=>{o(u=>!u),a(!1)},id:"breakfast",children:["Want to add breakfast for ",n(i),"?"]})}),e.jsx(b,{children:e.jsxs(p,{checked:t,onChange:()=>a(u=>!u),disabled:t||m,id:"confirm",children:["I confirm that ",y.fullName," has paid the total amount of"," ",r?`${n(d+i)} (${n(d)} + ${n(i)})`:n(d)]})}),e.jsxs(G,{children:[e.jsxs(g,{onClick:w,disabled:!t||m,children:["Check in booking #",c]}),e.jsx(g,{variation:"secondary",onClick:f,children:"Back"})]})]})},te=()=>e.jsx(D,{});export{te as default};
