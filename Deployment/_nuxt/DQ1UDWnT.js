const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DNjufjcF.js","./COk7MDye.js","./DwAYQtRF.js","./entry.B0b_3z4T.css"])))=>i.map(i=>d[i]);
import $ from"./BO-phMkl.js";import{h as U,A as tt,B as et,r,s as H,l as C,e as K,H as N,o as u,c as v,a as t,b,g as f,u as s,_ as st,J as ot,t as A,x as E,F as at,C as nt,d as lt}from"./DwAYQtRF.js";import{s as rt}from"./Dm1NUbOX.js";import{i as Z,a as Y,b as Q,c as it,d as X,_ as J,u as ct,e as dt}from"./COk7MDye.js";import{u as j}from"./0ixJecxr.js";import{u as q,r as I}from"./DXutHP6I.js";import{i as ut}from"./B2gg3C8B.js";import{_ as mt}from"./Bn9BfMNl.js";import{t as pt}from"./BeJlh1sx.js";import"./7gPfPZY0.js";import"./CrVJhx21.js";import"./ClJYkBEX.js";import"./BXKQeXJS.js";const ht=X(J),_t={key:0,class:"w-100",style:{height:"300px"}},vt={class:"d-flex align-items-center justify-content-center gap-4"},ft={class:"with_cun_select custom-select"},gt={class:"flex justify-content-center dropdown_card"},At={__name:"yearLimit",async setup(T){let o,_;const S=q(),{response:V}=I(),{t:k}=U(),m=([o,_]=tt(()=>et(()=>import("./DNjufjcF.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),o=await o,_(),o);m.use([ut,Z,Y,Q,it]);const a=r(!1),p=r(!1),h=r(null),c=r([{name:"2024",id:2024},{name:"2025",id:2025}]),d=r(["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"]),l=r(null),{token:B}=H(j()),n=C(()=>({headers:{Authorization:`Bearer ${B.value}`}})),e=r({legend:{top:"5%",show:!1},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[],axisLabel:{interval:0,rotate:45}},yAxis:{type:"value",show:!1},series:[{name:k("Global.females"),type:"line",smooth:!0,symbol:"square",symbolSize:7,showSymbol:!0,lineStyle:{width:2,color:"#4681f4"},itemStyle:{color:"#013660"},areaStyle:{color:new m.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(70, 129, 244, 0.6)"},{offset:1,color:"rgba(70, 129, 244, 0.2)"}])},data:[]}]}),x=async()=>{h.value&&await L(h.value.id)},L=async g=>{try{const i=await S.get(`AverageMarketVisits?year=${g}`,n.value);if(V(i)=="success"){const w=i.data.data;e.value.xAxis.data=d.value,e.value.series[0].data=w.map(y=>Number(y.value)),await N(),l.value&&l.value.chart&&l.value.chart.resize(),p.value=!0}}catch(i){console.error(i)}};return K(async()=>{a.value=!0;const g=new Date().getFullYear();h.value=c.value.find(i=>i.id===g),await N(),L(g)}),(g,i)=>{const w=rt,y=ht;return a.value&&p.value?(u(),v("div",_t,[t("div",vt,[i[1]||(i[1]=t("label",{class:"label mb-0"},"اختر السنة",-1)),t("div",ft,[t("div",gt,[b(w,{modelValue:h.value,"onUpdate:modelValue":i[0]||(i[0]=D=>h.value=D),onChange:x,options:c.value,optionLabel:"name",placeholder:"اختر السنة",class:"w-full md:w-14rem custum-dropdown"},null,8,["modelValue","options"])])])]),b(y,{ref_key:"chart",ref:l,class:"custom-chart",option:e.value,style:{height:"100%",width:"100%",display:"block"}},null,8,["option"])])):f("",!0)}}},kt=X(J),wt={key:0,class:"w-100"},yt={__name:"Visitors",setup(T){ct([Y,Z,dt,Q]);const o=r(!1),_=r(null),{token:S}=H(j()),V=q(),{response:k}=I(),m=r({data:[]}),a=C(()=>({headers:{Authorization:`Bearer ${S.value}`}})),p=C(()=>{var c,d;return{grid:{left:"5%",right:"5%",top:"10%",bottom:"10%",containLabel:!0},xAxis:{type:"category",data:((c=m.value.data)==null?void 0:c.map(l=>l.name))||[],axisLabel:{interval:0,rotate:-45}},yAxis:{type:"value",axisLabel:{formatter:"{value} %"},show:!1},tooltip:{trigger:"item",formatter:"{b}: {c}%"},series:[{data:((d=m.value.data)==null?void 0:d.map(l=>l.value))||[],type:"bar",barWidth:"50%",itemStyle:{color:l=>["#c1c1c1","#c1c1c1","#c1c1c1","#d9534f","#c1c1c1","#d9534f"][l.dataIndex],borderRadius:[5,5,0,0]},label:{show:!0,position:"top",formatter:"{c}%",fontSize:12,color:"#000"}}]}});return K(async()=>{var c;try{const d=await V.get("VisitorMovement",a.value);k(d)==="success"&&(m.value=d.data,console.log(m.value,"visitorsData"),(c=_.value)!=null&&c.chart&&_.value.chart.setOption(p.value))}catch(d){console.error(d)}finally{o.value=!0}}),(c,d)=>{const l=kt;return s(o)?(u(),v("div",wt,[b(l,{ref_key:"chart",ref:_,option:s(p),style:{height:"220px",width:"100%",display:"block"}},null,8,["option"])])):f("",!0)}}},bt="data:image/png;base64,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",xt="data:image/svg+xml,%3csvg%20width='57'%20height='54'%20viewBox='0%200%2057%2054'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M49.9844%2023.875V44.4367C49.9844%2048.6267%2046.5398%2052%2042.2612%2052H14.7388C10.4601%2052%207.01562%2048.6267%207.01562%2044.4367V23.875'%20stroke='%23E5254A'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M53.6715%2015.6057L48.9625%202H8.03749L3.32855%2015.6057C2.66647%2017.5186%202.32812%2019.5336%202.32813%2021.5635C2.42494%2022.2688%202.7911%2022.9059%203.34598%2023.3345C3.90086%2023.7631%204.59901%2023.948%205.28692%2023.8488H51.7131C52.1016%2023.8488%2052.4864%2023.7703%2052.8454%2023.6178C53.2043%2023.4654%2053.5306%2023.2419%2053.8053%2022.9602C54.0801%2022.6785%2054.298%2022.344%2054.4467%2021.9759C54.5954%2021.6078%2054.6719%2021.2133%2054.6719%2020.8148C54.6303%2019.0327%2054.2919%2017.2709%2053.6715%2015.6057Z'%20stroke='%23E5254A'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M37.4844%202L42.2287%2016.3283C42.7081%2017.7762%2042.9531%2019.3011%2042.9531%2020.8374V23.875'%20stroke='%23E5254A'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M19.5156%202L14.7713%2016.3283C14.2919%2017.7762%2014.0469%2019.3011%2014.0469%2020.8374V23.875'%20stroke='%23E5254A'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M28.1094%202V23.875'%20stroke='%23E5254A'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Ct="data:image/svg+xml,%3csvg%20width='51'%20height='48'%20viewBox='0%200%2051%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M42.3808%2030.4706H8.61922C4.83899%2030.4706%201.77451%2033.6054%201.77451%2037.4724V38.9982C1.77451%2042.8652%204.83899%2046%208.61922%2046H42.3808C46.161%2046%2049.2255%2042.8652%2049.2255%2038.9982V37.4724C49.2255%2033.6054%2046.161%2030.4706%2042.3808%2030.4706Z'%20stroke='%23013660'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.5%2023.5686C31.456%2023.5686%2036.2843%2018.7403%2036.2843%2012.7843C36.2843%206.8283%2031.456%202%2025.5%202C19.544%202%2014.7157%206.8283%2014.7157%2012.7843C14.7157%2018.7403%2019.544%2023.5686%2025.5%2023.5686Z'%20stroke='%23013660'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",St={class:"container"},Vt={class:"home-section mb-3"},Bt={class:"info-box"},Lt={class:"info-box-item market-size"},Dt={class:"info-content"},Et={class:"d-flex align-items-baseline gap-2"},Ht={key:0},jt={class:"info-box-item store-clients"},qt={class:"info-content"},It={class:"d-flex align-items-baseline gap-2"},Tt={key:0},Ft={class:"info-box-item market-clients"},Mt={class:"info-content"},Ot={class:"d-flex align-items-baseline gap-2"},Rt={key:0},Wt={class:"w-100"},zt={class:"layout-form chart_layout"},Gt={class:"row"},Nt={class:"col-12 col-lg-6 mb-4"},Ut={class:"layout-form chart_layout"},Kt={class:"main-title fw-normal text-center mb-3 main-cl"},Zt={class:"desc text-center mb-0"},Yt={class:"chart-text"},Qt={class:"key-words"},Xt={class:"tooltip main-cl d-block"},Jt={class:"col-12 col-lg-6 mb-4"},Pt={class:"layout-form chart_layout"},$t={__name:"home",setup(T){U();const o=r(!0),{token:_,user:S,isLoggedIn:V}=H(j()),{response:k}=I();pt();const m=q(),a=r(null),p=r(null),h=C(()=>({headers:{Authorization:`Bearer ${_.value}`}})),c=r(!1),d=C(()=>{var n;return(n=a.value)!=null&&n.competitors?{labels:a.value.competitors.reverse().map(e=>({id:e.id,text:e.competitorName,image:e.logo})),series:a.value.competitors.reverse().map(e=>e.totalMarketVisitors),colors:{bar:"#E5254A",text:"#ffffff"}}:{labels:[],series:[],colors:{bar:"#E5254A",text:"#ffffff"}}}),l=async()=>{o.value=!0,await m.get("GetHomeStaticData",h.value).then(n=>{k(n)=="success"&&(a.value=n.data.data,console.log(a.value,"HomeData")),o.value=!1}).catch(n=>{console.error(n)})},B=async()=>{o.value=!0,await m.get("GetStoreCustomers",h.value).then(n=>{k(n)=="success"&&(p.value=n.data.data),o.value=!1}).catch(n=>{console.error(n)})};return ot(async()=>{await l(),await B(),c.value=!0}),(n,e)=>{var w,y,D,F,M,O,R,W,z;const x=$,L=At,g=yt,i=mt;return u(),v("div",null,[t("main",null,[t("div",St,[t("div",Vt,[t("div",Bt,[t("div",Lt,[e[1]||(e[1]=t("img",{src:bt,alt:"Dollar Icon"},null,-1)),t("div",Dt,[e[0]||(e[0]=t("span",null,"حجم السوق",-1)),t("div",Et,[!((w=s(a))!=null&&w.length)&&!s(o)?(u(),v("h2",Ht,A((y=s(a))==null?void 0:y.marketSize),1)):f("",!0),(D=s(a))!=null&&D.length||s(o)?(u(),E(x,{key:1,class:"mt-2",width:"5rem",height:".5rem"})):f("",!0)])])]),t("div",jt,[e[3]||(e[3]=t("img",{src:xt,alt:"Store Icon"},null,-1)),t("div",qt,[e[2]||(e[2]=t("span",null,"عملاء المتجر",-1)),t("div",It,[!((F=s(p))!=null&&F.length)&&!s(o)?(u(),v("h2",Tt,A(s(p)),1)):f("",!0),(M=s(p))!=null&&M.length||s(o)?(u(),E(x,{key:1,class:"mt-2",width:"5rem",height:".5rem"})):f("",!0)])])]),t("div",Ft,[e[5]||(e[5]=t("img",{src:Ct,alt:"User Icon"},null,-1)),t("div",Mt,[e[4]||(e[4]=t("span",null,"متوسط عملاء السوق",-1)),t("div",Ot,[!((O=s(a))!=null&&O.length)&&!s(o)?(u(),v("h2",Rt,A((R=s(a))==null?void 0:R.marketClientAverage),1)):f("",!0),(W=s(a))!=null&&W.length||s(o)?(u(),E(x,{key:1,class:"mt-2",width:"5rem",height:".5rem"})):f("",!0)])])])]),t("div",Wt,[t("div",zt,[e[6]||(e[6]=t("h3",{class:"main-title fw-normal text-center mb-3 main-cl"},"متوسط زيارات السوق",-1)),b(L)])])]),t("div",Gt,[t("div",Nt,[t("div",Ut,[t("h3",Kt,A(n.$t("Global.distribution")),1),t("h3",Zt,A(n.$t("Global.distribution_channels")),1),b(g),t("div",Yt,[e[7]||(e[7]=t("span",{class:"hint"},"الكلمات التي يبحث عنها عملاءك",-1)),t("div",Qt,[(u(!0),v(at,null,nt((z=s(a))==null?void 0:z.keyWords,(G,P)=>(u(),v("div",{class:"text position-relative",key:P},[lt(A(G.word)+" ",1),t("span",Xt,"Search rate: "+A(G.searchRate),1)]))),128))])])])]),t("div",Jt,[t("div",Pt,[e[8]||(e[8]=t("h3",{class:"main-title fw-normal text-center mb-3 main-cl"},"المنافسون",-1)),e[9]||(e[9]=t("h3",{class:"desc text-center mb-0"},"معدل أستحواذ منافسيك على حركة الزيارات من إجمالي حركة زيارات السوق",-1)),b(i,{"data-ready":s(c),"products-data":s(d),loading:s(o)},null,8,["data-ready","products-data","loading"])])])])])])])}}},pe=st($t,[["__scopeId","data-v-3e07b21e"]]);export{pe as default};
