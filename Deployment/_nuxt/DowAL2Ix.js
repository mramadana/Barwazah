import{au as u}from"./CMri8QdG.js";var e={},o={name:"BaseColumnGroup",extends:u,props:{type:{type:String,default:null}},style:e,provide:function(){return{$parentInstance:this}}},s={name:"ColumnGroup",extends:o,inject:["$columnGroups"],mounted:function(){var n;(n=this.$columnGroups)===null||n===void 0||n.add(this.$)},unmounted:function(){var n;(n=this.$columnGroups)===null||n===void 0||n.delete(this.$)},render:function(){return null}};export{s as default};
