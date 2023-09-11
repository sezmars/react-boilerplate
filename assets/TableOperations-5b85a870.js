import{s,r as l,j as t,b as y,u as v}from"./index-0f9aff97.js";import{l as b}from"./index.esm-ab80d279.js";import{u as f}from"./Empty-1a6d4c2b.js";const w=s.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;

  @media (max-width: 768px) {
    overflow: scroll;
  }
`,p=s.div`
  display: grid;
  grid-template-columns: ${e=>e.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  * {
    width: fit-content;
  }
`,j=s(p)`
  padding: 1.6rem 2.4rem;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`,S=s(p)`
  padding: 1.2rem 2.4rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`,C=s.section`
  margin: 0.4rem 0;
`,B=s.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`,k=s.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`,x=l.createContext(void 0),u=({columns:e,children:o})=>t.jsx(x.Provider,{value:{columns:e},children:t.jsx(w,{role:"table",children:o})}),P=({children:e})=>{const{columns:o}=l.useContext(x);return t.jsx(j,{role:"row",columns:o,as:"header",children:e})},T=({children:e})=>{const{columns:o}=l.useContext(x);return t.jsx(S,{role:"row",columns:o,children:e})};function E({data:e,render:o}){return e!=null&&e.length?t.jsx(C,{children:e==null?void 0:e.map(o)}):t.jsx(k,{children:"No data to show at the moment"})}u.Header=P;u.Body=E;u.Row=T;u.Footer=B;const M=s.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,R=s.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`,I=s.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${e=>{var o;return(o=e==null?void 0:e.position)==null?void 0:o.x}}px;
  top: ${e=>{var o;return(o=e==null?void 0:e.position)==null?void 0:o.y}}px;
`,z=s.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`,H={openId:"",close:()=>{},position:null,open:()=>{},setPosition:()=>{}},m=l.createContext(H),g=({children:e})=>{const[o,r]=l.useState(""),[i,n]=l.useState(null),a=()=>r(""),c=r;return t.jsx(m.Provider,{value:{openId:o,close:a,open:c,position:i,setPosition:n},children:e})},$=({id:e})=>{const{openId:o,close:r,open:i,setPosition:n}=l.useContext(m),a=c=>{c.stopPropagation();const h=c.target.closest("button");if(h){const d=h.getBoundingClientRect();n({x:window.innerWidth-d.width-d.x,y:d.y+d.height+8}),o===""||o!==e?i(String(e)):r()}};return t.jsx(R,{onClick:a,children:t.jsx(b,{})})},L=({id:e,children:o})=>{const{openId:r,position:i,close:n}=l.useContext(m),a=f(n,!1);return+r!=+e?null:y.createPortal(t.jsx(I,{position:i,ref:a,children:o}),document.body)},O=({children:e,icon:o,onClick:r})=>{const{close:i}=l.useContext(m),n=()=>{r==null||r(),i()};return t.jsx("li",{children:t.jsxs(z,{onClick:n,children:[o,t.jsx("span",{children:e})]})})};g.Menu=M;g.Toggle=$;g.List=L;g.Button=O;const F=s.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${e=>e.type==="white"?"var(--color-grey-100)":"var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`,V=({options:e,value:o,onChange:r,...i})=>t.jsx(F,{value:o,onChange:r,...i,children:e.map(n=>t.jsx("option",{value:n.value,children:n.label},n.value))}),q=({options:e})=>{const[o,r]=v(),i=o.get("sortBy")||"",n=a=>{o.set("sortBy",a.target.value),r(o)};return t.jsx(V,{options:e,type:"white",value:i,onChange:n})},A=s.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;export{g as M,q as S,u as T,A as a};
