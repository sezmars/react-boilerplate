import{o,A as s,a as n}from"./index-afb46ae3.js";const a=async()=>{const{data:e,error:t}=await o.from(s.settings).select("*").single();if(t)throw console.error(t),new Error("Settings could not be loaded");return e},u=async e=>{const{data:t,error:r}=await o.from(s.settings).update(e).eq("id",1).single();if(r)throw console.error(r),new Error("Settings could not be updated");return t},c=()=>{const{isLoading:e,error:t,data:r}=n({queryKey:[s.settings],queryFn:a});return{isLoading:e,error:t,settings:r}};export{c as a,u};
