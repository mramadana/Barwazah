const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./B7GuJRMc.js","./Cb7c7zvG.js","./BGhcUSDw.js","./entry.B0b_3z4T.css"])))=>i.map(i=>d[i]);
import X from"./DJNix3lG.js";import{h as P,A as t2,B as e2,r as i,s as B,l as V,e as O,H as Z,o as u,c as v,a as t,b as x,g as f,u as s,_ as s2,J as o2,t as k,x as D,F as a2,C as n2}from"./BGhcUSDw.js";import{s as r2}from"./DJDYPqyP.js";import{i as T,a as U,b as W,c as i2,d as q,_ as J,u as l2,e as c2}from"./Cb7c7zvG.js";import{u as H}from"./Cy6-FToT.js";import{u as E,r as j}from"./DXutHP6I.js";import{i as d2}from"./6-Z3GeuQ.js";import{_ as u2}from"./3C680dnv.js";import{t as m2}from"./CPlzMQxn.js";import"./EicXGnO2.js";import"./CSD--ZUF.js";import"./BWMl8hyR.js";import"./BNAr4kL3.js";const p2=q(J),_2={key:0,class:"w-100",style:{height:"300px"}},h2={class:"d-flex align-items-center justify-content-center gap-4"},v2={class:"with_cun_select custom-select"},f2={class:"flex justify-content-center dropdown_card"},g2={__name:"yearLimit",async setup(z){let o,h;const L=E(),{response:A}=j(),{t:y}=P(),m=([o,h]=t2(()=>e2(()=>import("./B7GuJRMc.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),o=await o,h(),o);m.use([d2,T,U,W,i2]);const a=i(!1),p=i(!1),_=i(null),c=i([{name:"2020",id:2020},{name:"2021",id:2021},{name:"2022",id:2022},{name:"2023",id:2023},{name:"2024",id:2024},{name:"2025",id:2025}]),d=i(["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"]),r=i(null),{token:$}=B(H()),n=V(()=>({headers:{Authorization:`Bearer ${$.value}`}})),e=i({legend:{top:"5%",show:!1},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[],axisLabel:{interval:0,rotate:45}},yAxis:{type:"value",show:!1},series:[{name:y("Global.females"),type:"line",smooth:!0,symbol:"square",symbolSize:7,showSymbol:!0,lineStyle:{width:2,color:"#4681f4"},itemStyle:{color:"#013660"},areaStyle:{color:new m.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(70, 129, 244, 0.6)"},{offset:1,color:"rgba(70, 129, 244, 0.2)"}])},data:[]}]}),b=async()=>{_.value&&await S(_.value.id)},S=async g=>{try{const l=await L.get(`AverageMarketVisits?year=${g}`,n.value);if(A(l)=="success"){const w=l.data.data;e.value.xAxis.data=d.value,e.value.series[0].data=w.map(C=>Number(C.value)),await Z(),r.value&&r.value.chart&&r.value.chart.resize(),p.value=!0}}catch(l){console.error(l)}};return O(async()=>{a.value=!0;const g=new Date().getFullYear();_.value=c.value.find(l=>l.id===g),await Z(),S(g)}),(g,l)=>{const w=r2,C=p2;return a.value&&p.value?(u(),v("div",_2,[t("div",h2,[l[1]||(l[1]=t("label",{class:"label mb-0"},"اختر السنة",-1)),t("div",v2,[t("div",f2,[x(w,{modelValue:_.value,"onUpdate:modelValue":l[0]||(l[0]=M=>_.value=M),onChange:b,options:c.value,optionLabel:"name",placeholder:"اختر السنة",class:"w-full md:w-14rem custum-dropdown"},null,8,["modelValue","options"])])])]),x(C,{ref_key:"chart",ref:r,class:"custom-chart",option:e.value,style:{height:"100%",width:"100%",display:"block"}},null,8,["option"])])):f("",!0)}}},y2=q(J),w2={key:0,class:"w-100"},C2={__name:"Visitors",setup(z){l2([U,T,c2,W]);const o=i(!1),h=i(null),{token:L}=B(H()),A=E(),{response:y}=j(),m=i({data:[]}),a=V(()=>({headers:{Authorization:`Bearer ${L.value}`}})),p=V(()=>{var c,d;return{grid:{left:"5%",right:"5%",top:"10%",bottom:"10%",containLabel:!0},xAxis:{type:"category",data:((c=m.value.data)==null?void 0:c.map(r=>r.name))||[],axisLabel:{interval:0,rotate:-45}},yAxis:{type:"value",axisLabel:{formatter:"{value} %"},show:!1},tooltip:{trigger:"item",formatter:"{b}: {c}%"},series:[{data:((d=m.value.data)==null?void 0:d.map(r=>r.value))||[],type:"bar",barWidth:"50%",itemStyle:{color:r=>["#c1c1c1","#c1c1c1","#c1c1c1","#d9534f","#c1c1c1","#d9534f"][r.dataIndex],borderRadius:[5,5,0,0]},label:{show:!0,position:"top",formatter:"{c}%",fontSize:12,color:"#000"}}]}});return O(async()=>{var c;try{const d=await A.get("VisitorMovement",a.value);y(d)==="success"&&(m.value=d.data,console.log(m.value,"visitorsData"),(c=h.value)!=null&&c.chart&&h.value.chart.setOption(p.value))}catch(d){console.error(d)}finally{o.value=!0}}),(c,d)=>{const r=y2;return s(o)?(u(),v("div",w2,[x(r,{ref_key:"chart",ref:h,option:s(p),style:{height:"220px",width:"100%",display:"block"}},null,8,["option"])])):f("",!0)}}},k2="data:image/svg+xml,%3csvg%20width='39'%20height='75'%20viewBox='0%200%2039%2075'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.2754%2074.5V66.25V65.8173L23.7036%2065.7552C27.9297%2065.1424%2031.4515%2063.5809%2034.29%2061.083C37.0744%2058.6327%2038.5%2055.0365%2038.5%2050.2083C38.5%2046.3634%2037.3047%2042.986%2034.9109%2040.0559C32.5232%2037.1333%2028.9892%2034.9742%2024.2631%2033.6056C24.2628%2033.6055%2024.2624%2033.6054%2024.262%2033.6053L24.4011%2033.125C19.2567%2031.6667%2015.6417%2030.2778%2013.5561%2028.9583C11.4706%2027.6389%2010.4278%2025.8333%2010.4278%2023.5417C10.4278%2021.5278%2011.2273%2019.8438%2012.8262%2018.4896C14.4251%2017.1354%2016.754%2016.4583%2019.8128%2016.4583C22.4545%2016.4583%2024.5401%2017.0139%2026.0695%2018.125C27.4902%2019.1571%2028.611%2020.6686%2029.4318%2022.6595L23.2754%2074.5ZM23.2754%2074.5H15.9332V66.0417V65.6421L15.5435%2065.554C11.9358%2064.738%208.83239%2063.1774%206.22248%2060.875C3.72205%2058.6692%201.84427%2055.5694%200.609215%2051.5427L7.40674%2048.7899C8.46634%2051.9382%2010.0016%2054.3904%2012.0339%2056.1108C14.1952%2057.9405%2017.0129%2058.8333%2020.4385%2058.8333C23.3651%2058.8333%2025.8801%2058.173%2027.9579%2056.8258C30.1042%2055.4341%2031.1578%2053.2653%2031.1578%2050.4167C31.1578%2047.8721%2030.3521%2045.8033%2028.7043%2044.2694C27.8796%2043.5018%2026.5518%2042.7155%2024.7647%2041.9017C22.9686%2041.0838%2020.6725%2040.2221%2017.8817%2039.3161L17.8769%2039.3146C11.9242%2037.4477%207.93391%2035.2431%205.80263%2032.7482C3.66291%2030.2433%202.58556%2027.1847%202.58556%2023.5417C2.58556%2019.1457%204.00133%2015.7887%206.79044%2013.4006C9.65326%2010.9494%2012.5522%209.58024%2015.4896%209.24681L15.9332%209.19645V8.75V0.5H23.2754V8.75V9.17643L23.6965%209.24373C27.0957%209.78703%2029.8717%2011.021%2032.0489%2012.9282C34.127%2014.7486%2035.6744%2016.9446%2036.694%2019.5224L29.8908%2022.4612L23.2754%2074.5Z'%20stroke='%23ECF5FC'/%3e%3c/svg%3e",x2="data:image/svg+xml,%3csvg%20width='57'%20height='54'%20viewBox='0%200%2057%2054'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M49.9844%2023.875V44.4367C49.9844%2048.6267%2046.5398%2052%2042.2612%2052H14.7388C10.4601%2052%207.01562%2048.6267%207.01562%2044.4367V23.875'%20stroke='%23E5254A'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M53.6715%2015.6057L48.9625%202H8.03749L3.32855%2015.6057C2.66647%2017.5186%202.32812%2019.5336%202.32813%2021.5635C2.42494%2022.2688%202.7911%2022.9059%203.34598%2023.3345C3.90086%2023.7631%204.59901%2023.948%205.28692%2023.8488H51.7131C52.1016%2023.8488%2052.4864%2023.7703%2052.8454%2023.6178C53.2043%2023.4654%2053.5306%2023.2419%2053.8053%2022.9602C54.0801%2022.6785%2054.298%2022.344%2054.4467%2021.9759C54.5954%2021.6078%2054.6719%2021.2133%2054.6719%2020.8148C54.6303%2019.0327%2054.2919%2017.2709%2053.6715%2015.6057Z'%20stroke='%23E5254A'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M37.4844%202L42.2287%2016.3283C42.7081%2017.7762%2042.9531%2019.3011%2042.9531%2020.8374V23.875'%20stroke='%23E5254A'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M19.5156%202L14.7713%2016.3283C14.2919%2017.7762%2014.0469%2019.3011%2014.0469%2020.8374V23.875'%20stroke='%23E5254A'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M28.1094%202V23.875'%20stroke='%23E5254A'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",b2="data:image/svg+xml,%3csvg%20width='51'%20height='48'%20viewBox='0%200%2051%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M42.3808%2030.4706H8.61922C4.83899%2030.4706%201.77451%2033.6054%201.77451%2037.4724V38.9982C1.77451%2042.8652%204.83899%2046%208.61922%2046H42.3808C46.161%2046%2049.2255%2042.8652%2049.2255%2038.9982V37.4724C49.2255%2033.6054%2046.161%2030.4706%2042.3808%2030.4706Z'%20stroke='%23013660'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.5%2023.5686C31.456%2023.5686%2036.2843%2018.7403%2036.2843%2012.7843C36.2843%206.8283%2031.456%202%2025.5%202C19.544%202%2014.7157%206.8283%2014.7157%2012.7843C14.7157%2018.7403%2019.544%2023.5686%2025.5%2023.5686Z'%20stroke='%23013660'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",V2={class:"container"},L2={class:"home-section mb-3"},A2={class:"info-box"},$2={class:"info-box-item market-size"},S2={class:"info-content"},M2={class:"d-flex align-items-baseline gap-2"},D2={key:0},B2={class:"info-box-item store-clients"},H2={class:"info-content"},E2={class:"d-flex align-items-baseline gap-2"},j2={key:0},z2={class:"info-box-item market-clients"},G2={class:"info-content"},I2={class:"d-flex align-items-baseline gap-2"},R2={key:0},F2={class:"w-100"},N2={class:"layout-form chart_layout"},Y2={class:"row"},Z2={class:"col-12 col-lg-6 mb-4"},P2={class:"layout-form chart_layout"},O2={class:"main-title fw-normal text-center mb-3 main-cl"},T2={class:"desc text-center mb-0"},U2={class:"chart-text"},W2={class:"key-words"},q2={class:"col-12 col-lg-6 mb-4"},J2={class:"layout-form chart_layout"},K2={__name:"home",setup(z){P();const o=i(!0),{token:h,user:L,isLoggedIn:A}=B(H()),{response:y}=j();m2();const m=E(),a=i(null),p=i(null),_=V(()=>({headers:{Authorization:`Bearer ${h.value}`}})),c=i(!1),d=V(()=>{var n;return(n=a.value)!=null&&n.competitors?{labels:a.value.competitors.reverse().map(e=>({id:e.id,text:e.competitorName,image:e.logo})),series:a.value.competitors.reverse().map(e=>e.totalMarketVisitors),colors:{bar:"#f75c5c",text:"#ffffff"}}:{labels:[],series:[],colors:{bar:"#E5254A",text:"#ffffff"}}}),r=async()=>{o.value=!0,await m.get("GetHomeStaticData",_.value).then(n=>{y(n)=="success"&&(a.value=n.data.data,console.log(a.value,"HomeData")),o.value=!1}).catch(n=>{console.error(n)})},$=async()=>{o.value=!0,await m.get("GetStoreCustomers",_.value).then(n=>{y(n)=="success"&&(p.value=n.data.data),o.value=!1}).catch(n=>{console.error(n)})};return o2(async()=>{await r(),await $(),c.value=!0}),(n,e)=>{var w,C,M,G,I,R,F,N,Y;const b=X,S=g2,g=C2,l=u2;return u(),v("div",null,[t("main",null,[t("div",V2,[t("div",L2,[t("div",A2,[t("div",$2,[e[1]||(e[1]=t("img",{src:k2,alt:"Dollar Icon"},null,-1)),t("div",S2,[e[0]||(e[0]=t("span",null,"حجم السوق",-1)),t("div",M2,[!((w=s(a))!=null&&w.length)&&!s(o)?(u(),v("h2",D2,k((C=s(a))==null?void 0:C.marketSize),1)):f("",!0),(M=s(a))!=null&&M.length||s(o)?(u(),D(b,{key:1,class:"mt-2",width:"5rem",height:".5rem"})):f("",!0)])])]),t("div",B2,[e[3]||(e[3]=t("img",{src:x2,alt:"Store Icon"},null,-1)),t("div",H2,[e[2]||(e[2]=t("span",null,"عملاء المتجر",-1)),t("div",E2,[!((G=s(p))!=null&&G.length)&&!s(o)?(u(),v("h2",j2,k(s(p)),1)):f("",!0),(I=s(p))!=null&&I.length||s(o)?(u(),D(b,{key:1,class:"mt-2",width:"5rem",height:".5rem"})):f("",!0)])])]),t("div",z2,[e[5]||(e[5]=t("img",{src:b2,alt:"User Icon"},null,-1)),t("div",G2,[e[4]||(e[4]=t("span",null,"متوسط عملاء السوق",-1)),t("div",I2,[!((R=s(a))!=null&&R.length)&&!s(o)?(u(),v("h2",R2,k((F=s(a))==null?void 0:F.marketClientAverage),1)):f("",!0),(N=s(a))!=null&&N.length||s(o)?(u(),D(b,{key:1,class:"mt-2",width:"5rem",height:".5rem"})):f("",!0)])])])]),t("div",F2,[t("div",N2,[e[6]||(e[6]=t("h3",{class:"main-title fw-normal text-center mb-3 main-cl"},"متوسط زيارات السوق",-1)),x(S)])])]),t("div",Y2,[t("div",Z2,[t("div",P2,[t("h3",O2,k(n.$t("Global.distribution")),1),t("h3",T2,k(n.$t("Global.distribution_channels")),1),x(g),t("div",U2,[e[7]||(e[7]=t("span",{class:"hint"},"الكلمات التي يبحث عنها عملاءك",-1)),t("div",W2,[(u(!0),v(a2,null,n2((Y=s(a))==null?void 0:Y.keyWords,(K,Q)=>(u(),v("div",{class:"text",key:Q},k(K.word),1))),128))])])])]),t("div",q2,[t("div",J2,[e[8]||(e[8]=t("h3",{class:"main-title fw-normal text-center mb-3 main-cl"},"المنافسون",-1)),e[9]||(e[9]=t("h3",{class:"desc text-center mb-0"},"معدل أستحواذ منافسيك على حركة الزيارات من إجمالي حركة زيارات السوق",-1)),x(l,{"data-ready":s(c),"products-data":s(d),loading:s(o)},null,8,["data-ready","products-data","loading"])])])])])])])}}},ut=s2(K2,[["__scopeId","data-v-7006fb07"]]);export{ut as default};
