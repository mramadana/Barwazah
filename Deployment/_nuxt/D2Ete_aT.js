import{_ as k}from"./pAU3kxY5.js";import{r as d,h as x,s as I,e as M,c as p,a as s,t as l,b as y,f as N,u as o,i as V,d as _,g,n as B,o as v,k as D}from"./BGhcUSDw.js";import{_ as G}from"./UKbKao_y.js";import{e as P}from"./CYiyQoZV.js";import{u as R}from"./Cy6-FToT.js";import{u as z,r as E}from"./DXutHP6I.js";import{t as U}from"./CPlzMQxn.js";const j={class:"container"},q={class:"auth-layout flex-column"},F={class:"main-title bold lg mb-5"},H={class:"layout-form md custom-width"},J={class:"row"},K={class:"col-12 col-md-8 mr-auto"},L={class:"text-center mb-5"},O={class:"main-title"},Q={class:"layout-activate d-flex",dir:"ltr"},W=["disabled"],X={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},Y={class:"new-sign mt-4 text-center"},Z=["disabled"],ss={key:0,class:"text-center mt-3 main-cl"},us={__name:"restorePassword-check-code",setup(es){const a=d(!1),i=d(60),m=()=>{a.value=!0,i.value>0?setTimeout(()=>{i.value-=1,m()},1e3):(a.value=!1,i.value=60)},{t:f}=x({useScope:"global"}),{response:h}=E(),{successToast:w,errorToast:u}=U(),b=z(),T=R(),{user:r,hasTwoAccount:ts}=I(T),c=d(!1),n=d(""),A=async()=>{c.value=!0;const e={email:r.value.email,code:parseInt(n.value),accountType:r.value.accountType?r.value.accountType:0};if(!n.value)u(f("validation.code")),c.value=!1;else try{const t=await b.post("ConfirmCode",e);h(t)==="success"?(D("/Auth/confirmPassword"),localStorage.setItem("newCode",n.value)):u(t.data.msg)}catch(t){console.log(t)}finally{c.value=!1}},C=async()=>{try{const e=await b.post(`SendCode?email=${r.value.email}&accountType=${r.value.accountType}`);h(e)==="success"?(w(e.data.message),a.value=!0,m()):u(e.data.message)}catch(e){console.error(e),u(f("Global.error_occurred"))}};return M(()=>{m()}),(e,t)=>{const S=k;return v(),p("div",j,[s("div",q,[s("h1",F,l(e.$t("Auth.forgot_password")),1),s("div",H,[t[3]||(t[3]=s("img",{src:G,alt:"logo",class:"Auth-logo mb-5"},null,-1)),y(S,{activeSteps:[3,2]}),s("form",{onSubmit:N(A,["prevent"])},[s("div",J,[s("div",K,[s("div",L,[s("p",O,l(e.$t("Auth.send_code")),1)]),s("div",Q,[y(o(P),{ref:"otpInput",value:o(n),"onUpdate:value":t[0]||(t[0]=$=>V(n)?n.value=$:null),"input-classes":"otp-input",separator:" ","num-inputs":6,"should-auto-focus":!0,"is-input-num":!0},null,8,["value"])]),s("button",{type:"submit",class:"custom-btn mr-auto",disabled:o(c)},[_(l(e.$t("Auth.reset_password"))+" ",1),o(c)?(v(),p("span",X)):g("",!0)],8,W),s("div",Y,[_(l(e.$t("Auth.havent_received_code"))+" ",1),s("button",{type:"button",onClick:C,disabled:o(a),class:B({disabledClass:o(a)})},l(e.$t("Auth.resend_code")),11,Z)]),o(a)?(v(),p("div",ss,[s("span",null,l(o(i)),1),t[1]||(t[1]=_(" : ")),t[2]||(t[2]=s("span",null,"00",-1))])):g("",!0)])])],32)])])])}}};export{us as default};
