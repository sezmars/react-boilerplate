import{s as u,k as T,S as d,j as e,l as N,f as A,m as F,u as D,n as m,b as q,A as v,i as H,H as O}from"./index-03573489.js";import{R}from"./Row-93d108a5.js";import{d as E,e as z,f as I,g as L,h as Q,i as $}from"./index.esm-23607fea.js";import{u as K,T as U}from"./useCheckout-9c32ea0f.js";import{T as x,M as l,a as G,S as V}from"./TableOperations-c391ef2f.js";import{M as k,C as W,E as Z}from"./Empty-d0310ac8.js";import{u as _}from"./useDeleteBooking-1bbe106c.js";import{i as J}from"./index-0f0d316e.js";import{f as w,c as S,P as p}from"./apiBookings-4cf26936.js";import{F as X}from"./Filter-e21976e7.js";import"./iconBase-7e4453af.js";import"./useMutation-8ff533d5.js";const Y=u.div`
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
`,se=({booking:t})=>{const{id:n,startDate:r,endDate:s,numNights:c,totalPrice:h,status:i}=t,{fullName:o,email:a}=t.guests,{name:j}=t.cabins,f=T(),{checkout:g,isCheckingOut:y}=K(),{deleteBooking:b,isDeleting:P}=_(),M={[d.unconfirmed]:"blue",[d.checkedIn]:"green",[d.checkedOut]:"silver"};return e.jsxs(x.Row,{children:[e.jsx(Y,{children:j}),e.jsxs(C,{children:[e.jsx("span",{children:o}),e.jsx("span",{children:a})]}),e.jsxs(C,{children:[e.jsxs("span",{children:[r!==void 0?J(new Date(r))?"Today":N(r.toString())+" In":"Unknown Date"," ","→ ",c," night stay"]}),e.jsxs("span",{children:[w(new Date(r),"MMM dd yyyy")," — ",w(new Date(s),"MMM dd yyyy")]})]}),e.jsx(U,{type:M[i],children:i==null?void 0:i.replace("-"," ")}),e.jsx(ee,{children:A(h)}),e.jsxs(k,{children:[e.jsxs(l.Menu,{children:[e.jsx(l.Toggle,{id:n}),e.jsxs(l.List,{id:n,children:[e.jsx(l.Button,{icon:e.jsx(E,{}),onClick:()=>f(`/bookings/${n}`),children:"See details"}),i==="unconfirmed"?e.jsx(l.Button,{icon:e.jsx(z,{}),onClick:()=>f(`/checkin/${n}`),children:"Check in"}):e.jsx(e.Fragment,{}),i==="checked-in"?e.jsx(l.Button,{icon:e.jsx(I,{}),onClick:()=>g(+n),disabled:y,children:"Check out"}):e.jsx(e.Fragment,{}),e.jsx(k.Open,{opens:"delete",children:e.jsx(l.Button,{icon:e.jsx(L,{}),children:"Delete booking"})})]})]}),e.jsx(k.Window,{name:"delete",children:e.jsx(W,{resourceName:"booking",disabled:P,onConfirm:()=>b(+n)})})]})]})},ne=()=>{const t=F(),[n]=D(),r=n.get("status"),s=!r||r===d.all?null:{field:"status",value:r},c=n.get("sortBy")||m.startDateDesc,[h,i]=c.split("-"),o={field:h,direction:i},a=n.get("page")?Number(n.get("page")):1,{isLoading:j,data:{data:f,count:g}={},error:y}=q({queryKey:[v.bookings,s,o,a],queryFn:()=>S({filter:s,sortBy:o,page:a})}),b=Math.ceil(g||0/p);return a<b&&t.prefetchQuery({queryKey:[v.bookings,s,o,a+1],queryFn:()=>S({filter:s,sortBy:o,page:a+1})}).then(),a>1&&t.prefetchQuery({queryKey:[v.bookings,s,o,a-1],queryFn:()=>S({filter:s,sortBy:o,page:a-1})}).then(),{isLoading:j,error:y,bookings:f,count:g}},te=u.div`
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
`,ie=({count:t})=>{const[n,r]=D(),s=n.get("page")?Number(n.get("page")):1,c=Math.ceil(t/p),h=()=>{const o=s===c?s:s+1;n.set("page",o.toString()),r(n)},i=()=>{const o=s===1?s:s-1;n.set("page",o.toString()),r(n)};return c<=1?null:e.jsxs(te,{children:[e.jsxs(re,{children:["Showing ",e.jsx("span",{children:(s-1)*p+1})," to"," ",e.jsx("span",{children:s===c?t:s*p})," of ",e.jsx("span",{children:t})," results"]}),e.jsxs(oe,{children:[e.jsxs(B,{onClick:i,disabled:s===1,children:[e.jsx(Q,{})," ",e.jsx("span",{children:"Previous"})]}),e.jsxs(B,{onClick:h,disabled:s===c,children:[e.jsx("span",{children:"Next"}),e.jsx($,{})]})]})]})},ae=()=>{const{bookings:t,isLoading:n,count:r}=ne();return n?e.jsx(H,{}):t!=null&&t.length?e.jsxs(l,{children:[e.jsxs(x,{columns:"1.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem",children:[e.jsxs(x.Header,{children:[e.jsx("div",{children:"Cabin"}),e.jsx("div",{children:"Guest"}),e.jsx("div",{children:"Dates"}),e.jsx("div",{children:"Status"}),e.jsx("div",{children:"Amount"}),e.jsx("div",{})]}),e.jsx(x.Body,{data:t,render:s=>e.jsx(se,{booking:s},s.id)})]}),e.jsx(x.Footer,{children:e.jsx(ie,{count:+r})})]}):e.jsx(Z,{resourceName:"bookings"})},ce=()=>e.jsxs(G,{children:[e.jsx(X,{filterField:"status",options:[{value:d.all,label:"All"},{value:d.checkedOut,label:"Checked out"},{value:d.checkedIn,label:"Checked in"},{value:d.unconfirmed,label:"Unconfirmed"}]}),e.jsx(V,{options:[{value:m.startDateDesc,label:"Sort by date (recent first)"},{value:m.startDateAsc,label:"Sort by date (earlier first)"},{value:m.totalPriceDesc,label:"Sort by amount (high first)"},{value:m.totalPriceAsc,label:"Sort by amount (low first)"}]})]}),ve=()=>e.jsxs(e.Fragment,{children:[e.jsxs(R,{type:"horizontal",children:[e.jsx(O,{as:"h1",children:"All bookings"}),e.jsx(ce,{})]}),e.jsx(ae,{})]});export{ve as default};
