import{aj as s,au as r,o as u,c as i,ai as p}from"./BGhcUSDw.js";var o={root:function(t){var l=t.instance,a=t.props;return["p-inputtext p-component",{"p-filled":l.filled,"p-inputtext-sm":a.size==="small","p-inputtext-lg":a.size==="large"}]}},d=s.extend({name:"inputtext",classes:o}),m={name:"BaseInputText",extends:r,props:{modelValue:null,size:{type:String,default:null}},style:d,provide:function(){return{$parentInstance:this}}},c={name:"InputText",extends:m,emits:["update:modelValue"],methods:{getPTOptions:function(t){return this.ptm(t,{context:{filled:this.filled,disabled:this.$attrs.disabled||this.$attrs.disabled===""}})},onInput:function(t){this.$emit("update:modelValue",t.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0}}},f=["value"];function x(e,t,l,a,g,n){return u(),i("input",p({class:e.cx("root"),value:e.modelValue,onInput:t[0]||(t[0]=function(){return n.onInput&&n.onInput.apply(n,arguments)})},n.getPTOptions("root"),{"data-pc-name":"inputtext"}),null,16,f)}c.render=x;export{c as default};
