import{_ as ns}from"./gnTSM8JW.js";import is from"./DHrxfJzW.js";import{s as rs}from"./BI6LH82z.js";import us from"./odAbrBWe.js";import{h as ds,s as cs,r as o,l as ms,m as ps,c as C,a as e,t as u,f as vs,j as N,p as gs,u as l,i as d,v as fs,n as bs,g as U,d as V,b as D,w as I,o as h,q as E,x as F,k as G}from"./D-VMeSxB.js";import{_ as hs}from"./CqeyaSvA.js";import{_ as H,a as J}from"./DeNcxGBY.js";import{u as K}from"./DJYzN9Wt.js";import{u as _s,r as ys}from"./DXutHP6I.js";import{t as ws}from"./CXXOs6ER.js";import"./sgG04kvI.js";import"./Dek1o18V.js";import"./Cgubm84o.js";import"./D4zmuc0_.js";const ks={class:"container"},$s={class:"auth-layout flex-column"},Ts={class:"main-title bold lg mb-5"},As={class:"layout-form md custom-width"},Ss={class:"row"},Cs={class:"col-12 col-md-10 mr-auto"},Ns={class:"main-title lg mb-4"},Vs={class:"form-group"},Ds={class:"label"},Is=["placeholder"],xs={key:0,class:"form-group"},Us={class:"label"},js={class:"main_input with_icon"},zs=["type","placeholder"],Ps={class:"section-btns mt-5 justify-content-start"},Ls=["disabled"],Ms={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},Rs={class:"new-sign mt-4 text-start"},Bs={class:"text-center"},qs={class:"section-btns mt-4 mb-4"},Es={class:"text-center"},Fs={class:"section-btns mt-4 mb-5"},Gs={class:"typeSection salla"},Hs={class:"typeSection zid"},Js={class:"form-group"},Ks={class:"card flex justify-content-center dropdown_card"},Os=["disabled"],Qs={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},ce={__name:"testLogiiiiin",setup(Ws){const{t:c}=ds(),{user:O}=cs(K()),_=o(!1),i=o(null),v=o(!1),{response:j}=ys(),{successToast:z,errorToast:n}=ws(),$=_s(),x=o({DeviceId:"Test",DeviceType:"Test",ProjectName:"barwasah"}),y=o(null),w=o(!1),g=o(!1),k=o([]),Q=K(),{signInHandler:W}=Q,f=o(!1),m=o([]),X=o(null);o("");const b=o(""),T=o(""),A=o(!1),S=o(!1),P=()=>{let t=document.querySelectorAll(".validInputs");for(let s=0;s<t.length;s++)t[s].value===""&&m.value.push(c(`validation.${t[s].getAttribute("valid")}`))},L=()=>{console.log("Selected type:",i.value),_.value=!1,i.value&&(S.value=!0)},M=async()=>{if(m.value=[],P(),m.value.length){f.value=!1,n(m.value[0]);return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.value)){n(c("validation.invalid_email"));return}try{const s=await $.get(`/CheckEmail?email=${b.value}`);s.data.key==="success"?s.data.hasTwoAccounts?(_.value=!0,i.value=null):S.value=!0:n(s.data.message)}catch(s){s.response&&s.response.status===400?n(s.response.data.message):n(c("messages.something_wrong"))}},Y=async()=>{var t,s;if(!S.value){M();return}if(f.value=!0,m.value=[],P(),m.value.length){f.value=!1,n(m.value[0]);return}try{const p={email:b.value,password:T.value,accountType:i.value||0,device:{DeviceId:x.value.DeviceId,DeviceType:x.value.DeviceType,ProjectName:x.value.ProjectName}},r=await $.post("/Login",p);r.data.statusCode===200&&r.data.key==="success"&&(z(r.data.message),await W(r.data),r.data.hasNiche?G("/"):g.value=!0)}catch(p){n(((s=(t=p==null?void 0:p.response)==null?void 0:t.data)==null?void 0:s.message)||c("messages.something_wrong"))}finally{f.value=!1}},Z=()=>{A.value=!A.value},ss=ms(()=>A.value?"text":"password");ps(g,t=>{t&&es()});const es=async()=>{try{const t=await $.get("/GetNiche");j(t)==="success"?k.value=t.data.data:n(t.data.msg)}catch(t){console.error(t),n(c("messages.something_wrong"))}finally{}},ts=async()=>{if(w.value=!0,!y.value){w.value=!1,n(c("يرجى اختيار القطاع اولا"));return}try{const t=await $.post(`/SelectNiche?userId=${O.value.id}&nicheId=${y.value.id}`);j(t)==="success"?(g.value=!1,z(t.data.message),w.value=!1,G("/")):n(t.data.message)}catch(t){console.error(t),n(c("messages.something_wrong"))}finally{w.value=!1}},R=t=>{window==null||window.open(t,"_blank")};return(t,s)=>{const p=ns,r=is,as=rs,ls=us;return h(),C("div",ks,[e("div",$s,[e("h1",Ts,u(t.$t("Auth.welcome")),1),e("div",As,[s[14]||(s[14]=e("img",{src:hs,alt:"logo",class:"Auth-logo mb-4"},null,-1)),e("form",{onSubmit:vs(Y,["prevent"]),ref_key:"loginForm",ref:X},[e("div",Ss,[e("div",Cs,[e("h2",Ns,u(t.$t("Auth.register_store")),1),e("div",Vs,[e("label",Ds,u(t.$t("Auth.email")),1),N(e("input",{type:"email",class:"main_input validInputs",valid:"email",name:"email","onUpdate:modelValue":s[0]||(s[0]=a=>d(b)?b.value=a:null),onInput:M,placeholder:t.$t("Auth.enter_email")},null,40,Is),[[gs,l(b)]])]),l(S)?(h(),C("div",xs,[e("label",Us,u(t.$t("Auth.password")),1),e("div",js,[N(e("input",{type:l(ss),class:"custum-input-icon validInputs",valid:"password",name:"password","onUpdate:modelValue":s[1]||(s[1]=a=>d(T)?T.value=a:null),placeholder:t.$t("Auth.enter_password")},null,8,zs),[[fs,l(T)]]),e("button",{class:bs(["static-btn with_eye",{active_class:l(A)}]),type:"button",onClick:Z},s[13]||(s[13]=[e("i",{class:"far fa-eye icon"},null,-1)]),2)])])):U("",!0),e("div",Ps,[e("button",{type:"submit",class:"custom-btn sm",disabled:l(f)},[V(u(t.$t("Auth.login"))+" ",1),l(f)?(h(),C("span",Ms)):U("",!0)],8,Ls),e("button",{type:"button",onClick:s[2]||(s[2]=a=>v.value=!0),class:"custom-btn red-bg sm"},u(t.$t("Auth.create_account")),1)]),e("div",Rs,[V(u(t.$t("Auth.forget_password"))+" ",1),D(p,{to:"restorePassword"},{default:I(()=>[V(u(t.$t("Auth.restore_password")),1)]),_:1})])])])],544)])]),D(r,{visible:l(v),"onUpdate:visible":s[5]||(s[5]=a=>d(v)?v.value=a:null),modal:"",class:"custum_dialog_width auth-daialog",draggable:!1},{default:I(()=>[e("div",Bs,[s[17]||(s[17]=e("h5",{class:"main-title sm blue mb-4"}," اختر المنصة التي ترغب في ربط متجرك بها عبر تطبيق بروزه من خلال سوق تطبيقات سلة وزد.",-1)),e("div",qs,[e("button",{onClick:s[3]||(s[3]=()=>{R("https://salla.com/"),v.value=!1}),class:"typeSection salla"},s[15]||(s[15]=[e("img",{src:H,alt:""},null,-1)])),e("button",{onClick:s[4]||(s[4]=()=>{R("https://zid.sa/"),v.value=!1}),class:"typeSection zid"},s[16]||(s[16]=[e("img",{src:J,alt:""},null,-1)]))])])]),_:1},8,["visible"]),D(r,{visible:l(_),"onUpdate:visible":s[10]||(s[10]=a=>d(_)?_.value=a:null),modal:"",class:"custum_dialog_width without-close auth-daialog",draggable:!1},{default:I(()=>[e("div",Es,[s[20]||(s[20]=e("h5",{class:"main-title sm blue mb-4"}," يمكنك ربط متجرك مع تطبيق بروزه من خلال سوق تطبيقات سله و زد ",-1)),s[21]||(s[21]=e("h4",{class:"main-title bold mb-5"}," متجرك على أي منصة؟ ",-1)),e("div",Fs,[e("label",Gs,[N(e("input",{type:"radio",value:"1",name:"checkType","onUpdate:modelValue":s[6]||(s[6]=a=>d(i)?i.value=a:null),class:"d-none",onChange:s[7]||(s[7]=a=>L("salla"))},null,544),[[E,l(i)]]),s[18]||(s[18]=e("img",{src:H,alt:""},null,-1))]),e("label",Hs,[N(e("input",{type:"radio",value:"2",name:"checkType","onUpdate:modelValue":s[8]||(s[8]=a=>d(i)?i.value=a:null),class:"d-none",onChange:s[9]||(s[9]=a=>L("zid"))},null,544),[[E,l(i)]]),s[19]||(s[19]=e("img",{src:J,alt:""},null,-1))])])])]),_:1},8,["visible"]),D(r,{visible:l(g),"onUpdate:visible":s[12]||(s[12]=a=>d(g)?g.value=a:null),modal:"",class:"custum_dialog_width without-close auth-daialog",draggable:!1},{default:I(()=>{var a,B,q;return[s[23]||(s[23]=e("div",{class:"text-center"},[e("h4",{class:"main-title bold mb-5"}," قم بإختيار نوع القطاع اولا ")],-1)),e("div",Js,[s[22]||(s[22]=e("label",{class:"label"},"القطاع",-1)),e("div",Ks,[(a=l(k))!=null&&a.length?(h(),F(as,{key:0,modelValue:l(y),"onUpdate:modelValue":s[11]||(s[11]=os=>d(y)?y.value=os:null),display:"chip",options:l(k),optionLabel:"name",placeholder:"اختر نوع القطاع",maxSelectedLabels:(B=l(k))==null?void 0:B.length,class:"custum-dropdown"},null,8,["modelValue","options","maxSelectedLabels"])):(h(),F(ls,{key:1,width:"100%",height:"40px"}))])]),e("button",{disabled:!((q=l(k))!=null&&q.length),type:"button",class:"custom-btn sm mr-auto mb-4",onClick:ts},[V(u(t.$t("Auth.send"))+" ",1),l(w)?(h(),C("span",Qs)):U("",!0)],8,Os)]}),_:1},8,["visible"])])}}};export{ce as default};
