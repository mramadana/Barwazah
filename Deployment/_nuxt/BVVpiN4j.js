import{Z as o,r as u,$ as f,a0 as d,p as v,N as l,a1 as i,a2 as h,a3 as p}from"./CDjVABWN.js";function U(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):m(e,t,a)}function m(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:d(a)});const r=t.push(n.value,e);return v(n,c=>{r.patch(c)}),p()&&(l(()=>{r.dispose()}),i(()=>{s.value=!0}),h(()=>{s.value=!1})),r}export{U as u};
