var sd=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var Rw=sd(ui=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gs="153",fn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ld=0,Al=1,cd=2,uh=1,ud=2,Tn=3,$n=0,Lt=1,jt=2,jn=0,Ki=1,Cl=2,Rl=3,Pl=4,hd=5,Gi=100,fd=101,dd=102,Ll=103,Ol=104,pd=200,md=201,gd=202,_d=203,hh=204,fh=205,vd=206,yd=207,xd=208,bd=209,Md=210,Sd=0,Ed=1,wd=2,cs=3,Td=4,Ad=5,Cd=6,Rd=7,Vs=0,Pd=1,Ld=2,Ln=0,Od=1,Dd=2,Id=3,Ud=4,Nd=5,dh=300,Ji=301,Qi=302,us=303,hs=304,Zo=306,fs=1e3,en=1001,ds=1002,Rt=1003,Dl=1004,pa=1005,zt=1006,Fd=1007,Hr=1008,Xn=1009,kd=1010,Bd=1011,Ws=1012,ph=1013,Vn=1014,Wn=1015,er=1016,mh=1017,gh=1018,hi=1020,zd=1021,tn=1023,Hd=1024,Gd=1025,fi=1026,tr=1027,Vd=1028,_h=1029,Wd=1030,vh=1031,yh=1033,ma=33776,ga=33777,_a=33778,va=33779,Il=35840,Ul=35841,Nl=35842,Fl=35843,jd=36196,kl=37492,Bl=37496,zl=37808,Hl=37809,Gl=37810,Vl=37811,Wl=37812,jl=37813,Xl=37814,$l=37815,ql=37816,Yl=37817,Kl=37818,Zl=37819,Jl=37820,Ql=37821,ya=36492,Xd=36283,ec=36284,tc=36285,nc=36286,xh=3e3,di=3001,$d=3200,qd=3201,Jo=0,Yd=1,pi="",Fe="srgb",pn="srgb-linear",bh="display-p3",xa=7680,Kd=519,Zd=512,Jd=513,Qd=514,ep=515,tp=516,np=517,ip=518,rp=519,ps=35044,ic="300 es",ms=1035,Cn=2e3,ko=2001;class on{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rc=1234567;const Or=Math.PI/180,Gr=180/Math.PI;function On(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function js(n,e){return(n%e+e)%e}function op(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function ap(n,e,t){return n!==e?(t-n)/(e-n):0}function Dr(n,e,t){return(1-t)*n+t*e}function sp(n,e,t,i){return Dr(n,e,1-Math.exp(-t*i))}function lp(n,e=1){return e-Math.abs(js(n,e*2)-e)}function cp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function up(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function hp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function fp(n,e){return n+Math.random()*(e-n)}function dp(n){return n*(.5-Math.random())}function pp(n){n!==void 0&&(rc=n);let e=rc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mp(n){return n*Or}function gp(n){return n*Gr}function gs(n){return(n&n-1)===0&&n!==0}function _p(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Bo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vp(n,e,t,i,r){const o=Math.cos,a=Math.sin,s=o(t/2),l=a(t/2),c=o((e+i)/2),u=a((e+i)/2),h=o((e-i)/2),f=a((e-i)/2),p=o((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(s*u,l*h,l*f,s*c);break;case"YZY":n.set(l*f,s*u,l*h,s*c);break;case"ZXZ":n.set(l*h,l*f,s*u,s*c);break;case"XZX":n.set(s*u,l*g,l*p,s*c);break;case"YXY":n.set(l*p,s*u,l*g,s*c);break;case"ZYZ":n.set(l*g,l*p,s*u,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ye(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const oc={DEG2RAD:Or,RAD2DEG:Gr,generateUUID:On,clamp:ht,euclideanModulo:js,mapLinear:op,inverseLerp:ap,lerp:Dr,damp:sp,pingpong:lp,smoothstep:cp,smootherstep:up,randInt:hp,randFloat:fp,randFloatSpread:dp,seededRandom:pp,degToRad:mp,radToDeg:gp,isPowerOfTwo:gs,ceilPowerOfTwo:_p,floorPowerOfTwo:Bo,setQuaternionFromProperEuler:vp,normalize:Ye,denormalize:Rn};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*r+e.x,this.y=o*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,i,r,o,a,s,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,s,l,c)}set(e,t,i,r,o,a,s,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=o,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,a=i[0],s=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],b=r[1],v=r[4],x=r[7],y=r[2],S=r[5],A=r[8];return o[0]=a*_+s*b+l*y,o[3]=a*m+s*v+l*S,o[6]=a*d+s*x+l*A,o[1]=c*_+u*b+h*y,o[4]=c*m+u*v+h*S,o[7]=c*d+u*x+h*A,o[2]=f*_+p*b+g*y,o[5]=f*m+p*v+g*S,o[8]=f*d+p*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*s*c-i*o*u+i*s*l+r*o*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=u*a-s*c,f=s*l-u*o,p=c*o-a*l,g=t*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(s*i-r*a)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*o-s*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*o)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,a,s){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*a+c*s)+a+e,-r*c,r*l,-r*(-c*a+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(ba.makeScale(e,t)),this}rotate(e){return this.premultiply(ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new ze;function Mh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Vr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const ac={};function Ir(n){n in ac||(ac[n]=!0,console.warn(n))}function Zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ma(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const yp=new ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),xp=new ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function bp(n){return n.convertSRGBToLinear().applyMatrix3(xp)}function Mp(n){return n.applyMatrix3(yp).convertLinearToSRGB()}const Sp={[pn]:n=>n,[Fe]:n=>n.convertSRGBToLinear(),[bh]:bp},Ep={[pn]:n=>n,[Fe]:n=>n.convertLinearToSRGB(),[bh]:Mp},qt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return pn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Sp[e],r=Ep[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let yi;class Sh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yi===void 0&&(yi=Vr("canvas")),yi.width=e.width,yi.height=e.height;const i=yi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=Zi(o[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zi(t[i]/255)*255):t[i]=Zi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wp=0;class Eh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=On(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?o.push(Sa(r[a].image)):o.push(Sa(r[a]))}else o=Sa(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function Sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tp=0;class Ot extends on{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=en,r=en,o=zt,a=Hr,s=tn,l=Xn,c=Ot.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=On(),this.name="",this.source=new Eh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===di?Fe:pi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fs:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case ds:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fs:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case ds:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Fe?di:xh}set encoding(e){Ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===di?Fe:pi}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=dh;Ot.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(p+1)/2,y=(d+1)/2,S=(u+f)/4,A=(h+_)/4,T=(g+m)/4;return v>x&&v>y?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=S/i,o=A/i):x>y?x<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),i=S/r,o=T/r):y<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(y),i=A/o,r=T/o),this.set(i,r,o,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-_)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qn extends on{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Ir("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===di?Fe:pi),this.texture=new Ot(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:zt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Eh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wh extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ap extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,a,s){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=o[a+0],p=o[a+1],g=o[a+2],_=o[a+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-s;const d=l*f+c*p+u*g+h*_,b=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const y=Math.sqrt(v),S=Math.atan2(y,d*b);m=Math.sin(m*S)/y,s=Math.sin(s*S)/y}const x=s*b;if(l=l*m+f*x,c=c*m+p*x,u=u*m+g*x,h=h*m+_*x,m===1-s){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,o,a){const s=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=o[a],f=o[a+1],p=o[a+2],g=o[a+3];return e[t]=s*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-s*p,e[t+2]=c*g+u*p+s*f-l*h,e[t+3]=u*g-s*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,o=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(i/2),u=s(r/2),h=s(o/2),f=l(i/2),p=l(r/2),g=l(o/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],a=t[1],s=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+s+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(o-c)*p,this._z=(a-r)*p}else if(i>s&&i>h){const p=2*Math.sqrt(1+i-s-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(o+c)/p}else if(s>h){const p=2*Math.sqrt(1+s-i-h);this._w=(o-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-s);this._w=(a-r)/p,this._x=(o+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,a=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*s+r*c-o*l,this._y=r*u+a*l+o*s-i*c,this._z=o*u+a*c+i*l-r*s,this._w=a*u-i*s-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,a=this._w;let s=a*e._w+i*e._x+r*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=i,this._y=r,this._z=o,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=o*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(o),i*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,a=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,a=e.y,s=e.z,l=e.w,c=l*t+a*r-s*i,u=l*i+s*t-o*r,h=l*r+o*i-a*t,f=-o*t-a*i-s*r;return this.x=c*l+f*-o+u*-s-h*-a,this.y=u*l+f*-a+h*-o-c*-s,this.z=h*l+f*-s+c*-a-u*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,a=t.x,s=t.y,l=t.z;return this.x=r*l-o*s,this.y=o*a-i*l,this.z=i*s-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ea.copy(this).projectOnVector(e),this.sub(Ea)}reflect(e){return this.sub(Ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new D,sc=new rn;class gi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),xi.copy(e.boundingBox),xi.applyMatrix4(e.matrixWorld),this.union(xi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let a=0,s=o.count;a<s;a++)yn.fromBufferAttribute(o,a).applyMatrix4(e.matrixWorld),this.expandByPoint(yn)}else r.boundingBox===null&&r.computeBoundingBox(),xi.copy(r.boundingBox),xi.applyMatrix4(e.matrixWorld),this.union(xi)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),Jr.subVectors(this.max,cr),bi.subVectors(e.a,cr),Mi.subVectors(e.b,cr),Si.subVectors(e.c,cr),Nn.subVectors(Mi,bi),Fn.subVectors(Si,Mi),ii.subVectors(bi,Si);let t=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-ii.z,ii.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,ii.z,0,-ii.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-ii.y,ii.x,0];return!wa(t,bi,Mi,Si,Jr)||(t=[1,0,0,0,1,0,0,0,1],!wa(t,bi,Mi,Si,Jr))?!1:(Qr.crossVectors(Nn,Fn),t=[Qr.x,Qr.y,Qr.z],wa(t,bi,Mi,Si,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vn=[new D,new D,new D,new D,new D,new D,new D,new D],yn=new D,xi=new gi,bi=new D,Mi=new D,Si=new D,Nn=new D,Fn=new D,ii=new D,cr=new D,Jr=new D,Qr=new D,ri=new D;function wa(n,e,t,i,r){for(let o=0,a=n.length-3;o<=a;o+=3){ri.fromArray(n,o);const s=r.x*Math.abs(ri.x)+r.y*Math.abs(ri.y)+r.z*Math.abs(ri.z),l=e.dot(ri),c=t.dot(ri),u=i.dot(ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Cp=new gi,ur=new D,Ta=new D;class Qo{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Cp.setFromPoints(e).getCenter(i);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const t=ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ur,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(Ta)),this.expandByPoint(ur.copy(e.center).sub(Ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new D,Aa=new D,eo=new D,kn=new D,Ca=new D,to=new D,Ra=new D;class Xs{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Aa.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(Aa);const o=e.distanceTo(t)*.5,a=-this.direction.dot(eo),s=kn.dot(this.direction),l=-kn.dot(eo),c=kn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-s,f=a*s-l,g=o*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+a*f+2*s)+f*(a*h+f+2*l)+c}else f=o,h=Math.max(0,-(a*f+s)),p=-h*h+f*(f+2*l)+c;else f=-o,h=Math.max(0,-(a*f+s)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*o+s)),f=h>0?-o:Math.min(Math.max(-o,-l),o),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-o,-l),o),p=f*(f+2*l)+c):(h=Math.max(0,-(a*o+s)),f=h>0?o:Math.min(Math.max(-o,-l),o),p=-h*h+f*(f+2*l)+c);else f=a>0?-o:o,h=Math.max(0,-(a*f+s)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Aa).addScaledVector(eo,f),p}intersectSphere(e,t){xn.subVectors(e.center,this.origin);const i=xn.dot(this.direction),r=xn.dot(xn)-i*i,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),s=i-a,l=i+a;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(o=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),h>=0?(s=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,i,r,o){Ca.subVectors(t,e),to.subVectors(i,e),Ra.crossVectors(Ca,to);let a=this.direction.dot(Ra),s;if(a>0){if(r)return null;s=1}else if(a<0)s=-1,a=-a;else return null;kn.subVectors(this.origin,e);const l=s*this.direction.dot(to.crossVectors(kn,to));if(l<0)return null;const c=s*this.direction.dot(Ca.cross(kn));if(c<0||l+c>a)return null;const u=-s*kn.dot(Ra);return u<0?null:this.at(u/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,i,r,o,a,s,l,c,u,h,f,p,g,_,m){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,s,l,c,u,h,f,p,g,_,m)}set(e,t,i,r,o,a,s,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=o,d[5]=a,d[9]=s,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ei.setFromMatrixColumn(e,0).length(),o=1/Ei.setFromMatrixColumn(e,1).length(),a=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,a=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const f=a*u,p=a*h,g=s*u,_=s*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-s*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f+_*s,t[4]=g*s-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-s,t[2]=p*s-g,t[6]=_+f*s,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f-_*s,t[4]=-a*h,t[8]=g+p*s,t[1]=p+g*s,t[5]=a*u,t[9]=_-f*s,t[2]=-a*c,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,g=s*u,_=s*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=s*l,_=s*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-s*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,p=a*c,g=s*l,_=s*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=s*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rp,e,Pp)}lookAt(e,t,i){const r=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Bn.crossVectors(i,Ft),Bn.lengthSq()===0&&(Math.abs(i.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Bn.crossVectors(i,Ft)),Bn.normalize(),no.crossVectors(Ft,Bn),r[0]=Bn.x,r[4]=no.x,r[8]=Ft.x,r[1]=Bn.y,r[5]=no.y,r[9]=Ft.y,r[2]=Bn.z,r[6]=no.z,r[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,a=i[0],s=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],b=i[3],v=i[7],x=i[11],y=i[15],S=r[0],A=r[4],T=r[8],M=r[12],w=r[1],z=r[5],V=r[9],F=r[13],L=r[2],P=r[6],k=r[10],q=r[14],Z=r[3],ae=r[7],H=r[11],re=r[15];return o[0]=a*S+s*w+l*L+c*Z,o[4]=a*A+s*z+l*P+c*ae,o[8]=a*T+s*V+l*k+c*H,o[12]=a*M+s*F+l*q+c*re,o[1]=u*S+h*w+f*L+p*Z,o[5]=u*A+h*z+f*P+p*ae,o[9]=u*T+h*V+f*k+p*H,o[13]=u*M+h*F+f*q+p*re,o[2]=g*S+_*w+m*L+d*Z,o[6]=g*A+_*z+m*P+d*ae,o[10]=g*T+_*V+m*k+d*H,o[14]=g*M+_*F+m*q+d*re,o[3]=b*S+v*w+x*L+y*Z,o[7]=b*A+v*z+x*P+y*ae,o[11]=b*T+v*V+x*k+y*H,o[15]=b*M+v*F+x*q+y*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],a=e[1],s=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+o*l*h-r*c*h-o*s*f+i*c*f+r*s*p-i*l*p)+_*(+t*l*p-t*c*f+o*a*f-r*a*p+r*c*u-o*l*u)+m*(+t*c*h-t*s*p-o*a*h+i*a*p+o*s*u-i*c*u)+d*(-r*s*u-t*l*h+t*s*f+r*a*h-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],b=h*m*c-_*f*c+_*l*p-s*m*p-h*l*d+s*f*d,v=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,x=u*_*c-g*h*c+g*s*p-a*_*p-u*s*d+a*h*d,y=g*h*l-u*_*l-g*s*f+a*_*f+u*s*m-a*h*m,S=t*b+i*v+r*x+o*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=b*A,e[1]=(_*f*o-h*m*o-_*r*p+i*m*p+h*r*d-i*f*d)*A,e[2]=(s*m*o-_*l*o+_*r*c-i*m*c-s*r*d+i*l*d)*A,e[3]=(h*l*o-s*f*o-h*r*c+i*f*c+s*r*p-i*l*p)*A,e[4]=v*A,e[5]=(u*m*o-g*f*o+g*r*p-t*m*p-u*r*d+t*f*d)*A,e[6]=(g*l*o-a*m*o-g*r*c+t*m*c+a*r*d-t*l*d)*A,e[7]=(a*f*o-u*l*o+u*r*c-t*f*c-a*r*p+t*l*p)*A,e[8]=x*A,e[9]=(g*h*o-u*_*o-g*i*p+t*_*p+u*i*d-t*h*d)*A,e[10]=(a*_*o-g*s*o+g*i*c-t*_*c-a*i*d+t*s*d)*A,e[11]=(u*s*o-a*h*o-u*i*c+t*h*c+a*i*p-t*s*p)*A,e[12]=y*A,e[13]=(u*_*r-g*h*r+g*i*f-t*_*f-u*i*m+t*h*m)*A,e[14]=(g*s*r-a*_*r-g*i*l+t*_*l+a*i*m-t*s*m)*A,e[15]=(a*h*r-u*s*r+u*i*l-t*h*l-a*i*f+t*s*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,a=e.x,s=e.y,l=e.z,c=o*a,u=o*s;return this.set(c*a+i,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+i,u*l-r*a,0,c*l-r*s,u*l+r*a,o*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,a){return this.set(1,i,o,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,a=t._y,s=t._z,l=t._w,c=o+o,u=a+a,h=s+s,f=o*c,p=o*u,g=o*h,_=a*u,m=a*h,d=s*h,b=l*c,v=l*u,x=l*h,y=i.x,S=i.y,A=i.z;return r[0]=(1-(_+d))*y,r[1]=(p+x)*y,r[2]=(g-v)*y,r[3]=0,r[4]=(p-x)*S,r[5]=(1-(f+d))*S,r[6]=(m+b)*S,r[7]=0,r[8]=(g+v)*A,r[9]=(m-b)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=Ei.set(r[0],r[1],r[2]).length();const a=Ei.set(r[4],r[5],r[6]).length(),s=Ei.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Yt.copy(this);const c=1/o,u=1/a,h=1/s;return Yt.elements[0]*=c,Yt.elements[1]*=c,Yt.elements[2]*=c,Yt.elements[4]*=u,Yt.elements[5]*=u,Yt.elements[6]*=u,Yt.elements[8]*=h,Yt.elements[9]*=h,Yt.elements[10]*=h,t.setFromRotationMatrix(Yt),i.x=o,i.y=a,i.z=s,this}makePerspective(e,t,i,r,o,a,s=Cn){const l=this.elements,c=2*o/(t-e),u=2*o/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(s===Cn)p=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(s===ko)p=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,o,a,s=Cn){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(a-o),f=(t+e)*c,p=(i+r)*u;let g,_;if(s===Cn)g=(a+o)*h,_=-2*h;else if(s===ko)g=o*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ei=new D,Yt=new nt,Rp=new D(0,0,0),Pp=new D(1,1,1),Bn=new D,no=new D,Ft=new D,lc=new nt,cc=new rn;class ea{constructor(e=0,t=0,i=0,r=ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],a=r[4],s=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ht(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cc.setFromEuler(this),this.setFromQuaternion(cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ea.DEFAULT_ORDER="XYZ";class $s{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lp=0;const uc=new D,wi=new rn,bn=new nt,io=new D,hr=new D,Op=new D,Dp=new rn,hc=new D(1,0,0),fc=new D(0,1,0),dc=new D(0,0,1),Ip={type:"added"},pc={type:"removed"};class vt extends on{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new D,t=new ea,i=new rn,r=new D(1,1,1);function o(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new nt},normalMatrix:{value:new ze}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new $s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(hc,e)}rotateY(e){return this.rotateOnAxis(fc,e)}rotateZ(e){return this.rotateOnAxis(dc,e)}translateOnAxis(e,t){return uc.copy(e).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hc,e)}translateY(e){return this.translateOnAxis(fc,e)}translateZ(e){return this.translateOnAxis(dc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?io.copy(e):io.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(hr,io,this.up):bn.lookAt(io,hr,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),wi.setFromRotationMatrix(bn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ip)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(pc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,Op),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++){const s=r[o];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(o(e.materials,this.material[l]));r.material=s}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(o(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vt.DEFAULT_UP=new D(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new D,Mn=new D,Pa=new D,Sn=new D,Ti=new D,Ai=new D,mc=new D,La=new D,Oa=new D,Da=new D;let ro=!1;class Vt{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Kt.subVectors(e,t),r.cross(Kt);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){Kt.subVectors(r,t),Mn.subVectors(i,t),Pa.subVectors(e,t);const a=Kt.dot(Kt),s=Kt.dot(Mn),l=Kt.dot(Pa),c=Mn.dot(Mn),u=Mn.dot(Pa),h=a*c-s*s;if(h===0)return o.set(-2,-1,-1);const f=1/h,p=(c*l-s*u)*f,g=(a*u-s*l)*f;return o.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Sn),Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(e,t,i,r,o,a,s,l){return ro===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ro=!0),this.getInterpolation(e,t,i,r,o,a,s,l)}static getInterpolation(e,t,i,r,o,a,s,l){return this.getBarycoord(e,t,i,r,Sn),l.setScalar(0),l.addScaledVector(o,Sn.x),l.addScaledVector(a,Sn.y),l.addScaledVector(s,Sn.z),l}static isFrontFacing(e,t,i,r){return Kt.subVectors(i,t),Mn.subVectors(e,t),Kt.cross(Mn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Kt.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,o){return ro===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ro=!0),Vt.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}getInterpolation(e,t,i,r,o){return Vt.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let a,s;Ti.subVectors(r,i),Ai.subVectors(o,i),La.subVectors(e,i);const l=Ti.dot(La),c=Ai.dot(La);if(l<=0&&c<=0)return t.copy(i);Oa.subVectors(e,r);const u=Ti.dot(Oa),h=Ai.dot(Oa);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ti,a);Da.subVectors(e,o);const p=Ti.dot(Da),g=Ai.dot(Da);if(g>=0&&p<=g)return t.copy(o);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(i).addScaledVector(Ai,s);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return mc.subVectors(o,r),s=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(mc,s);const d=1/(m+_+f);return a=_*d,s=f*d,t.copy(i).addScaledVector(Ti,a).addScaledVector(Ai,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Up=0;class Un extends on{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=On(),this.name="",this.type="Material",this.blending=Ki,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=hh,this.blendDst=fh,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xa,this.stencilZFail=xa,this.stencilZPass=xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(i.blending=this.blending),this.side!==$n&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const a=[];for(const s in o){const l=o[s];delete l.metadata,a.push(l)}return a}if(t){const o=r(e.textures),a=r(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zt={h:0,s:0,l:0},oo={h:0,s:0,l:0};function Ia(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let He=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=qt.workingColorSpace){return this.r=e,this.g=t,this.b=i,qt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=qt.workingColorSpace){if(e=js(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,a=2*i-o;this.r=Ia(a,o,e+1/3),this.g=Ia(a,o,e),this.b=Ia(a,o,e-1/3)}return qt.toWorkingColorSpace(this,r),this}setStyle(e,t=Fe){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fe){const i=Th[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fe){return qt.fromWorkingColorSpace(St.copy(this),e),Math.round(ht(St.r*255,0,255))*65536+Math.round(ht(St.g*255,0,255))*256+Math.round(ht(St.b*255,0,255))}getHexString(e=Fe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.fromWorkingColorSpace(St.copy(this),t);const i=St.r,r=St.g,o=St.b,a=Math.max(i,r,o),s=Math.min(i,r,o);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const h=a-s;switch(c=u<=.5?h/(a+s):h/(2-a-s),a){case i:l=(r-o)/h+(r<o?6:0);break;case r:l=(o-i)/h+2;break;case o:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qt.workingColorSpace){return qt.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=Fe){qt.fromWorkingColorSpace(St.copy(this),e);const t=St.r,i=St.g,r=St.b;return e!==Fe?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Zt),Zt.h+=e,Zt.s+=t,Zt.l+=i,this.setHSL(Zt.h,Zt.s,Zt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zt),e.getHSL(oo);const i=Dr(Zt.h,oo.h,t),r=Dr(Zt.s,oo.s,t),o=Dr(Zt.l,oo.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const St=new He;He.NAMES=Th;class or extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new D,ao=new fe;class Xt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ps,this.updateRange={offset:0,count:-1},this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ao.fromBufferAttribute(this,t),ao.applyMatrix3(e),this.setXY(t,ao.x,ao.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),r=Ye(r,this.array),o=Ye(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ps&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ah extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ch extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ot extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Np=0;const Gt=new nt,Ua=new vt,Ci=new D,kt=new gi,fr=new gi,gt=new D;class Dt extends on{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mh(e)?Ch:Ah)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ze().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,i){return Gt.makeTranslation(e,t,i),this.applyMatrix4(Gt),this}scale(e,t,i){return Gt.makeScale(e,t,i),this.applyMatrix4(Gt),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];kt.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const s=t[o];fr.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(kt.min,fr.min),kt.expandByPoint(gt),gt.addVectors(kt.max,fr.max),kt.expandByPoint(gt)):(kt.expandByPoint(fr.min),kt.expandByPoint(fr.max))}kt.getCenter(i);let r=0;for(let o=0,a=e.count;o<a;o++)gt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let o=0,a=t.length;o<a;o++){const s=t[o],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)gt.fromBufferAttribute(s,c),l&&(Ci.fromBufferAttribute(e,c),gt.add(Ci)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,o=t.normal.array,a=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<s;w++)c[w]=new D,u[w]=new D;const h=new D,f=new D,p=new D,g=new fe,_=new fe,m=new fe,d=new D,b=new D;function v(w,z,V){h.fromArray(r,w*3),f.fromArray(r,z*3),p.fromArray(r,V*3),g.fromArray(a,w*2),_.fromArray(a,z*2),m.fromArray(a,V*2),f.sub(h),p.sub(h),_.sub(g),m.sub(g);const F=1/(_.x*m.y-m.x*_.y);isFinite(F)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(F),b.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(F),c[w].add(d),c[z].add(d),c[V].add(d),u[w].add(b),u[z].add(b),u[V].add(b))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let w=0,z=x.length;w<z;++w){const V=x[w],F=V.start,L=V.count;for(let P=F,k=F+L;P<k;P+=3)v(i[P+0],i[P+1],i[P+2])}const y=new D,S=new D,A=new D,T=new D;function M(w){A.fromArray(o,w*3),T.copy(A);const z=c[w];y.copy(z),y.sub(A.multiplyScalar(A.dot(z))).normalize(),S.crossVectors(T,z);const F=S.dot(u[w])<0?-1:1;l[w*4]=y.x,l[w*4+1]=y.y,l[w*4+2]=y.z,l[w*4+3]=F}for(let w=0,z=x.length;w<z;++w){const V=x[w],F=V.start,L=V.count;for(let P=F,k=F+L;P<k;P+=3)M(i[P+0]),M(i[P+1]),M(i[P+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new D,o=new D,a=new D,s=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,o),h.subVectors(r,o),u.cross(h),s.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),s.add(u),l.add(u),c.add(u),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,o),h.subVectors(r,o),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,h=s.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){s.isInterleavedBufferAttribute?p=l[_]*s.data.stride+s.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Xt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);t.setAttribute(s,c)}const o=this.morphAttributes;for(const s in o){const l=[],c=o[s];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],h=o[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gc=new nt,oi=new Xs,so=new Qo,_c=new D,Ri=new D,Pi=new D,Li=new D,Na=new D,lo=new D,co=new fe,uo=new fe,ho=new fe,vc=new D,yc=new D,xc=new D,fo=new D,po=new D;class bt extends vt{constructor(e=new Dt,t=new or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(o&&s){lo.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=s[l],h=o[l];u!==0&&(Na.fromBufferAttribute(h,e),a?lo.addScaledVector(Na,u):lo.addScaledVector(Na.sub(t),u))}t.add(lo)}return t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(o),oi.copy(e.ray).recast(e.near),!(so.containsPoint(oi.origin)===!1&&(oi.intersectSphere(so,_c)===null||oi.origin.distanceToSquared(_c)>(e.far-e.near)**2))&&(gc.copy(o).invert(),oi.copy(e.ray).applyMatrix4(gc),!(i.boundingBox!==null&&oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,i){let r;const o=this.geometry,a=this.material,s=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,f=o.groups,p=o.drawRange;if(s!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),v=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,y=v;x<y;x+=3){const S=s.getX(x),A=s.getX(x+1),T=s.getX(x+2);r=mo(this,d,e,i,c,u,h,S,A,T),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(s.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const b=s.getX(m),v=s.getX(m+1),x=s.getX(m+2);r=mo(this,a,e,i,c,u,h,b,v,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,y=v;x<y;x+=3){const S=x,A=x+1,T=x+2;r=mo(this,d,e,i,c,u,h,S,A,T),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const b=m,v=m+1,x=m+2;r=mo(this,a,e,i,c,u,h,b,v,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Fp(n,e,t,i,r,o,a,s){let l;if(e.side===Lt?l=i.intersectTriangle(a,o,r,!0,s):l=i.intersectTriangle(r,o,a,e.side===$n,s),l===null)return null;po.copy(s),po.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(po);return c<t.near||c>t.far?null:{distance:c,point:po.clone(),object:n}}function mo(n,e,t,i,r,o,a,s,l,c){n.getVertexPosition(s,Ri),n.getVertexPosition(l,Pi),n.getVertexPosition(c,Li);const u=Fp(n,e,t,i,Ri,Pi,Li,fo);if(u){r&&(co.fromBufferAttribute(r,s),uo.fromBufferAttribute(r,l),ho.fromBufferAttribute(r,c),u.uv=Vt.getInterpolation(fo,Ri,Pi,Li,co,uo,ho,new fe)),o&&(co.fromBufferAttribute(o,s),uo.fromBufferAttribute(o,l),ho.fromBufferAttribute(o,c),u.uv1=Vt.getInterpolation(fo,Ri,Pi,Li,co,uo,ho,new fe),u.uv2=u.uv1),a&&(vc.fromBufferAttribute(a,s),yc.fromBufferAttribute(a,l),xc.fromBufferAttribute(a,c),u.normal=Vt.getInterpolation(fo,Ri,Pi,Li,vc,yc,xc,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:s,b:l,c,normal:new D,materialIndex:0};Vt.getNormal(Ri,Pi,Li,h.normal),u.face=h}return u}class Kn extends Dt{constructor(e=1,t=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};const s=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,a,o,0),g("z","y","x",1,-1,i,t,-e,a,o,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,o,4),g("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(h,2));function g(_,m,d,b,v,x,y,S,A,T,M){const w=x/A,z=y/T,V=x/2,F=y/2,L=S/2,P=A+1,k=T+1;let q=0,Z=0;const ae=new D;for(let H=0;H<k;H++){const re=H*z-F;for(let N=0;N<P;N++){const te=N*w-V;ae[_]=te*b,ae[m]=re*v,ae[d]=L,c.push(ae.x,ae.y,ae.z),ae[_]=0,ae[m]=0,ae[d]=S>0?1:-1,u.push(ae.x,ae.y,ae.z),h.push(N/A),h.push(1-H/T),q+=1}}for(let H=0;H<T;H++)for(let re=0;re<A;re++){const N=f+re+P*H,te=f+re+P*(H+1),W=f+(re+1)+P*(H+1),j=f+(re+1)+P*H;l.push(N,te,j),l.push(te,W,j),Z+=6}s.addGroup(p,Z,M),p+=Z,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function nr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ct(n){const e={};for(let t=0;t<n.length;t++){const i=nr(n[t]);for(const r in i)e[r]=i[r]}return e}function kp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rh(n){return n.getRenderTarget()===null?n.outputColorSpace:pn}const Ph={clone:nr,merge:Ct};var Bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bp,this.fragmentShader=zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=kp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Lh extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wt extends Lh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Or*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,Di=1;class Hp extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Wt(Oi,Di,e,t);r.layers=this.layers,this.add(r);const o=new Wt(Oi,Di,e,t);o.layers=this.layers,this.add(o);const a=new Wt(Oi,Di,e,t);a.layers=this.layers,this.add(a);const s=new Wt(Oi,Di,e,t);s.layers=this.layers,this.add(s);const l=new Wt(Oi,Di,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Oi,Di,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,o,a,s,l]=t;for(const c of t)this.remove(c);if(e===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,s,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Ln,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,o),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,s),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Oh extends Ot{constructor(e,t,i,r,o,a,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ji,super(e,t,i,r,o,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gp extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Ir("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===di?Fe:pi),this.texture=new Oh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Kn(5,5,5),o=new In({name:"CubemapFromEquirect",uniforms:nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Lt,blending:jn});o.uniforms.tEquirect.value=t;const a=new bt(r,o),s=t.minFilter;return t.minFilter===Hr&&(t.minFilter=zt),new Hp(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(o)}}const Fa=new D,Vp=new D,Wp=new ze;class Gn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Fa.subVectors(i,t).cross(Vp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Wp.getNormalMatrix(e),r=this.coplanarPoint(Fa).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new Qo,go=new D;class qs{constructor(e=new Gn,t=new Gn,i=new Gn,r=new Gn,o=new Gn,a=new Gn){this.planes=[e,t,i,r,o,a]}set(e,t,i,r,o,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(o),s[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Cn){const i=this.planes,r=e.elements,o=r[0],a=r[1],s=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],b=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-o,f-c,m-p,x-d).normalize(),i[1].setComponents(l+o,f+c,m+p,x+d).normalize(),i[2].setComponents(l+a,f+u,m+g,x+b).normalize(),i[3].setComponents(l-a,f-u,m-g,x-b).normalize(),i[4].setComponents(l-s,f-h,m-_,x-v).normalize(),t===Cn)i[5].setComponents(l+s,f+h,m+_,x+v).normalize();else if(t===ko)i[5].setComponents(s,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(go.x=r.normal.x>0?e.max.x:e.min.x,go.y=r.normal.y>0?e.max.y:e.min.y,go.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dh(){let n=null,e=!1,t=null,i=null;function r(o,a){t(o,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function jp(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,f=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=n.SHORT;else if(h instanceof Uint32Array)g=n.UNSIGNED_INT;else if(h instanceof Int32Array)g=n.INT;else if(h instanceof Int8Array)g=n.BYTE;else if(h instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function o(c,u,h){const f=u.array,p=u.updateRange;n.bindBuffer(h,c),p.count===-1?n.bufferSubData(h,0,f):(t?n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,u)):h.version<c.version&&(o(h.buffer,c,u),h.version=c.version)}return{get:a,remove:s,update:l}}class ta extends Dt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,a=t/2,s=Math.floor(i),l=Math.floor(r),c=s+1,u=l+1,h=e/s,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const b=d*f-a;for(let v=0;v<c;v++){const x=v*h-o;g.push(x,-b,0),_.push(0,0,1),m.push(v/s),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<s;b++){const v=b+c*d,x=b+c*(d+1),y=b+1+c*(d+1),S=b+1+c*d;p.push(v,x,S),p.push(x,y,S)}this.setIndex(p),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(_,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jp="vec3 transformed = vec3( position );",Qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tm=`#ifdef USE_IRIDESCENCE
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
#endif`,nm=`#ifdef USE_BUMPMAP
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
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hm=`#define PI 3.141592653589793
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
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dm=`vec3 transformedNormal = objectNormal;
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
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",ym=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xm=`#ifdef USE_ENVMAP
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
#endif`,bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rm=`#ifdef USE_GRADIENTMAP
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
}`,Pm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Im=`uniform bool receiveShadow;
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
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zm=`PhysicalMaterial material;
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
#endif`,Hm=`struct PhysicalMaterial {
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
}`,Gm=`
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,jm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ym=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jm=`#if defined( USE_POINTS_UV )
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
#endif`,Qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ng=`#ifdef USE_MORPHNORMALS
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
#endif`,ig=`#ifdef USE_MORPHTARGETS
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
#endif`,rg=`#ifdef USE_MORPHTARGETS
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
#endif`,og=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ug=`#ifdef USE_NORMALMAP
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
#endif`,hg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tg=`float getShadowMask() {
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
}`,Ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,Rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ig=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ug=`#ifdef USE_TRANSMISSION
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
#endif`,Ng=`#ifdef USE_TRANSMISSION
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
#endif`,Fg=`#ifdef USE_UV
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
#endif`,kg=`#ifdef USE_UV
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
#endif`,Bg=`#ifdef USE_UV
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
#endif`,zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$g=`#include <common>
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
}`,qg=`#if DEPTH_PACKING == 3200
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
}`,Yg=`#define DISTANCE
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
}`,Kg=`#define DISTANCE
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qg=`uniform float scale;
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
}`,e_=`uniform vec3 diffuse;
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
}`,t_=`#include <common>
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#define LAMBERT
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
}`,r_=`#define LAMBERT
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
}`,o_=`#define MATCAP
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
}`,a_=`#define MATCAP
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
}`,s_=`#define NORMAL
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
}`,l_=`#define NORMAL
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
}`,c_=`#define PHONG
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
}`,u_=`#define PHONG
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
}`,h_=`#define STANDARD
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
}`,f_=`#define STANDARD
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
}`,d_=`#define TOON
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
}`,p_=`#define TOON
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
}`,m_=`uniform float size;
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
}`,g_=`uniform vec3 diffuse;
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
}`,__=`#include <common>
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
}`,v_=`uniform vec3 color;
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
}`,y_=`uniform float rotation;
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
}`,x_=`uniform vec3 diffuse;
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
}`,Be={alphamap_fragment:Xp,alphamap_pars_fragment:$p,alphatest_fragment:qp,alphatest_pars_fragment:Yp,aomap_fragment:Kp,aomap_pars_fragment:Zp,begin_vertex:Jp,beginnormal_vertex:Qp,bsdfs:em,iridescence_fragment:tm,bumpmap_pars_fragment:nm,clipping_planes_fragment:im,clipping_planes_pars_fragment:rm,clipping_planes_pars_vertex:om,clipping_planes_vertex:am,color_fragment:sm,color_pars_fragment:lm,color_pars_vertex:cm,color_vertex:um,common:hm,cube_uv_reflection_fragment:fm,defaultnormal_vertex:dm,displacementmap_pars_vertex:pm,displacementmap_vertex:mm,emissivemap_fragment:gm,emissivemap_pars_fragment:_m,encodings_fragment:vm,encodings_pars_fragment:ym,envmap_fragment:xm,envmap_common_pars_fragment:bm,envmap_pars_fragment:Mm,envmap_pars_vertex:Sm,envmap_physical_pars_fragment:Um,envmap_vertex:Em,fog_vertex:wm,fog_pars_vertex:Tm,fog_fragment:Am,fog_pars_fragment:Cm,gradientmap_pars_fragment:Rm,lightmap_fragment:Pm,lightmap_pars_fragment:Lm,lights_lambert_fragment:Om,lights_lambert_pars_fragment:Dm,lights_pars_begin:Im,lights_toon_fragment:Nm,lights_toon_pars_fragment:Fm,lights_phong_fragment:km,lights_phong_pars_fragment:Bm,lights_physical_fragment:zm,lights_physical_pars_fragment:Hm,lights_fragment_begin:Gm,lights_fragment_maps:Vm,lights_fragment_end:Wm,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:Xm,logdepthbuf_pars_vertex:$m,logdepthbuf_vertex:qm,map_fragment:Ym,map_pars_fragment:Km,map_particle_fragment:Zm,map_particle_pars_fragment:Jm,metalnessmap_fragment:Qm,metalnessmap_pars_fragment:eg,morphcolor_vertex:tg,morphnormal_vertex:ng,morphtarget_pars_vertex:ig,morphtarget_vertex:rg,normal_fragment_begin:og,normal_fragment_maps:ag,normal_pars_fragment:sg,normal_pars_vertex:lg,normal_vertex:cg,normalmap_pars_fragment:ug,clearcoat_normal_fragment_begin:hg,clearcoat_normal_fragment_maps:fg,clearcoat_pars_fragment:dg,iridescence_pars_fragment:pg,output_fragment:mg,packing:gg,premultiplied_alpha_fragment:_g,project_vertex:vg,dithering_fragment:yg,dithering_pars_fragment:xg,roughnessmap_fragment:bg,roughnessmap_pars_fragment:Mg,shadowmap_pars_fragment:Sg,shadowmap_pars_vertex:Eg,shadowmap_vertex:wg,shadowmask_pars_fragment:Tg,skinbase_vertex:Ag,skinning_pars_vertex:Cg,skinning_vertex:Rg,skinnormal_vertex:Pg,specularmap_fragment:Lg,specularmap_pars_fragment:Og,tonemapping_fragment:Dg,tonemapping_pars_fragment:Ig,transmission_fragment:Ug,transmission_pars_fragment:Ng,uv_pars_fragment:Fg,uv_pars_vertex:kg,uv_vertex:Bg,worldpos_vertex:zg,background_vert:Hg,background_frag:Gg,backgroundCube_vert:Vg,backgroundCube_frag:Wg,cube_vert:jg,cube_frag:Xg,depth_vert:$g,depth_frag:qg,distanceRGBA_vert:Yg,distanceRGBA_frag:Kg,equirect_vert:Zg,equirect_frag:Jg,linedashed_vert:Qg,linedashed_frag:e_,meshbasic_vert:t_,meshbasic_frag:n_,meshlambert_vert:i_,meshlambert_frag:r_,meshmatcap_vert:o_,meshmatcap_frag:a_,meshnormal_vert:s_,meshnormal_frag:l_,meshphong_vert:c_,meshphong_frag:u_,meshphysical_vert:h_,meshphysical_frag:f_,meshtoon_vert:d_,meshtoon_frag:p_,points_vert:m_,points_frag:g_,shadow_vert:__,shadow_frag:v_,sprite_vert:y_,sprite_frag:x_},pe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},dn={basic:{uniforms:Ct([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Ct([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new He(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Ct([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Ct([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Ct([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new He(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Ct([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Ct([pe.points,pe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Ct([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Ct([pe.common,pe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Ct([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Ct([pe.sprite,pe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Ct([pe.common,pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Ct([pe.lights,pe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};dn.physical={uniforms:Ct([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const _o={r:0,b:0,g:0};function b_(n,e,t,i,r,o,a){const s=new He(0);let l=o===!0?0:1,c,u,h=null,f=0,p=null;function g(m,d){let b=!1,v=d.isScene===!0?d.background:null;switch(v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?_(s,l):v&&v.isColor&&(_(v,1),b=!0),n.xr.getEnvironmentBlendMode()){case"opaque":b=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),b=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),b=!0;break}(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Zo)?(u===void 0&&(u=new bt(new Kn(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:nr(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Fe,(h!==v||f!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new bt(new ta(2,2),new In({name:"BackgroundMaterial",uniforms:nr(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(_o,Rh(n)),i.buffers.color.setClear(_o.r,_o.g,_o.b,d,a)}return{getClearColor:function(){return s},setClearColor:function(m,d=1){s.set(m),l=d,_(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(s,l)},render:g}}function M_(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||o!==null,s={},l=m(null);let c=l,u=!1;function h(L,P,k,q,Z){let ae=!1;if(a){const H=_(q,k,P);c!==H&&(c=H,p(c.object)),ae=d(L,q,k,Z),ae&&b(L,q,k,Z)}else{const H=P.wireframe===!0;(c.geometry!==q.id||c.program!==k.id||c.wireframe!==H)&&(c.geometry=q.id,c.program=k.id,c.wireframe=H,ae=!0)}Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,T(L,P,k,q),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function f(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):o.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):o.deleteVertexArrayOES(L)}function _(L,P,k){const q=k.wireframe===!0;let Z=s[L.id];Z===void 0&&(Z={},s[L.id]=Z);let ae=Z[P.id];ae===void 0&&(ae={},Z[P.id]=ae);let H=ae[q];return H===void 0&&(H=m(f()),ae[q]=H),H}function m(L){const P=[],k=[],q=[];for(let Z=0;Z<r;Z++)P[Z]=0,k[Z]=0,q[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:q,object:L,attributes:{},index:null}}function d(L,P,k,q){const Z=c.attributes,ae=P.attributes;let H=0;const re=k.getAttributes();for(const N in re)if(re[N].location>=0){const W=Z[N];let j=ae[N];if(j===void 0&&(N==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),N==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),W===void 0||W.attribute!==j||j&&W.data!==j.data)return!0;H++}return c.attributesNum!==H||c.index!==q}function b(L,P,k,q){const Z={},ae=P.attributes;let H=0;const re=k.getAttributes();for(const N in re)if(re[N].location>=0){let W=ae[N];W===void 0&&(N==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),N==="instanceColor"&&L.instanceColor&&(W=L.instanceColor));const j={};j.attribute=W,W&&W.data&&(j.data=W.data),Z[N]=j,H++}c.attributes=Z,c.attributesNum=H,c.index=q}function v(){const L=c.newAttributes;for(let P=0,k=L.length;P<k;P++)L[P]=0}function x(L){y(L,0)}function y(L,P){const k=c.newAttributes,q=c.enabledAttributes,Z=c.attributeDivisors;k[L]=1,q[L]===0&&(n.enableVertexAttribArray(L),q[L]=1),Z[L]!==P&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,P),Z[L]=P)}function S(){const L=c.newAttributes,P=c.enabledAttributes;for(let k=0,q=P.length;k<q;k++)P[k]!==L[k]&&(n.disableVertexAttribArray(k),P[k]=0)}function A(L,P,k,q,Z,ae,H){H===!0?n.vertexAttribIPointer(L,P,k,Z,ae):n.vertexAttribPointer(L,P,k,q,Z,ae)}function T(L,P,k,q){if(i.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const Z=q.attributes,ae=k.getAttributes(),H=P.defaultAttributeValues;for(const re in ae){const N=ae[re];if(N.location>=0){let te=Z[re];if(te===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(te=L.instanceColor)),te!==void 0){const W=te.normalized,j=te.itemSize,ne=t.get(te);if(ne===void 0)continue;const U=ne.buffer,J=ne.type,ce=ne.bytesPerElement,Te=i.isWebGL2===!0&&(J===n.INT||J===n.UNSIGNED_INT||te.gpuType===ph);if(te.isInterleavedBufferAttribute){const _e=te.data,B=_e.stride,Ze=te.offset;if(_e.isInstancedInterleavedBuffer){for(let ve=0;ve<N.locationSize;ve++)y(N.location+ve,_e.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ve=0;ve<N.locationSize;ve++)x(N.location+ve);n.bindBuffer(n.ARRAY_BUFFER,U);for(let ve=0;ve<N.locationSize;ve++)A(N.location+ve,j/N.locationSize,J,W,B*ce,(Ze+j/N.locationSize*ve)*ce,Te)}else{if(te.isInstancedBufferAttribute){for(let _e=0;_e<N.locationSize;_e++)y(N.location+_e,te.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let _e=0;_e<N.locationSize;_e++)x(N.location+_e);n.bindBuffer(n.ARRAY_BUFFER,U);for(let _e=0;_e<N.locationSize;_e++)A(N.location+_e,j/N.locationSize,J,W,j*ce,j/N.locationSize*_e*ce,Te)}}else if(H!==void 0){const W=H[re];if(W!==void 0)switch(W.length){case 2:n.vertexAttrib2fv(N.location,W);break;case 3:n.vertexAttrib3fv(N.location,W);break;case 4:n.vertexAttrib4fv(N.location,W);break;default:n.vertexAttrib1fv(N.location,W)}}}}S()}function M(){V();for(const L in s){const P=s[L];for(const k in P){const q=P[k];for(const Z in q)g(q[Z].object),delete q[Z];delete P[k]}delete s[L]}}function w(L){if(s[L.id]===void 0)return;const P=s[L.id];for(const k in P){const q=P[k];for(const Z in q)g(q[Z].object),delete q[Z];delete P[k]}delete s[L.id]}function z(L){for(const P in s){const k=s[P];if(k[L.id]===void 0)continue;const q=k[L.id];for(const Z in q)g(q[Z].object),delete q[Z];delete k[L.id]}}function V(){F(),u=!0,c!==l&&(c=l,p(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:F,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:x,disableUnusedAttributes:S}}function S_(n,e,t,i){const r=i.isWebGL2;let o;function a(c){o=c}function s(c,u){n.drawArrays(o,c,u),t.update(u,o,1)}function l(c,u,h){if(h===0)return;let f,p;if(r)f=n,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](o,c,u,h),t.update(u,o,h)}this.setMode=a,this.render=s,this.renderInstances=l}function E_(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=o(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,x=a||e.has("OES_texture_float"),y=v&&x,S=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:y,maxSamples:S}}function w_(n){const e=this;let t=null,i=0,r=!1,o=!1;const a=new Gn,s=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||o&&!m)o?u(null):c();else{const b=o?0:i,v=b*4;let x=d.clippingState||null;l.value=x,x=u(g,f,v,p);for(let y=0;y!==v;++y)x[y]=t[y];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,b=f.matrixWorldInverse;s.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,x=p;v!==_;++v,x+=4)a.copy(h[v]).applyMatrix4(b,s),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function T_(n){let e=new WeakMap;function t(a,s){return s===us?a.mapping=Ji:s===hs&&(a.mapping=Qi),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===us||s===hs)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Gp(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const s=a.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Ys extends Lh{constructor(e=-1,t=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,a=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(o,a,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ji=4,bc=[.125,.215,.35,.446,.526,.582],li=20,ka=new Ys,Mc=new He;let Ba=null;const si=(1+Math.sqrt(5))/2,Ii=1/si,Sc=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,si,Ii),new D(0,si,-Ii),new D(Ii,0,si),new D(-Ii,0,si),new D(si,Ii,0),new D(-si,Ii,0)];class Ec{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ba=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ba),e.scissorTest=!1,vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ba=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:er,format:tn,colorSpace:pn,depthBuffer:!1},r=wc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A_(o)),this._blurMaterial=C_(o,e,t)}return r}_compileMaterial(e){const t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,ka)}_sceneToCubeUV(e,t,i,r){const s=new Wt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Mc),u.toneMapping=Ln,u.autoClear=!1;const p=new or({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),g=new bt(new Kn,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Mc),_=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(s.up.set(0,l[d],0),s.lookAt(c[d],0,0)):b===1?(s.up.set(0,0,l[d]),s.lookAt(0,c[d],0)):(s.up.set(0,l[d],0),s.lookAt(0,0,c[d]));const v=this._cubeSize;vo(r,b*v,d>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ji||e.mapping===Qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tc());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new bt(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;const l=this._cubeSize;vo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ka)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Sc[(r-1)%Sc.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",o),this._halfBlur(a,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new bt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*li-1),_=o/g,m=isFinite(o)?1+Math.floor(u*_):li;m>li&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);const d=[];let b=0;for(let A=0;A<li;++A){const T=A/_,M=Math.exp(-T*T/2);d.push(M),A===0?b+=M:A<m&&(b+=2*M)}for(let A=0;A<d.length;A++)d[A]=d[A]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const x=this._sizeLods[r],y=3*x*(r>v-ji?r-v+ji:0),S=4*(this._cubeSize-x);vo(t,y,S,3*x,2*x),l.setRenderTarget(t),l.render(h,ka)}}function A_(n){const e=[],t=[],i=[];let r=n;const o=n-ji+1+bc.length;for(let a=0;a<o;a++){const s=Math.pow(2,r);t.push(s);let l=1/s;a>n-ji?l=bc[a-n+ji-1]:a===0&&(l=0),i.push(l);const c=1/(s-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,b=new Float32Array(_*g*p),v=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let S=0;S<p;S++){const A=S%3*2/3-1,T=S>2?0:-1,M=[A,T,0,A+2/3,T,0,A+2/3,T+1,0,A,T,0,A+2/3,T+1,0,A,T+1,0];b.set(M,_*g*S),v.set(f,m*g*S);const w=[S,S,S,S,S,S];x.set(w,d*g*S)}const y=new Dt;y.setAttribute("position",new Xt(b,_)),y.setAttribute("uv",new Xt(v,m)),y.setAttribute("faceIndex",new Xt(x,d)),e.push(y),r>ji&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function wc(n,e,t){const i=new qn(n,e,t);return i.texture.mapping=Zo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function C_(n,e,t){const i=new Float32Array(li),r=new D(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ks(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Tc(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ks(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Ac(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Ks(){return`

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
	`}function R_(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===us||l===hs,u=l===Ji||l===Qi;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new Ec(n)),h=c?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Ec(n));const f=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",o),f.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function o(s){const l=s.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function P_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function L_(n,e,t,i){const r={},o=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete r[f.id];const p=o.get(f);p&&(e.remove(p),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let v=0,x=b.length;v<x;v+=3){const y=b[v+0],S=b[v+1],A=b[v+2];f.push(y,S,S,A,A,y)}}else{const b=g.array;_=g.version;for(let v=0,x=b.length/3-1;v<x;v+=3){const y=v+0,S=v+1,A=v+2;f.push(y,S,S,A,A,y)}}const m=new(Mh(f)?Ch:Ah)(f,1);m.version=_;const d=o.get(h);d&&e.remove(d),o.set(h,m)}function u(h){const f=o.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return o.get(h)}return{get:s,update:l,getWireframeAttribute:u}}function O_(n,e,t,i){const r=i.isWebGL2;let o;function a(f){o=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function u(f,p){n.drawElements(o,p,s,f*l),t.update(p,o,1)}function h(f,p,g){if(g===0)return;let _,m;if(r)_=n,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](o,p,s,f*l,g),t.update(p,o,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function D_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,s){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=s*(o/3);break;case n.LINES:t.lines+=s*(o/2);break;case n.LINE_STRIP:t.lines+=s*(o-1);break;case n.LINE_LOOP:t.lines+=s*o;break;case n.POINTS:t.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function I_(n,e){return n[0]-e[0]}function U_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function N_(n,e,t){const i={},r=new Float32Array(8),o=new WeakMap,a=new _t,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=o.get(u);if(m===void 0||m.count!==_){let P=function(){F.dispose(),o.delete(u),u.removeEventListener("dispose",P)};var p=P;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),y===!0&&(M=3);let w=u.attributes.position.count*M,z=1;w>e.maxTextureSize&&(z=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const V=new Float32Array(w*z*4*_),F=new wh(V,w,z,_);F.type=Wn,F.needsUpdate=!0;const L=M*4;for(let k=0;k<_;k++){const q=S[k],Z=A[k],ae=T[k],H=w*z*4*k;for(let re=0;re<q.count;re++){const N=re*L;v===!0&&(a.fromBufferAttribute(q,re),V[H+N+0]=a.x,V[H+N+1]=a.y,V[H+N+2]=a.z,V[H+N+3]=0),x===!0&&(a.fromBufferAttribute(Z,re),V[H+N+4]=a.x,V[H+N+5]=a.y,V[H+N+6]=a.z,V[H+N+7]=0),y===!0&&(a.fromBufferAttribute(ae,re),V[H+N+8]=a.x,V[H+N+9]=a.y,V[H+N+10]=a.z,V[H+N+11]=ae.itemSize===4?a.w:1)}}m={count:_,texture:F,size:new fe(w,z)},o.set(u,m),u.addEventListener("dispose",P)}let d=0;for(let v=0;v<f.length;v++)d+=f[v];const b=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",b),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let x=0;x<g;x++)_[x]=[x,0];i[u.id]=_}for(let x=0;x<g;x++){const y=_[x];y[0]=x,y[1]=f[x]}_.sort(U_);for(let x=0;x<8;x++)x<g&&_[x][1]?(s[x][0]=_[x][0],s[x][1]=_[x][1]):(s[x][0]=Number.MAX_SAFE_INTEGER,s[x][1]=0);s.sort(I_);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let b=0;for(let x=0;x<8;x++){const y=s[x],S=y[0],A=y[1];S!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+x)!==m[S]&&u.setAttribute("morphTarget"+x,m[S]),d&&u.getAttribute("morphNormal"+x)!==d[S]&&u.setAttribute("morphNormal"+x,d[S]),r[x]=A,b+=A):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),d&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const v=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function F_(n,e,t,i){let r=new WeakMap;function o(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER)),h}function a(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}const Ih=new Ot,Uh=new wh,Nh=new Ap,Fh=new Oh,Cc=[],Rc=[],Pc=new Float32Array(16),Lc=new Float32Array(9),Oc=new Float32Array(4);function ar(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=Cc[r];if(o===void 0&&(o=new Float32Array(r),Cc[r]=o),e!==0){i.toArray(o,0);for(let a=1,s=0;a!==e;++a)s+=t,n[a].toArray(o,s)}return o}function ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function na(n,e){let t=Rc[e];t===void 0&&(t=new Int32Array(e),Rc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function k_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function B_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2fv(this.addr,e),dt(t,e)}}function z_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;n.uniform3fv(this.addr,e),dt(t,e)}}function H_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4fv(this.addr,e),dt(t,e)}}function G_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,i))return;Oc.set(i),n.uniformMatrix2fv(this.addr,!1,Oc),dt(t,i)}}function V_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,i))return;Lc.set(i),n.uniformMatrix3fv(this.addr,!1,Lc),dt(t,i)}}function W_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,i))return;Pc.set(i),n.uniformMatrix4fv(this.addr,!1,Pc),dt(t,i)}}function j_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function X_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2iv(this.addr,e),dt(t,e)}}function $_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3iv(this.addr,e),dt(t,e)}}function q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4iv(this.addr,e),dt(t,e)}}function Y_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function K_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2uiv(this.addr,e),dt(t,e)}}function Z_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3uiv(this.addr,e),dt(t,e)}}function J_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4uiv(this.addr,e),dt(t,e)}}function Q_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Ih,r)}function ev(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Nh,r)}function tv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Fh,r)}function nv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Uh,r)}function iv(n){switch(n){case 5126:return k_;case 35664:return B_;case 35665:return z_;case 35666:return H_;case 35674:return G_;case 35675:return V_;case 35676:return W_;case 5124:case 35670:return j_;case 35667:case 35671:return X_;case 35668:case 35672:return $_;case 35669:case 35673:return q_;case 5125:return Y_;case 36294:return K_;case 36295:return Z_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return Q_;case 35679:case 36299:case 36307:return ev;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return nv}}function rv(n,e){n.uniform1fv(this.addr,e)}function ov(n,e){const t=ar(e,this.size,2);n.uniform2fv(this.addr,t)}function av(n,e){const t=ar(e,this.size,3);n.uniform3fv(this.addr,t)}function sv(n,e){const t=ar(e,this.size,4);n.uniform4fv(this.addr,t)}function lv(n,e){const t=ar(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cv(n,e){const t=ar(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function uv(n,e){const t=ar(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hv(n,e){n.uniform1iv(this.addr,e)}function fv(n,e){n.uniform2iv(this.addr,e)}function dv(n,e){n.uniform3iv(this.addr,e)}function pv(n,e){n.uniform4iv(this.addr,e)}function mv(n,e){n.uniform1uiv(this.addr,e)}function gv(n,e){n.uniform2uiv(this.addr,e)}function _v(n,e){n.uniform3uiv(this.addr,e)}function vv(n,e){n.uniform4uiv(this.addr,e)}function yv(n,e,t){const i=this.cache,r=e.length,o=na(t,r);ft(i,o)||(n.uniform1iv(this.addr,o),dt(i,o));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ih,o[a])}function xv(n,e,t){const i=this.cache,r=e.length,o=na(t,r);ft(i,o)||(n.uniform1iv(this.addr,o),dt(i,o));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Nh,o[a])}function bv(n,e,t){const i=this.cache,r=e.length,o=na(t,r);ft(i,o)||(n.uniform1iv(this.addr,o),dt(i,o));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Fh,o[a])}function Mv(n,e,t){const i=this.cache,r=e.length,o=na(t,r);ft(i,o)||(n.uniform1iv(this.addr,o),dt(i,o));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Uh,o[a])}function Sv(n){switch(n){case 5126:return rv;case 35664:return ov;case 35665:return av;case 35666:return sv;case 35674:return lv;case 35675:return cv;case 35676:return uv;case 5124:case 35670:return hv;case 35667:case 35671:return fv;case 35668:case 35672:return dv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return gv;case 36295:return _v;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return bv;case 36289:case 36303:case 36311:case 36292:return Mv}}class Ev{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=iv(t.type)}}class wv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Sv(t.type)}}class Tv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const s=r[o];s.setValue(e,t[s.id],i)}}}const za=/(\w+)(\])?(\[|\.)?/g;function Dc(n,e){n.seq.push(e),n.map[e.id]=e}function Av(n,e,t){const i=n.name,r=i.length;for(za.lastIndex=0;;){const o=za.exec(i),a=za.lastIndex;let s=o[1];const l=o[2]==="]",c=o[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===r){Dc(t,c===void 0?new Ev(s,n,e):new wv(s,n,e));break}else{let h=t.map[s];h===void 0&&(h=new Tv(s),Dc(t,h)),t=h}}}class Do{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),a=e.getUniformLocation(t,o.name);Av(o,a,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,a=t.length;o!==a;++o){const s=t[o],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Ic(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Cv=0;function Rv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=r;a<o;a++){const s=a+1;i.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return i.join(`
`)}function Pv(n){switch(n){case pn:return["Linear","( value )"];case Fe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Uc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Rv(n.getShaderSource(e),a)}else return r}function Lv(n,e){const t=Pv(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ov(n,e){let t;switch(e){case Od:t="Linear";break;case Dd:t="Reinhard";break;case Id:t="OptimizedCineon";break;case Ud:t="ACESFilmic";break;case Nd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Dv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wr).join(`
`)}function Iv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Uv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),a=o.name;let s=1;o.type===n.FLOAT_MAT2&&(s=2),o.type===n.FLOAT_MAT3&&(s=3),o.type===n.FLOAT_MAT4&&(s=4),t[a]={type:o.type,location:n.getAttribLocation(e,a),locationSize:s}}return t}function wr(n){return n!==""}function Nc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function _s(n){return n.replace(Nv,Fv)}function Fv(n,e){const t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return _s(t)}const kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kc(n){return n.replace(kv,Bv)}function Bv(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Bc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ud?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Tn&&(e="SHADOWMAP_TYPE_VSM"),e}function Hv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ji:case Qi:e="ENVMAP_TYPE_CUBE";break;case Zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qi:e="ENVMAP_MODE_REFRACTION";break}return e}function Vv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vs:e="ENVMAP_BLENDING_MULTIPLY";break;case Pd:e="ENVMAP_BLENDING_MIX";break;case Ld:e="ENVMAP_BLENDING_ADD";break}return e}function Wv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function jv(n,e,t,i){const r=n.getContext(),o=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=zv(t),c=Hv(t),u=Gv(t),h=Vv(t),f=Wv(t),p=t.isWebGL2?"":Dv(t),g=Iv(o),_=r.createProgram();let m,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),d.length>0&&(d+=`
`)):(m=[Bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),d=[p,Bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Be.tonemapping_pars_fragment:"",t.toneMapping!==Ln?Ov("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.encodings_pars_fragment,Lv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),a=_s(a),a=Nc(a,t),a=Fc(a,t),s=_s(s),s=Nc(s,t),s=Fc(s,t),a=kc(a),s=kc(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=b+m+a,x=b+d+s,y=Ic(r,r.VERTEX_SHADER,v),S=Ic(r,r.FRAGMENT_SHADER,x);if(r.attachShader(_,y),r.attachShader(_,S),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(_).trim(),w=r.getShaderInfoLog(y).trim(),z=r.getShaderInfoLog(S).trim();let V=!0,F=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,y,S);else{const L=Uc(r,y,"vertex"),P=Uc(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+L+`
`+P)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(w===""||z==="")&&(F=!1);F&&(this.diagnostics={runnable:V,programLog:M,vertexShader:{log:w,prefix:m},fragmentShader:{log:z,prefix:d}})}r.deleteShader(y),r.deleteShader(S);let A;this.getUniforms=function(){return A===void 0&&(A=new Do(r,_)),A};let T;return this.getAttributes=function(){return T===void 0&&(T=Uv(r,_)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=S,this}let Xv=0;class $v{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qv(e),t.set(e,i)),i}}class qv{constructor(e){this.id=Xv++,this.code=e,this.usedTimes=0}}function Yv(n,e,t,i,r,o,a){const s=new $s,l=new $v,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,w,z,V,F){const L=V.fog,P=F.geometry,k=M.isMeshStandardMaterial?V.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||k),Z=q&&q.mapping===Zo?q.image.height:null,ae=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const H=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,re=H!==void 0?H.length:0;let N=0;P.morphAttributes.position!==void 0&&(N=1),P.morphAttributes.normal!==void 0&&(N=2),P.morphAttributes.color!==void 0&&(N=3);let te,W,j,ne;if(ae){const st=dn[ae];te=st.vertexShader,W=st.fragmentShader}else te=M.vertexShader,W=M.fragmentShader,l.update(M),j=l.getVertexShaderID(M),ne=l.getFragmentShaderID(M);const U=n.getRenderTarget(),J=F.isInstancedMesh===!0,ce=!!M.map,Te=!!M.matcap,_e=!!q,B=!!M.aoMap,Ze=!!M.lightMap,ve=!!M.bumpMap,Re=!!M.normalMap,Se=!!M.displacementMap,Ge=!!M.emissiveMap,Ue=!!M.metalnessMap,Ie=!!M.roughnessMap,qe=M.anisotropy>0,ut=M.clearcoat>0,pt=M.iridescence>0,R=M.sheen>0,E=M.transmission>0,Q=qe&&!!M.anisotropyMap,he=ut&&!!M.clearcoatMap,ue=ut&&!!M.clearcoatNormalMap,O=ut&&!!M.clearcoatRoughnessMap,se=pt&&!!M.iridescenceMap,le=pt&&!!M.iridescenceThicknessMap,K=R&&!!M.sheenColorMap,be=R&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,Ee=!!M.specularColorMap,Me=!!M.specularIntensityMap,ye=E&&!!M.transmissionMap,Le=E&&!!M.thicknessMap,We=!!M.gradientMap,I=!!M.alphaMap,me=M.alphaTest>0,Y=!!M.extensions,de=!!P.attributes.uv1,ge=!!P.attributes.uv2,Xe=!!P.attributes.uv3;return{isWebGL2:u,shaderID:ae,shaderType:M.type,shaderName:M.name,vertexShader:te,fragmentShader:W,defines:M.defines,customVertexShaderID:j,customFragmentShaderID:ne,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:J,instancingColor:J&&F.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:pn,map:ce,matcap:Te,envMap:_e,envMapMode:_e&&q.mapping,envMapCubeUVHeight:Z,aoMap:B,lightMap:Ze,bumpMap:ve,normalMap:Re,displacementMap:f&&Se,emissiveMap:Ge,normalMapObjectSpace:Re&&M.normalMapType===Yd,normalMapTangentSpace:Re&&M.normalMapType===Jo,metalnessMap:Ue,roughnessMap:Ie,anisotropy:qe,anisotropyMap:Q,clearcoat:ut,clearcoatMap:he,clearcoatNormalMap:ue,clearcoatRoughnessMap:O,iridescence:pt,iridescenceMap:se,iridescenceThicknessMap:le,sheen:R,sheenColorMap:K,sheenRoughnessMap:be,specularMap:Ae,specularColorMap:Ee,specularIntensityMap:Me,transmission:E,transmissionMap:ye,thicknessMap:Le,gradientMap:We,opaque:M.transparent===!1&&M.blending===Ki,alphaMap:I,alphaTest:me,combine:M.combine,mapUv:ce&&_(M.map.channel),aoMapUv:B&&_(M.aoMap.channel),lightMapUv:Ze&&_(M.lightMap.channel),bumpMapUv:ve&&_(M.bumpMap.channel),normalMapUv:Re&&_(M.normalMap.channel),displacementMapUv:Se&&_(M.displacementMap.channel),emissiveMapUv:Ge&&_(M.emissiveMap.channel),metalnessMapUv:Ue&&_(M.metalnessMap.channel),roughnessMapUv:Ie&&_(M.roughnessMap.channel),anisotropyMapUv:Q&&_(M.anisotropyMap.channel),clearcoatMapUv:he&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:K&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(M.sheenRoughnessMap.channel),specularMapUv:Ae&&_(M.specularMap.channel),specularColorMapUv:Ee&&_(M.specularColorMap.channel),specularIntensityMapUv:Me&&_(M.specularIntensityMap.channel),transmissionMapUv:ye&&_(M.transmissionMap.channel),thicknessMapUv:Le&&_(M.thicknessMap.channel),alphaMapUv:I&&_(M.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Re||qe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:de,vertexUv2s:ge,vertexUv3s:Xe,pointsUvs:F.isPoints===!0&&!!P.attributes.uv&&(ce||I),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:N,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:Ln,useLegacyLights:n.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===jt,flipSided:M.side===Lt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Y&&M.extensions.derivatives===!0,extensionFragDepth:Y&&M.extensions.fragDepth===!0,extensionDrawBuffers:Y&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Y&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)w.push(z),w.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(b(w,M),v(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function b(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.matcap&&s.enable(4),w.envMap&&s.enable(5),w.normalMapObjectSpace&&s.enable(6),w.normalMapTangentSpace&&s.enable(7),w.clearcoat&&s.enable(8),w.iridescence&&s.enable(9),w.alphaTest&&s.enable(10),w.vertexColors&&s.enable(11),w.vertexAlphas&&s.enable(12),w.vertexUv1s&&s.enable(13),w.vertexUv2s&&s.enable(14),w.vertexUv3s&&s.enable(15),w.vertexTangents&&s.enable(16),w.anisotropy&&s.enable(17),M.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.useLegacyLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),M.push(s.mask)}function x(M){const w=g[M.type];let z;if(w){const V=dn[w];z=Ph.clone(V.uniforms)}else z=M.uniforms;return z}function y(M,w){let z;for(let V=0,F=c.length;V<F;V++){const L=c[V];if(L.cacheKey===w){z=L,++z.usedTimes;break}}return z===void 0&&(z=new jv(n,w,M,o),c.push(z)),z}function S(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:y,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:T}}function Kv(){let n=new WeakMap;function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function t(o){n.delete(o)}function i(o,a,s){n.get(o)[a]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Zv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hc(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function a(h,f,p,g,_,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function s(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Zv),i.length>1&&i.sort(f||zc),r.length>1&&r.sort(f||zc)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:s,unshift:l,finish:u,sort:c}}function Jv(){let n=new WeakMap;function e(i,r){const o=n.get(i);let a;return o===void 0?(a=new Hc,n.set(i,[a])):r>=o.length?(a=new Hc,o.push(a)):a=o[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Qv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new He};break;case"SpotLight":t={position:new D,direction:new D,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function e0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let t0=0;function n0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function i0(n,e){const t=new Qv,i=e0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new D);const o=new D,a=new nt,s=new nt;function l(u,h){let f=0,p=0,g=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let _=0,m=0,d=0,b=0,v=0,x=0,y=0,S=0,A=0,T=0;u.sort(n0);const M=h===!0?Math.PI:1;for(let z=0,V=u.length;z<V;z++){const F=u[z],L=F.color,P=F.intensity,k=F.distance,q=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=L.r*P*M,p+=L.g*P*M,g+=L.b*P*M;else if(F.isLightProbe)for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(F.sh.coefficients[Z],P);else if(F.isDirectionalLight){const Z=t.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity*M),F.castShadow){const ae=F.shadow,H=i.get(F);H.shadowBias=ae.bias,H.shadowNormalBias=ae.normalBias,H.shadowRadius=ae.radius,H.shadowMapSize=ae.mapSize,r.directionalShadow[_]=H,r.directionalShadowMap[_]=q,r.directionalShadowMatrix[_]=F.shadow.matrix,x++}r.directional[_]=Z,_++}else if(F.isSpotLight){const Z=t.get(F);Z.position.setFromMatrixPosition(F.matrixWorld),Z.color.copy(L).multiplyScalar(P*M),Z.distance=k,Z.coneCos=Math.cos(F.angle),Z.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Z.decay=F.decay,r.spot[d]=Z;const ae=F.shadow;if(F.map&&(r.spotLightMap[A]=F.map,A++,ae.updateMatrices(F),F.castShadow&&T++),r.spotLightMatrix[d]=ae.matrix,F.castShadow){const H=i.get(F);H.shadowBias=ae.bias,H.shadowNormalBias=ae.normalBias,H.shadowRadius=ae.radius,H.shadowMapSize=ae.mapSize,r.spotShadow[d]=H,r.spotShadowMap[d]=q,S++}d++}else if(F.isRectAreaLight){const Z=t.get(F);Z.color.copy(L).multiplyScalar(P),Z.halfWidth.set(F.width*.5,0,0),Z.halfHeight.set(0,F.height*.5,0),r.rectArea[b]=Z,b++}else if(F.isPointLight){const Z=t.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity*M),Z.distance=F.distance,Z.decay=F.decay,F.castShadow){const ae=F.shadow,H=i.get(F);H.shadowBias=ae.bias,H.shadowNormalBias=ae.normalBias,H.shadowRadius=ae.radius,H.shadowMapSize=ae.mapSize,H.shadowCameraNear=ae.camera.near,H.shadowCameraFar=ae.camera.far,r.pointShadow[m]=H,r.pointShadowMap[m]=q,r.pointShadowMatrix[m]=F.shadow.matrix,y++}r.point[m]=Z,m++}else if(F.isHemisphereLight){const Z=t.get(F);Z.skyColor.copy(F.color).multiplyScalar(P*M),Z.groundColor.copy(F.groundColor).multiplyScalar(P*M),r.hemi[v]=Z,v++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==_||w.pointLength!==m||w.spotLength!==d||w.rectAreaLength!==b||w.hemiLength!==v||w.numDirectionalShadows!==x||w.numPointShadows!==y||w.numSpotShadows!==S||w.numSpotMaps!==A)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=b,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=S+A-T,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=T,w.directionalLength=_,w.pointLength=m,w.spotLength=d,w.rectAreaLength=b,w.hemiLength=v,w.numDirectionalShadows=x,w.numPointShadows=y,w.numSpotShadows=S,w.numSpotMaps=A,r.version=t0++)}function c(u,h){let f=0,p=0,g=0,_=0,m=0;const d=h.matrixWorldInverse;for(let b=0,v=u.length;b<v;b++){const x=u[b];if(x.isDirectionalLight){const y=r.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),o.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(o),y.direction.transformDirection(d),f++}else if(x.isSpotLight){const y=r.spot[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(x.matrixWorld),o.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(o),y.direction.transformDirection(d),g++}else if(x.isRectAreaLight){const y=r.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(d),s.identity(),a.copy(x.matrixWorld),a.premultiply(d),s.extractRotation(a),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),_++}else if(x.isPointLight){const y=r.point[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(d),p++}else if(x.isHemisphereLight){const y=r.hemi[m];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function Gc(n,e){const t=new i0(n,e),i=[],r=[];function o(){i.length=0,r.length=0}function a(h){i.push(h)}function s(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function r0(n,e){let t=new WeakMap;function i(o,a=0){const s=t.get(o);let l;return s===void 0?(l=new Gc(n,e),t.set(o,[l])):a>=s.length?(l=new Gc(n,e),s.push(l)):l=s[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class o0 extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a0 extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const s0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l0=`uniform sampler2D shadow_pass;
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
}`;function c0(n,e,t){let i=new qs;const r=new fe,o=new fe,a=new _t,s=new o0({depthPacking:qd}),l=new a0,c={},u=t.maxTextureSize,h={[$n]:Lt,[Lt]:$n,[jt]:jt},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:s0,fragmentShader:l0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uh;let d=this.type;this.render=function(y,S,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const T=n.getRenderTarget(),M=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),z=n.state;z.setBlending(jn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=d!==Tn&&this.type===Tn,F=d===Tn&&this.type!==Tn;for(let L=0,P=y.length;L<P;L++){const k=y[L],q=k.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const Z=q.getFrameExtents();if(r.multiply(Z),o.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/Z.x),r.x=o.x*Z.x,q.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/Z.y),r.y=o.y*Z.y,q.mapSize.y=o.y)),q.map===null||V===!0||F===!0){const H=this.type!==Tn?{minFilter:Rt,magFilter:Rt}:{};q.map!==null&&q.map.dispose(),q.map=new qn(r.x,r.y,H),q.map.texture.name=k.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const ae=q.getViewportCount();for(let H=0;H<ae;H++){const re=q.getViewport(H);a.set(o.x*re.x,o.y*re.y,o.x*re.z,o.y*re.w),z.viewport(a),q.updateMatrices(k,H),i=q.getFrustum(),x(S,A,q.camera,k,this.type)}q.isPointLightShadow!==!0&&this.type===Tn&&b(q,A),q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(T,M,w)};function b(y,S){const A=e.update(_);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new qn(r.x,r.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(S,null,A,f,_,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(S,null,A,p,_,null)}function v(y,S,A,T){let M=null;const w=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(w!==void 0)M=w;else if(M=A.isPointLight===!0?l:s,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const z=M.uuid,V=S.uuid;let F=c[z];F===void 0&&(F={},c[z]=F);let L=F[V];L===void 0&&(L=M.clone(),F[V]=L),M=L}if(M.visible=S.visible,M.wireframe=S.wireframe,T===Tn?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:h[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=n.properties.get(M);z.light=A}return M}function x(y,S,A,T,M){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&M===Tn)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const V=e.update(y),F=y.material;if(Array.isArray(F)){const L=V.groups;for(let P=0,k=L.length;P<k;P++){const q=L[P],Z=F[q.materialIndex];if(Z&&Z.visible){const ae=v(y,Z,T,M);n.renderBufferDirect(A,null,V,ae,y,q)}}}else if(F.visible){const L=v(y,F,T,M);n.renderBufferDirect(A,null,V,L,y,null)}}const z=y.children;for(let V=0,F=z.length;V<F;V++)x(z[V],S,A,T,M)}}function u0(n,e,t){const i=t.isWebGL2;function r(){let I=!1;const me=new _t;let Y=null;const de=new _t(0,0,0,0);return{setMask:function(ge){Y!==ge&&!I&&(n.colorMask(ge,ge,ge,ge),Y=ge)},setLocked:function(ge){I=ge},setClear:function(ge,Xe,it,st,ei){ei===!0&&(ge*=st,Xe*=st,it*=st),me.set(ge,Xe,it,st),de.equals(me)===!1&&(n.clearColor(ge,Xe,it,st),de.copy(me))},reset:function(){I=!1,Y=null,de.set(-1,0,0,0)}}}function o(){let I=!1,me=null,Y=null,de=null;return{setTest:function(ge){ge?U(n.DEPTH_TEST):J(n.DEPTH_TEST)},setMask:function(ge){me!==ge&&!I&&(n.depthMask(ge),me=ge)},setFunc:function(ge){if(Y!==ge){switch(ge){case Sd:n.depthFunc(n.NEVER);break;case Ed:n.depthFunc(n.ALWAYS);break;case wd:n.depthFunc(n.LESS);break;case cs:n.depthFunc(n.LEQUAL);break;case Td:n.depthFunc(n.EQUAL);break;case Ad:n.depthFunc(n.GEQUAL);break;case Cd:n.depthFunc(n.GREATER);break;case Rd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Y=ge}},setLocked:function(ge){I=ge},setClear:function(ge){de!==ge&&(n.clearDepth(ge),de=ge)},reset:function(){I=!1,me=null,Y=null,de=null}}}function a(){let I=!1,me=null,Y=null,de=null,ge=null,Xe=null,it=null,st=null,ei=null;return{setTest:function(rt){I||(rt?U(n.STENCIL_TEST):J(n.STENCIL_TEST))},setMask:function(rt){me!==rt&&!I&&(n.stencilMask(rt),me=rt)},setFunc:function(rt,ln,wt){(Y!==rt||de!==ln||ge!==wt)&&(n.stencilFunc(rt,ln,wt),Y=rt,de=ln,ge=wt)},setOp:function(rt,ln,wt){(Xe!==rt||it!==ln||st!==wt)&&(n.stencilOp(rt,ln,wt),Xe=rt,it=ln,st=wt)},setLocked:function(rt){I=rt},setClear:function(rt){ei!==rt&&(n.clearStencil(rt),ei=rt)},reset:function(){I=!1,me=null,Y=null,de=null,ge=null,Xe=null,it=null,st=null,ei=null}}}const s=new r,l=new o,c=new a,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,d=!1,b=null,v=null,x=null,y=null,S=null,A=null,T=null,M=!1,w=null,z=null,V=null,F=null,L=null;const P=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,q=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),k=q>=1):Z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),k=q>=2);let ae=null,H={};const re=n.getParameter(n.SCISSOR_BOX),N=n.getParameter(n.VIEWPORT),te=new _t().fromArray(re),W=new _t().fromArray(N);function j(I,me,Y,de){const ge=new Uint8Array(4),Xe=n.createTexture();n.bindTexture(I,Xe),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let it=0;it<Y;it++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(me,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(me+it,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return Xe}const ne={};ne[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ne[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),U(n.DEPTH_TEST),l.setFunc(cs),Se(!1),Ge(Al),U(n.CULL_FACE),ve(jn);function U(I){f[I]!==!0&&(n.enable(I),f[I]=!0)}function J(I){f[I]!==!1&&(n.disable(I),f[I]=!1)}function ce(I,me){return p[I]!==me?(n.bindFramebuffer(I,me),p[I]=me,i&&(I===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=me),I===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=me)),!0):!1}function Te(I,me){let Y=_,de=!1;if(I)if(Y=g.get(me),Y===void 0&&(Y=[],g.set(me,Y)),I.isWebGLMultipleRenderTargets){const ge=I.texture;if(Y.length!==ge.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let Xe=0,it=ge.length;Xe<it;Xe++)Y[Xe]=n.COLOR_ATTACHMENT0+Xe;Y.length=ge.length,de=!0}}else Y[0]!==n.COLOR_ATTACHMENT0&&(Y[0]=n.COLOR_ATTACHMENT0,de=!0);else Y[0]!==n.BACK&&(Y[0]=n.BACK,de=!0);de&&(t.isWebGL2?n.drawBuffers(Y):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function _e(I){return m!==I?(n.useProgram(I),m=I,!0):!1}const B={[Gi]:n.FUNC_ADD,[fd]:n.FUNC_SUBTRACT,[dd]:n.FUNC_REVERSE_SUBTRACT};if(i)B[Ll]=n.MIN,B[Ol]=n.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(B[Ll]=I.MIN_EXT,B[Ol]=I.MAX_EXT)}const Ze={[pd]:n.ZERO,[md]:n.ONE,[gd]:n.SRC_COLOR,[hh]:n.SRC_ALPHA,[Md]:n.SRC_ALPHA_SATURATE,[xd]:n.DST_COLOR,[vd]:n.DST_ALPHA,[_d]:n.ONE_MINUS_SRC_COLOR,[fh]:n.ONE_MINUS_SRC_ALPHA,[bd]:n.ONE_MINUS_DST_COLOR,[yd]:n.ONE_MINUS_DST_ALPHA};function ve(I,me,Y,de,ge,Xe,it,st){if(I===jn){d===!0&&(J(n.BLEND),d=!1);return}if(d===!1&&(U(n.BLEND),d=!0),I!==hd){if(I!==b||st!==M){if((v!==Gi||S!==Gi)&&(n.blendEquation(n.FUNC_ADD),v=Gi,S=Gi),st)switch(I){case Ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cl:n.blendFunc(n.ONE,n.ONE);break;case Rl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Rl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,y=null,A=null,T=null,b=I,M=st}return}ge=ge||me,Xe=Xe||Y,it=it||de,(me!==v||ge!==S)&&(n.blendEquationSeparate(B[me],B[ge]),v=me,S=ge),(Y!==x||de!==y||Xe!==A||it!==T)&&(n.blendFuncSeparate(Ze[Y],Ze[de],Ze[Xe],Ze[it]),x=Y,y=de,A=Xe,T=it),b=I,M=!1}function Re(I,me){I.side===jt?J(n.CULL_FACE):U(n.CULL_FACE);let Y=I.side===Lt;me&&(Y=!Y),Se(Y),I.blending===Ki&&I.transparent===!1?ve(jn):ve(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),s.setMask(I.colorWrite);const de=I.stencilWrite;c.setTest(de),de&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ie(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):J(n.SAMPLE_ALPHA_TO_COVERAGE)}function Se(I){w!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),w=I)}function Ge(I){I!==ld?(U(n.CULL_FACE),I!==z&&(I===Al?n.cullFace(n.BACK):I===cd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):J(n.CULL_FACE),z=I}function Ue(I){I!==V&&(k&&n.lineWidth(I),V=I)}function Ie(I,me,Y){I?(U(n.POLYGON_OFFSET_FILL),(F!==me||L!==Y)&&(n.polygonOffset(me,Y),F=me,L=Y)):J(n.POLYGON_OFFSET_FILL)}function qe(I){I?U(n.SCISSOR_TEST):J(n.SCISSOR_TEST)}function ut(I){I===void 0&&(I=n.TEXTURE0+P-1),ae!==I&&(n.activeTexture(I),ae=I)}function pt(I,me,Y){Y===void 0&&(ae===null?Y=n.TEXTURE0+P-1:Y=ae);let de=H[Y];de===void 0&&(de={type:void 0,texture:void 0},H[Y]=de),(de.type!==I||de.texture!==me)&&(ae!==Y&&(n.activeTexture(Y),ae=Y),n.bindTexture(I,me||ne[I]),de.type=I,de.texture=me)}function R(){const I=H[ae];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function E(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(I){te.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),te.copy(I))}function Me(I){W.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),W.copy(I))}function ye(I,me){let Y=h.get(me);Y===void 0&&(Y=new WeakMap,h.set(me,Y));let de=Y.get(I);de===void 0&&(de=n.getUniformBlockIndex(me,I.name),Y.set(I,de))}function Le(I,me){const de=h.get(me).get(I);u.get(me)!==de&&(n.uniformBlockBinding(me,de,I.__bindingPointIndex),u.set(me,de))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ae=null,H={},p={},g=new WeakMap,_=[],m=null,d=!1,b=null,v=null,x=null,y=null,S=null,A=null,T=null,M=!1,w=null,z=null,V=null,F=null,L=null,te.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:U,disable:J,bindFramebuffer:ce,drawBuffers:Te,useProgram:_e,setBlending:ve,setMaterial:Re,setFlipSided:Se,setCullFace:Ge,setLineWidth:Ue,setPolygonOffset:Ie,setScissorTest:qe,activeTexture:ut,bindTexture:pt,unbindTexture:R,compressedTexImage2D:E,compressedTexImage3D:Q,texImage2D:be,texImage3D:Ae,updateUBOMapping:ye,uniformBlockBinding:Le,texStorage2D:le,texStorage3D:K,texSubImage2D:he,texSubImage3D:ue,compressedTexSubImage2D:O,compressedTexSubImage3D:se,scissor:Ee,viewport:Me,reset:We}}function h0(n,e,t,i,r,o,a){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(R,E){return d?new OffscreenCanvas(R,E):Vr("canvas")}function v(R,E,Q,he){let ue=1;if((R.width>he||R.height>he)&&(ue=he/Math.max(R.width,R.height)),ue<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const O=E?Bo:Math.floor,se=O(ue*R.width),le=O(ue*R.height);_===void 0&&(_=b(se,le));const K=Q?b(se,le):_;return K.width=se,K.height=le,K.getContext("2d").drawImage(R,0,0,se,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+se+"x"+le+")."),K}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function x(R){return gs(R.width)&&gs(R.height)}function y(R){return s?!1:R.wrapS!==en||R.wrapT!==en||R.minFilter!==Rt&&R.minFilter!==zt}function S(R,E){return R.generateMipmaps&&E&&R.minFilter!==Rt&&R.minFilter!==zt}function A(R){n.generateMipmap(R)}function T(R,E,Q,he,ue=!1){if(s===!1)return E;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let O=E;return E===n.RED&&(Q===n.FLOAT&&(O=n.R32F),Q===n.HALF_FLOAT&&(O=n.R16F),Q===n.UNSIGNED_BYTE&&(O=n.R8)),E===n.RG&&(Q===n.FLOAT&&(O=n.RG32F),Q===n.HALF_FLOAT&&(O=n.RG16F),Q===n.UNSIGNED_BYTE&&(O=n.RG8)),E===n.RGBA&&(Q===n.FLOAT&&(O=n.RGBA32F),Q===n.HALF_FLOAT&&(O=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(O=he===Fe&&ue===!1?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT_4_4_4_4&&(O=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(O=n.RGB5_A1)),(O===n.R16F||O===n.R32F||O===n.RG16F||O===n.RG32F||O===n.RGBA16F||O===n.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function M(R,E,Q){return S(R,Q)===!0||R.isFramebufferTexture&&R.minFilter!==Rt&&R.minFilter!==zt?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function w(R){return R===Rt||R===Dl||R===pa?n.NEAREST:n.LINEAR}function z(R){const E=R.target;E.removeEventListener("dispose",z),F(E),E.isVideoTexture&&g.delete(E)}function V(R){const E=R.target;E.removeEventListener("dispose",V),P(E)}function F(R){const E=i.get(R);if(E.__webglInit===void 0)return;const Q=R.source,he=m.get(Q);if(he){const ue=he[E.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&L(R),Object.keys(he).length===0&&m.delete(Q)}i.remove(R)}function L(R){const E=i.get(R);n.deleteTexture(E.__webglTexture);const Q=R.source,he=m.get(Q);delete he[E.__cacheKey],a.memory.textures--}function P(R){const E=R.texture,Q=i.get(R),he=i.get(E);if(he.__webglTexture!==void 0&&(n.deleteTexture(he.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++)n.deleteFramebuffer(Q.__webglFramebuffer[ue]),Q.__webglDepthbuffer&&n.deleteRenderbuffer(Q.__webglDepthbuffer[ue]);else{if(n.deleteFramebuffer(Q.__webglFramebuffer),Q.__webglDepthbuffer&&n.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let ue=0;ue<Q.__webglColorRenderbuffer.length;ue++)Q.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(Q.__webglColorRenderbuffer[ue]);Q.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ue=0,O=E.length;ue<O;ue++){const se=i.get(E[ue]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(E[ue])}i.remove(E),i.remove(R)}let k=0;function q(){k=0}function Z(){const R=k;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),k+=1,R}function ae(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function H(R,E){const Q=i.get(R);if(R.isVideoTexture&&ut(R),R.isRenderTargetTexture===!1&&R.version>0&&Q.__version!==R.version){const he=R.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(Q,R,E);return}}t.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+E)}function re(R,E){const Q=i.get(R);if(R.version>0&&Q.__version!==R.version){ce(Q,R,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+E)}function N(R,E){const Q=i.get(R);if(R.version>0&&Q.__version!==R.version){ce(Q,R,E);return}t.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+E)}function te(R,E){const Q=i.get(R);if(R.version>0&&Q.__version!==R.version){Te(Q,R,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+E)}const W={[fs]:n.REPEAT,[en]:n.CLAMP_TO_EDGE,[ds]:n.MIRRORED_REPEAT},j={[Rt]:n.NEAREST,[Dl]:n.NEAREST_MIPMAP_NEAREST,[pa]:n.NEAREST_MIPMAP_LINEAR,[zt]:n.LINEAR,[Fd]:n.LINEAR_MIPMAP_NEAREST,[Hr]:n.LINEAR_MIPMAP_LINEAR},ne={[Zd]:n.NEVER,[rp]:n.ALWAYS,[Jd]:n.LESS,[ep]:n.LEQUAL,[Qd]:n.EQUAL,[ip]:n.GEQUAL,[tp]:n.GREATER,[np]:n.NOTEQUAL};function U(R,E,Q){if(Q?(n.texParameteri(R,n.TEXTURE_WRAP_S,W[E.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,W[E.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,W[E.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,j[E.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,j[E.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==en||E.wrapT!==en)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,w(E.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==Rt&&E.minFilter!==zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ne[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const he=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Rt||E.minFilter!==pa&&E.minFilter!==Hr||E.type===Wn&&e.has("OES_texture_float_linear")===!1||s===!1&&E.type===er&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(R,he.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function J(R,E){let Q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",z));const he=E.source;let ue=m.get(he);ue===void 0&&(ue={},m.set(he,ue));const O=ae(E);if(O!==R.__cacheKey){ue[O]===void 0&&(ue[O]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),ue[O].usedTimes++;const se=ue[R.__cacheKey];se!==void 0&&(ue[R.__cacheKey].usedTimes--,se.usedTimes===0&&L(E)),R.__cacheKey=O,R.__webglTexture=ue[O].texture}return Q}function ce(R,E,Q){let he=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=n.TEXTURE_3D);const ue=J(R,E),O=E.source;t.bindTexture(he,R.__webglTexture,n.TEXTURE0+Q);const se=i.get(O);if(O.version!==se.__version||ue===!0){t.activeTexture(n.TEXTURE0+Q),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const le=y(E)&&x(E.image)===!1;let K=v(E.image,le,!1,u);K=pt(E,K);const be=x(K)||s,Ae=o.convert(E.format,E.colorSpace);let Ee=o.convert(E.type),Me=T(E.internalFormat,Ae,Ee,E.colorSpace);U(he,E,be);let ye;const Le=E.mipmaps,We=s&&E.isVideoTexture!==!0,I=se.__version===void 0||ue===!0,me=M(E,K,be);if(E.isDepthTexture)Me=n.DEPTH_COMPONENT,s?E.type===Wn?Me=n.DEPTH_COMPONENT32F:E.type===Vn?Me=n.DEPTH_COMPONENT24:E.type===hi?Me=n.DEPTH24_STENCIL8:Me=n.DEPTH_COMPONENT16:E.type===Wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===fi&&Me===n.DEPTH_COMPONENT&&E.type!==Ws&&E.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Vn,Ee=o.convert(E.type)),E.format===tr&&Me===n.DEPTH_COMPONENT&&(Me=n.DEPTH_STENCIL,E.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=hi,Ee=o.convert(E.type))),I&&(We?t.texStorage2D(n.TEXTURE_2D,1,Me,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,Me,K.width,K.height,0,Ae,Ee,null));else if(E.isDataTexture)if(Le.length>0&&be){We&&I&&t.texStorage2D(n.TEXTURE_2D,me,Me,Le[0].width,Le[0].height);for(let Y=0,de=Le.length;Y<de;Y++)ye=Le[Y],We?t.texSubImage2D(n.TEXTURE_2D,Y,0,0,ye.width,ye.height,Ae,Ee,ye.data):t.texImage2D(n.TEXTURE_2D,Y,Me,ye.width,ye.height,0,Ae,Ee,ye.data);E.generateMipmaps=!1}else We?(I&&t.texStorage2D(n.TEXTURE_2D,me,Me,K.width,K.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,K.width,K.height,Ae,Ee,K.data)):t.texImage2D(n.TEXTURE_2D,0,Me,K.width,K.height,0,Ae,Ee,K.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){We&&I&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Me,Le[0].width,Le[0].height,K.depth);for(let Y=0,de=Le.length;Y<de;Y++)ye=Le[Y],E.format!==tn?Ae!==null?We?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,ye.width,ye.height,K.depth,Ae,ye.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Me,ye.width,ye.height,K.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,ye.width,ye.height,K.depth,Ae,Ee,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,Me,ye.width,ye.height,K.depth,0,Ae,Ee,ye.data)}else{We&&I&&t.texStorage2D(n.TEXTURE_2D,me,Me,Le[0].width,Le[0].height);for(let Y=0,de=Le.length;Y<de;Y++)ye=Le[Y],E.format!==tn?Ae!==null?We?t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,ye.width,ye.height,Ae,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,Me,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage2D(n.TEXTURE_2D,Y,0,0,ye.width,ye.height,Ae,Ee,ye.data):t.texImage2D(n.TEXTURE_2D,Y,Me,ye.width,ye.height,0,Ae,Ee,ye.data)}else if(E.isDataArrayTexture)We?(I&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Me,K.width,K.height,K.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Ae,Ee,K.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,K.width,K.height,K.depth,0,Ae,Ee,K.data);else if(E.isData3DTexture)We?(I&&t.texStorage3D(n.TEXTURE_3D,me,Me,K.width,K.height,K.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Ae,Ee,K.data)):t.texImage3D(n.TEXTURE_3D,0,Me,K.width,K.height,K.depth,0,Ae,Ee,K.data);else if(E.isFramebufferTexture){if(I)if(We)t.texStorage2D(n.TEXTURE_2D,me,Me,K.width,K.height);else{let Y=K.width,de=K.height;for(let ge=0;ge<me;ge++)t.texImage2D(n.TEXTURE_2D,ge,Me,Y,de,0,Ae,Ee,null),Y>>=1,de>>=1}}else if(Le.length>0&&be){We&&I&&t.texStorage2D(n.TEXTURE_2D,me,Me,Le[0].width,Le[0].height);for(let Y=0,de=Le.length;Y<de;Y++)ye=Le[Y],We?t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Ae,Ee,ye):t.texImage2D(n.TEXTURE_2D,Y,Me,Ae,Ee,ye);E.generateMipmaps=!1}else We?(I&&t.texStorage2D(n.TEXTURE_2D,me,Me,K.width,K.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Ee,K)):t.texImage2D(n.TEXTURE_2D,0,Me,Ae,Ee,K);S(E,be)&&A(he),se.__version=O.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Te(R,E,Q){if(E.image.length!==6)return;const he=J(R,E),ue=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+Q);const O=i.get(ue);if(ue.version!==O.__version||he===!0){t.activeTexture(n.TEXTURE0+Q),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const se=E.isCompressedTexture||E.image[0].isCompressedTexture,le=E.image[0]&&E.image[0].isDataTexture,K=[];for(let Y=0;Y<6;Y++)!se&&!le?K[Y]=v(E.image[Y],!1,!0,c):K[Y]=le?E.image[Y].image:E.image[Y],K[Y]=pt(E,K[Y]);const be=K[0],Ae=x(be)||s,Ee=o.convert(E.format,E.colorSpace),Me=o.convert(E.type),ye=T(E.internalFormat,Ee,Me,E.colorSpace),Le=s&&E.isVideoTexture!==!0,We=O.__version===void 0||he===!0;let I=M(E,be,Ae);U(n.TEXTURE_CUBE_MAP,E,Ae);let me;if(se){Le&&We&&t.texStorage2D(n.TEXTURE_CUBE_MAP,I,ye,be.width,be.height);for(let Y=0;Y<6;Y++){me=K[Y].mipmaps;for(let de=0;de<me.length;de++){const ge=me[de];E.format!==tn?Ee!==null?Le?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,0,0,ge.width,ge.height,Ee,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,ye,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,0,0,ge.width,ge.height,Ee,Me,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,ye,ge.width,ge.height,0,Ee,Me,ge.data)}}}else{me=E.mipmaps,Le&&We&&(me.length>0&&I++,t.texStorage2D(n.TEXTURE_CUBE_MAP,I,ye,K[0].width,K[0].height));for(let Y=0;Y<6;Y++)if(le){Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,K[Y].width,K[Y].height,Ee,Me,K[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ye,K[Y].width,K[Y].height,0,Ee,Me,K[Y].data);for(let de=0;de<me.length;de++){const Xe=me[de].image[Y].image;Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,0,0,Xe.width,Xe.height,Ee,Me,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,ye,Xe.width,Xe.height,0,Ee,Me,Xe.data)}}else{Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ee,Me,K[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ye,Ee,Me,K[Y]);for(let de=0;de<me.length;de++){const ge=me[de];Le?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,0,0,Ee,Me,ge.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,ye,Ee,Me,ge.image[Y])}}}S(E,Ae)&&A(n.TEXTURE_CUBE_MAP),O.__version=ue.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function _e(R,E,Q,he,ue){const O=o.convert(Q.format,Q.colorSpace),se=o.convert(Q.type),le=T(Q.internalFormat,O,se,Q.colorSpace);i.get(E).__hasExternalTextures||(ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,le,E.width,E.height,E.depth,0,O,se,null):t.texImage2D(ue,0,le,E.width,E.height,0,O,se,null)),t.bindFramebuffer(n.FRAMEBUFFER,R),qe(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,ue,i.get(Q).__webglTexture,0,Ie(E)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,he,ue,i.get(Q).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function B(R,E,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let he=n.DEPTH_COMPONENT16;if(Q||qe(E)){const ue=E.depthTexture;ue&&ue.isDepthTexture&&(ue.type===Wn?he=n.DEPTH_COMPONENT32F:ue.type===Vn&&(he=n.DEPTH_COMPONENT24));const O=Ie(E);qe(E)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,O,he,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,O,he,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,he,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const he=Ie(E);Q&&qe(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,n.DEPTH24_STENCIL8,E.width,E.height):qe(E)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const he=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ue=0;ue<he.length;ue++){const O=he[ue],se=o.convert(O.format,O.colorSpace),le=o.convert(O.type),K=T(O.internalFormat,se,le,O.colorSpace),be=Ie(E);Q&&qe(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,K,E.width,E.height):qe(E)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,K,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,K,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ze(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);const he=i.get(E.depthTexture).__webglTexture,ue=Ie(E);if(E.depthTexture.format===fi)qe(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0);else if(E.depthTexture.format===tr)qe(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function ve(R){const E=i.get(R),Q=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Ze(E.__webglFramebuffer,R)}else if(Q){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]=n.createRenderbuffer(),B(E.__webglDepthbuffer[he],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),B(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(R,E,Q){const he=i.get(R);E!==void 0&&_e(he.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),Q!==void 0&&ve(R)}function Se(R){const E=R.texture,Q=i.get(R),he=i.get(E);R.addEventListener("dispose",V),R.isWebGLMultipleRenderTargets!==!0&&(he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture()),he.__version=E.version,a.memory.textures++);const ue=R.isWebGLCubeRenderTarget===!0,O=R.isWebGLMultipleRenderTargets===!0,se=x(R)||s;if(ue){Q.__webglFramebuffer=[];for(let le=0;le<6;le++)Q.__webglFramebuffer[le]=n.createFramebuffer()}else{if(Q.__webglFramebuffer=n.createFramebuffer(),O)if(r.drawBuffers){const le=R.texture;for(let K=0,be=le.length;K<be;K++){const Ae=i.get(le[K]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&R.samples>0&&qe(R)===!1){const le=O?E:[E];Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let K=0;K<le.length;K++){const be=le[K];Q.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[K]);const Ae=o.convert(be.format,be.colorSpace),Ee=o.convert(be.type),Me=T(be.internalFormat,Ae,Ee,be.colorSpace,R.isXRRenderTarget===!0),ye=Ie(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,Me,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,Q.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),B(Q.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),U(n.TEXTURE_CUBE_MAP,E,se);for(let le=0;le<6;le++)_e(Q.__webglFramebuffer[le],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le);S(E,se)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(O){const le=R.texture;for(let K=0,be=le.length;K<be;K++){const Ae=le[K],Ee=i.get(Ae);t.bindTexture(n.TEXTURE_2D,Ee.__webglTexture),U(n.TEXTURE_2D,Ae,se),_e(Q.__webglFramebuffer,R,Ae,n.COLOR_ATTACHMENT0+K,n.TEXTURE_2D),S(Ae,se)&&A(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(s?le=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,he.__webglTexture),U(le,E,se),_e(Q.__webglFramebuffer,R,E,n.COLOR_ATTACHMENT0,le),S(E,se)&&A(le),t.unbindTexture()}R.depthBuffer&&ve(R)}function Ge(R){const E=x(R)||s,Q=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let he=0,ue=Q.length;he<ue;he++){const O=Q[he];if(S(O,E)){const se=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=i.get(O).__webglTexture;t.bindTexture(se,le),A(se),t.unbindTexture()}}}function Ue(R){if(s&&R.samples>0&&qe(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],Q=R.width,he=R.height;let ue=n.COLOR_BUFFER_BIT;const O=[],se=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(R),K=R.isWebGLMultipleRenderTargets===!0;if(K)for(let be=0;be<E.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let be=0;be<E.length;be++){O.push(n.COLOR_ATTACHMENT0+be),R.depthBuffer&&O.push(se);const Ae=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Ae===!1&&(R.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),K&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[be]),Ae===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[se]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[se])),K){const Ee=i.get(E[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,Q,he,0,0,Q,he,ue,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let be=0;be<E.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,le.__webglColorRenderbuffer[be]);const Ae=i.get(E[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,Ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ie(R){return Math.min(h,R.samples)}function qe(R){const E=i.get(R);return s&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ut(R){const E=a.render.frame;g.get(R)!==E&&(g.set(R,E),R.update())}function pt(R,E){const Q=R.colorSpace,he=R.format,ue=R.type;return R.isCompressedTexture===!0||R.format===ms||Q!==pn&&Q!==pi&&(Q===Fe?s===!1?e.has("EXT_sRGB")===!0&&he===tn?(R.format=ms,R.minFilter=zt,R.generateMipmaps=!1):E=Sh.sRGBToLinear(E):(he!==tn||ue!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),E}this.allocateTextureUnit=Z,this.resetTextureUnits=q,this.setTexture2D=H,this.setTexture2DArray=re,this.setTexture3D=N,this.setTextureCube=te,this.rebindTextures=Re,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=qe}function f0(n,e,t){const i=t.isWebGL2;function r(o,a=pi){let s;if(o===Xn)return n.UNSIGNED_BYTE;if(o===mh)return n.UNSIGNED_SHORT_4_4_4_4;if(o===gh)return n.UNSIGNED_SHORT_5_5_5_1;if(o===kd)return n.BYTE;if(o===Bd)return n.SHORT;if(o===Ws)return n.UNSIGNED_SHORT;if(o===ph)return n.INT;if(o===Vn)return n.UNSIGNED_INT;if(o===Wn)return n.FLOAT;if(o===er)return i?n.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(o===zd)return n.ALPHA;if(o===tn)return n.RGBA;if(o===Hd)return n.LUMINANCE;if(o===Gd)return n.LUMINANCE_ALPHA;if(o===fi)return n.DEPTH_COMPONENT;if(o===tr)return n.DEPTH_STENCIL;if(o===ms)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(o===Vd)return n.RED;if(o===_h)return n.RED_INTEGER;if(o===Wd)return n.RG;if(o===vh)return n.RG_INTEGER;if(o===yh)return n.RGBA_INTEGER;if(o===ma||o===ga||o===_a||o===va)if(a===Fe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(o===ma)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(o===ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===ga)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===_a)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Il||o===Ul||o===Nl||o===Fl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(o===Il)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Nl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Fl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===jd)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===kl||o===Bl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(o===kl)return a===Fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(o===Bl)return a===Fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===zl||o===Hl||o===Gl||o===Vl||o===Wl||o===jl||o===Xl||o===$l||o===ql||o===Yl||o===Kl||o===Zl||o===Jl||o===Ql)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(o===zl)return a===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Hl)return a===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Gl)return a===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Vl)return a===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Wl)return a===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===jl)return a===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Xl)return a===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===$l)return a===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===ql)return a===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Yl)return a===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Kl)return a===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Zl)return a===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Jl)return a===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Ql)return a===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===ya)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(o===ya)return a===Fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===Xd||o===ec||o===tc||o===nc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(o===ya)return s.COMPRESSED_RED_RGTC1_EXT;if(o===ec)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===tc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===nc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===hi?i?n.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:r}}class d0 extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Xi=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const p0={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(p0)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class m0 extends Ot{constructor(e,t,i,r,o,a,s,l,c,u){if(u=u!==void 0?u:fi,u!==fi&&u!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===fi&&(i=Vn),i===void 0&&u===tr&&(i=hi),super(null,r,o,a,s,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class g0 extends on{constructor(e,t){super();const i=this;let r=null,o=1,a=null,s="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=t.getContextAttributes();let m=null,d=null;const b=[],v=[];let x=null;const y=new Wt;y.layers.enable(1),y.viewport=new _t;const S=new Wt;S.layers.enable(2),S.viewport=new _t;const A=[y,S],T=new d0;T.layers.enable(1),T.layers.enable(2);let M=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(N){x=N},this.getController=function(N){let te=b[N];return te===void 0&&(te=new Ha,b[N]=te),te.getTargetRaySpace()},this.getControllerGrip=function(N){let te=b[N];return te===void 0&&(te=new Ha,b[N]=te),te.getGripSpace()},this.getHand=function(N){let te=b[N];return te===void 0&&(te=new Ha,b[N]=te),te.getHandSpace()};function z(N){const te=v.indexOf(N.inputSource);if(te===-1)return;const W=b[te];W!==void 0&&(W.update(N.inputSource,N.frame,c||a),W.dispatchEvent({type:N.type,data:N.inputSource}))}function V(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",F);for(let N=0;N<b.length;N++){const te=v[N];te!==null&&(v[N]=null,b[N].disconnect(te))}M=null,w=null,e.setRenderTarget(m),p=null,f=null,h=null,r=null,d=null,re.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",V),r.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:p}),d=new qn(p.framebufferWidth,p.framebufferHeight,{format:tn,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let te=null,W=null,j=null;_.depth&&(j=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=_.stencil?tr:fi,W=_.stencil?hi:Vn);const ne={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:o};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(ne),r.updateRenderState({layers:[f]}),d=new qn(f.textureWidth,f.textureHeight,{format:tn,type:Xn,depthTexture:new m0(f.textureWidth,f.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const U=e.properties.get(d);U.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(s),re.setContext(r),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(N){for(let te=0;te<N.removed.length;te++){const W=N.removed[te],j=v.indexOf(W);j>=0&&(v[j]=null,b[j].disconnect(W))}for(let te=0;te<N.added.length;te++){const W=N.added[te];let j=v.indexOf(W);if(j===-1){for(let U=0;U<b.length;U++)if(U>=v.length){v.push(W),j=U;break}else if(v[U]===null){v[U]=W,j=U;break}if(j===-1)break}const ne=b[j];ne&&ne.connect(W)}}const L=new D,P=new D;function k(N,te,W){L.setFromMatrixPosition(te.matrixWorld),P.setFromMatrixPosition(W.matrixWorld);const j=L.distanceTo(P),ne=te.projectionMatrix.elements,U=W.projectionMatrix.elements,J=ne[14]/(ne[10]-1),ce=ne[14]/(ne[10]+1),Te=(ne[9]+1)/ne[5],_e=(ne[9]-1)/ne[5],B=(ne[8]-1)/ne[0],Ze=(U[8]+1)/U[0],ve=J*B,Re=J*Ze,Se=j/(-B+Ze),Ge=Se*-B;te.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ge),N.translateZ(Se),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Ue=J+Se,Ie=ce+Se,qe=ve-Ge,ut=Re+(j-Ge),pt=Te*ce/Ie*Ue,R=_e*ce/Ie*Ue;N.projectionMatrix.makePerspective(qe,ut,pt,R,Ue,Ie),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function q(N,te){te===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(te.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCameraXR=function(N){if(r===null)return N;x&&(N=x),T.near=S.near=y.near=N.near,T.far=S.far=y.far=N.far,(M!==T.near||w!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),M=T.near,w=T.far);const te=N.parent,W=T.cameras;q(T,te);for(let j=0;j<W.length;j++)q(W[j],te);return W.length===2?k(T,y,S):T.projectionMatrix.copy(y.projectionMatrix),x&&Z(T,te),T};function Z(N,te){const W=x;te===null?W.matrix.copy(N.matrixWorld):(W.matrix.copy(te.matrixWorld),W.matrix.invert(),W.matrix.multiply(N.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0);const j=W.children;for(let ne=0,U=j.length;ne<U;ne++)j[ne].updateMatrixWorld(!0);W.projectionMatrix.copy(N.projectionMatrix),W.projectionMatrixInverse.copy(N.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Gr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)};let ae=null;function H(N,te){if(u=te.getViewerPose(c||a),g=te,u!==null){const W=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let j=!1;W.length!==T.cameras.length&&(T.cameras.length=0,j=!0);for(let ne=0;ne<W.length;ne++){const U=W[ne];let J=null;if(p!==null)J=p.getViewport(U);else{const Te=h.getViewSubImage(f,U);J=Te.viewport,ne===0&&(e.setRenderTargetTextures(d,Te.colorTexture,f.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(d))}let ce=A[ne];ce===void 0&&(ce=new Wt,ce.layers.enable(ne),ce.viewport=new _t,A[ne]=ce),ce.matrix.fromArray(U.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(U.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(J.x,J.y,J.width,J.height),ne===0&&(T.matrix.copy(ce.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),j===!0&&T.cameras.push(ce)}}for(let W=0;W<b.length;W++){const j=v[W],ne=b[W];j!==null&&ne!==void 0&&ne.update(j,te,c||a)}ae&&ae(N,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const re=new Dh;re.setAnimationLoop(H),this.setAnimationLoop=function(N){ae=N},this.dispose=function(){}}}function _0(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Rh(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,b,v,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(m,d):d.isMeshToonMaterial?(o(m,d),h(m,d)):d.isMeshPhongMaterial?(o(m,d),u(m,d)):d.isMeshStandardMaterial?(o(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(o(m,d),g(m,d)):d.isMeshDepthMaterial?o(m,d):d.isMeshDistanceMaterial?(o(m,d),_(m,d)):d.isMeshNormalMaterial?o(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&s(m,d)):d.isPointsMaterial?l(m,d,b,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Lt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Lt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=e.get(d).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function s(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Lt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const b=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function v0(n,e,t,i){let r={},o={},a=[];const s=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,v){const x=v.program;i.uniformBlockBinding(b,x)}function c(b,v){let x=r[b.id];x===void 0&&(g(b),x=u(b),r[b.id]=x,b.addEventListener("dispose",m));const y=v.program;i.updateUBOMapping(b,y);const S=e.render.frame;o[b.id]!==S&&(f(b),o[b.id]=S)}function u(b){const v=h();b.__bindingPointIndex=v;const x=n.createBuffer(),y=b.__size,S=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,y,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,x),x}function h(){for(let b=0;b<s;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const v=r[b.id],x=b.uniforms,y=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let S=0,A=x.length;S<A;S++){const T=x[S];if(p(T,S,y)===!0){const M=T.__offset,w=Array.isArray(T.value)?T.value:[T.value];let z=0;for(let V=0;V<w.length;V++){const F=w[V],L=_(F);typeof F=="number"?(T.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,M+z,T.__data)):F.isMatrix3?(T.__data[0]=F.elements[0],T.__data[1]=F.elements[1],T.__data[2]=F.elements[2],T.__data[3]=F.elements[0],T.__data[4]=F.elements[3],T.__data[5]=F.elements[4],T.__data[6]=F.elements[5],T.__data[7]=F.elements[0],T.__data[8]=F.elements[6],T.__data[9]=F.elements[7],T.__data[10]=F.elements[8],T.__data[11]=F.elements[0]):(F.toArray(T.__data,z),z+=L.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,T.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,v,x){const y=b.value;if(x[v]===void 0){if(typeof y=="number")x[v]=y;else{const S=Array.isArray(y)?y:[y],A=[];for(let T=0;T<S.length;T++)A.push(S[T].clone());x[v]=A}return!0}else if(typeof y=="number"){if(x[v]!==y)return x[v]=y,!0}else{const S=Array.isArray(x[v])?x[v]:[x[v]],A=Array.isArray(y)?y:[y];for(let T=0;T<S.length;T++){const M=S[T];if(M.equals(A[T])===!1)return M.copy(A[T]),!0}}return!1}function g(b){const v=b.uniforms;let x=0;const y=16;let S=0;for(let A=0,T=v.length;A<T;A++){const M=v[A],w={boundary:0,storage:0},z=Array.isArray(M.value)?M.value:[M.value];for(let V=0,F=z.length;V<F;V++){const L=z[V],P=_(L);w.boundary+=P.boundary,w.storage+=P.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,A>0){S=x%y;const V=y-S;S!==0&&V-w.boundary<0&&(x+=y-S,M.__offset=x)}x+=w.storage}return S=x%y,S>0&&(x+=y-S),b.__size=x,b.__cache={},this}function _(b){const v={boundary:0,storage:0};return typeof b=="number"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){const v=b.target;v.removeEventListener("dispose",m);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function d(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},o={}}return{bind:l,update:c,dispose:d}}function y0(){const n=Vr("canvas");return n.style.display="block",n}class kh{constructor(e={}){const{canvas:t=y0(),context:i=null,depth:r=!0,stencil:o=!0,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Fe,this.useLegacyLights=!0,this.toneMapping=Ln,this.toneMappingExposure=1;const v=this;let x=!1,y=0,S=0,A=null,T=-1,M=null;const w=new _t,z=new _t;let V=null;const F=new He(0);let L=0,P=t.width,k=t.height,q=1,Z=null,ae=null;const H=new _t(0,0,P,k),re=new _t(0,0,P,k);let N=!1;const te=new qs;let W=!1,j=!1,ne=null;const U=new nt,J=new fe,ce=new D,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return A===null?q:1}let B=i;function Ze(C,X){for(let ee=0;ee<C.length;ee++){const G=C[ee],ie=t.getContext(G,X);if(ie!==null)return ie}return null}try{const C={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gs}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",de,!1),B===null){const X=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&X.shift(),B=Ze(X,C),B===null)throw Ze(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ve,Re,Se,Ge,Ue,Ie,qe,ut,pt,R,E,Q,he,ue,O,se,le,K,be,Ae,Ee,Me,ye,Le;function We(){ve=new P_(B),Re=new E_(B,ve,e),ve.init(Re),Me=new f0(B,ve,Re),Se=new u0(B,ve,Re),Ge=new D_(B),Ue=new Kv,Ie=new h0(B,ve,Se,Ue,Re,Me,Ge),qe=new T_(v),ut=new R_(v),pt=new jp(B,Re),ye=new M_(B,ve,pt,Re),R=new L_(B,pt,Ge,ye),E=new F_(B,R,pt,Ge),be=new N_(B,Re,Ie),se=new w_(Ue),Q=new Yv(v,qe,ut,ve,Re,ye,se),he=new _0(v,Ue),ue=new Jv,O=new r0(ve,Re),K=new b_(v,qe,ut,Se,E,f,l),le=new c0(v,E,Re),Le=new v0(B,Ge,Re,Se),Ae=new S_(B,ve,Ge,Re),Ee=new O_(B,ve,Ge,Re),Ge.programs=Q.programs,v.capabilities=Re,v.extensions=ve,v.properties=Ue,v.renderLists=ue,v.shadowMap=le,v.state=Se,v.info=Ge}We();const I=new g0(v,B);this.xr=I,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=ve.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ve.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(P,k,!1))},this.getSize=function(C){return C.set(P,k)},this.setSize=function(C,X,ee=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,k=X,t.width=Math.floor(C*q),t.height=Math.floor(X*q),ee===!0&&(t.style.width=C+"px",t.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(P*q,k*q).floor()},this.setDrawingBufferSize=function(C,X,ee){P=C,k=X,q=ee,t.width=Math.floor(C*ee),t.height=Math.floor(X*ee),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(H)},this.setViewport=function(C,X,ee,G){C.isVector4?H.set(C.x,C.y,C.z,C.w):H.set(C,X,ee,G),Se.viewport(w.copy(H).multiplyScalar(q).floor())},this.getScissor=function(C){return C.copy(re)},this.setScissor=function(C,X,ee,G){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,X,ee,G),Se.scissor(z.copy(re).multiplyScalar(q).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(C){Se.setScissorTest(N=C)},this.setOpaqueSort=function(C){Z=C},this.setTransparentSort=function(C){ae=C},this.getClearColor=function(C){return C.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(C=!0,X=!0,ee=!0){let G=0;if(C){let ie=!1;if(A!==null){const xe=A.texture.format;ie=xe===yh||xe===vh||xe===_h}if(ie){const xe=A.texture.type,Ce=xe===Xn||xe===Vn||xe===Ws||xe===hi||xe===mh||xe===gh,Oe=K.getClearColor(),De=K.getClearAlpha(),Ve=Oe.r,Ne=Oe.g,ke=Oe.b,Qe=Ue.get(A).__webglFramebuffer;Ce?(p[0]=Ve,p[1]=Ne,p[2]=ke,p[3]=De,B.clearBufferuiv(B.COLOR,Qe,p)):(g[0]=Ve,g[1]=Ne,g[2]=ke,g[3]=De,B.clearBufferiv(B.COLOR,Qe,g))}else G|=B.COLOR_BUFFER_BIT}X&&(G|=B.DEPTH_BUFFER_BIT),ee&&(G|=B.STENCIL_BUFFER_BIT),B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",de,!1),ue.dispose(),O.dispose(),Ue.dispose(),qe.dispose(),ut.dispose(),E.dispose(),ye.dispose(),Le.dispose(),Q.dispose(),I.dispose(),I.removeEventListener("sessionstart",rt),I.removeEventListener("sessionend",ln),ne&&(ne.dispose(),ne=null),wt.stop()};function me(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const C=Ge.autoReset,X=le.enabled,ee=le.autoUpdate,G=le.needsUpdate,ie=le.type;We(),Ge.autoReset=C,le.enabled=X,le.autoUpdate=ee,le.needsUpdate=G,le.type=ie}function de(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ge(C){const X=C.target;X.removeEventListener("dispose",ge),Xe(X)}function Xe(C){it(C),Ue.remove(C)}function it(C){const X=Ue.get(C).programs;X!==void 0&&(X.forEach(function(ee){Q.releaseProgram(ee)}),C.isShaderMaterial&&Q.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,ee,G,ie,xe){X===null&&(X=Te);const Ce=ie.isMesh&&ie.matrixWorld.determinant()<0,Oe=id(C,X,ee,G,ie);Se.setMaterial(G,Ce);let De=ee.index,Ve=1;G.wireframe===!0&&(De=R.getWireframeAttribute(ee),Ve=2);const Ne=ee.drawRange,ke=ee.attributes.position;let Qe=Ne.start*Ve,at=(Ne.start+Ne.count)*Ve;xe!==null&&(Qe=Math.max(Qe,xe.start*Ve),at=Math.min(at,(xe.start+xe.count)*Ve)),De!==null?(Qe=Math.max(Qe,0),at=Math.min(at,De.count)):ke!=null&&(Qe=Math.max(Qe,0),at=Math.min(at,ke.count));const $t=at-Qe;if($t<0||$t===1/0)return;ye.setup(ie,G,Oe,ee,De);let _n,lt=Ae;if(De!==null&&(_n=pt.get(De),lt=Ee,lt.setIndex(_n)),ie.isMesh)G.wireframe===!0?(Se.setLineWidth(G.wireframeLinewidth*_e()),lt.setMode(B.LINES)):lt.setMode(B.TRIANGLES);else if(ie.isLine){let je=G.linewidth;je===void 0&&(je=1),Se.setLineWidth(je*_e()),ie.isLineSegments?lt.setMode(B.LINES):ie.isLineLoop?lt.setMode(B.LINE_LOOP):lt.setMode(B.LINE_STRIP)}else ie.isPoints?lt.setMode(B.POINTS):ie.isSprite&&lt.setMode(B.TRIANGLES);if(ie.isInstancedMesh)lt.renderInstances(Qe,$t,ie.count);else if(ee.isInstancedBufferGeometry){const je=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,ua=Math.min(ee.instanceCount,je);lt.renderInstances(Qe,$t,ua)}else lt.render(Qe,$t)},this.compile=function(C,X){function ee(G,ie,xe){G.transparent===!0&&G.side===jt&&G.forceSinglePass===!1?(G.side=Lt,G.needsUpdate=!0,Zr(G,ie,xe),G.side=$n,G.needsUpdate=!0,Zr(G,ie,xe),G.side=jt):Zr(G,ie,xe)}m=O.get(C),m.init(),b.push(m),C.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(v.useLegacyLights),C.traverse(function(G){const ie=G.material;if(ie)if(Array.isArray(ie))for(let xe=0;xe<ie.length;xe++){const Ce=ie[xe];ee(Ce,C,G)}else ee(ie,C,G)}),b.pop(),m=null};let st=null;function ei(C){st&&st(C)}function rt(){wt.stop()}function ln(){wt.start()}const wt=new Dh;wt.setAnimationLoop(ei),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(C){st=C,I.setAnimationLoop(C),C===null?wt.stop():wt.start()},I.addEventListener("sessionstart",rt),I.addEventListener("sessionend",ln),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(X=I.updateCameraXR(X)),C.isScene===!0&&C.onBeforeRender(v,C,X,A),m=O.get(C,b.length),m.init(),b.push(m),U.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),te.setFromProjectionMatrix(U),j=this.localClippingEnabled,W=se.init(this.clippingPlanes,j),_=ue.get(C,d.length),_.init(),d.push(_),bl(C,X,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Z,ae),W===!0&&se.beginShadows();const ee=m.state.shadowsArray;if(le.render(ee,C,X),W===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,K.render(_,C),m.setupLights(v.useLegacyLights),X.isArrayCamera){const G=X.cameras;for(let ie=0,xe=G.length;ie<xe;ie++){const Ce=G[ie];Ml(_,C,Ce,Ce.viewport)}}else Ml(_,C,X);A!==null&&(Ie.updateMultisampleRenderTarget(A),Ie.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(v,C,X),ye.resetDefaultState(),T=-1,M=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function bl(C,X,ee,G){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)ee=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||te.intersectsSprite(C)){G&&ce.setFromMatrixPosition(C.matrixWorld).applyMatrix4(U);const Ce=E.update(C),Oe=C.material;Oe.visible&&_.push(C,Ce,Oe,ee,ce.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||te.intersectsObject(C))){C.isSkinnedMesh&&C.skeleton.frame!==Ge.render.frame&&(C.skeleton.update(),C.skeleton.frame=Ge.render.frame);const Ce=E.update(C),Oe=C.material;if(G&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ce.copy(C.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ce.copy(Ce.boundingSphere.center)),ce.applyMatrix4(C.matrixWorld).applyMatrix4(U)),Array.isArray(Oe)){const De=Ce.groups;for(let Ve=0,Ne=De.length;Ve<Ne;Ve++){const ke=De[Ve],Qe=Oe[ke.materialIndex];Qe&&Qe.visible&&_.push(C,Ce,Qe,ee,ce.z,ke)}}else Oe.visible&&_.push(C,Ce,Oe,ee,ce.z,null)}}const xe=C.children;for(let Ce=0,Oe=xe.length;Ce<Oe;Ce++)bl(xe[Ce],X,ee,G)}function Ml(C,X,ee,G){const ie=C.opaque,xe=C.transmissive,Ce=C.transparent;m.setupLightsView(ee),W===!0&&se.setGlobalState(v.clippingPlanes,ee),xe.length>0&&nd(ie,xe,X,ee),G&&Se.viewport(w.copy(G)),ie.length>0&&Kr(ie,X,ee),xe.length>0&&Kr(xe,X,ee),Ce.length>0&&Kr(Ce,X,ee),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function nd(C,X,ee,G){const ie=Re.isWebGL2;ne===null&&(ne=new qn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?er:Xn,minFilter:Hr,samples:ie&&s===!0?4:0})),v.getDrawingBufferSize(J),ie?ne.setSize(J.x,J.y):ne.setSize(Bo(J.x),Bo(J.y));const xe=v.getRenderTarget();v.setRenderTarget(ne),v.getClearColor(F),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Ce=v.toneMapping;v.toneMapping=Ln,Kr(C,ee,G),Ie.updateMultisampleRenderTarget(ne),Ie.updateRenderTargetMipmap(ne);let Oe=!1;for(let De=0,Ve=X.length;De<Ve;De++){const Ne=X[De],ke=Ne.object,Qe=Ne.geometry,at=Ne.material,$t=Ne.group;if(at.side===jt&&ke.layers.test(G.layers)){const _n=at.side;at.side=Lt,at.needsUpdate=!0,Sl(ke,ee,G,Qe,at,$t),at.side=_n,at.needsUpdate=!0,Oe=!0}}Oe===!0&&(Ie.updateMultisampleRenderTarget(ne),Ie.updateRenderTargetMipmap(ne)),v.setRenderTarget(xe),v.setClearColor(F,L),v.toneMapping=Ce}function Kr(C,X,ee){const G=X.isScene===!0?X.overrideMaterial:null;for(let ie=0,xe=C.length;ie<xe;ie++){const Ce=C[ie],Oe=Ce.object,De=Ce.geometry,Ve=G===null?Ce.material:G,Ne=Ce.group;Oe.layers.test(ee.layers)&&Sl(Oe,X,ee,De,Ve,Ne)}}function Sl(C,X,ee,G,ie,xe){C.onBeforeRender(v,X,ee,G,ie,xe),C.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(v,X,ee,G,C,xe),ie.transparent===!0&&ie.side===jt&&ie.forceSinglePass===!1?(ie.side=Lt,ie.needsUpdate=!0,v.renderBufferDirect(ee,X,G,ie,C,xe),ie.side=$n,ie.needsUpdate=!0,v.renderBufferDirect(ee,X,G,ie,C,xe),ie.side=jt):v.renderBufferDirect(ee,X,G,ie,C,xe),C.onAfterRender(v,X,ee,G,ie,xe)}function Zr(C,X,ee){X.isScene!==!0&&(X=Te);const G=Ue.get(C),ie=m.state.lights,xe=m.state.shadowsArray,Ce=ie.state.version,Oe=Q.getParameters(C,ie.state,xe,X,ee),De=Q.getProgramCacheKey(Oe);let Ve=G.programs;G.environment=C.isMeshStandardMaterial?X.environment:null,G.fog=X.fog,G.envMap=(C.isMeshStandardMaterial?ut:qe).get(C.envMap||G.environment),Ve===void 0&&(C.addEventListener("dispose",ge),Ve=new Map,G.programs=Ve);let Ne=Ve.get(De);if(Ne!==void 0){if(G.currentProgram===Ne&&G.lightsStateVersion===Ce)return El(C,Oe),Ne}else Oe.uniforms=Q.getUniforms(C),C.onBuild(ee,Oe,v),C.onBeforeCompile(Oe,v),Ne=Q.acquireProgram(Oe,De),Ve.set(De,Ne),G.uniforms=Oe.uniforms;const ke=G.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ke.clippingPlanes=se.uniform),El(C,Oe),G.needsLights=od(C),G.lightsStateVersion=Ce,G.needsLights&&(ke.ambientLightColor.value=ie.state.ambient,ke.lightProbe.value=ie.state.probe,ke.directionalLights.value=ie.state.directional,ke.directionalLightShadows.value=ie.state.directionalShadow,ke.spotLights.value=ie.state.spot,ke.spotLightShadows.value=ie.state.spotShadow,ke.rectAreaLights.value=ie.state.rectArea,ke.ltc_1.value=ie.state.rectAreaLTC1,ke.ltc_2.value=ie.state.rectAreaLTC2,ke.pointLights.value=ie.state.point,ke.pointLightShadows.value=ie.state.pointShadow,ke.hemisphereLights.value=ie.state.hemi,ke.directionalShadowMap.value=ie.state.directionalShadowMap,ke.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,ke.spotShadowMap.value=ie.state.spotShadowMap,ke.spotLightMatrix.value=ie.state.spotLightMatrix,ke.spotLightMap.value=ie.state.spotLightMap,ke.pointShadowMap.value=ie.state.pointShadowMap,ke.pointShadowMatrix.value=ie.state.pointShadowMatrix);const Qe=Ne.getUniforms(),at=Do.seqWithValue(Qe.seq,ke);return G.currentProgram=Ne,G.uniformsList=at,Ne}function El(C,X){const ee=Ue.get(C);ee.outputColorSpace=X.outputColorSpace,ee.instancing=X.instancing,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function id(C,X,ee,G,ie){X.isScene!==!0&&(X=Te),Ie.resetTextureUnits();const xe=X.fog,Ce=G.isMeshStandardMaterial?X.environment:null,Oe=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:pn,De=(G.isMeshStandardMaterial?ut:qe).get(G.envMap||Ce),Ve=G.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ne=!!ee.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ke=!!ee.morphAttributes.position,Qe=!!ee.morphAttributes.normal,at=!!ee.morphAttributes.color,$t=G.toneMapped?v.toneMapping:Ln,_n=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,lt=_n!==void 0?_n.length:0,je=Ue.get(G),ua=m.state.lights;if(W===!0&&(j===!0||C!==M)){const Nt=C===M&&G.id===T;se.setState(G,C,Nt)}let mt=!1;G.version===je.__version?(je.needsLights&&je.lightsStateVersion!==ua.state.version||je.outputColorSpace!==Oe||ie.isInstancedMesh&&je.instancing===!1||!ie.isInstancedMesh&&je.instancing===!0||ie.isSkinnedMesh&&je.skinning===!1||!ie.isSkinnedMesh&&je.skinning===!0||je.envMap!==De||G.fog===!0&&je.fog!==xe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==se.numPlanes||je.numIntersection!==se.numIntersection)||je.vertexAlphas!==Ve||je.vertexTangents!==Ne||je.morphTargets!==ke||je.morphNormals!==Qe||je.morphColors!==at||je.toneMapping!==$t||Re.isWebGL2===!0&&je.morphTargetsCount!==lt)&&(mt=!0):(mt=!0,je.__version=G.version);let ti=je.currentProgram;mt===!0&&(ti=Zr(G,X,ie));let wl=!1,lr=!1,ha=!1;const Tt=ti.getUniforms(),ni=je.uniforms;if(Se.useProgram(ti.program)&&(wl=!0,lr=!0,ha=!0),G.id!==T&&(T=G.id,lr=!0),wl||M!==C){if(Tt.setValue(B,"projectionMatrix",C.projectionMatrix),Re.logarithmicDepthBuffer&&Tt.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),M!==C&&(M=C,lr=!0,ha=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Nt=Tt.map.cameraPosition;Nt!==void 0&&Nt.setValue(B,ce.setFromMatrixPosition(C.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Tt.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||ie.isSkinnedMesh)&&Tt.setValue(B,"viewMatrix",C.matrixWorldInverse)}if(ie.isSkinnedMesh){Tt.setOptional(B,ie,"bindMatrix"),Tt.setOptional(B,ie,"bindMatrixInverse");const Nt=ie.skeleton;Nt&&(Re.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),Tt.setValue(B,"boneTexture",Nt.boneTexture,Ie),Tt.setValue(B,"boneTextureSize",Nt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fa=ee.morphAttributes;if((fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0&&Re.isWebGL2===!0)&&be.update(ie,ee,ti),(lr||je.receiveShadow!==ie.receiveShadow)&&(je.receiveShadow=ie.receiveShadow,Tt.setValue(B,"receiveShadow",ie.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ni.envMap.value=De,ni.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),lr&&(Tt.setValue(B,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&rd(ni,ha),xe&&G.fog===!0&&he.refreshFogUniforms(ni,xe),he.refreshMaterialUniforms(ni,G,q,k,ne),Do.upload(B,je.uniformsList,ni,Ie)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Do.upload(B,je.uniformsList,ni,Ie),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Tt.setValue(B,"center",ie.center),Tt.setValue(B,"modelViewMatrix",ie.modelViewMatrix),Tt.setValue(B,"normalMatrix",ie.normalMatrix),Tt.setValue(B,"modelMatrix",ie.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Nt=G.uniformsGroups;for(let da=0,ad=Nt.length;da<ad;da++)if(Re.isWebGL2){const Tl=Nt[da];Le.update(Tl,ti),Le.bind(Tl,ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ti}function rd(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function od(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,X,ee){Ue.get(C.texture).__webglTexture=X,Ue.get(C.depthTexture).__webglTexture=ee;const G=Ue.get(C);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=ee===void 0,G.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,X){const ee=Ue.get(C);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,ee=0){A=C,y=X,S=ee;let G=!0,ie=null,xe=!1,Ce=!1;if(C){const De=Ue.get(C);De.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(B.FRAMEBUFFER,null),G=!1):De.__webglFramebuffer===void 0?Ie.setupRenderTarget(C):De.__hasExternalTextures&&Ie.rebindTextures(C,Ue.get(C.texture).__webglTexture,Ue.get(C.depthTexture).__webglTexture);const Ve=C.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ce=!0);const Ne=Ue.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ie=Ne[X],xe=!0):Re.isWebGL2&&C.samples>0&&Ie.useMultisampledRTT(C)===!1?ie=Ue.get(C).__webglMultisampledFramebuffer:ie=Ne,w.copy(C.viewport),z.copy(C.scissor),V=C.scissorTest}else w.copy(H).multiplyScalar(q).floor(),z.copy(re).multiplyScalar(q).floor(),V=N;if(Se.bindFramebuffer(B.FRAMEBUFFER,ie)&&Re.drawBuffers&&G&&Se.drawBuffers(C,ie),Se.viewport(w),Se.scissor(z),Se.setScissorTest(V),xe){const De=Ue.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,De.__webglTexture,ee)}else if(Ce){const De=Ue.get(C.texture),Ve=X||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,De.__webglTexture,ee||0,Ve)}T=-1},this.readRenderTargetPixels=function(C,X,ee,G,ie,xe,Ce){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(Oe=Oe[Ce]),Oe){Se.bindFramebuffer(B.FRAMEBUFFER,Oe);try{const De=C.texture,Ve=De.format,Ne=De.type;if(Ve!==tn&&Me.convert(Ve)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ne===er&&(ve.has("EXT_color_buffer_half_float")||Re.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ne!==Xn&&Me.convert(Ne)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===Wn&&(Re.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-G&&ee>=0&&ee<=C.height-ie&&B.readPixels(X,ee,G,ie,Me.convert(Ve),Me.convert(Ne),xe)}finally{const De=A!==null?Ue.get(A).__webglFramebuffer:null;Se.bindFramebuffer(B.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(C,X,ee=0){const G=Math.pow(2,-ee),ie=Math.floor(X.image.width*G),xe=Math.floor(X.image.height*G);Ie.setTexture2D(X,0),B.copyTexSubImage2D(B.TEXTURE_2D,ee,0,0,C.x,C.y,ie,xe),Se.unbindTexture()},this.copyTextureToTexture=function(C,X,ee,G=0){const ie=X.image.width,xe=X.image.height,Ce=Me.convert(ee.format),Oe=Me.convert(ee.type);Ie.setTexture2D(ee,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ee.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,ee.unpackAlignment),X.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,G,C.x,C.y,ie,xe,Ce,Oe,X.image.data):X.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,G,C.x,C.y,X.mipmaps[0].width,X.mipmaps[0].height,Ce,X.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,G,C.x,C.y,Ce,Oe,X.image),G===0&&ee.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(C,X,ee,G,ie=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=C.max.x-C.min.x+1,Ce=C.max.y-C.min.y+1,Oe=C.max.z-C.min.z+1,De=Me.convert(G.format),Ve=Me.convert(G.type);let Ne;if(G.isData3DTexture)Ie.setTexture3D(G,0),Ne=B.TEXTURE_3D;else if(G.isDataArrayTexture)Ie.setTexture2DArray(G,0),Ne=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);const ke=B.getParameter(B.UNPACK_ROW_LENGTH),Qe=B.getParameter(B.UNPACK_IMAGE_HEIGHT),at=B.getParameter(B.UNPACK_SKIP_PIXELS),$t=B.getParameter(B.UNPACK_SKIP_ROWS),_n=B.getParameter(B.UNPACK_SKIP_IMAGES),lt=ee.isCompressedTexture?ee.mipmaps[0]:ee.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,lt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,lt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,C.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,C.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,C.min.z),ee.isDataTexture||ee.isData3DTexture?B.texSubImage3D(Ne,ie,X.x,X.y,X.z,xe,Ce,Oe,De,Ve,lt.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ne,ie,X.x,X.y,X.z,xe,Ce,Oe,De,lt.data)):B.texSubImage3D(Ne,ie,X.x,X.y,X.z,xe,Ce,Oe,De,Ve,lt),B.pixelStorei(B.UNPACK_ROW_LENGTH,ke),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qe),B.pixelStorei(B.UNPACK_SKIP_PIXELS,at),B.pixelStorei(B.UNPACK_SKIP_ROWS,$t),B.pixelStorei(B.UNPACK_SKIP_IMAGES,_n),ie===0&&G.generateMipmaps&&B.generateMipmap(Ne),Se.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Ie.setTextureCube(C,0):C.isData3DTexture?Ie.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ie.setTexture2DArray(C,0):Ie.setTexture2D(C,0),Se.unbindTexture()},this.resetState=function(){y=0,S=0,A=null,Se.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Fe?di:xh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===di?Fe:pn}}class x0 extends kh{}x0.prototype.isWebGL1Renderer=!0;class b0 extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class M0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ps,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const At=new D;class zo{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),r=Ye(r,this.array),o=Ye(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Bh extends Un{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ui;const dr=new D,Ni=new D,Fi=new D,ki=new fe,pr=new fe,zh=new nt,yo=new D,mr=new D,xo=new D,Vc=new fe,Ga=new fe,Wc=new fe;class S0 extends vt{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Ui===void 0){Ui=new Dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new M0(t,5);Ui.setIndex([0,1,2,0,2,3]),Ui.setAttribute("position",new zo(i,3,0,!1)),Ui.setAttribute("uv",new zo(i,2,3,!1))}this.geometry=Ui,this.material=e!==void 0?e:new Bh,this.center=new fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ni.setFromMatrixScale(this.matrixWorld),zh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ni.multiplyScalar(-Fi.z);const i=this.material.rotation;let r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));const a=this.center;bo(yo.set(-.5,-.5,0),Fi,a,Ni,r,o),bo(mr.set(.5,-.5,0),Fi,a,Ni,r,o),bo(xo.set(.5,.5,0),Fi,a,Ni,r,o),Vc.set(0,0),Ga.set(1,0),Wc.set(1,1);let s=e.ray.intersectTriangle(yo,mr,xo,!1,dr);if(s===null&&(bo(mr.set(-.5,.5,0),Fi,a,Ni,r,o),Ga.set(0,1),s=e.ray.intersectTriangle(yo,xo,mr,!1,dr),s===null))return;const l=e.ray.origin.distanceTo(dr);l<e.near||l>e.far||t.push({distance:l,point:dr.clone(),uv:Vt.getInterpolation(dr,yo,mr,xo,Vc,Ga,Wc,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function bo(n,e,t,i,r,o){ki.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(pr.x=o*ki.x-r*ki.y,pr.y=r*ki.x+o*ki.y):pr.copy(ki),n.copy(e),n.x+=pr.x,n.y+=pr.y,n.applyMatrix4(zh)}class Hh extends Un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jc=new D,Xc=new D,$c=new nt,Va=new Xs,Mo=new Qo;class E0 extends vt{constructor(e=new Dt,t=new Hh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)jc.fromBufferAttribute(t,r-1),Xc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=jc.distanceTo(Xc);e.setAttribute("lineDistance",new ot(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(r),Mo.radius+=o,e.ray.intersectsSphere(Mo)===!1)return;$c.copy(r).invert(),Va.copy(e.ray).applyMatrix4($c);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new D,u=new D,h=new D,f=new D,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const d=Math.max(0,a.start),b=Math.min(g.count,a.start+a.count);for(let v=d,x=b-1;v<x;v+=p){const y=g.getX(v),S=g.getX(v+1);if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,S),Va.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),b=Math.min(m.count,a.start+a.count);for(let v=d,x=b-1;v<x;v+=p){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),Va.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(f);S<e.near||S>e.far||t.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}class gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),o=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),o+=i.distanceTo(r),t.push(o),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const o=i.length;let a;t?a=t:a=e*i[o-1];let s=0,l=o-1,c;for(;s<=l;)if(r=Math.floor(s+(l-s)/2),c=i[r]-a,c<0)s=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(o-1);const u=i[r],f=i[r+1]-u,p=(a-u)/f;return(r+p)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const a=this.getPoint(r),s=this.getPoint(o),l=t||(a.isVector2?new fe:new D);return l.copy(s).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new D,r=[],o=[],a=[],s=new D,l=new nt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new D)}o[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),o[0].crossVectors(r[0],s),a[0].crossVectors(r[0],o[0]);for(let p=1;p<=e;p++){if(o[p]=o[p-1].clone(),a[p]=a[p-1].clone(),s.crossVectors(r[p-1],r[p]),s.length()>Number.EPSILON){s.normalize();const g=Math.acos(ht(r[p-1].dot(r[p]),-1,1));o[p].applyMatrix4(l.makeRotationAxis(s,g))}a[p].crossVectors(r[p],o[p])}if(t===!0){let p=Math.acos(ht(o[0].dot(o[e]),-1,1));p/=e,r[0].dot(s.crossVectors(o[0],o[e]))>0&&(p=-p);for(let g=1;g<=e;g++)o[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],o[g])}return{tangents:r,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Gh extends gn{constructor(e=0,t=0,i=1,r=1,o=0,a=Math.PI*2,s=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=s,this.aRotation=l}getPoint(e,t){const i=t||new fe,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(a?o=0:o=r),this.aClockwise===!0&&!a&&(o===r?o=-r:o=o-r);const s=this.aStartAngle+e*o;let l=this.aX+this.xRadius*Math.cos(s),c=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class w0 extends Gh{constructor(e,t,i,r,o,a){super(e,t,i,i,r,o,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Zs(){let n=0,e=0,t=0,i=0;function r(o,a,s,l){n=o,e=s,t=-3*o+3*a-2*s-l,i=2*o-2*a+s+l}return{initCatmullRom:function(o,a,s,l,c){r(a,s,c*(s-o),c*(l-a))},initNonuniformCatmullRom:function(o,a,s,l,c,u,h){let f=(a-o)/c-(s-o)/(c+u)+(s-a)/u,p=(s-a)/u-(l-a)/(u+h)+(l-s)/h;f*=u,p*=u,r(a,s,f,p)},calc:function(o){const a=o*o,s=a*o;return n+e*o+t*a+i*s}}}const So=new D,Wa=new Zs,ja=new Zs,Xa=new Zs;class T0 extends gn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new D){const i=t,r=this.points,o=r.length,a=(o-(this.closed?0:1))*e;let s=Math.floor(a),l=a-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/o)+1)*o:l===0&&s===o-1&&(s=o-2,l=1);let c,u;this.closed||s>0?c=r[(s-1)%o]:(So.subVectors(r[0],r[1]).add(r[0]),c=So);const h=r[s%o],f=r[(s+1)%o];if(this.closed||s+2<o?u=r[(s+2)%o]:(So.subVectors(r[o-1],r[o-2]).add(r[o-1]),u=So),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Wa.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),ja.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),Xa.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Wa.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),ja.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Xa.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Wa.calc(l),ja.calc(l),Xa.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function qc(n,e,t,i,r){const o=(i-e)*.5,a=(r-t)*.5,s=n*n,l=n*s;return(2*t-2*i+o+a)*l+(-3*t+3*i-2*o-a)*s+o*n+t}function A0(n,e){const t=1-n;return t*t*e}function C0(n,e){return 2*(1-n)*n*e}function R0(n,e){return n*n*e}function Ur(n,e,t,i){return A0(n,e)+C0(n,t)+R0(n,i)}function P0(n,e){const t=1-n;return t*t*t*e}function L0(n,e){const t=1-n;return 3*t*t*n*e}function O0(n,e){return 3*(1-n)*n*n*e}function D0(n,e){return n*n*n*e}function Nr(n,e,t,i,r){return P0(n,e)+L0(n,t)+O0(n,i)+D0(n,r)}class I0 extends gn{constructor(e=new fe,t=new fe,i=new fe,r=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new fe){const i=t,r=this.v0,o=this.v1,a=this.v2,s=this.v3;return i.set(Nr(e,r.x,o.x,a.x,s.x),Nr(e,r.y,o.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vh extends gn{constructor(e=new D,t=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new D){const i=t,r=this.v0,o=this.v1,a=this.v2,s=this.v3;return i.set(Nr(e,r.x,o.x,a.x,s.x),Nr(e,r.y,o.y,a.y,s.y),Nr(e,r.z,o.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class U0 extends gn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class N0 extends gn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class F0 extends gn{constructor(e=new fe,t=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new fe){const i=t,r=this.v0,o=this.v1,a=this.v2;return i.set(Ur(e,r.x,o.x,a.x),Ur(e,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Js extends gn{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,r=this.v0,o=this.v1,a=this.v2;return i.set(Ur(e,r.x,o.x,a.x),Ur(e,r.y,o.y,a.y),Ur(e,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class k0 extends gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const i=t,r=this.points,o=(r.length-1)*e,a=Math.floor(o),s=o-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return i.set(qc(s,l.x,c.x,u.x,h.x),qc(s,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new fe().fromArray(r))}return this}}var B0=Object.freeze({__proto__:null,ArcCurve:w0,CatmullRomCurve3:T0,CubicBezierCurve:I0,CubicBezierCurve3:Vh,EllipseCurve:Gh,LineCurve:U0,LineCurve3:N0,QuadraticBezierCurve:F0,QuadraticBezierCurve3:Js,SplineCurve:k0});class ia extends Dt{constructor(e=1,t=1,i=1,r=32,o=1,a=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:o,openEnded:a,thetaStart:s,thetaLength:l};const c=this;r=Math.floor(r),o=Math.floor(o);const u=[],h=[],f=[],p=[];let g=0;const _=[],m=i/2;let d=0;b(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new ot(h,3)),this.setAttribute("normal",new ot(f,3)),this.setAttribute("uv",new ot(p,2));function b(){const x=new D,y=new D;let S=0;const A=(t-e)/i;for(let T=0;T<=o;T++){const M=[],w=T/o,z=w*(t-e)+e;for(let V=0;V<=r;V++){const F=V/r,L=F*l+s,P=Math.sin(L),k=Math.cos(L);y.x=z*P,y.y=-w*i+m,y.z=z*k,h.push(y.x,y.y,y.z),x.set(P,A,k).normalize(),f.push(x.x,x.y,x.z),p.push(F,1-w),M.push(g++)}_.push(M)}for(let T=0;T<r;T++)for(let M=0;M<o;M++){const w=_[M][T],z=_[M+1][T],V=_[M+1][T+1],F=_[M][T+1];u.push(w,z,F),u.push(z,V,F),S+=6}c.addGroup(d,S,0),d+=S}function v(x){const y=g,S=new fe,A=new D;let T=0;const M=x===!0?e:t,w=x===!0?1:-1;for(let V=1;V<=r;V++)h.push(0,m*w,0),f.push(0,w,0),p.push(.5,.5),g++;const z=g;for(let V=0;V<=r;V++){const L=V/r*l+s,P=Math.cos(L),k=Math.sin(L);A.x=M*k,A.y=m*w,A.z=M*P,h.push(A.x,A.y,A.z),f.push(0,w,0),S.x=P*.5+.5,S.y=k*.5*w+.5,p.push(S.x,S.y),g++}for(let V=0;V<r;V++){const F=y+V,L=z+V;x===!0?u.push(L,L+1,F):u.push(L+1,L,F),T+=3}c.addGroup(d,T,x===!0?1:2),d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qs extends ia{constructor(e=1,t=1,i=32,r=1,o=!1,a=0,s=Math.PI*2){super(0,e,t,i,r,o,a,s),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:s}}static fromJSON(e){return new Qs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $r extends Dt{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:a,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+s,Math.PI);let c=0;const u=[],h=new D,f=new D,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const b=[],v=d/i;let x=0;d===0&&a===0?x=.5/t:d===i&&l===Math.PI&&(x=-.5/t);for(let y=0;y<=t;y++){const S=y/t;h.x=-e*Math.cos(r+S*o)*Math.sin(a+v*s),h.y=e*Math.cos(a+v*s),h.z=e*Math.sin(r+S*o)*Math.sin(a+v*s),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(S+x,1-v),b.push(c++)}u.push(b)}for(let d=0;d<i;d++)for(let b=0;b<t;b++){const v=u[d][b+1],x=u[d][b],y=u[d+1][b],S=u[d+1][b+1];(d!==0||a>0)&&p.push(v,x,S),(d!==i-1||l<Math.PI)&&p.push(x,y,S)}this.setIndex(p),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(_,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class el extends Dt{constructor(e=new Js(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,i=1,r=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:o};const a=e.computeFrenetFrames(t,o);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const s=new D,l=new D,c=new fe;let u=new D;const h=[],f=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ot(h,3)),this.setAttribute("normal",new ot(f,3)),this.setAttribute("uv",new ot(p,2));function _(){for(let v=0;v<t;v++)m(v);m(o===!1?t:0),b(),d()}function m(v){u=e.getPointAt(v/t,u);const x=a.normals[v],y=a.binormals[v];for(let S=0;S<=r;S++){const A=S/r*Math.PI*2,T=Math.sin(A),M=-Math.cos(A);l.x=M*x.x+T*y.x,l.y=M*x.y+T*y.y,l.z=M*x.z+T*y.z,l.normalize(),f.push(l.x,l.y,l.z),s.x=u.x+i*l.x,s.y=u.y+i*l.y,s.z=u.z+i*l.z,h.push(s.x,s.y,s.z)}}function d(){for(let v=1;v<=t;v++)for(let x=1;x<=r;x++){const y=(r+1)*(v-1)+(x-1),S=(r+1)*v+(x-1),A=(r+1)*v+x,T=(r+1)*(v-1)+x;g.push(y,S,T),g.push(S,A,T)}}function b(){for(let v=0;v<=t;v++)for(let x=0;x<=r;x++)c.x=v/t,c.y=x/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new el(new B0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class z0 extends Un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jo,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class H0 extends z0{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class G0 extends Un{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jo,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Wh extends Un{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jo,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Yc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class V0{constructor(e,t,i){const r=this;let o=!1,a=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){s++,o===!1&&r.onStart!==void 0&&r.onStart(u,a,s),o=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,s),a===s&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const W0=new V0;class jh{constructor(e){this.manager=e!==void 0?e:W0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,o){i.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class j0 extends jh{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,a=Yc.get(e);if(a!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a;const s=Vr("img");function l(){u(),Yc.add(e,this),t&&t(this),o.manager.itemEnd(e)}function c(h){u(),r&&r(h),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),o.manager.itemStart(e),s.src=e,s}}class X0 extends jh{constructor(e){super(e)}load(e,t,i,r){const o=new Ot,a=new j0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){o.image=s,o.needsUpdate=!0,t!==void 0&&t(o)},i,r),o}}class Xh extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const $a=new nt,Kc=new D,Zc=new D;class $0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kc),Zc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zc),t.updateMatrixWorld(),$a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class q0 extends $0{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Y0 extends Xh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new q0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class K0 extends Xh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $h{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Jc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Jc(){return(typeof performance>"u"?Date:performance).now()}class qh{constructor(e,t,i=0,r=1/0){this.ray=new Xs(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new $s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return vs(e,this,i,t),i.sort(Qc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,o=e.length;r<o;r++)vs(e[r],this,i,t);return i.sort(Qc),i}}function Qc(n,e){return n.distance-e.distance}function vs(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)vs(r[o],e,t,!0)}}class ys{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gs);const Bi=new Gn,zn=new qh,gr=new fe,eu=new D,Eo=new D,qa=new D,tu=new nt;class Z0 extends on{constructor(e,t,i){super(),i.style.touchAction="none";let r=null,o=null;const a=[],s=this;function l(){i.addEventListener("pointermove",p),i.addEventListener("pointerdown",g),i.addEventListener("pointerup",_),i.addEventListener("pointerleave",_)}function c(){i.removeEventListener("pointermove",p),i.removeEventListener("pointerdown",g),i.removeEventListener("pointerup",_),i.removeEventListener("pointerleave",_),i.style.cursor=""}function u(){c()}function h(){return e}function f(){return zn}function p(d){if(s.enabled!==!1){if(m(d),zn.setFromCamera(gr,t),r){zn.ray.intersectPlane(Bi,Eo)&&r.position.copy(Eo.sub(eu).applyMatrix4(tu)),s.dispatchEvent({type:"drag",object:r});return}if(d.pointerType==="mouse"||d.pointerType==="pen")if(a.length=0,zn.setFromCamera(gr,t),zn.intersectObjects(e,!0,a),a.length>0){const b=a[0].object;Bi.setFromNormalAndCoplanarPoint(t.getWorldDirection(Bi.normal),qa.setFromMatrixPosition(b.matrixWorld)),o!==b&&o!==null&&(s.dispatchEvent({type:"hoveroff",object:o}),i.style.cursor="auto",o=null),o!==b&&(s.dispatchEvent({type:"hoveron",object:b}),i.style.cursor="pointer",o=b)}else o!==null&&(s.dispatchEvent({type:"hoveroff",object:o}),i.style.cursor="auto",o=null)}}function g(d){s.enabled!==!1&&(m(d),a.length=0,zn.setFromCamera(gr,t),zn.intersectObjects(e,!0,a),a.length>0&&(r=s.transformGroup===!0?e[0]:a[0].object,Bi.setFromNormalAndCoplanarPoint(t.getWorldDirection(Bi.normal),qa.setFromMatrixPosition(r.matrixWorld)),zn.ray.intersectPlane(Bi,Eo)&&(tu.copy(r.parent.matrixWorld).invert(),eu.copy(Eo).sub(qa.setFromMatrixPosition(r.matrixWorld))),i.style.cursor="move",s.dispatchEvent({type:"dragstart",object:r})))}function _(){s.enabled!==!1&&(r&&(s.dispatchEvent({type:"dragend",object:r}),r=null),i.style.cursor=o?"pointer":"auto")}function m(d){const b=i.getBoundingClientRect();gr.x=(d.clientX-b.left)/b.width*2-1,gr.y=-(d.clientY-b.top)/b.height*2+1}l(),this.enabled=!0,this.transformGroup=!1,this.activate=l,this.deactivate=c,this.dispose=u,this.getObjects=h,this.getRaycaster=f}}function J0(n,e,t){var i,r=1;n==null&&(n=0),e==null&&(e=0),t==null&&(t=0);function o(){var a,s=i.length,l,c=0,u=0,h=0;for(a=0;a<s;++a)l=i[a],c+=l.x||0,u+=l.y||0,h+=l.z||0;for(c=(c/s-n)*r,u=(u/s-e)*r,h=(h/s-t)*r,a=0;a<s;++a)l=i[a],c&&(l.x-=c),u&&(l.y-=u),h&&(l.z-=h)}return o.initialize=function(a){i=a},o.x=function(a){return arguments.length?(n=+a,o):n},o.y=function(a){return arguments.length?(e=+a,o):e},o.z=function(a){return arguments.length?(t=+a,o):t},o.strength=function(a){return arguments.length?(r=+a,o):r},o}function Q0(n){const e=+this._x.call(null,n);return Yh(this.cover(e),e,n)}function Yh(n,e,t){if(isNaN(e))return n;var i,r=n._root,o={data:t},a=n._x0,s=n._x1,l,c,u,h,f;if(!r)return n._root=o,n;for(;r.length;)if((u=e>=(l=(a+s)/2))?a=l:s=l,i=r,!(r=r[h=+u]))return i[h]=o,n;if(c=+n._x.call(null,r.data),e===c)return o.next=r,i?i[h]=o:n._root=o,n;do i=i?i[h]=new Array(2):n._root=new Array(2),(u=e>=(l=(a+s)/2))?a=l:s=l;while((h=+u)==(f=+(c>=l)));return i[f]=r,i[h]=o,n}function ey(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e);let i=1/0,r=-1/0;for(let o=0,a;o<e;++o)isNaN(a=+this._x.call(null,n[o]))||(t[o]=a,a<i&&(i=a),a>r&&(r=a));if(i>r)return this;this.cover(i).cover(r);for(let o=0;o<e;++o)Yh(this,t[o],n[o]);return this}function ty(n){if(isNaN(n=+n))return this;var e=this._x0,t=this._x1;if(isNaN(e))t=(e=Math.floor(n))+1;else{for(var i=t-e||1,r=this._root,o,a;e>n||n>=t;)switch(a=+(n<e),o=new Array(2),o[a]=r,r=o,i*=2,a){case 0:t=e+i;break;case 1:e=t-i;break}this._root&&this._root.length&&(this._root=r)}return this._x0=e,this._x1=t,this}function ny(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function iy(n){return arguments.length?this.cover(+n[0][0]).cover(+n[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function Dn(n,e,t){this.node=n,this.x0=e,this.x1=t}function ry(n,e){var t,i=this._x0,r,o,a=this._x1,s=[],l=this._root,c,u;for(l&&s.push(new Dn(l,i,a)),e==null?e=1/0:(i=n-e,a=n+e);c=s.pop();)if(!(!(l=c.node)||(r=c.x0)>a||(o=c.x1)<i))if(l.length){var h=(r+o)/2;s.push(new Dn(l[1],h,o),new Dn(l[0],r,h)),(u=+(n>=h))&&(c=s[s.length-1],s[s.length-1]=s[s.length-1-u],s[s.length-1-u]=c)}else{var f=Math.abs(n-+this._x.call(null,l.data));f<e&&(e=f,i=n-f,a=n+f,t=l.data)}return t}function oy(n){if(isNaN(l=+this._x.call(null,n)))return this;var e,t=this._root,i,r,o,a=this._x0,s=this._x1,l,c,u,h,f;if(!t)return this;if(t.length)for(;;){if((u=l>=(c=(a+s)/2))?a=c:s=c,e=t,!(t=t[h=+u]))return this;if(!t.length)break;e[h+1&1]&&(i=e,f=h)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(o=t.next)&&delete t.next,r?(o?r.next=o:delete r.next,this):e?(o?e[h]=o:delete e[h],(t=e[0]||e[1])&&t===(e[1]||e[0])&&!t.length&&(i?i[f]=t:this._root=t),this):(this._root=o,this)}function ay(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function sy(){return this._root}function ly(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function cy(n){var e=[],t,i=this._root,r,o,a;for(i&&e.push(new Dn(i,this._x0,this._x1));t=e.pop();)if(!n(i=t.node,o=t.x0,a=t.x1)&&i.length){var s=(o+a)/2;(r=i[1])&&e.push(new Dn(r,s,a)),(r=i[0])&&e.push(new Dn(r,o,s))}return this}function uy(n){var e=[],t=[],i;for(this._root&&e.push(new Dn(this._root,this._x0,this._x1));i=e.pop();){var r=i.node;if(r.length){var o,a=i.x0,s=i.x1,l=(a+s)/2;(o=r[0])&&e.push(new Dn(o,a,l)),(o=r[1])&&e.push(new Dn(o,l,s))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.x1);return this}function hy(n){return n[0]}function fy(n){return arguments.length?(this._x=n,this):this._x}function Kh(n,e){var t=new tl(e??hy,NaN,NaN);return n==null?t:t.addAll(n)}function tl(n,e,t){this._x=n,this._x0=e,this._x1=t,this._root=void 0}function nu(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Ut=Kh.prototype=tl.prototype;Ut.copy=function(){var n=new tl(this._x,this._x0,this._x1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=nu(e),n;for(t=[{source:e,target:n._root=new Array(2)}];e=t.pop();)for(var r=0;r<2;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(2)}):e.target[r]=nu(i));return n};Ut.add=Q0;Ut.addAll=ey;Ut.cover=ty;Ut.data=ny;Ut.extent=iy;Ut.find=ry;Ut.remove=oy;Ut.removeAll=ay;Ut.root=sy;Ut.size=ly;Ut.visit=cy;Ut.visitAfter=uy;Ut.x=fy;function dy(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return Zh(this.cover(e,t),e,t,n)}function Zh(n,e,t,i){if(isNaN(e)||isNaN(t))return n;var r,o=n._root,a={data:i},s=n._x0,l=n._y0,c=n._x1,u=n._y1,h,f,p,g,_,m,d,b;if(!o)return n._root=a,n;for(;o.length;)if((_=e>=(h=(s+c)/2))?s=h:c=h,(m=t>=(f=(l+u)/2))?l=f:u=f,r=o,!(o=o[d=m<<1|_]))return r[d]=a,n;if(p=+n._x.call(null,o.data),g=+n._y.call(null,o.data),e===p&&t===g)return a.next=o,r?r[d]=a:n._root=a,n;do r=r?r[d]=new Array(4):n._root=new Array(4),(_=e>=(h=(s+c)/2))?s=h:c=h,(m=t>=(f=(l+u)/2))?l=f:u=f;while((d=m<<1|_)===(b=(g>=f)<<1|p>=h));return r[b]=o,r[d]=a,n}function py(n){var e,t,i=n.length,r,o,a=new Array(i),s=new Array(i),l=1/0,c=1/0,u=-1/0,h=-1/0;for(t=0;t<i;++t)isNaN(r=+this._x.call(null,e=n[t]))||isNaN(o=+this._y.call(null,e))||(a[t]=r,s[t]=o,r<l&&(l=r),r>u&&(u=r),o<c&&(c=o),o>h&&(h=o));if(l>u||c>h)return this;for(this.cover(l,c).cover(u,h),t=0;t<i;++t)Zh(this,a[t],s[t],n[t]);return this}function my(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,i=this._y0,r=this._x1,o=this._y1;if(isNaN(t))r=(t=Math.floor(n))+1,o=(i=Math.floor(e))+1;else{for(var a=r-t||1,s=this._root,l,c;t>n||n>=r||i>e||e>=o;)switch(c=(e<i)<<1|n<t,l=new Array(4),l[c]=s,s=l,a*=2,c){case 0:r=t+a,o=i+a;break;case 1:t=r-a,o=i+a;break;case 2:r=t+a,i=o-a;break;case 3:t=r-a,i=o-a;break}this._root&&this._root.length&&(this._root=s)}return this._x0=t,this._y0=i,this._x1=r,this._y1=o,this}function gy(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function _y(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Pt(n,e,t,i,r){this.node=n,this.x0=e,this.y0=t,this.x1=i,this.y1=r}function vy(n,e,t){var i,r=this._x0,o=this._y0,a,s,l,c,u=this._x1,h=this._y1,f=[],p=this._root,g,_;for(p&&f.push(new Pt(p,r,o,u,h)),t==null?t=1/0:(r=n-t,o=e-t,u=n+t,h=e+t,t*=t);g=f.pop();)if(!(!(p=g.node)||(a=g.x0)>u||(s=g.y0)>h||(l=g.x1)<r||(c=g.y1)<o))if(p.length){var m=(a+l)/2,d=(s+c)/2;f.push(new Pt(p[3],m,d,l,c),new Pt(p[2],a,d,m,c),new Pt(p[1],m,s,l,d),new Pt(p[0],a,s,m,d)),(_=(e>=d)<<1|n>=m)&&(g=f[f.length-1],f[f.length-1]=f[f.length-1-_],f[f.length-1-_]=g)}else{var b=n-+this._x.call(null,p.data),v=e-+this._y.call(null,p.data),x=b*b+v*v;if(x<t){var y=Math.sqrt(t=x);r=n-y,o=e-y,u=n+y,h=e+y,i=p.data}}return i}function yy(n){if(isNaN(u=+this._x.call(null,n))||isNaN(h=+this._y.call(null,n)))return this;var e,t=this._root,i,r,o,a=this._x0,s=this._y0,l=this._x1,c=this._y1,u,h,f,p,g,_,m,d;if(!t)return this;if(t.length)for(;;){if((g=u>=(f=(a+l)/2))?a=f:l=f,(_=h>=(p=(s+c)/2))?s=p:c=p,e=t,!(t=t[m=_<<1|g]))return this;if(!t.length)break;(e[m+1&3]||e[m+2&3]||e[m+3&3])&&(i=e,d=m)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(o=t.next)&&delete t.next,r?(o?r.next=o:delete r.next,this):e?(o?e[m]=o:delete e[m],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[d]=t:this._root=t),this):(this._root=o,this)}function xy(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function by(){return this._root}function My(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function Sy(n){var e=[],t,i=this._root,r,o,a,s,l;for(i&&e.push(new Pt(i,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(i=t.node,o=t.x0,a=t.y0,s=t.x1,l=t.y1)&&i.length){var c=(o+s)/2,u=(a+l)/2;(r=i[3])&&e.push(new Pt(r,c,u,s,l)),(r=i[2])&&e.push(new Pt(r,o,u,c,l)),(r=i[1])&&e.push(new Pt(r,c,a,s,u)),(r=i[0])&&e.push(new Pt(r,o,a,c,u))}return this}function Ey(n){var e=[],t=[],i;for(this._root&&e.push(new Pt(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var r=i.node;if(r.length){var o,a=i.x0,s=i.y0,l=i.x1,c=i.y1,u=(a+l)/2,h=(s+c)/2;(o=r[0])&&e.push(new Pt(o,a,s,u,h)),(o=r[1])&&e.push(new Pt(o,u,s,l,h)),(o=r[2])&&e.push(new Pt(o,a,h,u,c)),(o=r[3])&&e.push(new Pt(o,u,h,l,c))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.x1,i.y1);return this}function wy(n){return n[0]}function Ty(n){return arguments.length?(this._x=n,this):this._x}function Ay(n){return n[1]}function Cy(n){return arguments.length?(this._y=n,this):this._y}function Jh(n,e,t){var i=new nl(e??wy,t??Ay,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function nl(n,e,t,i,r,o){this._x=n,this._y=e,this._x0=t,this._y0=i,this._x1=r,this._y1=o,this._root=void 0}function iu(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var It=Jh.prototype=nl.prototype;It.copy=function(){var n=new nl(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=iu(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var r=0;r<4;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(4)}):e.target[r]=iu(i));return n};It.add=dy;It.addAll=py;It.cover=my;It.data=gy;It.extent=_y;It.find=vy;It.remove=yy;It.removeAll=xy;It.root=by;It.size=My;It.visit=Sy;It.visitAfter=Ey;It.x=Ty;It.y=Cy;function Ry(n){const e=+this._x.call(null,n),t=+this._y.call(null,n),i=+this._z.call(null,n);return Qh(this.cover(e,t,i),e,t,i,n)}function Qh(n,e,t,i,r){if(isNaN(e)||isNaN(t)||isNaN(i))return n;var o,a=n._root,s={data:r},l=n._x0,c=n._y0,u=n._z0,h=n._x1,f=n._y1,p=n._z1,g,_,m,d,b,v,x,y,S,A,T;if(!a)return n._root=s,n;for(;a.length;)if((x=e>=(g=(l+h)/2))?l=g:h=g,(y=t>=(_=(c+f)/2))?c=_:f=_,(S=i>=(m=(u+p)/2))?u=m:p=m,o=a,!(a=a[A=S<<2|y<<1|x]))return o[A]=s,n;if(d=+n._x.call(null,a.data),b=+n._y.call(null,a.data),v=+n._z.call(null,a.data),e===d&&t===b&&i===v)return s.next=a,o?o[A]=s:n._root=s,n;do o=o?o[A]=new Array(8):n._root=new Array(8),(x=e>=(g=(l+h)/2))?l=g:h=g,(y=t>=(_=(c+f)/2))?c=_:f=_,(S=i>=(m=(u+p)/2))?u=m:p=m;while((A=S<<2|y<<1|x)===(T=(v>=m)<<2|(b>=_)<<1|d>=g));return o[T]=a,o[A]=s,n}function Py(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e),i=new Float64Array(e),r=new Float64Array(e);let o=1/0,a=1/0,s=1/0,l=-1/0,c=-1/0,u=-1/0;for(let h=0,f,p,g,_;h<e;++h)isNaN(p=+this._x.call(null,f=n[h]))||isNaN(g=+this._y.call(null,f))||isNaN(_=+this._z.call(null,f))||(t[h]=p,i[h]=g,r[h]=_,p<o&&(o=p),p>l&&(l=p),g<a&&(a=g),g>c&&(c=g),_<s&&(s=_),_>u&&(u=_));if(o>l||a>c||s>u)return this;this.cover(o,a,s).cover(l,c,u);for(let h=0;h<e;++h)Qh(this,t[h],i[h],r[h],n[h]);return this}function Ly(n,e,t){if(isNaN(n=+n)||isNaN(e=+e)||isNaN(t=+t))return this;var i=this._x0,r=this._y0,o=this._z0,a=this._x1,s=this._y1,l=this._z1;if(isNaN(i))a=(i=Math.floor(n))+1,s=(r=Math.floor(e))+1,l=(o=Math.floor(t))+1;else{for(var c=a-i||1,u=this._root,h,f;i>n||n>=a||r>e||e>=s||o>t||t>=l;)switch(f=(t<o)<<2|(e<r)<<1|n<i,h=new Array(8),h[f]=u,u=h,c*=2,f){case 0:a=i+c,s=r+c,l=o+c;break;case 1:i=a-c,s=r+c,l=o+c;break;case 2:a=i+c,r=s-c,l=o+c;break;case 3:i=a-c,r=s-c,l=o+c;break;case 4:a=i+c,s=r+c,o=l-c;break;case 5:i=a-c,s=r+c,o=l-c;break;case 6:a=i+c,r=s-c,o=l-c;break;case 7:i=a-c,r=s-c,o=l-c;break}this._root&&this._root.length&&(this._root=u)}return this._x0=i,this._y0=r,this._z0=o,this._x1=a,this._y1=s,this._z1=l,this}function Oy(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function Dy(n){return arguments.length?this.cover(+n[0][0],+n[0][1],+n[0][2]).cover(+n[1][0],+n[1][1],+n[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function Ke(n,e,t,i,r,o,a){this.node=n,this.x0=e,this.y0=t,this.z0=i,this.x1=r,this.y1=o,this.z1=a}function Iy(n,e,t,i){var r,o=this._x0,a=this._y0,s=this._z0,l,c,u,h,f,p,g=this._x1,_=this._y1,m=this._z1,d=[],b=this._root,v,x;for(b&&d.push(new Ke(b,o,a,s,g,_,m)),i==null?i=1/0:(o=n-i,a=e-i,s=t-i,g=n+i,_=e+i,m=t+i,i*=i);v=d.pop();)if(!(!(b=v.node)||(l=v.x0)>g||(c=v.y0)>_||(u=v.z0)>m||(h=v.x1)<o||(f=v.y1)<a||(p=v.z1)<s))if(b.length){var y=(l+h)/2,S=(c+f)/2,A=(u+p)/2;d.push(new Ke(b[7],y,S,A,h,f,p),new Ke(b[6],l,S,A,y,f,p),new Ke(b[5],y,c,A,h,S,p),new Ke(b[4],l,c,A,y,S,p),new Ke(b[3],y,S,u,h,f,A),new Ke(b[2],l,S,u,y,f,A),new Ke(b[1],y,c,u,h,S,A),new Ke(b[0],l,c,u,y,S,A)),(x=(t>=A)<<2|(e>=S)<<1|n>=y)&&(v=d[d.length-1],d[d.length-1]=d[d.length-1-x],d[d.length-1-x]=v)}else{var T=n-+this._x.call(null,b.data),M=e-+this._y.call(null,b.data),w=t-+this._z.call(null,b.data),z=T*T+M*M+w*w;if(z<i){var V=Math.sqrt(i=z);o=n-V,a=e-V,s=t-V,g=n+V,_=e+V,m=t+V,r=b.data}}return r}function Uy(n){if(isNaN(f=+this._x.call(null,n))||isNaN(p=+this._y.call(null,n))||isNaN(g=+this._z.call(null,n)))return this;var e,t=this._root,i,r,o,a=this._x0,s=this._y0,l=this._z0,c=this._x1,u=this._y1,h=this._z1,f,p,g,_,m,d,b,v,x,y,S;if(!t)return this;if(t.length)for(;;){if((b=f>=(_=(a+c)/2))?a=_:c=_,(v=p>=(m=(s+u)/2))?s=m:u=m,(x=g>=(d=(l+h)/2))?l=d:h=d,e=t,!(t=t[y=x<<2|v<<1|b]))return this;if(!t.length)break;(e[y+1&7]||e[y+2&7]||e[y+3&7]||e[y+4&7]||e[y+5&7]||e[y+6&7]||e[y+7&7])&&(i=e,S=y)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(o=t.next)&&delete t.next,r?(o?r.next=o:delete r.next,this):e?(o?e[y]=o:delete e[y],(t=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&t===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[S]=t:this._root=t),this):(this._root=o,this)}function Ny(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function Fy(){return this._root}function ky(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function By(n){var e=[],t,i=this._root,r,o,a,s,l,c,u;for(i&&e.push(new Ke(i,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));t=e.pop();)if(!n(i=t.node,o=t.x0,a=t.y0,s=t.z0,l=t.x1,c=t.y1,u=t.z1)&&i.length){var h=(o+l)/2,f=(a+c)/2,p=(s+u)/2;(r=i[7])&&e.push(new Ke(r,h,f,p,l,c,u)),(r=i[6])&&e.push(new Ke(r,o,f,p,h,c,u)),(r=i[5])&&e.push(new Ke(r,h,a,p,l,f,u)),(r=i[4])&&e.push(new Ke(r,o,a,p,h,f,u)),(r=i[3])&&e.push(new Ke(r,h,f,s,l,c,p)),(r=i[2])&&e.push(new Ke(r,o,f,s,h,c,p)),(r=i[1])&&e.push(new Ke(r,h,a,s,l,f,p)),(r=i[0])&&e.push(new Ke(r,o,a,s,h,f,p))}return this}function zy(n){var e=[],t=[],i;for(this._root&&e.push(new Ke(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));i=e.pop();){var r=i.node;if(r.length){var o,a=i.x0,s=i.y0,l=i.z0,c=i.x1,u=i.y1,h=i.z1,f=(a+c)/2,p=(s+u)/2,g=(l+h)/2;(o=r[0])&&e.push(new Ke(o,a,s,l,f,p,g)),(o=r[1])&&e.push(new Ke(o,f,s,l,c,p,g)),(o=r[2])&&e.push(new Ke(o,a,p,l,f,u,g)),(o=r[3])&&e.push(new Ke(o,f,p,l,c,u,g)),(o=r[4])&&e.push(new Ke(o,a,s,g,f,p,h)),(o=r[5])&&e.push(new Ke(o,f,s,g,c,p,h)),(o=r[6])&&e.push(new Ke(o,a,p,g,f,u,h)),(o=r[7])&&e.push(new Ke(o,f,p,g,c,u,h))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.z0,i.x1,i.y1,i.z1);return this}function Hy(n){return n[0]}function Gy(n){return arguments.length?(this._x=n,this):this._x}function Vy(n){return n[1]}function Wy(n){return arguments.length?(this._y=n,this):this._y}function jy(n){return n[2]}function Xy(n){return arguments.length?(this._z=n,this):this._z}function ef(n,e,t,i){var r=new il(e??Hy,t??Vy,i??jy,NaN,NaN,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function il(n,e,t,i,r,o,a,s,l){this._x=n,this._y=e,this._z=t,this._x0=i,this._y0=r,this._z0=o,this._x1=a,this._y1=s,this._z1=l,this._root=void 0}function ru(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Et=ef.prototype=il.prototype;Et.copy=function(){var n=new il(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=ru(e),n;for(t=[{source:e,target:n._root=new Array(8)}];e=t.pop();)for(var r=0;r<8;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(8)}):e.target[r]=ru(i));return n};Et.add=Ry;Et.addAll=Py;Et.cover=Ly;Et.data=Oy;Et.extent=Dy;Et.find=Iy;Et.remove=Uy;Et.removeAll=Ny;Et.root=Fy;Et.size=ky;Et.visit=By;Et.visitAfter=zy;Et.x=Gy;Et.y=Wy;Et.z=Xy;function Pn(n){return function(){return n}}function An(n){return(n()-.5)*1e-6}function $y(n){return n.index}function ou(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function qy(n){var e=$y,t=f,i,r=Pn(30),o,a,s,l,c,u,h=1;n==null&&(n=[]);function f(d){return 1/Math.min(l[d.source.index],l[d.target.index])}function p(d){for(var b=0,v=n.length;b<h;++b)for(var x=0,y,S,A,T=0,M=0,w=0,z,V;x<v;++x)y=n[x],S=y.source,A=y.target,T=A.x+A.vx-S.x-S.vx||An(u),s>1&&(M=A.y+A.vy-S.y-S.vy||An(u)),s>2&&(w=A.z+A.vz-S.z-S.vz||An(u)),z=Math.sqrt(T*T+M*M+w*w),z=(z-o[x])/z*d*i[x],T*=z,M*=z,w*=z,A.vx-=T*(V=c[x]),s>1&&(A.vy-=M*V),s>2&&(A.vz-=w*V),S.vx+=T*(V=1-V),s>1&&(S.vy+=M*V),s>2&&(S.vz+=w*V)}function g(){if(a){var d,b=a.length,v=n.length,x=new Map(a.map((S,A)=>[e(S,A,a),S])),y;for(d=0,l=new Array(b);d<v;++d)y=n[d],y.index=d,typeof y.source!="object"&&(y.source=ou(x,y.source)),typeof y.target!="object"&&(y.target=ou(x,y.target)),l[y.source.index]=(l[y.source.index]||0)+1,l[y.target.index]=(l[y.target.index]||0)+1;for(d=0,c=new Array(v);d<v;++d)y=n[d],c[d]=l[y.source.index]/(l[y.source.index]+l[y.target.index]);i=new Array(v),_(),o=new Array(v),m()}}function _(){if(a)for(var d=0,b=n.length;d<b;++d)i[d]=+t(n[d],d,n)}function m(){if(a)for(var d=0,b=n.length;d<b;++d)o[d]=+r(n[d],d,n)}return p.initialize=function(d,...b){a=d,u=b.find(v=>typeof v=="function")||Math.random,s=b.find(v=>[1,2,3].includes(v))||2,g()},p.links=function(d){return arguments.length?(n=d,g(),p):n},p.id=function(d){return arguments.length?(e=d,p):e},p.iterations=function(d){return arguments.length?(h=+d,p):h},p.strength=function(d){return arguments.length?(t=typeof d=="function"?d:Pn(+d),_(),p):t},p.distance=function(d){return arguments.length?(r=typeof d=="function"?d:Pn(+d),m(),p):r},p}var Yy={value:()=>{}};function tf(){for(var n=0,e=arguments.length,t={},i;n<e;++n){if(!(i=arguments[n]+"")||i in t||/[\s.]/.test(i))throw new Error("illegal type: "+i);t[i]=[]}return new Io(t)}function Io(n){this._=n}function Ky(n,e){return n.trim().split(/^|\s+/).map(function(t){var i="",r=t.indexOf(".");if(r>=0&&(i=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:i}})}Io.prototype=tf.prototype={constructor:Io,on:function(n,e){var t=this._,i=Ky(n+"",t),r,o=-1,a=i.length;if(arguments.length<2){for(;++o<a;)if((r=(n=i[o]).type)&&(r=Zy(t[r],n.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<a;)if(r=(n=i[o]).type)t[r]=au(t[r],n.name,e);else if(e==null)for(r in t)t[r]=au(t[r],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new Io(n)},call:function(n,e){if((r=arguments.length-2)>0)for(var t=new Array(r),i=0,r,o;i<r;++i)t[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(o=this._[n],i=0,r=o.length;i<r;++i)o[i].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,o=i.length;r<o;++r)i[r].value.apply(e,t)}};function Zy(n,e){for(var t=0,i=n.length,r;t<i;++t)if((r=n[t]).name===e)return r.value}function au(n,e,t){for(var i=0,r=n.length;i<r;++i)if(n[i].name===e){n[i]=Yy,n=n.slice(0,i).concat(n.slice(i+1));break}return t!=null&&n.push({name:e,value:t}),n}var ir=0,Tr=0,_r=0,nf=1e3,Ho,Ar,Go=0,mi=0,ra=0,Wr=typeof performance=="object"&&performance.now?performance:Date,rf=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function of(){return mi||(rf(Jy),mi=Wr.now()+ra)}function Jy(){mi=0}function xs(){this._call=this._time=this._next=null}xs.prototype=af.prototype={constructor:xs,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?of():+t)+(e==null?0:+e),!this._next&&Ar!==this&&(Ar?Ar._next=this:Ho=this,Ar=this),this._call=n,this._time=t,bs()},stop:function(){this._call&&(this._call=null,this._time=1/0,bs())}};function af(n,e,t){var i=new xs;return i.restart(n,e,t),i}function Qy(){of(),++ir;for(var n=Ho,e;n;)(e=mi-n._time)>=0&&n._call.call(void 0,e),n=n._next;--ir}function su(){mi=(Go=Wr.now())+ra,ir=Tr=0;try{Qy()}finally{ir=0,tx(),mi=0}}function ex(){var n=Wr.now(),e=n-Go;e>nf&&(ra-=e,Go=n)}function tx(){for(var n,e=Ho,t,i=1/0;e;)e._call?(i>e._time&&(i=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:Ho=t);Ar=n,bs(i)}function bs(n){if(!ir){Tr&&(Tr=clearTimeout(Tr));var e=n-mi;e>24?(n<1/0&&(Tr=setTimeout(su,n-Wr.now()-ra)),_r&&(_r=clearInterval(_r))):(_r||(Go=Wr.now(),_r=setInterval(ex,nf)),ir=1,rf(su))}}const nx=1664525,ix=1013904223,lu=4294967296;function rx(){let n=1;return()=>(n=(nx*n+ix)%lu)/lu}var cu=3;function Ya(n){return n.x}function uu(n){return n.y}function ox(n){return n.z}var ax=10,sx=Math.PI*(3-Math.sqrt(5)),lx=Math.PI*20/(9+Math.sqrt(221));function cx(n,e){e=e||2;var t=Math.min(cu,Math.max(1,Math.round(e))),i,r=1,o=.001,a=1-Math.pow(o,1/300),s=0,l=.6,c=new Map,u=af(p),h=tf("tick","end"),f=rx();n==null&&(n=[]);function p(){g(),h.call("tick",i),r<o&&(u.stop(),h.call("end",i))}function g(d){var b,v=n.length,x;d===void 0&&(d=1);for(var y=0;y<d;++y)for(r+=(s-r)*a,c.forEach(function(S){S(r)}),b=0;b<v;++b)x=n[b],x.fx==null?x.x+=x.vx*=l:(x.x=x.fx,x.vx=0),t>1&&(x.fy==null?x.y+=x.vy*=l:(x.y=x.fy,x.vy=0)),t>2&&(x.fz==null?x.z+=x.vz*=l:(x.z=x.fz,x.vz=0));return i}function _(){for(var d=0,b=n.length,v;d<b;++d){if(v=n[d],v.index=d,v.fx!=null&&(v.x=v.fx),v.fy!=null&&(v.y=v.fy),v.fz!=null&&(v.z=v.fz),isNaN(v.x)||t>1&&isNaN(v.y)||t>2&&isNaN(v.z)){var x=ax*(t>2?Math.cbrt(.5+d):t>1?Math.sqrt(.5+d):d),y=d*sx,S=d*lx;t===1?v.x=x:t===2?(v.x=x*Math.cos(y),v.y=x*Math.sin(y)):(v.x=x*Math.sin(y)*Math.cos(S),v.y=x*Math.cos(y),v.z=x*Math.sin(y)*Math.sin(S))}(isNaN(v.vx)||t>1&&isNaN(v.vy)||t>2&&isNaN(v.vz))&&(v.vx=0,t>1&&(v.vy=0),t>2&&(v.vz=0))}}function m(d){return d.initialize&&d.initialize(n,f,t),d}return _(),i={tick:g,restart:function(){return u.restart(p),i},stop:function(){return u.stop(),i},numDimensions:function(d){return arguments.length?(t=Math.min(cu,Math.max(1,Math.round(d))),c.forEach(m),i):t},nodes:function(d){return arguments.length?(n=d,_(),c.forEach(m),i):n},alpha:function(d){return arguments.length?(r=+d,i):r},alphaMin:function(d){return arguments.length?(o=+d,i):o},alphaDecay:function(d){return arguments.length?(a=+d,i):+a},alphaTarget:function(d){return arguments.length?(s=+d,i):s},velocityDecay:function(d){return arguments.length?(l=1-d,i):1-l},randomSource:function(d){return arguments.length?(f=d,c.forEach(m),i):f},force:function(d,b){return arguments.length>1?(b==null?c.delete(d):c.set(d,m(b)),i):c.get(d)},find:function(){var d=Array.prototype.slice.call(arguments),b=d.shift()||0,v=(t>1?d.shift():null)||0,x=(t>2?d.shift():null)||0,y=d.shift()||1/0,S=0,A=n.length,T,M,w,z,V,F;for(y*=y,S=0;S<A;++S)V=n[S],T=b-V.x,M=v-(V.y||0),w=x-(V.z||0),z=T*T+M*M+w*w,z<y&&(F=V,y=z);return F},on:function(d,b){return arguments.length>1?(h.on(d,b),i):h.on(d)}}}function ux(){var n,e,t,i,r,o=Pn(-30),a,s=1,l=1/0,c=.81;function u(g){var _,m=n.length,d=(e===1?Kh(n,Ya):e===2?Jh(n,Ya,uu):e===3?ef(n,Ya,uu,ox):null).visitAfter(f);for(r=g,_=0;_<m;++_)t=n[_],d.visit(p)}function h(){if(n){var g,_=n.length,m;for(a=new Array(_),g=0;g<_;++g)m=n[g],a[m.index]=+o(m,g,n)}}function f(g){var _=0,m,d,b=0,v,x,y,S,A=g.length;if(A){for(v=x=y=S=0;S<A;++S)(m=g[S])&&(d=Math.abs(m.value))&&(_+=m.value,b+=d,v+=d*(m.x||0),x+=d*(m.y||0),y+=d*(m.z||0));_*=Math.sqrt(4/A),g.x=v/b,e>1&&(g.y=x/b),e>2&&(g.z=y/b)}else{m=g,m.x=m.data.x,e>1&&(m.y=m.data.y),e>2&&(m.z=m.data.z);do _+=a[m.data.index];while(m=m.next)}g.value=_}function p(g,_,m,d,b){if(!g.value)return!0;var v=[m,d,b][e-1],x=g.x-t.x,y=e>1?g.y-t.y:0,S=e>2?g.z-t.z:0,A=v-_,T=x*x+y*y+S*S;if(A*A/c<T)return T<l&&(x===0&&(x=An(i),T+=x*x),e>1&&y===0&&(y=An(i),T+=y*y),e>2&&S===0&&(S=An(i),T+=S*S),T<s&&(T=Math.sqrt(s*T)),t.vx+=x*g.value*r/T,e>1&&(t.vy+=y*g.value*r/T),e>2&&(t.vz+=S*g.value*r/T)),!0;if(g.length||T>=l)return;(g.data!==t||g.next)&&(x===0&&(x=An(i),T+=x*x),e>1&&y===0&&(y=An(i),T+=y*y),e>2&&S===0&&(S=An(i),T+=S*S),T<s&&(T=Math.sqrt(s*T)));do g.data!==t&&(A=a[g.data.index]*r/T,t.vx+=x*A,e>1&&(t.vy+=y*A),e>2&&(t.vz+=S*A));while(g=g.next)}return u.initialize=function(g,..._){n=g,i=_.find(m=>typeof m=="function")||Math.random,e=_.find(m=>[1,2,3].includes(m))||2,h()},u.strength=function(g){return arguments.length?(o=typeof g=="function"?g:Pn(+g),h(),u):o},u.distanceMin=function(g){return arguments.length?(s=g*g,u):Math.sqrt(s)},u.distanceMax=function(g){return arguments.length?(l=g*g,u):Math.sqrt(l)},u.theta=function(g){return arguments.length?(c=g*g,u):Math.sqrt(c)},u}function hx(n,e,t,i){var r,o,a=Pn(.1),s,l;typeof n!="function"&&(n=Pn(+n)),e==null&&(e=0),t==null&&(t=0),i==null&&(i=0);function c(h){for(var f=0,p=r.length;f<p;++f){var g=r[f],_=g.x-e||1e-6,m=(g.y||0)-t||1e-6,d=(g.z||0)-i||1e-6,b=Math.sqrt(_*_+m*m+d*d),v=(l[f]-b)*s[f]*h/b;g.vx+=_*v,o>1&&(g.vy+=m*v),o>2&&(g.vz+=d*v)}}function u(){if(r){var h,f=r.length;for(s=new Array(f),l=new Array(f),h=0;h<f;++h)l[h]=+n(r[h],h,r),s[h]=isNaN(l[h])?0:+a(r[h],h,r)}}return c.initialize=function(h,...f){r=h,o=f.find(p=>[1,2,3].includes(p))||2,u()},c.strength=function(h){return arguments.length?(a=typeof h=="function"?h:Pn(+h),u(),c):a},c.radius=function(h){return arguments.length?(n=typeof h=="function"?h:Pn(+h),u(),c):n},c.x=function(h){return arguments.length?(e=+h,c):e},c.y=function(h){return arguments.length?(t=+h,c):t},c.z=function(h){return arguments.length?(i=+h,c):i},c}function sf(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var rl=function(e){dx(e);var t=fx(e);return e.on=t.on,e.off=t.off,e.fire=t.fire,e};function fx(n){var e=Object.create(null);return{on:function(t,i,r){if(typeof i!="function")throw new Error("callback is expected to be a function");var o=e[t];return o||(o=e[t]=[]),o.push({callback:i,ctx:r}),n},off:function(t,i){var r=typeof t>"u";if(r)return e=Object.create(null),n;if(e[t]){var o=typeof i!="function";if(o)delete e[t];else for(var a=e[t],s=0;s<a.length;++s)a[s].callback===i&&a.splice(s,1)}return n},fire:function(t){var i=e[t];if(!i)return n;var r;arguments.length>1&&(r=Array.prototype.splice.call(arguments,1));for(var o=0;o<i.length;++o){var a=i[o];a.callback.apply(a.ctx,r)}return n}}}function dx(n){if(!n)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],t=0;t<e.length;++t)if(n.hasOwnProperty(e[t]))throw new Error("Subject cannot be eventified, since it already has property '"+e[t]+"'")}var px=gx,mx=rl;function gx(n){if(n=n||{},"uniqueLinkId"in n&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),n.multigraph=n.uniqueLinkId),n.multigraph===void 0&&(n.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,t=new Map,i={},r=0,o=n.multigraph?x:v,a=[],s=k,l=k,c=k,u=k,h={version:20,addNode:_,addLink:b,removeLink:T,removeNode:d,getNode:m,getNodeCount:y,getLinkCount:S,getEdgeCount:S,getLinksCount:S,getNodesCount:y,getLinks:A,forEachNode:ae,forEachLinkedNode:F,forEachLink:V,beginUpdate:c,endUpdate:u,clear:z,hasLink:w,hasNode:m,getLink:w};return mx(h),f(),h;function f(){var H=h.on;h.on=re;function re(){return h.beginUpdate=c=q,h.endUpdate=u=Z,s=p,l=g,h.on=H,H.apply(h,arguments)}}function p(H,re){a.push({link:H,changeType:re})}function g(H,re){a.push({node:H,changeType:re})}function _(H,re){if(H===void 0)throw new Error("Invalid node identifier");c();var N=m(H);return N?(N.data=re,l(N,"update")):(N=new _x(H,re),l(N,"add")),e.set(H,N),u(),N}function m(H){return e.get(H)}function d(H){var re=m(H);if(!re)return!1;c();var N=re.links;return N&&(N.forEach(M),re.links=null),e.delete(H),l(re,"remove"),u(),!0}function b(H,re,N){c();var te=m(H)||_(H),W=m(re)||_(re),j=o(H,re,N),ne=t.has(j.id);return t.set(j.id,j),hu(te,j),H!==re&&hu(W,j),s(j,ne?"update":"add"),u(),j}function v(H,re,N){var te=wo(H,re),W=t.get(te);return W?(W.data=N,W):new fu(H,re,N,te)}function x(H,re,N){var te=wo(H,re),W=i.hasOwnProperty(te);if(W||w(H,re)){W||(i[te]=0);var j="@"+ ++i[te];te=wo(H+j,re+j)}return new fu(H,re,N,te)}function y(){return e.size}function S(){return t.size}function A(H){var re=m(H);return re?re.links:null}function T(H,re){return re!==void 0&&(H=w(H,re)),M(H)}function M(H){if(!H||!t.get(H.id))return!1;c(),t.delete(H.id);var re=m(H.fromId),N=m(H.toId);return re&&re.links.delete(H),N&&N.links.delete(H),s(H,"remove"),u(),!0}function w(H,re){if(!(H===void 0||re===void 0))return t.get(wo(H,re))}function z(){c(),ae(function(H){d(H.id)}),u()}function V(H){if(typeof H=="function")for(var re=t.values(),N=re.next();!N.done;){if(H(N.value))return!0;N=re.next()}}function F(H,re,N){var te=m(H);if(te&&te.links&&typeof re=="function")return N?P(te.links,H,re):L(te.links,H,re)}function L(H,re,N){for(var te,W=H.values(),j=W.next();!j.done;){var ne=j.value,U=ne.fromId===re?ne.toId:ne.fromId;if(te=N(e.get(U),ne),te)return!0;j=W.next()}}function P(H,re,N){for(var te,W=H.values(),j=W.next();!j.done;){var ne=j.value;if(ne.fromId===re&&(te=N(e.get(ne.toId),ne),te))return!0;j=W.next()}}function k(){}function q(){r+=1}function Z(){r-=1,r===0&&a.length>0&&(h.fire("changed",a),a.length=0)}function ae(H){if(typeof H!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+H);for(var re=e.values(),N=re.next();!N.done;){if(H(N.value))return!0;N=re.next()}}}function _x(n,e){this.id=n,this.links=null,this.data=e}function hu(n,e){n.links?n.links.add(e):n.links=new Set([e])}function fu(n,e,t,i){this.fromId=n,this.toId=e,this.data=t,this.id=i}function wo(n,e){return n.toString()+"👉 "+e.toString()}const vx=sf(px);var ol={exports:{}},qr={exports:{}},lf=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const yx=lf;var sr=function(e){return t;function t(i,r){let o=r&&r.indent||0,a=r&&r.join!==void 0?r.join:`
`,s=Array(o+1).join(" "),l=[];for(let c=0;c<e;++c){let u=yx(c),h=c===0?"":s;l.push(h+i.replace(/{var}/g,u))}return l.join(a)}};const cf=sr;qr.exports=xx;qr.exports.generateCreateBodyFunctionBody=uf;qr.exports.getVectorCode=ff;qr.exports.getBodyCode=hf;function xx(n,e){let t=uf(n,e),{Body:i}=new Function(t)();return i}function uf(n,e){return`
${ff(n,e)}
${hf(n)}
return {Body: Body, Vector: Vector};
`}function hf(n){let e=cf(n),t=e("{var}",{join:", "});return`
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
};`}function ff(n,e){let t=cf(n),i="";return e&&(i=`${t(`
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
  };`}var bx=qr.exports,Zn={exports:{}};const al=sr,Hn=lf;Zn.exports=Mx;Zn.exports.generateQuadTreeFunctionBody=df;Zn.exports.getInsertStackCode=vf;Zn.exports.getQuadNodeCode=_f;Zn.exports.isSamePosition=pf;Zn.exports.getChildBodyCode=gf;Zn.exports.setChildBodyCode=mf;function Mx(n){let e=df(n);return new Function(e)()}function df(n){let e=al(n),t=Math.pow(2,n);return`
${vf()}
${_f(n)}
${pf(n)}
${gf(n)}
${mf(n)}

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
        if ((node.max_${Hn(0)} - node.min_${Hn(0)}) / r < theta) {
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

`;function r(s){let l=[],c=Array(s+1).join(" ");for(let u=0;u<n;++u)l.push(c+`if (${Hn(u)} > max_${Hn(u)}) {`),l.push(c+`  quadIdx = quadIdx + ${Math.pow(2,u)};`),l.push(c+`  min_${Hn(u)} = max_${Hn(u)};`),l.push(c+`  max_${Hn(u)} = node.max_${Hn(u)};`),l.push(c+"}");return l.join(`
`)}function o(){let s=Array(11).join(" "),l=[];for(let c=0;c<t;++c)l.push(s+`if (node.quad${c}) {`),l.push(s+`  queue[pushIdx] = node.quad${c};`),l.push(s+"  queueLength += 1;"),l.push(s+"  pushIdx += 1;"),l.push(s+"}");return l.join(`
`)}function a(s){let l=[];for(let c=0;c<t;++c)l.push(`${s}quad${c} = null;`);return l.join(`
`)}}function pf(n){let e=al(n);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function mf(n){var e=Math.pow(2,n);return`
function setChild(node, idx, child) {
  ${t()}
}`;function t(){let i=[];for(let r=0;r<e;++r){let o=r===0?"  ":"  else ";i.push(`${o}if (idx === ${r}) node.quad${r} = child;`)}return i.join(`
`)}}function gf(n){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let t=[],i=Math.pow(2,n);for(let r=0;r<i;++r)t.push(`  if (idx === ${r}) return node.quad${r};`);return t.join(`
`)}}function _f(n){let e=al(n),t=Math.pow(2,n);var i=`
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
`)}}function vf(){return`
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
`}var Sx=Zn.exports,sl={exports:{}};sl.exports=wx;sl.exports.generateFunctionBody=yf;const Ex=sr;function wx(n){let e=yf(n);return new Function("bodies","settings","random",e)}function yf(n){let e=Ex(n);return`
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
`}var Tx=sl.exports,ll={exports:{}};const Ax=sr;ll.exports=Cx;ll.exports.generateCreateDragForceFunctionBody=xf;function Cx(n){let e=xf(n);return new Function("options",e)}function xf(n){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${Ax(n)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var Rx=ll.exports,cl={exports:{}};const Px=sr;cl.exports=Lx;cl.exports.generateCreateSpringForceFunctionBody=bf;function Lx(n){let e=bf(n);return new Function("options","random",e)}function bf(n){let e=Px(n);return`
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
`}var Ox=cl.exports,ul={exports:{}};const Dx=sr;ul.exports=Ix;ul.exports.generateIntegratorFunctionBody=Mf;function Ix(n){let e=Mf(n);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function Mf(n){let e=Dx(n);return`
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
`}var Ux=ul.exports,Ka,du;function Nx(){if(du)return Ka;du=1,Ka=n;function n(e,t,i,r){this.from=e,this.to=t,this.length=i,this.coefficient=r}return Ka}var Za,pu;function Fx(){if(pu)return Za;pu=1,Za=n;function n(e,t){var i;if(e||(e={}),t){for(i in t)if(t.hasOwnProperty(i)){var r=e.hasOwnProperty(i),o=typeof t[i],a=!r||typeof e[i]!==o;a?e[i]=t[i]:o==="object"&&(e[i]=n(e[i],t[i]))}}return e}return Za}var vr={exports:{}},mu;function kx(){if(mu)return vr.exports;mu=1,vr.exports=n,vr.exports.random=n,vr.exports.randomIterator=s;function n(l){var c=typeof l=="number"?l:+new Date;return new e(c)}function e(l){this.seed=l}e.prototype.next=a,e.prototype.nextDouble=o,e.prototype.uniform=o,e.prototype.gaussian=t;function t(){var l,c,u;do c=this.nextDouble()*2-1,u=this.nextDouble()*2-1,l=c*c+u*u;while(l>=1||l===0);return c*Math.sqrt(-2*Math.log(l)/l)}e.prototype.levy=i;function i(){var l=1.5,c=Math.pow(r(1+l)*Math.sin(Math.PI*l/2)/(r((1+l)/2)*l*Math.pow(2,(l-1)/2)),1/l);return this.gaussian()*c/Math.pow(Math.abs(this.gaussian()),1/l)}function r(l){return Math.sqrt(2*Math.PI/l)*Math.pow(1/Math.E*(l+1/(12*l-1/(10*l))),l)}function o(){var l=this.seed;return l=l+2127912214+(l<<12)&4294967295,l=(l^3345072700^l>>>19)&4294967295,l=l+374761393+(l<<5)&4294967295,l=(l+3550635116^l<<9)&4294967295,l=l+4251993797+(l<<3)&4294967295,l=(l^3042594569^l>>>16)&4294967295,this.seed=l,(l&268435455)/268435456}function a(l){return Math.floor(this.nextDouble()*l)}function s(l,c){var u=c||n();if(typeof u.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:f,shuffle:h};function h(){var p,g,_;for(p=l.length-1;p>0;--p)g=u.next(p+1),_=l[g],l[g]=l[p],l[p]=_;return l}function f(p){var g,_,m;for(g=l.length-1;g>0;--g)_=u.next(g+1),m=l[_],l[_]=l[g],l[g]=m,p(m);l.length&&p(l[0])}}return vr.exports}var Sf=jx,Bx=bx,zx=Sx,Hx=Tx,Gx=Rx,Vx=Ox,Wx=Ux,gu={};function jx(n){var e=Nx(),t=Fx(),i=rl;if(n){if(n.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(n.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}n=t(n,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var r=gu[n.dimensions];if(!r){var o=n.dimensions;r={Body:Bx(o,n.debug),createQuadTree:zx(o),createBounds:Hx(o),createDragForce:Gx(o),createSpringForce:Vx(o),integrate:Wx(o)},gu[o]=r}var a=r.Body,s=r.createQuadTree,l=r.createBounds,c=r.createDragForce,u=r.createSpringForce,h=r.integrate,f=P=>new a(P),p=kx().random(42),g=[],_=[],m=s(n,p),d=l(g,n,p),b=u(n,p),v=c(n),x=0,y=[],S=new Map,A=0;w("nbody",F),w("spring",L);var T={bodies:g,quadTree:m,springs:_,settings:n,addForce:w,removeForce:z,getForces:V,step:function(){for(var P=0;P<y.length;++P)y[P](A);var k=h(g,n.timeStep,n.adaptiveTimeStepWeight);return A+=1,k},addBody:function(P){if(!P)throw new Error("Body is required");return g.push(P),P},addBodyAt:function(P){if(!P)throw new Error("Body position is required");var k=f(P);return g.push(k),k},removeBody:function(P){if(P){var k=g.indexOf(P);if(!(k<0))return g.splice(k,1),g.length===0&&d.reset(),!0}},addSpring:function(P,k,q,Z){if(!P||!k)throw new Error("Cannot add null spring to force simulator");typeof q!="number"&&(q=-1);var ae=new e(P,k,q,Z>=0?Z:-1);return _.push(ae),ae},getTotalMovement:function(){return x},removeSpring:function(P){if(P){var k=_.indexOf(P);if(k>-1)return _.splice(k,1),!0}},getBestNewBodyPosition:function(P){return d.getBestNewPosition(P)},getBBox:M,getBoundingBox:M,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(P){return P!==void 0?(n.gravity=P,m.options({gravity:P}),this):n.gravity},theta:function(P){return P!==void 0?(n.theta=P,m.options({theta:P}),this):n.theta},random:p};return Xx(n,T),i(T),T;function M(){return d.update(),d.box}function w(P,k){if(S.has(P))throw new Error("Force "+P+" is already added");S.set(P,k),y.push(k)}function z(P){var k=y.indexOf(S.get(P));k<0||(y.splice(k,1),S.delete(P))}function V(){return S}function F(){if(g.length!==0){m.insertBodies(g);for(var P=g.length;P--;){var k=g[P];k.isPinned||(k.reset(),m.updateBodyForce(k),v.update(k))}}}function L(){for(var P=_.length;P--;)b.update(_[P])}}function Xx(n,e){for(var t in n)$x(n,e,t)}function $x(n,e,t){if(n.hasOwnProperty(t)&&typeof e[t]!="function"){var i=Number.isFinite(n[t]);i?e[t]=function(r){if(r!==void 0){if(!Number.isFinite(r))throw new Error("Value of "+t+" should be a valid number.");return n[t]=r,e}return n[t]}:e[t]=function(r){return r!==void 0?(n[t]=r,e):n[t]}}}ol.exports=Yx;ol.exports.simulator=Sf;var qx=rl;function Yx(n,e){if(!n)throw new Error("Graph structure cannot be undefined");var t=e&&e.createSimulator||Sf,i=t(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var r=n.version>19?F:V;e&&typeof e.nodeMass=="function"&&(r=e.nodeMass);var o=new Map,a={},s=0,l=i.settings.springTransform||Kx;v(),m();var c=!1,u={step:function(){if(s===0)return h(!0),!0;var L=i.step();u.lastMove=L,u.fire("step");var P=L/s,k=P<=.01;return h(k),k},getNodePosition:function(L){return z(L).pos},setNodePosition:function(L){var P=z(L);P.setPosition.apply(P,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(L){var P=a[L];if(P)return{from:P.from.pos,to:P.to.pos}},getGraphRect:function(){return i.getBBox()},forEachBody:f,pinNode:function(L,P){var k=z(L.id);k.isPinned=!!P},isNodePinned:function(L){return z(L.id).isPinned},dispose:function(){n.off("changed",b),u.fire("disposed")},getBody:_,getSpring:g,getForceVectorLength:p,simulator:i,graph:n,lastMove:0};return qx(u),u;function h(L){c!==L&&(c=L,d(L))}function f(L){o.forEach(L)}function p(){var L=0,P=0;return f(function(k){L+=Math.abs(k.force.x),P+=Math.abs(k.force.y)}),Math.sqrt(L*L+P*P)}function g(L,P){var k;if(P===void 0)typeof L!="object"?k=L:k=L.id;else{var q=n.hasLink(L,P);if(!q)return;k=q.id}return a[k]}function _(L){return o.get(L)}function m(){n.on("changed",b)}function d(L){u.fire("stable",L)}function b(L){for(var P=0;P<L.length;++P){var k=L[P];k.changeType==="add"?(k.node&&x(k.node.id),k.link&&S(k.link)):k.changeType==="remove"&&(k.node&&y(k.node),k.link&&A(k.link))}s=n.getNodesCount()}function v(){s=0,n.forEachNode(function(L){x(L.id),s+=1}),n.forEachLink(S)}function x(L){var P=o.get(L);if(!P){var k=n.getNode(L);if(!k)throw new Error("initBody() was called with unknown node id");var q=k.position;if(!q){var Z=T(k);q=i.getBestNewBodyPosition(Z)}P=i.addBodyAt(q),P.id=L,o.set(L,P),M(L),w(k)&&(P.isPinned=!0)}}function y(L){var P=L.id,k=o.get(P);k&&(o.delete(P),i.removeBody(k))}function S(L){M(L.fromId),M(L.toId);var P=o.get(L.fromId),k=o.get(L.toId),q=i.addSpring(P,k,L.length);l(L,q),a[L.id]=q}function A(L){var P=a[L.id];if(P){var k=n.getNode(L.fromId),q=n.getNode(L.toId);k&&M(k.id),q&&M(q.id),delete a[L.id],i.removeSpring(P)}}function T(L){var P=[];if(!L.links)return P;for(var k=Math.min(L.links.length,2),q=0;q<k;++q){var Z=L.links[q],ae=Z.fromId!==L.id?o.get(Z.fromId):o.get(Z.toId);ae&&ae.pos&&P.push(ae)}return P}function M(L){var P=o.get(L);if(P.mass=r(L),Number.isNaN(P.mass))throw new Error("Node mass should be a number")}function w(L){return L&&(L.isPinned||L.data&&L.data.isPinned)}function z(L){var P=o.get(L);return P||(x(L),P=o.get(L)),P}function V(L){var P=n.getLinks(L);return P?1+P.length/3:1}function F(L){var P=n.getLinks(L);return P?1+P.size/3:1}}function Kx(){}var Zx=ol.exports;const Jx=sf(Zx);var Qx=typeof global=="object"&&global&&global.Object===Object&&global;const eb=Qx;var tb=typeof self=="object"&&self&&self.Object===Object&&self,nb=eb||tb||Function("return this")();const Ef=nb;var ib=Ef.Symbol;const Vo=ib;var wf=Object.prototype,rb=wf.hasOwnProperty,ob=wf.toString,yr=Vo?Vo.toStringTag:void 0;function ab(n){var e=rb.call(n,yr),t=n[yr];try{n[yr]=void 0;var i=!0}catch{}var r=ob.call(n);return i&&(e?n[yr]=t:delete n[yr]),r}var sb=Object.prototype,lb=sb.toString;function cb(n){return lb.call(n)}var ub="[object Null]",hb="[object Undefined]",_u=Vo?Vo.toStringTag:void 0;function fb(n){return n==null?n===void 0?hb:ub:_u&&_u in Object(n)?ab(n):cb(n)}function db(n){return n!=null&&typeof n=="object"}var pb="[object Symbol]";function mb(n){return typeof n=="symbol"||db(n)&&fb(n)==pb}var gb=/\s/;function _b(n){for(var e=n.length;e--&&gb.test(n.charAt(e)););return e}var vb=/^\s+/;function yb(n){return n&&n.slice(0,_b(n)+1).replace(vb,"")}function Ms(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var vu=0/0,xb=/^[-+]0x[0-9a-f]+$/i,bb=/^0b[01]+$/i,Mb=/^0o[0-7]+$/i,Sb=parseInt;function yu(n){if(typeof n=="number")return n;if(mb(n))return vu;if(Ms(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=Ms(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=yb(n);var t=bb.test(n);return t||Mb.test(n)?Sb(n.slice(2),t?2:8):xb.test(n)?vu:+n}var Eb=function(){return Ef.Date.now()};const Ja=Eb;var wb="Expected a function",Tb=Math.max,Ab=Math.min;function Cb(n,e,t){var i,r,o,a,s,l,c=0,u=!1,h=!1,f=!0;if(typeof n!="function")throw new TypeError(wb);e=yu(e)||0,Ms(t)&&(u=!!t.leading,h="maxWait"in t,o=h?Tb(yu(t.maxWait)||0,e):o,f="trailing"in t?!!t.trailing:f);function p(S){var A=i,T=r;return i=r=void 0,c=S,a=n.apply(T,A),a}function g(S){return c=S,s=setTimeout(d,e),u?p(S):a}function _(S){var A=S-l,T=S-c,M=e-A;return h?Ab(M,o-T):M}function m(S){var A=S-l,T=S-c;return l===void 0||A>=e||A<0||h&&T>=o}function d(){var S=Ja();if(m(S))return b(S);s=setTimeout(d,_(S))}function b(S){return s=void 0,f&&i?p(S):(i=r=void 0,a)}function v(){s!==void 0&&clearTimeout(s),c=0,i=l=r=s=void 0}function x(){return s===void 0?a:b(Ja())}function y(){var S=Ja(),A=m(S);if(i=arguments,r=this,l=S,A){if(s===void 0)return g(l);if(h)return clearTimeout(s),s=setTimeout(d,e),p(l)}return s===void 0&&(s=setTimeout(d,e)),a}return y.cancel=v,y.flush=x,y}function Rb(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,a,s=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=o.call(t)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw r}}return s}}function Pb(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function xu(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,Fb(i.key),i)}}function Lb(n,e,t){return e&&xu(n.prototype,e),t&&xu(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function Ob(n,e){return Db(n)||Rb(n,e)||Ib(n,e)||Ub()}function Db(n){if(Array.isArray(n))return n}function Ib(n,e){if(n){if(typeof n=="string")return bu(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return bu(n,e)}}function bu(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Ub(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nb(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Fb(n){var e=Nb(n,"string");return typeof e=="symbol"?e:String(e)}var kb=Lb(function n(e,t){var i=t.default,r=i===void 0?null:i,o=t.triggerUpdate,a=o===void 0?!0:o,s=t.onChange,l=s===void 0?function(c,u){}:s;Pb(this,n),this.name=e,this.defaultVal=r,this.triggerUpdate=a,this.onChange=l});function hl(n){var e=n.stateInit,t=e===void 0?function(){return{}}:e,i=n.props,r=i===void 0?{}:i,o=n.methods,a=o===void 0?{}:o,s=n.aliases,l=s===void 0?{}:s,c=n.init,u=c===void 0?function(){}:c,h=n.update,f=h===void 0?function(){}:h,p=Object.keys(r).map(function(g){return new kb(g,r[g])});return function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},_=Object.assign({},t instanceof Function?t(g):t,{initialised:!1}),m={};function d(x){return b(x,g),v(),d}var b=function(y,S){u.call(d,y,_,S),_.initialised=!0},v=Cb(function(){_.initialised&&(f.call(d,_,m),m={})},1);return p.forEach(function(x){d[x.name]=y(x);function y(S){var A=S.name,T=S.triggerUpdate,M=T===void 0?!1:T,w=S.onChange,z=w===void 0?function(L,P){}:w,V=S.defaultVal,F=V===void 0?null:V;return function(L){var P=_[A];if(!arguments.length)return P;var k=L===void 0?F:L;return _[A]=k,z.call(d,k,_,P),!m.hasOwnProperty(A)&&(m[A]=P),M&&v(),d}}}),Object.keys(a).forEach(function(x){d[x]=function(){for(var y,S=arguments.length,A=new Array(S),T=0;T<S;T++)A[T]=arguments[T];return(y=a[x]).call.apply(y,[d,_].concat(A))}}),Object.entries(l).forEach(function(x){var y=Ob(x,2),S=y[0],A=y[1];return d[S]=d[A]}),d.resetProps=function(){return p.forEach(function(x){d[x.name](x.defaultVal)}),d},d.resetProps(),_._rerender=v,d}}var $e=function(n){return n instanceof Function?n:typeof n=="string"?function(e){return e[n]}:function(e){return n}};class Mu extends Map{constructor(e,t=Hb){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[i,r]of e)this.set(i,r)}get(e){return super.get(Su(this,e))}has(e){return super.has(Su(this,e))}set(e,t){return super.set(Bb(this,e),t)}delete(e){return super.delete(zb(this,e))}}function Su({_intern:n,_key:e},t){const i=e(t);return n.has(i)?n.get(i):t}function Bb({_intern:n,_key:e},t){const i=e(t);return n.has(i)?n.get(i):(n.set(i,t),t)}function zb({_intern:n,_key:e},t){const i=e(t);return n.has(i)&&(t=n.get(i),n.delete(i)),t}function Hb(n){return n!==null&&typeof n=="object"?n.valueOf():n}function Gb(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t<i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t<r||t===void 0&&r>=r)&&(t=r)}return t}function Vb(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t>i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t>r||t===void 0&&r>=r)&&(t=r)}return t}function Wb(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,a,s=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=o.call(t)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw r}}return s}}function jb(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function Xb(n,e){if(n==null)return{};var t=jb(n,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function $b(n,e){return Kb(n)||Wb(n,e)||Tf(n,e)||Qb()}function qb(n){return Yb(n)||Zb(n)||Tf(n)||Jb()}function Yb(n){if(Array.isArray(n))return Ss(n)}function Kb(n){if(Array.isArray(n))return n}function Zb(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Tf(n,e){if(n){if(typeof n=="string")return Ss(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ss(n,e)}}function Ss(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Jb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eM(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function tM(n){var e=eM(n,"string");return typeof e=="symbol"?e:String(e)}var Eu=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,r=(e instanceof Array?e.length?e:[void 0]:[e]).map(function(s){return{keyAccessor:s,isProp:!(s instanceof Function)}}),o=n.reduce(function(s,l){var c=s,u=l;return r.forEach(function(h,f){var p=h.keyAccessor,g=h.isProp,_;if(g){var m=u,d=m[p],b=Xb(m,[p].map(tM));_=d,u=b}else _=p(u,f);f+1<r.length?(c.hasOwnProperty(_)||(c[_]={}),c=c[_]):t?(c.hasOwnProperty(_)||(c[_]=[]),c[_].push(u)):c[_]=u}),s},{});t instanceof Function&&function s(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;c===r.length?Object.keys(l).forEach(function(u){return l[u]=t(l[u])}):Object.values(l).forEach(function(u){return s(u,c+1)})}(o);var a=o;return i&&(a=[],function s(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];c.length===r.length?a.push({keys:c,vals:l}):Object.entries(l).forEach(function(u){var h=$b(u,2),f=h[0],p=h[1];return s(p,[].concat(qb(c),[f]))})}(o),e instanceof Array&&e.length===0&&a.length===1&&(a[0].keys=[])),a};function nM(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,a,s=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=o.call(t)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw r}}return s}}function wu(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function iM(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?wu(Object(t),!0).forEach(function(i){Af(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):wu(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Af(n,e,t){return e=fM(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function rM(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function oM(n,e){if(n==null)return{};var t=rM(n,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Cf(n,e){return sM(n)||nM(n,e)||Rf(n,e)||uM()}function Wo(n){return aM(n)||lM(n)||Rf(n)||cM()}function aM(n){if(Array.isArray(n))return Es(n)}function sM(n){if(Array.isArray(n))return n}function lM(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Rf(n,e){if(n){if(typeof n=="string")return Es(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Es(n,e)}}function Es(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function cM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function uM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hM(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function fM(n){var e=hM(n,"string");return typeof e=="symbol"?e:String(e)}var dM=["createObj","updateObj","exitObj","objBindAttr","dataBindAttr"];function pM(n,e,t){var i={enter:[],update:[],exit:[]};if(t){var a=Eu(n,t,!1),s=Eu(e,t,!1),l=Object.assign({},a,s);Object.entries(l).forEach(function(c){var u=Cf(c,2),h=u[0],f=u[1],p=a.hasOwnProperty(h)?s.hasOwnProperty(h)?"update":"exit":"enter";i[p].push(p==="update"?[a[h],s[h]]:f)})}else{var r=new Set(n),o=new Set(e);new Set([].concat(Wo(r),Wo(o))).forEach(function(c){var u=r.has(c)?o.has(c)?"update":"exit":"enter";i[u].push(u==="update"?[c,c]:c)})}return i}function mM(n,e,t){var i=t.objBindAttr,r=i===void 0?"__obj":i,o=t.dataBindAttr,a=o===void 0?"__data":o,s=t.idAccessor,l=t.purge,c=l===void 0?!1:l,u=function(m){return m.hasOwnProperty(a)},h=e.filter(function(_){return!u(_)}),f=e.filter(u).map(function(_){return _[a]}),p=n,g=c?{enter:p,exit:f,update:[]}:pM(f,p,s);return g.update=g.update.map(function(_){var m=Cf(_,2),d=m[0],b=m[1];return d!==b&&(b[r]=d[r],b[r][a]=b),b}),g.exit=g.exit.concat(h.map(function(_){return Af({},r,_)})),g}function gM(n,e,t,i,r){var o=r.createObj,a=o===void 0?function(T){return{}}:o,s=r.updateObj,l=s===void 0?function(T,M){}:s,c=r.exitObj,u=c===void 0?function(T){}:c,h=r.objBindAttr,f=h===void 0?"__obj":h,p=r.dataBindAttr,g=p===void 0?"__data":p,_=oM(r,dM),m=mM(n,e,iM({objBindAttr:f,dataBindAttr:g},_)),d=m.enter,b=m.update,v=m.exit;v.forEach(function(T){var M=T[f];delete T[f],u(M),i(M)});var x=S(d),y=[].concat(Wo(d),Wo(b));A(y),x.forEach(t);function S(T){var M=[];return T.forEach(function(w){var z=a(w);z&&(z[g]=w,w[f]=z,M.push(z))}),M}function A(T){T.forEach(function(M){var w=M[f];w&&(w[g]=M,l(w,M))})}}function _M(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}const Tu=Symbol("implicit");function Pf(){var n=new Mu,e=[],t=[],i=Tu;function r(o){let a=n.get(o);if(a===void 0){if(i!==Tu)return i;n.set(o,a=e.push(o)-1)}return t[a%t.length]}return r.domain=function(o){if(!arguments.length)return e.slice();e=[],n=new Mu;for(const a of o)n.has(a)||n.set(a,e.push(a)-1);return r},r.range=function(o){return arguments.length?(t=Array.from(o),r):t.slice()},r.unknown=function(o){return arguments.length?(i=o,r):i},r.copy=function(){return Pf(e,t).unknown(i)},_M.apply(r,arguments),r}function vM(n){for(var e=n.length/6|0,t=new Array(e),i=0;i<e;)t[i]="#"+n.slice(i*6,++i*6);return t}const yM=vM("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");function jo(n){"@babel/helpers - typeof";return jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jo(n)}var xM=/^\s+/,bM=/\s+$/;function we(n,e){if(n=n||"",e=e||{},n instanceof we)return n;if(!(this instanceof we))return new we(n,e);var t=MM(n);this._originalInput=n,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}we.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),t,i,r,o,a,s;return t=e.r/255,i=e.g/255,r=e.b/255,t<=.03928?o=t/12.92:o=Math.pow((t+.055)/1.055,2.4),i<=.03928?a=i/12.92:a=Math.pow((i+.055)/1.055,2.4),r<=.03928?s=r/12.92:s=Math.pow((r+.055)/1.055,2.4),.2126*o+.7152*a+.0722*s},setAlpha:function(e){return this._a=Lf(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Cu(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Cu(this._r,this._g,this._b),t=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.v*100);return this._a==1?"hsv("+t+", "+i+"%, "+r+"%)":"hsva("+t+", "+i+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=Au(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Au(this._r,this._g,this._b),t=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.l*100);return this._a==1?"hsl("+t+", "+i+"%, "+r+"%)":"hsla("+t+", "+i+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return Ru(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return TM(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(tt(this._r,255)*100)+"%",g:Math.round(tt(this._g,255)*100)+"%",b:Math.round(tt(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(tt(this._r,255)*100)+"%, "+Math.round(tt(this._g,255)*100)+"%, "+Math.round(tt(this._b,255)*100)+"%)":"rgba("+Math.round(tt(this._r,255)*100)+"%, "+Math.round(tt(this._g,255)*100)+"%, "+Math.round(tt(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:kM[Ru(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var t="#"+Pu(this._r,this._g,this._b,this._a),i=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=we(e);i="#"+Pu(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+i+")"},toString:function(e){var t=!!e;e=e||this._format;var i=!1,r=this._a<1&&this._a>=0,o=!t&&r&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return o?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),i||this.toHexString())},clone:function(){return we(this.toString())},_applyModification:function(e,t){var i=e.apply(null,[this].concat([].slice.call(t)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(PM,arguments)},brighten:function(){return this._applyModification(LM,arguments)},darken:function(){return this._applyModification(OM,arguments)},desaturate:function(){return this._applyModification(AM,arguments)},saturate:function(){return this._applyModification(CM,arguments)},greyscale:function(){return this._applyModification(RM,arguments)},spin:function(){return this._applyModification(DM,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(NM,arguments)},complement:function(){return this._applyCombination(IM,arguments)},monochromatic:function(){return this._applyCombination(FM,arguments)},splitcomplement:function(){return this._applyCombination(UM,arguments)},triad:function(){return this._applyCombination(Lu,[3])},tetrad:function(){return this._applyCombination(Lu,[4])}};we.fromRatio=function(n,e){if(jo(n)=="object"){var t={};for(var i in n)n.hasOwnProperty(i)&&(i==="a"?t[i]=n[i]:t[i]=Cr(n[i]));n=t}return we(n,e)};function MM(n){var e={r:0,g:0,b:0},t=1,i=null,r=null,o=null,a=!1,s=!1;return typeof n=="string"&&(n=GM(n)),jo(n)=="object"&&(En(n.r)&&En(n.g)&&En(n.b)?(e=SM(n.r,n.g,n.b),a=!0,s=String(n.r).substr(-1)==="%"?"prgb":"rgb"):En(n.h)&&En(n.s)&&En(n.v)?(i=Cr(n.s),r=Cr(n.v),e=wM(n.h,i,r),a=!0,s="hsv"):En(n.h)&&En(n.s)&&En(n.l)&&(i=Cr(n.s),o=Cr(n.l),e=EM(n.h,i,o),a=!0,s="hsl"),n.hasOwnProperty("a")&&(t=n.a)),t=Lf(t),{ok:a,format:n.format||s,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}function SM(n,e,t){return{r:tt(n,255)*255,g:tt(e,255)*255,b:tt(t,255)*255}}function Au(n,e,t){n=tt(n,255),e=tt(e,255),t=tt(t,255);var i=Math.max(n,e,t),r=Math.min(n,e,t),o,a,s=(i+r)/2;if(i==r)o=a=0;else{var l=i-r;switch(a=s>.5?l/(2-i-r):l/(i+r),i){case n:o=(e-t)/l+(e<t?6:0);break;case e:o=(t-n)/l+2;break;case t:o=(n-e)/l+4;break}o/=6}return{h:o,s:a,l:s}}function EM(n,e,t){var i,r,o;n=tt(n,360),e=tt(e,100),t=tt(t,100);function a(c,u,h){return h<0&&(h+=1),h>1&&(h-=1),h<1/6?c+(u-c)*6*h:h<1/2?u:h<2/3?c+(u-c)*(2/3-h)*6:c}if(e===0)i=r=o=t;else{var s=t<.5?t*(1+e):t+e-t*e,l=2*t-s;i=a(l,s,n+1/3),r=a(l,s,n),o=a(l,s,n-1/3)}return{r:i*255,g:r*255,b:o*255}}function Cu(n,e,t){n=tt(n,255),e=tt(e,255),t=tt(t,255);var i=Math.max(n,e,t),r=Math.min(n,e,t),o,a,s=i,l=i-r;if(a=i===0?0:l/i,i==r)o=0;else{switch(i){case n:o=(e-t)/l+(e<t?6:0);break;case e:o=(t-n)/l+2;break;case t:o=(n-e)/l+4;break}o/=6}return{h:o,s:a,v:s}}function wM(n,e,t){n=tt(n,360)*6,e=tt(e,100),t=tt(t,100);var i=Math.floor(n),r=n-i,o=t*(1-e),a=t*(1-r*e),s=t*(1-(1-r)*e),l=i%6,c=[t,a,o,o,s,t][l],u=[s,t,t,a,o,o][l],h=[o,o,s,t,t,a][l];return{r:c*255,g:u*255,b:h*255}}function Ru(n,e,t,i){var r=[nn(Math.round(n).toString(16)),nn(Math.round(e).toString(16)),nn(Math.round(t).toString(16))];return i&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function TM(n,e,t,i,r){var o=[nn(Math.round(n).toString(16)),nn(Math.round(e).toString(16)),nn(Math.round(t).toString(16)),nn(Of(i))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function Pu(n,e,t,i){var r=[nn(Of(i)),nn(Math.round(n).toString(16)),nn(Math.round(e).toString(16)),nn(Math.round(t).toString(16))];return r.join("")}we.equals=function(n,e){return!n||!e?!1:we(n).toRgbString()==we(e).toRgbString()};we.random=function(){return we.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function AM(n,e){e=e===0?0:e||10;var t=we(n).toHsl();return t.s-=e/100,t.s=oa(t.s),we(t)}function CM(n,e){e=e===0?0:e||10;var t=we(n).toHsl();return t.s+=e/100,t.s=oa(t.s),we(t)}function RM(n){return we(n).desaturate(100)}function PM(n,e){e=e===0?0:e||10;var t=we(n).toHsl();return t.l+=e/100,t.l=oa(t.l),we(t)}function LM(n,e){e=e===0?0:e||10;var t=we(n).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),we(t)}function OM(n,e){e=e===0?0:e||10;var t=we(n).toHsl();return t.l-=e/100,t.l=oa(t.l),we(t)}function DM(n,e){var t=we(n).toHsl(),i=(t.h+e)%360;return t.h=i<0?360+i:i,we(t)}function IM(n){var e=we(n).toHsl();return e.h=(e.h+180)%360,we(e)}function Lu(n,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var t=we(n).toHsl(),i=[we(n)],r=360/e,o=1;o<e;o++)i.push(we({h:(t.h+o*r)%360,s:t.s,l:t.l}));return i}function UM(n){var e=we(n).toHsl(),t=e.h;return[we(n),we({h:(t+72)%360,s:e.s,l:e.l}),we({h:(t+216)%360,s:e.s,l:e.l})]}function NM(n,e,t){e=e||6,t=t||30;var i=we(n).toHsl(),r=360/t,o=[we(n)];for(i.h=(i.h-(r*e>>1)+720)%360;--e;)i.h=(i.h+r)%360,o.push(we(i));return o}function FM(n,e){e=e||6;for(var t=we(n).toHsv(),i=t.h,r=t.s,o=t.v,a=[],s=1/e;e--;)a.push(we({h:i,s:r,v:o})),o=(o+s)%1;return a}we.mix=function(n,e,t){t=t===0?0:t||50;var i=we(n).toRgb(),r=we(e).toRgb(),o=t/100,a={r:(r.r-i.r)*o+i.r,g:(r.g-i.g)*o+i.g,b:(r.b-i.b)*o+i.b,a:(r.a-i.a)*o+i.a};return we(a)};we.readability=function(n,e){var t=we(n),i=we(e);return(Math.max(t.getLuminance(),i.getLuminance())+.05)/(Math.min(t.getLuminance(),i.getLuminance())+.05)};we.isReadable=function(n,e,t){var i=we.readability(n,e),r,o;switch(o=!1,r=VM(t),r.level+r.size){case"AAsmall":case"AAAlarge":o=i>=4.5;break;case"AAlarge":o=i>=3;break;case"AAAsmall":o=i>=7;break}return o};we.mostReadable=function(n,e,t){var i=null,r=0,o,a,s,l;t=t||{},a=t.includeFallbackColors,s=t.level,l=t.size;for(var c=0;c<e.length;c++)o=we.readability(n,e[c]),o>r&&(r=o,i=we(e[c]));return we.isReadable(n,i,{level:s,size:l})||!a?i:(t.includeFallbackColors=!1,we.mostReadable(n,["#fff","#000"],t))};var ws=we.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},kM=we.hexNames=BM(ws);function BM(n){var e={};for(var t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function Lf(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function tt(n,e){zM(n)&&(n="100%");var t=HM(n);return n=Math.min(e,Math.max(0,parseFloat(n))),t&&(n=parseInt(n*e,10)/100),Math.abs(n-e)<1e-6?1:n%e/parseFloat(e)}function oa(n){return Math.min(1,Math.max(0,n))}function Bt(n){return parseInt(n,16)}function zM(n){return typeof n=="string"&&n.indexOf(".")!=-1&&parseFloat(n)===1}function HM(n){return typeof n=="string"&&n.indexOf("%")!=-1}function nn(n){return n.length==1?"0"+n:""+n}function Cr(n){return n<=1&&(n=n*100+"%"),n}function Of(n){return Math.round(parseFloat(n)*255).toString(16)}function Ou(n){return Bt(n)/255}var Jt=function(){var n="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",t="(?:"+e+")|(?:"+n+")",i="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+i),rgba:new RegExp("rgba"+r),hsl:new RegExp("hsl"+i),hsla:new RegExp("hsla"+r),hsv:new RegExp("hsv"+i),hsva:new RegExp("hsva"+r),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function En(n){return!!Jt.CSS_UNIT.exec(n)}function GM(n){n=n.replace(xM,"").replace(bM,"").toLowerCase();var e=!1;if(ws[n])n=ws[n],e=!0;else if(n=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=Jt.rgb.exec(n))?{r:t[1],g:t[2],b:t[3]}:(t=Jt.rgba.exec(n))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Jt.hsl.exec(n))?{h:t[1],s:t[2],l:t[3]}:(t=Jt.hsla.exec(n))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Jt.hsv.exec(n))?{h:t[1],s:t[2],v:t[3]}:(t=Jt.hsva.exec(n))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Jt.hex8.exec(n))?{r:Bt(t[1]),g:Bt(t[2]),b:Bt(t[3]),a:Ou(t[4]),format:e?"name":"hex8"}:(t=Jt.hex6.exec(n))?{r:Bt(t[1]),g:Bt(t[2]),b:Bt(t[3]),format:e?"name":"hex"}:(t=Jt.hex4.exec(n))?{r:Bt(t[1]+""+t[1]),g:Bt(t[2]+""+t[2]),b:Bt(t[3]+""+t[3]),a:Ou(t[4]+""+t[4]),format:e?"name":"hex8"}:(t=Jt.hex3.exec(n))?{r:Bt(t[1]+""+t[1]),g:Bt(t[2]+""+t[2]),b:Bt(t[3]+""+t[3]),format:e?"name":"hex"}:!1}function VM(n){var e,t;return n=n||{level:"AA",size:"small"},e=(n.level||"AA").toUpperCase(),t=(n.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:e,size:t}}function WM(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,a,s=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=o.call(t)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw r}}return s}}function Du(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Df(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Du(Object(t),!0).forEach(function(i){fl(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Du(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Ts(n){"@babel/helpers - typeof";return Ts=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ts(n)}function jM(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Iu(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,Ff(i.key),i)}}function XM(n,e,t){return e&&Iu(n.prototype,e),t&&Iu(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function fl(n,e,t){return e=Ff(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function $M(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&$o(n,e)}function Xo(n){return Xo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Xo(n)}function $o(n,e){return $o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},$o(n,e)}function If(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Uo(n,e,t){return If()?Uo=Reflect.construct.bind():Uo=function(r,o,a){var s=[null];s.push.apply(s,o);var l=Function.bind.apply(r,s),c=new l;return a&&$o(c,a.prototype),c},Uo.apply(null,arguments)}function qM(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function YM(n,e){if(n==null)return{};var t=qM(n,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Uf(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function KM(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Uf(n)}function ZM(n){var e=If();return function(){var i=Xo(n),r;if(e){var o=Xo(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return KM(this,r)}}function Uu(n,e){return QM(n)||WM(n,e)||Nf(n,e)||nS()}function Qt(n){return JM(n)||eS(n)||Nf(n)||tS()}function JM(n){if(Array.isArray(n))return As(n)}function QM(n){if(Array.isArray(n))return n}function eS(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Nf(n,e){if(n){if(typeof n=="string")return As(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return As(n,e)}}function As(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function tS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function iS(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Ff(n){var e=iS(n,"string");return typeof e=="symbol"?e:String(e)}var rS=function n(e){e instanceof Array?e.forEach(n):(e.map&&e.map.dispose(),e.dispose())},oS=function n(e){e.geometry&&e.geometry.dispose(),e.material&&rS(e.material),e.texture&&e.texture.dispose(),e.children&&e.children.forEach(n)},Cs=function(e){for(;e.children.length;){var t=e.children[0];e.remove(t),oS(t)}},aS=["objFilter"];function xr(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.objFilter,r=i===void 0?function(){return!0}:i,o=YM(t,aS);return gM(n,e.children.filter(r),function(a){return e.add(a)},function(a){e.remove(a),Cs(a)},Df({objBindAttr:"__threeObj"},o))}var br=function(e){return isNaN(e)?parseInt(we(e).toHex(),16):e},Qa=function(e){return isNaN(e)?we(e).getAlpha():1},sS=Pf(yM);function Nu(n,e,t){!e||typeof t!="string"||n.filter(function(i){return!i[t]}).forEach(function(i){i[t]=sS(e(i))})}function lS(n,e){var t=n.nodes,i=n.links,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=r.nodeFilter,a=o===void 0?function(){return!0}:o,s=r.onLoopError,l=s===void 0?function(p){throw"Invalid DAG structure! Found cycle in node path: ".concat(p.join(" -> "),".")}:s,c={};t.forEach(function(p){return c[e(p)]={data:p,out:[],depth:-1,skip:!a(p)}}),i.forEach(function(p){var g=p.source,_=p.target,m=x(g),d=x(_);if(!c.hasOwnProperty(m))throw"Missing source node with id: ".concat(m);if(!c.hasOwnProperty(d))throw"Missing target node with id: ".concat(d);var b=c[m],v=c[d];b.out.push(v);function x(y){return Ts(y)==="object"?e(y):y}});var u=[];f(Object.values(c));var h=Object.assign.apply(Object,[{}].concat(Qt(Object.entries(c).filter(function(p){var g=Uu(p,2),_=g[1];return!_.skip}).map(function(p){var g=Uu(p,2),_=g[0],m=g[1];return fl({},_,m.depth)}))));return h;function f(p){for(var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],_=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,m=function(){var y=p[d];if(g.indexOf(y)!==-1){var S=[].concat(Qt(g.slice(g.indexOf(y))),[y]).map(function(A){return e(A.data)});return u.some(function(A){return A.length===S.length&&A.every(function(T,M){return T===S[M]})})||(u.push(S),l(S)),"continue"}_>y.depth&&(y.depth=_,f(y.out,[].concat(Qt(g),[y]),_+(y.skip?0:1)))},d=0,b=p.length;d<b;d++)var v=m()}}var Pe=window.THREE?window.THREE:{Group:Xi,Mesh:bt,MeshLambertMaterial:Wh,Color:He,BufferGeometry:Dt,BufferAttribute:Xt,Matrix4:nt,Vector3:D,SphereGeometry:$r,CylinderGeometry:ia,TubeGeometry:el,ConeGeometry:Qs,Line:E0,LineBasicMaterial:Hh,QuadraticBezierCurve3:Js,CubicBezierCurve3:Vh,Box3:gi},Fu={graph:vx,forcelayout:Jx},cS=2,ku=new Pe.BufferGeometry().setAttribute?"setAttribute":"addAttribute",To=new Pe.BufferGeometry().applyMatrix4?"applyMatrix4":"applyMatrix",uS=hl({props:{jsonUrl:{onChange:function(e,t){var i=this;e&&!t.fetchingJson&&(t.fetchingJson=!0,t.onLoading(),fetch(e).then(function(r){return r.json()}).then(function(r){t.fetchingJson=!1,t.onFinishLoading(r),i.graphData(r)}))},triggerUpdate:!1},graphData:{default:{nodes:[],links:[]},onChange:function(e,t){t.engineRunning=!1}},numDimensions:{default:3,onChange:function(e,t){var i=t.d3ForceLayout.force("charge");i&&i.strength(e>2?-60:-30),e<3&&r(t.graphData.nodes,"z"),e<2&&r(t.graphData.nodes,"y");function r(o,a){o.forEach(function(s){delete s[a],delete s["v".concat(a)]})}}},dagMode:{onChange:function(e,t){!e&&t.forceEngine==="d3"&&(t.graphData.nodes||[]).forEach(function(i){return i.fx=i.fy=i.fz=void 0})}},dagLevelDistance:{},dagNodeFilter:{default:function(e){return!0}},onDagError:{triggerUpdate:!1},nodeRelSize:{default:4},nodeId:{default:"id"},nodeVal:{default:"val"},nodeResolution:{default:8},nodeColor:{default:"color"},nodeAutoColorBy:{},nodeOpacity:{default:.75},nodeVisibility:{default:!0},nodeThreeObject:{},nodeThreeObjectExtend:{default:!1},nodePositionUpdate:{triggerUpdate:!1},linkSource:{default:"source"},linkTarget:{default:"target"},linkVisibility:{default:!0},linkColor:{default:"color"},linkAutoColorBy:{},linkOpacity:{default:.2},linkWidth:{},linkResolution:{default:6},linkCurvature:{default:0,triggerUpdate:!1},linkCurveRotation:{default:0,triggerUpdate:!1},linkMaterial:{},linkThreeObject:{},linkThreeObjectExtend:{default:!1},linkPositionUpdate:{triggerUpdate:!1},linkDirectionalArrowLength:{default:0},linkDirectionalArrowColor:{},linkDirectionalArrowRelPos:{default:.5,triggerUpdate:!1},linkDirectionalArrowResolution:{default:8},linkDirectionalParticles:{default:0},linkDirectionalParticleSpeed:{default:.01,triggerUpdate:!1},linkDirectionalParticleWidth:{default:.5},linkDirectionalParticleColor:{},linkDirectionalParticleResolution:{default:4},forceEngine:{default:"d3"},d3AlphaMin:{default:0},d3AlphaDecay:{default:.0228,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaDecay(e)}},d3AlphaTarget:{default:0,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaTarget(e)}},d3VelocityDecay:{default:.4,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.velocityDecay(e)}},ngraphPhysics:{default:{timeStep:20,gravity:-1.2,theta:.8,springLength:30,springCoefficient:8e-4,dragCoefficient:.02}},warmupTicks:{default:0,triggerUpdate:!1},cooldownTicks:{default:1/0,triggerUpdate:!1},cooldownTime:{default:15e3,triggerUpdate:!1},onLoading:{default:function(){},triggerUpdate:!1},onFinishLoading:{default:function(){},triggerUpdate:!1},onUpdate:{default:function(){},triggerUpdate:!1},onFinishUpdate:{default:function(){},triggerUpdate:!1},onEngineTick:{default:function(){},triggerUpdate:!1},onEngineStop:{default:function(){},triggerUpdate:!1}},methods:{refresh:function(e){return e._flushObjects=!0,e._rerender(),this},d3Force:function(e,t,i){return i===void 0?e.d3ForceLayout.force(t):(e.d3ForceLayout.force(t,i),this)},d3ReheatSimulation:function(e){return e.d3ForceLayout.alpha(1),this.resetCountdown(),this},resetCountdown:function(e){return e.cntTicks=0,e.startTickTime=new Date,e.engineRunning=!0,this},tickFrame:function(e){var t=e.forceEngine!=="ngraph";return e.engineRunning&&i(),r(),o(),this;function i(){++e.cntTicks>e.cooldownTicks||new Date-e.startTickTime>e.cooldownTime||t&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin?(e.engineRunning=!1,e.onEngineStop()):(e.layout[t?"tick":"step"](),e.onEngineTick());var a=$e(e.nodeThreeObjectExtend);e.graphData.nodes.forEach(function(f){var p=f.__threeObj;if(p){var g=t?f:e.layout.getNodePosition(f[e.nodeId]),_=a(f);(!e.nodePositionUpdate||!e.nodePositionUpdate(_?p.children[0]:p,{x:g.x,y:g.y,z:g.z},f)||_)&&(p.position.x=g.x,p.position.y=g.y||0,p.position.z=g.z||0)}});var s=$e(e.linkWidth),l=$e(e.linkCurvature),c=$e(e.linkCurveRotation),u=$e(e.linkThreeObjectExtend);e.graphData.links.forEach(function(f){var p=f.__lineObj;if(p){var g=t?f:e.layout.getLinkPosition(e.layout.graph.getLink(f.source,f.target).id),_=g[t?"source":"from"],m=g[t?"target":"to"];if(!(!_||!m||!_.hasOwnProperty("x")||!m.hasOwnProperty("x"))){h(f);var d=u(f);if(!(e.linkPositionUpdate&&e.linkPositionUpdate(d?p.children[1]:p,{start:{x:_.x,y:_.y,z:_.z},end:{x:m.x,y:m.y,z:m.z}},f)&&!d)){var b=30,v=f.__curve,x=p.children.length?p.children[0]:p;if(x.type==="Line"){if(v)x.geometry.setFromPoints(v.getPoints(b));else{var y=x.geometry.getAttribute("position");(!y||!y.array||y.array.length!==6)&&x.geometry[ku]("position",y=new Pe.BufferAttribute(new Float32Array(2*3),3)),y.array[0]=_.x,y.array[1]=_.y||0,y.array[2]=_.z||0,y.array[3]=m.x,y.array[4]=m.y||0,y.array[5]=m.z||0,y.needsUpdate=!0}x.geometry.computeBoundingSphere()}else if(x.type==="Mesh")if(v){x.geometry.type.match(/^Tube(Buffer)?Geometry$/)||(x.position.set(0,0,0),x.rotation.set(0,0,0),x.scale.set(1,1,1));var V=Math.ceil(s(f)*10)/10,F=V/2,L=new Pe.TubeGeometry(v,b,F,e.linkResolution,!1);x.geometry.dispose(),x.geometry=L}else{if(!x.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)){var S=Math.ceil(s(f)*10)/10,A=S/2,T=new Pe.CylinderGeometry(A,A,1,e.linkResolution,1,!1);T[To](new Pe.Matrix4().makeTranslation(0,1/2,0)),T[To](new Pe.Matrix4().makeRotationX(Math.PI/2)),x.geometry.dispose(),x.geometry=T}var M=new Pe.Vector3(_.x,_.y||0,_.z||0),w=new Pe.Vector3(m.x,m.y||0,m.z||0),z=M.distanceTo(w);x.position.x=M.x,x.position.y=M.y,x.position.z=M.z,x.scale.z=z,x.parent.localToWorld(w),x.lookAt(w)}}}}});function h(f){var p=t?f:e.layout.getLinkPosition(e.layout.graph.getLink(f.source,f.target).id),g=p[t?"source":"from"],_=p[t?"target":"to"];if(!(!g||!_||!g.hasOwnProperty("x")||!_.hasOwnProperty("x"))){var m=l(f);if(!m)f.__curve=null;else{var d=new Pe.Vector3(g.x,g.y||0,g.z||0),b=new Pe.Vector3(_.x,_.y||0,_.z||0),v=d.distanceTo(b),x,y=c(f);if(v>0){var S=_.x-g.x,A=_.y-g.y||0,T=new Pe.Vector3().subVectors(b,d),M=T.clone().multiplyScalar(m).cross(S!==0||A!==0?new Pe.Vector3(0,0,1):new Pe.Vector3(0,1,0)).applyAxisAngle(T.normalize(),y).add(new Pe.Vector3().addVectors(d,b).divideScalar(2));x=new Pe.QuadraticBezierCurve3(d,M,b)}else{var w=m*70,z=-y,V=z+Math.PI/2;x=new Pe.CubicBezierCurve3(d,new Pe.Vector3(w*Math.cos(V),w*Math.sin(V),0).add(d),new Pe.Vector3(w*Math.cos(z),w*Math.sin(z),0).add(d),b)}f.__curve=x}}}}function r(){var a=$e(e.linkDirectionalArrowRelPos),s=$e(e.linkDirectionalArrowLength),l=$e(e.nodeVal);e.graphData.links.forEach(function(c){var u=c.__arrowObj;if(u){var h=t?c:e.layout.getLinkPosition(e.layout.graph.getLink(c.source,c.target).id),f=h[t?"source":"from"],p=h[t?"target":"to"];if(!(!f||!p||!f.hasOwnProperty("x")||!p.hasOwnProperty("x"))){var g=Math.cbrt(Math.max(0,l(f)||1))*e.nodeRelSize,_=Math.cbrt(Math.max(0,l(p)||1))*e.nodeRelSize,m=s(c),d=a(c),b=c.__curve?function(T){return c.__curve.getPoint(T)}:function(T){var M=function(z,V,F,L){return V[z]+(F[z]-V[z])*L||0};return{x:M("x",f,p,T),y:M("y",f,p,T),z:M("z",f,p,T)}},v=c.__curve?c.__curve.getLength():Math.sqrt(["x","y","z"].map(function(T){return Math.pow((p[T]||0)-(f[T]||0),2)}).reduce(function(T,M){return T+M},0)),x=g+m+(v-g-_-m)*d,y=b(x/v),S=b((x-m)/v);["x","y","z"].forEach(function(T){return u.position[T]=S[T]});var A=Uo(Pe.Vector3,Qt(["x","y","z"].map(function(T){return y[T]})));u.parent.localToWorld(A),u.lookAt(A)}}})}function o(){var a=$e(e.linkDirectionalParticleSpeed);e.graphData.links.forEach(function(s){var l=s.__photonsObj&&s.__photonsObj.children,c=s.__singleHopPhotonsObj&&s.__singleHopPhotonsObj.children;if(!((!c||!c.length)&&(!l||!l.length))){var u=t?s:e.layout.getLinkPosition(e.layout.graph.getLink(s.source,s.target).id),h=u[t?"source":"from"],f=u[t?"target":"to"];if(!(!h||!f||!h.hasOwnProperty("x")||!f.hasOwnProperty("x"))){var p=a(s),g=s.__curve?function(m){return s.__curve.getPoint(m)}:function(m){var d=function(v,x,y,S){return x[v]+(y[v]-x[v])*S||0};return{x:d("x",h,f,m),y:d("y",h,f,m),z:d("z",h,f,m)}},_=[].concat(Qt(l||[]),Qt(c||[]));_.forEach(function(m,d){var b=m.parent.__linkThreeObjType==="singleHopPhotons";if(m.hasOwnProperty("__progressRatio")||(m.__progressRatio=b?0:d/l.length),m.__progressRatio+=p,m.__progressRatio>=1)if(!b)m.__progressRatio=m.__progressRatio%1;else{m.parent.remove(m),Cs(m);return}var v=m.__progressRatio,x=g(v);["x","y","z"].forEach(function(y){return m.position[y]=x[y]})})}}})}},emitParticle:function(e,t){if(t&&e.graphData.links.includes(t)){if(!t.__singleHopPhotonsObj){var i=new Pe.Group;i.__linkThreeObjType="singleHopPhotons",t.__singleHopPhotonsObj=i,e.graphScene.add(i)}var r=$e(e.linkDirectionalParticleWidth),o=Math.ceil(r(t)*10)/10/2,a=e.linkDirectionalParticleResolution,s=new Pe.SphereGeometry(o,a,a),l=$e(e.linkColor),c=$e(e.linkDirectionalParticleColor),u=c(t)||l(t)||"#f0f0f0",h=new Pe.Color(br(u)),f=e.linkOpacity*3,p=new Pe.MeshLambertMaterial({color:h,transparent:!0,opacity:f});t.__singleHopPhotonsObj.add(new Pe.Mesh(s,p))}return this},getGraphBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0};if(!e.initialised)return null;var i=function r(o){var a=[];if(o.geometry){o.geometry.computeBoundingBox();var s=new Pe.Box3;s.copy(o.geometry.boundingBox).applyMatrix4(o.matrixWorld),a.push(s)}return a.concat.apply(a,Qt((o.children||[]).filter(function(l){return!l.hasOwnProperty("__graphObjType")||l.__graphObjType==="node"&&t(l.__data)}).map(r)))}(e.graphScene);return i.length?Object.assign.apply(Object,Qt(["x","y","z"].map(function(r){return fl({},r,[Vb(i,function(o){return o.min[r]}),Gb(i,function(o){return o.max[r]})])}))):null}},stateInit:function(){return{d3ForceLayout:cx().force("link",qy()).force("charge",ux()).force("center",J0()).force("dagRadial",null).stop(),engineRunning:!1}},init:function(e,t){t.graphScene=e},update:function(e,t){var i=function(j){return j.some(function(ne){return t.hasOwnProperty(ne)})};if(e.engineRunning=!1,e.onUpdate(),e.nodeAutoColorBy!==null&&i(["nodeAutoColorBy","graphData","nodeColor"])&&Nu(e.graphData.nodes,$e(e.nodeAutoColorBy),e.nodeColor),e.linkAutoColorBy!==null&&i(["linkAutoColorBy","graphData","linkColor"])&&Nu(e.graphData.links,$e(e.linkAutoColorBy),e.linkColor),e._flushObjects||i(["graphData","nodeThreeObject","nodeThreeObjectExtend","nodeVal","nodeColor","nodeVisibility","nodeRelSize","nodeResolution","nodeOpacity"])){var r=$e(e.nodeThreeObject),o=$e(e.nodeThreeObjectExtend),a=$e(e.nodeVal),s=$e(e.nodeColor),l=$e(e.nodeVisibility),c={},u={};xr(e.graphData.nodes.filter(l),e.graphScene,{purge:e._flushObjects||i(["nodeThreeObject","nodeThreeObjectExtend"]),objFilter:function(j){return j.__graphObjType==="node"},createObj:function(j){var ne=r(j),U=o(j);ne&&e.nodeThreeObject===ne&&(ne=ne.clone());var J;return ne&&!U?J=ne:(J=new Pe.Mesh,J.__graphDefaultObj=!0,ne&&U&&J.add(ne)),J.__graphObjType="node",J},updateObj:function(j,ne){if(j.__graphDefaultObj){var U=a(ne)||1,J=Math.cbrt(U)*e.nodeRelSize,ce=e.nodeResolution;(!j.geometry.type.match(/^Sphere(Buffer)?Geometry$/)||j.geometry.parameters.radius!==J||j.geometry.parameters.widthSegments!==ce)&&(c.hasOwnProperty(U)||(c[U]=new Pe.SphereGeometry(J,ce,ce)),j.geometry.dispose(),j.geometry=c[U]);var Te=s(ne),_e=new Pe.Color(br(Te||"#ffffaa")),B=e.nodeOpacity*Qa(Te);(j.material.type!=="MeshLambertMaterial"||!j.material.color.equals(_e)||j.material.opacity!==B)&&(u.hasOwnProperty(Te)||(u[Te]=new Pe.MeshLambertMaterial({color:_e,transparent:!0,opacity:B})),j.material.dispose(),j.material=u[Te])}}})}if(e._flushObjects||i(["graphData","linkThreeObject","linkThreeObjectExtend","linkMaterial","linkColor","linkWidth","linkVisibility","linkResolution","linkOpacity","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution"])){var h=$e(e.linkThreeObject),f=$e(e.linkThreeObjectExtend),p=$e(e.linkMaterial),g=$e(e.linkVisibility),_=$e(e.linkColor),m=$e(e.linkWidth),d={},b={},v={},x=e.graphData.links.filter(g);if(xr(x,e.graphScene,{objBindAttr:"__lineObj",purge:e._flushObjects||i(["linkThreeObject","linkThreeObjectExtend","linkWidth"]),objFilter:function(j){return j.__graphObjType==="link"},exitObj:function(j){var ne=j.__data&&j.__data.__singleHopPhotonsObj;ne&&(ne.parent.remove(ne),Cs(ne),delete j.__data.__singleHopPhotonsObj)},createObj:function(j){var ne=h(j),U=f(j);ne&&e.linkThreeObject===ne&&(ne=ne.clone());var J;if(!ne||U){var ce=!!m(j);if(ce)J=new Pe.Mesh;else{var Te=new Pe.BufferGeometry;Te[ku]("position",new Pe.BufferAttribute(new Float32Array(2*3),3)),J=new Pe.Line(Te)}}var _e;return ne?U?(_e=new Pe.Group,_e.__graphDefaultObj=!0,_e.add(J),_e.add(ne)):_e=ne:(_e=J,_e.__graphDefaultObj=!0),_e.renderOrder=10,_e.__graphObjType="link",_e},updateObj:function(j,ne){if(j.__graphDefaultObj){var U=j.children.length?j.children[0]:j,J=Math.ceil(m(ne)*10)/10,ce=!!J;if(ce){var Te=J/2,_e=e.linkResolution;if(!U.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)||U.geometry.parameters.radiusTop!==Te||U.geometry.parameters.radialSegments!==_e){if(!d.hasOwnProperty(J)){var B=new Pe.CylinderGeometry(Te,Te,1,_e,1,!1);B[To](new Pe.Matrix4().makeTranslation(0,1/2,0)),B[To](new Pe.Matrix4().makeRotationX(Math.PI/2)),d[J]=B}U.geometry.dispose(),U.geometry=d[J]}}var Ze=p(ne);if(Ze)U.material=Ze;else{var ve=_(ne),Re=new Pe.Color(br(ve||"#f0f0f0")),Se=e.linkOpacity*Qa(ve),Ge=ce?"MeshLambertMaterial":"LineBasicMaterial";if(U.material.type!==Ge||!U.material.color.equals(Re)||U.material.opacity!==Se){var Ue=ce?b:v;Ue.hasOwnProperty(ve)||(Ue[ve]=new Pe[Ge]({color:Re,transparent:Se<1,opacity:Se,depthWrite:Se>=1})),U.material.dispose(),U.material=Ue[ve]}}}}}),e.linkDirectionalArrowLength||t.hasOwnProperty("linkDirectionalArrowLength")){var y=$e(e.linkDirectionalArrowLength),S=$e(e.linkDirectionalArrowColor);xr(x.filter(y),e.graphScene,{objBindAttr:"__arrowObj",objFilter:function(j){return j.__linkThreeObjType==="arrow"},createObj:function(){var j=new Pe.Mesh(void 0,new Pe.MeshLambertMaterial({transparent:!0}));return j.__linkThreeObjType="arrow",j},updateObj:function(j,ne){var U=y(ne),J=e.linkDirectionalArrowResolution;if(!j.geometry.type.match(/^Cone(Buffer)?Geometry$/)||j.geometry.parameters.height!==U||j.geometry.parameters.radialSegments!==J){var ce=new Pe.ConeGeometry(U*.25,U,J);ce.translate(0,U/2,0),ce.rotateX(Math.PI/2),j.geometry.dispose(),j.geometry=ce}var Te=S(ne)||_(ne)||"#f0f0f0";j.material.color=new Pe.Color(br(Te)),j.material.opacity=e.linkOpacity*3*Qa(Te)}})}if(e.linkDirectionalParticles||t.hasOwnProperty("linkDirectionalParticles")){var A=$e(e.linkDirectionalParticles),T=$e(e.linkDirectionalParticleWidth),M=$e(e.linkDirectionalParticleColor),w={},z={};xr(x.filter(A),e.graphScene,{objBindAttr:"__photonsObj",objFilter:function(j){return j.__linkThreeObjType==="photons"},createObj:function(){var j=new Pe.Group;return j.__linkThreeObjType="photons",j},updateObj:function(j,ne){var U=Math.round(Math.abs(A(ne))),J=!!j.children.length&&j.children[0],ce=Math.ceil(T(ne)*10)/10/2,Te=e.linkDirectionalParticleResolution,_e;J&&J.geometry.parameters.radius===ce&&J.geometry.parameters.widthSegments===Te?_e=J.geometry:(z.hasOwnProperty(ce)||(z[ce]=new Pe.SphereGeometry(ce,Te,Te)),_e=z[ce],J&&J.geometry.dispose());var B=M(ne)||_(ne)||"#f0f0f0",Ze=new Pe.Color(br(B)),ve=e.linkOpacity*3,Re;J&&J.material.color.equals(Ze)&&J.material.opacity===ve?Re=J.material:(w.hasOwnProperty(B)||(w[B]=new Pe.MeshLambertMaterial({color:Ze,transparent:!0,opacity:ve})),Re=w[B],J&&J.material.dispose()),xr(Qt(new Array(U)).map(function(Se,Ge){return{idx:Ge}}),j,{idAccessor:function(Ge){return Ge.idx},createObj:function(){return new Pe.Mesh(_e,Re)},updateObj:function(Ge){Ge.geometry=_e,Ge.material=Re}})}})}}if(e._flushObjects=!1,i(["graphData","nodeId","linkSource","linkTarget","numDimensions","forceEngine","dagMode","dagNodeFilter","dagLevelDistance"])){e.engineRunning=!1,e.graphData.links.forEach(function(W){W.source=W[e.linkSource],W.target=W[e.linkTarget]});var V=e.forceEngine!=="ngraph",F;if(V){(F=e.d3ForceLayout).stop().alpha(1).numDimensions(e.numDimensions).nodes(e.graphData.nodes);var L=e.d3ForceLayout.force("link");L&&L.id(function(W){return W[e.nodeId]}).links(e.graphData.links);var P=e.dagMode&&lS(e.graphData,function(W){return W[e.nodeId]},{nodeFilter:e.dagNodeFilter,onLoopError:e.onDagError||void 0}),k=Math.max.apply(Math,Qt(Object.values(P||[]))),q=e.dagLevelDistance||e.graphData.nodes.length/(k||1)*cS*(["radialin","radialout"].indexOf(e.dagMode)!==-1?.7:1);if(e.dagMode){var Z=function(j,ne){return function(U){return j?(P[U[e.nodeId]]-k/2)*q*(ne?-1:1):void 0}},ae=Z(["lr","rl"].indexOf(e.dagMode)!==-1,e.dagMode==="rl"),H=Z(["td","bu"].indexOf(e.dagMode)!==-1,e.dagMode==="td"),re=Z(["zin","zout"].indexOf(e.dagMode)!==-1,e.dagMode==="zout");e.graphData.nodes.filter(e.dagNodeFilter).forEach(function(W){W.fx=ae(W),W.fy=H(W),W.fz=re(W)})}e.d3ForceLayout.force("dagRadial",["radialin","radialout"].indexOf(e.dagMode)!==-1?hx(function(W){var j=P[W[e.nodeId]]||-1;return(e.dagMode==="radialin"?k-j:j)*q}).strength(function(W){return e.dagNodeFilter(W)?1:0}):null)}else{var N=Fu.graph();e.graphData.nodes.forEach(function(W){N.addNode(W[e.nodeId])}),e.graphData.links.forEach(function(W){N.addLink(W.source,W.target)}),F=Fu.forcelayout(N,Df({dimensions:e.numDimensions},e.ngraphPhysics)),F.graph=N}for(var te=0;te<e.warmupTicks&&!(V&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin);te++)F[V?"tick":"step"]();e.layout=F,this.resetCountdown()}e.engineRunning=!0,e.onFinishUpdate()}});function hS(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Object,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,i=function(r){$M(a,r);var o=ZM(a);function a(){var s;jM(this,a);for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];return s=o.call.apply(o,[this].concat(c)),s.__kapsuleInstance=n().apply(void 0,[].concat(Qt(t?[Uf(s)]:[]),c)),s}return XM(a)}(e);return Object.keys(n()).forEach(function(r){return i.prototype[r]=function(){var o,a=(o=this.__kapsuleInstance)[r].apply(o,arguments);return a===this.__kapsuleInstance?this:a}}),i}var fS=window.THREE?window.THREE:{Group:Xi},kf=hS(uS,fS.Group,!0);const es={type:"change"},ts={type:"start"},ns={type:"end"};class dS extends on{constructor(e,t){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:fn.ROTATE,MIDDLE:fn.DOLLY,RIGHT:fn.PAN},this.target=new D;const o=1e-6,a=new D;let s=1,l=r.NONE,c=r.NONE,u=0,h=0,f=0;const p=new D,g=new fe,_=new fe,m=new D,d=new fe,b=new fe,v=new fe,x=new fe,y=[],S={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const U=i.domElement.getBoundingClientRect(),J=i.domElement.ownerDocument.documentElement;i.screen.left=U.left+window.pageXOffset-J.clientLeft,i.screen.top=U.top+window.pageYOffset-J.clientTop,i.screen.width=U.width,i.screen.height=U.height};const A=function(){const U=new fe;return function(ce,Te){return U.set((ce-i.screen.left)/i.screen.width,(Te-i.screen.top)/i.screen.height),U}}(),T=function(){const U=new fe;return function(ce,Te){return U.set((ce-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-Te))/i.screen.width),U}}();this.rotateCamera=function(){const U=new D,J=new rn,ce=new D,Te=new D,_e=new D,B=new D;return function(){B.set(_.x-g.x,_.y-g.y,0);let ve=B.length();ve?(p.copy(i.object.position).sub(i.target),ce.copy(p).normalize(),Te.copy(i.object.up).normalize(),_e.crossVectors(Te,ce).normalize(),Te.setLength(_.y-g.y),_e.setLength(_.x-g.x),B.copy(Te.add(_e)),U.crossVectors(B,p).normalize(),ve*=i.rotateSpeed,J.setFromAxisAngle(U,ve),p.applyQuaternion(J),i.object.up.applyQuaternion(J),m.copy(U),f=ve):!i.staticMoving&&f&&(f*=Math.sqrt(1-i.dynamicDampingFactor),p.copy(i.object.position).sub(i.target),J.setFromAxisAngle(m,f),p.applyQuaternion(J),i.object.up.applyQuaternion(J)),g.copy(_)}}(),this.zoomCamera=function(){let U;l===r.TOUCH_ZOOM_PAN?(U=u/h,u=h,i.object.isPerspectiveCamera?p.multiplyScalar(U):i.object.isOrthographicCamera?(i.object.zoom=oc.clamp(i.object.zoom/U,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(U=1+(b.y-d.y)*i.zoomSpeed,U!==1&&U>0&&(i.object.isPerspectiveCamera?p.multiplyScalar(U):i.object.isOrthographicCamera?(i.object.zoom=oc.clamp(i.object.zoom/U,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?d.copy(b):d.y+=(b.y-d.y)*this.dynamicDampingFactor)},this.panCamera=function(){const U=new fe,J=new D,ce=new D;return function(){if(U.copy(x).sub(v),U.lengthSq()){if(i.object.isOrthographicCamera){const _e=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,B=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;U.x*=_e,U.y*=B}U.multiplyScalar(p.length()*i.panSpeed),ce.copy(p).cross(i.object.up).setLength(U.x),ce.add(J.copy(i.object.up).setLength(U.y)),i.object.position.add(ce),i.target.add(ce),i.staticMoving?v.copy(x):v.add(U.subVectors(x,v).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(p.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,p.setLength(i.maxDistance)),d.copy(b)),p.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,p.setLength(i.minDistance)),d.copy(b)))},this.update=function(){p.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,p),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),a.distanceToSquared(i.object.position)>o&&(i.dispatchEvent(es),a.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(a.distanceToSquared(i.object.position)>o||s!==i.object.zoom)&&(i.dispatchEvent(es),a.copy(i.object.position),s=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=r.NONE,c=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),p.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(es),a.copy(i.object.position),s=i.object.zoom};function M(U){i.enabled!==!1&&(y.length===0&&(i.domElement.setPointerCapture(U.pointerId),i.domElement.addEventListener("pointermove",w),i.domElement.addEventListener("pointerup",z)),te(U),U.pointerType==="touch"?ae(U):P(U))}function w(U){i.enabled!==!1&&(U.pointerType==="touch"?H(U):k(U))}function z(U){i.enabled!==!1&&(U.pointerType==="touch"?re(U):q(),W(U),y.length===0&&(i.domElement.releasePointerCapture(U.pointerId),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",z)))}function V(U){W(U)}function F(U){i.enabled!==!1&&(window.removeEventListener("keydown",F),c===r.NONE&&(U.code===i.keys[r.ROTATE]&&!i.noRotate?c=r.ROTATE:U.code===i.keys[r.ZOOM]&&!i.noZoom?c=r.ZOOM:U.code===i.keys[r.PAN]&&!i.noPan&&(c=r.PAN)))}function L(){i.enabled!==!1&&(c=r.NONE,window.addEventListener("keydown",F))}function P(U){if(l===r.NONE)switch(U.button){case i.mouseButtons.LEFT:l=r.ROTATE;break;case i.mouseButtons.MIDDLE:l=r.ZOOM;break;case i.mouseButtons.RIGHT:l=r.PAN;break}const J=c!==r.NONE?c:l;J===r.ROTATE&&!i.noRotate?(_.copy(T(U.pageX,U.pageY)),g.copy(_)):J===r.ZOOM&&!i.noZoom?(d.copy(A(U.pageX,U.pageY)),b.copy(d)):J===r.PAN&&!i.noPan&&(v.copy(A(U.pageX,U.pageY)),x.copy(v)),i.dispatchEvent(ts)}function k(U){const J=c!==r.NONE?c:l;J===r.ROTATE&&!i.noRotate?(g.copy(_),_.copy(T(U.pageX,U.pageY))):J===r.ZOOM&&!i.noZoom?b.copy(A(U.pageX,U.pageY)):J===r.PAN&&!i.noPan&&x.copy(A(U.pageX,U.pageY))}function q(){l=r.NONE,i.dispatchEvent(ns)}function Z(U){if(i.enabled!==!1&&i.noZoom!==!0){switch(U.preventDefault(),U.deltaMode){case 2:d.y-=U.deltaY*.025;break;case 1:d.y-=U.deltaY*.01;break;default:d.y-=U.deltaY*25e-5;break}i.dispatchEvent(ts),i.dispatchEvent(ns)}}function ae(U){switch(j(U),y.length){case 1:l=r.TOUCH_ROTATE,_.copy(T(y[0].pageX,y[0].pageY)),g.copy(_);break;default:l=r.TOUCH_ZOOM_PAN;const J=y[0].pageX-y[1].pageX,ce=y[0].pageY-y[1].pageY;h=u=Math.sqrt(J*J+ce*ce);const Te=(y[0].pageX+y[1].pageX)/2,_e=(y[0].pageY+y[1].pageY)/2;v.copy(A(Te,_e)),x.copy(v);break}i.dispatchEvent(ts)}function H(U){switch(j(U),y.length){case 1:g.copy(_),_.copy(T(U.pageX,U.pageY));break;default:const J=ne(U),ce=U.pageX-J.x,Te=U.pageY-J.y;h=Math.sqrt(ce*ce+Te*Te);const _e=(U.pageX+J.x)/2,B=(U.pageY+J.y)/2;x.copy(A(_e,B));break}}function re(U){switch(y.length){case 0:l=r.NONE;break;case 1:l=r.TOUCH_ROTATE,_.copy(T(U.pageX,U.pageY)),g.copy(_);break;case 2:l=r.TOUCH_ZOOM_PAN;for(let J=0;J<y.length;J++)if(y[J].pointerId!==U.pointerId){const ce=S[y[J].pointerId];_.copy(T(ce.x,ce.y)),g.copy(_);break}break}i.dispatchEvent(ns)}function N(U){i.enabled!==!1&&U.preventDefault()}function te(U){y.push(U)}function W(U){delete S[U.pointerId];for(let J=0;J<y.length;J++)if(y[J].pointerId==U.pointerId){y.splice(J,1);return}}function j(U){let J=S[U.pointerId];J===void 0&&(J=new fe,S[U.pointerId]=J),J.set(U.pageX,U.pageY)}function ne(U){const J=U.pointerId===y[0].pointerId?y[1]:y[0];return S[J.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",N),i.domElement.removeEventListener("pointerdown",M),i.domElement.removeEventListener("pointercancel",V),i.domElement.removeEventListener("wheel",Z),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",z),window.removeEventListener("keydown",F),window.removeEventListener("keyup",L)},this.domElement.addEventListener("contextmenu",N),this.domElement.addEventListener("pointerdown",M),this.domElement.addEventListener("pointercancel",V),this.domElement.addEventListener("wheel",Z,{passive:!1}),window.addEventListener("keydown",F),window.addEventListener("keyup",L),this.handleResize(),this.update()}}const Bu={type:"change"},is={type:"start"},zu={type:"end"};class pS extends on{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fn.ROTATE,MIDDLE:fn.DOLLY,RIGHT:fn.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",qe),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",qe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Bu),i.update(),o=r.NONE},this.update=function(){const O=new D,se=new rn().setFromUnitVectors(e.up,new D(0,1,0)),le=se.clone().invert(),K=new D,be=new rn,Ae=new D,Ee=2*Math.PI;return function(){const ye=i.object.position;O.copy(ye).sub(i.target),O.applyQuaternion(se),s.setFromVector3(O),i.autoRotate&&o===r.NONE&&M(A()),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Le=i.minAzimuthAngle,We=i.maxAzimuthAngle;return isFinite(Le)&&isFinite(We)&&(Le<-Math.PI?Le+=Ee:Le>Math.PI&&(Le-=Ee),We<-Math.PI?We+=Ee:We>Math.PI&&(We-=Ee),Le<=We?s.theta=Math.max(Le,Math.min(We,s.theta)):s.theta=s.theta>(Le+We)/2?Math.max(Le,s.theta):Math.min(We,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(i.minDistance,Math.min(i.maxDistance,s.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),O.setFromSpherical(s),O.applyQuaternion(le),ye.copy(i.target).add(O),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||K.distanceToSquared(i.object.position)>a||8*(1-be.dot(i.object.quaternion))>a||Ae.distanceToSquared(i.target)>0?(i.dispatchEvent(Bu),K.copy(i.object.position),be.copy(i.object.quaternion),Ae.copy(i.target),h=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",R),i.domElement.removeEventListener("pointerdown",ve),i.domElement.removeEventListener("pointercancel",Se),i.domElement.removeEventListener("wheel",Ie),i.domElement.removeEventListener("pointermove",Re),i.domElement.removeEventListener("pointerup",Se),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",qe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const a=1e-6,s=new ys,l=new ys;let c=1;const u=new D;let h=!1;const f=new fe,p=new fe,g=new fe,_=new fe,m=new fe,d=new fe,b=new fe,v=new fe,x=new fe,y=[],S={};function A(){return 2*Math.PI/60/60*i.autoRotateSpeed}function T(){return Math.pow(.95,i.zoomSpeed)}function M(O){l.theta-=O}function w(O){l.phi-=O}const z=function(){const O=new D;return function(le,K){O.setFromMatrixColumn(K,0),O.multiplyScalar(-le),u.add(O)}}(),V=function(){const O=new D;return function(le,K){i.screenSpacePanning===!0?O.setFromMatrixColumn(K,1):(O.setFromMatrixColumn(K,0),O.crossVectors(i.object.up,O)),O.multiplyScalar(le),u.add(O)}}(),F=function(){const O=new D;return function(le,K){const be=i.domElement;if(i.object.isPerspectiveCamera){const Ae=i.object.position;O.copy(Ae).sub(i.target);let Ee=O.length();Ee*=Math.tan(i.object.fov/2*Math.PI/180),z(2*le*Ee/be.clientHeight,i.object.matrix),V(2*K*Ee/be.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(z(le*(i.object.right-i.object.left)/i.object.zoom/be.clientWidth,i.object.matrix),V(K*(i.object.top-i.object.bottom)/i.object.zoom/be.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function L(O){i.object.isPerspectiveCamera?c/=O:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*O)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function P(O){i.object.isPerspectiveCamera?c*=O:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/O)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function k(O){f.set(O.clientX,O.clientY)}function q(O){b.set(O.clientX,O.clientY)}function Z(O){_.set(O.clientX,O.clientY)}function ae(O){p.set(O.clientX,O.clientY),g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const se=i.domElement;M(2*Math.PI*g.x/se.clientHeight),w(2*Math.PI*g.y/se.clientHeight),f.copy(p),i.update()}function H(O){v.set(O.clientX,O.clientY),x.subVectors(v,b),x.y>0?L(T()):x.y<0&&P(T()),b.copy(v),i.update()}function re(O){m.set(O.clientX,O.clientY),d.subVectors(m,_).multiplyScalar(i.panSpeed),F(d.x,d.y),_.copy(m),i.update()}function N(O){O.deltaY<0?P(T()):O.deltaY>0&&L(T()),i.update()}function te(O){let se=!1;switch(O.code){case i.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?w(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(0,i.keyPanSpeed),se=!0;break;case i.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?w(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(0,-i.keyPanSpeed),se=!0;break;case i.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?M(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(i.keyPanSpeed,0),se=!0;break;case i.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?M(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(-i.keyPanSpeed,0),se=!0;break}se&&(O.preventDefault(),i.update())}function W(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const O=.5*(y[0].pageX+y[1].pageX),se=.5*(y[0].pageY+y[1].pageY);f.set(O,se)}}function j(){if(y.length===1)_.set(y[0].pageX,y[0].pageY);else{const O=.5*(y[0].pageX+y[1].pageX),se=.5*(y[0].pageY+y[1].pageY);_.set(O,se)}}function ne(){const O=y[0].pageX-y[1].pageX,se=y[0].pageY-y[1].pageY,le=Math.sqrt(O*O+se*se);b.set(0,le)}function U(){i.enableZoom&&ne(),i.enablePan&&j()}function J(){i.enableZoom&&ne(),i.enableRotate&&W()}function ce(O){if(y.length==1)p.set(O.pageX,O.pageY);else{const le=ue(O),K=.5*(O.pageX+le.x),be=.5*(O.pageY+le.y);p.set(K,be)}g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const se=i.domElement;M(2*Math.PI*g.x/se.clientHeight),w(2*Math.PI*g.y/se.clientHeight),f.copy(p)}function Te(O){if(y.length===1)m.set(O.pageX,O.pageY);else{const se=ue(O),le=.5*(O.pageX+se.x),K=.5*(O.pageY+se.y);m.set(le,K)}d.subVectors(m,_).multiplyScalar(i.panSpeed),F(d.x,d.y),_.copy(m)}function _e(O){const se=ue(O),le=O.pageX-se.x,K=O.pageY-se.y,be=Math.sqrt(le*le+K*K);v.set(0,be),x.set(0,Math.pow(v.y/b.y,i.zoomSpeed)),L(x.y),b.copy(v)}function B(O){i.enableZoom&&_e(O),i.enablePan&&Te(O)}function Ze(O){i.enableZoom&&_e(O),i.enableRotate&&ce(O)}function ve(O){i.enabled!==!1&&(y.length===0&&(i.domElement.setPointerCapture(O.pointerId),i.domElement.addEventListener("pointermove",Re),i.domElement.addEventListener("pointerup",Se)),E(O),O.pointerType==="touch"?ut(O):Ge(O))}function Re(O){i.enabled!==!1&&(O.pointerType==="touch"?pt(O):Ue(O))}function Se(O){Q(O),y.length===0&&(i.domElement.releasePointerCapture(O.pointerId),i.domElement.removeEventListener("pointermove",Re),i.domElement.removeEventListener("pointerup",Se)),i.dispatchEvent(zu),o=r.NONE}function Ge(O){let se;switch(O.button){case 0:se=i.mouseButtons.LEFT;break;case 1:se=i.mouseButtons.MIDDLE;break;case 2:se=i.mouseButtons.RIGHT;break;default:se=-1}switch(se){case fn.DOLLY:if(i.enableZoom===!1)return;q(O),o=r.DOLLY;break;case fn.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(i.enablePan===!1)return;Z(O),o=r.PAN}else{if(i.enableRotate===!1)return;k(O),o=r.ROTATE}break;case fn.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(i.enableRotate===!1)return;k(O),o=r.ROTATE}else{if(i.enablePan===!1)return;Z(O),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(is)}function Ue(O){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;ae(O);break;case r.DOLLY:if(i.enableZoom===!1)return;H(O);break;case r.PAN:if(i.enablePan===!1)return;re(O);break}}function Ie(O){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(O.preventDefault(),i.dispatchEvent(is),N(O),i.dispatchEvent(zu))}function qe(O){i.enabled===!1||i.enablePan===!1||te(O)}function ut(O){switch(he(O),y.length){case 1:switch(i.touches.ONE){case vi.ROTATE:if(i.enableRotate===!1)return;W(),o=r.TOUCH_ROTATE;break;case vi.PAN:if(i.enablePan===!1)return;j(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case vi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;U(),o=r.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;J(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(is)}function pt(O){switch(he(O),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ce(O),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Te(O),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;B(O),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ze(O),i.update();break;default:o=r.NONE}}function R(O){i.enabled!==!1&&O.preventDefault()}function E(O){y.push(O)}function Q(O){delete S[O.pointerId];for(let se=0;se<y.length;se++)if(y[se].pointerId==O.pointerId){y.splice(se,1);return}}function he(O){let se=S[O.pointerId];se===void 0&&(se=new fe,S[O.pointerId]=se),se.set(O.pageX,O.pageY)}function ue(O){const se=O.pointerId===y[0].pointerId?y[1]:y[0];return S[se.pointerId]}i.domElement.addEventListener("contextmenu",R),i.domElement.addEventListener("pointerdown",ve),i.domElement.addEventListener("pointercancel",Se),i.domElement.addEventListener("wheel",Ie,{passive:!1}),this.update()}}const mS={type:"change"};class gS extends on{constructor(e,t){super(),this.object=e,this.domElement=t,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const i=this,r=1e-6,o=new rn,a=new D;this.tmpQuaternion=new rn,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new D(0,0,0),this.rotationVector=new D(0,0,0),this.keydown=function(f){if(!f.altKey){switch(f.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(f){switch(f.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()},this.pointerdown=function(f){if(this.dragToLook)this.status++;else{switch(f.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(f){if(!this.dragToLook||this.status>0){const p=this.getContainerDimensions(),g=p.size[0]/2,_=p.size[1]/2;this.moveState.yawLeft=-(f.pageX-p.offset[0]-g)/g,this.moveState.pitchDown=(f.pageY-p.offset[1]-_)/_,this.updateRotationVector()}},this.pointerup=function(f){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(f.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()},this.update=function(f){const p=f*i.movementSpeed,g=f*i.rollSpeed;i.object.translateX(i.moveVector.x*p),i.object.translateY(i.moveVector.y*p),i.object.translateZ(i.moveVector.z*p),i.tmpQuaternion.set(i.rotationVector.x*g,i.rotationVector.y*g,i.rotationVector.z*g,1).normalize(),i.object.quaternion.multiply(i.tmpQuaternion),(a.distanceToSquared(i.object.position)>r||8*(1-o.dot(i.object.quaternion))>r)&&(i.dispatchEvent(mS),o.copy(i.object.quaternion),a.copy(i.object.position))},this.updateMovementVector=function(){const f=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-f+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",Hu),this.domElement.removeEventListener("pointerdown",l),this.domElement.removeEventListener("pointermove",s),this.domElement.removeEventListener("pointerup",c),window.removeEventListener("keydown",u),window.removeEventListener("keyup",h)};const s=this.pointermove.bind(this),l=this.pointerdown.bind(this),c=this.pointerup.bind(this),u=this.keydown.bind(this),h=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",Hu),this.domElement.addEventListener("pointerdown",l),this.domElement.addEventListener("pointermove",s),this.domElement.addEventListener("pointerup",c),window.addEventListener("keydown",u),window.addEventListener("keyup",h),this.updateMovementVector(),this.updateRotationVector()}}function Hu(n){n.preventDefault()}const _S={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class aa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const vS=new Ys(-1,1,1,-1,0,1),dl=new Dt;dl.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3));dl.setAttribute("uv",new ot([0,2,0,0,2,0],2));class yS{constructor(e){this._mesh=new bt(dl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,vS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class xS extends aa{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof In?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ph.clone(e.uniforms),this.material=new In({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new yS(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Gu extends aa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,s;this.inverse?(a=0,s=1):(a=1,s=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),o.buffers.stencil.setClear(s),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class bS extends aa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class MS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new fe);this._width=i.width,this._height=i.height,t=new qn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:er}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xS(_S),this.clock=new $h}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,o=this.passes.length;r<o;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Gu!==void 0&&(a instanceof Gu?i=!0:a instanceof bS&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class SS extends aa{constructor(e,t,i,r,o){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o!==void 0?o:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new He}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let o,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),o=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,o),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=r}}function Rs(){return Rs=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Rs.apply(this,arguments)}function ES(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function jr(n,e){return jr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},jr(n,e)}function wS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,jr(n,e)}function Ps(n){return Ps=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ps(n)}function TS(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function AS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function No(n,e,t){return AS()?No=Reflect.construct.bind():No=function(r,o,a){var s=[null];s.push.apply(s,o);var l=Function.bind.apply(r,s),c=new l;return a&&jr(c,a.prototype),c},No.apply(null,arguments)}function Ls(n){var e=typeof Map=="function"?new Map:void 0;return Ls=function(i){if(i===null||!TS(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,r)}function r(){return No(i,arguments,Ps(this).constructor)}return r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),jr(r,i)},Ls(n)}var $i=function(n){wS(e,n);function e(t){var i;return i=n.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this,ES(i)}return e}(Ls(Error));function rs(n){return Math.round(n*255)}function CS(n,e,t){return rs(n)+","+rs(e)+","+rs(t)}function Vu(n,e,t,i){if(i===void 0&&(i=CS),e===0)return i(t,t,t);var r=(n%360+360)%360/60,o=(1-Math.abs(2*t-1))*e,a=o*(1-Math.abs(r%2-1)),s=0,l=0,c=0;r>=0&&r<1?(s=o,l=a):r>=1&&r<2?(s=a,l=o):r>=2&&r<3?(l=o,c=a):r>=3&&r<4?(l=a,c=o):r>=4&&r<5?(s=a,c=o):r>=5&&r<6&&(s=o,c=a);var u=t-o/2,h=s+u,f=l+u,p=c+u;return i(h,f,p)}var Wu={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function RS(n){if(typeof n!="string")return n;var e=n.toLowerCase();return Wu[e]?"#"+Wu[e]:n}var PS=/^#[a-fA-F0-9]{6}$/,LS=/^#[a-fA-F0-9]{8}$/,OS=/^#[a-fA-F0-9]{3}$/,DS=/^#[a-fA-F0-9]{4}$/,os=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,IS=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,US=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,NS=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function pl(n){if(typeof n!="string")throw new $i(3);var e=RS(n);if(e.match(PS))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(LS)){var t=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:t}}if(e.match(OS))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(DS)){var i=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:i}}var r=os.exec(e);if(r)return{red:parseInt(""+r[1],10),green:parseInt(""+r[2],10),blue:parseInt(""+r[3],10)};var o=IS.exec(e.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var a=US.exec(e);if(a){var s=parseInt(""+a[1],10),l=parseInt(""+a[2],10)/100,c=parseInt(""+a[3],10)/100,u="rgb("+Vu(s,l,c)+")",h=os.exec(u);if(!h)throw new $i(4,e,u);return{red:parseInt(""+h[1],10),green:parseInt(""+h[2],10),blue:parseInt(""+h[3],10)}}var f=NS.exec(e.substring(0,50));if(f){var p=parseInt(""+f[1],10),g=parseInt(""+f[2],10)/100,_=parseInt(""+f[3],10)/100,m="rgb("+Vu(p,g,_)+")",d=os.exec(m);if(!d)throw new $i(4,e,m);return{red:parseInt(""+d[1],10),green:parseInt(""+d[2],10),blue:parseInt(""+d[3],10),alpha:parseFloat(""+f[4])>1?parseFloat(""+f[4])/100:parseFloat(""+f[4])}}throw new $i(5)}var FS=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},ju=FS;function zi(n){var e=n.toString(16);return e.length===1?"0"+e:e}function Xu(n,e,t){if(typeof n=="number"&&typeof e=="number"&&typeof t=="number")return ju("#"+zi(n)+zi(e)+zi(t));if(typeof n=="object"&&e===void 0&&t===void 0)return ju("#"+zi(n.red)+zi(n.green)+zi(n.blue));throw new $i(6)}function kS(n,e,t,i){if(typeof n=="string"&&typeof e=="number"){var r=pl(n);return"rgba("+r.red+","+r.green+","+r.blue+","+e+")"}else{if(typeof n=="number"&&typeof e=="number"&&typeof t=="number"&&typeof i=="number")return i>=1?Xu(n,e,t):"rgba("+n+","+e+","+t+","+i+")";if(typeof n=="object"&&e===void 0&&t===void 0&&i===void 0)return n.alpha>=1?Xu(n.red,n.green,n.blue):"rgba("+n.red+","+n.green+","+n.blue+","+n.alpha+")"}throw new $i(7)}function Bf(n,e,t){return function(){var r=t.concat(Array.prototype.slice.call(arguments));return r.length>=e?n.apply(this,r):Bf(n,e,r)}}function BS(n){return Bf(n,n.length,[])}function zS(n,e,t){return Math.max(n,Math.min(e,t))}function HS(n,e){if(e==="transparent")return e;var t=pl(e),i=typeof t.alpha=="number"?t.alpha:1,r=Rs({},t,{alpha:zS(0,1,(i*100+parseFloat(n)*100)/100)});return kS(r)}var GS=BS(HS),VS=GS,Fr={Linear:{None:function(n){return n}},Quadratic:{In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}},Cubic:{In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}},Quartic:{In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}},Quintic:{In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},Sinusoidal:{In:function(n){return 1-Math.cos(n*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.cos(Math.PI*n))}},Exponential:{In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}},Circular:{In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},Elastic:{In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}},Back:{In:function(n){var e=1.70158;return n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}},Bounce:{In:function(n){return 1-Fr.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?Fr.Bounce.In(n*2)*.5:Fr.Bounce.Out(n*2-1)*.5+.5}}},Rr;typeof self>"u"&&typeof process<"u"&&process.hrtime?Rr=function(){var n=process.hrtime();return n[0]*1e3+n[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?Rr=self.performance.now.bind(self.performance):Date.now!==void 0?Rr=Date.now:Rr=function(){return new Date().getTime()};var ci=Rr,zf=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=ci()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var o=this._tweens[i[r]],a=!t;o&&o.update(e,a)===!1&&!t&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),qi={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),o=qi.Utils.Linear;return e<0?o(n[0],n[1],i):e>1?o(n[t],n[t-1],t-i):o(n[r],n[r+1>t?t:r+1],i-r)},Bezier:function(n,e){for(var t=0,i=n.length-1,r=Math.pow,o=qi.Utils.Bernstein,a=0;a<=i;a++)t+=r(1-e,i-a)*r(e,a)*n[a]*o(i,a);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),o=qi.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(r=Math.floor(i=t*(1+e))),o(n[(r-1+t)%t],n[r],n[(r+1)%t],n[(r+2)%t],i-r)):e<0?n[0]-(o(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(o(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):o(n[r?r-1:0],n[r],n[t<r+1?t:r+1],n[t<r+2?t:r+2],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=qi.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,r){var o=(t-n)*.5,a=(i-e)*.5,s=r*r,l=r*s;return(2*e-2*t+o+a)*l+(-3*e+3*t-2*o-a)*s+o*r+e}}},ml=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),Hf=new zf,WS=function(){function n(e,t){t===void 0&&(t=Hf),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Fr.Linear.None,this._interpolationFunction=qi.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=ml.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},n.prototype.duration=function(e){return this._duration=e,this},n.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?ci()+parseFloat(e):e:ci(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},n.prototype._setupProperties=function(e,t,i,r){for(var o in i){var a=e[o],s=Array.isArray(a),l=s?"array":typeof a,c=!s&&Array.isArray(i[o]);if(!(l==="undefined"||l==="function")){if(c){var u=i[o];if(u.length===0)continue;u=u.map(this._handleRelativeValue.bind(this,a)),i[o]=[a].concat(u)}if((l==="object"||s)&&a&&!c){t[o]=s?[]:{};for(var h in a)t[o][h]=a[h];r[o]=s?[]:{},this._setupProperties(a,t[o],i[o],r[o])}else typeof t[o]>"u"&&(t[o]=a),s||(t[o]*=1),c?r[o]=i[o].slice().reverse():r[o]=t[o]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=ci()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=ci()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return this._group=e,this},n.prototype.delay=function(e){return this._delayTime=e,this},n.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return this._yoyo=e,this},n.prototype.easing=function(e){return this._easingFunction=e,this},n.prototype.interpolation=function(e){return this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){if(e===void 0&&(e=ci()),t===void 0&&(t=!0),this._isPaused)return!0;var i,r,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>o)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var a=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,a),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var s=0,l=this._chainedTweens.length;s<l;s++)this._chainedTweens[s].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var o in i)if(t[o]!==void 0){var a=t[o]||0,s=i[o],l=Array.isArray(e[o]),c=Array.isArray(s),u=!l&&c;u?e[o]=this._interpolationFunction(s,r):typeof s=="object"&&s?this._updateProperties(e[o],a,s,r):(s=this._handleRelativeValue(a,s),typeof s=="number"&&(e[o]=a+(s-a)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}(),jS="18.6.4",XS=ml.nextId,mn=Hf,$S=mn.getAll.bind(mn),qS=mn.removeAll.bind(mn),YS=mn.add.bind(mn),KS=mn.remove.bind(mn),ZS=mn.update.bind(mn),ui={Easing:Fr,Group:zf,Interpolation:qi,now:ci,Sequence:ml,nextId:XS,Tween:WS,VERSION:jS,getAll:$S,removeAll:qS,add:YS,remove:KS,update:ZS};function JS(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var QS=`.scene-nav-info {
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
}`;JS(QS);function eE(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,a,s=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=o.call(t)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw r}}return s}}function tE(n,e,t){return e=cE(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function nE(n,e){return rE(n)||eE(n,e)||Gf(n,e)||sE()}function Mr(n){return iE(n)||oE(n)||Gf(n)||aE()}function iE(n){if(Array.isArray(n))return Os(n)}function rE(n){if(Array.isArray(n))return n}function oE(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Gf(n,e){if(n){if(typeof n=="string")return Os(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Os(n,e)}}function Os(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function aE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lE(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function cE(n){var e=lE(n,"string");return typeof e=="symbol"?e:String(e)}var et=window.THREE?window.THREE:{WebGLRenderer:kh,Scene:b0,PerspectiveCamera:Wt,Raycaster:qh,SRGBColorSpace:Fe,TextureLoader:X0,Vector2:fe,Vector3:D,Box3:gi,Color:He,Mesh:bt,SphereGeometry:$r,MeshBasicMaterial:or,BackSide:Lt,EventDispatcher:on,MOUSE:fn,Quaternion:rn,Spherical:ys,Clock:$h},Vf=hl({props:{width:{default:window.innerWidth,onChange:function(e,t,i){isNaN(e)&&(t.width=i)}},height:{default:window.innerHeight,onChange:function(e,t,i){isNaN(e)&&(t.height=i)}},backgroundColor:{default:"#000011"},backgroundImageUrl:{},onBackgroundImageLoaded:{},showNavInfo:{default:!0},skyRadius:{default:5e4},objects:{default:[]},enablePointerInteraction:{default:!0,onChange:function(e,t){t.hoverObj=null,t.toolTipElem&&(t.toolTipElem.innerHTML="")},triggerUpdate:!1},lineHoverPrecision:{default:1,triggerUpdate:!1},hoverOrderComparator:{default:function(){return-1},triggerUpdate:!1},hoverFilter:{default:function(){return!0},triggerUpdate:!1},tooltipContent:{triggerUpdate:!1},hoverDuringDrag:{default:!1,triggerUpdate:!1},clickAfterDrag:{default:!1,triggerUpdate:!1},onHover:{default:function(){},triggerUpdate:!1},onClick:{default:function(){},triggerUpdate:!1},onRightClick:{triggerUpdate:!1}},methods:{tick:function(e){if(e.initialised){if(e.controls.update&&e.controls.update(e.clock.getDelta()),e.postProcessingComposer?e.postProcessingComposer.render():e.renderer.render(e.scene,e.camera),e.extraRenderers.forEach(function(o){return o.render(e.scene,e.camera)}),e.enablePointerInteraction){var t=null;if(e.hoverDuringDrag||!e.isPointerDragging){var i=this.intersectingObjects(e.pointerPos.x,e.pointerPos.y).filter(function(o){return e.hoverFilter(o.object)}).sort(function(o,a){return e.hoverOrderComparator(o.object,a.object)}),r=i.length?i[0]:null;t=r?r.object:null,e.intersectionPoint=r?r.point:null}t!==e.hoverObj&&(e.onHover(t,e.hoverObj),e.toolTipElem.innerHTML=t&&$e(e.tooltipContent)(t)||"",e.hoverObj=t)}ui.update()}return this},getPointerPos:function(e){var t=e.pointerPos,i=t.x,r=t.y;return{x:i,y:r}},cameraPosition:function(e,t,i,r){var o=e.camera;if(t&&e.initialised){var a=t,s=i||{x:0,y:0,z:0};if(!r)u(a),h(s);else{var l=Object.assign({},o.position),c=f();new ui.Tween(l).to(a,r).easing(ui.Easing.Quadratic.Out).onUpdate(u).start(),new ui.Tween(c).to(s,r/3).easing(ui.Easing.Quadratic.Out).onUpdate(h).start()}return this}return Object.assign({},o.position,{lookAt:f()});function u(p){var g=p.x,_=p.y,m=p.z;g!==void 0&&(o.position.x=g),_!==void 0&&(o.position.y=_),m!==void 0&&(o.position.z=m)}function h(p){var g=new et.Vector3(p.x,p.y,p.z);e.controls.target?e.controls.target=g:o.lookAt(g)}function f(){return Object.assign(new et.Vector3(0,0,-1e3).applyQuaternion(o.quaternion).add(o.position))}},zoomToFit:function(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,r=arguments.length,o=new Array(r>3?r-3:0),a=3;a<r;a++)o[a-3]=arguments[a];return this.fitToBbox(this.getBbox.apply(this,o),t,i)},fitToBbox:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10,o=e.camera;if(t){var a=new et.Vector3(0,0,0),s=Math.max.apply(Math,Mr(Object.entries(t).map(function(p){var g=nE(p,2),_=g[0],m=g[1];return Math.max.apply(Math,Mr(m.map(function(d){return Math.abs(a[_]-d)})))})))*2,l=(1-r*2/e.height)*o.fov,c=s/Math.atan(l*Math.PI/180),u=c/o.aspect,h=Math.max(c,u);if(h>0){var f=a.clone().sub(o.position).normalize().multiplyScalar(-h);this.cameraPosition(f,a,i)}}return this},getBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},i=new et.Box3(new et.Vector3(0,0,0),new et.Vector3(0,0,0)),r=e.objects.filter(t);return r.length?(r.forEach(function(o){return i.expandByObject(o)}),Object.assign.apply(Object,Mr(["x","y","z"].map(function(o){return tE({},o,[i.min[o],i.max[o]])})))):null},getScreenCoords:function(e,t,i,r){var o=new et.Vector3(t,i,r);return o.project(this.camera()),{x:(o.x+1)*e.width/2,y:-(o.y-1)*e.height/2}},getSceneCoords:function(e,t,i){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=new et.Vector2(t/e.width*2-1,-(i/e.height)*2+1),a=new et.Raycaster;return a.setFromCamera(o,e.camera),Object.assign({},a.ray.at(r,new et.Vector3))},intersectingObjects:function(e,t,i){var r=new et.Vector2(t/e.width*2-1,-(i/e.height)*2+1),o=new et.Raycaster;return o.params.Line.threshold=e.lineHoverPrecision,o.setFromCamera(r,e.camera),o.intersectObjects(e.objects,!0)},renderer:function(e){return e.renderer},scene:function(e){return e.scene},camera:function(e){return e.camera},postProcessingComposer:function(e){return e.postProcessingComposer},controls:function(e){return e.controls},tbControls:function(e){return e.controls}},stateInit:function(){return{scene:new et.Scene,camera:new et.PerspectiveCamera,clock:new et.Clock}},init:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=i.controlType,o=r===void 0?"trackball":r,a=i.rendererConfig,s=a===void 0?{}:a,l=i.extraRenderers,c=l===void 0?[]:l,u=i.waitForLoadComplete,h=u===void 0?!0:u;e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.className="scene-container",t.container.style.position="relative",t.container.appendChild(t.navInfo=document.createElement("div")),t.navInfo.className="scene-nav-info",t.navInfo.textContent={orbit:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",trackball:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",fly:"WASD: move, R|F: up | down, Q|E: roll, up|down: pitch, left|right: yaw"}[o]||"",t.navInfo.style.display=t.showNavInfo?null:"none",t.toolTipElem=document.createElement("div"),t.toolTipElem.classList.add("scene-tooltip"),t.container.appendChild(t.toolTipElem),t.pointerPos=new et.Vector2,t.pointerPos.x=-2,t.pointerPos.y=-2,["pointermove","pointerdown"].forEach(function(f){return t.container.addEventListener(f,function(p){if(f==="pointerdown"&&(t.isPointerPressed=!0),!t.isPointerDragging&&p.type==="pointermove"&&(p.pressure>0||t.isPointerPressed)&&(p.pointerType!=="touch"||p.movementX===void 0||[p.movementX,p.movementY].some(function(m){return Math.abs(m)>1}))&&(t.isPointerDragging=!0),t.enablePointerInteraction){var g=_(t.container);t.pointerPos.x=p.pageX-g.left,t.pointerPos.y=p.pageY-g.top,t.toolTipElem.style.top="".concat(t.pointerPos.y,"px"),t.toolTipElem.style.left="".concat(t.pointerPos.x,"px"),t.toolTipElem.style.transform="translate(-".concat(t.pointerPos.x/t.width*100,"%, ").concat(t.height-t.pointerPos.y<100?"calc(-100% - 8px)":"21px",")")}function _(m){var d=m.getBoundingClientRect(),b=window.pageXOffset||document.documentElement.scrollLeft,v=window.pageYOffset||document.documentElement.scrollTop;return{top:d.top+v,left:d.left+b}}},{passive:!0})}),t.container.addEventListener("pointerup",function(f){t.isPointerPressed=!1,!(t.isPointerDragging&&(t.isPointerDragging=!1,!t.clickAfterDrag))&&requestAnimationFrame(function(){f.button===0&&t.onClick(t.hoverObj||null,f,t.intersectionPoint),f.button===2&&t.onRightClick&&t.onRightClick(t.hoverObj||null,f,t.intersectionPoint)})},{passive:!0,capture:!0}),t.container.addEventListener("contextmenu",function(f){t.onRightClick&&f.preventDefault()}),t.renderer=new et.WebGLRenderer(Object.assign({antialias:!0,alpha:!0},s)),t.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),t.container.appendChild(t.renderer.domElement),t.extraRenderers=c,t.extraRenderers.forEach(function(f){f.domElement.style.position="absolute",f.domElement.style.top="0px",f.domElement.style.pointerEvents="none",t.container.appendChild(f.domElement)}),t.postProcessingComposer=new MS(t.renderer),t.postProcessingComposer.addPass(new SS(t.scene,t.camera)),t.controls=new{trackball:dS,orbit:pS,fly:gS}[o](t.camera,t.renderer.domElement),o==="fly"&&(t.controls.movementSpeed=300,t.controls.rollSpeed=Math.PI/6,t.controls.dragToLook=!0),(o==="trackball"||o==="orbit")&&(t.controls.minDistance=.1,t.controls.maxDistance=t.skyRadius,t.controls.addEventListener("start",function(){t.controlsEngaged=!0}),t.controls.addEventListener("change",function(){t.controlsEngaged&&(t.controlsDragging=!0)}),t.controls.addEventListener("end",function(){t.controlsEngaged=!1,t.controlsDragging=!1})),[t.renderer,t.postProcessingComposer].concat(Mr(t.extraRenderers)).forEach(function(f){return f.setSize(t.width,t.height)}),t.camera.aspect=t.width/t.height,t.camera.updateProjectionMatrix(),t.camera.position.z=1e3,t.scene.add(t.skysphere=new et.Mesh),t.skysphere.visible=!1,t.loadComplete=t.scene.visible=!h,window.scene=t.scene},update:function(e,t){if(e.width&&e.height&&(t.hasOwnProperty("width")||t.hasOwnProperty("height"))&&(e.container.style.width="".concat(e.width,"px"),e.container.style.height="".concat(e.height,"px"),[e.renderer,e.postProcessingComposer].concat(Mr(e.extraRenderers)).forEach(function(o){return o.setSize(e.width,e.height)}),e.camera.aspect=e.width/e.height,e.camera.updateProjectionMatrix()),t.hasOwnProperty("skyRadius")&&e.skyRadius&&(e.controls.hasOwnProperty("maxDistance")&&t.skyRadius&&(e.controls.maxDistance=Math.min(e.controls.maxDistance,e.skyRadius)),e.camera.far=e.skyRadius*2.5,e.camera.updateProjectionMatrix(),e.skysphere.geometry=new et.SphereGeometry(e.skyRadius)),t.hasOwnProperty("backgroundColor")){var i=pl(e.backgroundColor).alpha;i===void 0&&(i=1),e.renderer.setClearColor(new et.Color(VS(1,e.backgroundColor)),i)}t.hasOwnProperty("backgroundImageUrl")&&(e.backgroundImageUrl?new et.TextureLoader().load(e.backgroundImageUrl,function(o){o.colorSpace=et.SRGBColorSpace,e.skysphere.material=new et.MeshBasicMaterial({map:o,side:et.BackSide}),e.skysphere.visible=!0,e.onBackgroundImageLoaded&&setTimeout(e.onBackgroundImageLoaded),!e.loadComplete&&r()}):(e.skysphere.visible=!1,e.skysphere.material.map=null,!e.loadComplete&&r())),t.hasOwnProperty("showNavInfo")&&(e.navInfo.style.display=e.showNavInfo?null:"none"),t.hasOwnProperty("objects")&&((t.objects||[]).forEach(function(o){return e.scene.remove(o)}),e.objects.forEach(function(o){return e.scene.add(o)}));function r(){e.loadComplete=e.scene.visible=!0}}});function uE(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var hE=`.graph-info-msg {
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
}`;uE(hE);function $u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Ao(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?$u(Object(t),!0).forEach(function(i){Yr(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):$u(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Yr(n,e,t){return e=_E(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function sa(n){return fE(n)||dE(n)||pE(n)||mE()}function fE(n){if(Array.isArray(n))return Ds(n)}function dE(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function pE(n,e){if(n){if(typeof n=="string")return Ds(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ds(n,e)}}function Ds(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function mE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gE(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function _E(n){var e=gE(n,"string");return typeof e=="symbol"?e:String(e)}function Wf(n,e){var t=new e;return{linkProp:function(r){return{default:t[r](),onChange:function(a,s){s[n][r](a)},triggerUpdate:!1}},linkMethod:function(r){return function(o){for(var a=o[n],s=arguments.length,l=new Array(s>1?s-1:0),c=1;c<s;c++)l[c-1]=arguments[c];var u=a[r].apply(a,l);return u===a?this:u}}}}var qu=window.THREE?window.THREE:{AmbientLight:K0,DirectionalLight:Y0,Vector3:D},vE=170,jf=Wf("forceGraph",kf),yE=Object.assign.apply(Object,sa(["jsonUrl","graphData","numDimensions","dagMode","dagLevelDistance","dagNodeFilter","onDagError","nodeRelSize","nodeId","nodeVal","nodeResolution","nodeColor","nodeAutoColorBy","nodeOpacity","nodeVisibility","nodeThreeObject","nodeThreeObjectExtend","linkSource","linkTarget","linkVisibility","linkColor","linkAutoColorBy","linkOpacity","linkWidth","linkResolution","linkCurvature","linkCurveRotation","linkMaterial","linkThreeObject","linkThreeObjectExtend","linkPositionUpdate","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowRelPos","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleSpeed","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution","forceEngine","d3AlphaDecay","d3VelocityDecay","d3AlphaMin","ngraphPhysics","warmupTicks","cooldownTicks","cooldownTime","onEngineTick","onEngineStop"].map(function(n){return Yr({},n,jf.linkProp(n))}))),xE=Object.assign.apply(Object,sa(["refresh","getGraphBbox","d3Force","d3ReheatSimulation","emitParticle"].map(function(n){return Yr({},n,jf.linkMethod(n))}))),Fo=Wf("renderObjs",Vf),bE=Object.assign.apply(Object,sa(["width","height","backgroundColor","showNavInfo","enablePointerInteraction"].map(function(n){return Yr({},n,Fo.linkProp(n))}))),ME=Object.assign.apply(Object,sa(["cameraPosition","postProcessingComposer"].map(function(n){return Yr({},n,Fo.linkMethod(n))})).concat([{graph2ScreenCoords:Fo.linkMethod("getScreenCoords"),screen2GraphCoords:Fo.linkMethod("getSceneCoords")}])),SE=hl({props:Ao(Ao({nodeLabel:{default:"name",triggerUpdate:!1},linkLabel:{default:"name",triggerUpdate:!1},linkHoverPrecision:{default:1,onChange:function(e,t){return t.renderObjs.lineHoverPrecision(e)},triggerUpdate:!1},enableNavigationControls:{default:!0,onChange:function(e,t){var i=t.renderObjs.controls();i&&(i.enabled=e,e&&i.domElement&&i.domElement.dispatchEvent(new PointerEvent("pointerup")))},triggerUpdate:!1},enableNodeDrag:{default:!0,triggerUpdate:!1},onNodeDrag:{default:function(){},triggerUpdate:!1},onNodeDragEnd:{default:function(){},triggerUpdate:!1},onNodeClick:{triggerUpdate:!1},onNodeRightClick:{triggerUpdate:!1},onNodeHover:{triggerUpdate:!1},onLinkClick:{triggerUpdate:!1},onLinkRightClick:{triggerUpdate:!1},onLinkHover:{triggerUpdate:!1},onBackgroundClick:{triggerUpdate:!1},onBackgroundRightClick:{triggerUpdate:!1}},yE),bE),methods:Ao(Ao({zoomToFit:function(e,t,i){for(var r,o=arguments.length,a=new Array(o>3?o-3:0),s=3;s<o;s++)a[s-3]=arguments[s];return e.renderObjs.fitToBbox((r=e.forceGraph).getGraphBbox.apply(r,a),t,i),this},pauseAnimation:function(e){return e.animationFrameRequestId!==null&&(cancelAnimationFrame(e.animationFrameRequestId),e.animationFrameRequestId=null),this},resumeAnimation:function(e){return e.animationFrameRequestId===null&&this._animationCycle(),this},_animationCycle:function(e){e.enablePointerInteraction&&(this.renderer().domElement.style.cursor=null),e.forceGraph.tickFrame(),e.renderObjs.tick(),e.animationFrameRequestId=requestAnimationFrame(this._animationCycle)},scene:function(e){return e.renderObjs.scene()},camera:function(e){return e.renderObjs.camera()},renderer:function(e){return e.renderObjs.renderer()},controls:function(e){return e.renderObjs.controls()},tbControls:function(e){return e.renderObjs.tbControls()},_destructor:function(){this.pauseAnimation(),this.graphData({nodes:[],links:[]})}},xE),ME),stateInit:function(e){var t=e.controlType,i=e.rendererConfig,r=e.extraRenderers;return{forceGraph:new kf,renderObjs:Vf({controlType:t,rendererConfig:i,extraRenderers:r})}},init:function(e,t){e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.style.position="relative";var i=document.createElement("div");t.container.appendChild(i),t.renderObjs(i);var r=t.renderObjs.camera(),o=t.renderObjs.renderer(),a=t.renderObjs.controls();a.enabled=!!t.enableNavigationControls,t.lastSetCameraZ=r.position.z;var s;t.container.appendChild(s=document.createElement("div")),s.className="graph-info-msg",s.textContent="",t.forceGraph.onLoading(function(){s.textContent="Loading..."}).onFinishLoading(function(){s.textContent=""}).onUpdate(function(){t.graphData=t.forceGraph.graphData(),r.position.x===0&&r.position.y===0&&r.position.z===t.lastSetCameraZ&&t.graphData.nodes.length&&(r.lookAt(t.forceGraph.position),t.lastSetCameraZ=r.position.z=Math.cbrt(t.graphData.nodes.length)*vE)}).onFinishUpdate(function(){if(t._dragControls){var l=t.graphData.nodes.find(function(u){return u.__initialFixedPos&&!u.__disposeControlsAfterDrag});l?l.__disposeControlsAfterDrag=!0:t._dragControls.dispose(),t._dragControls=void 0}if(t.enableNodeDrag&&t.enablePointerInteraction&&t.forceEngine==="d3"){var c=t._dragControls=new Z0(t.graphData.nodes.map(function(u){return u.__threeObj}).filter(function(u){return u}),r,o.domElement);c.addEventListener("dragstart",function(u){a.enabled=!1,u.object.__initialPos=u.object.position.clone(),u.object.__prevPos=u.object.position.clone();var h=wn(u.object).__data;!h.__initialFixedPos&&(h.__initialFixedPos={fx:h.fx,fy:h.fy,fz:h.fz}),!h.__initialPos&&(h.__initialPos={x:h.x,y:h.y,z:h.z}),["x","y","z"].forEach(function(f){return h["f".concat(f)]=h[f]}),o.domElement.classList.add("grabbable")}),c.addEventListener("drag",function(u){var h=wn(u.object);if(!u.object.hasOwnProperty("__graphObjType")){var f=u.object.__initialPos,p=u.object.__prevPos,g=u.object.position;h.position.add(g.clone().sub(p)),p.copy(g),g.copy(f)}var _=h.__data,m=h.position,d={x:m.x-_.x,y:m.y-_.y,z:m.z-_.z};["x","y","z"].forEach(function(b){return _["f".concat(b)]=_[b]=m[b]}),t.forceGraph.d3AlphaTarget(.3).resetCountdown(),_.__dragged=!0,t.onNodeDrag(_,d)}),c.addEventListener("dragend",function(u){delete u.object.__initialPos,delete u.object.__prevPos;var h=wn(u.object).__data;h.__disposeControlsAfterDrag&&(c.dispose(),delete h.__disposeControlsAfterDrag);var f=h.__initialFixedPos,p=h.__initialPos,g={x:p.x-h.x,y:p.y-h.y,z:p.z-h.z};f&&(["x","y","z"].forEach(function(_){var m="f".concat(_);f[m]===void 0&&delete h[m]}),delete h.__initialFixedPos,delete h.__initialPos,h.__dragged&&(delete h.__dragged,t.onNodeDragEnd(h,g))),t.forceGraph.d3AlphaTarget(0).resetCountdown(),t.enableNavigationControls&&(a.enabled=!0,a.domElement&&a.domElement.ownerDocument&&a.domElement.ownerDocument.dispatchEvent(new PointerEvent("pointerup",{pointerType:"touch"}))),o.domElement.classList.remove("grabbable")})}}),t.renderObjs.objects([new qu.AmbientLight(13421772),new qu.DirectionalLight(16777215,.6),t.forceGraph]).hoverOrderComparator(function(l,c){var u=wn(l);if(!u)return 1;var h=wn(c);if(!h)return-1;var f=function(g){return g.__graphObjType==="node"};return f(h)-f(u)}).tooltipContent(function(l){var c=wn(l);return c&&$e(t["".concat(c.__graphObjType,"Label")])(c.__data)||""}).hoverDuringDrag(!1).onHover(function(l){var c=wn(l);if(c!==t.hoverObj){var u=t.hoverObj?t.hoverObj.__graphObjType:null,h=t.hoverObj?t.hoverObj.__data:null,f=c?c.__graphObjType:null,p=c?c.__data:null;if(u&&u!==f){var g=t["on".concat(u==="node"?"Node":"Link","Hover")];g&&g(null,h)}if(f){var _=t["on".concat(f==="node"?"Node":"Link","Hover")];_&&_(p,u===f?h:null)}o.domElement.classList[c&&t["on".concat(f==="node"?"Node":"Link","Click")]||!c&&t.onBackgroundClick?"add":"remove"]("clickable"),t.hoverObj=c}}).clickAfterDrag(!1).onClick(function(l,c){var u=wn(l);if(u){var h=t["on".concat(u.__graphObjType==="node"?"Node":"Link","Click")];h&&h(u.__data,c)}else t.onBackgroundClick&&t.onBackgroundClick(c)}).onRightClick(function(l,c){var u=wn(l);if(u){var h=t["on".concat(u.__graphObjType==="node"?"Node":"Link","RightClick")];h&&h(u.__data,c)}else t.onBackgroundRightClick&&t.onBackgroundRightClick(c)}),this._animationCycle()}});function wn(n){for(var e=n;e&&!e.hasOwnProperty("__graphObjType");)e=e.parent;return e}function EE(n){if(n&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=n,document.head.appendChild(e),n}}function Yi(n,e){var t=n.__state.conversionName.toString(),i=Math.round(n.r),r=Math.round(n.g),o=Math.round(n.b),a=n.a,s=Math.round(n.h),l=n.s.toFixed(1),c=n.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=n.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+i+","+r+","+o+")";if(t==="CSS_RGBA")return"rgba("+i+","+r+","+o+","+a+")";if(t==="HEX")return"0x"+n.hex.toString(16);if(t==="RGB_ARRAY")return"["+i+","+r+","+o+"]";if(t==="RGBA_ARRAY")return"["+i+","+r+","+o+","+a+"]";if(t==="RGB_OBJ")return"{r:"+i+",g:"+r+",b:"+o+"}";if(t==="RGBA_OBJ")return"{r:"+i+",g:"+r+",b:"+o+",a:"+a+"}";if(t==="HSV_OBJ")return"{h:"+s+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+s+",s:"+l+",v:"+c+",a:"+a+"}"}return"unknown format"}var Yu=Array.prototype.forEach,Sr=Array.prototype.slice,oe={BREAK:{},extend:function(e){return this.each(Sr.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach(function(r){this.isUndefined(t[r])||(e[r]=t[r])}.bind(this))},this),e},defaults:function(e){return this.each(Sr.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach(function(r){this.isUndefined(e[r])&&(e[r]=t[r])}.bind(this))},this),e},compose:function(){var e=Sr.call(arguments);return function(){for(var t=Sr.call(arguments),i=e.length-1;i>=0;i--)t=[e[i].apply(this,t)];return t[0]}},each:function(e,t,i){if(e){if(Yu&&e.forEach&&e.forEach===Yu)e.forEach(t,i);else if(e.length===e.length+0){var r=void 0,o=void 0;for(r=0,o=e.length;r<o;r++)if(r in e&&t.call(i,e[r],r)===this.BREAK)return}else for(var a in e)if(t.call(i,e[a],a)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,i){var r=void 0;return function(){var o=this,a=arguments;function s(){r=null,i||e.apply(o,a)}var l=i||!r;clearTimeout(r),r=setTimeout(s,t),l&&e.apply(o,a)}},toArray:function(e){return e.toArray?e.toArray():Sr.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(n){function e(t){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(n){return isNaN(n)}),isArray:Array.isArray||function(n){return n.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},wE=[{litmus:oe.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:Yi},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:Yi},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:Yi},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:Yi}}},{litmus:oe.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:oe.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:oe.isObject,conversions:{RGBA_OBJ:{read:function(e){return oe.isNumber(e.r)&&oe.isNumber(e.g)&&oe.isNumber(e.b)&&oe.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return oe.isNumber(e.r)&&oe.isNumber(e.g)&&oe.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return oe.isNumber(e.h)&&oe.isNumber(e.s)&&oe.isNumber(e.v)&&oe.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return oe.isNumber(e.h)&&oe.isNumber(e.s)&&oe.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Er=void 0,Co=void 0,Is=function(){Co=!1;var e=arguments.length>1?oe.toArray(arguments):arguments[0];return oe.each(wE,function(t){if(t.litmus(e))return oe.each(t.conversions,function(i,r){if(Er=i.read(e),Co===!1&&Er!==!1)return Co=Er,Er.conversionName=r,Er.conversion=i,oe.BREAK}),oe.BREAK}),Co},Ku=void 0,qo={hsv_to_rgb:function(e,t,i){var r=Math.floor(e/60)%6,o=e/60-Math.floor(e/60),a=i*(1-t),s=i*(1-o*t),l=i*(1-(1-o)*t),c=[[i,l,a],[s,i,a],[a,i,l],[a,s,i],[l,a,i],[i,a,s]][r];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,i){var r=Math.min(e,t,i),o=Math.max(e,t,i),a=o-r,s=void 0,l=void 0;if(o!==0)l=a/o;else return{h:NaN,s:0,v:0};return e===o?s=(t-i)/a:t===o?s=2+(i-e)/a:s=4+(e-t)/a,s/=6,s<0&&(s+=1),{h:s*360,s:l,v:o/255}},rgb_to_hex:function(e,t,i){var r=this.hex_with_component(0,2,e);return r=this.hex_with_component(r,1,t),r=this.hex_with_component(r,0,i),r},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,i){return i<<(Ku=t*8)|e&~(255<<Ku)}},TE=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},an=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")},sn=function(){function n(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),Yn=function n(e,t,i){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(r===void 0){var o=Object.getPrototypeOf(e);return o===null?void 0:n(o,t,i)}else{if("value"in r)return r.value;var a=r.get;return a===void 0?void 0:a.call(i)}},Jn=function(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)},Qn=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n},yt=function(){function n(){if(an(this,n),this.__state=Is.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return sn(n,[{key:"toString",value:function(){return Yi(this)}},{key:"toHexString",value:function(){return Yi(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),n}();function gl(n,e,t){Object.defineProperty(n,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(yt.recalculateRGB(this,e,t),this.__state[e])},set:function(r){this.__state.space!=="RGB"&&(yt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=r}})}function _l(n,e){Object.defineProperty(n,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(yt.recalculateHSV(this),this.__state[e])},set:function(i){this.__state.space!=="HSV"&&(yt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=i}})}yt.recalculateRGB=function(n,e,t){if(n.__state.space==="HEX")n.__state[e]=qo.component_from_hex(n.__state.hex,t);else if(n.__state.space==="HSV")oe.extend(n.__state,qo.hsv_to_rgb(n.__state.h,n.__state.s,n.__state.v));else throw new Error("Corrupted color state")};yt.recalculateHSV=function(n){var e=qo.rgb_to_hsv(n.r,n.g,n.b);oe.extend(n.__state,{s:e.s,v:e.v}),oe.isNaN(e.h)?oe.isUndefined(n.__state.h)&&(n.__state.h=0):n.__state.h=e.h};yt.COMPONENTS=["r","g","b","h","s","v","hex","a"];gl(yt.prototype,"r",2);gl(yt.prototype,"g",1);gl(yt.prototype,"b",0);_l(yt.prototype,"h");_l(yt.prototype,"s");_l(yt.prototype,"v");Object.defineProperty(yt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(yt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=qo.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var _i=function(){function n(e,t){an(this,n),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return sn(n,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),n}(),AE={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Xf={};oe.each(AE,function(n,e){oe.each(n,function(t){Xf[t]=e})});var CE=/(\d+(\.\d+)?)px/;function cn(n){if(n==="0"||oe.isUndefined(n))return 0;var e=n.match(CE);return oe.isNull(e)?0:parseFloat(e[1])}var $={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,i){var r=i,o=t;oe.isUndefined(o)&&(o=!0),oe.isUndefined(r)&&(r=!0),e.style.position="absolute",o&&(e.style.left=0,e.style.right=0),r&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,i,r){var o=i||{},a=Xf[t];if(!a)throw new Error("Event type "+t+" not supported.");var s=document.createEvent(a);switch(a){case"MouseEvents":{var l=o.x||o.clientX||0,c=o.y||o.clientY||0;s.initMouseEvent(t,o.bubbles||!1,o.cancelable||!0,window,o.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=s.initKeyboardEvent||s.initKeyEvent;oe.defaults(o,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,o.bubbles||!1,o.cancelable,window,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey,o.keyCode,o.charCode);break}default:{s.initEvent(t,o.bubbles||!1,o.cancelable||!0);break}}oe.defaults(s,r),e.dispatchEvent(s)},bind:function(e,t,i,r){var o=r||!1;return e.addEventListener?e.addEventListener(t,i,o):e.attachEvent&&e.attachEvent("on"+t,i),$},unbind:function(e,t,i,r){var o=r||!1;return e.removeEventListener?e.removeEventListener(t,i,o):e.detachEvent&&e.detachEvent("on"+t,i),$},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var i=e.className.split(/ +/);i.indexOf(t)===-1&&(i.push(t),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return $},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var i=e.className.split(/ +/),r=i.indexOf(t);r!==-1&&(i.splice(r,1),e.className=i.join(" "))}else e.className=void 0;return $},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return cn(t["border-left-width"])+cn(t["border-right-width"])+cn(t["padding-left"])+cn(t["padding-right"])+cn(t.width)},getHeight:function(e){var t=getComputedStyle(e);return cn(t["border-top-width"])+cn(t["border-bottom-width"])+cn(t["padding-top"])+cn(t["padding-bottom"])+cn(t.height)},getOffset:function(e){var t=e,i={left:0,top:0};if(t.offsetParent)do i.left+=t.offsetLeft,i.top+=t.offsetTop,t=t.offsetParent;while(t);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},$f=function(n){Jn(e,n);function e(t,i){an(this,e);var r=Qn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function a(){o.setValue(!o.__prev)}return $.bind(r.__checkbox,"change",a,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return sn(e,[{key:"setValue",value:function(i){var r=Yn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Yn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(_i),RE=function(n){Jn(e,n);function e(t,i,r){an(this,e);var o=Qn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),a=r,s=o;if(o.__select=document.createElement("select"),oe.isArray(a)){var l={};oe.each(a,function(c){l[c]=c}),a=l}return oe.each(a,function(c,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",c),s.__select.appendChild(h)}),o.updateDisplay(),$.bind(o.__select,"change",function(){var c=this.options[this.selectedIndex].value;s.setValue(c)}),o.domElement.appendChild(o.__select),o}return sn(e,[{key:"setValue",value:function(i){var r=Yn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return $.isActive(this.__select)?this:(this.__select.value=this.getValue(),Yn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(_i),PE=function(n){Jn(e,n);function e(t,i){an(this,e);var r=Qn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=r;function a(){o.setValue(o.__input.value)}function s(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),$.bind(r.__input,"keyup",a),$.bind(r.__input,"change",a),$.bind(r.__input,"blur",s),$.bind(r.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return sn(e,[{key:"updateDisplay",value:function(){return $.isActive(this.__input)||(this.__input.value=this.getValue()),Yn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(_i);function Zu(n){var e=n.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var qf=function(n){Jn(e,n);function e(t,i,r){an(this,e);var o=Qn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),a=r||{};return o.__min=a.min,o.__max=a.max,o.__step=a.step,oe.isUndefined(o.__step)?o.initialValue===0?o.__impliedStep=1:o.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(o.initialValue))/Math.LN10))/10:o.__impliedStep=o.__step,o.__precision=Zu(o.__impliedStep),o}return sn(e,[{key:"setValue",value:function(i){var r=i;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),Yn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=Zu(i),this}}]),e}(_i);function LE(n,e){var t=Math.pow(10,e);return Math.round(n*t)/t}var Yo=function(n){Jn(e,n);function e(t,i,r){an(this,e);var o=Qn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,r));o.__truncationSuspended=!1;var a=o,s=void 0;function l(){var g=parseFloat(a.__input.value);oe.isNaN(g)||a.setValue(g)}function c(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}function u(){c()}function h(g){var _=s-g.clientY;a.setValue(a.getValue()+_*a.__impliedStep),s=g.clientY}function f(){$.unbind(window,"mousemove",h),$.unbind(window,"mouseup",f),c()}function p(g){$.bind(window,"mousemove",h),$.bind(window,"mouseup",f),s=g.clientY}return o.__input=document.createElement("input"),o.__input.setAttribute("type","text"),$.bind(o.__input,"change",l),$.bind(o.__input,"blur",u),$.bind(o.__input,"mousedown",p),$.bind(o.__input,"keydown",function(g){g.keyCode===13&&(a.__truncationSuspended=!0,this.blur(),a.__truncationSuspended=!1,c())}),o.updateDisplay(),o.domElement.appendChild(o.__input),o}return sn(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():LE(this.getValue(),this.__precision),Yn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(qf);function Ju(n,e,t,i,r){return i+(r-i)*((n-e)/(t-e))}var Us=function(n){Jn(e,n);function e(t,i,r,o,a){an(this,e);var s=Qn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,{min:r,max:o,step:a})),l=s;s.__background=document.createElement("div"),s.__foreground=document.createElement("div"),$.bind(s.__background,"mousedown",c),$.bind(s.__background,"touchstart",f),$.addClass(s.__background,"slider"),$.addClass(s.__foreground,"slider-fg");function c(_){document.activeElement.blur(),$.bind(window,"mousemove",u),$.bind(window,"mouseup",h),u(_)}function u(_){_.preventDefault();var m=l.__background.getBoundingClientRect();return l.setValue(Ju(_.clientX,m.left,m.right,l.__min,l.__max)),!1}function h(){$.unbind(window,"mousemove",u),$.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function f(_){_.touches.length===1&&($.bind(window,"touchmove",p),$.bind(window,"touchend",g),p(_))}function p(_){var m=_.touches[0].clientX,d=l.__background.getBoundingClientRect();l.setValue(Ju(m,d.left,d.right,l.__min,l.__max))}function g(){$.unbind(window,"touchmove",p),$.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return s.updateDisplay(),s.__background.appendChild(s.__foreground),s.domElement.appendChild(s.__background),s}return sn(e,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",Yn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(qf),Yf=function(n){Jn(e,n);function e(t,i,r){an(this,e);var o=Qn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),a=o;return o.__button=document.createElement("div"),o.__button.innerHTML=r===void 0?"Fire":r,$.bind(o.__button,"click",function(s){return s.preventDefault(),a.fire(),!1}),$.addClass(o.__button,"button"),o.domElement.appendChild(o.__button),o}return sn(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(_i),Ns=function(n){Jn(e,n);function e(t,i){an(this,e);var r=Qn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));r.__color=new yt(r.getValue()),r.__temp=new yt(0);var o=r;r.domElement=document.createElement("div"),$.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",$.bind(r.__input,"keydown",function(_){_.keyCode===13&&h.call(this)}),$.bind(r.__input,"blur",h),$.bind(r.__selector,"mousedown",function(){$.addClass(this,"drag").bind(window,"mouseup",function(){$.removeClass(o.__selector,"drag")})}),$.bind(r.__selector,"touchstart",function(){$.addClass(this,"drag").bind(window,"touchend",function(){$.removeClass(o.__selector,"drag")})});var a=document.createElement("div");oe.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),oe.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),oe.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),oe.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),oe.extend(a.style,{width:"100%",height:"100%",background:"none"}),Qu(a,"top","rgba(0,0,0,0)","#000"),oe.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),DE(r.__hue_field),oe.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),$.bind(r.__saturation_field,"mousedown",s),$.bind(r.__saturation_field,"touchstart",s),$.bind(r.__field_knob,"mousedown",s),$.bind(r.__field_knob,"touchstart",s),$.bind(r.__hue_field,"mousedown",l),$.bind(r.__hue_field,"touchstart",l);function s(_){p(_),$.bind(window,"mousemove",p),$.bind(window,"touchmove",p),$.bind(window,"mouseup",c),$.bind(window,"touchend",c)}function l(_){g(_),$.bind(window,"mousemove",g),$.bind(window,"touchmove",g),$.bind(window,"mouseup",u),$.bind(window,"touchend",u)}function c(){$.unbind(window,"mousemove",p),$.unbind(window,"touchmove",p),$.unbind(window,"mouseup",c),$.unbind(window,"touchend",c),f()}function u(){$.unbind(window,"mousemove",g),$.unbind(window,"touchmove",g),$.unbind(window,"mouseup",u),$.unbind(window,"touchend",u),f()}function h(){var _=Is(this.value);_!==!1?(o.__color.__state=_,o.setValue(o.__color.toOriginal())):this.value=o.__color.toString()}function f(){o.__onFinishChange&&o.__onFinishChange.call(o,o.__color.toOriginal())}r.__saturation_field.appendChild(a),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function p(_){_.type.indexOf("touch")===-1&&_.preventDefault();var m=o.__saturation_field.getBoundingClientRect(),d=_.touches&&_.touches[0]||_,b=d.clientX,v=d.clientY,x=(b-m.left)/(m.right-m.left),y=1-(v-m.top)/(m.bottom-m.top);return y>1?y=1:y<0&&(y=0),x>1?x=1:x<0&&(x=0),o.__color.v=y,o.__color.s=x,o.setValue(o.__color.toOriginal()),!1}function g(_){_.type.indexOf("touch")===-1&&_.preventDefault();var m=o.__hue_field.getBoundingClientRect(),d=_.touches&&_.touches[0]||_,b=d.clientY,v=1-(b-m.top)/(m.bottom-m.top);return v>1?v=1:v<0&&(v=0),o.__color.h=v*360,o.setValue(o.__color.toOriginal()),!1}return r}return sn(e,[{key:"updateDisplay",value:function(){var i=Is(this.getValue());if(i!==!1){var r=!1;oe.each(yt.COMPONENTS,function(s){if(!oe.isUndefined(i[s])&&!oe.isUndefined(this.__color.__state[s])&&i[s]!==this.__color.__state[s])return r=!0,{}},this),r&&oe.extend(this.__color.__state,i)}oe.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var o=this.__color.v<.5||this.__color.s>.5?255:0,a=255-o;oe.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+o+","+o+","+o+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Qu(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),oe.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+o+","+o+","+o+")",textShadow:this.__input_textShadow+"rgba("+a+","+a+","+a+",.7)"})}}]),e}(_i),OE=["-moz-","-o-","-webkit-","-ms-",""];function Qu(n,e,t,i){n.style.background="",oe.each(OE,function(r){n.style.cssText+="background: "+r+"linear-gradient("+e+", "+t+" 0%, "+i+" 100%); "})}function DE(n){n.style.background="",n.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",n.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var IE={load:function(e,t){var i=t||document,r=i.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,i.getElementsByTagName("head")[0].appendChild(r)},inject:function(e,t){var i=t||document,r=document.createElement("style");r.type="text/css",r.innerHTML=e;var o=i.getElementsByTagName("head")[0];try{o.appendChild(r)}catch{}}},UE=`<div id="dg-save" class="dg dialogue">

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

</div>`,NE=function(e,t){var i=e[t];return oe.isArray(arguments[2])||oe.isObject(arguments[2])?new RE(e,t,arguments[2]):oe.isNumber(i)?oe.isNumber(arguments[2])&&oe.isNumber(arguments[3])?oe.isNumber(arguments[4])?new Us(e,t,arguments[2],arguments[3],arguments[4]):new Us(e,t,arguments[2],arguments[3]):oe.isNumber(arguments[4])?new Yo(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Yo(e,t,{min:arguments[2],max:arguments[3]}):oe.isString(i)?new PE(e,t):oe.isFunction(i)?new Yf(e,t,""):oe.isBoolean(i)?new $f(e,t):null};function FE(n){setTimeout(n,1e3/60)}var kE=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||FE,BE=function(){function n(){an(this,n),this.backgroundElement=document.createElement("div"),oe.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),$.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),oe.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;$.bind(this.backgroundElement,"click",function(){e.hide()})}return sn(n,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),oe.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,i=function r(){t.domElement.style.display="none",t.backgroundElement.style.display="none",$.unbind(t.domElement,"webkitTransitionEnd",r),$.unbind(t.domElement,"transitionend",r),$.unbind(t.domElement,"oTransitionEnd",r)};$.bind(this.domElement,"webkitTransitionEnd",i),$.bind(this.domElement,"transitionend",i),$.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-$.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-$.getHeight(this.domElement)/2+"px"}}]),n}(),zE=EE(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);IE.inject(zE);var eh="dg",th=72,nh=20,Xr="Default",Pr=function(){try{return!!window.localStorage}catch{return!1}}(),kr=void 0,ih=!0,Vi=void 0,as=!1,Kf=[],Je=function n(e){var t=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),$.addClass(this.domElement,eh),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=oe.defaults(i,{closeOnTop:!1,autoPlace:!0,width:n.DEFAULT_WIDTH}),i=oe.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),oe.isUndefined(i.load)?i.load={preset:Xr}:i.preset&&(i.load.preset=i.preset),oe.isUndefined(i.parent)&&i.hideable&&Kf.push(this),i.resizable=oe.isUndefined(i.parent)&&i.resizable,i.autoPlace&&oe.isUndefined(i.scrollable)&&(i.scrollable=!0);var r=Pr&&localStorage.getItem(Wi(this,"isLocal"))==="true",o=void 0,a=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:i.load.preset},set:function(f){t.parent?t.getRoot().preset=f:i.load.preset=f,WE(this),t.revert()}},width:{get:function(){return i.width},set:function(f){i.width=f,Bs(t,f)}},name:{get:function(){return i.name},set:function(f){i.name=f,a&&(a.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(f){i.closed=f,i.closed?$.addClass(t.__ul,n.CLASS_CLOSED):$.removeClass(t.__ul,n.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=f?n.TEXT_OPEN:n.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return r},set:function(f){Pr&&(r=f,f?$.bind(window,"unload",o):$.unbind(window,"unload",o),localStorage.setItem(Wi(t,"isLocal"),f))}}}),oe.isUndefined(i.parent)){if(this.closed=i.closed||!1,$.addClass(this.domElement,n.CLASS_MAIN),$.makeSelectable(this.domElement,!1),Pr&&r){t.useLocalStorage=!0;var s=localStorage.getItem(Wi(this,"gui"));s&&(i.load=JSON.parse(s))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=n.TEXT_CLOSED,$.addClass(this.__closeButton,n.CLASS_CLOSE_BUTTON),i.closeOnTop?($.addClass(this.__closeButton,n.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):($.addClass(this.__closeButton,n.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),$.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);$.addClass(l,"controller-name"),a=vl(t,l);var c=function(f){return f.preventDefault(),t.closed=!t.closed,!1};$.addClass(this.__ul,n.CLASS_CLOSED),$.addClass(a,"title"),$.bind(a,"click",c),i.closed||(this.closed=!1)}i.autoPlace&&(oe.isUndefined(i.parent)&&(ih&&(Vi=document.createElement("div"),$.addClass(Vi,eh),$.addClass(Vi,n.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Vi),ih=!1),Vi.appendChild(this.domElement),$.addClass(this.domElement,n.CLASS_AUTO_PLACE)),this.parent||Bs(t,i.width)),this.__resizeHandler=function(){t.onResizeDebounced()},$.bind(window,"resize",this.__resizeHandler),$.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),$.bind(this.__ul,"transitionend",this.__resizeHandler),$.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&VE(this),o=function(){Pr&&localStorage.getItem(Wi(t,"isLocal"))==="true"&&localStorage.setItem(Wi(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=o;function u(){var h=t.getRoot();h.width+=1,oe.defer(function(){h.width-=1})}i.parent||u()};Je.toggleHide=function(){as=!as,oe.each(Kf,function(n){n.domElement.style.display=as?"none":""})};Je.CLASS_AUTO_PLACE="a";Je.CLASS_AUTO_PLACE_CONTAINER="ac";Je.CLASS_MAIN="main";Je.CLASS_CONTROLLER_ROW="cr";Je.CLASS_TOO_TALL="taller-than-window";Je.CLASS_CLOSED="closed";Je.CLASS_CLOSE_BUTTON="close-button";Je.CLASS_CLOSE_TOP="close-top";Je.CLASS_CLOSE_BOTTOM="close-bottom";Je.CLASS_DRAG="drag";Je.DEFAULT_WIDTH=245;Je.TEXT_CLOSED="Close Controls";Je.TEXT_OPEN="Open Controls";Je._keydownHandler=function(n){document.activeElement.type!=="text"&&(n.which===th||n.keyCode===th)&&Je.toggleHide()};$.bind(window,"keydown",Je._keydownHandler,!1);oe.extend(Je.prototype,{add:function(e,t){return Br(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Br(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;oe.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Vi.removeChild(this.domElement);var e=this;oe.each(this.__folders,function(t){e.removeFolder(t)}),$.unbind(window,"keydown",Je._keydownHandler,!1),rh(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var i=new Je(t);this.__folders[e]=i;var r=vl(this,i.domElement);return $.addClass(r,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],rh(e);var t=this;oe.each(e.__folders,function(i){e.removeFolder(i)}),oe.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=$.getOffset(e.__ul).top,i=0;oe.each(e.__ul.childNodes,function(r){e.autoPlace&&r===e.__save_row||(i+=$.getHeight(r))}),window.innerHeight-t-nh<i?($.addClass(e.domElement,Je.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-nh+"px"):($.removeClass(e.domElement,Je.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&oe.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:oe.debounce(function(){this.onResize()},50),remember:function(){if(oe.isUndefined(kr)&&(kr=new BE,kr.domElement.innerHTML=UE),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;oe.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&GE(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Bs(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Ro(this)),e.folders={},oe.each(this.__folders,function(t,i){e.folders[i]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Ro(this),Fs(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Xr]=Ro(this,!0)),this.load.remembered[e]=Ro(this),this.preset=e,ks(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){oe.each(this.__controllers,function(t){this.getRoot().load.remembered?Zf(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),oe.each(this.__folders,function(t){t.revert(t)}),e||Fs(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Jf(this.__listening)},updateDisplay:function(){oe.each(this.__controllers,function(e){e.updateDisplay()}),oe.each(this.__folders,function(e){e.updateDisplay()})}});function vl(n,e,t){var i=document.createElement("li");return e&&i.appendChild(e),t?n.__ul.insertBefore(i,t):n.__ul.appendChild(i),n.onResize(),i}function rh(n){$.unbind(window,"resize",n.__resizeHandler),n.saveToLocalStorageIfPossible&&$.unbind(window,"unload",n.saveToLocalStorageIfPossible)}function Fs(n,e){var t=n.__preset_select[n.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function HE(n,e,t){if(t.__li=e,t.__gui=n,oe.extend(t,{options:function(a){if(arguments.length>1){var s=t.__li.nextElementSibling;return t.remove(),Br(n,t.object,t.property,{before:s,factoryArgs:[oe.toArray(arguments)]})}if(oe.isArray(a)||oe.isObject(a)){var l=t.__li.nextElementSibling;return t.remove(),Br(n,t.object,t.property,{before:l,factoryArgs:[a]})}},name:function(a){return t.__li.firstElementChild.firstElementChild.innerHTML=a,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Us){var i=new Yo(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});oe.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(o){var a=t[o],s=i[o];t[o]=i[o]=function(){var l=Array.prototype.slice.call(arguments);return s.apply(i,l),a.apply(t,l)}}),$.addClass(e,"has-slider"),t.domElement.insertBefore(i.domElement,t.domElement.firstElementChild)}else if(t instanceof Yo){var r=function(a){if(oe.isNumber(t.__min)&&oe.isNumber(t.__max)){var s=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=Br(n,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(s),l&&c.listen(),c}return a};t.min=oe.compose(r,t.min),t.max=oe.compose(r,t.max)}else t instanceof $f?($.bind(e,"click",function(){$.fakeEvent(t.__checkbox,"click")}),$.bind(t.__checkbox,"click",function(o){o.stopPropagation()})):t instanceof Yf?($.bind(e,"click",function(){$.fakeEvent(t.__button,"click")}),$.bind(e,"mouseover",function(){$.addClass(t.__button,"hover")}),$.bind(e,"mouseout",function(){$.removeClass(t.__button,"hover")})):t instanceof Ns&&($.addClass(e,"color"),t.updateDisplay=oe.compose(function(o){return e.style.borderLeftColor=t.__color.toString(),o},t.updateDisplay),t.updateDisplay());t.setValue=oe.compose(function(o){return n.getRoot().__preset_select&&t.isModified()&&Fs(n.getRoot(),!0),o},t.setValue)}function Zf(n,e){var t=n.getRoot(),i=t.__rememberedObjects.indexOf(e.object);if(i!==-1){var r=t.__rememberedObjectIndecesToControllers[i];if(r===void 0&&(r={},t.__rememberedObjectIndecesToControllers[i]=r),r[e.property]=e,t.load&&t.load.remembered){var o=t.load.remembered,a=void 0;if(o[n.preset])a=o[n.preset];else if(o[Xr])a=o[Xr];else return;if(a[i]&&a[i][e.property]!==void 0){var s=a[i][e.property];e.initialValue=s,e.setValue(s)}}}}function Br(n,e,t,i){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var r=void 0;if(i.color)r=new Ns(e,t);else{var o=[e,t].concat(i.factoryArgs);r=NE.apply(n,o)}i.before instanceof _i&&(i.before=i.before.__li),Zf(n,r),$.addClass(r.domElement,"c");var a=document.createElement("span");$.addClass(a,"property-name"),a.innerHTML=r.property;var s=document.createElement("div");s.appendChild(a),s.appendChild(r.domElement);var l=vl(n,s,i.before);return $.addClass(l,Je.CLASS_CONTROLLER_ROW),r instanceof Ns?$.addClass(l,"color"):$.addClass(l,TE(r.getValue())),HE(n,l,r),n.__controllers.push(r),r}function Wi(n,e){return document.location.href+"."+e}function ks(n,e,t){var i=document.createElement("option");i.innerHTML=e,i.value=e,n.__preset_select.appendChild(i),t&&(n.__preset_select.selectedIndex=n.__preset_select.length-1)}function oh(n,e){e.style.display=n.useLocalStorage?"block":"none"}function GE(n){var e=n.__save_row=document.createElement("li");$.addClass(n.domElement,"has-save"),n.__ul.insertBefore(e,n.__ul.firstChild),$.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",$.addClass(t,"button gears");var i=document.createElement("span");i.innerHTML="Save",$.addClass(i,"button"),$.addClass(i,"save");var r=document.createElement("span");r.innerHTML="New",$.addClass(r,"button"),$.addClass(r,"save-as");var o=document.createElement("span");o.innerHTML="Revert",$.addClass(o,"button"),$.addClass(o,"revert");var a=n.__preset_select=document.createElement("select");if(n.load&&n.load.remembered?oe.each(n.load.remembered,function(h,f){ks(n,f,f===n.preset)}):ks(n,Xr,!1),$.bind(a,"change",function(){for(var h=0;h<n.__preset_select.length;h++)n.__preset_select[h].innerHTML=n.__preset_select[h].value;n.preset=this.value}),e.appendChild(a),e.appendChild(t),e.appendChild(i),e.appendChild(r),e.appendChild(o),Pr){var s=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Wi(n,"isLocal"))==="true"&&l.setAttribute("checked","checked"),oh(n,s),$.bind(l,"change",function(){n.useLocalStorage=!n.useLocalStorage,oh(n,s)})}var u=document.getElementById("dg-new-constructor");$.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&kr.hide()}),$.bind(t,"click",function(){u.innerHTML=JSON.stringify(n.getSaveObject(),void 0,2),kr.show(),u.focus(),u.select()}),$.bind(i,"click",function(){n.save()}),$.bind(r,"click",function(){var h=prompt("Enter a new preset name.");h&&n.saveAs(h)}),$.bind(o,"click",function(){n.revert()})}function VE(n){var e=void 0;n.__resize_handle=document.createElement("div"),oe.extend(n.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(o){return o.preventDefault(),n.width+=e-o.clientX,n.onResize(),e=o.clientX,!1}function i(){$.removeClass(n.__closeButton,Je.CLASS_DRAG),$.unbind(window,"mousemove",t),$.unbind(window,"mouseup",i)}function r(o){return o.preventDefault(),e=o.clientX,$.addClass(n.__closeButton,Je.CLASS_DRAG),$.bind(window,"mousemove",t),$.bind(window,"mouseup",i),!1}$.bind(n.__resize_handle,"mousedown",r),$.bind(n.__closeButton,"mousedown",r),n.domElement.insertBefore(n.__resize_handle,n.domElement.firstElementChild)}function Bs(n,e){n.domElement.style.width=e+"px",n.__save_row&&n.autoPlace&&(n.__save_row.style.width=e+"px"),n.__closeButton&&(n.__closeButton.style.width=e+"px")}function Ro(n,e){var t={};return oe.each(n.__rememberedObjects,function(i,r){var o={},a=n.__rememberedObjectIndecesToControllers[r];oe.each(a,function(s,l){o[l]=e?s.initialValue:s.getValue()}),t[r]=o}),t}function WE(n){for(var e=0;e<n.__preset_select.length;e++)n.__preset_select[e].value===n.preset&&(n.__preset_select.selectedIndex=e)}function Jf(n){n.length!==0&&kE.call(window,function(){Jf(n)}),oe.each(n,function(e){e.updateDisplay()})}var jE=Je;class XE{constructor(){this.resources={},this.recursive_loops=20}getDataset(e,t,i){this.recursive=this.recursive_loops,this.graph=t,this.nt=i,this.fetchSolidData(e).then(r=>{console.log(r),this.processJsonld({jsonld:r,url:e.url})}).catch(r=>{console.log(r.message)})}async fetchSolidData(e={}){this.resources[e.url]={options:e};const t=await fetch(e.url,{method:"GET",headers:{Accept:"application/ld+json"}});if(!t.ok){const r=`An error has occured: ${t.status}`;throw new Error(r)}return await t.json()}processJsonld(e){let t=this.nt,i=this.graph,r=e.jsonld["@graph"];for(let o of r){console.log(o);let a=o["@id"];!a.startsWith("http")&&a.endsWith(":")&&(a=a.slice(0,-1),a=e.jsonld["@context"][a]);let s=o["dct:modified"]["@value"]||o["dct:modified"][0]["@value"];if(console.log(s),s!=null){let l=new Date(s).getTime();console.log(a,s);let c={id:a,modified:s,timestamp:l,color:"#ff0000",parent:e.url};this.recursive>0&&o["@type"].includes("ldp:BasicContainer")&&(this.recursive--,console.log("recursive loops",this.recursive),c.color="#ffff00",console.log("to fetch",a),this.resources[a]==null?this.fetchSolidData({url:a,parent:e.url}).then(h=>{console.log(h),this.processJsonld({jsonld:h,url:a})}).catch(h=>{console.log(h.message)}):console.log("already visited",a));let u=t.createEventBall(c);t.addNode(u,i)}else console.warn("modified undefined",o)}}}let Po;const $E=new Uint8Array(16);function qE(){if(!Po&&(Po=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Po))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Po($E)}const xt=[];for(let n=0;n<256;++n)xt.push((n+256).toString(16).slice(1));function YE(n,e=0){return(xt[n[e+0]]+xt[n[e+1]]+xt[n[e+2]]+xt[n[e+3]]+"-"+xt[n[e+4]]+xt[n[e+5]]+"-"+xt[n[e+6]]+xt[n[e+7]]+"-"+xt[n[e+8]]+xt[n[e+9]]+"-"+xt[n[e+10]]+xt[n[e+11]]+xt[n[e+12]]+xt[n[e+13]]+xt[n[e+14]]+xt[n[e+15]]).toLowerCase()}const KE=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ah={randomUUID:KE};function Qf(n,e,t){if(ah.randomUUID&&!e&&!n)return ah.randomUUID();n=n||{};const i=n.random||(n.rng||qE)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){t=t||0;for(let r=0;r<16;++r)e[t+r]=i[r];return e}return YE(i)}class ZE{constructor(e={}){this.options=e}async getEvents(e={}){console.log(e);let t=[],i=100;for(let r=0;r<i;r++){let o=r+Math.floor(Math.random()*360-r);console.log("nb_jours",o);let a=1e3*60*60*24*o,s=Date.now()+a,l=null,c={id:Qf(),name:"Nom_"+r+" on "+new Date(s).toLocaleDateString(),start:s,end:l,place:"place du "+r,images:["https://www.lyon.fr/sites/lyonfr/files/content/2023-06/poussineau_festisound_p.jpg","https://www.lyon.fr/sites/lyonfr/files/content/2023-06/naurunorilsk_p.jpg"],tags:["Musique","Spectacle","Tout l'monde dehors"],publics:["Tous Publics"],description:`Les associations Gones Music et Concert sous la Voûte organisent une grande soirée de musique, festive, conviviale.
         En première partie : Jimmy & Clem. Ces deux guitaristes virtuoses croix-roussiens aux sonorités latino-dynamique interpréteront les chefs-d’œuvre de Rodrigo y Gabriela.
         En deuxième partie : Charlie and the Soap Opera. Ce groupe lyonnais de 7 musiciens, jouant sur les grandes scènes des 5 continents depuis une quinzaine d'années, vous offrira une musique pop, funk, soul.
         L'ambiance sera chaude, mais tout sera prévu sur place pour vous restaurer (boissons, food truck...) dès 19h.
         A cette occasion, une grande tombola sera organisée le jour du concert ainsi que sur internet plusieurs semaines auparavant.`,link:"https://www.poussineau-festisound.com/",amount:["Gratuit - de 25 ans","5€ chômeurs","10€"],complement:"",multi_dates:[{start:"start_one",end:"end_one"},{start:"start_two",end:"end_two"}]};c.human_start=new Date(c.start*1e3),c.human_end=new Date(c.end*1e3),t.push(c)}return t}}class JE{constructor(e,t,i){this.graph=e,this.params=t,this.nt=i,console.log(this.graph),this.solid=new XE,this.eventManager=new ZE,this.init()}init(){let e=this.options={url:"https://spoggy-test2.solidcommunity.net/public/"},t=this.gui=new jE({useLocalStorage:!0});const i=t.addFolder("Camera");i.add(this,"resetCam").name("Reset Camera"),i.open();const r=t.addFolder("Helic");r.open(),r.add(this.params,"longueur",0,2e3,10,2e3).name("longueur").onChange(o=>{this.nt.updateNodes(this.graph)}),r.add(this.params,"sens",-2*Math.PI,2*Math.PI,.1,-2.2).name("Sens").onChange(o=>{this.nt.updateNodes(this.graph)}),r.add(this.params,"strates",0,240,1,144).name("strates").onChange(o=>{this.nt.updateNodes(this.graph)}),r.add(this.params,"progression",-2*Math.PI,2*Math.PI,.1,-.3).name("Progression").onChange(o=>{this.nt.updateNodes(this.graph)}),r.add(this.params,"fixed").name("Fixed"),r.add(this,"resetNodes").name("Reset"),t.add(this,"addNow").name("Add an event now"),t.add(this,"addOneDay").name("Add an event passed 24 hours"),t.add(e,"url"),t.add(this,"getSolid").name("Get Solid Events"),t.add(this,"getEvents").name("Get Events")}resetCam(){console.log(this.graph.camera(),this.graph.controls()),this.graph.cameraPosition({x:0,y:0,z:1e3,lookAt:{x:0,y:0,z:0}}),this.graph.camera().rotation.set(0,0,0),this.graph.camera().updateProjectionMatrix()}resetNodes(){this.nt.resetNodes(this.graph)}addNow(){let e=this.nt.createEventBall();this.nt.addNode(e,this.graph)}addOneDay(){let e=this.nt.createEventBall({timestamp:Date.now()-864e5});this.nt.addNode(e,this.graph)}getSolid(){this.solid.getDataset(this.options,this.graph,this.nt)}async getEvents(){let e={},t=await this.eventManager.getEvents(e);console.log("events",t),t.forEach(i=>{this.nt.addEventNode(i,this.graph)})}}class QE{constructor(e){this.graph=e;let t=new ta(1e3,1e3,1,1),i=new Wh({color:16776960,side:jt,wireframe:!0}),r=new bt(t,i);r.position.set(-100,-200,-100),r.name="red plane",r.rotation.set(.5*Math.PI,0,0),e.scene().add(r)}}function ew(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,a,s=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=o.call(t)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw r}}return s}}function tw(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function sh(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,pw(i.key),i)}}function nw(n,e,t){return e&&sh(n.prototype,e),t&&sh(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function iw(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&zs(n,e)}function Ko(n){return Ko=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ko(n)}function zs(n,e){return zs=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},zs(n,e)}function rw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ow(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function aw(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ow(n)}function sw(n){var e=rw();return function(){var i=Ko(n),r;if(e){var o=Ko(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return aw(this,r)}}function lh(n,e){return cw(n)||ew(n,e)||ed(n,e)||fw()}function Lo(n){return lw(n)||uw(n)||ed(n)||hw()}function lw(n){if(Array.isArray(n))return Hs(n)}function cw(n){if(Array.isArray(n))return n}function uw(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ed(n,e){if(n){if(typeof n=="string")return Hs(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Hs(n,e)}}function Hs(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function hw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dw(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function pw(n){var e=dw(n,"string");return typeof e=="symbol"?e:String(e)}var Hi=typeof window<"u"&&window.THREE?window.THREE:{LinearFilter:zt,Sprite:S0,SpriteMaterial:Bh,SRGBColorSpace:Fe,Texture:Ot},mw=function(n){iw(t,n);var e=sw(t);function t(){var i,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:10,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"rgba(255, 255, 255, 1)";return tw(this,t),i=e.call(this,new Hi.SpriteMaterial),i._text="".concat(r),i._textHeight=o,i._color=a,i._backgroundColor=!1,i._padding=0,i._borderWidth=0,i._borderRadius=0,i._borderColor="white",i._strokeWidth=0,i._strokeColor="white",i._fontFace="system-ui",i._fontSize=90,i._fontWeight="normal",i._canvas=document.createElement("canvas"),i._genCanvas(),i}return nw(t,[{key:"text",get:function(){return this._text},set:function(r){this._text=r,this._genCanvas()}},{key:"textHeight",get:function(){return this._textHeight},set:function(r){this._textHeight=r,this._genCanvas()}},{key:"color",get:function(){return this._color},set:function(r){this._color=r,this._genCanvas()}},{key:"backgroundColor",get:function(){return this._backgroundColor},set:function(r){this._backgroundColor=r,this._genCanvas()}},{key:"padding",get:function(){return this._padding},set:function(r){this._padding=r,this._genCanvas()}},{key:"borderWidth",get:function(){return this._borderWidth},set:function(r){this._borderWidth=r,this._genCanvas()}},{key:"borderRadius",get:function(){return this._borderRadius},set:function(r){this._borderRadius=r,this._genCanvas()}},{key:"borderColor",get:function(){return this._borderColor},set:function(r){this._borderColor=r,this._genCanvas()}},{key:"fontFace",get:function(){return this._fontFace},set:function(r){this._fontFace=r,this._genCanvas()}},{key:"fontSize",get:function(){return this._fontSize},set:function(r){this._fontSize=r,this._genCanvas()}},{key:"fontWeight",get:function(){return this._fontWeight},set:function(r){this._fontWeight=r,this._genCanvas()}},{key:"strokeWidth",get:function(){return this._strokeWidth},set:function(r){this._strokeWidth=r,this._genCanvas()}},{key:"strokeColor",get:function(){return this._strokeColor},set:function(r){this._strokeColor=r,this._genCanvas()}},{key:"_genCanvas",value:function(){var r=this,o=this._canvas,a=o.getContext("2d"),s=Array.isArray(this.borderWidth)?this.borderWidth:[this.borderWidth,this.borderWidth],l=s.map(function(T){return T*r.fontSize*.1}),c=Array.isArray(this.borderRadius)?this.borderRadius:[this.borderRadius,this.borderRadius,this.borderRadius,this.borderRadius],u=c.map(function(T){return T*r.fontSize*.1}),h=Array.isArray(this.padding)?this.padding:[this.padding,this.padding],f=h.map(function(T){return T*r.fontSize*.1}),p=this.text.split(`
`),g="".concat(this.fontWeight," ").concat(this.fontSize,"px ").concat(this.fontFace);a.font=g;var _=Math.max.apply(Math,Lo(p.map(function(T){return a.measureText(T).width}))),m=this.fontSize*p.length;if(o.width=_+l[0]*2+f[0]*2,o.height=m+l[1]*2+f[1]*2,this.borderWidth){if(a.strokeStyle=this.borderColor,l[0]){var d=l[0]/2;a.lineWidth=l[0],a.beginPath(),a.moveTo(d,u[0]),a.lineTo(d,o.height-u[3]),a.moveTo(o.width-d,u[1]),a.lineTo(o.width-d,o.height-u[2]),a.stroke()}if(l[1]){var b=l[1]/2;a.lineWidth=l[1],a.beginPath(),a.moveTo(Math.max(l[0],u[0]),b),a.lineTo(o.width-Math.max(l[0],u[1]),b),a.moveTo(Math.max(l[0],u[3]),o.height-b),a.lineTo(o.width-Math.max(l[0],u[2]),o.height-b),a.stroke()}if(this.borderRadius){var v=Math.max.apply(Math,Lo(l)),x=v/2;a.lineWidth=v,a.beginPath(),[!!u[0]&&[u[0],x,x,u[0]],!!u[1]&&[o.width-u[1],o.width-x,x,u[1]],!!u[2]&&[o.width-u[2],o.width-x,o.height-x,o.height-u[2]],!!u[3]&&[u[3],x,o.height-x,o.height-u[3]]].filter(function(T){return T}).forEach(function(T){var M=lh(T,4),w=M[0],z=M[1],V=M[2],F=M[3];a.moveTo(w,V),a.quadraticCurveTo(z,V,z,F)}),a.stroke()}}this.backgroundColor&&(a.fillStyle=this.backgroundColor,this.borderRadius?(a.beginPath(),a.moveTo(l[0],u[0]),[[l[0],u[0],o.width-u[1],l[1],l[1],l[1]],[o.width-l[0],o.width-l[0],o.width-l[0],l[1],u[1],o.height-u[2]],[o.width-l[0],o.width-u[2],u[3],o.height-l[1],o.height-l[1],o.height-l[1]],[l[0],l[0],l[0],o.height-l[1],o.height-u[3],u[0]]].forEach(function(T){var M=lh(T,6),w=M[0],z=M[1],V=M[2],F=M[3],L=M[4],P=M[5];a.quadraticCurveTo(w,F,z,L),a.lineTo(V,P)}),a.closePath(),a.fill()):a.fillRect(l[0],l[1],o.width-l[0]*2,o.height-l[1]*2)),a.translate.apply(a,Lo(l)),a.translate.apply(a,Lo(f)),a.font=g,a.fillStyle=this.color,a.textBaseline="bottom";var y=this.strokeWidth>0;y&&(a.lineWidth=this.strokeWidth*this.fontSize/10,a.strokeStyle=this.strokeColor),p.forEach(function(T,M){var w=(_-a.measureText(T).width)/2,z=(M+1)*r.fontSize;y&&a.strokeText(T,w,z),a.fillText(T,w,z)}),this.material.map&&this.material.map.dispose();var S=this.material.map=new Hi.Texture(o);S.minFilter=Hi.LinearFilter,S.colorSpace=Hi.SRGBColorSpace,S.needsUpdate=!0;var A=this.textHeight*p.length+s[1]*2+h[1]*2;this.scale.set(A*o.width/o.height,A,0)}},{key:"clone",value:function(){return new this.constructor(this.text,this.textHeight,this.color).copy(this)}},{key:"copy",value:function(r){return Hi.Sprite.prototype.copy.call(this,r),this.color=r.color,this.backgroundColor=r.backgroundColor,this.padding=r.padding,this.borderWidth=r.borderWidth,this.borderColor=r.borderColor,this.fontFace=r.fontFace,this.fontSize=r.fontSize,this.fontWeight=r.fontWeight,this.strokeWidth=r.strokeWidth,this.strokeColor=r.strokeColor,this}}]),t}(Hi.Sprite);function Lr(n,e,t){this.k=n,this.x=e,this.y=t}Lr.prototype={constructor:Lr,scale:function(n){return n===1?this:new Lr(this.k*n,this.x,this.y)},translate:function(n,e){return n===0&e===0?this:new Lr(this.k,this.x+this.k*n,this.y+this.k*e)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Lr.prototype;class gw{constructor(e){this.params=e}addNode(e,t){let{nodes:i,links:r}=t.graphData();e.name==null&&(e.name=e.id),i.push(e);let o={source:e.id,target:e.relative_time,name:"modified"};if(r.push(o),e.parent!=null){let a={source:e.parent,target:e.id,name:"contains"};r.push(a)}t.graphData({nodes:i,links:r})}addEventNode(e,t){console.log(e);let{nodes:i,links:r}=t.graphData();i.push(e);let o=new Date(e.start).setHours(0,0,0,0);console.log("start_day",o);let a=i.find(l=>l.date==o);console.log("found day node",a);let s={source:e.id,target:a.id,name:"start",color:"#00ff00"};if(console.log("link _start",s),r.push(s),e.end!=null){let l={source:e.id,target:e.end,name:"end",color:"#ff0000"};console.log("link_end",l),r.push(l)}else if(Date.now()%3==0){console.log(" //HACK random end to test");let l=Math.floor(Math.random()*10)+1;console.log("duration",l);let c=s.target+l;c>360&&(c=360);let u={source:e.id,target:c,name:"end",color:"#ff0000"};console.log("link_end",u),r.push(u)}t.graphData({nodes:i,links:r})}createEventBall(e={}){let t=31536e5;return e.id==null&&(e.id=Qf()),e.timestamp==null&&(e.timestamp=Date.now()),e.relative_time=Math.floor(e.timestamp*360/t/1e3/2),e}nodeObject(e){let t;switch(e.group){case"text_spirale":t=new mw(e.name),t.material.depthWrite=!0,t.color=e.color||"#ffffff",t.textHeight=8;break;default:const i=new $r(15,32,16),r=new or({color:e.color||16776960});t=new bt(i,r);break}return t}coords(e){let t=this.params;var i=e/t.N*Math.PI*2*t.progression,r=e/t.N*Math.PI*2*t.sens;let o=1+Math.cosh(r)*Math.cosh(i);var a=t.longueur*(Math.sinh(r)*Math.cos(t.strates*i))/o,s=t.longueur*(Math.sinh(r)*Math.sin(t.strates*i))/o,l=t.longueur*(Math.cosh(r)*Math.sinh(i))/o;return{x:a,y:s,z:l}}coords1(e){let t=360*e,i=254*e,r=Math.PI*2*(t-.5),o=Math.PI*2*(i-.5),a=1+Math.cosh(r)*Math.cosh(o),s=Math.sinh(o)*Math.cos(5*r)/a,l=Math.sinh(o)*Math.sin(5*r)/a,c=Math.cosh(o)*Math.sinh(r)/a;return console.log(s,c,l),{x:s,y:c,z:l}}resetNodes(e){this.params={N:300,progression:-1.1,sens:-2.2,longueur:2e3,strates:170},console.log("reset blocks",this.params),this.updateNodes(e)}updateNodes(e){this.throttle(this._updateNodes(e),5e3,!1,!0)}_updateNodes(e){let t=this.params,{nodes:i,links:r}=e.graphData();i.forEach(o=>{if(o.group=="text_spirale"){let a=this.coords(o.id);t.fixed==!0?(o.fx=a.x,o.fy=a.y,o.fz=a.z):(o.x=a.x,o.y=a.y,o.z=a.z,delete o.fx,delete o.fy,delete o.fz)}}),e.graphData({nodes:i,links:r})}throttle(e,t,i,r,o){var a,s,l,c=null,u=0,h=function(){u=new Date,c=null,l=e.apply(a,s)};return function(){var f=new Date;!u&&!i&&(u=f);var p=t-(f-u);return a=o||this,s=arguments,p<=0?(clearTimeout(c),c=null,u=f,l=e.apply(a,s)):!c&&r&&(c=setTimeout(h,p)),l}}}class _w{constructor(e){this.graph=e,this.onEngineTick(),this.init()}init(){let e=this.graph;function t(){e.camera().aspect=window.innerWidth/window.innerHeight,e.camera().updateProjectionMatrix(),e.renderer().setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",t,!1)}onEngineTick(){this.graph.scene().traverse(e=>{switch(e.userData.type){case"cube":e.rotation.x+=.01,e.rotation.y+=.01,e.material.color.set(65280);break;case"now_repere":let i=-Math.trunc(Date.now()/1e3)*Math.PI/30+Math.PI/2;e.position.x=Math.cos(i),e.position.y=Math.sin(i);break}})}}class la extends Dt{constructor(e=(r,o,a)=>a.set(r,o,Math.cos(r)*Math.sin(o)),t=8,i=8){super(),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:i};const r=[],o=[],a=[],s=[],l=1e-5,c=new D,u=new D,h=new D,f=new D,p=new D,g=t+1;for(let _=0;_<=i;_++){const m=_/i;for(let d=0;d<=t;d++){const b=d/t;e(b,m,u),o.push(u.x,u.y,u.z),b-l>=0?(e(b-l,m,h),f.subVectors(u,h)):(e(b+l,m,h),f.subVectors(h,u)),m-l>=0?(e(b,m-l,h),p.subVectors(u,h)):(e(b,m+l,h),p.subVectors(h,u)),c.crossVectors(f,p).normalize(),a.push(c.x,c.y,c.z),s.push(b,m)}}for(let _=0;_<i;_++)for(let m=0;m<t;m++){const d=_*g+m,b=_*g+m+1,v=(_+1)*g+m+1,x=(_+1)*g+m;r.push(d,b,x),r.push(b,v,x)}this.setIndex(r),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(a,3)),this.setAttribute("uv",new ot(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}const rr={klein:function(n,e,t){e*=Math.PI,n*=2*Math.PI,e=e*2;let i,r;e<Math.PI?(i=3*Math.cos(e)*(1+Math.sin(e))+2*(1-Math.cos(e)/2)*Math.cos(e)*Math.cos(n),r=-8*Math.sin(e)-2*(1-Math.cos(e)/2)*Math.sin(e)*Math.cos(n)):(i=3*Math.cos(e)*(1+Math.sin(e))+2*(1-Math.cos(e)/2)*Math.cos(n+Math.PI),r=-8*Math.sin(e));const o=-2*(1-Math.cos(e)/2)*Math.sin(n);t.set(i,o,r)},plane:function(n,e){return function(t,i,r){const o=t*n,a=0,s=i*e;r.set(o,a,s)}},mobius:function(n,e,t){n=n-.5;const i=2*Math.PI*e,r=2,o=Math.cos(i)*(r+n*Math.cos(i/2)),a=Math.sin(i)*(r+n*Math.cos(i/2)),s=n*Math.sin(i/2);t.set(o,a,s)},mobius3d:function(n,e,t){n*=Math.PI,e*=2*Math.PI,n=n*2;const i=n/2,r=2.25,o=.125,a=.65;let s=o*Math.cos(e)*Math.cos(i)-a*Math.sin(e)*Math.sin(i);const l=o*Math.cos(e)*Math.sin(i)+a*Math.sin(e)*Math.cos(i),c=(r+s)*Math.sin(n);s=(r+s)*Math.cos(n),t.set(s,c,l)}};rr.TubeGeometry=class extends la{constructor(e,t=64,i=1,r=8,o=!1){const a=t+1,s=e.computeFrenetFrames(t,o),l=s.tangents,c=s.normals,u=s.binormals,h=new D;function f(p,g,_){g*=2*Math.PI;const m=Math.floor(p*(a-1));e.getPointAt(p,h);const d=c[m],b=u[m],v=-i*Math.cos(g),x=i*Math.sin(g);h.x+=v*d.x+x*b.x,h.y+=v*d.y+x*b.y,h.z+=v*d.z+x*b.z,_.copy(h)}super(f,t,r),this.tangents=l,this.normals=c,this.binormals=u,this.path=e,this.segments=t,this.radius=i,this.segmentsRadius=r,this.closed=o}};rr.TorusKnotGeometry=class extends rr.TubeGeometry{constructor(e=200,t=40,i=64,r=8,o=2,a=3){class s extends gn{getPoint(f,p=new D){const g=p;f*=Math.PI*2;const _=.5,m=(1+_*Math.cos(a*f))*Math.cos(o*f),d=(1+_*Math.cos(a*f))*Math.sin(o*f),b=_*Math.sin(a*f);return g.set(m,d,b).multiplyScalar(e)}}const l=i,c=r,u=new s;super(u,l,t,c,!0,!1),this.radius=e,this.tube=t,this.segmentsT=i,this.segmentsR=r,this.p=o,this.q=a}};rr.SphereGeometry=class extends la{constructor(e,t,i){function r(o,a,s){o*=Math.PI,a*=2*Math.PI;const l=e*Math.sin(o)*Math.cos(a),c=e*Math.sin(o)*Math.sin(a),u=e*Math.cos(o);s.set(l,c,u)}super(r,t,i)}};rr.PlaneGeometry=class extends la{constructor(e,t,i,r){function o(a,s,l){const c=a*e,u=0,h=s*t;l.set(c,u,h)}super(o,i,r)}};class yl{constructor(e){return this.options=e,console.log(this.options),this.init()}init(){let e=new G0({side:jt}),t;switch(this.options.type){case"catenoid":t=this.catenoid;break;case"catenoid2":t=this.catenoid2;break;case"hyperbolic":t=this.hyperbolic;break;case"klein":t=rr.klein;break;default:console.log("type unknown",this.options.type);break}let i=new la(t,this.options.slices,this.options.stacks),r=new bt(i,e);return r.position.set(this.options.x,this.options.y,this.options.z),r.name=this.options.name,r}catenoid(e,t,i){let r=Math.PI*2*(t-.5),o=20,a=e*Math.cos(o*t),s=r,l=e*Math.sin(o*t);i.set(a,l,s)}catenoid2(e,t,i){let r=20,o=e*Math.cos(r*t),a=e*Math.sin(r*t),s=t;i.set(o,a,s)}hyperbolic(e,t,i){let r=Math.PI*2*(e-.5),o=Math.PI*2*(t-.5),a=1+Math.cosh(r)*Math.cosh(o),s=Math.sinh(o)*Math.cos(5*r)/a,l=Math.sinh(o)*Math.sin(5*r)/a,c=Math.cosh(o)*Math.sinh(r)/a;i.set(s,c,l)}onEngineTick(){console.log("tick")}}function vw(n){let e=[];e=e.concat(un({type:"seconde",start:0,number:60,step:5,color:16776960,z_offset:0})),e=e.concat(un({type:"minute",start:0,number:60,step:5,color:65535,z_offset:1})),e=e.concat(un({type:"heure",start:0,number:24,step:3,color:65280,z_offset:2})),e=e.concat(un({type:"jour",start:1,number:7,step:1,color:16776960,z_offset:3})),e=e.concat(un({type:"semaine",start:0,number:4,step:1,color:65535,z_offset:4})),e=e.concat(un({type:"mois",start:0,number:12,step:1,color:65280,z_offset:5})),e=e.concat(un({type:"annee",start:0,number:10,step:1,color:16776960,z_offset:6})),e=e.concat(un({type:"decenie",start:0,number:10,step:1,color:65535,z_offset:7})),e=e.concat(un({type:"siècle",start:0,number:10,step:1,color:65280,z_offset:8})),e=e.concat(un({type:"millénaire",start:0,number:10,step:1,color:16776960,z_offset:9})),e=e.concat(yw({name:"now",type:"now_repere",color:65280})),e=e.forEach(t=>{n.add(t)}),console.log(n)}function yw(n){let e=[];const t=new Kn(.05,.05,.04),i=new or({color:n.color}),r=new bt(t,i);return r.userData.type=n.type,r.name=n.name,e.push(r),console.log(r),e}function un(n){let e=[];for(let t=n.start;t<n.number;t++){let i={x:.02,y:.01,z:.02};t==n.start?i={x:.02,y:.5,z:.02}:t%n.step==0&&(i={x:.02,y:.1,z:.02});const r=new Kn(i.x,i.y,i.z),o=new or({color:n.color}),a=new bt(r,o);let s=t*2*Math.PI/n.number-Math.PI/2,l=Math.cos(s),c=-Math.sin(s),u=n.z_offset;a.position.set(l,c,u),a.userData.type=n.type,a.name=n.type+"_"+t,e.push(a)}return e}const ch=500,xw=50,ss=3;function bw(n){for(let e=0;e<ch;e++){const t=new Kn(.1,.1,.1),i=new H0({emissive:2531945,color:65280,roughness:0,metalness:.5,reflectivity:.5,clearcoat:1,clearcoatRoughness:.4,flatShading:!0,side:jt}),r=new bt(t,i);r.name="cube_"+e,r.userData.type="cube";let o=e*(Math.PI*2/xw),a=5,s=e/100,l=o,c=1+Math.cosh(s)*Math.cosh(l),u=ss*(Math.sinh(l)*Math.cos(a*s))/c+3,h=ss*(Math.sinh(l)*Math.sin(a*s))/c,f=-ss*(Math.cosh(l)*Math.sinh(s))/c;r.scale.set(2,1-e/ch,2),r.position.set(u,h,f),n.add(r)}console.log(n)}const zr={turns:5,minR:25},hn=Math.min(window.innerWidth,window.innerHeight)/4,ls={"# turns":zr.turns,"Inner Radius":zr.minR,"Scale Exponent":1};class Mw{constructor(e,t){this.graph=e,t.add(ls,"# turns",.25,10).onChange(h=>{i.range([90,90+h*360].map(u)),r.ticks(h*8),c()}),t.add(ls,"Inner Radius",0,hn-5).onChange(h=>{r.startRadius(h),c()}),t.add(ls,"Scale Exponent",1,10).onChange(h=>{i.exponent(1/h),c()});const i=d3.scalePow().domain([0,100]).range([90,zr.turns*360].map(u)),r=d3.axisRadialInner(i).startRadius(zr.minR).endRadius(hn-5).ticks(zr.turns*8),a=d3.select("#canvas").attr("width",hn).attr("height",hn).attr("viewBox",`${-hn} ${-hn} ${hn*2} ${hn*2}`).append("g").classed("axis",!0);var s=d3.select("#log_demo").append("svg").attr("width",hn*4).attr("height",hn/8),l=d3.scaleLog().domain([1,1e3]).range([100,800]).base(10);s.append("g").attr("transform","translate(-95,0)").call(d3.axisBottom(l).tickFormat(d3.format(".2"))),c();function c(){a.call(r)}function u(h){return h*Math.PI/180}}}let td=[],ca={N:361,longueur:2e3,sens:-2.2,strates:99,progression:-.4,fixed:!0},xl=new gw(ca);for(let n=0;n<ca.N;n++){let e=864e5*n,t=new Date(Date.now()+e);t=t.setHours(0,0,0,0);let i=new Date(t).toLocaleDateString(),r=xl.coords(n),o={id:n,name:i,color:"green",group:"text_spirale",timestamp:e,date:t,fx:r.x,fy:r.y,fz:r.z};td.push(o)}const Sw={nodes:td,links:[...Array(ca.N).keys()].filter(n=>n).map(n=>({source:n,target:n-1}))},Ht=SE()(document.getElementById("3d-graph")).backgroundColor("#001b42").graphData(Sw).nodeThreeObject(n=>xl.nodeObject(n)).onNodeClick((n,e)=>{console.log(n,e)}).onNodeHover((n,e)=>{console.log(n,e)}).onNodeRightClick((n,e)=>{console.log(n,e)}).linkColor(n=>n.color);let Ew=new JE(Ht,ca,xl);new QE(Ht);Ht.d3Force("center",null);vw(Ht.scene());bw(Ht.scene());let ww=new _w(Ht);Ht.onEngineTick(()=>{ww.onEngineTick()});let Oo=!0;document.getElementById("animationToggle").addEventListener("click",n=>{Oo?Ht.pauseAnimation():Ht.resumeAnimation(),Oo=!Oo,n.target.innerHTML=`${Oo?"Pause":"Resume"} Animation`});let Tw=new yl({type:"catenoid",slices:250,stacks:400,x:-2,y:-2,z:0}),Aw=new yl({type:"catenoid2",slices:25,stacks:400,x:-2,y:2,z:0}),Cw=new yl({type:"hyperbolic",slices:360,stacks:254,x:-2,y:0,z:0});Ht.scene().add(Tw);Ht.scene().add(Aw);Ht.scene().add(Cw);new Mw(Ht,Ew.gui)});export default Rw();
