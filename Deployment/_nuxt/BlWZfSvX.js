import{a0 as r,a9 as e,o as t,c as n,ab as s,aa as o}from"./DbmvQK5j.js";var p=`
@layer primevue {
    .p-avatar-group .p-avatar + .p-avatar {
        margin-left: -1rem;
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }
}
`,c={root:"p-avatar-group p-component"},v=r.extend({name:"avatargroup",css:p,classes:c}),l={name:"BaseAvatarGroup",extends:e,style:v,provide:function(){return{$parentInstance:this}}},i={name:"AvatarGroup",extends:l};function u(a,d,m,g,$,f){return t(),n("div",o({class:a.cx("root")},a.ptm("root"),{"data-pc-name":"avatargroup"}),[s(a.$slots,"default")],16)}i.render=u;export{i as default};
