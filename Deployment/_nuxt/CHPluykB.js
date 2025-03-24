import{aj as i,au as p,o as s,c as r,x as l,ai as a,at as c,g as o,as as u,a as g,t as d}from"./BGhcUSDw.js";var v=`
@layer primevue {
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .p-tag-icon,
    .p-tag-value,
    .p-tag-icon.pi {
        line-height: 1.5;
    }

    .p-tag.p-tag-rounded {
        border-radius: 10rem;
    }
}
`,m={root:function(t){var n=t.props;return["p-tag p-component",{"p-tag-info":n.severity==="info","p-tag-success":n.severity==="success","p-tag-warning":n.severity==="warning","p-tag-danger":n.severity==="danger","p-tag-rounded":n.rounded}]},icon:"p-tag-icon",value:"p-tag-value"},y=i.extend({name:"tag",css:v,classes:m}),f={name:"BaseTag",extends:p,props:{value:null,severity:null,rounded:Boolean,icon:String},style:y,provide:function(){return{$parentInstance:this}}},$={name:"Tag",extends:f};function B(e,t,n,k,S,h){return s(),r("span",a({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"tag"}),[e.$slots.icon?(s(),l(c(e.$slots.icon),a({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(s(),r("span",a({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):o("",!0),e.value||e.$slots.default?u(e.$slots,"default",{key:2},function(){return[g("span",a({class:e.cx("value")},e.ptm("value")),d(e.value),17)]}):o("",!0)],16)}$.render=B;export{$ as default};
