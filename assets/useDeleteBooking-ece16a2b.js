import{m as n,p as e,A as r}from"./index-f9cf1646.js";import{d as u}from"./apiBookings-5eda3e2f.js";import{u as a}from"./useMutation-bbbe9705.js";const d=()=>{const o=n(),{isLoading:s,mutate:t}=a({mutationFn:u,onSuccess:async()=>{e.success("Booking successfully deleted"),await o.invalidateQueries({queryKey:[r.bookings]})},onError:i=>e.error(i)});return{isDeleting:s,deleteBooking:t}};export{d as u};
