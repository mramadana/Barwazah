import ls from"./CIjU4P19.js";import ns from"./7bosH9rp.js";import{_ as is,s as cs,h as rs,r as i,l as ds,J as us,c,a as s,u as o,t as l,x as L,g as d,b as R,w as j,i as b,o as n,f as ms,j as _s,p as ps,d as hs,k as q}from"./D8P3QojN.js";import{_ as fs}from"./CHxNPIGF.js";import{_ as vs}from"./CRNCPBld.js";import{u as z}from"./D0DnKIJQ.js";import{u as bs,r as gs}from"./DXutHP6I.js";import{t as ys}from"./DhiD74cI.js";const ks={class:"container"},ws={class:"row"},Ss={class:"col-12 col-md-6 mb-4"},xs={class:"settings-card"},As={class:"store-image"},$s=["src"],Ns={key:1,src:fs,alt:"Store Logo"},Ts={class:"store-info"},Cs={class:"store-name mb-2"},Es={class:"store-category"},Is={class:"col-12 col-md-6 mb-4"},Bs={class:"settings-card black"},Ds={class:"store-info"},Fs={class:"store-name mb-2"},Vs={class:"social-icons"},Ms=["href"],Gs=["href"],Hs=["href"],Os=["href"],Ps={class:"row layout-form chart_layout accordion accordion-flush"},Us={class:"col-12 col-xl-4 col-md-6 mb-4"},Ls={class:"accordion-item"},Rs={id:"flush-collapseOne",class:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},js={class:"accordion-body"},qs={class:"col-12 col-xl-4 col-md-6 mb-4"},zs={class:"accordion-item"},Js={id:"flush-collapseSector",class:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},Ks={class:"accordion-body"},Qs={class:"col-12 col-xl-4 col-md-6 mb-4"},Ws={class:"accordion-item"},Xs={id:"flush-collapseEmail",class:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},Ys={class:"accordion-body"},Zs={class:"col-12 col-xl-4 col-md-6 mb-4"},st={class:"text-center"},tt={class:"main-title bold mb-5"},et={class:"form-group"},ot={class:"label"},at=["placeholder"],lt={class:"section-btns mt-4"},nt={type:"submit",class:"custom-btn sm d-inline-flex"},it={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},ct={class:"text-center"},rt={class:"main-title bold mb-4"},dt={class:"main-title normal mb-4"},ut={class:"section-btns mt-5"},mt={__name:"settings",setup(_t){const{token:J,user:K,newemail:Q}=cs(z()),{response:g}=gs(),{successToast:y,errorToast:_}=ys(),k=bs(),W=z(),{deleteAccountHandler:X}=W,{t:Y}=rs({useScope:"global"}),u=i(""),w=i(null),p=i(!1),h=i([]),f=i(!0),Z=i(!1),m=i(!1),a=i({}),v=i(!1),ss=ds(()=>({headers:{Authorization:`Bearer ${J.value}`}}));function ts(){let e=document.querySelectorAll(".validInputs");for(let t=0;t<e.length;t++)e[t].value===""&&h.value.push(Y(`validation.${e[t].name}`))}const es=async()=>{f.value=!0,await k.get("SettingHome",ss.value).then(e=>{g(e)=="success"&&(a.value=e.data.data,console.log(a.value,"settingsData")),f.value=!1}).catch(e=>{console.error(e)})},os=async()=>{try{p.value=!0;const e=new FormData(w.value);if(ts(),h.value.length){_(h.value[0]);return}const t=await k.post(`SendCode?email=${u.value}&accountType=${K.value.platformType}`);g(t)==="success"?(y(t.data.message),q("/emailActivateCode"),Q.value=u.value):_(t.data.msg)}catch(e){console.error(e),p.value=!0,_("An error occurred. Please try again.")}finally{p.value=!1,h.value=[]}};us(async()=>{await es()});const as=async()=>{Z.value=!0,m.value=!1,localStorage.clear();const e=await X();e.status=="success"?y(e.msg):_(e.msg),q("/Auth/register")};return(e,t)=>{var A,$,N,T,C,E,I,B,D,F,V,M,G,H,O,P,U;const S=ls,x=ns;return n(),c("div",null,[s("div",ks,[s("div",ws,[s("div",Ss,[s("div",xs,[s("div",As,[(A=o(a))!=null&&A.storeImage?(n(),c("img",{key:0,src:o(a).storeImage,alt:"Store Logo"},null,8,$s)):(n(),c("img",Ns))]),s("div",Ts,[s("div",Cs,"المتجر: "+l(($=o(a))==null?void 0:$.storeName),1),(N=o(a))!=null&&N.length||o(f)?(n(),L(S,{key:0,class:"mt-2",width:"5rem",height:".5rem"})):d("",!0),s("div",Es,"الفئة: "+l((T=o(a))==null?void 0:T.store_category),1),(C=o(a))!=null&&C.length||o(f)?(n(),L(S,{key:1,class:"mt-2",width:"5rem",height:".5rem"})):d("",!0)])])]),s("div",Is,[s("div",Bs,[t[9]||(t[9]=s("div",{class:"store-image"},null,-1)),s("div",Ds,[s("div",Fs,"التاجر: "+l((E=o(a))==null?void 0:E.userName),1),s("div",Vs,[(I=o(a))!=null&&I.instagram?(n(),c("a",{key:0,href:(B=o(a))==null?void 0:B.instagram,target:"_blank"},t[5]||(t[5]=[s("i",{class:"fab fa-instagram"},null,-1)]),8,Ms)):d("",!0),(D=o(a))!=null&&D.twitter?(n(),c("a",{key:1,href:(F=o(a))==null?void 0:F.twitter,target:"_blank"},t[6]||(t[6]=[s("img",{src:vs,alt:"twitter"},null,-1)]),8,Gs)):d("",!0),(V=o(a))!=null&&V.snapchat?(n(),c("a",{key:2,href:(M=o(a))==null?void 0:M.snapchat,target:"_blank"},t[7]||(t[7]=[s("i",{class:"fab fa-snapchat-ghost"},null,-1)]),8,Hs)):d("",!0),(G=o(a))!=null&&G.facebook?(n(),c("a",{key:3,href:(H=o(a))==null?void 0:H.facebook,target:"_blank"},t[8]||(t[8]=[s("i",{class:"fab fa-facebook-f"},null,-1)]),8,Os)):d("",!0)])])])])]),s("div",Ps,[s("div",Us,[s("div",Ls,[t[10]||(t[10]=s("h2",{class:"accordion-header"},[s("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne","aria-expanded":"false","aria-controls":"flush-collapseOne"},[s("span",{class:"hint-accordion"},"رقم الهاتف")])],-1)),s("div",Rs,[s("div",js,l((O=o(a))==null?void 0:O.phoneNumber),1)])])]),s("div",qs,[s("div",zs,[t[11]||(t[11]=s("h2",{class:"accordion-header"},[s("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseSector","aria-expanded":"false","aria-controls":"flush-collapseSector"},[s("span",{class:"hint-accordion"},"القطاع الخاص بك")])],-1)),s("div",Js,[s("div",Ks,l((P=o(a))==null?void 0:P.nisheName),1)])])]),s("div",Qs,[s("div",Ws,[t[12]||(t[12]=s("h2",{class:"accordion-header"},[s("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseEmail","aria-expanded":"false","aria-controls":"flush-collapseEmail"},[s("span",null,"البريد الإلكتروني")])],-1)),s("div",Xs,[s("div",Ys,l((U=o(a))==null?void 0:U.email),1)])])]),s("div",Zs,[s("div",{class:"settings-card blue-bg",onClick:t[0]||(t[0]=r=>v.value=!0)},t[13]||(t[13]=[s("div",{class:"card-content"},[s("span",{class:"card-label"},"تغيير كلمة السر")],-1),s("button",{class:"edit-button"},"***",-1)]))])])]),R(x,{visible:o(v),"onUpdate:visible":t[2]||(t[2]=r=>b(v)?v.value=r:null),modal:"",class:"custum_dialog_width auth-daialog",draggable:!1},{default:j(()=>[s("div",st,[s("h1",tt,l(e.$t("Auth.change_password")),1),s("form",{onSubmit:ms(os,["prevent"]),ref_key:"forgetForm",ref:w},[s("div",et,[s("label",ot,l(e.$t("Auth.email")),1),_s(s("input",{type:"email",class:"main_input validInputs",valid:"email",name:"email","onUpdate:modelValue":t[1]||(t[1]=r=>b(u)?u.value=r:null),placeholder:e.$t("Auth.enter_email")},null,8,at),[[ps,o(u)]])]),s("div",lt,[s("button",nt,[hs(l(e.$t("Auth.confirmation"))+" ",1),o(p)?(n(),c("span",it)):d("",!0)])])],544)])]),_:1},8,["visible"]),R(x,{visible:o(m),"onUpdate:visible":t[4]||(t[4]=r=>b(m)?m.value=r:null),modal:"",class:"custum_dialog_width",draggable:!1},{default:j(()=>[s("div",ct,[s("h1",rt,l(e.$t("Global.sure_delete_account")),1),s("h1",dt,l(e.$t("Global.delete_account_info")),1),s("div",ut,[s("button",{type:"button",class:"custom-btn sm d-inline-flex",onClick:t[3]||(t[3]=r=>m.value=!1)},l(e.$t("Home.retreat")),1),s("button",{type:"button",class:"custom-btn logout sm d-inline-flex",onClick:as},l(e.$t("Global.delete")),1)])])]),_:1},8,["visible"])])}}},wt=is(mt,[["__scopeId","data-v-8779cfad"]]);export{wt as default};
