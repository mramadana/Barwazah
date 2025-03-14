import B from"./C9nWBpPV.js";import{ah as L,aK as r,as as S,y as h,o as a,x as m,ax as p,w as s,aq as l,b as j,n as u,a as d,ag as f,c as b,F as v,ar as C,g as k,t as D}from"./D-VMeSxB.js";import F from"./DHrxfJzW.js";import"./B5x-OnBa.js";import"./Dek1o18V.js";var I={root:"p-confirm-dialog",icon:"p-confirm-dialog-icon",message:"p-confirm-dialog-message",rejectButton:function(t){var c=t.instance;return["p-confirm-dialog-reject",c.confirmation&&!c.confirmation.rejectClass?"p-button-text":null]},acceptButton:"p-confirm-dialog-accept"},O=L.extend({name:"confirmdialog",classes:I}),E={name:"BaseConfirmDialog",extends:S,props:{group:String,breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0}},style:O,provide:function(){return{$parentInstance:this}}},H={name:"ConfirmDialog",extends:E,confirmListener:null,closeListener:null,data:function(){return{visible:!1,confirmation:null}},mounted:function(){var t=this;this.confirmListener=function(c){c&&c.group===t.group&&(t.confirmation=c,t.confirmation.onShow&&t.confirmation.onShow(),t.visible=!0)},this.closeListener=function(){t.visible=!1,t.confirmation=null},r.on("confirm",this.confirmListener),r.on("close",this.closeListener)},beforeUnmount:function(){r.off("confirm",this.confirmListener),r.off("close",this.closeListener)},methods:{accept:function(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject:function(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onHide:function(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1},getCXOptions:function(t,c){return{contenxt:{icon:t,iconClass:c.class}}}},computed:{header:function(){return this.confirmation?this.confirmation.header:null},message:function(){return this.confirmation?this.confirmation.message:null},blockScroll:function(){return this.confirmation?this.confirmation.blockScroll:!0},position:function(){return this.confirmation?this.confirmation.position:null},acceptLabel:function(){return this.confirmation?this.confirmation.acceptLabel||this.$primevue.config.locale.accept:null},rejectLabel:function(){return this.confirmation?this.confirmation.rejectLabel||this.$primevue.config.locale.reject:null},acceptIcon:function(){return this.confirmation?this.confirmation.acceptIcon:null},rejectIcon:function(){return this.confirmation?this.confirmation.rejectIcon:null},autoFocusAccept:function(){return this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept"},autoFocusReject:function(){return this.confirmation.defaultFocus==="reject"},closeOnEscape:function(){return this.confirmation?this.confirmation.closeOnEscape:!0}},components:{CDialog:F,CDButton:B}};function w(e,t,c,A,i,n){var g=h("CDButton"),y=h("CDialog");return a(),m(y,{visible:i.visible,"onUpdate:visible":[t[2]||(t[2]=function(o){return i.visible=o}),n.onHide],role:"alertdialog",class:u(e.cx("root")),modal:!0,header:n.header,blockScroll:n.blockScroll,position:n.position,breakpoints:e.breakpoints,closeOnEscape:n.closeOnEscape,draggable:e.draggable,pt:e.pt,unstyled:e.unstyled},p({default:s(function(){return[e.$slots.container?k("",!0):(a(),b(v,{key:0},[e.$slots.message?(a(),m(C(e.$slots.message),{key:1,message:i.confirmation},null,8,["message"])):(a(),b(v,{key:0},[l(e.$slots,"icon",{},function(){return[e.$slots.icon?(a(),m(C(e.$slots.icon),{key:0,class:u(e.cx("icon"))},null,8,["class"])):i.confirmation.icon?(a(),b("span",f({key:1,class:[i.confirmation.icon,e.cx("icon")]},e.ptm("icon")),null,16)):k("",!0)]}),d("span",f({class:e.cx("message")},e.ptm("message")),D(n.message),17)],64))],64))]}),_:2},[e.$slots.container?{name:"container",fn:s(function(o){return[l(e.$slots,"container",{message:i.confirmation,onClose:o.onClose,onAccept:n.accept,onReject:n.reject,closeCallback:o.onclose,acceptCallback:n.accept,rejectCallback:n.reject})]}),key:"0"}:void 0,e.$slots.container?void 0:{name:"footer",fn:s(function(){return[j(g,{label:n.rejectLabel,class:u([e.cx("rejectButton"),i.confirmation.rejectClass]),onClick:t[0]||(t[0]=function(o){return n.reject()}),autofocus:n.autoFocusReject,unstyled:e.unstyled,pt:e.ptm("rejectButton"),"data-pc-name":"rejectbutton"},p({_:2},[n.rejectIcon||e.$slots.rejecticon?{name:"icon",fn:s(function(o){return[l(e.$slots,"rejecticon",{},function(){return[d("span",f({class:[n.rejectIcon,o.class]},e.ptm("rejectButton").icon,{"data-pc-name":"rejectbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1032,["label","class","autofocus","unstyled","pt"]),j(g,{label:n.acceptLabel,class:u([e.cx("acceptButton"),i.confirmation.acceptClass]),onClick:t[1]||(t[1]=function(o){return n.accept()}),autofocus:n.autoFocusAccept,unstyled:e.unstyled,pt:e.ptm("acceptButton"),"data-pc-name":"acceptbutton"},p({_:2},[n.acceptIcon||e.$slots.accepticon?{name:"icon",fn:s(function(o){return[l(e.$slots,"accepticon",{},function(){return[d("span",f({class:[n.acceptIcon,o.class]},e.ptm("acceptButton").icon,{"data-pc-name":"acceptbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1032,["label","class","autofocus","unstyled","pt"])]}),key:"1"}]),1032,["visible","class","header","blockScroll","position","breakpoints","closeOnEscape","draggable","onUpdate:visible","pt","unstyled"])}H.render=w;export{H as default};
