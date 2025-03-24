import{h as q,j as Rt,G as Y,k as rt,S as Mt,l as Ft,m as Ht,n as Q,s as Ut,o as Lt,p as ot,q as Bt,Z as Wt,r as ut,t as kt,v as Et,w as it,x as j,y as vt,z as Xt,A as Zt,B as qt,C as lt,D as K,E as Tt,F as Z,H as ht,P as wt,I as Jt,J as ft,K as ct,L as mt,M as gt,N as pt,O as x,Q as yt,R as tt,T as $t,U as jt,V as Qt,W as Kt,X as Nt,Y as Yt,$ as bt,a0 as xt,a1 as te,a2 as ee,a3 as ae,a4 as re,a5 as ie}from"./CvHJzYGL.js";var ne=function(l){q(e,l);function e(){var t=l!==null&&l.apply(this,arguments)||this;return t.type=e.type,t.hasSymbolVisual=!0,t}return e.prototype.getInitialData=function(t){return Rt(null,this,{useEncodeDefaulter:!0})},e.prototype.getLegendIcon=function(t){var a=new Y,n=rt("line",0,t.itemHeight/2,t.itemWidth,0,t.lineStyle.stroke,!1);a.add(n),n.setStyle(t.lineStyle);var r=this.getData().getVisual("symbol"),i=this.getData().getVisual("symbolRotate"),o=r==="none"?"circle":r,u=t.itemHeight*.8,s=rt(o,(t.itemWidth-u)/2,(t.itemHeight-u)/2,u,u,t.itemStyle.fill);a.add(s),s.setStyle(t.itemStyle);var c=t.iconRotate==="inherit"?i:t.iconRotate||0;return s.rotation=c*Math.PI/180,s.setOrigin([t.itemWidth/2,t.itemHeight/2]),o.indexOf("empty")>-1&&(s.style.stroke=s.style.fill,s.style.fill="#fff",s.style.lineWidth=2),a},e.type="series.line",e.dependencies=["grid","polar"],e.defaultOption={z:3,coordinateSystem:"cartesian2d",legendHoverLink:!0,clip:!0,label:{position:"top"},endLabel:{show:!1,valueAnimation:!0,distance:8},lineStyle:{width:2,type:"solid"},emphasis:{scale:!0},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0,universalTransition:{divideShape:"clone"},triggerLineEvent:!1},e}(Mt),st=function(l){q(e,l);function e(t,a,n,r){var i=l.call(this)||this;return i.updateData(t,a,n,r),i}return e.prototype._createSymbol=function(t,a,n,r,i){this.removeAll();var o=rt(t,-1,-1,2,2,null,i);o.attr({z2:100,culling:!0,scaleX:r[0]/2,scaleY:r[1]/2}),o.drift=oe,this._symbolType=t,this.add(o)},e.prototype.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(null,t)},e.prototype.getSymbolType=function(){return this._symbolType},e.prototype.getSymbolPath=function(){return this.childAt(0)},e.prototype.highlight=function(){Ft(this.childAt(0))},e.prototype.downplay=function(){Ht(this.childAt(0))},e.prototype.setZ=function(t,a){var n=this.childAt(0);n.zlevel=t,n.z=a},e.prototype.setDraggable=function(t,a){var n=this.childAt(0);n.draggable=t,n.cursor=!a&&t?"move":n.cursor},e.prototype.updateData=function(t,a,n,r){this.silent=!1;var i=t.getItemVisual(a,"symbol")||"circle",o=t.hostModel,u=e.getSymbolSize(t,a),s=i!==this._symbolType,c=r&&r.disableAnimation;if(s){var v=t.getItemVisual(a,"symbolKeepAspect");this._createSymbol(i,t,a,u,v)}else{var f=this.childAt(0);f.silent=!1;var h={scaleX:u[0]/2,scaleY:u[1]/2};c?f.attr(h):Q(f,h,o,a),Ut(f)}if(this._updateCommon(t,a,u,n,r),s){var f=this.childAt(0);if(!c){var h={scaleX:this._sizeX,scaleY:this._sizeY,style:{opacity:f.style.opacity}};f.scaleX=f.scaleY=0,f.style.opacity=0,Lt(f,h,o,a)}}c&&this.childAt(0).stopAnimation("leave")},e.prototype._updateCommon=function(t,a,n,r,i){var o=this.childAt(0),u=t.hostModel,s,c,v,f,h,p,y,b,m;if(r&&(s=r.emphasisItemStyle,c=r.blurItemStyle,v=r.selectItemStyle,f=r.focus,h=r.blurScope,y=r.labelStatesModels,b=r.hoverScale,m=r.cursorStyle,p=r.emphasisDisabled),!r||t.hasItemOption){var g=r&&r.itemModel?r.itemModel:t.getItemModel(a),d=g.getModel("emphasis");s=d.getModel("itemStyle").getItemStyle(),v=g.getModel(["select","itemStyle"]).getItemStyle(),c=g.getModel(["blur","itemStyle"]).getItemStyle(),f=d.get("focus"),h=d.get("blurScope"),p=d.get("disabled"),y=ot(g),b=d.getShallow("scale"),m=g.getShallow("cursor")}var I=t.getItemVisual(a,"symbolRotate");o.attr("rotation",(I||0)*Math.PI/180||0);var L=Bt(t.getItemVisual(a,"symbolOffset"),n);L&&(o.x=L[0],o.y=L[1]),m&&o.attr("cursor",m);var S=t.getItemVisual(a,"style"),_=S.fill;if(o instanceof Wt){var P=o.style;o.useStyle(ut({image:P.image,x:P.x,y:P.y,width:P.width,height:P.height},S))}else o.__isEmptyBrush?o.useStyle(ut({},S)):o.useStyle(S),o.style.decal=null,o.setColor(_,i&&i.symbolInnerColor),o.style.strokeNoScale=!0;var A=t.getItemVisual(a,"liftZ"),k=this._z2;A!=null?k==null&&(this._z2=o.z2,o.z2+=A):k!=null&&(o.z2=k,this._z2=null);var E=i&&i.useNameLabel;kt(o,y,{labelFetcher:u,labelDataIndex:a,defaultText:D,inheritColor:_,defaultOpacity:S.opacity});function D(z){return E?t.getName(z):Et(t,z)}this._sizeX=n[0]/2,this._sizeY=n[1]/2;var T=o.ensureState("emphasis");T.style=s,o.ensureState("select").style=v,o.ensureState("blur").style=c;var G=b==null||b===!0?Math.max(1.1,3/this._sizeY):isFinite(b)&&b>0?+b:1;T.scaleX=this._sizeX*G,T.scaleY=this._sizeY*G,this.setSymbolScale(1),it(this,f,h,p)},e.prototype.setSymbolScale=function(t){this.scaleX=this.scaleY=t},e.prototype.fadeOut=function(t,a,n){var r=this.childAt(0),i=j(this).dataIndex,o=n&&n.animation;if(this.silent=r.silent=!0,n&&n.fadeLabel){var u=r.getTextContent();u&&vt(u,{style:{opacity:0}},a,{dataIndex:i,removeOpt:o,cb:function(){r.removeTextContent()}})}else r.removeTextContent();vt(r,{style:{opacity:0},scaleX:0,scaleY:0},a,{dataIndex:i,cb:t,removeOpt:o})},e.getSymbolSize=function(t,a){return Xt(t.getItemVisual(a,"symbolSize"))},e}(Y);function oe(l,e){this.parent.drift(l,e)}function et(l,e,t,a){return e&&!isNaN(e[0])&&!isNaN(e[1])&&!(a.isIgnore&&a.isIgnore(t))&&!(a.clipShape&&!a.clipShape.contain(e[0],e[1]))&&l.getItemVisual(t,"symbol")!=="none"}function dt(l){return l!=null&&!qt(l)&&(l={isIgnore:l}),l||{}}function St(l){var e=l.hostModel,t=e.getModel("emphasis");return{emphasisItemStyle:t.getModel("itemStyle").getItemStyle(),blurItemStyle:e.getModel(["blur","itemStyle"]).getItemStyle(),selectItemStyle:e.getModel(["select","itemStyle"]).getItemStyle(),focus:t.get("focus"),blurScope:t.get("blurScope"),emphasisDisabled:t.get("disabled"),hoverScale:t.get("scale"),labelStatesModels:ot(e),cursorStyle:e.get("cursor")}}var le=function(){function l(e){this.group=new Y,this._SymbolCtor=e||st}return l.prototype.updateData=function(e,t){this._progressiveEls=null,t=dt(t);var a=this.group,n=e.hostModel,r=this._data,i=this._SymbolCtor,o=t.disableAnimation,u=St(e),s={disableAnimation:o},c=t.getSymbolPoint||function(v){return e.getItemLayout(v)};r||a.removeAll(),e.diff(r).add(function(v){var f=c(v);if(et(e,f,v,t)){var h=new i(e,v,u,s);h.setPosition(f),e.setItemGraphicEl(v,h),a.add(h)}}).update(function(v,f){var h=r.getItemGraphicEl(f),p=c(v);if(!et(e,p,v,t)){a.remove(h);return}var y=e.getItemVisual(v,"symbol")||"circle",b=h&&h.getSymbolType&&h.getSymbolType();if(!h||b&&b!==y)a.remove(h),h=new i(e,v,u,s),h.setPosition(p);else{h.updateData(e,v,u,s);var m={x:p[0],y:p[1]};o?h.attr(m):Q(h,m,n)}a.add(h),e.setItemGraphicEl(v,h)}).remove(function(v){var f=r.getItemGraphicEl(v);f&&f.fadeOut(function(){a.remove(f)},n)}).execute(),this._getSymbolPoint=c,this._data=e},l.prototype.updateLayout=function(){var e=this,t=this._data;t&&t.eachItemGraphicEl(function(a,n){var r=e._getSymbolPoint(n);a.setPosition(r),a.markRedraw()})},l.prototype.incrementalPrepareUpdate=function(e){this._seriesScope=St(e),this._data=null,this.group.removeAll()},l.prototype.incrementalUpdate=function(e,t,a){this._progressiveEls=[],a=dt(a);function n(u){u.isGroup||(u.incremental=!0,u.ensureState("emphasis").hoverLayer=!0)}for(var r=e.start;r<e.end;r++){var i=t.getItemLayout(r);if(et(t,i,r,a)){var o=new this._SymbolCtor(t,r,this._seriesScope);o.traverse(n),o.setPosition(i),this.group.add(o),t.setItemGraphicEl(r,o),this._progressiveEls.push(o)}}},l.prototype.eachRendered=function(e){Zt(this._progressiveEls||this.group,e)},l.prototype.remove=function(e){var t=this.group,a=this._data;a&&e?a.eachItemGraphicEl(function(n){n.fadeOut(function(){t.remove(n)},a.hostModel)}):t.removeAll()},l}();function Ct(l,e,t){var a=l.getBaseAxis(),n=l.getOtherAxis(a),r=se(n,t),i=a.dim,o=n.dim,u=e.mapDimension(o),s=e.mapDimension(i),c=o==="x"||o==="radius"?1:0,v=lt(l.dimensions,function(p){return e.mapDimension(p)}),f=!1,h=e.getCalculationInfo("stackResultDimension");return K(e,v[0])&&(f=!0,v[0]=h),K(e,v[1])&&(f=!0,v[1]=h),{dataDimsForPoint:v,valueStart:r,valueAxisDim:o,baseAxisDim:i,stacked:!!f,valueDim:u,baseDim:s,baseDataOffset:c,stackedOverDimension:e.getCalculationInfo("stackedOverDimension")}}function se(l,e){var t=0,a=l.scale.getExtent();return e==="start"?t=a[0]:e==="end"?t=a[1]:Tt(e)&&!isNaN(e)?t=e:a[0]>0?t=a[0]:a[1]<0&&(t=a[1]),t}function Ot(l,e,t,a){var n=NaN;l.stacked&&(n=t.get(t.getCalculationInfo("stackedOverDimension"),a)),isNaN(n)&&(n=l.valueStart);var r=l.baseDataOffset,i=[];return i[r]=t.get(l.baseDim,a),i[1-r]=n,e.dataToPoint(i)}function ue(l,e){var t=[];return e.diff(l).add(function(a){t.push({cmd:"+",idx:a})}).update(function(a,n){t.push({cmd:"=",idx:n,idx1:a})}).remove(function(a){t.push({cmd:"-",idx:a})}).execute(),t}function ve(l,e,t,a,n,r,i,o){for(var u=ue(l,e),s=[],c=[],v=[],f=[],h=[],p=[],y=[],b=Ct(n,e,i),m=l.getLayout("points")||[],g=e.getLayout("points")||[],d=0;d<u.length;d++){var I=u[d],L=!0,S=void 0,_=void 0;switch(I.cmd){case"=":S=I.idx*2,_=I.idx1*2;var P=m[S],A=m[S+1],k=g[_],E=g[_+1];(isNaN(P)||isNaN(A))&&(P=k,A=E),s.push(P,A),c.push(k,E),v.push(t[S],t[S+1]),f.push(a[_],a[_+1]),y.push(e.getRawIndex(I.idx1));break;case"+":var D=I.idx,T=b.dataDimsForPoint,G=n.dataToPoint([e.get(T[0],D),e.get(T[1],D)]);_=D*2,s.push(G[0],G[1]),c.push(g[_],g[_+1]);var z=Ot(b,n,e,D);v.push(z[0],z[1]),f.push(a[_],a[_+1]),y.push(e.getRawIndex(D));break;case"-":L=!1}L&&(h.push(I),p.push(p.length))}p.sort(function($,O){return y[$]-y[O]});for(var C=s.length,M=Z(C),N=Z(C),w=Z(C),F=Z(C),H=[],d=0;d<p.length;d++){var J=p[d],V=d*2,R=J*2;M[V]=s[R],M[V+1]=s[R+1],N[V]=c[R],N[V+1]=c[R+1],w[V]=v[R],w[V+1]=v[R+1],F[V]=f[R],F[V+1]=f[R+1],H[d]=h[J]}return{current:M,next:N,stackedOnCurrent:w,stackedOnNext:F,status:H}}var U=Math.min,B=Math.max;function X(l,e){return isNaN(l)||isNaN(e)}function nt(l,e,t,a,n,r,i,o,u){for(var s,c,v,f,h,p,y=t,b=0;b<a;b++){var m=e[y*2],g=e[y*2+1];if(y>=n||y<0)break;if(X(m,g)){if(u){y+=r;continue}break}if(y===t)l[r>0?"moveTo":"lineTo"](m,g),v=m,f=g;else{var d=m-s,I=g-c;if(d*d+I*I<.5){y+=r;continue}if(i>0){for(var L=y+r,S=e[L*2],_=e[L*2+1];S===m&&_===g&&b<a;)b++,L+=r,y+=r,S=e[L*2],_=e[L*2+1],m=e[y*2],g=e[y*2+1],d=m-s,I=g-c;var P=b+1;if(u)for(;X(S,_)&&P<a;)P++,L+=r,S=e[L*2],_=e[L*2+1];var A=.5,k=0,E=0,D=void 0,T=void 0;if(P>=a||X(S,_))h=m,p=g;else{k=S-s,E=_-c;var G=m-s,z=S-m,C=g-c,M=_-g,N=void 0,w=void 0;if(o==="x"){N=Math.abs(G),w=Math.abs(z);var F=k>0?1:-1;h=m-F*N*i,p=g,D=m+F*w*i,T=g}else if(o==="y"){N=Math.abs(C),w=Math.abs(M);var H=E>0?1:-1;h=m,p=g-H*N*i,D=m,T=g+H*w*i}else N=Math.sqrt(G*G+C*C),w=Math.sqrt(z*z+M*M),A=w/(w+N),h=m-k*i*(1-A),p=g-E*i*(1-A),D=m+k*i*A,T=g+E*i*A,D=U(D,B(S,m)),T=U(T,B(_,g)),D=B(D,U(S,m)),T=B(T,U(_,g)),k=D-m,E=T-g,h=m-k*N/w,p=g-E*N/w,h=U(h,B(s,m)),p=U(p,B(c,g)),h=B(h,U(s,m)),p=B(p,U(c,g)),k=m-h,E=g-p,D=m+k*w/N,T=g+E*w/N}l.bezierCurveTo(v,f,h,p,m,g),v=D,f=T}else l.lineTo(m,g)}s=m,c=g,y+=r}return b}var Gt=function(){function l(){this.smooth=0,this.smoothConstraint=!0}return l}(),he=function(l){q(e,l);function e(t){var a=l.call(this,t)||this;return a.type="ec-polyline",a}return e.prototype.getDefaultStyle=function(){return{stroke:"#000",fill:null}},e.prototype.getDefaultShape=function(){return new Gt},e.prototype.buildPath=function(t,a){var n=a.points,r=0,i=n.length/2;if(a.connectNulls){for(;i>0&&X(n[i*2-2],n[i*2-1]);i--);for(;r<i&&X(n[r*2],n[r*2+1]);r++);}for(;r<i;)r+=nt(t,n,r,i,i,1,a.smooth,a.smoothMonotone,a.connectNulls)+1},e.prototype.getPointOn=function(t,a){this.path||(this.createPathProxy(),this.buildPath(this.path,this.shape));for(var n=this.path,r=n.data,i=Jt.CMD,o,u,s=a==="x",c=[],v=0;v<r.length;){var f=r[v++],h=void 0,p=void 0,y=void 0,b=void 0,m=void 0,g=void 0,d=void 0;switch(f){case i.M:o=r[v++],u=r[v++];break;case i.L:if(h=r[v++],p=r[v++],d=s?(t-o)/(h-o):(t-u)/(p-u),d<=1&&d>=0){var I=s?(p-u)*d+u:(h-o)*d+o;return s?[t,I]:[I,t]}o=h,u=p;break;case i.C:h=r[v++],p=r[v++],y=r[v++],b=r[v++],m=r[v++],g=r[v++];var L=s?ht(o,h,y,m,t,c):ht(u,p,b,g,t,c);if(L>0)for(var S=0;S<L;S++){var _=c[S];if(_<=1&&_>=0){var I=s?ft(u,p,b,g,_):ft(o,h,y,m,_);return s?[t,I]:[I,t]}}o=m,u=g;break}}},e}(wt),fe=function(l){q(e,l);function e(){return l!==null&&l.apply(this,arguments)||this}return e}(Gt),ce=function(l){q(e,l);function e(t){var a=l.call(this,t)||this;return a.type="ec-polygon",a}return e.prototype.getDefaultShape=function(){return new fe},e.prototype.buildPath=function(t,a){var n=a.points,r=a.stackedOnPoints,i=0,o=n.length/2,u=a.smoothMonotone;if(a.connectNulls){for(;o>0&&X(n[o*2-2],n[o*2-1]);o--);for(;i<o&&X(n[i*2],n[i*2+1]);i++);}for(;i<o;){var s=nt(t,n,i,o,o,1,a.smooth,u,a.connectNulls);nt(t,r,i+s-1,s,o,-1,a.stackedOnSmooth,u,a.connectNulls),i+=s+1,t.closePath()}},e}(wt);function _t(l,e){if(l.length===e.length){for(var t=0;t<l.length;t++)if(l[t]!==e[t])return;return!0}}function Dt(l){for(var e=1/0,t=1/0,a=-1/0,n=-1/0,r=0;r<l.length;){var i=l[r++],o=l[r++];isNaN(i)||(e=Math.min(i,e),a=Math.max(i,a)),isNaN(o)||(t=Math.min(o,t),n=Math.max(o,n))}return[[e,t],[a,n]]}function It(l,e){var t=Dt(l),a=t[0],n=t[1],r=Dt(e),i=r[0],o=r[1];return Math.max(Math.abs(a[0]-i[0]),Math.abs(a[1]-i[1]),Math.abs(n[0]-o[0]),Math.abs(n[1]-o[1]))}function Pt(l){return Tt(l)?l:l?.5:0}function me(l,e,t){if(!t.valueDim)return[];for(var a=e.count(),n=Z(a*2),r=0;r<a;r++){var i=Ot(t,l,e,r);n[r*2]=i[0],n[r*2+1]=i[1]}return n}function W(l,e,t,a){var n=e.getBaseAxis(),r=n.dim==="x"||n.dim==="radius"?0:1,i=[],o=0,u=[],s=[],c=[],v=[];if(a){for(o=0;o<l.length;o+=2)!isNaN(l[o])&&!isNaN(l[o+1])&&v.push(l[o],l[o+1]);l=v}for(o=0;o<l.length-2;o+=2)switch(c[0]=l[o+2],c[1]=l[o+3],s[0]=l[o],s[1]=l[o+1],i.push(s[0],s[1]),t){case"end":u[r]=c[r],u[1-r]=s[1-r],i.push(u[0],u[1]);break;case"middle":var f=(s[r]+c[r])/2,h=[];u[r]=h[r]=f,u[1-r]=s[1-r],h[1-r]=c[1-r],i.push(u[0],u[1]),i.push(h[0],h[1]);break;default:u[r]=s[r],u[1-r]=c[1-r],i.push(u[0],u[1])}return i.push(l[o++],l[o++]),i}function ge(l,e){var t=[],a=l.length,n,r;function i(c,v,f){var h=c.coord,p=(f-h)/(v.coord-h),y=ae(p,[c.color,v.color]);return{coord:f,color:y}}for(var o=0;o<a;o++){var u=l[o],s=u.coord;if(s<0)n=u;else if(s>e){r?t.push(i(r,u,e)):n&&t.push(i(n,u,0),i(n,u,e));break}else n&&(t.push(i(n,u,0)),n=null),t.push(u),r=u}return t}function pe(l,e,t){var a=l.getVisual("visualMeta");if(!(!a||!a.length||!l.count())&&e.type==="cartesian2d"){for(var n,r,i=a.length-1;i>=0;i--){var o=l.getDimensionInfo(a[i].dimension);if(n=o&&o.coordDim,n==="x"||n==="y"){r=a[i];break}}if(r){var u=e.getAxis(n),s=lt(r.stops,function(d){return{coord:u.toGlobalCoord(u.dataToCoord(d.value)),color:d.color}}),c=s.length,v=r.outerColors.slice();c&&s[0].coord>s[c-1].coord&&(s.reverse(),v.reverse());var f=ge(s,n==="x"?t.getWidth():t.getHeight()),h=f.length;if(!h&&c)return s[0].coord<0?v[1]?v[1]:s[c-1].color:v[0]?v[0]:s[0].color;var p=10,y=f[0].coord-p,b=f[h-1].coord+p,m=b-y;if(m<.001)return"transparent";Nt(f,function(d){d.offset=(d.coord-y)/m}),f.push({offset:h?f[h-1].offset:.5,color:v[1]||"transparent"}),f.unshift({offset:h?f[0].offset:.5,color:v[0]||"transparent"});var g=new Yt(0,0,0,0,f,!0);return g[n]=y,g[n+"2"]=b,g}}}function ye(l,e,t){var a=l.get("showAllSymbol"),n=a==="auto";if(!(a&&!n)){var r=t.getAxesByScale("ordinal")[0];if(r&&!(n&&be(r,e))){var i=e.mapDimension(r.dim),o={};return Nt(r.getViewLabels(),function(u){var s=r.scale.getRawOrdinalNumber(u.tickValue);o[s]=1}),function(u){return!o.hasOwnProperty(e.get(i,u))}}}}function be(l,e){var t=l.getExtent(),a=Math.abs(t[1]-t[0])/l.scale.count();isNaN(a)&&(a=0);for(var n=e.count(),r=Math.max(1,Math.round(n/5)),i=0;i<n;i+=r)if(st.getSymbolSize(e,i)[l.isHorizontal()?1:0]*1.5>a)return!1;return!0}function de(l,e){return isNaN(l)||isNaN(e)}function Se(l){for(var e=l.length/2;e>0&&de(l[e*2-2],l[e*2-1]);e--);return e-1}function At(l,e){return[l[e*2],l[e*2+1]]}function _e(l,e,t){for(var a=l.length/2,n=t==="x"?0:1,r,i,o=0,u=-1,s=0;s<a;s++)if(i=l[s*2+n],!(isNaN(i)||isNaN(l[s*2+1-n]))){if(s===0){r=i;continue}if(r<=e&&i>=e||r>=e&&i<=e){u=s;break}o=s,r=i}return{range:[o,u],t:(e-r)/(i-r)}}function zt(l){if(l.get(["endLabel","show"]))return!0;for(var e=0;e<bt.length;e++)if(l.get([bt[e],"endLabel","show"]))return!0;return!1}function at(l,e,t,a){if(xt(e,"cartesian2d")){var n=a.getModel("endLabel"),r=n.get("valueAnimation"),i=a.getData(),o={lastFrameIndex:0},u=zt(a)?function(h,p){l._endLabelOnDuring(h,p,i,o,r,n,e)}:null,s=e.getBaseAxis().isHorizontal(),c=te(e,t,a,function(){var h=l._endLabel;h&&t&&o.originalX!=null&&h.attr({x:o.originalX,y:o.originalY})},u);if(!a.get("clip",!0)){var v=c.shape,f=Math.max(v.width,v.height);s?(v.y-=f,v.height+=f*2):(v.x-=f,v.width+=f*2)}return u&&u(1,c),c}else return ee(e,t,a)}function De(l,e){var t=e.getBaseAxis(),a=t.isHorizontal(),n=t.inverse,r=a?n?"right":"left":"center",i=a?"middle":n?"top":"bottom";return{normal:{align:l.get("align")||r,verticalAlign:l.get("verticalAlign")||i}}}var Ie=function(l){q(e,l);function e(){return l!==null&&l.apply(this,arguments)||this}return e.prototype.init=function(){var t=new Y,a=new le;this.group.add(a.group),this._symbolDraw=a,this._lineGroup=t},e.prototype.render=function(t,a,n){var r=this,i=t.coordinateSystem,o=this.group,u=t.getData(),s=t.getModel("lineStyle"),c=t.getModel("areaStyle"),v=u.getLayout("points")||[],f=i.type==="polar",h=this._coordSys,p=this._symbolDraw,y=this._polyline,b=this._polygon,m=this._lineGroup,g=!a.ssr&&t.get("animation"),d=!c.isEmpty(),I=c.get("origin"),L=Ct(i,u,I),S=d&&me(i,u,L),_=t.get("showSymbol"),P=t.get("connectNulls"),A=_&&!f&&ye(t,u,i),k=this._data;k&&k.eachItemGraphicEl(function(O,Vt){O.__temp&&(o.remove(O),k.setItemGraphicEl(Vt,null))}),_||p.remove(),o.add(m);var E=f?!1:t.get("step"),D;i&&i.getArea&&t.get("clip",!0)&&(D=i.getArea(),D.width!=null?(D.x-=.1,D.y-=.1,D.width+=.2,D.height+=.2):D.r0&&(D.r0-=.5,D.r+=.5)),this._clipShapeForSymbol=D;var T=pe(u,i,n)||u.getVisual("style")[u.getVisual("drawType")];if(!(y&&h.type===i.type&&E===this._step))_&&p.updateData(u,{isIgnore:A,clipShape:D,disableAnimation:!0,getSymbolPoint:function(O){return[v[O*2],v[O*2+1]]}}),g&&this._initSymbolLabelAnimation(u,i,D),E&&(v=W(v,i,E,P),S&&(S=W(S,i,E,P))),y=this._newPolyline(v),d?b=this._newPolygon(v,S):b&&(m.remove(b),b=this._polygon=null),f||this._initOrUpdateEndLabel(t,i,ct(T)),m.setClipPath(at(this,i,!0,t));else{d&&!b?b=this._newPolygon(v,S):b&&!d&&(m.remove(b),b=this._polygon=null),f||this._initOrUpdateEndLabel(t,i,ct(T));var G=m.getClipPath();if(G){var z=at(this,i,!1,t);Lt(G,{shape:z.shape},t)}else m.setClipPath(at(this,i,!0,t));_&&p.updateData(u,{isIgnore:A,clipShape:D,disableAnimation:!0,getSymbolPoint:function(O){return[v[O*2],v[O*2+1]]}}),(!_t(this._stackedOnPoints,S)||!_t(this._points,v))&&(g?this._doUpdateAnimation(u,S,i,n,E,I,P):(E&&(v=W(v,i,E,P),S&&(S=W(S,i,E,P))),y.setShape({points:v}),b&&b.setShape({points:v,stackedOnPoints:S})))}var C=t.getModel("emphasis"),M=C.get("focus"),N=C.get("blurScope"),w=C.get("disabled");if(y.useStyle(mt(s.getLineStyle(),{fill:"none",stroke:T,lineJoin:"bevel"})),gt(y,t,"lineStyle"),y.style.lineWidth>0&&t.get(["emphasis","lineStyle","width"])==="bolder"){var F=y.getState("emphasis").style;F.lineWidth=+y.style.lineWidth+1}j(y).seriesIndex=t.seriesIndex,it(y,M,N,w);var H=Pt(t.get("smooth")),J=t.get("smoothMonotone");if(y.setShape({smooth:H,smoothMonotone:J,connectNulls:P}),b){var V=u.getCalculationInfo("stackedOnSeries"),R=0;b.useStyle(mt(c.getAreaStyle(),{fill:T,opacity:.7,lineJoin:"bevel",decal:u.getVisual("style").decal})),V&&(R=Pt(V.get("smooth"))),b.setShape({smooth:H,stackedOnSmooth:R,smoothMonotone:J,connectNulls:P}),gt(b,t,"areaStyle"),j(b).seriesIndex=t.seriesIndex,it(b,M,N,w)}var $=function(O){r._changePolyState(O)};u.eachItemGraphicEl(function(O){O&&(O.onHoverStateChange=$)}),this._polyline.onHoverStateChange=$,this._data=u,this._coordSys=i,this._stackedOnPoints=S,this._points=v,this._step=E,this._valueOrigin=I,t.get("triggerLineEvent")&&(this.packEventData(t,y),b&&this.packEventData(t,b))},e.prototype.packEventData=function(t,a){j(a).eventData={componentType:"series",componentSubType:"line",componentIndex:t.componentIndex,seriesIndex:t.seriesIndex,seriesName:t.name,seriesType:"line"}},e.prototype.highlight=function(t,a,n,r){var i=t.getData(),o=pt(i,r);if(this._changePolyState("emphasis"),!(o instanceof Array)&&o!=null&&o>=0){var u=i.getLayout("points"),s=i.getItemGraphicEl(o);if(!s){var c=u[o*2],v=u[o*2+1];if(isNaN(c)||isNaN(v)||this._clipShapeForSymbol&&!this._clipShapeForSymbol.contain(c,v))return;var f=t.get("zlevel")||0,h=t.get("z")||0;s=new st(i,o),s.x=c,s.y=v,s.setZ(f,h);var p=s.getSymbolPath().getTextContent();p&&(p.zlevel=f,p.z=h,p.z2=this._polyline.z2+1),s.__temp=!0,i.setItemGraphicEl(o,s),s.stopSymbolAnimation(!0),this.group.add(s)}s.highlight()}else x.prototype.highlight.call(this,t,a,n,r)},e.prototype.downplay=function(t,a,n,r){var i=t.getData(),o=pt(i,r);if(this._changePolyState("normal"),o!=null&&o>=0){var u=i.getItemGraphicEl(o);u&&(u.__temp?(i.setItemGraphicEl(o,null),this.group.remove(u)):u.downplay())}else x.prototype.downplay.call(this,t,a,n,r)},e.prototype._changePolyState=function(t){var a=this._polygon;yt(this._polyline,t),a&&yt(a,t)},e.prototype._newPolyline=function(t){var a=this._polyline;return a&&this._lineGroup.remove(a),a=new he({shape:{points:t},segmentIgnoreThreshold:2,z2:10}),this._lineGroup.add(a),this._polyline=a,a},e.prototype._newPolygon=function(t,a){var n=this._polygon;return n&&this._lineGroup.remove(n),n=new ce({shape:{points:t,stackedOnPoints:a},segmentIgnoreThreshold:2}),this._lineGroup.add(n),this._polygon=n,n},e.prototype._initSymbolLabelAnimation=function(t,a,n){var r,i,o=a.getBaseAxis(),u=o.inverse;a.type==="cartesian2d"?(r=o.isHorizontal(),i=!1):a.type==="polar"&&(r=o.dim==="angle",i=!0);var s=t.hostModel,c=s.get("animationDuration");tt(c)&&(c=c(null));var v=s.get("animationDelay")||0,f=tt(v)?v(null):v;t.eachItemGraphicEl(function(h,p){var y=h;if(y){var b=[h.x,h.y],m=void 0,g=void 0,d=void 0;if(n)if(i){var I=n,L=a.pointToCoord(b);r?(m=I.startAngle,g=I.endAngle,d=-L[1]/180*Math.PI):(m=I.r0,g=I.r,d=L[0])}else{var S=n;r?(m=S.x,g=S.x+S.width,d=h.x):(m=S.y+S.height,g=S.y,d=h.y)}var _=g===m?0:(d-m)/(g-m);u&&(_=1-_);var P=tt(v)?v(p):c*_+f,A=y.getSymbolPath(),k=A.getTextContent();y.attr({scaleX:0,scaleY:0}),y.animateTo({scaleX:1,scaleY:1},{duration:200,setToFinal:!0,delay:P}),k&&k.animateFrom({style:{opacity:0}},{duration:300,delay:P}),A.disableLabelAnimation=!0}})},e.prototype._initOrUpdateEndLabel=function(t,a,n){var r=t.getModel("endLabel");if(zt(t)){var i=t.getData(),o=this._polyline,u=i.getLayout("points");if(!u){o.removeTextContent(),this._endLabel=null;return}var s=this._endLabel;s||(s=this._endLabel=new $t({z2:200}),s.ignoreClip=!0,o.setTextContent(this._endLabel),o.disableLabelAnimation=!0);var c=Se(u);c>=0&&(kt(o,ot(t,"endLabel"),{inheritColor:n,labelFetcher:t,labelDataIndex:c,defaultText:function(v,f,h){return h!=null?jt(i,h):Et(i,v)},enableTextSetter:!0},De(r,a)),o.textConfig.position=null)}else this._endLabel&&(this._polyline.removeTextContent(),this._endLabel=null)},e.prototype._endLabelOnDuring=function(t,a,n,r,i,o,u){var s=this._endLabel,c=this._polyline;if(s){t<1&&r.originalX==null&&(r.originalX=s.x,r.originalY=s.y);var v=n.getLayout("points"),f=n.hostModel,h=f.get("connectNulls"),p=o.get("precision"),y=o.get("distance")||0,b=u.getBaseAxis(),m=b.isHorizontal(),g=b.inverse,d=a.shape,I=g?m?d.x:d.y+d.height:m?d.x+d.width:d.y,L=(m?y:0)*(g?-1:1),S=(m?0:-y)*(g?-1:1),_=m?"x":"y",P=_e(v,I,_),A=P.range,k=A[1]-A[0],E=void 0;if(k>=1){if(k>1&&!h){var D=At(v,A[0]);s.attr({x:D[0]+L,y:D[1]+S}),i&&(E=f.getRawValue(A[0]))}else{var D=c.getPointOn(I,_);D&&s.attr({x:D[0]+L,y:D[1]+S});var T=f.getRawValue(A[0]),G=f.getRawValue(A[1]);i&&(E=Qt(n,p,T,G,P.t))}r.lastFrameIndex=A[0]}else{var z=t===1||r.lastFrameIndex>0?A[0]:0,D=At(v,z);i&&(E=f.getRawValue(z)),s.attr({x:D[0]+L,y:D[1]+S})}if(i){var C=Kt(s);typeof C.setLabelText=="function"&&C.setLabelText(E)}}},e.prototype._doUpdateAnimation=function(t,a,n,r,i,o,u){var s=this._polyline,c=this._polygon,v=t.hostModel,f=ve(this._data,t,this._stackedOnPoints,a,this._coordSys,n,this._valueOrigin),h=f.current,p=f.stackedOnCurrent,y=f.next,b=f.stackedOnNext;if(i&&(h=W(f.current,n,i,u),p=W(f.stackedOnCurrent,n,i,u),y=W(f.next,n,i,u),b=W(f.stackedOnNext,n,i,u)),It(h,y)>3e3||c&&It(p,b)>3e3){s.stopAnimation(),s.setShape({points:y}),c&&(c.stopAnimation(),c.setShape({points:y,stackedOnPoints:b}));return}s.shape.__points=f.current,s.shape.points=h;var m={shape:{points:y}};f.current!==h&&(m.shape.__points=f.next),s.stopAnimation(),Q(s,m,v),c&&(c.setShape({points:h,stackedOnPoints:p}),c.stopAnimation(),Q(c,{shape:{stackedOnPoints:b}},v),s.shape.points!==c.shape.points&&(c.shape.points=s.shape.points));for(var g=[],d=f.status,I=0;I<d.length;I++){var L=d[I].cmd;if(L==="="){var S=t.getItemGraphicEl(d[I].idx1);S&&g.push({el:S,ptIdx:I})}}s.animators&&s.animators.length&&s.animators[0].during(function(){c&&c.dirtyShape();for(var _=s.shape.__points,P=0;P<g.length;P++){var A=g[P].el,k=g[P].ptIdx*2;A.x=_[k],A.y=_[k+1],A.markRedraw()}})},e.prototype.remove=function(t){var a=this.group,n=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),n&&n.eachItemGraphicEl(function(r,i){r.__temp&&(a.remove(r),n.setItemGraphicEl(i,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._endLabel=this._data=null},e.type="line",e}(x);function Pe(l,e){return{seriesType:l,plan:re(),reset:function(t){var a=t.getData(),n=t.coordinateSystem;if(t.pipelineContext,!!n){var r=lt(n.dimensions,function(v){return a.mapDimension(v)}).slice(0,2),i=r.length,o=a.getCalculationInfo("stackResultDimension");K(a,r[0])&&(r[0]=o),K(a,r[1])&&(r[1]=o);var u=a.getStore(),s=a.getDimensionIndex(r[0]),c=a.getDimensionIndex(r[1]);return i&&{progress:function(v,f){for(var h=v.end-v.start,p=Z(h*i),y=[],b=[],m=v.start,g=0;m<v.end;m++){var d=void 0;if(i===1){var I=u.get(s,m);d=n.dataToPoint(I,null,b)}else y[0]=u.get(s,m),y[1]=u.get(c,m),d=n.dataToPoint(y,null,b);p[g++]=d[0],p[g++]=d[1]}f.setLayout("points",p)}}}}}}function Le(l){l.registerChartView(Ie),l.registerSeriesModel(ne),l.registerLayout(Pe("line")),l.registerVisual({seriesType:"line",reset:function(e){var t=e.getData(),a=e.getModel("lineStyle").getLineStyle();a&&!a.stroke&&(a.stroke=t.getVisual("style").fill),t.setVisual("legendLineStyle",a)}}),l.registerProcessor(l.PRIORITY.PROCESSOR.STATISTIC,ie("line"))}export{Le as i};
