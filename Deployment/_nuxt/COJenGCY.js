import{_ as I}from"./Co5ZNJbx.js";import{h as D,r as e,s as B,c as v,a as t,t as u,b as M,f as F,j as h,v as y,u as d,i as b,n as g,d as R,g as U,o as P,k as j}from"./uThEF0pG.js";import{_ as q}from"./C0J6pqR-.js";import{u as z,r as E}from"./DXutHP6I.js";import{t as G}from"./D12V8fHa.js";import{u as H}from"./Bd7qOfwp.js";const J={class:"container"},K={class:"auth-layout flex-column"},L={class:"main-title bold lg mb-5"},O={class:"layout-form md custom-width"},Q={class:"row"},W={class:"col-12 col-md-10 mr-auto"},X={class:"main-title bold mb-4"},Y={class:"form-group"},Z={class:"label"},x={class:"main_input with_icon"},ss=["type","placeholder"],ts={class:"form-group"},os={class:"label"},es={class:"main_input with_icon"},as=["type","placeholder"],ns={class:"custom-btn mr-auto"},ls={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},fs={__name:"confirmPassword",setup(is){const{t:c}=D({useScope:"global"}),a=e([]),n=e(""),l=e(""),{response:A}=E(),{successToast:N,errorToast:p}=G(),$=z(),T=H(),{user:f}=B(T),m=e(!1),V=e(null),i=e({definitelyNewPassword:!1,definitelyNewPassword_2:!1});function k(){a.value=[];let o=document.querySelectorAll(".validInputs");for(let s=0;s<o.length;s++)o[s].value===""&&a.value.push(c(`validation.${o[s].name}`)),n.value!==l.value&&a.value.push(c("validation.confirmPassword"))}const _=o=>i.value[o]?"text":"password",w=o=>{i.value[o]=!i.value[o]},S=async()=>{if(k(),a.value.length){p(a.value[0]);return}m.value=!0;try{const o={accountType:f.value.platformType,email:f.value.email,newPassword:n.value,confirmPassword:l.value},s=await $.post("ChangePassword",o);A(s)==="success"?(N(c("Auth.confirm_new_password")),j("/changesuccessful")):p(s.data.message)}catch(o){console.error(o),p("An error occurred. Please try again.")}finally{m.value=!1}};return(o,s)=>{const C=I;return P(),v("div",J,[t("div",K,[t("h1",L,u(o.$t("Auth.forgot_password")),1),t("div",O,[s[6]||(s[6]=t("img",{src:q,alt:"logo",class:"Auth-logo mb-5"},null,-1)),M(C,{activeSteps:[2,1],stepsCount:3}),t("form",{onSubmit:F(S,["prevent"]),ref_key:"confirmPasswordForm",ref:V},[t("div",Q,[t("div",W,[t("p",X,u(o.$t("Auth.new_password")),1),t("div",Y,[t("label",Z,u(o.$t("Auth.password_2")),1),t("div",x,[h(t("input",{type:_("definitelyNewPassword"),name:"password","onUpdate:modelValue":s[0]||(s[0]=r=>b(n)?n.value=r:null),class:"custum-input-icon validInputs",placeholder:o.$t("Auth.password_2")},null,8,ss),[[y,d(n)]]),t("button",{class:g(["static-btn with_eye",{active_class:d(i).definitelyNewPassword}]),type:"button",onClick:s[1]||(s[1]=r=>w("definitelyNewPassword"))},s[4]||(s[4]=[t("i",{class:"far fa-eye icon"},null,-1)]),2)])]),t("div",ts,[t("label",os,u(o.$t("Auth.confirm_password")),1),t("div",es,[h(t("input",{type:_("definitelyNewPassword_2"),name:"password_confirmation","onUpdate:modelValue":s[2]||(s[2]=r=>b(l)?l.value=r:null),class:"custum-input-icon validInputs",placeholder:o.$t("Auth.confirm_password")},null,8,as),[[y,d(l)]]),t("button",{class:g(["static-btn with_eye",{active_class:d(i).definitelyNewPassword_2}]),type:"button",onClick:s[3]||(s[3]=r=>w("definitelyNewPassword_2"))},s[5]||(s[5]=[t("i",{class:"far fa-eye icon"},null,-1)]),2)])]),t("button",ns,[R(u(o.$t("Auth.save"))+" ",1),d(m)?(P(),v("span",ls)):U("",!0)])])])],544)])])])}}};export{fs as default};
