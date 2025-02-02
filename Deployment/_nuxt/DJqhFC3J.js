import{s as H}from"./DozDiGn6.js";import{s as D}from"./GeIhuEdx.js";import{a4 as W,ak as z,a6 as j,aa as y,an as q,ac as G,H as k,ag as J,o as c,c as p,a as v,k as F,a5 as u,F as C,y as h,n as m,aj as g,w as Q,f as K,h as X,d as Y,t as Z,g as L,ai as M,q as _,b as $}from"./CDjVABWN.js";import ee from"./C2Nl7LGx.js";import{s as te}from"./vdJJGTyi.js";import{s as ne}from"./B6xVwKhs.js";import{s as re}from"./D2JVgoVN.js";var ie=`
@layer primevue {
    .p-tree-container {
        margin: 0;
        padding: 0;
        list-style-type: none;
        overflow: auto;
    }

    .p-treenode-children {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-tree-wrapper {
        overflow: auto;
    }

    .p-treenode-selectable {
        cursor: pointer;
        user-select: none;
    }

    .p-tree-toggler {
        cursor: pointer;
        user-select: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        flex-shrink: 0;
    }

    .p-treenode-leaf > .p-treenode-content .p-tree-toggler {
        visibility: hidden;
    }

    .p-treenode-content {
        display: flex;
        align-items: center;
    }

    .p-tree-filter {
        width: 100%;
    }

    .p-tree-filter-container {
        position: relative;
        display: block;
        width: 100%;
    }

    .p-tree-filter-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
    }

    .p-tree-loading {
        position: relative;
        min-height: 4rem;
    }

    .p-tree .p-tree-loading-overlay {
        position: absolute;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-tree-flex-scrollable {
        display: flex;
        flex: 1;
        height: 100%;
        flex-direction: column;
    }

    .p-tree-flex-scrollable .p-tree-wrapper {
        flex: 1;
    }
}
`,le={root:function(e){var n=e.props;return["p-tree p-component",{"p-tree-selectable":n.selectionMode!=null,"p-tree-loading":n.loading,"p-tree-flex-scrollable":n.scrollHeight==="flex"}]},loadingOverlay:"p-tree-loading-overlay p-component-overlay",loadingIcon:"p-tree-loading-icon",filterContainer:"p-tree-filter-container",input:"p-tree-filter p-inputtext p-component",searchIcon:"p-tree-filter-icon",wrapper:"p-tree-wrapper",container:"p-tree-container",node:function(e){var n=e.instance;return["p-treenode",{"p-treenode-leaf":n.leaf}]},content:function(e){var n=e.instance;return["p-treenode-content",n.node.styleClass,{"p-treenode-selectable":n.selectable,"p-highlight":n.checkboxMode&&n.$parentInstance.highlightOnSelect?n.checked:n.selected}]},toggler:"p-tree-toggler p-link",togglerIcon:"p-tree-toggler-icon",nodeTogglerIcon:"p-tree-node-toggler-icon",nodeCheckbox:function(e){var n=e.instance;return[{"p-indeterminate":n.partialChecked}]},nodeIcon:"p-treenode-icon",label:"p-treenode-label",subgroup:"p-treenode-children"},oe=W.extend({name:"tree",css:ie,classes:le}),ae={name:"BaseTree",extends:j,props:{value:{type:null,default:null},expandedKeys:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},metaKeySelection:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},loadingMode:{type:String,default:"mask"},filter:{type:Boolean,default:!1},filterBy:{type:String,default:"label"},filterMode:{type:String,default:"lenient"},filterPlaceholder:{type:String,default:null},filterLocale:{type:String,default:void 0},highlightOnSelect:{type:Boolean,default:!1},scrollHeight:{type:String,default:null},level:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:oe,provide:function(){return{$parentInstance:this}}};function x(t){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(t)}function O(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=V(t))||e){n&&(t=n);var r=0,l=function(){};return{s:l,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(s){throw s},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,o=!1,d;return{s:function(){n=n.call(t)},n:function(){var s=n.next();return i=s.done,s},e:function(s){o=!0,d=s},f:function(){try{!i&&n.return!=null&&n.return()}finally{if(o)throw d}}}}function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?A(Object(n),!0).forEach(function(r){se(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function se(t,e,n){return e=ce(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ce(t){var e=de(t,"string");return x(e)=="symbol"?e:String(e)}function de(t,e){if(x(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(x(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function S(t){return he(t)||fe(t)||V(t)||ue()}function ue(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V(t,e){if(t){if(typeof t=="string")return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(t,e)}}function fe(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function he(t){if(Array.isArray(t))return I(t)}function I(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var R={name:"TreeNode",hostName:"Tree",extends:j,emits:["node-toggle","node-click","checkbox-change"],props:{node:{type:null,default:null},expandedKeys:{type:null,default:null},loadingMode:{type:String,default:"mask"},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},templates:{type:null,default:null},level:{type:Number,default:null},index:null},nodeTouched:!1,toggleClicked:!1,mounted:function(){this.setAllNodesTabIndexes()},methods:{toggle:function(){this.$emit("node-toggle",this.node),this.toggleClicked=!0},label:function(e){return typeof e.label=="function"?e.label():e.label},onChildNodeToggle:function(e){this.$emit("node-toggle",e)},getPTOptions:function(e){return this.ptm(e,{context:{index:this.index,expanded:this.expanded,selected:this.selected,checked:this.checked,leaf:this.leaf}})},onClick:function(e){if(this.toggleClicked||y.getAttribute(e.target,'[data-pc-section="toggler"]')||y.getAttribute(e.target.parentElement,'[data-pc-section="toggler"]')){this.toggleClicked=!1;return}this.isCheckboxSelectionMode()?this.toggleCheckbox():this.$emit("node-click",{originalEvent:e,nodeTouched:this.nodeTouched,node:this.node}),this.nodeTouched=!1},onChildNodeClick:function(e){this.$emit("node-click",e)},onTouchEnd:function(){this.nodeTouched=!0},onKeyDown:function(e){if(this.isSameNode(e))switch(e.code){case"Tab":this.onTabKey(e);break;case"ArrowDown":this.onArrowDown(e);break;case"ArrowUp":this.onArrowUp(e);break;case"ArrowRight":this.onArrowRight(e);break;case"ArrowLeft":this.onArrowLeft(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowDown:function(e){var n=e.target.getAttribute("data-pc-section")==="toggler"?e.target.closest('[role="treeitem"]'):e.target,r=n.children[1];if(r)this.focusRowChange(n,r.children[0]);else if(n.nextElementSibling)this.focusRowChange(n,n.nextElementSibling);else{var l=this.findNextSiblingOfAncestor(n);l&&this.focusRowChange(n,l)}e.preventDefault()},onArrowUp:function(e){var n=e.target;if(n.previousElementSibling)this.focusRowChange(n,n.previousElementSibling,this.findLastVisibleDescendant(n.previousElementSibling));else{var r=this.getParentNodeElement(n);r&&this.focusRowChange(n,r)}e.preventDefault()},onArrowRight:function(e){var n=this;this.leaf||this.expanded||(e.currentTarget.tabIndex=-1,this.$emit("node-toggle",this.node),this.$nextTick(function(){n.onArrowDown(e)}))},onArrowLeft:function(e){var n=y.findSingle(e.currentTarget,'[data-pc-section="toggler"]');if(this.level===0&&!this.expanded)return!1;if(this.expanded&&!this.leaf)return n.click(),!1;var r=this.findBeforeClickableNode(e.currentTarget);r&&this.focusRowChange(e.currentTarget,r)},onEnterKey:function(e){this.setTabIndexForSelectionMode(e,this.nodeTouched),this.onClick(e),e.preventDefault()},onTabKey:function(){this.setAllNodesTabIndexes()},setAllNodesTabIndexes:function(){var e=y.find(this.$refs.currentNode.closest('[data-pc-section="container"]'),'[role="treeitem"]'),n=S(e).some(function(l){return l.getAttribute("aria-selected")==="true"||l.getAttribute("aria-checked")==="true"});if(S(e).forEach(function(l){l.tabIndex=-1}),n){var r=S(e).filter(function(l){return l.getAttribute("aria-selected")==="true"||l.getAttribute("aria-checked")==="true"});r[0].tabIndex=0;return}S(e)[0].tabIndex=0},setTabIndexForSelectionMode:function(e,n){if(this.selectionMode!==null){var r=S(y.find(this.$refs.currentNode.parentElement,'[role="treeitem"]'));e.currentTarget.tabIndex=n===!1?-1:0,r.every(function(l){return l.tabIndex===-1})&&(r[0].tabIndex=0)}},focusRowChange:function(e,n,r){e.tabIndex="-1",n.tabIndex="0",this.focusNode(r||n)},findBeforeClickableNode:function(e){var n=e.closest("ul").closest("li");if(n){var r=y.findSingle(n,"button");return r&&r.style.visibility!=="hidden"?n:this.findBeforeClickableNode(e.previousElementSibling)}return null},toggleCheckbox:function(){var e=this.selectionKeys?E({},this.selectionKeys):{},n=!this.checked;this.propagateDown(this.node,n,e),this.$emit("checkbox-change",{node:this.node,check:n,selectionKeys:e})},propagateDown:function(e,n,r){if(n?r[e.key]={checked:!0,partialChecked:!1}:delete r[e.key],e.children&&e.children.length){var l=O(e.children),i;try{for(l.s();!(i=l.n()).done;){var o=i.value;this.propagateDown(o,n,r)}}catch(d){l.e(d)}finally{l.f()}}},propagateUp:function(e){var n=e.check,r=E({},e.selectionKeys),l=0,i=!1,o=O(this.node.children),d;try{for(o.s();!(d=o.n()).done;){var a=d.value;r[a.key]&&r[a.key].checked?l++:r[a.key]&&r[a.key].partialChecked&&(i=!0)}}catch(s){o.e(s)}finally{o.f()}n&&l===this.node.children.length?r[this.node.key]={checked:!0,partialChecked:!1}:(n||delete r[this.node.key],i||l>0&&l!==this.node.children.length?r[this.node.key]={checked:!1,partialChecked:!0}:delete r[this.node.key]),this.$emit("checkbox-change",{node:e.node,check:e.check,selectionKeys:r})},onChildCheckboxChange:function(e){this.$emit("checkbox-change",e)},findNextSiblingOfAncestor:function(e){var n=this.getParentNodeElement(e);return n?n.nextElementSibling?n.nextElementSibling:this.findNextSiblingOfAncestor(n):null},findLastVisibleDescendant:function(e){var n=e.children[1];if(n){var r=n.children[n.children.length-1];return this.findLastVisibleDescendant(r)}else return e},getParentNodeElement:function(e){var n=e.parentElement.parentElement;return y.getAttribute(n,"role")==="treeitem"?n:null},focusNode:function(e){e.focus()},isCheckboxSelectionMode:function(){return this.selectionMode==="checkbox"},isSameNode:function(e){return e.currentTarget&&(e.currentTarget.isSameNode(e.target)||e.currentTarget.isSameNode(e.target.closest('[role="treeitem"]')))}},computed:{hasChildren:function(){return this.node.children&&this.node.children.length>0},expanded:function(){return this.expandedKeys&&this.expandedKeys[this.node.key]===!0},leaf:function(){return this.node.leaf===!1?!1:!(this.node.children&&this.node.children.length)},selectable:function(){return this.node.selectable===!1?!1:this.selectionMode!=null},selected:function(){return this.selectionMode&&this.selectionKeys?this.selectionKeys[this.node.key]===!0:!1},checkboxMode:function(){return this.selectionMode==="checkbox"&&this.node.selectable!==!1},checked:function(){return this.selectionKeys?this.selectionKeys[this.node.key]&&this.selectionKeys[this.node.key].checked:!1},partialChecked:function(){return this.selectionKeys?this.selectionKeys[this.node.key]&&this.selectionKeys[this.node.key].partialChecked:!1},ariaChecked:function(){return this.selectionMode==="single"||this.selectionMode==="multiple"?this.selected:void 0},ariaSelected:function(){return this.checkboxMode?this.checked:void 0}},components:{Checkbox:ee,ChevronDownIcon:te,ChevronRightIcon:ne,CheckIcon:q,MinusIcon:re,SpinnerIcon:D},directives:{ripple:G}},pe=["aria-label","aria-selected","aria-expanded","aria-setsize","aria-posinset","aria-level","aria-checked","tabindex"],ye=["data-p-highlight","data-p-selectable"];function ge(t,e,n,r,l,i){var o=k("SpinnerIcon"),d=k("Checkbox"),a=k("TreeNode",!0),s=J("ripple");return c(),p("li",u({ref:"currentNode",class:t.cx("node"),role:"treeitem","aria-label":i.label(n.node),"aria-selected":i.ariaSelected,"aria-expanded":i.expanded,"aria-setsize":n.node.children?n.node.children.length:0,"aria-posinset":n.index+1,"aria-level":n.level,"aria-checked":i.ariaChecked,tabindex:n.index===0?0:-1,onKeydown:e[4]||(e[4]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)})},n.level===1?i.getPTOptions("node"):t.ptm("subgroup")),[v("div",u({class:t.cx("content"),onClick:e[2]||(e[2]=function(){return i.onClick&&i.onClick.apply(i,arguments)}),onTouchend:e[3]||(e[3]=function(){return i.onTouchEnd&&i.onTouchEnd.apply(i,arguments)}),style:n.node.style},i.getPTOptions("content"),{"data-p-highlight":i.checkboxMode?i.checked:i.selected,"data-p-selectable":i.selectable}),[F((c(),p("button",u({type:"button",class:t.cx("toggler"),onClick:e[0]||(e[0]=function(){return i.toggle&&i.toggle.apply(i,arguments)}),tabindex:"-1","aria-hidden":"true"},i.getPTOptions("toggler")),[n.node.loading&&n.loadingMode==="icon"?(c(),p(C,{key:0},[n.templates.nodetogglericon?(c(),h(g(n.templates.nodetogglericon),{key:0,class:m(t.cx("nodetogglericon"))},null,8,["class"])):(c(),h(o,u({key:1,spin:"",class:t.cx("nodetogglericon")},t.ptm("nodetogglericon")),null,16,["class"]))],64)):(c(),p(C,{key:1},[n.templates.togglericon?(c(),h(g(n.templates.togglericon),{key:0,node:n.node,expanded:i.expanded,class:m(t.cx("togglerIcon"))},null,8,["node","expanded","class"])):i.expanded?(c(),h(g(n.node.expandedIcon?"span":"ChevronDownIcon"),u({key:1,class:t.cx("togglerIcon")},i.getPTOptions("togglerIcon")),null,16,["class"])):(c(),h(g(n.node.collapsedIcon?"span":"ChevronRightIcon"),u({key:2,class:t.cx("togglerIcon")},i.getPTOptions("togglerIcon")),null,16,["class"]))],64))],16)),[[s]]),i.checkboxMode?(c(),h(d,{key:0,modelValue:i.checked,binary:!0,class:m(t.cx("nodeCheckbox")),tabindex:-1,unstyled:t.unstyled,pt:i.getPTOptions("nodeCheckbox"),"data-p-checked":i.checked,"data-p-partialchecked":i.partialChecked},{icon:Q(function(f){return[n.templates.checkboxicon?(c(),h(g(n.templates.checkboxicon),{key:0,checked:f.checked,partialChecked:i.partialChecked,class:m(f.class)},null,8,["checked","partialChecked","class"])):(c(),h(g(i.checked?"CheckIcon":i.partialChecked?"MinusIcon":null),u({key:1,class:f.class},i.getPTOptions("nodeCheckbox.icon")),null,16,["class"]))]}),_:1},8,["modelValue","class","unstyled","pt","data-p-checked","data-p-partialchecked"])):K("",!0),v("span",u({class:[t.cx("nodeIcon"),n.node.icon]},i.getPTOptions("nodeIcon")),null,16),v("span",u({class:t.cx("label")},i.getPTOptions("label"),{onKeydown:e[1]||(e[1]=X(function(){},["stop"]))}),[n.templates[n.node.type]||n.templates.default?(c(),h(g(n.templates[n.node.type]||n.templates.default),{key:0,node:n.node},null,8,["node"])):(c(),p(C,{key:1},[Y(Z(i.label(n.node)),1)],64))],16)],16,ye),i.hasChildren&&i.expanded?(c(),p("ul",u({key:0,class:t.cx("subgroup"),role:"group"},t.ptm("subgroup")),[(c(!0),p(C,null,L(n.node.children,function(f){return c(),h(a,{key:f.key,node:f,templates:n.templates,level:n.level+1,expandedKeys:n.expandedKeys,onNodeToggle:i.onChildNodeToggle,onNodeClick:i.onChildNodeClick,selectionMode:n.selectionMode,selectionKeys:n.selectionKeys,onCheckboxChange:i.propagateUp,unstyled:t.unstyled,pt:t.pt},null,8,["node","templates","level","expandedKeys","onNodeToggle","onNodeClick","selectionMode","selectionKeys","onCheckboxChange","unstyled","pt"])}),128))],16)):K("",!0)],16,pe)}R.render=ge;function w(t){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(t)}function T(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=B(t))||e){n&&(t=n);var r=0,l=function(){};return{s:l,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(s){throw s},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,o=!1,d;return{s:function(){n=n.call(t)},n:function(){var s=n.next();return i=s.done,s},e:function(s){o=!0,d=s},f:function(){try{!i&&n.return!=null&&n.return()}finally{if(o)throw d}}}}function be(t){return ve(t)||ke(t)||B(t)||me()}function me(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(t,e){if(t){if(typeof t=="string")return N(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(t,e)}}function ke(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ve(t){if(Array.isArray(t))return N(t)}function N(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?P(Object(n),!0).forEach(function(r){Se(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Se(t,e,n){return e=Ce(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ce(t){var e=xe(t,"string");return w(e)=="symbol"?e:String(e)}function xe(t,e){if(w(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(w(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var we={name:"Tree",extends:ae,emits:["node-expand","node-collapse","update:expandedKeys","update:selectionKeys","node-select","node-unselect","filter"],data:function(){return{d_expandedKeys:this.expandedKeys||{},filterValue:null}},watch:{expandedKeys:function(e){this.d_expandedKeys=e}},methods:{onNodeToggle:function(e){var n=e.key;this.d_expandedKeys[n]?(delete this.d_expandedKeys[n],this.$emit("node-collapse",e)):(this.d_expandedKeys[n]=!0,this.$emit("node-expand",e)),this.d_expandedKeys=b({},this.d_expandedKeys),this.$emit("update:expandedKeys",this.d_expandedKeys)},onNodeClick:function(e){if(this.selectionMode!=null&&e.node.selectable!==!1){var n=e.nodeTouched?!1:this.metaKeySelection,r=n?this.handleSelectionWithMetaKey(e):this.handleSelectionWithoutMetaKey(e);this.$emit("update:selectionKeys",r)}},onCheckboxChange:function(e){this.$emit("update:selectionKeys",e.selectionKeys),e.check?this.$emit("node-select",e.node):this.$emit("node-unselect",e.node)},handleSelectionWithMetaKey:function(e){var n=e.originalEvent,r=e.node,l=n.metaKey||n.ctrlKey,i=this.isNodeSelected(r),o;return i&&l?(this.isSingleSelectionMode()?o={}:(o=b({},this.selectionKeys),delete o[r.key]),this.$emit("node-unselect",r)):(this.isSingleSelectionMode()?o={}:this.isMultipleSelectionMode()&&(o=l?this.selectionKeys?b({},this.selectionKeys):{}:{}),o[r.key]=!0,this.$emit("node-select",r)),o},handleSelectionWithoutMetaKey:function(e){var n=e.node,r=this.isNodeSelected(n),l;return this.isSingleSelectionMode()?r?(l={},this.$emit("node-unselect",n)):(l={},l[n.key]=!0,this.$emit("node-select",n)):r?(l=b({},this.selectionKeys),delete l[n.key],this.$emit("node-unselect",n)):(l=this.selectionKeys?b({},this.selectionKeys):{},l[n.key]=!0,this.$emit("node-select",n)),l},isSingleSelectionMode:function(){return this.selectionMode==="single"},isMultipleSelectionMode:function(){return this.selectionMode==="multiple"},isNodeSelected:function(e){return this.selectionMode&&this.selectionKeys?this.selectionKeys[e.key]===!0:!1},isChecked:function(e){return this.selectionKeys?this.selectionKeys[e.key]&&this.selectionKeys[e.key].checked:!1},isNodeLeaf:function(e){return e.leaf===!1?!1:!(e.children&&e.children.length)},onFilterKeydown:function(e){(e.code==="Enter"||e.code==="NumpadEnter")&&e.preventDefault(),this.$emit("filter",{originalEvent:e,value:e.target.value})},findFilteredNodes:function(e,n){if(e){var r=!1;if(e.children){var l=be(e.children);e.children=[];var i=T(l),o;try{for(i.s();!(o=i.n()).done;){var d=o.value,a=b({},d);this.isFilterMatched(a,n)&&(r=!0,e.children.push(a))}}catch(s){i.e(s)}finally{i.f()}}if(r)return!0}},isFilterMatched:function(e,n){var r=n.searchFields,l=n.filterText,i=n.strict,o=!1,d=T(r),a;try{for(d.s();!(a=d.n()).done;){var s=a.value,f=String(z.resolveFieldData(e,s)).toLocaleLowerCase(this.filterLocale);f.indexOf(l)>-1&&(o=!0)}}catch(U){d.e(U)}finally{d.f()}return(!o||i&&!this.isNodeLeaf(e))&&(o=this.findFilteredNodes(e,{searchFields:r,filterText:l,strict:i})||o),o}},computed:{filteredValue:function(){var e=[],n=this.filterBy.split(","),r=this.filterValue.trim().toLocaleLowerCase(this.filterLocale),l=this.filterMode==="strict",i=T(this.value),o;try{for(i.s();!(o=i.n()).done;){var d=o.value,a=b({},d),s={searchFields:n,filterText:r,strict:l};(l&&(this.findFilteredNodes(a,s)||this.isFilterMatched(a,s))||!l&&(this.isFilterMatched(a,s)||this.findFilteredNodes(a,s)))&&e.push(a)}}catch(f){i.e(f)}finally{i.f()}return e},valueToRender:function(){return this.filterValue&&this.filterValue.trim().length>0?this.filteredValue:this.value}},components:{TreeNode:R,SearchIcon:H,SpinnerIcon:D}},Ke=["placeholder"],Te=["aria-labelledby","aria-label"];function Ie(t,e,n,r,l,i){var o=k("SpinnerIcon"),d=k("SearchIcon"),a=k("TreeNode");return c(),p("div",u({class:t.cx("root")},t.ptm("root"),{"data-pc-name":"tree"}),[t.loading&&t.loadingMode==="mask"?(c(),p("div",u({key:0,class:t.cx("loadingOverlay")},t.ptm("loadingOverlay")),[M(t.$slots,"loadingicon",{class:m(t.cx("loadingIcon"))},function(){return[t.loadingIcon?(c(),p("i",u({key:0,class:[t.cx("loadingIcon"),"pi-spin",t.loadingIcon]},t.ptm("loadingIcon")),null,16)):(c(),h(o,u({key:1,spin:"",class:t.cx("loadingIcon")},t.ptm("loadingIcon")),null,16,["class"]))]})],16)):K("",!0),t.filter?(c(),p("div",u({key:1,class:t.cx("filterContainer")},t.ptm("filterContainer")),[F(v("input",u({"onUpdate:modelValue":e[0]||(e[0]=function(s){return l.filterValue=s}),type:"text",autocomplete:"off",class:t.cx("input"),placeholder:t.filterPlaceholder,onKeydown:e[1]||(e[1]=function(){return i.onFilterKeydown&&i.onFilterKeydown.apply(i,arguments)})},t.ptm("input")),null,16,Ke),[[_,l.filterValue]]),M(t.$slots,"searchicon",{class:m(t.cx("searchIcon"))},function(){return[$(d,u({class:t.cx("searchIcon")},t.ptm("searchIcon")),null,16,["class"])]})],16)):K("",!0),v("div",u({class:t.cx("wrapper"),style:{maxHeight:t.scrollHeight}},t.ptm("wrapper")),[v("ul",u({class:t.cx("container"),role:"tree","aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptm("container")),[(c(!0),p(C,null,L(i.valueToRender,function(s,f){return c(),h(a,{key:s.key,node:s,templates:t.$slots,level:t.level+1,index:f,expandedKeys:l.d_expandedKeys,onNodeToggle:i.onNodeToggle,onNodeClick:i.onNodeClick,selectionMode:t.selectionMode,selectionKeys:t.selectionKeys,onCheckboxChange:i.onCheckboxChange,loadingMode:t.loadingMode,unstyled:t.unstyled,pt:t.pt},null,8,["node","templates","level","index","expandedKeys","onNodeToggle","onNodeClick","selectionMode","selectionKeys","onCheckboxChange","loadingMode","unstyled","pt"])}),128))],16,Te)],16)],16)}we.render=Ie;export{we as default};
