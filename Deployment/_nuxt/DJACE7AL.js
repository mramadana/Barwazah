import{_ as I}from"./BrKexGPb.js";import{h as D,r as e,s as B,c as v,a as t,t as l,b as M,f as R,j as h,v as y,u as i,i as b,n as g,d as F,g as U,o as P,k as j}from"./CMri8QdG.js";import{_ as q}from"./j9q71NiM.js";import{u as z,r as E}from"./DXutHP6I.js";import{t as G}from"./akW7Jbj2.js";import{u as H}from"./b8Zo82g6.js";const J={class:"container"},K={class:"auth-layout flex-column"},L={class:"main-title bold lg mb-5"},O={class:"layout-form md custom-width"},Q={class:"row"},W={class:"col-12 col-md-10 mr-auto"},X={class:"main-title bold mb-4"},Y={class:"form-group"},Z={class:"label"},x={class:"main_input with_icon"},ss=["type","placeholder"],ts={class:"form-group"},os={class:"label"},es={class:"main_input with_icon"},as=["type","placeholder"],ns={class:"custom-btn mr-auto"},ls={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},fs={__name:"confirmPassword",setup(is){const{t:m}=D({useScope:"global"}),r=e([]),d=e(""),u=e(""),{response:A}=E(),{successToast:N,errorToast:c}=G(),$=z(),T=H(),{user:f}=B(T),p=e(!1),V=e(null),a=e({definitelyNewPassword:!1,definitelyNewPassword_2:!1});function k(){r.value=[];let o=document.querySelectorAll(".validInputs");for(let s=0;s<o.length;s++)o[s].value===""&&r.value.push(m(`validation.${o[s].name}`))}const _=o=>a.value[o]?"text":"password",w=o=>{a.value[o]=!a.value[o]},S=async()=>{if(k(),r.value.length){c(r.value[0]);return}p.value=!0;try{const o={accountType:f.value.accountType,email:f.value.email,oldPassword:d.value,newPassword:u.value},s=await $.post("ChangePassword",o);A(s)==="success"?(N(m("Auth.confirm_new_password")),j("/Auth/passwordResets")):c(s.data.message)}catch(o){console.error(o),c("An error occurred. Please try again.")}finally{p.value=!1}};return(o,s)=>{const C=I;return P(),v("div",J,[t("div",K,[t("h1",L,l(o.$t("Auth.forgot_password")),1),t("div",O,[s[6]||(s[6]=t("img",{src:q,alt:"logo",class:"Auth-logo mb-5"},null,-1)),M(C,{activeSteps:[3,2,1]}),t("form",{onSubmit:R(S,["prevent"]),ref_key:"confirmPasswordForm",ref:V},[t("div",Q,[t("div",W,[t("p",X,l(o.$t("Auth.new_password")),1),t("div",Y,[t("label",Z,l(o.$t("Auth.password_2")),1),t("div",x,[h(t("input",{type:_("definitelyNewPassword"),name:"password","onUpdate:modelValue":s[0]||(s[0]=n=>b(d)?d.value=n:null),class:"custum-input-icon validInputs",placeholder:o.$t("Auth.password_2")},null,8,ss),[[y,i(d)]]),t("button",{class:g(["static-btn with_eye",{active_class:i(a).definitelyNewPassword}]),type:"button",onClick:s[1]||(s[1]=n=>w("definitelyNewPassword"))},s[4]||(s[4]=[t("i",{class:"far fa-eye icon"},null,-1)]),2)])]),t("div",ts,[t("label",os,l(o.$t("Auth.confirm_password")),1),t("div",es,[h(t("input",{type:_("definitelyNewPassword_2"),name:"password_confirmation","onUpdate:modelValue":s[2]||(s[2]=n=>b(u)?u.value=n:null),class:"custum-input-icon validInputs",placeholder:o.$t("Auth.confirm_password")},null,8,as),[[y,i(u)]]),t("button",{class:g(["static-btn with_eye",{active_class:i(a).definitelyNewPassword_2}]),type:"button",onClick:s[3]||(s[3]=n=>w("definitelyNewPassword_2"))},s[5]||(s[5]=[t("i",{class:"far fa-eye icon"},null,-1)]),2)])]),t("button",ns,[F(l(o.$t("Auth.save"))+" ",1),i(p)?(P(),v("span",ls)):U("",!0)])])])],544)])])])}}};export{fs as default};
