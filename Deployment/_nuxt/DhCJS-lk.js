import v from"./DCLnMaaI.js";import{aj as b,aq as h,ao as g,au as P,y as O,D as w,j as B,o as a,c as p,ai as i,G as S,as as c,x as u,w as j,at as I,g as $}from"./BGhcUSDw.js";import"./CTtq6WRT.js";import"./CSD--ZUF.js";var D=`
@layer primevue {
    .p-inplace .p-inplace-display {
        display: inline;
        cursor: pointer;
    }

    .p-inplace .p-inplace-content {
        display: inline;
    }

    .p-fluid .p-inplace.p-inplace-closable .p-inplace-content {
        display: flex;
    }

    .p-fluid .p-inplace.p-inplace-closable .p-inplace-content > .p-inputtext {
        flex: 1 1 auto;
        width: 1%;
    }
}
`,C={root:function(t){var n=t.props;return["p-inplace p-component",{"p-inplace-closable":n.closable}]},display:function(t){var n=t.props;return["p-inplace-display",{"p-disabled":n.disabled}]},content:"p-inplace-content"},k=b.extend({name:"inplace",css:D,classes:C}),T={name:"BaseInplace",extends:P,props:{closable:{type:Boolean,default:!1},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},closeIcon:{type:String,default:void 0},displayProps:{type:null,default:null},closeButtonProps:{type:null,default:null}},style:k,provide:function(){return{$parentInstance:this}}},E={name:"Inplace",extends:T,emits:["open","close","update:active"],data:function(){return{d_active:this.active}},watch:{active:function(t){this.d_active=t}},methods:{open:function(t){this.disabled||(this.$emit("open",t),this.d_active=!0,this.$emit("update:active",!0))},close:function(t){var n=this;this.$emit("close",t),this.d_active=!1,this.$emit("update:active",!1),setTimeout(function(){n.$refs.display.focus()},0)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{IPButton:v,TimesIcon:h},directives:{focustrap:g}};function s(e){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(e)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(o){K(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function K(e,t,n){return t=A(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){var t=L(e,"string");return s(t)=="symbol"?t:String(t)}function L(e,t){if(s(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(s(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var N=["tabindex"];function q(e,t,n,o,l,r){var y=O("IPButton"),m=w("focustrap");return B((a(),p("div",i({class:e.cx("root"),"aria-live":"polite"},e.ptm("root"),{"data-pc-name":"inplace"}),[l.d_active?(a(),p("div",i({key:1,class:e.cx("content")},e.ptm("content")),[c(e.$slots,"content"),e.closable?(a(),u(y,i({key:0,"aria-label":r.closeAriaLabel,onClick:r.close,unstyled:e.unstyled,pt:e.ptm("closeButton")},e.closeButtonProps),{icon:j(function(){return[c(e.$slots,"closeicon",{},function(){return[(a(),u(I(e.closeIcon?"span":"TimesIcon"),i({class:e.closeIcon},e.ptm("closeButton").icon,{"data-pc-section":"closebuttonicon"}),null,16,["class"]))]})]}),_:3},16,["aria-label","onClick","unstyled","pt"])):$("",!0)],16)):(a(),p("div",i({key:0,ref:"display",class:e.cx("display"),tabindex:e.$attrs.tabindex||"0",role:"button",onClick:t[0]||(t[0]=function(){return r.open&&r.open.apply(r,arguments)}),onKeydown:t[1]||(t[1]=S(function(){return r.open&&r.open.apply(r,arguments)},["enter"]))},f(f({},e.displayProps),e.ptm("display"))),[c(e.$slots,"display")],16,N))],16)),[[m]])}E.render=q;export{E as default};
