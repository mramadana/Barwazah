import I from"./10PiuGK_.js";import{am as k,aM as c,au as b,y as H,o as i,c as f,C as d,x as m,az as _,w as v,F as g,at as y,ai as h,aE as C,aF as L}from"./4aL2WHGa.js";var A={},x={name:"BaseDynamicDialog",extends:b,props:{},style:A,provide:function(){return{$parentInstance:this}}},U={name:"DynamicDialog",extends:x,inheritAttrs:!1,data:function(){return{instanceMap:{}}},openListener:null,closeListener:null,currentInstance:null,mounted:function(){var n=this;this.openListener=function(u){var r=u.instance,s=k()+"_dynamic_dialog";r.visible=!0,r.key=s,n.instanceMap[s]=r},this.closeListener=function(u){var r=u.instance,s=u.params,a=r.key,o=n.instanceMap[a];o&&(o.visible=!1,o.options.onClose&&o.options.onClose({data:s,type:"config-close"}),n.currentInstance=o)},c.on("open",this.openListener),c.on("close",this.closeListener)},beforeUnmount:function(){c.off("open",this.openListener),c.off("close",this.closeListener)},methods:{onDialogHide:function(n){!this.currentInstance&&n.options.onClose&&n.options.onClose({type:"dialog-close"})},onDialogAfterHide:function(){this.currentInstance&&delete this.currentInstance,this.currentInstance=null},getTemplateItems:function(n){return Array.isArray(n)?n:[n]}},components:{DDialog:I}};function B(t,n,u,r,s,a){var o=H("DDialog");return i(!0),f(g,null,d(s.instanceMap,function(e,D){return i(),m(o,h({key:D,visible:e.visible,"onUpdate:visible":function(l){return e.visible=l},_instance:e},e.options.props,{onHide:function(l){return a.onDialogHide(e)},onAfterHide:a.onDialogAfterHide}),_({default:v(function(){return[(i(),m(y(e.content),C(L(e.options.emits)),null,16))]}),_:2},[e.options.templates&&e.options.templates.header?{name:"header",fn:v(function(){return[(i(!0),f(g,null,d(a.getTemplateItems(e.options.templates.header),function(p,l){return i(),m(y(p),h({key:l+"_header"},e.options.emits),null,16)}),128))]}),key:"0"}:void 0,e.options.templates&&e.options.templates.footer?{name:"footer",fn:v(function(){return[(i(!0),f(g,null,d(a.getTemplateItems(e.options.templates.footer),function(p,l){return i(),m(y(p),h({key:l+"_footer"},e.options.emits),null,16)}),128))]}),key:"1"}:void 0]),1040,["visible","onUpdate:visible","_instance","onHide","onAfterHide"])}),128)}U.render=B;export{U as default};
