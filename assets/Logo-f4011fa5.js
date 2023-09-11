import{M as e,s as o,h as i,j as a}from"./index-a84ab2bb.js";import{G as s}from"./iconBase-a578be35.js";function c(t){return s({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"}}]})(t)}const g=e`
  to {
    transform: rotate(1turn)
  }
`,p=o(c)`
  width: 2.4rem;
  height: 2.4rem;
  animation: ${g} 1.5s infinite linear;
`,d=o.div`
  text-align: center;
`,h=o.img`
  height: 9.6rem;
  width: auto;

  @media (max-width: 768px) {
    display: none;
  }
`,x=()=>{const{isDarkMode:t}=i(),n="/react-boilerplate/",r=t?`${n}logo-dark.png`:`${n}logo-light.png`;return a.jsx(d,{children:a.jsx(h,{src:r,alt:"Logo"})})};export{x as L,p as S};
