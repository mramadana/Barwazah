import{ad as r,ap as e,o as t,c as n,an as s,ac as p}from"./uThEF0pG.js";var o=`
@layer primevue {
    .p-avatar-group .p-avatar + .p-avatar {
        margin-left: -1rem;
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }
}
`,c={root:"p-avatar-group p-component"},v=r.extend({name:"avatargroup",css:o,classes:c}),l={name:"BaseAvatarGroup",extends:e,style:v,provide:function(){return{$parentInstance:this}}},i={name:"AvatarGroup",extends:l};function u(a,d,m,g,$,f){return t(),n("div",p({class:a.cx("root")},a.ptm("root"),{"data-pc-name":"avatargroup"}),[s(a.$slots,"default")],16)}i.render=u;export{i as default};
