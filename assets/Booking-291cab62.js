import{s as g,k as x,j as e,i as h,S as t,H as j,B as n}from"./index-0368fdbf.js";import{u as f,B,a as C,b}from"./useBooking-770c2172.js";import{R as v}from"./Row-296cd4f1.js";import{u as D,T as y}from"./useCheckout-c876a4f5.js";import{u as S}from"./useMoveBack-dcb481b3.js";import{f as T}from"./index.esm-ad40e66a.js";import{E as H,M as r,C as N}from"./Empty-b951948d.js";import{u as O}from"./useDeleteBooking-7764ad4c.js";import"./Flag-e50a43e5.js";import"./apiBookings-8381d82a.js";import"./index-051dde0e.js";import"./useMutation-918d7aa9.js";import"./iconBase-48dad24e.js";const w=g.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`,E=()=>{const{booking:i,isLoading:d}=f(),{checkout:l,isCheckingOut:m}=D(),{deleteBooking:u,isDeleting:k}=O(),a=S(),c=x();if(d)return e.jsx(h,{});if(!i)return e.jsx(H,{resourceName:"booking"});const{status:o,id:s}=i,p={[t.unconfirmed]:"blue",[t.checkedIn]:"green",[t.checkedOut]:"silver"};return e.jsxs(e.Fragment,{children:[e.jsxs(v,{type:"horizontal",children:[e.jsxs(w,{children:[e.jsxs(j,{as:"h1",children:["Booking #",s]}),e.jsx(y,{type:p[o],children:o.replace("-"," ")})]}),e.jsx(B,{onClick:a,children:"← Back"})]}),e.jsx(C,{booking:i}),e.jsxs(b,{children:[o==="unconfirmed"&&e.jsx(n,{onClick:()=>c(`/checkin/${s}`),children:"Check in"}),o==="checked-in"&&e.jsx(n,{icon:e.jsx(T,{}),onClick:()=>l(s),disabled:m,children:"Check out"}),e.jsxs(r,{children:[e.jsx(r.Open,{opens:"delete",children:e.jsx(n,{variation:"danger",children:"Delete booking"})}),e.jsx(r.Window,{name:"delete",children:e.jsx(N,{resourceName:"booking",disabled:k,onConfirm:()=>u(s,{onSettled:()=>c(-1)})})})]}),e.jsx(n,{variation:"secondary",onClick:a,children:"Back"})]})]})},K=()=>e.jsx(E,{});export{K as default};