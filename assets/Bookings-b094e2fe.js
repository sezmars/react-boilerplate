import{s as u,f as T,S as d,j as e,h as N,u as D,i as m,a as A,A as v,e as F,H as q}from"./index-3a10c271.js";import{R as H}from"./Row-03356d13.js";import{d as O,e as R,f as E,g as z,h as I,i as L}from"./index.esm-c6e79c5f.js";import{u as Q,T as $}from"./useCheckout-1400183d.js";import{T as f,M as l,a as K,S as U}from"./TableOperations-f032d72e.js";import{M as k,C as G,E as V}from"./Empty-1127b9ea.js";import{b as W,f as Z}from"./helpers-34206ec0.js";import{u as _}from"./useDeleteBooking-3a200f4b.js";import{i as J}from"./index-c1a84640.js";import{f as w,c as S,P as p}from"./apiBookings-7b2da6cd.js";import{F as X}from"./Filter-7a14ac1e.js";import"./iconBase-cfda44fb.js";import"./useMutation-e260d0de.js";const Y=u.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`,C=u.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`,ee=u.div`
  font-family: 'Sono';
  font-weight: 500;
`,se=({booking:t})=>{const{id:n,startDate:r,endDate:s,numNights:c,totalPrice:h,status:i}=t,{fullName:o,email:a}=t.guests,{name:j}=t.cabins,x=T(),{checkout:g,isCheckingOut:y}=Q(),{deleteBooking:b,isDeleting:P}=_(),M={[d.unconfirmed]:"blue",[d.checkedIn]:"green",[d.checkedOut]:"silver"};return e.jsxs(f.Row,{children:[e.jsx(Y,{children:j}),e.jsxs(C,{children:[e.jsx("span",{children:o}),e.jsx("span",{children:a})]}),e.jsxs(C,{children:[e.jsxs("span",{children:[r!==void 0?J(new Date(r))?"Today":W(r.toString())+" In":"Unknown Date"," ","→ ",c," night stay"]}),e.jsxs("span",{children:[w(new Date(r),"MMM dd yyyy")," — ",w(new Date(s),"MMM dd yyyy")]})]}),e.jsx($,{type:M[i],children:i==null?void 0:i.replace("-"," ")}),e.jsx(ee,{children:Z(h)}),e.jsxs(k,{children:[e.jsxs(l.Menu,{children:[e.jsx(l.Toggle,{id:n}),e.jsxs(l.List,{id:n,children:[e.jsx(l.Button,{icon:e.jsx(O,{}),onClick:()=>x(`/bookings/${n}`),children:"See details"}),i==="unconfirmed"?e.jsx(l.Button,{icon:e.jsx(R,{}),onClick:()=>x(`/checkin/${n}`),children:"Check in"}):e.jsx(e.Fragment,{}),i==="checked-in"?e.jsx(l.Button,{icon:e.jsx(E,{}),onClick:()=>g(+n),disabled:y,children:"Check out"}):e.jsx(e.Fragment,{}),e.jsx(k.Open,{opens:"delete",children:e.jsx(l.Button,{icon:e.jsx(z,{}),children:"Delete booking"})})]})]}),e.jsx(k.Window,{name:"delete",children:e.jsx(G,{resourceName:"booking",disabled:P,onConfirm:()=>b(+n)})})]})]})},ne=()=>{const t=N(),[n]=D(),r=n.get("status"),s=!r||r===d.all?null:{field:"status",value:r},c=n.get("sortBy")||m.startDateDesc,[h,i]=c.split("-"),o={field:h,direction:i},a=n.get("page")?Number(n.get("page")):1,{isLoading:j,data:{data:x,count:g}={},error:y}=A({queryKey:[v.bookings,s,o,a],queryFn:()=>S({filter:s,sortBy:o,page:a})}),b=Math.ceil(g||0/p);return a<b&&t.prefetchQuery({queryKey:[v.bookings,s,o,a+1],queryFn:()=>S({filter:s,sortBy:o,page:a+1})}).then(),a>1&&t.prefetchQuery({queryKey:[v.bookings,s,o,a-1],queryFn:()=>S({filter:s,sortBy:o,page:a-1})}).then(),{isLoading:j,error:y,bookings:x,count:g}},te=u.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,re=u.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`,oe=u.div`
  display: flex;
  gap: 0.6rem;
`,B=u.button`
  background-color: ${t=>t.active?" var(--color-brand-600)":"var(--color-grey-50)"};
  color: ${t=>t.active?" var(--color-brand-50)":"inherit"};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`,ie=({count:t})=>{const[n,r]=D(),s=n.get("page")?Number(n.get("page")):1,c=Math.ceil(t/p),h=()=>{const o=s===c?s:s+1;n.set("page",o.toString()),r(n)},i=()=>{const o=s===1?s:s-1;n.set("page",o.toString()),r(n)};return c<=1?null:e.jsxs(te,{children:[e.jsxs(re,{children:["Showing ",e.jsx("span",{children:(s-1)*p+1})," to"," ",e.jsx("span",{children:s===c?t:s*p})," of ",e.jsx("span",{children:t})," results"]}),e.jsxs(oe,{children:[e.jsxs(B,{onClick:i,disabled:s===1,children:[e.jsx(I,{})," ",e.jsx("span",{children:"Previous"})]}),e.jsxs(B,{onClick:h,disabled:s===c,children:[e.jsx("span",{children:"Next"}),e.jsx(L,{})]})]})]})},ae=()=>{const{bookings:t,isLoading:n,count:r}=ne();return n?e.jsx(F,{}):t!=null&&t.length?e.jsxs(l,{children:[e.jsxs(f,{columns:"0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem",children:[e.jsxs(f.Header,{children:[e.jsx("div",{children:"Cabin"}),e.jsx("div",{children:"Guest"}),e.jsx("div",{children:"Dates"}),e.jsx("div",{children:"Status"}),e.jsx("div",{children:"Amount"}),e.jsx("div",{})]}),e.jsx(f.Body,{data:t,render:s=>e.jsx(se,{booking:s},s.id)})]}),e.jsx(f.Footer,{children:e.jsx(ie,{count:+r})})]}):e.jsx(V,{resourceName:"bookings"})},ce=()=>e.jsxs(K,{children:[e.jsx(X,{filterField:"status",options:[{value:d.all,label:"All"},{value:d.checkedOut,label:"Checked out"},{value:d.checkedIn,label:"Checked in"},{value:d.unconfirmed,label:"Unconfirmed"}]}),e.jsx(U,{options:[{value:m.startDateDesc,label:"Sort by date (recent first)"},{value:m.startDateAsc,label:"Sort by date (earlier first)"},{value:m.totalPriceDesc,label:"Sort by amount (high first)"},{value:m.totalPriceAsc,label:"Sort by amount (low first)"}]})]}),ke=()=>e.jsxs(e.Fragment,{children:[e.jsxs(H,{type:"horizontal",children:[e.jsx(q,{as:"h1",children:"All bookings"}),e.jsx(ce,{})]}),e.jsx(ae,{})]});export{ke as default};
