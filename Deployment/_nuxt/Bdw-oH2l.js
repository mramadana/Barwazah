const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CnY99yfh.js","./CkdGWEI1.js","./D8P3QojN.js","./entry.B0b_3z4T.css"])))=>i.map(i=>d[i]);
import{_ as w,A,h as C,r as c,l as k,m as O,e as V,H as B,y as R,o as D,c as E,a as o,b as u,w as I,B as T}from"./D8P3QojN.js";import{s as S}from"./DORCb3uh.js";import{c as j,i as G,a as L,g as P,d as $,_ as q}from"./CkdGWEI1.js";const M=$(q),W={class:"bar-chart position-relative"},z={class:"d-flex align-items-center justify-content-center gap-4"},F={class:"with_cun_select custom-select"},H={class:"flex justify-content-center dropdown_card"},U={__name:"Bar",props:{sourceData:{type:Array,required:!0},rentalNames:{type:Object,required:!0},placeholderText:{type:String}},async setup(m){let i,d;const _=([i,d]=A(()=>T(()=>import("./CnY99yfh.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),i=await i,d(),i),{t:l}=C();_.use([j,G,L,P]);const t=m,n=c(null),p=c(null),h=k(()=>[{name:t.rentalNames.showAll,id:0},{name:t.rentalNames.males,id:1},{name:t.rentalNames.females,id:2}]),s=c({animation:!0,animationDuration:1e3,animationEasing:"cubicOut",legend:{top:"90%",itemGap:50,selected:{[l(t.rentalNames.females)]:!0,[l(t.rentalNames.males)]:!0}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",axisLabel:{interval:0,rotate:45}},yAxis:{type:"value",show:!1},series:[{name:l(t.rentalNames.males),type:"bar",barGap:"0%",barWidth:20,itemStyle:{color:"#e5254a",borderRadius:[5,5,0,0]},showBackground:!0},{name:l(t.rentalNames.females),type:"bar",barGap:"0%",barWidth:20,itemStyle:{color:"#013660",borderRadius:[5,5,0,0]},showBackground:!0}]});O(()=>t.sourceData,a=>{var e;Array.isArray(a)&&(s.value.xAxis.data=a.map(r=>r.ageRange),s.value.series[0].data=a.map(r=>r.maleCount),s.value.series[1].data=a.map(r=>r.femaleCount),(e=n.value)!=null&&e.chart&&n.value.chart.setOption(s.value,!0))},{deep:!0,immediate:!0});function v(){var e;const a=(e=n.value)==null?void 0:e.chart;a&&(s.value.legend.selected[l(t.rentalNames.females)]=!0,s.value.legend.selected[l(t.rentalNames.males)]=!1,a.setOption(s.value,!0))}function f(){var e;const a=(e=n.value)==null?void 0:e.chart;a&&(s.value.legend.selected[l(t.rentalNames.males)]=!0,s.value.legend.selected[l(t.rentalNames.females)]=!1,a.setOption(s.value,!0))}function y(){var e;const a=(e=n.value)==null?void 0:e.chart;a&&(s.value.legend.selected[l(t.rentalNames.females)]=!0,s.value.legend.selected[l(t.rentalNames.males)]=!0,a.setOption(s.value,!0))}const g=a=>{const e=a.value;if(e)switch(e.id){case 0:y();break;case 1:v();break;case 2:f();break}};return V(async()=>{var a;await B(),Array.isArray(t.sourceData)&&(s.value.xAxis.data=t.sourceData.map(e=>e.ageRange),s.value.series[0].data=t.sourceData.map(e=>e.maleCount),s.value.series[1].data=t.sourceData.map(e=>e.femaleCount),(a=n.value)!=null&&a.chart&&n.value.chart.setOption(s.value,!0))}),(a,e)=>{const r=S,x=M,b=R("NExample");return D(),E("div",null,[o("div",W,[u(b,{id:"bar",title:"Bar Chart",desc:"SSR + client-side lazy loading",style:{height:"300px",width:"100%",display:"block"}},{default:I(()=>[o("div",z,[e[1]||(e[1]=o("label",{class:"label mb-0"},null,-1)),o("div",F,[o("div",H,[u(r,{modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=N=>p.value=N),onChange:g,options:h.value,optionLabel:"name",placeholder:m.placeholderText,class:"custum-dropdown"},null,8,["modelValue","options","placeholder"])])])]),u(x,{ref_key:"chart",ref:n,option:s.value},null,8,["option"])]),_:1})])])}}},X=w(U,[["__scopeId","data-v-02deb06e"]]);export{X as _};
