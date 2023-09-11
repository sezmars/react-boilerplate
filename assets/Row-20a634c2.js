import{s as i,y as t}from"./index-f9cf1646.js";const a=i.div`
  display: flex;

  ${e=>e.type==="horizontal"&&t`
      justify-content: space-between;
      align-items: center;

      @media (max-width: 480px) {
        flex-direction: column;
      }
    `}

  ${e=>e.type==="vertical"&&t`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;a.defaultProps={type:"vertical"};export{a as R};
