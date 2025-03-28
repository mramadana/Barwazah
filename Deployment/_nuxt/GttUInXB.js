import{ai as l,aN as c,ax as p,aO as u,aC as m,at as d,o as a,c as f,ar as r,x as v,ah as i,as as g,a as y,d as $}from"./D8P3QojN.js";var h=`
@layer primevue {
    .p-inline-message {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: top;
    }
    
    .p-inline-message-icon {
        flex-shrink: 0;
    }

    .p-inline-message-icon-only .p-inline-message-text {
        visibility: hidden;
        width: 0;
    }

    .p-fluid .p-inline-message {
        display: flex;
    }
}
`,x={root:function(n){var s=n.props,t=n.instance;return["p-inline-message p-component p-inline-message-"+s.severity,{"p-inline-message-icon-only":!t.$slots.default}]},icon:function(n){var s=n.props;return["p-inline-message-icon",s.icon]},text:"p-inline-message-text"},B=l.extend({name:"inlinemessage",css:h,classes:x}),k={name:"BaseInlineMessage",extends:d,props:{severity:{type:String,default:"error"},icon:{type:String,default:void 0}},style:B,provide:function(){return{$parentInstance:this}}},C={name:"InlineMessage",extends:k,timeout:null,data:function(){return{visible:!0}},mounted:function(){var n=this;this.sticky||setTimeout(function(){n.visible=!1},this.life)},computed:{iconComponent:function(){return{info:c,success:p,warn:u,error:m}[this.severity]}}};function S(e,n,s,t,I,o){return a(),f("div",i({role:"alert","aria-live":"assertive","aria-atomic":"true",class:e.cx("root")},e.ptm("root")),[r(e.$slots,"icon",{},function(){return[(a(),v(g(e.icon?"span":o.iconComponent),i({class:e.cx("icon")},e.ptm("icon")),null,16,["class"]))]}),y("span",i({class:e.cx("text")},e.ptm("text")),[r(e.$slots,"default",{},function(){return[$(" ")]})],16)],16)}C.render=S;export{C as default};
