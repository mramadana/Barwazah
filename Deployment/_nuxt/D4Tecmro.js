import{a0 as l,a9 as p,o as r,c as a,aa as n,ab as m,d,t as u,h as s,a as b}from"./CrJkl6Kt.js";var g=`
@layer primevue {
    .p-progressbar {
        position: relative;
        overflow: hidden;
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        border: 0 none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-determinate .p-progressbar-value-animate {
        transition: width 1s ease-in-out;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background-color: inherit;
        top: 0;
        left: 0;
        bottom: 0;
        will-change: left, right;
        -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background-color: inherit;
        top: 0;
        left: 0;
        bottom: 0;
        will-change: left, right;
        -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        -webkit-animation-delay: 1.15s;
        animation-delay: 1.15s;
    }

    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            left: -35%;
            right: 100%;
        }
        60% {
            left: 100%;
            right: -90%;
        }
        100% {
            left: 100%;
            right: -90%;
        }
    }
    @keyframes p-progressbar-indeterminate-anim {
        0% {
            left: -35%;
            right: 100%;
        }
        60% {
            left: 100%;
            right: -90%;
        }
        100% {
            left: 100%;
            right: -90%;
        }
    }

    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            left: -200%;
            right: 100%;
        }
        60% {
            left: 107%;
            right: -8%;
        }
        100% {
            left: 107%;
            right: -8%;
        }
    }
    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            left: -200%;
            right: 100%;
        }
        60% {
            left: 107%;
            right: -8%;
        }
        100% {
            left: 107%;
            right: -8%;
        }
    }
}
`,c={root:function(o){var t=o.instance;return["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}]},container:"p-progressbar-indeterminate-container",value:"p-progressbar-value p-progressbar-value-animate",label:"p-progressbar-label"},f=l.extend({name:"progressbar",css:g,classes:c}),v={name:"BaseProgressBar",extends:p,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:f,provide:function(){return{$parentInstance:this}}},h={name:"ProgressBar",extends:v,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},y=["aria-valuenow"];function k(e,o,t,w,B,i){return r(),a("div",n({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},e.ptm("root"),{"data-pc-name":"progressbar"}),[i.determinate?(r(),a("div",n({key:0,class:e.cx("value"),style:i.progressStyle},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(r(),a("div",n({key:0,class:e.cx("label")},e.ptm("label")),[m(e.$slots,"default",{},function(){return[d(u(e.value+"%"),1)]})],16)):s("",!0)],16)):s("",!0),i.indeterminate?(r(),a("div",n({key:1,class:e.cx("container")},e.ptm("container")),[b("div",n({class:e.cx("value")},e.ptm("value")),null,16)],16)):s("",!0)],16,y)}h.render=k;export{h as default};
