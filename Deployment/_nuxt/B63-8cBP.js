import{aB as u,s as i,S as n,aC as p,k as m}from"./CMri8QdG.js";import{u as c}from"./b8Zo82g6.js";import{t as f}from"./akW7Jbj2.js";import"./DXutHP6I.js";const v=u(async(o,l)=>{let t,e;{const{token:a}=i(c()),{errorToast:s}=f(),r=n().vueApp.config.globalProperties.$t;if(!a.value&&o.meta.middleware=="auth")return s(r("validation.requiresAuth")),[t,e]=p(()=>m("/Auth/login")),t=await t,e(),t}});export{v as default};
