import{d as i,s as a,j as r,e as m,H as p,B as l}from"./index-abe93b17.js";import{m as x}from"./index.esm-6f5320fc.js";const h=(o,t=!0)=>{const e=i.useRef(null);return i.useEffect(()=>{const n=s=>{e.current&&!e.current.contains(s.target)&&o(s)};return document.addEventListener("click",n,t),()=>document.removeEventListener("click",n,t)},[o,t]),e},v=a.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`,f=a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`,g=a.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 4px;
  right: 10px;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`,c=i.createContext(void 0),u=({children:o})=>{const[t,e]=i.useState(""),n=()=>e(""),s=d=>e(d);return r.jsx(c.Provider,{value:{openName:t,close:n,open:s},children:o})},b=({children:o,opens:t})=>{const e=i.useContext(c);if(!e)throw new Error("Open component must be used within a ModalProvider");const{open:n}=e;return i.cloneElement(o,{onClick:()=>n(t)})},y=({children:o,name:t})=>{const e=i.useContext(c);if(!e)throw new Error("The Window component is used to be used in the intermodal provider.");const{openName:n,close:s}=e,d=h(s);return t!==n?null:m.createPortal(r.jsx(f,{children:r.jsxs(v,{ref:d,children:[r.jsx(g,{onClick:s,children:r.jsx(x,{})}),r.jsx("div",{children:i.cloneElement(o,{onCloseModal:s})})]})}),document.body)};u.Open=b;u.Window=y;const w=a.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: 768px) {
    width: 20rem;
  }

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`,C=({resourceName:o,onConfirm:t,disabled:e,onCloseModal:n})=>r.jsxs(w,{children:[r.jsxs(p,{as:"h3",children:["Delete ",o]}),r.jsxs("p",{children:["Are you sure you want to delete this ",o," permanently? This action cannot be undone."]}),r.jsxs("div",{children:[r.jsx(l,{variation:"secondary",disabled:e,onClick:n,children:"Cancel"}),r.jsx(l,{variation:"danger",disabled:e,onClick:t,children:"Delete"})]})]}),E=({resourceName:o})=>r.jsxs("p",{children:["No ",o," could be found."]});export{C,E,u as M,h as u};
