import{s as a,m as n,S as c,p as o}from"./index-d1682d74.js";import{u as i}from"./apiBookings-819aad78.js";import{u}from"./useMutation-5daf5ea3.js";const h=a.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  text-align: center;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  /* Make these dynamic, based on the received prop */
  color: var(--color-${e=>e.type}-700);
  background-color: var(--color-${e=>e.type}-100);
`,l=()=>{const e=n(),{mutate:r,isLoading:s}=u({mutationFn:t=>i(t,{status:c.checkedOut}),onSuccess:async t=>{o.success(`Booking #${t.id} successfully checked out`),await e.invalidateQueries({active:!0})},onError:()=>o.error("There was an error while checking out")});return{checkout:r,isCheckingOut:s}};export{h as T,l as u};
