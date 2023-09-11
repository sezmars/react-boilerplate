import{r as i,s as a,j as n,b as m,B as l,H as x}from"./index-726df0d6.js";import{m as p}from"./index.esm-61d21229.js";const h=(o,t=!0)=>{const e=i.useRef(null);return i.useEffect(()=>{const r=s=>{e.current&&!e.current.contains(s.target)&&o(s)};return document.addEventListener("click",r,t),()=>document.removeEventListener("click",r,t)},[o,t]),e},f=a.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`,v=a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;

  @media (max-width: 768px) {
    overflow: scroll;
  }
`,d=i.createContext(void 0),u=({children:o})=>{const[t,e]=i.useState(""),r=()=>e(""),s=c=>e(c);return n.jsx(d.Provider,{value:{openName:t,close:r,open:s},children:o})},j=({children:o,opens:t})=>{const e=i.useContext(d);if(!e)throw new Error("Open component must be used within a ModalProvider");const{open:r}=e;return i.cloneElement(o,{onClick:()=>r(t)})},w=({children:o,name:t})=>{const e=i.useContext(d);if(!e)throw new Error("The Window component is used to be used in the intermodal provider.");const{openName:r,close:s}=e,c=h(s);return t!==r?null:m.createPortal(n.jsx(v,{children:n.jsxs(f,{ref:c,children:[n.jsx(l,{onClick:s,children:n.jsx(p,{})}),n.jsx("div",{children:i.cloneElement(o,{onCloseModal:s})})]})}),document.body)};u.Open=j;u.Window=w;const C=a.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`,k=({resourceName:o,onConfirm:t,disabled:e,onCloseModal:r})=>n.jsxs(C,{children:[n.jsxs(x,{as:"h3",children:["Delete ",o]}),n.jsxs("p",{children:["Are you sure you want to delete this ",o," permanently? This action cannot be undone."]}),n.jsxs("div",{children:[n.jsx(l,{variation:"secondary",disabled:e,onClick:r,children:"Cancel"}),n.jsx(l,{variation:"danger",disabled:e,onClick:t,children:"Delete"})]})]}),g=({resourceName:o})=>n.jsxs("p",{children:["No ",o," could be found."]});export{k as C,g as E,u as M,h as u};
