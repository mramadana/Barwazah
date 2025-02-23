import{af as H,ai as L,as as l,ah as b,au as G,aj as B,ar as N,y as U,an as j,o as h,c as O,a as m,ae as a,ap as g,j as D,p as q,x as z,aq as W,n as J,t as y,g as K,b as Q,aw as X,w as T,F as E,C as Y,d as F}from"./D7HON4Zz.js";import{s as Z}from"./C8WYfqL_.js";import $ from"./BX07nipz.js";import"./Ds-FpX6a.js";var _=`
@layer primevue {
    .p-listbox-list-wrapper {
        overflow: auto;
    }

    .p-listbox-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .p-listbox-item {
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .p-listbox-item-group {
        cursor: auto;
    }

    .p-listbox-filter-container {
        position: relative;
    }

    .p-listbox-filter-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
    }

    .p-listbox-filter {
        width: 100%;
    }
}
`,ee={root:function(e){e.instance;var i=e.props;return["p-listbox p-component",{"p-disabled":i.disabled}]},header:"p-listbox-header",filterContainer:"p-listbox-filter-container",filterInput:"p-listbox-filter p-inputtext p-component",filterIcon:"p-listbox-filter-icon",wrapper:"p-listbox-list-wrapper",list:"p-listbox-list",itemGroup:"p-listbox-item-group",item:function(e){var i=e.instance,s=e.option,o=e.index,n=e.getItemOptions;return["p-listbox-item",{"p-highlight":i.isSelected(s),"p-focus":i.focusedOptionIndex===i.getOptionIndex(o,n),"p-disabled":i.isOptionDisabled(s)}]},emptyMessage:"p-listbox-empty-message"},te=H.extend({name:"listbox",css:_,classes:ee}),ie={name:"BaseListbox",extends:N,props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,listStyle:null,disabled:{type:Boolean,default:!1},dataKey:null,multiple:{type:Boolean,default:!1},metaKeySelection:{type:Boolean,default:!1},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},filterInputProps:null,virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!0},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},filterIcon:{type:String,default:void 0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:te,provide:function(){return{$parentInstance:this}}};function P(t){return re(t)||oe(t)||se(t)||ne()}function ne(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function se(t,e){if(t){if(typeof t=="string")return V(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return V(t,e)}}function oe(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function re(t){if(Array.isArray(t))return V(t)}function V(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}var le={name:"Listbox",extends:ie,emits:["update:modelValue","change","focus","blur","filter"],list:null,virtualScroller:null,optionTouched:!1,startRangeIndex:-1,searchTimeout:null,searchValue:"",data:function(){return{id:this.$attrs.id,filterValue:null,focused:!1,focusedOptionIndex:-1}},watch:{"$attrs.id":function(e){this.id=e||L()},options:function(){this.autoUpdateModel()}},mounted:function(){this.id=this.id||L(),this.autoUpdateModel()},methods:{getOptionIndex:function(e,i){return this.virtualScrollerDisabled?e:i&&i(e).index},getOptionLabel:function(e){return this.optionLabel?l.resolveFieldData(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?l.resolveFieldData(e,this.optionValue):e},getOptionRenderKey:function(e,i){return(this.dataKey?l.resolveFieldData(e,this.dataKey):this.getOptionLabel(e))+"_"+i},getPTOptions:function(e,i,s,o){return this.ptm(o,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(s,i),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?l.resolveFieldData(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return l.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return l.resolveFieldData(e,this.optionGroupChildren)},getAriaPosInset:function(e){var i=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(s){return i.isOptionGroup(s)}).length:e)+1},onFirstHiddenFocus:function(){b.focus(this.list);var e=b.getFirstFocusableElement(this.$el,':not([data-p-hidden-focusable="true"])');this.$refs.lastHiddenFocusableElement.tabIndex=b.isElement(e)?void 0:-1,this.$refs.firstHiddenFocusableElement.tabIndex=-1},onLastHiddenFocus:function(e){var i=e.relatedTarget;if(i===this.list){var s=b.getFirstFocusableElement(this.$el,':not([data-p-hidden-focusable="true"])');b.focus(s),this.$refs.firstHiddenFocusableElement.tabIndex=void 0}else b.focus(this.$refs.firstHiddenFocusableElement);this.$refs.lastHiddenFocusableElement.tabIndex=-1},onFocusout:function(e){!this.$el.contains(e.relatedTarget)&&this.$refs.lastHiddenFocusableElement&&this.$refs.firstHiddenFocusableElement&&(this.$refs.lastHiddenFocusableElement.tabIndex=this.$refs.firstHiddenFocusableElement.tabIndex=void 0)},onListFocus:function(e){this.focused=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),this.autoUpdateModel(),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=this.startRangeIndex=-1,this.searchValue="",this.$emit("blur",e)},onListKeyDown:function(e){var i=this,s=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onSpaceKey(e);break;case"Tab":break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(e);break;default:if(this.multiple&&e.code==="KeyA"&&s){var o=this.visibleOptions.filter(function(n){return i.isValidOption(n)}).map(function(n){return i.getOptionValue(n)});this.updateModel(e,o),e.preventDefault();break}!s&&l.isPrintableCharacter(e.key)&&(this.searchOptions(e,e.key),e.preventDefault());break}},onOptionSelect:function(e,i){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;this.disabled||this.isOptionDisabled(i)||(this.multiple?this.onOptionSelectMultiple(e,i):this.onOptionSelectSingle(e,i),this.optionTouched=!1,s!==-1&&(this.focusedOptionIndex=s))},onOptionMouseDown:function(e,i){this.changeFocusedOptionIndex(e,i)},onOptionMouseMove:function(e,i){this.focusOnHover&&this.focused&&this.changeFocusedOptionIndex(e,i)},onOptionTouchEnd:function(){this.disabled||(this.optionTouched=!0)},onOptionSelectSingle:function(e,i){var s=this.isSelected(i),o=!1,n=null,u=this.optionTouched?!1:this.metaKeySelection;if(u){var f=e&&(e.metaKey||e.ctrlKey);s?f&&(n=null,o=!0):(n=this.getOptionValue(i),o=!0)}else n=s?null:this.getOptionValue(i),o=!0;o&&this.updateModel(e,n)},onOptionSelectMultiple:function(e,i){var s=this.isSelected(i),o=null,n=this.optionTouched?!1:this.metaKeySelection;if(n){var u=e.metaKey||e.ctrlKey;s?o=u?this.removeOption(i):[this.getOptionValue(i)]:(o=u?this.modelValue||[]:[],o=[].concat(P(o),[this.getOptionValue(i)]))}else o=s?this.removeOption(i):[].concat(P(this.modelValue||[]),[this.getOptionValue(i)]);this.updateModel(e,o)},onOptionSelectRange:function(e){var i=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;if(s===-1&&(s=this.findNearestSelectedOptionIndex(o,!0)),o===-1&&(o=this.findNearestSelectedOptionIndex(s)),s!==-1&&o!==-1){var n=Math.min(s,o),u=Math.max(s,o),f=this.visibleOptions.slice(n,u+1).filter(function(r){return i.isValidOption(r)}).map(function(r){return i.getOptionValue(r)});this.updateModel(e,f)}},onFilterChange:function(e){this.$emit("filter",{originalEvent:e,value:e.target.value}),this.focusedOptionIndex=this.startRangeIndex=-1},onFilterBlur:function(){this.focusedOptionIndex=this.startRangeIndex=-1},onFilterKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(e);break}},onArrowDownKey:function(e){var i=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.findFirstFocusedOptionIndex();this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex,i),this.changeFocusedOptionIndex(e,i),e.preventDefault()},onArrowUpKey:function(e){var i=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.findLastFocusedOptionIndex();this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,i,this.startRangeIndex),this.changeFocusedOptionIndex(e,i),e.preventDefault()},onArrowLeftKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;i&&(this.focusedOptionIndex=-1)},onHomeKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(i)e.currentTarget.setSelectionRange(0,0),this.focusedOptionIndex=-1;else{var s=e.metaKey||e.ctrlKey,o=this.findFirstOptionIndex();this.multiple&&e.shiftKey&&s&&this.onOptionSelectRange(e,o,this.startRangeIndex),this.changeFocusedOptionIndex(e,o)}e.preventDefault()},onEndKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(i){var s=e.currentTarget,o=s.value.length;s.setSelectionRange(o,o),this.focusedOptionIndex=-1}else{var n=e.metaKey||e.ctrlKey,u=this.findLastOptionIndex();this.multiple&&e.shiftKey&&n&&this.onOptionSelectRange(e,this.startRangeIndex,u),this.changeFocusedOptionIndex(e,u)}e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.focusedOptionIndex!==-1&&(this.multiple&&e.shiftKey?this.onOptionSelectRange(e,this.focusedOptionIndex):this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex])),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onShiftKey:function(){this.startRangeIndex=this.focusedOptionIndex},isOptionMatched:function(e){var i;return this.isValidOption(e)&&((i=this.getOptionLabel(e))===null||i===void 0?void 0:i.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)))},isValidOption:function(e){return l.isNotEmpty(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isEquals:function(e,i){return l.equals(e,i,this.equalityKey)},isSelected:function(e){var i=this,s=this.getOptionValue(e);return this.multiple?(this.modelValue||[]).some(function(o){return i.isEquals(o,s)}):this.isEquals(this.modelValue,s)},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(i){return e.isValidOption(i)})},findLastOptionIndex:function(){var e=this;return l.findLastIndex(this.visibleOptions,function(i){return e.isValidOption(i)})},findNextOptionIndex:function(e){var i=this,s=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(o){return i.isValidOption(o)}):-1;return s>-1?s+e+1:e},findPrevOptionIndex:function(e){var i=this,s=e>0?l.findLastIndex(this.visibleOptions.slice(0,e),function(o){return i.isValidOption(o)}):-1;return s>-1?s:e},findSelectedOptionIndex:function(){var e=this;if(this.hasSelectedOption)if(this.multiple){for(var i=function(){var u=e.modelValue[o],f=e.visibleOptions.findIndex(function(r){return e.isValidSelectedOption(r)&&e.isEquals(u,e.getOptionValue(r))});if(f>-1)return{v:f}},s,o=this.modelValue.length-1;o>=0;o--)if(s=i(),s)return s.v}else return this.visibleOptions.findIndex(function(n){return e.isValidSelectedOption(n)});return-1},findFirstSelectedOptionIndex:function(){var e=this;return this.hasSelectedOption?this.visibleOptions.findIndex(function(i){return e.isValidSelectedOption(i)}):-1},findLastSelectedOptionIndex:function(){var e=this;return this.hasSelectedOption?l.findLastIndex(this.visibleOptions,function(i){return e.isValidSelectedOption(i)}):-1},findNextSelectedOptionIndex:function(e){var i=this,s=this.hasSelectedOption&&e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(o){return i.isValidSelectedOption(o)}):-1;return s>-1?s+e+1:-1},findPrevSelectedOptionIndex:function(e){var i=this,s=this.hasSelectedOption&&e>0?l.findLastIndex(this.visibleOptions.slice(0,e),function(o){return i.isValidSelectedOption(o)}):-1;return s>-1?s:-1},findNearestSelectedOptionIndex:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=-1;return this.hasSelectedOption&&(i?(s=this.findPrevSelectedOptionIndex(e),s=s===-1?this.findNextSelectedOptionIndex(e):s):(s=this.findNextSelectedOptionIndex(e),s=s===-1?this.findPrevSelectedOptionIndex(e):s)),s>-1?s:e},findFirstFocusedOptionIndex:function(){var e=this.findFirstSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findLastSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions:function(e,i){var s=this;this.searchValue=(this.searchValue||"")+i;var o=-1;l.isNotEmpty(this.searchValue)&&(this.focusedOptionIndex!==-1?(o=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(n){return s.isOptionMatched(n)}),o=o===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(function(n){return s.isOptionMatched(n)}):o+this.focusedOptionIndex):o=this.visibleOptions.findIndex(function(n){return s.isOptionMatched(n)}),o===-1&&this.focusedOptionIndex===-1&&(o=this.findFirstFocusedOptionIndex()),o!==-1&&this.changeFocusedOptionIndex(e,o)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){s.searchValue="",s.searchTimeout=null},500)},removeOption:function(e){var i=this;return this.modelValue.filter(function(s){return!l.equals(s,i.getOptionValue(e),i.equalityKey)})},changeFocusedOptionIndex:function(e,i){this.focusedOptionIndex!==i&&(this.focusedOptionIndex=i,this.scrollInView(),this.selectOnFocus&&!this.multiple&&this.onOptionSelect(e,this.visibleOptions[i]))},scrollInView:function(){var e=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var s=i!==-1?"".concat(e.id,"_").concat(i):e.focusedOptionId,o=b.findSingle(e.list,'li[id="'.concat(s,'"]'));o?o.scrollIntoView&&o.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(i!==-1?i:e.focusedOptionIndex)})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&!this.multiple&&this.focused&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex]))},updateModel:function(e,i){this.$emit("update:modelValue",i),this.$emit("change",{originalEvent:e,value:i})},flatOptions:function(e){var i=this;return(e||[]).reduce(function(s,o,n){s.push({optionGroup:o,group:!0,index:n});var u=i.getOptionGroupChildren(o);return u&&u.forEach(function(f){return s.push(f)}),s},[])},listRef:function(e,i){this.list=e,i&&i(e)},virtualScrollerRef:function(e){this.virtualScroller=e}},computed:{visibleOptions:function(){var e=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];return this.filterValue?G.filter(e,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale):e},hasSelectedOption:function(){return l.isNotEmpty(this.modelValue)},equalityKey:function(){return this.optionValue?null:this.dataKey},searchFields:function(){return this.filterFields||[this.optionLabel]},filterResultMessageText:function(){return l.isNotEmpty(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText:function(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText:function(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue.length:"1"):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(i){return!e.isOptionGroup(i)}).length},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions}},directives:{ripple:B},components:{VirtualScroller:$,SearchIcon:Z}};function v(t){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(t)}function A(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,s)}return i}function R(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?A(Object(i),!0).forEach(function(s){ae(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):A(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function ae(t,e,i){return e=ue(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function ue(t){var e=de(t,"string");return v(e)=="symbol"?e:String(e)}function de(t,e){if(v(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,e||"default");if(v(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var pe=["id"],ce=["tabindex"],fe=["placeholder","aria-owns","aria-activedescendant","tabindex"],he=["id","aria-multiselectable","aria-label","aria-labelledby","aria-activedescendant","aria-disabled"],Oe=["id"],me=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousedown","onMousemove","data-p-highlight","data-p-focused","data-p-disabled"],ge=["tabindex"];function be(t,e,i,s,o,n){var u=U("VirtualScroller"),f=j("ripple");return h(),O("div",a({id:o.id,class:t.cx("root"),onFocusout:e[10]||(e[10]=function(){return n.onFocusout&&n.onFocusout.apply(n,arguments)})},t.ptm("root"),{"data-pc-name":"listbox"}),[m("span",a({ref:"firstHiddenFocusableElement",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:t.disabled?-1:t.tabindex,onFocus:e[0]||(e[0]=function(){return n.onFirstHiddenFocus&&n.onFirstHiddenFocus.apply(n,arguments)})},t.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16,ce),g(t.$slots,"header",{value:t.modelValue,options:n.visibleOptions}),t.filter?(h(),O("div",a({key:0,class:t.cx("header")},t.ptm("header")),[m("div",a({class:t.cx("filterContainer")},t.ptm("filterContainer")),[D(m("input",a({ref:"filterInput","onUpdate:modelValue":e[1]||(e[1]=function(r){return o.filterValue=r}),type:"text",class:t.cx("filterInput"),placeholder:t.filterPlaceholder,role:"searchbox",autocomplete:"off","aria-owns":o.id+"_list","aria-activedescendant":n.focusedOptionId,tabindex:!t.disabled&&!o.focused?t.tabindex:-1,onInput:e[2]||(e[2]=function(){return n.onFilterChange&&n.onFilterChange.apply(n,arguments)}),onBlur:e[3]||(e[3]=function(){return n.onFilterBlur&&n.onFilterBlur.apply(n,arguments)}),onKeydown:e[4]||(e[4]=function(){return n.onFilterKeyDown&&n.onFilterKeyDown.apply(n,arguments)})},R(R({},t.filterInputProps),t.ptm("filterInput"))),null,16,fe),[[q,o.filterValue]]),g(t.$slots,"filtericon",{class:J(t.cx("filterIcon"))},function(){return[(h(),z(W(t.filterIcon?"span":"SearchIcon"),a({class:[t.cx("filterIcon"),t.filterIcon]},t.ptm("filterIcon")),null,16,["class"]))]})],16),m("span",a({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenFilterResult"),{"data-p-hidden-accessible":!0}),y(n.filterResultMessageText),17)],16)):K("",!0),m("div",a({ref:"listWrapper",class:t.cx("wrapper"),style:t.listStyle},t.ptm("wrapper")),[Q(u,a({ref:n.virtualScrollerRef},t.virtualScrollerOptions,{style:t.listStyle,items:n.visibleOptions,tabindex:-1,disabled:n.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),X({content:T(function(r){var M=r.styleClass,k=r.contentRef,S=r.items,c=r.getItemOptions,C=r.contentStyle,x=r.itemSize;return[m("ul",a({ref:function(p){return n.listRef(p,k)},id:o.id+"_list",class:[t.cx("list"),M],style:C,tabindex:-1,role:"listbox","aria-multiselectable":t.multiple,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-activedescendant":o.focused?n.focusedOptionId:void 0,"aria-disabled":t.disabled,onFocus:e[6]||(e[6]=function(){return n.onListFocus&&n.onListFocus.apply(n,arguments)}),onBlur:e[7]||(e[7]=function(){return n.onListBlur&&n.onListBlur.apply(n,arguments)}),onKeydown:e[8]||(e[8]=function(){return n.onListKeyDown&&n.onListKeyDown.apply(n,arguments)})},t.ptm("list")),[(h(!0),O(E,null,Y(S,function(d,p){return h(),O(E,{key:n.getOptionRenderKey(d,n.getOptionIndex(p,c))},[n.isOptionGroup(d)?(h(),O("li",a({key:0,id:o.id+"_"+n.getOptionIndex(p,c),style:{height:x?x+"px":void 0},class:t.cx("itemGroup"),role:"option"},t.ptm("itemGroup")),[g(t.$slots,"optiongroup",{option:d.optionGroup,index:n.getOptionIndex(p,c)},function(){return[F(y(n.getOptionGroupLabel(d.optionGroup)),1)]})],16,Oe)):D((h(),O("li",a({key:1,id:o.id+"_"+n.getOptionIndex(p,c),style:{height:x?x+"px":void 0},class:t.cx("item",{option:d,index:p,getItemOptions:c}),role:"option","aria-label":n.getOptionLabel(d),"aria-selected":n.isSelected(d),"aria-disabled":n.isOptionDisabled(d),"aria-setsize":n.ariaSetSize,"aria-posinset":n.getAriaPosInset(n.getOptionIndex(p,c)),onClick:function(I){return n.onOptionSelect(I,d,n.getOptionIndex(p,c))},onMousedown:function(I){return n.onOptionMouseDown(I,n.getOptionIndex(p,c))},onMousemove:function(I){return n.onOptionMouseMove(I,n.getOptionIndex(p,c))},onTouchend:e[5]||(e[5]=function(w){return n.onOptionTouchEnd()})},n.getPTOptions(d,c,p,"item"),{"data-p-highlight":n.isSelected(d),"data-p-focused":o.focusedOptionIndex===n.getOptionIndex(p,c),"data-p-disabled":n.isOptionDisabled(d)}),[g(t.$slots,"option",{option:d,index:n.getOptionIndex(p,c)},function(){return[F(y(n.getOptionLabel(d)),1)]})],16,me)),[[f]])],64)}),128)),o.filterValue&&(!S||S&&S.length===0)?(h(),O("li",a({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[g(t.$slots,"emptyfilter",{},function(){return[F(y(n.emptyFilterMessageText),1)]})],16)):!t.options||t.options&&t.options.length===0?(h(),O("li",a({key:1,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[g(t.$slots,"empty",{},function(){return[F(y(n.emptyMessageText),1)]})],16)):K("",!0)],16,he)]}),_:2},[t.$slots.loader?{name:"loader",fn:T(function(r){var M=r.options;return[g(t.$slots,"loader",{options:M})]}),key:"0"}:void 0]),1040,["style","items","disabled","pt"])],16),g(t.$slots,"footer",{value:t.modelValue,options:n.visibleOptions}),!t.options||t.options&&t.options.length===0?(h(),O("span",a({key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenEmptyMessage"),{"data-p-hidden-accessible":!0}),y(n.emptyMessageText),17)):K("",!0),m("span",a({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),y(n.selectedMessageText),17),m("span",a({ref:"lastHiddenFocusableElement",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:t.disabled?-1:t.tabindex,onFocus:e[9]||(e[9]=function(){return n.onLastHiddenFocus&&n.onLastHiddenFocus.apply(n,arguments)})},t.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16,ge)],16,pe)}le.render=be;export{le as default};
