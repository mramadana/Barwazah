const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BwQwSbVT.js","./BABRu3cH.js","./D7HON4Zz.js","./entry.B0b_3z4T.css"])))=>i.map(i=>d[i]);
import{_ as T}from"./DZ2PQ0iA.js";import{s as V,h as j,A as z,B as I,l as E,r as o,e as O,m as U,o as A,c as C,a,b as u,g as B,w as G,_ as q,G as F,u as g}from"./D7HON4Zz.js";import H from"./DDE4NRye.js";import{s as J}from"./DV4OcH8R.js";import{i as K,a as Q,b as W,c as X,f as Y,d as Z,_ as ee,u as ae}from"./BABRu3cH.js";import{u as N,r as P}from"./DXutHP6I.js";import{u as R}from"./DM7daNnx.js";import{i as L}from"./DLrcjctE.js";import{_ as te}from"./Cvh-ObaV.js";import{a as se,_ as oe}from"./BAkD6WKN.js";import"./BVxDG3Su.js";import"./Ds-FpX6a.js";import"./JaR2M7yU.js";import"./BX07nipz.js";const ne=Z(ee),re={key:0,class:"skeleton-chart"},le={class:"skeleton-bars"},ie={class:"d-flex align-items-center gap-3 justify-content-end"},ce={key:0,class:"w-100"},de={class:"d-flex align-items-center justify-content-center gap-4"},ue={class:"with_cun_select custom-select"},me={class:"flex justify-content-center dropdown_card"},pe={__name:"Orders",props:{apiEndpoint:{type:String,required:!0}},async setup(S){let m,h;const p=N(),{response:D}=P(),{token:_}=V(R());j();const x=S,v=([m,h]=z(()=>I(()=>import("./BwQwSbVT.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),m=await m,h(),m);v.use([L,K,Q,W,X]);const $=E(()=>({headers:{Authorization:`Bearer ${_.value}`}})),f=o(!1),y=o(null),l=o(null),w=o([]),b=o([{name:"عرض الكل",id:0},{name:"يناير",id:1,days:31},{name:"فبراير",id:2,days:28},{name:"مارس",id:3,days:31},{name:"أبريل",id:4,days:30},{name:"مايو",id:5,days:31},{name:"يونيو",id:6,days:30},{name:"يوليو",id:7,days:31},{name:"أغسطس",id:8,days:31},{name:"سبتمبر",id:9,days:30},{name:"أكتوبر",id:10,days:31},{name:"نوفمبر",id:11,days:30},{name:"ديسمبر",id:12,days:31}]),e=o({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[],axisLabel:{interval:0,rotate:45}},yAxis:{type:"value",show:!1},series:[{type:"line",smooth:!0,symbol:"square",symbolSize:7,showSymbol:!0,lineStyle:{width:2,color:"#4681f4"},itemStyle:{color:"#013660"},areaStyle:{color:new v.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(247, 92, 92, 0.6)"},{offset:1,color:"rgba(247, 92, 92, 0.2)"}])},data:[]}]}),t=async(n=0)=>{var s,i;f.value=!0;try{const d=await p.get(`${x.apiEndpoint}${n?`?filterByMonth=${n}`:""}`,$.value);if(console.log("API Response:",d.data),D(d)==="success"){if(!((s=d.data)!=null&&s.data)){console.log("No data found in response"),e.value.xAxis.data=[],e.value.series[0].data=[];return}const c=d.data.data;console.log("Chart Data 222:",c),w.value=c;try{n===0?(e.value.xAxis.data=c.map(r=>r.month),e.value.series[0].data=c.map(r=>r.value)):(e.value.xAxis.data=c.map(r=>`اليوم ${r.month}`),e.value.series[0].data=c.map(r=>r.value)),(i=l.value)!=null&&i.chart&&l.value.chart.setOption(e.value,!0)}catch(r){console.error("Error mapping data:",r),console.log("Data structure:",c),e.value.xAxis.data=[],e.value.series[0].data=[]}}}catch(d){console.error("Error fetching peak time data:",d),e.value.xAxis.data=[],e.value.series[0].data=[]}finally{f.value=!1}},k=async n=>{var i;const s=(i=n.value)==null?void 0:i.id;s!==void 0&&await t(s)};return O(async()=>{y.value=b.value[0],await t()}),U(w,()=>{var n;(n=l.value)!=null&&n.chart&&l.value.chart.setOption(e.value,!0)},{deep:!0}),(n,s)=>{const i=H,d=J,c=ne,r=Y;return A(),C("div",null,[f.value?(A(),C("div",re,[a("div",le,[a("div",ie,[u(i,{width:"5rem",height:".5rem"}),s[1]||(s[1]=a("div",{class:"skeleton-bar",style:{width:"80%"}},null,-1))])])])):B("",!0),u(r,null,{default:G(()=>[f.value?B("",!0):(A(),C("div",ce,[a("div",de,[a("div",ue,[a("div",me,[u(d,{modelValue:y.value,"onUpdate:modelValue":s[0]||(s[0]=M=>y.value=M),onChange:k,options:b.value,optionLabel:"name",placeholder:"اختر الشهر",class:"w-full md:w-14rem custum-dropdown"},null,8,["modelValue","options"])])])]),u(c,{ref_key:"chart",ref:l,class:"custom-chart",option:e.value,style:{height:"300px",width:"100%",display:"block"}},null,8,["option"])]))]),_:1})])}}},_e={class:"info-box-item cart-clients gap-5 flex-wrap mb-4"},fe={class:"layout-form chart_layout"},he={class:"layout-form chart_layout"},ve={class:"layout-form"},ye={__name:"salesDetails",setup(S){ae([L]);const{response:m}=P(),h=N(),p=o([]),{token:D}=V(R()),_=o(!1),x=o(!1),v=E(()=>({headers:{Authorization:`Bearer ${D.value}`}})),$=o("تحديد الجنس"),f=o({showAll:"الكل",males:"الذكور",females:"الإناث"}),y=E(()=>p.value?{labels:p.value.map(e=>({id:e.id,text:e.name,image:e.logo})),series:p.value.map(e=>Number(e.precentage.toFixed(2))),colors:{bar:"#013660",text:"#ffffff"}}:{labels:[],series:[],colors:{bar:"#f75c5c",text:"#ffffff"}}),l=o([]),w=async()=>{_.value=!0,await h.get("DropoutRate",v.value).then(e=>{m(e)=="success"&&(p.value=e.data.data,console.log(p.value,"HomeData")),_.value=!1}).catch(e=>{console.error(e)})},b=async()=>{_.value=!0;try{const e=await h.get("AbandonedCartRateForGender?GenderType=0",v.value);if(m(e)==="success"){const t=e.data.data;Array.isArray(t)?(l.value=t,console.log("Updated Source Data:",l.value)):console.error("demographicData is not an array:",t)}}catch(e){console.error("Error fetching demographic data:",e)}finally{_.value=!1}};return O(async()=>{await b(),await w()}),F(()=>{x.value=!0}),(e,t)=>{const k=T,n=pe,s=te,i=oe;return A(),C("div",null,[a("div",_e,[t[1]||(t[1]=a("div",{class:"d-flex gap-3 justify-content-center flex-grow-1 align-items-center"},[a("img",{src:se,alt:"User Icon"}),a("div",{class:"info-content"},[a("span",null,"إجمالي قيمة السلات المتروكة للمتجر:"),a("h2",null,"99000 ريال")])],-1)),u(k,{to:"/sales"},{default:G(()=>t[0]||(t[0]=[a("i",{class:"fas fa-chevron-right sales-icon"},null,-1)])),_:1})]),a("div",fe,[t[2]||(t[2]=a("h1",{class:"main-title bold text-center mb-5"},"متوسط حجم السلات المتروكة",-1)),u(n,{apiEndpoint:"AverageAbandonedCartSize"})]),a("div",he,[u(s,{"data-ready":g(x),"products-data":g(y)},null,8,["data-ready","products-data"])]),a("div",ve,[u(i,{"rental-names":g(f),"placeholder-text":g($),"source-data":g(l)},null,8,["rental-names","placeholder-text","source-data"])])])}}},Ge=q(ye,[["__scopeId","data-v-3e4968a7"]]);export{Ge as default};
