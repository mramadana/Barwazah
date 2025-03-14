import{s as J}from"./CV0YnTgi.js";import{ah as Q,aj as v,y as U,o as B,c as L,aq as H,ag as T,g as F,F as _,C as D,as as X,a as Y,b as $}from"./t6dwkVRB.js";var x=`
@layer primevue {
    .p-virtualscroller {
        position: relative;
        overflow: auto;
        contain: strict;
        transform: translateZ(0);
        will-change: scroll-position;
        outline: 0 none;
    }

    .p-virtualscroller-content {
        position: absolute;
        top: 0;
        left: 0;
        /* contain: content; */
        min-height: 100%;
        min-width: 100%;
        will-change: transform;
    }

    .p-virtualscroller-spacer {
        position: absolute;
        top: 0;
        left: 0;
        height: 1px;
        width: 1px;
        transform-origin: 0 0;
        pointer-events: none;
    }

    .p-virtualscroller .p-virtualscroller-loader {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-virtualscroller-loader.p-component-overlay {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-virtualscroller-loading-icon {
        font-size: 2rem;
    }

    .p-virtualscroller-loading-icon.p-icon {
        width: 2rem;
        height: 2rem;
    }

    .p-virtualscroller-horizontal > .p-virtualscroller-content {
        display: flex;
    }

    /* Inline */
    .p-virtualscroller-inline .p-virtualscroller-content {
        position: static;
    }
}
`,K=Q.extend({name:"virtualscroller",css:x}),tt={name:"BaseVirtualScroller",extends:X,props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},resizeDelay:{type:Number,default:10},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1},tabindex:{type:Number,default:0},inline:{type:Boolean,default:!1},step:{type:Number,default:0},appendOnly:{type:Boolean,default:!1},autoSize:{type:Boolean,default:!1}},style:K,provide:function(){return{$parentInstance:this}},beforeMount:function(){var t;K.loadStyle({nonce:(t=this.$config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce})}};function R(e){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(e)}function q(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),i.push.apply(i,n)}return i}function V(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?q(Object(i),!0).forEach(function(n){Z(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):q(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function Z(e,t,i){return t=et(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function et(e){var t=it(e,"string");return R(t)=="symbol"?t:String(t)}function it(e,t){if(R(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var n=i.call(e,t||"default");if(R(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var st={name:"VirtualScroller",extends:tt,emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],data:function(){return{first:this.isBoth()?{rows:0,cols:0}:0,last:this.isBoth()?{rows:0,cols:0}:0,page:this.isBoth()?{rows:0,cols:0}:0,numItemsInViewport:this.isBoth()?{rows:0,cols:0}:0,lastScrollPos:this.isBoth()?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,resizeTimeout:null,defaultWidth:0,defaultHeight:0,defaultContentWidth:0,defaultContentHeight:0,isRangeChanged:!1,lazyLoadState:{},resizeListener:null,initialized:!1,watch:{numToleratedItems:function(t){this.d_numToleratedItems=t},loading:function(t,i){this.lazy&&t!==i&&t!==this.d_loading&&(this.d_loading=t)},items:function(t,i){(!i||i.length!==(t||[]).length)&&(this.init(),this.calculateAutoSize())},itemSize:function(){this.init(),this.calculateAutoSize()},orientation:function(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},scrollHeight:function(){this.init(),this.calculateAutoSize()},scrollWidth:function(){this.init(),this.calculateAutoSize()}},mounted:function(){this.viewInit(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0,this.lazyLoadState=this.lazyLoadState||{}},updated:function(){!this.initialized&&this.viewInit()},unmounted:function(){this.unbindResizeListener(),this.initialized=!1},methods:{viewInit:function(){v.isVisible(this.element)&&(this.setContentEl(this.content),this.init(),this.bindResizeListener(),this.defaultWidth=v.getWidth(this.element),this.defaultHeight=v.getHeight(this.element),this.defaultContentWidth=v.getWidth(this.content),this.defaultContentHeight=v.getHeight(this.content),this.initialized=!0)},init:function(){this.disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize())},isVertical:function(){return this.orientation==="vertical"},isHorizontal:function(){return this.orientation==="horizontal"},isBoth:function(){return this.orientation==="both"},scrollTo:function(t){this.lastScrollPos=this.both?{top:0,left:0}:0,this.element&&this.element.scrollTo(t)},scrollToIndex:function(t){var i=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"auto",r=this.isBoth(),s=this.isHorizontal(),a=r?t.every(function(w){return w>-1}):t>-1;if(a){var h=this.first,l=this.calculateNumItems(),u=l.numToleratedItems,o=this.getContentPosition(),c=this.itemSize,m=function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,I=arguments.length>1?arguments[1]:void 0;return y<=I?0:y},p=function(y,I,C){return y*I+C},g=function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return i.scrollTo({left:y,top:I,behavior:n})},d=r?{rows:0,cols:0}:0,S=!1;r?(d={rows:m(t[0],u[0]),cols:m(t[1],u[1])},g(p(d.cols,c[1],o.left),p(d.rows,c[0],o.top)),S=d.rows!==h.rows||d.cols!==h.cols):(d=m(t,u),s?g(p(d,c,o.left),0):g(0,p(d,c,o.top)),S=d!==h),this.isRangeChanged=S,this.first=d}},scrollInView:function(t,i){var n=this,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"auto";if(i){var s=this.isBoth(),a=this.isHorizontal(),h=s?t.every(function(S){return S>-1}):t>-1;if(h){var l=this.getRenderedRange(),u=l.first,o=l.viewport,c=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n.scrollTo({left:w,top:y,behavior:r})},m=i==="to-start",p=i==="to-end";if(m){if(s)o.first.rows-u.rows>t[0]?c(o.first.cols*this.itemSize[1],(o.first.rows-1)*this.itemSize[0]):o.first.cols-u.cols>t[1]&&c((o.first.cols-1)*this.itemSize[1],o.first.rows*this.itemSize[0]);else if(o.first-u>t){var g=(o.first-1)*this.itemSize;a?c(g,0):c(0,g)}}else if(p){if(s)o.last.rows-u.rows<=t[0]+1?c(o.first.cols*this.itemSize[1],(o.first.rows+1)*this.itemSize[0]):o.last.cols-u.cols<=t[1]+1&&c((o.first.cols+1)*this.itemSize[1],o.first.rows*this.itemSize[0]);else if(o.last-u<=t+1){var d=(o.first+1)*this.itemSize;a?c(d,0):c(0,d)}}}}else this.scrollToIndex(t,r)},getRenderedRange:function(){var t=function(c,m){return Math.floor(c/(m||c))},i=this.first,n=0;if(this.element){var r=this.isBoth(),s=this.isHorizontal(),a=this.element,h=a.scrollTop,l=a.scrollLeft;if(r)i={rows:t(h,this.itemSize[0]),cols:t(l,this.itemSize[1])},n={rows:i.rows+this.numItemsInViewport.rows,cols:i.cols+this.numItemsInViewport.cols};else{var u=s?l:h;i=t(u,this.itemSize),n=i+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:i,last:n}}},calculateNumItems:function(){var t=this.isBoth(),i=this.isHorizontal(),n=this.itemSize,r=this.getContentPosition(),s=this.element?this.element.offsetWidth-r.left:0,a=this.element?this.element.offsetHeight-r.top:0,h=function(m,p){return Math.ceil(m/(p||m))},l=function(m){return Math.ceil(m/2)},u=t?{rows:h(a,n[0]),cols:h(s,n[1])}:h(i?s:a,n),o=this.d_numToleratedItems||(t?[l(u.rows),l(u.cols)]:l(u));return{numItemsInViewport:u,numToleratedItems:o}},calculateOptions:function(){var t=this,i=this.isBoth(),n=this.first,r=this.calculateNumItems(),s=r.numItemsInViewport,a=r.numToleratedItems,h=function(o,c,m){var p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return t.getLast(o+c+(o<m?2:3)*m,p)},l=i?{rows:h(n.rows,s.rows,a[0]),cols:h(n.cols,s.cols,a[1],!0)}:h(n,s,a);this.last=l,this.numItemsInViewport=s,this.d_numToleratedItems=a,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=i?Array.from({length:s.rows}).map(function(){return Array.from({length:s.cols})}):Array.from({length:s})),this.lazy&&Promise.resolve().then(function(){t.lazyLoadState={first:t.step?i?{rows:0,cols:n.cols}:0:n,last:Math.min(t.step?t.step:l,t.items.length)},t.$emit("lazy-load",t.lazyLoadState)})},calculateAutoSize:function(){var t=this;this.autoSize&&!this.d_loading&&Promise.resolve().then(function(){if(t.content){var i=t.isBoth(),n=t.isHorizontal(),r=t.isVertical();t.content.style.minHeight=t.content.style.minWidth="auto",t.content.style.position="relative",t.element.style.contain="none";var s=[v.getWidth(t.content),v.getHeight(t.content)],a=s[0],h=s[1];a!==t.defaultContentWidth&&(t.element.style.width=""),h!==t.defaultContentHeight&&(t.element.style.height="");var l=[v.getWidth(t.element),v.getHeight(t.element)],u=l[0],o=l[1];(i||n)&&(t.element.style.width=u<t.defaultWidth?u+"px":t.scrollWidth||t.defaultWidth+"px"),(i||r)&&(t.element.style.height=o<t.defaultHeight?o+"px":t.scrollHeight||t.defaultHeight+"px"),t.content.style.minHeight=t.content.style.minWidth="",t.content.style.position="",t.element.style.contain=""}})},getLast:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,i=arguments.length>1?arguments[1]:void 0;return this.items?Math.min(i?(this.columns||this.items[0]).length:this.items.length,t):0},getContentPosition:function(){if(this.content){var t=getComputedStyle(this.content),i=parseFloat(t.paddingLeft)+Math.max(parseFloat(t.left)||0,0),n=parseFloat(t.paddingRight)+Math.max(parseFloat(t.right)||0,0),r=parseFloat(t.paddingTop)+Math.max(parseFloat(t.top)||0,0),s=parseFloat(t.paddingBottom)+Math.max(parseFloat(t.bottom)||0,0);return{left:i,right:n,top:r,bottom:s,x:i+n,y:r+s}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize:function(){var t=this;if(this.element){var i=this.isBoth(),n=this.isHorizontal(),r=this.element.parentElement,s=this.scrollWidth||"".concat(this.element.offsetWidth||r.offsetWidth,"px"),a=this.scrollHeight||"".concat(this.element.offsetHeight||r.offsetHeight,"px"),h=function(u,o){return t.element.style[u]=o};i||n?(h("height",a),h("width",s)):h("height",a)}},setSpacerSize:function(){var t=this,i=this.items;if(i){var n=this.isBoth(),r=this.isHorizontal(),s=this.getContentPosition(),a=function(l,u,o){var c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return t.spacerStyle=V(V({},t.spacerStyle),Z({},"".concat(l),(u||[]).length*o+c+"px"))};n?(a("height",i,this.itemSize[0],s.y),a("width",this.columns||i[1],this.itemSize[1],s.x)):r?a("width",this.columns||i,this.itemSize,s.x):a("height",i,this.itemSize,s.y)}},setContentPosition:function(t){var i=this;if(this.content&&!this.appendOnly){var n=this.isBoth(),r=this.isHorizontal(),s=t?t.first:this.first,a=function(o,c){return o*c},h=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return i.contentStyle=V(V({},i.contentStyle),{transform:"translate3d(".concat(o,"px, ").concat(c,"px, 0)")})};if(n)h(a(s.cols,this.itemSize[1]),a(s.rows,this.itemSize[0]));else{var l=a(s,this.itemSize);r?h(l,0):h(0,l)}}},onScrollPositionChange:function(t){var i=this,n=t.target,r=this.isBoth(),s=this.isHorizontal(),a=this.getContentPosition(),h=function(f,z){return f?f>z?f-z:f:0},l=function(f,z){return Math.floor(f/(z||f))},u=function(f,z,O,A,b,P){return f<=b?b:P?O-A-b:z+b-1},o=function(f,z,O,A,b,P,N){return f<=P?0:Math.max(0,N?f<z?O:f-P:f>z?O:f-2*P)},c=function(f,z,O,A,b,P){var N=z+A+2*b;return f>=b&&(N+=b+1),i.getLast(N,P)},m=h(n.scrollTop,a.top),p=h(n.scrollLeft,a.left),g=r?{rows:0,cols:0}:0,d=this.last,S=!1,w=this.lastScrollPos;if(r){var y=this.lastScrollPos.top<=m,I=this.lastScrollPos.left<=p;if(!this.appendOnly||this.appendOnly&&(y||I)){var C={rows:l(m,this.itemSize[0]),cols:l(p,this.itemSize[1])},k={rows:u(C.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],y),cols:u(C.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],I)};g={rows:o(C.rows,k.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],y),cols:o(C.cols,k.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],I)},d={rows:c(C.rows,g.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:c(C.cols,g.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},S=g.rows!==this.first.rows||d.rows!==this.last.rows||g.cols!==this.first.cols||d.cols!==this.last.cols||this.isRangeChanged,w={top:m,left:p}}}else{var M=s?p:m,j=this.lastScrollPos<=M;if(!this.appendOnly||this.appendOnly&&j){var E=l(M,this.itemSize),G=u(E,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,j);g=o(E,G,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,j),d=c(E,g,this.last,this.numItemsInViewport,this.d_numToleratedItems),S=g!==this.first||d!==this.last||this.isRangeChanged,w=M}}return{first:g,last:d,isRangeChanged:S,scrollPos:w}},onScrollChange:function(t){var i=this.onScrollPositionChange(t),n=i.first,r=i.last,s=i.isRangeChanged,a=i.scrollPos;if(s){var h={first:n,last:r};if(this.setContentPosition(h),this.first=n,this.last=r,this.lastScrollPos=a,this.$emit("scroll-index-change",h),this.lazy&&this.isPageChanged(n)){var l={first:this.step?Math.min(this.getPageByFirst(n)*this.step,this.items.length-this.step):n,last:Math.min(this.step?(this.getPageByFirst(n)+1)*this.step:r,this.items.length)},u=this.lazyLoadState.first!==l.first||this.lazyLoadState.last!==l.last;u&&this.$emit("lazy-load",l),this.lazyLoadState=l}}},onScroll:function(t){var i=this;if(this.$emit("scroll",t),this.delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),this.isPageChanged()){if(!this.d_loading&&this.showLoader){var n=this.onScrollPositionChange(t),r=n.isRangeChanged,s=r||(this.step?this.isPageChanged():!1);s&&(this.d_loading=!0)}this.scrollTimeout=setTimeout(function(){i.onScrollChange(t),i.d_loading&&i.showLoader&&(!i.lazy||i.loading===void 0)&&(i.d_loading=!1,i.page=i.getPageByFirst())},this.delay)}}else this.onScrollChange(t)},onResize:function(){var t=this;this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){if(v.isVisible(t.element)){var i=t.isBoth(),n=t.isVertical(),r=t.isHorizontal(),s=[v.getWidth(t.element),v.getHeight(t.element)],a=s[0],h=s[1],l=a!==t.defaultWidth,u=h!==t.defaultHeight,o=i?l||u:r?l:n?u:!1;o&&(t.d_numToleratedItems=t.numToleratedItems,t.defaultWidth=a,t.defaultHeight=h,t.defaultContentWidth=v.getWidth(t.content),t.defaultContentHeight=v.getHeight(t.content),t.init())}},this.resizeDelay)},bindResizeListener:function(){this.resizeListener||(this.resizeListener=this.onResize.bind(this),window.addEventListener("resize",this.resizeListener),window.addEventListener("orientationchange",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),window.removeEventListener("orientationchange",this.resizeListener),this.resizeListener=null)},getOptions:function(t){var i=(this.items||[]).length,n=this.isBoth()?this.first.rows+t:this.first+t;return{index:n,count:i,first:n===0,last:n===i-1,even:n%2===0,odd:n%2!==0}},getLoaderOptions:function(t,i){var n=this.loaderArr.length;return V({index:t,count:n,first:t===0,last:t===n-1,even:t%2===0,odd:t%2!==0},i)},getPageByFirst:function(t){return Math.floor(((t??this.first)+this.d_numToleratedItems*4)/(this.step||1))},isPageChanged:function(t){return this.step?this.page!==this.getPageByFirst(t??this.first):!0},setContentEl:function(t){this.content=t||this.content||v.findSingle(this.element,'[data-pc-section="content"]')},elementRef:function(t){this.element=t},contentRef:function(t){this.content=t}},computed:{containerClass:function(){return["p-virtualscroller",this.class,{"p-virtualscroller-inline":this.inline,"p-virtualscroller-both p-both-scroll":this.isBoth(),"p-virtualscroller-horizontal p-horizontal-scroll":this.isHorizontal()}]},contentClass:function(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass:function(){return["p-virtualscroller-loader",{"p-component-overlay":!this.$slots.loader}]},loadedItems:function(){var t=this;return this.items&&!this.d_loading?this.isBoth()?this.items.slice(this.appendOnly?0:this.first.rows,this.last.rows).map(function(i){return t.columns?i:i.slice(t.appendOnly?0:t.first.cols,t.last.cols)}):this.isHorizontal()&&this.columns?this.items:this.items.slice(this.appendOnly?0:this.first,this.last):[]},loadedRows:function(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns:function(){if(this.columns){var t=this.isBoth(),i=this.isHorizontal();if(t||i)return this.d_loading&&this.loaderDisabled?t?this.loaderArr[0]:this.loaderArr:this.columns.slice(t?this.first.cols:this.first,t?this.last.cols:this.last)}return this.columns}},components:{SpinnerIcon:J}},nt=["tabindex"];function rt(e,t,i,n,r,s){var a=U("SpinnerIcon");return e.disabled?(B(),L(_,{key:1},[H(e.$slots,"default"),H(e.$slots,"content",{items:e.items,rows:e.items,columns:s.loadedColumns})],64)):(B(),L("div",T({key:0,ref:s.elementRef,class:s.containerClass,tabindex:e.tabindex,style:e.style,onScroll:t[0]||(t[0]=function(){return s.onScroll&&s.onScroll.apply(s,arguments)})},e.ptm("root"),{"data-pc-name":"virtualscroller"}),[H(e.$slots,"content",{styleClass:s.contentClass,items:s.loadedItems,getItemOptions:s.getOptions,loading:r.d_loading,getLoaderOptions:s.getLoaderOptions,itemSize:e.itemSize,rows:s.loadedRows,columns:s.loadedColumns,contentRef:s.contentRef,spacerStyle:r.spacerStyle,contentStyle:r.contentStyle,vertical:s.isVertical(),horizontal:s.isHorizontal(),both:s.isBoth()},function(){return[Y("div",T({ref:s.contentRef,class:s.contentClass,style:r.contentStyle},e.ptm("content")),[(B(!0),L(_,null,D(s.loadedItems,function(h,l){return H(e.$slots,"item",{key:l,item:h,options:s.getOptions(l)})}),128))],16)]}),e.showSpacer?(B(),L("div",T({key:0,class:"p-virtualscroller-spacer",style:r.spacerStyle},e.ptm("spacer")),null,16)):F("",!0),!e.loaderDisabled&&e.showLoader&&r.d_loading?(B(),L("div",T({key:1,class:s.loaderClass},e.ptm("loader")),[e.$slots&&e.$slots.loader?(B(!0),L(_,{key:0},D(r.loaderArr,function(h,l){return H(e.$slots,"loader",{key:l,options:s.getLoaderOptions(l,s.isBoth()&&{numCols:e.d_numItemsInViewport.cols})})}),128)):F("",!0),H(e.$slots,"loadingicon",{},function(){return[$(a,T({spin:"",class:"p-virtualscroller-loading-icon"},e.ptm("loadingIcon")),null,16)]})],16)):F("",!0)],16,nt))}st.render=rt;export{st as default};
