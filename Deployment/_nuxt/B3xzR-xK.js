import I from"./DmPp5oci.js";import{ag as k,aL as c,ap as H,H as b,o as i,c as f,B as d,x as m,au as _,w as v,F as g,ao as h,ac as y,aA as L,aB as A}from"./uThEF0pG.js";var C={},B={name:"BaseDynamicDialog",extends:H,props:{},style:C,provide:function(){return{$parentInstance:this}}},x={name:"DynamicDialog",extends:B,inheritAttrs:!1,data:function(){return{instanceMap:{}}},openListener:null,closeListener:null,currentInstance:null,mounted:function(){var n=this;this.openListener=function(u){var r=u.instance,s=k()+"_dynamic_dialog";r.visible=!0,r.key=s,n.instanceMap[s]=r},this.closeListener=function(u){var r=u.instance,s=u.params,a=r.key,o=n.instanceMap[a];o&&(o.visible=!1,o.options.onClose&&o.options.onClose({data:s,type:"config-close"}),n.currentInstance=o)},c.on("open",this.openListener),c.on("close",this.closeListener)},beforeUnmount:function(){c.off("open",this.openListener),c.off("close",this.closeListener)},methods:{onDialogHide:function(n){!this.currentInstance&&n.options.onClose&&n.options.onClose({type:"dialog-close"})},onDialogAfterHide:function(){this.currentInstance&&delete this.currentInstance,this.currentInstance=null},getTemplateItems:function(n){return Array.isArray(n)?n:[n]}},components:{DDialog:I}};function U(t,n,u,r,s,a){var o=b("DDialog");return i(!0),f(g,null,d(s.instanceMap,function(e,D){return i(),m(o,y({key:D,visible:e.visible,"onUpdate:visible":function(l){return e.visible=l},_instance:e},e.options.props,{onHide:function(l){return a.onDialogHide(e)},onAfterHide:a.onDialogAfterHide}),_({default:v(function(){return[(i(),m(h(e.content),L(A(e.options.emits)),null,16))]}),_:2},[e.options.templates&&e.options.templates.header?{name:"header",fn:v(function(){return[(i(!0),f(g,null,d(a.getTemplateItems(e.options.templates.header),function(p,l){return i(),m(h(p),y({key:l+"_header"},e.options.emits),null,16)}),128))]}),key:"0"}:void 0,e.options.templates&&e.options.templates.footer?{name:"footer",fn:v(function(){return[(i(!0),f(g,null,d(a.getTemplateItems(e.options.templates.footer),function(p,l){return i(),m(h(p),y({key:l+"_footer"},e.options.emits),null,16)}),128))]}),key:"1"}:void 0]),1040,["visible","onUpdate:visible","_instance","onHide","onAfterHide"])}),128)}x.render=U;export{x as default};
