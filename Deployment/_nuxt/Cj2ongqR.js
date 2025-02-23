const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./jaSF8ao4.js","./Cp8lv7xU.js","./uThEF0pG.js"])))=>i.map(i=>d[i]);
import{_ as w,z as b,h as N,r as c,l as A,m as F,e as E,I as O,H as V,o as B,c as R,a as o,b as u,w as j,A as D}from"./uThEF0pG.js";import{s as I}from"./DtO6JiF_.js";import{c as L,i as M,a as S,g as T,d as G,_ as H}from"./Cp8lv7xU.js";const P=G(H),U={class:"bar-chart position-relative"},Z={class:"d-flex align-items-center justify-content-center gap-4"},$={class:"with_cun_select custom-select"},q={class:"flex justify-content-center dropdown_card"},z={__name:"Bar",props:{sourceData:{type:Array,required:!0},rentalNames:{type:Object,required:!0},placeholderText:{type:String}},async setup(d){let i,m;const C=([i,m]=b(()=>D(()=>import("./jaSF8ao4.js"),__vite__mapDeps([0,1,2]),import.meta.url)),i=await i,m(),i),{t:l}=N();C.use([L,M,S,T]);const a=d,r=c(null),p=c(null),h=A(()=>[{name:a.rentalNames.showAll,id:0},{name:a.rentalNames.males,id:1},{name:a.rentalNames.females,id:2}]),s=c({animation:!0,animationDuration:1e3,animationEasing:"cubicOut",legend:{top:"92%",itemGap:50,selected:{[l(a.rentalNames.females)]:!0,[l(a.rentalNames.males)]:!0}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",axisLabel:{interval:0,rotate:45}},yAxis:{type:"value",show:!1},series:[{name:l(a.rentalNames.males),type:"bar",barGap:"0%",barWidth:20,itemStyle:{color:"#e5254a",borderRadius:[5,5,0,0]},showBackground:!0},{name:l(a.rentalNames.females),type:"bar",barGap:"0%",barWidth:20,itemStyle:{color:"#013660",borderRadius:[5,5,0,0]},showBackground:!0}]});F(()=>a.sourceData,t=>{var e;Array.isArray(t)&&(s.value.xAxis.data=t.map(n=>n.ageRange),s.value.series[0].data=t.map(n=>n.maleCount),s.value.series[1].data=t.map(n=>n.femaleCount),(e=r.value)!=null&&e.chart&&r.value.chart.setOption(s.value,!0))},{deep:!0,immediate:!0});function _(){var e;const t=(e=r.value)==null?void 0:e.chart;t&&(s.value.legend.selected[l(a.rentalNames.females)]=!1,s.value.legend.selected[l(a.rentalNames.males)]=!0,t.setOption(s.value,!0))}function v(){var e;const t=(e=r.value)==null?void 0:e.chart;t&&(s.value.legend.selected[l(a.rentalNames.males)]=!1,s.value.legend.selected[l(a.rentalNames.females)]=!0,t.setOption(s.value,!0))}function f(){var e;const t=(e=r.value)==null?void 0:e.chart;t&&(s.value.legend.selected[l(a.rentalNames.females)]=!0,s.value.legend.selected[l(a.rentalNames.males)]=!0,t.setOption(s.value,!0))}const g=t=>{const e=t.value;if(e)switch(e.id){case 0:f();break;case 1:v();break;case 2:_();break}};return E(async()=>{var t;await O(),Array.isArray(a.sourceData)&&(s.value.xAxis.data=a.sourceData.map(e=>e.ageRange),s.value.series[0].data=a.sourceData.map(e=>e.maleCount),s.value.series[1].data=a.sourceData.map(e=>e.femaleCount),(t=r.value)!=null&&t.chart&&r.value.chart.setOption(s.value,!0))}),(t,e)=>{const n=I,k=P,y=V("NExample");return B(),R("div",null,[o("div",U,[u(y,{id:"bar",title:"Bar Chart",desc:"SSR + client-side lazy loading",style:{height:"300px",width:"100%",display:"block"}},{default:j(()=>[o("div",Z,[e[1]||(e[1]=o("label",{class:"label mb-0"},null,-1)),o("div",$,[o("div",q,[u(n,{modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=x=>p.value=x),onChange:g,options:h.value,optionLabel:"name",placeholder:d.placeholderText,class:"custum-dropdown"},null,8,["modelValue","options","placeholder"])])])]),u(k,{ref_key:"chart",ref:r,option:s.value},null,8,["option"])]),_:1})])])}}},Q=w(z,[["__scopeId","data-v-e9314bfe"]]),X="data:image/svg+xml,%3csvg%20width='90'%20height='88'%20viewBox='0%200%2090%2088'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M28.3258%2023.2449H79.3447C80.7369%2023.2449%2082.1105%2023.5858%2083.3592%2024.2413C84.6078%2024.8967%2085.6981%2025.8492%2086.5456%2027.0249C87.3931%2028.2007%2087.9752%2029.5682%2088.2469%2031.0217C88.5185%2032.4752%2088.4724%2033.9758%2088.1121%2035.4073L83.6202%2053.2521C82.7419%2056.7413%2080.8066%2059.8245%2078.1143%2062.0235C75.422%2064.2225%2072.1233%2065.4145%2068.7298%2065.4145H38.9407C35.5472%2065.4145%2032.2485%2064.2225%2029.5562%2062.0235C26.8639%2059.8245%2024.9285%2056.7413%2024.0502%2053.2521L19.5584%2035.4073C19.1981%2033.9758%2019.1519%2032.4752%2019.4235%2031.0217C19.6951%2029.5682%2020.2772%2028.2007%2021.1248%2027.0249C21.9723%2025.8492%2023.0625%2024.8967%2024.3112%2024.2413C25.5599%2023.5858%2026.9336%2023.2449%2028.3258%2023.2449Z'%20stroke='%23ECF5FC'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M21.1621%2041.7777L13.682%2012.0615C12.2046%206.19243%207.20811%202.11133%201.5%202.11133'%20stroke='%23ECF5FC'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M42.6199%2081.8802C42.6199%2082.4066%2042.5225%2082.9278%2042.3332%2083.4142C42.144%2083.9005%2041.8667%2084.3424%2041.517%2084.7146C41.1673%2085.0868%2040.7522%2085.3821%2040.2953%2085.5835C39.8384%2085.7849%2039.3488%2085.8886%2038.8543%2085.8886C38.3598%2085.8886%2037.8702%2085.7849%2037.4133%2085.5835C36.9564%2085.3821%2036.5413%2085.0868%2036.1916%2084.7146C35.8419%2084.3424%2035.5646%2083.9005%2035.3753%2083.4142C35.1861%2082.9278%2035.0886%2082.4066%2035.0886%2081.8802C35.0886%2081.3538%2035.1861%2080.8326%2035.3753%2080.3463C35.5646%2079.86%2035.8419%2079.4181%2036.1916%2079.0459C36.5413%2078.6736%2036.9564%2078.3784%2037.4133%2078.177C37.8702%2077.9755%2038.3598%2077.8718%2038.8543%2077.8718C39.3488%2077.8718%2039.8384%2077.9755%2040.2953%2078.177C40.7522%2078.3784%2041.1673%2078.6736%2041.517%2079.0459C41.8667%2079.4181%2042.144%2079.86%2042.3332%2080.3463C42.5225%2080.8326%2042.6199%2081.3538%2042.6199%2081.8802Z'%20stroke='%23ECF5FC'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M70.2618%2081.8802C70.2618%2082.4066%2070.1645%2082.9278%2069.9752%2083.4142C69.786%2083.9005%2069.5085%2084.3424%2069.1588%2084.7146C68.8091%2085.0868%2068.3941%2085.3821%2067.9373%2085.5835C67.4804%2085.7849%2066.9906%2085.8886%2066.4961%2085.8886C66.0016%2085.8886%2065.512%2085.7849%2065.0551%2085.5835C64.5982%2085.3821%2064.1831%2085.0868%2063.8334%2084.7146C63.4837%2084.3424%2063.2064%2083.9005%2063.0172%2083.4142C62.8279%2082.9278%2062.7305%2082.4066%2062.7305%2081.8802C62.7305%2081.3538%2062.8279%2080.8326%2063.0172%2080.3463C63.2064%2079.86%2063.4837%2079.4181%2063.8334%2079.0459C64.1831%2078.6736%2064.5982%2078.3784%2065.0551%2078.177C65.512%2077.9755%2066.0016%2077.8718%2066.4961%2077.8718C66.9906%2077.8718%2067.4804%2077.9755%2067.9373%2078.177C68.3941%2078.3784%2068.8091%2078.6736%2069.1588%2079.0459C69.5085%2079.4181%2069.786%2079.86%2069.9752%2080.3463C70.1645%2080.8326%2070.2618%2081.3538%2070.2618%2081.8802Z'%20stroke='%23ECF5FC'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3ccircle%20cx='45.0089'%20cy='39.4178'%20r='1.56401'%20stroke='%23ECF5FC'%20stroke-width='3'/%3e%3ccircle%20cx='62.1673'%20cy='39.4178'%20r='1.56401'%20stroke='%23ECF5FC'%20stroke-width='3'/%3e%3cmask%20id='mask0_1093_3777'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='24'%20y='3'%20width='60'%20height='60'%3e%3ccircle%20cx='54.2009'%20cy='32.6771'%20r='29.4145'%20fill='%23E5254A'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1093_3777)'%3e%3ccircle%20cx='54.2009'%20cy='78.0243'%20r='27.9145'%20stroke='%23ECF5FC'%20stroke-width='3'/%3e%3c/g%3e%3c/svg%3e";export{Q as _,X as a};
