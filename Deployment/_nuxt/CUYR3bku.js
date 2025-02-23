import ts from"./CgFgIVaU.js";import es from"./DmPp5oci.js";import{_ as os,s as as,h as ls,r as n,l as ns,E as is,c as M,a as s,t as l,u as o,x as V,g as f,b as G,w as O,i as v,o as p,f as cs,j as rs,p as ds,d as us,k as P}from"./uThEF0pG.js";import{_ as ms}from"./CD-VyelL.js";import{u as U}from"./Bd7qOfwp.js";import{u as _s,r as hs}from"./DXutHP6I.js";import{t as ps}from"./D12V8fHa.js";const fs="data:image/svg+xml,%3csvg%20width='14'%20height='15'%20viewBox='0%200%2014%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%200.230957L5.39047%208.10596L0.114171%2014.231H1.28317L5.90675%208.86007L9.58322%2014.231H14L8.36826%206.00409L13.3379%200.230957H12.1725L7.85126%205.24782L4.41678%200.230957H0ZM1.39591%200.967799H4.02975L12.6041%2013.4941H9.97025L1.39591%200.967799Z'%20fill='white'/%3e%3c/svg%3e",vs={class:"container"},gs={class:"row"},bs={class:"col-12 col-md-6 mb-4"},ys={class:"settings-card"},ws={class:"store-info"},ks={class:"store-name mb-2"},xs={class:"store-category"},Ss={class:"col-12 col-md-6 mb-4"},As={class:"settings-card black"},$s={class:"store-image"},Ls=["src"],Hs={class:"store-info"},Es={class:"store-name mb-2"},Ns={class:"social-icons"},Ts=["href"],Bs=["href"],Cs=["href"],Ds=["href"],Fs={class:"row layout-form chart_layout accordion accordion-flush"},Is={class:"col-12 col-xl-4 col-md-6 mb-4"},Ms={class:"accordion-item"},Vs={id:"flush-collapseOne",class:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},Gs={class:"accordion-body"},Os={class:"col-12 col-xl-4 col-md-6 mb-4"},Ps={class:"accordion-item"},Us={id:"flush-collapseSector",class:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},Rs={class:"accordion-body"},Zs={class:"col-12 col-xl-4 col-md-6 mb-4"},js={class:"accordion-item"},qs={id:"flush-collapseEmail",class:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},zs={class:"accordion-body"},Js={class:"col-12 col-xl-4 col-md-6 mb-4"},Ks={class:"text-center"},Qs={class:"main-title bold mb-5"},Ws={class:"form-group"},Xs={class:"label"},Ys=["placeholder"],st={class:"section-btns mt-4"},tt={type:"submit",class:"custom-btn sm d-inline-flex"},et={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},ot={class:"text-center"},at={class:"main-title bold mb-4"},lt={class:"main-title normal mb-4"},nt={class:"section-btns mt-5"},it={__name:"settings",setup(ct){const{token:R,user:Z,newemail:j}=as(U()),{response:g}=hs(),{successToast:b,errorToast:d}=ps(),y=_s(),q=U(),{deleteAccountHandler:z}=q,{t:J}=ls({useScope:"global"}),c=n(""),w=n(null),u=n(!1),m=n([]),_=n(!0),K=n(!1),r=n(!1),a=n({}),h=n(!1),Q=ns(()=>({headers:{Authorization:`Bearer ${R.value}`}}));function W(){let e=document.querySelectorAll(".validInputs");for(let t=0;t<e.length;t++)e[t].value===""&&m.value.push(J(`validation.${e[t].name}`))}const X=async()=>{_.value=!0,await y.get("SettingHome",Q.value).then(e=>{g(e)=="success"&&(a.value=e.data.data,console.log(a.value,"settingsData")),_.value=!1}).catch(e=>{console.error(e)})},Y=async()=>{try{u.value=!0;const e=new FormData(w.value);if(W(),m.value.length){d(m.value[0]);return}const t=await y.post(`SendCode?email=${c.value}&accountType=${Z.value.platformType}`);g(t)==="success"?(b(t.data.message),P("/emailActivateCode"),j.value=c.value):d(t.data.msg)}catch(e){console.error(e),u.value=!0,d("An error occurred. Please try again.")}finally{u.value=!1,m.value=[]}};is(async()=>{await X()});const ss=async()=>{K.value=!0,r.value=!1,localStorage.clear();const e=await z();e.status=="success"?b(e.msg):d(e.msg),P("/Auth/register")};return(e,t)=>{var S,A,$,L,H,E,N,T,B,C,D,F,I;const k=ts,x=es;return p(),M("div",null,[s("div",vs,[s("div",gs,[s("div",bs,[s("div",ys,[t[5]||(t[5]=s("div",{class:"store-image"},[s("img",{src:ms,alt:"Store Logo"})],-1)),s("div",ws,[s("div",ks,"المتجر: "+l((S=o(a))==null?void 0:S.storeName),1),(A=o(a))!=null&&A.length||o(_)?(p(),V(k,{key:0,class:"mt-2",width:"5rem",height:".5rem"})):f("",!0),s("div",xs,"الفئة: "+l(($=o(a))==null?void 0:$.store_category),1),(L=o(a))!=null&&L.length||o(_)?(p(),V(k,{key:1,class:"mt-2",width:"5rem",height:".5rem"})):f("",!0)])])]),s("div",Ss,[s("div",As,[s("div",$s,[s("img",{src:(H=o(a))==null?void 0:H.userImage,alt:"Store Logo"},null,8,Ls)]),s("div",Hs,[s("div",Es,"التاجر: "+l((E=o(a))==null?void 0:E.userName),1),s("div",Ns,[s("a",{href:(N=o(a))==null?void 0:N.instagram,target:"_blank"},t[6]||(t[6]=[s("i",{class:"fab fa-instagram"},null,-1)]),8,Ts),s("a",{href:(T=o(a))==null?void 0:T.twitter,target:"_blank"},t[7]||(t[7]=[s("img",{src:fs,alt:"twitter"},null,-1)]),8,Bs),s("a",{href:(B=o(a))==null?void 0:B.snapchat,target:"_blank"},t[8]||(t[8]=[s("i",{class:"fab fa-snapchat-ghost"},null,-1)]),8,Cs),s("a",{href:(C=o(a))==null?void 0:C.facebook,target:"_blank"},t[9]||(t[9]=[s("i",{class:"fab fa-facebook-f"},null,-1)]),8,Ds)])])])])]),s("div",Fs,[s("div",Is,[s("div",Ms,[t[10]||(t[10]=s("h2",{class:"accordion-header"},[s("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne","aria-expanded":"false","aria-controls":"flush-collapseOne"},[s("span",{class:"hint-accordion"},"رقم الهاتف")])],-1)),s("div",Vs,[s("div",Gs,l((D=o(a))==null?void 0:D.phoneNumber),1)])])]),s("div",Os,[s("div",Ps,[t[11]||(t[11]=s("h2",{class:"accordion-header"},[s("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseSector","aria-expanded":"false","aria-controls":"flush-collapseSector"},[s("span",{class:"hint-accordion"},"القطاع الخاص بك")])],-1)),s("div",Us,[s("div",Rs,l((F=o(a))==null?void 0:F.nisheName),1)])])]),s("div",Zs,[s("div",js,[t[12]||(t[12]=s("h2",{class:"accordion-header"},[s("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseEmail","aria-expanded":"false","aria-controls":"flush-collapseEmail"},[s("span",null,"البريد الإلكتروني")])],-1)),s("div",qs,[s("div",zs,l((I=o(a))==null?void 0:I.email),1)])])]),s("div",Js,[s("div",{class:"settings-card blue-bg",onClick:t[0]||(t[0]=i=>h.value=!0)},t[13]||(t[13]=[s("div",{class:"card-content"},[s("span",{class:"card-label"},"تغيير كلمة السر")],-1),s("button",{class:"edit-button"},"***",-1)]))])])]),G(x,{visible:o(h),"onUpdate:visible":t[2]||(t[2]=i=>v(h)?h.value=i:null),modal:"",class:"custum_dialog_width auth-daialog",draggable:!1},{default:O(()=>[s("div",Ks,[s("h1",Qs,l(e.$t("Auth.change_password")),1),s("form",{onSubmit:cs(Y,["prevent"]),ref_key:"forgetForm",ref:w},[s("div",Ws,[s("label",Xs,l(e.$t("Auth.email")),1),rs(s("input",{type:"email",class:"main_input validInputs",valid:"email",name:"email","onUpdate:modelValue":t[1]||(t[1]=i=>v(c)?c.value=i:null),placeholder:e.$t("Auth.enter_email")},null,8,Ys),[[ds,o(c)]])]),s("div",st,[s("button",tt,[us(l(e.$t("Auth.confirmation"))+" ",1),o(u)?(p(),M("span",et)):f("",!0)])])],544)])]),_:1},8,["visible"]),G(x,{visible:o(r),"onUpdate:visible":t[4]||(t[4]=i=>v(r)?r.value=i:null),modal:"",class:"custum_dialog_width",draggable:!1},{default:O(()=>[s("div",ot,[s("h1",at,l(e.$t("Global.sure_delete_account")),1),s("h1",lt,l(e.$t("Global.delete_account_info")),1),s("div",nt,[s("button",{type:"button",class:"custom-btn sm d-inline-flex",onClick:t[3]||(t[3]=i=>r.value=!1)},l(e.$t("Home.retreat")),1),s("button",{type:"button",class:"custom-btn logout sm d-inline-flex",onClick:ss},l(e.$t("Global.delete")),1)])])]),_:1},8,["visible"])])}}},ft=os(it,[["__scopeId","data-v-0022efea"]]);export{ft as default};
