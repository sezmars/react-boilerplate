import{s as o,j as e,f as B,w as k,a as D,A as M}from"./index-9ca2f825.js";import{n as E,o as P,p as C,q as N}from"./index.esm-961c086a.js";import{F}from"./Flag-19fc1309.js";import{b as H,f as n}from"./helpers-34206ec0.js";import{f as i,e as $}from"./apiBookings-397b7e64.js";import{i as z}from"./index-51c1973d.js";const I=o.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
`,O=o.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }
`,l=({icon:r,label:a,children:t})=>e.jsxs(I,{children:[e.jsxs(O,{children:[r,e.jsx("span",{children:a})]}),t]}),S=o.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`,T=o.header`
  background-color: var(--color-brand-500);
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: 'Sono';
    font-size: 2rem;
    margin-left: 4px;
  }
`,q=o.section`
  padding: 3.2rem 4rem 1.2rem;
`,G=o.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`,A=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${r=>r.isPaid?"var(--color-green-100)":"var(--color-yellow-100)"};
  color: ${r=>r.isPaid?"var(--color-green-700)":"var(--color-yellow-700)"};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`,L=o.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`,J=({booking:r})=>{const{created_at:a,startDate:t,endDate:s,numNights:f,numGuests:c,cabinPrice:u,extrasPrice:x,totalPrice:h,hasBreakfast:d,observations:m,isPaid:g}=r,{fullName:y,email:b,country:j,countryFlag:p,nationalID:v}=r.guests,{name:w}=r.cabins;return e.jsxs(S,{children:[e.jsxs(T,{children:[e.jsxs("div",{children:[e.jsx(E,{}),e.jsxs("p",{children:[f," nights in Cabin ",e.jsx("span",{children:w})]})]}),e.jsxs("p",{children:[i(new Date(t),"EEE, MMM dd yyyy")," (",z(new Date(t))?"Today":H(t.toString()),") —"," ",i(new Date(s),"EEE, MMM dd yyyy")]})]}),e.jsxs(q,{children:[e.jsxs(G,{children:[p&&e.jsx(F,{src:p,alt:`Flag of ${j}`}),e.jsxs("p",{children:[y," ",c>1?`+ ${c-1} guests`:""]}),e.jsx("span",{children:"•"}),e.jsx("p",{children:b}),e.jsx("span",{children:"•"}),e.jsxs("p",{children:["National ID ",v]})]}),m&&e.jsx(l,{icon:e.jsx(P,{}),label:"Observations",children:m}),e.jsx(l,{icon:e.jsx(C,{}),label:"Breakfast included?",children:d?"Yes":"No"}),e.jsxs(A,{isPaid:g,children:[e.jsxs(l,{icon:e.jsx(N,{}),label:"Total price",children:[n(h),d?` (${n(u)} cabin + ${n(x)} breakfast)`:""]}),e.jsx("p",{children:g?"Paid":"Will pay at property"})]})]}),e.jsx(L,{children:e.jsxs("p",{children:["Booked ",i(new Date(a),"EEE, MMM dd yyyy, p")]})})]})},U=o.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
`,V=o.button`
  color: var(--color-brand-600);
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);

  &:hover,
  &:active {
    color: var(--color-brand-700);
  }
`,X=()=>{const r=B();return()=>r(-1)},Z=()=>{const{bookingId:r}=k(),{isLoading:a,data:t,error:s}=D({queryKey:[M.bookings,r],queryFn:()=>$(r),retry:!1});return{isLoading:a,error:s,booking:t}};export{V as B,X as a,J as b,U as c,Z as u};
