import{y as r,s as o,d as a,j as n}from"./index-3a10c271.js";import{G as s}from"./iconBase-cfda44fb.js";function e(t){return s({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"}}]})(t)}const c=r`
  to {
    transform: rotate(1turn)
  }
`,l=o(e)`
  width: 2.4rem;
  height: 2.4rem;
  animation: ${c} 1.5s infinite linear;
`,g=o.div`
  text-align: center;
`,d=o.img`
  height: 9.6rem;
  width: auto;

  @media (max-width: 768px) {
    display: none;
  }
`,p=()=>{const{isDarkMode:t}=a(),i=t?"/logo-dark.png":"/logo-light.png";return n.jsx(g,{children:n.jsx(d,{src:i,alt:"Logo"})})};export{p as L,l as S};
