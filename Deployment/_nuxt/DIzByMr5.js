import _ from"./BrkESdj5.js";import{s as z}from"./79RUUTWI.js";import{s as W}from"./B5RS-DZ7.js";import H from"./BZb6lpDw.js";import{aj as q,av as U,al as S,au as J,y as A,o as m,c as R,b as $,ai as c,w as x,as as v,x as w,at as B,aG as D,g as V}from"./CXyoKjyT.js";import"./ubPw9CTt.js";import"./vLCjrXNG.js";var Q=`
@layer primevue {
    .p-inputnumber {
        display: inline-flex;
    }

    .p-inputnumber-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
    }

    .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,
    .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label {
        display: none;
    }

    .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        padding: 0;
    }

    .p-inputnumber-buttons-stacked .p-inputnumber-input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0;
        padding: 0;
    }

    .p-inputnumber-buttons-stacked .p-inputnumber-button-group {
        display: flex;
        flex-direction: column;
    }

    .p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {
        flex: 1 1 auto;
    }

    .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {
        order: 3;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .p-inputnumber-buttons-horizontal .p-inputnumber-input {
        order: 2;
        border-radius: 0;
    }

    .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {
        order: 1;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .p-inputnumber-buttons-vertical {
        flex-direction: column;
    }

    .p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up {
        order: 1;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        width: 100%;
    }

    .p-inputnumber-buttons-vertical .p-inputnumber-input {
        order: 2;
        border-radius: 0;
        text-align: center;
    }

    .p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down {
        order: 3;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        width: 100%;
    }

    .p-inputnumber-input {
        flex: 1 1 auto;
    }

    .p-fluid .p-inputnumber {
        width: 100%;
    }

    .p-fluid .p-inputnumber .p-inputnumber-input {
        width: 1%;
    }

    .p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {
        width: 100%;
    }
}
`,X={root:function(e){var t=e.instance,i=e.props;return["p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":t.filled||i.allowEmpty===!1,"p-inputwrapper-focus":t.focused,"p-inputnumber-buttons-stacked":i.showButtons&&i.buttonLayout==="stacked","p-inputnumber-buttons-horizontal":i.showButtons&&i.buttonLayout==="horizontal","p-inputnumber-buttons-vertical":i.showButtons&&i.buttonLayout==="vertical"}]},input:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:function(e){var t=e.instance,i=e.props;return["p-inputnumber-button p-inputnumber-button-up",{"p-disabled":i.showButtons&&i.max!==null&&t.maxBoundry()}]},decrementButton:function(e){var t=e.instance,i=e.props;return["p-inputnumber-button p-inputnumber-button-down",{"p-disabled":i.showButtons&&i.min!==null&&t.minBoundry()}]}},Y=q.extend({name:"inputnumber",css:Q,classes:X}),Z={name:"BaseInputNumber",extends:J,props:{modelValue:{type:Number,default:null},format:{type:Boolean,default:!0},showButtons:{type:Boolean,default:!1},buttonLayout:{type:String,default:"stacked"},incrementButtonClass:{type:String,default:null},decrementButtonClass:{type:String,default:null},incrementButtonIcon:{type:String,default:void 0},decrementButtonIcon:{type:String,default:void 0},locale:{type:String,default:void 0},localeMatcher:{type:String,default:void 0},mode:{type:String,default:"decimal"},prefix:{type:String,default:null},suffix:{type:String,default:null},currency:{type:String,default:void 0},currencyDisplay:{type:String,default:void 0},useGrouping:{type:Boolean,default:!0},minFractionDigits:{type:Number,default:void 0},maxFractionDigits:{type:Number,default:void 0},roundingMode:{type:String,default:"halfExpand",validator:function(e){return["ceil","floor","expand","trunc","halfCeil","halfFloor","halfExpand","halfTrunc","halfEven"].includes(e)}},min:{type:Number,default:null},max:{type:Number,default:null},step:{type:Number,default:1},allowEmpty:{type:Boolean,default:!0},highlightOnFocus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},incrementButtonProps:{type:null,default:null},decrementButtonProps:{type:null,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Y,provide:function(){return{$parentInstance:this}}};function I(n){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(n)}function L(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable})),t.push.apply(t,i)}return t}function T(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?L(Object(t),!0).forEach(function(i){ee(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function ee(n,e,t){return e=te(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function te(n){var e=ne(n,"string");return I(e)=="symbol"?e:String(e)}function ne(n,e){if(I(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(I(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function ie(n){return ae(n)||se(n)||ue(n)||re()}function re(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ue(n,e){if(n){if(typeof n=="string")return M(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return M(n,e)}}function se(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ae(n){if(Array.isArray(n))return M(n)}function M(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var oe={name:"InputNumber",extends:Z,emits:["update:modelValue","input","focus","blur"],numberFormat:null,_numeral:null,_decimal:null,_group:null,_minusSign:null,_currency:null,_suffix:null,_prefix:null,_index:null,groupChar:"",isSpecialChar:null,prefixChar:null,suffixChar:null,timer:null,data:function(){return{d_modelValue:this.modelValue,focused:!1}},watch:{modelValue:function(e){this.d_modelValue=e},locale:function(e,t){this.updateConstructParser(e,t)},localeMatcher:function(e,t){this.updateConstructParser(e,t)},mode:function(e,t){this.updateConstructParser(e,t)},currency:function(e,t){this.updateConstructParser(e,t)},currencyDisplay:function(e,t){this.updateConstructParser(e,t)},useGrouping:function(e,t){this.updateConstructParser(e,t)},minFractionDigits:function(e,t){this.updateConstructParser(e,t)},maxFractionDigits:function(e,t){this.updateConstructParser(e,t)},suffix:function(e,t){this.updateConstructParser(e,t)},prefix:function(e,t){this.updateConstructParser(e,t)}},created:function(){this.constructParser()},methods:{getOptions:function(){return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:this.minFractionDigits,maximumFractionDigits:this.maxFractionDigits,roundingMode:this.roundingMode}},constructParser:function(){this.numberFormat=new Intl.NumberFormat(this.locale,this.getOptions());var e=ie(new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)).reverse(),t=new Map(e.map(function(i,u){return[i,u]}));this._numeral=new RegExp("[".concat(e.join(""),"]"),"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=function(i){return t.get(i)}},updateConstructParser:function(e,t){e!==t&&this.constructParser()},escapeRegExp:function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},getDecimalExpression:function(){var e=new Intl.NumberFormat(this.locale,T(T({},this.getOptions()),{},{useGrouping:!1}));return new RegExp("[".concat(e.format(1.1).replace(this._currency,"").trim().replace(this._numeral,""),"]"),"g")},getGroupingExpression:function(){var e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp("[".concat(this.groupChar,"]"),"g")},getMinusSignExpression:function(){var e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp("[".concat(e.format(-1).trim().replace(this._numeral,""),"]"),"g")},getCurrencyExpression:function(){if(this.currency){var e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0,roundingMode:this.roundingMode});return new RegExp("[".concat(e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,""),"]"),"g")}return new RegExp("[]","g")},getPrefixExpression:function(){if(this.prefix)this.prefixChar=this.prefix;else{var e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp("".concat(this.escapeRegExp(this.prefixChar||"")),"g")},getSuffixExpression:function(){if(this.suffix)this.suffixChar=this.suffix;else{var e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0,roundingMode:this.roundingMode});this.suffixChar=e.format(1).split("1")[1]}return new RegExp("".concat(this.escapeRegExp(this.suffixChar||"")),"g")},formatValue:function(e){if(e!=null){if(e==="-")return e;if(this.format){var t=new Intl.NumberFormat(this.locale,this.getOptions()),i=t.format(e);return this.prefix&&(i=this.prefix+i),this.suffix&&(i=i+this.suffix),i}return e.toString()}return""},parseValue:function(e){var t=e.replace(this._suffix,"").replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(t){if(t==="-")return t;var i=+t;return isNaN(i)?null:i}return null},repeat:function(e,t,i){var u=this;if(!this.readonly){var r=t||500;this.clearTimer(),this.timer=setTimeout(function(){u.repeat(e,40,i)},r),this.spin(e,i)}},spin:function(e,t){if(this.$refs.input){var i=this.step*t,u=this.parseValue(this.$refs.input.$el.value)||0,r=this.validateValue(u+i);this.updateInput(r,null,"spin"),this.updateModel(e,r),this.handleOnInput(e,u,r)}},onUpButtonMouseDown:function(e){this.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,1),e.preventDefault())},onUpButtonMouseUp:function(){this.disabled||this.clearTimer()},onUpButtonMouseLeave:function(){this.disabled||this.clearTimer()},onUpButtonKeyUp:function(){this.disabled||this.clearTimer()},onUpButtonKeyDown:function(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)},onDownButtonMouseDown:function(e){this.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,-1),e.preventDefault())},onDownButtonMouseUp:function(){this.disabled||this.clearTimer()},onDownButtonMouseLeave:function(){this.disabled||this.clearTimer()},onDownButtonKeyUp:function(){this.disabled||this.clearTimer()},onDownButtonKeyDown:function(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)},onUserInput:function(){this.isSpecialChar&&(this.$refs.input.$el.value=this.lastValue),this.isSpecialChar=!1},onInputKeyDown:function(e){if(!this.readonly){if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}var t=e.target.selectionStart,i=e.target.selectionEnd,u=e.target.value,r=null;switch(e.altKey&&e.preventDefault(),e.code){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":this.isNumeralChar(u.charAt(t-1))||e.preventDefault();break;case"ArrowRight":this.isNumeralChar(u.charAt(t))||e.preventDefault();break;case"Tab":case"Enter":case"NumpadEnter":r=this.validateValue(this.parseValue(u)),this.$refs.input.$el.value=this.formatValue(r),this.$refs.input.$el.setAttribute("aria-valuenow",r),this.updateModel(e,r);break;case"Backspace":{if(e.preventDefault(),t===i){var s=u.charAt(t-1),a=this.getDecimalCharIndexes(u),h=a.decimalCharIndex,p=a.decimalCharIndexWithoutPrefix;if(this.isNumeralChar(s)){var g=this.getDecimalLength(u);if(this._group.test(s))this._group.lastIndex=0,r=u.slice(0,t-2)+u.slice(t-1);else if(this._decimal.test(s))this._decimal.lastIndex=0,g?this.$refs.input.$el.setSelectionRange(t-1,t-1):r=u.slice(0,t-1)+u.slice(t);else if(h>0&&t>h){var o=this.isDecimalMode()&&(this.minFractionDigits||0)<g?"":"0";r=u.slice(0,t-1)+o+u.slice(t)}else p===1?(r=u.slice(0,t-1)+"0"+u.slice(t),r=this.parseValue(r)>0?r:""):r=u.slice(0,t-1)+u.slice(t)}this.updateValue(e,r,null,"delete-single")}else r=this.deleteRange(u,t,i),this.updateValue(e,r,null,"delete-range");break}case"Delete":if(e.preventDefault(),t===i){var d=u.charAt(t),l=this.getDecimalCharIndexes(u),b=l.decimalCharIndex,y=l.decimalCharIndexWithoutPrefix;if(this.isNumeralChar(d)){var f=this.getDecimalLength(u);if(this._group.test(d))this._group.lastIndex=0,r=u.slice(0,t)+u.slice(t+2);else if(this._decimal.test(d))this._decimal.lastIndex=0,f?this.$refs.input.$el.setSelectionRange(t+1,t+1):r=u.slice(0,t)+u.slice(t+1);else if(b>0&&t>b){var C=this.isDecimalMode()&&(this.minFractionDigits||0)<f?"":"0";r=u.slice(0,t)+C+u.slice(t+1)}else y===1?(r=u.slice(0,t)+"0"+u.slice(t+1),r=this.parseValue(r)>0?r:""):r=u.slice(0,t)+u.slice(t+1)}this.updateValue(e,r,null,"delete-back-single")}else r=this.deleteRange(u,t,i),this.updateValue(e,r,null,"delete-range");break;case"Home":e.preventDefault(),U.isEmpty(this.min)||this.updateModel(e,this.min);break;case"End":e.preventDefault(),U.isEmpty(this.max)||this.updateModel(e,this.max);break}}},onInputKeyPress:function(e){if(!this.readonly){e.preventDefault();var t=e.which||e.keyCode,i=String.fromCharCode(t),u=this.isDecimalSign(i),r=this.isMinusSign(i);(48<=t&&t<=57||r||u)&&this.insert(e,i,{isDecimalSign:u,isMinusSign:r})}},onPaste:function(e){e.preventDefault();var t=(e.clipboardData||window.clipboardData).getData("Text");if(t){var i=this.parseValue(t);i!=null&&this.insert(e,i.toString())}},allowMinusSign:function(){return this.min===null||this.min<0},isMinusSign:function(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1},isDecimalSign:function(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1},isDecimalMode:function(){return this.mode==="decimal"},getDecimalCharIndexes:function(e){var t=e.search(this._decimal);this._decimal.lastIndex=0;var i=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,""),u=i.search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:t,decimalCharIndexWithoutPrefix:u}},getCharIndexes:function(e){var t=e.search(this._decimal);this._decimal.lastIndex=0;var i=e.search(this._minusSign);this._minusSign.lastIndex=0;var u=e.search(this._suffix);this._suffix.lastIndex=0;var r=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:t,minusCharIndex:i,suffixCharIndex:u,currencyCharIndex:r}},insert:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{isDecimalSign:!1,isMinusSign:!1},u=t.search(this._minusSign);if(this._minusSign.lastIndex=0,!(!this.allowMinusSign()&&u!==-1)){var r=this.$refs.input.$el.selectionStart,s=this.$refs.input.$el.selectionEnd,a=this.$refs.input.$el.value.trim(),h=this.getCharIndexes(a),p=h.decimalCharIndex,g=h.minusCharIndex,o=h.suffixCharIndex,d=h.currencyCharIndex,l;if(i.isMinusSign)r===0&&(l=a,(g===-1||s!==0)&&(l=this.insertText(a,t,0,s)),this.updateValue(e,l,t,"insert"));else if(i.isDecimalSign)p>0&&r===p?this.updateValue(e,a,t,"insert"):p>r&&p<s?(l=this.insertText(a,t,r,s),this.updateValue(e,l,t,"insert")):p===-1&&this.maxFractionDigits&&(l=this.insertText(a,t,r,s),this.updateValue(e,l,t,"insert"));else{var b=this.numberFormat.resolvedOptions().maximumFractionDigits,y=r!==s?"range-insert":"insert";if(p>0&&r>p){if(r+t.length-(p+1)<=b){var f=d>=r?d-1:o>=r?o:a.length;l=a.slice(0,r)+t+a.slice(r+t.length,f)+a.slice(f),this.updateValue(e,l,t,y)}}else l=this.insertText(a,t,r,s),this.updateValue(e,l,t,y)}}},insertText:function(e,t,i,u){var r=t==="."?t:t.split(".");if(r.length===2){var s=e.slice(i,u).search(this._decimal);return this._decimal.lastIndex=0,s>0?e.slice(0,i)+this.formatValue(t)+e.slice(u):this.formatValue(t)||e}else return u-i===e.length?this.formatValue(t):i===0?t+e.slice(u):u===e.length?e.slice(0,i)+t:e.slice(0,i)+t+e.slice(u)},deleteRange:function(e,t,i){var u;return i-t===e.length?u="":t===0?u=e.slice(i):i===e.length?u=e.slice(0,t):u=e.slice(0,t)+e.slice(i),u},initCursor:function(){var e=this.$refs.input.$el.selectionStart,t=this.$refs.input.$el.value,i=t.length,u=null,r=(this.prefixChar||"").length;t=t.replace(this._prefix,""),e=e-r;var s=t.charAt(e);if(this.isNumeralChar(s))return e+r;for(var a=e-1;a>=0;)if(s=t.charAt(a),this.isNumeralChar(s)){u=a+r;break}else a--;if(u!==null)this.$refs.input.$el.setSelectionRange(u+1,u+1);else{for(a=e;a<i;)if(s=t.charAt(a),this.isNumeralChar(s)){u=a+r;break}else a++;u!==null&&this.$refs.input.$el.setSelectionRange(u,u)}return u||0},onInputClick:function(){var e=this.$refs.input.$el.value;!this.readonly&&e!==S.getSelection()&&this.initCursor()},isNumeralChar:function(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1},resetRegex:function(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0},updateValue:function(e,t,i,u){var r=this.$refs.input.$el.value,s=null;t!=null&&(s=this.parseValue(t),s=!s&&!this.allowEmpty?0:s,this.updateInput(s,i,u,t),this.handleOnInput(e,r,s))},handleOnInput:function(e,t,i){this.isValueChanged(t,i)&&this.$emit("input",{originalEvent:e,value:i,formattedValue:t})},isValueChanged:function(e,t){if(t===null&&e!==null)return!0;if(t!=null){var i=typeof e=="string"?this.parseValue(e):e;return t!==i}return!1},validateValue:function(e){return e==="-"||e==null?null:this.min!=null&&e<this.min?this.min:this.max!=null&&e>this.max?this.max:e},updateInput:function(e,t,i,u){t=t||"";var r=this.$refs.input.$el.value,s=this.formatValue(e),a=r.length;if(s!==u&&(s=this.concatValues(s,u)),a===0){this.$refs.input.$el.value=s,this.$refs.input.$el.setSelectionRange(0,0);var h=this.initCursor(),p=h+t.length;this.$refs.input.$el.setSelectionRange(p,p)}else{var g=this.$refs.input.$el.selectionStart,o=this.$refs.input.$el.selectionEnd;this.$refs.input.$el.value=s;var d=s.length;if(i==="range-insert"){var l=this.parseValue((r||"").slice(0,g)),b=l!==null?l.toString():"",y=b.split("").join("(".concat(this.groupChar,")?")),f=new RegExp(y,"g");f.test(s);var C=t.split("").join("(".concat(this.groupChar,")?")),P=new RegExp(C,"g");P.test(s.slice(f.lastIndex)),o=f.lastIndex+P.lastIndex,this.$refs.input.$el.setSelectionRange(o,o)}else if(d===a)if(i==="insert"||i==="delete-back-single"){var k=/[.,]/g,F=o+Number(k.test(e)||k.test(t));this.$refs.input.$el.setSelectionRange(F,F)}else i==="delete-single"?this.$refs.input.$el.setSelectionRange(o-1,o-1):(i==="delete-range"||i==="spin")&&this.$refs.input.$el.setSelectionRange(o,o);else if(i==="delete-back-single"){var K=r.charAt(o-1),j=r.charAt(o),N=a-d,O=this._group.test(j);O&&N===1?o+=1:!O&&this.isNumeralChar(K)&&(o+=-1*N+1),this._group.lastIndex=0,this.$refs.input.$el.setSelectionRange(o,o)}else if(r==="-"&&i==="insert"){this.$refs.input.$el.setSelectionRange(0,0);var G=this.initCursor(),E=G+t.length+1;this.$refs.input.$el.setSelectionRange(E,E)}else o=o+(d-a),this.$refs.input.$el.setSelectionRange(o,o)}this.$refs.input.$el.setAttribute("aria-valuenow",e)},concatValues:function(e,t){if(e&&t){var i=t.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?i!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+t.replace(this.suffixChar,"").slice(i)+this.suffixChar:e:i!==-1?e.split(this._decimal)[0]+t.slice(i):e}return e},getDecimalLength:function(e){if(e){var t=e.split(this._decimal);if(t.length===2)return t[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0},updateModel:function(e,t){this.d_modelValue=t,this.$emit("update:modelValue",t)},onInputFocus:function(e){this.focused=!0,!this.disabled&&!this.readonly&&this.$refs.input.$el.value!==S.getSelection()&&this.highlightOnFocus&&e.target.select(),this.$emit("focus",e)},onInputBlur:function(e){this.focused=!1;var t=e.target,i=this.validateValue(this.parseValue(t.value));this.$emit("blur",{originalEvent:e,value:t.value}),t.value=this.formatValue(i),t.setAttribute("aria-valuenow",i),this.updateModel(e,i),!this.disabled&&!this.readonly&&this.highlightOnFocus&&S.clearSelection()},clearTimer:function(){this.timer&&clearInterval(this.timer)},maxBoundry:function(){return this.d_modelValue>=this.max},minBoundry:function(){return this.d_modelValue<=this.min}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},upButtonListeners:function(){var e=this;return{mousedown:function(i){return e.onUpButtonMouseDown(i)},mouseup:function(i){return e.onUpButtonMouseUp(i)},mouseleave:function(i){return e.onUpButtonMouseLeave(i)},keydown:function(i){return e.onUpButtonKeyDown(i)},keyup:function(i){return e.onUpButtonKeyUp(i)}}},downButtonListeners:function(){var e=this;return{mousedown:function(i){return e.onDownButtonMouseDown(i)},mouseup:function(i){return e.onDownButtonMouseUp(i)},mouseleave:function(i){return e.onDownButtonMouseLeave(i)},keydown:function(i){return e.onDownButtonKeyDown(i)},keyup:function(i){return e.onDownButtonKeyUp(i)}}},formattedValue:function(){var e=!this.modelValue&&!this.allowEmpty?0:this.modelValue;return this.formatValue(e)},getFormatter:function(){return this.numberFormat}},components:{INInputText:H,INButton:_,AngleUpIcon:W,AngleDownIcon:z}};function le(n,e,t,i,u,r){var s=A("INInputText"),a=A("INButton");return m(),R("span",c({class:n.cx("root")},n.ptm("root"),{"data-pc-name":"inputnumber"}),[$(s,c({ref:"input",id:n.inputId,role:"spinbutton",class:[n.cx("input"),n.inputClass],style:n.inputStyle,value:r.formattedValue,"aria-valuemin":n.min,"aria-valuemax":n.max,"aria-valuenow":n.modelValue,disabled:n.disabled,readonly:n.readonly,placeholder:n.placeholder,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,onInput:r.onUserInput,onKeydown:r.onInputKeyDown,onKeypress:r.onInputKeyPress,onPaste:r.onPaste,onClick:r.onInputClick,onFocus:r.onInputFocus,onBlur:r.onInputBlur},n.inputProps,{pt:n.ptm("input"),unstyled:n.unstyled,"data-pc-section":"input"}),null,16,["id","class","style","value","aria-valuemin","aria-valuemax","aria-valuenow","disabled","readonly","placeholder","aria-labelledby","aria-label","onInput","onKeydown","onKeypress","onPaste","onClick","onFocus","onBlur","pt","unstyled"]),n.showButtons&&n.buttonLayout==="stacked"?(m(),R("span",c({key:0,class:n.cx("buttonGroup")},n.ptm("buttonGroup")),[$(a,c({class:[n.cx("incrementButton"),n.incrementButtonClass]},D(r.upButtonListeners),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true"},n.incrementButtonProps,{pt:n.ptm("incrementButton"),unstyled:n.unstyled,"data-pc-section":"incrementbutton"}),{icon:x(function(){return[v(n.$slots,"incrementbuttonicon",{},function(){return[(m(),w(B(n.incrementButtonIcon?"span":"AngleUpIcon"),c({class:n.incrementButtonIcon},n.ptm("incrementButton").icon,{"data-pc-section":"incrementbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","pt","unstyled"]),$(a,c({class:[n.cx("decrementButton"),n.decrementButtonClass]},D(r.downButtonListeners),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true"},n.decrementButtonProps,{pt:n.ptm("decrementButton"),unstyled:n.unstyled,"data-pc-section":"decrementbutton"}),{icon:x(function(){return[v(n.$slots,"decrementbuttonicon",{},function(){return[(m(),w(B(n.decrementButtonIcon?"span":"AngleDownIcon"),c({class:n.decrementButtonIcon},n.ptm("decrementButton").icon,{"data-pc-section":"decrementbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","pt","unstyled"])],16)):V("",!0),n.showButtons&&n.buttonLayout!=="stacked"?(m(),w(a,c({key:1,class:[n.cx("incrementButton"),n.incrementButtonClass]},D(r.upButtonListeners),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true"},n.incrementButtonProps,{pt:n.ptm("incrementButton"),unstyled:n.unstyled,"data-pc-section":"incrementbutton"}),{icon:x(function(){return[v(n.$slots,"incrementbuttonicon",{},function(){return[(m(),w(B(n.incrementButtonIcon?"span":"AngleUpIcon"),c({class:n.incrementButtonIcon},n.ptm("incrementButton").icon,{"data-pc-section":"incrementbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","pt","unstyled"])):V("",!0),n.showButtons&&n.buttonLayout!=="stacked"?(m(),w(a,c({key:2,class:[n.cx("decrementButton"),n.decrementButtonClass]},D(r.downButtonListeners),{disabled:n.disabled,tabindex:-1,"aria-hidden":"true"},n.decrementButtonProps,{pt:n.ptm("decrementButton"),unstyled:n.unstyled,"data-pc-section":"decrementbutton"}),{icon:x(function(){return[v(n.$slots,"decrementbuttonicon",{},function(){return[(m(),w(B(n.decrementButtonIcon?"span":"AngleDownIcon"),c({class:n.decrementButtonIcon},n.ptm("decrementButton").icon,{"data-pc-section":"decrementbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","pt","unstyled"])):V("",!0)],16)}oe.render=le;export{oe as default};
