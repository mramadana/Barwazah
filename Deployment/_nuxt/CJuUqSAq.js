import{_ as ns}from"./COuujZUz.js";import is from"./IdLGiH84.js";import{s as rs}from"./BQxbvYH4.js";import us from"./CEgAR7Su.js";import{h as ds,s as cs,r as o,l as ms,m as ps,c as C,a as e,t as u,f as vs,j as N,p as gs,u as l,i as c,v as fs,n as bs,g as j,d as V,b as D,w as I,o as b,q as E,x as R,k as F}from"./geFSAwWZ.js";import{_ as hs}from"./C95eLU9c.js";import{_ as G,a as H}from"./CbUU1eri.js";import{u as J}from"./BysA7udR.js";import{u as _s,r as ys}from"./DXutHP6I.js";import{t as ws}from"./Cdve3orc.js";import"./BXR435Dz.js";import"./wPo5RTQS.js";import"./CouHgqNR.js";import"./Cq5wwh5R.js";const ks={class:"container"},$s={class:"auth-layout flex-column"},Ts={class:"main-title bold lg mb-5"},As={class:"layout-form md custom-width"},Ss={class:"row"},Cs={class:"col-12 col-md-10 mr-auto"},Ns={class:"main-title lg mb-4"},Vs={class:"form-group"},Ds={class:"label"},Is=["placeholder"],Us={key:0,class:"form-group"},xs={class:"label"},js={class:"main_input with_icon"},zs=["type","placeholder"],Ps={class:"section-btns mt-5 justify-content-start"},Ms=["disabled"],Bs={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},Ls={class:"new-sign mt-4 text-start"},qs={class:"text-center"},Es={class:"section-btns mt-4 mb-4"},Rs={class:"text-center"},Fs={class:"section-btns mt-4 mb-5"},Gs={class:"typeSection salla"},Hs={class:"typeSection zid"},Js={class:"form-group"},Ks={class:"card flex justify-content-center dropdown_card"},Os=["disabled"],Qs={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},ce={__name:"login",setup(Ws){const{t:m}=ds(),{user:K}=cs(J()),h=o(!1),i=o(null),g=o(!1),{response:z}=ys(),{successToast:U,errorToast:n}=ws(),$=_s(),x=o({DeviceId:"Test",DeviceType:"Test",ProjectName:"barwasah"}),_=o(null),y=o(!1),f=o(!1),w=o([]),O=J(),{signInHandler:Q}=O,d=o(!1),p=o([]),W=o(null);o("");const k=o(""),T=o(""),A=o(!1),S=o(!1),P=()=>{let t=document.querySelectorAll(".validInputs");for(let s=0;s<t.length;s++)t[s].value===""&&p.value.push(m(`validation.${t[s].getAttribute("valid")}`))},M=()=>{console.log("Selected type:",i.value),h.value=!1,i.value&&(S.value=!0)},X=async()=>{if(p.value=[],d.value=!0,P(),p.value.length){d.value=!1,n(p.value[0]);return}try{const t=await $.get(`/CheckEmail?email=${k.value}`);t.data.key==="success"?(U(m("validation.right_email")),t.data.hasTwoAccounts?(h.value=!0,i.value=null):S.value=!0):n(t.data.message)}catch(t){t.response&&t.response.status===400?n(t.response.data.message):n(m("messages.something_wrong"))}finally{d.value=!1}},Y=async()=>{var t,s;if(!S.value){X();return}if(d.value=!0,p.value=[],P(),p.value.length){d.value=!1,n(p.value[0]);return}try{const v={email:k.value,password:T.value,accountType:i.value||0,device:{DeviceId:x.value.DeviceId,DeviceType:x.value.DeviceType,ProjectName:x.value.ProjectName}},r=await $.post("/Login",v);r.data.statusCode===200&&r.data.key==="success"&&(U(r.data.message),await Q(r.data),r.data.hasNiche?F("/"):f.value=!0)}catch(v){n(((s=(t=v==null?void 0:v.response)==null?void 0:t.data)==null?void 0:s.message)||m("messages.something_wrong"))}finally{d.value=!1}},Z=()=>{A.value=!A.value},ss=ms(()=>A.value?"text":"password");ps(f,t=>{t&&es()});const es=async()=>{try{const t=await $.get("/GetNiche");z(t)==="success"?w.value=t.data.data:n(t.data.msg)}catch(t){console.error(t),n(m("messages.something_wrong"))}finally{}},ts=async()=>{if(y.value=!0,!_.value){y.value=!1,n(m("يرجى اختيار القطاع اولا"));return}try{const t=await $.post(`/SelectNiche?userId=${K.value.id}&nicheId=${_.value.id}`);z(t)==="success"?(f.value=!1,U(t.data.message),y.value=!1,F("/")):n(t.data.message)}catch(t){console.error(t),n(m("messages.something_wrong"))}finally{y.value=!1}},B=t=>{window==null||window.open(t,"_blank")};return(t,s)=>{const v=ns,r=is,as=rs,ls=us;return b(),C("div",ks,[e("div",$s,[e("h1",Ts,u(t.$t("Auth.welcome")),1),e("div",As,[s[14]||(s[14]=e("img",{src:hs,alt:"logo",class:"Auth-logo mb-4"},null,-1)),e("form",{onSubmit:vs(Y,["prevent"]),ref_key:"loginForm",ref:W},[e("div",Ss,[e("div",Cs,[e("h2",Ns,u(t.$t("Auth.register_store")),1),e("div",Vs,[e("label",Ds,u(t.$t("Auth.email")),1),N(e("input",{type:"email",class:"main_input validInputs",valid:"email",name:"email","onUpdate:modelValue":s[0]||(s[0]=a=>c(k)?k.value=a:null),placeholder:t.$t("Auth.enter_email")},null,8,Is),[[gs,l(k)]])]),l(S)?(b(),C("div",Us,[e("label",xs,u(t.$t("Auth.password")),1),e("div",js,[N(e("input",{type:l(ss),class:"custum-input-icon validInputs",valid:"password",name:"password","onUpdate:modelValue":s[1]||(s[1]=a=>c(T)?T.value=a:null),placeholder:t.$t("Auth.enter_password")},null,8,zs),[[fs,l(T)]]),e("button",{class:bs(["static-btn with_eye",{active_class:l(A)}]),type:"button",onClick:Z},s[13]||(s[13]=[e("i",{class:"far fa-eye icon"},null,-1)]),2)])])):j("",!0),e("div",Ps,[e("button",{type:"submit",class:"custom-btn sm",disabled:l(d)},[V(u(t.$t("Auth.login"))+" ",1),l(d)?(b(),C("span",Bs)):j("",!0)],8,Ms),e("button",{type:"button",onClick:s[2]||(s[2]=a=>g.value=!0),class:"custom-btn red-bg sm"},u(t.$t("Auth.create_account")),1)]),e("div",Ls,[V(u(t.$t("Auth.forget_password"))+" ",1),D(v,{to:"restorePassword"},{default:I(()=>[V(u(t.$t("Auth.restore_password")),1)]),_:1})])])])],544)])]),D(r,{visible:l(g),"onUpdate:visible":s[5]||(s[5]=a=>c(g)?g.value=a:null),modal:"",class:"custum_dialog_width auth-daialog",draggable:!1},{default:I(()=>[e("div",qs,[s[17]||(s[17]=e("h5",{class:"main-title sm blue mb-4"}," اختر المنصة التي ترغب في ربط متجرك بها عبر تطبيق بروزه من خلال سوق تطبيقات سلة وزد.",-1)),e("div",Es,[e("button",{onClick:s[3]||(s[3]=()=>{B("https://salla.com/"),g.value=!1}),class:"typeSection salla"},s[15]||(s[15]=[e("img",{src:G,alt:""},null,-1)])),e("button",{onClick:s[4]||(s[4]=()=>{B("https://zid.sa/"),g.value=!1}),class:"typeSection zid"},s[16]||(s[16]=[e("img",{src:H,alt:""},null,-1)]))])])]),_:1},8,["visible"]),D(r,{visible:l(h),"onUpdate:visible":s[10]||(s[10]=a=>c(h)?h.value=a:null),modal:"",class:"custum_dialog_width without-close auth-daialog",draggable:!1},{default:I(()=>[e("div",Rs,[s[20]||(s[20]=e("h5",{class:"main-title sm blue mb-4"}," يمكنك ربط متجرك مع تطبيق بروزه من خلال سوق تطبيقات سله و زد ",-1)),s[21]||(s[21]=e("h4",{class:"main-title bold mb-5"}," متجرك على أي منصة؟ ",-1)),e("div",Fs,[e("label",Gs,[N(e("input",{type:"radio",value:"1",name:"checkType","onUpdate:modelValue":s[6]||(s[6]=a=>c(i)?i.value=a:null),class:"d-none",onChange:s[7]||(s[7]=a=>M("salla"))},null,544),[[E,l(i)]]),s[18]||(s[18]=e("img",{src:G,alt:""},null,-1))]),e("label",Hs,[N(e("input",{type:"radio",value:"2",name:"checkType","onUpdate:modelValue":s[8]||(s[8]=a=>c(i)?i.value=a:null),class:"d-none",onChange:s[9]||(s[9]=a=>M("zid"))},null,544),[[E,l(i)]]),s[19]||(s[19]=e("img",{src:H,alt:""},null,-1))])])])]),_:1},8,["visible"]),D(r,{visible:l(f),"onUpdate:visible":s[12]||(s[12]=a=>c(f)?f.value=a:null),modal:"",class:"custum_dialog_width without-close auth-daialog",draggable:!1},{default:I(()=>{var a,L,q;return[s[23]||(s[23]=e("div",{class:"text-center"},[e("h4",{class:"main-title bold mb-5"}," قم بإختيار نوع القطاع اولا ")],-1)),e("div",Js,[s[22]||(s[22]=e("label",{class:"label"},"القطاع",-1)),e("div",Ks,[(a=l(w))!=null&&a.length?(b(),R(as,{key:0,modelValue:l(_),"onUpdate:modelValue":s[11]||(s[11]=os=>c(_)?_.value=os:null),display:"chip",options:l(w),optionLabel:"name",placeholder:"اختر نوع القطاع",maxSelectedLabels:(L=l(w))==null?void 0:L.length,class:"custum-dropdown"},null,8,["modelValue","options","maxSelectedLabels"])):(b(),R(ls,{key:1,width:"100%",height:"40px"}))])]),e("button",{disabled:!((q=l(w))!=null&&q.length),type:"button",class:"custom-btn sm mr-auto mb-4",onClick:ts},[V(u(t.$t("Auth.send"))+" ",1),l(y)?(b(),C("span",Qs)):j("",!0)],8,Os)]}),_:1},8,["visible"])])}}};export{ce as default};
