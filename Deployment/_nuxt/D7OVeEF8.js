import p from"./CgFgIVaU.js";import{r as c,e as h,c as s,a as o,t as f,u as n,g as i,F as v,B as g,o as a,b as k}from"./uThEF0pG.js";import{u as y,r as b}from"./DXutHP6I.js";const B={class:"container"},w={class:"layout-form custom-width lg"},x={class:"main-title bold"},L=["innerHTML"],M={key:1},H={__name:"terms",setup(N){const t=c(!0),{response:l}=b(),d=y(),r=c(""),m=async()=>{t.value=!0,await d.get("terms").then(e=>{l(e)=="success"&&(r.value=e.data.data),t.value=!1}).catch(e=>{console.error(e)})};return h(()=>{m()}),(e,T)=>{const u=p;return a(),s("div",null,[o("div",B,[o("div",w,[o("h1",x,f(e.$t("Global.terms_and_conditions")),1),n(t)?i("",!0):(a(),s("div",{key:0,class:"main-title normal mt-3 about_disc",innerHTML:n(r)},null,8,L)),n(t)?(a(),s("div",M,[(a(),s(v,null,g(8,_=>o("div",{key:_},[k(u,{height:".5rem",width:"80%",class:"rounded-0 mb-2 mx-auto"})])),64))])):i("",!0)])])])}}};export{H as default};
