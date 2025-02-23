import{O as D}from"./CouHgqNR.js";import{af as M,ai as S,as as m,ag as k,ah as c,at as z,al as R,ar as F,ae as d,aj as N,y as P,an as j,o as l,x as y,w as K,c as I,F as L,C as B,a as w,j as G,aq as x,n as H,g as p,t as U,aG as _,ao as T,b as E,ap as O}from"./geFSAwWZ.js";import{s as W}from"./CeryOFhr.js";var Z=`
@layer primevue {
    .p-tieredmenu ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-tieredmenu .p-submenu-list {
        position: absolute;
        min-width: 100%;
        z-index: 1;
        display: none;
    }

    .p-tieredmenu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-tieredmenu .p-menuitem-text {
        line-height: 1;
    }

    .p-tieredmenu .p-menuitem {
        position: relative;
    }

    .p-tieredmenu .p-menuitem-link .p-submenu-icon {
        margin-left: auto;
    }

    .p-tieredmenu .p-menuitem-active > .p-submenu-list {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-tieredmenu-enter-from,
    .p-tieredmenu-leave-active {
        opacity: 0;
    }

    .p-tieredmenu-enter-active {
        transition: opacity 250ms;
    }
}
`,q={submenu:function(e){var i=e.instance,s=e.processedItem;return{display:i.isItemActive(s)?"block":"none"}}},J={root:function(e){var i=e.instance,s=e.props;return["p-tieredmenu p-component",{"p-tieredmenu-overlay":s.popup,"p-input-filled":i.$primevue.config.inputStyle==="filled","p-ripple-disabled":i.$primevue.config.ripple===!1}]},start:"p-tieredmenu-start",menu:"p-tieredmenu-root-list",menuitem:function(e){var i=e.instance,s=e.processedItem;return["p-menuitem",{"p-menuitem-active p-highlight":i.isItemActive(s),"p-focus":i.isItemFocused(s),"p-disabled":i.isItemDisabled(s)}]},content:"p-menuitem-content",action:"p-menuitem-link",icon:"p-menuitem-icon",text:"p-menuitem-text",submenuIcon:"p-submenu-icon",submenu:"p-submenu-list",separator:"p-menuitem-separator",end:"p-tieredmenu-end"},Q=M.extend({name:"tieredmenu",css:Z,classes:J,inlineStyles:q}),X={name:"BaseTieredMenu",extends:F,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Q,provide:function(){return{$parentInstance:this}}},V={name:"TieredMenuSub",hostName:"TieredMenu",extends:F,emits:["item-click","item-mouseenter"],container:null,props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,i,s){return e&&e.item?m.getItemValue(e.item[i],s):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,i,s){return this.ptm(s,{context:{item:e,index:i,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}})},isItemActive:function(e){return this.activeItemPath.some(function(i){return i.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return m.isNotEmpty(e.items)},onEnter:function(){c.nestedPosition(this.container,this.level)},onItemClick:function(e,i){this.getItemProp(i,"command",{originalEvent:e,item:i.item}),this.$emit("item-click",{originalEvent:e,processedItem:i,isFocus:!0})},onItemMouseEnter:function(e,i){this.$emit("item-mouseenter",{originalEvent:e,processedItem:i})},getAriaSetSize:function(){var e=this;return this.items.filter(function(i){return e.isItemVisible(i)&&!e.getItemProp(i,"separator")}).length},getAriaPosInset:function(e){var i=this;return e-this.items.slice(0,e).filter(function(s){return i.isItemVisible(s)&&i.getItemProp(s,"separator")}).length+1},getMenuItemProps:function(e,i){return{action:d({class:this.cx("action"),tabindex:-1,"aria-hidden":!0},this.getPTOptions(e,i,"action")),icon:d({class:[this.cx("icon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,i,"icon")),label:d({class:this.cx("label")},this.getPTOptions(e,i,"label")),submenuicon:d({class:this.cx("submenuIcon")},this.getPTOptions(e,i,"submenuIcon"))}},containerRef:function(e){this.container=e}},components:{AngleRightIcon:W},directives:{ripple:N}},Y=["tabindex"],$=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-highlight","data-p-focused","data-p-disabled"],ee=["onClick","onMouseenter"],te=["href","target"],ie=["id"],ne=["id"];function se(t,e,i,s,a,n){var u=P("AngleRightIcon"),f=P("TieredMenuSub",!0),b=j("ripple");return l(),y(T,d({name:"p-tieredmenu",onEnter:n.onEnter},t.ptm("menu.transition")),{default:K(function(){return[i.level===0||i.visible?(l(),I("ul",d({key:0,ref:n.containerRef,class:i.level===0?t.cx("menu"):t.cx("submenu"),tabindex:i.tabindex},i.level===0?t.ptm("menu"):t.ptm("submenu")),[(l(!0),I(L,null,B(i.items,function(r,o){return l(),I(L,{key:n.getItemKey(r)},[n.isItemVisible(r)&&!n.getItemProp(r,"separator")?(l(),I("li",d({key:0,id:n.getItemId(r),style:n.getItemProp(r,"style"),class:[t.cx("menuitem",{processedItem:r}),n.getItemProp(r,"class")],role:"menuitem","aria-label":n.getItemLabel(r),"aria-disabled":n.isItemDisabled(r)||void 0,"aria-expanded":n.isItemGroup(r)?n.isItemActive(r):void 0,"aria-haspopup":n.isItemGroup(r)&&!n.getItemProp(r,"to")?"menu":void 0,"aria-level":i.level+1,"aria-setsize":n.getAriaSetSize(),"aria-posinset":n.getAriaPosInset(o)},n.getPTOptions(r,o,"menuitem"),{"data-p-highlight":n.isItemActive(r),"data-p-focused":n.isItemFocused(r),"data-p-disabled":n.isItemDisabled(r)}),[w("div",d({class:t.cx("content"),onClick:function(v){return n.onItemClick(v,r)},onMouseenter:function(v){return n.onItemMouseEnter(v,r)}},n.getPTOptions(r,o,"content")),[i.templates.item?(l(),y(x(i.templates.item),{key:1,item:r.item,hasSubmenu:n.getItemProp(r,"items"),label:n.getItemLabel(r),props:n.getMenuItemProps(r,o)},null,8,["item","hasSubmenu","label","props"])):G((l(),I("a",d({key:0,href:n.getItemProp(r,"url"),class:t.cx("action"),target:n.getItemProp(r,"target"),tabindex:"-1","aria-hidden":"true"},n.getPTOptions(r,o,"action")),[i.templates.itemicon?(l(),y(x(i.templates.itemicon),{key:0,item:r.item,class:H([t.cx("icon"),n.getItemProp(r,"icon")])},null,8,["item","class"])):n.getItemProp(r,"icon")?(l(),I("span",d({key:1,class:[t.cx("icon"),n.getItemProp(r,"icon")]},n.getPTOptions(r,o,"icon")),null,16)):p("",!0),w("span",d({id:n.getItemLabelId(r),class:t.cx("label")},n.getPTOptions(r,o,"label")),U(n.getItemLabel(r)),17,ie),n.getItemProp(r,"items")?(l(),I(L,{key:2},[i.templates.submenuicon?(l(),y(x(i.templates.submenuicon),d({key:0,class:t.cx("submenuIcon"),active:n.isItemActive(r)},n.getPTOptions(r,o,"submenuIcon")),null,16,["class","active"])):(l(),y(u,d({key:1,class:t.cx("submenuIcon")},n.getPTOptions(r,o,"submenuIcon")),null,16,["class"]))],64)):p("",!0)],16,te)),[[b]])],16,ee),n.isItemVisible(r)&&n.isItemGroup(r)?(l(),y(f,{key:0,id:n.getItemId(r)+"_list",style:_(t.sx("submenu",!0,{processedItem:r})),"aria-labelledby":n.getItemLabelId(r),role:"menu",menuId:i.menuId,focusedItemId:i.focusedItemId,items:r.items,templates:i.templates,activeItemPath:i.activeItemPath,level:i.level+1,visible:n.isItemActive(r)&&n.isItemGroup(r),pt:t.pt,unstyled:t.unstyled,onItemClick:e[0]||(e[0]=function(h){return t.$emit("item-click",h)}),onItemMouseenter:e[1]||(e[1]=function(h){return t.$emit("item-mouseenter",h)})},null,8,["id","style","aria-labelledby","menuId","focusedItemId","items","templates","activeItemPath","level","visible","pt","unstyled"])):p("",!0)],16,$)):p("",!0),n.isItemVisible(r)&&n.getItemProp(r,"separator")?(l(),I("li",d({key:1,id:n.getItemId(r),style:n.getItemProp(r,"style"),class:[t.cx("separator"),n.getItemProp(r,"class")],role:"separator"},t.ptm("separator")),null,16,ne)):p("",!0)],64)}),128))],16,Y)):p("",!0)]}),_:1},16,["onEnter"])}V.render=se;var re={name:"TieredMenu",extends:X,inheritAttrs:!1,emits:["focus","blur","before-show","before-hide","hide","show"],outsideClickListener:null,scrollHandler:null,resizeListener:null,target:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data:function(){return{id:this.$attrs.id,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!this.popup,submenuVisible:!1,dirty:!1}},watch:{"$attrs.id":function(e){this.id=e||S()},activeItemPath:function(e){this.popup||(m.isNotEmpty(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener()))}},mounted:function(){this.id=this.id||S()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&k.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(e,i){return e?m.getItemValue(e[i]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemGroup:function(e){return m.isNotEmpty(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&m.isNotEmpty(e.items)},toggle:function(e){this.visible?this.hide(e,!0):this.show(e)},show:function(e,i){this.popup&&(this.$emit("before-show"),this.visible=!0,this.target=this.target||e.currentTarget,this.relatedTarget=e.relatedTarget||null),this.focusedItemInfo={index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},i&&c.focus(this.menubar)},hide:function(e,i){this.popup&&(this.$emit("before-hide"),this.visible=!1),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},i&&c.focus(this.relatedTarget||this.target||this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}var i=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!i&&m.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var i=e.processedItem,s=e.isFocus;if(!m.isEmpty(i)){var a=i.index,n=i.key,u=i.level,f=i.parentKey,b=i.items,r=m.isNotEmpty(b),o=this.activeItemPath.filter(function(h){return h.parentKey!==f&&h.parentKey!==n});r&&(o.push(i),this.submenuVisible=!0),this.focusedItemInfo={index:a,level:u,parentKey:f},this.activeItemPath=o,r&&(this.dirty=!0),s&&c.focus(this.menubar)}},onOverlayClick:function(e){D.emit("overlay-click",{originalEvent:e,target:this.target})},onItemClick:function(e){var i=e.originalEvent,s=e.processedItem,a=this.isProccessedItemGroup(s),n=m.isEmpty(s.parent),u=this.isSelected(s);if(u){var f=s.index,b=s.key,r=s.level,o=s.parentKey;this.activeItemPath=this.activeItemPath.filter(function(v){return b!==v.key&&b.startsWith(v.key)}),this.focusedItemInfo={index:f,level:r,parentKey:o},this.dirty=!n,c.focus(this.menubar)}else if(a)this.onItemChange(e);else{var h=n?s:this.activeItemPath.find(function(v){return v.parentKey===""});this.hide(i),this.changeFocusedItemIndex(i,h?h.index:-1),c.focus(this.menubar)}},onItemMouseEnter:function(e){this.dirty&&this.onItemChange(e)},onArrowDownKey:function(e){var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){var i=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(i);!s&&this.onItemChange({originalEvent:e,processedItem:i})}this.popup&&this.hide(e,!0),e.preventDefault()}else{var a=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}},onArrowLeftKey:function(e){var i=this,s=this.visibleItems[this.focusedItemInfo.index],a=this.activeItemPath.find(function(u){return u.key===s.parentKey}),n=m.isEmpty(s.parent);n||(this.focusedItemInfo={index:-1,parentKey:a?a.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(function(u){return u.parentKey!==i.focusedItemInfo.parentKey}),e.preventDefault()},onArrowRightKey:function(e){var i=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(i);s&&(this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo={index:-1,parentKey:i.key},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var i=c.findSingle(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),s=i&&c.findSingle(i,'[data-pc-section="action"]');if(s?s.click():i&&i.click(),!this.popup){var a=this.visibleItems[this.focusedItemInfo.index],n=this.isProccessedItemGroup(a);!n&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.hide(e,!0),!this.popup&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex()),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var i=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(i);!s&&this.onItemChange({originalEvent:e,processedItem:i})}this.hide()},onEnter:function(e){this.autoZIndex&&k.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),c.addStyles(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),c.focus(this.menubar),this.scrollInView()},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.container=null,this.dirty=!1},onAfterLeave:function(e){this.autoZIndex&&k.clear(e)},alignOverlay:function(){c.absolutePosition(this.container,this.target);var e=c.getOuterWidth(this.target);e>c.getOuterWidth(this.container)&&(this.container.style.minWidth=c.getOuterWidth(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(i){var s=e.container&&!e.container.contains(i.target),a=e.popup?!(e.target&&(e.target===i.target||e.target.contains(i.target))):!0;s&&a&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new z(this.target,function(i){e.hide(i,!0)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(i){c.isTouchDevice()||e.hide(i,!0)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isItemMatched:function(e){var i;return this.isValidItem(e)&&((i=this.getProccessedItemLabel(e))===null||i===void 0?void 0:i.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(i){return i.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(i){return e.isValidItem(i)})},findLastItemIndex:function(){var e=this;return m.findLastIndex(this.visibleItems,function(i){return e.isValidItem(i)})},findNextItemIndex:function(e){var i=this,s=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(a){return i.isValidItem(a)}):-1;return s>-1?s+e+1:e},findPrevItemIndex:function(e){var i=this,s=e>0?m.findLastIndex(this.visibleItems.slice(0,e),function(a){return i.isValidItem(a)}):-1;return s>-1?s:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(i){return e.isValidSelectedItem(i)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,i){var s=this;this.searchValue=(this.searchValue||"")+i;var a=-1,n=!1;return this.focusedItemInfo.index!==-1?(a=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u){return s.isItemMatched(u)}),a=a===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(u){return s.isItemMatched(u)}):a+this.focusedItemInfo.index):a=this.visibleItems.findIndex(function(u){return s.isItemMatched(u)}),a!==-1&&(n=!0),a===-1&&this.focusedItemInfo.index===-1&&(a=this.findFirstFocusedItemIndex()),a!==-1&&this.changeFocusedItemIndex(e,a),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){s.searchValue="",s.searchTimeout=null},500),n},changeFocusedItemIndex:function(e,i){this.focusedItemInfo.index!==i&&(this.focusedItemInfo.index=i,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,i=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemId,s=c.findSingle(this.menubar,'li[id="'.concat(i,'"]'));s&&s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var i=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=[];return e&&e.forEach(function(f,b){var r=(n!==""?n+"_":"")+b,o={item:f,index:b,level:s,key:r,parent:a,parentKey:n};o.items=i.createProcessedItems(f.items,s+1,o,r),u.push(o)}),u},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,i=this.activeItemPath.find(function(s){return s.key===e.focusedItemInfo.parentKey});return i?i.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(m.isNotEmpty(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{TieredMenuSub:V,Portal:R}};function g(t){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(t)}function C(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),i.push.apply(i,s)}return i}function A(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?C(Object(i),!0).forEach(function(s){ae(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):C(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function ae(t,e,i){return e=ue(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function ue(t){var e=oe(t,"string");return g(e)=="symbol"?e:String(e)}function oe(t,e){if(g(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,e||"default");if(g(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var le=["id"];function de(t,e,i,s,a,n){var u=P("TieredMenuSub"),f=P("Portal");return l(),y(f,{appendTo:t.appendTo,disabled:!t.popup},{default:K(function(){return[E(T,d({name:"p-connected-overlay",onEnter:n.onEnter,onAfterEnter:n.onAfterEnter,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave},t.ptm("transition")),{default:K(function(){return[a.visible?(l(),I("div",d({key:0,ref:n.containerRef,id:a.id,class:t.cx("root"),onClick:e[0]||(e[0]=function(){return n.onOverlayClick&&n.onOverlayClick.apply(n,arguments)})},A(A({},t.$attrs),t.ptm("root")),{"data-pc-name":"tieredmenu"}),[t.$slots.start?(l(),I("div",d({key:0,class:t.cx("start")},t.ptm("start")),[O(t.$slots,"start")],16)):p("",!0),E(u,{ref:n.menubarRef,id:a.id+"_list",tabindex:t.disabled?-1:t.tabindex,role:"menubar","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-disabled":t.disabled||void 0,"aria-orientation":"vertical","aria-activedescendant":a.focused?n.focusedItemId:void 0,menuId:a.id,focusedItemId:a.focused?n.focusedItemId:void 0,items:n.processedItems,templates:t.$slots,activeItemPath:a.activeItemPath,level:0,visible:a.submenuVisible,pt:t.pt,unstyled:t.unstyled,onFocus:n.onFocus,onBlur:n.onBlur,onKeydown:n.onKeyDown,onItemClick:n.onItemClick,onItemMouseenter:n.onItemMouseEnter},null,8,["id","tabindex","aria-label","aria-labelledby","aria-disabled","aria-activedescendant","menuId","focusedItemId","items","templates","activeItemPath","visible","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"]),t.$slots.end?(l(),I("div",d({key:1,class:t.cx("end")},t.ptm("end")),[O(t.$slots,"end")],16)):p("",!0)],16,le)):p("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}re.render=de;export{re as default};
