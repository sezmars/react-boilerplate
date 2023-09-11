import{s as o,j as e,w as B,a as k,A as D}from"./index-afb46ae3.js";import{n as E,o as M,p as P,q as C}from"./index.esm-c1fa6bf0.js";import{F}from"./Flag-c3bf8eb4.js";import{b as N,f as n}from"./helpers-34206ec0.js";import{f as i,e as H}from"./apiBookings-da1684a2.js";import{i as $}from"./index-db4f9365.js";const z=o.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
`,I=o.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }
`,l=({icon:r,label:a,children:t})=>e.jsxs(z,{children:[e.jsxs(I,{children:[r,e.jsx("span",{children:a})]}),t]}),O=o.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`,S=o.header`
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
`,T=o.section`
  padding: 3.2rem 4rem 1.2rem;
`,q=o.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`,G=o.div`
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
`,A=o.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`,_=({booking:r})=>{const{created_at:a,startDate:t,endDate:s,numNights:f,numGuests:c,cabinPrice:x,extrasPrice:h,totalPrice:u,hasBreakfast:d,observations:m,isPaid:g}=r,{fullName:y,email:b,country:j,countryFlag:p,nationalID:v}=r.guests,{name:w}=r.cabins;return e.jsxs(O,{children:[e.jsxs(S,{children:[e.jsxs("div",{children:[e.jsx(E,{}),e.jsxs("p",{children:[f," nights in Cabin ",e.jsx("span",{children:w})]})]}),e.jsxs("p",{children:[i(new Date(t),"EEE, MMM dd yyyy")," (",$(new Date(t))?"Today":N(t.toString()),") —"," ",i(new Date(s),"EEE, MMM dd yyyy")]})]}),e.jsxs(T,{children:[e.jsxs(q,{children:[p&&e.jsx(F,{src:p,alt:`Flag of ${j}`}),e.jsxs("p",{children:[y," ",c>1?`+ ${c-1} guests`:""]}),e.jsx("span",{children:"•"}),e.jsx("p",{children:b}),e.jsx("span",{children:"•"}),e.jsxs("p",{children:["National ID ",v]})]}),m&&e.jsx(l,{icon:e.jsx(M,{}),label:"Observations",children:m}),e.jsx(l,{icon:e.jsx(P,{}),label:"Breakfast included?",children:d?"Yes":"No"}),e.jsxs(G,{isPaid:g,children:[e.jsxs(l,{icon:e.jsx(C,{}),label:"Total price",children:[n(u),d?` (${n(x)} cabin + ${n(h)} breakfast)`:""]}),e.jsx("p",{children:g?"Paid":"Will pay at property"})]})]}),e.jsx(A,{children:e.jsxs("p",{children:["Booked ",i(new Date(a),"EEE, MMM dd yyyy, p")]})})]})},J=o.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
`,U=o.button`
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
`,V=()=>{const{bookingId:r}=B(),{isLoading:a,data:t,error:s}=k({queryKey:[D.bookings,r],queryFn:()=>H(r),retry:!1});return{isLoading:a,error:s,booking:t}};export{U as B,_ as a,J as b,V as u};
