import{s as a,m as c,S as n,p as o}from"./index-a71a39d0.js";import{u}from"./apiBookings-08b21e69.js";import{u as i}from"./useMutation-b4b59496.js";const h=a.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  /* Make these dynamic, based on the received prop */
  color: var(--color-${e=>e.type}-700);
  background-color: var(--color-${e=>e.type}-100);
`,k=()=>{const e=c(),{mutate:r,isLoading:s}=i({mutationFn:t=>u(t,{status:n.checkedOut}),onSuccess:async t=>{o.success(`Booking #${t.id} successfully checked out`),await e.invalidateQueries({active:!0})},onError:()=>o.error("There was an error while checking out")});return{checkout:r,isCheckingOut:s}};export{h as T,k as u};
