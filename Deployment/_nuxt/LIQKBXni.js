import{aj as d,au as p,o as t,c as a,ai as s,as as o,g as r,a as l}from"./BGhcUSDw.js";var i={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},n=d.extend({name:"card",classes:i}),c={name:"BaseCard",extends:p,style:n},m={name:"Card",extends:c};function u(e,$,v,y,b,f){return t(),a("div",s({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"card"}),[e.$slots.header?(t(),a("div",s({key:0,class:e.cx("header")},e.ptm("header")),[o(e.$slots,"header")],16)):r("",!0),l("div",s({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(t(),a("div",s({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(t(),a("div",s({key:0,class:e.cx("title")},e.ptm("title")),[o(e.$slots,"title")],16)):r("",!0),e.$slots.subtitle?(t(),a("div",s({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[o(e.$slots,"subtitle")],16)):r("",!0)],16)):r("",!0),l("div",s({class:e.cx("content")},e.ptm("content")),[o(e.$slots,"content")],16),e.$slots.footer?(t(),a("div",s({key:1,class:e.cx("footer")},e.ptm("footer")),[o(e.$slots,"footer")],16)):r("",!0)],16)],16)}m.render=u;export{m as default};
