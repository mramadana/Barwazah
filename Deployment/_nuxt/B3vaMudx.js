import{_ as x}from"./BNSVzfZ1.js";import{r as c,h as I,s as M,e as N,c as p,a as s,t as l,b as y,f as V,u as o,i as B,d as _,g,n as D,o as f,k as G}from"./DwAYQtRF.js";import{_ as R}from"./CIqxqio6.js";import{e as z}from"./BGJn945P.js";import{u as E}from"./0ixJecxr.js";import{u as P,r as U}from"./DXutHP6I.js";import{t as j}from"./BeJlh1sx.js";const q={class:"container"},F={class:"auth-layout flex-column"},H={class:"main-title bold lg mb-5"},J={class:"layout-form md custom-width"},K={class:"row"},L={class:"col-12 col-md-8 mr-auto"},O={class:"text-center mb-5"},Q={class:"main-title"},W={class:"layout-activate d-flex",dir:"ltr"},X=["disabled"],Y={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},Z={class:"new-sign mt-4 text-center"},ss=["disabled"],es={key:0,class:"text-center mt-3 main-cl"},cs={__name:"emailActivateCode",setup(ts){const a=c(!1),i=c(60),d=()=>{a.value=!0,i.value>0?setTimeout(()=>{i.value-=1,d()},1e3):(a.value=!1,i.value=60)},{t:v}=I({useScope:"global"}),{response:h}=U(),{successToast:w,errorToast:u}=j(),b=P(),C=E(),{user:m,newemail:T}=M(C),r=c(!1),n=c(""),A=async()=>{r.value=!0;const e={email:T.value,code:parseInt(n.value),accountType:m.value.platformType};if(!n.value)u(v("validation.code")),r.value=!1;else try{const t=await b.post("ConfirmCode",e);h(t)==="success"?(G("/confirmPassword"),localStorage.setItem("newCode",n.value)):u(t.data.msg)}catch(t){console.log(t)}finally{r.value=!1}},S=async()=>{try{const e=await b.post(`SendCode?email=${m.value.email}&accountType=${m.value.platformType}`);h(e)==="success"?(w(e.data.message),a.value=!0,d()):u(e.data.message)}catch(e){console.error(e),u(v("Global.error_occurred"))}};return N(()=>{d()}),(e,t)=>{const $=x;return f(),p("div",q,[s("div",F,[s("h1",H,l(e.$t("Auth.forgot_password")),1),s("div",J,[t[3]||(t[3]=s("img",{src:R,alt:"logo",class:"Auth-logo mb-5"},null,-1)),y($,{activeSteps:[3,2],stepsCount:3}),s("form",{onSubmit:V(A,["prevent"])},[s("div",K,[s("div",L,[s("div",O,[s("p",Q,l(e.$t("Auth.send_code")),1)]),s("div",W,[y(o(z),{ref:"otpInput",value:o(n),"onUpdate:value":t[0]||(t[0]=k=>B(n)?n.value=k:null),"input-classes":"otp-input",separator:" ","num-inputs":6,"should-auto-focus":!0,"is-input-num":!0},null,8,["value"])]),s("button",{type:"submit",class:"custom-btn mr-auto",disabled:o(r)},[_(l(e.$t("Auth.reset_password"))+" ",1),o(r)?(f(),p("span",Y)):g("",!0)],8,X),s("div",Z,[_(l(e.$t("Auth.havent_received_code"))+" ",1),s("button",{type:"button",onClick:S,disabled:o(a),class:D({disabledClass:o(a)})},l(e.$t("Auth.resend_code")),11,ss)]),o(a)?(f(),p("div",es,[s("span",null,l(o(i)),1),t[1]||(t[1]=_(" : ")),t[2]||(t[2]=s("span",null,"00",-1))])):g("",!0)])])],32)])])])}}};export{cs as default};
