import{h as A,r as a,s as D,c as f,a as e,t as o,f as I,d as m,j as w,v as M,u as c,i as h,n as P,p as S,g as C,o as b}from"./D7HON4Zz.js";import{_ as E}from"./DnYUffwL.js";import{t as G}from"./DTiYDBj-.js";import{u as B}from"./DXutHP6I.js";import{u as F}from"./DM7daNnx.js";const z={class:"container"},H={class:"layout-form custom-width"},R={class:"main-title bold lg mb-5"},U={class:"row"},j={class:"col-12 col-md-8 mr-auto"},q={class:"text-center mb-5"},J={class:"main-title"},K={class:"form-group"},L={class:"label"},O={class:"main_input with_icon"},Q=["type","placeholder"],W={class:"form-group"},X={class:"label"},Y={class:"main_input"},Z=["placeholder"],x={class:"custom-btn w-100 mr-auto mt-5"},ss={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},is={__name:"ChangeEmail",setup(es){const{t:g}=A({useScope:"global"}),l=a([]),{successToast:y,errorToast:p}=G(),n=a("");B();const v=F();D(v);const{changeMailHandler:$}=v,i=a(!1),r=a(""),_=a(null),u=a({definitelyNewPassword:!1}),N=t=>{u.value[t]=!u.value[t]},V=t=>u.value[t]?"text":"password";function T(){let t=document.querySelectorAll(".validInputs");for(let s=0;s<t.length;s++)t[s].value===""&&l.value.push(g(`validation.${t[s].name}`))}const k=async()=>{const t=new FormData(_.value);if(T(),l.value.length)p(l.value[0]),i.value=!1,l.value=[];else{i.value=!0;const s=await $(t,r.value,n.value);s.status=="success"?y(s.msg):p(s.msg),i.value=!1}};return(t,s)=>(b(),f("div",null,[e("div",z,[e("div",H,[e("h1",R,o(t.$t("Global.change_email")),1),e("form",{onSubmit:I(k,["prevent"]),ref_key:"changeEmailForm",ref:_},[e("div",U,[e("div",j,[e("div",q,[s[3]||(s[3]=e("img",{src:E,loading:"lazy",alt:"restore-image",class:"restore-image mb-4"},null,-1)),e("p",J,o(t.$t("Global.enter_current_password_new_email")),1)]),e("div",K,[e("label",L,[m(o(t.$t("Auth.password"))+" ",1),s[4]||(s[4]=e("span",{class:"hint-red"},"*",-1))]),e("div",O,[w(e("input",{type:V("definitelyNewPassword"),name:"password","onUpdate:modelValue":s[0]||(s[0]=d=>h(n)?n.value=d:null),class:"custum-input-icon validInputs",valid:"password",placeholder:t.$t("Auth.please_enter_password")},null,8,Q),[[M,c(n)]]),e("button",{class:P(["static-btn with_eye",{active_class:c(u).definitelyNewPassword}]),type:"button",onClick:s[1]||(s[1]=d=>N("definitelyNewPassword"))},s[5]||(s[5]=[e("i",{class:"far fa-eye icon"},null,-1)]),2)])]),e("div",W,[e("label",X,[m(o(t.$t("Global.new_email"))+" ",1),s[6]||(s[6]=e("span",{class:"hint-red"},"*",-1))]),e("div",Y,[s[7]||(s[7]=e("i",{class:"fas fa-envelope sm-icon"},null,-1)),w(e("input",{type:"email",class:"custum-input-icon validInputs",name:"email","onUpdate:modelValue":s[2]||(s[2]=d=>h(r)?r.value=d:null),placeholder:t.$t("Global.please_enter_new_email")},null,8,Z),[[S,c(r)]])])]),e("button",x,[m(o(t.$t("Home.continuation"))+" ",1),c(i)?(b(),f("span",ss)):C("",!0)])])])],544)])])]))}};export{is as default};
