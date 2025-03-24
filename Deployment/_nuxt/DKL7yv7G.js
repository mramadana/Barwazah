import{s as K}from"./Dm1NUbOX.js";import{_ as D}from"./BCfPbeUE.js";import{h as O,r as a,e as Q,y as W,c as w,a as e,t as l,f as X,b,d as i,j as u,p as I,u as n,i as r,w as y,v as S,n as k,z as Y,g as Z,o as A}from"./DwAYQtRF.js";import{u as ss,r as es}from"./DXutHP6I.js";import{t as ts}from"./BeJlh1sx.js";import{u as os}from"./0ixJecxr.js";import"./7gPfPZY0.js";import"./CrVJhx21.js";import"./ClJYkBEX.js";import"./BXKQeXJS.js";const ls={class:"container"},as={class:"auth-layout flex-column"},ns={class:"layout-form custom-width"},is={class:"main-title bold lg mb-5"},ds={class:"row"},us={class:"col-12 col-md-8 mr-auto"},rs={class:"form-group text-center"},cs={class:"input_auth"},ps={class:"form-group"},ms={class:"label"},vs={class:"main_input"},fs=["placeholder"],_s={class:"form-group"},hs={class:"label"},gs={class:"with_cun_select"},ws={class:"main_input"},bs=["placeholder"],ys={class:"card d-flex justify-content-center dropdown_card"},ks={key:0,class:"flex-group-me"},As=["alt","src"],$s={key:1},Us={class:"flex-group-me"},Is=["alt","src"],Vs={class:"form-group"},Ns={class:"label"},Cs={class:"main_input"},Ms=["placeholder"],Ds={class:"form-group"},Ss={class:"label"},Ts={class:"main_input with_icon"},Fs=["type","placeholder"],xs={class:"form-group"},Bs={class:"label"},Ps={class:"main_input with_icon"},js=["type","placeholder"],zs={class:"radios form-group check-inner mb-4"},Gs={class:"d-flex gap-3"},Ls={class:"custom-radio custom-check"},qs={class:"check-text hint"},Es=["disabled"],Hs={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},Rs={class:"new-sign mt-4"},oe={__name:"register",setup(Js){const{t:$}=O({useScope:"global"}),{response:T}=es(),{successToast:F,errorToast:V}=ts(),x=ss(),c=a(null),B=os(),{signUpHandler:P}=B,N=a(null),p=a({}),m=a([]),j=a([]),d=a([]),v=a(!1),_=a(!1),U=a(""),h=a(""),g=a(""),f=a({definitelyNewPassword:!1,definitelyNewPassword_2:!1}),z=t=>{j.value=t},C=t=>{f.value[t]=!f.value[t]},M=t=>f.value[t]?"text":"password",G=async()=>{await x.get("countries").then(t=>{if(T(t)=="success"){m.value=t.data.data;for(let s=0;s<m.value.length;s++)m.value[s].id==1&&(p.value=m.value[s])}}).catch(t=>console.log(t))};function L(){let t=document.querySelectorAll(".validInputs");for(let s=0;s<t.length;s++)t[s].value===""&&d.value.push($(`validation.${t[s].name}`));h.value!==g.value&&d.value.push($("validation.confirmPassword")),_.value||d.value.push($("validation.conditions")),c.value==0&&(c.value=null)}const q=async()=>{const t=new FormData(N.value);if(t.append("country_code",p.value.key),L(),d.value.length)V(d.value[0]),v.value=!1,d.value=[];else{v.value=!0;const s=await P(t);s.status=="success"?F(s.msg):V(s.msg),v.value=!1}};return Q(async()=>{await G()}),(t,s)=>{const E=W("GlobalImgUploader"),H=K,R=D,J=D;return A(),w("div",ls,[e("div",as,[s[23]||(s[23]=e("h1",{class:"main-title bold lg mb-5"},"مرحبًا بك فى بروزة",-1)),e("div",ns,[e("h1",is,l(t.$t("Auth.create_account")),1),e("form",{onSubmit:X(q,["prevent"]),ref_key:"signUpForm",ref:N},[e("div",ds,[e("div",us,[e("div",rs,[e("div",cs,[s[9]||(s[9]=e("div",{class:"edit-label"},[e("i",{class:"fas fa-edit"})],-1)),b(E,{acceptedFiles:"image/*",newImages:t.logo,name:"image",onUploadedImagesUpdated:z},null,8,["newImages"])])]),e("div",ps,[e("label",ms,[i(l(t.$t("Auth.username"))+" ",1),s[10]||(s[10]=e("span",{class:"hint-red"},"*",-1))]),e("div",vs,[s[11]||(s[11]=e("i",{class:"fas fa-user sm-icon"},null,-1)),u(e("input",{type:"text",class:"custum-input-icon validInputs",valid:"name",name:"name","onUpdate:modelValue":s[0]||(s[0]=o=>t.name=o),placeholder:t.$t("Auth.enter_username")},null,8,fs),[[I,t.name]])])]),e("div",_s,[e("label",hs,[i(l(t.$t("Auth.mobile_number"))+" ",1),s[12]||(s[12]=e("span",{class:"hint-red"},"*",-1))]),e("div",gs,[e("div",ws,[s[13]||(s[13]=e("i",{class:"fas fa-mobile-alt sm-icon"},null,-1)),u(e("input",{type:"number",class:"custum-input-icon validInputs",valid:"phone",name:"phone","onUpdate:modelValue":s[1]||(s[1]=o=>r(c)?c.value=o:null),placeholder:t.$t("Auth.please_mobile_number")},null,8,bs),[[I,n(c)]])]),e("div",ys,[b(H,{modelValue:n(p),"onUpdate:modelValue":s[2]||(s[2]=o=>r(p)?p.value=o:null),options:n(m),optionLabel:"name"},{value:y(o=>[o.value?(A(),w("div",ks,[e("img",{alt:o.value.label,src:o.value.image,class:k(`mr-2 flag flag-${o.value.key}`),style:{width:"24px"}},null,10,As),e("div",null,l(o.value.key),1)])):(A(),w("span",$s,l(o.placeholder),1))]),option:y(o=>[e("div",Us,[e("img",{alt:o.option.label,src:o.option.image,class:k(`mr-2 flag flag-${o.option.key}`),style:{width:"24px"}},null,10,Is),e("div",null,l(o.option.key),1)])]),_:1},8,["modelValue","options"])])])]),e("div",Vs,[e("label",Ns,[i(l(t.$t("Auth.email"))+" ",1),s[14]||(s[14]=e("span",{class:"hint-red"},"*",-1))]),e("div",Cs,[s[15]||(s[15]=e("i",{class:"fas fa-envelope sm-icon"},null,-1)),u(e("input",{type:"email",class:"custum-input-icon validInputs",valid:"email",name:"email","onUpdate:modelValue":s[3]||(s[3]=o=>r(U)?U.value=o:null),placeholder:t.$t("Auth.please_enter_email")},null,8,Ms),[[I,n(U)]])])]),e("div",Ds,[e("label",Ss,[i(l(t.$t("Auth.password"))+" ",1),s[16]||(s[16]=e("span",{class:"hint-red"},"*",-1))]),e("div",Ts,[s[18]||(s[18]=e("i",{class:"fas fa-lock sm-icon"},null,-1)),u(e("input",{type:M("definitelyNewPassword"),name:"password","onUpdate:modelValue":s[4]||(s[4]=o=>r(h)?h.value=o:null),class:"custum-input-icon validInputs",valid:"password",placeholder:t.$t("Auth.please_enter_password")},null,8,Fs),[[S,n(h)]]),e("button",{class:k(["static-btn with_eye",{active_class:n(f).definitelyNewPassword}]),type:"button",onClick:s[5]||(s[5]=o=>C("definitelyNewPassword"))},s[17]||(s[17]=[e("i",{class:"far fa-eye icon"},null,-1)]),2)])]),e("div",xs,[e("label",Bs,[i(l(t.$t("Auth.confirm_password_sm"))+" ",1),s[19]||(s[19]=e("span",{class:"hint-red"},"*",-1))]),e("div",Ps,[s[21]||(s[21]=e("i",{class:"fas fa-lock sm-icon"},null,-1)),u(e("input",{type:M("definitelyNewPassword_2"),name:"password_confirmation","onUpdate:modelValue":s[6]||(s[6]=o=>r(g)?g.value=o:null),class:"custum-input-icon validInputs",placeholder:t.$t("Auth.please_confirm_password")},null,8,js),[[S,n(g)]]),e("button",{class:k(["static-btn with_eye",{active_class:n(f).definitelyNewPassword_2}]),type:"button",onClick:s[7]||(s[7]=o=>C("definitelyNewPassword_2"))},s[20]||(s[20]=[e("i",{class:"far fa-eye icon"},null,-1)]),2)])]),e("div",zs,[e("div",Gs,[e("label",Ls,[u(e("input",{type:"checkbox",name:"terms","onUpdate:modelValue":s[8]||(s[8]=o=>r(_)?_.value=o:null),class:"d-none"},null,512),[[Y,n(_)]]),s[22]||(s[22]=e("span",{class:"mark"},[e("i",{class:"fas fa-check icon"})],-1)),e("p",qs,[i(l(t.$t("Auth.agree_to"))+" ",1),b(R,{to:"/terms",target:"_blank",class:"anchor"},{default:y(()=>[i(l(t.$t("Auth.terms_and_conditions")),1)]),_:1})])])])]),e("button",{type:"submit",class:"custom-btn w-100 mr-auto",disabled:n(v)},[i(l(t.$t("Auth.confirmation"))+" ",1),n(v)?(A(),w("span",Hs)):Z("",!0)],8,Es),e("div",Rs,[i(l(t.$t("Auth.already_have_account"))+" ",1),b(J,{to:"/Auth/login"},{default:y(()=>[i(l(t.$t("Auth.login")),1)]),_:1})])])])],544)])])])}}};export{oe as default};
