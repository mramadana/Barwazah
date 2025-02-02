import{s as E}from"./Dfj_rsVC.js";import{s as A}from"./vdJJGTyi.js";import{s as R}from"./GeIhuEdx.js";import{O as B}from"./BXjy7pqY.js";import{a4 as H,ab as K,a9 as w,ak as l,aa as h,al as z,ae as N,a6 as M,ac as j,H as b,ag as U,o as u,c as f,F,g as q,a5 as c,k as W,y as O,aj as x,t as L,f as P,n as V,a as y,ai as C,d as Z,b as k,w as G,ah as J}from"./CDjVABWN.js";var Q=`
@layer primevue {
    .p-cascadeselect {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
    }

    .p-cascadeselect-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .p-cascadeselect-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        text-overflow: ellipsis;
        cursor: pointer;
    }

    .p-cascadeselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-cascadeselect .p-cascadeselect-panel {
        min-width: 100%;
    }

    .p-cascadeselect-item {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
    }

    .p-cascadeselect-item-content {
        display: flex;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    .p-cascadeselect-group-icon {
        margin-left: auto;
    }

    .p-cascadeselect-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
        min-width: 100%;
    }

    .p-fluid .p-cascadeselect {
        display: flex;
    }

    .p-fluid .p-cascadeselect .p-cascadeselect-label {
        width: 1%;
    }

    .p-cascadeselect-sublist {
        position: absolute;
        min-width: 100%;
        z-index: 1;
        display: none;
    }

    .p-cascadeselect-item-active {
        overflow: visible;
    }

    .p-cascadeselect-item-active > .p-cascadeselect-sublist {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-cascadeselect-enter-from,
    .p-cascadeselect-leave-active {
        opacity: 0;
    }

    .p-cascadeselect-enter-active {
        transition: opacity 150ms;
    }
}
`,X={root:function(e){var n=e.props;return{position:n.appendTo==="self"?"relative":void 0}}},Y={root:function(e){var n=e.instance,i=e.props;return["p-cascadeselect p-component p-inputwrapper",{"p-disabled":i.disabled,"p-focus":n.focused,"p-inputwrapper-filled":i.modelValue,"p-inputwrapper-focus":n.focused||n.overlayVisible,"p-overlay-open":n.overlayVisible}]},label:function(e){var n=e.instance,i=e.props;return["p-cascadeselect-label p-inputtext",{"p-placeholder":n.label===i.placeholder,"p-cascadeselect-label-empty":!n.$slots.value&&(n.label==="p-emptylabel"||n.label.length===0)}]},dropdownButton:"p-cascadeselect-trigger",loadingIcon:"p-cascadeselect-trigger-icon",dropdownIcon:"p-cascadeselect-trigger-icon",panel:function(e){var n=e.instance;return["p-cascadeselect-panel p-component",{"p-input-filled":n.$primevue.config.inputStyle==="filled","p-ripple-disabled":n.$primevue.config.ripple===!1}]},wrapper:"p-cascadeselect-items-wrapper",list:"p-cascadeselect-panel p-cascadeselect-items",item:function(e){var n=e.instance,i=e.processedOption;return["p-cascadeselect-item",{"p-cascadeselect-item-group":n.isOptionGroup(i),"p-cascadeselect-item-active p-highlight":n.isOptionActive(i),"p-focus":n.isOptionFocused(i),"p-disabled":n.isOptionDisabled(i)}]},content:"p-cascadeselect-item-content",text:"p-cascadeselect-item-text",groupIcon:"p-cascadeselect-group-icon",sublist:"p-cascadeselect-sublist"},$=H.extend({name:"cascadeselect",css:Q,classes:Y,inlineStyles:X}),_={name:"BaseCascadeSelect",extends:M,props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,placeholder:String,disabled:Boolean,dataKey:null,inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelProps:{type:null,default:null},appendTo:{type:[String,Object],default:"body"},loading:{type:Boolean,default:!1},dropdownIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},optionGroupIcon:{type:String,default:void 0},autoOptionFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},searchLocale:{type:String,default:void 0},searchMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptySearchMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:$,provide:function(){return{$parentInstance:this}}},T={name:"CascadeSelectSub",hostName:"CascadeSelect",extends:M,emits:["option-change","option-focus-change"],container:null,props:{selectId:String,focusedOptionId:String,options:Array,optionLabel:String,optionValue:String,optionDisabled:null,optionGroupIcon:String,optionGroupLabel:String,optionGroupChildren:{type:[String,Array],default:null},activeOptionPath:Array,level:Number,templates:null,isParentMount:Boolean},data:function(){return{mounted:!1}},watch:{isParentMount:{handler:function(e){e&&h.nestedPosition(this.container,this.level)}}},mounted:function(){(this.isParentMount||this.level===0)&&h.nestedPosition(this.container,this.level),this.mounted=!0},methods:{getOptionId:function(e){return"".concat(this.selectId,"_").concat(e.key)},getOptionLabel:function(e){return this.optionLabel?l.resolveFieldData(e.option,this.optionLabel):e.option},getOptionValue:function(e){return this.optionValue?l.resolveFieldData(e.option,this.optionValue):e.option},getPTOptions:function(e,n,i){return this.ptm(i,{context:{item:e,index:n,level:this.level,itemGroup:this.isOptionGroup(e),active:this.isOptionActive(e),focused:this.isOptionFocused(e),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?l.resolveFieldData(e.option,this.optionDisabled):!1},getOptionGroupLabel:function(e){return this.optionGroupLabel?l.resolveFieldData(e.option,this.optionGroupLabel):null},getOptionGroupChildren:function(e){return e.children},isOptionGroup:function(e){return l.isNotEmpty(e.children)},isOptionSelected:function(e){return!this.isOptionGroup(e)&&this.isOptionActive(e)},isOptionActive:function(e){return this.activeOptionPath.some(function(n){return n.key===e.key})},isOptionFocused:function(e){return this.focusedOptionId===this.getOptionId(e)},getOptionLabelToRender:function(e){return this.isOptionGroup(e)?this.getOptionGroupLabel(e):this.getOptionLabel(e)},onOptionClick:function(e,n){this.$emit("option-change",{originalEvent:e,processedOption:n,isFocus:!0})},onOptionMouseMove:function(e,n){this.$emit("option-focus-change",{originalEvent:e,processedOption:n})},onOptionChange:function(e){this.$emit("option-change",e)},onOptionFocusChange:function(e){this.$emit("option-focus-change",e)},containerRef:function(e){this.container=e}},directives:{ripple:j},components:{AngleRightIcon:E}},ee=["id","aria-label","aria-selected","aria-expanded","aria-level","aria-setsize","aria-posinset","data-p-item-group","data-p-highlight","data-p-focus","data-p-disabled"],te=["onClick","onMousemove"];function ne(t,e,n,i,s,o){var r=b("AngleRightIcon"),d=b("CascadeSelectSub",!0),v=U("ripple");return u(),f("ul",c({ref:o.containerRef,class:t.cx("list")},n.level===0?t.ptm("list"):t.ptm("sublist")),[(u(!0),f(F,null,q(n.options,function(a,p){return u(),f("li",c({key:o.getOptionLabelToRender(a),id:o.getOptionId(a),class:t.cx("item",{processedOption:a}),role:"treeitem","aria-label":o.getOptionLabelToRender(a),"aria-selected":o.isOptionGroup(a)?void 0:o.isOptionSelected(a),"aria-expanded":o.isOptionGroup(a)?o.isOptionActive(a):void 0,"aria-level":n.level+1,"aria-setsize":n.options.length,"aria-posinset":p+1},o.getPTOptions(a,p,"item"),{"data-p-item-group":o.isOptionGroup(a),"data-p-highlight":o.isOptionActive(a),"data-p-focus":o.isOptionFocused(a),"data-p-disabled":o.isOptionDisabled(a)}),[W((u(),f("div",c({class:t.cx("content"),onClick:function(g){return o.onOptionClick(g,a)},onMousemove:function(g){return o.onOptionMouseMove(g,a)}},o.getPTOptions(a,p,"content")),[n.templates.option?(u(),O(x(n.templates.option),{key:0,option:a.option},null,8,["option"])):(u(),f("span",c({key:1,class:t.cx("text")},o.getPTOptions(a,p,"text")),L(o.getOptionLabelToRender(a)),17)),o.isOptionGroup(a)?(u(),f(F,{key:2},[n.templates.optiongroupicon?(u(),O(x(n.templates.optiongroupicon),{key:0,"aria-hidden":"true"})):n.optionGroupIcon?(u(),f("span",c({key:1,class:[t.cx("groupIcon"),n.optionGroupIcon],"aria-hidden":"true"},o.getPTOptions(a,p,"groupIcon")),null,16)):(u(),O(r,c({key:2,class:t.cx("groupIcon"),"aria-hidden":"true"},o.getPTOptions(a,p,"groupIcon")),null,16,["class"]))],64)):P("",!0)],16,te)),[[v]]),o.isOptionGroup(a)&&o.isOptionActive(a)?(u(),O(d,{key:0,role:"group",class:V(t.cx("sublist")),selectId:n.selectId,focusedOptionId:n.focusedOptionId,options:o.getOptionGroupChildren(a),activeOptionPath:n.activeOptionPath,level:n.level+1,templates:n.templates,optionLabel:n.optionLabel,optionValue:n.optionValue,optionDisabled:n.optionDisabled,optionGroupIcon:n.optionGroupIcon,optionGroupLabel:n.optionGroupLabel,optionGroupChildren:n.optionGroupChildren,onOptionChange:o.onOptionChange,onOptionFocusChange:o.onOptionFocusChange,pt:t.pt,unstyled:t.unstyled,isParentMount:s.mounted},null,8,["class","selectId","focusedOptionId","options","activeOptionPath","level","templates","optionLabel","optionValue","optionDisabled","optionGroupIcon","optionGroupLabel","optionGroupChildren","onOptionChange","onOptionFocusChange","pt","unstyled","isParentMount"])):P("",!0)],16,ee)}),128))],16)}T.render=ne;var ie={name:"CascadeSelect",extends:_,emits:["update:modelValue","change","focus","blur","click","group-change","before-show","before-hide","hide","show"],outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,searchTimeout:null,searchValue:null,data:function(){return{id:this.$attrs.id,clicked:!1,focused:!1,focusedOptionInfo:{index:-1,level:0,parentKey:""},activeOptionPath:[],overlayVisible:!1,dirty:!1}},watch:{"$attrs.id":function(e){this.id=e||K()},options:function(){this.autoUpdateModel()}},mounted:function(){this.id=this.id||K(),this.autoUpdateModel()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(w.clear(this.overlay),this.overlay=null)},methods:{getOptionLabel:function(e){return this.optionLabel?l.resolveFieldData(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?l.resolveFieldData(e,this.optionValue):e},isOptionDisabled:function(e){return this.optionDisabled?l.resolveFieldData(e,this.optionDisabled):!1},getOptionGroupLabel:function(e){return this.optionGroupLabel?l.resolveFieldData(e,this.optionGroupLabel):null},getOptionGroupChildren:function(e,n){return l.isString(this.optionGroupChildren)?l.resolveFieldData(e,this.optionGroupChildren):l.resolveFieldData(e,this.optionGroupChildren[n])},isOptionGroup:function(e,n){return Object.prototype.hasOwnProperty.call(e,this.optionGroupChildren[n])},getProccessedOptionLabel:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=this.isProccessedOptionGroup(e);return n?this.getOptionGroupLabel(e.option,e.level):this.getOptionLabel(e.option)},isProccessedOptionGroup:function(e){return l.isNotEmpty(e==null?void 0:e.children)},show:function(e){if(this.$emit("before-show"),this.overlayVisible=!0,this.activeOptionPath=this.hasSelectedOption?this.findOptionPathByValue(this.modelValue):this.activeOptionPath,this.hasSelectedOption&&l.isNotEmpty(this.activeOptionPath)){var n=this.activeOptionPath[this.activeOptionPath.length-1];this.focusedOptionInfo={index:n.index,level:n.level,parentKey:n.parentKey}}else this.focusedOptionInfo={index:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),level:0,parentKey:""};e&&h.focus(this.$refs.focusInput)},hide:function(e){var n=this,i=function(){n.$emit("before-hide"),n.overlayVisible=!1,n.clicked=!1,n.activeOptionPath=[],n.focusedOptionInfo={index:-1,level:0,parentKey:""},e&&h.focus(n.$refs.focusInput)};setTimeout(function(){i()},0)},onFocus:function(e){this.disabled||(this.focused=!0,this.$emit("focus",e))},onBlur:function(e){this.focused=!1,this.focusedOptionInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled||this.loading){e.preventDefault();return}var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&l.isPrintableCharacter(e.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(e,e.key));break}this.clicked=!1},onOptionChange:function(e){var n=e.originalEvent,i=e.processedOption,s=e.isFocus,o=e.isHide;if(!l.isEmpty(i)){var r=i.index,d=i.level,v=i.parentKey,a=i.children,p=l.isNotEmpty(a),I=this.activeOptionPath.filter(function(g){return g.parentKey!==v});I.push(i),this.focusedOptionInfo={index:r,level:d,parentKey:v},this.activeOptionPath=I,p?this.onOptionGroupSelect(n,i):this.onOptionSelect(n,i,o),s&&h.focus(this.$refs.focusInput)}},onOptionFocusChange:function(e){if(this.focusOnHover){var n=e.originalEvent,i=e.processedOption,s=i.index,o=i.level,r=i.parentKey;this.focusedOptionInfo={index:s,level:o,parentKey:r},this.changeFocusedOptionIndex(n,s)}},onOptionSelect:function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=this.getOptionValue(n==null?void 0:n.option);this.activeOptionPath.forEach(function(o){return o.selected=!0}),this.updateModel(e,s),i&&this.hide(!0)},onOptionGroupSelect:function(e,n){this.dirty=!0,this.$emit("group-change",{originalEvent:e,value:n.option})},onContainerClick:function(e){this.disabled||this.loading||((!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide():this.show(),h.focus(this.$refs.focusInput)),this.clicked=!0,this.$emit("click",e))},onOverlayClick:function(e){B.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(!this.overlayVisible)this.show();else{var n=this.focusedOptionInfo.index!==-1?this.findNextOptionIndex(this.focusedOptionInfo.index):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n)}e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedOptionInfo.index!==-1){var n=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(n);!i&&this.onOptionChange({originalEvent:e,processedOption:n})}this.overlayVisible&&this.hide(),e.preventDefault()}else{var s=this.focusedOptionInfo.index!==-1?this.findPrevOptionIndex(this.focusedOptionInfo.index):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,s),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey:function(e){var n=this;if(this.overlayVisible){var i=this.visibleOptions[this.focusedOptionInfo.index],s=this.activeOptionPath.find(function(d){return d.key===(i==null?void 0:i.parentKey)}),o=this.focusedOptionInfo.parentKey===""||s&&s.key===this.focusedOptionInfo.parentKey,r=l.isEmpty(i==null?void 0:i.parent);o&&(this.activeOptionPath=this.activeOptionPath.filter(function(d){return d.parentKey!==n.focusedOptionInfo.parentKey})),r||(this.focusedOptionInfo={index:-1,parentKey:s?s.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()}},onArrowRightKey:function(e){if(this.overlayVisible){var n=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(n);if(i){var s=this.activeOptionPath.some(function(o){return(n==null?void 0:n.key)===o.key});s?(this.focusedOptionInfo={index:-1,parentKey:n==null?void 0:n.key},this.searchValue="",this.onArrowDownKey(e)):this.onOptionChange({originalEvent:e,processedOption:n})}e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show(),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show(),e.preventDefault()},onEnterKey:function(e){if(!this.overlayVisible)this.focusedOptionInfo.index,this.onArrowDownKey(e);else if(this.focusedOptionInfo.index!==-1){var n=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(n);this.onOptionChange({originalEvent:e,processedOption:n}),!i&&this.hide()}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey:function(e){if(this.focusedOptionInfo.index!==-1){var n=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(n);!i&&this.onOptionChange({originalEvent:e,processedOption:n})}this.overlayVisible&&this.hide()},onOverlayEnter:function(e){w.set("overlay",e,this.$primevue.config.zIndex.overlay),h.addStyles(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.scrollInView()},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null,this.dirty=!1},onOverlayAfterLeave:function(e){w.clear(e)},alignOverlay:function(){this.appendTo==="self"?h.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=h.getOuterWidth(this.$el)+"px",h.absolutePosition(this.overlay,this.$el))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.overlayVisible&&e.overlay&&!e.$el.contains(n.target)&&!e.overlay.contains(n.target)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new z(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!h.isTouchDevice()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOptionMatched:function(e){var n;return this.isValidOption(e)&&((n=this.getProccessedOptionLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)))},isValidOption:function(e){return l.isNotEmpty(e)&&!this.isOptionDisabled(e.option)},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected:function(e){return this.activeOptionPath.some(function(n){return n.key===e.key})},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidOption(n)})},findLastOptionIndex:function(){var e=this;return l.findLastIndex(this.visibleOptions,function(n){return e.isValidOption(n)})},findNextOptionIndex:function(e){var n=this,i=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(s){return n.isValidOption(s)}):-1;return i>-1?i+e+1:e},findPrevOptionIndex:function(e){var n=this,i=e>0?l.findLastIndex(this.visibleOptions.slice(0,e),function(s){return n.isValidOption(s)}):-1;return i>-1?i:e},findSelectedOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidSelectedOption(n)})},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},findOptionPathByValue:function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(n=n||i===0&&this.processedOptions,!n)return null;if(l.isEmpty(e))return[];for(var s=0;s<n.length;s++){var o=n[s];if(l.equals(e,this.getOptionValue(o.option),this.equalityKey))return[o];var r=this.findOptionPathByValue(e,o.children,i+1);if(r)return r.unshift(o),r}},searchOptions:function(e,n){var i=this;this.searchValue=(this.searchValue||"")+n;var s=-1,o=!1;return l.isNotEmpty(this.searchValue)&&(this.focusedOptionInfo.index!==-1?(s=this.visibleOptions.slice(this.focusedOptionInfo.index).findIndex(function(r){return i.isOptionMatched(r)}),s=s===-1?this.visibleOptions.slice(0,this.focusedOptionInfo.index).findIndex(function(r){return i.isOptionMatched(r)}):s+this.focusedOptionInfo.index):s=this.visibleOptions.findIndex(function(r){return i.isOptionMatched(r)}),s!==-1&&(o=!0),s===-1&&this.focusedOptionInfo.index===-1&&(s=this.findFirstFocusedOptionIndex()),s!==-1&&this.changeFocusedOptionIndex(e,s)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){i.searchValue="",i.searchTimeout=null},500),o},changeFocusedOptionIndex:function(e,n){this.focusedOptionInfo.index!==n&&(this.focusedOptionInfo.index=n,this.scrollInView(),this.selectOnFocus&&this.onOptionChange({originalEvent:e,processedOption:this.visibleOptions[n],isHide:!1}))},scrollInView:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var i=n!==-1?"".concat(e.id,"_").concat(n):e.focusedOptionId,s=h.findSingle(e.list,'li[id="'.concat(i,'"]'));s&&s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"})})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&(this.focusedOptionInfo.index=this.findFirstFocusedOptionIndex(),this.onOptionChange({processedOption:this.visibleOptions[this.focusedOptionInfo.index],isHide:!1}),!this.overlayVisible&&(this.focusedOptionInfo={index:-1,level:0,parentKey:""}))},updateModel:function(e,n){this.$emit("update:modelValue",n),this.$emit("change",{originalEvent:e,value:n})},createProcessedOptions:function(e){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",r=[];return e&&e.forEach(function(d,v){var a=(o!==""?o+"_":"")+v,p={option:d,index:v,level:i,key:a,parent:s,parentKey:o};p.children=n.createProcessedOptions(n.getOptionGroupChildren(d,i),i+1,p,a),r.push(p)}),r},overlayRef:function(e){this.overlay=e}},computed:{hasSelectedOption:function(){return l.isNotEmpty(this.modelValue)},label:function(){var e=this.placeholder||"p-emptylabel";if(this.hasSelectedOption){var n=this.findOptionPathByValue(this.modelValue),i=l.isNotEmpty(n)?n[n.length-1]:null;return i?this.getOptionLabel(i.option):e}return e},processedOptions:function(){return this.createProcessedOptions(this.options||[])},visibleOptions:function(){var e=this,n=this.activeOptionPath.find(function(i){return i.key===e.focusedOptionInfo.parentKey});return n?n.children:this.processedOptions},equalityKey:function(){return this.optionValue?null:this.dataKey},searchResultMessageText:function(){return l.isNotEmpty(this.visibleOptions)?this.searchMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptySearchMessageText},searchMessageText:function(){return this.searchMessage||this.$primevue.config.locale.searchMessage||""},emptySearchMessageText:function(){return this.emptySearchMessage||this.$primevue.config.locale.emptySearchMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionInfo.index!==-1?"".concat(this.id).concat(l.isNotEmpty(this.focusedOptionInfo.parentKey)?"_"+this.focusedOptionInfo.parentKey:"","_").concat(this.focusedOptionInfo.index):null}},components:{CascadeSelectSub:T,Portal:N,ChevronDownIcon:A,SpinnerIcon:R,AngleRightIcon:E}};function m(t){"@babel/helpers - typeof";return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(t)}function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?D(Object(n),!0).forEach(function(i){oe(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function oe(t,e,n){return e=se(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function se(t){var e=ae(t,"string");return m(e)=="symbol"?e:String(e)}function ae(t,e){if(m(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(m(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var le=["id","disabled","placeholder","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant"];function re(t,e,n,i,s,o){var r=b("SpinnerIcon"),d=b("CascadeSelectSub"),v=b("Portal");return u(),f("div",c({ref:"container",class:t.cx("root"),style:t.sx("root"),onClick:e[5]||(e[5]=function(a){return o.onContainerClick(a)})},t.ptm("root"),{"data-pc-name":"cascadeselect"}),[y("div",c({class:"p-hidden-accessible"},t.ptm("hiddenInputWrapper"),{"data-p-hidden-accessible":!0}),[y("input",c({ref:"focusInput",id:t.inputId,type:"text",class:t.inputClass,style:t.inputStyle,readonly:"",disabled:t.disabled,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"tree","aria-expanded":s.overlayVisible,"aria-controls":s.id+"_tree","aria-activedescendant":s.focused?o.focusedOptionId:void 0,onFocus:e[0]||(e[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onKeydown:e[2]||(e[2]=function(){return o.onKeyDown&&o.onKeyDown.apply(o,arguments)})},S(S({},t.inputProps),t.ptm("input"))),null,16,le)],16),y("span",c({class:t.cx("label")},t.ptm("label")),[C(t.$slots,"value",{value:t.modelValue,placeholder:t.placeholder},function(){return[Z(L(o.label),1)]})],16),y("div",c({class:t.cx("dropdownButton"),role:"button",tabindex:"-1","aria-hidden":"true"},t.ptm("dropdownButton")),[t.loading?C(t.$slots,"loadingicon",{key:0,class:V(t.cx("loadingIcon"))},function(){return[t.loadingIcon?(u(),f("span",c({key:0,class:[t.cx("loadingIcon"),"pi-spin",t.loadingIcon],"aria-hidden":"true"},t.ptm("loadingIcon")),null,16)):(u(),O(r,c({key:1,class:t.cx("loadingIcon"),spin:"","aria-hidden":"true"},t.ptm("loadingIcon")),null,16,["class"]))]}):C(t.$slots,"dropdownicon",{key:1,class:V(t.cx("dropdownIcon"))},function(){return[(u(),O(x(t.dropdownIcon?"span":"ChevronDownIcon"),c({class:[t.cx("dropdownIcon"),t.dropdownIcon],"aria-hidden":"true"},t.ptm("dropdownIcon")),null,16,["class"]))]})],16),y("span",c({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSearchResult"),{"data-p-hidden-accessible":!0}),L(o.searchResultMessageText),17),k(v,{appendTo:t.appendTo},{default:G(function(){return[k(J,c({name:"p-connected-overlay",onEnter:o.onOverlayEnter,onAfterEnter:o.onOverlayAfterEnter,onLeave:o.onOverlayLeave,onAfterLeave:o.onOverlayAfterLeave},t.ptm("transition")),{default:G(function(){return[s.overlayVisible?(u(),f("div",c({key:0,ref:o.overlayRef,class:[t.cx("panel"),t.panelClass],style:t.panelStyle,onClick:e[3]||(e[3]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)}),onKeydown:e[4]||(e[4]=function(){return o.onOverlayKeyDown&&o.onOverlayKeyDown.apply(o,arguments)})},S(S({},t.panelProps),t.ptm("panel"))),[y("div",c({class:t.cx("wrapper")},t.ptm("wrapper")),[k(d,{id:s.id+"_tree",role:"tree","aria-orientation":"horizontal",selectId:s.id,focusedOptionId:s.focused?o.focusedOptionId:void 0,options:o.processedOptions,activeOptionPath:s.activeOptionPath,level:0,templates:t.$slots,optionLabel:t.optionLabel,optionValue:t.optionValue,optionDisabled:t.optionDisabled,optionGroupIcon:t.optionGroupIcon,optionGroupLabel:t.optionGroupLabel,optionGroupChildren:t.optionGroupChildren,onOptionChange:o.onOptionChange,onOptionFocusChange:o.onOptionFocusChange,pt:t.pt,unstyled:t.unstyled},null,8,["id","selectId","focusedOptionId","options","activeOptionPath","templates","optionLabel","optionValue","optionDisabled","optionGroupIcon","optionGroupLabel","optionGroupChildren","onOptionChange","onOptionFocusChange","pt","unstyled"])],16),y("span",c({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),L(o.selectedMessageText),17)],16)):P("",!0)]}),_:1},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:1},8,["appendTo"])],16)}ie.render=re;export{ie as default};
