import{a0 as t,a9 as n,o as s,c as l,a as r,ab as o,aa as a}from"./CaDz3XmI.js";var p=`
@layer primevue {
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .p-toolbar-group-start,
    .p-toolbar-group-center,
    .p-toolbar-group-end {
        display: flex;
        align-items: center;
    }

    .p-toolbar-group-left,
    .p-toolbar-group-right {
        display: flex;
        align-items: center;
    }
}
`,i={root:"p-toolbar p-component",start:"p-toolbar-group-start p-toolbar-group-left",center:"p-toolbar-group-center",end:"p-toolbar-group-end p-toolbar-group-right"},d=t.extend({name:"toolbar",css:p,classes:i}),b={name:"BaseToolbar",extends:n,props:{ariaLabelledby:{type:String,default:null}},style:d,provide:function(){return{$parentInstance:this}}},c={name:"Toolbar",extends:b},u=["aria-labelledby"];function g(e,m,v,y,f,$){return s(),l("div",a({class:e.cx("root"),role:"toolbar","aria-labelledby":e.ariaLabelledby},e.ptm("root"),{"data-pc-name":"toolbar"}),[r("div",a({class:e.cx("start")},e.ptm("start")),[o(e.$slots,"start")],16),r("div",a({class:e.cx("center")},e.ptm("center")),[o(e.$slots,"center")],16),r("div",a({class:e.cx("end")},e.ptm("end")),[o(e.$slots,"end")],16)],16,u)}c.render=g;export{c as default};
