const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DNjufjcF.js","./COk7MDye.js","./DwAYQtRF.js","./entry.B0b_3z4T.css"])))=>i.map(i=>d[i]);
import{_ as te,h as ae,s as se,l as W,A as oe,B as re,r as n,e as le,u as a,o as d,c as m,a as o,b as S,i as U,F as ne,C as ie,n as ce,t as y,w as ue,d as F,g as C}from"./DwAYQtRF.js";import{s as de}from"./Dm1NUbOX.js";import{i as me,a as pe,b as he,c as ye,d as _e,_ as fe}from"./COk7MDye.js";import ve from"./B1JjDTq1.js";import{u as be,r as ge}from"./DXutHP6I.js";import{u as we}from"./0ixJecxr.js";import{i as xe}from"./B2gg3C8B.js";import"./7gPfPZY0.js";import"./CrVJhx21.js";import"./ClJYkBEX.js";import"./BXKQeXJS.js";const ke=_e(fe),Ce={key:0,class:"w-100"},Se={class:"d-flex align-items-center justify-content-center gap-4 mb-4"},De={class:"with_cun_select custom-select"},Ee={class:"flex justify-content-center dropdown_card"},Re={class:"chart-container"},Fe={class:"year-labels"},Be=["onClick"],Ye={class:"year-text"},$e={class:"dialog-content"},Ae={class:"main-title main-cl lg normal text-center mb-4"},Ge={key:0,class:"mb-2 d-flex gap-2 justify-content-between main-cl mb-3"},Le={class:"value"},Ie={key:1,class:"mb-2 d-flex gap-2 justify-content-between main-cl mb-3"},Ve={class:"value"},ze={key:2,class:"mb-2 d-flex gap-2 justify-content-between main-cl mb-3"},je={class:"value"},Ne={__name:"businessGrowth",async setup(H){let _,f;ae();const c=be(),{response:v}=ge(),{token:q}=se(we()),b=W(()=>({headers:{Authorization:`Bearer ${q.value}`}})),D=([_,f]=oe(()=>re(()=>import("./DNjufjcF.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),_=await _,f(),_);D.use([xe,me,pe,he,ye]);const B=n(!1),Y=n(!1),x=n({marketData:[],storeDataData:[]}),u=n(null),r=n({}),i=n(null),$=n([{name:"عرض الكل",id:0},{name:"2018",id:2018},{name:"2019",id:2019},{name:"2020",id:2020},{name:"2021",id:2021},{name:"2022",id:2022},{name:"2023",id:2023},{name:"2024",id:2024},{name:"2025",id:2025}]),A=async(t=0)=>{try{Y.value=!0;const e=await c.get(`BusinessGrowthChart?year=${t}`,b.value);v(e)==="success"&&(x.value=e.data.data,J())}catch(e){console.error("Error fetching chart data:",e)}finally{Y.value=!1}},J=()=>{const t=x.value.marketData.map(e=>e.year);w.value.xAxis.data=t,w.value.series[0].data=x.value.marketData.map(e=>e.value),w.value.series[1].data=x.value.storeDataData.map(e=>e.value),u.value&&u.value.chart&&u.value.chart.setOption(w.value,!0)},K=async t=>{t&&(i.value=t,await A(t.id))},p=n(!1),g=n("");n({});const Q=async t=>{if(t.componentType==="xAxis"){const e=parseInt(t.value,10);g.value=e;try{const s=await c.get(`YearIndicators?year=${e}`,b.value);v(s)==="success"&&(r.value=s.data.data,p.value=!0)}catch(s){console.error("Error fetching year indicators:",s)}}else if(t&&t.name){const e=parseInt(t.name,10);g.value=e;try{const s=await c.get(`YearIndicators?year=${e}`,b.value);v(s)==="success"&&(r.value=s.data.data,p.value=!0)}catch(s){console.error("Error fetching year indicators:",s)}}},X=async t=>{const e=parseInt(t,10);g.value=e;try{const s=await c.get(`YearIndicators?year=${e}`,b.value);v(s)==="success"&&(r.value=s.data.data,p.value=!0)}catch(s){console.error("Error fetching year indicators:",s)}},w=n({legend:{bottom:"5%",show:!0,left:"center",icon:"circle",itemWidth:8,itemHeight:8,itemGap:25,textStyle:{color:"#2B3674",fontSize:12,fontFamily:"Cairo"}},tooltip:{trigger:"axis",axisPointer:{type:"line",lineStyle:{color:"#E2E8F0",width:1}},backgroundColor:"#fff",borderColor:"#E2E8F0",borderWidth:1,textStyle:{color:"#2B3674",fontFamily:"Cairo"}},grid:{left:"3%",right:"4%",bottom:"15%",top:"5%",containLabel:!0},xAxis:{type:"category",boundaryGap:!0,data:[],axisLine:{lineStyle:{color:"#E2E8F0"}},axisLabel:{interval:0,color:"#2B3674",fontFamily:"Cairo",fontSize:12,show:!0,clickable:!0,rich:{a:{color:"#2B3674",fontFamily:"Cairo",fontSize:12,cursor:"pointer",textDecoration:"underline"}},formatter:function(t){return"{a|"+t+"}"}}},yAxis:{type:"value",show:!1,splitLine:{lineStyle:{color:"#E2E8F0",type:"dashed"}},axisLabel:{color:"#2B3674",fontFamily:"Cairo",fontSize:12}},series:[{name:"اجمالي المبيعات للمتجر خلال السنة",type:"line",smooth:.5,symbol:"circle",symbolSize:6,showSymbol:!0,lineStyle:{width:2,color:"#2B3674"},itemStyle:{color:"#2B3674",borderWidth:2},areaStyle:{opacity:.3,color:new D.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(43, 54, 116, 0.3)"},{offset:1,color:"rgba(43, 54, 116, 0.05)"}])},data:[]},{name:"الحصة السوقية للمتجر من السوق",type:"line",smooth:.5,symbol:"circle",symbolSize:6,showSymbol:!0,lineStyle:{width:2,color:"#FF647C"},itemStyle:{color:"#FF647C",borderWidth:2},areaStyle:{opacity:.3,color:new D.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(255, 100, 124, 0.3)"},{offset:1,color:"rgba(255, 100, 124, 0.05)"}])},data:[]}]}),Z=W(()=>{if(!i.value||i.value.id===0)return Object.keys(E);const t=i.value.id,e=Object.keys(E).map(Number),s=Math.max(...e),k=[];for(let h=t;h<=s;h++)E[h]&&k.push(h.toString());return k}),E={2018:{sales:85,market:90,repeatRate:10},2019:{sales:91,market:110,repeatRate:15},2020:{sales:91,market:110,repeatRate:15},2023:{sales:102,market:140,repeatRate:5},2024:{sales:108,market:105,repeatRate:20},2025:{sales:115,market:150,repeatRate:18}},G=n(""),ee=async()=>{try{const t=await c.get("GetGrowthReport",b.value);v(t)==="success"&&(G.value=t.data.data)}catch(t){console.error("Error fetching growth report:",t)}};return le(async()=>{const t=$.value[0];i.value=t,await A(t.id),await ee(),B.value=!0,u.value&&u.value.chart&&u.value.chart.on("click",Q)}),(t,e)=>{const s=de,k=ke,h=ve;return a(B)?(d(),m("div",Ce,[o("div",Se,[o("div",De,[o("div",Ee,[S(s,{modelValue:a(i),"onUpdate:modelValue":e[0]||(e[0]=l=>U(i)?i.value=l:null),options:a($),optionLabel:"name",onChange:e[1]||(e[1]=l=>K(l.value)),placeholder:"اختر السنة",class:"w-full md:w-14rem custum-dropdown"},null,8,["modelValue","options"])])])]),o("div",Re,[S(k,{ref_key:"chart",ref:u,class:"custom-chart",option:a(w),style:{height:"300px",width:"100%",display:"block"}},null,8,["option"]),o("div",Fe,[(d(!0),m(ne,null,ie(a(Z),l=>(d(),m("div",{key:l,class:ce(["year-label",{active:a(g)===l}]),onClick:R=>X(l)},y(l),11,Be))),128))]),o("div",Ye,[e[3]||(e[3]=o("h3",{class:"main-title bold main-cl mb-3"},"تقرير نمو",-1)),o("h5",null,y(a(G)),1)])]),S(h,{visible:a(p),"onUpdate:visible":e[2]||(e[2]=l=>U(p)?p.value=l:null),class:"auth-daialog custum_dialog_width",modal:""},{default:ue(()=>{var l,R,L,I,V,z,j,N,P,M,O,T;return[o("div",$e,[o("h3",Ae,"مؤشرات سنة "+y(a(g)),1),o("ul",null,[((l=a(r))==null?void 0:l.salesYear)!==null&&((R=a(r))==null?void 0:R.salesYear)!=="0%"&&((L=a(r))==null?void 0:L.salesYear)!=="0ريال"?(d(),m("li",Ge,[e[4]||(e[4]=F("مبيعات السنة: ")),o("span",Le,y((I=a(r))==null?void 0:I.salesYear),1)])):C("",!0),((V=a(r))==null?void 0:V.storeMarketShare)!==null&&((z=a(r))==null?void 0:z.storeMarketShare)!=="0%"&&((j=a(r))==null?void 0:j.storeMarketShare)!=="0ريال"?(d(),m("li",Ie,[e[5]||(e[5]=F("الحصة السوقية للمتجر: ")),o("span",Ve,y((N=a(r))==null?void 0:N.storeMarketShare),1)])):C("",!0),((P=a(r))==null?void 0:P.repeatPurchaseRate)!==null&&((M=a(r))==null?void 0:M.repeatPurchaseRate)!=="0%"&&((O=a(r))==null?void 0:O.repeatPurchaseRate)!=="0ريال"?(d(),m("li",ze,[e[6]||(e[6]=F("نسبة تكرار الشراء: ")),o("span",je,y((T=a(r))==null?void 0:T.repeatPurchaseRate),1)])):C("",!0)])])]}),_:1},8,["visible"])])):C("",!0)}}},Pe=te(Ne,[["__scopeId","data-v-1bc16ccc"]]),Me={class:"container"},Oe={class:"layout-form chart_layout"},tt={__name:"businessGrowth",setup(H){return(_,f)=>{const c=Pe;return d(),m("div",Me,[o("div",Oe,[f[0]||(f[0]=o("h3",{class:"main-title fw-normal text-center mb-4"},"نمو الاعمال",-1)),S(c)])])}}};export{tt as default};
