import B from"./DHrxfJzW.js";import{I as C,h as D,r as o,s as M,e as N,y as P,c as p,a as s,t as i,f as x,b as f,u as r,d as v,j as R,p as F,i as _,g as H,w as j,o as g,k as q}from"./D-VMeSxB.js";import{u as z}from"./DJYzN9Wt.js";import{t as E}from"./CXXOs6ER.js";import{u as J}from"./DXutHP6I.js";const K=C("global",{state:()=>({testRef:"koooooook"}),actions:{}}),L={class:"container"},O={class:"layout-form custom-width"},Q={class:"main-title bold lg mb-5"},W={class:"row"},X={class:"col-12 col-md-8 mr-auto"},Y={class:"form-group text-center"},Z={class:"input_auth"},ee={class:"form-group"},se={class:"label"},te={class:"main_input"},oe=["placeholder"],ae={class:"custom-btn w-100 mt-5"},le={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},ne={class:"text-center"},ie={class:"main-title bold mb-4"},fe={__name:"editProfile",setup(re){const{t:h}=D({useScope:"global"}),c=z();K();const{profileHandler:b}=c,{successToast:w,errorToast:I}=E(),y=J(),u=o(""),l=o(""),a=o(!1),S=o([]),n=o(!1),{token:U}=M(c);o([]);const m=o(null),k={headers:{Authorization:`Bearer ${U.value}`}};function T(){let t=document.querySelectorAll(".validInputs");for(let e=0;e<t.length;e++)t[e].value===""&&S.value.push(h(`validation.${t[e].name}`))}const $=async()=>{await y.get("profile",k).then(t=>{l.value=t.data.data.name,u.value=t.data.data.image}).catch(t=>console.log(t))},A=async()=>{n.value=!0;const t=new FormData(m.value);n.value=!0,T();const e=await b(t);e.status=="success"?(w(e.msg),a.value=!0,setTimeout(()=>{a.value=!1,q("/settings")},1e3)):I(e.msg),n.value=!1};return N(()=>{$()}),(t,e)=>{const G=P("GlobalImgUploader"),V=B;return g(),p("div",L,[s("div",O,[s("h1",Q,i(t.$t("Home.edit_profile")),1),s("form",{onSubmit:x(A,["prevent"]),ref_key:"editProfileform",ref:m},[s("div",W,[s("div",X,[s("div",Y,[s("div",Z,[e[2]||(e[2]=s("div",{class:"edit-label"},[s("i",{class:"fas fa-edit"})],-1)),f(G,{acceptedFiles:"image/*",newImages:r(u),name:"image",onUploadedImagesUpdated:t.updateUploadedImages_1},null,8,["newImages","onUploadedImagesUpdated"])])]),s("div",ee,[s("label",se,[v(i(t.$t("Auth.username"))+" ",1),e[3]||(e[3]=s("span",{class:"hint-red"},"*",-1))]),s("div",te,[e[4]||(e[4]=s("i",{class:"fas fa-user sm-icon"},null,-1)),R(s("input",{type:"text",class:"custum-input-icon validInputs",valid:"name",name:"name","onUpdate:modelValue":e[0]||(e[0]=d=>_(l)?l.value=d:null),placeholder:t.$t("Auth.enter_username")},null,8,oe),[[F,r(l)]])])]),s("button",ae,[v(i(t.$t("Global.Saving_changes"))+" ",1),r(n)?(g(),p("span",le)):H("",!0)])])])],544)]),f(V,{visible:r(a),"onUpdate:visible":e[1]||(e[1]=d=>_(a)?a.value=d:null),modal:"",class:"custum_dialog_width without-close",draggable:!1},{default:j(()=>[s("div",ne,[s("h3",ie,i(t.$t("Global.Saving_changes_success")),1)])]),_:1},8,["visible"])])}}};export{fe as default};
