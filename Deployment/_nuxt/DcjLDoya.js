const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BwQwSbVT.js","./BABRu3cH.js","./D7HON4Zz.js","./entry.B0b_3z4T.css"])))=>i.map(i=>d[i]);
import W from"./DDE4NRye.js";import{h as Y,A as J,B as K,r as n,s as D,l as L,e as Z,o as _,c as k,a as t,b as x,g as p,u as s,G as Q,t as f,x as M}from"./D7HON4Zz.js";import{s as X}from"./DV4OcH8R.js";import{i as O,a as F,b as T,c as t2,d as U,_ as q,u as e2,e as o2}from"./BABRu3cH.js";import{u as B,r as G}from"./DXutHP6I.js";import{u as H}from"./DM7daNnx.js";import{i as s2}from"./DLrcjctE.js";import{_ as a2}from"./Cvh-ObaV.js";import{t as n2}from"./DTiYDBj-.js";import"./BVxDG3Su.js";import"./Ds-FpX6a.js";import"./JaR2M7yU.js";import"./BX07nipz.js";const l2=U(q),i2={key:0,class:"w-100"},r2={class:"d-flex align-items-center justify-content-center gap-4"},c2={class:"with_cun_select custom-select"},d2={class:"flex justify-content-center dropdown_card"},u2={__name:"yearLimit",async setup(j){let a,h;const A=B(),{response:$}=G(),{t:g}=Y(),m=([a,h]=J(()=>K(()=>import("./BwQwSbVT.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),a=await a,h(),a);m.use([s2,O,F,T,t2]);const l=n(!1),r=n(null),y=n([{name:"2020",id:2020},{name:"2021",id:2021},{name:"2022",id:2022},{name:"2023",id:2023},{name:"2024",id:2024},{name:"2025",id:2025}]),d=n(["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"]),i=n(null),{token:u}=D(H()),V=L(()=>({headers:{Authorization:`Bearer ${u.value}`}})),e=n({legend:{top:"5%",show:!1},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[],axisLabel:{interval:0,rotate:45}},yAxis:{type:"value",show:!1},series:[{name:g("Global.females"),type:"line",smooth:!0,symbol:"square",symbolSize:7,showSymbol:!0,lineStyle:{width:2,color:"#4681f4"},itemStyle:{color:"#013660"},areaStyle:{color:new m.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(70, 129, 244, 0.6)"},{offset:1,color:"rgba(70, 129, 244, 0.2)"}])},data:[]}]}),o=async()=>{r.value&&await b(r.value.id)},b=async v=>{console.log(V.value,"res");try{const c=await A.get(`AverageMarketVisits?year=${v}`,V.value);if($(c)=="success"){const C=c.data.data;e.value.xAxis.data=d.value,e.value.series[0].data=C.map(w=>Number(w.value)),console.log(C,"monthlyData"),i.value&&i.value.chart?i.value.chart.setOption(e.value,!0):console.error("Chart instance is not ready.")}}catch(c){console.error(c)}};return Z(()=>{l.value=!0;const v=new Date().getFullYear();r.value=y.value.find(c=>c.id===v),b(v)}),(v,c)=>{const C=X,w=l2;return l.value?(_(),k("div",i2,[t("div",r2,[c[1]||(c[1]=t("label",{class:"label mb-0"},"اختر السنة",-1)),t("div",c2,[t("div",d2,[x(C,{modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=S=>r.value=S),onChange:o,options:y.value,optionLabel:"name",placeholder:"اختر السنة",class:"w-full md:w-14rem custum-dropdown"},null,8,["modelValue","options"])])])]),x(w,{ref_key:"chart",ref:i,class:"custom-chart",option:e.value,style:{height:"300px",width:"100%",display:"block"}},null,8,["option"])])):p("",!0)}}},m2=U(q),_2={key:0,class:"w-100"},h2={__name:"Visitors",setup(j){e2([F,O,o2,T]);const a=n(!1),h=n(null),{token:A}=D(H()),$=B(),{response:g}=G(),m=n({data:[]}),l=L(()=>({headers:{Authorization:`Bearer ${A.value}`}})),r=L(()=>{var d,i;return{grid:{left:"5%",right:"5%",top:"10%",bottom:"10%",containLabel:!0},xAxis:{type:"category",data:((d=m.value.data)==null?void 0:d.map(u=>u.name))||[],axisLabel:{interval:0,rotate:-45}},yAxis:{type:"value",axisLabel:{formatter:"{value} %"}},tooltip:{trigger:"item",formatter:"{b}: {c}%"},series:[{data:((i=m.value.data)==null?void 0:i.map(u=>u.value))||[],type:"bar",barWidth:"50%",itemStyle:{color:u=>["#c1c1c1","#c1c1c1","#c1c1c1","#d9534f","#c1c1c1","#d9534f"][u.dataIndex],borderRadius:[5,5,0,0]},label:{show:!0,position:"top",formatter:"{c}%",fontSize:12,color:"#000"}}]}});return Z(async()=>{var d;try{const i=await $.get("VisitorMovement",l.value);g(i)==="success"&&(m.value=i.data,console.log(m.value,"visitorsData"),(d=h.value)!=null&&d.chart&&h.value.chart.setOption(r.value))}catch(i){console.error(i)}finally{a.value=!0}}),(d,i)=>{const u=m2;return s(a)?(_(),k("div",_2,[x(u,{ref_key:"chart",ref:h,option:s(r),style:{height:"300px",width:"100%",display:"block"}},null,8,["option"])])):p("",!0)}}},p2="data:image/svg+xml,%3csvg%20width='39'%20height='75'%20viewBox='0%200%2039%2075'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.2754%2074.5V66.25V65.8173L23.7036%2065.7552C27.9297%2065.1424%2031.4515%2063.5809%2034.29%2061.083C37.0744%2058.6327%2038.5%2055.0365%2038.5%2050.2083C38.5%2046.3634%2037.3047%2042.986%2034.9109%2040.0559C32.5232%2037.1333%2028.9892%2034.9742%2024.2631%2033.6056C24.2628%2033.6055%2024.2624%2033.6054%2024.262%2033.6053L24.4011%2033.125C19.2567%2031.6667%2015.6417%2030.2778%2013.5561%2028.9583C11.4706%2027.6389%2010.4278%2025.8333%2010.4278%2023.5417C10.4278%2021.5278%2011.2273%2019.8438%2012.8262%2018.4896C14.4251%2017.1354%2016.754%2016.4583%2019.8128%2016.4583C22.4545%2016.4583%2024.5401%2017.0139%2026.0695%2018.125C27.4902%2019.1571%2028.611%2020.6686%2029.4318%2022.6595L23.2754%2074.5ZM23.2754%2074.5H15.9332V66.0417V65.6421L15.5435%2065.554C11.9358%2064.738%208.83239%2063.1774%206.22248%2060.875C3.72205%2058.6692%201.84427%2055.5694%200.609215%2051.5427L7.40674%2048.7899C8.46634%2051.9382%2010.0016%2054.3904%2012.0339%2056.1108C14.1952%2057.9405%2017.0129%2058.8333%2020.4385%2058.8333C23.3651%2058.8333%2025.8801%2058.173%2027.9579%2056.8258C30.1042%2055.4341%2031.1578%2053.2653%2031.1578%2050.4167C31.1578%2047.8721%2030.3521%2045.8033%2028.7043%2044.2694C27.8796%2043.5018%2026.5518%2042.7155%2024.7647%2041.9017C22.9686%2041.0838%2020.6725%2040.2221%2017.8817%2039.3161L17.8769%2039.3146C11.9242%2037.4477%207.93391%2035.2431%205.80263%2032.7482C3.66291%2030.2433%202.58556%2027.1847%202.58556%2023.5417C2.58556%2019.1457%204.00133%2015.7887%206.79044%2013.4006C9.65326%2010.9494%2012.5522%209.58024%2015.4896%209.24681L15.9332%209.19645V8.75V0.5H23.2754V8.75V9.17643L23.6965%209.24373C27.0957%209.78703%2029.8717%2011.021%2032.0489%2012.9282C34.127%2014.7486%2035.6744%2016.9446%2036.694%2019.5224L29.8908%2022.4612L23.2754%2074.5Z'%20stroke='%23ECF5FC'/%3e%3c/svg%3e",v2="data:image/svg+xml,%3csvg%20width='57'%20height='54'%20viewBox='0%200%2057%2054'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M49.9844%2023.875V44.4367C49.9844%2048.6267%2046.5398%2052%2042.2612%2052H14.7388C10.4601%2052%207.01562%2048.6267%207.01562%2044.4367V23.875'%20stroke='%23E5254A'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M53.6715%2015.6057L48.9625%202H8.03749L3.32855%2015.6057C2.66647%2017.5186%202.32812%2019.5336%202.32813%2021.5635C2.42494%2022.2688%202.7911%2022.9059%203.34598%2023.3345C3.90086%2023.7631%204.59901%2023.948%205.28692%2023.8488H51.7131C52.1016%2023.8488%2052.4864%2023.7703%2052.8454%2023.6178C53.2043%2023.4654%2053.5306%2023.2419%2053.8053%2022.9602C54.0801%2022.6785%2054.298%2022.344%2054.4467%2021.9759C54.5954%2021.6078%2054.6719%2021.2133%2054.6719%2020.8148C54.6303%2019.0327%2054.2919%2017.2709%2053.6715%2015.6057Z'%20stroke='%23E5254A'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M37.4844%202L42.2287%2016.3283C42.7081%2017.7762%2042.9531%2019.3011%2042.9531%2020.8374V23.875'%20stroke='%23E5254A'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M19.5156%202L14.7713%2016.3283C14.2919%2017.7762%2014.0469%2019.3011%2014.0469%2020.8374V23.875'%20stroke='%23E5254A'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M28.1094%202V23.875'%20stroke='%23E5254A'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",f2="data:image/svg+xml,%3csvg%20width='51'%20height='48'%20viewBox='0%200%2051%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M42.3808%2030.4706H8.61922C4.83899%2030.4706%201.77451%2033.6054%201.77451%2037.4724V38.9982C1.77451%2042.8652%204.83899%2046%208.61922%2046H42.3808C46.161%2046%2049.2255%2042.8652%2049.2255%2038.9982V37.4724C49.2255%2033.6054%2046.161%2030.4706%2042.3808%2030.4706Z'%20stroke='%23013660'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.5%2023.5686C31.456%2023.5686%2036.2843%2018.7403%2036.2843%2012.7843C36.2843%206.8283%2031.456%202%2025.5%202C19.544%202%2014.7157%206.8283%2014.7157%2012.7843C14.7157%2018.7403%2019.544%2023.5686%2025.5%2023.5686Z'%20stroke='%23013660'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",g2={class:"container"},y2={class:"row"},b2={class:"col-12 col-md-3 mb-4"},C2={class:"info-box"},w2={class:"info-box-item market-size"},k2={class:"info-content"},x2={class:"d-flex align-items-baseline gap-2"},V2={key:0},L2={class:"info-box-item store-clients"},A2={class:"info-content"},$2={class:"d-flex align-items-baseline gap-2"},S2={key:0},M2={class:"info-box-item market-clients"},D2={class:"info-content"},B2={class:"d-flex align-items-baseline gap-2"},G2={key:0},H2={class:"col-12 col-md-9 mb-4"},j2={class:"layout-form chart_layout"},E2={class:"col-12 col-md-6 mb-4"},z2={class:"layout-form chart_layout"},I2={class:"main-title bold text-center mb-3"},R2={class:"main-title sm text-center mb-0"},N2={class:"col-12 col-md-6 mb-4"},P2={class:"layout-form chart_layout"},Y2={class:"main-title bold text-center mb-3"},Z2={class:"main-title sm text-center mb-0"},st={__name:"home",setup(j){Y();const a=n(!0),{token:h,user:A,isLoggedIn:$}=D(H()),{response:g}=G();n2();const m=B(),l=n(null),r=n(null),y=L(()=>({headers:{Authorization:`Bearer ${h.value}`}})),d=n(!1),i=L(()=>{var e;return(e=l.value)!=null&&e.competitors?{labels:l.value.competitors.map(o=>({id:o.id,text:o.competitorName,image:o.logo})),series:l.value.competitors.map(o=>o.totalMarketVisitors),colors:{bar:"#f75c5c",text:"#ffffff"}}:{labels:[],series:[],colors:{bar:"#f75c5c",text:"#ffffff"}}});n([[40,50,60,70,65,75,85,80,90,95,110,115],[30,40,55,50,55,60,75,72,78,82,90,95]]),n([{name:"عرض الكل",id:0},{name:"يناير",id:1,days:31},{name:"فبراير",id:2,days:28},{name:"مارس",id:3,days:31},{name:"أبريل",id:4,days:30},{name:"مايو",id:5,days:31},{name:"يونيو",id:6,days:30},{name:"يوليو",id:7,days:31},{name:"أغسطس",id:8,days:31},{name:"سبتمبر",id:9,days:30},{name:"أكتوبر",id:10,days:31},{name:"نوفمبر",id:11,days:30},{name:"ديسمبر",id:12,days:31}]),n(["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"]),n([["label 1",43.3,85.8],["label 2",83.1,73.4],["label 3",86.4,65.2],["label 4",72.4,53.9],["label 5",43.3,85.8],["Ramadan",83.1,73.4]]);const u=async()=>{a.value=!0,await m.get("GetHomeStaticData",y.value).then(e=>{g(e)=="success"&&(l.value=e.data.data,console.log(l.value,"HomeData")),a.value=!1}).catch(e=>{console.error(e)})},V=async()=>{a.value=!0,await m.get("GetStoreCustomers",y.value).then(e=>{g(e)=="success"&&(r.value=e.data.data),a.value=!1}).catch(e=>{console.error(e)})};return Q(async()=>{await u(),await V(),d.value=!0}),(e,o)=>{var w,S,E,z,I,R,N,P;const b=W,v=u2,c=h2,C=a2;return _(),k("div",null,[t("main",null,[t("div",g2,[t("div",y2,[t("div",b2,[t("div",C2,[t("div",w2,[t("div",k2,[o[0]||(o[0]=t("span",null,"حجم السوق",-1)),t("div",x2,[!((w=s(l))!=null&&w.length)&&!s(a)?(_(),k("h2",V2,f((S=s(l))==null?void 0:S.marketSize),1)):p("",!0),(E=s(l))!=null&&E.length||s(a)?(_(),M(b,{key:1,class:"mt-2",width:"5rem",height:".5rem"})):p("",!0)])]),o[1]||(o[1]=t("img",{src:p2,alt:"Dollar Icon"},null,-1))]),t("div",L2,[t("div",A2,[o[2]||(o[2]=t("span",null,"عملاء المتجر",-1)),t("div",$2,[!((z=s(r))!=null&&z.length)&&!s(a)?(_(),k("h2",S2,f(s(r)),1)):p("",!0),(I=s(r))!=null&&I.length||s(a)?(_(),M(b,{key:1,class:"mt-2",width:"5rem",height:".5rem"})):p("",!0)])]),o[3]||(o[3]=t("img",{src:v2,alt:"Store Icon"},null,-1))]),t("div",M2,[t("div",D2,[o[4]||(o[4]=t("span",null,"متوسط عملاء السوق",-1)),t("div",B2,[!((R=s(l))!=null&&R.length)&&!s(a)?(_(),k("h2",G2,f((N=s(l))==null?void 0:N.marketClientAverage),1)):p("",!0),(P=s(l))!=null&&P.length||s(a)?(_(),M(b,{key:1,class:"mt-2",width:"5rem",height:".5rem"})):p("",!0)])]),o[5]||(o[5]=t("img",{src:f2,alt:"User Icon"},null,-1))])])]),t("div",H2,[t("div",j2,[o[6]||(o[6]=t("h3",{class:"main-title bold text-center mb-4"},"متوسط زيارات السوق",-1)),x(v)])]),t("div",E2,[t("div",z2,[t("h3",I2,f(e.$t("Global.distribution")),1),t("h3",R2,f(e.$t("Global.distribution_channels")),1),x(c)])]),t("div",N2,[t("div",P2,[t("h3",Y2,f(e.$t("Global.commercial_Products")),1),t("h3",Z2,f(e.$t("Global.highest_Sales")),1),x(C,{"data-ready":s(d),"products-data":s(i),loading:s(a)},null,8,["data-ready","products-data","loading"])])])])])])])}}};export{st as default};
