import p from"./CIjU4P19.js";import{r as c,e as h,c as s,a as o,t as f,u as n,g as i,F as v,C as g,o as a,b as k}from"./D8P3QojN.js";import{u as y,r as b}from"./DXutHP6I.js";const w={class:"container"},x={class:"layout-form custom-width lg"},B={class:"main-title bold"},L=["innerHTML"],M={key:1},F={__name:"terms",setup(N){const t=c(!0),{response:l}=b(),d=y(),r=c(""),m=async()=>{t.value=!0,await d.get("terms").then(e=>{l(e)=="success"&&(r.value=e.data.data),t.value=!1}).catch(e=>{console.error(e)})};return h(()=>{m()}),(e,T)=>{const u=p;return a(),s("div",null,[o("div",w,[o("div",x,[o("h1",B,f(e.$t("Global.terms_and_conditions")),1),n(t)?i("",!0):(a(),s("div",{key:0,class:"main-title normal mt-3 about_disc",innerHTML:n(r)},null,8,L)),n(t)?(a(),s("div",M,[(a(),s(v,null,g(8,_=>o("div",{key:_},[k(u,{height:".5rem",width:"80%",class:"rounded-0 mb-2 mx-auto"})])),64))])):i("",!0)])])])}}};export{F as default};
