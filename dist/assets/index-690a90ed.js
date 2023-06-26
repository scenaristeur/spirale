var Dd=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var t1=Dd((Ml,Ld)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();(function(n,e){typeof Ml=="object"&&typeof Ld<"u"?e(Ml):typeof define=="function"&&define.amd?define(["exports"],e):e((n=typeof globalThis<"u"?globalThis:n||self).d3=n.d3||{})})(globalThis,function(n){function e(v){return function(){return v}}const t=Math.PI,i=2*t,r=1e-6,o=i-r;function a(v){this._+=v[0];for(let w=1,N=v.length;w<N;++w)this._+=arguments[w]+v[w]}class s{constructor(w){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=w==null?a:function(N){let U=Math.floor(N);if(!(U>=0))throw new Error(`invalid digits: ${N}`);if(U>15)return a;const k=10**U;return function(J){this._+=J[0];for(let ie=1,he=J.length;ie<he;++ie)this._+=Math.round(arguments[ie]*k)/k+J[ie]}}(w)}moveTo(w,N){this._append`M${this._x0=this._x1=+w},${this._y0=this._y1=+N}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(w,N){this._append`L${this._x1=+w},${this._y1=+N}`}quadraticCurveTo(w,N,U,k){this._append`Q${+w},${+N},${this._x1=+U},${this._y1=+k}`}bezierCurveTo(w,N,U,k,J,ie){this._append`C${+w},${+N},${+U},${+k},${this._x1=+J},${this._y1=+ie}`}arcTo(w,N,U,k,J){if(w=+w,N=+N,U=+U,k=+k,(J=+J)<0)throw new Error(`negative radius: ${J}`);let ie=this._x1,he=this._y1,de=U-w,ye=k-N,Ge=ie-w,Pe=he-N,_e=Ge*Ge+Pe*Pe;if(this._x1===null)this._append`M${this._x1=w},${this._y1=N}`;else if(_e>r)if(Math.abs(Pe*de-ye*Ge)>r&&J){let Me=U-ie,Ke=k-he,yt=de*de+ye*ye,Gt=Me*Me+Ke*Ke,Et=Math.sqrt(yt),Vt=Math.sqrt(_e),gn=J*Math.tan((t-Math.acos((yt+_e-Gt)/(2*Et*Vt)))/2),At=gn/Vt,_n=gn/Et;Math.abs(At-1)>r&&this._append`L${w+At*Ge},${N+At*Pe}`,this._append`A${J},${J},0,0,${+(Pe*Me>Ge*Ke)},${this._x1=w+_n*de},${this._y1=N+_n*ye}`}else this._append`L${this._x1=w},${this._y1=N}`}arc(w,N,U,k,J,ie){if(w=+w,N=+N,ie=!!ie,(U=+U)<0)throw new Error(`negative radius: ${U}`);let he=U*Math.cos(k),de=U*Math.sin(k),ye=w+he,Ge=N+de,Pe=1^ie,_e=ie?k-J:J-k;this._x1===null?this._append`M${ye},${Ge}`:(Math.abs(this._x1-ye)>r||Math.abs(this._y1-Ge)>r)&&this._append`L${ye},${Ge}`,U&&(_e<0&&(_e=_e%i+i),_e>o?this._append`A${U},${U},0,1,${Pe},${w-he},${N-de}A${U},${U},0,1,${Pe},${this._x1=ye},${this._y1=Ge}`:_e>r&&this._append`A${U},${U},0,${+(_e>=t)},${Pe},${this._x1=w+U*Math.cos(J)},${this._y1=N+U*Math.sin(J)}`)}rect(w,N,U,k){this._append`M${this._x0=this._x1=+w},${this._y0=this._y1=+N}h${U=+U}v${+k}h${-U}Z`}toString(){return this._}}function l(v){this._context=v}function c(v){return new l(v)}function u(v){return v[0]}function h(v){return v[1]}function f(v,w){var N=e(!0),U=null,k=c,J=null,ie=function(de){let ye=3;return de.digits=function(Ge){if(!arguments.length)return ye;if(Ge==null)ye=null;else{const Pe=Math.floor(Ge);if(!(Pe>=0))throw new RangeError(`invalid digits: ${Ge}`);ye=Pe}return de},()=>new s(ye)}(he);function he(de){var ye,Ge,Pe,_e=(de=function(Ke){return typeof Ke=="object"&&"length"in Ke?Ke:Array.from(Ke)}(de)).length,Me=!1;for(U==null&&(J=k(Pe=ie())),ye=0;ye<=_e;++ye)!(ye<_e&&N(Ge=de[ye],ye,de))===Me&&((Me=!Me)?J.lineStart():J.lineEnd()),Me&&J.point(+v(Ge,ye,de),+w(Ge,ye,de));if(Pe)return J=null,Pe+""||null}return v=typeof v=="function"?v:v===void 0?u:e(v),w=typeof w=="function"?w:w===void 0?h:e(w),he.x=function(de){return arguments.length?(v=typeof de=="function"?de:e(+de),he):v},he.y=function(de){return arguments.length?(w=typeof de=="function"?de:e(+de),he):w},he.defined=function(de){return arguments.length?(N=typeof de=="function"?de:e(!!de),he):N},he.curve=function(de){return arguments.length?(k=de,U!=null&&(J=k(U)),he):k},he.context=function(de){return arguments.length?(de==null?U=J=null:J=k(U=de),he):U},he}l.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(v,w){switch(v=+v,w=+w,this._point){case 0:this._point=1,this._line?this._context.lineTo(v,w):this._context.moveTo(v,w);break;case 1:this._point=2;default:this._context.lineTo(v,w)}}};var p=_(c);function g(v){this._curve=v}function _(v){function w(N){return new g(v(N))}return w._curve=v,w}function m(){return v=f().curve(p),w=v.curve,v.angle=v.x,delete v.x,v.radius=v.y,delete v.y,v.curve=function(N){return arguments.length?w(_(N)):w()._curve},v;var v,w}function d(v){this._context=v}function M(v){var w,N,U=v.length-1,k=new Array(U),J=new Array(U),ie=new Array(U);for(k[0]=0,J[0]=2,ie[0]=v[0]+2*v[1],w=1;w<U-1;++w)k[w]=1,J[w]=4,ie[w]=4*v[w]+2*v[w+1];for(k[U-1]=2,J[U-1]=7,ie[U-1]=8*v[U-1]+v[U],w=1;w<U;++w)N=k[w]/J[w-1],J[w]-=N,ie[w]-=N*ie[w-1];for(k[U-1]=ie[U-1]/J[U-1],w=U-2;w>=0;--w)k[w]=(ie[w]-k[w+1])/J[w];for(J[U-1]=(v[U]+k[U-1])/2,w=0;w<U-1;++w)J[w]=2*v[w+1]-k[w+1];return[k,J]}function y(v){return new d(v)}function b(v,w){return v==null||w==null?NaN:v<w?-1:v>w?1:v>=w?0:NaN}function x(v,w){return v==null||w==null?NaN:w<v?-1:w>v?1:w>=v?0:NaN}function E(v){let w,N,U;function k(J,ie,he=0,de=J.length){if(he<de){if(w(ie,ie)!==0)return de;do{const ye=he+de>>>1;N(J[ye],ie)<0?he=ye+1:de=ye}while(he<de)}return he}return v.length!==2?(w=b,N=(J,ie)=>b(v(J),ie),U=(J,ie)=>v(J)-ie):(w=v===b||v===x?v:R,N=v,U=v),{left:k,center:function(J,ie,he=0,de=J.length){const ye=k(J,ie,he,de-1);return ye>he&&U(J[ye-1],ie)>-U(J[ye],ie)?ye-1:ye},right:function(J,ie,he=0,de=J.length){if(he<de){if(w(ie,ie)!==0)return de;do{const ye=he+de>>>1;N(J[ye],ie)<=0?he=ye+1:de=ye}while(he<de)}return he}}}function R(){return 0}g.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(v,w){this._curve.point(w*Math.sin(v),w*-Math.cos(v))}},d.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var v=this._x,w=this._y,N=v.length;if(N)if(this._line?this._context.lineTo(v[0],w[0]):this._context.moveTo(v[0],w[0]),N===2)this._context.lineTo(v[1],w[1]);else for(var U=M(v),k=M(w),J=0,ie=1;ie<N;++J,++ie)this._context.bezierCurveTo(U[0][J],k[0][J],U[1][J],k[1][J],v[ie],w[ie]);(this._line||this._line!==0&&N===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(v,w){this._x.push(+v),this._y.push(+w)}};const C=E(b).right;E(function(v){return v===null?NaN:+v}).center;var S=C;const A=Math.sqrt(50),$=Math.sqrt(10),q=Math.sqrt(2);function G(v,w,N){const U=(w-v)/Math.max(0,N),k=Math.floor(Math.log10(U)),J=U/Math.pow(10,k),ie=J>=A?10:J>=$?5:J>=q?2:1;let he,de,ye;return k<0?(ye=Math.pow(10,-k)/ie,he=Math.round(v*ye),de=Math.round(w*ye),he/ye<v&&++he,de/ye>w&&--de,ye=-ye):(ye=Math.pow(10,k)*ie,he=Math.round(v/ye),de=Math.round(w/ye),he*ye<v&&++he,de*ye>w&&--de),de<he&&.5<=N&&N<2?G(v,w,2*N):[he,de,ye]}function D(v,w,N){return G(v=+v,w=+w,N=+N)[2]}function O(v,w){switch(arguments.length){case 0:break;case 1:this.range(v);break;default:this.range(w).domain(v)}return this}function V(v,w,N){v.prototype=w.prototype=N,N.constructor=v}function Q(v,w){var N=Object.create(v.prototype);for(var U in w)N[U]=w[U];return N}function re(){}var pe=.7,j=1/pe,fe="\\s*([+-]?\\d+)\\s*",B="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",oe="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Y=/^#([0-9a-f]{3,8})$/,K=new RegExp(`^rgb\\(${fe},${fe},${fe}\\)$`),ce=new RegExp(`^rgb\\(${oe},${oe},${oe}\\)$`),H=new RegExp(`^rgba\\(${fe},${fe},${fe},${B}\\)$`),se=new RegExp(`^rgba\\(${oe},${oe},${oe},${B}\\)$`),Se=new RegExp(`^hsl\\(${B},${oe},${oe}\\)$`),ke=new RegExp(`^hsla\\(${B},${oe},${oe},${B}\\)$`),Re={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function W(){return this.rgb().formatHex()}function ht(){return this.rgb().formatRgb()}function Le(v){var w,N;return v=(v+"").trim().toLowerCase(),(w=Y.exec(v))?(N=w[1].length,w=parseInt(w[1],16),N===6?Ve(w):N===3?new He(w>>8&15|w>>4&240,w>>4&15|240&w,(15&w)<<4|15&w,1):N===8?Ne(w>>24&255,w>>16&255,w>>8&255,(255&w)/255):N===4?Ne(w>>12&15|w>>8&240,w>>8&15|w>>4&240,w>>4&15|240&w,((15&w)<<4|15&w)/255):null):(w=K.exec(v))?new He(w[1],w[2],w[3],1):(w=ce.exec(v))?new He(255*w[1]/100,255*w[2]/100,255*w[3]/100,1):(w=H.exec(v))?Ne(w[1],w[2],w[3],w[4]):(w=se.exec(v))?Ne(255*w[1]/100,255*w[2]/100,255*w[3]/100,w[4]):(w=Se.exec(v))?T(w[1],w[2]/100,w[3]/100,1):(w=ke.exec(v))?T(w[1],w[2]/100,w[3]/100,w[4]):Re.hasOwnProperty(v)?Ve(Re[v]):v==="transparent"?new He(NaN,NaN,NaN,0):null}function Ve(v){return new He(v>>16&255,v>>8&255,255&v,1)}function Ne(v,w,N,U){return U<=0&&(v=w=N=NaN),new He(v,w,N,U)}function et(v,w,N,U){return arguments.length===1?((k=v)instanceof re||(k=Le(k)),k?new He((k=k.rgb()).r,k.g,k.b,k.opacity):new He):new He(v,w,N,U??1);var k}function He(v,w,N,U){this.r=+v,this.g=+w,this.b=+N,this.opacity=+U}function Ye(){return`#${L(this.r)}${L(this.g)}${L(this.b)}`}function st(){const v=xt(this.opacity);return`${v===1?"rgb(":"rgba("}${gt(this.r)}, ${gt(this.g)}, ${gt(this.b)}${v===1?")":`, ${v})`}`}function xt(v){return isNaN(v)?1:Math.max(0,Math.min(1,v))}function gt(v){return Math.max(0,Math.min(255,Math.round(v)||0))}function L(v){return((v=gt(v))<16?"0":"")+v.toString(16)}function T(v,w,N,U){return U<=0?v=w=N=NaN:N<=0||N>=1?v=w=NaN:w<=0&&(v=NaN),new ve(v,w,N,U)}function ae(v){if(v instanceof ve)return new ve(v.h,v.s,v.l,v.opacity);if(v instanceof re||(v=Le(v)),!v)return new ve;if(v instanceof ve)return v;var w=(v=v.rgb()).r/255,N=v.g/255,U=v.b/255,k=Math.min(w,N,U),J=Math.max(w,N,U),ie=NaN,he=J-k,de=(J+k)/2;return he?(ie=w===J?(N-U)/he+6*(N<U):N===J?(U-w)/he+2:(w-N)/he+4,he/=de<.5?J+k:2-J-k,ie*=60):he=de>0&&de<1?0:ie,new ve(ie,he,de,v.opacity)}function ve(v,w,N,U){this.h=+v,this.s=+w,this.l=+N,this.opacity=+U}function be(v){return(v=(v||0)%360)<0?v+360:v}function I(v){return Math.max(0,Math.min(1,v||0))}function ge(v,w,N){return 255*(v<60?w+(N-w)*v/60:v<180?N:v<240?w+(N-w)*(240-v)/60:w)}V(re,Le,{copy(v){return Object.assign(new this.constructor,this,v)},displayable(){return this.rgb().displayable()},hex:W,formatHex:W,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return ae(this).formatHsl()},formatRgb:ht,toString:ht}),V(He,et,Q(re,{brighter(v){return v=v==null?j:Math.pow(j,v),new He(this.r*v,this.g*v,this.b*v,this.opacity)},darker(v){return v=v==null?pe:Math.pow(pe,v),new He(this.r*v,this.g*v,this.b*v,this.opacity)},rgb(){return this},clamp(){return new He(gt(this.r),gt(this.g),gt(this.b),xt(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Ye,formatHex:Ye,formatHex8:function(){return`#${L(this.r)}${L(this.g)}${L(this.b)}${L(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:st,toString:st})),V(ve,function(v,w,N,U){return arguments.length===1?ae(v):new ve(v,w,N,U??1)},Q(re,{brighter(v){return v=v==null?j:Math.pow(j,v),new ve(this.h,this.s,this.l*v,this.opacity)},darker(v){return v=v==null?pe:Math.pow(pe,v),new ve(this.h,this.s,this.l*v,this.opacity)},rgb(){var v=this.h%360+360*(this.h<0),w=isNaN(v)||isNaN(this.s)?0:this.s,N=this.l,U=N+(N<.5?N:1-N)*w,k=2*N-U;return new He(ge(v>=240?v-240:v+120,k,U),ge(v,k,U),ge(v<120?v+240:v-120,k,U),this.opacity)},clamp(){return new ve(be(this.h),I(this.s),I(this.l),xt(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const v=xt(this.opacity);return`${v===1?"hsl(":"hsla("}${be(this.h)}, ${100*I(this.s)}%, ${100*I(this.l)}%${v===1?")":`, ${v})`}`}}));var xe=v=>()=>v;function ne(v){return(v=+v)==1?Oe:function(w,N){return N-w?function(U,k,J){return U=Math.pow(U,J),k=Math.pow(k,J)-U,J=1/J,function(ie){return Math.pow(U+ie*k,J)}}(w,N,v):xe(isNaN(w)?N:w)}}function Oe(v,w){var N=w-v;return N?function(U,k){return function(J){return U+J*k}}(v,N):xe(isNaN(v)?w:v)}var Be=function v(w){var N=ne(w);function U(k,J){var ie=N((k=et(k)).r,(J=et(J)).r),he=N(k.g,J.g),de=N(k.b,J.b),ye=Oe(k.opacity,J.opacity);return function(Ge){return k.r=ie(Ge),k.g=he(Ge),k.b=de(Ge),k.opacity=ye(Ge),k+""}}return U.gamma=v,U}(1);function Fe(v,w){w||(w=[]);var N,U=v?Math.min(w.length,v.length):0,k=w.slice();return function(J){for(N=0;N<U;++N)k[N]=v[N]*(1-J)+w[N]*J;return k}}function Ue(v,w){var N,U=w?w.length:0,k=v?Math.min(U,v.length):0,J=new Array(k),ie=new Array(U);for(N=0;N<k;++N)J[N]=Ee(v[N],w[N]);for(;N<U;++N)ie[N]=w[N];return function(he){for(N=0;N<k;++N)ie[N]=J[N](he);return ie}}function De(v,w){var N=new Date;return v=+v,w=+w,function(U){return N.setTime(v*(1-U)+w*U),N}}function We(v,w){return v=+v,w=+w,function(N){return v*(1-N)+w*N}}function rt(v,w){var N,U={},k={};for(N in v!==null&&typeof v=="object"||(v={}),w!==null&&typeof w=="object"||(w={}),w)N in v?U[N]=Ee(v[N],w[N]):k[N]=w[N];return function(J){for(N in U)k[N]=U[N](J);return k}}var z=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Te=new RegExp(z.source,"g");function te(v,w){var N,U,k,J=z.lastIndex=Te.lastIndex=0,ie=-1,he=[],de=[];for(v+="",w+="";(N=z.exec(v))&&(U=Te.exec(w));)(k=U.index)>J&&(k=w.slice(J,k),he[ie]?he[ie]+=k:he[++ie]=k),(N=N[0])===(U=U[0])?he[ie]?he[ie]+=U:he[++ie]=U:(he[++ie]=null,de.push({i:ie,x:We(N,U)})),J=Te.lastIndex;return J<w.length&&(k=w.slice(J),he[ie]?he[ie]+=k:he[++ie]=k),he.length<2?de[0]?function(ye){return function(Ge){return ye(Ge)+""}}(de[0].x):function(ye){return function(){return ye}}(w):(w=de.length,function(ye){for(var Ge,Pe=0;Pe<w;++Pe)he[(Ge=de[Pe]).i]=Ge.x(ye);return he.join("")})}function Ee(v,w){var N,U=typeof w;return w==null||U==="boolean"?xe(w):(U==="number"?We:U==="string"?(N=Le(w))?(w=N,Be):te:w instanceof Le?Be:w instanceof Date?De:function(k){return ArrayBuffer.isView(k)&&!(k instanceof DataView)}(w)?Fe:Array.isArray(w)?Ue:typeof w.valueOf!="function"&&typeof w.toString!="function"||isNaN(w)?rt:We)(v,w)}function Ce(v,w){return v=+v,w=+w,function(N){return Math.round(v*(1-N)+w*N)}}function lt(v){return+v}var vt=[0,1];function dt(v){return v}function mn(v,w){return(w-=v=+v)?function(N){return(N-v)/w}:function(N){return function(){return N}}(isNaN(w)?NaN:.5)}function bt(v,w,N){var U=v[0],k=v[1],J=w[0],ie=w[1];return k<U?(U=mn(k,U),J=N(ie,J)):(U=mn(U,k),J=N(J,ie)),function(he){return J(U(he))}}function cn(v,w,N){var U=Math.min(v.length,w.length)-1,k=new Array(U),J=new Array(U),ie=-1;for(v[U]<v[0]&&(v=v.slice().reverse(),w=w.slice().reverse());++ie<U;)k[ie]=mn(v[ie],v[ie+1]),J[ie]=N(w[ie],w[ie+1]);return function(he){var de=S(v,he,1,U)-1;return J[de](k[de](he))}}function kt(){var v,w,N,U,k,J,ie=vt,he=vt,de=Ee,ye=dt;function Ge(){var _e,Me,Ke,yt=Math.min(ie.length,he.length);return ye!==dt&&(_e=ie[0],Me=ie[yt-1],_e>Me&&(Ke=_e,_e=Me,Me=Ke),ye=function(Gt){return Math.max(_e,Math.min(Me,Gt))}),U=yt>2?cn:bt,k=J=null,Pe}function Pe(_e){return _e==null||isNaN(_e=+_e)?N:(k||(k=U(ie.map(v),he,de)))(v(ye(_e)))}return Pe.invert=function(_e){return ye(w((J||(J=U(he,ie.map(v),We)))(_e)))},Pe.domain=function(_e){return arguments.length?(ie=Array.from(_e,lt),Ge()):ie.slice()},Pe.range=function(_e){return arguments.length?(he=Array.from(_e),Ge()):he.slice()},Pe.rangeRound=function(_e){return he=Array.from(_e),de=Ce,Ge()},Pe.clamp=function(_e){return arguments.length?(ye=!!_e||dt,Ge()):ye!==dt},Pe.interpolate=function(_e){return arguments.length?(de=_e,Ge()):de},Pe.unknown=function(_e){return arguments.length?(N=_e,Pe):N},function(_e,Me){return v=_e,w=Me,Ge()}}function Ai(v,w){if((N=(v=w?v.toExponential(w-1):v.toExponential()).indexOf("e"))<0)return null;var N,U=v.slice(0,N);return[U.length>1?U[0]+U.slice(2):U,+v.slice(N+1)]}function zn(v){return(v=Ai(Math.abs(v)))?v[1]:NaN}var Oo,Xi=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Ci(v){if(!(w=Xi.exec(v)))throw new Error("invalid format: "+v);var w;return new si({fill:w[1],align:w[2],sign:w[3],symbol:w[4],zero:w[5],width:w[6],comma:w[7],precision:w[8]&&w[8].slice(1),trim:w[9],type:w[10]})}function si(v){this.fill=v.fill===void 0?" ":v.fill+"",this.align=v.align===void 0?">":v.align+"",this.sign=v.sign===void 0?"-":v.sign+"",this.symbol=v.symbol===void 0?"":v.symbol+"",this.zero=!!v.zero,this.width=v.width===void 0?void 0:+v.width,this.comma=!!v.comma,this.precision=v.precision===void 0?void 0:+v.precision,this.trim=!!v.trim,this.type=v.type===void 0?"":v.type+""}function zr(v,w){var N=Ai(v,w);if(!N)return v+"";var U=N[0],k=N[1];return k<0?"0."+new Array(-k).join("0")+U:U.length>k+1?U.slice(0,k+1)+"."+U.slice(k+1):U+new Array(k-U.length+2).join("0")}Ci.prototype=si.prototype,si.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,0|this.width))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var Do={"%":(v,w)=>(100*v).toFixed(w),b:v=>Math.round(v).toString(2),c:v=>v+"",d:function(v){return Math.abs(v=Math.round(v))>=1e21?v.toLocaleString("en").replace(/,/g,""):v.toString(10)},e:(v,w)=>v.toExponential(w),f:(v,w)=>v.toFixed(w),g:(v,w)=>v.toPrecision(w),o:v=>Math.round(v).toString(8),p:(v,w)=>zr(100*v,w),r:zr,s:function(v,w){var N=Ai(v,w);if(!N)return v+"";var U=N[0],k=N[1],J=k-(Oo=3*Math.max(-8,Math.min(8,Math.floor(k/3))))+1,ie=U.length;return J===ie?U:J>ie?U+new Array(J-ie+1).join("0"):J>0?U.slice(0,J)+"."+U.slice(J):"0."+new Array(1-J).join("0")+Ai(v,Math.max(0,w+J-1))[0]},X:v=>Math.round(v).toString(16).toUpperCase(),x:v=>Math.round(v).toString(16)};function Io(v){return v}var Hr,P,Z,le=Array.prototype.map,X=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function ue(v){var w,N,U=v.grouping===void 0||v.thousands===void 0?Io:(w=le.call(v.grouping,Number),N=v.thousands+"",function(_e,Me){for(var Ke=_e.length,yt=[],Gt=0,Et=w[0],Vt=0;Ke>0&&Et>0&&(Vt+Et+1>Me&&(Et=Math.max(1,Me-Vt)),yt.push(_e.substring(Ke-=Et,Ke+Et)),!((Vt+=Et+1)>Me));)Et=w[Gt=(Gt+1)%w.length];return yt.reverse().join(N)}),k=v.currency===void 0?"":v.currency[0]+"",J=v.currency===void 0?"":v.currency[1]+"",ie=v.decimal===void 0?".":v.decimal+"",he=v.numerals===void 0?Io:function(_e){return function(Me){return Me.replace(/[0-9]/g,function(Ke){return _e[+Ke]})}}(le.call(v.numerals,String)),de=v.percent===void 0?"%":v.percent+"",ye=v.minus===void 0?"−":v.minus+"",Ge=v.nan===void 0?"NaN":v.nan+"";function Pe(_e){var Me=(_e=Ci(_e)).fill,Ke=_e.align,yt=_e.sign,Gt=_e.symbol,Et=_e.zero,Vt=_e.width,gn=_e.comma,At=_e.precision,_n=_e.trim,Rt=_e.type;Rt==="n"?(gn=!0,Rt="g"):Do[Rt]||(At===void 0&&(At=12),_n=!0,Rt="g"),(Et||Me==="0"&&Ke==="=")&&(Et=!0,Me="0",Ke="=");var vn=Gt==="$"?k:Gt==="#"&&/[boxX]/.test(Rt)?"0"+Rt.toLowerCase():"",Gr=Gt==="$"?J:/[%p]/.test(Rt)?de:"",Ri=Do[Rt],Pi=/[defgprs%]/.test(Rt);function li(ct){var nt,Dt,Bt,Hn=vn,tn=Gr;if(Rt==="c")tn=Ri(ct)+tn,ct="";else{var qi=(ct=+ct)<0||1/ct<0;if(ct=isNaN(ct)?Ge:Ri(Math.abs(ct),At),_n&&(ct=function(Yi){e:for(var Xa,Od=Yi.length,Li=1,Oi=-1;Li<Od;++Li)switch(Yi[Li]){case".":Oi=Xa=Li;break;case"0":Oi===0&&(Oi=Li),Xa=Li;break;default:if(!+Yi[Li])break e;Oi>0&&(Oi=0)}return Oi>0?Yi.slice(0,Oi)+Yi.slice(Xa+1):Yi}(ct)),qi&&+ct==0&&yt!=="+"&&(qi=!1),Hn=(qi?yt==="("?yt:ye:yt==="-"||yt==="("?"":yt)+Hn,tn=(Rt==="s"?X[8+Oo/3]:"")+tn+(qi&&yt==="("?")":""),Pi){for(nt=-1,Dt=ct.length;++nt<Dt;)if(48>(Bt=ct.charCodeAt(nt))||Bt>57){tn=(Bt===46?ie+ct.slice(nt+1):ct.slice(nt))+tn,ct=ct.slice(0,nt);break}}}gn&&!Et&&(ct=U(ct,1/0));var No=Hn.length+ct.length+tn.length,Gn=No<Vt?new Array(Vt-No+1).join(Me):"";switch(gn&&Et&&(ct=U(Gn+ct,Gn.length?Vt-tn.length:1/0),Gn=""),Ke){case"<":ct=Hn+ct+tn+Gn;break;case"=":ct=Hn+Gn+ct+tn;break;case"^":ct=Gn.slice(0,No=Gn.length>>1)+Hn+ct+tn+Gn.slice(No);break;default:ct=Gn+Hn+ct+tn}return he(ct)}return At=At===void 0?6:/[gprs]/.test(Rt)?Math.max(1,Math.min(21,At)):Math.max(0,Math.min(20,At)),li.toString=function(){return _e+""},li}return{format:Pe,formatPrefix:function(_e,Me){var Ke=Pe(((_e=Ci(_e)).type="f",_e)),yt=3*Math.max(-8,Math.min(8,Math.floor(zn(Me)/3))),Gt=Math.pow(10,-yt),Et=X[8+yt/3];return function(Vt){return Ke(Gt*Vt)+Et}}}}function Ie(v,w,N,U){var k,J=function(he,de,ye){ye=+ye;const Ge=(de=+de)<(he=+he),Pe=Ge?D(de,he,ye):D(he,de,ye);return(Ge?-1:1)*(Pe<0?1/-Pe:Pe)}(v,w,N);switch((U=Ci(U??",f")).type){case"s":var ie=Math.max(Math.abs(v),Math.abs(w));return U.precision!=null||isNaN(k=function(he,de){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(zn(de)/3)))-zn(Math.abs(he)))}(J,ie))||(U.precision=k),Z(U,ie);case"":case"e":case"g":case"p":case"r":U.precision!=null||isNaN(k=function(he,de){return he=Math.abs(he),de=Math.abs(de)-he,Math.max(0,zn(de)-zn(he))+1}(J,Math.max(Math.abs(v),Math.abs(w))))||(U.precision=k-(U.type==="e"));break;case"f":case"%":U.precision!=null||isNaN(k=function(he){return Math.max(0,-zn(Math.abs(he)))}(J))||(U.precision=k-2*(U.type==="%"))}return P(U)}function je(v){var w=v.domain;return v.ticks=function(N){var U=w();return function(k,J,ie){if(!((ie=+ie)>0))return[];if((k=+k)==(J=+J))return[k];const he=J<k,[de,ye,Ge]=he?G(J,k,ie):G(k,J,ie);if(!(ye>=de))return[];const Pe=ye-de+1,_e=new Array(Pe);if(he)if(Ge<0)for(let Me=0;Me<Pe;++Me)_e[Me]=(ye-Me)/-Ge;else for(let Me=0;Me<Pe;++Me)_e[Me]=(ye-Me)*Ge;else if(Ge<0)for(let Me=0;Me<Pe;++Me)_e[Me]=(de+Me)/-Ge;else for(let Me=0;Me<Pe;++Me)_e[Me]=(de+Me)*Ge;return _e}(U[0],U[U.length-1],N??10)},v.tickFormat=function(N,U){var k=w();return Ie(k[0],k[k.length-1],N??10,U)},v.nice=function(N){N==null&&(N=10);var U,k,J=w(),ie=0,he=J.length-1,de=J[ie],ye=J[he],Ge=10;for(ye<de&&(k=de,de=ye,ye=k,k=ie,ie=he,he=k);Ge-- >0;){if((k=D(de,ye,N))===U)return J[ie]=de,J[he]=ye,w(J);if(k>0)de=Math.floor(de/k)*k,ye=Math.ceil(ye/k)*k;else{if(!(k<0))break;de=Math.ceil(de*k)/k,ye=Math.floor(ye*k)/k}U=k}return v},v}function $e(){var v=kt()(dt,dt);return v.copy=function(){return w=v,$e().domain(w.domain()).range(w.range()).interpolate(w.interpolate()).clamp(w.clamp()).unknown(w.unknown());var w},O.apply(v,arguments),je(v)}function qe(v){return v}function tt(v,w){return"translate("+v+","+w+")"}function Ze(v){var w=v.bandwidth()/2;return v.round()&&(w=Math.round(w)),function(N){return v(N)+w}}function Je(){return!this.__axis}function ft(v,w,N,U){var k=[],J=null,ie=null,he=6,de=6,ye=12;function Ge(Me,Ke){return tt.apply(tt,Pe(Me,Ke))}function Pe(Me,Ke){return[Math.sin(Me)*Ke,-Math.cos(Me)*Ke]}function _e(Me){var Ke=N!==void 0&&w!==N;N=Ke?N:w;var yt=J??(v.ticks?v.ticks.apply(v,k):v.domain()),Gt=ie??(v.tickFormat?v.tickFormat.apply(v,k):qe),Et=Math.max(he,0)+ye,Vt=v.copy().range([w,N]),gn=v.range(),At=(v.bandwidth?Ze:qe)(v.copy()),_n=Me.selection?Me.selection():Me,Rt=_n.selectAll(".domain").data([null]),vn=_n.selectAll(".tick").data(yt,v).order(),Gr=vn.exit(),Ri=vn.enter().append("g").attr("class","tick"),Pi=vn.select("line"),li=vn.select("text");function ct(nt,Dt){return"M"+Pe(nt,Dt+de*(U?1:-1)).join(",")+"L"+Pe(nt,Dt).join(",")}Rt=Rt.merge(Rt.enter().insert("path",".tick").attr("class","domain").attr("stroke","#000")),vn=vn.merge(Ri),Pi=Pi.merge(Ri.append("line").attr("stroke","#000")),li=li.merge(Ri.append("text").attr("fill","#000").attr("dy",".35em").attr("text-anchor","middle")),Me!==_n&&(Rt=Rt.transition(Me),vn=vn.transition(Me),Pi=Pi.transition(Me),li=li.transition(Me),Gr=Gr.transition(Me).attr("opacity",0).attr("transform",function(nt){return isFinite(At(nt))?Ge(At(nt),Vt(nt)):this.getAttribute("transform")}),Ri.attr("opacity",0).attr("transform",function(nt){var Dt=this.parentNode.__axis;return Ge(Dt&&isFinite(Dt=Dt(nt))?Dt:At(nt),Vt(nt))})),Gr.remove(),Rt.attr("d",(Ke?function(nt,Dt,Bt,Hn){var tn=(Dt-nt)/(2*Math.PI)*40,qi=m().angle($e().range([nt,Dt])).radius($e().range([Bt,Hn])).curve(y);return"M"+Pe(nt,Bt).join(",")+qi($e().ticks(tn))}:function(nt,Dt,Bt){return"M"+Pe(nt,Bt).join(",")+(Math.abs(Dt-nt)>=2*Math.PI?"A"+[Bt,Bt,0,1,1].concat(Pe(nt+Math.PI,Bt)).join(",")+"A"+[Bt,Bt,0,1,1].concat(Pe(nt,Bt)).join(","):"")+"A"+[Bt,Bt,0,Math.abs(Dt-nt)%(2*Math.PI)>Math.PI?1:0,Dt>nt?1:0].concat(Pe(Dt,Bt)).join(",")})(gn[0],gn[1],w,N)+ct(gn[0],w)+ct(gn[1],N)),vn.attr("opacity",1).attr("transform",function(nt){return Ge(At(nt),Vt(nt))}),Pi.attr("x1",0).attr("y1",0).attr("x2",function(nt){return Pe(At(nt),he)[0]*(U?1:-1)}).attr("y2",function(nt){return Pe(At(nt),he)[1]*(U?1:-1)}),li.attr("x",function(nt){return Pe(At(nt),Et)[0]*(U?1:-1)}).attr("y",function(nt){return Pe(At(nt),Et)[1]*(U?1:-1)}).text(Gt),_n.filter(Je).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif"),_n.each(function(){this.__axis=At})}return _e.angleScale=function(Me){return arguments.length?(v=Me,_e):v},_e.radius=function(Me){return arguments.length?(w=N=+Me,_e):w},_e.startRadius=function(Me){return arguments.length?(w=+Me,_e):w},_e.endRadius=function(Me){return arguments.length?(N=+Me,_e):N},_e.ticks=function(){return k=Array.prototype.slice.call(arguments),_e},_e.tickArguments=function(Me){return arguments.length?(k=Me==null?[]:Array.prototype.slice.call(Me),_e):k.slice()},_e.tickValues=function(Me){return arguments.length?(J=Me==null?null:Array.prototype.slice.call(Me),_e):J&&J.slice()},_e.tickFormat=function(Me){return arguments.length?(ie=Me,_e):ie},_e.tickSize=function(Me){return arguments.length?(he=de=+Me,_e):he},_e.tickSizeInner=function(Me){return arguments.length?(he=+Me,_e):he},_e.tickSizeOuter=function(Me){return arguments.length?(de=+Me,_e):de},_e.tickPadding=function(Me){return arguments.length?(ye=+Me,_e):ye},_e}Hr=ue({thousands:",",grouping:[3],currency:["$",""]}),P=Hr.format,Z=Hr.formatPrefix,n.axisRadialInner=function(v,w,N){return ft(v,w,N,!1)},n.axisRadialOuter=function(v,w,N){return ft(v,w,N,!0)}});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sl="153",Nn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Id=0,nc=1,Nd=2,Bh=1,Ud=2,Zn=3,xi=0,Zt=1,dn=2,vi=0,Cr=1,ic=2,rc=3,oc=4,Fd=5,xr=100,kd=101,Bd=102,ac=103,sc=104,zd=200,Hd=201,Gd=202,Vd=203,zh=204,Hh=205,Wd=206,jd=207,$d=208,Xd=209,qd=210,Yd=0,Kd=1,Zd=2,Vs=3,Jd=4,Qd=5,ep=6,tp=7,wl=0,np=1,ip=2,ni=0,rp=1,op=2,ap=3,sp=4,lp=5,Gh=300,Pr=301,Lr=302,Ws=303,js=304,Ia=306,$s=1e3,En=1001,Xs=1002,Yt=1003,lc=1004,qa=1005,sn=1006,cp=1007,So=1008,yi=1009,up=1010,hp=1011,El=1012,Vh=1013,gi=1014,_i=1015,Or=1016,Wh=1017,jh=1018,zi=1020,fp=1021,Tn=1023,dp=1024,pp=1025,Hi=1026,Dr=1027,mp=1028,$h=1029,gp=1030,Xh=1031,qh=1033,Ya=33776,Ka=33777,Za=33778,Ja=33779,cc=35840,uc=35841,hc=35842,fc=35843,_p=36196,dc=37492,pc=37496,mc=37808,gc=37809,_c=37810,vc=37811,yc=37812,xc=37813,bc=37814,Mc=37815,Sc=37816,wc=37817,Ec=37818,Tc=37819,Ac=37820,Cc=37821,Qa=36492,vp=36283,Rc=36284,Pc=36285,Lc=36286,Yh=3e3,Gi=3001,yp=3200,xp=3201,Na=0,bp=1,Vi="",Qe="srgb",Fn="srgb-linear",Kh="display-p3",es=7680,Mp=519,Sp=512,wp=513,Ep=514,Tp=515,Ap=516,Cp=517,Rp=518,Pp=519,qs=35044,Oc="300 es",Ys=1035,Qn=2e3,ba=2001;class Rn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dc=1234567;const po=Math.PI/180,wo=180/Math.PI;function ii(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Pt(n,e,t){return Math.max(e,Math.min(t,n))}function Tl(n,e){return(n%e+e)%e}function Lp(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Op(n,e,t){return n!==e?(t-n)/(e-n):0}function mo(n,e,t){return(1-t)*n+t*e}function Dp(n,e,t,i){return mo(n,e,1-Math.exp(-t*i))}function Ip(n,e=1){return e-Math.abs(Tl(n,e*2)-e)}function Np(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Up(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Fp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function kp(n,e){return n+Math.random()*(e-n)}function Bp(n){return n*(.5-Math.random())}function zp(n){n!==void 0&&(Dc=n);let e=Dc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hp(n){return n*po}function Gp(n){return n*wo}function Ks(n){return(n&n-1)===0&&n!==0}function Vp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ma(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Wp(n,e,t,i,r){const o=Math.cos,a=Math.sin,s=o(t/2),l=a(t/2),c=o((e+i)/2),u=a((e+i)/2),h=o((e-i)/2),f=a((e-i)/2),p=o((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(s*u,l*h,l*f,s*c);break;case"YZY":n.set(l*f,s*u,l*h,s*c);break;case"ZXZ":n.set(l*h,l*f,s*u,s*c);break;case"XZX":n.set(s*u,l*g,l*p,s*c);break;case"YXY":n.set(l*p,s*u,l*g,s*c);break;case"ZYZ":n.set(l*g,l*p,s*u,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ic={DEG2RAD:po,RAD2DEG:wo,generateUUID:ii,clamp:Pt,euclideanModulo:Tl,mapLinear:Lp,inverseLerp:Op,lerp:mo,damp:Dp,pingpong:Ip,smoothstep:Np,smootherstep:Up,randInt:Fp,randFloat:kp,randFloatSpread:Bp,seededRandom:zp,degToRad:Hp,radToDeg:Gp,isPowerOfTwo:Ks,ceilPowerOfTwo:Vp,floorPowerOfTwo:Ma,setQuaternionFromProperEuler:Wp,normalize:pt,denormalize:ei};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*r+e.x,this.y=o*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,i,r,o,a,s,l,c){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,s,l,c)}set(e,t,i,r,o,a,s,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=o,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,a=i[0],s=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],M=r[1],y=r[4],b=r[7],x=r[2],E=r[5],R=r[8];return o[0]=a*_+s*M+l*x,o[3]=a*m+s*y+l*E,o[6]=a*d+s*b+l*R,o[1]=c*_+u*M+h*x,o[4]=c*m+u*y+h*E,o[7]=c*d+u*b+h*R,o[2]=f*_+p*M+g*x,o[5]=f*m+p*y+g*E,o[8]=f*d+p*b+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*s*c-i*o*u+i*s*l+r*o*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=u*a-s*c,f=s*l-u*o,p=c*o-a*l,g=t*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(s*i-r*a)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*o-s*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*o)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,a,s){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*a+c*s)+a+e,-r*c,r*l,-r*(-c*a+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(ts.makeScale(e,t)),this}rotate(e){return this.premultiply(ts.makeRotation(-e)),this}translate(e,t){return this.premultiply(ts.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ts=new ot;function Zh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Nc={};function go(n){n in Nc||(Nc[n]=!0,console.warn(n))}function Rr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const jp=new ot().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),$p=new ot().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Xp(n){return n.convertSRGBToLinear().applyMatrix3($p)}function qp(n){return n.applyMatrix3(jp).convertLinearToSRGB()}const Yp={[Fn]:n=>n,[Qe]:n=>n.convertSRGBToLinear(),[Kh]:Xp},Kp={[Fn]:n=>n,[Qe]:n=>n.convertLinearToSRGB(),[Kh]:qp},yn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Fn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Yp[e],r=Kp[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Zi;class Jh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zi===void 0&&(Zi=Eo("canvas")),Zi.width=e.width,Zi.height=e.height;const i=Zi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Eo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=Rr(o[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Rr(t[i]/255)*255):t[i]=Rr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zp=0;class Qh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=ii(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?o.push(is(r[a].image)):o.push(is(r[a]))}else o=is(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function is(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jp=0;class Jt extends Rn{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,i=En,r=En,o=sn,a=So,s=Tn,l=yi,c=Jt.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=ii(),this.name="",this.source=new Qh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Gi?Qe:Vi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $s:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case Xs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $s:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case Xs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qe?Gi:Yh}set encoding(e){go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Gi?Qe:Vi}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Gh;Jt.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(p+1)/2,x=(d+1)/2,E=(u+f)/4,R=(h+_)/4,C=(g+m)/4;return y>b&&y>x?y<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(y),r=E/i,o=R/i):b>x?b<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(b),i=E/r,o=C/r):x<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(x),i=R/o,r=C/o),this.set(i,r,o,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bi extends Rn{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(go("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Gi?Qe:Vi),this.texture=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:sn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ef extends Jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qp extends Jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,a,s){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=o[a+0],p=o[a+1],g=o[a+2],_=o[a+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-s;const d=l*f+c*p+u*g+h*_,M=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const x=Math.sqrt(y),E=Math.atan2(x,d*M);m=Math.sin(m*E)/x,s=Math.sin(s*E)/x}const b=s*M;if(l=l*m+f*b,c=c*m+p*b,u=u*m+g*b,h=h*m+_*b,m===1-s){const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,o,a){const s=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=o[a],f=o[a+1],p=o[a+2],g=o[a+3];return e[t]=s*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-s*p,e[t+2]=c*g+u*p+s*f-l*h,e[t+3]=u*g-s*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,o=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(i/2),u=s(r/2),h=s(o/2),f=l(i/2),p=l(r/2),g=l(o/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],a=t[1],s=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+s+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(o-c)*p,this._z=(a-r)*p}else if(i>s&&i>h){const p=2*Math.sqrt(1+i-s-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(o+c)/p}else if(s>h){const p=2*Math.sqrt(1+s-i-h);this._w=(o-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-s);this._w=(a-r)/p,this._x=(o+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,a=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*s+r*c-o*l,this._y=r*u+a*l+o*s-i*c,this._z=o*u+a*c+i*l-r*s,this._w=a*u-i*s-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,a=this._w;let s=a*e._w+i*e._x+r*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=i,this._y=r,this._z=o,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=o*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(o),i*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,a=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,a=e.y,s=e.z,l=e.w,c=l*t+a*r-s*i,u=l*i+s*t-o*r,h=l*r+o*i-a*t,f=-o*t-a*i-s*r;return this.x=c*l+f*-o+u*-s-h*-a,this.y=u*l+f*-a+h*-o-c*-s,this.z=h*l+f*-s+c*-a-u*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,a=t.x,s=t.y,l=t.z;return this.x=r*l-o*s,this.y=o*a-i*l,this.z=i*s-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rs.copy(this).projectOnVector(e),this.sub(rs)}reflect(e){return this.sub(rs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rs=new F,Uc=new Cn;class ji{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ji.copy(e.boundingBox),Ji.applyMatrix4(e.matrixWorld),this.union(Ji);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let a=0,s=o.count;a<s;a++)Wn.fromBufferAttribute(o,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Wn)}else r.boundingBox===null&&r.computeBoundingBox(),Ji.copy(r.boundingBox),Ji.applyMatrix4(e.matrixWorld),this.union(Ji)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),Uo.subVectors(this.max,Vr),Qi.subVectors(e.a,Vr),er.subVectors(e.b,Vr),tr.subVectors(e.c,Vr),ci.subVectors(er,Qi),ui.subVectors(tr,er),Di.subVectors(Qi,tr);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Di.z,Di.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Di.z,0,-Di.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Di.y,Di.x,0];return!os(t,Qi,er,tr,Uo)||(t=[1,0,0,0,1,0,0,0,1],!os(t,Qi,er,tr,Uo))?!1:(Fo.crossVectors(ci,ui),t=[Fo.x,Fo.y,Fo.z],os(t,Qi,er,tr,Uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vn=[new F,new F,new F,new F,new F,new F,new F,new F],Wn=new F,Ji=new ji,Qi=new F,er=new F,tr=new F,ci=new F,ui=new F,Di=new F,Vr=new F,Uo=new F,Fo=new F,Ii=new F;function os(n,e,t,i,r){for(let o=0,a=n.length-3;o<=a;o+=3){Ii.fromArray(n,o);const s=r.x*Math.abs(Ii.x)+r.y*Math.abs(Ii.y)+r.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),u=i.dot(Ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const em=new ji,Wr=new F,as=new F;class Ua{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):em.setFromPoints(e).getCenter(i);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wr.subVectors(e,this.center);const t=Wr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Wr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(as.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wr.copy(e.center).add(as)),this.expandByPoint(Wr.copy(e.center).sub(as))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new F,ss=new F,ko=new F,hi=new F,ls=new F,Bo=new F,cs=new F;class Al{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ss.copy(e).add(t).multiplyScalar(.5),ko.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(ss);const o=e.distanceTo(t)*.5,a=-this.direction.dot(ko),s=hi.dot(this.direction),l=-hi.dot(ko),c=hi.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-s,f=a*s-l,g=o*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+a*f+2*s)+f*(a*h+f+2*l)+c}else f=o,h=Math.max(0,-(a*f+s)),p=-h*h+f*(f+2*l)+c;else f=-o,h=Math.max(0,-(a*f+s)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*o+s)),f=h>0?-o:Math.min(Math.max(-o,-l),o),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-o,-l),o),p=f*(f+2*l)+c):(h=Math.max(0,-(a*o+s)),f=h>0?o:Math.min(Math.max(-o,-l),o),p=-h*h+f*(f+2*l)+c);else f=a>0?-o:o,h=Math.max(0,-(a*f+s)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ss).addScaledVector(ko,f),p}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),r=jn.dot(jn)-i*i,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),s=i-a,l=i+a;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(o=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),h>=0?(s=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,i,r,o){ls.subVectors(t,e),Bo.subVectors(i,e),cs.crossVectors(ls,Bo);let a=this.direction.dot(cs),s;if(a>0){if(r)return null;s=1}else if(a<0)s=-1,a=-a;else return null;hi.subVectors(this.origin,e);const l=s*this.direction.dot(Bo.crossVectors(hi,Bo));if(l<0)return null;const c=s*this.direction.dot(ls.cross(hi));if(c<0||l+c>a)return null;const u=-s*hi.dot(cs);return u<0?null:this.at(u/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,i,r,o,a,s,l,c,u,h,f,p,g,_,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,s,l,c,u,h,f,p,g,_,m)}set(e,t,i,r,o,a,s,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=o,d[5]=a,d[9]=s,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/nr.setFromMatrixColumn(e,0).length(),o=1/nr.setFromMatrixColumn(e,1).length(),a=1/nr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,a=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const f=a*u,p=a*h,g=s*u,_=s*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-s*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f+_*s,t[4]=g*s-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-s,t[2]=p*s-g,t[6]=_+f*s,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f-_*s,t[4]=-a*h,t[8]=g+p*s,t[1]=p+g*s,t[5]=a*u,t[9]=_-f*s,t[2]=-a*c,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,g=s*u,_=s*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=s*l,_=s*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-s*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,p=a*c,g=s*l,_=s*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=s*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tm,e,nm)}lookAt(e,t,i){const r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),fi.crossVectors(i,rn),fi.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),fi.crossVectors(i,rn)),fi.normalize(),zo.crossVectors(rn,fi),r[0]=fi.x,r[4]=zo.x,r[8]=rn.x,r[1]=fi.y,r[5]=zo.y,r[9]=rn.y,r[2]=fi.z,r[6]=zo.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,a=i[0],s=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],M=i[3],y=i[7],b=i[11],x=i[15],E=r[0],R=r[4],C=r[8],S=r[12],A=r[1],$=r[5],q=r[9],G=r[13],D=r[2],O=r[6],V=r[10],Q=r[14],re=r[3],pe=r[7],j=r[11],fe=r[15];return o[0]=a*E+s*A+l*D+c*re,o[4]=a*R+s*$+l*O+c*pe,o[8]=a*C+s*q+l*V+c*j,o[12]=a*S+s*G+l*Q+c*fe,o[1]=u*E+h*A+f*D+p*re,o[5]=u*R+h*$+f*O+p*pe,o[9]=u*C+h*q+f*V+p*j,o[13]=u*S+h*G+f*Q+p*fe,o[2]=g*E+_*A+m*D+d*re,o[6]=g*R+_*$+m*O+d*pe,o[10]=g*C+_*q+m*V+d*j,o[14]=g*S+_*G+m*Q+d*fe,o[3]=M*E+y*A+b*D+x*re,o[7]=M*R+y*$+b*O+x*pe,o[11]=M*C+y*q+b*V+x*j,o[15]=M*S+y*G+b*Q+x*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],a=e[1],s=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+o*l*h-r*c*h-o*s*f+i*c*f+r*s*p-i*l*p)+_*(+t*l*p-t*c*f+o*a*f-r*a*p+r*c*u-o*l*u)+m*(+t*c*h-t*s*p-o*a*h+i*a*p+o*s*u-i*c*u)+d*(-r*s*u-t*l*h+t*s*f+r*a*h-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],M=h*m*c-_*f*c+_*l*p-s*m*p-h*l*d+s*f*d,y=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,b=u*_*c-g*h*c+g*s*p-a*_*p-u*s*d+a*h*d,x=g*h*l-u*_*l-g*s*f+a*_*f+u*s*m-a*h*m,E=t*M+i*y+r*b+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=M*R,e[1]=(_*f*o-h*m*o-_*r*p+i*m*p+h*r*d-i*f*d)*R,e[2]=(s*m*o-_*l*o+_*r*c-i*m*c-s*r*d+i*l*d)*R,e[3]=(h*l*o-s*f*o-h*r*c+i*f*c+s*r*p-i*l*p)*R,e[4]=y*R,e[5]=(u*m*o-g*f*o+g*r*p-t*m*p-u*r*d+t*f*d)*R,e[6]=(g*l*o-a*m*o-g*r*c+t*m*c+a*r*d-t*l*d)*R,e[7]=(a*f*o-u*l*o+u*r*c-t*f*c-a*r*p+t*l*p)*R,e[8]=b*R,e[9]=(g*h*o-u*_*o-g*i*p+t*_*p+u*i*d-t*h*d)*R,e[10]=(a*_*o-g*s*o+g*i*c-t*_*c-a*i*d+t*s*d)*R,e[11]=(u*s*o-a*h*o-u*i*c+t*h*c+a*i*p-t*s*p)*R,e[12]=x*R,e[13]=(u*_*r-g*h*r+g*i*f-t*_*f-u*i*m+t*h*m)*R,e[14]=(g*s*r-a*_*r-g*i*l+t*_*l+a*i*m-t*s*m)*R,e[15]=(a*h*r-u*s*r+u*i*l-t*h*l-a*i*f+t*s*f)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,a=e.x,s=e.y,l=e.z,c=o*a,u=o*s;return this.set(c*a+i,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+i,u*l-r*a,0,c*l-r*s,u*l+r*a,o*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,a){return this.set(1,i,o,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,a=t._y,s=t._z,l=t._w,c=o+o,u=a+a,h=s+s,f=o*c,p=o*u,g=o*h,_=a*u,m=a*h,d=s*h,M=l*c,y=l*u,b=l*h,x=i.x,E=i.y,R=i.z;return r[0]=(1-(_+d))*x,r[1]=(p+b)*x,r[2]=(g-y)*x,r[3]=0,r[4]=(p-b)*E,r[5]=(1-(f+d))*E,r[6]=(m+M)*E,r[7]=0,r[8]=(g+y)*R,r[9]=(m-M)*R,r[10]=(1-(f+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=nr.set(r[0],r[1],r[2]).length();const a=nr.set(r[4],r[5],r[6]).length(),s=nr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],xn.copy(this);const c=1/o,u=1/a,h=1/s;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,t.setFromRotationMatrix(xn),i.x=o,i.y=a,i.z=s,this}makePerspective(e,t,i,r,o,a,s=Qn){const l=this.elements,c=2*o/(t-e),u=2*o/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(s===Qn)p=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(s===ba)p=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,o,a,s=Qn){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(a-o),f=(t+e)*c,p=(i+r)*u;let g,_;if(s===Qn)g=(a+o)*h,_=-2*h;else if(s===ba)g=o*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const nr=new F,xn=new wt,tm=new F(0,0,0),nm=new F(1,1,1),fi=new F,zo=new F,rn=new F,Fc=new wt,kc=new Cn;class Fa{constructor(e=0,t=0,i=0,r=Fa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],a=r[4],s=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kc.setFromEuler(this),this.setFromQuaternion(kc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fa.DEFAULT_ORDER="XYZ";class Cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let im=0;const Bc=new F,ir=new Cn,$n=new wt,Ho=new F,jr=new F,rm=new F,om=new Cn,zc=new F(1,0,0),Hc=new F(0,1,0),Gc=new F(0,0,1),am={type:"added"},Vc={type:"removed"};class Ut extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new F,t=new Fa,i=new Cn,r=new F(1,1,1);function o(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new ot}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(zc,e)}rotateY(e){return this.rotateOnAxis(Hc,e)}rotateZ(e){return this.rotateOnAxis(Gc,e)}translateOnAxis(e,t){return Bc.copy(e).applyQuaternion(this.quaternion),this.position.add(Bc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zc,e)}translateY(e){return this.translateOnAxis(Hc,e)}translateZ(e){return this.translateOnAxis(Gc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ho.copy(e):Ho.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(jr,Ho,this.up):$n.lookAt(Ho,jr,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),ir.setFromRotationMatrix($n),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(am)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Vc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,rm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,om,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++){const s=r[o];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(o(e.materials,this.material[l]));r.material=s}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(o(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new F(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new F,Xn=new F,us=new F,qn=new F,rr=new F,or=new F,Wc=new F,hs=new F,fs=new F,ds=new F;let Go=!1;class hn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),bn.subVectors(e,t),r.cross(bn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){bn.subVectors(r,t),Xn.subVectors(i,t),us.subVectors(e,t);const a=bn.dot(bn),s=bn.dot(Xn),l=bn.dot(us),c=Xn.dot(Xn),u=Xn.dot(us),h=a*c-s*s;if(h===0)return o.set(-2,-1,-1);const f=1/h,p=(c*l-s*u)*f,g=(a*u-s*l)*f;return o.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,qn),qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getUV(e,t,i,r,o,a,s,l){return Go===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Go=!0),this.getInterpolation(e,t,i,r,o,a,s,l)}static getInterpolation(e,t,i,r,o,a,s,l){return this.getBarycoord(e,t,i,r,qn),l.setScalar(0),l.addScaledVector(o,qn.x),l.addScaledVector(a,qn.y),l.addScaledVector(s,qn.z),l}static isFrontFacing(e,t,i,r){return bn.subVectors(i,t),Xn.subVectors(e,t),bn.cross(Xn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),bn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,o){return Go===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Go=!0),hn.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}getInterpolation(e,t,i,r,o){return hn.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let a,s;rr.subVectors(r,i),or.subVectors(o,i),hs.subVectors(e,i);const l=rr.dot(hs),c=or.dot(hs);if(l<=0&&c<=0)return t.copy(i);fs.subVectors(e,r);const u=rr.dot(fs),h=or.dot(fs);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(rr,a);ds.subVectors(e,o);const p=rr.dot(ds),g=or.dot(ds);if(g>=0&&p<=g)return t.copy(o);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(i).addScaledVector(or,s);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Wc.subVectors(o,r),s=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Wc,s);const d=1/(m+_+f);return a=_*d,s=f*d,t.copy(i).addScaledVector(rr,a).addScaledVector(or,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let sm=0;class ai extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Cr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=zh,this.blendDst=Hh,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const a=[];for(const s in o){const l=o[s];delete l.metadata,a.push(l)}return a}if(t){const o=r(e.textures),a=r(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function ps(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let at=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=yn.workingColorSpace){return this.r=e,this.g=t,this.b=i,yn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=yn.workingColorSpace){if(e=Tl(e,1),t=Pt(t,0,1),i=Pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,a=2*i-o;this.r=ps(a,o,e+1/3),this.g=ps(a,o,e),this.b=ps(a,o,e-1/3)}return yn.toWorkingColorSpace(this,r),this}setStyle(e,t=Qe){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qe){const i=tf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qe){return yn.fromWorkingColorSpace(jt.copy(this),e),Math.round(Pt(jt.r*255,0,255))*65536+Math.round(Pt(jt.g*255,0,255))*256+Math.round(Pt(jt.b*255,0,255))}getHexString(e=Qe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yn.workingColorSpace){yn.fromWorkingColorSpace(jt.copy(this),t);const i=jt.r,r=jt.g,o=jt.b,a=Math.max(i,r,o),s=Math.min(i,r,o);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const h=a-s;switch(c=u<=.5?h/(a+s):h/(2-a-s),a){case i:l=(r-o)/h+(r<o?6:0);break;case r:l=(o-i)/h+2;break;case o:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yn.workingColorSpace){return yn.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Qe){yn.fromWorkingColorSpace(jt.copy(this),e);const t=jt.r,i=jt.g,r=jt.b;return e!==Qe?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Mn),Mn.h+=e,Mn.s+=t,Mn.l+=i,this.setHSL(Mn.h,Mn.s,Mn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(Vo);const i=mo(Mn.h,Vo.h,t),r=mo(Mn.s,Vo.s,t),o=mo(Mn.l,Vo.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const jt=new at;at.NAMES=tf;class Fr extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new F,Wo=new we;class pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qs,this.updateRange={offset:0,count:-1},this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wo.fromBufferAttribute(this,t),Wo.applyMatrix3(e),this.setXY(t,Wo.x,Wo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),r=pt(r,this.array),o=pt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class nf extends pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class rf extends pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Tt extends pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let lm=0;const un=new wt,ms=new Ut,ar=new F,on=new ji,$r=new ji,It=new F;class Qt extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zh(e)?rf:nf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ot().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return ms.lookAt(e),ms.updateMatrix(),this.applyMatrix4(ms.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];on.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const s=t[o];$r.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(on.min,$r.min),on.expandByPoint(It),It.addVectors(on.max,$r.max),on.expandByPoint(It)):(on.expandByPoint($r.min),on.expandByPoint($r.max))}on.getCenter(i);let r=0;for(let o=0,a=e.count;o<a;o++)It.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(It));if(t)for(let o=0,a=t.length;o<a;o++){const s=t[o],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)It.fromBufferAttribute(s,c),l&&(ar.fromBufferAttribute(e,c),It.add(ar)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,o=t.normal.array,a=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<s;A++)c[A]=new F,u[A]=new F;const h=new F,f=new F,p=new F,g=new we,_=new we,m=new we,d=new F,M=new F;function y(A,$,q){h.fromArray(r,A*3),f.fromArray(r,$*3),p.fromArray(r,q*3),g.fromArray(a,A*2),_.fromArray(a,$*2),m.fromArray(a,q*2),f.sub(h),p.sub(h),_.sub(g),m.sub(g);const G=1/(_.x*m.y-m.x*_.y);isFinite(G)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(G),M.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(G),c[A].add(d),c[$].add(d),c[q].add(d),u[A].add(M),u[$].add(M),u[q].add(M))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let A=0,$=b.length;A<$;++A){const q=b[A],G=q.start,D=q.count;for(let O=G,V=G+D;O<V;O+=3)y(i[O+0],i[O+1],i[O+2])}const x=new F,E=new F,R=new F,C=new F;function S(A){R.fromArray(o,A*3),C.copy(R);const $=c[A];x.copy($),x.sub(R.multiplyScalar(R.dot($))).normalize(),E.crossVectors(C,$);const G=E.dot(u[A])<0?-1:1;l[A*4]=x.x,l[A*4+1]=x.y,l[A*4+2]=x.z,l[A*4+3]=G}for(let A=0,$=b.length;A<$;++A){const q=b[A],G=q.start,D=q.count;for(let O=G,V=G+D;O<V;O+=3)S(i[O+0]),S(i[O+1]),S(i[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new F,o=new F,a=new F,s=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,o),h.subVectors(r,o),u.cross(h),s.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),s.add(u),l.add(u),c.add(u),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,o),h.subVectors(r,o),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,h=s.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){s.isInterleavedBufferAttribute?p=l[_]*s.data.stride+s.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new pn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);t.setAttribute(s,c)}const o=this.morphAttributes;for(const s in o){const l=[],c=o[s];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],h=o[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jc=new wt,Ni=new Al,jo=new Ua,$c=new F,sr=new F,lr=new F,cr=new F,gs=new F,$o=new F,Xo=new we,qo=new we,Yo=new we,Xc=new F,qc=new F,Yc=new F,Ko=new F,Zo=new F;class Ht extends Ut{constructor(e=new Qt,t=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(o&&s){$o.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=s[l],h=o[l];u!==0&&(gs.fromBufferAttribute(h,e),a?$o.addScaledVector(gs,u):$o.addScaledVector(gs.sub(t),u))}t.add($o)}return t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(o),Ni.copy(e.ray).recast(e.near),!(jo.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(jo,$c)===null||Ni.origin.distanceToSquared($c)>(e.far-e.near)**2))&&(jc.copy(o).invert(),Ni.copy(e.ray).applyMatrix4(jc),!(i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,i){let r;const o=this.geometry,a=this.material,s=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,f=o.groups,p=o.drawRange;if(s!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));for(let b=M,x=y;b<x;b+=3){const E=s.getX(b),R=s.getX(b+1),C=s.getX(b+2);r=Jo(this,d,e,i,c,u,h,E,R,C),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(s.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=s.getX(m),y=s.getX(m+1),b=s.getX(m+2);r=Jo(this,a,e,i,c,u,h,M,y,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=M,x=y;b<x;b+=3){const E=b,R=b+1,C=b+2;r=Jo(this,d,e,i,c,u,h,E,R,C),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=m,y=m+1,b=m+2;r=Jo(this,a,e,i,c,u,h,M,y,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function cm(n,e,t,i,r,o,a,s){let l;if(e.side===Zt?l=i.intersectTriangle(a,o,r,!0,s):l=i.intersectTriangle(r,o,a,e.side===xi,s),l===null)return null;Zo.copy(s),Zo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Zo);return c<t.near||c>t.far?null:{distance:c,point:Zo.clone(),object:n}}function Jo(n,e,t,i,r,o,a,s,l,c){n.getVertexPosition(s,sr),n.getVertexPosition(l,lr),n.getVertexPosition(c,cr);const u=cm(n,e,t,i,sr,lr,cr,Ko);if(u){r&&(Xo.fromBufferAttribute(r,s),qo.fromBufferAttribute(r,l),Yo.fromBufferAttribute(r,c),u.uv=hn.getInterpolation(Ko,sr,lr,cr,Xo,qo,Yo,new we)),o&&(Xo.fromBufferAttribute(o,s),qo.fromBufferAttribute(o,l),Yo.fromBufferAttribute(o,c),u.uv1=hn.getInterpolation(Ko,sr,lr,cr,Xo,qo,Yo,new we),u.uv2=u.uv1),a&&(Xc.fromBufferAttribute(a,s),qc.fromBufferAttribute(a,l),Yc.fromBufferAttribute(a,c),u.normal=hn.getInterpolation(Ko,sr,lr,cr,Xc,qc,Yc,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:s,b:l,c,normal:new F,materialIndex:0};hn.getNormal(sr,lr,cr,h.normal),u.face=h}return u}class Si extends Qt{constructor(e=1,t=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};const s=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,a,o,0),g("z","y","x",1,-1,i,t,-e,a,o,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,o,4),g("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(h,2));function g(_,m,d,M,y,b,x,E,R,C,S){const A=b/R,$=x/C,q=b/2,G=x/2,D=E/2,O=R+1,V=C+1;let Q=0,re=0;const pe=new F;for(let j=0;j<V;j++){const fe=j*$-G;for(let B=0;B<O;B++){const oe=B*A-q;pe[_]=oe*M,pe[m]=fe*y,pe[d]=D,c.push(pe.x,pe.y,pe.z),pe[_]=0,pe[m]=0,pe[d]=E>0?1:-1,u.push(pe.x,pe.y,pe.z),h.push(B/R),h.push(1-j/C),Q+=1}}for(let j=0;j<C;j++)for(let fe=0;fe<R;fe++){const B=f+fe+O*j,oe=f+fe+O*(j+1),Y=f+(fe+1)+O*(j+1),K=f+(fe+1)+O*j;l.push(B,oe,K),l.push(oe,Y,K),re+=6}s.addGroup(p,re,S),p+=re,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ir(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=Ir(n[t]);for(const r in i)e[r]=i[r]}return e}function um(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function of(n){return n.getRenderTarget()===null?n.outputColorSpace:Fn}const af={clone:Ir,merge:qt};var hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hm,this.fragmentShader=fm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=um(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class sf extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class fn extends sf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(po*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ur=-90,hr=1;class dm extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new fn(ur,hr,e,t);r.layers=this.layers,this.add(r);const o=new fn(ur,hr,e,t);o.layers=this.layers,this.add(o);const a=new fn(ur,hr,e,t);a.layers=this.layers,this.add(a);const s=new fn(ur,hr,e,t);s.layers=this.layers,this.add(s);const l=new fn(ur,hr,e,t);l.layers=this.layers,this.add(l);const c=new fn(ur,hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,o,a,s,l]=t;for(const c of t)this.remove(c);if(e===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,s,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=ni,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,o),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,s),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class lf extends Jt{constructor(e,t,i,r,o,a,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Pr,super(e,t,i,r,o,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pm extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(go("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Gi?Qe:Vi),this.texture=new lf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Si(5,5,5),o=new oi({name:"CubemapFromEquirect",uniforms:Ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:vi});o.uniforms.tEquirect.value=t;const a=new Ht(r,o),s=t.minFilter;return t.minFilter===So&&(t.minFilter=sn),new dm(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(o)}}const _s=new F,mm=new F,gm=new ot;class mi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=_s.subVectors(i,t).cross(mm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(_s),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||gm.getNormalMatrix(e),r=this.coplanarPoint(_s).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Ua,Qo=new F;class Rl{constructor(e=new mi,t=new mi,i=new mi,r=new mi,o=new mi,a=new mi){this.planes=[e,t,i,r,o,a]}set(e,t,i,r,o,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(o),s[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Qn){const i=this.planes,r=e.elements,o=r[0],a=r[1],s=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],M=r[13],y=r[14],b=r[15];if(i[0].setComponents(l-o,f-c,m-p,b-d).normalize(),i[1].setComponents(l+o,f+c,m+p,b+d).normalize(),i[2].setComponents(l+a,f+u,m+g,b+M).normalize(),i[3].setComponents(l-a,f-u,m-g,b-M).normalize(),i[4].setComponents(l-s,f-h,m-_,b-y).normalize(),t===Qn)i[5].setComponents(l+s,f+h,m+_,b+y).normalize();else if(t===ba)i[5].setComponents(s,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Qo.x=r.normal.x>0?e.max.x:e.min.x,Qo.y=r.normal.y>0?e.max.y:e.min.y,Qo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cf(){let n=null,e=!1,t=null,i=null;function r(o,a){t(o,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function _m(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,f=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=n.SHORT;else if(h instanceof Uint32Array)g=n.UNSIGNED_INT;else if(h instanceof Int32Array)g=n.INT;else if(h instanceof Int8Array)g=n.BYTE;else if(h instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function o(c,u,h){const f=u.array,p=u.updateRange;n.bindBuffer(h,c),p.count===-1?n.bufferSubData(h,0,f):(t?n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,u)):h.version<c.version&&(o(h.buffer,c,u),h.version=c.version)}return{get:a,remove:s,update:l}}class ka extends Qt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,a=t/2,s=Math.floor(i),l=Math.floor(r),c=s+1,u=l+1,h=e/s,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const M=d*f-a;for(let y=0;y<c;y++){const b=y*h-o;g.push(b,-M,0),_.push(0,0,1),m.push(y/s),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<s;M++){const y=M+c*d,b=M+c*(d+1),x=M+1+c*(d+1),E=M+1+c*d;p.push(y,b,E),p.push(b,x,E)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(_,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.widthSegments,e.heightSegments)}}var vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ym=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wm="vec3 transformed = vec3( position );",Em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Am=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,km=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",jm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$m=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ng=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ag=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,dg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,_g=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bg=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ag=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Rg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Og=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ug=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$g=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,t_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,i_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,l_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,c_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,u_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h_=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,f_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,y_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,x_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,b_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,M_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,E_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A_=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,C_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,O_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,I_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,N_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,k_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,G_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,j_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,it={alphamap_fragment:vm,alphamap_pars_fragment:ym,alphatest_fragment:xm,alphatest_pars_fragment:bm,aomap_fragment:Mm,aomap_pars_fragment:Sm,begin_vertex:wm,beginnormal_vertex:Em,bsdfs:Tm,iridescence_fragment:Am,bumpmap_pars_fragment:Cm,clipping_planes_fragment:Rm,clipping_planes_pars_fragment:Pm,clipping_planes_pars_vertex:Lm,clipping_planes_vertex:Om,color_fragment:Dm,color_pars_fragment:Im,color_pars_vertex:Nm,color_vertex:Um,common:Fm,cube_uv_reflection_fragment:km,defaultnormal_vertex:Bm,displacementmap_pars_vertex:zm,displacementmap_vertex:Hm,emissivemap_fragment:Gm,emissivemap_pars_fragment:Vm,encodings_fragment:Wm,encodings_pars_fragment:jm,envmap_fragment:$m,envmap_common_pars_fragment:Xm,envmap_pars_fragment:qm,envmap_pars_vertex:Ym,envmap_physical_pars_fragment:sg,envmap_vertex:Km,fog_vertex:Zm,fog_pars_vertex:Jm,fog_fragment:Qm,fog_pars_fragment:eg,gradientmap_pars_fragment:tg,lightmap_fragment:ng,lightmap_pars_fragment:ig,lights_lambert_fragment:rg,lights_lambert_pars_fragment:og,lights_pars_begin:ag,lights_toon_fragment:lg,lights_toon_pars_fragment:cg,lights_phong_fragment:ug,lights_phong_pars_fragment:hg,lights_physical_fragment:fg,lights_physical_pars_fragment:dg,lights_fragment_begin:pg,lights_fragment_maps:mg,lights_fragment_end:gg,logdepthbuf_fragment:_g,logdepthbuf_pars_fragment:vg,logdepthbuf_pars_vertex:yg,logdepthbuf_vertex:xg,map_fragment:bg,map_pars_fragment:Mg,map_particle_fragment:Sg,map_particle_pars_fragment:wg,metalnessmap_fragment:Eg,metalnessmap_pars_fragment:Tg,morphcolor_vertex:Ag,morphnormal_vertex:Cg,morphtarget_pars_vertex:Rg,morphtarget_vertex:Pg,normal_fragment_begin:Lg,normal_fragment_maps:Og,normal_pars_fragment:Dg,normal_pars_vertex:Ig,normal_vertex:Ng,normalmap_pars_fragment:Ug,clearcoat_normal_fragment_begin:Fg,clearcoat_normal_fragment_maps:kg,clearcoat_pars_fragment:Bg,iridescence_pars_fragment:zg,output_fragment:Hg,packing:Gg,premultiplied_alpha_fragment:Vg,project_vertex:Wg,dithering_fragment:jg,dithering_pars_fragment:$g,roughnessmap_fragment:Xg,roughnessmap_pars_fragment:qg,shadowmap_pars_fragment:Yg,shadowmap_pars_vertex:Kg,shadowmap_vertex:Zg,shadowmask_pars_fragment:Jg,skinbase_vertex:Qg,skinning_pars_vertex:e_,skinning_vertex:t_,skinnormal_vertex:n_,specularmap_fragment:i_,specularmap_pars_fragment:r_,tonemapping_fragment:o_,tonemapping_pars_fragment:a_,transmission_fragment:s_,transmission_pars_fragment:l_,uv_pars_fragment:c_,uv_pars_vertex:u_,uv_vertex:h_,worldpos_vertex:f_,background_vert:d_,background_frag:p_,backgroundCube_vert:m_,backgroundCube_frag:g_,cube_vert:__,cube_frag:v_,depth_vert:y_,depth_frag:x_,distanceRGBA_vert:b_,distanceRGBA_frag:M_,equirect_vert:S_,equirect_frag:w_,linedashed_vert:E_,linedashed_frag:T_,meshbasic_vert:A_,meshbasic_frag:C_,meshlambert_vert:R_,meshlambert_frag:P_,meshmatcap_vert:L_,meshmatcap_frag:O_,meshnormal_vert:D_,meshnormal_frag:I_,meshphong_vert:N_,meshphong_frag:U_,meshphysical_vert:F_,meshphysical_frag:k_,meshtoon_vert:B_,meshtoon_frag:z_,points_vert:H_,points_frag:G_,shadow_vert:V_,shadow_frag:W_,sprite_vert:j_,sprite_frag:$_},Ae={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Un={basic:{uniforms:qt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:qt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new at(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:qt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:qt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:qt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new at(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:qt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:qt([Ae.points,Ae.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:qt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:qt([Ae.common,Ae.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:qt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:qt([Ae.sprite,Ae.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:qt([Ae.common,Ae.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:qt([Ae.lights,Ae.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Un.physical={uniforms:qt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const ea={r:0,b:0,g:0};function X_(n,e,t,i,r,o,a){const s=new at(0);let l=o===!0?0:1,c,u,h=null,f=0,p=null;function g(m,d){let M=!1,y=d.isScene===!0?d.background:null;switch(y&&y.isTexture&&(y=(d.backgroundBlurriness>0?t:e).get(y)),y===null?_(s,l):y&&y.isColor&&(_(y,1),M=!0),n.xr.getEnvironmentBlendMode()){case"opaque":M=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),M=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),M=!0;break}(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ia)?(u===void 0&&(u=new Ht(new Si(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Ir(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=y.colorSpace!==Qe,(h!==y||f!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ht(new ka(2,2),new oi({name:"BackgroundMaterial",uniforms:Ir(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=y.colorSpace!==Qe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(ea,of(n)),i.buffers.color.setClear(ea.r,ea.g,ea.b,d,a)}return{getClearColor:function(){return s},setClearColor:function(m,d=1){s.set(m),l=d,_(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(s,l)},render:g}}function q_(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||o!==null,s={},l=m(null);let c=l,u=!1;function h(D,O,V,Q,re){let pe=!1;if(a){const j=_(Q,V,O);c!==j&&(c=j,p(c.object)),pe=d(D,Q,V,re),pe&&M(D,Q,V,re)}else{const j=O.wireframe===!0;(c.geometry!==Q.id||c.program!==V.id||c.wireframe!==j)&&(c.geometry=Q.id,c.program=V.id,c.wireframe=j,pe=!0)}re!==null&&t.update(re,n.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,C(D,O,V,Q),re!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(re).buffer))}function f(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function p(D){return i.isWebGL2?n.bindVertexArray(D):o.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):o.deleteVertexArrayOES(D)}function _(D,O,V){const Q=V.wireframe===!0;let re=s[D.id];re===void 0&&(re={},s[D.id]=re);let pe=re[O.id];pe===void 0&&(pe={},re[O.id]=pe);let j=pe[Q];return j===void 0&&(j=m(f()),pe[Q]=j),j}function m(D){const O=[],V=[],Q=[];for(let re=0;re<r;re++)O[re]=0,V[re]=0,Q[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:Q,object:D,attributes:{},index:null}}function d(D,O,V,Q){const re=c.attributes,pe=O.attributes;let j=0;const fe=V.getAttributes();for(const B in fe)if(fe[B].location>=0){const Y=re[B];let K=pe[B];if(K===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),Y===void 0||Y.attribute!==K||K&&Y.data!==K.data)return!0;j++}return c.attributesNum!==j||c.index!==Q}function M(D,O,V,Q){const re={},pe=O.attributes;let j=0;const fe=V.getAttributes();for(const B in fe)if(fe[B].location>=0){let Y=pe[B];Y===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor));const K={};K.attribute=Y,Y&&Y.data&&(K.data=Y.data),re[B]=K,j++}c.attributes=re,c.attributesNum=j,c.index=Q}function y(){const D=c.newAttributes;for(let O=0,V=D.length;O<V;O++)D[O]=0}function b(D){x(D,0)}function x(D,O){const V=c.newAttributes,Q=c.enabledAttributes,re=c.attributeDivisors;V[D]=1,Q[D]===0&&(n.enableVertexAttribArray(D),Q[D]=1),re[D]!==O&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),re[D]=O)}function E(){const D=c.newAttributes,O=c.enabledAttributes;for(let V=0,Q=O.length;V<Q;V++)O[V]!==D[V]&&(n.disableVertexAttribArray(V),O[V]=0)}function R(D,O,V,Q,re,pe,j){j===!0?n.vertexAttribIPointer(D,O,V,re,pe):n.vertexAttribPointer(D,O,V,Q,re,pe)}function C(D,O,V,Q){if(i.isWebGL2===!1&&(D.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const re=Q.attributes,pe=V.getAttributes(),j=O.defaultAttributeValues;for(const fe in pe){const B=pe[fe];if(B.location>=0){let oe=re[fe];if(oe===void 0&&(fe==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),fe==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),oe!==void 0){const Y=oe.normalized,K=oe.itemSize,ce=t.get(oe);if(ce===void 0)continue;const H=ce.buffer,se=ce.type,Se=ce.bytesPerElement,ke=i.isWebGL2===!0&&(se===n.INT||se===n.UNSIGNED_INT||oe.gpuType===Vh);if(oe.isInterleavedBufferAttribute){const Re=oe.data,W=Re.stride,ht=oe.offset;if(Re.isInstancedInterleavedBuffer){for(let Le=0;Le<B.locationSize;Le++)x(B.location+Le,Re.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Le=0;Le<B.locationSize;Le++)b(B.location+Le);n.bindBuffer(n.ARRAY_BUFFER,H);for(let Le=0;Le<B.locationSize;Le++)R(B.location+Le,K/B.locationSize,se,Y,W*Se,(ht+K/B.locationSize*Le)*Se,ke)}else{if(oe.isInstancedBufferAttribute){for(let Re=0;Re<B.locationSize;Re++)x(B.location+Re,oe.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Re=0;Re<B.locationSize;Re++)b(B.location+Re);n.bindBuffer(n.ARRAY_BUFFER,H);for(let Re=0;Re<B.locationSize;Re++)R(B.location+Re,K/B.locationSize,se,Y,K*Se,K/B.locationSize*Re*Se,ke)}}else if(j!==void 0){const Y=j[fe];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(B.location,Y);break;case 3:n.vertexAttrib3fv(B.location,Y);break;case 4:n.vertexAttrib4fv(B.location,Y);break;default:n.vertexAttrib1fv(B.location,Y)}}}}E()}function S(){q();for(const D in s){const O=s[D];for(const V in O){const Q=O[V];for(const re in Q)g(Q[re].object),delete Q[re];delete O[V]}delete s[D]}}function A(D){if(s[D.id]===void 0)return;const O=s[D.id];for(const V in O){const Q=O[V];for(const re in Q)g(Q[re].object),delete Q[re];delete O[V]}delete s[D.id]}function $(D){for(const O in s){const V=s[O];if(V[D.id]===void 0)continue;const Q=V[D.id];for(const re in Q)g(Q[re].object),delete Q[re];delete V[D.id]}}function q(){G(),u=!0,c!==l&&(c=l,p(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:G,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:$,initAttributes:y,enableAttribute:b,disableUnusedAttributes:E}}function Y_(n,e,t,i){const r=i.isWebGL2;let o;function a(c){o=c}function s(c,u){n.drawArrays(o,c,u),t.update(u,o,1)}function l(c,u,h){if(h===0)return;let f,p;if(r)f=n,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](o,c,u,h),t.update(u,o,h)}this.setMode=a,this.render=s,this.renderInstances=l}function K_(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=o(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,b=a||e.has("OES_texture_float"),x=y&&b,E=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:x,maxSamples:E}}function Z_(n){const e=this;let t=null,i=0,r=!1,o=!1;const a=new mi,s=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||o&&!m)o?u(null):c();else{const M=o?0:i,y=M*4;let b=d.clippingState||null;l.value=b,b=u(g,f,y,p);for(let x=0;x!==y;++x)b[x]=t[x];d.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,M=f.matrixWorldInverse;s.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,b=p;y!==_;++y,b+=4)a.copy(h[y]).applyMatrix4(M,s),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function J_(n){let e=new WeakMap;function t(a,s){return s===Ws?a.mapping=Pr:s===js&&(a.mapping=Lr),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===Ws||s===js)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new pm(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const s=a.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Pl extends sf{constructor(e=-1,t=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,a=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(o,a,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Sr=4,Kc=[.125,.215,.35,.446,.526,.582],ki=20,vs=new Pl,Zc=new at;let ys=null;const Fi=(1+Math.sqrt(5))/2,fr=1/Fi,Jc=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Fi,fr),new F(0,Fi,-fr),new F(fr,0,Fi),new F(-fr,0,Fi),new F(Fi,fr,0),new F(-Fi,fr,0)];class Qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ys=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ys),e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ys=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Or,format:Tn,colorSpace:Fn,depthBuffer:!1},r=eu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q_(o)),this._blurMaterial=ev(o,e,t)}return r}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,vs)}_sceneToCubeUV(e,t,i,r){const s=new fn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Zc),u.toneMapping=ni,u.autoClear=!1;const p=new Fr({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new Ht(new Si,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Zc),_=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(s.up.set(0,l[d],0),s.lookAt(c[d],0,0)):M===1?(s.up.set(0,0,l[d]),s.lookAt(0,c[d],0)):(s.up.set(0,l[d],0),s.lookAt(0,0,c[d]));const y=this._cubeSize;ta(r,M*y,d>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Pr||e.mapping===Lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new Ht(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;const l=this._cubeSize;ta(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,vs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jc[(r-1)%Jc.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",o),this._halfBlur(a,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ht(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*ki-1),_=o/g,m=isFinite(o)?1+Math.floor(u*_):ki;m>ki&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const d=[];let M=0;for(let R=0;R<ki;++R){const C=R/_,S=Math.exp(-C*C/2);d.push(S),R===0?M+=S:R<m&&(M+=2*S)}for(let R=0;R<d.length;R++)d[R]=d[R]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const b=this._sizeLods[r],x=3*b*(r>y-Sr?r-y+Sr:0),E=4*(this._cubeSize-b);ta(t,x,E,3*b,2*b),l.setRenderTarget(t),l.render(h,vs)}}function Q_(n){const e=[],t=[],i=[];let r=n;const o=n-Sr+1+Kc.length;for(let a=0;a<o;a++){const s=Math.pow(2,r);t.push(s);let l=1/s;a>n-Sr?l=Kc[a-n+Sr-1]:a===0&&(l=0),i.push(l);const c=1/(s-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,M=new Float32Array(_*g*p),y=new Float32Array(m*g*p),b=new Float32Array(d*g*p);for(let E=0;E<p;E++){const R=E%3*2/3-1,C=E>2?0:-1,S=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];M.set(S,_*g*E),y.set(f,m*g*E);const A=[E,E,E,E,E,E];b.set(A,d*g*E)}const x=new Qt;x.setAttribute("position",new pn(M,_)),x.setAttribute("uv",new pn(y,m)),x.setAttribute("faceIndex",new pn(b,d)),e.push(x),r>Sr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function eu(n,e,t){const i=new bi(n,e,t);return i.texture.mapping=Ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ta(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ev(n,e,t){const i=new Float32Array(ki),r=new F(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function tu(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function nu(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Ll(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tv(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===Ws||l===js,u=l===Pr||l===Lr;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new Qc(n)),h=c?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Qc(n));const f=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",o),f.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function o(s){const l=s.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function nv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function iv(n,e,t,i){const r={},o=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete r[f.id];const p=o.get(f);p&&(e.remove(p),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let y=0,b=M.length;y<b;y+=3){const x=M[y+0],E=M[y+1],R=M[y+2];f.push(x,E,E,R,R,x)}}else{const M=g.array;_=g.version;for(let y=0,b=M.length/3-1;y<b;y+=3){const x=y+0,E=y+1,R=y+2;f.push(x,E,E,R,R,x)}}const m=new(Zh(f)?rf:nf)(f,1);m.version=_;const d=o.get(h);d&&e.remove(d),o.set(h,m)}function u(h){const f=o.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return o.get(h)}return{get:s,update:l,getWireframeAttribute:u}}function rv(n,e,t,i){const r=i.isWebGL2;let o;function a(f){o=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function u(f,p){n.drawElements(o,p,s,f*l),t.update(p,o,1)}function h(f,p,g){if(g===0)return;let _,m;if(r)_=n,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](o,p,s,f*l,g),t.update(p,o,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function ov(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,s){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=s*(o/3);break;case n.LINES:t.lines+=s*(o/2);break;case n.LINE_STRIP:t.lines+=s*(o-1);break;case n.LINE_LOOP:t.lines+=s*o;break;case n.POINTS:t.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function av(n,e){return n[0]-e[0]}function sv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function lv(n,e,t){const i={},r=new Float32Array(8),o=new WeakMap,a=new Nt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=o.get(u);if(m===void 0||m.count!==_){let O=function(){G.dispose(),o.delete(u),u.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let S=0;y===!0&&(S=1),b===!0&&(S=2),x===!0&&(S=3);let A=u.attributes.position.count*S,$=1;A>e.maxTextureSize&&($=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const q=new Float32Array(A*$*4*_),G=new ef(q,A,$,_);G.type=_i,G.needsUpdate=!0;const D=S*4;for(let V=0;V<_;V++){const Q=E[V],re=R[V],pe=C[V],j=A*$*4*V;for(let fe=0;fe<Q.count;fe++){const B=fe*D;y===!0&&(a.fromBufferAttribute(Q,fe),q[j+B+0]=a.x,q[j+B+1]=a.y,q[j+B+2]=a.z,q[j+B+3]=0),b===!0&&(a.fromBufferAttribute(re,fe),q[j+B+4]=a.x,q[j+B+5]=a.y,q[j+B+6]=a.z,q[j+B+7]=0),x===!0&&(a.fromBufferAttribute(pe,fe),q[j+B+8]=a.x,q[j+B+9]=a.y,q[j+B+10]=a.z,q[j+B+11]=pe.itemSize===4?a.w:1)}}m={count:_,texture:G,size:new we(A,$)},o.set(u,m),u.addEventListener("dispose",O)}let d=0;for(let y=0;y<f.length;y++)d+=f[y];const M=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",M),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let b=0;b<g;b++)_[b]=[b,0];i[u.id]=_}for(let b=0;b<g;b++){const x=_[b];x[0]=b,x[1]=f[b]}_.sort(sv);for(let b=0;b<8;b++)b<g&&_[b][1]?(s[b][0]=_[b][0],s[b][1]=_[b][1]):(s[b][0]=Number.MAX_SAFE_INTEGER,s[b][1]=0);s.sort(av);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let M=0;for(let b=0;b<8;b++){const x=s[b],E=x[0],R=x[1];E!==Number.MAX_SAFE_INTEGER&&R?(m&&u.getAttribute("morphTarget"+b)!==m[E]&&u.setAttribute("morphTarget"+b,m[E]),d&&u.getAttribute("morphNormal"+b)!==d[E]&&u.setAttribute("morphNormal"+b,d[E]),r[b]=R,M+=R):(m&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),d&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}const y=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function cv(n,e,t,i){let r=new WeakMap;function o(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER)),h}function a(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}const uf=new Jt,hf=new ef,ff=new Qp,df=new lf,iu=[],ru=[],ou=new Float32Array(16),au=new Float32Array(9),su=new Float32Array(4);function kr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=iu[r];if(o===void 0&&(o=new Float32Array(r),iu[r]=o),e!==0){i.toArray(o,0);for(let a=1,s=0;a!==e;++a)s+=t,n[a].toArray(o,s)}return o}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ba(n,e){let t=ru[e];t===void 0&&(t=new Int32Array(e),ru[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function uv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function pv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Lt(t,i))return;su.set(i),n.uniformMatrix2fv(this.addr,!1,su),Ot(t,i)}}function mv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Lt(t,i))return;au.set(i),n.uniformMatrix3fv(this.addr,!1,au),Ot(t,i)}}function gv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Lt(t,i))return;ou.set(i),n.uniformMatrix4fv(this.addr,!1,ou),Ot(t,i)}}function _v(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function xv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function bv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Mv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function Sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function Ev(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||uf,r)}function Tv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ff,r)}function Av(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||df,r)}function Cv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||hf,r)}function Rv(n){switch(n){case 5126:return uv;case 35664:return hv;case 35665:return fv;case 35666:return dv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return _v;case 35667:case 35671:return vv;case 35668:case 35672:return yv;case 35669:case 35673:return xv;case 5125:return bv;case 36294:return Mv;case 36295:return Sv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return Cv}}function Pv(n,e){n.uniform1fv(this.addr,e)}function Lv(n,e){const t=kr(e,this.size,2);n.uniform2fv(this.addr,t)}function Ov(n,e){const t=kr(e,this.size,3);n.uniform3fv(this.addr,t)}function Dv(n,e){const t=kr(e,this.size,4);n.uniform4fv(this.addr,t)}function Iv(n,e){const t=kr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Nv(n,e){const t=kr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Uv(n,e){const t=kr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Fv(n,e){n.uniform1iv(this.addr,e)}function kv(n,e){n.uniform2iv(this.addr,e)}function Bv(n,e){n.uniform3iv(this.addr,e)}function zv(n,e){n.uniform4iv(this.addr,e)}function Hv(n,e){n.uniform1uiv(this.addr,e)}function Gv(n,e){n.uniform2uiv(this.addr,e)}function Vv(n,e){n.uniform3uiv(this.addr,e)}function Wv(n,e){n.uniform4uiv(this.addr,e)}function jv(n,e,t){const i=this.cache,r=e.length,o=Ba(t,r);Lt(i,o)||(n.uniform1iv(this.addr,o),Ot(i,o));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||uf,o[a])}function $v(n,e,t){const i=this.cache,r=e.length,o=Ba(t,r);Lt(i,o)||(n.uniform1iv(this.addr,o),Ot(i,o));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ff,o[a])}function Xv(n,e,t){const i=this.cache,r=e.length,o=Ba(t,r);Lt(i,o)||(n.uniform1iv(this.addr,o),Ot(i,o));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||df,o[a])}function qv(n,e,t){const i=this.cache,r=e.length,o=Ba(t,r);Lt(i,o)||(n.uniform1iv(this.addr,o),Ot(i,o));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||hf,o[a])}function Yv(n){switch(n){case 5126:return Pv;case 35664:return Lv;case 35665:return Ov;case 35666:return Dv;case 35674:return Iv;case 35675:return Nv;case 35676:return Uv;case 5124:case 35670:return Fv;case 35667:case 35671:return kv;case 35668:case 35672:return Bv;case 35669:case 35673:return zv;case 5125:return Hv;case 36294:return Gv;case 36295:return Vv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return qv}}class Kv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Rv(t.type)}}class Zv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Yv(t.type)}}class Jv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const s=r[o];s.setValue(e,t[s.id],i)}}}const xs=/(\w+)(\])?(\[|\.)?/g;function lu(n,e){n.seq.push(e),n.map[e.id]=e}function Qv(n,e,t){const i=n.name,r=i.length;for(xs.lastIndex=0;;){const o=xs.exec(i),a=xs.lastIndex;let s=o[1];const l=o[2]==="]",c=o[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===r){lu(t,c===void 0?new Kv(s,n,e):new Zv(s,n,e));break}else{let h=t.map[s];h===void 0&&(h=new Jv(s),lu(t,h)),t=h}}}class ga{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),a=e.getUniformLocation(t,o.name);Qv(o,a,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,a=t.length;o!==a;++o){const s=t[o],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function cu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let e0=0;function t0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=r;a<o;a++){const s=a+1;i.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return i.join(`
`)}function n0(n){switch(n){case Fn:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function uu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+t0(n.getShaderSource(e),a)}else return r}function i0(n,e){const t=n0(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function r0(n,e){let t;switch(e){case rp:t="Linear";break;case op:t="Reinhard";break;case ap:t="OptimizedCineon";break;case sp:t="ACESFilmic";break;case lp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function o0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ao).join(`
`)}function a0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function s0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),a=o.name;let s=1;o.type===n.FLOAT_MAT2&&(s=2),o.type===n.FLOAT_MAT3&&(s=3),o.type===n.FLOAT_MAT4&&(s=4),t[a]={type:o.type,location:n.getAttribLocation(e,a),locationSize:s}}return t}function ao(n){return n!==""}function hu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const l0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zs(n){return n.replace(l0,c0)}function c0(n,e){const t=it[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Zs(t)}const u0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function du(n){return n.replace(u0,h0)}function h0(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function pu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function f0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ud?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function d0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Pr:case Lr:e="ENVMAP_TYPE_CUBE";break;case Ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function p0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Lr:e="ENVMAP_MODE_REFRACTION";break}return e}function m0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wl:e="ENVMAP_BLENDING_MULTIPLY";break;case np:e="ENVMAP_BLENDING_MIX";break;case ip:e="ENVMAP_BLENDING_ADD";break}return e}function g0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function _0(n,e,t,i){const r=n.getContext(),o=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=f0(t),c=d0(t),u=p0(t),h=m0(t),f=g0(t),p=t.isWebGL2?"":o0(t),g=a0(o),_=r.createProgram();let m,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ao).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ao).join(`
`),d.length>0&&(d+=`
`)):(m=[pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),d=[p,pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?it.tonemapping_pars_fragment:"",t.toneMapping!==ni?r0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.encodings_pars_fragment,i0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),a=Zs(a),a=hu(a,t),a=fu(a,t),s=Zs(s),s=hu(s,t),s=fu(s,t),a=du(a),s=du(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=M+m+a,b=M+d+s,x=cu(r,r.VERTEX_SHADER,y),E=cu(r,r.FRAGMENT_SHADER,b);if(r.attachShader(_,x),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const S=r.getProgramInfoLog(_).trim(),A=r.getShaderInfoLog(x).trim(),$=r.getShaderInfoLog(E).trim();let q=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,x,E);else{const D=uu(r,x,"vertex"),O=uu(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+D+`
`+O)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(A===""||$==="")&&(G=!1);G&&(this.diagnostics={runnable:q,programLog:S,vertexShader:{log:A,prefix:m},fragmentShader:{log:$,prefix:d}})}r.deleteShader(x),r.deleteShader(E);let R;this.getUniforms=function(){return R===void 0&&(R=new ga(r,_)),R};let C;return this.getAttributes=function(){return C===void 0&&(C=s0(r,_)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=x,this.fragmentShader=E,this}let v0=0;class y0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new x0(e),t.set(e,i)),i}}class x0{constructor(e){this.id=v0++,this.code=e,this.usedTimes=0}}function b0(n,e,t,i,r,o,a){const s=new Cl,l=new y0,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,A,$,q,G){const D=q.fog,O=G.geometry,V=S.isMeshStandardMaterial?q.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),re=Q&&Q.mapping===Ia?Q.image.height:null,pe=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,fe=j!==void 0?j.length:0;let B=0;O.morphAttributes.position!==void 0&&(B=1),O.morphAttributes.normal!==void 0&&(B=2),O.morphAttributes.color!==void 0&&(B=3);let oe,Y,K,ce;if(pe){const dt=Un[pe];oe=dt.vertexShader,Y=dt.fragmentShader}else oe=S.vertexShader,Y=S.fragmentShader,l.update(S),K=l.getVertexShaderID(S),ce=l.getFragmentShaderID(S);const H=n.getRenderTarget(),se=G.isInstancedMesh===!0,Se=!!S.map,ke=!!S.matcap,Re=!!Q,W=!!S.aoMap,ht=!!S.lightMap,Le=!!S.bumpMap,Ve=!!S.normalMap,Ne=!!S.displacementMap,et=!!S.emissiveMap,He=!!S.metalnessMap,Ye=!!S.roughnessMap,st=S.anisotropy>0,xt=S.clearcoat>0,gt=S.iridescence>0,L=S.sheen>0,T=S.transmission>0,ae=st&&!!S.anisotropyMap,ve=xt&&!!S.clearcoatMap,be=xt&&!!S.clearcoatNormalMap,I=xt&&!!S.clearcoatRoughnessMap,ge=gt&&!!S.iridescenceMap,xe=gt&&!!S.iridescenceThicknessMap,ne=L&&!!S.sheenColorMap,Oe=L&&!!S.sheenRoughnessMap,Be=!!S.specularMap,Fe=!!S.specularColorMap,Ue=!!S.specularIntensityMap,De=T&&!!S.transmissionMap,We=T&&!!S.thicknessMap,rt=!!S.gradientMap,z=!!S.alphaMap,Te=S.alphaTest>0,te=!!S.extensions,Ee=!!O.attributes.uv1,Ce=!!O.attributes.uv2,lt=!!O.attributes.uv3;return{isWebGL2:u,shaderID:pe,shaderType:S.type,shaderName:S.name,vertexShader:oe,fragmentShader:Y,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:se,instancingColor:se&&G.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:H===null?n.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Fn,map:Se,matcap:ke,envMap:Re,envMapMode:Re&&Q.mapping,envMapCubeUVHeight:re,aoMap:W,lightMap:ht,bumpMap:Le,normalMap:Ve,displacementMap:f&&Ne,emissiveMap:et,normalMapObjectSpace:Ve&&S.normalMapType===bp,normalMapTangentSpace:Ve&&S.normalMapType===Na,metalnessMap:He,roughnessMap:Ye,anisotropy:st,anisotropyMap:ae,clearcoat:xt,clearcoatMap:ve,clearcoatNormalMap:be,clearcoatRoughnessMap:I,iridescence:gt,iridescenceMap:ge,iridescenceThicknessMap:xe,sheen:L,sheenColorMap:ne,sheenRoughnessMap:Oe,specularMap:Be,specularColorMap:Fe,specularIntensityMap:Ue,transmission:T,transmissionMap:De,thicknessMap:We,gradientMap:rt,opaque:S.transparent===!1&&S.blending===Cr,alphaMap:z,alphaTest:Te,combine:S.combine,mapUv:Se&&_(S.map.channel),aoMapUv:W&&_(S.aoMap.channel),lightMapUv:ht&&_(S.lightMap.channel),bumpMapUv:Le&&_(S.bumpMap.channel),normalMapUv:Ve&&_(S.normalMap.channel),displacementMapUv:Ne&&_(S.displacementMap.channel),emissiveMapUv:et&&_(S.emissiveMap.channel),metalnessMapUv:He&&_(S.metalnessMap.channel),roughnessMapUv:Ye&&_(S.roughnessMap.channel),anisotropyMapUv:ae&&_(S.anisotropyMap.channel),clearcoatMapUv:ve&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:be&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:I&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(S.sheenRoughnessMap.channel),specularMapUv:Be&&_(S.specularMap.channel),specularColorMapUv:Fe&&_(S.specularColorMap.channel),specularIntensityMapUv:Ue&&_(S.specularIntensityMap.channel),transmissionMapUv:De&&_(S.transmissionMap.channel),thicknessMapUv:We&&_(S.thicknessMap.channel),alphaMapUv:z&&_(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ve||st),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ee,vertexUv2s:Ce,vertexUv3s:lt,pointsUvs:G.isPoints===!0&&!!O.attributes.uv&&(Se||z),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:G.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:B,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&$.length>0,shadowMapType:n.shadowMap.type,toneMapping:S.toneMapped?n.toneMapping:ni,useLegacyLights:n.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===dn,flipSided:S.side===Zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:te&&S.extensions.derivatives===!0,extensionFragDepth:te&&S.extensions.fragDepth===!0,extensionDrawBuffers:te&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:te&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const $ in S.defines)A.push($),A.push(S.defines[$]);return S.isRawShaderMaterial===!1&&(M(A,S),y(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function M(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function y(S,A){s.disableAll(),A.isWebGL2&&s.enable(0),A.supportsVertexTextures&&s.enable(1),A.instancing&&s.enable(2),A.instancingColor&&s.enable(3),A.matcap&&s.enable(4),A.envMap&&s.enable(5),A.normalMapObjectSpace&&s.enable(6),A.normalMapTangentSpace&&s.enable(7),A.clearcoat&&s.enable(8),A.iridescence&&s.enable(9),A.alphaTest&&s.enable(10),A.vertexColors&&s.enable(11),A.vertexAlphas&&s.enable(12),A.vertexUv1s&&s.enable(13),A.vertexUv2s&&s.enable(14),A.vertexUv3s&&s.enable(15),A.vertexTangents&&s.enable(16),A.anisotropy&&s.enable(17),S.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.skinning&&s.enable(4),A.morphTargets&&s.enable(5),A.morphNormals&&s.enable(6),A.morphColors&&s.enable(7),A.premultipliedAlpha&&s.enable(8),A.shadowMapEnabled&&s.enable(9),A.useLegacyLights&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),S.push(s.mask)}function b(S){const A=g[S.type];let $;if(A){const q=Un[A];$=af.clone(q.uniforms)}else $=S.uniforms;return $}function x(S,A){let $;for(let q=0,G=c.length;q<G;q++){const D=c[q];if(D.cacheKey===A){$=D,++$.usedTimes;break}}return $===void 0&&($=new _0(n,A,S,o),c.push($)),$}function E(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function R(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:x,releaseProgram:E,releaseShaderCache:R,programs:c,dispose:C}}function M0(){let n=new WeakMap;function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function t(o){n.delete(o)}function i(o,a,s){n.get(o)[a]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function S0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function mu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gu(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function a(h,f,p,g,_,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function s(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||S0),i.length>1&&i.sort(f||mu),r.length>1&&r.sort(f||mu)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:s,unshift:l,finish:u,sort:c}}function w0(){let n=new WeakMap;function e(i,r){const o=n.get(i);let a;return o===void 0?(a=new gu,n.set(i,[a])):r>=o.length?(a=new gu,o.push(a)):a=o[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function E0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new at};break;case"SpotLight":t={position:new F,direction:new F,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function T0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let A0=0;function C0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function R0(n,e){const t=new E0,i=T0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new F);const o=new F,a=new wt,s=new wt;function l(u,h){let f=0,p=0,g=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let _=0,m=0,d=0,M=0,y=0,b=0,x=0,E=0,R=0,C=0;u.sort(C0);const S=h===!0?Math.PI:1;for(let $=0,q=u.length;$<q;$++){const G=u[$],D=G.color,O=G.intensity,V=G.distance,Q=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)f+=D.r*O*S,p+=D.g*O*S,g+=D.b*O*S;else if(G.isLightProbe)for(let re=0;re<9;re++)r.probe[re].addScaledVector(G.sh.coefficients[re],O);else if(G.isDirectionalLight){const re=t.get(G);if(re.color.copy(G.color).multiplyScalar(G.intensity*S),G.castShadow){const pe=G.shadow,j=i.get(G);j.shadowBias=pe.bias,j.shadowNormalBias=pe.normalBias,j.shadowRadius=pe.radius,j.shadowMapSize=pe.mapSize,r.directionalShadow[_]=j,r.directionalShadowMap[_]=Q,r.directionalShadowMatrix[_]=G.shadow.matrix,b++}r.directional[_]=re,_++}else if(G.isSpotLight){const re=t.get(G);re.position.setFromMatrixPosition(G.matrixWorld),re.color.copy(D).multiplyScalar(O*S),re.distance=V,re.coneCos=Math.cos(G.angle),re.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),re.decay=G.decay,r.spot[d]=re;const pe=G.shadow;if(G.map&&(r.spotLightMap[R]=G.map,R++,pe.updateMatrices(G),G.castShadow&&C++),r.spotLightMatrix[d]=pe.matrix,G.castShadow){const j=i.get(G);j.shadowBias=pe.bias,j.shadowNormalBias=pe.normalBias,j.shadowRadius=pe.radius,j.shadowMapSize=pe.mapSize,r.spotShadow[d]=j,r.spotShadowMap[d]=Q,E++}d++}else if(G.isRectAreaLight){const re=t.get(G);re.color.copy(D).multiplyScalar(O),re.halfWidth.set(G.width*.5,0,0),re.halfHeight.set(0,G.height*.5,0),r.rectArea[M]=re,M++}else if(G.isPointLight){const re=t.get(G);if(re.color.copy(G.color).multiplyScalar(G.intensity*S),re.distance=G.distance,re.decay=G.decay,G.castShadow){const pe=G.shadow,j=i.get(G);j.shadowBias=pe.bias,j.shadowNormalBias=pe.normalBias,j.shadowRadius=pe.radius,j.shadowMapSize=pe.mapSize,j.shadowCameraNear=pe.camera.near,j.shadowCameraFar=pe.camera.far,r.pointShadow[m]=j,r.pointShadowMap[m]=Q,r.pointShadowMatrix[m]=G.shadow.matrix,x++}r.point[m]=re,m++}else if(G.isHemisphereLight){const re=t.get(G);re.skyColor.copy(G.color).multiplyScalar(O*S),re.groundColor.copy(G.groundColor).multiplyScalar(O*S),r.hemi[y]=re,y++}}M>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const A=r.hash;(A.directionalLength!==_||A.pointLength!==m||A.spotLength!==d||A.rectAreaLength!==M||A.hemiLength!==y||A.numDirectionalShadows!==b||A.numPointShadows!==x||A.numSpotShadows!==E||A.numSpotMaps!==R)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=M,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=E+R-C,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=C,A.directionalLength=_,A.pointLength=m,A.spotLength=d,A.rectAreaLength=M,A.hemiLength=y,A.numDirectionalShadows=b,A.numPointShadows=x,A.numSpotShadows=E,A.numSpotMaps=R,r.version=A0++)}function c(u,h){let f=0,p=0,g=0,_=0,m=0;const d=h.matrixWorldInverse;for(let M=0,y=u.length;M<y;M++){const b=u[M];if(b.isDirectionalLight){const x=r.directional[f];x.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(o),x.direction.transformDirection(d),f++}else if(b.isSpotLight){const x=r.spot[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(d),x.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(o),x.direction.transformDirection(d),g++}else if(b.isRectAreaLight){const x=r.rectArea[_];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(d),s.identity(),a.copy(b.matrixWorld),a.premultiply(d),s.extractRotation(a),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),_++}else if(b.isPointLight){const x=r.point[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(d),p++}else if(b.isHemisphereLight){const x=r.hemi[m];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function _u(n,e){const t=new R0(n,e),i=[],r=[];function o(){i.length=0,r.length=0}function a(h){i.push(h)}function s(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function P0(n,e){let t=new WeakMap;function i(o,a=0){const s=t.get(o);let l;return s===void 0?(l=new _u(n,e),t.set(o,[l])):a>=s.length?(l=new _u(n,e),s.push(l)):l=s[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class L0 extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class O0 extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const D0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function N0(n,e,t){let i=new Rl;const r=new we,o=new we,a=new Nt,s=new L0({depthPacking:xp}),l=new O0,c={},u=t.maxTextureSize,h={[xi]:Zt,[Zt]:xi,[dn]:dn},f=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:D0,fragmentShader:I0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Qt;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ht(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bh;let d=this.type;this.render=function(x,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const C=n.getRenderTarget(),S=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),$=n.state;$.setBlending(vi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const q=d!==Zn&&this.type===Zn,G=d===Zn&&this.type!==Zn;for(let D=0,O=x.length;D<O;D++){const V=x[D],Q=V.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const re=Q.getFrameExtents();if(r.multiply(re),o.copy(Q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/re.x),r.x=o.x*re.x,Q.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/re.y),r.y=o.y*re.y,Q.mapSize.y=o.y)),Q.map===null||q===!0||G===!0){const j=this.type!==Zn?{minFilter:Yt,magFilter:Yt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new bi(r.x,r.y,j),Q.map.texture.name=V.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();const pe=Q.getViewportCount();for(let j=0;j<pe;j++){const fe=Q.getViewport(j);a.set(o.x*fe.x,o.y*fe.y,o.x*fe.z,o.y*fe.w),$.viewport(a),Q.updateMatrices(V,j),i=Q.getFrustum(),b(E,R,Q.camera,V,this.type)}Q.isPointLightShadow!==!0&&this.type===Zn&&M(Q,R),Q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(C,S,A)};function M(x,E){const R=e.update(_);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new bi(r.x,r.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(E,null,R,f,_,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(E,null,R,p,_,null)}function y(x,E,R,C){let S=null;const A=R.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(A!==void 0)S=A;else if(S=R.isPointLight===!0?l:s,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const $=S.uuid,q=E.uuid;let G=c[$];G===void 0&&(G={},c[$]=G);let D=G[q];D===void 0&&(D=S.clone(),G[q]=D),S=D}if(S.visible=E.visible,S.wireframe=E.wireframe,C===Zn?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:h[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const $=n.properties.get(S);$.light=R}return S}function b(x,E,R,C,S){if(x.visible===!1)return;if(x.layers.test(E.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&S===Zn)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,x.matrixWorld);const q=e.update(x),G=x.material;if(Array.isArray(G)){const D=q.groups;for(let O=0,V=D.length;O<V;O++){const Q=D[O],re=G[Q.materialIndex];if(re&&re.visible){const pe=y(x,re,C,S);n.renderBufferDirect(R,null,q,pe,x,Q)}}}else if(G.visible){const D=y(x,G,C,S);n.renderBufferDirect(R,null,q,D,x,null)}}const $=x.children;for(let q=0,G=$.length;q<G;q++)b($[q],E,R,C,S)}}function U0(n,e,t){const i=t.isWebGL2;function r(){let z=!1;const Te=new Nt;let te=null;const Ee=new Nt(0,0,0,0);return{setMask:function(Ce){te!==Ce&&!z&&(n.colorMask(Ce,Ce,Ce,Ce),te=Ce)},setLocked:function(Ce){z=Ce},setClear:function(Ce,lt,vt,dt,mn){mn===!0&&(Ce*=dt,lt*=dt,vt*=dt),Te.set(Ce,lt,vt,dt),Ee.equals(Te)===!1&&(n.clearColor(Ce,lt,vt,dt),Ee.copy(Te))},reset:function(){z=!1,te=null,Ee.set(-1,0,0,0)}}}function o(){let z=!1,Te=null,te=null,Ee=null;return{setTest:function(Ce){Ce?H(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(Ce){Te!==Ce&&!z&&(n.depthMask(Ce),Te=Ce)},setFunc:function(Ce){if(te!==Ce){switch(Ce){case Yd:n.depthFunc(n.NEVER);break;case Kd:n.depthFunc(n.ALWAYS);break;case Zd:n.depthFunc(n.LESS);break;case Vs:n.depthFunc(n.LEQUAL);break;case Jd:n.depthFunc(n.EQUAL);break;case Qd:n.depthFunc(n.GEQUAL);break;case ep:n.depthFunc(n.GREATER);break;case tp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=Ce}},setLocked:function(Ce){z=Ce},setClear:function(Ce){Ee!==Ce&&(n.clearDepth(Ce),Ee=Ce)},reset:function(){z=!1,Te=null,te=null,Ee=null}}}function a(){let z=!1,Te=null,te=null,Ee=null,Ce=null,lt=null,vt=null,dt=null,mn=null;return{setTest:function(bt){z||(bt?H(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(bt){Te!==bt&&!z&&(n.stencilMask(bt),Te=bt)},setFunc:function(bt,cn,kt){(te!==bt||Ee!==cn||Ce!==kt)&&(n.stencilFunc(bt,cn,kt),te=bt,Ee=cn,Ce=kt)},setOp:function(bt,cn,kt){(lt!==bt||vt!==cn||dt!==kt)&&(n.stencilOp(bt,cn,kt),lt=bt,vt=cn,dt=kt)},setLocked:function(bt){z=bt},setClear:function(bt){mn!==bt&&(n.clearStencil(bt),mn=bt)},reset:function(){z=!1,Te=null,te=null,Ee=null,Ce=null,lt=null,vt=null,dt=null,mn=null}}}const s=new r,l=new o,c=new a,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,d=!1,M=null,y=null,b=null,x=null,E=null,R=null,C=null,S=!1,A=null,$=null,q=null,G=null,D=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Q=0;const re=n.getParameter(n.VERSION);re.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(re)[1]),V=Q>=1):re.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),V=Q>=2);let pe=null,j={};const fe=n.getParameter(n.SCISSOR_BOX),B=n.getParameter(n.VIEWPORT),oe=new Nt().fromArray(fe),Y=new Nt().fromArray(B);function K(z,Te,te,Ee){const Ce=new Uint8Array(4),lt=n.createTexture();n.bindTexture(z,lt),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let vt=0;vt<te;vt++)i&&(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)?n.texImage3D(Te,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(Te+vt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return lt}const ce={};ce[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),ce[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ce[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ce[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),H(n.DEPTH_TEST),l.setFunc(Vs),Ne(!1),et(nc),H(n.CULL_FACE),Le(vi);function H(z){f[z]!==!0&&(n.enable(z),f[z]=!0)}function se(z){f[z]!==!1&&(n.disable(z),f[z]=!1)}function Se(z,Te){return p[z]!==Te?(n.bindFramebuffer(z,Te),p[z]=Te,i&&(z===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Te),z===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Te)),!0):!1}function ke(z,Te){let te=_,Ee=!1;if(z)if(te=g.get(Te),te===void 0&&(te=[],g.set(Te,te)),z.isWebGLMultipleRenderTargets){const Ce=z.texture;if(te.length!==Ce.length||te[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,vt=Ce.length;lt<vt;lt++)te[lt]=n.COLOR_ATTACHMENT0+lt;te.length=Ce.length,Ee=!0}}else te[0]!==n.COLOR_ATTACHMENT0&&(te[0]=n.COLOR_ATTACHMENT0,Ee=!0);else te[0]!==n.BACK&&(te[0]=n.BACK,Ee=!0);Ee&&(t.isWebGL2?n.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Re(z){return m!==z?(n.useProgram(z),m=z,!0):!1}const W={[xr]:n.FUNC_ADD,[kd]:n.FUNC_SUBTRACT,[Bd]:n.FUNC_REVERSE_SUBTRACT};if(i)W[ac]=n.MIN,W[sc]=n.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(W[ac]=z.MIN_EXT,W[sc]=z.MAX_EXT)}const ht={[zd]:n.ZERO,[Hd]:n.ONE,[Gd]:n.SRC_COLOR,[zh]:n.SRC_ALPHA,[qd]:n.SRC_ALPHA_SATURATE,[$d]:n.DST_COLOR,[Wd]:n.DST_ALPHA,[Vd]:n.ONE_MINUS_SRC_COLOR,[Hh]:n.ONE_MINUS_SRC_ALPHA,[Xd]:n.ONE_MINUS_DST_COLOR,[jd]:n.ONE_MINUS_DST_ALPHA};function Le(z,Te,te,Ee,Ce,lt,vt,dt){if(z===vi){d===!0&&(se(n.BLEND),d=!1);return}if(d===!1&&(H(n.BLEND),d=!0),z!==Fd){if(z!==M||dt!==S){if((y!==xr||E!==xr)&&(n.blendEquation(n.FUNC_ADD),y=xr,E=xr),dt)switch(z){case Cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ic:n.blendFunc(n.ONE,n.ONE);break;case rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case oc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ic:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case oc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}b=null,x=null,R=null,C=null,M=z,S=dt}return}Ce=Ce||Te,lt=lt||te,vt=vt||Ee,(Te!==y||Ce!==E)&&(n.blendEquationSeparate(W[Te],W[Ce]),y=Te,E=Ce),(te!==b||Ee!==x||lt!==R||vt!==C)&&(n.blendFuncSeparate(ht[te],ht[Ee],ht[lt],ht[vt]),b=te,x=Ee,R=lt,C=vt),M=z,S=!1}function Ve(z,Te){z.side===dn?se(n.CULL_FACE):H(n.CULL_FACE);let te=z.side===Zt;Te&&(te=!te),Ne(te),z.blending===Cr&&z.transparent===!1?Le(vi):Le(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),s.setMask(z.colorWrite);const Ee=z.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ye(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?H(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(z){A!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),A=z)}function et(z){z!==Id?(H(n.CULL_FACE),z!==$&&(z===nc?n.cullFace(n.BACK):z===Nd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),$=z}function He(z){z!==q&&(V&&n.lineWidth(z),q=z)}function Ye(z,Te,te){z?(H(n.POLYGON_OFFSET_FILL),(G!==Te||D!==te)&&(n.polygonOffset(Te,te),G=Te,D=te)):se(n.POLYGON_OFFSET_FILL)}function st(z){z?H(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function xt(z){z===void 0&&(z=n.TEXTURE0+O-1),pe!==z&&(n.activeTexture(z),pe=z)}function gt(z,Te,te){te===void 0&&(pe===null?te=n.TEXTURE0+O-1:te=pe);let Ee=j[te];Ee===void 0&&(Ee={type:void 0,texture:void 0},j[te]=Ee),(Ee.type!==z||Ee.texture!==Te)&&(pe!==te&&(n.activeTexture(te),pe=te),n.bindTexture(z,Te||ce[z]),Ee.type=z,Ee.texture=Te)}function L(){const z=j[pe];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function T(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function be(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function I(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Oe(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Be(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Fe(z){oe.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),oe.copy(z))}function Ue(z){Y.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Y.copy(z))}function De(z,Te){let te=h.get(Te);te===void 0&&(te=new WeakMap,h.set(Te,te));let Ee=te.get(z);Ee===void 0&&(Ee=n.getUniformBlockIndex(Te,z.name),te.set(z,Ee))}function We(z,Te){const Ee=h.get(Te).get(z);u.get(Te)!==Ee&&(n.uniformBlockBinding(Te,Ee,z.__bindingPointIndex),u.set(Te,Ee))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},pe=null,j={},p={},g=new WeakMap,_=[],m=null,d=!1,M=null,y=null,b=null,x=null,E=null,R=null,C=null,S=!1,A=null,$=null,q=null,G=null,D=null,oe.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:H,disable:se,bindFramebuffer:Se,drawBuffers:ke,useProgram:Re,setBlending:Le,setMaterial:Ve,setFlipSided:Ne,setCullFace:et,setLineWidth:He,setPolygonOffset:Ye,setScissorTest:st,activeTexture:xt,bindTexture:gt,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:ae,texImage2D:Oe,texImage3D:Be,updateUBOMapping:De,uniformBlockBinding:We,texStorage2D:xe,texStorage3D:ne,texSubImage2D:ve,texSubImage3D:be,compressedTexSubImage2D:I,compressedTexSubImage3D:ge,scissor:Fe,viewport:Ue,reset:rt}}function F0(n,e,t,i,r,o,a){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,T){return d?new OffscreenCanvas(L,T):Eo("canvas")}function y(L,T,ae,ve){let be=1;if((L.width>ve||L.height>ve)&&(be=ve/Math.max(L.width,L.height)),be<1||T===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const I=T?Ma:Math.floor,ge=I(be*L.width),xe=I(be*L.height);_===void 0&&(_=M(ge,xe));const ne=ae?M(ge,xe):_;return ne.width=ge,ne.height=xe,ne.getContext("2d").drawImage(L,0,0,ge,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+ge+"x"+xe+")."),ne}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function b(L){return Ks(L.width)&&Ks(L.height)}function x(L){return s?!1:L.wrapS!==En||L.wrapT!==En||L.minFilter!==Yt&&L.minFilter!==sn}function E(L,T){return L.generateMipmaps&&T&&L.minFilter!==Yt&&L.minFilter!==sn}function R(L){n.generateMipmap(L)}function C(L,T,ae,ve,be=!1){if(s===!1)return T;if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let I=T;return T===n.RED&&(ae===n.FLOAT&&(I=n.R32F),ae===n.HALF_FLOAT&&(I=n.R16F),ae===n.UNSIGNED_BYTE&&(I=n.R8)),T===n.RG&&(ae===n.FLOAT&&(I=n.RG32F),ae===n.HALF_FLOAT&&(I=n.RG16F),ae===n.UNSIGNED_BYTE&&(I=n.RG8)),T===n.RGBA&&(ae===n.FLOAT&&(I=n.RGBA32F),ae===n.HALF_FLOAT&&(I=n.RGBA16F),ae===n.UNSIGNED_BYTE&&(I=ve===Qe&&be===!1?n.SRGB8_ALPHA8:n.RGBA8),ae===n.UNSIGNED_SHORT_4_4_4_4&&(I=n.RGBA4),ae===n.UNSIGNED_SHORT_5_5_5_1&&(I=n.RGB5_A1)),(I===n.R16F||I===n.R32F||I===n.RG16F||I===n.RG32F||I===n.RGBA16F||I===n.RGBA32F)&&e.get("EXT_color_buffer_float"),I}function S(L,T,ae){return E(L,ae)===!0||L.isFramebufferTexture&&L.minFilter!==Yt&&L.minFilter!==sn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function A(L){return L===Yt||L===lc||L===qa?n.NEAREST:n.LINEAR}function $(L){const T=L.target;T.removeEventListener("dispose",$),G(T),T.isVideoTexture&&g.delete(T)}function q(L){const T=L.target;T.removeEventListener("dispose",q),O(T)}function G(L){const T=i.get(L);if(T.__webglInit===void 0)return;const ae=L.source,ve=m.get(ae);if(ve){const be=ve[T.__cacheKey];be.usedTimes--,be.usedTimes===0&&D(L),Object.keys(ve).length===0&&m.delete(ae)}i.remove(L)}function D(L){const T=i.get(L);n.deleteTexture(T.__webglTexture);const ae=L.source,ve=m.get(ae);delete ve[T.__cacheKey],a.memory.textures--}function O(L){const T=L.texture,ae=i.get(L),ve=i.get(T);if(ve.__webglTexture!==void 0&&(n.deleteTexture(ve.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let be=0;be<6;be++)n.deleteFramebuffer(ae.__webglFramebuffer[be]),ae.__webglDepthbuffer&&n.deleteRenderbuffer(ae.__webglDepthbuffer[be]);else{if(n.deleteFramebuffer(ae.__webglFramebuffer),ae.__webglDepthbuffer&&n.deleteRenderbuffer(ae.__webglDepthbuffer),ae.__webglMultisampledFramebuffer&&n.deleteFramebuffer(ae.__webglMultisampledFramebuffer),ae.__webglColorRenderbuffer)for(let be=0;be<ae.__webglColorRenderbuffer.length;be++)ae.__webglColorRenderbuffer[be]&&n.deleteRenderbuffer(ae.__webglColorRenderbuffer[be]);ae.__webglDepthRenderbuffer&&n.deleteRenderbuffer(ae.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let be=0,I=T.length;be<I;be++){const ge=i.get(T[be]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),a.memory.textures--),i.remove(T[be])}i.remove(T),i.remove(L)}let V=0;function Q(){V=0}function re(){const L=V;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),V+=1,L}function pe(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function j(L,T){const ae=i.get(L);if(L.isVideoTexture&&xt(L),L.isRenderTargetTexture===!1&&L.version>0&&ae.__version!==L.version){const ve=L.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(ae,L,T);return}}t.bindTexture(n.TEXTURE_2D,ae.__webglTexture,n.TEXTURE0+T)}function fe(L,T){const ae=i.get(L);if(L.version>0&&ae.__version!==L.version){Se(ae,L,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,ae.__webglTexture,n.TEXTURE0+T)}function B(L,T){const ae=i.get(L);if(L.version>0&&ae.__version!==L.version){Se(ae,L,T);return}t.bindTexture(n.TEXTURE_3D,ae.__webglTexture,n.TEXTURE0+T)}function oe(L,T){const ae=i.get(L);if(L.version>0&&ae.__version!==L.version){ke(ae,L,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture,n.TEXTURE0+T)}const Y={[$s]:n.REPEAT,[En]:n.CLAMP_TO_EDGE,[Xs]:n.MIRRORED_REPEAT},K={[Yt]:n.NEAREST,[lc]:n.NEAREST_MIPMAP_NEAREST,[qa]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[cp]:n.LINEAR_MIPMAP_NEAREST,[So]:n.LINEAR_MIPMAP_LINEAR},ce={[Sp]:n.NEVER,[Pp]:n.ALWAYS,[wp]:n.LESS,[Tp]:n.LEQUAL,[Ep]:n.EQUAL,[Rp]:n.GEQUAL,[Ap]:n.GREATER,[Cp]:n.NOTEQUAL};function H(L,T,ae){if(ae?(n.texParameteri(L,n.TEXTURE_WRAP_S,Y[T.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,Y[T.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,Y[T.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,K[T.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,K[T.minFilter])):(n.texParameteri(L,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(L,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==En||T.wrapT!==En)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(L,n.TEXTURE_MAG_FILTER,A(T.magFilter)),n.texParameteri(L,n.TEXTURE_MIN_FILTER,A(T.minFilter)),T.minFilter!==Yt&&T.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,ce[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ve=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Yt||T.minFilter!==qa&&T.minFilter!==So||T.type===_i&&e.has("OES_texture_float_linear")===!1||s===!1&&T.type===Or&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(L,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function se(L,T){let ae=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",$));const ve=T.source;let be=m.get(ve);be===void 0&&(be={},m.set(ve,be));const I=pe(T);if(I!==L.__cacheKey){be[I]===void 0&&(be[I]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,ae=!0),be[I].usedTimes++;const ge=be[L.__cacheKey];ge!==void 0&&(be[L.__cacheKey].usedTimes--,ge.usedTimes===0&&D(T)),L.__cacheKey=I,L.__webglTexture=be[I].texture}return ae}function Se(L,T,ae){let ve=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ve=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ve=n.TEXTURE_3D);const be=se(L,T),I=T.source;t.bindTexture(ve,L.__webglTexture,n.TEXTURE0+ae);const ge=i.get(I);if(I.version!==ge.__version||be===!0){t.activeTexture(n.TEXTURE0+ae),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const xe=x(T)&&b(T.image)===!1;let ne=y(T.image,xe,!1,u);ne=gt(T,ne);const Oe=b(ne)||s,Be=o.convert(T.format,T.colorSpace);let Fe=o.convert(T.type),Ue=C(T.internalFormat,Be,Fe,T.colorSpace);H(ve,T,Oe);let De;const We=T.mipmaps,rt=s&&T.isVideoTexture!==!0,z=ge.__version===void 0||be===!0,Te=S(T,ne,Oe);if(T.isDepthTexture)Ue=n.DEPTH_COMPONENT,s?T.type===_i?Ue=n.DEPTH_COMPONENT32F:T.type===gi?Ue=n.DEPTH_COMPONENT24:T.type===zi?Ue=n.DEPTH24_STENCIL8:Ue=n.DEPTH_COMPONENT16:T.type===_i&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Hi&&Ue===n.DEPTH_COMPONENT&&T.type!==El&&T.type!==gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=gi,Fe=o.convert(T.type)),T.format===Dr&&Ue===n.DEPTH_COMPONENT&&(Ue=n.DEPTH_STENCIL,T.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=zi,Fe=o.convert(T.type))),z&&(rt?t.texStorage2D(n.TEXTURE_2D,1,Ue,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Ue,ne.width,ne.height,0,Be,Fe,null));else if(T.isDataTexture)if(We.length>0&&Oe){rt&&z&&t.texStorage2D(n.TEXTURE_2D,Te,Ue,We[0].width,We[0].height);for(let te=0,Ee=We.length;te<Ee;te++)De=We[te],rt?t.texSubImage2D(n.TEXTURE_2D,te,0,0,De.width,De.height,Be,Fe,De.data):t.texImage2D(n.TEXTURE_2D,te,Ue,De.width,De.height,0,Be,Fe,De.data);T.generateMipmaps=!1}else rt?(z&&t.texStorage2D(n.TEXTURE_2D,Te,Ue,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,Be,Fe,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,ne.width,ne.height,0,Be,Fe,ne.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){rt&&z&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ue,We[0].width,We[0].height,ne.depth);for(let te=0,Ee=We.length;te<Ee;te++)De=We[te],T.format!==Tn?Be!==null?rt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,De.width,De.height,ne.depth,Be,De.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Ue,De.width,De.height,ne.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,De.width,De.height,ne.depth,Be,Fe,De.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Ue,De.width,De.height,ne.depth,0,Be,Fe,De.data)}else{rt&&z&&t.texStorage2D(n.TEXTURE_2D,Te,Ue,We[0].width,We[0].height);for(let te=0,Ee=We.length;te<Ee;te++)De=We[te],T.format!==Tn?Be!==null?rt?t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,De.width,De.height,Be,De.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Ue,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage2D(n.TEXTURE_2D,te,0,0,De.width,De.height,Be,Fe,De.data):t.texImage2D(n.TEXTURE_2D,te,Ue,De.width,De.height,0,Be,Fe,De.data)}else if(T.isDataArrayTexture)rt?(z&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ue,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Be,Fe,ne.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,ne.width,ne.height,ne.depth,0,Be,Fe,ne.data);else if(T.isData3DTexture)rt?(z&&t.texStorage3D(n.TEXTURE_3D,Te,Ue,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Be,Fe,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,ne.width,ne.height,ne.depth,0,Be,Fe,ne.data);else if(T.isFramebufferTexture){if(z)if(rt)t.texStorage2D(n.TEXTURE_2D,Te,Ue,ne.width,ne.height);else{let te=ne.width,Ee=ne.height;for(let Ce=0;Ce<Te;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,Ue,te,Ee,0,Be,Fe,null),te>>=1,Ee>>=1}}else if(We.length>0&&Oe){rt&&z&&t.texStorage2D(n.TEXTURE_2D,Te,Ue,We[0].width,We[0].height);for(let te=0,Ee=We.length;te<Ee;te++)De=We[te],rt?t.texSubImage2D(n.TEXTURE_2D,te,0,0,Be,Fe,De):t.texImage2D(n.TEXTURE_2D,te,Ue,Be,Fe,De);T.generateMipmaps=!1}else rt?(z&&t.texStorage2D(n.TEXTURE_2D,Te,Ue,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Be,Fe,ne)):t.texImage2D(n.TEXTURE_2D,0,Ue,Be,Fe,ne);E(T,Oe)&&R(ve),ge.__version=I.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ke(L,T,ae){if(T.image.length!==6)return;const ve=se(L,T),be=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+ae);const I=i.get(be);if(be.version!==I.__version||ve===!0){t.activeTexture(n.TEXTURE0+ae),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ge=T.isCompressedTexture||T.image[0].isCompressedTexture,xe=T.image[0]&&T.image[0].isDataTexture,ne=[];for(let te=0;te<6;te++)!ge&&!xe?ne[te]=y(T.image[te],!1,!0,c):ne[te]=xe?T.image[te].image:T.image[te],ne[te]=gt(T,ne[te]);const Oe=ne[0],Be=b(Oe)||s,Fe=o.convert(T.format,T.colorSpace),Ue=o.convert(T.type),De=C(T.internalFormat,Fe,Ue,T.colorSpace),We=s&&T.isVideoTexture!==!0,rt=I.__version===void 0||ve===!0;let z=S(T,Oe,Be);H(n.TEXTURE_CUBE_MAP,T,Be);let Te;if(ge){We&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,z,De,Oe.width,Oe.height);for(let te=0;te<6;te++){Te=ne[te].mipmaps;for(let Ee=0;Ee<Te.length;Ee++){const Ce=Te[Ee];T.format!==Tn?Fe!==null?We?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,Ce.width,Ce.height,Fe,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,De,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,Ce.width,Ce.height,Fe,Ue,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,De,Ce.width,Ce.height,0,Fe,Ue,Ce.data)}}}else{Te=T.mipmaps,We&&rt&&(Te.length>0&&z++,t.texStorage2D(n.TEXTURE_CUBE_MAP,z,De,ne[0].width,ne[0].height));for(let te=0;te<6;te++)if(xe){We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ne[te].width,ne[te].height,Fe,Ue,ne[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,De,ne[te].width,ne[te].height,0,Fe,Ue,ne[te].data);for(let Ee=0;Ee<Te.length;Ee++){const lt=Te[Ee].image[te].image;We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,lt.width,lt.height,Fe,Ue,lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,De,lt.width,lt.height,0,Fe,Ue,lt.data)}}else{We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Fe,Ue,ne[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,De,Fe,Ue,ne[te]);for(let Ee=0;Ee<Te.length;Ee++){const Ce=Te[Ee];We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,Fe,Ue,Ce.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,De,Fe,Ue,Ce.image[te])}}}E(T,Be)&&R(n.TEXTURE_CUBE_MAP),I.__version=be.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Re(L,T,ae,ve,be){const I=o.convert(ae.format,ae.colorSpace),ge=o.convert(ae.type),xe=C(ae.internalFormat,I,ge,ae.colorSpace);i.get(T).__hasExternalTextures||(be===n.TEXTURE_3D||be===n.TEXTURE_2D_ARRAY?t.texImage3D(be,0,xe,T.width,T.height,T.depth,0,I,ge,null):t.texImage2D(be,0,xe,T.width,T.height,0,I,ge,null)),t.bindFramebuffer(n.FRAMEBUFFER,L),st(T)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,be,i.get(ae).__webglTexture,0,Ye(T)):(be===n.TEXTURE_2D||be>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ve,be,i.get(ae).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function W(L,T,ae){if(n.bindRenderbuffer(n.RENDERBUFFER,L),T.depthBuffer&&!T.stencilBuffer){let ve=n.DEPTH_COMPONENT16;if(ae||st(T)){const be=T.depthTexture;be&&be.isDepthTexture&&(be.type===_i?ve=n.DEPTH_COMPONENT32F:be.type===gi&&(ve=n.DEPTH_COMPONENT24));const I=Ye(T);st(T)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I,ve,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,I,ve,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,ve,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,L)}else if(T.depthBuffer&&T.stencilBuffer){const ve=Ye(T);ae&&st(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,n.DEPTH24_STENCIL8,T.width,T.height):st(T)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,L)}else{const ve=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let be=0;be<ve.length;be++){const I=ve[be],ge=o.convert(I.format,I.colorSpace),xe=o.convert(I.type),ne=C(I.internalFormat,ge,xe,I.colorSpace),Oe=Ye(T);ae&&st(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,ne,T.width,T.height):st(T)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,ne,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ne,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ht(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j(T.depthTexture,0);const ve=i.get(T.depthTexture).__webglTexture,be=Ye(T);if(T.depthTexture.format===Hi)st(T)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0);else if(T.depthTexture.format===Dr)st(T)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Le(L){const T=i.get(L),ae=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");ht(T.__webglFramebuffer,L)}else if(ae){T.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ve]),T.__webglDepthbuffer[ve]=n.createRenderbuffer(),W(T.__webglDepthbuffer[ve],L,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),W(T.__webglDepthbuffer,L,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(L,T,ae){const ve=i.get(L);T!==void 0&&Re(ve.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),ae!==void 0&&Le(L)}function Ne(L){const T=L.texture,ae=i.get(L),ve=i.get(T);L.addEventListener("dispose",q),L.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture()),ve.__version=T.version,a.memory.textures++);const be=L.isWebGLCubeRenderTarget===!0,I=L.isWebGLMultipleRenderTargets===!0,ge=b(L)||s;if(be){ae.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)ae.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(ae.__webglFramebuffer=n.createFramebuffer(),I)if(r.drawBuffers){const xe=L.texture;for(let ne=0,Oe=xe.length;ne<Oe;ne++){const Be=i.get(xe[ne]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&L.samples>0&&st(L)===!1){const xe=I?T:[T];ae.__webglMultisampledFramebuffer=n.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let ne=0;ne<xe.length;ne++){const Oe=xe[ne];ae.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ae.__webglColorRenderbuffer[ne]);const Be=o.convert(Oe.format,Oe.colorSpace),Fe=o.convert(Oe.type),Ue=C(Oe.internalFormat,Be,Fe,Oe.colorSpace,L.isXRRenderTarget===!0),De=Ye(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Ue,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,ae.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(ae.__webglDepthRenderbuffer=n.createRenderbuffer(),W(ae.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(be){t.bindTexture(n.TEXTURE_CUBE_MAP,ve.__webglTexture),H(n.TEXTURE_CUBE_MAP,T,ge);for(let xe=0;xe<6;xe++)Re(ae.__webglFramebuffer[xe],L,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe);E(T,ge)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(I){const xe=L.texture;for(let ne=0,Oe=xe.length;ne<Oe;ne++){const Be=xe[ne],Fe=i.get(Be);t.bindTexture(n.TEXTURE_2D,Fe.__webglTexture),H(n.TEXTURE_2D,Be,ge),Re(ae.__webglFramebuffer,L,Be,n.COLOR_ATTACHMENT0+ne,n.TEXTURE_2D),E(Be,ge)&&R(n.TEXTURE_2D)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(s?xe=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,ve.__webglTexture),H(xe,T,ge),Re(ae.__webglFramebuffer,L,T,n.COLOR_ATTACHMENT0,xe),E(T,ge)&&R(xe),t.unbindTexture()}L.depthBuffer&&Le(L)}function et(L){const T=b(L)||s,ae=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ve=0,be=ae.length;ve<be;ve++){const I=ae[ve];if(E(I,T)){const ge=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(I).__webglTexture;t.bindTexture(ge,xe),R(ge),t.unbindTexture()}}}function He(L){if(s&&L.samples>0&&st(L)===!1){const T=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],ae=L.width,ve=L.height;let be=n.COLOR_BUFFER_BIT;const I=[],ge=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(L),ne=L.isWebGLMultipleRenderTargets===!0;if(ne)for(let Oe=0;Oe<T.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Oe=0;Oe<T.length;Oe++){I.push(n.COLOR_ATTACHMENT0+Oe),L.depthBuffer&&I.push(ge);const Be=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Be===!1&&(L.depthBuffer&&(be|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&(be|=n.STENCIL_BUFFER_BIT)),ne&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Oe]),Be===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ge]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ge])),ne){const Fe=i.get(T[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Fe,0)}n.blitFramebuffer(0,0,ae,ve,0,0,ae,ve,be,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,I)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let Oe=0;Oe<T.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Oe]);const Be=i.get(T[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function Ye(L){return Math.min(h,L.samples)}function st(L){const T=i.get(L);return s&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function xt(L){const T=a.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function gt(L,T){const ae=L.colorSpace,ve=L.format,be=L.type;return L.isCompressedTexture===!0||L.format===Ys||ae!==Fn&&ae!==Vi&&(ae===Qe?s===!1?e.has("EXT_sRGB")===!0&&ve===Tn?(L.format=Ys,L.minFilter=sn,L.generateMipmaps=!1):T=Jh.sRGBToLinear(T):(ve!==Tn||be!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),T}this.allocateTextureUnit=re,this.resetTextureUnits=Q,this.setTexture2D=j,this.setTexture2DArray=fe,this.setTexture3D=B,this.setTextureCube=oe,this.rebindTextures=Ve,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=st}function k0(n,e,t){const i=t.isWebGL2;function r(o,a=Vi){let s;if(o===yi)return n.UNSIGNED_BYTE;if(o===Wh)return n.UNSIGNED_SHORT_4_4_4_4;if(o===jh)return n.UNSIGNED_SHORT_5_5_5_1;if(o===up)return n.BYTE;if(o===hp)return n.SHORT;if(o===El)return n.UNSIGNED_SHORT;if(o===Vh)return n.INT;if(o===gi)return n.UNSIGNED_INT;if(o===_i)return n.FLOAT;if(o===Or)return i?n.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(o===fp)return n.ALPHA;if(o===Tn)return n.RGBA;if(o===dp)return n.LUMINANCE;if(o===pp)return n.LUMINANCE_ALPHA;if(o===Hi)return n.DEPTH_COMPONENT;if(o===Dr)return n.DEPTH_STENCIL;if(o===Ys)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(o===mp)return n.RED;if(o===$h)return n.RED_INTEGER;if(o===gp)return n.RG;if(o===Xh)return n.RG_INTEGER;if(o===qh)return n.RGBA_INTEGER;if(o===Ya||o===Ka||o===Za||o===Ja)if(a===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(o===Ya)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(o===Ya)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Ka)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Za)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Ja)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===cc||o===uc||o===hc||o===fc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(o===cc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===uc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===hc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===fc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===_p)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===dc||o===pc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(o===dc)return a===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(o===pc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===mc||o===gc||o===_c||o===vc||o===yc||o===xc||o===bc||o===Mc||o===Sc||o===wc||o===Ec||o===Tc||o===Ac||o===Cc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(o===mc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===gc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===_c)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===vc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===yc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===xc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===bc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Mc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Sc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===wc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Ec)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Tc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Ac)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Cc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Qa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(o===Qa)return a===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===vp||o===Rc||o===Pc||o===Lc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(o===Qa)return s.COMPRESSED_RED_RGTC1_EXT;if(o===Rc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Pc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Lc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===zi?i?n.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:r}}class B0 extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let wr=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}};const z0={type:"move"};class bs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(z0)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new wr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class H0 extends Jt{constructor(e,t,i,r,o,a,s,l,c,u){if(u=u!==void 0?u:Hi,u!==Hi&&u!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Hi&&(i=gi),i===void 0&&u===Dr&&(i=zi),super(null,r,o,a,s,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class G0 extends Rn{constructor(e,t){super();const i=this;let r=null,o=1,a=null,s="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=t.getContextAttributes();let m=null,d=null;const M=[],y=[];let b=null;const x=new fn;x.layers.enable(1),x.viewport=new Nt;const E=new fn;E.layers.enable(2),E.viewport=new Nt;const R=[x,E],C=new B0;C.layers.enable(1),C.layers.enable(2);let S=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(B){b=B},this.getController=function(B){let oe=M[B];return oe===void 0&&(oe=new bs,M[B]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(B){let oe=M[B];return oe===void 0&&(oe=new bs,M[B]=oe),oe.getGripSpace()},this.getHand=function(B){let oe=M[B];return oe===void 0&&(oe=new bs,M[B]=oe),oe.getHandSpace()};function $(B){const oe=y.indexOf(B.inputSource);if(oe===-1)return;const Y=M[oe];Y!==void 0&&(Y.update(B.inputSource,B.frame,c||a),Y.dispatchEvent({type:B.type,data:B.inputSource}))}function q(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",G);for(let B=0;B<M.length;B++){const oe=y[B];oe!==null&&(y[B]=null,M[B].disconnect(oe))}S=null,A=null,e.setRenderTarget(m),p=null,f=null,h=null,r=null,d=null,fe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",q),r.addEventListener("inputsourceschange",G),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:p}),d=new bi(p.framebufferWidth,p.framebufferHeight,{format:Tn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let oe=null,Y=null,K=null;_.depth&&(K=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=_.stencil?Dr:Hi,Y=_.stencil?zi:gi);const ce={colorFormat:t.RGBA8,depthFormat:K,scaleFactor:o};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(ce),r.updateRenderState({layers:[f]}),d=new bi(f.textureWidth,f.textureHeight,{format:Tn,type:yi,depthTexture:new H0(f.textureWidth,f.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const H=e.properties.get(d);H.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(s),fe.setContext(r),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(B){for(let oe=0;oe<B.removed.length;oe++){const Y=B.removed[oe],K=y.indexOf(Y);K>=0&&(y[K]=null,M[K].disconnect(Y))}for(let oe=0;oe<B.added.length;oe++){const Y=B.added[oe];let K=y.indexOf(Y);if(K===-1){for(let H=0;H<M.length;H++)if(H>=y.length){y.push(Y),K=H;break}else if(y[H]===null){y[H]=Y,K=H;break}if(K===-1)break}const ce=M[K];ce&&ce.connect(Y)}}const D=new F,O=new F;function V(B,oe,Y){D.setFromMatrixPosition(oe.matrixWorld),O.setFromMatrixPosition(Y.matrixWorld);const K=D.distanceTo(O),ce=oe.projectionMatrix.elements,H=Y.projectionMatrix.elements,se=ce[14]/(ce[10]-1),Se=ce[14]/(ce[10]+1),ke=(ce[9]+1)/ce[5],Re=(ce[9]-1)/ce[5],W=(ce[8]-1)/ce[0],ht=(H[8]+1)/H[0],Le=se*W,Ve=se*ht,Ne=K/(-W+ht),et=Ne*-W;oe.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(et),B.translateZ(Ne),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const He=se+Ne,Ye=Se+Ne,st=Le-et,xt=Ve+(K-et),gt=ke*Se/Ye*He,L=Re*Se/Ye*He;B.projectionMatrix.makePerspective(st,xt,gt,L,He,Ye),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function Q(B,oe){oe===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(oe.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCameraXR=function(B){if(r===null)return B;b&&(B=b),C.near=E.near=x.near=B.near,C.far=E.far=x.far=B.far,(S!==C.near||A!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),S=C.near,A=C.far);const oe=B.parent,Y=C.cameras;Q(C,oe);for(let K=0;K<Y.length;K++)Q(Y[K],oe);return Y.length===2?V(C,x,E):C.projectionMatrix.copy(x.projectionMatrix),b&&re(C,oe),C};function re(B,oe){const Y=b;oe===null?Y.matrix.copy(B.matrixWorld):(Y.matrix.copy(oe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(B.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0);const K=Y.children;for(let ce=0,H=K.length;ce<H;ce++)K[ce].updateMatrixWorld(!0);Y.projectionMatrix.copy(B.projectionMatrix),Y.projectionMatrixInverse.copy(B.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=wo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)};let pe=null;function j(B,oe){if(u=oe.getViewerPose(c||a),g=oe,u!==null){const Y=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let K=!1;Y.length!==C.cameras.length&&(C.cameras.length=0,K=!0);for(let ce=0;ce<Y.length;ce++){const H=Y[ce];let se=null;if(p!==null)se=p.getViewport(H);else{const ke=h.getViewSubImage(f,H);se=ke.viewport,ce===0&&(e.setRenderTargetTextures(d,ke.colorTexture,f.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(d))}let Se=R[ce];Se===void 0&&(Se=new fn,Se.layers.enable(ce),Se.viewport=new Nt,R[ce]=Se),Se.matrix.fromArray(H.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(H.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(se.x,se.y,se.width,se.height),ce===0&&(C.matrix.copy(Se.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),K===!0&&C.cameras.push(Se)}}for(let Y=0;Y<M.length;Y++){const K=y[Y],ce=M[Y];K!==null&&ce!==void 0&&ce.update(K,oe,c||a)}pe&&pe(B,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const fe=new cf;fe.setAnimationLoop(j),this.setAnimationLoop=function(B){pe=B},this.dispose=function(){}}}function V0(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,of(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,M,y,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(m,d):d.isMeshToonMaterial?(o(m,d),h(m,d)):d.isMeshPhongMaterial?(o(m,d),u(m,d)):d.isMeshStandardMaterial?(o(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(o(m,d),g(m,d)):d.isMeshDepthMaterial?o(m,d):d.isMeshDistanceMaterial?(o(m,d),_(m,d)):d.isMeshNormalMaterial?o(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&s(m,d)):d.isPointsMaterial?l(m,d,M,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Zt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Zt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const y=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*y,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function s(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Zt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function W0(n,e,t,i){let r={},o={},a=[];const s=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,y){const b=y.program;i.uniformBlockBinding(M,b)}function c(M,y){let b=r[M.id];b===void 0&&(g(M),b=u(M),r[M.id]=b,M.addEventListener("dispose",m));const x=y.program;i.updateUBOMapping(M,x);const E=e.render.frame;o[M.id]!==E&&(f(M),o[M.id]=E)}function u(M){const y=h();M.__bindingPointIndex=y;const b=n.createBuffer(),x=M.__size,E=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,x,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function h(){for(let M=0;M<s;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=r[M.id],b=M.uniforms,x=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let E=0,R=b.length;E<R;E++){const C=b[E];if(p(C,E,x)===!0){const S=C.__offset,A=Array.isArray(C.value)?C.value:[C.value];let $=0;for(let q=0;q<A.length;q++){const G=A[q],D=_(G);typeof G=="number"?(C.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,S+$,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=G.elements[0],C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=G.elements[0],C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=G.elements[0]):(G.toArray(C.__data,$),$+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,S,C.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,y,b){const x=M.value;if(b[y]===void 0){if(typeof x=="number")b[y]=x;else{const E=Array.isArray(x)?x:[x],R=[];for(let C=0;C<E.length;C++)R.push(E[C].clone());b[y]=R}return!0}else if(typeof x=="number"){if(b[y]!==x)return b[y]=x,!0}else{const E=Array.isArray(b[y])?b[y]:[b[y]],R=Array.isArray(x)?x:[x];for(let C=0;C<E.length;C++){const S=E[C];if(S.equals(R[C])===!1)return S.copy(R[C]),!0}}return!1}function g(M){const y=M.uniforms;let b=0;const x=16;let E=0;for(let R=0,C=y.length;R<C;R++){const S=y[R],A={boundary:0,storage:0},$=Array.isArray(S.value)?S.value:[S.value];for(let q=0,G=$.length;q<G;q++){const D=$[q],O=_(D);A.boundary+=O.boundary,A.storage+=O.storage}if(S.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=b,R>0){E=b%x;const q=x-E;E!==0&&q-A.boundary<0&&(b+=x-E,S.__offset=b)}b+=A.storage}return E=b%x,E>0&&(b+=x-E),M.__size=b,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function d(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},o={}}return{bind:l,update:c,dispose:d}}function j0(){const n=Eo("canvas");return n.style.display="block",n}class pf{constructor(e={}){const{canvas:t=j0(),context:i=null,depth:r=!0,stencil:o=!0,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Qe,this.useLegacyLights=!0,this.toneMapping=ni,this.toneMappingExposure=1;const y=this;let b=!1,x=0,E=0,R=null,C=-1,S=null;const A=new Nt,$=new Nt;let q=null;const G=new at(0);let D=0,O=t.width,V=t.height,Q=1,re=null,pe=null;const j=new Nt(0,0,O,V),fe=new Nt(0,0,O,V);let B=!1;const oe=new Rl;let Y=!1,K=!1,ce=null;const H=new wt,se=new we,Se=new F,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return R===null?Q:1}let W=i;function ht(P,Z){for(let le=0;le<P.length;le++){const X=P[le],ue=t.getContext(X,Z);if(ue!==null)return ue}return null}try{const P={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sl}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),W===null){const Z=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&Z.shift(),W=ht(Z,P),W===null)throw ht(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Le,Ve,Ne,et,He,Ye,st,xt,gt,L,T,ae,ve,be,I,ge,xe,ne,Oe,Be,Fe,Ue,De,We;function rt(){Le=new nv(W),Ve=new K_(W,Le,e),Le.init(Ve),Ue=new k0(W,Le,Ve),Ne=new U0(W,Le,Ve),et=new ov(W),He=new M0,Ye=new F0(W,Le,Ne,He,Ve,Ue,et),st=new J_(y),xt=new tv(y),gt=new _m(W,Ve),De=new q_(W,Le,gt,Ve),L=new iv(W,gt,et,De),T=new cv(W,L,gt,et),Oe=new lv(W,Ve,Ye),ge=new Z_(He),ae=new b0(y,st,xt,Le,Ve,De,ge),ve=new V0(y,He),be=new w0,I=new P0(Le,Ve),ne=new X_(y,st,xt,Ne,T,f,l),xe=new N0(y,T,Ve),We=new W0(W,et,Ve,Ne),Be=new Y_(W,Le,et,Ve),Fe=new rv(W,Le,et,Ve),et.programs=ae.programs,y.capabilities=Ve,y.extensions=Le,y.properties=He,y.renderLists=be,y.shadowMap=xe,y.state=Ne,y.info=et}rt();const z=new G0(y,W);this.xr=z,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const P=Le.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Le.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(P){P!==void 0&&(Q=P,this.setSize(O,V,!1))},this.getSize=function(P){return P.set(O,V)},this.setSize=function(P,Z,le=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=P,V=Z,t.width=Math.floor(P*Q),t.height=Math.floor(Z*Q),le===!0&&(t.style.width=P+"px",t.style.height=Z+"px"),this.setViewport(0,0,P,Z)},this.getDrawingBufferSize=function(P){return P.set(O*Q,V*Q).floor()},this.setDrawingBufferSize=function(P,Z,le){O=P,V=Z,Q=le,t.width=Math.floor(P*le),t.height=Math.floor(Z*le),this.setViewport(0,0,P,Z)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(j)},this.setViewport=function(P,Z,le,X){P.isVector4?j.set(P.x,P.y,P.z,P.w):j.set(P,Z,le,X),Ne.viewport(A.copy(j).multiplyScalar(Q).floor())},this.getScissor=function(P){return P.copy(fe)},this.setScissor=function(P,Z,le,X){P.isVector4?fe.set(P.x,P.y,P.z,P.w):fe.set(P,Z,le,X),Ne.scissor($.copy(fe).multiplyScalar(Q).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(P){Ne.setScissorTest(B=P)},this.setOpaqueSort=function(P){re=P},this.setTransparentSort=function(P){pe=P},this.getClearColor=function(P){return P.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(P=!0,Z=!0,le=!0){let X=0;if(P){let ue=!1;if(R!==null){const Ie=R.texture.format;ue=Ie===qh||Ie===Xh||Ie===$h}if(ue){const Ie=R.texture.type,je=Ie===yi||Ie===gi||Ie===El||Ie===zi||Ie===Wh||Ie===jh,$e=ne.getClearColor(),qe=ne.getClearAlpha(),tt=$e.r,Ze=$e.g,Je=$e.b,ft=He.get(R).__webglFramebuffer;je?(p[0]=tt,p[1]=Ze,p[2]=Je,p[3]=qe,W.clearBufferuiv(W.COLOR,ft,p)):(g[0]=tt,g[1]=Ze,g[2]=Je,g[3]=qe,W.clearBufferiv(W.COLOR,ft,g))}else X|=W.COLOR_BUFFER_BIT}Z&&(X|=W.DEPTH_BUFFER_BIT),le&&(X|=W.STENCIL_BUFFER_BIT),W.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),be.dispose(),I.dispose(),He.dispose(),st.dispose(),xt.dispose(),T.dispose(),De.dispose(),We.dispose(),ae.dispose(),z.dispose(),z.removeEventListener("sessionstart",bt),z.removeEventListener("sessionend",cn),ce&&(ce.dispose(),ce=null),kt.stop()};function Te(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const P=et.autoReset,Z=xe.enabled,le=xe.autoUpdate,X=xe.needsUpdate,ue=xe.type;rt(),et.autoReset=P,xe.enabled=Z,xe.autoUpdate=le,xe.needsUpdate=X,xe.type=ue}function Ee(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ce(P){const Z=P.target;Z.removeEventListener("dispose",Ce),lt(Z)}function lt(P){vt(P),He.remove(P)}function vt(P){const Z=He.get(P).programs;Z!==void 0&&(Z.forEach(function(le){ae.releaseProgram(le)}),P.isShaderMaterial&&ae.releaseShaderCache(P))}this.renderBufferDirect=function(P,Z,le,X,ue,Ie){Z===null&&(Z=ke);const je=ue.isMesh&&ue.matrixWorld.determinant()<0,$e=Do(P,Z,le,X,ue);Ne.setMaterial(X,je);let qe=le.index,tt=1;X.wireframe===!0&&(qe=L.getWireframeAttribute(le),tt=2);const Ze=le.drawRange,Je=le.attributes.position;let ft=Ze.start*tt,v=(Ze.start+Ze.count)*tt;Ie!==null&&(ft=Math.max(ft,Ie.start*tt),v=Math.min(v,(Ie.start+Ie.count)*tt)),qe!==null?(ft=Math.max(ft,0),v=Math.min(v,qe.count)):Je!=null&&(ft=Math.max(ft,0),v=Math.min(v,Je.count));const w=v-ft;if(w<0||w===1/0)return;De.setup(ue,X,$e,le,qe);let N,U=Be;if(qe!==null&&(N=gt.get(qe),U=Fe,U.setIndex(N)),ue.isMesh)X.wireframe===!0?(Ne.setLineWidth(X.wireframeLinewidth*Re()),U.setMode(W.LINES)):U.setMode(W.TRIANGLES);else if(ue.isLine){let k=X.linewidth;k===void 0&&(k=1),Ne.setLineWidth(k*Re()),ue.isLineSegments?U.setMode(W.LINES):ue.isLineLoop?U.setMode(W.LINE_LOOP):U.setMode(W.LINE_STRIP)}else ue.isPoints?U.setMode(W.POINTS):ue.isSprite&&U.setMode(W.TRIANGLES);if(ue.isInstancedMesh)U.renderInstances(ft,w,ue.count);else if(le.isInstancedBufferGeometry){const k=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,J=Math.min(le.instanceCount,k);U.renderInstances(ft,w,J)}else U.render(ft,w)},this.compile=function(P,Z){function le(X,ue,Ie){X.transparent===!0&&X.side===dn&&X.forceSinglePass===!1?(X.side=Zt,X.needsUpdate=!0,si(X,ue,Ie),X.side=xi,X.needsUpdate=!0,si(X,ue,Ie),X.side=dn):si(X,ue,Ie)}m=I.get(P),m.init(),M.push(m),P.traverseVisible(function(X){X.isLight&&X.layers.test(Z.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(y.useLegacyLights),P.traverse(function(X){const ue=X.material;if(ue)if(Array.isArray(ue))for(let Ie=0;Ie<ue.length;Ie++){const je=ue[Ie];le(je,P,X)}else le(ue,P,X)}),M.pop(),m=null};let dt=null;function mn(P){dt&&dt(P)}function bt(){kt.stop()}function cn(){kt.start()}const kt=new cf;kt.setAnimationLoop(mn),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(P){dt=P,z.setAnimationLoop(P),P===null?kt.stop():kt.start()},z.addEventListener("sessionstart",bt),z.addEventListener("sessionend",cn),this.render=function(P,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(Z=z.updateCameraXR(Z)),P.isScene===!0&&P.onBeforeRender(y,P,Z,R),m=I.get(P,M.length),m.init(),M.push(m),H.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),oe.setFromProjectionMatrix(H),K=this.localClippingEnabled,Y=ge.init(this.clippingPlanes,K),_=be.get(P,d.length),_.init(),d.push(_),Ai(P,Z,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(re,pe),Y===!0&&ge.beginShadows();const le=m.state.shadowsArray;if(xe.render(le,P,Z),Y===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,ne.render(_,P),m.setupLights(y.useLegacyLights),Z.isArrayCamera){const X=Z.cameras;for(let ue=0,Ie=X.length;ue<Ie;ue++){const je=X[ue];zn(_,P,je,je.viewport)}}else zn(_,P,Z);R!==null&&(Ye.updateMultisampleRenderTarget(R),Ye.updateRenderTargetMipmap(R)),P.isScene===!0&&P.onAfterRender(y,P,Z),De.resetDefaultState(),C=-1,S=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Ai(P,Z,le,X){if(P.visible===!1)return;if(P.layers.test(Z.layers)){if(P.isGroup)le=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Z);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||oe.intersectsSprite(P)){X&&Se.setFromMatrixPosition(P.matrixWorld).applyMatrix4(H);const je=T.update(P),$e=P.material;$e.visible&&_.push(P,je,$e,le,Se.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||oe.intersectsObject(P))){P.isSkinnedMesh&&P.skeleton.frame!==et.render.frame&&(P.skeleton.update(),P.skeleton.frame=et.render.frame);const je=T.update(P),$e=P.material;if(X&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Se.copy(P.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),Se.copy(je.boundingSphere.center)),Se.applyMatrix4(P.matrixWorld).applyMatrix4(H)),Array.isArray($e)){const qe=je.groups;for(let tt=0,Ze=qe.length;tt<Ze;tt++){const Je=qe[tt],ft=$e[Je.materialIndex];ft&&ft.visible&&_.push(P,je,ft,le,Se.z,Je)}}else $e.visible&&_.push(P,je,$e,le,Se.z,null)}}const Ie=P.children;for(let je=0,$e=Ie.length;je<$e;je++)Ai(Ie[je],Z,le,X)}function zn(P,Z,le,X){const ue=P.opaque,Ie=P.transmissive,je=P.transparent;m.setupLightsView(le),Y===!0&&ge.setGlobalState(y.clippingPlanes,le),Ie.length>0&&Oo(ue,Ie,Z,le),X&&Ne.viewport(A.copy(X)),ue.length>0&&Xi(ue,Z,le),Ie.length>0&&Xi(Ie,Z,le),je.length>0&&Xi(je,Z,le),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Oo(P,Z,le,X){const ue=Ve.isWebGL2;ce===null&&(ce=new bi(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?Or:yi,minFilter:So,samples:ue&&s===!0?4:0})),y.getDrawingBufferSize(se),ue?ce.setSize(se.x,se.y):ce.setSize(Ma(se.x),Ma(se.y));const Ie=y.getRenderTarget();y.setRenderTarget(ce),y.getClearColor(G),D=y.getClearAlpha(),D<1&&y.setClearColor(16777215,.5),y.clear();const je=y.toneMapping;y.toneMapping=ni,Xi(P,le,X),Ye.updateMultisampleRenderTarget(ce),Ye.updateRenderTargetMipmap(ce);let $e=!1;for(let qe=0,tt=Z.length;qe<tt;qe++){const Ze=Z[qe],Je=Ze.object,ft=Ze.geometry,v=Ze.material,w=Ze.group;if(v.side===dn&&Je.layers.test(X.layers)){const N=v.side;v.side=Zt,v.needsUpdate=!0,Ci(Je,le,X,ft,v,w),v.side=N,v.needsUpdate=!0,$e=!0}}$e===!0&&(Ye.updateMultisampleRenderTarget(ce),Ye.updateRenderTargetMipmap(ce)),y.setRenderTarget(Ie),y.setClearColor(G,D),y.toneMapping=je}function Xi(P,Z,le){const X=Z.isScene===!0?Z.overrideMaterial:null;for(let ue=0,Ie=P.length;ue<Ie;ue++){const je=P[ue],$e=je.object,qe=je.geometry,tt=X===null?je.material:X,Ze=je.group;$e.layers.test(le.layers)&&Ci($e,Z,le,qe,tt,Ze)}}function Ci(P,Z,le,X,ue,Ie){P.onBeforeRender(y,Z,le,X,ue,Ie),P.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ue.onBeforeRender(y,Z,le,X,P,Ie),ue.transparent===!0&&ue.side===dn&&ue.forceSinglePass===!1?(ue.side=Zt,ue.needsUpdate=!0,y.renderBufferDirect(le,Z,X,ue,P,Ie),ue.side=xi,ue.needsUpdate=!0,y.renderBufferDirect(le,Z,X,ue,P,Ie),ue.side=dn):y.renderBufferDirect(le,Z,X,ue,P,Ie),P.onAfterRender(y,Z,le,X,ue,Ie)}function si(P,Z,le){Z.isScene!==!0&&(Z=ke);const X=He.get(P),ue=m.state.lights,Ie=m.state.shadowsArray,je=ue.state.version,$e=ae.getParameters(P,ue.state,Ie,Z,le),qe=ae.getProgramCacheKey($e);let tt=X.programs;X.environment=P.isMeshStandardMaterial?Z.environment:null,X.fog=Z.fog,X.envMap=(P.isMeshStandardMaterial?xt:st).get(P.envMap||X.environment),tt===void 0&&(P.addEventListener("dispose",Ce),tt=new Map,X.programs=tt);let Ze=tt.get(qe);if(Ze!==void 0){if(X.currentProgram===Ze&&X.lightsStateVersion===je)return zr(P,$e),Ze}else $e.uniforms=ae.getUniforms(P),P.onBuild(le,$e,y),P.onBeforeCompile($e,y),Ze=ae.acquireProgram($e,qe),tt.set(qe,Ze),X.uniforms=$e.uniforms;const Je=X.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Je.clippingPlanes=ge.uniform),zr(P,$e),X.needsLights=Hr(P),X.lightsStateVersion=je,X.needsLights&&(Je.ambientLightColor.value=ue.state.ambient,Je.lightProbe.value=ue.state.probe,Je.directionalLights.value=ue.state.directional,Je.directionalLightShadows.value=ue.state.directionalShadow,Je.spotLights.value=ue.state.spot,Je.spotLightShadows.value=ue.state.spotShadow,Je.rectAreaLights.value=ue.state.rectArea,Je.ltc_1.value=ue.state.rectAreaLTC1,Je.ltc_2.value=ue.state.rectAreaLTC2,Je.pointLights.value=ue.state.point,Je.pointLightShadows.value=ue.state.pointShadow,Je.hemisphereLights.value=ue.state.hemi,Je.directionalShadowMap.value=ue.state.directionalShadowMap,Je.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,Je.spotShadowMap.value=ue.state.spotShadowMap,Je.spotLightMatrix.value=ue.state.spotLightMatrix,Je.spotLightMap.value=ue.state.spotLightMap,Je.pointShadowMap.value=ue.state.pointShadowMap,Je.pointShadowMatrix.value=ue.state.pointShadowMatrix);const ft=Ze.getUniforms(),v=ga.seqWithValue(ft.seq,Je);return X.currentProgram=Ze,X.uniformsList=v,Ze}function zr(P,Z){const le=He.get(P);le.outputColorSpace=Z.outputColorSpace,le.instancing=Z.instancing,le.skinning=Z.skinning,le.morphTargets=Z.morphTargets,le.morphNormals=Z.morphNormals,le.morphColors=Z.morphColors,le.morphTargetsCount=Z.morphTargetsCount,le.numClippingPlanes=Z.numClippingPlanes,le.numIntersection=Z.numClipIntersection,le.vertexAlphas=Z.vertexAlphas,le.vertexTangents=Z.vertexTangents,le.toneMapping=Z.toneMapping}function Do(P,Z,le,X,ue){Z.isScene!==!0&&(Z=ke),Ye.resetTextureUnits();const Ie=Z.fog,je=X.isMeshStandardMaterial?Z.environment:null,$e=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Fn,qe=(X.isMeshStandardMaterial?xt:st).get(X.envMap||je),tt=X.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,Ze=!!le.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Je=!!le.morphAttributes.position,ft=!!le.morphAttributes.normal,v=!!le.morphAttributes.color,w=X.toneMapped?y.toneMapping:ni,N=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,U=N!==void 0?N.length:0,k=He.get(X),J=m.state.lights;if(Y===!0&&(K===!0||P!==S)){const Ke=P===S&&X.id===C;ge.setState(X,P,Ke)}let ie=!1;X.version===k.__version?(k.needsLights&&k.lightsStateVersion!==J.state.version||k.outputColorSpace!==$e||ue.isInstancedMesh&&k.instancing===!1||!ue.isInstancedMesh&&k.instancing===!0||ue.isSkinnedMesh&&k.skinning===!1||!ue.isSkinnedMesh&&k.skinning===!0||k.envMap!==qe||X.fog===!0&&k.fog!==Ie||k.numClippingPlanes!==void 0&&(k.numClippingPlanes!==ge.numPlanes||k.numIntersection!==ge.numIntersection)||k.vertexAlphas!==tt||k.vertexTangents!==Ze||k.morphTargets!==Je||k.morphNormals!==ft||k.morphColors!==v||k.toneMapping!==w||Ve.isWebGL2===!0&&k.morphTargetsCount!==U)&&(ie=!0):(ie=!0,k.__version=X.version);let he=k.currentProgram;ie===!0&&(he=si(X,Z,ue));let de=!1,ye=!1,Ge=!1;const Pe=he.getUniforms(),_e=k.uniforms;if(Ne.useProgram(he.program)&&(de=!0,ye=!0,Ge=!0),X.id!==C&&(C=X.id,ye=!0),de||S!==P){if(Pe.setValue(W,"projectionMatrix",P.projectionMatrix),Ve.logarithmicDepthBuffer&&Pe.setValue(W,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),S!==P&&(S=P,ye=!0,Ge=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const Ke=Pe.map.cameraPosition;Ke!==void 0&&Ke.setValue(W,Se.setFromMatrixPosition(P.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Pe.setValue(W,"isOrthographic",P.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||ue.isSkinnedMesh)&&Pe.setValue(W,"viewMatrix",P.matrixWorldInverse)}if(ue.isSkinnedMesh){Pe.setOptional(W,ue,"bindMatrix"),Pe.setOptional(W,ue,"bindMatrixInverse");const Ke=ue.skeleton;Ke&&(Ve.floatVertexTextures?(Ke.boneTexture===null&&Ke.computeBoneTexture(),Pe.setValue(W,"boneTexture",Ke.boneTexture,Ye),Pe.setValue(W,"boneTextureSize",Ke.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Me=le.morphAttributes;if((Me.position!==void 0||Me.normal!==void 0||Me.color!==void 0&&Ve.isWebGL2===!0)&&Oe.update(ue,le,he),(ye||k.receiveShadow!==ue.receiveShadow)&&(k.receiveShadow=ue.receiveShadow,Pe.setValue(W,"receiveShadow",ue.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(_e.envMap.value=qe,_e.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),ye&&(Pe.setValue(W,"toneMappingExposure",y.toneMappingExposure),k.needsLights&&Io(_e,Ge),Ie&&X.fog===!0&&ve.refreshFogUniforms(_e,Ie),ve.refreshMaterialUniforms(_e,X,Q,V,ce),ga.upload(W,k.uniformsList,_e,Ye)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ga.upload(W,k.uniformsList,_e,Ye),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Pe.setValue(W,"center",ue.center),Pe.setValue(W,"modelViewMatrix",ue.modelViewMatrix),Pe.setValue(W,"normalMatrix",ue.normalMatrix),Pe.setValue(W,"modelMatrix",ue.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ke=X.uniformsGroups;for(let yt=0,Gt=Ke.length;yt<Gt;yt++)if(Ve.isWebGL2){const Et=Ke[yt];We.update(Et,he),We.bind(Et,he)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return he}function Io(P,Z){P.ambientLightColor.needsUpdate=Z,P.lightProbe.needsUpdate=Z,P.directionalLights.needsUpdate=Z,P.directionalLightShadows.needsUpdate=Z,P.pointLights.needsUpdate=Z,P.pointLightShadows.needsUpdate=Z,P.spotLights.needsUpdate=Z,P.spotLightShadows.needsUpdate=Z,P.rectAreaLights.needsUpdate=Z,P.hemisphereLights.needsUpdate=Z}function Hr(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(P,Z,le){He.get(P.texture).__webglTexture=Z,He.get(P.depthTexture).__webglTexture=le;const X=He.get(P);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=le===void 0,X.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,Z){const le=He.get(P);le.__webglFramebuffer=Z,le.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(P,Z=0,le=0){R=P,x=Z,E=le;let X=!0,ue=null,Ie=!1,je=!1;if(P){const qe=He.get(P);qe.__useDefaultFramebuffer!==void 0?(Ne.bindFramebuffer(W.FRAMEBUFFER,null),X=!1):qe.__webglFramebuffer===void 0?Ye.setupRenderTarget(P):qe.__hasExternalTextures&&Ye.rebindTextures(P,He.get(P.texture).__webglTexture,He.get(P.depthTexture).__webglTexture);const tt=P.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(je=!0);const Ze=He.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(ue=Ze[Z],Ie=!0):Ve.isWebGL2&&P.samples>0&&Ye.useMultisampledRTT(P)===!1?ue=He.get(P).__webglMultisampledFramebuffer:ue=Ze,A.copy(P.viewport),$.copy(P.scissor),q=P.scissorTest}else A.copy(j).multiplyScalar(Q).floor(),$.copy(fe).multiplyScalar(Q).floor(),q=B;if(Ne.bindFramebuffer(W.FRAMEBUFFER,ue)&&Ve.drawBuffers&&X&&Ne.drawBuffers(P,ue),Ne.viewport(A),Ne.scissor($),Ne.setScissorTest(q),Ie){const qe=He.get(P.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Z,qe.__webglTexture,le)}else if(je){const qe=He.get(P.texture),tt=Z||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,qe.__webglTexture,le||0,tt)}C=-1},this.readRenderTargetPixels=function(P,Z,le,X,ue,Ie,je){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=He.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&je!==void 0&&($e=$e[je]),$e){Ne.bindFramebuffer(W.FRAMEBUFFER,$e);try{const qe=P.texture,tt=qe.format,Ze=qe.type;if(tt!==Tn&&Ue.convert(tt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Je=Ze===Or&&(Le.has("EXT_color_buffer_half_float")||Ve.isWebGL2&&Le.has("EXT_color_buffer_float"));if(Ze!==yi&&Ue.convert(Ze)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ze===_i&&(Ve.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=P.width-X&&le>=0&&le<=P.height-ue&&W.readPixels(Z,le,X,ue,Ue.convert(tt),Ue.convert(Ze),Ie)}finally{const qe=R!==null?He.get(R).__webglFramebuffer:null;Ne.bindFramebuffer(W.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(P,Z,le=0){const X=Math.pow(2,-le),ue=Math.floor(Z.image.width*X),Ie=Math.floor(Z.image.height*X);Ye.setTexture2D(Z,0),W.copyTexSubImage2D(W.TEXTURE_2D,le,0,0,P.x,P.y,ue,Ie),Ne.unbindTexture()},this.copyTextureToTexture=function(P,Z,le,X=0){const ue=Z.image.width,Ie=Z.image.height,je=Ue.convert(le.format),$e=Ue.convert(le.type);Ye.setTexture2D(le,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,le.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,le.unpackAlignment),Z.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,X,P.x,P.y,ue,Ie,je,$e,Z.image.data):Z.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,X,P.x,P.y,Z.mipmaps[0].width,Z.mipmaps[0].height,je,Z.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,X,P.x,P.y,je,$e,Z.image),X===0&&le.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(P,Z,le,X,ue=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=P.max.x-P.min.x+1,je=P.max.y-P.min.y+1,$e=P.max.z-P.min.z+1,qe=Ue.convert(X.format),tt=Ue.convert(X.type);let Ze;if(X.isData3DTexture)Ye.setTexture3D(X,0),Ze=W.TEXTURE_3D;else if(X.isDataArrayTexture)Ye.setTexture2DArray(X,0),Ze=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment);const Je=W.getParameter(W.UNPACK_ROW_LENGTH),ft=W.getParameter(W.UNPACK_IMAGE_HEIGHT),v=W.getParameter(W.UNPACK_SKIP_PIXELS),w=W.getParameter(W.UNPACK_SKIP_ROWS),N=W.getParameter(W.UNPACK_SKIP_IMAGES),U=le.isCompressedTexture?le.mipmaps[0]:le.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,U.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,U.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,P.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,P.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,P.min.z),le.isDataTexture||le.isData3DTexture?W.texSubImage3D(Ze,ue,Z.x,Z.y,Z.z,Ie,je,$e,qe,tt,U.data):le.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Ze,ue,Z.x,Z.y,Z.z,Ie,je,$e,qe,U.data)):W.texSubImage3D(Ze,ue,Z.x,Z.y,Z.z,Ie,je,$e,qe,tt,U),W.pixelStorei(W.UNPACK_ROW_LENGTH,Je),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ft),W.pixelStorei(W.UNPACK_SKIP_PIXELS,v),W.pixelStorei(W.UNPACK_SKIP_ROWS,w),W.pixelStorei(W.UNPACK_SKIP_IMAGES,N),ue===0&&X.generateMipmaps&&W.generateMipmap(Ze),Ne.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?Ye.setTextureCube(P,0):P.isData3DTexture?Ye.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Ye.setTexture2DArray(P,0):Ye.setTexture2D(P,0),Ne.unbindTexture()},this.resetState=function(){x=0,E=0,R=null,Ne.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qe?Gi:Yh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Gi?Qe:Fn}}class $0 extends pf{}$0.prototype.isWebGL1Renderer=!0;class X0 extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class q0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qs,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new F;class Sa{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),r=pt(r,this.array),o=pt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Sa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class mf extends ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let dr;const Xr=new F,pr=new F,mr=new F,gr=new we,qr=new we,gf=new wt,na=new F,Yr=new F,ia=new F,vu=new we,Ms=new we,yu=new we;class Y0 extends Ut{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",dr===void 0){dr=new Qt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new q0(t,5);dr.setIndex([0,1,2,0,2,3]),dr.setAttribute("position",new Sa(i,3,0,!1)),dr.setAttribute("uv",new Sa(i,2,3,!1))}this.geometry=dr,this.material=e!==void 0?e:new mf,this.center=new we(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pr.setFromMatrixScale(this.matrixWorld),gf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pr.multiplyScalar(-mr.z);const i=this.material.rotation;let r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));const a=this.center;ra(na.set(-.5,-.5,0),mr,a,pr,r,o),ra(Yr.set(.5,-.5,0),mr,a,pr,r,o),ra(ia.set(.5,.5,0),mr,a,pr,r,o),vu.set(0,0),Ms.set(1,0),yu.set(1,1);let s=e.ray.intersectTriangle(na,Yr,ia,!1,Xr);if(s===null&&(ra(Yr.set(-.5,.5,0),mr,a,pr,r,o),Ms.set(0,1),s=e.ray.intersectTriangle(na,ia,Yr,!1,Xr),s===null))return;const l=e.ray.origin.distanceTo(Xr);l<e.near||l>e.far||t.push({distance:l,point:Xr.clone(),uv:hn.getInterpolation(Xr,na,Yr,ia,vu,Ms,yu,new we),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ra(n,e,t,i,r,o){gr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(qr.x=o*gr.x-r*gr.y,qr.y=r*gr.x+o*gr.y):qr.copy(gr),n.copy(e),n.x+=qr.x,n.y+=qr.y,n.applyMatrix4(gf)}class _f extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xu=new F,bu=new F,Mu=new wt,Ss=new Al,oa=new Ua;class K0 extends Ut{constructor(e=new Qt,t=new _f){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)xu.fromBufferAttribute(t,r-1),bu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=xu.distanceTo(bu);e.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(r),oa.radius+=o,e.ray.intersectsSphere(oa)===!1)return;Mu.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(Mu);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new F,u=new F,h=new F,f=new F,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const d=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let y=d,b=M-1;y<b;y+=p){const x=g.getX(y),E=g.getX(y+1);if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,E),Ss.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),M=Math.min(m.count,a.start+a.count);for(let y=d,b=M-1;y<b;y+=p){if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,y+1),Ss.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),o=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),o+=i.distanceTo(r),t.push(o),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const o=i.length;let a;t?a=t:a=e*i[o-1];let s=0,l=o-1,c;for(;s<=l;)if(r=Math.floor(s+(l-s)/2),c=i[r]-a,c<0)s=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(o-1);const u=i[r],f=i[r+1]-u,p=(a-u)/f;return(r+p)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const a=this.getPoint(r),s=this.getPoint(o),l=t||(a.isVector2?new we:new F);return l.copy(s).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new F,r=[],o=[],a=[],s=new F,l=new wt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new F)}o[0]=new F,a[0]=new F;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),o[0].crossVectors(r[0],s),a[0].crossVectors(r[0],o[0]);for(let p=1;p<=e;p++){if(o[p]=o[p-1].clone(),a[p]=a[p-1].clone(),s.crossVectors(r[p-1],r[p]),s.length()>Number.EPSILON){s.normalize();const g=Math.acos(Pt(r[p-1].dot(r[p]),-1,1));o[p].applyMatrix4(l.makeRotationAxis(s,g))}a[p].crossVectors(r[p],o[p])}if(t===!0){let p=Math.acos(Pt(o[0].dot(o[e]),-1,1));p/=e,r[0].dot(s.crossVectors(o[0],o[e]))>0&&(p=-p);for(let g=1;g<=e;g++)o[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],o[g])}return{tangents:r,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class vf extends Bn{constructor(e=0,t=0,i=1,r=1,o=0,a=Math.PI*2,s=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=s,this.aRotation=l}getPoint(e,t){const i=t||new we,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(a?o=0:o=r),this.aClockwise===!0&&!a&&(o===r?o=-r:o=o-r);const s=this.aStartAngle+e*o;let l=this.aX+this.xRadius*Math.cos(s),c=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Z0 extends vf{constructor(e,t,i,r,o,a){super(e,t,i,i,r,o,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ol(){let n=0,e=0,t=0,i=0;function r(o,a,s,l){n=o,e=s,t=-3*o+3*a-2*s-l,i=2*o-2*a+s+l}return{initCatmullRom:function(o,a,s,l,c){r(a,s,c*(s-o),c*(l-a))},initNonuniformCatmullRom:function(o,a,s,l,c,u,h){let f=(a-o)/c-(s-o)/(c+u)+(s-a)/u,p=(s-a)/u-(l-a)/(u+h)+(l-s)/h;f*=u,p*=u,r(a,s,f,p)},calc:function(o){const a=o*o,s=a*o;return n+e*o+t*a+i*s}}}const aa=new F,ws=new Ol,Es=new Ol,Ts=new Ol;class J0 extends Bn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new F){const i=t,r=this.points,o=r.length,a=(o-(this.closed?0:1))*e;let s=Math.floor(a),l=a-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/o)+1)*o:l===0&&s===o-1&&(s=o-2,l=1);let c,u;this.closed||s>0?c=r[(s-1)%o]:(aa.subVectors(r[0],r[1]).add(r[0]),c=aa);const h=r[s%o],f=r[(s+1)%o];if(this.closed||s+2<o?u=r[(s+2)%o]:(aa.subVectors(r[o-1],r[o-2]).add(r[o-1]),u=aa),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ws.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),Es.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),Ts.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ws.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Es.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ts.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(ws.calc(l),Es.calc(l),Ts.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Su(n,e,t,i,r){const o=(i-e)*.5,a=(r-t)*.5,s=n*n,l=n*s;return(2*t-2*i+o+a)*l+(-3*t+3*i-2*o-a)*s+o*n+t}function Q0(n,e){const t=1-n;return t*t*e}function ey(n,e){return 2*(1-n)*n*e}function ty(n,e){return n*n*e}function _o(n,e,t,i){return Q0(n,e)+ey(n,t)+ty(n,i)}function ny(n,e){const t=1-n;return t*t*t*e}function iy(n,e){const t=1-n;return 3*t*t*n*e}function ry(n,e){return 3*(1-n)*n*n*e}function oy(n,e){return n*n*n*e}function vo(n,e,t,i,r){return ny(n,e)+iy(n,t)+ry(n,i)+oy(n,r)}class ay extends Bn{constructor(e=new we,t=new we,i=new we,r=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new we){const i=t,r=this.v0,o=this.v1,a=this.v2,s=this.v3;return i.set(vo(e,r.x,o.x,a.x,s.x),vo(e,r.y,o.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yf extends Bn{constructor(e=new F,t=new F,i=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new F){const i=t,r=this.v0,o=this.v1,a=this.v2,s=this.v3;return i.set(vo(e,r.x,o.x,a.x,s.x),vo(e,r.y,o.y,a.y,s.y),vo(e,r.z,o.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sy extends Bn{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ly extends Bn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cy extends Bn{constructor(e=new we,t=new we,i=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new we){const i=t,r=this.v0,o=this.v1,a=this.v2;return i.set(_o(e,r.x,o.x,a.x),_o(e,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dl extends Bn{constructor(e=new F,t=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new F){const i=t,r=this.v0,o=this.v1,a=this.v2;return i.set(_o(e,r.x,o.x,a.x),_o(e,r.y,o.y,a.y),_o(e,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uy extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const i=t,r=this.points,o=(r.length-1)*e,a=Math.floor(o),s=o-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return i.set(Su(s,l.x,c.x,u.x,h.x),Su(s,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new we().fromArray(r))}return this}}var hy=Object.freeze({__proto__:null,ArcCurve:Z0,CatmullRomCurve3:J0,CubicBezierCurve:ay,CubicBezierCurve3:yf,EllipseCurve:vf,LineCurve:sy,LineCurve3:ly,QuadraticBezierCurve:cy,QuadraticBezierCurve3:Dl,SplineCurve:uy});class za extends Qt{constructor(e=1,t=1,i=1,r=32,o=1,a=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:o,openEnded:a,thetaStart:s,thetaLength:l};const c=this;r=Math.floor(r),o=Math.floor(o);const u=[],h=[],f=[],p=[];let g=0;const _=[],m=i/2;let d=0;M(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Tt(h,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(p,2));function M(){const b=new F,x=new F;let E=0;const R=(t-e)/i;for(let C=0;C<=o;C++){const S=[],A=C/o,$=A*(t-e)+e;for(let q=0;q<=r;q++){const G=q/r,D=G*l+s,O=Math.sin(D),V=Math.cos(D);x.x=$*O,x.y=-A*i+m,x.z=$*V,h.push(x.x,x.y,x.z),b.set(O,R,V).normalize(),f.push(b.x,b.y,b.z),p.push(G,1-A),S.push(g++)}_.push(S)}for(let C=0;C<r;C++)for(let S=0;S<o;S++){const A=_[S][C],$=_[S+1][C],q=_[S+1][C+1],G=_[S][C+1];u.push(A,$,G),u.push($,q,G),E+=6}c.addGroup(d,E,0),d+=E}function y(b){const x=g,E=new we,R=new F;let C=0;const S=b===!0?e:t,A=b===!0?1:-1;for(let q=1;q<=r;q++)h.push(0,m*A,0),f.push(0,A,0),p.push(.5,.5),g++;const $=g;for(let q=0;q<=r;q++){const D=q/r*l+s,O=Math.cos(D),V=Math.sin(D);R.x=S*V,R.y=m*A,R.z=S*O,h.push(R.x,R.y,R.z),f.push(0,A,0),E.x=O*.5+.5,E.y=V*.5*A+.5,p.push(E.x,E.y),g++}for(let q=0;q<r;q++){const G=x+q,D=$+q;b===!0?u.push(D,D+1,G):u.push(D+1,D,G),C+=3}c.addGroup(d,C,b===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Il extends za{constructor(e=1,t=1,i=32,r=1,o=!1,a=0,s=Math.PI*2){super(0,e,t,i,r,o,a,s),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:s}}static fromJSON(e){return new Il(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ro extends Qt{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:a,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+s,Math.PI);let c=0;const u=[],h=new F,f=new F,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const M=[],y=d/i;let b=0;d===0&&a===0?b=.5/t:d===i&&l===Math.PI&&(b=-.5/t);for(let x=0;x<=t;x++){const E=x/t;h.x=-e*Math.cos(r+E*o)*Math.sin(a+y*s),h.y=e*Math.cos(a+y*s),h.z=e*Math.sin(r+E*o)*Math.sin(a+y*s),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(E+b,1-y),M.push(c++)}u.push(M)}for(let d=0;d<i;d++)for(let M=0;M<t;M++){const y=u[d][M+1],b=u[d][M],x=u[d+1][M],E=u[d+1][M+1];(d!==0||a>0)&&p.push(y,b,E),(d!==i-1||l<Math.PI)&&p.push(b,x,E)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(_,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Nl extends Qt{constructor(e=new Dl(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,i=1,r=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:o};const a=e.computeFrenetFrames(t,o);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const s=new F,l=new F,c=new we;let u=new F;const h=[],f=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Tt(h,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(p,2));function _(){for(let y=0;y<t;y++)m(y);m(o===!1?t:0),M(),d()}function m(y){u=e.getPointAt(y/t,u);const b=a.normals[y],x=a.binormals[y];for(let E=0;E<=r;E++){const R=E/r*Math.PI*2,C=Math.sin(R),S=-Math.cos(R);l.x=S*b.x+C*x.x,l.y=S*b.y+C*x.y,l.z=S*b.z+C*x.z,l.normalize(),f.push(l.x,l.y,l.z),s.x=u.x+i*l.x,s.y=u.y+i*l.y,s.z=u.z+i*l.z,h.push(s.x,s.y,s.z)}}function d(){for(let y=1;y<=t;y++)for(let b=1;b<=r;b++){const x=(r+1)*(y-1)+(b-1),E=(r+1)*y+(b-1),R=(r+1)*y+b,C=(r+1)*(y-1)+b;g.push(x,E,C),g.push(E,R,C)}}function M(){for(let y=0;y<=t;y++)for(let b=0;b<=r;b++)c.x=y/t,c.y=b/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Nl(new hy[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class fy extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Na,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dy extends fy{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new at(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new at(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new at(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class py extends ai{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Na,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class xf extends ai{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Na,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const wu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class my{constructor(e,t,i){const r=this;let o=!1,a=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){s++,o===!1&&r.onStart!==void 0&&r.onStart(u,a,s),o=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,s),a===s&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const gy=new my;class bf{constructor(e){this.manager=e!==void 0?e:gy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,o){i.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class _y extends bf{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,a=wu.get(e);if(a!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a;const s=Eo("img");function l(){u(),wu.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(h){u(),r&&r(h),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),o.manager.itemStart(e),s.src=e,s}}class vy extends bf{constructor(e){super(e)}load(e,t,i,r){const o=new Jt,a=new _y(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){o.image=s,o.needsUpdate=!0,t!==void 0&&t(o)},i,r),o}}class Mf extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const As=new wt,Eu=new F,Tu=new F;class yy{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rl,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Eu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eu),Tu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tu),t.updateMatrixWorld(),As.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(As),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(As)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xy extends yy{constructor(){super(new Pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class by extends Mf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new xy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class My extends Mf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Au(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Au();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Au(){return(typeof performance>"u"?Date:performance).now()}class wf{constructor(e,t,i=0,r=1/0){this.ray=new Al(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Cl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Js(e,this,i,t),i.sort(Cu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,o=e.length;r<o;r++)Js(e[r],this,i,t);return i.sort(Cu),i}}function Cu(n,e){return n.distance-e.distance}function Js(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Js(r[o],e,t,!0)}}class Qs{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sl);const _r=new mi,di=new wf,Kr=new we,Ru=new F,sa=new F,Cs=new F,Pu=new wt;class Sy extends Rn{constructor(e,t,i){super(),i.style.touchAction="none";let r=null,o=null;const a=[],s=this;function l(){i.addEventListener("pointermove",p),i.addEventListener("pointerdown",g),i.addEventListener("pointerup",_),i.addEventListener("pointerleave",_)}function c(){i.removeEventListener("pointermove",p),i.removeEventListener("pointerdown",g),i.removeEventListener("pointerup",_),i.removeEventListener("pointerleave",_),i.style.cursor=""}function u(){c()}function h(){return e}function f(){return di}function p(d){if(s.enabled!==!1){if(m(d),di.setFromCamera(Kr,t),r){di.ray.intersectPlane(_r,sa)&&r.position.copy(sa.sub(Ru).applyMatrix4(Pu)),s.dispatchEvent({type:"drag",object:r});return}if(d.pointerType==="mouse"||d.pointerType==="pen")if(a.length=0,di.setFromCamera(Kr,t),di.intersectObjects(e,!0,a),a.length>0){const M=a[0].object;_r.setFromNormalAndCoplanarPoint(t.getWorldDirection(_r.normal),Cs.setFromMatrixPosition(M.matrixWorld)),o!==M&&o!==null&&(s.dispatchEvent({type:"hoveroff",object:o}),i.style.cursor="auto",o=null),o!==M&&(s.dispatchEvent({type:"hoveron",object:M}),i.style.cursor="pointer",o=M)}else o!==null&&(s.dispatchEvent({type:"hoveroff",object:o}),i.style.cursor="auto",o=null)}}function g(d){s.enabled!==!1&&(m(d),a.length=0,di.setFromCamera(Kr,t),di.intersectObjects(e,!0,a),a.length>0&&(r=s.transformGroup===!0?e[0]:a[0].object,_r.setFromNormalAndCoplanarPoint(t.getWorldDirection(_r.normal),Cs.setFromMatrixPosition(r.matrixWorld)),di.ray.intersectPlane(_r,sa)&&(Pu.copy(r.parent.matrixWorld).invert(),Ru.copy(sa).sub(Cs.setFromMatrixPosition(r.matrixWorld))),i.style.cursor="move",s.dispatchEvent({type:"dragstart",object:r})))}function _(){s.enabled!==!1&&(r&&(s.dispatchEvent({type:"dragend",object:r}),r=null),i.style.cursor=o?"pointer":"auto")}function m(d){const M=i.getBoundingClientRect();Kr.x=(d.clientX-M.left)/M.width*2-1,Kr.y=-(d.clientY-M.top)/M.height*2+1}l(),this.enabled=!0,this.transformGroup=!1,this.activate=l,this.deactivate=c,this.dispose=u,this.getObjects=h,this.getRaycaster=f}}function wy(n,e,t){var i,r=1;n==null&&(n=0),e==null&&(e=0),t==null&&(t=0);function o(){var a,s=i.length,l,c=0,u=0,h=0;for(a=0;a<s;++a)l=i[a],c+=l.x||0,u+=l.y||0,h+=l.z||0;for(c=(c/s-n)*r,u=(u/s-e)*r,h=(h/s-t)*r,a=0;a<s;++a)l=i[a],c&&(l.x-=c),u&&(l.y-=u),h&&(l.z-=h)}return o.initialize=function(a){i=a},o.x=function(a){return arguments.length?(n=+a,o):n},o.y=function(a){return arguments.length?(e=+a,o):e},o.z=function(a){return arguments.length?(t=+a,o):t},o.strength=function(a){return arguments.length?(r=+a,o):r},o}function Ey(n){const e=+this._x.call(null,n);return Ef(this.cover(e),e,n)}function Ef(n,e,t){if(isNaN(e))return n;var i,r=n._root,o={data:t},a=n._x0,s=n._x1,l,c,u,h,f;if(!r)return n._root=o,n;for(;r.length;)if((u=e>=(l=(a+s)/2))?a=l:s=l,i=r,!(r=r[h=+u]))return i[h]=o,n;if(c=+n._x.call(null,r.data),e===c)return o.next=r,i?i[h]=o:n._root=o,n;do i=i?i[h]=new Array(2):n._root=new Array(2),(u=e>=(l=(a+s)/2))?a=l:s=l;while((h=+u)==(f=+(c>=l)));return i[f]=r,i[h]=o,n}function Ty(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e);let i=1/0,r=-1/0;for(let o=0,a;o<e;++o)isNaN(a=+this._x.call(null,n[o]))||(t[o]=a,a<i&&(i=a),a>r&&(r=a));if(i>r)return this;this.cover(i).cover(r);for(let o=0;o<e;++o)Ef(this,t[o],n[o]);return this}function Ay(n){if(isNaN(n=+n))return this;var e=this._x0,t=this._x1;if(isNaN(e))t=(e=Math.floor(n))+1;else{for(var i=t-e||1,r=this._root,o,a;e>n||n>=t;)switch(a=+(n<e),o=new Array(2),o[a]=r,r=o,i*=2,a){case 0:t=e+i;break;case 1:e=t-i;break}this._root&&this._root.length&&(this._root=r)}return this._x0=e,this._x1=t,this}function Cy(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function Ry(n){return arguments.length?this.cover(+n[0][0]).cover(+n[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function ri(n,e,t){this.node=n,this.x0=e,this.x1=t}function Py(n,e){var t,i=this._x0,r,o,a=this._x1,s=[],l=this._root,c,u;for(l&&s.push(new ri(l,i,a)),e==null?e=1/0:(i=n-e,a=n+e);c=s.pop();)if(!(!(l=c.node)||(r=c.x0)>a||(o=c.x1)<i))if(l.length){var h=(r+o)/2;s.push(new ri(l[1],h,o),new ri(l[0],r,h)),(u=+(n>=h))&&(c=s[s.length-1],s[s.length-1]=s[s.length-1-u],s[s.length-1-u]=c)}else{var f=Math.abs(n-+this._x.call(null,l.data));f<e&&(e=f,i=n-f,a=n+f,t=l.data)}return t}function Ly(n){if(isNaN(l=+this._x.call(null,n)))return this;var e,t=this._root,i,r,o,a=this._x0,s=this._x1,l,c,u,h,f;if(!t)return this;if(t.length)for(;;){if((u=l>=(c=(a+s)/2))?a=c:s=c,e=t,!(t=t[h=+u]))return this;if(!t.length)break;e[h+1&1]&&(i=e,f=h)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(o=t.next)&&delete t.next,r?(o?r.next=o:delete r.next,this):e?(o?e[h]=o:delete e[h],(t=e[0]||e[1])&&t===(e[1]||e[0])&&!t.length&&(i?i[f]=t:this._root=t),this):(this._root=o,this)}function Oy(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function Dy(){return this._root}function Iy(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function Ny(n){var e=[],t,i=this._root,r,o,a;for(i&&e.push(new ri(i,this._x0,this._x1));t=e.pop();)if(!n(i=t.node,o=t.x0,a=t.x1)&&i.length){var s=(o+a)/2;(r=i[1])&&e.push(new ri(r,s,a)),(r=i[0])&&e.push(new ri(r,o,s))}return this}function Uy(n){var e=[],t=[],i;for(this._root&&e.push(new ri(this._root,this._x0,this._x1));i=e.pop();){var r=i.node;if(r.length){var o,a=i.x0,s=i.x1,l=(a+s)/2;(o=r[0])&&e.push(new ri(o,a,l)),(o=r[1])&&e.push(new ri(o,l,s))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.x1);return this}function Fy(n){return n[0]}function ky(n){return arguments.length?(this._x=n,this):this._x}function Tf(n,e){var t=new Ul(e??Fy,NaN,NaN);return n==null?t:t.addAll(n)}function Ul(n,e,t){this._x=n,this._x0=e,this._x1=t,this._root=void 0}function Lu(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var nn=Tf.prototype=Ul.prototype;nn.copy=function(){var n=new Ul(this._x,this._x0,this._x1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=Lu(e),n;for(t=[{source:e,target:n._root=new Array(2)}];e=t.pop();)for(var r=0;r<2;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(2)}):e.target[r]=Lu(i));return n};nn.add=Ey;nn.addAll=Ty;nn.cover=Ay;nn.data=Cy;nn.extent=Ry;nn.find=Py;nn.remove=Ly;nn.removeAll=Oy;nn.root=Dy;nn.size=Iy;nn.visit=Ny;nn.visitAfter=Uy;nn.x=ky;function By(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return Af(this.cover(e,t),e,t,n)}function Af(n,e,t,i){if(isNaN(e)||isNaN(t))return n;var r,o=n._root,a={data:i},s=n._x0,l=n._y0,c=n._x1,u=n._y1,h,f,p,g,_,m,d,M;if(!o)return n._root=a,n;for(;o.length;)if((_=e>=(h=(s+c)/2))?s=h:c=h,(m=t>=(f=(l+u)/2))?l=f:u=f,r=o,!(o=o[d=m<<1|_]))return r[d]=a,n;if(p=+n._x.call(null,o.data),g=+n._y.call(null,o.data),e===p&&t===g)return a.next=o,r?r[d]=a:n._root=a,n;do r=r?r[d]=new Array(4):n._root=new Array(4),(_=e>=(h=(s+c)/2))?s=h:c=h,(m=t>=(f=(l+u)/2))?l=f:u=f;while((d=m<<1|_)===(M=(g>=f)<<1|p>=h));return r[M]=o,r[d]=a,n}function zy(n){var e,t,i=n.length,r,o,a=new Array(i),s=new Array(i),l=1/0,c=1/0,u=-1/0,h=-1/0;for(t=0;t<i;++t)isNaN(r=+this._x.call(null,e=n[t]))||isNaN(o=+this._y.call(null,e))||(a[t]=r,s[t]=o,r<l&&(l=r),r>u&&(u=r),o<c&&(c=o),o>h&&(h=o));if(l>u||c>h)return this;for(this.cover(l,c).cover(u,h),t=0;t<i;++t)Af(this,a[t],s[t],n[t]);return this}function Hy(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,i=this._y0,r=this._x1,o=this._y1;if(isNaN(t))r=(t=Math.floor(n))+1,o=(i=Math.floor(e))+1;else{for(var a=r-t||1,s=this._root,l,c;t>n||n>=r||i>e||e>=o;)switch(c=(e<i)<<1|n<t,l=new Array(4),l[c]=s,s=l,a*=2,c){case 0:r=t+a,o=i+a;break;case 1:t=r-a,o=i+a;break;case 2:r=t+a,i=o-a;break;case 3:t=r-a,i=o-a;break}this._root&&this._root.length&&(this._root=s)}return this._x0=t,this._y0=i,this._x1=r,this._y1=o,this}function Gy(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function Vy(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Kt(n,e,t,i,r){this.node=n,this.x0=e,this.y0=t,this.x1=i,this.y1=r}function Wy(n,e,t){var i,r=this._x0,o=this._y0,a,s,l,c,u=this._x1,h=this._y1,f=[],p=this._root,g,_;for(p&&f.push(new Kt(p,r,o,u,h)),t==null?t=1/0:(r=n-t,o=e-t,u=n+t,h=e+t,t*=t);g=f.pop();)if(!(!(p=g.node)||(a=g.x0)>u||(s=g.y0)>h||(l=g.x1)<r||(c=g.y1)<o))if(p.length){var m=(a+l)/2,d=(s+c)/2;f.push(new Kt(p[3],m,d,l,c),new Kt(p[2],a,d,m,c),new Kt(p[1],m,s,l,d),new Kt(p[0],a,s,m,d)),(_=(e>=d)<<1|n>=m)&&(g=f[f.length-1],f[f.length-1]=f[f.length-1-_],f[f.length-1-_]=g)}else{var M=n-+this._x.call(null,p.data),y=e-+this._y.call(null,p.data),b=M*M+y*y;if(b<t){var x=Math.sqrt(t=b);r=n-x,o=e-x,u=n+x,h=e+x,i=p.data}}return i}function jy(n){if(isNaN(u=+this._x.call(null,n))||isNaN(h=+this._y.call(null,n)))return this;var e,t=this._root,i,r,o,a=this._x0,s=this._y0,l=this._x1,c=this._y1,u,h,f,p,g,_,m,d;if(!t)return this;if(t.length)for(;;){if((g=u>=(f=(a+l)/2))?a=f:l=f,(_=h>=(p=(s+c)/2))?s=p:c=p,e=t,!(t=t[m=_<<1|g]))return this;if(!t.length)break;(e[m+1&3]||e[m+2&3]||e[m+3&3])&&(i=e,d=m)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(o=t.next)&&delete t.next,r?(o?r.next=o:delete r.next,this):e?(o?e[m]=o:delete e[m],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[d]=t:this._root=t),this):(this._root=o,this)}function $y(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function Xy(){return this._root}function qy(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function Yy(n){var e=[],t,i=this._root,r,o,a,s,l;for(i&&e.push(new Kt(i,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(i=t.node,o=t.x0,a=t.y0,s=t.x1,l=t.y1)&&i.length){var c=(o+s)/2,u=(a+l)/2;(r=i[3])&&e.push(new Kt(r,c,u,s,l)),(r=i[2])&&e.push(new Kt(r,o,u,c,l)),(r=i[1])&&e.push(new Kt(r,c,a,s,u)),(r=i[0])&&e.push(new Kt(r,o,a,c,u))}return this}function Ky(n){var e=[],t=[],i;for(this._root&&e.push(new Kt(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var r=i.node;if(r.length){var o,a=i.x0,s=i.y0,l=i.x1,c=i.y1,u=(a+l)/2,h=(s+c)/2;(o=r[0])&&e.push(new Kt(o,a,s,u,h)),(o=r[1])&&e.push(new Kt(o,u,s,l,h)),(o=r[2])&&e.push(new Kt(o,a,h,u,c)),(o=r[3])&&e.push(new Kt(o,u,h,l,c))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.x1,i.y1);return this}function Zy(n){return n[0]}function Jy(n){return arguments.length?(this._x=n,this):this._x}function Qy(n){return n[1]}function ex(n){return arguments.length?(this._y=n,this):this._y}function Cf(n,e,t){var i=new Fl(e??Zy,t??Qy,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function Fl(n,e,t,i,r,o){this._x=n,this._y=e,this._x0=t,this._y0=i,this._x1=r,this._y1=o,this._root=void 0}function Ou(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var en=Cf.prototype=Fl.prototype;en.copy=function(){var n=new Fl(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=Ou(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var r=0;r<4;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(4)}):e.target[r]=Ou(i));return n};en.add=By;en.addAll=zy;en.cover=Hy;en.data=Gy;en.extent=Vy;en.find=Wy;en.remove=jy;en.removeAll=$y;en.root=Xy;en.size=qy;en.visit=Yy;en.visitAfter=Ky;en.x=Jy;en.y=ex;function tx(n){const e=+this._x.call(null,n),t=+this._y.call(null,n),i=+this._z.call(null,n);return Rf(this.cover(e,t,i),e,t,i,n)}function Rf(n,e,t,i,r){if(isNaN(e)||isNaN(t)||isNaN(i))return n;var o,a=n._root,s={data:r},l=n._x0,c=n._y0,u=n._z0,h=n._x1,f=n._y1,p=n._z1,g,_,m,d,M,y,b,x,E,R,C;if(!a)return n._root=s,n;for(;a.length;)if((b=e>=(g=(l+h)/2))?l=g:h=g,(x=t>=(_=(c+f)/2))?c=_:f=_,(E=i>=(m=(u+p)/2))?u=m:p=m,o=a,!(a=a[R=E<<2|x<<1|b]))return o[R]=s,n;if(d=+n._x.call(null,a.data),M=+n._y.call(null,a.data),y=+n._z.call(null,a.data),e===d&&t===M&&i===y)return s.next=a,o?o[R]=s:n._root=s,n;do o=o?o[R]=new Array(8):n._root=new Array(8),(b=e>=(g=(l+h)/2))?l=g:h=g,(x=t>=(_=(c+f)/2))?c=_:f=_,(E=i>=(m=(u+p)/2))?u=m:p=m;while((R=E<<2|x<<1|b)===(C=(y>=m)<<2|(M>=_)<<1|d>=g));return o[C]=a,o[R]=s,n}function nx(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e),i=new Float64Array(e),r=new Float64Array(e);let o=1/0,a=1/0,s=1/0,l=-1/0,c=-1/0,u=-1/0;for(let h=0,f,p,g,_;h<e;++h)isNaN(p=+this._x.call(null,f=n[h]))||isNaN(g=+this._y.call(null,f))||isNaN(_=+this._z.call(null,f))||(t[h]=p,i[h]=g,r[h]=_,p<o&&(o=p),p>l&&(l=p),g<a&&(a=g),g>c&&(c=g),_<s&&(s=_),_>u&&(u=_));if(o>l||a>c||s>u)return this;this.cover(o,a,s).cover(l,c,u);for(let h=0;h<e;++h)Rf(this,t[h],i[h],r[h],n[h]);return this}function ix(n,e,t){if(isNaN(n=+n)||isNaN(e=+e)||isNaN(t=+t))return this;var i=this._x0,r=this._y0,o=this._z0,a=this._x1,s=this._y1,l=this._z1;if(isNaN(i))a=(i=Math.floor(n))+1,s=(r=Math.floor(e))+1,l=(o=Math.floor(t))+1;else{for(var c=a-i||1,u=this._root,h,f;i>n||n>=a||r>e||e>=s||o>t||t>=l;)switch(f=(t<o)<<2|(e<r)<<1|n<i,h=new Array(8),h[f]=u,u=h,c*=2,f){case 0:a=i+c,s=r+c,l=o+c;break;case 1:i=a-c,s=r+c,l=o+c;break;case 2:a=i+c,r=s-c,l=o+c;break;case 3:i=a-c,r=s-c,l=o+c;break;case 4:a=i+c,s=r+c,o=l-c;break;case 5:i=a-c,s=r+c,o=l-c;break;case 6:a=i+c,r=s-c,o=l-c;break;case 7:i=a-c,r=s-c,o=l-c;break}this._root&&this._root.length&&(this._root=u)}return this._x0=i,this._y0=r,this._z0=o,this._x1=a,this._y1=s,this._z1=l,this}function rx(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function ox(n){return arguments.length?this.cover(+n[0][0],+n[0][1],+n[0][2]).cover(+n[1][0],+n[1][1],+n[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function mt(n,e,t,i,r,o,a){this.node=n,this.x0=e,this.y0=t,this.z0=i,this.x1=r,this.y1=o,this.z1=a}function ax(n,e,t,i){var r,o=this._x0,a=this._y0,s=this._z0,l,c,u,h,f,p,g=this._x1,_=this._y1,m=this._z1,d=[],M=this._root,y,b;for(M&&d.push(new mt(M,o,a,s,g,_,m)),i==null?i=1/0:(o=n-i,a=e-i,s=t-i,g=n+i,_=e+i,m=t+i,i*=i);y=d.pop();)if(!(!(M=y.node)||(l=y.x0)>g||(c=y.y0)>_||(u=y.z0)>m||(h=y.x1)<o||(f=y.y1)<a||(p=y.z1)<s))if(M.length){var x=(l+h)/2,E=(c+f)/2,R=(u+p)/2;d.push(new mt(M[7],x,E,R,h,f,p),new mt(M[6],l,E,R,x,f,p),new mt(M[5],x,c,R,h,E,p),new mt(M[4],l,c,R,x,E,p),new mt(M[3],x,E,u,h,f,R),new mt(M[2],l,E,u,x,f,R),new mt(M[1],x,c,u,h,E,R),new mt(M[0],l,c,u,x,E,R)),(b=(t>=R)<<2|(e>=E)<<1|n>=x)&&(y=d[d.length-1],d[d.length-1]=d[d.length-1-b],d[d.length-1-b]=y)}else{var C=n-+this._x.call(null,M.data),S=e-+this._y.call(null,M.data),A=t-+this._z.call(null,M.data),$=C*C+S*S+A*A;if($<i){var q=Math.sqrt(i=$);o=n-q,a=e-q,s=t-q,g=n+q,_=e+q,m=t+q,r=M.data}}return r}function sx(n){if(isNaN(f=+this._x.call(null,n))||isNaN(p=+this._y.call(null,n))||isNaN(g=+this._z.call(null,n)))return this;var e,t=this._root,i,r,o,a=this._x0,s=this._y0,l=this._z0,c=this._x1,u=this._y1,h=this._z1,f,p,g,_,m,d,M,y,b,x,E;if(!t)return this;if(t.length)for(;;){if((M=f>=(_=(a+c)/2))?a=_:c=_,(y=p>=(m=(s+u)/2))?s=m:u=m,(b=g>=(d=(l+h)/2))?l=d:h=d,e=t,!(t=t[x=b<<2|y<<1|M]))return this;if(!t.length)break;(e[x+1&7]||e[x+2&7]||e[x+3&7]||e[x+4&7]||e[x+5&7]||e[x+6&7]||e[x+7&7])&&(i=e,E=x)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(o=t.next)&&delete t.next,r?(o?r.next=o:delete r.next,this):e?(o?e[x]=o:delete e[x],(t=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&t===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[E]=t:this._root=t),this):(this._root=o,this)}function lx(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function cx(){return this._root}function ux(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function hx(n){var e=[],t,i=this._root,r,o,a,s,l,c,u;for(i&&e.push(new mt(i,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));t=e.pop();)if(!n(i=t.node,o=t.x0,a=t.y0,s=t.z0,l=t.x1,c=t.y1,u=t.z1)&&i.length){var h=(o+l)/2,f=(a+c)/2,p=(s+u)/2;(r=i[7])&&e.push(new mt(r,h,f,p,l,c,u)),(r=i[6])&&e.push(new mt(r,o,f,p,h,c,u)),(r=i[5])&&e.push(new mt(r,h,a,p,l,f,u)),(r=i[4])&&e.push(new mt(r,o,a,p,h,f,u)),(r=i[3])&&e.push(new mt(r,h,f,s,l,c,p)),(r=i[2])&&e.push(new mt(r,o,f,s,h,c,p)),(r=i[1])&&e.push(new mt(r,h,a,s,l,f,p)),(r=i[0])&&e.push(new mt(r,o,a,s,h,f,p))}return this}function fx(n){var e=[],t=[],i;for(this._root&&e.push(new mt(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));i=e.pop();){var r=i.node;if(r.length){var o,a=i.x0,s=i.y0,l=i.z0,c=i.x1,u=i.y1,h=i.z1,f=(a+c)/2,p=(s+u)/2,g=(l+h)/2;(o=r[0])&&e.push(new mt(o,a,s,l,f,p,g)),(o=r[1])&&e.push(new mt(o,f,s,l,c,p,g)),(o=r[2])&&e.push(new mt(o,a,p,l,f,u,g)),(o=r[3])&&e.push(new mt(o,f,p,l,c,u,g)),(o=r[4])&&e.push(new mt(o,a,s,g,f,p,h)),(o=r[5])&&e.push(new mt(o,f,s,g,c,p,h)),(o=r[6])&&e.push(new mt(o,a,p,g,f,u,h)),(o=r[7])&&e.push(new mt(o,f,p,g,c,u,h))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.z0,i.x1,i.y1,i.z1);return this}function dx(n){return n[0]}function px(n){return arguments.length?(this._x=n,this):this._x}function mx(n){return n[1]}function gx(n){return arguments.length?(this._y=n,this):this._y}function _x(n){return n[2]}function vx(n){return arguments.length?(this._z=n,this):this._z}function Pf(n,e,t,i){var r=new kl(e??dx,t??mx,i??_x,NaN,NaN,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function kl(n,e,t,i,r,o,a,s,l){this._x=n,this._y=e,this._z=t,this._x0=i,this._y0=r,this._z0=o,this._x1=a,this._y1=s,this._z1=l,this._root=void 0}function Du(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var $t=Pf.prototype=kl.prototype;$t.copy=function(){var n=new kl(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=Du(e),n;for(t=[{source:e,target:n._root=new Array(8)}];e=t.pop();)for(var r=0;r<8;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(8)}):e.target[r]=Du(i));return n};$t.add=tx;$t.addAll=nx;$t.cover=ix;$t.data=rx;$t.extent=ox;$t.find=ax;$t.remove=sx;$t.removeAll=lx;$t.root=cx;$t.size=ux;$t.visit=hx;$t.visitAfter=fx;$t.x=px;$t.y=gx;$t.z=vx;function ti(n){return function(){return n}}function Jn(n){return(n()-.5)*1e-6}function yx(n){return n.index}function Iu(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function xx(n){var e=yx,t=f,i,r=ti(30),o,a,s,l,c,u,h=1;n==null&&(n=[]);function f(d){return 1/Math.min(l[d.source.index],l[d.target.index])}function p(d){for(var M=0,y=n.length;M<h;++M)for(var b=0,x,E,R,C=0,S=0,A=0,$,q;b<y;++b)x=n[b],E=x.source,R=x.target,C=R.x+R.vx-E.x-E.vx||Jn(u),s>1&&(S=R.y+R.vy-E.y-E.vy||Jn(u)),s>2&&(A=R.z+R.vz-E.z-E.vz||Jn(u)),$=Math.sqrt(C*C+S*S+A*A),$=($-o[b])/$*d*i[b],C*=$,S*=$,A*=$,R.vx-=C*(q=c[b]),s>1&&(R.vy-=S*q),s>2&&(R.vz-=A*q),E.vx+=C*(q=1-q),s>1&&(E.vy+=S*q),s>2&&(E.vz+=A*q)}function g(){if(a){var d,M=a.length,y=n.length,b=new Map(a.map((E,R)=>[e(E,R,a),E])),x;for(d=0,l=new Array(M);d<y;++d)x=n[d],x.index=d,typeof x.source!="object"&&(x.source=Iu(b,x.source)),typeof x.target!="object"&&(x.target=Iu(b,x.target)),l[x.source.index]=(l[x.source.index]||0)+1,l[x.target.index]=(l[x.target.index]||0)+1;for(d=0,c=new Array(y);d<y;++d)x=n[d],c[d]=l[x.source.index]/(l[x.source.index]+l[x.target.index]);i=new Array(y),_(),o=new Array(y),m()}}function _(){if(a)for(var d=0,M=n.length;d<M;++d)i[d]=+t(n[d],d,n)}function m(){if(a)for(var d=0,M=n.length;d<M;++d)o[d]=+r(n[d],d,n)}return p.initialize=function(d,...M){a=d,u=M.find(y=>typeof y=="function")||Math.random,s=M.find(y=>[1,2,3].includes(y))||2,g()},p.links=function(d){return arguments.length?(n=d,g(),p):n},p.id=function(d){return arguments.length?(e=d,p):e},p.iterations=function(d){return arguments.length?(h=+d,p):h},p.strength=function(d){return arguments.length?(t=typeof d=="function"?d:ti(+d),_(),p):t},p.distance=function(d){return arguments.length?(r=typeof d=="function"?d:ti(+d),m(),p):r},p}var bx={value:()=>{}};function Lf(){for(var n=0,e=arguments.length,t={},i;n<e;++n){if(!(i=arguments[n]+"")||i in t||/[\s.]/.test(i))throw new Error("illegal type: "+i);t[i]=[]}return new _a(t)}function _a(n){this._=n}function Mx(n,e){return n.trim().split(/^|\s+/).map(function(t){var i="",r=t.indexOf(".");if(r>=0&&(i=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:i}})}_a.prototype=Lf.prototype={constructor:_a,on:function(n,e){var t=this._,i=Mx(n+"",t),r,o=-1,a=i.length;if(arguments.length<2){for(;++o<a;)if((r=(n=i[o]).type)&&(r=Sx(t[r],n.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<a;)if(r=(n=i[o]).type)t[r]=Nu(t[r],n.name,e);else if(e==null)for(r in t)t[r]=Nu(t[r],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new _a(n)},call:function(n,e){if((r=arguments.length-2)>0)for(var t=new Array(r),i=0,r,o;i<r;++i)t[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(o=this._[n],i=0,r=o.length;i<r;++i)o[i].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,o=i.length;r<o;++r)i[r].value.apply(e,t)}};function Sx(n,e){for(var t=0,i=n.length,r;t<i;++t)if((r=n[t]).name===e)return r.value}function Nu(n,e,t){for(var i=0,r=n.length;i<r;++i)if(n[i].name===e){n[i]=bx,n=n.slice(0,i).concat(n.slice(i+1));break}return t!=null&&n.push({name:e,value:t}),n}var Nr=0,so=0,Zr=0,Of=1e3,wa,lo,Ea=0,Wi=0,Ha=0,To=typeof performance=="object"&&performance.now?performance:Date,Df=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function If(){return Wi||(Df(wx),Wi=To.now()+Ha)}function wx(){Wi=0}function el(){this._call=this._time=this._next=null}el.prototype=Nf.prototype={constructor:el,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?If():+t)+(e==null?0:+e),!this._next&&lo!==this&&(lo?lo._next=this:wa=this,lo=this),this._call=n,this._time=t,tl()},stop:function(){this._call&&(this._call=null,this._time=1/0,tl())}};function Nf(n,e,t){var i=new el;return i.restart(n,e,t),i}function Ex(){If(),++Nr;for(var n=wa,e;n;)(e=Wi-n._time)>=0&&n._call.call(void 0,e),n=n._next;--Nr}function Uu(){Wi=(Ea=To.now())+Ha,Nr=so=0;try{Ex()}finally{Nr=0,Ax(),Wi=0}}function Tx(){var n=To.now(),e=n-Ea;e>Of&&(Ha-=e,Ea=n)}function Ax(){for(var n,e=wa,t,i=1/0;e;)e._call?(i>e._time&&(i=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:wa=t);lo=n,tl(i)}function tl(n){if(!Nr){so&&(so=clearTimeout(so));var e=n-Wi;e>24?(n<1/0&&(so=setTimeout(Uu,n-To.now()-Ha)),Zr&&(Zr=clearInterval(Zr))):(Zr||(Ea=To.now(),Zr=setInterval(Tx,Of)),Nr=1,Df(Uu))}}const Cx=1664525,Rx=1013904223,Fu=4294967296;function Px(){let n=1;return()=>(n=(Cx*n+Rx)%Fu)/Fu}var ku=3;function Rs(n){return n.x}function Bu(n){return n.y}function Lx(n){return n.z}var Ox=10,Dx=Math.PI*(3-Math.sqrt(5)),Ix=Math.PI*20/(9+Math.sqrt(221));function Nx(n,e){e=e||2;var t=Math.min(ku,Math.max(1,Math.round(e))),i,r=1,o=.001,a=1-Math.pow(o,1/300),s=0,l=.6,c=new Map,u=Nf(p),h=Lf("tick","end"),f=Px();n==null&&(n=[]);function p(){g(),h.call("tick",i),r<o&&(u.stop(),h.call("end",i))}function g(d){var M,y=n.length,b;d===void 0&&(d=1);for(var x=0;x<d;++x)for(r+=(s-r)*a,c.forEach(function(E){E(r)}),M=0;M<y;++M)b=n[M],b.fx==null?b.x+=b.vx*=l:(b.x=b.fx,b.vx=0),t>1&&(b.fy==null?b.y+=b.vy*=l:(b.y=b.fy,b.vy=0)),t>2&&(b.fz==null?b.z+=b.vz*=l:(b.z=b.fz,b.vz=0));return i}function _(){for(var d=0,M=n.length,y;d<M;++d){if(y=n[d],y.index=d,y.fx!=null&&(y.x=y.fx),y.fy!=null&&(y.y=y.fy),y.fz!=null&&(y.z=y.fz),isNaN(y.x)||t>1&&isNaN(y.y)||t>2&&isNaN(y.z)){var b=Ox*(t>2?Math.cbrt(.5+d):t>1?Math.sqrt(.5+d):d),x=d*Dx,E=d*Ix;t===1?y.x=b:t===2?(y.x=b*Math.cos(x),y.y=b*Math.sin(x)):(y.x=b*Math.sin(x)*Math.cos(E),y.y=b*Math.cos(x),y.z=b*Math.sin(x)*Math.sin(E))}(isNaN(y.vx)||t>1&&isNaN(y.vy)||t>2&&isNaN(y.vz))&&(y.vx=0,t>1&&(y.vy=0),t>2&&(y.vz=0))}}function m(d){return d.initialize&&d.initialize(n,f,t),d}return _(),i={tick:g,restart:function(){return u.restart(p),i},stop:function(){return u.stop(),i},numDimensions:function(d){return arguments.length?(t=Math.min(ku,Math.max(1,Math.round(d))),c.forEach(m),i):t},nodes:function(d){return arguments.length?(n=d,_(),c.forEach(m),i):n},alpha:function(d){return arguments.length?(r=+d,i):r},alphaMin:function(d){return arguments.length?(o=+d,i):o},alphaDecay:function(d){return arguments.length?(a=+d,i):+a},alphaTarget:function(d){return arguments.length?(s=+d,i):s},velocityDecay:function(d){return arguments.length?(l=1-d,i):1-l},randomSource:function(d){return arguments.length?(f=d,c.forEach(m),i):f},force:function(d,M){return arguments.length>1?(M==null?c.delete(d):c.set(d,m(M)),i):c.get(d)},find:function(){var d=Array.prototype.slice.call(arguments),M=d.shift()||0,y=(t>1?d.shift():null)||0,b=(t>2?d.shift():null)||0,x=d.shift()||1/0,E=0,R=n.length,C,S,A,$,q,G;for(x*=x,E=0;E<R;++E)q=n[E],C=M-q.x,S=y-(q.y||0),A=b-(q.z||0),$=C*C+S*S+A*A,$<x&&(G=q,x=$);return G},on:function(d,M){return arguments.length>1?(h.on(d,M),i):h.on(d)}}}function Ux(){var n,e,t,i,r,o=ti(-30),a,s=1,l=1/0,c=.81;function u(g){var _,m=n.length,d=(e===1?Tf(n,Rs):e===2?Cf(n,Rs,Bu):e===3?Pf(n,Rs,Bu,Lx):null).visitAfter(f);for(r=g,_=0;_<m;++_)t=n[_],d.visit(p)}function h(){if(n){var g,_=n.length,m;for(a=new Array(_),g=0;g<_;++g)m=n[g],a[m.index]=+o(m,g,n)}}function f(g){var _=0,m,d,M=0,y,b,x,E,R=g.length;if(R){for(y=b=x=E=0;E<R;++E)(m=g[E])&&(d=Math.abs(m.value))&&(_+=m.value,M+=d,y+=d*(m.x||0),b+=d*(m.y||0),x+=d*(m.z||0));_*=Math.sqrt(4/R),g.x=y/M,e>1&&(g.y=b/M),e>2&&(g.z=x/M)}else{m=g,m.x=m.data.x,e>1&&(m.y=m.data.y),e>2&&(m.z=m.data.z);do _+=a[m.data.index];while(m=m.next)}g.value=_}function p(g,_,m,d,M){if(!g.value)return!0;var y=[m,d,M][e-1],b=g.x-t.x,x=e>1?g.y-t.y:0,E=e>2?g.z-t.z:0,R=y-_,C=b*b+x*x+E*E;if(R*R/c<C)return C<l&&(b===0&&(b=Jn(i),C+=b*b),e>1&&x===0&&(x=Jn(i),C+=x*x),e>2&&E===0&&(E=Jn(i),C+=E*E),C<s&&(C=Math.sqrt(s*C)),t.vx+=b*g.value*r/C,e>1&&(t.vy+=x*g.value*r/C),e>2&&(t.vz+=E*g.value*r/C)),!0;if(g.length||C>=l)return;(g.data!==t||g.next)&&(b===0&&(b=Jn(i),C+=b*b),e>1&&x===0&&(x=Jn(i),C+=x*x),e>2&&E===0&&(E=Jn(i),C+=E*E),C<s&&(C=Math.sqrt(s*C)));do g.data!==t&&(R=a[g.data.index]*r/C,t.vx+=b*R,e>1&&(t.vy+=x*R),e>2&&(t.vz+=E*R));while(g=g.next)}return u.initialize=function(g,..._){n=g,i=_.find(m=>typeof m=="function")||Math.random,e=_.find(m=>[1,2,3].includes(m))||2,h()},u.strength=function(g){return arguments.length?(o=typeof g=="function"?g:ti(+g),h(),u):o},u.distanceMin=function(g){return arguments.length?(s=g*g,u):Math.sqrt(s)},u.distanceMax=function(g){return arguments.length?(l=g*g,u):Math.sqrt(l)},u.theta=function(g){return arguments.length?(c=g*g,u):Math.sqrt(c)},u}function Fx(n,e,t,i){var r,o,a=ti(.1),s,l;typeof n!="function"&&(n=ti(+n)),e==null&&(e=0),t==null&&(t=0),i==null&&(i=0);function c(h){for(var f=0,p=r.length;f<p;++f){var g=r[f],_=g.x-e||1e-6,m=(g.y||0)-t||1e-6,d=(g.z||0)-i||1e-6,M=Math.sqrt(_*_+m*m+d*d),y=(l[f]-M)*s[f]*h/M;g.vx+=_*y,o>1&&(g.vy+=m*y),o>2&&(g.vz+=d*y)}}function u(){if(r){var h,f=r.length;for(s=new Array(f),l=new Array(f),h=0;h<f;++h)l[h]=+n(r[h],h,r),s[h]=isNaN(l[h])?0:+a(r[h],h,r)}}return c.initialize=function(h,...f){r=h,o=f.find(p=>[1,2,3].includes(p))||2,u()},c.strength=function(h){return arguments.length?(a=typeof h=="function"?h:ti(+h),u(),c):a},c.radius=function(h){return arguments.length?(n=typeof h=="function"?h:ti(+h),u(),c):n},c.x=function(h){return arguments.length?(e=+h,c):e},c.y=function(h){return arguments.length?(t=+h,c):t},c.z=function(h){return arguments.length?(i=+h,c):i},c}function Uf(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Bl=function(e){Bx(e);var t=kx(e);return e.on=t.on,e.off=t.off,e.fire=t.fire,e};function kx(n){var e=Object.create(null);return{on:function(t,i,r){if(typeof i!="function")throw new Error("callback is expected to be a function");var o=e[t];return o||(o=e[t]=[]),o.push({callback:i,ctx:r}),n},off:function(t,i){var r=typeof t>"u";if(r)return e=Object.create(null),n;if(e[t]){var o=typeof i!="function";if(o)delete e[t];else for(var a=e[t],s=0;s<a.length;++s)a[s].callback===i&&a.splice(s,1)}return n},fire:function(t){var i=e[t];if(!i)return n;var r;arguments.length>1&&(r=Array.prototype.splice.call(arguments,1));for(var o=0;o<i.length;++o){var a=i[o];a.callback.apply(a.ctx,r)}return n}}}function Bx(n){if(!n)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],t=0;t<e.length;++t)if(n.hasOwnProperty(e[t]))throw new Error("Subject cannot be eventified, since it already has property '"+e[t]+"'")}var zx=Gx,Hx=Bl;function Gx(n){if(n=n||{},"uniqueLinkId"in n&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),n.multigraph=n.uniqueLinkId),n.multigraph===void 0&&(n.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,t=new Map,i={},r=0,o=n.multigraph?b:y,a=[],s=V,l=V,c=V,u=V,h={version:20,addNode:_,addLink:M,removeLink:C,removeNode:d,getNode:m,getNodeCount:x,getLinkCount:E,getEdgeCount:E,getLinksCount:E,getNodesCount:x,getLinks:R,forEachNode:pe,forEachLinkedNode:G,forEachLink:q,beginUpdate:c,endUpdate:u,clear:$,hasLink:A,hasNode:m,getLink:A};return Hx(h),f(),h;function f(){var j=h.on;h.on=fe;function fe(){return h.beginUpdate=c=Q,h.endUpdate=u=re,s=p,l=g,h.on=j,j.apply(h,arguments)}}function p(j,fe){a.push({link:j,changeType:fe})}function g(j,fe){a.push({node:j,changeType:fe})}function _(j,fe){if(j===void 0)throw new Error("Invalid node identifier");c();var B=m(j);return B?(B.data=fe,l(B,"update")):(B=new Vx(j,fe),l(B,"add")),e.set(j,B),u(),B}function m(j){return e.get(j)}function d(j){var fe=m(j);if(!fe)return!1;c();var B=fe.links;return B&&(B.forEach(S),fe.links=null),e.delete(j),l(fe,"remove"),u(),!0}function M(j,fe,B){c();var oe=m(j)||_(j),Y=m(fe)||_(fe),K=o(j,fe,B),ce=t.has(K.id);return t.set(K.id,K),zu(oe,K),j!==fe&&zu(Y,K),s(K,ce?"update":"add"),u(),K}function y(j,fe,B){var oe=la(j,fe),Y=t.get(oe);return Y?(Y.data=B,Y):new Hu(j,fe,B,oe)}function b(j,fe,B){var oe=la(j,fe),Y=i.hasOwnProperty(oe);if(Y||A(j,fe)){Y||(i[oe]=0);var K="@"+ ++i[oe];oe=la(j+K,fe+K)}return new Hu(j,fe,B,oe)}function x(){return e.size}function E(){return t.size}function R(j){var fe=m(j);return fe?fe.links:null}function C(j,fe){return fe!==void 0&&(j=A(j,fe)),S(j)}function S(j){if(!j||!t.get(j.id))return!1;c(),t.delete(j.id);var fe=m(j.fromId),B=m(j.toId);return fe&&fe.links.delete(j),B&&B.links.delete(j),s(j,"remove"),u(),!0}function A(j,fe){if(!(j===void 0||fe===void 0))return t.get(la(j,fe))}function $(){c(),pe(function(j){d(j.id)}),u()}function q(j){if(typeof j=="function")for(var fe=t.values(),B=fe.next();!B.done;){if(j(B.value))return!0;B=fe.next()}}function G(j,fe,B){var oe=m(j);if(oe&&oe.links&&typeof fe=="function")return B?O(oe.links,j,fe):D(oe.links,j,fe)}function D(j,fe,B){for(var oe,Y=j.values(),K=Y.next();!K.done;){var ce=K.value,H=ce.fromId===fe?ce.toId:ce.fromId;if(oe=B(e.get(H),ce),oe)return!0;K=Y.next()}}function O(j,fe,B){for(var oe,Y=j.values(),K=Y.next();!K.done;){var ce=K.value;if(ce.fromId===fe&&(oe=B(e.get(ce.toId),ce),oe))return!0;K=Y.next()}}function V(){}function Q(){r+=1}function re(){r-=1,r===0&&a.length>0&&(h.fire("changed",a),a.length=0)}function pe(j){if(typeof j!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+j);for(var fe=e.values(),B=fe.next();!B.done;){if(j(B.value))return!0;B=fe.next()}}}function Vx(n,e){this.id=n,this.links=null,this.data=e}function zu(n,e){n.links?n.links.add(e):n.links=new Set([e])}function Hu(n,e,t,i){this.fromId=n,this.toId=e,this.data=t,this.id=i}function la(n,e){return n.toString()+"👉 "+e.toString()}const Wx=Uf(zx);var zl={exports:{}},Po={exports:{}},Ff=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const jx=Ff;var Br=function(e){return t;function t(i,r){let o=r&&r.indent||0,a=r&&r.join!==void 0?r.join:`
`,s=Array(o+1).join(" "),l=[];for(let c=0;c<e;++c){let u=jx(c),h=c===0?"":s;l.push(h+i.replace(/{var}/g,u))}return l.join(a)}};const kf=Br;Po.exports=$x;Po.exports.generateCreateBodyFunctionBody=Bf;Po.exports.getVectorCode=Hf;Po.exports.getBodyCode=zf;function $x(n,e){let t=Bf(n,e),{Body:i}=new Function(t)();return i}function Bf(n,e){return`
${Hf(n,e)}
${zf(n)}
return {Body: Body, Vector: Vector};
`}function zf(n){let e=kf(n),t=e("{var}",{join:", "});return`
function Body(${t}) {
  this.isPinned = false;
  this.pos = new Vector(${t});
  this.force = new Vector();
  this.velocity = new Vector();
  this.mass = 1;

  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.reset = function() {
  this.force.reset();
  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.setPosition = function (${t}) {
  ${e("this.pos.{var} = {var} || 0;",{indent:2})}
};`}function Hf(n,e){let t=kf(n),i="";return e&&(i=`${t(`
   var v{var};
Object.defineProperty(this, '{var}', {
  set: function(v) { 
    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
    v{var} = v; 
  },
  get: function() { return v{var}; }
});`)}`),`function Vector(${t("{var}",{join:", "})}) {
  ${i}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${t('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");',{indent:4})}
      ${t("this.{var} = v.{var};",{indent:4})}
    } else {
      ${t('this.{var} = typeof {var} === "number" ? {var} : 0;',{indent:4})}
    }
  }
  
  Vector.prototype.reset = function () {
    ${t("this.{var} = ",{join:""})}0;
  };`}var Xx=Po.exports,wi={exports:{}};const Hl=Br,pi=Ff;wi.exports=qx;wi.exports.generateQuadTreeFunctionBody=Gf;wi.exports.getInsertStackCode=Xf;wi.exports.getQuadNodeCode=$f;wi.exports.isSamePosition=Vf;wi.exports.getChildBodyCode=jf;wi.exports.setChildBodyCode=Wf;function qx(n){let e=Gf(n);return new Function(e)()}function Gf(n){let e=Hl(n),t=Math.pow(2,n);return`
${Xf()}
${$f(n)}
${Vf(n)}
${jf(n)}
${Wf(n)}

function createQuadTree(options, random) {
  options = options || {};
  options.gravity = typeof options.gravity === 'number' ? options.gravity : -1;
  options.theta = typeof options.theta === 'number' ? options.theta : 0.8;

  var gravity = options.gravity;
  var updateQueue = [];
  var insertStack = new InsertStack();
  var theta = options.theta;

  var nodesCache = [];
  var currentInCache = 0;
  var root = newNode();

  return {
    insertBodies: insertBodies,

    /**
     * Gets root node if it is present
     */
    getRoot: function() {
      return root;
    },

    updateBodyForce: update,

    options: function(newOptions) {
      if (newOptions) {
        if (typeof newOptions.gravity === 'number') {
          gravity = newOptions.gravity;
        }
        if (typeof newOptions.theta === 'number') {
          theta = newOptions.theta;
        }

        return this;
      }

      return {
        gravity: gravity,
        theta: theta
      };
    }
  };

  function newNode() {
    // To avoid pressure on GC we reuse nodes.
    var node = nodesCache[currentInCache];
    if (node) {
${a("      node.")}
      node.body = null;
      node.mass = ${e("node.mass_{var} = ",{join:""})}0;
      ${e("node.min_{var} = node.max_{var} = ",{join:""})}0;
    } else {
      node = new QuadNode();
      nodesCache[currentInCache] = node;
    }

    ++currentInCache;
    return node;
  }

  function update(sourceBody) {
    var queue = updateQueue;
    var v;
    ${e("var d{var};",{indent:4})}
    var r; 
    ${e("var f{var} = 0;",{indent:4})}
    var queueLength = 1;
    var shiftIdx = 0;
    var pushIdx = 1;

    queue[0] = root;

    while (queueLength) {
      var node = queue[shiftIdx];
      var body = node.body;

      queueLength -= 1;
      shiftIdx += 1;
      var differentBody = (body !== sourceBody);
      if (body && differentBody) {
        // If the current node is a leaf node (and it is not source body),
        // calculate the force exerted by the current node on body, and add this
        // amount to body's net force.
        ${e("d{var} = body.pos.{var} - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Poor man's protection against zero distance.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }

        // This is standard gravitation force calculation but we divide
        // by r^3 to save two operations when normalizing force vector.
        v = gravity * body.mass * sourceBody.mass / (r * r * r);
        ${e("f{var} += v * d{var};",{indent:8})}
      } else if (differentBody) {
        // Otherwise, calculate the ratio s / r,  where s is the width of the region
        // represented by the internal node, and r is the distance between the body
        // and the node's center-of-mass
        ${e("d{var} = node.mass_{var} / node.mass - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Sorry about code duplication. I don't want to create many functions
          // right away. Just want to see performance first.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }
        // If s / r < θ, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.
        if ((node.max_${pi(0)} - node.min_${pi(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${e("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${o()}
        }
      }
    }

    ${e("sourceBody.force.{var} += f{var};",{indent:4})}
  }

  function insertBodies(bodies) {
    ${e("var {var}min = Number.MAX_VALUE;",{indent:4})}
    ${e("var {var}max = Number.MIN_VALUE;",{indent:4})}
    var i = bodies.length;

    // To reduce quad tree depth we are looking for exact bounding box of all particles.
    while (i--) {
      var pos = bodies[i].pos;
      ${e("if (pos.{var} < {var}min) {var}min = pos.{var};",{indent:6})}
      ${e("if (pos.{var} > {var}max) {var}max = pos.{var};",{indent:6})}
    }

    // Makes the bounds square.
    var maxSideLength = -Infinity;
    ${e("if ({var}max - {var}min > maxSideLength) maxSideLength = {var}max - {var}min ;",{indent:4})}

    currentInCache = 0;
    root = newNode();
    ${e("root.min_{var} = {var}min;",{indent:4})}
    ${e("root.max_{var} = {var}min + maxSideLength;",{indent:4})}

    i = bodies.length - 1;
    if (i >= 0) {
      root.body = bodies[i];
    }
    while (i--) {
      insert(bodies[i], root);
    }
  }

  function insert(newBody) {
    insertStack.reset();
    insertStack.push(root, newBody);

    while (!insertStack.isEmpty()) {
      var stackItem = insertStack.pop();
      var node = stackItem.node;
      var body = stackItem.body;

      if (!node.body) {
        // This is internal node. Update the total mass of the node and center-of-mass.
        ${e("var {var} = body.pos.{var};",{indent:8})}
        node.mass += body.mass;
        ${e("node.mass_{var} += body.mass * {var};",{indent:8})}

        // Recursively insert the body in the appropriate quadrant.
        // But first find the appropriate quadrant.
        var quadIdx = 0; // Assume we are in the 0's quad.
        ${e("var min_{var} = node.min_{var};",{indent:8})}
        ${e("var max_{var} = (min_{var} + node.max_{var}) / 2;",{indent:8})}

${r(8)}

        var child = getChild(node, quadIdx);

        if (!child) {
          // The node is internal but this quadrant is not taken. Add
          // subnode to it.
          child = newNode();
          ${e("child.min_{var} = min_{var};",{indent:10})}
          ${e("child.max_{var} = max_{var};",{indent:10})}
          child.body = body;

          setChild(node, quadIdx, child);
        } else {
          // continue searching in this quadrant.
          insertStack.push(child, body);
        }
      } else {
        // We are trying to add to the leaf node.
        // We have to convert current leaf into internal node
        // and continue adding two nodes.
        var oldBody = node.body;
        node.body = null; // internal nodes do not cary bodies

        if (isSamePosition(oldBody.pos, body.pos)) {
          // Prevent infinite subdivision by bumping one node
          // anywhere in this quadrant
          var retriesCount = 3;
          do {
            var offset = random.nextDouble();
            ${e("var d{var} = (node.max_{var} - node.min_{var}) * offset;",{indent:12})}

            ${e("oldBody.pos.{var} = node.min_{var} + d{var};",{indent:12})}
            retriesCount -= 1;
            // Make sure we don't bump it out of the box. If we do, next iteration should fix it
          } while (retriesCount > 0 && isSamePosition(oldBody.pos, body.pos));

          if (retriesCount === 0 && isSamePosition(oldBody.pos, body.pos)) {
            // This is very bad, we ran out of precision.
            // if we do not return from the method we'll get into
            // infinite loop here. So we sacrifice correctness of layout, and keep the app running
            // Next layout iteration should get larger bounding box in the first step and fix this
            return;
          }
        }
        // Next iteration should subdivide node further.
        insertStack.push(node, oldBody);
        insertStack.push(node, body);
      }
    }
  }
}
return createQuadTree;

`;function r(s){let l=[],c=Array(s+1).join(" ");for(let u=0;u<n;++u)l.push(c+`if (${pi(u)} > max_${pi(u)}) {`),l.push(c+`  quadIdx = quadIdx + ${Math.pow(2,u)};`),l.push(c+`  min_${pi(u)} = max_${pi(u)};`),l.push(c+`  max_${pi(u)} = node.max_${pi(u)};`),l.push(c+"}");return l.join(`
`)}function o(){let s=Array(11).join(" "),l=[];for(let c=0;c<t;++c)l.push(s+`if (node.quad${c}) {`),l.push(s+`  queue[pushIdx] = node.quad${c};`),l.push(s+"  queueLength += 1;"),l.push(s+"  pushIdx += 1;"),l.push(s+"}");return l.join(`
`)}function a(s){let l=[];for(let c=0;c<t;++c)l.push(`${s}quad${c} = null;`);return l.join(`
`)}}function Vf(n){let e=Hl(n);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function Wf(n){var e=Math.pow(2,n);return`
function setChild(node, idx, child) {
  ${t()}
}`;function t(){let i=[];for(let r=0;r<e;++r){let o=r===0?"  ":"  else ";i.push(`${o}if (idx === ${r}) node.quad${r} = child;`)}return i.join(`
`)}}function jf(n){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let t=[],i=Math.pow(2,n);for(let r=0;r<i;++r)t.push(`  if (idx === ${r}) return node.quad${r};`);return t.join(`
`)}}function $f(n){let e=Hl(n),t=Math.pow(2,n);var i=`
function QuadNode() {
  // body stored inside this node. In quad tree only leaf nodes (by construction)
  // contain bodies:
  this.body = null;

  // Child nodes are stored in quads. Each quad is presented by number:
  // 0 | 1
  // -----
  // 2 | 3
${r("  this.")}

  // Total mass of current node
  this.mass = 0;

  // Center of mass coordinates
  ${e("this.mass_{var} = 0;",{indent:2})}

  // bounding box coordinates
  ${e("this.min_{var} = 0;",{indent:2})}
  ${e("this.max_{var} = 0;",{indent:2})}
}
`;return i;function r(o){let a=[];for(let s=0;s<t;++s)a.push(`${o}quad${s} = null;`);return a.join(`
`)}}function Xf(){return`
/**
 * Our implementation of QuadTree is non-recursive to avoid GC hit
 * This data structure represent stack of elements
 * which we are trying to insert into quad tree.
 */
function InsertStack () {
    this.stack = [];
    this.popIdx = 0;
}

InsertStack.prototype = {
    isEmpty: function() {
        return this.popIdx === 0;
    },
    push: function (node, body) {
        var item = this.stack[this.popIdx];
        if (!item) {
            // we are trying to avoid memory pressure: create new element
            // only when absolutely necessary
            this.stack[this.popIdx] = new InsertStackElement(node, body);
        } else {
            item.node = node;
            item.body = body;
        }
        ++this.popIdx;
    },
    pop: function () {
        if (this.popIdx > 0) {
            return this.stack[--this.popIdx];
        }
    },
    reset: function () {
        this.popIdx = 0;
    }
};

function InsertStackElement(node, body) {
    this.node = node; // QuadTree node
    this.body = body; // physical body which needs to be inserted to node
}
`}var Yx=wi.exports,Gl={exports:{}};Gl.exports=Zx;Gl.exports.generateFunctionBody=qf;const Kx=Br;function Zx(n){let e=qf(n);return new Function("bodies","settings","random",e)}function qf(n){let e=Kx(n);return`
  var boundingBox = {
    ${e("min_{var}: 0, max_{var}: 0,",{indent:4})}
  };

  return {
    box: boundingBox,

    update: updateBoundingBox,

    reset: resetBoundingBox,

    getBestNewPosition: function (neighbors) {
      var ${e("base_{var} = 0",{join:", "})};

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          let neighborPos = neighbors[i].pos;
          ${e("base_{var} += neighborPos.{var};",{indent:10})}
        }

        ${e("base_{var} /= neighbors.length;",{indent:8})}
      } else {
        ${e("base_{var} = (boundingBox.min_{var} + boundingBox.max_{var}) / 2;",{indent:8})}
      }

      var springLength = settings.springLength;
      return {
        ${e("{var}: base_{var} + (random.nextDouble() - 0.5) * springLength,",{indent:8})}
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;
    if (i === 0) return; // No bodies - no borders.

    ${e("var max_{var} = -Infinity;",{indent:4})}
    ${e("var min_{var} = Infinity;",{indent:4})}

    while(i--) {
      // this is O(n), it could be done faster with quadtree, if we check the root node bounds
      var bodyPos = bodies[i].pos;
      ${e("if (bodyPos.{var} < min_{var}) min_{var} = bodyPos.{var};",{indent:6})}
      ${e("if (bodyPos.{var} > max_{var}) max_{var} = bodyPos.{var};",{indent:6})}
    }

    ${e("boundingBox.min_{var} = min_{var};",{indent:4})}
    ${e("boundingBox.max_{var} = max_{var};",{indent:4})}
  }

  function resetBoundingBox() {
    ${e("boundingBox.min_{var} = boundingBox.max_{var} = 0;",{indent:4})}
  }
`}var Jx=Gl.exports,Vl={exports:{}};const Qx=Br;Vl.exports=eb;Vl.exports.generateCreateDragForceFunctionBody=Yf;function eb(n){let e=Yf(n);return new Function("options",e)}function Yf(n){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${Qx(n)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var tb=Vl.exports,Wl={exports:{}};const nb=Br;Wl.exports=ib;Wl.exports.generateCreateSpringForceFunctionBody=Kf;function ib(n){let e=Kf(n);return new Function("options","random",e)}function Kf(n){let e=nb(n);return`
  if (!Number.isFinite(options.springCoefficient)) throw new Error('Spring coefficient is not a number');
  if (!Number.isFinite(options.springLength)) throw new Error('Spring length is not a number');

  return {
    /**
     * Updates forces acting on a spring
     */
    update: function (spring) {
      var body1 = spring.from;
      var body2 = spring.to;
      var length = spring.length < 0 ? options.springLength : spring.length;
      ${e("var d{var} = body2.pos.{var} - body1.pos.{var};",{indent:6})}
      var r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

      if (r === 0) {
        ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
      }

      var d = r - length;
      var coefficient = ((spring.coefficient > 0) ? spring.coefficient : options.springCoefficient) * d / r;

      ${e("body1.force.{var} += coefficient * d{var}",{indent:6})};
      body1.springCount += 1;
      body1.springLength += r;

      ${e("body2.force.{var} -= coefficient * d{var}",{indent:6})};
      body2.springCount += 1;
      body2.springLength += r;
    }
  };
`}var rb=Wl.exports,jl={exports:{}};const ob=Br;jl.exports=ab;jl.exports.generateIntegratorFunctionBody=Zf;function ab(n){let e=Zf(n);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function Zf(n){let e=ob(n);return`
  var length = bodies.length;
  if (length === 0) return 0;

  ${e("var d{var} = 0, t{var} = 0;",{indent:2})}

  for (var i = 0; i < length; ++i) {
    var body = bodies[i];
    if (body.isPinned) continue;

    if (adaptiveTimeStepWeight && body.springCount) {
      timeStep = (adaptiveTimeStepWeight * body.springLength/body.springCount);
    }

    var coeff = timeStep / body.mass;

    ${e("body.velocity.{var} += coeff * body.force.{var};",{indent:4})}
    ${e("var v{var} = body.velocity.{var};",{indent:4})}
    var v = Math.sqrt(${e("v{var} * v{var}",{join:" + "})});

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      ${e("body.velocity.{var} = v{var} / v;",{indent:6})}
    }

    ${e("d{var} = timeStep * body.velocity.{var};",{indent:4})}

    ${e("body.pos.{var} += d{var};",{indent:4})}

    ${e("t{var} += Math.abs(d{var});",{indent:4})}
  }

  return (${e("t{var} * t{var}",{join:" + "})})/length;
`}var sb=jl.exports,Ps,Gu;function lb(){if(Gu)return Ps;Gu=1,Ps=n;function n(e,t,i,r){this.from=e,this.to=t,this.length=i,this.coefficient=r}return Ps}var Ls,Vu;function cb(){if(Vu)return Ls;Vu=1,Ls=n;function n(e,t){var i;if(e||(e={}),t){for(i in t)if(t.hasOwnProperty(i)){var r=e.hasOwnProperty(i),o=typeof t[i],a=!r||typeof e[i]!==o;a?e[i]=t[i]:o==="object"&&(e[i]=n(e[i],t[i]))}}return e}return Ls}var Jr={exports:{}},Wu;function ub(){if(Wu)return Jr.exports;Wu=1,Jr.exports=n,Jr.exports.random=n,Jr.exports.randomIterator=s;function n(l){var c=typeof l=="number"?l:+new Date;return new e(c)}function e(l){this.seed=l}e.prototype.next=a,e.prototype.nextDouble=o,e.prototype.uniform=o,e.prototype.gaussian=t;function t(){var l,c,u;do c=this.nextDouble()*2-1,u=this.nextDouble()*2-1,l=c*c+u*u;while(l>=1||l===0);return c*Math.sqrt(-2*Math.log(l)/l)}e.prototype.levy=i;function i(){var l=1.5,c=Math.pow(r(1+l)*Math.sin(Math.PI*l/2)/(r((1+l)/2)*l*Math.pow(2,(l-1)/2)),1/l);return this.gaussian()*c/Math.pow(Math.abs(this.gaussian()),1/l)}function r(l){return Math.sqrt(2*Math.PI/l)*Math.pow(1/Math.E*(l+1/(12*l-1/(10*l))),l)}function o(){var l=this.seed;return l=l+2127912214+(l<<12)&4294967295,l=(l^3345072700^l>>>19)&4294967295,l=l+374761393+(l<<5)&4294967295,l=(l+3550635116^l<<9)&4294967295,l=l+4251993797+(l<<3)&4294967295,l=(l^3042594569^l>>>16)&4294967295,this.seed=l,(l&268435455)/268435456}function a(l){return Math.floor(this.nextDouble()*l)}function s(l,c){var u=c||n();if(typeof u.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:f,shuffle:h};function h(){var p,g,_;for(p=l.length-1;p>0;--p)g=u.next(p+1),_=l[g],l[g]=l[p],l[p]=_;return l}function f(p){var g,_,m;for(g=l.length-1;g>0;--g)_=u.next(g+1),m=l[_],l[_]=l[g],l[g]=m,p(m);l.length&&p(l[0])}}return Jr.exports}var Jf=_b,hb=Xx,fb=Yx,db=Jx,pb=tb,mb=rb,gb=sb,ju={};function _b(n){var e=lb(),t=cb(),i=Bl;if(n){if(n.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(n.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}n=t(n,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var r=ju[n.dimensions];if(!r){var o=n.dimensions;r={Body:hb(o,n.debug),createQuadTree:fb(o),createBounds:db(o),createDragForce:pb(o),createSpringForce:mb(o),integrate:gb(o)},ju[o]=r}var a=r.Body,s=r.createQuadTree,l=r.createBounds,c=r.createDragForce,u=r.createSpringForce,h=r.integrate,f=O=>new a(O),p=ub().random(42),g=[],_=[],m=s(n,p),d=l(g,n,p),M=u(n,p),y=c(n),b=0,x=[],E=new Map,R=0;A("nbody",G),A("spring",D);var C={bodies:g,quadTree:m,springs:_,settings:n,addForce:A,removeForce:$,getForces:q,step:function(){for(var O=0;O<x.length;++O)x[O](R);var V=h(g,n.timeStep,n.adaptiveTimeStepWeight);return R+=1,V},addBody:function(O){if(!O)throw new Error("Body is required");return g.push(O),O},addBodyAt:function(O){if(!O)throw new Error("Body position is required");var V=f(O);return g.push(V),V},removeBody:function(O){if(O){var V=g.indexOf(O);if(!(V<0))return g.splice(V,1),g.length===0&&d.reset(),!0}},addSpring:function(O,V,Q,re){if(!O||!V)throw new Error("Cannot add null spring to force simulator");typeof Q!="number"&&(Q=-1);var pe=new e(O,V,Q,re>=0?re:-1);return _.push(pe),pe},getTotalMovement:function(){return b},removeSpring:function(O){if(O){var V=_.indexOf(O);if(V>-1)return _.splice(V,1),!0}},getBestNewBodyPosition:function(O){return d.getBestNewPosition(O)},getBBox:S,getBoundingBox:S,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(O){return O!==void 0?(n.gravity=O,m.options({gravity:O}),this):n.gravity},theta:function(O){return O!==void 0?(n.theta=O,m.options({theta:O}),this):n.theta},random:p};return vb(n,C),i(C),C;function S(){return d.update(),d.box}function A(O,V){if(E.has(O))throw new Error("Force "+O+" is already added");E.set(O,V),x.push(V)}function $(O){var V=x.indexOf(E.get(O));V<0||(x.splice(V,1),E.delete(O))}function q(){return E}function G(){if(g.length!==0){m.insertBodies(g);for(var O=g.length;O--;){var V=g[O];V.isPinned||(V.reset(),m.updateBodyForce(V),y.update(V))}}}function D(){for(var O=_.length;O--;)M.update(_[O])}}function vb(n,e){for(var t in n)yb(n,e,t)}function yb(n,e,t){if(n.hasOwnProperty(t)&&typeof e[t]!="function"){var i=Number.isFinite(n[t]);i?e[t]=function(r){if(r!==void 0){if(!Number.isFinite(r))throw new Error("Value of "+t+" should be a valid number.");return n[t]=r,e}return n[t]}:e[t]=function(r){return r!==void 0?(n[t]=r,e):n[t]}}}zl.exports=bb;zl.exports.simulator=Jf;var xb=Bl;function bb(n,e){if(!n)throw new Error("Graph structure cannot be undefined");var t=e&&e.createSimulator||Jf,i=t(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var r=n.version>19?G:q;e&&typeof e.nodeMass=="function"&&(r=e.nodeMass);var o=new Map,a={},s=0,l=i.settings.springTransform||Mb;y(),m();var c=!1,u={step:function(){if(s===0)return h(!0),!0;var D=i.step();u.lastMove=D,u.fire("step");var O=D/s,V=O<=.01;return h(V),V},getNodePosition:function(D){return $(D).pos},setNodePosition:function(D){var O=$(D);O.setPosition.apply(O,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(D){var O=a[D];if(O)return{from:O.from.pos,to:O.to.pos}},getGraphRect:function(){return i.getBBox()},forEachBody:f,pinNode:function(D,O){var V=$(D.id);V.isPinned=!!O},isNodePinned:function(D){return $(D.id).isPinned},dispose:function(){n.off("changed",M),u.fire("disposed")},getBody:_,getSpring:g,getForceVectorLength:p,simulator:i,graph:n,lastMove:0};return xb(u),u;function h(D){c!==D&&(c=D,d(D))}function f(D){o.forEach(D)}function p(){var D=0,O=0;return f(function(V){D+=Math.abs(V.force.x),O+=Math.abs(V.force.y)}),Math.sqrt(D*D+O*O)}function g(D,O){var V;if(O===void 0)typeof D!="object"?V=D:V=D.id;else{var Q=n.hasLink(D,O);if(!Q)return;V=Q.id}return a[V]}function _(D){return o.get(D)}function m(){n.on("changed",M)}function d(D){u.fire("stable",D)}function M(D){for(var O=0;O<D.length;++O){var V=D[O];V.changeType==="add"?(V.node&&b(V.node.id),V.link&&E(V.link)):V.changeType==="remove"&&(V.node&&x(V.node),V.link&&R(V.link))}s=n.getNodesCount()}function y(){s=0,n.forEachNode(function(D){b(D.id),s+=1}),n.forEachLink(E)}function b(D){var O=o.get(D);if(!O){var V=n.getNode(D);if(!V)throw new Error("initBody() was called with unknown node id");var Q=V.position;if(!Q){var re=C(V);Q=i.getBestNewBodyPosition(re)}O=i.addBodyAt(Q),O.id=D,o.set(D,O),S(D),A(V)&&(O.isPinned=!0)}}function x(D){var O=D.id,V=o.get(O);V&&(o.delete(O),i.removeBody(V))}function E(D){S(D.fromId),S(D.toId);var O=o.get(D.fromId),V=o.get(D.toId),Q=i.addSpring(O,V,D.length);l(D,Q),a[D.id]=Q}function R(D){var O=a[D.id];if(O){var V=n.getNode(D.fromId),Q=n.getNode(D.toId);V&&S(V.id),Q&&S(Q.id),delete a[D.id],i.removeSpring(O)}}function C(D){var O=[];if(!D.links)return O;for(var V=Math.min(D.links.length,2),Q=0;Q<V;++Q){var re=D.links[Q],pe=re.fromId!==D.id?o.get(re.fromId):o.get(re.toId);pe&&pe.pos&&O.push(pe)}return O}function S(D){var O=o.get(D);if(O.mass=r(D),Number.isNaN(O.mass))throw new Error("Node mass should be a number")}function A(D){return D&&(D.isPinned||D.data&&D.data.isPinned)}function $(D){var O=o.get(D);return O||(b(D),O=o.get(D)),O}function q(D){var O=n.getLinks(D);return O?1+O.length/3:1}function G(D){var O=n.getLinks(D);return O?1+O.size/3:1}}function Mb(){}var Sb=zl.exports;const wb=Uf(Sb);var Eb=typeof global=="object"&&global&&global.Object===Object&&global;const Tb=Eb;var Ab=typeof self=="object"&&self&&self.Object===Object&&self,Cb=Tb||Ab||Function("return this")();const Qf=Cb;var Rb=Qf.Symbol;const Ta=Rb;var ed=Object.prototype,Pb=ed.hasOwnProperty,Lb=ed.toString,Qr=Ta?Ta.toStringTag:void 0;function Ob(n){var e=Pb.call(n,Qr),t=n[Qr];try{n[Qr]=void 0;var i=!0}catch{}var r=Lb.call(n);return i&&(e?n[Qr]=t:delete n[Qr]),r}var Db=Object.prototype,Ib=Db.toString;function Nb(n){return Ib.call(n)}var Ub="[object Null]",Fb="[object Undefined]",$u=Ta?Ta.toStringTag:void 0;function kb(n){return n==null?n===void 0?Fb:Ub:$u&&$u in Object(n)?Ob(n):Nb(n)}function Bb(n){return n!=null&&typeof n=="object"}var zb="[object Symbol]";function Hb(n){return typeof n=="symbol"||Bb(n)&&kb(n)==zb}var Gb=/\s/;function Vb(n){for(var e=n.length;e--&&Gb.test(n.charAt(e)););return e}var Wb=/^\s+/;function jb(n){return n&&n.slice(0,Vb(n)+1).replace(Wb,"")}function nl(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var Xu=0/0,$b=/^[-+]0x[0-9a-f]+$/i,Xb=/^0b[01]+$/i,qb=/^0o[0-7]+$/i,Yb=parseInt;function qu(n){if(typeof n=="number")return n;if(Hb(n))return Xu;if(nl(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=nl(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=jb(n);var t=Xb.test(n);return t||qb.test(n)?Yb(n.slice(2),t?2:8):$b.test(n)?Xu:+n}var Kb=function(){return Qf.Date.now()};const Os=Kb;var Zb="Expected a function",Jb=Math.max,Qb=Math.min;function eM(n,e,t){var i,r,o,a,s,l,c=0,u=!1,h=!1,f=!0;if(typeof n!="function")throw new TypeError(Zb);e=qu(e)||0,nl(t)&&(u=!!t.leading,h="maxWait"in t,o=h?Jb(qu(t.maxWait)||0,e):o,f="trailing"in t?!!t.trailing:f);function p(E){var R=i,C=r;return i=r=void 0,c=E,a=n.apply(C,R),a}function g(E){return c=E,s=setTimeout(d,e),u?p(E):a}function _(E){var R=E-l,C=E-c,S=e-R;return h?Qb(S,o-C):S}function m(E){var R=E-l,C=E-c;return l===void 0||R>=e||R<0||h&&C>=o}function d(){var E=Os();if(m(E))return M(E);s=setTimeout(d,_(E))}function M(E){return s=void 0,f&&i?p(E):(i=r=void 0,a)}function y(){s!==void 0&&clearTimeout(s),c=0,i=l=r=s=void 0}function b(){return s===void 0?a:M(Os())}function x(){var E=Os(),R=m(E);if(i=arguments,r=this,l=E,R){if(s===void 0)return g(l);if(h)return clearTimeout(s),s=setTimeout(d,e),p(l)}return s===void 0&&(s=setTimeout(d,e)),a}return x.cancel=y,x.flush=b,x}function tM(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,a,s=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=o.call(t)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw r}}return s}}function nM(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Yu(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,cM(i.key),i)}}function iM(n,e,t){return e&&Yu(n.prototype,e),t&&Yu(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function rM(n,e){return oM(n)||tM(n,e)||aM(n,e)||sM()}function oM(n){if(Array.isArray(n))return n}function aM(n,e){if(n){if(typeof n=="string")return Ku(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ku(n,e)}}function Ku(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function sM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lM(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function cM(n){var e=lM(n,"string");return typeof e=="symbol"?e:String(e)}var uM=iM(function n(e,t){var i=t.default,r=i===void 0?null:i,o=t.triggerUpdate,a=o===void 0?!0:o,s=t.onChange,l=s===void 0?function(c,u){}:s;nM(this,n),this.name=e,this.defaultVal=r,this.triggerUpdate=a,this.onChange=l});function $l(n){var e=n.stateInit,t=e===void 0?function(){return{}}:e,i=n.props,r=i===void 0?{}:i,o=n.methods,a=o===void 0?{}:o,s=n.aliases,l=s===void 0?{}:s,c=n.init,u=c===void 0?function(){}:c,h=n.update,f=h===void 0?function(){}:h,p=Object.keys(r).map(function(g){return new uM(g,r[g])});return function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},_=Object.assign({},t instanceof Function?t(g):t,{initialised:!1}),m={};function d(b){return M(b,g),y(),d}var M=function(x,E){u.call(d,x,_,E),_.initialised=!0},y=eM(function(){_.initialised&&(f.call(d,_,m),m={})},1);return p.forEach(function(b){d[b.name]=x(b);function x(E){var R=E.name,C=E.triggerUpdate,S=C===void 0?!1:C,A=E.onChange,$=A===void 0?function(D,O){}:A,q=E.defaultVal,G=q===void 0?null:q;return function(D){var O=_[R];if(!arguments.length)return O;var V=D===void 0?G:D;return _[R]=V,$.call(d,V,_,O),!m.hasOwnProperty(R)&&(m[R]=O),S&&y(),d}}}),Object.keys(a).forEach(function(b){d[b]=function(){for(var x,E=arguments.length,R=new Array(E),C=0;C<E;C++)R[C]=arguments[C];return(x=a[b]).call.apply(x,[d,_].concat(R))}}),Object.entries(l).forEach(function(b){var x=rM(b,2),E=x[0],R=x[1];return d[E]=d[R]}),d.resetProps=function(){return p.forEach(function(b){d[b.name](b.defaultVal)}),d},d.resetProps(),_._rerender=y,d}}var ut=function(n){return n instanceof Function?n:typeof n=="string"?function(e){return e[n]}:function(e){return n}};class Zu extends Map{constructor(e,t=dM){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[i,r]of e)this.set(i,r)}get(e){return super.get(Ju(this,e))}has(e){return super.has(Ju(this,e))}set(e,t){return super.set(hM(this,e),t)}delete(e){return super.delete(fM(this,e))}}function Ju({_intern:n,_key:e},t){const i=e(t);return n.has(i)?n.get(i):t}function hM({_intern:n,_key:e},t){const i=e(t);return n.has(i)?n.get(i):(n.set(i,t),t)}function fM({_intern:n,_key:e},t){const i=e(t);return n.has(i)&&(t=n.get(i),n.delete(i)),t}function dM(n){return n!==null&&typeof n=="object"?n.valueOf():n}function pM(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t<i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t<r||t===void 0&&r>=r)&&(t=r)}return t}function mM(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t>i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t>r||t===void 0&&r>=r)&&(t=r)}return t}function gM(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,a,s=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=o.call(t)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw r}}return s}}function _M(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function vM(n,e){if(n==null)return{};var t=_M(n,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function yM(n,e){return MM(n)||gM(n,e)||td(n,e)||EM()}function xM(n){return bM(n)||SM(n)||td(n)||wM()}function bM(n){if(Array.isArray(n))return il(n)}function MM(n){if(Array.isArray(n))return n}function SM(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function td(n,e){if(n){if(typeof n=="string")return il(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return il(n,e)}}function il(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function wM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function EM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function TM(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function AM(n){var e=TM(n,"string");return typeof e=="symbol"?e:String(e)}var Qu=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,r=(e instanceof Array?e.length?e:[void 0]:[e]).map(function(s){return{keyAccessor:s,isProp:!(s instanceof Function)}}),o=n.reduce(function(s,l){var c=s,u=l;return r.forEach(function(h,f){var p=h.keyAccessor,g=h.isProp,_;if(g){var m=u,d=m[p],M=vM(m,[p].map(AM));_=d,u=M}else _=p(u,f);f+1<r.length?(c.hasOwnProperty(_)||(c[_]={}),c=c[_]):t?(c.hasOwnProperty(_)||(c[_]=[]),c[_].push(u)):c[_]=u}),s},{});t instanceof Function&&function s(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;c===r.length?Object.keys(l).forEach(function(u){return l[u]=t(l[u])}):Object.values(l).forEach(function(u){return s(u,c+1)})}(o);var a=o;return i&&(a=[],function s(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];c.length===r.length?a.push({keys:c,vals:l}):Object.entries(l).forEach(function(u){var h=yM(u,2),f=h[0],p=h[1];return s(p,[].concat(xM(c),[f]))})}(o),e instanceof Array&&e.length===0&&a.length===1&&(a[0].keys=[])),a};function CM(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,a,s=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=o.call(t)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw r}}return s}}function eh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function RM(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?eh(Object(t),!0).forEach(function(i){nd(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):eh(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function nd(n,e,t){return e=kM(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function PM(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function LM(n,e){if(n==null)return{};var t=PM(n,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function id(n,e){return DM(n)||CM(n,e)||rd(n,e)||UM()}function Aa(n){return OM(n)||IM(n)||rd(n)||NM()}function OM(n){if(Array.isArray(n))return rl(n)}function DM(n){if(Array.isArray(n))return n}function IM(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function rd(n,e){if(n){if(typeof n=="string")return rl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return rl(n,e)}}function rl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function NM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FM(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function kM(n){var e=FM(n,"string");return typeof e=="symbol"?e:String(e)}var BM=["createObj","updateObj","exitObj","objBindAttr","dataBindAttr"];function zM(n,e,t){var i={enter:[],update:[],exit:[]};if(t){var a=Qu(n,t,!1),s=Qu(e,t,!1),l=Object.assign({},a,s);Object.entries(l).forEach(function(c){var u=id(c,2),h=u[0],f=u[1],p=a.hasOwnProperty(h)?s.hasOwnProperty(h)?"update":"exit":"enter";i[p].push(p==="update"?[a[h],s[h]]:f)})}else{var r=new Set(n),o=new Set(e);new Set([].concat(Aa(r),Aa(o))).forEach(function(c){var u=r.has(c)?o.has(c)?"update":"exit":"enter";i[u].push(u==="update"?[c,c]:c)})}return i}function HM(n,e,t){var i=t.objBindAttr,r=i===void 0?"__obj":i,o=t.dataBindAttr,a=o===void 0?"__data":o,s=t.idAccessor,l=t.purge,c=l===void 0?!1:l,u=function(m){return m.hasOwnProperty(a)},h=e.filter(function(_){return!u(_)}),f=e.filter(u).map(function(_){return _[a]}),p=n,g=c?{enter:p,exit:f,update:[]}:zM(f,p,s);return g.update=g.update.map(function(_){var m=id(_,2),d=m[0],M=m[1];return d!==M&&(M[r]=d[r],M[r][a]=M),M}),g.exit=g.exit.concat(h.map(function(_){return nd({},r,_)})),g}function GM(n,e,t,i,r){var o=r.createObj,a=o===void 0?function(C){return{}}:o,s=r.updateObj,l=s===void 0?function(C,S){}:s,c=r.exitObj,u=c===void 0?function(C){}:c,h=r.objBindAttr,f=h===void 0?"__obj":h,p=r.dataBindAttr,g=p===void 0?"__data":p,_=LM(r,BM),m=HM(n,e,RM({objBindAttr:f,dataBindAttr:g},_)),d=m.enter,M=m.update,y=m.exit;y.forEach(function(C){var S=C[f];delete C[f],u(S),i(S)});var b=E(d),x=[].concat(Aa(d),Aa(M));R(x),b.forEach(t);function E(C){var S=[];return C.forEach(function(A){var $=a(A);$&&($[g]=A,A[f]=$,S.push($))}),S}function R(C){C.forEach(function(S){var A=S[f];A&&(A[g]=S,l(A,S))})}}function VM(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}const th=Symbol("implicit");function od(){var n=new Zu,e=[],t=[],i=th;function r(o){let a=n.get(o);if(a===void 0){if(i!==th)return i;n.set(o,a=e.push(o)-1)}return t[a%t.length]}return r.domain=function(o){if(!arguments.length)return e.slice();e=[],n=new Zu;for(const a of o)n.has(a)||n.set(a,e.push(a)-1);return r},r.range=function(o){return arguments.length?(t=Array.from(o),r):t.slice()},r.unknown=function(o){return arguments.length?(i=o,r):i},r.copy=function(){return od(e,t).unknown(i)},VM.apply(r,arguments),r}function WM(n){for(var e=n.length/6|0,t=new Array(e),i=0;i<e;)t[i]="#"+n.slice(i*6,++i*6);return t}const jM=WM("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");function Ca(n){"@babel/helpers - typeof";return Ca=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ca(n)}var $M=/^\s+/,XM=/\s+$/;function ze(n,e){if(n=n||"",e=e||{},n instanceof ze)return n;if(!(this instanceof ze))return new ze(n,e);var t=qM(n);this._originalInput=n,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}ze.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),t,i,r,o,a,s;return t=e.r/255,i=e.g/255,r=e.b/255,t<=.03928?o=t/12.92:o=Math.pow((t+.055)/1.055,2.4),i<=.03928?a=i/12.92:a=Math.pow((i+.055)/1.055,2.4),r<=.03928?s=r/12.92:s=Math.pow((r+.055)/1.055,2.4),.2126*o+.7152*a+.0722*s},setAlpha:function(e){return this._a=ad(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=ih(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=ih(this._r,this._g,this._b),t=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.v*100);return this._a==1?"hsv("+t+", "+i+"%, "+r+"%)":"hsva("+t+", "+i+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=nh(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=nh(this._r,this._g,this._b),t=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.l*100);return this._a==1?"hsl("+t+", "+i+"%, "+r+"%)":"hsla("+t+", "+i+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return rh(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return JM(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(St(this._r,255)*100)+"%",g:Math.round(St(this._g,255)*100)+"%",b:Math.round(St(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(St(this._r,255)*100)+"%, "+Math.round(St(this._g,255)*100)+"%, "+Math.round(St(this._b,255)*100)+"%)":"rgba("+Math.round(St(this._r,255)*100)+"%, "+Math.round(St(this._g,255)*100)+"%, "+Math.round(St(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:uS[rh(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var t="#"+oh(this._r,this._g,this._b,this._a),i=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=ze(e);i="#"+oh(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+i+")"},toString:function(e){var t=!!e;e=e||this._format;var i=!1,r=this._a<1&&this._a>=0,o=!t&&r&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return o?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),i||this.toHexString())},clone:function(){return ze(this.toString())},_applyModification:function(e,t){var i=e.apply(null,[this].concat([].slice.call(t)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(nS,arguments)},brighten:function(){return this._applyModification(iS,arguments)},darken:function(){return this._applyModification(rS,arguments)},desaturate:function(){return this._applyModification(QM,arguments)},saturate:function(){return this._applyModification(eS,arguments)},greyscale:function(){return this._applyModification(tS,arguments)},spin:function(){return this._applyModification(oS,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(lS,arguments)},complement:function(){return this._applyCombination(aS,arguments)},monochromatic:function(){return this._applyCombination(cS,arguments)},splitcomplement:function(){return this._applyCombination(sS,arguments)},triad:function(){return this._applyCombination(ah,[3])},tetrad:function(){return this._applyCombination(ah,[4])}};ze.fromRatio=function(n,e){if(Ca(n)=="object"){var t={};for(var i in n)n.hasOwnProperty(i)&&(i==="a"?t[i]=n[i]:t[i]=co(n[i]));n=t}return ze(n,e)};function qM(n){var e={r:0,g:0,b:0},t=1,i=null,r=null,o=null,a=!1,s=!1;return typeof n=="string"&&(n=pS(n)),Ca(n)=="object"&&(Yn(n.r)&&Yn(n.g)&&Yn(n.b)?(e=YM(n.r,n.g,n.b),a=!0,s=String(n.r).substr(-1)==="%"?"prgb":"rgb"):Yn(n.h)&&Yn(n.s)&&Yn(n.v)?(i=co(n.s),r=co(n.v),e=ZM(n.h,i,r),a=!0,s="hsv"):Yn(n.h)&&Yn(n.s)&&Yn(n.l)&&(i=co(n.s),o=co(n.l),e=KM(n.h,i,o),a=!0,s="hsl"),n.hasOwnProperty("a")&&(t=n.a)),t=ad(t),{ok:a,format:n.format||s,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}function YM(n,e,t){return{r:St(n,255)*255,g:St(e,255)*255,b:St(t,255)*255}}function nh(n,e,t){n=St(n,255),e=St(e,255),t=St(t,255);var i=Math.max(n,e,t),r=Math.min(n,e,t),o,a,s=(i+r)/2;if(i==r)o=a=0;else{var l=i-r;switch(a=s>.5?l/(2-i-r):l/(i+r),i){case n:o=(e-t)/l+(e<t?6:0);break;case e:o=(t-n)/l+2;break;case t:o=(n-e)/l+4;break}o/=6}return{h:o,s:a,l:s}}function KM(n,e,t){var i,r,o;n=St(n,360),e=St(e,100),t=St(t,100);function a(c,u,h){return h<0&&(h+=1),h>1&&(h-=1),h<1/6?c+(u-c)*6*h:h<1/2?u:h<2/3?c+(u-c)*(2/3-h)*6:c}if(e===0)i=r=o=t;else{var s=t<.5?t*(1+e):t+e-t*e,l=2*t-s;i=a(l,s,n+1/3),r=a(l,s,n),o=a(l,s,n-1/3)}return{r:i*255,g:r*255,b:o*255}}function ih(n,e,t){n=St(n,255),e=St(e,255),t=St(t,255);var i=Math.max(n,e,t),r=Math.min(n,e,t),o,a,s=i,l=i-r;if(a=i===0?0:l/i,i==r)o=0;else{switch(i){case n:o=(e-t)/l+(e<t?6:0);break;case e:o=(t-n)/l+2;break;case t:o=(n-e)/l+4;break}o/=6}return{h:o,s:a,v:s}}function ZM(n,e,t){n=St(n,360)*6,e=St(e,100),t=St(t,100);var i=Math.floor(n),r=n-i,o=t*(1-e),a=t*(1-r*e),s=t*(1-(1-r)*e),l=i%6,c=[t,a,o,o,s,t][l],u=[s,t,t,a,o,o][l],h=[o,o,s,t,t,a][l];return{r:c*255,g:u*255,b:h*255}}function rh(n,e,t,i){var r=[An(Math.round(n).toString(16)),An(Math.round(e).toString(16)),An(Math.round(t).toString(16))];return i&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function JM(n,e,t,i,r){var o=[An(Math.round(n).toString(16)),An(Math.round(e).toString(16)),An(Math.round(t).toString(16)),An(sd(i))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function oh(n,e,t,i){var r=[An(sd(i)),An(Math.round(n).toString(16)),An(Math.round(e).toString(16)),An(Math.round(t).toString(16))];return r.join("")}ze.equals=function(n,e){return!n||!e?!1:ze(n).toRgbString()==ze(e).toRgbString()};ze.random=function(){return ze.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function QM(n,e){e=e===0?0:e||10;var t=ze(n).toHsl();return t.s-=e/100,t.s=Ga(t.s),ze(t)}function eS(n,e){e=e===0?0:e||10;var t=ze(n).toHsl();return t.s+=e/100,t.s=Ga(t.s),ze(t)}function tS(n){return ze(n).desaturate(100)}function nS(n,e){e=e===0?0:e||10;var t=ze(n).toHsl();return t.l+=e/100,t.l=Ga(t.l),ze(t)}function iS(n,e){e=e===0?0:e||10;var t=ze(n).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),ze(t)}function rS(n,e){e=e===0?0:e||10;var t=ze(n).toHsl();return t.l-=e/100,t.l=Ga(t.l),ze(t)}function oS(n,e){var t=ze(n).toHsl(),i=(t.h+e)%360;return t.h=i<0?360+i:i,ze(t)}function aS(n){var e=ze(n).toHsl();return e.h=(e.h+180)%360,ze(e)}function ah(n,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var t=ze(n).toHsl(),i=[ze(n)],r=360/e,o=1;o<e;o++)i.push(ze({h:(t.h+o*r)%360,s:t.s,l:t.l}));return i}function sS(n){var e=ze(n).toHsl(),t=e.h;return[ze(n),ze({h:(t+72)%360,s:e.s,l:e.l}),ze({h:(t+216)%360,s:e.s,l:e.l})]}function lS(n,e,t){e=e||6,t=t||30;var i=ze(n).toHsl(),r=360/t,o=[ze(n)];for(i.h=(i.h-(r*e>>1)+720)%360;--e;)i.h=(i.h+r)%360,o.push(ze(i));return o}function cS(n,e){e=e||6;for(var t=ze(n).toHsv(),i=t.h,r=t.s,o=t.v,a=[],s=1/e;e--;)a.push(ze({h:i,s:r,v:o})),o=(o+s)%1;return a}ze.mix=function(n,e,t){t=t===0?0:t||50;var i=ze(n).toRgb(),r=ze(e).toRgb(),o=t/100,a={r:(r.r-i.r)*o+i.r,g:(r.g-i.g)*o+i.g,b:(r.b-i.b)*o+i.b,a:(r.a-i.a)*o+i.a};return ze(a)};ze.readability=function(n,e){var t=ze(n),i=ze(e);return(Math.max(t.getLuminance(),i.getLuminance())+.05)/(Math.min(t.getLuminance(),i.getLuminance())+.05)};ze.isReadable=function(n,e,t){var i=ze.readability(n,e),r,o;switch(o=!1,r=mS(t),r.level+r.size){case"AAsmall":case"AAAlarge":o=i>=4.5;break;case"AAlarge":o=i>=3;break;case"AAAsmall":o=i>=7;break}return o};ze.mostReadable=function(n,e,t){var i=null,r=0,o,a,s,l;t=t||{},a=t.includeFallbackColors,s=t.level,l=t.size;for(var c=0;c<e.length;c++)o=ze.readability(n,e[c]),o>r&&(r=o,i=ze(e[c]));return ze.isReadable(n,i,{level:s,size:l})||!a?i:(t.includeFallbackColors=!1,ze.mostReadable(n,["#fff","#000"],t))};var ol=ze.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},uS=ze.hexNames=hS(ol);function hS(n){var e={};for(var t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function ad(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function St(n,e){fS(n)&&(n="100%");var t=dS(n);return n=Math.min(e,Math.max(0,parseFloat(n))),t&&(n=parseInt(n*e,10)/100),Math.abs(n-e)<1e-6?1:n%e/parseFloat(e)}function Ga(n){return Math.min(1,Math.max(0,n))}function an(n){return parseInt(n,16)}function fS(n){return typeof n=="string"&&n.indexOf(".")!=-1&&parseFloat(n)===1}function dS(n){return typeof n=="string"&&n.indexOf("%")!=-1}function An(n){return n.length==1?"0"+n:""+n}function co(n){return n<=1&&(n=n*100+"%"),n}function sd(n){return Math.round(parseFloat(n)*255).toString(16)}function sh(n){return an(n)/255}var Sn=function(){var n="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",t="(?:"+e+")|(?:"+n+")",i="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+i),rgba:new RegExp("rgba"+r),hsl:new RegExp("hsl"+i),hsla:new RegExp("hsla"+r),hsv:new RegExp("hsv"+i),hsva:new RegExp("hsva"+r),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function Yn(n){return!!Sn.CSS_UNIT.exec(n)}function pS(n){n=n.replace($M,"").replace(XM,"").toLowerCase();var e=!1;if(ol[n])n=ol[n],e=!0;else if(n=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=Sn.rgb.exec(n))?{r:t[1],g:t[2],b:t[3]}:(t=Sn.rgba.exec(n))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Sn.hsl.exec(n))?{h:t[1],s:t[2],l:t[3]}:(t=Sn.hsla.exec(n))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Sn.hsv.exec(n))?{h:t[1],s:t[2],v:t[3]}:(t=Sn.hsva.exec(n))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Sn.hex8.exec(n))?{r:an(t[1]),g:an(t[2]),b:an(t[3]),a:sh(t[4]),format:e?"name":"hex8"}:(t=Sn.hex6.exec(n))?{r:an(t[1]),g:an(t[2]),b:an(t[3]),format:e?"name":"hex"}:(t=Sn.hex4.exec(n))?{r:an(t[1]+""+t[1]),g:an(t[2]+""+t[2]),b:an(t[3]+""+t[3]),a:sh(t[4]+""+t[4]),format:e?"name":"hex8"}:(t=Sn.hex3.exec(n))?{r:an(t[1]+""+t[1]),g:an(t[2]+""+t[2]),b:an(t[3]+""+t[3]),format:e?"name":"hex"}:!1}function mS(n){var e,t;return n=n||{level:"AA",size:"small"},e=(n.level||"AA").toUpperCase(),t=(n.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:e,size:t}}function gS(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,a,s=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=o.call(t)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw r}}return s}}function lh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function ld(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?lh(Object(t),!0).forEach(function(i){Xl(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):lh(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function al(n){"@babel/helpers - typeof";return al=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},al(n)}function _S(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function ch(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,fd(i.key),i)}}function vS(n,e,t){return e&&ch(n.prototype,e),t&&ch(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function Xl(n,e,t){return e=fd(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function yS(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Pa(n,e)}function Ra(n){return Ra=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ra(n)}function Pa(n,e){return Pa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Pa(n,e)}function cd(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function va(n,e,t){return cd()?va=Reflect.construct.bind():va=function(r,o,a){var s=[null];s.push.apply(s,o);var l=Function.bind.apply(r,s),c=new l;return a&&Pa(c,a.prototype),c},va.apply(null,arguments)}function xS(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function bS(n,e){if(n==null)return{};var t=xS(n,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function ud(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function MS(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ud(n)}function SS(n){var e=cd();return function(){var i=Ra(n),r;if(e){var o=Ra(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return MS(this,r)}}function uh(n,e){return ES(n)||gS(n,e)||hd(n,e)||CS()}function wn(n){return wS(n)||TS(n)||hd(n)||AS()}function wS(n){if(Array.isArray(n))return sl(n)}function ES(n){if(Array.isArray(n))return n}function TS(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function hd(n,e){if(n){if(typeof n=="string")return sl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return sl(n,e)}}function sl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function AS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function CS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function RS(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function fd(n){var e=RS(n,"string");return typeof e=="symbol"?e:String(e)}var PS=function n(e){e instanceof Array?e.forEach(n):(e.map&&e.map.dispose(),e.dispose())},LS=function n(e){e.geometry&&e.geometry.dispose(),e.material&&PS(e.material),e.texture&&e.texture.dispose(),e.children&&e.children.forEach(n)},ll=function(e){for(;e.children.length;){var t=e.children[0];e.remove(t),LS(t)}},OS=["objFilter"];function eo(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.objFilter,r=i===void 0?function(){return!0}:i,o=bS(t,OS);return GM(n,e.children.filter(r),function(a){return e.add(a)},function(a){e.remove(a),ll(a)},ld({objBindAttr:"__threeObj"},o))}var to=function(e){return isNaN(e)?parseInt(ze(e).toHex(),16):e},Ds=function(e){return isNaN(e)?ze(e).getAlpha():1},DS=od(jM);function hh(n,e,t){!e||typeof t!="string"||n.filter(function(i){return!i[t]}).forEach(function(i){i[t]=DS(e(i))})}function IS(n,e){var t=n.nodes,i=n.links,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=r.nodeFilter,a=o===void 0?function(){return!0}:o,s=r.onLoopError,l=s===void 0?function(p){throw"Invalid DAG structure! Found cycle in node path: ".concat(p.join(" -> "),".")}:s,c={};t.forEach(function(p){return c[e(p)]={data:p,out:[],depth:-1,skip:!a(p)}}),i.forEach(function(p){var g=p.source,_=p.target,m=b(g),d=b(_);if(!c.hasOwnProperty(m))throw"Missing source node with id: ".concat(m);if(!c.hasOwnProperty(d))throw"Missing target node with id: ".concat(d);var M=c[m],y=c[d];M.out.push(y);function b(x){return al(x)==="object"?e(x):x}});var u=[];f(Object.values(c));var h=Object.assign.apply(Object,[{}].concat(wn(Object.entries(c).filter(function(p){var g=uh(p,2),_=g[1];return!_.skip}).map(function(p){var g=uh(p,2),_=g[0],m=g[1];return Xl({},_,m.depth)}))));return h;function f(p){for(var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],_=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,m=function(){var x=p[d];if(g.indexOf(x)!==-1){var E=[].concat(wn(g.slice(g.indexOf(x))),[x]).map(function(R){return e(R.data)});return u.some(function(R){return R.length===E.length&&R.every(function(C,S){return C===E[S]})})||(u.push(E),l(E)),"continue"}_>x.depth&&(x.depth=_,f(x.out,[].concat(wn(g),[x]),_+(x.skip?0:1)))},d=0,M=p.length;d<M;d++)var y=m()}}var Xe=window.THREE?window.THREE:{Group:wr,Mesh:Ht,MeshLambertMaterial:xf,Color:at,BufferGeometry:Qt,BufferAttribute:pn,Matrix4:wt,Vector3:F,SphereGeometry:Ro,CylinderGeometry:za,TubeGeometry:Nl,ConeGeometry:Il,Line:K0,LineBasicMaterial:_f,QuadraticBezierCurve3:Dl,CubicBezierCurve3:yf,Box3:ji},fh={graph:Wx,forcelayout:wb},NS=2,dh=new Xe.BufferGeometry().setAttribute?"setAttribute":"addAttribute",ca=new Xe.BufferGeometry().applyMatrix4?"applyMatrix4":"applyMatrix",US=$l({props:{jsonUrl:{onChange:function(e,t){var i=this;e&&!t.fetchingJson&&(t.fetchingJson=!0,t.onLoading(),fetch(e).then(function(r){return r.json()}).then(function(r){t.fetchingJson=!1,t.onFinishLoading(r),i.graphData(r)}))},triggerUpdate:!1},graphData:{default:{nodes:[],links:[]},onChange:function(e,t){t.engineRunning=!1}},numDimensions:{default:3,onChange:function(e,t){var i=t.d3ForceLayout.force("charge");i&&i.strength(e>2?-60:-30),e<3&&r(t.graphData.nodes,"z"),e<2&&r(t.graphData.nodes,"y");function r(o,a){o.forEach(function(s){delete s[a],delete s["v".concat(a)]})}}},dagMode:{onChange:function(e,t){!e&&t.forceEngine==="d3"&&(t.graphData.nodes||[]).forEach(function(i){return i.fx=i.fy=i.fz=void 0})}},dagLevelDistance:{},dagNodeFilter:{default:function(e){return!0}},onDagError:{triggerUpdate:!1},nodeRelSize:{default:4},nodeId:{default:"id"},nodeVal:{default:"val"},nodeResolution:{default:8},nodeColor:{default:"color"},nodeAutoColorBy:{},nodeOpacity:{default:.75},nodeVisibility:{default:!0},nodeThreeObject:{},nodeThreeObjectExtend:{default:!1},nodePositionUpdate:{triggerUpdate:!1},linkSource:{default:"source"},linkTarget:{default:"target"},linkVisibility:{default:!0},linkColor:{default:"color"},linkAutoColorBy:{},linkOpacity:{default:.2},linkWidth:{},linkResolution:{default:6},linkCurvature:{default:0,triggerUpdate:!1},linkCurveRotation:{default:0,triggerUpdate:!1},linkMaterial:{},linkThreeObject:{},linkThreeObjectExtend:{default:!1},linkPositionUpdate:{triggerUpdate:!1},linkDirectionalArrowLength:{default:0},linkDirectionalArrowColor:{},linkDirectionalArrowRelPos:{default:.5,triggerUpdate:!1},linkDirectionalArrowResolution:{default:8},linkDirectionalParticles:{default:0},linkDirectionalParticleSpeed:{default:.01,triggerUpdate:!1},linkDirectionalParticleWidth:{default:.5},linkDirectionalParticleColor:{},linkDirectionalParticleResolution:{default:4},forceEngine:{default:"d3"},d3AlphaMin:{default:0},d3AlphaDecay:{default:.0228,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaDecay(e)}},d3AlphaTarget:{default:0,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaTarget(e)}},d3VelocityDecay:{default:.4,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.velocityDecay(e)}},ngraphPhysics:{default:{timeStep:20,gravity:-1.2,theta:.8,springLength:30,springCoefficient:8e-4,dragCoefficient:.02}},warmupTicks:{default:0,triggerUpdate:!1},cooldownTicks:{default:1/0,triggerUpdate:!1},cooldownTime:{default:15e3,triggerUpdate:!1},onLoading:{default:function(){},triggerUpdate:!1},onFinishLoading:{default:function(){},triggerUpdate:!1},onUpdate:{default:function(){},triggerUpdate:!1},onFinishUpdate:{default:function(){},triggerUpdate:!1},onEngineTick:{default:function(){},triggerUpdate:!1},onEngineStop:{default:function(){},triggerUpdate:!1}},methods:{refresh:function(e){return e._flushObjects=!0,e._rerender(),this},d3Force:function(e,t,i){return i===void 0?e.d3ForceLayout.force(t):(e.d3ForceLayout.force(t,i),this)},d3ReheatSimulation:function(e){return e.d3ForceLayout.alpha(1),this.resetCountdown(),this},resetCountdown:function(e){return e.cntTicks=0,e.startTickTime=new Date,e.engineRunning=!0,this},tickFrame:function(e){var t=e.forceEngine!=="ngraph";return e.engineRunning&&i(),r(),o(),this;function i(){++e.cntTicks>e.cooldownTicks||new Date-e.startTickTime>e.cooldownTime||t&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin?(e.engineRunning=!1,e.onEngineStop()):(e.layout[t?"tick":"step"](),e.onEngineTick());var a=ut(e.nodeThreeObjectExtend);e.graphData.nodes.forEach(function(f){var p=f.__threeObj;if(p){var g=t?f:e.layout.getNodePosition(f[e.nodeId]),_=a(f);(!e.nodePositionUpdate||!e.nodePositionUpdate(_?p.children[0]:p,{x:g.x,y:g.y,z:g.z},f)||_)&&(p.position.x=g.x,p.position.y=g.y||0,p.position.z=g.z||0)}});var s=ut(e.linkWidth),l=ut(e.linkCurvature),c=ut(e.linkCurveRotation),u=ut(e.linkThreeObjectExtend);e.graphData.links.forEach(function(f){var p=f.__lineObj;if(p){var g=t?f:e.layout.getLinkPosition(e.layout.graph.getLink(f.source,f.target).id),_=g[t?"source":"from"],m=g[t?"target":"to"];if(!(!_||!m||!_.hasOwnProperty("x")||!m.hasOwnProperty("x"))){h(f);var d=u(f);if(!(e.linkPositionUpdate&&e.linkPositionUpdate(d?p.children[1]:p,{start:{x:_.x,y:_.y,z:_.z},end:{x:m.x,y:m.y,z:m.z}},f)&&!d)){var M=30,y=f.__curve,b=p.children.length?p.children[0]:p;if(b.type==="Line"){if(y)b.geometry.setFromPoints(y.getPoints(M));else{var x=b.geometry.getAttribute("position");(!x||!x.array||x.array.length!==6)&&b.geometry[dh]("position",x=new Xe.BufferAttribute(new Float32Array(2*3),3)),x.array[0]=_.x,x.array[1]=_.y||0,x.array[2]=_.z||0,x.array[3]=m.x,x.array[4]=m.y||0,x.array[5]=m.z||0,x.needsUpdate=!0}b.geometry.computeBoundingSphere()}else if(b.type==="Mesh")if(y){b.geometry.type.match(/^Tube(Buffer)?Geometry$/)||(b.position.set(0,0,0),b.rotation.set(0,0,0),b.scale.set(1,1,1));var q=Math.ceil(s(f)*10)/10,G=q/2,D=new Xe.TubeGeometry(y,M,G,e.linkResolution,!1);b.geometry.dispose(),b.geometry=D}else{if(!b.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)){var E=Math.ceil(s(f)*10)/10,R=E/2,C=new Xe.CylinderGeometry(R,R,1,e.linkResolution,1,!1);C[ca](new Xe.Matrix4().makeTranslation(0,1/2,0)),C[ca](new Xe.Matrix4().makeRotationX(Math.PI/2)),b.geometry.dispose(),b.geometry=C}var S=new Xe.Vector3(_.x,_.y||0,_.z||0),A=new Xe.Vector3(m.x,m.y||0,m.z||0),$=S.distanceTo(A);b.position.x=S.x,b.position.y=S.y,b.position.z=S.z,b.scale.z=$,b.parent.localToWorld(A),b.lookAt(A)}}}}});function h(f){var p=t?f:e.layout.getLinkPosition(e.layout.graph.getLink(f.source,f.target).id),g=p[t?"source":"from"],_=p[t?"target":"to"];if(!(!g||!_||!g.hasOwnProperty("x")||!_.hasOwnProperty("x"))){var m=l(f);if(!m)f.__curve=null;else{var d=new Xe.Vector3(g.x,g.y||0,g.z||0),M=new Xe.Vector3(_.x,_.y||0,_.z||0),y=d.distanceTo(M),b,x=c(f);if(y>0){var E=_.x-g.x,R=_.y-g.y||0,C=new Xe.Vector3().subVectors(M,d),S=C.clone().multiplyScalar(m).cross(E!==0||R!==0?new Xe.Vector3(0,0,1):new Xe.Vector3(0,1,0)).applyAxisAngle(C.normalize(),x).add(new Xe.Vector3().addVectors(d,M).divideScalar(2));b=new Xe.QuadraticBezierCurve3(d,S,M)}else{var A=m*70,$=-x,q=$+Math.PI/2;b=new Xe.CubicBezierCurve3(d,new Xe.Vector3(A*Math.cos(q),A*Math.sin(q),0).add(d),new Xe.Vector3(A*Math.cos($),A*Math.sin($),0).add(d),M)}f.__curve=b}}}}function r(){var a=ut(e.linkDirectionalArrowRelPos),s=ut(e.linkDirectionalArrowLength),l=ut(e.nodeVal);e.graphData.links.forEach(function(c){var u=c.__arrowObj;if(u){var h=t?c:e.layout.getLinkPosition(e.layout.graph.getLink(c.source,c.target).id),f=h[t?"source":"from"],p=h[t?"target":"to"];if(!(!f||!p||!f.hasOwnProperty("x")||!p.hasOwnProperty("x"))){var g=Math.cbrt(Math.max(0,l(f)||1))*e.nodeRelSize,_=Math.cbrt(Math.max(0,l(p)||1))*e.nodeRelSize,m=s(c),d=a(c),M=c.__curve?function(C){return c.__curve.getPoint(C)}:function(C){var S=function($,q,G,D){return q[$]+(G[$]-q[$])*D||0};return{x:S("x",f,p,C),y:S("y",f,p,C),z:S("z",f,p,C)}},y=c.__curve?c.__curve.getLength():Math.sqrt(["x","y","z"].map(function(C){return Math.pow((p[C]||0)-(f[C]||0),2)}).reduce(function(C,S){return C+S},0)),b=g+m+(y-g-_-m)*d,x=M(b/y),E=M((b-m)/y);["x","y","z"].forEach(function(C){return u.position[C]=E[C]});var R=va(Xe.Vector3,wn(["x","y","z"].map(function(C){return x[C]})));u.parent.localToWorld(R),u.lookAt(R)}}})}function o(){var a=ut(e.linkDirectionalParticleSpeed);e.graphData.links.forEach(function(s){var l=s.__photonsObj&&s.__photonsObj.children,c=s.__singleHopPhotonsObj&&s.__singleHopPhotonsObj.children;if(!((!c||!c.length)&&(!l||!l.length))){var u=t?s:e.layout.getLinkPosition(e.layout.graph.getLink(s.source,s.target).id),h=u[t?"source":"from"],f=u[t?"target":"to"];if(!(!h||!f||!h.hasOwnProperty("x")||!f.hasOwnProperty("x"))){var p=a(s),g=s.__curve?function(m){return s.__curve.getPoint(m)}:function(m){var d=function(y,b,x,E){return b[y]+(x[y]-b[y])*E||0};return{x:d("x",h,f,m),y:d("y",h,f,m),z:d("z",h,f,m)}},_=[].concat(wn(l||[]),wn(c||[]));_.forEach(function(m,d){var M=m.parent.__linkThreeObjType==="singleHopPhotons";if(m.hasOwnProperty("__progressRatio")||(m.__progressRatio=M?0:d/l.length),m.__progressRatio+=p,m.__progressRatio>=1)if(!M)m.__progressRatio=m.__progressRatio%1;else{m.parent.remove(m),ll(m);return}var y=m.__progressRatio,b=g(y);["x","y","z"].forEach(function(x){return m.position[x]=b[x]})})}}})}},emitParticle:function(e,t){if(t&&e.graphData.links.includes(t)){if(!t.__singleHopPhotonsObj){var i=new Xe.Group;i.__linkThreeObjType="singleHopPhotons",t.__singleHopPhotonsObj=i,e.graphScene.add(i)}var r=ut(e.linkDirectionalParticleWidth),o=Math.ceil(r(t)*10)/10/2,a=e.linkDirectionalParticleResolution,s=new Xe.SphereGeometry(o,a,a),l=ut(e.linkColor),c=ut(e.linkDirectionalParticleColor),u=c(t)||l(t)||"#f0f0f0",h=new Xe.Color(to(u)),f=e.linkOpacity*3,p=new Xe.MeshLambertMaterial({color:h,transparent:!0,opacity:f});t.__singleHopPhotonsObj.add(new Xe.Mesh(s,p))}return this},getGraphBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0};if(!e.initialised)return null;var i=function r(o){var a=[];if(o.geometry){o.geometry.computeBoundingBox();var s=new Xe.Box3;s.copy(o.geometry.boundingBox).applyMatrix4(o.matrixWorld),a.push(s)}return a.concat.apply(a,wn((o.children||[]).filter(function(l){return!l.hasOwnProperty("__graphObjType")||l.__graphObjType==="node"&&t(l.__data)}).map(r)))}(e.graphScene);return i.length?Object.assign.apply(Object,wn(["x","y","z"].map(function(r){return Xl({},r,[mM(i,function(o){return o.min[r]}),pM(i,function(o){return o.max[r]})])}))):null}},stateInit:function(){return{d3ForceLayout:Nx().force("link",xx()).force("charge",Ux()).force("center",wy()).force("dagRadial",null).stop(),engineRunning:!1}},init:function(e,t){t.graphScene=e},update:function(e,t){var i=function(K){return K.some(function(ce){return t.hasOwnProperty(ce)})};if(e.engineRunning=!1,e.onUpdate(),e.nodeAutoColorBy!==null&&i(["nodeAutoColorBy","graphData","nodeColor"])&&hh(e.graphData.nodes,ut(e.nodeAutoColorBy),e.nodeColor),e.linkAutoColorBy!==null&&i(["linkAutoColorBy","graphData","linkColor"])&&hh(e.graphData.links,ut(e.linkAutoColorBy),e.linkColor),e._flushObjects||i(["graphData","nodeThreeObject","nodeThreeObjectExtend","nodeVal","nodeColor","nodeVisibility","nodeRelSize","nodeResolution","nodeOpacity"])){var r=ut(e.nodeThreeObject),o=ut(e.nodeThreeObjectExtend),a=ut(e.nodeVal),s=ut(e.nodeColor),l=ut(e.nodeVisibility),c={},u={};eo(e.graphData.nodes.filter(l),e.graphScene,{purge:e._flushObjects||i(["nodeThreeObject","nodeThreeObjectExtend"]),objFilter:function(K){return K.__graphObjType==="node"},createObj:function(K){var ce=r(K),H=o(K);ce&&e.nodeThreeObject===ce&&(ce=ce.clone());var se;return ce&&!H?se=ce:(se=new Xe.Mesh,se.__graphDefaultObj=!0,ce&&H&&se.add(ce)),se.__graphObjType="node",se},updateObj:function(K,ce){if(K.__graphDefaultObj){var H=a(ce)||1,se=Math.cbrt(H)*e.nodeRelSize,Se=e.nodeResolution;(!K.geometry.type.match(/^Sphere(Buffer)?Geometry$/)||K.geometry.parameters.radius!==se||K.geometry.parameters.widthSegments!==Se)&&(c.hasOwnProperty(H)||(c[H]=new Xe.SphereGeometry(se,Se,Se)),K.geometry.dispose(),K.geometry=c[H]);var ke=s(ce),Re=new Xe.Color(to(ke||"#ffffaa")),W=e.nodeOpacity*Ds(ke);(K.material.type!=="MeshLambertMaterial"||!K.material.color.equals(Re)||K.material.opacity!==W)&&(u.hasOwnProperty(ke)||(u[ke]=new Xe.MeshLambertMaterial({color:Re,transparent:!0,opacity:W})),K.material.dispose(),K.material=u[ke])}}})}if(e._flushObjects||i(["graphData","linkThreeObject","linkThreeObjectExtend","linkMaterial","linkColor","linkWidth","linkVisibility","linkResolution","linkOpacity","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution"])){var h=ut(e.linkThreeObject),f=ut(e.linkThreeObjectExtend),p=ut(e.linkMaterial),g=ut(e.linkVisibility),_=ut(e.linkColor),m=ut(e.linkWidth),d={},M={},y={},b=e.graphData.links.filter(g);if(eo(b,e.graphScene,{objBindAttr:"__lineObj",purge:e._flushObjects||i(["linkThreeObject","linkThreeObjectExtend","linkWidth"]),objFilter:function(K){return K.__graphObjType==="link"},exitObj:function(K){var ce=K.__data&&K.__data.__singleHopPhotonsObj;ce&&(ce.parent.remove(ce),ll(ce),delete K.__data.__singleHopPhotonsObj)},createObj:function(K){var ce=h(K),H=f(K);ce&&e.linkThreeObject===ce&&(ce=ce.clone());var se;if(!ce||H){var Se=!!m(K);if(Se)se=new Xe.Mesh;else{var ke=new Xe.BufferGeometry;ke[dh]("position",new Xe.BufferAttribute(new Float32Array(2*3),3)),se=new Xe.Line(ke)}}var Re;return ce?H?(Re=new Xe.Group,Re.__graphDefaultObj=!0,Re.add(se),Re.add(ce)):Re=ce:(Re=se,Re.__graphDefaultObj=!0),Re.renderOrder=10,Re.__graphObjType="link",Re},updateObj:function(K,ce){if(K.__graphDefaultObj){var H=K.children.length?K.children[0]:K,se=Math.ceil(m(ce)*10)/10,Se=!!se;if(Se){var ke=se/2,Re=e.linkResolution;if(!H.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)||H.geometry.parameters.radiusTop!==ke||H.geometry.parameters.radialSegments!==Re){if(!d.hasOwnProperty(se)){var W=new Xe.CylinderGeometry(ke,ke,1,Re,1,!1);W[ca](new Xe.Matrix4().makeTranslation(0,1/2,0)),W[ca](new Xe.Matrix4().makeRotationX(Math.PI/2)),d[se]=W}H.geometry.dispose(),H.geometry=d[se]}}var ht=p(ce);if(ht)H.material=ht;else{var Le=_(ce),Ve=new Xe.Color(to(Le||"#f0f0f0")),Ne=e.linkOpacity*Ds(Le),et=Se?"MeshLambertMaterial":"LineBasicMaterial";if(H.material.type!==et||!H.material.color.equals(Ve)||H.material.opacity!==Ne){var He=Se?M:y;He.hasOwnProperty(Le)||(He[Le]=new Xe[et]({color:Ve,transparent:Ne<1,opacity:Ne,depthWrite:Ne>=1})),H.material.dispose(),H.material=He[Le]}}}}}),e.linkDirectionalArrowLength||t.hasOwnProperty("linkDirectionalArrowLength")){var x=ut(e.linkDirectionalArrowLength),E=ut(e.linkDirectionalArrowColor);eo(b.filter(x),e.graphScene,{objBindAttr:"__arrowObj",objFilter:function(K){return K.__linkThreeObjType==="arrow"},createObj:function(){var K=new Xe.Mesh(void 0,new Xe.MeshLambertMaterial({transparent:!0}));return K.__linkThreeObjType="arrow",K},updateObj:function(K,ce){var H=x(ce),se=e.linkDirectionalArrowResolution;if(!K.geometry.type.match(/^Cone(Buffer)?Geometry$/)||K.geometry.parameters.height!==H||K.geometry.parameters.radialSegments!==se){var Se=new Xe.ConeGeometry(H*.25,H,se);Se.translate(0,H/2,0),Se.rotateX(Math.PI/2),K.geometry.dispose(),K.geometry=Se}var ke=E(ce)||_(ce)||"#f0f0f0";K.material.color=new Xe.Color(to(ke)),K.material.opacity=e.linkOpacity*3*Ds(ke)}})}if(e.linkDirectionalParticles||t.hasOwnProperty("linkDirectionalParticles")){var R=ut(e.linkDirectionalParticles),C=ut(e.linkDirectionalParticleWidth),S=ut(e.linkDirectionalParticleColor),A={},$={};eo(b.filter(R),e.graphScene,{objBindAttr:"__photonsObj",objFilter:function(K){return K.__linkThreeObjType==="photons"},createObj:function(){var K=new Xe.Group;return K.__linkThreeObjType="photons",K},updateObj:function(K,ce){var H=Math.round(Math.abs(R(ce))),se=!!K.children.length&&K.children[0],Se=Math.ceil(C(ce)*10)/10/2,ke=e.linkDirectionalParticleResolution,Re;se&&se.geometry.parameters.radius===Se&&se.geometry.parameters.widthSegments===ke?Re=se.geometry:($.hasOwnProperty(Se)||($[Se]=new Xe.SphereGeometry(Se,ke,ke)),Re=$[Se],se&&se.geometry.dispose());var W=S(ce)||_(ce)||"#f0f0f0",ht=new Xe.Color(to(W)),Le=e.linkOpacity*3,Ve;se&&se.material.color.equals(ht)&&se.material.opacity===Le?Ve=se.material:(A.hasOwnProperty(W)||(A[W]=new Xe.MeshLambertMaterial({color:ht,transparent:!0,opacity:Le})),Ve=A[W],se&&se.material.dispose()),eo(wn(new Array(H)).map(function(Ne,et){return{idx:et}}),K,{idAccessor:function(et){return et.idx},createObj:function(){return new Xe.Mesh(Re,Ve)},updateObj:function(et){et.geometry=Re,et.material=Ve}})}})}}if(e._flushObjects=!1,i(["graphData","nodeId","linkSource","linkTarget","numDimensions","forceEngine","dagMode","dagNodeFilter","dagLevelDistance"])){e.engineRunning=!1,e.graphData.links.forEach(function(Y){Y.source=Y[e.linkSource],Y.target=Y[e.linkTarget]});var q=e.forceEngine!=="ngraph",G;if(q){(G=e.d3ForceLayout).stop().alpha(1).numDimensions(e.numDimensions).nodes(e.graphData.nodes);var D=e.d3ForceLayout.force("link");D&&D.id(function(Y){return Y[e.nodeId]}).links(e.graphData.links);var O=e.dagMode&&IS(e.graphData,function(Y){return Y[e.nodeId]},{nodeFilter:e.dagNodeFilter,onLoopError:e.onDagError||void 0}),V=Math.max.apply(Math,wn(Object.values(O||[]))),Q=e.dagLevelDistance||e.graphData.nodes.length/(V||1)*NS*(["radialin","radialout"].indexOf(e.dagMode)!==-1?.7:1);if(e.dagMode){var re=function(K,ce){return function(H){return K?(O[H[e.nodeId]]-V/2)*Q*(ce?-1:1):void 0}},pe=re(["lr","rl"].indexOf(e.dagMode)!==-1,e.dagMode==="rl"),j=re(["td","bu"].indexOf(e.dagMode)!==-1,e.dagMode==="td"),fe=re(["zin","zout"].indexOf(e.dagMode)!==-1,e.dagMode==="zout");e.graphData.nodes.filter(e.dagNodeFilter).forEach(function(Y){Y.fx=pe(Y),Y.fy=j(Y),Y.fz=fe(Y)})}e.d3ForceLayout.force("dagRadial",["radialin","radialout"].indexOf(e.dagMode)!==-1?Fx(function(Y){var K=O[Y[e.nodeId]]||-1;return(e.dagMode==="radialin"?V-K:K)*Q}).strength(function(Y){return e.dagNodeFilter(Y)?1:0}):null)}else{var B=fh.graph();e.graphData.nodes.forEach(function(Y){B.addNode(Y[e.nodeId])}),e.graphData.links.forEach(function(Y){B.addLink(Y.source,Y.target)}),G=fh.forcelayout(B,ld({dimensions:e.numDimensions},e.ngraphPhysics)),G.graph=B}for(var oe=0;oe<e.warmupTicks&&!(q&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin);oe++)G[q?"tick":"step"]();e.layout=G,this.resetCountdown()}e.engineRunning=!0,e.onFinishUpdate()}});function FS(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Object,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,i=function(r){yS(a,r);var o=SS(a);function a(){var s;_S(this,a);for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];return s=o.call.apply(o,[this].concat(c)),s.__kapsuleInstance=n().apply(void 0,[].concat(wn(t?[ud(s)]:[]),c)),s}return vS(a)}(e);return Object.keys(n()).forEach(function(r){return i.prototype[r]=function(){var o,a=(o=this.__kapsuleInstance)[r].apply(o,arguments);return a===this.__kapsuleInstance?this:a}}),i}var kS=window.THREE?window.THREE:{Group:wr},dd=FS(US,kS.Group,!0);const Is={type:"change"},Ns={type:"start"},Us={type:"end"};class BS extends Rn{constructor(e,t){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Nn.ROTATE,MIDDLE:Nn.DOLLY,RIGHT:Nn.PAN},this.target=new F;const o=1e-6,a=new F;let s=1,l=r.NONE,c=r.NONE,u=0,h=0,f=0;const p=new F,g=new we,_=new we,m=new F,d=new we,M=new we,y=new we,b=new we,x=[],E={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const H=i.domElement.getBoundingClientRect(),se=i.domElement.ownerDocument.documentElement;i.screen.left=H.left+window.pageXOffset-se.clientLeft,i.screen.top=H.top+window.pageYOffset-se.clientTop,i.screen.width=H.width,i.screen.height=H.height};const R=function(){const H=new we;return function(Se,ke){return H.set((Se-i.screen.left)/i.screen.width,(ke-i.screen.top)/i.screen.height),H}}(),C=function(){const H=new we;return function(Se,ke){return H.set((Se-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-ke))/i.screen.width),H}}();this.rotateCamera=function(){const H=new F,se=new Cn,Se=new F,ke=new F,Re=new F,W=new F;return function(){W.set(_.x-g.x,_.y-g.y,0);let Le=W.length();Le?(p.copy(i.object.position).sub(i.target),Se.copy(p).normalize(),ke.copy(i.object.up).normalize(),Re.crossVectors(ke,Se).normalize(),ke.setLength(_.y-g.y),Re.setLength(_.x-g.x),W.copy(ke.add(Re)),H.crossVectors(W,p).normalize(),Le*=i.rotateSpeed,se.setFromAxisAngle(H,Le),p.applyQuaternion(se),i.object.up.applyQuaternion(se),m.copy(H),f=Le):!i.staticMoving&&f&&(f*=Math.sqrt(1-i.dynamicDampingFactor),p.copy(i.object.position).sub(i.target),se.setFromAxisAngle(m,f),p.applyQuaternion(se),i.object.up.applyQuaternion(se)),g.copy(_)}}(),this.zoomCamera=function(){let H;l===r.TOUCH_ZOOM_PAN?(H=u/h,u=h,i.object.isPerspectiveCamera?p.multiplyScalar(H):i.object.isOrthographicCamera?(i.object.zoom=Ic.clamp(i.object.zoom/H,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(H=1+(M.y-d.y)*i.zoomSpeed,H!==1&&H>0&&(i.object.isPerspectiveCamera?p.multiplyScalar(H):i.object.isOrthographicCamera?(i.object.zoom=Ic.clamp(i.object.zoom/H,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?d.copy(M):d.y+=(M.y-d.y)*this.dynamicDampingFactor)},this.panCamera=function(){const H=new we,se=new F,Se=new F;return function(){if(H.copy(b).sub(y),H.lengthSq()){if(i.object.isOrthographicCamera){const Re=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,W=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;H.x*=Re,H.y*=W}H.multiplyScalar(p.length()*i.panSpeed),Se.copy(p).cross(i.object.up).setLength(H.x),Se.add(se.copy(i.object.up).setLength(H.y)),i.object.position.add(Se),i.target.add(Se),i.staticMoving?y.copy(b):y.add(H.subVectors(b,y).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(p.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,p.setLength(i.maxDistance)),d.copy(M)),p.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,p.setLength(i.minDistance)),d.copy(M)))},this.update=function(){p.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,p),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),a.distanceToSquared(i.object.position)>o&&(i.dispatchEvent(Is),a.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(a.distanceToSquared(i.object.position)>o||s!==i.object.zoom)&&(i.dispatchEvent(Is),a.copy(i.object.position),s=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=r.NONE,c=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),p.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(Is),a.copy(i.object.position),s=i.object.zoom};function S(H){i.enabled!==!1&&(x.length===0&&(i.domElement.setPointerCapture(H.pointerId),i.domElement.addEventListener("pointermove",A),i.domElement.addEventListener("pointerup",$)),oe(H),H.pointerType==="touch"?pe(H):O(H))}function A(H){i.enabled!==!1&&(H.pointerType==="touch"?j(H):V(H))}function $(H){i.enabled!==!1&&(H.pointerType==="touch"?fe(H):Q(),Y(H),x.length===0&&(i.domElement.releasePointerCapture(H.pointerId),i.domElement.removeEventListener("pointermove",A),i.domElement.removeEventListener("pointerup",$)))}function q(H){Y(H)}function G(H){i.enabled!==!1&&(window.removeEventListener("keydown",G),c===r.NONE&&(H.code===i.keys[r.ROTATE]&&!i.noRotate?c=r.ROTATE:H.code===i.keys[r.ZOOM]&&!i.noZoom?c=r.ZOOM:H.code===i.keys[r.PAN]&&!i.noPan&&(c=r.PAN)))}function D(){i.enabled!==!1&&(c=r.NONE,window.addEventListener("keydown",G))}function O(H){if(l===r.NONE)switch(H.button){case i.mouseButtons.LEFT:l=r.ROTATE;break;case i.mouseButtons.MIDDLE:l=r.ZOOM;break;case i.mouseButtons.RIGHT:l=r.PAN;break}const se=c!==r.NONE?c:l;se===r.ROTATE&&!i.noRotate?(_.copy(C(H.pageX,H.pageY)),g.copy(_)):se===r.ZOOM&&!i.noZoom?(d.copy(R(H.pageX,H.pageY)),M.copy(d)):se===r.PAN&&!i.noPan&&(y.copy(R(H.pageX,H.pageY)),b.copy(y)),i.dispatchEvent(Ns)}function V(H){const se=c!==r.NONE?c:l;se===r.ROTATE&&!i.noRotate?(g.copy(_),_.copy(C(H.pageX,H.pageY))):se===r.ZOOM&&!i.noZoom?M.copy(R(H.pageX,H.pageY)):se===r.PAN&&!i.noPan&&b.copy(R(H.pageX,H.pageY))}function Q(){l=r.NONE,i.dispatchEvent(Us)}function re(H){if(i.enabled!==!1&&i.noZoom!==!0){switch(H.preventDefault(),H.deltaMode){case 2:d.y-=H.deltaY*.025;break;case 1:d.y-=H.deltaY*.01;break;default:d.y-=H.deltaY*25e-5;break}i.dispatchEvent(Ns),i.dispatchEvent(Us)}}function pe(H){switch(K(H),x.length){case 1:l=r.TOUCH_ROTATE,_.copy(C(x[0].pageX,x[0].pageY)),g.copy(_);break;default:l=r.TOUCH_ZOOM_PAN;const se=x[0].pageX-x[1].pageX,Se=x[0].pageY-x[1].pageY;h=u=Math.sqrt(se*se+Se*Se);const ke=(x[0].pageX+x[1].pageX)/2,Re=(x[0].pageY+x[1].pageY)/2;y.copy(R(ke,Re)),b.copy(y);break}i.dispatchEvent(Ns)}function j(H){switch(K(H),x.length){case 1:g.copy(_),_.copy(C(H.pageX,H.pageY));break;default:const se=ce(H),Se=H.pageX-se.x,ke=H.pageY-se.y;h=Math.sqrt(Se*Se+ke*ke);const Re=(H.pageX+se.x)/2,W=(H.pageY+se.y)/2;b.copy(R(Re,W));break}}function fe(H){switch(x.length){case 0:l=r.NONE;break;case 1:l=r.TOUCH_ROTATE,_.copy(C(H.pageX,H.pageY)),g.copy(_);break;case 2:l=r.TOUCH_ZOOM_PAN;for(let se=0;se<x.length;se++)if(x[se].pointerId!==H.pointerId){const Se=E[x[se].pointerId];_.copy(C(Se.x,Se.y)),g.copy(_);break}break}i.dispatchEvent(Us)}function B(H){i.enabled!==!1&&H.preventDefault()}function oe(H){x.push(H)}function Y(H){delete E[H.pointerId];for(let se=0;se<x.length;se++)if(x[se].pointerId==H.pointerId){x.splice(se,1);return}}function K(H){let se=E[H.pointerId];se===void 0&&(se=new we,E[H.pointerId]=se),se.set(H.pageX,H.pageY)}function ce(H){const se=H.pointerId===x[0].pointerId?x[1]:x[0];return E[se.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",B),i.domElement.removeEventListener("pointerdown",S),i.domElement.removeEventListener("pointercancel",q),i.domElement.removeEventListener("wheel",re),i.domElement.removeEventListener("pointermove",A),i.domElement.removeEventListener("pointerup",$),window.removeEventListener("keydown",G),window.removeEventListener("keyup",D)},this.domElement.addEventListener("contextmenu",B),this.domElement.addEventListener("pointerdown",S),this.domElement.addEventListener("pointercancel",q),this.domElement.addEventListener("wheel",re,{passive:!1}),window.addEventListener("keydown",G),window.addEventListener("keyup",D),this.handleResize(),this.update()}}const ph={type:"change"},Fs={type:"start"},mh={type:"end"};class zS extends Rn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nn.ROTATE,MIDDLE:Nn.DOLLY,RIGHT:Nn.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",st),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",st),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ph),i.update(),o=r.NONE},this.update=function(){const I=new F,ge=new Cn().setFromUnitVectors(e.up,new F(0,1,0)),xe=ge.clone().invert(),ne=new F,Oe=new Cn,Be=new F,Fe=2*Math.PI;return function(){const De=i.object.position;I.copy(De).sub(i.target),I.applyQuaternion(ge),s.setFromVector3(I),i.autoRotate&&o===r.NONE&&S(R()),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let We=i.minAzimuthAngle,rt=i.maxAzimuthAngle;return isFinite(We)&&isFinite(rt)&&(We<-Math.PI?We+=Fe:We>Math.PI&&(We-=Fe),rt<-Math.PI?rt+=Fe:rt>Math.PI&&(rt-=Fe),We<=rt?s.theta=Math.max(We,Math.min(rt,s.theta)):s.theta=s.theta>(We+rt)/2?Math.max(We,s.theta):Math.min(rt,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(i.minDistance,Math.min(i.maxDistance,s.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),I.setFromSpherical(s),I.applyQuaternion(xe),De.copy(i.target).add(I),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||ne.distanceToSquared(i.object.position)>a||8*(1-Oe.dot(i.object.quaternion))>a||Be.distanceToSquared(i.target)>0?(i.dispatchEvent(ph),ne.copy(i.object.position),Oe.copy(i.object.quaternion),Be.copy(i.target),h=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",L),i.domElement.removeEventListener("pointerdown",Le),i.domElement.removeEventListener("pointercancel",Ne),i.domElement.removeEventListener("wheel",Ye),i.domElement.removeEventListener("pointermove",Ve),i.domElement.removeEventListener("pointerup",Ne),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",st),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const a=1e-6,s=new Qs,l=new Qs;let c=1;const u=new F;let h=!1;const f=new we,p=new we,g=new we,_=new we,m=new we,d=new we,M=new we,y=new we,b=new we,x=[],E={};function R(){return 2*Math.PI/60/60*i.autoRotateSpeed}function C(){return Math.pow(.95,i.zoomSpeed)}function S(I){l.theta-=I}function A(I){l.phi-=I}const $=function(){const I=new F;return function(xe,ne){I.setFromMatrixColumn(ne,0),I.multiplyScalar(-xe),u.add(I)}}(),q=function(){const I=new F;return function(xe,ne){i.screenSpacePanning===!0?I.setFromMatrixColumn(ne,1):(I.setFromMatrixColumn(ne,0),I.crossVectors(i.object.up,I)),I.multiplyScalar(xe),u.add(I)}}(),G=function(){const I=new F;return function(xe,ne){const Oe=i.domElement;if(i.object.isPerspectiveCamera){const Be=i.object.position;I.copy(Be).sub(i.target);let Fe=I.length();Fe*=Math.tan(i.object.fov/2*Math.PI/180),$(2*xe*Fe/Oe.clientHeight,i.object.matrix),q(2*ne*Fe/Oe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?($(xe*(i.object.right-i.object.left)/i.object.zoom/Oe.clientWidth,i.object.matrix),q(ne*(i.object.top-i.object.bottom)/i.object.zoom/Oe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function D(I){i.object.isPerspectiveCamera?c/=I:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*I)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function O(I){i.object.isPerspectiveCamera?c*=I:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/I)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function V(I){f.set(I.clientX,I.clientY)}function Q(I){M.set(I.clientX,I.clientY)}function re(I){_.set(I.clientX,I.clientY)}function pe(I){p.set(I.clientX,I.clientY),g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const ge=i.domElement;S(2*Math.PI*g.x/ge.clientHeight),A(2*Math.PI*g.y/ge.clientHeight),f.copy(p),i.update()}function j(I){y.set(I.clientX,I.clientY),b.subVectors(y,M),b.y>0?D(C()):b.y<0&&O(C()),M.copy(y),i.update()}function fe(I){m.set(I.clientX,I.clientY),d.subVectors(m,_).multiplyScalar(i.panSpeed),G(d.x,d.y),_.copy(m),i.update()}function B(I){I.deltaY<0?O(C()):I.deltaY>0&&D(C()),i.update()}function oe(I){let ge=!1;switch(I.code){case i.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?A(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),ge=!0;break;case i.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?A(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),ge=!0;break;case i.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?S(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),ge=!0;break;case i.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?S(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),ge=!0;break}ge&&(I.preventDefault(),i.update())}function Y(){if(x.length===1)f.set(x[0].pageX,x[0].pageY);else{const I=.5*(x[0].pageX+x[1].pageX),ge=.5*(x[0].pageY+x[1].pageY);f.set(I,ge)}}function K(){if(x.length===1)_.set(x[0].pageX,x[0].pageY);else{const I=.5*(x[0].pageX+x[1].pageX),ge=.5*(x[0].pageY+x[1].pageY);_.set(I,ge)}}function ce(){const I=x[0].pageX-x[1].pageX,ge=x[0].pageY-x[1].pageY,xe=Math.sqrt(I*I+ge*ge);M.set(0,xe)}function H(){i.enableZoom&&ce(),i.enablePan&&K()}function se(){i.enableZoom&&ce(),i.enableRotate&&Y()}function Se(I){if(x.length==1)p.set(I.pageX,I.pageY);else{const xe=be(I),ne=.5*(I.pageX+xe.x),Oe=.5*(I.pageY+xe.y);p.set(ne,Oe)}g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const ge=i.domElement;S(2*Math.PI*g.x/ge.clientHeight),A(2*Math.PI*g.y/ge.clientHeight),f.copy(p)}function ke(I){if(x.length===1)m.set(I.pageX,I.pageY);else{const ge=be(I),xe=.5*(I.pageX+ge.x),ne=.5*(I.pageY+ge.y);m.set(xe,ne)}d.subVectors(m,_).multiplyScalar(i.panSpeed),G(d.x,d.y),_.copy(m)}function Re(I){const ge=be(I),xe=I.pageX-ge.x,ne=I.pageY-ge.y,Oe=Math.sqrt(xe*xe+ne*ne);y.set(0,Oe),b.set(0,Math.pow(y.y/M.y,i.zoomSpeed)),D(b.y),M.copy(y)}function W(I){i.enableZoom&&Re(I),i.enablePan&&ke(I)}function ht(I){i.enableZoom&&Re(I),i.enableRotate&&Se(I)}function Le(I){i.enabled!==!1&&(x.length===0&&(i.domElement.setPointerCapture(I.pointerId),i.domElement.addEventListener("pointermove",Ve),i.domElement.addEventListener("pointerup",Ne)),T(I),I.pointerType==="touch"?xt(I):et(I))}function Ve(I){i.enabled!==!1&&(I.pointerType==="touch"?gt(I):He(I))}function Ne(I){ae(I),x.length===0&&(i.domElement.releasePointerCapture(I.pointerId),i.domElement.removeEventListener("pointermove",Ve),i.domElement.removeEventListener("pointerup",Ne)),i.dispatchEvent(mh),o=r.NONE}function et(I){let ge;switch(I.button){case 0:ge=i.mouseButtons.LEFT;break;case 1:ge=i.mouseButtons.MIDDLE;break;case 2:ge=i.mouseButtons.RIGHT;break;default:ge=-1}switch(ge){case Nn.DOLLY:if(i.enableZoom===!1)return;Q(I),o=r.DOLLY;break;case Nn.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enablePan===!1)return;re(I),o=r.PAN}else{if(i.enableRotate===!1)return;V(I),o=r.ROTATE}break;case Nn.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enableRotate===!1)return;V(I),o=r.ROTATE}else{if(i.enablePan===!1)return;re(I),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Fs)}function He(I){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;pe(I);break;case r.DOLLY:if(i.enableZoom===!1)return;j(I);break;case r.PAN:if(i.enablePan===!1)return;fe(I);break}}function Ye(I){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(I.preventDefault(),i.dispatchEvent(Fs),B(I),i.dispatchEvent(mh))}function st(I){i.enabled===!1||i.enablePan===!1||oe(I)}function xt(I){switch(ve(I),x.length){case 1:switch(i.touches.ONE){case Ki.ROTATE:if(i.enableRotate===!1)return;Y(),o=r.TOUCH_ROTATE;break;case Ki.PAN:if(i.enablePan===!1)return;K(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Ki.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;H(),o=r.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;se(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Fs)}function gt(I){switch(ve(I),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Se(I),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ke(I),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;W(I),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ht(I),i.update();break;default:o=r.NONE}}function L(I){i.enabled!==!1&&I.preventDefault()}function T(I){x.push(I)}function ae(I){delete E[I.pointerId];for(let ge=0;ge<x.length;ge++)if(x[ge].pointerId==I.pointerId){x.splice(ge,1);return}}function ve(I){let ge=E[I.pointerId];ge===void 0&&(ge=new we,E[I.pointerId]=ge),ge.set(I.pageX,I.pageY)}function be(I){const ge=I.pointerId===x[0].pointerId?x[1]:x[0];return E[ge.pointerId]}i.domElement.addEventListener("contextmenu",L),i.domElement.addEventListener("pointerdown",Le),i.domElement.addEventListener("pointercancel",Ne),i.domElement.addEventListener("wheel",Ye,{passive:!1}),this.update()}}const HS={type:"change"};class GS extends Rn{constructor(e,t){super(),this.object=e,this.domElement=t,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const i=this,r=1e-6,o=new Cn,a=new F;this.tmpQuaternion=new Cn,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new F(0,0,0),this.rotationVector=new F(0,0,0),this.keydown=function(f){if(!f.altKey){switch(f.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(f){switch(f.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()},this.pointerdown=function(f){if(this.dragToLook)this.status++;else{switch(f.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(f){if(!this.dragToLook||this.status>0){const p=this.getContainerDimensions(),g=p.size[0]/2,_=p.size[1]/2;this.moveState.yawLeft=-(f.pageX-p.offset[0]-g)/g,this.moveState.pitchDown=(f.pageY-p.offset[1]-_)/_,this.updateRotationVector()}},this.pointerup=function(f){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(f.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()},this.update=function(f){const p=f*i.movementSpeed,g=f*i.rollSpeed;i.object.translateX(i.moveVector.x*p),i.object.translateY(i.moveVector.y*p),i.object.translateZ(i.moveVector.z*p),i.tmpQuaternion.set(i.rotationVector.x*g,i.rotationVector.y*g,i.rotationVector.z*g,1).normalize(),i.object.quaternion.multiply(i.tmpQuaternion),(a.distanceToSquared(i.object.position)>r||8*(1-o.dot(i.object.quaternion))>r)&&(i.dispatchEvent(HS),o.copy(i.object.quaternion),a.copy(i.object.position))},this.updateMovementVector=function(){const f=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-f+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",gh),this.domElement.removeEventListener("pointerdown",l),this.domElement.removeEventListener("pointermove",s),this.domElement.removeEventListener("pointerup",c),window.removeEventListener("keydown",u),window.removeEventListener("keyup",h)};const s=this.pointermove.bind(this),l=this.pointerdown.bind(this),c=this.pointerup.bind(this),u=this.keydown.bind(this),h=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",gh),this.domElement.addEventListener("pointerdown",l),this.domElement.addEventListener("pointermove",s),this.domElement.addEventListener("pointerup",c),window.addEventListener("keydown",u),window.addEventListener("keyup",h),this.updateMovementVector(),this.updateRotationVector()}}function gh(n){n.preventDefault()}const VS={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Va{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const WS=new Pl(-1,1,1,-1,0,1),ql=new Qt;ql.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3));ql.setAttribute("uv",new Tt([0,2,0,0,2,0],2));class jS{constructor(e){this._mesh=new Ht(ql,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,WS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class $S extends Va{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof oi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=af.clone(e.uniforms),this.material=new oi({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new jS(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _h extends Va{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,s;this.inverse?(a=0,s=1):(a=1,s=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),o.buffers.stencil.setClear(s),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class XS extends Va{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class qS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new we);this._width=i.width,this._height=i.height,t=new bi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Or}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $S(VS),this.clock=new Sf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,o=this.passes.length;r<o;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}_h!==void 0&&(a instanceof _h?i=!0:a instanceof XS&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class YS extends Va{constructor(e,t,i,r,o){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o!==void 0?o:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new at}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let o,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),o=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,o),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=r}}function cl(){return cl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},cl.apply(this,arguments)}function KS(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Ao(n,e){return Ao=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Ao(n,e)}function ZS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,Ao(n,e)}function ul(n){return ul=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ul(n)}function JS(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function QS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ya(n,e,t){return QS()?ya=Reflect.construct.bind():ya=function(r,o,a){var s=[null];s.push.apply(s,o);var l=Function.bind.apply(r,s),c=new l;return a&&Ao(c,a.prototype),c},ya.apply(null,arguments)}function hl(n){var e=typeof Map=="function"?new Map:void 0;return hl=function(i){if(i===null||!JS(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,r)}function r(){return ya(i,arguments,ul(this).constructor)}return r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Ao(r,i)},hl(n)}var Er=function(n){ZS(e,n);function e(t){var i;return i=n.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this,KS(i)}return e}(hl(Error));function ks(n){return Math.round(n*255)}function ew(n,e,t){return ks(n)+","+ks(e)+","+ks(t)}function vh(n,e,t,i){if(i===void 0&&(i=ew),e===0)return i(t,t,t);var r=(n%360+360)%360/60,o=(1-Math.abs(2*t-1))*e,a=o*(1-Math.abs(r%2-1)),s=0,l=0,c=0;r>=0&&r<1?(s=o,l=a):r>=1&&r<2?(s=a,l=o):r>=2&&r<3?(l=o,c=a):r>=3&&r<4?(l=a,c=o):r>=4&&r<5?(s=a,c=o):r>=5&&r<6&&(s=o,c=a);var u=t-o/2,h=s+u,f=l+u,p=c+u;return i(h,f,p)}var yh={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function tw(n){if(typeof n!="string")return n;var e=n.toLowerCase();return yh[e]?"#"+yh[e]:n}var nw=/^#[a-fA-F0-9]{6}$/,iw=/^#[a-fA-F0-9]{8}$/,rw=/^#[a-fA-F0-9]{3}$/,ow=/^#[a-fA-F0-9]{4}$/,Bs=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,aw=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,sw=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,lw=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function Yl(n){if(typeof n!="string")throw new Er(3);var e=tw(n);if(e.match(nw))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(iw)){var t=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:t}}if(e.match(rw))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(ow)){var i=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:i}}var r=Bs.exec(e);if(r)return{red:parseInt(""+r[1],10),green:parseInt(""+r[2],10),blue:parseInt(""+r[3],10)};var o=aw.exec(e.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var a=sw.exec(e);if(a){var s=parseInt(""+a[1],10),l=parseInt(""+a[2],10)/100,c=parseInt(""+a[3],10)/100,u="rgb("+vh(s,l,c)+")",h=Bs.exec(u);if(!h)throw new Er(4,e,u);return{red:parseInt(""+h[1],10),green:parseInt(""+h[2],10),blue:parseInt(""+h[3],10)}}var f=lw.exec(e.substring(0,50));if(f){var p=parseInt(""+f[1],10),g=parseInt(""+f[2],10)/100,_=parseInt(""+f[3],10)/100,m="rgb("+vh(p,g,_)+")",d=Bs.exec(m);if(!d)throw new Er(4,e,m);return{red:parseInt(""+d[1],10),green:parseInt(""+d[2],10),blue:parseInt(""+d[3],10),alpha:parseFloat(""+f[4])>1?parseFloat(""+f[4])/100:parseFloat(""+f[4])}}throw new Er(5)}var cw=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},xh=cw;function vr(n){var e=n.toString(16);return e.length===1?"0"+e:e}function bh(n,e,t){if(typeof n=="number"&&typeof e=="number"&&typeof t=="number")return xh("#"+vr(n)+vr(e)+vr(t));if(typeof n=="object"&&e===void 0&&t===void 0)return xh("#"+vr(n.red)+vr(n.green)+vr(n.blue));throw new Er(6)}function uw(n,e,t,i){if(typeof n=="string"&&typeof e=="number"){var r=Yl(n);return"rgba("+r.red+","+r.green+","+r.blue+","+e+")"}else{if(typeof n=="number"&&typeof e=="number"&&typeof t=="number"&&typeof i=="number")return i>=1?bh(n,e,t):"rgba("+n+","+e+","+t+","+i+")";if(typeof n=="object"&&e===void 0&&t===void 0&&i===void 0)return n.alpha>=1?bh(n.red,n.green,n.blue):"rgba("+n.red+","+n.green+","+n.blue+","+n.alpha+")"}throw new Er(7)}function pd(n,e,t){return function(){var r=t.concat(Array.prototype.slice.call(arguments));return r.length>=e?n.apply(this,r):pd(n,e,r)}}function hw(n){return pd(n,n.length,[])}function fw(n,e,t){return Math.max(n,Math.min(e,t))}function dw(n,e){if(e==="transparent")return e;var t=Yl(e),i=typeof t.alpha=="number"?t.alpha:1,r=cl({},t,{alpha:fw(0,1,(i*100+parseFloat(n)*100)/100)});return uw(r)}var pw=hw(dw),mw=pw,yo={Linear:{None:function(n){return n}},Quadratic:{In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}},Cubic:{In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}},Quartic:{In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}},Quintic:{In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},Sinusoidal:{In:function(n){return 1-Math.cos(n*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.cos(Math.PI*n))}},Exponential:{In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}},Circular:{In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},Elastic:{In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}},Back:{In:function(n){var e=1.70158;return n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}},Bounce:{In:function(n){return 1-yo.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?yo.Bounce.In(n*2)*.5:yo.Bounce.Out(n*2-1)*.5+.5}}},uo;typeof self>"u"&&typeof process<"u"&&process.hrtime?uo=function(){var n=process.hrtime();return n[0]*1e3+n[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?uo=self.performance.now.bind(self.performance):Date.now!==void 0?uo=Date.now:uo=function(){return new Date().getTime()};var Bi=uo,md=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=Bi()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var o=this._tweens[i[r]],a=!t;o&&o.update(e,a)===!1&&!t&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),Tr={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),o=Tr.Utils.Linear;return e<0?o(n[0],n[1],i):e>1?o(n[t],n[t-1],t-i):o(n[r],n[r+1>t?t:r+1],i-r)},Bezier:function(n,e){for(var t=0,i=n.length-1,r=Math.pow,o=Tr.Utils.Bernstein,a=0;a<=i;a++)t+=r(1-e,i-a)*r(e,a)*n[a]*o(i,a);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),o=Tr.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(r=Math.floor(i=t*(1+e))),o(n[(r-1+t)%t],n[r],n[(r+1)%t],n[(r+2)%t],i-r)):e<0?n[0]-(o(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(o(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):o(n[r?r-1:0],n[r],n[t<r+1?t:r+1],n[t<r+2?t:r+2],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=Tr.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,r){var o=(t-n)*.5,a=(i-e)*.5,s=r*r,l=r*s;return(2*e-2*t+o+a)*l+(-3*e+3*t-2*o-a)*s+o*r+e}}},Kl=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),gd=new md,gw=function(){function n(e,t){t===void 0&&(t=gd),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=yo.Linear.None,this._interpolationFunction=Tr.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=Kl.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},n.prototype.duration=function(e){return this._duration=e,this},n.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?Bi()+parseFloat(e):e:Bi(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},n.prototype._setupProperties=function(e,t,i,r){for(var o in i){var a=e[o],s=Array.isArray(a),l=s?"array":typeof a,c=!s&&Array.isArray(i[o]);if(!(l==="undefined"||l==="function")){if(c){var u=i[o];if(u.length===0)continue;u=u.map(this._handleRelativeValue.bind(this,a)),i[o]=[a].concat(u)}if((l==="object"||s)&&a&&!c){t[o]=s?[]:{};for(var h in a)t[o][h]=a[h];r[o]=s?[]:{},this._setupProperties(a,t[o],i[o],r[o])}else typeof t[o]>"u"&&(t[o]=a),s||(t[o]*=1),c?r[o]=i[o].slice().reverse():r[o]=t[o]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=Bi()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=Bi()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return this._group=e,this},n.prototype.delay=function(e){return this._delayTime=e,this},n.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return this._yoyo=e,this},n.prototype.easing=function(e){return this._easingFunction=e,this},n.prototype.interpolation=function(e){return this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){if(e===void 0&&(e=Bi()),t===void 0&&(t=!0),this._isPaused)return!0;var i,r,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>o)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var a=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,a),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var s=0,l=this._chainedTweens.length;s<l;s++)this._chainedTweens[s].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var o in i)if(t[o]!==void 0){var a=t[o]||0,s=i[o],l=Array.isArray(e[o]),c=Array.isArray(s),u=!l&&c;u?e[o]=this._interpolationFunction(s,r):typeof s=="object"&&s?this._updateProperties(e[o],a,s,r):(s=this._handleRelativeValue(a,s),typeof s=="number"&&(e[o]=a+(s-a)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}(),_w="18.6.4",vw=Kl.nextId,kn=gd,yw=kn.getAll.bind(kn),xw=kn.removeAll.bind(kn),bw=kn.add.bind(kn),Mw=kn.remove.bind(kn),Sw=kn.update.bind(kn),no={Easing:yo,Group:md,Interpolation:Tr,now:Bi,Sequence:Kl,nextId:vw,Tween:gw,VERSION:_w,getAll:yw,removeAll:xw,add:bw,remove:Mw,update:Sw};function ww(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var Ew=`.scene-nav-info {
  bottom: 5px;
  width: 100%;
  text-align: center;
  color: slategrey;
  opacity: 0.7;
  font-size: 10px;
}

.scene-tooltip {
  top: 0;
  color: lavender;
  font-size: 15px;
}

.scene-nav-info, .scene-tooltip {
  position: absolute;
  font-family: sans-serif;
  pointer-events: none;
}

.scene-container canvas:focus {
  outline: none;
}`;ww(Ew);function Tw(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,a,s=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=o.call(t)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw r}}return s}}function Aw(n,e,t){return e=Nw(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Cw(n,e){return Pw(n)||Tw(n,e)||_d(n,e)||Dw()}function io(n){return Rw(n)||Lw(n)||_d(n)||Ow()}function Rw(n){if(Array.isArray(n))return fl(n)}function Pw(n){if(Array.isArray(n))return n}function Lw(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function _d(n,e){if(n){if(typeof n=="string")return fl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return fl(n,e)}}function fl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Ow(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Iw(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Nw(n){var e=Iw(n,"string");return typeof e=="symbol"?e:String(e)}var Mt=window.THREE?window.THREE:{WebGLRenderer:pf,Scene:X0,PerspectiveCamera:fn,Raycaster:wf,SRGBColorSpace:Qe,TextureLoader:vy,Vector2:we,Vector3:F,Box3:ji,Color:at,Mesh:Ht,SphereGeometry:Ro,MeshBasicMaterial:Fr,BackSide:Zt,EventDispatcher:Rn,MOUSE:Nn,Quaternion:Cn,Spherical:Qs,Clock:Sf},vd=$l({props:{width:{default:window.innerWidth,onChange:function(e,t,i){isNaN(e)&&(t.width=i)}},height:{default:window.innerHeight,onChange:function(e,t,i){isNaN(e)&&(t.height=i)}},backgroundColor:{default:"#000011"},backgroundImageUrl:{},onBackgroundImageLoaded:{},showNavInfo:{default:!0},skyRadius:{default:5e4},objects:{default:[]},enablePointerInteraction:{default:!0,onChange:function(e,t){t.hoverObj=null,t.toolTipElem&&(t.toolTipElem.innerHTML="")},triggerUpdate:!1},lineHoverPrecision:{default:1,triggerUpdate:!1},hoverOrderComparator:{default:function(){return-1},triggerUpdate:!1},hoverFilter:{default:function(){return!0},triggerUpdate:!1},tooltipContent:{triggerUpdate:!1},hoverDuringDrag:{default:!1,triggerUpdate:!1},clickAfterDrag:{default:!1,triggerUpdate:!1},onHover:{default:function(){},triggerUpdate:!1},onClick:{default:function(){},triggerUpdate:!1},onRightClick:{triggerUpdate:!1}},methods:{tick:function(e){if(e.initialised){if(e.controls.update&&e.controls.update(e.clock.getDelta()),e.postProcessingComposer?e.postProcessingComposer.render():e.renderer.render(e.scene,e.camera),e.extraRenderers.forEach(function(o){return o.render(e.scene,e.camera)}),e.enablePointerInteraction){var t=null;if(e.hoverDuringDrag||!e.isPointerDragging){var i=this.intersectingObjects(e.pointerPos.x,e.pointerPos.y).filter(function(o){return e.hoverFilter(o.object)}).sort(function(o,a){return e.hoverOrderComparator(o.object,a.object)}),r=i.length?i[0]:null;t=r?r.object:null,e.intersectionPoint=r?r.point:null}t!==e.hoverObj&&(e.onHover(t,e.hoverObj),e.toolTipElem.innerHTML=t&&ut(e.tooltipContent)(t)||"",e.hoverObj=t)}no.update()}return this},getPointerPos:function(e){var t=e.pointerPos,i=t.x,r=t.y;return{x:i,y:r}},cameraPosition:function(e,t,i,r){var o=e.camera;if(t&&e.initialised){var a=t,s=i||{x:0,y:0,z:0};if(!r)u(a),h(s);else{var l=Object.assign({},o.position),c=f();new no.Tween(l).to(a,r).easing(no.Easing.Quadratic.Out).onUpdate(u).start(),new no.Tween(c).to(s,r/3).easing(no.Easing.Quadratic.Out).onUpdate(h).start()}return this}return Object.assign({},o.position,{lookAt:f()});function u(p){var g=p.x,_=p.y,m=p.z;g!==void 0&&(o.position.x=g),_!==void 0&&(o.position.y=_),m!==void 0&&(o.position.z=m)}function h(p){var g=new Mt.Vector3(p.x,p.y,p.z);e.controls.target?e.controls.target=g:o.lookAt(g)}function f(){return Object.assign(new Mt.Vector3(0,0,-1e3).applyQuaternion(o.quaternion).add(o.position))}},zoomToFit:function(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,r=arguments.length,o=new Array(r>3?r-3:0),a=3;a<r;a++)o[a-3]=arguments[a];return this.fitToBbox(this.getBbox.apply(this,o),t,i)},fitToBbox:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10,o=e.camera;if(t){var a=new Mt.Vector3(0,0,0),s=Math.max.apply(Math,io(Object.entries(t).map(function(p){var g=Cw(p,2),_=g[0],m=g[1];return Math.max.apply(Math,io(m.map(function(d){return Math.abs(a[_]-d)})))})))*2,l=(1-r*2/e.height)*o.fov,c=s/Math.atan(l*Math.PI/180),u=c/o.aspect,h=Math.max(c,u);if(h>0){var f=a.clone().sub(o.position).normalize().multiplyScalar(-h);this.cameraPosition(f,a,i)}}return this},getBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},i=new Mt.Box3(new Mt.Vector3(0,0,0),new Mt.Vector3(0,0,0)),r=e.objects.filter(t);return r.length?(r.forEach(function(o){return i.expandByObject(o)}),Object.assign.apply(Object,io(["x","y","z"].map(function(o){return Aw({},o,[i.min[o],i.max[o]])})))):null},getScreenCoords:function(e,t,i,r){var o=new Mt.Vector3(t,i,r);return o.project(this.camera()),{x:(o.x+1)*e.width/2,y:-(o.y-1)*e.height/2}},getSceneCoords:function(e,t,i){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=new Mt.Vector2(t/e.width*2-1,-(i/e.height)*2+1),a=new Mt.Raycaster;return a.setFromCamera(o,e.camera),Object.assign({},a.ray.at(r,new Mt.Vector3))},intersectingObjects:function(e,t,i){var r=new Mt.Vector2(t/e.width*2-1,-(i/e.height)*2+1),o=new Mt.Raycaster;return o.params.Line.threshold=e.lineHoverPrecision,o.setFromCamera(r,e.camera),o.intersectObjects(e.objects,!0)},renderer:function(e){return e.renderer},scene:function(e){return e.scene},camera:function(e){return e.camera},postProcessingComposer:function(e){return e.postProcessingComposer},controls:function(e){return e.controls},tbControls:function(e){return e.controls}},stateInit:function(){return{scene:new Mt.Scene,camera:new Mt.PerspectiveCamera,clock:new Mt.Clock}},init:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=i.controlType,o=r===void 0?"trackball":r,a=i.rendererConfig,s=a===void 0?{}:a,l=i.extraRenderers,c=l===void 0?[]:l,u=i.waitForLoadComplete,h=u===void 0?!0:u;e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.className="scene-container",t.container.style.position="relative",t.container.appendChild(t.navInfo=document.createElement("div")),t.navInfo.className="scene-nav-info",t.navInfo.textContent={orbit:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",trackball:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",fly:"WASD: move, R|F: up | down, Q|E: roll, up|down: pitch, left|right: yaw"}[o]||"",t.navInfo.style.display=t.showNavInfo?null:"none",t.toolTipElem=document.createElement("div"),t.toolTipElem.classList.add("scene-tooltip"),t.container.appendChild(t.toolTipElem),t.pointerPos=new Mt.Vector2,t.pointerPos.x=-2,t.pointerPos.y=-2,["pointermove","pointerdown"].forEach(function(f){return t.container.addEventListener(f,function(p){if(f==="pointerdown"&&(t.isPointerPressed=!0),!t.isPointerDragging&&p.type==="pointermove"&&(p.pressure>0||t.isPointerPressed)&&(p.pointerType!=="touch"||p.movementX===void 0||[p.movementX,p.movementY].some(function(m){return Math.abs(m)>1}))&&(t.isPointerDragging=!0),t.enablePointerInteraction){var g=_(t.container);t.pointerPos.x=p.pageX-g.left,t.pointerPos.y=p.pageY-g.top,t.toolTipElem.style.top="".concat(t.pointerPos.y,"px"),t.toolTipElem.style.left="".concat(t.pointerPos.x,"px"),t.toolTipElem.style.transform="translate(-".concat(t.pointerPos.x/t.width*100,"%, ").concat(t.height-t.pointerPos.y<100?"calc(-100% - 8px)":"21px",")")}function _(m){var d=m.getBoundingClientRect(),M=window.pageXOffset||document.documentElement.scrollLeft,y=window.pageYOffset||document.documentElement.scrollTop;return{top:d.top+y,left:d.left+M}}},{passive:!0})}),t.container.addEventListener("pointerup",function(f){t.isPointerPressed=!1,!(t.isPointerDragging&&(t.isPointerDragging=!1,!t.clickAfterDrag))&&requestAnimationFrame(function(){f.button===0&&t.onClick(t.hoverObj||null,f,t.intersectionPoint),f.button===2&&t.onRightClick&&t.onRightClick(t.hoverObj||null,f,t.intersectionPoint)})},{passive:!0,capture:!0}),t.container.addEventListener("contextmenu",function(f){t.onRightClick&&f.preventDefault()}),t.renderer=new Mt.WebGLRenderer(Object.assign({antialias:!0,alpha:!0},s)),t.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),t.container.appendChild(t.renderer.domElement),t.extraRenderers=c,t.extraRenderers.forEach(function(f){f.domElement.style.position="absolute",f.domElement.style.top="0px",f.domElement.style.pointerEvents="none",t.container.appendChild(f.domElement)}),t.postProcessingComposer=new qS(t.renderer),t.postProcessingComposer.addPass(new YS(t.scene,t.camera)),t.controls=new{trackball:BS,orbit:zS,fly:GS}[o](t.camera,t.renderer.domElement),o==="fly"&&(t.controls.movementSpeed=300,t.controls.rollSpeed=Math.PI/6,t.controls.dragToLook=!0),(o==="trackball"||o==="orbit")&&(t.controls.minDistance=.1,t.controls.maxDistance=t.skyRadius,t.controls.addEventListener("start",function(){t.controlsEngaged=!0}),t.controls.addEventListener("change",function(){t.controlsEngaged&&(t.controlsDragging=!0)}),t.controls.addEventListener("end",function(){t.controlsEngaged=!1,t.controlsDragging=!1})),[t.renderer,t.postProcessingComposer].concat(io(t.extraRenderers)).forEach(function(f){return f.setSize(t.width,t.height)}),t.camera.aspect=t.width/t.height,t.camera.updateProjectionMatrix(),t.camera.position.z=1e3,t.scene.add(t.skysphere=new Mt.Mesh),t.skysphere.visible=!1,t.loadComplete=t.scene.visible=!h,window.scene=t.scene},update:function(e,t){if(e.width&&e.height&&(t.hasOwnProperty("width")||t.hasOwnProperty("height"))&&(e.container.style.width="".concat(e.width,"px"),e.container.style.height="".concat(e.height,"px"),[e.renderer,e.postProcessingComposer].concat(io(e.extraRenderers)).forEach(function(o){return o.setSize(e.width,e.height)}),e.camera.aspect=e.width/e.height,e.camera.updateProjectionMatrix()),t.hasOwnProperty("skyRadius")&&e.skyRadius&&(e.controls.hasOwnProperty("maxDistance")&&t.skyRadius&&(e.controls.maxDistance=Math.min(e.controls.maxDistance,e.skyRadius)),e.camera.far=e.skyRadius*2.5,e.camera.updateProjectionMatrix(),e.skysphere.geometry=new Mt.SphereGeometry(e.skyRadius)),t.hasOwnProperty("backgroundColor")){var i=Yl(e.backgroundColor).alpha;i===void 0&&(i=1),e.renderer.setClearColor(new Mt.Color(mw(1,e.backgroundColor)),i)}t.hasOwnProperty("backgroundImageUrl")&&(e.backgroundImageUrl?new Mt.TextureLoader().load(e.backgroundImageUrl,function(o){o.colorSpace=Mt.SRGBColorSpace,e.skysphere.material=new Mt.MeshBasicMaterial({map:o,side:Mt.BackSide}),e.skysphere.visible=!0,e.onBackgroundImageLoaded&&setTimeout(e.onBackgroundImageLoaded),!e.loadComplete&&r()}):(e.skysphere.visible=!1,e.skysphere.material.map=null,!e.loadComplete&&r())),t.hasOwnProperty("showNavInfo")&&(e.navInfo.style.display=e.showNavInfo?null:"none"),t.hasOwnProperty("objects")&&((t.objects||[]).forEach(function(o){return e.scene.remove(o)}),e.objects.forEach(function(o){return e.scene.add(o)}));function r(){e.loadComplete=e.scene.visible=!0}}});function Uw(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var Fw=`.graph-info-msg {
  top: 50%;
  width: 100%;
  text-align: center;
  color: lavender;
  opacity: 0.7;
  font-size: 22px;
  position: absolute;
  font-family: Sans-serif;
}

.scene-container .clickable {
  cursor: pointer;
}

.scene-container .grabbable {
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

.scene-container .grabbable:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}`;Uw(Fw);function Mh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function ua(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Mh(Object(t),!0).forEach(function(i){Lo(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Mh(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Lo(n,e,t){return e=Vw(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Wa(n){return kw(n)||Bw(n)||zw(n)||Hw()}function kw(n){if(Array.isArray(n))return dl(n)}function Bw(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function zw(n,e){if(n){if(typeof n=="string")return dl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return dl(n,e)}}function dl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Hw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gw(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Vw(n){var e=Gw(n,"string");return typeof e=="symbol"?e:String(e)}function yd(n,e){var t=new e;return{linkProp:function(r){return{default:t[r](),onChange:function(a,s){s[n][r](a)},triggerUpdate:!1}},linkMethod:function(r){return function(o){for(var a=o[n],s=arguments.length,l=new Array(s>1?s-1:0),c=1;c<s;c++)l[c-1]=arguments[c];var u=a[r].apply(a,l);return u===a?this:u}}}}var Sh=window.THREE?window.THREE:{AmbientLight:My,DirectionalLight:by,Vector3:F},Ww=170,xd=yd("forceGraph",dd),jw=Object.assign.apply(Object,Wa(["jsonUrl","graphData","numDimensions","dagMode","dagLevelDistance","dagNodeFilter","onDagError","nodeRelSize","nodeId","nodeVal","nodeResolution","nodeColor","nodeAutoColorBy","nodeOpacity","nodeVisibility","nodeThreeObject","nodeThreeObjectExtend","linkSource","linkTarget","linkVisibility","linkColor","linkAutoColorBy","linkOpacity","linkWidth","linkResolution","linkCurvature","linkCurveRotation","linkMaterial","linkThreeObject","linkThreeObjectExtend","linkPositionUpdate","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowRelPos","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleSpeed","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution","forceEngine","d3AlphaDecay","d3VelocityDecay","d3AlphaMin","ngraphPhysics","warmupTicks","cooldownTicks","cooldownTime","onEngineTick","onEngineStop"].map(function(n){return Lo({},n,xd.linkProp(n))}))),$w=Object.assign.apply(Object,Wa(["refresh","getGraphBbox","d3Force","d3ReheatSimulation","emitParticle"].map(function(n){return Lo({},n,xd.linkMethod(n))}))),xa=yd("renderObjs",vd),Xw=Object.assign.apply(Object,Wa(["width","height","backgroundColor","showNavInfo","enablePointerInteraction"].map(function(n){return Lo({},n,xa.linkProp(n))}))),qw=Object.assign.apply(Object,Wa(["cameraPosition","postProcessingComposer"].map(function(n){return Lo({},n,xa.linkMethod(n))})).concat([{graph2ScreenCoords:xa.linkMethod("getScreenCoords"),screen2GraphCoords:xa.linkMethod("getSceneCoords")}])),Yw=$l({props:ua(ua({nodeLabel:{default:"name",triggerUpdate:!1},linkLabel:{default:"name",triggerUpdate:!1},linkHoverPrecision:{default:1,onChange:function(e,t){return t.renderObjs.lineHoverPrecision(e)},triggerUpdate:!1},enableNavigationControls:{default:!0,onChange:function(e,t){var i=t.renderObjs.controls();i&&(i.enabled=e,e&&i.domElement&&i.domElement.dispatchEvent(new PointerEvent("pointerup")))},triggerUpdate:!1},enableNodeDrag:{default:!0,triggerUpdate:!1},onNodeDrag:{default:function(){},triggerUpdate:!1},onNodeDragEnd:{default:function(){},triggerUpdate:!1},onNodeClick:{triggerUpdate:!1},onNodeRightClick:{triggerUpdate:!1},onNodeHover:{triggerUpdate:!1},onLinkClick:{triggerUpdate:!1},onLinkRightClick:{triggerUpdate:!1},onLinkHover:{triggerUpdate:!1},onBackgroundClick:{triggerUpdate:!1},onBackgroundRightClick:{triggerUpdate:!1}},jw),Xw),methods:ua(ua({zoomToFit:function(e,t,i){for(var r,o=arguments.length,a=new Array(o>3?o-3:0),s=3;s<o;s++)a[s-3]=arguments[s];return e.renderObjs.fitToBbox((r=e.forceGraph).getGraphBbox.apply(r,a),t,i),this},pauseAnimation:function(e){return e.animationFrameRequestId!==null&&(cancelAnimationFrame(e.animationFrameRequestId),e.animationFrameRequestId=null),this},resumeAnimation:function(e){return e.animationFrameRequestId===null&&this._animationCycle(),this},_animationCycle:function(e){e.enablePointerInteraction&&(this.renderer().domElement.style.cursor=null),e.forceGraph.tickFrame(),e.renderObjs.tick(),e.animationFrameRequestId=requestAnimationFrame(this._animationCycle)},scene:function(e){return e.renderObjs.scene()},camera:function(e){return e.renderObjs.camera()},renderer:function(e){return e.renderObjs.renderer()},controls:function(e){return e.renderObjs.controls()},tbControls:function(e){return e.renderObjs.tbControls()},_destructor:function(){this.pauseAnimation(),this.graphData({nodes:[],links:[]})}},$w),qw),stateInit:function(e){var t=e.controlType,i=e.rendererConfig,r=e.extraRenderers;return{forceGraph:new dd,renderObjs:vd({controlType:t,rendererConfig:i,extraRenderers:r})}},init:function(e,t){e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.style.position="relative";var i=document.createElement("div");t.container.appendChild(i),t.renderObjs(i);var r=t.renderObjs.camera(),o=t.renderObjs.renderer(),a=t.renderObjs.controls();a.enabled=!!t.enableNavigationControls,t.lastSetCameraZ=r.position.z;var s;t.container.appendChild(s=document.createElement("div")),s.className="graph-info-msg",s.textContent="",t.forceGraph.onLoading(function(){s.textContent="Loading..."}).onFinishLoading(function(){s.textContent=""}).onUpdate(function(){t.graphData=t.forceGraph.graphData(),r.position.x===0&&r.position.y===0&&r.position.z===t.lastSetCameraZ&&t.graphData.nodes.length&&(r.lookAt(t.forceGraph.position),t.lastSetCameraZ=r.position.z=Math.cbrt(t.graphData.nodes.length)*Ww)}).onFinishUpdate(function(){if(t._dragControls){var l=t.graphData.nodes.find(function(u){return u.__initialFixedPos&&!u.__disposeControlsAfterDrag});l?l.__disposeControlsAfterDrag=!0:t._dragControls.dispose(),t._dragControls=void 0}if(t.enableNodeDrag&&t.enablePointerInteraction&&t.forceEngine==="d3"){var c=t._dragControls=new Sy(t.graphData.nodes.map(function(u){return u.__threeObj}).filter(function(u){return u}),r,o.domElement);c.addEventListener("dragstart",function(u){a.enabled=!1,u.object.__initialPos=u.object.position.clone(),u.object.__prevPos=u.object.position.clone();var h=Kn(u.object).__data;!h.__initialFixedPos&&(h.__initialFixedPos={fx:h.fx,fy:h.fy,fz:h.fz}),!h.__initialPos&&(h.__initialPos={x:h.x,y:h.y,z:h.z}),["x","y","z"].forEach(function(f){return h["f".concat(f)]=h[f]}),o.domElement.classList.add("grabbable")}),c.addEventListener("drag",function(u){var h=Kn(u.object);if(!u.object.hasOwnProperty("__graphObjType")){var f=u.object.__initialPos,p=u.object.__prevPos,g=u.object.position;h.position.add(g.clone().sub(p)),p.copy(g),g.copy(f)}var _=h.__data,m=h.position,d={x:m.x-_.x,y:m.y-_.y,z:m.z-_.z};["x","y","z"].forEach(function(M){return _["f".concat(M)]=_[M]=m[M]}),t.forceGraph.d3AlphaTarget(.3).resetCountdown(),_.__dragged=!0,t.onNodeDrag(_,d)}),c.addEventListener("dragend",function(u){delete u.object.__initialPos,delete u.object.__prevPos;var h=Kn(u.object).__data;h.__disposeControlsAfterDrag&&(c.dispose(),delete h.__disposeControlsAfterDrag);var f=h.__initialFixedPos,p=h.__initialPos,g={x:p.x-h.x,y:p.y-h.y,z:p.z-h.z};f&&(["x","y","z"].forEach(function(_){var m="f".concat(_);f[m]===void 0&&delete h[m]}),delete h.__initialFixedPos,delete h.__initialPos,h.__dragged&&(delete h.__dragged,t.onNodeDragEnd(h,g))),t.forceGraph.d3AlphaTarget(0).resetCountdown(),t.enableNavigationControls&&(a.enabled=!0,a.domElement&&a.domElement.ownerDocument&&a.domElement.ownerDocument.dispatchEvent(new PointerEvent("pointerup",{pointerType:"touch"}))),o.domElement.classList.remove("grabbable")})}}),t.renderObjs.objects([new Sh.AmbientLight(13421772),new Sh.DirectionalLight(16777215,.6),t.forceGraph]).hoverOrderComparator(function(l,c){var u=Kn(l);if(!u)return 1;var h=Kn(c);if(!h)return-1;var f=function(g){return g.__graphObjType==="node"};return f(h)-f(u)}).tooltipContent(function(l){var c=Kn(l);return c&&ut(t["".concat(c.__graphObjType,"Label")])(c.__data)||""}).hoverDuringDrag(!1).onHover(function(l){var c=Kn(l);if(c!==t.hoverObj){var u=t.hoverObj?t.hoverObj.__graphObjType:null,h=t.hoverObj?t.hoverObj.__data:null,f=c?c.__graphObjType:null,p=c?c.__data:null;if(u&&u!==f){var g=t["on".concat(u==="node"?"Node":"Link","Hover")];g&&g(null,h)}if(f){var _=t["on".concat(f==="node"?"Node":"Link","Hover")];_&&_(p,u===f?h:null)}o.domElement.classList[c&&t["on".concat(f==="node"?"Node":"Link","Click")]||!c&&t.onBackgroundClick?"add":"remove"]("clickable"),t.hoverObj=c}}).clickAfterDrag(!1).onClick(function(l,c){var u=Kn(l);if(u){var h=t["on".concat(u.__graphObjType==="node"?"Node":"Link","Click")];h&&h(u.__data,c)}else t.onBackgroundClick&&t.onBackgroundClick(c)}).onRightClick(function(l,c){var u=Kn(l);if(u){var h=t["on".concat(u.__graphObjType==="node"?"Node":"Link","RightClick")];h&&h(u.__data,c)}else t.onBackgroundRightClick&&t.onBackgroundRightClick(c)}),this._animationCycle()}});function Kn(n){for(var e=n;e&&!e.hasOwnProperty("__graphObjType");)e=e.parent;return e}function Kw(n){if(n&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=n,document.head.appendChild(e),n}}function Ar(n,e){var t=n.__state.conversionName.toString(),i=Math.round(n.r),r=Math.round(n.g),o=Math.round(n.b),a=n.a,s=Math.round(n.h),l=n.s.toFixed(1),c=n.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=n.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+i+","+r+","+o+")";if(t==="CSS_RGBA")return"rgba("+i+","+r+","+o+","+a+")";if(t==="HEX")return"0x"+n.hex.toString(16);if(t==="RGB_ARRAY")return"["+i+","+r+","+o+"]";if(t==="RGBA_ARRAY")return"["+i+","+r+","+o+","+a+"]";if(t==="RGB_OBJ")return"{r:"+i+",g:"+r+",b:"+o+"}";if(t==="RGBA_OBJ")return"{r:"+i+",g:"+r+",b:"+o+",a:"+a+"}";if(t==="HSV_OBJ")return"{h:"+s+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+s+",s:"+l+",v:"+c+",a:"+a+"}"}return"unknown format"}var wh=Array.prototype.forEach,ro=Array.prototype.slice,me={BREAK:{},extend:function(e){return this.each(ro.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach(function(r){this.isUndefined(t[r])||(e[r]=t[r])}.bind(this))},this),e},defaults:function(e){return this.each(ro.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach(function(r){this.isUndefined(e[r])&&(e[r]=t[r])}.bind(this))},this),e},compose:function(){var e=ro.call(arguments);return function(){for(var t=ro.call(arguments),i=e.length-1;i>=0;i--)t=[e[i].apply(this,t)];return t[0]}},each:function(e,t,i){if(e){if(wh&&e.forEach&&e.forEach===wh)e.forEach(t,i);else if(e.length===e.length+0){var r=void 0,o=void 0;for(r=0,o=e.length;r<o;r++)if(r in e&&t.call(i,e[r],r)===this.BREAK)return}else for(var a in e)if(t.call(i,e[a],a)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,i){var r=void 0;return function(){var o=this,a=arguments;function s(){r=null,i||e.apply(o,a)}var l=i||!r;clearTimeout(r),r=setTimeout(s,t),l&&e.apply(o,a)}},toArray:function(e){return e.toArray?e.toArray():ro.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(n){function e(t){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(n){return isNaN(n)}),isArray:Array.isArray||function(n){return n.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},Zw=[{litmus:me.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:Ar},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:Ar},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:Ar},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:Ar}}},{litmus:me.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:me.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:me.isObject,conversions:{RGBA_OBJ:{read:function(e){return me.isNumber(e.r)&&me.isNumber(e.g)&&me.isNumber(e.b)&&me.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return me.isNumber(e.r)&&me.isNumber(e.g)&&me.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return me.isNumber(e.h)&&me.isNumber(e.s)&&me.isNumber(e.v)&&me.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return me.isNumber(e.h)&&me.isNumber(e.s)&&me.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],oo=void 0,ha=void 0,pl=function(){ha=!1;var e=arguments.length>1?me.toArray(arguments):arguments[0];return me.each(Zw,function(t){if(t.litmus(e))return me.each(t.conversions,function(i,r){if(oo=i.read(e),ha===!1&&oo!==!1)return ha=oo,oo.conversionName=r,oo.conversion=i,me.BREAK}),me.BREAK}),ha},Eh=void 0,La={hsv_to_rgb:function(e,t,i){var r=Math.floor(e/60)%6,o=e/60-Math.floor(e/60),a=i*(1-t),s=i*(1-o*t),l=i*(1-(1-o)*t),c=[[i,l,a],[s,i,a],[a,i,l],[a,s,i],[l,a,i],[i,a,s]][r];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,i){var r=Math.min(e,t,i),o=Math.max(e,t,i),a=o-r,s=void 0,l=void 0;if(o!==0)l=a/o;else return{h:NaN,s:0,v:0};return e===o?s=(t-i)/a:t===o?s=2+(i-e)/a:s=4+(e-t)/a,s/=6,s<0&&(s+=1),{h:s*360,s:l,v:o/255}},rgb_to_hex:function(e,t,i){var r=this.hex_with_component(0,2,e);return r=this.hex_with_component(r,1,t),r=this.hex_with_component(r,0,i),r},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,i){return i<<(Eh=t*8)|e&~(255<<Eh)}},Jw=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Pn=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")},Ln=function(){function n(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),Mi=function n(e,t,i){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(r===void 0){var o=Object.getPrototypeOf(e);return o===null?void 0:n(o,t,i)}else{if("value"in r)return r.value;var a=r.get;return a===void 0?void 0:a.call(i)}},Ei=function(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)},Ti=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n},Ft=function(){function n(){if(Pn(this,n),this.__state=pl.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Ln(n,[{key:"toString",value:function(){return Ar(this)}},{key:"toHexString",value:function(){return Ar(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),n}();function Zl(n,e,t){Object.defineProperty(n,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Ft.recalculateRGB(this,e,t),this.__state[e])},set:function(r){this.__state.space!=="RGB"&&(Ft.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=r}})}function Jl(n,e){Object.defineProperty(n,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Ft.recalculateHSV(this),this.__state[e])},set:function(i){this.__state.space!=="HSV"&&(Ft.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=i}})}Ft.recalculateRGB=function(n,e,t){if(n.__state.space==="HEX")n.__state[e]=La.component_from_hex(n.__state.hex,t);else if(n.__state.space==="HSV")me.extend(n.__state,La.hsv_to_rgb(n.__state.h,n.__state.s,n.__state.v));else throw new Error("Corrupted color state")};Ft.recalculateHSV=function(n){var e=La.rgb_to_hsv(n.r,n.g,n.b);me.extend(n.__state,{s:e.s,v:e.v}),me.isNaN(e.h)?me.isUndefined(n.__state.h)&&(n.__state.h=0):n.__state.h=e.h};Ft.COMPONENTS=["r","g","b","h","s","v","hex","a"];Zl(Ft.prototype,"r",2);Zl(Ft.prototype,"g",1);Zl(Ft.prototype,"b",0);Jl(Ft.prototype,"h");Jl(Ft.prototype,"s");Jl(Ft.prototype,"v");Object.defineProperty(Ft.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Ft.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=La.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var $i=function(){function n(e,t){Pn(this,n),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Ln(n,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),n}(),Qw={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},bd={};me.each(Qw,function(n,e){me.each(n,function(t){bd[t]=e})});var eE=/(\d+(\.\d+)?)px/;function On(n){if(n==="0"||me.isUndefined(n))return 0;var e=n.match(eE);return me.isNull(e)?0:parseFloat(e[1])}var ee={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,i){var r=i,o=t;me.isUndefined(o)&&(o=!0),me.isUndefined(r)&&(r=!0),e.style.position="absolute",o&&(e.style.left=0,e.style.right=0),r&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,i,r){var o=i||{},a=bd[t];if(!a)throw new Error("Event type "+t+" not supported.");var s=document.createEvent(a);switch(a){case"MouseEvents":{var l=o.x||o.clientX||0,c=o.y||o.clientY||0;s.initMouseEvent(t,o.bubbles||!1,o.cancelable||!0,window,o.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=s.initKeyboardEvent||s.initKeyEvent;me.defaults(o,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,o.bubbles||!1,o.cancelable,window,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey,o.keyCode,o.charCode);break}default:{s.initEvent(t,o.bubbles||!1,o.cancelable||!0);break}}me.defaults(s,r),e.dispatchEvent(s)},bind:function(e,t,i,r){var o=r||!1;return e.addEventListener?e.addEventListener(t,i,o):e.attachEvent&&e.attachEvent("on"+t,i),ee},unbind:function(e,t,i,r){var o=r||!1;return e.removeEventListener?e.removeEventListener(t,i,o):e.detachEvent&&e.detachEvent("on"+t,i),ee},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var i=e.className.split(/ +/);i.indexOf(t)===-1&&(i.push(t),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return ee},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var i=e.className.split(/ +/),r=i.indexOf(t);r!==-1&&(i.splice(r,1),e.className=i.join(" "))}else e.className=void 0;return ee},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return On(t["border-left-width"])+On(t["border-right-width"])+On(t["padding-left"])+On(t["padding-right"])+On(t.width)},getHeight:function(e){var t=getComputedStyle(e);return On(t["border-top-width"])+On(t["border-bottom-width"])+On(t["padding-top"])+On(t["padding-bottom"])+On(t.height)},getOffset:function(e){var t=e,i={left:0,top:0};if(t.offsetParent)do i.left+=t.offsetLeft,i.top+=t.offsetTop,t=t.offsetParent;while(t);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Md=function(n){Ei(e,n);function e(t,i){Pn(this,e);var r=Ti(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function a(){o.setValue(!o.__prev)}return ee.bind(r.__checkbox,"change",a,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return Ln(e,[{key:"setValue",value:function(i){var r=Mi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Mi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}($i),tE=function(n){Ei(e,n);function e(t,i,r){Pn(this,e);var o=Ti(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),a=r,s=o;if(o.__select=document.createElement("select"),me.isArray(a)){var l={};me.each(a,function(c){l[c]=c}),a=l}return me.each(a,function(c,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",c),s.__select.appendChild(h)}),o.updateDisplay(),ee.bind(o.__select,"change",function(){var c=this.options[this.selectedIndex].value;s.setValue(c)}),o.domElement.appendChild(o.__select),o}return Ln(e,[{key:"setValue",value:function(i){var r=Mi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return ee.isActive(this.__select)?this:(this.__select.value=this.getValue(),Mi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}($i),nE=function(n){Ei(e,n);function e(t,i){Pn(this,e);var r=Ti(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=r;function a(){o.setValue(o.__input.value)}function s(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),ee.bind(r.__input,"keyup",a),ee.bind(r.__input,"change",a),ee.bind(r.__input,"blur",s),ee.bind(r.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return Ln(e,[{key:"updateDisplay",value:function(){return ee.isActive(this.__input)||(this.__input.value=this.getValue()),Mi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}($i);function Th(n){var e=n.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var Sd=function(n){Ei(e,n);function e(t,i,r){Pn(this,e);var o=Ti(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),a=r||{};return o.__min=a.min,o.__max=a.max,o.__step=a.step,me.isUndefined(o.__step)?o.initialValue===0?o.__impliedStep=1:o.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(o.initialValue))/Math.LN10))/10:o.__impliedStep=o.__step,o.__precision=Th(o.__impliedStep),o}return Ln(e,[{key:"setValue",value:function(i){var r=i;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),Mi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=Th(i),this}}]),e}($i);function iE(n,e){var t=Math.pow(10,e);return Math.round(n*t)/t}var Oa=function(n){Ei(e,n);function e(t,i,r){Pn(this,e);var o=Ti(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,r));o.__truncationSuspended=!1;var a=o,s=void 0;function l(){var g=parseFloat(a.__input.value);me.isNaN(g)||a.setValue(g)}function c(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}function u(){c()}function h(g){var _=s-g.clientY;a.setValue(a.getValue()+_*a.__impliedStep),s=g.clientY}function f(){ee.unbind(window,"mousemove",h),ee.unbind(window,"mouseup",f),c()}function p(g){ee.bind(window,"mousemove",h),ee.bind(window,"mouseup",f),s=g.clientY}return o.__input=document.createElement("input"),o.__input.setAttribute("type","text"),ee.bind(o.__input,"change",l),ee.bind(o.__input,"blur",u),ee.bind(o.__input,"mousedown",p),ee.bind(o.__input,"keydown",function(g){g.keyCode===13&&(a.__truncationSuspended=!0,this.blur(),a.__truncationSuspended=!1,c())}),o.updateDisplay(),o.domElement.appendChild(o.__input),o}return Ln(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():iE(this.getValue(),this.__precision),Mi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Sd);function Ah(n,e,t,i,r){return i+(r-i)*((n-e)/(t-e))}var ml=function(n){Ei(e,n);function e(t,i,r,o,a){Pn(this,e);var s=Ti(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,{min:r,max:o,step:a})),l=s;s.__background=document.createElement("div"),s.__foreground=document.createElement("div"),ee.bind(s.__background,"mousedown",c),ee.bind(s.__background,"touchstart",f),ee.addClass(s.__background,"slider"),ee.addClass(s.__foreground,"slider-fg");function c(_){document.activeElement.blur(),ee.bind(window,"mousemove",u),ee.bind(window,"mouseup",h),u(_)}function u(_){_.preventDefault();var m=l.__background.getBoundingClientRect();return l.setValue(Ah(_.clientX,m.left,m.right,l.__min,l.__max)),!1}function h(){ee.unbind(window,"mousemove",u),ee.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function f(_){_.touches.length===1&&(ee.bind(window,"touchmove",p),ee.bind(window,"touchend",g),p(_))}function p(_){var m=_.touches[0].clientX,d=l.__background.getBoundingClientRect();l.setValue(Ah(m,d.left,d.right,l.__min,l.__max))}function g(){ee.unbind(window,"touchmove",p),ee.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return s.updateDisplay(),s.__background.appendChild(s.__foreground),s.domElement.appendChild(s.__background),s}return Ln(e,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",Mi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Sd),wd=function(n){Ei(e,n);function e(t,i,r){Pn(this,e);var o=Ti(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),a=o;return o.__button=document.createElement("div"),o.__button.innerHTML=r===void 0?"Fire":r,ee.bind(o.__button,"click",function(s){return s.preventDefault(),a.fire(),!1}),ee.addClass(o.__button,"button"),o.domElement.appendChild(o.__button),o}return Ln(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}($i),gl=function(n){Ei(e,n);function e(t,i){Pn(this,e);var r=Ti(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));r.__color=new Ft(r.getValue()),r.__temp=new Ft(0);var o=r;r.domElement=document.createElement("div"),ee.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",ee.bind(r.__input,"keydown",function(_){_.keyCode===13&&h.call(this)}),ee.bind(r.__input,"blur",h),ee.bind(r.__selector,"mousedown",function(){ee.addClass(this,"drag").bind(window,"mouseup",function(){ee.removeClass(o.__selector,"drag")})}),ee.bind(r.__selector,"touchstart",function(){ee.addClass(this,"drag").bind(window,"touchend",function(){ee.removeClass(o.__selector,"drag")})});var a=document.createElement("div");me.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),me.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),me.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),me.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),me.extend(a.style,{width:"100%",height:"100%",background:"none"}),Ch(a,"top","rgba(0,0,0,0)","#000"),me.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),oE(r.__hue_field),me.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),ee.bind(r.__saturation_field,"mousedown",s),ee.bind(r.__saturation_field,"touchstart",s),ee.bind(r.__field_knob,"mousedown",s),ee.bind(r.__field_knob,"touchstart",s),ee.bind(r.__hue_field,"mousedown",l),ee.bind(r.__hue_field,"touchstart",l);function s(_){p(_),ee.bind(window,"mousemove",p),ee.bind(window,"touchmove",p),ee.bind(window,"mouseup",c),ee.bind(window,"touchend",c)}function l(_){g(_),ee.bind(window,"mousemove",g),ee.bind(window,"touchmove",g),ee.bind(window,"mouseup",u),ee.bind(window,"touchend",u)}function c(){ee.unbind(window,"mousemove",p),ee.unbind(window,"touchmove",p),ee.unbind(window,"mouseup",c),ee.unbind(window,"touchend",c),f()}function u(){ee.unbind(window,"mousemove",g),ee.unbind(window,"touchmove",g),ee.unbind(window,"mouseup",u),ee.unbind(window,"touchend",u),f()}function h(){var _=pl(this.value);_!==!1?(o.__color.__state=_,o.setValue(o.__color.toOriginal())):this.value=o.__color.toString()}function f(){o.__onFinishChange&&o.__onFinishChange.call(o,o.__color.toOriginal())}r.__saturation_field.appendChild(a),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function p(_){_.type.indexOf("touch")===-1&&_.preventDefault();var m=o.__saturation_field.getBoundingClientRect(),d=_.touches&&_.touches[0]||_,M=d.clientX,y=d.clientY,b=(M-m.left)/(m.right-m.left),x=1-(y-m.top)/(m.bottom-m.top);return x>1?x=1:x<0&&(x=0),b>1?b=1:b<0&&(b=0),o.__color.v=x,o.__color.s=b,o.setValue(o.__color.toOriginal()),!1}function g(_){_.type.indexOf("touch")===-1&&_.preventDefault();var m=o.__hue_field.getBoundingClientRect(),d=_.touches&&_.touches[0]||_,M=d.clientY,y=1-(M-m.top)/(m.bottom-m.top);return y>1?y=1:y<0&&(y=0),o.__color.h=y*360,o.setValue(o.__color.toOriginal()),!1}return r}return Ln(e,[{key:"updateDisplay",value:function(){var i=pl(this.getValue());if(i!==!1){var r=!1;me.each(Ft.COMPONENTS,function(s){if(!me.isUndefined(i[s])&&!me.isUndefined(this.__color.__state[s])&&i[s]!==this.__color.__state[s])return r=!0,{}},this),r&&me.extend(this.__color.__state,i)}me.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var o=this.__color.v<.5||this.__color.s>.5?255:0,a=255-o;me.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+o+","+o+","+o+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Ch(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),me.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+o+","+o+","+o+")",textShadow:this.__input_textShadow+"rgba("+a+","+a+","+a+",.7)"})}}]),e}($i),rE=["-moz-","-o-","-webkit-","-ms-",""];function Ch(n,e,t,i){n.style.background="",me.each(rE,function(r){n.style.cssText+="background: "+r+"linear-gradient("+e+", "+t+" 0%, "+i+" 100%); "})}function oE(n){n.style.background="",n.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",n.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var aE={load:function(e,t){var i=t||document,r=i.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,i.getElementsByTagName("head")[0].appendChild(r)},inject:function(e,t){var i=t||document,r=document.createElement("style");r.type="text/css",r.innerHTML=e;var o=i.getElementsByTagName("head")[0];try{o.appendChild(r)}catch{}}},sE=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,lE=function(e,t){var i=e[t];return me.isArray(arguments[2])||me.isObject(arguments[2])?new tE(e,t,arguments[2]):me.isNumber(i)?me.isNumber(arguments[2])&&me.isNumber(arguments[3])?me.isNumber(arguments[4])?new ml(e,t,arguments[2],arguments[3],arguments[4]):new ml(e,t,arguments[2],arguments[3]):me.isNumber(arguments[4])?new Oa(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Oa(e,t,{min:arguments[2],max:arguments[3]}):me.isString(i)?new nE(e,t):me.isFunction(i)?new wd(e,t,""):me.isBoolean(i)?new Md(e,t):null};function cE(n){setTimeout(n,1e3/60)}var uE=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||cE,hE=function(){function n(){Pn(this,n),this.backgroundElement=document.createElement("div"),me.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),ee.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),me.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;ee.bind(this.backgroundElement,"click",function(){e.hide()})}return Ln(n,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),me.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,i=function r(){t.domElement.style.display="none",t.backgroundElement.style.display="none",ee.unbind(t.domElement,"webkitTransitionEnd",r),ee.unbind(t.domElement,"transitionend",r),ee.unbind(t.domElement,"oTransitionEnd",r)};ee.bind(this.domElement,"webkitTransitionEnd",i),ee.bind(this.domElement,"transitionend",i),ee.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-ee.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-ee.getHeight(this.domElement)/2+"px"}}]),n}(),fE=Kw(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);aE.inject(fE);var Rh="dg",Ph=72,Lh=20,Co="Default",ho=function(){try{return!!window.localStorage}catch{return!1}}(),xo=void 0,Oh=!0,br=void 0,zs=!1,Ed=[],_t=function n(e){var t=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),ee.addClass(this.domElement,Rh),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=me.defaults(i,{closeOnTop:!1,autoPlace:!0,width:n.DEFAULT_WIDTH}),i=me.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),me.isUndefined(i.load)?i.load={preset:Co}:i.preset&&(i.load.preset=i.preset),me.isUndefined(i.parent)&&i.hideable&&Ed.push(this),i.resizable=me.isUndefined(i.parent)&&i.resizable,i.autoPlace&&me.isUndefined(i.scrollable)&&(i.scrollable=!0);var r=ho&&localStorage.getItem(Mr(this,"isLocal"))==="true",o=void 0,a=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:i.load.preset},set:function(f){t.parent?t.getRoot().preset=f:i.load.preset=f,gE(this),t.revert()}},width:{get:function(){return i.width},set:function(f){i.width=f,yl(t,f)}},name:{get:function(){return i.name},set:function(f){i.name=f,a&&(a.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(f){i.closed=f,i.closed?ee.addClass(t.__ul,n.CLASS_CLOSED):ee.removeClass(t.__ul,n.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=f?n.TEXT_OPEN:n.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return r},set:function(f){ho&&(r=f,f?ee.bind(window,"unload",o):ee.unbind(window,"unload",o),localStorage.setItem(Mr(t,"isLocal"),f))}}}),me.isUndefined(i.parent)){if(this.closed=i.closed||!1,ee.addClass(this.domElement,n.CLASS_MAIN),ee.makeSelectable(this.domElement,!1),ho&&r){t.useLocalStorage=!0;var s=localStorage.getItem(Mr(this,"gui"));s&&(i.load=JSON.parse(s))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=n.TEXT_CLOSED,ee.addClass(this.__closeButton,n.CLASS_CLOSE_BUTTON),i.closeOnTop?(ee.addClass(this.__closeButton,n.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(ee.addClass(this.__closeButton,n.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),ee.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);ee.addClass(l,"controller-name"),a=Ql(t,l);var c=function(f){return f.preventDefault(),t.closed=!t.closed,!1};ee.addClass(this.__ul,n.CLASS_CLOSED),ee.addClass(a,"title"),ee.bind(a,"click",c),i.closed||(this.closed=!1)}i.autoPlace&&(me.isUndefined(i.parent)&&(Oh&&(br=document.createElement("div"),ee.addClass(br,Rh),ee.addClass(br,n.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(br),Oh=!1),br.appendChild(this.domElement),ee.addClass(this.domElement,n.CLASS_AUTO_PLACE)),this.parent||yl(t,i.width)),this.__resizeHandler=function(){t.onResizeDebounced()},ee.bind(window,"resize",this.__resizeHandler),ee.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),ee.bind(this.__ul,"transitionend",this.__resizeHandler),ee.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&mE(this),o=function(){ho&&localStorage.getItem(Mr(t,"isLocal"))==="true"&&localStorage.setItem(Mr(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=o;function u(){var h=t.getRoot();h.width+=1,me.defer(function(){h.width-=1})}i.parent||u()};_t.toggleHide=function(){zs=!zs,me.each(Ed,function(n){n.domElement.style.display=zs?"none":""})};_t.CLASS_AUTO_PLACE="a";_t.CLASS_AUTO_PLACE_CONTAINER="ac";_t.CLASS_MAIN="main";_t.CLASS_CONTROLLER_ROW="cr";_t.CLASS_TOO_TALL="taller-than-window";_t.CLASS_CLOSED="closed";_t.CLASS_CLOSE_BUTTON="close-button";_t.CLASS_CLOSE_TOP="close-top";_t.CLASS_CLOSE_BOTTOM="close-bottom";_t.CLASS_DRAG="drag";_t.DEFAULT_WIDTH=245;_t.TEXT_CLOSED="Close Controls";_t.TEXT_OPEN="Open Controls";_t._keydownHandler=function(n){document.activeElement.type!=="text"&&(n.which===Ph||n.keyCode===Ph)&&_t.toggleHide()};ee.bind(window,"keydown",_t._keydownHandler,!1);me.extend(_t.prototype,{add:function(e,t){return bo(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return bo(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;me.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&br.removeChild(this.domElement);var e=this;me.each(this.__folders,function(t){e.removeFolder(t)}),ee.unbind(window,"keydown",_t._keydownHandler,!1),Dh(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var i=new _t(t);this.__folders[e]=i;var r=Ql(this,i.domElement);return ee.addClass(r,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Dh(e);var t=this;me.each(e.__folders,function(i){e.removeFolder(i)}),me.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=ee.getOffset(e.__ul).top,i=0;me.each(e.__ul.childNodes,function(r){e.autoPlace&&r===e.__save_row||(i+=ee.getHeight(r))}),window.innerHeight-t-Lh<i?(ee.addClass(e.domElement,_t.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-Lh+"px"):(ee.removeClass(e.domElement,_t.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&me.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:me.debounce(function(){this.onResize()},50),remember:function(){if(me.isUndefined(xo)&&(xo=new hE,xo.domElement.innerHTML=sE),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;me.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&pE(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&yl(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=fa(this)),e.folders={},me.each(this.__folders,function(t,i){e.folders[i]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=fa(this),_l(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Co]=fa(this,!0)),this.load.remembered[e]=fa(this),this.preset=e,vl(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){me.each(this.__controllers,function(t){this.getRoot().load.remembered?Td(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),me.each(this.__folders,function(t){t.revert(t)}),e||_l(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Ad(this.__listening)},updateDisplay:function(){me.each(this.__controllers,function(e){e.updateDisplay()}),me.each(this.__folders,function(e){e.updateDisplay()})}});function Ql(n,e,t){var i=document.createElement("li");return e&&i.appendChild(e),t?n.__ul.insertBefore(i,t):n.__ul.appendChild(i),n.onResize(),i}function Dh(n){ee.unbind(window,"resize",n.__resizeHandler),n.saveToLocalStorageIfPossible&&ee.unbind(window,"unload",n.saveToLocalStorageIfPossible)}function _l(n,e){var t=n.__preset_select[n.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function dE(n,e,t){if(t.__li=e,t.__gui=n,me.extend(t,{options:function(a){if(arguments.length>1){var s=t.__li.nextElementSibling;return t.remove(),bo(n,t.object,t.property,{before:s,factoryArgs:[me.toArray(arguments)]})}if(me.isArray(a)||me.isObject(a)){var l=t.__li.nextElementSibling;return t.remove(),bo(n,t.object,t.property,{before:l,factoryArgs:[a]})}},name:function(a){return t.__li.firstElementChild.firstElementChild.innerHTML=a,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof ml){var i=new Oa(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});me.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(o){var a=t[o],s=i[o];t[o]=i[o]=function(){var l=Array.prototype.slice.call(arguments);return s.apply(i,l),a.apply(t,l)}}),ee.addClass(e,"has-slider"),t.domElement.insertBefore(i.domElement,t.domElement.firstElementChild)}else if(t instanceof Oa){var r=function(a){if(me.isNumber(t.__min)&&me.isNumber(t.__max)){var s=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=bo(n,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(s),l&&c.listen(),c}return a};t.min=me.compose(r,t.min),t.max=me.compose(r,t.max)}else t instanceof Md?(ee.bind(e,"click",function(){ee.fakeEvent(t.__checkbox,"click")}),ee.bind(t.__checkbox,"click",function(o){o.stopPropagation()})):t instanceof wd?(ee.bind(e,"click",function(){ee.fakeEvent(t.__button,"click")}),ee.bind(e,"mouseover",function(){ee.addClass(t.__button,"hover")}),ee.bind(e,"mouseout",function(){ee.removeClass(t.__button,"hover")})):t instanceof gl&&(ee.addClass(e,"color"),t.updateDisplay=me.compose(function(o){return e.style.borderLeftColor=t.__color.toString(),o},t.updateDisplay),t.updateDisplay());t.setValue=me.compose(function(o){return n.getRoot().__preset_select&&t.isModified()&&_l(n.getRoot(),!0),o},t.setValue)}function Td(n,e){var t=n.getRoot(),i=t.__rememberedObjects.indexOf(e.object);if(i!==-1){var r=t.__rememberedObjectIndecesToControllers[i];if(r===void 0&&(r={},t.__rememberedObjectIndecesToControllers[i]=r),r[e.property]=e,t.load&&t.load.remembered){var o=t.load.remembered,a=void 0;if(o[n.preset])a=o[n.preset];else if(o[Co])a=o[Co];else return;if(a[i]&&a[i][e.property]!==void 0){var s=a[i][e.property];e.initialValue=s,e.setValue(s)}}}}function bo(n,e,t,i){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var r=void 0;if(i.color)r=new gl(e,t);else{var o=[e,t].concat(i.factoryArgs);r=lE.apply(n,o)}i.before instanceof $i&&(i.before=i.before.__li),Td(n,r),ee.addClass(r.domElement,"c");var a=document.createElement("span");ee.addClass(a,"property-name"),a.innerHTML=r.property;var s=document.createElement("div");s.appendChild(a),s.appendChild(r.domElement);var l=Ql(n,s,i.before);return ee.addClass(l,_t.CLASS_CONTROLLER_ROW),r instanceof gl?ee.addClass(l,"color"):ee.addClass(l,Jw(r.getValue())),dE(n,l,r),n.__controllers.push(r),r}function Mr(n,e){return document.location.href+"."+e}function vl(n,e,t){var i=document.createElement("option");i.innerHTML=e,i.value=e,n.__preset_select.appendChild(i),t&&(n.__preset_select.selectedIndex=n.__preset_select.length-1)}function Ih(n,e){e.style.display=n.useLocalStorage?"block":"none"}function pE(n){var e=n.__save_row=document.createElement("li");ee.addClass(n.domElement,"has-save"),n.__ul.insertBefore(e,n.__ul.firstChild),ee.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",ee.addClass(t,"button gears");var i=document.createElement("span");i.innerHTML="Save",ee.addClass(i,"button"),ee.addClass(i,"save");var r=document.createElement("span");r.innerHTML="New",ee.addClass(r,"button"),ee.addClass(r,"save-as");var o=document.createElement("span");o.innerHTML="Revert",ee.addClass(o,"button"),ee.addClass(o,"revert");var a=n.__preset_select=document.createElement("select");if(n.load&&n.load.remembered?me.each(n.load.remembered,function(h,f){vl(n,f,f===n.preset)}):vl(n,Co,!1),ee.bind(a,"change",function(){for(var h=0;h<n.__preset_select.length;h++)n.__preset_select[h].innerHTML=n.__preset_select[h].value;n.preset=this.value}),e.appendChild(a),e.appendChild(t),e.appendChild(i),e.appendChild(r),e.appendChild(o),ho){var s=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Mr(n,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Ih(n,s),ee.bind(l,"change",function(){n.useLocalStorage=!n.useLocalStorage,Ih(n,s)})}var u=document.getElementById("dg-new-constructor");ee.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&xo.hide()}),ee.bind(t,"click",function(){u.innerHTML=JSON.stringify(n.getSaveObject(),void 0,2),xo.show(),u.focus(),u.select()}),ee.bind(i,"click",function(){n.save()}),ee.bind(r,"click",function(){var h=prompt("Enter a new preset name.");h&&n.saveAs(h)}),ee.bind(o,"click",function(){n.revert()})}function mE(n){var e=void 0;n.__resize_handle=document.createElement("div"),me.extend(n.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(o){return o.preventDefault(),n.width+=e-o.clientX,n.onResize(),e=o.clientX,!1}function i(){ee.removeClass(n.__closeButton,_t.CLASS_DRAG),ee.unbind(window,"mousemove",t),ee.unbind(window,"mouseup",i)}function r(o){return o.preventDefault(),e=o.clientX,ee.addClass(n.__closeButton,_t.CLASS_DRAG),ee.bind(window,"mousemove",t),ee.bind(window,"mouseup",i),!1}ee.bind(n.__resize_handle,"mousedown",r),ee.bind(n.__closeButton,"mousedown",r),n.domElement.insertBefore(n.__resize_handle,n.domElement.firstElementChild)}function yl(n,e){n.domElement.style.width=e+"px",n.__save_row&&n.autoPlace&&(n.__save_row.style.width=e+"px"),n.__closeButton&&(n.__closeButton.style.width=e+"px")}function fa(n,e){var t={};return me.each(n.__rememberedObjects,function(i,r){var o={},a=n.__rememberedObjectIndecesToControllers[r];me.each(a,function(s,l){o[l]=e?s.initialValue:s.getValue()}),t[r]=o}),t}function gE(n){for(var e=0;e<n.__preset_select.length;e++)n.__preset_select[e].value===n.preset&&(n.__preset_select.selectedIndex=e)}function Ad(n){n.length!==0&&uE.call(window,function(){Ad(n)}),me.each(n,function(e){e.updateDisplay()})}var _E=_t;class vE{constructor(){this.resources={},this.recursive_loops=20}getDataset(e,t,i){this.recursive=this.recursive_loops,this.graph=t,this.nt=i,this.fetchSolidData(e).then(r=>{console.log(r),this.processJsonld({jsonld:r,url:e.url})}).catch(r=>{console.log(r.message)})}async fetchSolidData(e={}){this.resources[e.url]={options:e};const t=await fetch(e.url,{method:"GET",headers:{Accept:"application/ld+json"}});if(!t.ok){const r=`An error has occured: ${t.status}`;throw new Error(r)}return await t.json()}processJsonld(e){let t=this.nt,i=this.graph,r=e.jsonld["@graph"];for(let o of r){console.log(o);let a=o["@id"];!a.startsWith("http")&&a.endsWith(":")&&(a=a.slice(0,-1),a=e.jsonld["@context"][a]);let s=o["dct:modified"]["@value"]||o["dct:modified"][0]["@value"];if(console.log(s),s!=null){let l=new Date(s).getTime();console.log(a,s);let c={id:a,modified:s,timestamp:l,color:"#ff0000",parent:e.url};this.recursive>0&&o["@type"].includes("ldp:BasicContainer")&&(this.recursive--,console.log("recursive loops",this.recursive),c.color="#ffff00",console.log("to fetch",a),this.resources[a]==null?this.fetchSolidData({url:a,parent:e.url}).then(h=>{console.log(h),this.processJsonld({jsonld:h,url:a})}).catch(h=>{console.log(h.message)}):console.log("already visited",a));let u=t.createEventBall(c);t.addNode(u,i)}else console.warn("modified undefined",o)}}}let da;const yE=new Uint8Array(16);function xE(){if(!da&&(da=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!da))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return da(yE)}const zt=[];for(let n=0;n<256;++n)zt.push((n+256).toString(16).slice(1));function bE(n,e=0){return(zt[n[e+0]]+zt[n[e+1]]+zt[n[e+2]]+zt[n[e+3]]+"-"+zt[n[e+4]]+zt[n[e+5]]+"-"+zt[n[e+6]]+zt[n[e+7]]+"-"+zt[n[e+8]]+zt[n[e+9]]+"-"+zt[n[e+10]]+zt[n[e+11]]+zt[n[e+12]]+zt[n[e+13]]+zt[n[e+14]]+zt[n[e+15]]).toLowerCase()}const ME=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Nh={randomUUID:ME};function Cd(n,e,t){if(Nh.randomUUID&&!e&&!n)return Nh.randomUUID();n=n||{};const i=n.random||(n.rng||xE)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){t=t||0;for(let r=0;r<16;++r)e[t+r]=i[r];return e}return bE(i)}class SE{constructor(e={}){this.options=e}async getEvents(e={}){console.log(e);let t=[],i=100;for(let r=0;r<i;r++){let o=r+Math.floor(Math.random()*360-r);console.log("nb_jours",o);let a=1e3*60*60*24*o,s=Date.now()+a,l=null,c={id:Cd(),name:"Nom_"+r+" on "+new Date(s).toLocaleDateString(),start:s,end:l,place:"place du "+r,images:["https://www.lyon.fr/sites/lyonfr/files/content/2023-06/poussineau_festisound_p.jpg","https://www.lyon.fr/sites/lyonfr/files/content/2023-06/naurunorilsk_p.jpg"],tags:["Musique","Spectacle","Tout l'monde dehors"],publics:["Tous Publics"],description:`Les associations Gones Music et Concert sous la Voûte organisent une grande soirée de musique, festive, conviviale.
         En première partie : Jimmy & Clem. Ces deux guitaristes virtuoses croix-roussiens aux sonorités latino-dynamique interpréteront les chefs-d’œuvre de Rodrigo y Gabriela.
         En deuxième partie : Charlie and the Soap Opera. Ce groupe lyonnais de 7 musiciens, jouant sur les grandes scènes des 5 continents depuis une quinzaine d'années, vous offrira une musique pop, funk, soul.
         L'ambiance sera chaude, mais tout sera prévu sur place pour vous restaurer (boissons, food truck...) dès 19h.
         A cette occasion, une grande tombola sera organisée le jour du concert ainsi que sur internet plusieurs semaines auparavant.`,link:"https://www.poussineau-festisound.com/",amount:["Gratuit - de 25 ans","5€ chômeurs","10€"],complement:"",multi_dates:[{start:"start_one",end:"end_one"},{start:"start_two",end:"end_two"}]};c.human_start=new Date(c.start*1e3),c.human_end=new Date(c.end*1e3),t.push(c)}return t}}class wE{constructor(e,t,i){this.graph=e,this.params=t,this.nt=i,console.log(this.graph),this.solid=new vE,this.eventManager=new SE,this.init()}init(){let e=this.options={url:"https://spoggy-test2.solidcommunity.net/public/"},t=this.gui=new _E({useLocalStorage:!0});const i=t.addFolder("Camera");i.add(this,"resetCam").name("Reset Camera"),i.open();const r=t.addFolder("Helic");r.open(),r.add(this.params,"longueur",0,2e3,10,2e3).name("longueur").onChange(o=>{this.nt.updateNodes(this.graph)}),r.add(this.params,"sens",-2*Math.PI,2*Math.PI,.1,-2.2).name("Sens").onChange(o=>{this.nt.updateNodes(this.graph)}),r.add(this.params,"strates",0,240,1,144).name("strates").onChange(o=>{this.nt.updateNodes(this.graph)}),r.add(this.params,"progression",-2*Math.PI,2*Math.PI,.1,-.3).name("Progression").onChange(o=>{this.nt.updateNodes(this.graph)}),r.add(this.params,"fixed").name("Fixed"),r.add(this,"resetNodes").name("Reset"),t.add(this,"addNow").name("Add an event now"),t.add(this,"addOneDay").name("Add an event passed 24 hours"),t.add(e,"url"),t.add(this,"getSolid").name("Get Solid Events"),t.add(this,"getEvents").name("Get Events")}resetCam(){console.log(this.graph.camera(),this.graph.controls()),this.graph.cameraPosition({x:0,y:0,z:1e3,lookAt:{x:0,y:0,z:0}}),this.graph.camera().rotation.set(0,0,0),this.graph.camera().updateProjectionMatrix()}resetNodes(){this.nt.resetNodes(this.graph)}addNow(){let e=this.nt.createEventBall();this.nt.addNode(e,this.graph)}addOneDay(){let e=this.nt.createEventBall({timestamp:Date.now()-864e5});this.nt.addNode(e,this.graph)}getSolid(){this.solid.getDataset(this.options,this.graph,this.nt)}async getEvents(){let e={},t=await this.eventManager.getEvents(e);console.log("events",t),t.forEach(i=>{this.nt.addEventNode(i,this.graph)})}}class EE{constructor(e){this.graph=e;let t=new ka(1e3,1e3,1,1),i=new xf({color:16776960,side:dn,wireframe:!0}),r=new Ht(t,i);r.position.set(-100,-200,-100),r.name="red plane",r.rotation.set(.5*Math.PI,0,0),e.scene().add(r)}}function TE(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,a,s=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=o.call(t)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw r}}return s}}function AE(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Uh(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,zE(i.key),i)}}function CE(n,e,t){return e&&Uh(n.prototype,e),t&&Uh(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function RE(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&xl(n,e)}function Da(n){return Da=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Da(n)}function xl(n,e){return xl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},xl(n,e)}function PE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function LE(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function OE(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return LE(n)}function DE(n){var e=PE();return function(){var i=Da(n),r;if(e){var o=Da(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return OE(this,r)}}function Fh(n,e){return NE(n)||TE(n,e)||Rd(n,e)||kE()}function pa(n){return IE(n)||UE(n)||Rd(n)||FE()}function IE(n){if(Array.isArray(n))return bl(n)}function NE(n){if(Array.isArray(n))return n}function UE(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Rd(n,e){if(n){if(typeof n=="string")return bl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return bl(n,e)}}function bl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function FE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function BE(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function zE(n){var e=BE(n,"string");return typeof e=="symbol"?e:String(e)}var yr=typeof window<"u"&&window.THREE?window.THREE:{LinearFilter:sn,Sprite:Y0,SpriteMaterial:mf,SRGBColorSpace:Qe,Texture:Jt},HE=function(n){RE(t,n);var e=DE(t);function t(){var i,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:10,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"rgba(255, 255, 255, 1)";return AE(this,t),i=e.call(this,new yr.SpriteMaterial),i._text="".concat(r),i._textHeight=o,i._color=a,i._backgroundColor=!1,i._padding=0,i._borderWidth=0,i._borderRadius=0,i._borderColor="white",i._strokeWidth=0,i._strokeColor="white",i._fontFace="system-ui",i._fontSize=90,i._fontWeight="normal",i._canvas=document.createElement("canvas"),i._genCanvas(),i}return CE(t,[{key:"text",get:function(){return this._text},set:function(r){this._text=r,this._genCanvas()}},{key:"textHeight",get:function(){return this._textHeight},set:function(r){this._textHeight=r,this._genCanvas()}},{key:"color",get:function(){return this._color},set:function(r){this._color=r,this._genCanvas()}},{key:"backgroundColor",get:function(){return this._backgroundColor},set:function(r){this._backgroundColor=r,this._genCanvas()}},{key:"padding",get:function(){return this._padding},set:function(r){this._padding=r,this._genCanvas()}},{key:"borderWidth",get:function(){return this._borderWidth},set:function(r){this._borderWidth=r,this._genCanvas()}},{key:"borderRadius",get:function(){return this._borderRadius},set:function(r){this._borderRadius=r,this._genCanvas()}},{key:"borderColor",get:function(){return this._borderColor},set:function(r){this._borderColor=r,this._genCanvas()}},{key:"fontFace",get:function(){return this._fontFace},set:function(r){this._fontFace=r,this._genCanvas()}},{key:"fontSize",get:function(){return this._fontSize},set:function(r){this._fontSize=r,this._genCanvas()}},{key:"fontWeight",get:function(){return this._fontWeight},set:function(r){this._fontWeight=r,this._genCanvas()}},{key:"strokeWidth",get:function(){return this._strokeWidth},set:function(r){this._strokeWidth=r,this._genCanvas()}},{key:"strokeColor",get:function(){return this._strokeColor},set:function(r){this._strokeColor=r,this._genCanvas()}},{key:"_genCanvas",value:function(){var r=this,o=this._canvas,a=o.getContext("2d"),s=Array.isArray(this.borderWidth)?this.borderWidth:[this.borderWidth,this.borderWidth],l=s.map(function(C){return C*r.fontSize*.1}),c=Array.isArray(this.borderRadius)?this.borderRadius:[this.borderRadius,this.borderRadius,this.borderRadius,this.borderRadius],u=c.map(function(C){return C*r.fontSize*.1}),h=Array.isArray(this.padding)?this.padding:[this.padding,this.padding],f=h.map(function(C){return C*r.fontSize*.1}),p=this.text.split(`
`),g="".concat(this.fontWeight," ").concat(this.fontSize,"px ").concat(this.fontFace);a.font=g;var _=Math.max.apply(Math,pa(p.map(function(C){return a.measureText(C).width}))),m=this.fontSize*p.length;if(o.width=_+l[0]*2+f[0]*2,o.height=m+l[1]*2+f[1]*2,this.borderWidth){if(a.strokeStyle=this.borderColor,l[0]){var d=l[0]/2;a.lineWidth=l[0],a.beginPath(),a.moveTo(d,u[0]),a.lineTo(d,o.height-u[3]),a.moveTo(o.width-d,u[1]),a.lineTo(o.width-d,o.height-u[2]),a.stroke()}if(l[1]){var M=l[1]/2;a.lineWidth=l[1],a.beginPath(),a.moveTo(Math.max(l[0],u[0]),M),a.lineTo(o.width-Math.max(l[0],u[1]),M),a.moveTo(Math.max(l[0],u[3]),o.height-M),a.lineTo(o.width-Math.max(l[0],u[2]),o.height-M),a.stroke()}if(this.borderRadius){var y=Math.max.apply(Math,pa(l)),b=y/2;a.lineWidth=y,a.beginPath(),[!!u[0]&&[u[0],b,b,u[0]],!!u[1]&&[o.width-u[1],o.width-b,b,u[1]],!!u[2]&&[o.width-u[2],o.width-b,o.height-b,o.height-u[2]],!!u[3]&&[u[3],b,o.height-b,o.height-u[3]]].filter(function(C){return C}).forEach(function(C){var S=Fh(C,4),A=S[0],$=S[1],q=S[2],G=S[3];a.moveTo(A,q),a.quadraticCurveTo($,q,$,G)}),a.stroke()}}this.backgroundColor&&(a.fillStyle=this.backgroundColor,this.borderRadius?(a.beginPath(),a.moveTo(l[0],u[0]),[[l[0],u[0],o.width-u[1],l[1],l[1],l[1]],[o.width-l[0],o.width-l[0],o.width-l[0],l[1],u[1],o.height-u[2]],[o.width-l[0],o.width-u[2],u[3],o.height-l[1],o.height-l[1],o.height-l[1]],[l[0],l[0],l[0],o.height-l[1],o.height-u[3],u[0]]].forEach(function(C){var S=Fh(C,6),A=S[0],$=S[1],q=S[2],G=S[3],D=S[4],O=S[5];a.quadraticCurveTo(A,G,$,D),a.lineTo(q,O)}),a.closePath(),a.fill()):a.fillRect(l[0],l[1],o.width-l[0]*2,o.height-l[1]*2)),a.translate.apply(a,pa(l)),a.translate.apply(a,pa(f)),a.font=g,a.fillStyle=this.color,a.textBaseline="bottom";var x=this.strokeWidth>0;x&&(a.lineWidth=this.strokeWidth*this.fontSize/10,a.strokeStyle=this.strokeColor),p.forEach(function(C,S){var A=(_-a.measureText(C).width)/2,$=(S+1)*r.fontSize;x&&a.strokeText(C,A,$),a.fillText(C,A,$)}),this.material.map&&this.material.map.dispose();var E=this.material.map=new yr.Texture(o);E.minFilter=yr.LinearFilter,E.colorSpace=yr.SRGBColorSpace,E.needsUpdate=!0;var R=this.textHeight*p.length+s[1]*2+h[1]*2;this.scale.set(R*o.width/o.height,R,0)}},{key:"clone",value:function(){return new this.constructor(this.text,this.textHeight,this.color).copy(this)}},{key:"copy",value:function(r){return yr.Sprite.prototype.copy.call(this,r),this.color=r.color,this.backgroundColor=r.backgroundColor,this.padding=r.padding,this.borderWidth=r.borderWidth,this.borderColor=r.borderColor,this.fontFace=r.fontFace,this.fontSize=r.fontSize,this.fontWeight=r.fontWeight,this.strokeWidth=r.strokeWidth,this.strokeColor=r.strokeColor,this}}]),t}(yr.Sprite);function fo(n,e,t){this.k=n,this.x=e,this.y=t}fo.prototype={constructor:fo,scale:function(n){return n===1?this:new fo(this.k*n,this.x,this.y)},translate:function(n,e){return n===0&e===0?this:new fo(this.k,this.x+this.k*n,this.y+this.k*e)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};fo.prototype;class GE{constructor(e){this.params=e}addNode(e,t){let{nodes:i,links:r}=t.graphData();e.name==null&&(e.name=e.id),i.push(e);let o={source:e.id,target:e.relative_time,name:"modified"};if(r.push(o),e.parent!=null){let a={source:e.parent,target:e.id,name:"contains"};r.push(a)}t.graphData({nodes:i,links:r})}addEventNode(e,t){console.log(e);let{nodes:i,links:r}=t.graphData();i.push(e);let o=new Date(e.start).setHours(0,0,0,0);console.log("start_day",o);let a=i.find(l=>l.date==o);console.log("found day node",a);let s={source:e.id,target:a.id,name:"start",color:"#00ff00"};if(console.log("link _start",s),r.push(s),e.end!=null){let l={source:e.id,target:e.end,name:"end",color:"#ff0000"};console.log("link_end",l),r.push(l)}else if(Date.now()%3==0){console.log(" //HACK random end to test");let l=Math.floor(Math.random()*10)+1;console.log("duration",l);let c=s.target+l;c>360&&(c=360);let u={source:e.id,target:c,name:"end",color:"#ff0000"};console.log("link_end",u),r.push(u)}t.graphData({nodes:i,links:r})}createEventBall(e={}){let t=31536e5;return e.id==null&&(e.id=Cd()),e.timestamp==null&&(e.timestamp=Date.now()),e.relative_time=Math.floor(e.timestamp*360/t/1e3/2),e}nodeObject(e){let t;switch(e.group){case"text_spirale":t=new HE(e.name),t.material.depthWrite=!0,t.color=e.color||"#ffffff",t.textHeight=8;break;default:const i=new Ro(15,32,16),r=new Fr({color:e.color||16776960});t=new Ht(i,r);break}return t}coords(e){let t=this.params;var i=e/t.N*Math.PI*2*t.progression,r=e/t.N*Math.PI*2*t.sens;let o=1+Math.cosh(r)*Math.cosh(i);var a=t.longueur*(Math.sinh(r)*Math.cos(t.strates*i))/o,s=t.longueur*(Math.sinh(r)*Math.sin(t.strates*i))/o,l=t.longueur*(Math.cosh(r)*Math.sinh(i))/o;return{x:a,y:s,z:l}}coords1(e){let t=360*e,i=254*e,r=Math.PI*2*(t-.5),o=Math.PI*2*(i-.5),a=1+Math.cosh(r)*Math.cosh(o),s=Math.sinh(o)*Math.cos(5*r)/a,l=Math.sinh(o)*Math.sin(5*r)/a,c=Math.cosh(o)*Math.sinh(r)/a;return console.log(s,c,l),{x:s,y:c,z:l}}resetNodes(e){this.params={N:300,progression:-1.1,sens:-2.2,longueur:2e3,strates:170},console.log("reset blocks",this.params),this.updateNodes(e)}updateNodes(e){this.throttle(this._updateNodes(e),5e3,!1,!0)}_updateNodes(e){let t=this.params,{nodes:i,links:r}=e.graphData();i.forEach(o=>{if(o.group=="text_spirale"){let a=this.coords(o.id);t.fixed==!0?(o.fx=a.x,o.fy=a.y,o.fz=a.z):(o.x=a.x,o.y=a.y,o.z=a.z,delete o.fx,delete o.fy,delete o.fz)}}),e.graphData({nodes:i,links:r})}throttle(e,t,i,r,o){var a,s,l,c=null,u=0,h=function(){u=new Date,c=null,l=e.apply(a,s)};return function(){var f=new Date;!u&&!i&&(u=f);var p=t-(f-u);return a=o||this,s=arguments,p<=0?(clearTimeout(c),c=null,u=f,l=e.apply(a,s)):!c&&r&&(c=setTimeout(h,p)),l}}}class VE{constructor(e){this.graph=e,this.onEngineTick(),this.init()}init(){let e=this.graph;function t(){e.camera().aspect=window.innerWidth/window.innerHeight,e.camera().updateProjectionMatrix(),e.renderer().setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",t,!1)}onEngineTick(){this.graph.scene().traverse(e=>{switch(e.userData.type){case"cube":e.rotation.x+=.01,e.rotation.y+=.01,e.material.color.set(65280);break;case"now_repere":let i=-Math.trunc(Date.now()/1e3)*Math.PI/30+Math.PI/2;e.position.x=Math.cos(i),e.position.y=Math.sin(i);break}})}}class ja extends Qt{constructor(e=(r,o,a)=>a.set(r,o,Math.cos(r)*Math.sin(o)),t=8,i=8){super(),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:i};const r=[],o=[],a=[],s=[],l=1e-5,c=new F,u=new F,h=new F,f=new F,p=new F,g=t+1;for(let _=0;_<=i;_++){const m=_/i;for(let d=0;d<=t;d++){const M=d/t;e(M,m,u),o.push(u.x,u.y,u.z),M-l>=0?(e(M-l,m,h),f.subVectors(u,h)):(e(M+l,m,h),f.subVectors(h,u)),m-l>=0?(e(M,m-l,h),p.subVectors(u,h)):(e(M,m+l,h),p.subVectors(h,u)),c.crossVectors(f,p).normalize(),a.push(c.x,c.y,c.z),s.push(M,m)}}for(let _=0;_<i;_++)for(let m=0;m<t;m++){const d=_*g+m,M=_*g+m+1,y=(_+1)*g+m+1,b=(_+1)*g+m;r.push(d,M,b),r.push(M,y,b)}this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}const Ur={klein:function(n,e,t){e*=Math.PI,n*=2*Math.PI,e=e*2;let i,r;e<Math.PI?(i=3*Math.cos(e)*(1+Math.sin(e))+2*(1-Math.cos(e)/2)*Math.cos(e)*Math.cos(n),r=-8*Math.sin(e)-2*(1-Math.cos(e)/2)*Math.sin(e)*Math.cos(n)):(i=3*Math.cos(e)*(1+Math.sin(e))+2*(1-Math.cos(e)/2)*Math.cos(n+Math.PI),r=-8*Math.sin(e));const o=-2*(1-Math.cos(e)/2)*Math.sin(n);t.set(i,o,r)},plane:function(n,e){return function(t,i,r){const o=t*n,a=0,s=i*e;r.set(o,a,s)}},mobius:function(n,e,t){n=n-.5;const i=2*Math.PI*e,r=2,o=Math.cos(i)*(r+n*Math.cos(i/2)),a=Math.sin(i)*(r+n*Math.cos(i/2)),s=n*Math.sin(i/2);t.set(o,a,s)},mobius3d:function(n,e,t){n*=Math.PI,e*=2*Math.PI,n=n*2;const i=n/2,r=2.25,o=.125,a=.65;let s=o*Math.cos(e)*Math.cos(i)-a*Math.sin(e)*Math.sin(i);const l=o*Math.cos(e)*Math.sin(i)+a*Math.sin(e)*Math.cos(i),c=(r+s)*Math.sin(n);s=(r+s)*Math.cos(n),t.set(s,c,l)}};Ur.TubeGeometry=class extends ja{constructor(e,t=64,i=1,r=8,o=!1){const a=t+1,s=e.computeFrenetFrames(t,o),l=s.tangents,c=s.normals,u=s.binormals,h=new F;function f(p,g,_){g*=2*Math.PI;const m=Math.floor(p*(a-1));e.getPointAt(p,h);const d=c[m],M=u[m],y=-i*Math.cos(g),b=i*Math.sin(g);h.x+=y*d.x+b*M.x,h.y+=y*d.y+b*M.y,h.z+=y*d.z+b*M.z,_.copy(h)}super(f,t,r),this.tangents=l,this.normals=c,this.binormals=u,this.path=e,this.segments=t,this.radius=i,this.segmentsRadius=r,this.closed=o}};Ur.TorusKnotGeometry=class extends Ur.TubeGeometry{constructor(e=200,t=40,i=64,r=8,o=2,a=3){class s extends Bn{getPoint(f,p=new F){const g=p;f*=Math.PI*2;const _=.5,m=(1+_*Math.cos(a*f))*Math.cos(o*f),d=(1+_*Math.cos(a*f))*Math.sin(o*f),M=_*Math.sin(a*f);return g.set(m,d,M).multiplyScalar(e)}}const l=i,c=r,u=new s;super(u,l,t,c,!0,!1),this.radius=e,this.tube=t,this.segmentsT=i,this.segmentsR=r,this.p=o,this.q=a}};Ur.SphereGeometry=class extends ja{constructor(e,t,i){function r(o,a,s){o*=Math.PI,a*=2*Math.PI;const l=e*Math.sin(o)*Math.cos(a),c=e*Math.sin(o)*Math.sin(a),u=e*Math.cos(o);s.set(l,c,u)}super(r,t,i)}};Ur.PlaneGeometry=class extends ja{constructor(e,t,i,r){function o(a,s,l){const c=a*e,u=0,h=s*t;l.set(c,u,h)}super(o,i,r)}};class ec{constructor(e){return this.options=e,console.log(this.options),this.init()}init(){let e=new py({side:dn}),t;switch(this.options.type){case"catenoid":t=this.catenoid;break;case"catenoid2":t=this.catenoid2;break;case"hyperbolic":t=this.hyperbolic;break;case"klein":t=Ur.klein;break;default:console.log("type unknown",this.options.type);break}let i=new ja(t,this.options.slices,this.options.stacks),r=new Ht(i,e);return r.position.set(this.options.x,this.options.y,this.options.z),r.name=this.options.name,r}catenoid(e,t,i){let r=Math.PI*2*(t-.5),o=20,a=e*Math.cos(o*t),s=r,l=e*Math.sin(o*t);i.set(a,l,s)}catenoid2(e,t,i){let r=20,o=e*Math.cos(r*t),a=e*Math.sin(r*t),s=t;i.set(o,a,s)}hyperbolic(e,t,i){let r=Math.PI*2*(e-.5),o=Math.PI*2*(t-.5),a=1+Math.cosh(r)*Math.cosh(o),s=Math.sinh(o)*Math.cos(5*r)/a,l=Math.sinh(o)*Math.sin(5*r)/a,c=Math.cosh(o)*Math.sinh(r)/a;i.set(s,c,l)}onEngineTick(){console.log("tick")}}function WE(n){let e=[];e=e.concat(Dn({type:"seconde",start:0,number:60,step:5,color:16776960,z_offset:0})),e=e.concat(Dn({type:"minute",start:0,number:60,step:5,color:65535,z_offset:1})),e=e.concat(Dn({type:"heure",start:0,number:24,step:3,color:65280,z_offset:2})),e=e.concat(Dn({type:"jour",start:1,number:7,step:1,color:16776960,z_offset:3})),e=e.concat(Dn({type:"semaine",start:0,number:4,step:1,color:65535,z_offset:4})),e=e.concat(Dn({type:"mois",start:0,number:12,step:1,color:65280,z_offset:5})),e=e.concat(Dn({type:"annee",start:0,number:10,step:1,color:16776960,z_offset:6})),e=e.concat(Dn({type:"decenie",start:0,number:10,step:1,color:65535,z_offset:7})),e=e.concat(Dn({type:"siècle",start:0,number:10,step:1,color:65280,z_offset:8})),e=e.concat(Dn({type:"millénaire",start:0,number:10,step:1,color:16776960,z_offset:9})),e=e.concat(jE({name:"now",type:"now_repere",color:65280})),e=e.forEach(t=>{n.add(t)}),console.log(n)}function jE(n){let e=[];const t=new Si(.05,.05,.04),i=new Fr({color:n.color}),r=new Ht(t,i);return r.userData.type=n.type,r.name=n.name,e.push(r),console.log(r),e}function Dn(n){let e=[];for(let t=n.start;t<n.number;t++){let i={x:.02,y:.01,z:.02};t==n.start?i={x:.02,y:.5,z:.02}:t%n.step==0&&(i={x:.02,y:.1,z:.02});const r=new Si(i.x,i.y,i.z),o=new Fr({color:n.color}),a=new Ht(r,o);let s=t*2*Math.PI/n.number-Math.PI/2,l=Math.cos(s),c=-Math.sin(s),u=n.z_offset;a.position.set(l,c,u),a.userData.type=n.type,a.name=n.type+"_"+t,e.push(a)}return e}const kh=500,$E=50,Hs=3;function XE(n){for(let e=0;e<kh;e++){const t=new Si(.1,.1,.1),i=new dy({emissive:2531945,color:65280,roughness:0,metalness:.5,reflectivity:.5,clearcoat:1,clearcoatRoughness:.4,flatShading:!0,side:dn}),r=new Ht(t,i);r.name="cube_"+e,r.userData.type="cube";let o=e*(Math.PI*2/$E),a=5,s=e/100,l=o,c=1+Math.cosh(s)*Math.cosh(l),u=Hs*(Math.sinh(l)*Math.cos(a*s))/c+3,h=Hs*(Math.sinh(l)*Math.sin(a*s))/c,f=-Hs*(Math.cosh(l)*Math.sinh(s))/c;r.scale.set(2,1-e/kh,2),r.position.set(u,h,f),n.add(r)}console.log(n)}const Mo={turns:5,minR:25},In=Math.min(window.innerWidth,window.innerHeight)/4,Gs={"# turns":Mo.turns,"Inner Radius":Mo.minR,"Scale Exponent":1};class qE{constructor(e,t){this.graph=e,t.add(Gs,"# turns",.25,10).onChange(h=>{i.range([90,90+h*360].map(u)),r.ticks(h*8),c()}),t.add(Gs,"Inner Radius",0,In-5).onChange(h=>{r.startRadius(h),c()}),t.add(Gs,"Scale Exponent",1,10).onChange(h=>{i.exponent(1/h),c()});const i=d3.scalePow().domain([0,100]).range([90,Mo.turns*360].map(u)),r=d3.axisRadialInner(i).startRadius(Mo.minR).endRadius(In-5).ticks(Mo.turns*8),a=d3.select("#canvas").attr("width",In).attr("height",In).attr("viewBox",`${-In} ${-In} ${In*2} ${In*2}`).append("g").classed("axis",!0);var s=d3.select("#log_demo").append("svg").attr("width",In*4).attr("height",In/8),l=d3.scaleLog().domain([1,1e3]).range([100,800]).base(10);s.append("g").attr("transform","translate(-95,0)").call(d3.axisBottom(l).tickFormat(d3.format(".2"))),c();function c(){a.call(r)}function u(h){return h*Math.PI/180}}}let Pd=[],$a={N:361,longueur:2e3,sens:-2.2,strates:99,progression:-.4,fixed:!0},tc=new GE($a);for(let n=0;n<$a.N;n++){let e=864e5*n,t=new Date(Date.now()+e);t=t.setHours(0,0,0,0);let i=new Date(t).toLocaleDateString(),r=tc.coords(n),o={id:n,name:i,color:"green",group:"text_spirale",timestamp:e,date:t,fx:r.x,fy:r.y,fz:r.z};Pd.push(o)}const YE={nodes:Pd,links:[...Array($a.N).keys()].filter(n=>n).map(n=>({source:n,target:n-1}))},ln=Yw()(document.getElementById("3d-graph")).backgroundColor("#001b42").graphData(YE).nodeThreeObject(n=>tc.nodeObject(n)).onNodeClick((n,e)=>{console.log(n,e)}).onNodeHover((n,e)=>{console.log(n,e)}).onNodeRightClick((n,e)=>{console.log(n,e)}).linkColor(n=>n.color);let KE=new wE(ln,$a,tc);new EE(ln);ln.d3Force("center",null);WE(ln.scene());XE(ln.scene());let ZE=new VE(ln);ln.onEngineTick(()=>{ZE.onEngineTick()});let ma=!0;document.getElementById("animationToggle").addEventListener("click",n=>{ma?ln.pauseAnimation():ln.resumeAnimation(),ma=!ma,n.target.innerHTML=`${ma?"Pause":"Resume"} Animation`});let JE=new ec({type:"catenoid",slices:250,stacks:400,x:-2,y:-2,z:0}),QE=new ec({type:"catenoid2",slices:25,stacks:400,x:-2,y:2,z:0}),e1=new ec({type:"hyperbolic",slices:360,stacks:254,x:-2,y:0,z:0});ln.scene().add(JE);ln.scene().add(QE);ln.scene().add(e1);new qE(ln,KE.gui)});export default t1();
