import{s as S}from"./Dm1NUbOX.js";import{r as a,h as T,e as x,c as h,a as e,t as o,f as z,j as f,p as g,u as n,i as d,b as B,w as V,d as F,g as G,o as b,n as A}from"./DwAYQtRF.js";import{u as j,r as q}from"./DXutHP6I.js";import{t as E}from"./BeJlh1sx.js";import"./7gPfPZY0.js";import"./CrVJhx21.js";import"./ClJYkBEX.js";import"./BXKQeXJS.js";const H={class:"container"},L={class:"layout-form custom-width"},R={class:"main-title bold lg mb-5"},J={class:"row"},K={class:"col-12 col-md-8 mr-auto"},O={class:"form-group"},Q={class:"label"},W={class:"main_input"},X=["placeholder"],Y={class:"form-group"},Z={class:"label"},P={class:"with_cun_select"},ee={class:"main_input"},se=["placeholder"],le={class:"card d-flex justify-content-center dropdown_card"},te={key:0,class:"flex-group-me"},ae=["alt","src"],oe={key:1},ne={class:"flex-group-me"},ie=["alt","src"],ue={class:"form-group"},de={class:"label"},ce={class:"main_input"},re=["placeholder"],me={class:"form-group"},pe={class:"label"},ve=["placeholder"],_e={class:"custom-btn w-100 mr-auto mt-4"},he={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},Ie={__name:"connectUs",setup(fe){const i=a(null),u=a([]),y=a(null),c=a(null),r=a(null),m=a(null),p=a(null),v=a(!1),_=a([]),{t:I}=T({useScope:"global"}),{response:w}=q(),{successToast:U,errorToast:$}=E(),k=j(),C=()=>{let l=document.querySelectorAll(".validInputs");for(let s=0;s<l.length;s++)l[s].value===""&&_.value.push(I(`validation.${l[s].getAttribute("valid")}`))},D=async()=>{v.value=!0;const l=new FormData(y.value);l.append("country_id",i.value.key),C(),_.value.length?($(_.value[0]),v.value=!1,_.value=[]):k.post("contact-us",l).then(s=>{w(s)=="success"?(U(s.data.msg),y.value.reset(),r.value=null,c.value=null,m.value=null,p.value=null):$(s.data.msg),v.value=!1})},M=async()=>{await k.get("countries").then(l=>{if(w(l)=="success"){u.value=l.data.data;for(let s=0;s<u.value.length;s++)u.value[s].id==1&&(i.value=u.value[s])}}).catch(l=>console.log(l))};return x(async()=>{await M()}),(l,s)=>{const N=S;return b(),h("div",H,[e("div",L,[e("h1",R,o(l.$t("Home.connect_us")),1),e("form",{onSubmit:z(D,["prevent"]),ref_key:"connectForm",ref:y},[e("div",J,[e("div",K,[e("div",O,[e("label",Q,o(l.$t("Auth.username")),1),e("div",W,[s[5]||(s[5]=e("i",{class:"fas fa-user sm-icon"},null,-1)),f(e("input",{type:"text",class:"custum-input-icon validInputs",valid:"name",name:"name","onUpdate:modelValue":s[0]||(s[0]=t=>d(c)?c.value=t:null),placeholder:l.$t("Auth.enter_username")},null,8,X),[[g,n(c)]])])]),e("div",Y,[e("label",Z,o(l.$t("Auth.mobile_number")),1),e("div",P,[e("div",ee,[s[6]||(s[6]=e("i",{class:"fas fa-mobile-alt sm-icon"},null,-1)),f(e("input",{type:"number",class:"custum-input-icon validInputs",valid:"phone",name:"phone","onUpdate:modelValue":s[1]||(s[1]=t=>d(r)?r.value=t:null),placeholder:l.$t("Auth.please_mobile_number")},null,8,se),[[g,n(r)]])]),e("div",le,[B(N,{modelValue:n(i),"onUpdate:modelValue":s[2]||(s[2]=t=>d(i)?i.value=t:null),options:n(u),optionLabel:"name"},{value:V(t=>[t.value?(b(),h("div",te,[e("img",{alt:t.value.label,src:t.value.image,class:A(`mr-2 flag flag-${t.value.key}`),style:{width:"24px"},loading:"lazy"},null,10,ae),e("div",null,o(t.value.key),1)])):(b(),h("span",oe,o(t.placeholder),1))]),option:V(t=>[e("div",ne,[e("img",{alt:t.option.label,src:t.option.image,class:A(`mr-2 flag flag-${t.option.key}`),style:{width:"24px"},loading:"lazy"},null,10,ie),e("div",null,o(t.option.key),1)])]),_:1},8,["modelValue","options"])])])]),e("div",ue,[e("label",de,o(l.$t("Auth.email")),1),e("div",ce,[s[7]||(s[7]=e("i",{class:"fas fa-envelope sm-icon"},null,-1)),f(e("input",{type:"email",class:"custum-input-icon validInputs",valid:"email",name:"email","onUpdate:modelValue":s[3]||(s[3]=t=>d(m)?m.value=t:null),placeholder:l.$t("Auth.please_enter_email")},null,8,re),[[g,n(m)]])])]),e("div",me,[e("label",pe,o(l.$t("Global.message")),1),f(e("textarea",{class:"main_input main_area mb-4 validInputs",valid:"message",name:"message","onUpdate:modelValue":s[4]||(s[4]=t=>d(p)?p.value=t:null),placeholder:l.$t("Global.please_enter_message")},null,8,ve),[[g,n(p)]])]),e("button",_e,[F(o(l.$t("Global.send"))+" ",1),n(v)?(b(),h("span",he)):G("",!0)])])])],544)])])}}};export{Ie as default};
