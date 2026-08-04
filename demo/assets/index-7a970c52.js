var tl=Object.defineProperty;var nl=(d,f,y)=>f in d?tl(d,f,{enumerable:!0,configurable:!0,writable:!0,value:y}):d[f]=y;var R=(d,f,y)=>(nl(d,typeof f!="symbol"?f+"":f,y),y);(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const I of document.querySelectorAll('link[rel="modulepreload"]'))G(I);new MutationObserver(I=>{for(const C of I)if(C.type==="childList")for(const V of C.addedNodes)V.tagName==="LINK"&&V.rel==="modulepreload"&&G(V)}).observe(document,{childList:!0,subtree:!0});function y(I){const C={};return I.integrity&&(C.integrity=I.integrity),I.referrerPolicy&&(C.referrerPolicy=I.referrerPolicy),I.crossOrigin==="use-credentials"?C.credentials="include":I.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function G(I){if(I.ep)return;I.ep=!0;const C=y(I);fetch(I.href,C)}})();function il(d,f){return class extends d{constructor(...y){super(...y),f(this)}}}const sl=il(Array,d=>d.fill(0));let pe=1e-6;function rl(d){function f(w=0,P=0){const S=new d(2);return w!==void 0&&(S[0]=w,P!==void 0&&(S[1]=P)),S}const y=f;function G(w,P,S){const s=S??new d(2);return s[0]=w,s[1]=P,s}function I(w,P){const S=P??new d(2);return S[0]=Math.ceil(w[0]),S[1]=Math.ceil(w[1]),S}function C(w,P){const S=P??new d(2);return S[0]=Math.floor(w[0]),S[1]=Math.floor(w[1]),S}function V(w,P){const S=P??new d(2);return S[0]=Math.round(w[0]),S[1]=Math.round(w[1]),S}function W(w,P=0,S=1,s){const _=s??new d(2);return _[0]=Math.min(S,Math.max(P,w[0])),_[1]=Math.min(S,Math.max(P,w[1])),_}function M(w,P,S){const s=S??new d(2);return s[0]=w[0]+P[0],s[1]=w[1]+P[1],s}function F(w,P,S,s){const _=s??new d(2);return _[0]=w[0]+P[0]*S,_[1]=w[1]+P[1]*S,_}function D(w,P){const S=w[0],s=w[1],_=P[0],l=P[1],c=Math.sqrt(S*S+s*s),o=Math.sqrt(_*_+l*l),h=c*o,b=h&&Ge(w,P)/h;return Math.acos(b)}function O(w,P,S){const s=S??new d(2);return s[0]=w[0]-P[0],s[1]=w[1]-P[1],s}const ee=O;function ne(w,P){return Math.abs(w[0]-P[0])<pe&&Math.abs(w[1]-P[1])<pe}function H(w,P){return w[0]===P[0]&&w[1]===P[1]}function N(w,P,S,s){const _=s??new d(2);return _[0]=w[0]+S*(P[0]-w[0]),_[1]=w[1]+S*(P[1]-w[1]),_}function Y(w,P,S,s){const _=s??new d(2);return _[0]=w[0]+S[0]*(P[0]-w[0]),_[1]=w[1]+S[1]*(P[1]-w[1]),_}function X(w,P,S){const s=S??new d(2);return s[0]=Math.max(w[0],P[0]),s[1]=Math.max(w[1],P[1]),s}function z(w,P,S){const s=S??new d(2);return s[0]=Math.min(w[0],P[0]),s[1]=Math.min(w[1],P[1]),s}function Q(w,P,S){const s=S??new d(2);return s[0]=w[0]*P,s[1]=w[1]*P,s}const T=Q;function J(w,P,S){const s=S??new d(2);return s[0]=w[0]/P,s[1]=w[1]/P,s}function ge(w,P){const S=P??new d(2);return S[0]=1/w[0],S[1]=1/w[1],S}const ue=ge;function ve(w,P,S){const s=S??new d(3),_=w[0]*P[1]-w[1]*P[0];return s[0]=0,s[1]=0,s[2]=_,s}function Ge(w,P){return w[0]*P[0]+w[1]*P[1]}function be(w){const P=w[0],S=w[1];return Math.sqrt(P*P+S*S)}const Te=be;function Ee(w){const P=w[0],S=w[1];return P*P+S*S}const Xe=Ee;function De(w,P){const S=w[0]-P[0],s=w[1]-P[1];return Math.sqrt(S*S+s*s)}const ce=De;function fe(w,P){const S=w[0]-P[0],s=w[1]-P[1];return S*S+s*s}const se=fe;function K(w,P){const S=P??new d(2),s=w[0],_=w[1],l=Math.sqrt(s*s+_*_);return l>1e-5?(S[0]=s/l,S[1]=_/l):(S[0]=0,S[1]=0),S}function Be(w,P){const S=P??new d(2);return S[0]=-w[0],S[1]=-w[1],S}function we(w,P){const S=P??new d(2);return S[0]=w[0],S[1]=w[1],S}const Ce=we;function Se(w,P,S){const s=S??new d(2);return s[0]=w[0]*P[0],s[1]=w[1]*P[1],s}const Qe=Se;function de(w,P,S){const s=S??new d(2);return s[0]=w[0]/P[0],s[1]=w[1]/P[1],s}const xe=de;function et(w=1,P){const S=P??new d(2),s=Math.random()*2*Math.PI;return S[0]=Math.cos(s)*w,S[1]=Math.sin(s)*w,S}function B(w){const P=w??new d(2);return P[0]=0,P[1]=0,P}function L(w,P,S){const s=S??new d(2),_=w[0],l=w[1];return s[0]=_*P[0]+l*P[4]+P[12],s[1]=_*P[1]+l*P[5]+P[13],s}function v(w,P,S){const s=S??new d(2),_=w[0],l=w[1];return s[0]=P[0]*_+P[4]*l+P[8],s[1]=P[1]*_+P[5]*l+P[9],s}function r(w,P,S,s){const _=s??new d(2),l=w[0]-P[0],c=w[1]-P[1],o=Math.sin(S),h=Math.cos(S);return _[0]=l*h-c*o+P[0],_[1]=l*o+c*h+P[1],_}function p(w,P,S){const s=S??new d(2);return K(w,s),Q(s,P,s)}function u(w,P,S){const s=S??new d(2);return be(w)>P?p(w,P,s):we(w,s)}function m(w,P,S){const s=S??new d(2);return N(w,P,.5,s)}return{create:f,fromValues:y,set:G,ceil:I,floor:C,round:V,clamp:W,add:M,addScaled:F,angle:D,subtract:O,sub:ee,equalsApproximately:ne,equals:H,lerp:N,lerpV:Y,max:X,min:z,mulScalar:Q,scale:T,divScalar:J,inverse:ge,invert:ue,cross:ve,dot:Ge,length:be,len:Te,lengthSq:Ee,lenSq:Xe,distance:De,dist:ce,distanceSq:fe,distSq:se,normalize:K,negate:Be,copy:we,clone:Ce,multiply:Se,mul:Qe,divide:de,div:xe,random:et,zero:B,transformMat4:L,transformMat3:v,rotate:r,setLength:p,truncate:u,midpoint:m}}const Cs=new Map;function As(d){let f=Cs.get(d);return f||(f=rl(d),Cs.set(d,f)),f}function ol(d){function f(o,h,b){const g=new d(3);return o!==void 0&&(g[0]=o,h!==void 0&&(g[1]=h,b!==void 0&&(g[2]=b))),g}const y=f;function G(o,h,b,g){const k=g??new d(3);return k[0]=o,k[1]=h,k[2]=b,k}function I(o,h){const b=h??new d(3);return b[0]=Math.ceil(o[0]),b[1]=Math.ceil(o[1]),b[2]=Math.ceil(o[2]),b}function C(o,h){const b=h??new d(3);return b[0]=Math.floor(o[0]),b[1]=Math.floor(o[1]),b[2]=Math.floor(o[2]),b}function V(o,h){const b=h??new d(3);return b[0]=Math.round(o[0]),b[1]=Math.round(o[1]),b[2]=Math.round(o[2]),b}function W(o,h=0,b=1,g){const k=g??new d(3);return k[0]=Math.min(b,Math.max(h,o[0])),k[1]=Math.min(b,Math.max(h,o[1])),k[2]=Math.min(b,Math.max(h,o[2])),k}function M(o,h,b){const g=b??new d(3);return g[0]=o[0]+h[0],g[1]=o[1]+h[1],g[2]=o[2]+h[2],g}function F(o,h,b,g){const k=g??new d(3);return k[0]=o[0]+h[0]*b,k[1]=o[1]+h[1]*b,k[2]=o[2]+h[2]*b,k}function D(o,h){const b=o[0],g=o[1],k=o[2],U=h[0],A=h[1],j=h[2],$=Math.sqrt(b*b+g*g+k*k),Z=Math.sqrt(U*U+A*A+j*j),ie=$*Z,ae=ie&&Ge(o,h)/ie;return Math.acos(ae)}function O(o,h,b){const g=b??new d(3);return g[0]=o[0]-h[0],g[1]=o[1]-h[1],g[2]=o[2]-h[2],g}const ee=O;function ne(o,h){return Math.abs(o[0]-h[0])<pe&&Math.abs(o[1]-h[1])<pe&&Math.abs(o[2]-h[2])<pe}function H(o,h){return o[0]===h[0]&&o[1]===h[1]&&o[2]===h[2]}function N(o,h,b,g){const k=g??new d(3);return k[0]=o[0]+b*(h[0]-o[0]),k[1]=o[1]+b*(h[1]-o[1]),k[2]=o[2]+b*(h[2]-o[2]),k}function Y(o,h,b,g){const k=g??new d(3);return k[0]=o[0]+b[0]*(h[0]-o[0]),k[1]=o[1]+b[1]*(h[1]-o[1]),k[2]=o[2]+b[2]*(h[2]-o[2]),k}function X(o,h,b){const g=b??new d(3);return g[0]=Math.max(o[0],h[0]),g[1]=Math.max(o[1],h[1]),g[2]=Math.max(o[2],h[2]),g}function z(o,h,b){const g=b??new d(3);return g[0]=Math.min(o[0],h[0]),g[1]=Math.min(o[1],h[1]),g[2]=Math.min(o[2],h[2]),g}function Q(o,h,b){const g=b??new d(3);return g[0]=o[0]*h,g[1]=o[1]*h,g[2]=o[2]*h,g}const T=Q;function J(o,h,b){const g=b??new d(3);return g[0]=o[0]/h,g[1]=o[1]/h,g[2]=o[2]/h,g}function ge(o,h){const b=h??new d(3);return b[0]=1/o[0],b[1]=1/o[1],b[2]=1/o[2],b}const ue=ge;function ve(o,h,b){const g=b??new d(3),k=o[2]*h[0]-o[0]*h[2],U=o[0]*h[1]-o[1]*h[0];return g[0]=o[1]*h[2]-o[2]*h[1],g[1]=k,g[2]=U,g}function Ge(o,h){return o[0]*h[0]+o[1]*h[1]+o[2]*h[2]}function be(o){const h=o[0],b=o[1],g=o[2];return Math.sqrt(h*h+b*b+g*g)}const Te=be;function Ee(o){const h=o[0],b=o[1],g=o[2];return h*h+b*b+g*g}const Xe=Ee;function De(o,h){const b=o[0]-h[0],g=o[1]-h[1],k=o[2]-h[2];return Math.sqrt(b*b+g*g+k*k)}const ce=De;function fe(o,h){const b=o[0]-h[0],g=o[1]-h[1],k=o[2]-h[2];return b*b+g*g+k*k}const se=fe;function K(o,h){const b=h??new d(3),g=o[0],k=o[1],U=o[2],A=Math.sqrt(g*g+k*k+U*U);return A>1e-5?(b[0]=g/A,b[1]=k/A,b[2]=U/A):(b[0]=0,b[1]=0,b[2]=0),b}function Be(o,h){const b=h??new d(3);return b[0]=-o[0],b[1]=-o[1],b[2]=-o[2],b}function we(o,h){const b=h??new d(3);return b[0]=o[0],b[1]=o[1],b[2]=o[2],b}const Ce=we;function Se(o,h,b){const g=b??new d(3);return g[0]=o[0]*h[0],g[1]=o[1]*h[1],g[2]=o[2]*h[2],g}const Qe=Se;function de(o,h,b){const g=b??new d(3);return g[0]=o[0]/h[0],g[1]=o[1]/h[1],g[2]=o[2]/h[2],g}const xe=de;function et(o=1,h){const b=h??new d(3),g=Math.random()*2*Math.PI,k=Math.random()*2-1,U=Math.sqrt(1-k*k)*o;return b[0]=Math.cos(g)*U,b[1]=Math.sin(g)*U,b[2]=k*o,b}function B(o){const h=o??new d(3);return h[0]=0,h[1]=0,h[2]=0,h}function L(o,h,b){const g=b??new d(3),k=o[0],U=o[1],A=o[2],j=h[3]*k+h[7]*U+h[11]*A+h[15]||1;return g[0]=(h[0]*k+h[4]*U+h[8]*A+h[12])/j,g[1]=(h[1]*k+h[5]*U+h[9]*A+h[13])/j,g[2]=(h[2]*k+h[6]*U+h[10]*A+h[14])/j,g}function v(o,h,b){const g=b??new d(3),k=o[0],U=o[1],A=o[2];return g[0]=k*h[0*4+0]+U*h[1*4+0]+A*h[2*4+0],g[1]=k*h[0*4+1]+U*h[1*4+1]+A*h[2*4+1],g[2]=k*h[0*4+2]+U*h[1*4+2]+A*h[2*4+2],g}function r(o,h,b){const g=b??new d(3),k=o[0],U=o[1],A=o[2];return g[0]=k*h[0]+U*h[4]+A*h[8],g[1]=k*h[1]+U*h[5]+A*h[9],g[2]=k*h[2]+U*h[6]+A*h[10],g}function p(o,h,b){const g=b??new d(3),k=h[0],U=h[1],A=h[2],j=h[3]*2,$=o[0],Z=o[1],ie=o[2],ae=U*ie-A*Z,te=A*$-k*ie,re=k*Z-U*$;return g[0]=$+ae*j+(U*re-A*te)*2,g[1]=Z+te*j+(A*ae-k*re)*2,g[2]=ie+re*j+(k*te-U*ae)*2,g}function u(o,h){const b=h??new d(3);return b[0]=o[12],b[1]=o[13],b[2]=o[14],b}function m(o,h,b){const g=b??new d(3),k=h*4;return g[0]=o[k+0],g[1]=o[k+1],g[2]=o[k+2],g}function w(o,h){const b=h??new d(3),g=o[0],k=o[1],U=o[2],A=o[4],j=o[5],$=o[6],Z=o[8],ie=o[9],ae=o[10];return b[0]=Math.sqrt(g*g+k*k+U*U),b[1]=Math.sqrt(A*A+j*j+$*$),b[2]=Math.sqrt(Z*Z+ie*ie+ae*ae),b}function P(o,h,b,g){const k=g??new d(3),U=[],A=[];return U[0]=o[0]-h[0],U[1]=o[1]-h[1],U[2]=o[2]-h[2],A[0]=U[0],A[1]=U[1]*Math.cos(b)-U[2]*Math.sin(b),A[2]=U[1]*Math.sin(b)+U[2]*Math.cos(b),k[0]=A[0]+h[0],k[1]=A[1]+h[1],k[2]=A[2]+h[2],k}function S(o,h,b,g){const k=g??new d(3),U=[],A=[];return U[0]=o[0]-h[0],U[1]=o[1]-h[1],U[2]=o[2]-h[2],A[0]=U[2]*Math.sin(b)+U[0]*Math.cos(b),A[1]=U[1],A[2]=U[2]*Math.cos(b)-U[0]*Math.sin(b),k[0]=A[0]+h[0],k[1]=A[1]+h[1],k[2]=A[2]+h[2],k}function s(o,h,b,g){const k=g??new d(3),U=[],A=[];return U[0]=o[0]-h[0],U[1]=o[1]-h[1],U[2]=o[2]-h[2],A[0]=U[0]*Math.cos(b)-U[1]*Math.sin(b),A[1]=U[0]*Math.sin(b)+U[1]*Math.cos(b),A[2]=U[2],k[0]=A[0]+h[0],k[1]=A[1]+h[1],k[2]=A[2]+h[2],k}function _(o,h,b){const g=b??new d(3);return K(o,g),Q(g,h,g)}function l(o,h,b){const g=b??new d(3);return be(o)>h?_(o,h,g):we(o,g)}function c(o,h,b){const g=b??new d(3);return N(o,h,.5,g)}return{create:f,fromValues:y,set:G,ceil:I,floor:C,round:V,clamp:W,add:M,addScaled:F,angle:D,subtract:O,sub:ee,equalsApproximately:ne,equals:H,lerp:N,lerpV:Y,max:X,min:z,mulScalar:Q,scale:T,divScalar:J,inverse:ge,invert:ue,cross:ve,dot:Ge,length:be,len:Te,lengthSq:Ee,lenSq:Xe,distance:De,dist:ce,distanceSq:fe,distSq:se,normalize:K,negate:Be,copy:we,clone:Ce,multiply:Se,mul:Qe,divide:de,div:xe,random:et,zero:B,transformMat4:L,transformMat4Upper3x3:v,transformMat3:r,transformQuat:p,getTranslation:u,getAxis:m,getScaling:w,rotateX:P,rotateY:S,rotateZ:s,setLength:_,truncate:l,midpoint:c}}const ks=new Map;function Cn(d){let f=ks.get(d);return f||(f=ol(d),ks.set(d,f)),f}function al(d){const f=As(d),y=Cn(d);function G(r,p,u,m,w,P,S,s,_){const l=new d(12);return l[3]=0,l[7]=0,l[11]=0,r!==void 0&&(l[0]=r,p!==void 0&&(l[1]=p,u!==void 0&&(l[2]=u,m!==void 0&&(l[4]=m,w!==void 0&&(l[5]=w,P!==void 0&&(l[6]=P,S!==void 0&&(l[8]=S,s!==void 0&&(l[9]=s,_!==void 0&&(l[10]=_))))))))),l}function I(r,p,u,m,w,P,S,s,_,l){const c=l??new d(12);return c[0]=r,c[1]=p,c[2]=u,c[3]=0,c[4]=m,c[5]=w,c[6]=P,c[7]=0,c[8]=S,c[9]=s,c[10]=_,c[11]=0,c}function C(r,p){const u=p??new d(12);return u[0]=r[0],u[1]=r[1],u[2]=r[2],u[3]=0,u[4]=r[4],u[5]=r[5],u[6]=r[6],u[7]=0,u[8]=r[8],u[9]=r[9],u[10]=r[10],u[11]=0,u}function V(r,p){const u=p??new d(12),m=r[0],w=r[1],P=r[2],S=r[3],s=m+m,_=w+w,l=P+P,c=m*s,o=w*s,h=w*_,b=P*s,g=P*_,k=P*l,U=S*s,A=S*_,j=S*l;return u[0]=1-h-k,u[1]=o+j,u[2]=b-A,u[3]=0,u[4]=o-j,u[5]=1-c-k,u[6]=g+U,u[7]=0,u[8]=b+A,u[9]=g-U,u[10]=1-c-h,u[11]=0,u}function W(r,p){const u=p??new d(12);return u[0]=-r[0],u[1]=-r[1],u[2]=-r[2],u[4]=-r[4],u[5]=-r[5],u[6]=-r[6],u[8]=-r[8],u[9]=-r[9],u[10]=-r[10],u}function M(r,p,u){const m=u??new d(12);return m[0]=r[0]*p,m[1]=r[1]*p,m[2]=r[2]*p,m[4]=r[4]*p,m[5]=r[5]*p,m[6]=r[6]*p,m[8]=r[8]*p,m[9]=r[9]*p,m[10]=r[10]*p,m}const F=M;function D(r,p,u){const m=u??new d(12);return m[0]=r[0]+p[0],m[1]=r[1]+p[1],m[2]=r[2]+p[2],m[4]=r[4]+p[4],m[5]=r[5]+p[5],m[6]=r[6]+p[6],m[8]=r[8]+p[8],m[9]=r[9]+p[9],m[10]=r[10]+p[10],m}function O(r,p){const u=p??new d(12);return u[0]=r[0],u[1]=r[1],u[2]=r[2],u[4]=r[4],u[5]=r[5],u[6]=r[6],u[8]=r[8],u[9]=r[9],u[10]=r[10],u}const ee=O;function ne(r,p){return Math.abs(r[0]-p[0])<pe&&Math.abs(r[1]-p[1])<pe&&Math.abs(r[2]-p[2])<pe&&Math.abs(r[4]-p[4])<pe&&Math.abs(r[5]-p[5])<pe&&Math.abs(r[6]-p[6])<pe&&Math.abs(r[8]-p[8])<pe&&Math.abs(r[9]-p[9])<pe&&Math.abs(r[10]-p[10])<pe}function H(r,p){return r[0]===p[0]&&r[1]===p[1]&&r[2]===p[2]&&r[4]===p[4]&&r[5]===p[5]&&r[6]===p[6]&&r[8]===p[8]&&r[9]===p[9]&&r[10]===p[10]}function N(r){const p=r??new d(12);return p[0]=1,p[1]=0,p[2]=0,p[4]=0,p[5]=1,p[6]=0,p[8]=0,p[9]=0,p[10]=1,p}function Y(r,p){const u=p??new d(12);if(u===r){let h;return h=r[1],r[1]=r[4],r[4]=h,h=r[2],r[2]=r[8],r[8]=h,h=r[6],r[6]=r[9],r[9]=h,u}const m=r[0*4+0],w=r[0*4+1],P=r[0*4+2],S=r[1*4+0],s=r[1*4+1],_=r[1*4+2],l=r[2*4+0],c=r[2*4+1],o=r[2*4+2];return u[0]=m,u[1]=S,u[2]=l,u[4]=w,u[5]=s,u[6]=c,u[8]=P,u[9]=_,u[10]=o,u}function X(r,p){const u=p??new d(12),m=r[0*4+0],w=r[0*4+1],P=r[0*4+2],S=r[1*4+0],s=r[1*4+1],_=r[1*4+2],l=r[2*4+0],c=r[2*4+1],o=r[2*4+2],h=o*s-_*c,b=-o*S+_*l,g=c*S-s*l,k=1/(m*h+w*b+P*g);return u[0]=h*k,u[1]=(-o*w+P*c)*k,u[2]=(_*w-P*s)*k,u[4]=b*k,u[5]=(o*m-P*l)*k,u[6]=(-_*m+P*S)*k,u[8]=g*k,u[9]=(-c*m+w*l)*k,u[10]=(s*m-w*S)*k,u}function z(r){const p=r[0],u=r[0*4+1],m=r[0*4+2],w=r[1*4+0],P=r[1*4+1],S=r[1*4+2],s=r[2*4+0],_=r[2*4+1],l=r[2*4+2];return p*(P*l-_*S)-w*(u*l-_*m)+s*(u*S-P*m)}const Q=X;function T(r,p,u){const m=u??new d(12),w=r[0],P=r[1],S=r[2],s=r[4+0],_=r[4+1],l=r[4+2],c=r[8+0],o=r[8+1],h=r[8+2],b=p[0],g=p[1],k=p[2],U=p[4+0],A=p[4+1],j=p[4+2],$=p[8+0],Z=p[8+1],ie=p[8+2];return m[0]=w*b+s*g+c*k,m[1]=P*b+_*g+o*k,m[2]=S*b+l*g+h*k,m[4]=w*U+s*A+c*j,m[5]=P*U+_*A+o*j,m[6]=S*U+l*A+h*j,m[8]=w*$+s*Z+c*ie,m[9]=P*$+_*Z+o*ie,m[10]=S*$+l*Z+h*ie,m}const J=T;function ge(r,p,u){const m=u??N();return r!==m&&(m[0]=r[0],m[1]=r[1],m[2]=r[2],m[4]=r[4],m[5]=r[5],m[6]=r[6]),m[8]=p[0],m[9]=p[1],m[10]=1,m}function ue(r,p){const u=p??f.create();return u[0]=r[8],u[1]=r[9],u}function ve(r,p,u){const m=u??f.create(),w=p*4;return m[0]=r[w+0],m[1]=r[w+1],m}function Ge(r,p,u,m){const w=m===r?r:O(r,m),P=u*4;return w[P+0]=p[0],w[P+1]=p[1],w}function be(r,p){const u=p??f.create(),m=r[0],w=r[1],P=r[4],S=r[5];return u[0]=Math.sqrt(m*m+w*w),u[1]=Math.sqrt(P*P+S*S),u}function Te(r,p){const u=p??y.create(),m=r[0],w=r[1],P=r[2],S=r[4],s=r[5],_=r[6],l=r[8],c=r[9],o=r[10];return u[0]=Math.sqrt(m*m+w*w+P*P),u[1]=Math.sqrt(S*S+s*s+_*_),u[2]=Math.sqrt(l*l+c*c+o*o),u}function Ee(r,p){const u=p??new d(12);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=1,u[6]=0,u[8]=r[0],u[9]=r[1],u[10]=1,u}function Xe(r,p,u){const m=u??new d(12),w=p[0],P=p[1],S=r[0],s=r[1],_=r[2],l=r[1*4+0],c=r[1*4+1],o=r[1*4+2],h=r[2*4+0],b=r[2*4+1],g=r[2*4+2];return r!==m&&(m[0]=S,m[1]=s,m[2]=_,m[4]=l,m[5]=c,m[6]=o),m[8]=S*w+l*P+h,m[9]=s*w+c*P+b,m[10]=_*w+o*P+g,m}function De(r,p){const u=p??new d(12),m=Math.cos(r),w=Math.sin(r);return u[0]=m,u[1]=w,u[2]=0,u[4]=-w,u[5]=m,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function ce(r,p,u){const m=u??new d(12),w=r[0*4+0],P=r[0*4+1],S=r[0*4+2],s=r[1*4+0],_=r[1*4+1],l=r[1*4+2],c=Math.cos(p),o=Math.sin(p);return m[0]=c*w+o*s,m[1]=c*P+o*_,m[2]=c*S+o*l,m[4]=c*s-o*w,m[5]=c*_-o*P,m[6]=c*l-o*S,r!==m&&(m[8]=r[8],m[9]=r[9],m[10]=r[10]),m}function fe(r,p){const u=p??new d(12),m=Math.cos(r),w=Math.sin(r);return u[0]=1,u[1]=0,u[2]=0,u[4]=0,u[5]=m,u[6]=w,u[8]=0,u[9]=-w,u[10]=m,u}function se(r,p,u){const m=u??new d(12),w=r[4],P=r[5],S=r[6],s=r[8],_=r[9],l=r[10],c=Math.cos(p),o=Math.sin(p);return m[4]=c*w+o*s,m[5]=c*P+o*_,m[6]=c*S+o*l,m[8]=c*s-o*w,m[9]=c*_-o*P,m[10]=c*l-o*S,r!==m&&(m[0]=r[0],m[1]=r[1],m[2]=r[2]),m}function K(r,p){const u=p??new d(12),m=Math.cos(r),w=Math.sin(r);return u[0]=m,u[1]=0,u[2]=-w,u[4]=0,u[5]=1,u[6]=0,u[8]=w,u[9]=0,u[10]=m,u}function Be(r,p,u){const m=u??new d(12),w=r[0*4+0],P=r[0*4+1],S=r[0*4+2],s=r[2*4+0],_=r[2*4+1],l=r[2*4+2],c=Math.cos(p),o=Math.sin(p);return m[0]=c*w-o*s,m[1]=c*P-o*_,m[2]=c*S-o*l,m[8]=c*s+o*w,m[9]=c*_+o*P,m[10]=c*l+o*S,r!==m&&(m[4]=r[4],m[5]=r[5],m[6]=r[6]),m}const we=De,Ce=ce;function Se(r,p){const u=p??new d(12);return u[0]=r[0],u[1]=0,u[2]=0,u[4]=0,u[5]=r[1],u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function Qe(r,p,u){const m=u??new d(12),w=p[0],P=p[1];return m[0]=w*r[0*4+0],m[1]=w*r[0*4+1],m[2]=w*r[0*4+2],m[4]=P*r[1*4+0],m[5]=P*r[1*4+1],m[6]=P*r[1*4+2],r!==m&&(m[8]=r[8],m[9]=r[9],m[10]=r[10]),m}function de(r,p){const u=p??new d(12);return u[0]=r[0],u[1]=0,u[2]=0,u[4]=0,u[5]=r[1],u[6]=0,u[8]=0,u[9]=0,u[10]=r[2],u}function xe(r,p,u){const m=u??new d(12),w=p[0],P=p[1],S=p[2];return m[0]=w*r[0*4+0],m[1]=w*r[0*4+1],m[2]=w*r[0*4+2],m[4]=P*r[1*4+0],m[5]=P*r[1*4+1],m[6]=P*r[1*4+2],m[8]=S*r[2*4+0],m[9]=S*r[2*4+1],m[10]=S*r[2*4+2],m}function et(r,p){const u=p??new d(12);return u[0]=r,u[1]=0,u[2]=0,u[4]=0,u[5]=r,u[6]=0,u[8]=0,u[9]=0,u[10]=1,u}function B(r,p,u){const m=u??new d(12);return m[0]=p*r[0*4+0],m[1]=p*r[0*4+1],m[2]=p*r[0*4+2],m[4]=p*r[1*4+0],m[5]=p*r[1*4+1],m[6]=p*r[1*4+2],r!==m&&(m[8]=r[8],m[9]=r[9],m[10]=r[10]),m}function L(r,p){const u=p??new d(12);return u[0]=r,u[1]=0,u[2]=0,u[4]=0,u[5]=r,u[6]=0,u[8]=0,u[9]=0,u[10]=r,u}function v(r,p,u){const m=u??new d(12);return m[0]=p*r[0*4+0],m[1]=p*r[0*4+1],m[2]=p*r[0*4+2],m[4]=p*r[1*4+0],m[5]=p*r[1*4+1],m[6]=p*r[1*4+2],m[8]=p*r[2*4+0],m[9]=p*r[2*4+1],m[10]=p*r[2*4+2],m}return{add:D,clone:ee,copy:O,create:G,determinant:z,equals:H,equalsApproximately:ne,fromMat4:C,fromQuat:V,get3DScaling:Te,getAxis:ve,getScaling:be,getTranslation:ue,identity:N,inverse:X,invert:Q,mul:J,mulScalar:F,multiply:T,multiplyScalar:M,negate:W,rotate:ce,rotateX:se,rotateY:Be,rotateZ:Ce,rotation:De,rotationX:fe,rotationY:K,rotationZ:we,scale:Qe,scale3D:xe,scaling:Se,scaling3D:de,set:I,setAxis:Ge,setTranslation:ge,translate:Xe,translation:Ee,transpose:Y,uniformScale:B,uniformScale3D:v,uniformScaling:et,uniformScaling3D:L}}const Bs=new Map;function ll(d){let f=Bs.get(d);return f||(f=al(d),Bs.set(d,f)),f}function ul(d){const f=Cn(d);function y(s,_,l,c,o,h,b,g,k,U,A,j,$,Z,ie,ae){const te=new d(16);return s!==void 0&&(te[0]=s,_!==void 0&&(te[1]=_,l!==void 0&&(te[2]=l,c!==void 0&&(te[3]=c,o!==void 0&&(te[4]=o,h!==void 0&&(te[5]=h,b!==void 0&&(te[6]=b,g!==void 0&&(te[7]=g,k!==void 0&&(te[8]=k,U!==void 0&&(te[9]=U,A!==void 0&&(te[10]=A,j!==void 0&&(te[11]=j,$!==void 0&&(te[12]=$,Z!==void 0&&(te[13]=Z,ie!==void 0&&(te[14]=ie,ae!==void 0&&(te[15]=ae)))))))))))))))),te}function G(s,_,l,c,o,h,b,g,k,U,A,j,$,Z,ie,ae,te){const re=te??new d(16);return re[0]=s,re[1]=_,re[2]=l,re[3]=c,re[4]=o,re[5]=h,re[6]=b,re[7]=g,re[8]=k,re[9]=U,re[10]=A,re[11]=j,re[12]=$,re[13]=Z,re[14]=ie,re[15]=ae,re}function I(s,_){const l=_??new d(16);return l[0]=s[0],l[1]=s[1],l[2]=s[2],l[3]=0,l[4]=s[4],l[5]=s[5],l[6]=s[6],l[7]=0,l[8]=s[8],l[9]=s[9],l[10]=s[10],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}function C(s,_){const l=_??new d(16),c=s[0],o=s[1],h=s[2],b=s[3],g=c+c,k=o+o,U=h+h,A=c*g,j=o*g,$=o*k,Z=h*g,ie=h*k,ae=h*U,te=b*g,re=b*k,_e=b*U;return l[0]=1-$-ae,l[1]=j+_e,l[2]=Z-re,l[3]=0,l[4]=j-_e,l[5]=1-A-ae,l[6]=ie+te,l[7]=0,l[8]=Z+re,l[9]=ie-te,l[10]=1-A-$,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}function V(s,_){const l=_??new d(16);return l[0]=-s[0],l[1]=-s[1],l[2]=-s[2],l[3]=-s[3],l[4]=-s[4],l[5]=-s[5],l[6]=-s[6],l[7]=-s[7],l[8]=-s[8],l[9]=-s[9],l[10]=-s[10],l[11]=-s[11],l[12]=-s[12],l[13]=-s[13],l[14]=-s[14],l[15]=-s[15],l}function W(s,_,l){const c=l??new d(16);return c[0]=s[0]+_[0],c[1]=s[1]+_[1],c[2]=s[2]+_[2],c[3]=s[3]+_[3],c[4]=s[4]+_[4],c[5]=s[5]+_[5],c[6]=s[6]+_[6],c[7]=s[7]+_[7],c[8]=s[8]+_[8],c[9]=s[9]+_[9],c[10]=s[10]+_[10],c[11]=s[11]+_[11],c[12]=s[12]+_[12],c[13]=s[13]+_[13],c[14]=s[14]+_[14],c[15]=s[15]+_[15],c}function M(s,_,l){const c=l??new d(16);return c[0]=s[0]*_,c[1]=s[1]*_,c[2]=s[2]*_,c[3]=s[3]*_,c[4]=s[4]*_,c[5]=s[5]*_,c[6]=s[6]*_,c[7]=s[7]*_,c[8]=s[8]*_,c[9]=s[9]*_,c[10]=s[10]*_,c[11]=s[11]*_,c[12]=s[12]*_,c[13]=s[13]*_,c[14]=s[14]*_,c[15]=s[15]*_,c}const F=M;function D(s,_){const l=_??new d(16);return l[0]=s[0],l[1]=s[1],l[2]=s[2],l[3]=s[3],l[4]=s[4],l[5]=s[5],l[6]=s[6],l[7]=s[7],l[8]=s[8],l[9]=s[9],l[10]=s[10],l[11]=s[11],l[12]=s[12],l[13]=s[13],l[14]=s[14],l[15]=s[15],l}const O=D;function ee(s,_){return Math.abs(s[0]-_[0])<pe&&Math.abs(s[1]-_[1])<pe&&Math.abs(s[2]-_[2])<pe&&Math.abs(s[3]-_[3])<pe&&Math.abs(s[4]-_[4])<pe&&Math.abs(s[5]-_[5])<pe&&Math.abs(s[6]-_[6])<pe&&Math.abs(s[7]-_[7])<pe&&Math.abs(s[8]-_[8])<pe&&Math.abs(s[9]-_[9])<pe&&Math.abs(s[10]-_[10])<pe&&Math.abs(s[11]-_[11])<pe&&Math.abs(s[12]-_[12])<pe&&Math.abs(s[13]-_[13])<pe&&Math.abs(s[14]-_[14])<pe&&Math.abs(s[15]-_[15])<pe}function ne(s,_){return s[0]===_[0]&&s[1]===_[1]&&s[2]===_[2]&&s[3]===_[3]&&s[4]===_[4]&&s[5]===_[5]&&s[6]===_[6]&&s[7]===_[7]&&s[8]===_[8]&&s[9]===_[9]&&s[10]===_[10]&&s[11]===_[11]&&s[12]===_[12]&&s[13]===_[13]&&s[14]===_[14]&&s[15]===_[15]}function H(s){const _=s??new d(16);return _[0]=1,_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=1,_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[10]=1,_[11]=0,_[12]=0,_[13]=0,_[14]=0,_[15]=1,_}function N(s,_){const l=_??new d(16);if(l===s){let he;return he=s[1],s[1]=s[4],s[4]=he,he=s[2],s[2]=s[8],s[8]=he,he=s[3],s[3]=s[12],s[12]=he,he=s[6],s[6]=s[9],s[9]=he,he=s[7],s[7]=s[13],s[13]=he,he=s[11],s[11]=s[14],s[14]=he,l}const c=s[0*4+0],o=s[0*4+1],h=s[0*4+2],b=s[0*4+3],g=s[1*4+0],k=s[1*4+1],U=s[1*4+2],A=s[1*4+3],j=s[2*4+0],$=s[2*4+1],Z=s[2*4+2],ie=s[2*4+3],ae=s[3*4+0],te=s[3*4+1],re=s[3*4+2],_e=s[3*4+3];return l[0]=c,l[1]=g,l[2]=j,l[3]=ae,l[4]=o,l[5]=k,l[6]=$,l[7]=te,l[8]=h,l[9]=U,l[10]=Z,l[11]=re,l[12]=b,l[13]=A,l[14]=ie,l[15]=_e,l}function Y(s,_){const l=_??new d(16),c=s[0*4+0],o=s[0*4+1],h=s[0*4+2],b=s[0*4+3],g=s[1*4+0],k=s[1*4+1],U=s[1*4+2],A=s[1*4+3],j=s[2*4+0],$=s[2*4+1],Z=s[2*4+2],ie=s[2*4+3],ae=s[3*4+0],te=s[3*4+1],re=s[3*4+2],_e=s[3*4+3],he=Z*_e,Ie=re*ie,Oe=U*_e,Ue=re*A,Le=U*ie,Fe=Z*A,je=h*_e,He=re*b,Ye=h*ie,Ke=Z*b,Ne=h*A,We=U*b,ke=j*te,qe=ae*$,Re=g*te,tt=ae*k,Ze=g*$,St=j*k,ut=c*te,_t=ae*o,mt=c*$,Rt=j*o,At=c*k,Tt=g*o,cn=he*k+Ue*$+Le*te-(Ie*k+Oe*$+Fe*te),Ot=Ie*o+je*$+Ke*te-(he*o+He*$+Ye*te),dn=Oe*o+He*k+Ne*te-(Ue*o+je*k+We*te),pn=Fe*o+Ye*k+We*$-(Le*o+Ke*k+Ne*$),Ae=1/(c*cn+g*Ot+j*dn+ae*pn);return l[0]=Ae*cn,l[1]=Ae*Ot,l[2]=Ae*dn,l[3]=Ae*pn,l[4]=Ae*(Ie*g+Oe*j+Fe*ae-(he*g+Ue*j+Le*ae)),l[5]=Ae*(he*c+He*j+Ye*ae-(Ie*c+je*j+Ke*ae)),l[6]=Ae*(Ue*c+je*g+We*ae-(Oe*c+He*g+Ne*ae)),l[7]=Ae*(Le*c+Ke*g+Ne*j-(Fe*c+Ye*g+We*j)),l[8]=Ae*(ke*A+tt*ie+Ze*_e-(qe*A+Re*ie+St*_e)),l[9]=Ae*(qe*b+ut*ie+Rt*_e-(ke*b+_t*ie+mt*_e)),l[10]=Ae*(Re*b+_t*A+At*_e-(tt*b+ut*A+Tt*_e)),l[11]=Ae*(St*b+mt*A+Tt*ie-(Ze*b+Rt*A+At*ie)),l[12]=Ae*(Re*Z+St*re+qe*U-(Ze*re+ke*U+tt*Z)),l[13]=Ae*(mt*re+ke*h+_t*Z-(ut*Z+Rt*re+qe*h)),l[14]=Ae*(ut*U+Tt*re+tt*h-(At*re+Re*h+_t*U)),l[15]=Ae*(At*Z+Ze*h+Rt*U-(mt*U+Tt*Z+St*h)),l}function X(s){const _=s[0],l=s[0*4+1],c=s[0*4+2],o=s[0*4+3],h=s[1*4+0],b=s[1*4+1],g=s[1*4+2],k=s[1*4+3],U=s[2*4+0],A=s[2*4+1],j=s[2*4+2],$=s[2*4+3],Z=s[3*4+0],ie=s[3*4+1],ae=s[3*4+2],te=s[3*4+3],re=j*te,_e=ae*$,he=g*te,Ie=ae*k,Oe=g*$,Ue=j*k,Le=c*te,Fe=ae*o,je=c*$,He=j*o,Ye=c*k,Ke=g*o,Ne=re*b+Ie*A+Oe*ie-(_e*b+he*A+Ue*ie),We=_e*l+Le*A+He*ie-(re*l+Fe*A+je*ie),ke=he*l+Fe*b+Ye*ie-(Ie*l+Le*b+Ke*ie),qe=Ue*l+je*b+Ke*A-(Oe*l+He*b+Ye*A);return _*Ne+h*We+U*ke+Z*qe}const z=Y;function Q(s,_,l){const c=l??new d(16),o=s[0],h=s[1],b=s[2],g=s[3],k=s[4+0],U=s[4+1],A=s[4+2],j=s[4+3],$=s[8+0],Z=s[8+1],ie=s[8+2],ae=s[8+3],te=s[12+0],re=s[12+1],_e=s[12+2],he=s[12+3],Ie=_[0],Oe=_[1],Ue=_[2],Le=_[3],Fe=_[4+0],je=_[4+1],He=_[4+2],Ye=_[4+3],Ke=_[8+0],Ne=_[8+1],We=_[8+2],ke=_[8+3],qe=_[12+0],Re=_[12+1],tt=_[12+2],Ze=_[12+3];return c[0]=o*Ie+k*Oe+$*Ue+te*Le,c[1]=h*Ie+U*Oe+Z*Ue+re*Le,c[2]=b*Ie+A*Oe+ie*Ue+_e*Le,c[3]=g*Ie+j*Oe+ae*Ue+he*Le,c[4]=o*Fe+k*je+$*He+te*Ye,c[5]=h*Fe+U*je+Z*He+re*Ye,c[6]=b*Fe+A*je+ie*He+_e*Ye,c[7]=g*Fe+j*je+ae*He+he*Ye,c[8]=o*Ke+k*Ne+$*We+te*ke,c[9]=h*Ke+U*Ne+Z*We+re*ke,c[10]=b*Ke+A*Ne+ie*We+_e*ke,c[11]=g*Ke+j*Ne+ae*We+he*ke,c[12]=o*qe+k*Re+$*tt+te*Ze,c[13]=h*qe+U*Re+Z*tt+re*Ze,c[14]=b*qe+A*Re+ie*tt+_e*Ze,c[15]=g*qe+j*Re+ae*tt+he*Ze,c}const T=Q;function J(s,_,l){const c=l??H();return s!==c&&(c[0]=s[0],c[1]=s[1],c[2]=s[2],c[3]=s[3],c[4]=s[4],c[5]=s[5],c[6]=s[6],c[7]=s[7],c[8]=s[8],c[9]=s[9],c[10]=s[10],c[11]=s[11]),c[12]=_[0],c[13]=_[1],c[14]=_[2],c[15]=1,c}function ge(s,_){const l=_??f.create();return l[0]=s[12],l[1]=s[13],l[2]=s[14],l}function ue(s,_,l){const c=l??f.create(),o=_*4;return c[0]=s[o+0],c[1]=s[o+1],c[2]=s[o+2],c}function ve(s,_,l,c){const o=c===s?c:D(s,c),h=l*4;return o[h+0]=_[0],o[h+1]=_[1],o[h+2]=_[2],o}function Ge(s,_){const l=_??f.create(),c=s[0],o=s[1],h=s[2],b=s[4],g=s[5],k=s[6],U=s[8],A=s[9],j=s[10];return l[0]=Math.sqrt(c*c+o*o+h*h),l[1]=Math.sqrt(b*b+g*g+k*k),l[2]=Math.sqrt(U*U+A*A+j*j),l}function be(s,_,l,c,o){const h=o??new d(16),b=Math.tan(Math.PI*.5-.5*s);if(h[0]=b/_,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=b,h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[11]=-1,h[12]=0,h[13]=0,h[15]=0,Number.isFinite(c)){const g=1/(l-c);h[10]=c*g,h[14]=c*l*g}else h[10]=-1,h[14]=-l;return h}function Te(s,_,l,c=1/0,o){const h=o??new d(16),b=1/Math.tan(s*.5);if(h[0]=b/_,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=b,h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[11]=-1,h[12]=0,h[13]=0,h[15]=0,c===1/0)h[10]=0,h[14]=l;else{const g=1/(c-l);h[10]=l*g,h[14]=c*l*g}return h}function Ee(s,_,l,c,o,h,b){const g=b??new d(16);return g[0]=2/(_-s),g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2/(c-l),g[6]=0,g[7]=0,g[8]=0,g[9]=0,g[10]=1/(o-h),g[11]=0,g[12]=(_+s)/(s-_),g[13]=(c+l)/(l-c),g[14]=o/(o-h),g[15]=1,g}function Xe(s,_,l,c,o,h,b){const g=b??new d(16),k=_-s,U=c-l,A=o-h;return g[0]=2*o/k,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2*o/U,g[6]=0,g[7]=0,g[8]=(s+_)/k,g[9]=(c+l)/U,g[10]=h/A,g[11]=-1,g[12]=0,g[13]=0,g[14]=o*h/A,g[15]=0,g}function De(s,_,l,c,o,h=1/0,b){const g=b??new d(16),k=_-s,U=c-l;if(g[0]=2*o/k,g[1]=0,g[2]=0,g[3]=0,g[4]=0,g[5]=2*o/U,g[6]=0,g[7]=0,g[8]=(s+_)/k,g[9]=(c+l)/U,g[11]=-1,g[12]=0,g[13]=0,g[15]=0,h===1/0)g[10]=0,g[14]=o;else{const A=1/(h-o);g[10]=o*A,g[14]=h*o*A}return g}const ce=f.create(),fe=f.create(),se=f.create();function K(s,_,l,c){const o=c??new d(16);return f.normalize(f.subtract(_,s,se),se),f.normalize(f.cross(l,se,ce),ce),f.normalize(f.cross(se,ce,fe),fe),o[0]=ce[0],o[1]=ce[1],o[2]=ce[2],o[3]=0,o[4]=fe[0],o[5]=fe[1],o[6]=fe[2],o[7]=0,o[8]=se[0],o[9]=se[1],o[10]=se[2],o[11]=0,o[12]=s[0],o[13]=s[1],o[14]=s[2],o[15]=1,o}function Be(s,_,l,c){const o=c??new d(16);return f.normalize(f.subtract(s,_,se),se),f.normalize(f.cross(l,se,ce),ce),f.normalize(f.cross(se,ce,fe),fe),o[0]=ce[0],o[1]=ce[1],o[2]=ce[2],o[3]=0,o[4]=fe[0],o[5]=fe[1],o[6]=fe[2],o[7]=0,o[8]=se[0],o[9]=se[1],o[10]=se[2],o[11]=0,o[12]=s[0],o[13]=s[1],o[14]=s[2],o[15]=1,o}function we(s,_,l,c){const o=c??new d(16);return f.normalize(f.subtract(s,_,se),se),f.normalize(f.cross(l,se,ce),ce),f.normalize(f.cross(se,ce,fe),fe),o[0]=ce[0],o[1]=fe[0],o[2]=se[0],o[3]=0,o[4]=ce[1],o[5]=fe[1],o[6]=se[1],o[7]=0,o[8]=ce[2],o[9]=fe[2],o[10]=se[2],o[11]=0,o[12]=-(ce[0]*s[0]+ce[1]*s[1]+ce[2]*s[2]),o[13]=-(fe[0]*s[0]+fe[1]*s[1]+fe[2]*s[2]),o[14]=-(se[0]*s[0]+se[1]*s[1]+se[2]*s[2]),o[15]=1,o}function Ce(s,_){const l=_??new d(16);return l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=s[0],l[13]=s[1],l[14]=s[2],l[15]=1,l}function Se(s,_,l){const c=l??new d(16),o=_[0],h=_[1],b=_[2],g=s[0],k=s[1],U=s[2],A=s[3],j=s[1*4+0],$=s[1*4+1],Z=s[1*4+2],ie=s[1*4+3],ae=s[2*4+0],te=s[2*4+1],re=s[2*4+2],_e=s[2*4+3],he=s[3*4+0],Ie=s[3*4+1],Oe=s[3*4+2],Ue=s[3*4+3];return s!==c&&(c[0]=g,c[1]=k,c[2]=U,c[3]=A,c[4]=j,c[5]=$,c[6]=Z,c[7]=ie,c[8]=ae,c[9]=te,c[10]=re,c[11]=_e),c[12]=g*o+j*h+ae*b+he,c[13]=k*o+$*h+te*b+Ie,c[14]=U*o+Z*h+re*b+Oe,c[15]=A*o+ie*h+_e*b+Ue,c}function Qe(s,_){const l=_??new d(16),c=Math.cos(s),o=Math.sin(s);return l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=c,l[6]=o,l[7]=0,l[8]=0,l[9]=-o,l[10]=c,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}function de(s,_,l){const c=l??new d(16),o=s[4],h=s[5],b=s[6],g=s[7],k=s[8],U=s[9],A=s[10],j=s[11],$=Math.cos(_),Z=Math.sin(_);return c[4]=$*o+Z*k,c[5]=$*h+Z*U,c[6]=$*b+Z*A,c[7]=$*g+Z*j,c[8]=$*k-Z*o,c[9]=$*U-Z*h,c[10]=$*A-Z*b,c[11]=$*j-Z*g,s!==c&&(c[0]=s[0],c[1]=s[1],c[2]=s[2],c[3]=s[3],c[12]=s[12],c[13]=s[13],c[14]=s[14],c[15]=s[15]),c}function xe(s,_){const l=_??new d(16),c=Math.cos(s),o=Math.sin(s);return l[0]=c,l[1]=0,l[2]=-o,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=o,l[9]=0,l[10]=c,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}function et(s,_,l){const c=l??new d(16),o=s[0*4+0],h=s[0*4+1],b=s[0*4+2],g=s[0*4+3],k=s[2*4+0],U=s[2*4+1],A=s[2*4+2],j=s[2*4+3],$=Math.cos(_),Z=Math.sin(_);return c[0]=$*o-Z*k,c[1]=$*h-Z*U,c[2]=$*b-Z*A,c[3]=$*g-Z*j,c[8]=$*k+Z*o,c[9]=$*U+Z*h,c[10]=$*A+Z*b,c[11]=$*j+Z*g,s!==c&&(c[4]=s[4],c[5]=s[5],c[6]=s[6],c[7]=s[7],c[12]=s[12],c[13]=s[13],c[14]=s[14],c[15]=s[15]),c}function B(s,_){const l=_??new d(16),c=Math.cos(s),o=Math.sin(s);return l[0]=c,l[1]=o,l[2]=0,l[3]=0,l[4]=-o,l[5]=c,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}function L(s,_,l){const c=l??new d(16),o=s[0*4+0],h=s[0*4+1],b=s[0*4+2],g=s[0*4+3],k=s[1*4+0],U=s[1*4+1],A=s[1*4+2],j=s[1*4+3],$=Math.cos(_),Z=Math.sin(_);return c[0]=$*o+Z*k,c[1]=$*h+Z*U,c[2]=$*b+Z*A,c[3]=$*g+Z*j,c[4]=$*k-Z*o,c[5]=$*U-Z*h,c[6]=$*A-Z*b,c[7]=$*j-Z*g,s!==c&&(c[8]=s[8],c[9]=s[9],c[10]=s[10],c[11]=s[11],c[12]=s[12],c[13]=s[13],c[14]=s[14],c[15]=s[15]),c}function v(s,_,l){const c=l??new d(16);let o=s[0],h=s[1],b=s[2];const g=Math.sqrt(o*o+h*h+b*b);o/=g,h/=g,b/=g;const k=o*o,U=h*h,A=b*b,j=Math.cos(_),$=Math.sin(_),Z=1-j;return c[0]=k+(1-k)*j,c[1]=o*h*Z+b*$,c[2]=o*b*Z-h*$,c[3]=0,c[4]=o*h*Z-b*$,c[5]=U+(1-U)*j,c[6]=h*b*Z+o*$,c[7]=0,c[8]=o*b*Z+h*$,c[9]=h*b*Z-o*$,c[10]=A+(1-A)*j,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}const r=v;function p(s,_,l,c){const o=c??new d(16);let h=_[0],b=_[1],g=_[2];const k=Math.sqrt(h*h+b*b+g*g);h/=k,b/=k,g/=k;const U=h*h,A=b*b,j=g*g,$=Math.cos(l),Z=Math.sin(l),ie=1-$,ae=U+(1-U)*$,te=h*b*ie+g*Z,re=h*g*ie-b*Z,_e=h*b*ie-g*Z,he=A+(1-A)*$,Ie=b*g*ie+h*Z,Oe=h*g*ie+b*Z,Ue=b*g*ie-h*Z,Le=j+(1-j)*$,Fe=s[0],je=s[1],He=s[2],Ye=s[3],Ke=s[4],Ne=s[5],We=s[6],ke=s[7],qe=s[8],Re=s[9],tt=s[10],Ze=s[11];return o[0]=ae*Fe+te*Ke+re*qe,o[1]=ae*je+te*Ne+re*Re,o[2]=ae*He+te*We+re*tt,o[3]=ae*Ye+te*ke+re*Ze,o[4]=_e*Fe+he*Ke+Ie*qe,o[5]=_e*je+he*Ne+Ie*Re,o[6]=_e*He+he*We+Ie*tt,o[7]=_e*Ye+he*ke+Ie*Ze,o[8]=Oe*Fe+Ue*Ke+Le*qe,o[9]=Oe*je+Ue*Ne+Le*Re,o[10]=Oe*He+Ue*We+Le*tt,o[11]=Oe*Ye+Ue*ke+Le*Ze,s!==o&&(o[12]=s[12],o[13]=s[13],o[14]=s[14],o[15]=s[15]),o}const u=p;function m(s,_){const l=_??new d(16);return l[0]=s[0],l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=s[1],l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=s[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}function w(s,_,l){const c=l??new d(16),o=_[0],h=_[1],b=_[2];return c[0]=o*s[0*4+0],c[1]=o*s[0*4+1],c[2]=o*s[0*4+2],c[3]=o*s[0*4+3],c[4]=h*s[1*4+0],c[5]=h*s[1*4+1],c[6]=h*s[1*4+2],c[7]=h*s[1*4+3],c[8]=b*s[2*4+0],c[9]=b*s[2*4+1],c[10]=b*s[2*4+2],c[11]=b*s[2*4+3],s!==c&&(c[12]=s[12],c[13]=s[13],c[14]=s[14],c[15]=s[15]),c}function P(s,_){const l=_??new d(16);return l[0]=s,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=s,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=s,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}function S(s,_,l){const c=l??new d(16);return c[0]=_*s[0*4+0],c[1]=_*s[0*4+1],c[2]=_*s[0*4+2],c[3]=_*s[0*4+3],c[4]=_*s[1*4+0],c[5]=_*s[1*4+1],c[6]=_*s[1*4+2],c[7]=_*s[1*4+3],c[8]=_*s[2*4+0],c[9]=_*s[2*4+1],c[10]=_*s[2*4+2],c[11]=_*s[2*4+3],s!==c&&(c[12]=s[12],c[13]=s[13],c[14]=s[14],c[15]=s[15]),c}return{add:W,aim:K,axisRotate:p,axisRotation:v,cameraAim:Be,clone:O,copy:D,create:y,determinant:X,equals:ne,equalsApproximately:ee,fromMat3:I,fromQuat:C,frustum:Xe,frustumReverseZ:De,getAxis:ue,getScaling:Ge,getTranslation:ge,identity:H,inverse:Y,invert:z,lookAt:we,mul:T,mulScalar:F,multiply:Q,multiplyScalar:M,negate:V,ortho:Ee,perspective:be,perspectiveReverseZ:Te,rotate:u,rotateX:de,rotateY:et,rotateZ:L,rotation:r,rotationX:Qe,rotationY:xe,rotationZ:B,scale:w,scaling:m,set:G,setAxis:ve,setTranslation:J,translate:Se,translation:Ce,transpose:N,uniformScale:S,uniformScaling:P}}const Is=new Map;function cl(d){let f=Is.get(d);return f||(f=ul(d),Is.set(d,f)),f}function dl(d){const f=Cn(d);function y(B,L,v,r){const p=new d(4);return B!==void 0&&(p[0]=B,L!==void 0&&(p[1]=L,v!==void 0&&(p[2]=v,r!==void 0&&(p[3]=r)))),p}const G=y;function I(B,L,v,r,p){const u=p??new d(4);return u[0]=B,u[1]=L,u[2]=v,u[3]=r,u}function C(B,L,v){const r=v??new d(4),p=L*.5,u=Math.sin(p);return r[0]=u*B[0],r[1]=u*B[1],r[2]=u*B[2],r[3]=Math.cos(p),r}function V(B,L){const v=L??f.create(3),r=Math.acos(B[3])*2,p=Math.sin(r*.5);return p>pe?(v[0]=B[0]/p,v[1]=B[1]/p,v[2]=B[2]/p):(v[0]=1,v[1]=0,v[2]=0),{angle:r,axis:v}}function W(B,L){const v=be(B,L);return Math.acos(2*v*v-1)}function M(B,L,v){const r=v??new d(4),p=B[0],u=B[1],m=B[2],w=B[3],P=L[0],S=L[1],s=L[2],_=L[3];return r[0]=p*_+w*P+u*s-m*S,r[1]=u*_+w*S+m*P-p*s,r[2]=m*_+w*s+p*S-u*P,r[3]=w*_-p*P-u*S-m*s,r}const F=M;function D(B,L,v){const r=v??new d(4),p=L*.5,u=B[0],m=B[1],w=B[2],P=B[3],S=Math.sin(p),s=Math.cos(p);return r[0]=u*s+P*S,r[1]=m*s+w*S,r[2]=w*s-m*S,r[3]=P*s-u*S,r}function O(B,L,v){const r=v??new d(4),p=L*.5,u=B[0],m=B[1],w=B[2],P=B[3],S=Math.sin(p),s=Math.cos(p);return r[0]=u*s-w*S,r[1]=m*s+P*S,r[2]=w*s+u*S,r[3]=P*s-m*S,r}function ee(B,L,v){const r=v??new d(4),p=L*.5,u=B[0],m=B[1],w=B[2],P=B[3],S=Math.sin(p),s=Math.cos(p);return r[0]=u*s+m*S,r[1]=m*s-u*S,r[2]=w*s+P*S,r[3]=P*s-w*S,r}function ne(B,L,v,r){const p=r??new d(4),u=B[0],m=B[1],w=B[2],P=B[3];let S=L[0],s=L[1],_=L[2],l=L[3],c=u*S+m*s+w*_+P*l;c<0&&(c=-c,S=-S,s=-s,_=-_,l=-l);let o,h;if(1-c>pe){const b=Math.acos(c),g=Math.sin(b);o=Math.sin((1-v)*b)/g,h=Math.sin(v*b)/g}else o=1-v,h=v;return p[0]=o*u+h*S,p[1]=o*m+h*s,p[2]=o*w+h*_,p[3]=o*P+h*l,p}function H(B,L){const v=L??new d(4),r=B[0],p=B[1],u=B[2],m=B[3],w=r*r+p*p+u*u+m*m,P=w?1/w:0;return v[0]=-r*P,v[1]=-p*P,v[2]=-u*P,v[3]=m*P,v}function N(B,L){const v=L??new d(4);return v[0]=-B[0],v[1]=-B[1],v[2]=-B[2],v[3]=B[3],v}function Y(B,L){const v=L??new d(4),r=B[0]+B[5]+B[10];if(r>0){const p=Math.sqrt(r+1);v[3]=.5*p;const u=.5/p;v[0]=(B[6]-B[9])*u,v[1]=(B[8]-B[2])*u,v[2]=(B[1]-B[4])*u}else{let p=0;B[5]>B[0]&&(p=1),B[10]>B[p*4+p]&&(p=2);const u=(p+1)%3,m=(p+2)%3,w=Math.sqrt(B[p*4+p]-B[u*4+u]-B[m*4+m]+1);v[p]=.5*w;const P=.5/w;v[3]=(B[u*4+m]-B[m*4+u])*P,v[u]=(B[u*4+p]+B[p*4+u])*P,v[m]=(B[m*4+p]+B[p*4+m])*P}return v}function X(B,L,v,r,p){const u=p??new d(4),m=B*.5,w=L*.5,P=v*.5,S=Math.sin(m),s=Math.cos(m),_=Math.sin(w),l=Math.cos(w),c=Math.sin(P),o=Math.cos(P);switch(r){case"xyz":u[0]=S*l*o+s*_*c,u[1]=s*_*o-S*l*c,u[2]=s*l*c+S*_*o,u[3]=s*l*o-S*_*c;break;case"xzy":u[0]=S*l*o-s*_*c,u[1]=s*_*o-S*l*c,u[2]=s*l*c+S*_*o,u[3]=s*l*o+S*_*c;break;case"yxz":u[0]=S*l*o+s*_*c,u[1]=s*_*o-S*l*c,u[2]=s*l*c-S*_*o,u[3]=s*l*o+S*_*c;break;case"yzx":u[0]=S*l*o+s*_*c,u[1]=s*_*o+S*l*c,u[2]=s*l*c-S*_*o,u[3]=s*l*o-S*_*c;break;case"zxy":u[0]=S*l*o-s*_*c,u[1]=s*_*o+S*l*c,u[2]=s*l*c+S*_*o,u[3]=s*l*o-S*_*c;break;case"zyx":u[0]=S*l*o-s*_*c,u[1]=s*_*o+S*l*c,u[2]=s*l*c-S*_*o,u[3]=s*l*o+S*_*c;break;default:throw new Error(`Unknown rotation order: ${r}`)}return u}function z(B,L){const v=L??new d(4);return v[0]=B[0],v[1]=B[1],v[2]=B[2],v[3]=B[3],v}const Q=z;function T(B,L,v){const r=v??new d(4);return r[0]=B[0]+L[0],r[1]=B[1]+L[1],r[2]=B[2]+L[2],r[3]=B[3]+L[3],r}function J(B,L,v){const r=v??new d(4);return r[0]=B[0]-L[0],r[1]=B[1]-L[1],r[2]=B[2]-L[2],r[3]=B[3]-L[3],r}const ge=J;function ue(B,L,v){const r=v??new d(4);return r[0]=B[0]*L,r[1]=B[1]*L,r[2]=B[2]*L,r[3]=B[3]*L,r}const ve=ue;function Ge(B,L,v){const r=v??new d(4);return r[0]=B[0]/L,r[1]=B[1]/L,r[2]=B[2]/L,r[3]=B[3]/L,r}function be(B,L){return B[0]*L[0]+B[1]*L[1]+B[2]*L[2]+B[3]*L[3]}function Te(B,L,v,r){const p=r??new d(4);return p[0]=B[0]+v*(L[0]-B[0]),p[1]=B[1]+v*(L[1]-B[1]),p[2]=B[2]+v*(L[2]-B[2]),p[3]=B[3]+v*(L[3]-B[3]),p}function Ee(B){const L=B[0],v=B[1],r=B[2],p=B[3];return Math.sqrt(L*L+v*v+r*r+p*p)}const Xe=Ee;function De(B){const L=B[0],v=B[1],r=B[2],p=B[3];return L*L+v*v+r*r+p*p}const ce=De;function fe(B,L){const v=L??new d(4),r=B[0],p=B[1],u=B[2],m=B[3],w=Math.sqrt(r*r+p*p+u*u+m*m);return w>1e-5?(v[0]=r/w,v[1]=p/w,v[2]=u/w,v[3]=m/w):(v[0]=0,v[1]=0,v[2]=0,v[3]=1),v}function se(B,L){return Math.abs(B[0]-L[0])<pe&&Math.abs(B[1]-L[1])<pe&&Math.abs(B[2]-L[2])<pe&&Math.abs(B[3]-L[3])<pe}function K(B,L){return B[0]===L[0]&&B[1]===L[1]&&B[2]===L[2]&&B[3]===L[3]}function Be(B){const L=B??new d(4);return L[0]=0,L[1]=0,L[2]=0,L[3]=1,L}const we=f.create(),Ce=f.create(),Se=f.create();function Qe(B,L,v){const r=v??new d(4),p=f.dot(B,L);return p<-.999999?(f.cross(Ce,B,we),f.len(we)<1e-6&&f.cross(Se,B,we),f.normalize(we,we),C(we,Math.PI,r),r):p>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(f.cross(B,L,we),r[0]=we[0],r[1]=we[1],r[2]=we[2],r[3]=1+p,fe(r,r))}const de=new d(4),xe=new d(4);function et(B,L,v,r,p,u){const m=u??new d(4);return ne(B,r,p,de),ne(L,v,p,xe),ne(de,xe,2*p*(1-p),m),m}return{create:y,fromValues:G,set:I,fromAxisAngle:C,toAxisAngle:V,angle:W,multiply:M,mul:F,rotateX:D,rotateY:O,rotateZ:ee,slerp:ne,inverse:H,conjugate:N,fromMat:Y,fromEuler:X,copy:z,clone:Q,add:T,subtract:J,sub:ge,mulScalar:ue,scale:ve,divScalar:Ge,dot:be,lerp:Te,length:Ee,len:Xe,lengthSq:De,lenSq:ce,normalize:fe,equalsApproximately:se,equals:K,identity:Be,rotationTo:Qe,sqlerp:et}}const Ms=new Map;function pl(d){let f=Ms.get(d);return f||(f=dl(d),Ms.set(d,f)),f}function hl(d){function f(v,r,p,u){const m=new d(4);return v!==void 0&&(m[0]=v,r!==void 0&&(m[1]=r,p!==void 0&&(m[2]=p,u!==void 0&&(m[3]=u)))),m}const y=f;function G(v,r,p,u,m){const w=m??new d(4);return w[0]=v,w[1]=r,w[2]=p,w[3]=u,w}function I(v,r){const p=r??new d(4);return p[0]=Math.ceil(v[0]),p[1]=Math.ceil(v[1]),p[2]=Math.ceil(v[2]),p[3]=Math.ceil(v[3]),p}function C(v,r){const p=r??new d(4);return p[0]=Math.floor(v[0]),p[1]=Math.floor(v[1]),p[2]=Math.floor(v[2]),p[3]=Math.floor(v[3]),p}function V(v,r){const p=r??new d(4);return p[0]=Math.round(v[0]),p[1]=Math.round(v[1]),p[2]=Math.round(v[2]),p[3]=Math.round(v[3]),p}function W(v,r=0,p=1,u){const m=u??new d(4);return m[0]=Math.min(p,Math.max(r,v[0])),m[1]=Math.min(p,Math.max(r,v[1])),m[2]=Math.min(p,Math.max(r,v[2])),m[3]=Math.min(p,Math.max(r,v[3])),m}function M(v,r,p){const u=p??new d(4);return u[0]=v[0]+r[0],u[1]=v[1]+r[1],u[2]=v[2]+r[2],u[3]=v[3]+r[3],u}function F(v,r,p,u){const m=u??new d(4);return m[0]=v[0]+r[0]*p,m[1]=v[1]+r[1]*p,m[2]=v[2]+r[2]*p,m[3]=v[3]+r[3]*p,m}function D(v,r,p){const u=p??new d(4);return u[0]=v[0]-r[0],u[1]=v[1]-r[1],u[2]=v[2]-r[2],u[3]=v[3]-r[3],u}const O=D;function ee(v,r){return Math.abs(v[0]-r[0])<pe&&Math.abs(v[1]-r[1])<pe&&Math.abs(v[2]-r[2])<pe&&Math.abs(v[3]-r[3])<pe}function ne(v,r){return v[0]===r[0]&&v[1]===r[1]&&v[2]===r[2]&&v[3]===r[3]}function H(v,r,p,u){const m=u??new d(4);return m[0]=v[0]+p*(r[0]-v[0]),m[1]=v[1]+p*(r[1]-v[1]),m[2]=v[2]+p*(r[2]-v[2]),m[3]=v[3]+p*(r[3]-v[3]),m}function N(v,r,p,u){const m=u??new d(4);return m[0]=v[0]+p[0]*(r[0]-v[0]),m[1]=v[1]+p[1]*(r[1]-v[1]),m[2]=v[2]+p[2]*(r[2]-v[2]),m[3]=v[3]+p[3]*(r[3]-v[3]),m}function Y(v,r,p){const u=p??new d(4);return u[0]=Math.max(v[0],r[0]),u[1]=Math.max(v[1],r[1]),u[2]=Math.max(v[2],r[2]),u[3]=Math.max(v[3],r[3]),u}function X(v,r,p){const u=p??new d(4);return u[0]=Math.min(v[0],r[0]),u[1]=Math.min(v[1],r[1]),u[2]=Math.min(v[2],r[2]),u[3]=Math.min(v[3],r[3]),u}function z(v,r,p){const u=p??new d(4);return u[0]=v[0]*r,u[1]=v[1]*r,u[2]=v[2]*r,u[3]=v[3]*r,u}const Q=z;function T(v,r,p){const u=p??new d(4);return u[0]=v[0]/r,u[1]=v[1]/r,u[2]=v[2]/r,u[3]=v[3]/r,u}function J(v,r){const p=r??new d(4);return p[0]=1/v[0],p[1]=1/v[1],p[2]=1/v[2],p[3]=1/v[3],p}const ge=J;function ue(v,r){return v[0]*r[0]+v[1]*r[1]+v[2]*r[2]+v[3]*r[3]}function ve(v){const r=v[0],p=v[1],u=v[2],m=v[3];return Math.sqrt(r*r+p*p+u*u+m*m)}const Ge=ve;function be(v){const r=v[0],p=v[1],u=v[2],m=v[3];return r*r+p*p+u*u+m*m}const Te=be;function Ee(v,r){const p=v[0]-r[0],u=v[1]-r[1],m=v[2]-r[2],w=v[3]-r[3];return Math.sqrt(p*p+u*u+m*m+w*w)}const Xe=Ee;function De(v,r){const p=v[0]-r[0],u=v[1]-r[1],m=v[2]-r[2],w=v[3]-r[3];return p*p+u*u+m*m+w*w}const ce=De;function fe(v,r){const p=r??new d(4),u=v[0],m=v[1],w=v[2],P=v[3],S=Math.sqrt(u*u+m*m+w*w+P*P);return S>1e-5?(p[0]=u/S,p[1]=m/S,p[2]=w/S,p[3]=P/S):(p[0]=0,p[1]=0,p[2]=0,p[3]=0),p}function se(v,r){const p=r??new d(4);return p[0]=-v[0],p[1]=-v[1],p[2]=-v[2],p[3]=-v[3],p}function K(v,r){const p=r??new d(4);return p[0]=v[0],p[1]=v[1],p[2]=v[2],p[3]=v[3],p}const Be=K;function we(v,r,p){const u=p??new d(4);return u[0]=v[0]*r[0],u[1]=v[1]*r[1],u[2]=v[2]*r[2],u[3]=v[3]*r[3],u}const Ce=we;function Se(v,r,p){const u=p??new d(4);return u[0]=v[0]/r[0],u[1]=v[1]/r[1],u[2]=v[2]/r[2],u[3]=v[3]/r[3],u}const Qe=Se;function de(v){const r=v??new d(4);return r[0]=0,r[1]=0,r[2]=0,r[3]=0,r}function xe(v,r,p){const u=p??new d(4),m=v[0],w=v[1],P=v[2],S=v[3];return u[0]=r[0]*m+r[4]*w+r[8]*P+r[12]*S,u[1]=r[1]*m+r[5]*w+r[9]*P+r[13]*S,u[2]=r[2]*m+r[6]*w+r[10]*P+r[14]*S,u[3]=r[3]*m+r[7]*w+r[11]*P+r[15]*S,u}function et(v,r,p){const u=p??new d(4);return fe(v,u),z(u,r,u)}function B(v,r,p){const u=p??new d(4);return ve(v)>r?et(v,r,u):K(v,u)}function L(v,r,p){const u=p??new d(4);return H(v,r,.5,u)}return{create:f,fromValues:y,set:G,ceil:I,floor:C,round:V,clamp:W,add:M,addScaled:F,subtract:D,sub:O,equalsApproximately:ee,equals:ne,lerp:H,lerpV:N,max:Y,min:X,mulScalar:z,scale:Q,divScalar:T,inverse:J,invert:ge,dot:ue,length:ve,len:Ge,lengthSq:be,lenSq:Te,distance:Ee,dist:Xe,distanceSq:De,distSq:ce,normalize:fe,negate:se,copy:K,clone:Be,multiply:we,mul:Ce,divide:Se,div:Qe,zero:de,transformMat4:xe,setLength:et,truncate:B,midpoint:L}}const Gs=new Map;function fl(d){let f=Gs.get(d);return f||(f=hl(d),Gs.set(d,f)),f}function li(d,f,y,G,I,C){return{mat3:ll(d),mat4:cl(f),quat:pl(y),vec2:As(G),vec3:Cn(I),vec4:fl(C)}}const{mat3:_l,mat4:nt,quat:ml,vec2:Ds,vec3:ze,vec4:xu}=li(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);li(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);li(sl,Array,Array,Array,Array,Array);const gl=document.querySelector("#log");let st=null,Ut=null;function Ts(){if(st)return st;st=document.createElement("div"),st.className="ply-spinner-overlay";const d=document.createElement("div");return d.className="ply-spinner",st.appendChild(d),Ut=document.createElement("div"),Ut.className="ply-spinner-label",st.appendChild(Ut),st.style.display="none",document.body.appendChild(st),st}function kn(d){Ts(),Ut&&d&&(Ut.textContent=d),st&&(st.style.display="flex")}function lt(d){Ts(),Ut&&(Ut.textContent=d)}function Bn(){st&&(st.style.display="none")}function Os(d,f){const y=document.createElement("p");y.innerText=d,f&&Object.assign(y.style,f),gl.appendChild(y)}async function Ve(d){console.log(d),Os(d)}async function Ls(d){console.error(d),Os(d,{color:"red",backgroundColor:"rgba(255, 0, 0, 0.1)"})}let zs;function In(){zs=performance.now()}function Sn(d){const f=performance.now()-zs;Ve(`⏱️ ${d} Time: ${f.toFixed(0)} ms`)}function vl(d,f){if(!d)throw new Error(f&&(typeof f=="string"?f:f()))}function $t(d){return d+3&-4}const Vs=2,bl=10,wl=bl*Vs;async function xl(d,f,y,G){Ve(`loading ply file from File... : ${d.name}`),kn("downloading PLY...");const I=await d.arrayBuffer();try{return await Fs(I,f,y,G)}finally{Bn()}}async function yl(d,f,y,G){Ve(`loading ply file from URL... : ${d}`),kn("downloading PLY...");try{In();const I=new URL(d,window.location.href).href;return await Fs({url:I},f,y,G)}finally{Bn()}}async function Fs(d,f,y,G){return new Promise((I,C)=>{const V=new Worker(new URL(""+new URL("ply-worker-239e34d7.js",import.meta.url).href,self.location),{type:"module"});V.onmessage=W=>{const M=W.data;if((M==null?void 0:M.type)==="error"){Ls(`PLY worker error: ${M.message??"unknown error"}`),V.terminate(),C(new Error(M.message??"Worker error"));return}else if((M==null?void 0:M.type)==="download_progress"){const F=M.totalBytes,D=M.loadedBytes/(1024*1024),O=F?F/(1024*1024):void 0,ee=(M.speedBps??0)/(1024*1024),ne=F?Math.min(99,Math.floor(M.loadedBytes/F*100)):void 0,H=O?`total ${O.toFixed(1)} MB`:"total -- MB",N=O&&ne!==void 0?`${D.toFixed(1)} MB downloaded (${ne}%)`:`${D.toFixed(1)} MB downloaded`,Y=`${ee.toFixed(2)} MB/s`;lt(`downloading PLY ...
${H}, ${N}
${Y}`);return}else if((M==null?void 0:M.type)==="fetched"){Ve(`💾 Fetched (${M.byteLength} bytes)`),Sn("Download"),lt("parsing PLY..."),In();return}else if((M==null?void 0:M.type)==="buffer_info"){Ve(`Using ${M.useShared?"🚀SharedArrayBuffer":"🐢ArrayBuffer"} for buffers <->`);return}else if((M==null?void 0:M.type)==="sorting"){const F=M.method??(M.sort?`${M.sort} sorting`:"sorting"),D=M.bitsPerAxis?` (${M.bitsPerAxis} bits/axis)`:"",O=typeof M.points=="number"?` ${M.points} splats`:"";lt(`${F}${D}${O}
reordering...`);return}else if((M==null?void 0:M.type)==="parse_progress"){const F=M.total??0,D=M.read??0,O=F>0?Math.floor(D/F*100):0;lt(`parsing PLY ...
${D}/${F} splats (${O}%)`);return}else if((M==null?void 0:M.type)==="done"){const F=M.num_points,D=M.final_sh_degree,O=M.gs_stride,ee=M.sh_stride,ne=new Float16Array(M.gaussian_cpu),H=new Float16Array(M.sh_cpu);Ve(`🪐 Total splats: ${F}`);const N=f.createBuffer({label:"ply input 3d gaussians data buffer",size:$t(F*wl),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});f.queue.writeBuffer(N,0,ne);const Y=ee*Vs,X=f.createBuffer({label:"ply input spherical harmonics data buffer",size:$t(F*Y),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});f.queue.writeBuffer(X,0,H),V.terminate(),Sn("Parse"),I({num_points:F,gaussian_3d_buffer:N,sh_buffer:X,sh_degree:D,gaussian_cpu:ne,sh_cpu:H,gs_stride:O,sh_stride:ee})}},V.onerror=W=>{V.terminate(),C(W)},d instanceof ArrayBuffer?(lt("parsing PLY..."),V.postMessage({type:"start",plyBuffer:d,sh_degree:y,sort:G},[d])):V.postMessage({type:"start_url",url:d.url,sh_degree:y,sort:G})})}const Ns=2,Pl=10,Sl=Pl*Ns;async function El(d,f,y,G){Ve(`loading glTF file from File... : ${d.name}`),kn("loading glTF...");const I=await d.arrayBuffer();try{return await Ws(I,f,y,G)}finally{Bn()}}async function Cl(d,f,y,G){Ve(`loading glTF file from URL... : ${d}`),kn("downloading glTF...");try{return In(),await Ws({url:d},f,y,G)}finally{Bn()}}async function Ws(d,f,y,G){return new Promise((I,C)=>{const V=new Worker(new URL(""+new URL("gltf-worker-d7aec2ab.js",import.meta.url).href,self.location),{type:"module"});V.onmessage=W=>{const M=W.data;if((M==null?void 0:M.type)==="error"){Ls(`glTF worker error: ${M.message??"unknown error"}`),V.terminate(),C(new Error(M.message??"Worker error"));return}else if((M==null?void 0:M.type)==="download_progress"){const F=M.totalBytes,D=M.loadedBytes/(1024*1024),O=F?F/(1024*1024):void 0,ee=(M.speedBps??0)/(1024*1024),ne=F?Math.min(99,Math.floor(M.loadedBytes/F*100)):void 0,H=O?`total ${O.toFixed(1)} MB`:"total -- MB",N=O&&ne!==void 0?`${D.toFixed(1)} MB downloaded (${ne}%)`:`${D.toFixed(1)} MB downloaded`,Y=`${ee.toFixed(2)} MB/s`;lt(`downloading glTF ...
${H}, ${N}
${Y}`);return}else if((M==null?void 0:M.type)==="fetched"){Ve(`Fetched (${M.byteLength} bytes)`),Sn("Download"),lt("parsing glTF..."),In();return}else if((M==null?void 0:M.type)==="buffer_info"){Ve(`Using ${M.useShared?"SharedArrayBuffer":"ArrayBuffer"} for buffers`);return}else if((M==null?void 0:M.type)==="sorting"){const F=M.method??(M.sort?`${M.sort} sorting`:"sorting"),D=M.bitsPerAxis?` (${M.bitsPerAxis} bits/axis)`:"",O=typeof M.points=="number"?` ${M.points} splats`:"";lt(`${F}${D}${O}
reordering...`);return}else if((M==null?void 0:M.type)==="parse_progress"){const F=M.total??0,D=M.read??0,O=F>0?Math.floor(D/F*100):0;lt(`parsing glTF ...
${D}/${F} splats (${O}%)`);return}else if((M==null?void 0:M.type)==="done"){const F=M.num_points,D=M.final_sh_degree,O=M.gs_stride,ee=M.sh_stride,ne=new Float16Array(M.gaussian_cpu),H=new Float16Array(M.sh_cpu);Ve(`Total splats: ${F}`);const N=f.createBuffer({label:"gltf input 3d gaussians data buffer",size:$t(F*Sl),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});f.queue.writeBuffer(N,0,ne);const Y=ee*Ns,X=f.createBuffer({label:"gltf input spherical harmonics data buffer",size:$t(F*Y),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});f.queue.writeBuffer(X,0,H),V.terminate(),Sn("Parse"),I({num_points:F,gaussian_3d_buffer:N,sh_buffer:X,sh_degree:D,gaussian_cpu:ne,sh_cpu:H,gs_stride:O,sh_stride:ee})}},V.onerror=W=>{V.terminate(),C(W)},d instanceof ArrayBuffer?(lt("parsing glTF..."),V.postMessage({type:"start",glbBuffer:d,sh_degree:y,sort:G},[d])):V.postMessage({type:"start_url",url:d.url,sh_degree:y,sort:G})})}function qs(d){if(d==null)return null;const f=String(d).toLowerCase();return f==="0"||f==="false"||f==="none"?"none":f==="morton"?"morton":f==="hilbert"?"hilbert":f==="peano"?"peano":null}var kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ri={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(d,f){(function(y,G){G(f)})(kl,function(y){class G{constructor(e){const[t,i]=e.split("-"),a=t.split(".");this.major=parseInt(a[0],10),this.minor=parseInt(a[1],10),this.patch=parseInt(a[2],10),this.prerelease=i??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}class I{constructor(e){this.controller_=e}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(e){this.controller_.viewProps.set("disabled",e)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(e){this.controller_.viewProps.set("hidden",e)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class C{constructor(e){this.target=e}}class V extends C{constructor(e,t,i,a){super(e),this.value=t,this.presetKey=i,this.last=a??!0}}class W extends C{constructor(e,t,i){super(e),this.value=t,this.presetKey=i}}class M extends C{constructor(e,t){super(e),this.expanded=t}}class F extends C{constructor(e,t){super(e),this.index=t}}function D(n){return n}function O(n){return n==null}function ee(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function ne(n,e){let t=n;do{const i=Object.getOwnPropertyDescriptor(t,e);if(i&&(i.set!==void 0||i.writable===!0))return!0;t=Object.getPrototypeOf(t)}while(t!==null);return!1}const H={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class N{static alreadyDisposed(){return new N({type:"alreadydisposed"})}static notBindable(){return new N({type:"notbindable"})}static propertyNotFound(e){return new N({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new N({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=H[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}}class Y{constructor(e,t,i){this.obj_=e,this.key_=t,this.presetKey_=i??t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(e){this.obj_[this.key_]=e}writeProperty(e,t){const i=this.read();if(!Y.isBindable(i))throw N.notBindable();if(!(e in i))throw N.propertyNotFound(e);i[e]=t}}class X extends I{get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get title(){var e;return(e=this.controller_.valueController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.valueController.props.set("title",e)}on(e,t){const i=t.bind(this);return this.controller_.valueController.emitter.on(e,()=>{i(new C(this))}),this}}class z{constructor(){this.observers_={}}on(e,t){let i=this.observers_[e];return i||(i=this.observers_[e]=[]),i.push({handler:t}),this}off(e,t){const i=this.observers_[e];return i&&(this.observers_[e]=i.filter(a=>a.handler!==t)),this}emit(e,t){const i=this.observers_[e];i&&i.forEach(a=>{a.handler(t)})}}const Q="tp";function T(n){return(t,i)=>[Q,"-",n,"v",t?`_${t}`:"",i?`-${i}`:""].join("")}function J(n,e){return t=>e(n(t))}function ge(n){return n.rawValue}function ue(n,e){n.emitter.on("change",J(ge,e)),e(n.rawValue)}function ve(n,e,t){ue(n.value(e),t)}function Ge(n,e,t){t?n.classList.add(e):n.classList.remove(e)}function be(n,e){return t=>{Ge(n,e,t)}}function Te(n,e){ue(n,t=>{e.textContent=t??""})}const Ee=T("btn");class Xe{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ee()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("button");i.classList.add(Ee("b")),t.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const a=e.createElement("div");a.classList.add(Ee("t")),Te(t.props.value("title"),a),this.buttonElement.appendChild(a)}}class De{constructor(e,t){this.emitter=new z,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Xe(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class ce{constructor(e,t){var i;this.constraint_=t==null?void 0:t.constraint,this.equals_=(i=t==null?void 0:t.equals)!==null&&i!==void 0?i:(a,x)=>a===x,this.emitter=new z,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const i=t??{forceEmit:!1,last:!0},a=this.constraint_?this.constraint_.constrain(e):e,x=this.rawValue_;this.equals_(x,a)&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=a,this.emitter.emit("change",{options:i,previousRawValue:x,rawValue:a,sender:this}))}}class fe{constructor(e){this.emitter=new z,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const i=t??{forceEmit:!1,last:!0},a=this.value_;a===e&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:i,previousRawValue:a,rawValue:this.value_,sender:this}))}}function se(n,e){const t=e==null?void 0:e.constraint,i=e==null?void 0:e.equals;return!t&&!i?new fe(n):new ce(n,e)}class K{constructor(e){this.emitter=new z,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((i,a)=>Object.assign(i,{[a]:se(e[a])}),{})}static fromObject(e){const t=this.createCore(e);return new K(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}function Be(n,e){const i=Object.keys(e).reduce((a,x)=>{if(a===void 0)return;const E=e[x],q=E(n[x]);return q.succeeded?Object.assign(Object.assign({},a),{[x]:q.value}):void 0},{});return i}function we(n,e){return n.reduce((t,i)=>{if(t===void 0)return;const a=e(i);if(!(!a.succeeded||a.value===void 0))return[...t,a.value]},[])}function Ce(n){return n===null?!1:typeof n=="object"}function Se(n){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const i=n(t);return i!==void 0?{succeeded:!0,value:i}:{succeeded:!1,value:void 0}}}function Qe(n){return{custom:e=>Se(e)(n),boolean:Se(e=>typeof e=="boolean"?e:void 0)(n),number:Se(e=>typeof e=="number"?e:void 0)(n),string:Se(e=>typeof e=="string"?e:void 0)(n),function:Se(e=>typeof e=="function"?e:void 0)(n),constant:e=>Se(t=>t===e?e:void 0)(n),raw:Se(e=>e)(n),object:e=>Se(t=>{if(Ce(t))return Be(t,e)})(n),array:e=>Se(t=>{if(Array.isArray(t))return we(t,e)})(n)}}const de={optional:Qe(!0),required:Qe(!1)};function xe(n,e){const t=de.required.object(e)(n);return t.succeeded?t.value:void 0}function et(n){console.warn([`Missing '${n.key}' of ${n.target} in ${n.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function B(n){return n&&n.parentElement&&n.parentElement.removeChild(n),null}class L{constructor(e){this.value_=e}static create(e){return[new L(e),(t,i)=>{e.setRawValue(t,i)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const v=T("");function r(n,e){return be(n,v(void 0,e))}class p extends K{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=L.create(se(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,i,a;const x=e??{};return new p(K.createCore({disabled:(t=x.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(i=x.hidden)!==null&&i!==void 0?i:!1,parent:(a=x.parent)!==null&&a!==void 0?a:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){ue(this.globalDisabled_,r(e,"disabled")),ve(this,"hidden",r(e,"hidden"))}bindDisabled(e){ue(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){ue(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const i=e.previousRawValue;i==null||i.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function u(){return["veryfirst","first","last","verylast"]}const m=T(""),w={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class P{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{u().forEach(i=>{t.classList.remove(m(void 0,w[i]))}),this.blade.get("positions").forEach(i=>{t.classList.add(m(void 0,w[i]))})}),this.viewProps.handleDispose(()=>{B(t)})}get parent(){return this.parent_}set parent(e){if(this.parent_=e,!("parent"in this.viewProps.valMap_)){et({key:"parent",target:p.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const S="http://www.w3.org/2000/svg";function s(n){n.offsetHeight}function _(n,e){const t=n.style.transition;n.style.transition="none",e(),n.style.transition=t}function l(n){return n.ontouchstart!==void 0}function c(){return globalThis}function o(){return c().document}function h(n){const e=n.ownerDocument.defaultView;return e&&"document"in e?n.getContext("2d",{willReadFrequently:!0}):null}const b={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function g(n,e){const t=n.createElementNS(S,"svg");return t.innerHTML=b[e],t}function k(n,e,t){n.insertBefore(e,n.children[t])}function U(n){n.parentElement&&n.parentElement.removeChild(n)}function A(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function j(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function $(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}const Z=T("lbl");function ie(n,e){const t=n.createDocumentFragment();return e.split(`
`).map(a=>n.createTextNode(a)).forEach((a,x)=>{x>0&&t.appendChild(n.createElement("br")),t.appendChild(a)}),t}class ae{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Z()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("div");i.classList.add(Z("l")),ve(t.props,"label",x=>{O(x)?this.element.classList.add(Z(void 0,"nol")):(this.element.classList.remove(Z(void 0,"nol")),j(i),i.appendChild(ie(e,x)))}),this.element.appendChild(i),this.labelElement=i;const a=e.createElement("div");a.classList.add(Z("v")),this.element.appendChild(a),this.valueElement=a}}class te extends P{constructor(e,t){const i=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{view:new ae(e,{props:t.props,viewProps:i}),viewProps:i})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const re={id:"button",type:"blade",accept(n){const e=de,t=xe(n,{title:e.required.string,view:e.required.constant("button"),label:e.optional.string});return t?{params:t}:null},controller(n){return new te(n.document,{blade:n.blade,props:K.fromObject({label:n.params.label}),valueController:new De(n.document,{props:K.fromObject({title:n.params.title}),viewProps:n.viewProps})})},api(n){return!(n.controller instanceof te)||!(n.controller.valueController instanceof De)?null:new X(n.controller)}};class _e extends P{constructor(e){super(e),this.value=e.value}}function he(){return new K({positions:se([],{equals:ee})})}class Ie extends K{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},i=K.createCore(t);return new Ie(i)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!O(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const i=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};ve(this,"expanded",i),ve(this,"temporaryExpanded",i)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Oe(n,e){let t=0;return _(e,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),s(e),t=e.clientHeight,n.set("temporaryExpanded",null),s(e)}),t}function Ue(n,e){e.style.height=n.styleHeight}function Le(n,e){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),O(n.get("expandedHeight"))){const t=Oe(n,e);t>0&&n.set("expandedHeight",t)}n.set("shouldFixHeight",!0),s(e)}),n.emitter.on("change",()=>{Ue(n,e)}),Ue(n,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&n.cleanUpTransition()})}class Fe extends I{constructor(e,t){super(e),this.rackApi_=t}}function je(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function He(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function Ye(n,e){const t=e??{};return n.addBlade(Object.assign(Object.assign({},t),{view:"separator"}))}function Ke(n,e){return n.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}class Ne{constructor(e){this.emitter=new z,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw N.shouldNeverHappen();const i=t!==void 0?t:this.items_.length;this.items_.splice(i,0,e),this.cache_.add(e);const a=this.extract_(e);a&&(a.emitter.on("add",this.onSubListAdd_),a.emitter.on("remove",this.onSubListRemove_),a.allItems().forEach(x=>{this.cache_.add(x)})),this.emitter.emit("add",{index:i,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const i=this.extract_(e);i&&(i.emitter.off("add",this.onSubListAdd_),i.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}class We extends I{constructor(e){super(e),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new z,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const i=t.bind(this);return this.emitter_.on(e,a=>{i(a.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(e){const t=e.sender.target.read();this.emitter_.emit("change",{event:new V(this,t,this.controller_.binding.target.presetKey,e.options.last)})}}class ke extends te{constructor(e,t){super(e,t),this.binding=t.binding}}class qe extends I{constructor(e){super(e),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new z,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}on(e,t){const i=t.bind(this);return this.emitter_.on(e,a=>{i(a.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(e){const t=e.sender.target.read();this.emitter_.emit("update",{event:new W(this,t,this.controller_.binding.target.presetKey)})}}class Re extends te{constructor(e,t){super(e,t),this.binding=t.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function tt(n){return n instanceof ut?n.apiSet_:n instanceof Fe?n.rackApi_.apiSet_:null}function Ze(n,e){const t=n.find(i=>i.controller_===e);if(!t)throw N.shouldNeverHappen();return t}function St(n,e,t){if(!Y.isBindable(n))throw N.notBindable();return new Y(n,e,t)}class ut extends I{constructor(e,t){super(e),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new z,this.apiSet_=new Ne(tt),this.pool_=t;const i=this.controller_.rack;i.emitter.on("add",this.onRackAdd_),i.emitter.on("remove",this.onRackRemove_),i.emitter.on("inputchange",this.onRackInputChange_),i.emitter.on("monitorupdate",this.onRackMonitorUpdate_),i.children.forEach(a=>{this.setUpApi_(a)})}get children(){return this.controller_.rack.children.map(e=>Ze(this.apiSet_,e))}addInput(e,t,i){const a=i??{},x=this.controller_.view.element.ownerDocument,E=this.pool_.createInput(x,St(e,t,a.presetKey),a),q=new We(E);return this.add(q,a.index)}addMonitor(e,t,i){const a=i??{},x=this.controller_.view.element.ownerDocument,E=this.pool_.createMonitor(x,St(e,t),a),q=new qe(E);return this.add(q,a.index)}addFolder(e){return He(this,e)}addButton(e){return je(this,e)}addSeparator(e){return Ye(this,e)}addTab(e){return Ke(this,e)}add(e,t){this.controller_.rack.add(e.controller_,t);const i=this.apiSet_.find(a=>a.controller_===e.controller_);return i&&this.apiSet_.remove(i),this.apiSet_.add(e),e}remove(e){this.controller_.rack.remove(e.controller_)}addBlade(e){const t=this.controller_.view.element.ownerDocument,i=this.pool_.createBlade(t,e),a=this.pool_.createBladeApi(i);return this.add(a,e.index)}on(e,t){const i=t.bind(this);return this.emitter_.on(e,a=>{i(a.event)}),this}setUpApi_(e){this.apiSet_.find(i=>i.controller_===e)||this.apiSet_.add(this.pool_.createBladeApi(e))}onRackAdd_(e){this.setUpApi_(e.bladeController)}onRackRemove_(e){if(e.isRoot){const t=Ze(this.apiSet_,e.bladeController);this.apiSet_.remove(t)}}onRackInputChange_(e){const t=e.bladeController;if(t instanceof ke){const i=Ze(this.apiSet_,t),a=t.binding;this.emitter_.emit("change",{event:new V(i,a.target.read(),a.target.presetKey,e.options.last)})}else if(t instanceof _e){const i=Ze(this.apiSet_,t);this.emitter_.emit("change",{event:new V(i,t.value.rawValue,void 0,e.options.last)})}}onRackMonitorUpdate_(e){if(!(e.bladeController instanceof Re))throw N.shouldNeverHappen();const t=Ze(this.apiSet_,e.bladeController),i=e.bladeController.binding;this.emitter_.emit("update",{event:new W(t,i.target.read(),i.target.presetKey)})}}class _t extends Fe{constructor(e,t){super(e,new ut(e.rackController,t)),this.emitter_=new z,this.controller_.foldable.value("expanded").emitter.on("change",i=>{this.emitter_.emit("fold",{event:new M(this,i.sender.rawValue)})}),this.rackApi_.on("change",i=>{this.emitter_.emit("change",{event:i})}),this.rackApi_.on("update",i=>{this.emitter_.emit("update",{event:i})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(e){this.controller_.foldable.set("expanded",e)}get title(){return this.controller_.props.get("title")}set title(e){this.controller_.props.set("title",e)}get children(){return this.rackApi_.children}addInput(e,t,i){return this.rackApi_.addInput(e,t,i)}addMonitor(e,t,i){return this.rackApi_.addMonitor(e,t,i)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const i=t.bind(this);return this.emitter_.on(e,a=>{i(a.event)}),this}}class mt extends P{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}}class Rt{constructor(e,t){const i=T(t.viewName);this.element=e.createElement("div"),this.element.classList.add(i()),t.viewProps.bindClassModifiers(this.element)}}function At(n,e){for(let t=0;t<n.length;t++){const i=n[t];if(i instanceof ke&&i.binding===e)return i}return null}function Tt(n,e){for(let t=0;t<n.length;t++){const i=n[t];if(i instanceof Re&&i.binding===e)return i}return null}function cn(n,e){for(let t=0;t<n.length;t++){const i=n[t];if(i instanceof _e&&i.value===e)return i}return null}function Ot(n){return n instanceof Ae?n.rack:n instanceof mt?n.rackController.rack:null}function dn(n){const e=Ot(n);return e?e.bcSet_:null}class pn{constructor(e){var t,i;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new z,this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(i=this.blade_)===null||i===void 0||i.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new Ne(dn),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var i;(i=e.parent)===null||i===void 0||i.remove(e),ne(e,"parent")?e.parent=this:(e.parent_=this,et({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(e,t)}remove(e){ne(e,"parent")?e.parent=null:(e.parent_=null,et({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(t=>t instanceof e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,isRoot:t,sender:this}),!t)return;const i=e.item;if(i.viewProps.emitter.on("change",this.onChildViewPropsChange_),i.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),i.viewProps.handleDispose(this.onChildDispose_),i instanceof ke)i.binding.emitter.on("change",this.onChildInputChange_);else if(i instanceof Re)i.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(i instanceof _e)i.value.emitter.on("change",this.onChildValueChange_);else{const a=Ot(i);if(a){const x=a.emitter;x.on("layout",this.onDescendantLayout_),x.on("inputchange",this.onDescendantInputChange_),x.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,isRoot:t,sender:this}),!t)return;const i=e.item;if(i instanceof ke)i.binding.emitter.off("change",this.onChildInputChange_);else if(i instanceof Re)i.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(i instanceof _e)i.value.emitter.off("change",this.onChildValueChange_);else{const a=Ot(i);if(a){const x=a.emitter;x.off("layout",this.onDescendantLayout_),x.off("inputchange",this.onDescendantInputChange_),x.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const e=this.bcSet_.items.filter(a=>!a.viewProps.get("hidden")),t=e[0],i=e[e.length-1];this.bcSet_.items.forEach(a=>{const x=[];a===t&&(x.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&x.push("veryfirst")),a===i&&(x.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&x.push("verylast")),a.blade.set("positions",x)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildInputChange_(e){const t=At(this.find(ke),e.sender);if(!t)throw N.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onChildMonitorUpdate_(e){const t=Tt(this.find(Re),e.sender);if(!t)throw N.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:t,sender:this})}onChildValueChange_(e){const t=cn(this.find(_e),e.sender);if(!t)throw N.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:t,options:e.options,sender:this})}onDescendantLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(e){this.emitter.emit("inputchange",{bladeController:e.bladeController,options:e.options,sender:this})}onDescendantMonitorUpdate_(e){this.emitter.emit("monitorupdate",{bladeController:e.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Ae extends P{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Rt(e,{viewName:"brk",viewProps:t.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const i=new pn({blade:t.root?void 0:t.blade,viewProps:t.viewProps});i.emitter.on("add",this.onRackAdd_),i.emitter.on("remove",this.onRackRemove_),this.rack=i,this.viewProps.handleDispose(()=>{for(let a=this.rack.children.length-1;a>=0;a--)this.rack.children[a].viewProps.set("disposed",!0)})}onRackAdd_(e){e.isRoot&&k(this.view.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.isRoot&&U(e.bladeController.view.element)}}const pi=T("cnt");class Hs{constructor(e,t){var i;this.className_=T((i=t.viewName)!==null&&i!==void 0?i:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),pi()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),ve(this.foldable_,"completed",be(this.element,this.className_(void 0,"cpl")));const a=e.createElement("button");a.classList.add(this.className_("b")),ve(t.props,"title",le=>{O(le)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(a),this.element.appendChild(a),this.buttonElement=a;const x=e.createElement("div");x.classList.add(this.className_("i")),this.element.appendChild(x);const E=e.createElement("div");E.classList.add(this.className_("t")),Te(t.props.value("title"),E),this.buttonElement.appendChild(E),this.titleElement=E;const q=e.createElement("div");q.classList.add(this.className_("m")),this.buttonElement.appendChild(q);const oe=t.containerElement;oe.classList.add(this.className_("c")),this.element.appendChild(oe),this.containerElement=oe}}class Gn extends mt{constructor(e,t){var i;const a=Ie.create((i=t.expanded)!==null&&i!==void 0?i:!0),x=new Ae(e,{blade:t.blade,root:t.root,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:x,view:new Hs(e,{containerElement:x.view.element,foldable:a,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=a,Le(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Ys={id:"folder",type:"blade",accept(n){const e=de,t=xe(n,{title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean});return t?{params:t}:null},controller(n){return new Gn(n.document,{blade:n.blade,expanded:n.params.expanded,props:K.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof Gn?new _t(n.controller,n.pool):null}};class Lt extends _e{constructor(e,t){const i=t.valueController.viewProps;super(Object.assign(Object.assign({},t),{value:t.valueController.value,view:new ae(e,{props:t.props,viewProps:i}),viewProps:i})),this.props=t.props,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class hi extends I{}const fi=T("spr");class Ks{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(fi()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("hr");i.classList.add(fi("r")),this.element.appendChild(i)}}class _i extends P{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new Ks(e,{viewProps:t.viewProps})}))}}const Xs={id:"separator",type:"blade",accept(n){const t=xe(n,{view:de.required.constant("separator")});return t?{params:t}:null},controller(n){return new _i(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof _i?new hi(n.controller):null}},jt=T("tbi");class Qs{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(jt()),t.viewProps.bindClassModifiers(this.element),ve(t.props,"selected",x=>{x?this.element.classList.add(jt(void 0,"sel")):this.element.classList.remove(jt(void 0,"sel"))});const i=e.createElement("button");i.classList.add(jt("b")),t.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const a=e.createElement("div");a.classList.add(jt("t")),Te(t.props.value("title"),a),this.buttonElement.appendChild(a),this.titleElement=a}}class Js{constructor(e,t){this.emitter=new z,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Qs(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class mi{constructor(e,t){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Js(e,{props:t.itemProps,viewProps:p.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Ae(e,{blade:he(),viewProps:p.create()}),this.props=t.props,ve(this.props,"selected",i=>{this.itemController.props.set("selected",i),this.contentController.viewProps.set("hidden",!i)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class gi{constructor(e,t){this.controller_=e,this.rackApi_=t}get title(){var e;return(e=this.controller_.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller_.itemController.props.set("title",e)}get selected(){return this.controller_.props.get("selected")}set selected(e){this.controller_.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addSeparator(e){return this.rackApi_.addSeparator(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addInput(e,t,i){return this.rackApi_.addInput(e,t,i)}addMonitor(e,t,i){return this.rackApi_.addMonitor(e,t,i)}addBlade(e){return this.rackApi_.addBlade(e)}}class vi extends Fe{constructor(e,t){super(e,new ut(e.rackController,t)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new z,this.pageApiMap_=new Map,this.rackApi_.on("change",i=>{this.emitter_.emit("change",{event:i})}),this.rackApi_.on("update",i=>{this.emitter_.emit("update",{event:i})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(i=>{this.setUpPageApi_(i)})}get pages(){return this.controller_.pageSet.items.map(e=>{const t=this.pageApiMap_.get(e);if(!t)throw N.shouldNeverHappen();return t})}addPage(e){const t=this.controller_.view.element.ownerDocument,i=new mi(t,{itemProps:K.fromObject({selected:!1,title:e.title}),props:K.fromObject({selected:!1})});this.controller_.add(i,e.index);const a=this.pageApiMap_.get(i);if(!a)throw N.shouldNeverHappen();return a}removePage(e){this.controller_.remove(e)}on(e,t){const i=t.bind(this);return this.emitter_.on(e,a=>{i(a.event)}),this}setUpPageApi_(e){const t=this.rackApi_.apiSet_.find(a=>a.controller_===e.contentController);if(!t)throw N.shouldNeverHappen();const i=new gi(e,t);this.pageApiMap_.set(e,i)}onPageAdd_(e){this.setUpPageApi_(e.item)}onPageRemove_(e){if(!this.pageApiMap_.get(e.item))throw N.shouldNeverHappen();this.pageApiMap_.delete(e.item)}onSelect_(e){this.emitter_.emit("select",{event:new F(this,e.rawValue)})}}const bi=-1;class er{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=se(!0),this.selectedIndex=se(bi),this.items_=[]}add(e,t){const i=t??this.items_.length;this.items_.splice(i,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=bi,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,i)=>{t.rawValue=i===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,i)=>{t.rawValue=i===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(i=>i===e.sender);this.items_.forEach((i,a)=>{i.rawValue=a===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const Ht=T("tab");class tr{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ht(),pi()),t.viewProps.bindClassModifiers(this.element),ue(t.empty,be(this.element,Ht(void 0,"nop")));const i=e.createElement("div");i.classList.add(Ht("t")),this.element.appendChild(i),this.itemsElement=i;const a=e.createElement("div");a.classList.add(Ht("i")),this.element.appendChild(a);const x=t.contentsElement;x.classList.add(Ht("c")),this.element.appendChild(x),this.contentsElement=x}}class wi extends mt{constructor(e,t){const i=new Ae(e,{blade:t.blade,viewProps:t.viewProps}),a=new er;super({blade:t.blade,rackController:i,view:new tr(e,{contentsElement:i.view.element,empty:a.empty,viewProps:t.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Ne(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=a}get pageSet(){return this.pageSet_}add(e,t){this.pageSet_.add(e,t)}remove(e){this.pageSet_.remove(this.pageSet_.items[e])}onPageAdd_(e){const t=e.item;k(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(t.contentController,e.index),this.tab.add(t.props.value("selected"))}onPageRemove_(e){const t=e.item;U(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.rackController.rack.remove(t.contentController),this.tab.remove(t.props.value("selected"))}}const xi={id:"tab",type:"blade",accept(n){const e=de,t=xe(n,{pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")});return!t||t.pages.length===0?null:{params:t}},controller(n){const e=new wi(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(t=>{const i=new mi(n.document,{itemProps:K.fromObject({selected:!1,title:t.title}),props:K.fromObject({selected:!1})});e.add(i)}),e},api(n){return n.controller instanceof wi?new vi(n.controller,n.pool):null}};function nr(n,e){const t=n.accept(e.params);if(!t)return null;const i=de.optional.boolean(e.params.disabled).value,a=de.optional.boolean(e.params.hidden).value;return n.controller({blade:he(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:i,hidden:a}),viewProps:p.create({disabled:i,hidden:a})})}class ir{constructor(){this.disabled=!1,this.emitter=new z}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class sr{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new z,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class rr{constructor(e){this.onValueChange_=this.onValueChange_.bind(this),this.reader=e.reader,this.writer=e.writer,this.emitter=new z,this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.target=e.target,this.read()}read(){const e=this.target.read();e!==void 0&&(this.value.rawValue=this.reader(e))}write_(e){this.writer(this.target,e)}onValueChange_(e){this.write_(e.rawValue),this.emitter.emit("change",{options:e.options,rawValue:e.rawValue,sender:this})}}function yi(n,e){for(;n.length<e;)n.push(void 0)}function or(n){const e=[];return yi(e,n),se(e)}function ar(n){const e=n.indexOf(void 0);return e<0?n:n.slice(0,e)}function lr(n,e){const t=[...ar(n),e];return t.length>n.length?t.splice(0,t.length-n.length):yi(t,n.length),t}class ur{constructor(e){this.onTick_=this.onTick_.bind(this),this.reader_=e.reader,this.target=e.target,this.emitter=new z,this.value=e.value,this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const e=this.target.read();if(e===void 0)return;const t=this.value.rawValue,i=this.reader_(e);this.value.rawValue=lr(t,i),this.emitter.emit("update",{rawValue:i,sender:this})}onTick_(e){this.read()}}class Yt{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,i)=>i.constrain(t),e)}}function ct(n,e){if(n instanceof e)return n;if(n instanceof Yt){const t=n.constraints.reduce((i,a)=>i||(a instanceof e?a:null),null);if(t)return t}return null}class zt{constructor(e){this.values=K.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),i=this.values.get("min");return Math.min(Math.max(e,i),t)}}class Kt{constructor(e){this.values=K.fromObject({options:e})}get options(){return this.values.get("options")}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(a=>a.value===e).length>0?e:t[0].value}}class Pi{constructor(e){this.values=K.fromObject({max:e.max,min:e.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(e){const t=this.values.get("max"),i=this.values.get("min");let a=e;return O(i)||(a=Math.max(a,i)),O(t)||(a=Math.min(a,t)),a}}class hn{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,i=Math.round((e-t)/this.step);return t+i*this.step}}const Dn=T("lst");class cr{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Dn()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("select");i.classList.add(Dn("s")),t.viewProps.bindDisabled(i),this.element.appendChild(i),this.selectElement=i;const a=e.createElement("div");a.classList.add(Dn("m")),a.appendChild(g(e,"dropdown")),this.element.appendChild(a),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,ve(this.props_,"options",x=>{A(this.selectElement),x.forEach(E=>{const q=e.createElement("option");q.textContent=E.text,this.selectElement.appendChild(q)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Xt{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new cr(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}}const Si=T("pop");class dr{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Si()),t.viewProps.bindClassModifiers(this.element),ue(t.shows,be(this.element,Si(void 0,"v")))}}class Ei{constructor(e,t){this.shows=se(!1),this.viewProps=t.viewProps,this.view=new dr(e,{shows:this.shows,viewProps:this.viewProps})}}const Ci=T("txt");class pr{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Ci()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const i=e.createElement("input");i.classList.add(Ci("i")),i.type="text",t.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class fn{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new pr(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const i=e.currentTarget.value,a=this.parser_(i);O(a)||(this.value.rawValue=a),this.view.refresh()}}function hr(n){return String(n)}function ki(n){return n==="false"?!1:!!n}function Bi(n){return hr(n)}class fr{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const _r={"**":(n,e)=>Math.pow(n,e),"*":(n,e)=>n*e,"/":(n,e)=>n/e,"%":(n,e)=>n%e,"+":(n,e)=>n+e,"-":(n,e)=>n-e,"<<":(n,e)=>n<<e,">>":(n,e)=>n>>e,">>>":(n,e)=>n>>>e,"&":(n,e)=>n&e,"^":(n,e)=>n^e,"|":(n,e)=>n|e};class mr{constructor(e,t,i){this.left=t,this.operator=e,this.right=i}evaluate(){const e=_r[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const gr={"+":n=>n,"-":n=>-n,"~":n=>~n};class vr{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=gr[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Un(n){return(e,t)=>{for(let i=0;i<n.length;i++){const a=n[i](e,t);if(a!=="")return a}return""}}function Qt(n,e){var t;const i=n.substr(e).match(/^\s+/);return(t=i&&i[0])!==null&&t!==void 0?t:""}function br(n,e){const t=n.substr(e,1);return t.match(/^[1-9]$/)?t:""}function Jt(n,e){var t;const i=n.substr(e).match(/^[0-9]+/);return(t=i&&i[0])!==null&&t!==void 0?t:""}function wr(n,e){const t=Jt(n,e);if(t!=="")return t;const i=n.substr(e,1);if(e+=1,i!=="-"&&i!=="+")return"";const a=Jt(n,e);return a===""?"":i+a}function Rn(n,e){const t=n.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const i=wr(n,e);return i===""?"":t+i}function Ii(n,e){const t=n.substr(e,1);if(t==="0")return t;const i=br(n,e);return e+=i.length,i===""?"":i+Jt(n,e)}function xr(n,e){const t=Ii(n,e);if(e+=t.length,t==="")return"";const i=n.substr(e,1);if(e+=i.length,i!==".")return"";const a=Jt(n,e);return e+=a.length,t+i+a+Rn(n,e)}function yr(n,e){const t=n.substr(e,1);if(e+=t.length,t!==".")return"";const i=Jt(n,e);return e+=i.length,i===""?"":t+i+Rn(n,e)}function Pr(n,e){const t=Ii(n,e);return e+=t.length,t===""?"":t+Rn(n,e)}const Sr=Un([xr,yr,Pr]);function Er(n,e){var t;const i=n.substr(e).match(/^[01]+/);return(t=i&&i[0])!==null&&t!==void 0?t:""}function Cr(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const i=Er(n,e);return i===""?"":t+i}function kr(n,e){var t;const i=n.substr(e).match(/^[0-7]+/);return(t=i&&i[0])!==null&&t!==void 0?t:""}function Br(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const i=kr(n,e);return i===""?"":t+i}function Ir(n,e){var t;const i=n.substr(e).match(/^[0-9a-f]+/i);return(t=i&&i[0])!==null&&t!==void 0?t:""}function Mr(n,e){const t=n.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const i=Ir(n,e);return i===""?"":t+i}const Gr=Un([Cr,Br,Mr]),Dr=Un([Gr,Sr]);function Ur(n,e){const t=Dr(n,e);return e+=t.length,t===""?null:{evaluable:new fr(t),cursor:e}}function Rr(n,e){const t=n.substr(e,1);if(e+=t.length,t!=="(")return null;const i=Gi(n,e);if(!i)return null;e=i.cursor,e+=Qt(n,e).length;const a=n.substr(e,1);return e+=a.length,a!==")"?null:{evaluable:i.evaluable,cursor:e}}function Ar(n,e){var t;return(t=Ur(n,e))!==null&&t!==void 0?t:Rr(n,e)}function Mi(n,e){const t=Ar(n,e);if(t)return t;const i=n.substr(e,1);if(e+=i.length,i!=="+"&&i!=="-"&&i!=="~")return null;const a=Mi(n,e);return a?(e=a.cursor,{cursor:e,evaluable:new vr(i,a.evaluable)}):null}function Tr(n,e,t){t+=Qt(e,t).length;const i=n.filter(a=>e.startsWith(a,t))[0];return i?(t+=i.length,t+=Qt(e,t).length,{cursor:t,operator:i}):null}function Or(n,e){return(t,i)=>{const a=n(t,i);if(!a)return null;i=a.cursor;let x=a.evaluable;for(;;){const E=Tr(e,t,i);if(!E)break;i=E.cursor;const q=n(t,i);if(!q)return null;i=q.cursor,x=new mr(E.operator,x,q.evaluable)}return x?{cursor:i,evaluable:x}:null}}const Lr=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,e)=>Or(n,e),Mi);function Gi(n,e){return e+=Qt(n,e).length,Lr(n,e)}function zr(n){const e=Gi(n,0);return!e||e.cursor+Qt(n,e.cursor).length!==n.length?null:e.evaluable}function dt(n){var e;const t=zr(n);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function Di(n){if(typeof n=="number")return n;if(typeof n=="string"){const e=dt(n);if(!O(e))return e}return 0}function Vr(n){return String(n)}function Je(n){return e=>e.toFixed(Math.max(Math.min(n,20),0))}const Fr=Je(0);function _n(n){return Fr(n)+"%"}function Ui(n){return String(n)}function An(n){return n}function en({primary:n,secondary:e,forward:t,backward:i}){let a=!1;function x(E){a||(a=!0,E(),a=!1)}n.emitter.on("change",E=>{x(()=>{e.setRawValue(t(n,e),E.options)})}),e.emitter.on("change",E=>{x(()=>{n.setRawValue(i(n,e),E.options)}),x(()=>{e.setRawValue(t(n,e),E.options)})}),x(()=>{e.setRawValue(t(n,e),{forceEmit:!1,last:!0})})}function it(n,e){const t=n*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function tn(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function pt(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function Nr(n){return n==="ArrowUp"||n==="ArrowDown"}function Ri(n){return Nr(n)||n==="ArrowLeft"||n==="ArrowRight"}function Tn(n,e){var t,i;const a=e.ownerDocument.defaultView,x=e.getBoundingClientRect();return{x:n.pageX-(((t=a&&a.scrollX)!==null&&t!==void 0?t:0)+x.left),y:n.pageY-(((i=a&&a.scrollY)!==null&&i!==void 0?i:0)+x.top)}}class Et{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new z,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const i=this.elem_.ownerDocument;i.addEventListener("mousemove",this.onDocumentMouseMove_),i.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(Tn(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(Tn(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(Tn(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-i.left,y:t.clientY-i.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-i.left,y:t.clientY-i.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const i=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,a=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(i?{x:i.clientX-a.left,y:i.clientY-a.top}:void 0),sender:this,shiftKey:e.shiftKey})}}function Me(n,e,t,i,a){const x=(n-e)/(t-e);return i+x*(a-i)}function Ai(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function $e(n,e,t){return Math.min(Math.max(n,e),t)}function Ti(n,e){return(n%e+e)%e}const rt=T("txt");class Wr{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(rt(),rt(void 0,"num")),t.arrayPosition&&this.element.classList.add(rt(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("input");i.classList.add(rt("i")),i.type="text",t.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(rt()),this.inputElement.classList.add(rt("i"));const a=e.createElement("div");a.classList.add(rt("k")),this.element.appendChild(a),this.knobElement=a;const x=e.createElementNS(S,"svg");x.classList.add(rt("g")),this.knobElement.appendChild(x);const E=e.createElementNS(S,"path");E.classList.add(rt("gb")),x.appendChild(E),this.guideBodyElem_=E;const q=e.createElementNS(S,"path");q.classList.add(rt("gh")),x.appendChild(q),this.guideHeadElem_=q;const oe=e.createElement("div");oe.classList.add(T("tt")()),this.knobElement.appendChild(oe),this.tooltipElem_=oe,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(rt(void 0,"drg"));return}this.element.classList.add(rt(void 0,"drg"));const t=e.rawValue/this.props_.get("draggingScale"),i=t+(t>0?-1:t<0?1:0),a=$e(-i,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${i+a},0 L${i},4 L${i+a},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const x=this.props_.get("formatter");this.tooltipElem_.textContent=x(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class nn{constructor(e,t){var i;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.parser_=t.parser,this.props=t.props,this.sliderProps_=(i=t.sliderProps)!==null&&i!==void 0?i:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=se(null),this.view=new Wr(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const a=new Et(this.view.knobElement);a.emitter.on("down",this.onPointerDown_),a.emitter.on("move",this.onPointerMove_),a.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,i;const a=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("minValue"),x=(i=this.sliderProps_)===null||i===void 0?void 0:i.get("maxValue");let E=e;return a!==void 0&&(E=Math.max(E,a)),x!==void 0&&(E=Math.min(E,x)),E}onInputChange_(e){const i=e.currentTarget.value,a=this.parser_(i);O(a)||(this.value.rawValue=this.constrainValue_(a)),this.view.refresh()}onInputKeyDown_(e){const t=it(this.baseStep_,tn(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){it(this.baseStep_,tn(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("draggingScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const On=T("sld");class qr{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(On()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("div");i.classList.add(On("t")),t.viewProps.bindTabIndex(i),this.element.appendChild(i),this.trackElement=i;const a=e.createElement("div");a.classList.add(On("k")),this.trackElement.appendChild(a),this.knobElement=a,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=$e(Me(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class Zr{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=t.baseStep,this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new qr(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Et(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(Me($e(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=it(this.baseStep_,pt(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){it(this.baseStep_,pt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ln=T("sldtxt");class $r{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ln());const i=e.createElement("div");i.classList.add(Ln("s")),this.sliderView_=t.sliderView,i.appendChild(this.sliderView_.element),this.element.appendChild(i);const a=e.createElement("div");a.classList.add(Ln("t")),this.textView_=t.textView,a.appendChild(this.textView_.element),this.element.appendChild(a)}}class zn{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new Zr(e,{baseStep:t.baseStep,props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new nn(e,{baseStep:t.baseStep,parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new $r(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function sn(n,e){n.write(e)}function mn(n){const e=de;if(Array.isArray(n))return e.required.array(e.required.object({text:e.required.string,value:e.required.raw}))(n).value;if(typeof n=="object")return e.required.raw(n).value}function Oi(n){if(n==="inline"||n==="popup")return n}function gt(n){const e=de;return e.required.object({max:e.optional.number,min:e.optional.number,step:e.optional.number})(n).value}function Li(n){if(Array.isArray(n))return n;const e=[];return Object.keys(n).forEach(t=>{e.push({text:t,value:n[t]})}),e}function Vn(n){return O(n)?null:new Kt(Li(n))}function jr(n){const e=n?ct(n,hn):null;return e?e.step:null}function gn(n,e){const t=n&&ct(n,hn);return t?Ai(t.step):Math.max(Ai(e),2)}function Vt(n){const e=jr(n);return e??1}function Ft(n,e){var t;const i=n&&ct(n,hn),a=Math.abs((t=i==null?void 0:i.step)!==null&&t!==void 0?t:e);return a===0?.1:Math.pow(10,Math.floor(Math.log10(a))-1)}const vn=T("ckb");class Hr{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(vn()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("label");i.classList.add(vn("l")),this.element.appendChild(i);const a=e.createElement("input");a.classList.add(vn("i")),a.type="checkbox",i.appendChild(a),this.inputElement=a,t.viewProps.bindDisabled(this.inputElement);const x=e.createElement("div");x.classList.add(vn("w")),i.appendChild(x);const E=g(e,"check");x.appendChild(E),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Yr{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Hr(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked}}function Kr(n){const e=[],t=Vn(n.options);return t&&e.push(t),new Yt(e)}const Xr={id:"input-bool",type:"input",accept:(n,e)=>{if(typeof n!="boolean")return null;const i=xe(e,{options:de.optional.custom(mn)});return i?{initialValue:n,params:i}:null},binding:{reader:n=>ki,constraint:n=>Kr(n.params),writer:n=>sn},controller:n=>{const e=n.document,t=n.value,i=n.constraint,a=i&&ct(i,Kt);return a?new Xt(e,{props:new K({options:a.values.value("options")}),value:t,viewProps:n.viewProps}):new Yr(e,{value:t,viewProps:n.viewProps})}},Ct=T("col");class Qr{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ct()),t.foldable.bindExpandedClass(this.element,Ct(void 0,"expanded")),ve(t.foldable,"completed",be(this.element,Ct(void 0,"cpl")));const i=e.createElement("div");i.classList.add(Ct("h")),this.element.appendChild(i);const a=e.createElement("div");a.classList.add(Ct("s")),i.appendChild(a),this.swatchElement=a;const x=e.createElement("div");if(x.classList.add(Ct("t")),i.appendChild(x),this.textElement=x,t.pickerLayout==="inline"){const E=e.createElement("div");E.classList.add(Ct("p")),this.element.appendChild(E),this.pickerElement=E}else this.pickerElement=null}}function Jr(n,e,t){const i=$e(n/255,0,1),a=$e(e/255,0,1),x=$e(t/255,0,1),E=Math.max(i,a,x),q=Math.min(i,a,x),oe=E-q;let le=0,ye=0;const Pe=(q+E)/2;return oe!==0&&(ye=oe/(1-Math.abs(E+q-1)),i===E?le=(a-x)/oe:a===E?le=2+(x-i)/oe:le=4+(i-a)/oe,le=le/6+(le<0?1:0)),[le*360,ye*100,Pe*100]}function eo(n,e,t){const i=(n%360+360)%360,a=$e(e/100,0,1),x=$e(t/100,0,1),E=(1-Math.abs(2*x-1))*a,q=E*(1-Math.abs(i/60%2-1)),oe=x-E/2;let le,ye,Pe;return i>=0&&i<60?[le,ye,Pe]=[E,q,0]:i>=60&&i<120?[le,ye,Pe]=[q,E,0]:i>=120&&i<180?[le,ye,Pe]=[0,E,q]:i>=180&&i<240?[le,ye,Pe]=[0,q,E]:i>=240&&i<300?[le,ye,Pe]=[q,0,E]:[le,ye,Pe]=[E,0,q],[(le+oe)*255,(ye+oe)*255,(Pe+oe)*255]}function to(n,e,t){const i=$e(n/255,0,1),a=$e(e/255,0,1),x=$e(t/255,0,1),E=Math.max(i,a,x),q=Math.min(i,a,x),oe=E-q;let le;oe===0?le=0:E===i?le=60*(((a-x)/oe%6+6)%6):E===a?le=60*((x-i)/oe+2):le=60*((i-a)/oe+4);const ye=E===0?0:oe/E,Pe=E;return[le,ye*100,Pe*100]}function zi(n,e,t){const i=Ti(n,360),a=$e(e/100,0,1),x=$e(t/100,0,1),E=x*a,q=E*(1-Math.abs(i/60%2-1)),oe=x-E;let le,ye,Pe;return i>=0&&i<60?[le,ye,Pe]=[E,q,0]:i>=60&&i<120?[le,ye,Pe]=[q,E,0]:i>=120&&i<180?[le,ye,Pe]=[0,E,q]:i>=180&&i<240?[le,ye,Pe]=[0,q,E]:i>=240&&i<300?[le,ye,Pe]=[q,0,E]:[le,ye,Pe]=[E,0,q],[(le+oe)*255,(ye+oe)*255,(Pe+oe)*255]}function no(n,e,t){const i=t+e*(100-Math.abs(2*t-100))/200;return[n,i!==0?e*(100-Math.abs(2*t-100))/i:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function io(n,e,t){const i=100-Math.abs(t*(200-e)/100-100);return[n,i!==0?e*t/i:0,t*(200-e)/(2*100)]}function kt(n){return[n[0],n[1],n[2]]}function Vi(n,e){return[n[0],n[1],n[2],e]}const so={hsl:{hsl:(n,e,t)=>[n,e,t],hsv:no,rgb:eo},hsv:{hsl:io,hsv:(n,e,t)=>[n,e,t],rgb:zi},rgb:{hsl:Jr,hsv:to,rgb:(n,e,t)=>[n,e,t]}};function bn(n,e){return[e==="float"?1:n==="rgb"?255:360,e==="float"?1:n==="rgb"?255:100,e==="float"?1:n==="rgb"?255:100]}function ro(n,e){return n===e?e:Ti(n,e)}function oo(n,e,t){var i;const a=bn(e,t);return[e==="rgb"?$e(n[0],0,a[0]):ro(n[0],a[0]),$e(n[1],0,a[1]),$e(n[2],0,a[2]),$e((i=n[3])!==null&&i!==void 0?i:1,0,1)]}function Fi(n,e,t,i){const a=bn(e,t),x=bn(e,i);return n.map((E,q)=>E/a[q]*x[q])}function ao(n,e,t){const i=Fi(n,e.mode,e.type,"int"),a=so[e.mode][t.mode](...i);return Fi(a,t.mode,"int",t.type)}function wn(n,e){return typeof n!="object"||O(n)?!1:e in n&&typeof n[e]=="number"}class me{static black(e="int"){return new me([0,0,0],"rgb",e)}static fromObject(e,t="int"){const i="a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b];return new me(i,"rgb",t)}static toRgbaObject(e,t="int"){return e.toRgbaObject(t)}static isRgbColorObject(e){return wn(e,"r")&&wn(e,"g")&&wn(e,"b")}static isRgbaColorObject(e){return this.isRgbColorObject(e)&&wn(e,"a")}static isColorObject(e){return this.isRgbColorObject(e)}static equals(e,t){if(e.mode!==t.mode)return!1;const i=e.comps_,a=t.comps_;for(let x=0;x<i.length;x++)if(i[x]!==a[x])return!1;return!0}constructor(e,t,i="int"){this.mode=t,this.type=i,this.comps_=oo(e,t,i)}getComponents(e,t="int"){return Vi(ao(kt(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:t}),this.comps_[3])}toRgbaObject(e="int"){const t=this.getComponents("rgb",e);return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const vt=T("colp");class lo{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(vt()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("div");i.classList.add(vt("hsv"));const a=e.createElement("div");a.classList.add(vt("sv")),this.svPaletteView_=t.svPaletteView,a.appendChild(this.svPaletteView_.element),i.appendChild(a);const x=e.createElement("div");x.classList.add(vt("h")),this.hPaletteView_=t.hPaletteView,x.appendChild(this.hPaletteView_.element),i.appendChild(x),this.element.appendChild(i);const E=e.createElement("div");if(E.classList.add(vt("rgb")),this.textView_=t.textView,E.appendChild(this.textView_.element),this.element.appendChild(E),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const q=e.createElement("div");q.classList.add(vt("a"));const oe=e.createElement("div");oe.classList.add(vt("ap")),oe.appendChild(this.alphaViews_.palette.element),q.appendChild(oe);const le=e.createElement("div");le.classList.add(vt("at")),le.appendChild(this.alphaViews_.text.element),q.appendChild(le),this.element.appendChild(q)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function uo(n){return n==="int"?"int":n==="float"?"float":void 0}function Fn(n){const e=de;return xe(n,{alpha:e.optional.boolean,color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(uo)}),expanded:e.optional.boolean,picker:e.optional.custom(Oi)})}function Bt(n){return n?.1:1}function It(n){var e;return(e=n.color)===null||e===void 0?void 0:e.type}function co(n,e){return n.alpha===e.alpha&&n.mode===e.mode&&n.notation===e.notation&&n.type===e.type}function ot(n,e){const t=n.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(n),e)}const po={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function Ni(n){const e=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(n);const t=parseFloat(e[1]),i=e[2];return po[i](t)}function Wi(n){const e=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[ot(e[1],255),ot(e[2],255),ot(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function qi(n){return e=>{const t=Wi(e);return t?new me(t,"rgb",n):null}}function Zi(n){const e=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[ot(e[1],255),ot(e[2],255),ot(e[3],255),ot(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function $i(n){return e=>{const t=Zi(e);return t?new me(t,"rgb",n):null}}function ji(n){const e=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Ni(e[1]),ot(e[2],100),ot(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Hi(n){return e=>{const t=ji(e);return t?new me(t,"hsl",n):null}}function Yi(n){const e=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Ni(e[1]),ot(e[2],100),ot(e[3],100),ot(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Ki(n){return e=>{const t=Yi(e);return t?new me(t,"hsl",n):null}}function Xi(n){const e=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function ho(n){const e=Xi(n);return e?new me(e,"rgb","int"):null}function Qi(n){const e=n.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),Me(parseInt(e[4]+e[4],16),0,255,0,1)];const t=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),Me(parseInt(t[4],16),0,255,0,1)]:null}function fo(n){const e=Qi(n);return e?new me(e,"rgb","int"):null}function Ji(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function es(n){return e=>{const t=Ji(e);return t?new me(t,"rgb",n):null}}function ts(n){const e=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function ns(n){return e=>{const t=ts(e);return t?new me(t,"rgb",n):null}}const _o=[{parser:Xi,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Qi,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Wi,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Zi,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:ji,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Yi,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Ji,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:ts,result:{alpha:!0,mode:"rgb",notation:"object"}}];function mo(n){return _o.reduce((e,{parser:t,result:i})=>e||(t(n)?i:null),null)}function Nn(n,e="int"){const t=mo(n);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}const is={int:[ho,fo,qi("int"),$i("int"),Hi("int"),Ki("int"),es("int"),ns("int")],float:[qi("float"),$i("float"),Hi("float"),Ki("float"),es("float"),ns("float")]};function go(n){const e=is[n];return t=>{if(typeof t!="string")return me.black(n);const i=e.reduce((a,x)=>a||x(t),null);return i??me.black(n)}}function Wn(n){const e=is[n];return t=>e.reduce((i,a)=>i||a(t),null)}function ss(n){const e=$e(Math.floor(n),0,255).toString(16);return e.length===1?`0${e}`:e}function rs(n,e="#"){const t=kt(n.getComponents("rgb")).map(ss).join("");return`${e}${t}`}function qn(n,e="#"){const t=n.getComponents("rgb"),i=[t[0],t[1],t[2],t[3]*255].map(ss).join("");return`${e}${i}`}function os(n,e){const t=Je(e==="float"?2:0);return`rgb(${kt(n.getComponents("rgb",e)).map(a=>t(a)).join(", ")})`}function vo(n){return e=>os(e,n)}function xn(n,e){const t=Je(2),i=Je(e==="float"?2:0);return`rgba(${n.getComponents("rgb",e).map((x,E)=>(E===3?t:i)(x)).join(", ")})`}function bo(n){return e=>xn(e,n)}function wo(n){const e=[Je(0),_n,_n];return`hsl(${kt(n.getComponents("hsl")).map((i,a)=>e[a](i)).join(", ")})`}function xo(n){const e=[Je(0),_n,_n,Je(2)];return`hsla(${n.getComponents("hsl").map((i,a)=>e[a](i)).join(", ")})`}function as(n,e){const t=Je(e==="float"?2:0),i=["r","g","b"];return`{${kt(n.getComponents("rgb",e)).map((x,E)=>`${i[E]}: ${t(x)}`).join(", ")}}`}function yo(n){return e=>as(e,n)}function ls(n,e){const t=Je(2),i=Je(e==="float"?2:0),a=["r","g","b","a"];return`{${n.getComponents("rgb",e).map((E,q)=>{const oe=q===3?t:i;return`${a[q]}: ${oe(E)}`}).join(", ")}}`}function Po(n){return e=>ls(e,n)}const So=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:rs},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:qn},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:wo},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:xo},...["int","float"].reduce((n,e)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"func",type:e},stringifier:vo(e)},{format:{alpha:!0,mode:"rgb",notation:"func",type:e},stringifier:bo(e)},{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:yo(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Po(e)}],[])];function Zn(n){return So.reduce((e,t)=>e||(co(t.format,n)?t.stringifier:null),null)}const rn=T("apl");class Eo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(rn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const i=e.createElement("div");i.classList.add(rn("b")),this.element.appendChild(i);const a=e.createElement("div");a.classList.add(rn("c")),i.appendChild(a),this.colorElem_=a;const x=e.createElement("div");x.classList.add(rn("m")),this.element.appendChild(x),this.markerElem_=x;const E=e.createElement("div");E.classList.add(rn("p")),this.markerElem_.appendChild(E),this.previewElem_=E,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),i=new me([t[0],t[1],t[2],0],"rgb"),a=new me([t[0],t[1],t[2],255],"rgb"),x=["to right",xn(i),xn(a)];this.colorElem_.style.background=`linear-gradient(${x.join(",")})`,this.previewElem_.style.backgroundColor=xn(e);const E=Me(t[3],0,1,0,100);this.markerElem_.style.left=`${E}%`}onValueChange_(){this.update_()}}class Co{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Eo(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Et(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const i=e.point.x/e.bounds.width,a=this.value.rawValue,[x,E,q]=a.getComponents("hsv");this.value.setRawValue(new me([x,E,q,i],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=it(Bt(!0),pt(e));if(t===0)return;const i=this.value.rawValue,[a,x,E,q]=i.getComponents("hsv");this.value.setRawValue(new me([a,x,E,q+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){it(Bt(!0),pt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Nt=T("coltxt");function ko(n){const e=n.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return e.appendChild(t.reduce((i,a)=>{const x=n.createElement("option");return x.textContent=a.text,x.value=a.value,i.appendChild(x),i},n.createDocumentFragment())),e}class Bo{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Nt()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("div");i.classList.add(Nt("m")),this.modeElem_=ko(e),this.modeElem_.classList.add(Nt("ms")),i.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const a=e.createElement("div");a.classList.add(Nt("mm")),a.appendChild(g(e,"dropdown")),i.appendChild(a),this.element.appendChild(i);const x=e.createElement("div");x.classList.add(Nt("w")),this.element.appendChild(x),this.textsElem_=x,this.textViews_=t.textViews,this.applyTextViews_(),ue(t.colorMode,E=>{this.modeElem_.value=E})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(e){this.textViews_=e,this.applyTextViews_()}applyTextViews_(){A(this.textsElem_);const e=this.element.ownerDocument;this.textViews_.forEach(t=>{const i=e.createElement("div");i.classList.add(Nt("c")),i.appendChild(t.element),this.textsElem_.appendChild(i)})}}function Io(n){return Je(n==="float"?2:0)}function Mo(n,e,t){const i=bn(n,e)[t];return new zt({min:0,max:i})}function $n(n,e,t){return new nn(n,{arrayPosition:t===0?"fst":t===3-1?"lst":"mid",baseStep:Bt(!1),parser:e.parser,props:K.fromObject({draggingScale:e.colorType==="float"?.01:1,formatter:Io(e.colorType)}),value:se(0,{constraint:Mo(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}class Go{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.parser_=t.parser,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=se(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new Bo(e,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},i=[$n(e,t,0),$n(e,t,1),$n(e,t,2)];return i.forEach((a,x)=>{en({primary:this.value,secondary:a.value,forward:E=>E.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[x],backward:(E,q)=>{const oe=this.colorMode.rawValue,le=E.rawValue.getComponents(oe,this.colorType_);return le[x]=q.rawValue,new me(Vi(kt(le),le[3]),oe,this.colorType_)}})}),i}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const jn=T("hpl");class Do{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(jn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const i=e.createElement("div");i.classList.add(jn("c")),this.element.appendChild(i);const a=e.createElement("div");a.classList.add(jn("m")),this.element.appendChild(a),this.markerElem_=a,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=os(new me([t,100,100],"hsv"));const i=Me(t,0,360,0,100);this.markerElem_.style.left=`${i}%`}onValueChange_(){this.update_()}}class Uo{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Do(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Et(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const i=Me($e(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),a=this.value.rawValue,[,x,E,q]=a.getComponents("hsv");this.value.setRawValue(new me([i,x,E,q],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=it(Bt(!1),pt(e));if(t===0)return;const i=this.value.rawValue,[a,x,E,q]=i.getComponents("hsv");this.value.setRawValue(new me([a+t,x,E,q],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){it(Bt(!1),pt(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Hn=T("svp"),us=64;class Ro{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Hn()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const i=e.createElement("canvas");i.height=us,i.width=us,i.classList.add(Hn("c")),this.element.appendChild(i),this.canvasElement=i;const a=e.createElement("div");a.classList.add(Hn("m")),this.element.appendChild(a),this.markerElem_=a,this.update_()}update_(){const e=h(this.canvasElement);if(!e)return;const i=this.value.rawValue.getComponents("hsv"),a=this.canvasElement.width,x=this.canvasElement.height,E=e.getImageData(0,0,a,x),q=E.data;for(let ye=0;ye<x;ye++)for(let Pe=0;Pe<a;Pe++){const Mt=Me(Pe,0,a,0,100),an=Me(ye,0,x,100,0),ln=zi(i[0],Mt,an),yn=(ye*a+Pe)*4;q[yn]=ln[0],q[yn+1]=ln[1],q[yn+2]=ln[2],q[yn+3]=255}e.putImageData(E,0,0);const oe=Me(i[1],0,100,0,100);this.markerElem_.style.left=`${oe}%`;const le=Me(i[2],0,100,100,0);this.markerElem_.style.top=`${le}%`}onValueChange_(){this.update_()}}class Ao{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new Ro(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Et(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const i=Me(e.point.x,0,e.bounds.width,0,100),a=Me(e.point.y,0,e.bounds.height,100,0),[x,,,E]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new me([x,i,a,E],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){Ri(e.key)&&e.preventDefault();const[t,i,a,x]=this.value.rawValue.getComponents("hsv"),E=Bt(!1),q=it(E,pt(e)),oe=it(E,tn(e));q===0&&oe===0||this.value.setRawValue(new me([t,i+q,a+oe,x],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=Bt(!1),i=it(t,pt(e)),a=it(t,tn(e));i===0&&a===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class To{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new Uo(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Ao(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new Co(e,{value:this.value,viewProps:this.viewProps}),text:new nn(e,{parser:dt,baseStep:.1,props:K.fromObject({draggingScale:.01,formatter:Je(2)}),value:se(0,{constraint:new zt({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&en({primary:this.value,secondary:this.alphaIcs_.text.value,forward:i=>i.rawValue.getComponents()[3],backward:(i,a)=>{const x=i.rawValue.getComponents();return x[3]=a.rawValue,new me(x,i.rawValue.mode)}}),this.textC_=new Go(e,{colorType:t.colorType,parser:dt,value:this.value,viewProps:this.viewProps}),this.view=new lo(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Yn=T("colsw");class Oo{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Yn()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("div");i.classList.add(Yn("sw")),this.element.appendChild(i),this.swatchElem_=i;const a=e.createElement("button");a.classList.add(Yn("b")),t.viewProps.bindDisabled(a),this.element.appendChild(a),this.buttonElement=a,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=qn(e)}onValueChange_(){this.update_()}}class Lo{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Oo(e,{value:this.value,viewProps:this.viewProps})}}class Kn{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Ie.create(t.expanded),this.swatchC_=new Lo(e,{value:this.value,viewProps:this.viewProps});const i=this.swatchC_.view.buttonElement;i.addEventListener("blur",this.onButtonBlur_),i.addEventListener("click",this.onButtonClick_),this.textC_=new fn(e,{parser:t.parser,props:K.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Qr(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new Ei(e,{viewProps:this.viewProps}):null;const a=new To(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});a.view.allFocusableElements.forEach(x=>{x.addEventListener("blur",this.onPopupChildBlur_),x.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=a,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(a.view.element),en({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:x=>x.rawValue,backward:(x,E)=>E.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Le(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,i=e.relatedTarget;(!i||!t.contains(i))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,i=$(e);i&&t.contains(i)||i&&i===this.swatchC_.view.buttonElement&&!l(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function zo(n,e){return me.isColorObject(n)?me.fromObject(n,e):me.black(e)}function Vo(n){return kt(n.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function Fo(n){return n.getComponents("rgb").reduce((e,t,i)=>{const a=Math.floor(i===3?t*255:t)&255;return e<<8|a},0)>>>0}function No(n){return new me([n>>16&255,n>>8&255,n&255],"rgb")}function Wo(n){return new me([n>>24&255,n>>16&255,n>>8&255,Me(n&255,0,255,0,1)],"rgb")}function qo(n){return typeof n!="number"?me.black():No(n)}function Zo(n){return typeof n!="number"?me.black():Wo(n)}function $o(n){const e=Zn(n);return e?(t,i)=>{sn(t,e(i))}:null}function jo(n){const e=n?Fo:Vo;return(t,i)=>{sn(t,e(i))}}function Ho(n,e,t){const i=e.toRgbaObject(t);n.writeProperty("r",i.r),n.writeProperty("g",i.g),n.writeProperty("b",i.b),n.writeProperty("a",i.a)}function Yo(n,e,t){const i=e.toRgbaObject(t);n.writeProperty("r",i.r),n.writeProperty("g",i.g),n.writeProperty("b",i.b)}function Ko(n,e){return(t,i)=>{n?Ho(t,i,e):Yo(t,i,e)}}function Xn(n){var e;return!!(n!=null&&n.alpha||!((e=n==null?void 0:n.color)===null||e===void 0)&&e.alpha)}function Xo(n){return n?e=>qn(e,"0x"):e=>rs(e,"0x")}function Qo(n){return"color"in n||"view"in n&&n.view==="color"}const Jo={id:"input-color-number",type:"input",accept:(n,e)=>{if(typeof n!="number"||!Qo(e))return null;const t=Fn(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>Xn(n.params)?Zo:qo,equals:me.equals,writer:n=>jo(Xn(n.params))},controller:n=>{const e=Xn(n.params),t="expanded"in n.params?n.params.expanded:void 0,i="picker"in n.params?n.params.picker:void 0;return new Kn(n.document,{colorType:"int",expanded:t??!1,formatter:Xo(e),parser:Wn("int"),pickerLayout:i??"popup",supportsAlpha:e,value:n.value,viewProps:n.viewProps})}};function ea(n){return me.isRgbaColorObject(n)}function ta(n){return e=>zo(e,n)}function na(n,e){return t=>n?ls(t,e):as(t,e)}const ia={id:"input-color-object",type:"input",accept:(n,e)=>{if(!me.isColorObject(n))return null;const t=Fn(e);return t?{initialValue:n,params:t}:null},binding:{reader:n=>ta(It(n.params)),equals:me.equals,writer:n=>Ko(ea(n.initialValue),It(n.params))},controller:n=>{var e;const t=me.isRgbaColorObject(n.initialValue),i="expanded"in n.params?n.params.expanded:void 0,a="picker"in n.params?n.params.picker:void 0,x=(e=It(n.params))!==null&&e!==void 0?e:"int";return new Kn(n.document,{colorType:x,expanded:i??!1,formatter:na(t,x),parser:Wn(x),pickerLayout:a??"popup",supportsAlpha:t,value:n.value,viewProps:n.viewProps})}},sa={id:"input-color-string",type:"input",accept:(n,e)=>{if(typeof n!="string"||"view"in e&&e.view==="text")return null;const t=Nn(n,It(e));if(!t||!Zn(t))return null;const a=Fn(e);return a?{initialValue:n,params:a}:null},binding:{reader:n=>{var e;return go((e=It(n.params))!==null&&e!==void 0?e:"int")},equals:me.equals,writer:n=>{const e=Nn(n.initialValue,It(n.params));if(!e)throw N.shouldNeverHappen();const t=$o(e);if(!t)throw N.notBindable();return t}},controller:n=>{const e=Nn(n.initialValue,It(n.params));if(!e)throw N.shouldNeverHappen();const t=Zn(e);if(!t)throw N.shouldNeverHappen();const i="expanded"in n.params?n.params.expanded:void 0,a="picker"in n.params?n.params.picker:void 0;return new Kn(n.document,{colorType:e.type,expanded:i??!1,formatter:t,parser:Wn(e.type),pickerLayout:a??"popup",supportsAlpha:e.alpha,value:n.value,viewProps:n.viewProps})}};class bt{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((i,a)=>{var x,E;return(E=(x=this.components[a])===null||x===void 0?void 0:x.constrain(i))!==null&&E!==void 0?E:i});return this.asm_.fromComponents(t)}}const cs=T("pndtxt");class ra{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(cs()),this.textViews.forEach(i=>{const a=e.createElement("div");a.classList.add(cs("a")),a.appendChild(i.element),this.element.appendChild(a)})}}function oa(n,e,t){return new nn(n,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",baseStep:e.axes[t].baseStep,parser:e.parser,props:e.axes[t].textProps,value:se(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class Qn{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((i,a)=>oa(e,t,a)),this.acs_.forEach((i,a)=>{en({primary:this.value,secondary:i.value,forward:x=>t.assembly.toComponents(x.rawValue)[a],backward:(x,E)=>{const q=t.assembly.toComponents(x.rawValue);return q[a]=E.rawValue,t.assembly.fromComponents(q)}})}),this.view=new ra(e,{textViews:this.acs_.map(i=>i.view)})}}function ds(n,e){return"step"in n&&!O(n.step)?new hn(n.step,e):null}function ps(n){return!O(n.max)&&!O(n.min)?new zt({max:n.max,min:n.min}):!O(n.max)||!O(n.min)?new Pi({max:n.max,min:n.min}):null}function aa(n){const e=ct(n,zt);if(e)return[e.values.get("min"),e.values.get("max")];const t=ct(n,Pi);return t?[t.minValue,t.maxValue]:[void 0,void 0]}function la(n,e){const t=[],i=ds(n,e);i&&t.push(i);const a=ps(n);a&&t.push(a);const x=Vn(n.options);return x&&t.push(x),new Yt(t)}const ua={id:"input-number",type:"input",accept:(n,e)=>{if(typeof n!="number")return null;const t=de,i=xe(e,{format:t.optional.function,max:t.optional.number,min:t.optional.number,options:t.optional.custom(mn),step:t.optional.number});return i?{initialValue:n,params:i}:null},binding:{reader:n=>Di,constraint:n=>la(n.params,n.initialValue),writer:n=>sn},controller:n=>{var e;const t=n.value,i=n.constraint,a=i&&ct(i,Kt);if(a)return new Xt(n.document,{props:new K({options:a.values.value("options")}),value:t,viewProps:n.viewProps});const x=(e="format"in n.params?n.params.format:void 0)!==null&&e!==void 0?e:Je(gn(i,t.rawValue)),E=i&&ct(i,zt);return E?new zn(n.document,{baseStep:Vt(i),parser:dt,sliderProps:new K({maxValue:E.values.value("max"),minValue:E.values.value("min")}),textProps:K.fromObject({draggingScale:Ft(i,t.rawValue),formatter:x}),value:t,viewProps:n.viewProps}):new nn(n.document,{baseStep:Vt(i),parser:dt,props:K.fromObject({draggingScale:Ft(i,t.rawValue),formatter:x}),value:t,viewProps:n.viewProps})}};class wt{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(O(e))return!1;const t=e.x,i=e.y;return!(typeof t!="number"||typeof i!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const hs={toComponents:n=>n.getComponents(),fromComponents:n=>new wt(...n)},Wt=T("p2d");class ca{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Wt()),t.viewProps.bindClassModifiers(this.element),ue(t.expanded,be(this.element,Wt(void 0,"expanded")));const i=e.createElement("div");i.classList.add(Wt("h")),this.element.appendChild(i);const a=e.createElement("button");a.classList.add(Wt("b")),a.appendChild(g(e,"p2dpad")),t.viewProps.bindDisabled(a),i.appendChild(a),this.buttonElement=a;const x=e.createElement("div");if(x.classList.add(Wt("t")),i.appendChild(x),this.textElement=x,t.pickerLayout==="inline"){const E=e.createElement("div");E.classList.add(Wt("p")),this.element.appendChild(E),this.pickerElement=E}else this.pickerElement=null}}const xt=T("p2dp");class da{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=t.invertsY,this.maxValue_=t.maxValue,this.element=e.createElement("div"),this.element.classList.add(xt()),t.layout==="popup"&&this.element.classList.add(xt(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("div");i.classList.add(xt("p")),t.viewProps.bindTabIndex(i),this.element.appendChild(i),this.padElement=i;const a=e.createElementNS(S,"svg");a.classList.add(xt("g")),this.padElement.appendChild(a),this.svgElem_=a;const x=e.createElementNS(S,"line");x.classList.add(xt("ax")),x.setAttributeNS(null,"x1","0"),x.setAttributeNS(null,"y1","50%"),x.setAttributeNS(null,"x2","100%"),x.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(x);const E=e.createElementNS(S,"line");E.classList.add(xt("ax")),E.setAttributeNS(null,"x1","50%"),E.setAttributeNS(null,"y1","0"),E.setAttributeNS(null,"x2","50%"),E.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(E);const q=e.createElementNS(S,"line");q.classList.add(xt("l")),q.setAttributeNS(null,"x1","50%"),q.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(q),this.lineElem_=q;const oe=e.createElement("div");oe.classList.add(xt("m")),this.padElement.appendChild(oe),this.markerElem_=oe,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),i=this.maxValue_,a=Me(e,-i,+i,0,100),x=Me(t,-i,+i,0,100),E=this.invertsY_?100-x:x;this.lineElem_.setAttributeNS(null,"x2",`${a}%`),this.lineElem_.setAttributeNS(null,"y2",`${E}%`),this.markerElem_.style.left=`${a}%`,this.markerElem_.style.top=`${E}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function fs(n,e,t){return[it(e[0],pt(n)),it(e[1],tn(n))*(t?1:-1)]}class pa{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.baseSteps_=t.baseSteps,this.maxValue_=t.maxValue,this.invertsY_=t.invertsY,this.view=new da(e,{invertsY:this.invertsY_,layout:t.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Et(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const i=this.maxValue_,a=Me(e.point.x,0,e.bounds.width,-i,+i),x=Me(this.invertsY_?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-i,+i);this.value.setRawValue(new wt(a,x),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){Ri(e.key)&&e.preventDefault();const[t,i]=fs(e,this.baseSteps_,this.invertsY_);t===0&&i===0||this.value.setRawValue(new wt(this.value.rawValue.x+t,this.value.rawValue.y+i),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,i]=fs(e,this.baseSteps_,this.invertsY_);t===0&&i===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ha{constructor(e,t){var i,a;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Ie.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new Ei(e,{viewProps:this.viewProps}):null;const x=new pa(e,{baseSteps:[t.axes[0].baseStep,t.axes[1].baseStep],invertsY:t.invertsY,layout:t.pickerLayout,maxValue:t.maxValue,value:this.value,viewProps:this.viewProps});x.view.allFocusableElements.forEach(E=>{E.addEventListener("blur",this.onPopupChildBlur_),E.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=x,this.textC_=new Qn(e,{assembly:hs,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new ca(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(i=this.view.buttonElement)===null||i===void 0||i.addEventListener("blur",this.onPadButtonBlur_),(a=this.view.buttonElement)===null||a===void 0||a.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),en({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:E=>E.rawValue,backward:(E,q)=>q.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Le(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,i=e.relatedTarget;(!i||!t.contains(i))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,i=$(e);i&&t.contains(i)||i&&i===this.view.buttonElement&&!l(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}class qt{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(O(e))return!1;const t=e.x,i=e.y,a=e.z;return!(typeof t!="number"||typeof i!="number"||typeof a!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const _s={toComponents:n=>n.getComponents(),fromComponents:n=>new qt(...n)};function fa(n){return qt.isObject(n)?new qt(n.x,n.y,n.z):new qt}function _a(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z)}function ma(n,e){return new bt({assembly:_s,components:[ht("x"in n?n.x:void 0,e.x),ht("y"in n?n.y:void 0,e.y),ht("z"in n?n.z:void 0,e.z)]})}function Jn(n,e){return{baseStep:Vt(e),constraint:e,textProps:K.fromObject({draggingScale:Ft(e,n),formatter:Je(gn(e,n))})}}const ga={id:"input-point3d",type:"input",accept:(n,e)=>{if(!qt.isObject(n))return null;const t=de,i=xe(e,{x:t.optional.custom(gt),y:t.optional.custom(gt),z:t.optional.custom(gt)});return i?{initialValue:n,params:i}:null},binding:{reader:n=>fa,constraint:n=>ma(n.params,n.initialValue),equals:qt.equals,writer:n=>_a},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof bt))throw N.shouldNeverHappen();return new Qn(n.document,{assembly:_s,axes:[Jn(e.rawValue.x,t.components[0]),Jn(e.rawValue.y,t.components[1]),Jn(e.rawValue.z,t.components[2])],parser:dt,value:e,viewProps:n.viewProps})}};class Zt{constructor(e=0,t=0,i=0,a=0){this.x=e,this.y=t,this.z=i,this.w=a}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(O(e))return!1;const t=e.x,i=e.y,a=e.z,x=e.w;return!(typeof t!="number"||typeof i!="number"||typeof a!="number"||typeof x!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const ms={toComponents:n=>n.getComponents(),fromComponents:n=>new Zt(...n)};function va(n){return Zt.isObject(n)?new Zt(n.x,n.y,n.z,n.w):new Zt}function ba(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y),n.writeProperty("z",e.z),n.writeProperty("w",e.w)}function wa(n,e){return new bt({assembly:ms,components:[ht("x"in n?n.x:void 0,e.x),ht("y"in n?n.y:void 0,e.y),ht("z"in n?n.z:void 0,e.z),ht("w"in n?n.w:void 0,e.w)]})}function xa(n,e){return{baseStep:Vt(e),constraint:e,textProps:K.fromObject({draggingScale:Ft(e,n),formatter:Je(gn(e,n))})}}const ya={id:"input-point4d",type:"input",accept:(n,e)=>{if(!Zt.isObject(n))return null;const t=de,i=xe(e,{x:t.optional.custom(gt),y:t.optional.custom(gt),z:t.optional.custom(gt),w:t.optional.custom(gt)});return i?{initialValue:n,params:i}:null},binding:{reader:n=>va,constraint:n=>wa(n.params,n.initialValue),equals:Zt.equals,writer:n=>ba},controller:n=>{const e=n.value,t=n.constraint;if(!(t instanceof bt))throw N.shouldNeverHappen();return new Qn(n.document,{assembly:ms,axes:e.rawValue.getComponents().map((i,a)=>xa(i,t.components[a])),parser:dt,value:e,viewProps:n.viewProps})}};function Pa(n){const e=[],t=Vn(n.options);return t&&e.push(t),new Yt(e)}const Sa={id:"input-string",type:"input",accept:(n,e)=>{if(typeof n!="string")return null;const i=xe(e,{options:de.optional.custom(mn)});return i?{initialValue:n,params:i}:null},binding:{reader:n=>Ui,constraint:n=>Pa(n.params),writer:n=>sn},controller:n=>{const e=n.document,t=n.value,i=n.constraint,a=i&&ct(i,Kt);return a?new Xt(e,{props:new K({options:a.values.value("options")}),value:t,viewProps:n.viewProps}):new fn(e,{parser:x=>x,props:K.fromObject({formatter:An}),value:t,viewProps:n.viewProps})}},on={monitor:{defaultInterval:200,defaultLineCount:3}},gs=T("mll");class Ea{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(gs()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("textarea");i.classList.add(gs("i")),i.style.height=`calc(var(--bld-us) * ${t.lineCount})`,i.readOnly=!0,t.viewProps.bindDisabled(i),this.element.appendChild(i),this.textareaElem_=i,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,i=[];this.value.rawValue.forEach(a=>{a!==void 0&&i.push(this.formatter_(a))}),e.textContent=i.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class ei{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Ea(e,{formatter:t.formatter,lineCount:t.lineCount,value:this.value,viewProps:this.viewProps})}}const vs=T("sgl");class Ca{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(vs()),t.viewProps.bindClassModifiers(this.element);const i=e.createElement("input");i.classList.add(vs("i")),i.readOnly=!0,i.type="text",t.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class ti{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new Ca(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const ka={id:"monitor-bool",type:"monitor",accept:(n,e)=>{if(typeof n!="boolean")return null;const i=xe(e,{lineCount:de.optional.number});return i?{initialValue:n,params:i}:null},binding:{reader:n=>ki},controller:n=>{var e;return n.value.rawValue.length===1?new ti(n.document,{formatter:Bi,value:n.value,viewProps:n.viewProps}):new ei(n.document,{formatter:Bi,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:on.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}},yt=T("grl");class Ba{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(yt()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const i=e.createElementNS(S,"svg");i.classList.add(yt("g")),i.style.height=`calc(var(--bld-us) * ${t.lineCount})`,this.element.appendChild(i),this.svgElem_=i;const a=e.createElementNS(S,"polyline");this.svgElem_.appendChild(a),this.lineElem_=a;const x=e.createElement("div");x.classList.add(yt("t"),T("tt")()),this.element.appendChild(x),this.tooltipElem_=x,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const e=this.svgElem_.getBoundingClientRect(),t=this.value.rawValue.length-1,i=this.props_.get("minValue"),a=this.props_.get("maxValue"),x=[];this.value.rawValue.forEach((ye,Pe)=>{if(ye===void 0)return;const Mt=Me(Pe,0,t,0,e.width),an=Me(ye,i,a,e.height,0);x.push([Mt,an].join(","))}),this.lineElem_.setAttributeNS(null,"points",x.join(" "));const E=this.tooltipElem_,q=this.value.rawValue[this.cursor_.rawValue];if(q===void 0){E.classList.remove(yt("t","a"));return}const oe=Me(this.cursor_.rawValue,0,t,0,e.width),le=Me(q,i,a,e.height,0);E.style.left=`${oe}px`,E.style.top=`${le}px`,E.textContent=`${this.formatter_(q)}`,E.classList.contains(yt("t","a"))||(E.classList.add(yt("t","a"),yt("t","in")),s(E),E.classList.remove(yt("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Ia{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=se(-1),this.view=new Ba(e,{cursor:this.cursor_,formatter:t.formatter,lineCount:t.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!l(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const i=new Et(this.view.element);i.emitter.on("down",this.onGraphPointerDown_),i.emitter.on("move",this.onGraphPointerMove_),i.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const t=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Me(e.offsetX,0,t.width,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Me(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function ni(n){return"format"in n&&!O(n.format)?n.format:Je(2)}function Ma(n){var e;return n.value.rawValue.length===1?new ti(n.document,{formatter:ni(n.params),value:n.value,viewProps:n.viewProps}):new ei(n.document,{formatter:ni(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:on.monitor.defaultLineCount,value:n.value,viewProps:n.viewProps})}function Ga(n){var e,t,i;return new Ia(n.document,{formatter:ni(n.params),lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:on.monitor.defaultLineCount,props:K.fromObject({maxValue:(t="max"in n.params?n.params.max:null)!==null&&t!==void 0?t:100,minValue:(i="min"in n.params?n.params.min:null)!==null&&i!==void 0?i:0}),value:n.value,viewProps:n.viewProps})}function bs(n){return"view"in n&&n.view==="graph"}const Da={id:"monitor-number",type:"monitor",accept:(n,e)=>{if(typeof n!="number")return null;const t=de,i=xe(e,{format:t.optional.function,lineCount:t.optional.number,max:t.optional.number,min:t.optional.number,view:t.optional.string});return i?{initialValue:n,params:i}:null},binding:{defaultBufferSize:n=>bs(n)?64:1,reader:n=>Di},controller:n=>bs(n.params)?Ga(n):Ma(n)},Ua={id:"monitor-string",type:"monitor",accept:(n,e)=>{if(typeof n!="string")return null;const t=de,i=xe(e,{lineCount:t.optional.number,multiline:t.optional.boolean});return i?{initialValue:n,params:i}:null},binding:{reader:n=>Ui},controller:n=>{var e;const t=n.value;return t.rawValue.length>1||"multiline"in n.params&&n.params.multiline?new ei(n.document,{formatter:An,lineCount:(e=n.params.lineCount)!==null&&e!==void 0?e:on.monitor.defaultLineCount,value:t,viewProps:n.viewProps}):new ti(n.document,{formatter:An,value:t,viewProps:n.viewProps})}};function Ra(n,e){var t;const i=n.accept(e.target.read(),e.params);if(O(i))return null;const a=de,x={target:e.target,initialValue:i.initialValue,params:i.params},E=n.binding.reader(x),q=n.binding.constraint?n.binding.constraint(x):void 0,oe=se(E(i.initialValue),{constraint:q,equals:n.binding.equals}),le=new rr({reader:E,target:e.target,value:oe,writer:n.binding.writer(x)}),ye=a.optional.boolean(e.params.disabled).value,Pe=a.optional.boolean(e.params.hidden).value,Mt=n.controller({constraint:q,document:e.document,initialValue:i.initialValue,params:i.params,value:le.value,viewProps:p.create({disabled:ye,hidden:Pe})});return new ke(e.document,{binding:le,blade:he(),props:K.fromObject({label:"label"in e.params?(t=a.optional.string(e.params.label).value)!==null&&t!==void 0?t:null:e.target.key}),valueController:Mt})}function Aa(n,e){return e===0?new ir:new sr(n,e??on.monitor.defaultInterval)}function Ta(n,e){var t,i,a;const x=de,E=n.accept(e.target.read(),e.params);if(O(E))return null;const q={target:e.target,initialValue:E.initialValue,params:E.params},oe=n.binding.reader(q),le=(i=(t=x.optional.number(e.params.bufferSize).value)!==null&&t!==void 0?t:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(E.params))!==null&&i!==void 0?i:1,ye=x.optional.number(e.params.interval).value,Pe=new ur({reader:oe,target:e.target,ticker:Aa(e.document,ye),value:or(le)}),Mt=x.optional.boolean(e.params.disabled).value,an=x.optional.boolean(e.params.hidden).value,ln=n.controller({document:e.document,params:E.params,value:Pe.value,viewProps:p.create({disabled:Mt,hidden:an})});return new Re(e.document,{binding:Pe,blade:he(),props:K.fromObject({label:"label"in e.params?(a=x.optional.string(e.params.label).value)!==null&&a!==void 0?a:null:e.target.key}),valueController:ln})}class Oa{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e){e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput(e,t,i){const a=t.read();if(O(a))throw new N({context:{key:t.key},type:"nomatchingcontroller"});const x=this.pluginsMap_.inputs.reduce((E,q)=>E??Ra(q,{document:e,target:t,params:i}),null);if(x)return x;throw new N({context:{key:t.key},type:"nomatchingcontroller"})}createMonitor(e,t,i){const a=this.pluginsMap_.monitors.reduce((x,E)=>x??Ta(E,{document:e,params:i,target:t}),null);if(a)return a;throw new N({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const i=this.pluginsMap_.blades.reduce((a,x)=>a??nr(x,{document:e,params:t}),null);if(!i)throw new N({type:"nomatchingview",context:{params:t}});return i}createBladeApi(e){if(e instanceof ke)return new We(e);if(e instanceof Re)return new qe(e);if(e instanceof Ae)return new ut(e,this);const t=this.pluginsMap_.blades.reduce((i,a)=>i??a.api({controller:e,pool:this}),null);if(!t)throw N.shouldNeverHappen();return t}}function La(){const n=new Oa;return[qa,ga,ya,Sa,ua,sa,ia,Jo,Xr,ka,Ua,Da,re,Ys,Xs,xi].forEach(e=>{n.register(e)}),n}function za(n){return wt.isObject(n)?new wt(n.x,n.y):new wt}function Va(n,e){n.writeProperty("x",e.x),n.writeProperty("y",e.y)}function ht(n,e){if(!n)return;const t=[],i=ds(n,e);i&&t.push(i);const a=ps(n);return a&&t.push(a),new Yt(t)}function Fa(n,e){return new bt({assembly:hs,components:[ht("x"in n?n.x:void 0,e.x),ht("y"in n?n.y:void 0,e.y)]})}function ws(n,e){const[t,i]=n?aa(n):[];if(!O(t)||!O(i))return Math.max(Math.abs(t??0),Math.abs(i??0));const a=Vt(n);return Math.max(Math.abs(a)*10,Math.abs(e)*10)}function Na(n,e){const t=e instanceof bt?e.components[0]:void 0,i=e instanceof bt?e.components[1]:void 0,a=ws(t,n.x),x=ws(i,n.y);return Math.max(a,x)}function xs(n,e){return{baseStep:Vt(e),constraint:e,textProps:K.fromObject({draggingScale:Ft(e,n),formatter:Je(gn(e,n))})}}function Wa(n){if(!("y"in n))return!1;const e=n.y;return e&&"inverted"in e?!!e.inverted:!1}const qa={id:"input-point2d",type:"input",accept:(n,e)=>{if(!wt.isObject(n))return null;const t=de,i=xe(e,{expanded:t.optional.boolean,picker:t.optional.custom(Oi),x:t.optional.custom(gt),y:t.optional.object({inverted:t.optional.boolean,max:t.optional.number,min:t.optional.number,step:t.optional.number})});return i?{initialValue:n,params:i}:null},binding:{reader:n=>za,constraint:n=>Fa(n.params,n.initialValue),equals:wt.equals,writer:n=>Va},controller:n=>{const e=n.document,t=n.value,i=n.constraint;if(!(i instanceof bt))throw N.shouldNeverHappen();const a="expanded"in n.params?n.params.expanded:void 0,x="picker"in n.params?n.params.picker:void 0;return new ha(e,{axes:[xs(t.rawValue.x,i.components[0]),xs(t.rawValue.y,i.components[1])],expanded:a??!1,invertsY:Wa(n.params),maxValue:Na(t.rawValue,i),parser:dt,pickerLayout:x??"popup",value:t,viewProps:n.viewProps})}};class ys extends I{constructor(e){super(e),this.emitter_=new z,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new V(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get options(){return this.controller_.valueController.props.get("options")}set options(e){this.controller_.valueController.props.set("options",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const i=t.bind(this);return this.emitter_.on(e,a=>{i(a.event)}),this}}class Ps extends I{constructor(e){super(e),this.emitter_=new z,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new V(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(e){this.controller_.valueController.sliderController.props.set("maxValue",e)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(e){this.controller_.valueController.sliderController.props.set("minValue",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const i=t.bind(this);return this.emitter_.on(e,a=>{i(a.event)}),this}}class Ss extends I{constructor(e){super(e),this.emitter_=new z,this.controller_.valueController.value.emitter.on("change",t=>{this.emitter_.emit("change",{event:new V(this,t.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(e){this.controller_.props.set("label",e)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(e){this.controller_.valueController.props.set("formatter",e)}get value(){return this.controller_.valueController.value.rawValue}set value(e){this.controller_.valueController.value.rawValue=e}on(e,t){const i=t.bind(this);return this.emitter_.on(e,a=>{i(a.event)}),this}}const Za=function(){return{id:"list",type:"blade",accept(n){const e=de,t=xe(n,{options:e.required.custom(mn),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string});return t?{params:t}:null},controller(n){const e=new Kt(Li(n.params.options)),t=se(n.params.value,{constraint:e}),i=new Xt(n.document,{props:new K({options:e.values.value("options")}),value:t,viewProps:n.viewProps});return new Lt(n.document,{blade:n.blade,props:K.fromObject({label:n.params.label}),valueController:i})},api(n){return!(n.controller instanceof Lt)||!(n.controller.valueController instanceof Xt)?null:new ys(n.controller)}}}();function $a(n){return n.reduce((e,t)=>Object.assign(e,{[t.presetKey]:t.read()}),{})}function ja(n,e){n.forEach(t=>{const i=e[t.target.presetKey];i!==void 0&&t.writer(t.target,t.reader(i))})}class Ha extends _t{constructor(e,t){super(e,t)}get element(){return this.controller_.view.element}importPreset(e){const t=this.controller_.rackController.rack.find(ke).map(i=>i.binding);ja(t,e),this.refresh()}exportPreset(){const e=this.controller_.rackController.rack.find(ke).map(t=>t.binding.target);return $a(e)}refresh(){this.controller_.rackController.rack.find(ke).forEach(e=>{e.binding.read()}),this.controller_.rackController.rack.find(Re).forEach(e=>{e.binding.read()})}}class Ya extends Gn{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const Ka={id:"slider",type:"blade",accept(n){const e=de,t=xe(n,{max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number});return t?{params:t}:null},controller(n){var e,t;const i=(e=n.params.value)!==null&&e!==void 0?e:0,a=new zt({max:n.params.max,min:n.params.min}),x=new zn(n.document,{baseStep:1,parser:dt,sliderProps:new K({maxValue:a.values.value("max"),minValue:a.values.value("min")}),textProps:K.fromObject({draggingScale:Ft(void 0,i),formatter:(t=n.params.format)!==null&&t!==void 0?t:Vr}),value:se(i,{constraint:a}),viewProps:n.viewProps});return new Lt(n.document,{blade:n.blade,props:K.fromObject({label:n.params.label}),valueController:x})},api(n){return!(n.controller instanceof Lt)||!(n.controller.valueController instanceof zn)?null:new Ps(n.controller)}},Xa=function(){return{id:"text",type:"blade",accept(n){const e=de,t=xe(n,{parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string});return t?{params:t}:null},controller(n){var e;const t=new fn(n.document,{parser:n.params.parse,props:K.fromObject({formatter:(e=n.params.format)!==null&&e!==void 0?e:i=>String(i)}),value:se(n.params.value),viewProps:n.viewProps});return new Lt(n.document,{blade:n.blade,props:K.fromObject({label:n.params.label}),valueController:t})},api(n){return!(n.controller instanceof Lt)||!(n.controller.valueController instanceof fn)?null:new Ss(n.controller)}}}();function Qa(n){const e=n.createElement("div");return e.classList.add(T("dfw")()),n.body&&n.body.appendChild(e),e}function Es(n,e,t){if(n.querySelector(`style[data-tp-style=${e}]`))return;const i=n.createElement("style");i.dataset.tpStyle=e,i.textContent=t,n.head.appendChild(i)}class Ja extends Ha{constructor(e){var t,i;const a=e??{},x=(t=a.document)!==null&&t!==void 0?t:o(),E=La(),q=new Ya(x,{expanded:a.expanded,blade:he(),props:K.fromObject({title:a.title}),viewProps:p.create()});super(q,E),this.pool_=E,this.containerElem_=(i=a.container)!==null&&i!==void 0?i:Qa(x),this.containerElem_.appendChild(this.element),this.doc_=x,this.usesDefaultWrapper_=!a.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw N.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw N.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(i=>{this.pool_.register(i),this.embedPluginStyle_(i)})}embedPluginStyle_(e){e.css&&Es(this.document,`plugin-${e.id}`,e.css)}setUpDefaultPlugins_(){Es(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(e=>{this.embedPluginStyle_(e)}),this.registerPlugin({plugins:[Ka,Za,xi,Xa]})}}const el=new G("3.1.10");y.BladeApi=I,y.ButtonApi=X,y.FolderApi=_t,y.InputBindingApi=We,y.ListApi=ys,y.MonitorBindingApi=qe,y.Pane=Ja,y.SeparatorApi=hi,y.SliderApi=Ps,y.TabApi=vi,y.TabPageApi=gi,y.TextApi=Ss,y.TpChangeEvent=V,y.VERSION=el,Object.defineProperty(y,"__esModule",{value:!0})})})(ri,ri.exports);var Bl=ri.exports;const Zs=`enable f16;

struct GeneralInfo{
  keys_size : u32, dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32, // t0
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32, // t1
};

const WG_SIZE = 256u;

const KERNEL_SIZE:f32 = 0.3;

const PI: f32 = acos(-1.0);

const SH_C0: f16 = f16(sqrt(1.0 / (4.0 * PI)));

const SH_C1: f16 = f16(sqrt(3.0 / (4.0 * PI)));

const SH_C2: array<f16, 5> = array<f16, 5>(
    f16(sqrt(15.0 / (4.0 * PI))),              // Y2^-2
    f16(-sqrt(15.0 / (4.0 * PI))),             // Y2^-1
    f16(sqrt(5.0 / (16.0 * PI))),              // Y2^0
    f16(-sqrt(15.0 / (4.0 * PI))),             // Y2^1
    f16(sqrt(15.0 / (16.0 * PI)))              // Y2^2
);

const SH_C3: array<f16, 7> = array<f16, 7>(
    f16(-sqrt(35.0 / (32.0 * PI))),            // Y3^-3
    f16(sqrt(105.0 / (4.0 * PI))),             // Y3^-2
    f16(-sqrt(21.0 / (64.0 * PI))),            // Y3^-1
    f16(sqrt(7.0 / (16.0 * PI))),              // Y3^0
    f16(-sqrt(21.0 / (64.0 * PI))),            // Y3^1
    f16(sqrt(105.0 / (16.0 * PI))),            // Y3^2
    f16(-sqrt(35.0 / (32.0 * PI)))             // Y3^3
);

struct CameraUniforms {
    view: mat4x4<f32>,
    view_inv: mat4x4<f32>,
    proj: mat4x4<f32>,
    proj_inv: mat4x4<f32>,
    
    viewport: vec2<f32>,
    focal: vec2<f32>
};

struct SHSolver {
    dir_xy: vec2<f16>,
    dir_z_opacity: vec2<f16>,
    idx: u32,
};

// Updated compact RenderSettings layout (32 bytes total)
struct RenderSettings {
    canvas_size: vec2<u32>,
    max_sh_deg: u32,
    cur_sh_deg: u32,
    gaussian_scaling: f32,
    kernel_size: f32,
    mip_spatting: u32,
    walltime: f32,
};

struct SH_RGB {
    r: f16,
    g: f16,
    b: f16,
};

@group(0) @binding(0) var<uniform> camera: CameraUniforms;
@group(0) @binding(1) var<uniform> render_settings: RenderSettings;

@group(1) @binding(0) var<storage, read> sort_infos: GeneralInfo;
@group(1) @binding(1) var<storage, read> sh_coefs : array<SH_RGB>;
@group(1) @binding(2) var<storage, read> sh_solvers : array<SHSolver>;
@group(1) @binding(3) var<storage, read_write> colors : array<u32>;

/// reads the ith sh coef from the vertex buffer
fn sh_coef(idx: u32) -> vec3<f16> {
    let sh = sh_coefs[idx];
    return vec3<f16>(sh.r, sh.g, sh.b);
}

// spherical harmonics evaluation with Condon–Shortley phase
fn evaluate_sh(dir: vec3<f16>, v_idx: u32, max_sh_deg: u32, sh_deg: u32) -> vec3<f16> {
    // let num_coef = (max_sh_deg + 1u) * (max_sh_deg + 1u); // number of coefficients for the given degree
    let sh_base = (max_sh_deg + 1u) * (max_sh_deg + 1u) * v_idx; // no >>1, since no packing
    // if (sh_base + num_coef * 3u > arrayLength(&sh_coefs)) {
    //     // Out-of-bounds convention: return purple
    //     return vec3<f16>(1., 0., 1.);
    // }

    var result = SH_C0 * sh_coef(sh_base + 0u);

    if sh_deg > 0u {

        let x = dir.x;
        let y = dir.y;
        let z = dir.z;

        result += SH_C1 * ( -y * sh_coef(sh_base + 1u)
                            +z * sh_coef(sh_base + 2u)
                            -x * sh_coef(sh_base + 3u) );

        if sh_deg > 1u {

            let xx = x * x;
            let yy = y * y;
            let zz = z * z;
            let xy = x * y;
            let yz = y * z;
            let xz = x * z;

            result += SH_C2[0] * (xy * sh_coef(sh_base + 4u) + (xx - yy) * sh_coef(sh_base + 8u))
                    + SH_C2[1] * (yz * sh_coef(sh_base + 5u) + xz * sh_coef(sh_base + 7u))
                    + SH_C2[2] * (2.0 * zz - xx - yy) * sh_coef(sh_base + 6u);

            if sh_deg > 2u {
                result += SH_C3[0] * (y * (3.0 * xx - yy) * sh_coef(sh_base + 9u) + x * (xx - 3.0 * yy) * sh_coef(sh_base + 15u))
                        + SH_C3[1] * (xy * z * sh_coef(sh_base + 10u) + z * (xx - yy) * sh_coef(sh_base + 14u))
                        + SH_C3[2] * (y * (4.0 * zz - xx - yy) * sh_coef(sh_base + 11u) + x * (4.0 * zz - xx - yy) * sh_coef(sh_base + 13u))
                        + SH_C3[3] * z * (2.0 * zz - 3.0 * xx - 3.0 * yy) * sh_coef(sh_base + 12u);
            }
        }
    }

    return result + 0.5;
}

@compute @workgroup_size(WG_SIZE)
fn preprocess(@builtin(global_invocation_id) gid: vec3<u32>) {
    // Shade only active elements after culling
    if gid.x >= sort_infos.keys_size { return; }

    let store_idx = gid.x;
    let solver = sh_solvers[store_idx];
    let dir = vec3<f16>(solver.dir_xy, solver.dir_z_opacity.x);
    let opacity = solver.dir_z_opacity.y;
    let idx = solver.idx;

    // Evaluate SH: use current_sh_deg (reuse cur_sh_deg) and clamp to max_sh_deg to avoid out-of-bounds
    let rgb = evaluate_sh(dir, idx, render_settings.max_sh_deg, render_settings.cur_sh_deg);
    colors[store_idx] = pack4x8unorm(vec4<f32>(vec4<f16>(rgb, opacity)));
}
`,Il=`struct GeneralInfo{
  keys_size : u32, dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32, // t0
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32, // t1
};

const WG_SIZE = 256u;

const KERNEL_SIZE:f32 = 0.3;

const PI: f32 = acos(-1.0);

const SH_C0: f32 = sqrt(1.0 / (4.0 * PI));

const SH_C1: f32 = sqrt(3.0 / (4.0 * PI));

const SH_C2: array<f32, 5> = array<f32, 5>(
    sqrt(15.0 / (4.0 * PI)),              // Y2^-2
    -sqrt(15.0 / (4.0 * PI)),             // Y2^-1
    sqrt(5.0 / (16.0 * PI)),              // Y2^0
    -sqrt(15.0 / (4.0 * PI)),             // Y2^1
    sqrt(15.0 / (16.0 * PI))              // Y2^2
);

const SH_C3: array<f32, 7> = array<f32, 7>(
    -sqrt(35.0 / (32.0 * PI)),            // Y3^-3
    sqrt(105.0 / (4.0 * PI)),             // Y3^-2
    -sqrt(21.0 / (64.0 * PI)),            // Y3^-1
    sqrt(7.0 / (16.0 * PI)),              // Y3^0
    -sqrt(21.0 / (64.0 * PI)),            // Y3^1
    sqrt(105.0 / (16.0 * PI)),            // Y3^2
    -sqrt(35.0 / (32.0 * PI))             // Y3^3
);

struct CameraUniforms {
    view: mat4x4<f32>,
    view_inv: mat4x4<f32>,
    proj: mat4x4<f32>,
    proj_inv: mat4x4<f32>,
    viewport: vec2<f32>,
    focal: vec2<f32>
};

struct SHSolver {
    dir_xy: u32,
    dir_z_opacity: u32,
    idx: u32,
}

// Updated compact RenderSettings layout (32 bytes total)
struct RenderSettings {
    canvas_size: vec2<u32>,
    max_sh_deg: u32,
    cur_sh_deg: u32,
    gaussian_scaling: f32,
    kernel_size: f32,
    mip_spatting: u32,
    walltime: f32,
};

@group(0) @binding(0) var<uniform> camera: CameraUniforms;
@group(0) @binding(1) var<uniform> render_settings: RenderSettings;

@group(1) @binding(0) var<storage, read> sort_infos: GeneralInfo;
@group(1) @binding(1) var<storage, read> sh_coefs : array<u32>;
@group(1) @binding(2) var<storage, read> sh_solvers : array<SHSolver>;
@group(1) @binding(3) var<storage, read_write> colors : array<u32>;

/// reads the ith sh coef from the vertex buffer
fn sh_coef(idx: u32) -> vec3<f32> {
    let ri = idx * 3u + 0u;
    let gi = idx * 3u + 1u;
    let bi = idx * 3u + 2u;

    let r = unpack2x16float(sh_coefs[ri >> 1])[ri & 1u];
    let g = unpack2x16float(sh_coefs[gi >> 1])[gi & 1u];
    let b = unpack2x16float(sh_coefs[bi >> 1])[bi & 1u];
    return vec3<f32>(r, g, b);
}

// spherical harmonics evaluation with Condon–Shortley phase
fn evaluate_sh(dir: vec3<f32>, v_idx: u32, max_sh_deg: u32, sh_deg: u32) -> vec3<f32> {
    // let num_coef = (max_sh_deg + 1u) * (max_sh_deg + 1u); // number of coefficients for the given degree
    let sh_base = (max_sh_deg + 1u) * (max_sh_deg + 1u) * v_idx; // no >>1, since no packing
    // if (sh_base + num_coef * 3u > arrayLength(&sh_coefs)) {
    //     // Out-of-bounds convention: return purple
    //     return vec3<f32>(1., 0., 1.);
    // }

    var result = SH_C0 * sh_coef(sh_base + 0u);

    if sh_deg > 0u {

        let x = dir.x;
        let y = dir.y;
        let z = dir.z;

        result += SH_C1 * ( -y * sh_coef(sh_base + 1u)
                            +z * sh_coef(sh_base + 2u)
                            -x * sh_coef(sh_base + 3u) );

        if sh_deg > 1u {

            let xx = x * x;
            let yy = y * y;
            let zz = z * z;
            let xy = x * y;
            let yz = y * z;
            let xz = x * z;

            result += SH_C2[0] * (xy * sh_coef(sh_base + 4u) + (xx - yy) * sh_coef(sh_base + 8u))
                    + SH_C2[1] * (yz * sh_coef(sh_base + 5u) + xz * sh_coef(sh_base + 7u))
                    + SH_C2[2] * (2.0 * zz - xx - yy) * sh_coef(sh_base + 6u);

            if sh_deg > 2u {
                result += SH_C3[0] * (y * (3.0 * xx - yy) * sh_coef(sh_base + 9u) + x * (xx - 3.0 * yy) * sh_coef(sh_base + 15u))
                        + SH_C3[1] * (xy * z * sh_coef(sh_base + 10u) + z * (xx - yy) * sh_coef(sh_base + 14u))
                        + SH_C3[2] * (y * (4.0 * zz - xx - yy) * sh_coef(sh_base + 11u) + x * (4.0 * zz - xx - yy) * sh_coef(sh_base + 13u))
                        + SH_C3[3] * z * (2.0 * zz - 3.0 * xx - 3.0 * yy) * sh_coef(sh_base + 12u);
            }
        }
    }

    return result + 0.5;
}

@compute @workgroup_size(WG_SIZE)
fn preprocess(@builtin(global_invocation_id) gid: vec3<u32>) {
    // Shade only active elements after culling
    if gid.x >= sort_infos.keys_size { return; }

    let store_idx = gid.x;
    let solver = sh_solvers[store_idx];
    let dir_opacity = vec4<f32>(unpack2x16float(solver.dir_xy), unpack2x16float(solver.dir_z_opacity));
    let dir = dir_opacity.xyz;
    let opacity = dir_opacity.w;
    let idx = solver.idx;

    let rgb = evaluate_sh(dir, idx, render_settings.max_sh_deg, render_settings.cur_sh_deg);
    colors[store_idx] = pack4x8unorm(vec4<f32>(rgb, opacity));
}
`,Ml=`enable f16;

// const CUTOFF: f32 = log(255.);

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) @interpolate(linear, centroid) screen_pos: vec2<f32>,
    @location(1) @interpolate(flat) color: vec4<f16>,
};

struct Splat {
    v_0: vec2<f16>,
    v_1: vec2<f16>,
    pos: vec2<f16>,
};

@group(0) @binding(0) var<storage, read> points_2d : array<Splat>;
@group(0) @binding(1) var<storage, read> color : array<u32>;
@group(0) @binding(2) var<storage, read> indices : array<u32>;

const INV255: f16 = 1.0h / 255.0h;

fn unpack4x8unorm_to_half(p: u32) -> vec4<f16> {
  let r: f16 = f16(  p        & 0xFFu) * INV255;
  let g: f16 = f16((p >> 8)   & 0xFFu) * INV255;
  let b: f16 = f16((p >> 16)  & 0xFFu) * INV255;
  let a: f16 = f16((p >> 24)  & 0xFFu) * INV255;
  return vec4<f16>(r,g,b,a);
}

@vertex
fn vs_main(
    @builtin(vertex_index) vid: u32,
    @builtin(instance_index) iid: u32
) -> VertexOutput {
    let idx = indices[iid];
    let rgba = unpack4x8unorm_to_half(color[idx]);
    let vertex = points_2d[idx];

    let eigen_xy = vec2<f32>(f32((vid & 1u) == 0u) * 2. - (1.), f32(vid < 2u) * 2. - (1.));

    let radius_scale = sqrt(log(255.0 * f32(rgba.a)));
    let position = eigen_xy * radius_scale;

    let offset = 2.0 * (mat2x2<f32>(vec2<f32>(vertex.v_0), vec2<f32>(vertex.v_1)) * position);
    return VertexOutput(
        vec4<f32>(vec2<f32>(vertex.pos) + offset, 0., 1.),
        position,
        rgba
    );
}

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    let a: f32 = dot(vec2<f32>(in.screen_pos), vec2<f32>(in.screen_pos));
    if a > log(255.0 * f32(in.color.a)) {
        discard;
    }
    let b: f32 = min(1.0, exp(-a) * f32(in.color.a));
    return vec4<f32>(vec3<f32>(in.color.rgb), 1.0) * b;
}`,Gl=`// const CUTOFF: f32 = log(255.);

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) @interpolate(linear, centroid) screen_pos: vec2<f32>,
    @location(1) @interpolate(flat) color: vec4<f32>,
};

struct Splat {
    v_0: u32, // vec2<f16>,
    v_1: u32, // vec2<f16>,
    pos: u32, // vec2<f16>,
};

@group(0) @binding(0) var<storage, read> points_2d : array<Splat>;
@group(0) @binding(1) var<storage, read> color : array<u32>;
@group(0) @binding(2) var<storage, read> indices : array<u32>;

@vertex
fn vs_main(
    @builtin(vertex_index) vid: u32,
    @builtin(instance_index) iid: u32
) -> VertexOutput {
    let idx = indices[iid];
    let rgba = unpack4x8unorm(color[idx]);
    let vertex = points_2d[idx];
    let T = mat2x2<f32>(unpack2x16float(vertex.v_0), unpack2x16float(vertex.v_1));

    let eigen_xy = vec2<f32>(f32((vid & 1u) == 0u) * 2. - (1.), f32(vid < 2u) * 2. - (1.));

    let radius_scale: f32 = sqrt(log(255.0 * rgba.a));
    let position = eigen_xy * radius_scale;

    let offset = 2. * (T * position);
    return VertexOutput(
        vec4<f32>(unpack2x16float(vertex.pos) + offset, 0., 1.),
        position,
        rgba
    );
}

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    let a = dot(in.screen_pos, in.screen_pos);
    if a > log(255.0 * in.color.a) {
        discard;
    }
    let b = min(1.00, exp(-a) * in.color.a);
    return vec4<f32>(in.color.rgb, 1.0) * b;
}`,Dl=`const WG_SIZE = 256u;
const TILE_SIZE = 256u;
override RS_RADIX_LOG2 = 8u;  // 2 bit radices
override RS_RADIX_SIZE = 1u << RS_RADIX_LOG2;    // 4 entries into the radix table

struct GeneralInfo{
  keys_size : u32,  dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32, // t0
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32, // t1
};

struct DrawIndirect {
    vertex_count: u32,
    instance_count: u32,
    first_vertex: u32,
    first_instance: u32,
}

@group(0) @binding(0) var<storage, read_write> infos: GeneralInfo;
@group(0) @binding(1) var<storage, read_write> draw_indirect: DrawIndirect;

@compute @workgroup_size(1)
fn write_dispatch_triples(
    @builtin(workgroup_id)        wid: vec3<u32>,
    @builtin(local_invocation_id) lid: vec3<u32>
) {
    if wid.x == 0u && lid.x == 0u {
        draw_indirect.instance_count = infos.keys_size;
        // Histogram/Scatter dispatch X (elements divided by WG_SIZE)
        infos.dispatch_x = (infos.keys_size + WG_SIZE - 1u) / WG_SIZE;
        infos.dispatch_y = 1u;
        infos.dispatch_z = 1u;

        // Two-level tile counts
        let t0 = (infos.dispatch_x + TILE_SIZE - 1u) / TILE_SIZE;
        let t1 = (t0 + TILE_SIZE - 1u) / TILE_SIZE;

        // Triples for L0/L1 plus t0/t1
        infos.l0_x = t0; infos.l0_y = RS_RADIX_SIZE; infos.l0_z = 1u; infos.l0_t = t0;
        infos.l1_x = t1; infos.l1_y = RS_RADIX_SIZE; infos.l1_z = 1u; infos.l1_t = t1;
    }
}`,Ul=`// Culling & index compaction pass extracted from preprocess.wgsl
// This file only contains the minimal definitions required for the cull pass.

struct GeneralInfo{
  keys_size : atomic<u32>, dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32, // t0
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32, // t1
};

const WG_SIZE = 256u;
const CUTOFF = log(255.);

struct CameraUniforms {
    view: mat4x4<f32>,
    view_inv: mat4x4<f32>,
    proj: mat4x4<f32>,
    proj_inv: mat4x4<f32>,
    viewport: vec2<f32>,
    focal: vec2<f32>
};

struct Gaussian {
    // // (3+1)x f16 packed as u32
    // pos_opacity: array<u32,2>,
    // // 6x f16 sparse cov matrix
    // cov: array<u32,3>
    xy: u32,
    zw: u32,
    cov01: u32,
    cov23: u32,
    cov45: u32,
};

struct Splat {
    // 4x f16 packed as u32
    // vec of the quad
    v_0: u32,
    v_1: u32,
    // 2x f16 packed as u32
    // center of the quad
    pos: u32,
};

// Updated compact RenderSettings layout (32 bytes)
struct RenderSettings {
    canvas_size: vec2<u32>, // width, height
    max_sh_deg: u32,
    cur_sh_deg: u32,
    gaussian_scaling: f32,
    kernel_size: f32,
    mip_spatting: u32,
    walltime: f32,
}

struct SHSolver {
    // dir_opacity: vec4<f16>,
    dir_xy: u32,
    dir_z_opacity: u32,
    idx: u32,
}

@group(0) @binding(0) var<uniform> camera: CameraUniforms;
@group(0) @binding(1) var<uniform> render_settings: RenderSettings;

@group(1) @binding(0) var<storage, read> gaussians : array<Gaussian>;
@group(1) @binding(1) var<storage, read_write> points_2d : array<Splat>;

@group(2) @binding(0) var<storage, read_write> sort_infos: GeneralInfo;
@group(2) @binding(1) var<storage, read_write> sort_depths : array<u32>;
@group(2) @binding(2) var<storage, read_write> sort_indices : array<u32>;
@group(2) @binding(3) var<storage, read_write> sh_solvers : array<SHSolver>;


var<workgroup> scan0: array<u32, WG_SIZE>; // for prefix sum
var<workgroup> scan1: array<u32, WG_SIZE>; // for prefix sum
var<workgroup> group_base: u32;
// PASS 1: culling & index compaction
@compute @workgroup_size(WG_SIZE)
fn preprocess_cull(@builtin(global_invocation_id) gid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>) {
    var alive = 0u;
    var depth: f32;
    var v_0: vec2<f32>;
    var v_1: vec2<f32>;
    var v_center: vec2<f32>;
    var opacity: f32;
    var dir: vec3<f32>;

    let idx = gid.x;
    if idx < arrayLength(&gaussians) {
        let vertex = gaussians[idx];
        let xyzw = vec4<f32>(unpack2x16float(vertex.xy), unpack2x16float(vertex.zw));
        let xyz = xyzw.xyz;
        opacity = xyzw.w;
        let cov01 = unpack2x16float(vertex.cov01);
        let cov23 = unpack2x16float(vertex.cov23);
        let cov45 = unpack2x16float(vertex.cov45);

        var camspace = camera.view * vec4<f32>(xyz, 1.0);
        let pos2d = camera.proj * camspace;
    
        let bounds = 1.2 * pos2d.w;
        let z = pos2d.z / pos2d.w;
        // if z > 0. && z < 1. && pos2d.x >= -bounds && pos2d.x <= bounds && pos2d.y >= -bounds && pos2d.y <= bounds {
        // if pos2d.w > 0. && z > 0. && z < 1. {
        if z > 0. && z < 1. && pos2d.x >= -bounds && pos2d.x <= bounds && pos2d.y >= -bounds && pos2d.y <= bounds {
            let focal: vec2<f32> = camera.focal;
            let viewport: vec2<f32> = camera.viewport;
            let scaling: f32 = render_settings.gaussian_scaling;

            let Vrk = mat3x3<f32>(
                cov01.x, cov01.y, cov23.x,
                cov01.y, cov23.y, cov45.x,
                cov23.x, cov45.x, cov45.y,
            ) * scaling * scaling;
            let J: mat3x3<f32> = mat3x3<f32>(
                focal.x / camspace.z,
                0.0,
                -(focal.x * camspace.x) / (camspace.z * camspace.z),
                0.0,
                -focal.y / camspace.z,
                (focal.y * camspace.y) / (camspace.z * camspace.z),
                0.0,
                0.0,
                0.0
            );

            let W = transpose(mat3x3<f32>(camera.view[0].xyz, camera.view[1].xyz, camera.view[2].xyz));
            let T = W * J; // DEBUG: extremely large values observed!
            let cov = transpose(T) * Vrk * T;

            // let kernel_size = KERNEL_SIZE;
            let kernel_size: f32 = render_settings.kernel_size;
            if bool(render_settings.mip_spatting) {
                // according to Mip-Splatting by Yu et al. 2023
                let det_0: f32 = max(1e-6, cov[0][0] * cov[1][1] - cov[0][1] * cov[0][1]);
                let det_1: f32 = max(1e-6, (cov[0][0] + kernel_size) * (cov[1][1] + kernel_size) - cov[0][1] * cov[0][1]);
                var coef: f32 = sqrt(det_0 / (det_1 + 1e-6) + 1e-6);

                if (det_0 <= 1e-6 || det_1 <= 1e-6) {
                    coef = 0.0;
                }
                opacity *= coef;
            }
            
            if opacity > 1.0 / 255.0 {
                opacity = min(opacity, 1.0);

                let diagonal1 = cov[0][0] + kernel_size;
                let offDiagonal = cov[0][1];
                let diagonal2 = cov[1][1] + kernel_size;

                let mid = 0.5 * (diagonal1 + diagonal2);
                let radius = length(vec2<f32>((diagonal1 - diagonal2) / 2.0, offDiagonal));
                // eigenvalues of the 2D screen space splat
                let lambda1 = mid + radius;
                let lambda2 = max(mid - radius, 0.1);

                let diagonalVector = normalize(vec2<f32>(offDiagonal, lambda1 - diagonal1));
                
                // scaled eigenvectors in screen space 
                v_0 = sqrt(2.0 * lambda1) * diagonalVector / viewport;
                v_1 = sqrt(2.0 * lambda2) * vec2<f32>(diagonalVector.y, -diagonalVector.x) / viewport;
                v_center = pos2d.xy / pos2d.w;

                let radius_scale = sqrt(log(255.0 * opacity));
                // let extent = sqrt(v_0 * v_0 + v_1 * v_1) * radius_scale * 2.0;
                // let extent = sqrt(v_0 * v_0 + v_1 * v_1) * CUTOFF * 2.0;
                let extent: vec2<f32> = (abs(v_0) + abs(v_1)) * radius_scale * 2.0;

                let min_pos = v_center - extent;
                let max_pos = v_center + extent;
                if max_pos.x > -1.0 && max_pos.y > -1.0 && min_pos.x < 1.0 && min_pos.y < 1.0 {
                    alive = 1u;
                    let camera_pos = vec3<f32>(camera.view_inv[3].xyz);
                    dir = normalize(xyz - camera_pos);
                    let zfar = -camera.proj[3][2] / (camera.proj[2][2] - 1.0);
                    depth = zfar - pos2d.z;
                }
            }
        }
    }
    scan0[lid.x] = alive;

    workgroupBarrier();

    if (lid.x >= 1u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 1u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 2u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 2u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >= 4u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 4u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 8u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 8u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >= 16u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 16u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 32u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 32u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >= 64u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 64u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 128u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 128u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    // var addend256: u32 = 0u; if (lid.x >= 256u) { addend256 = scan[lid.x - 256u]; } workgroupBarrier(); scan[lid.x] = scan[lid.x] + addend256; workgroupBarrier();

    // Only perform one global atomic when this workgroup has survivors; then broadcast the base index
    if (lid.x == 0u) {
        let group_cnt  = scan0[WG_SIZE - 1u];      // Total survivors in this workgroup
        if (group_cnt != 0u) {
            group_base = atomicAdd(&sort_infos.keys_size, group_cnt);
        }
    }
    workgroupBarrier();

    // Write out compacted indices in order
    if (alive == 1u) {
        let store_idx = group_base + scan0[lid.x] - 1u;
        sh_solvers[store_idx] = SHSolver(
            // vec4<f16>(vec3<f16>(dir), f16(opacity)),
            pack2x16float(dir.xy),
            pack2x16float(vec2<f32>(dir.z, opacity)),
            idx,
        );
        points_2d[store_idx] = Splat(
            pack2x16float(v_0),
            pack2x16float(v_1),
            pack2x16float(v_center),
        );
        sort_depths[store_idx] = bitcast<u32>(depth);
        sort_indices[store_idx] = store_idx;
    }
}`,Rl=`// shader implementing gpu radix sort.

override PASS_ID = 0u;  // Pass ID for current radix sort pass
const WG_SIZE = 256u;
const WORDS_PER_WG   : u32 = WG_SIZE / 32u; // 8 for 256
override RS_RADIX_LOG2 = 8u;  // 8 bit radices
override RS_RADIX_SIZE = 1u << RS_RADIX_LOG2;    // 256 entries into the radix table
override MAX_BIN_SIZE = RS_RADIX_SIZE * WORDS_PER_WG; // legacy (pre-padding)

struct GeneralInfo{
  keys_size : u32,  dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32, // t0
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32, // t1
};

@group(0) @binding(0) var<storage, read> infos: GeneralInfo;
@group(0) @binding(1) var<storage, read> digit_base : array<u32>;
@group(0) @binding(2) var<storage, read> keys_src : array<u32>;
@group(0) @binding(3) var<storage, read_write> keys_dst : array<u32>;
@group(0) @binding(4) var<storage, read> payload_src : array<u32>;
@group(0) @binding(5) var<storage, read_write> payload_dst : array<u32>;
@group(0) @binding(6) var<storage, read> wg_prefixes : array<u32>;
// --------------------------------------------------------------------------------------------------------------
// Pass 3: Scatter elements to final positions
// --------------------------------------------------------------------------------------------------------------
// var<workgroup> sh_digits : array<u32, WG_SIZE>;
// var<workgroup> bin_flags : array<atomic<u32>, MAX_BIN_SIZE>;

struct BinWords { words: array<atomic<u32>, WORDS_PER_WG + 1> }
var<workgroup> bin_flags : array<BinWords, RS_RADIX_SIZE>; // For each digit: 8 x 32-bit words bitmap

@compute @workgroup_size(WG_SIZE)
fn scatter_elements(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>, @builtin(num_workgroups) wgs: vec3<u32>) {
    // for (var i = lid.x; i < RS_RADIX_SIZE * WORDS_PER_WG; i += WG_SIZE) {
    //     let d = i / WORDS_PER_WG;
    //     let w = i % WORDS_PER_WG;
    //     atomicStore(&bin_flags[d].words[w], 0u);
    // }
    atomicStore(&bin_flags[lid.x].words[0], 0u);
    atomicStore(&bin_flags[lid.x].words[1], 0u);
    atomicStore(&bin_flags[lid.x].words[2], 0u);
    atomicStore(&bin_flags[lid.x].words[3], 0u);
    atomicStore(&bin_flags[lid.x].words[4], 0u);
    atomicStore(&bin_flags[lid.x].words[5], 0u);
    atomicStore(&bin_flags[lid.x].words[6], 0u);
    atomicStore(&bin_flags[lid.x].words[7], 0u);

    workgroupBarrier();

    let wg_base  = wid.x * WG_SIZE;
    let pos = wg_base + lid.x;

    var key: u32;
    var digit : u32;

    if (pos < infos.keys_size) {
        key = keys_src[pos];
        digit = extractBits(key, PASS_ID * RS_RADIX_LOG2, RS_RADIX_LOG2);
        // 3) Set bit in this digit's bitmap: one 32-thread word
        let myWord = lid.x >> 5u;                 // /32
        let myBit  = 1u << (lid.x & 31u);         // %32
        atomicOr(&bin_flags[digit].words[myWord], myBit);
    }
    workgroupBarrier();

    if (pos < infos.keys_size) {

        let myWord = lid.x >> 5u;                 // /32
        let myBit  = 1u << (lid.x & 31u);         // %32
        var rank_in_row : u32 = 0u;

        // Accumulate bit counts in preceding full words
        for (var w = 0u; w < myWord; w++) {
            let bits = atomicLoad(&bin_flags[digit].words[w]);
            rank_in_row += countOneBits(bits);
        }
        // Add bits below my bit in the current word
        let cur  = atomicLoad(&bin_flags[digit].words[myWord]);
        rank_in_row  += countOneBits(cur & (myBit - 1u));

        let global_pos =
            digit_base[digit] +
            wg_prefixes[digit * wgs.x + wid.x] +
            rank_in_row;

        // Write back key/payload
        keys_dst[global_pos]    = key;
        payload_dst[global_pos] = payload_src[pos];
    }
}
`,Al=`// shader implementing gpu radix sort.

override PASS_ID = 0u;  // Pass ID for current radix sort pass
const WG_SIZE = 256u;
override RS_RADIX_LOG2 = 8u;  // 8 bit radices
override RS_RADIX_SIZE = 1u << RS_RADIX_LOG2;    // 256 entries into the radix table

struct GeneralInfo{
  keys_size : u32,  dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32, // t0
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32, // t1
};

@group(0) @binding(0) var<storage, read> infos: GeneralInfo;
@group(0) @binding(1) var<storage, read> keys_src : array<u32>;
@group(0) @binding(2) var<storage, read_write> wg_histograms : array<u32>;
// --------------------------------------------------------------------------------------------------------------
// NEW MULTI-PASS RADIX SORT IMPLEMENTATION
// Pass 1: Local histogram generation per workgroup
// --------------------------------------------------------------------------------------------------------------
var<workgroup> local_histogram : array<atomic<u32>, RS_RADIX_SIZE>;
@compute @workgroup_size(WG_SIZE)
fn local_histogram_pass(@builtin(workgroup_id) wid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>, @builtin(num_workgroups) wgs: vec3<u32>) {
    // Zero local histogram
    if lid.x < RS_RADIX_SIZE {
        atomicStore(&local_histogram[lid.x], 0u);
    }
    workgroupBarrier();
    
    // Process elements and build local histogram + ranks
    let pos = wid.x * WG_SIZE + lid.x;
    if (pos < infos.keys_size) {
        let key = keys_src[pos];
        let digit = extractBits(key, PASS_ID * RS_RADIX_LOG2, RS_RADIX_LOG2);
        
        atomicAdd(&local_histogram[digit], 1u);
    }
    workgroupBarrier();
    
    // Write workgroup histogram to global memory
    if lid.x < RS_RADIX_SIZE {
        wg_histograms[wid.x + lid.x * wgs.x] = atomicLoad(&local_histogram[lid.x]);
    }
}
`,Tl=`// ============================================================================
// 2-Level (Nested) Blelloch Prefix Scan Kernels (Radix Sort histogram phase)
// ----------------------------------------------------------------------------
// This file implements a hierarchical exclusive prefix sum over workgroup
// histograms laid out as [digit][workgroup]. We use a tile size equal to the
// workgroup size so each invocation owns exactly one element (no inner loops).
//
// Pipeline of passes for one radix digit plane (repeated for all digits):
//   (A) prefix_l0_tile_scan              : per-element scan in tiles of wg histograms
//       -> produces wg_prefixes (exclusive) + l0_sums (per tile totals)
//   (B) prefix_l1_tile_scan_on_l0_sums   : scan l0_sums producing l0_offsets + l1_sums
//   (C) prefix_scan_l1_sums              : scan l1_sums producing l1_offsets
//   (D) prefix_add_l1_to_l0_offsets      : add l1_offsets back to l0_offsets
//   (E) prefix_add_l0_to_elements        : add final l0_offsets to element prefixes
//   (F) compute_digit_base               : final scan across digits to get digit_base
//
// All scans are Blelloch (exclusive) using a shared workgroup array \`temp\`.
// We intentionally keep loops with compile-time bounds (WG_SIZE) for the
// compiler to unroll/optimize. No algorithmic / memory access pattern change
// has been made—only clarity improvements and richer commentary.
//
// NOTE: RS_RADIX_SIZE == WG_SIZE (256) here, allowing reuse of the same
// Blelloch logic for digit_base without an extra buffer.
// ============================================================================

override WG_SIZE        : u32 = 256u;  // 1 thread ↔ 1 element (no inner striding)

// Dispatch / tiling metadata passed from host.
// l0_t: number of L0 tiles      (ceil(dispatch_x / WG_SIZE))
// l1_t: number of L1 tiles over l0_t (ceil(l0_t / WG_SIZE))
struct GeneralInfo {
  keys_size  : u32,  // Total number of keys (for context)
  dispatch_x : u32,  // Number of workgroups along x for histogram source
  dispatch_y : u32,  // (digits) normally RS_RADIX_SIZE or batched digits
  dispatch_z : u32,
  l0_x       : u32,  // Mirrors grid dims for L0 (informational)
  l0_y       : u32,
  l0_z       : u32,
  l0_t       : u32,  // Number of L0 tiles per digit
  l1_x       : u32,  // Mirrors grid dims for L1 (informational)
  l1_y       : u32,
  l1_z       : u32,
  l1_t       : u32,  // Number of L1 tiles over L0 tiles per digit
};

// in/out buffers
@group(0) @binding(0) var<storage, read>        infos         : GeneralInfo;
@group(0) @binding(1) var<storage, read>        wg_histograms : array<u32>; // [digit][wg]
@group(0) @binding(2) var<storage, read_write>  wg_prefixes   : array<u32>; // [digit][wg] (exclusive prefix for each digit)
@group(0) @binding(3) var<storage, read_write>  l0_sums       : array<u32>; // [digit][t0]   per L0 tile total
@group(0) @binding(4) var<storage, read_write>  l0_offsets    : array<u32>; // [digit][t0]   exclusive scan over l0_sums
@group(0) @binding(5) var<storage, read_write>  l1_sums       : array<u32>; // [digit][t1]   per L1 tile total (over l0_sums)
@group(0) @binding(6) var<storage, read_write>  l1_offsets    : array<u32>; // [digit][t1]   exclusive scan over l1_sums
@group(0) @binding(7) var<storage, read_write>  digit_base    : array<u32>; // length RS_RADIX_SIZE exclusive base per digit

fn idx_hist(d: u32, wg: u32) -> u32 { return d * infos.dispatch_x + wg; }
fn idx_l0 (d: u32, t0: u32) -> u32 { return d * infos.l0_t + t0; }
fn idx_l1 (d: u32, t1: u32) -> u32 { return d * infos.l1_t + t1; }
// Shared scratch used by all kernels (size == WG_SIZE). For digit_base the
// size matches RS_RADIX_SIZE.
var<workgroup> temp : array<u32, WG_SIZE>;

// ---------------------------------------------------------------------------
// Reusable Blelloch scan helpers (tile-sized, operating on \`temp\`).
// We split into up-sweep (returning total) and down-sweep (producing exclusive)
// so callers needing the tile total (for hierarchical sums) can read it.
// These operate over the full WG_SIZE; inactive lanes should have been
// initialized with 0 beforehand.
// ---------------------------------------------------------------------------
// NOTE: Manually unrolled for WG_SIZE == 256u (log2=8). If WG_SIZE changes,
// regenerate this sequence (offsets: 1,2,4,8,16,32,64,128).
fn blelloch_up_sweep_tile(tid: u32) -> u32 {
  let ui1 = (tid + 1u) * 2u * 1u - 1u;   if (ui1   < WG_SIZE) { temp[ui1]   += temp[ui1 - 1u]; }     workgroupBarrier();
  let ui2 = (tid + 1u) * 2u * 2u - 1u;   if (ui2   < WG_SIZE) { temp[ui2]   += temp[ui2 - 2u]; }     workgroupBarrier();
  let ui4 = (tid + 1u) * 2u * 4u - 1u;   if (ui4   < WG_SIZE) { temp[ui4]   += temp[ui4 - 4u]; }     workgroupBarrier();
  let ui8 = (tid + 1u) * 2u * 8u - 1u;   if (ui8   < WG_SIZE) { temp[ui8]   += temp[ui8 - 8u]; }     workgroupBarrier();
  let ui16 = (tid + 1u) * 2u * 16u - 1u; if (ui16  < WG_SIZE) { temp[ui16]  += temp[ui16 - 16u]; }   workgroupBarrier();
  let ui32 = (tid + 1u) * 2u * 32u - 1u; if (ui32  < WG_SIZE) { temp[ui32]  += temp[ui32 - 32u]; }   workgroupBarrier();
  let ui64 = (tid + 1u) * 2u * 64u - 1u; if (ui64  < WG_SIZE) { temp[ui64]  += temp[ui64 - 64u]; }   workgroupBarrier();
  let ui128 = (tid + 1u) * 2u * 128u - 1u; if (ui128 < WG_SIZE) { temp[ui128] += temp[ui128 - 128u]; } workgroupBarrier();
  return temp[WG_SIZE - 1u]; // inclusive total
}

fn blelloch_down_sweep_tile_exclusive(tid: u32) {
  if (tid == 0u) { temp[WG_SIZE - 1u] = 0u; }
  workgroupBarrier();
  let di128 = (tid + 1u) * 2u * 128u - 1u; if (di128 < WG_SIZE) { let t = temp[di128 - 128u]; temp[di128 - 128u] = temp[di128]; temp[di128] += t; } workgroupBarrier();
  let di64  = (tid + 1u) * 2u * 64u  - 1u; if (di64  < WG_SIZE) { let t = temp[di64  - 64u];  temp[di64  - 64u]  = temp[di64];  temp[di64]  += t; } workgroupBarrier();
  let di32  = (tid + 1u) * 2u * 32u  - 1u; if (di32  < WG_SIZE) { let t = temp[di32  - 32u];  temp[di32  - 32u]  = temp[di32];  temp[di32]  += t; } workgroupBarrier();
  let di16  = (tid + 1u) * 2u * 16u  - 1u; if (di16  < WG_SIZE) { let t = temp[di16  - 16u];  temp[di16  - 16u]  = temp[di16];  temp[di16]  += t; } workgroupBarrier();
  let di8   = (tid + 1u) * 2u * 8u   - 1u; if (di8   < WG_SIZE) { let t = temp[di8   - 8u];   temp[di8   - 8u]   = temp[di8];   temp[di8]   += t; } workgroupBarrier();
  let di4   = (tid + 1u) * 2u * 4u   - 1u; if (di4   < WG_SIZE) { let t = temp[di4   - 4u];   temp[di4   - 4u]   = temp[di4];   temp[di4]   += t; } workgroupBarrier();
  let di2   = (tid + 1u) * 2u * 2u   - 1u; if (di2   < WG_SIZE) { let t = temp[di2   - 2u];   temp[di2   - 2u]   = temp[di2];   temp[di2]   += t; } workgroupBarrier();
  let di1   = (tid + 1u) * 2u * 1u   - 1u; if (di1   < WG_SIZE) { let t = temp[di1   - 1u];   temp[di1   - 1u]   = temp[di1];   temp[di1]   += t; } workgroupBarrier();
}

// Separate helpers for digit_base scan (RS_RADIX_SIZE may conceptually differ
// though equal here). Kept distinct to avoid introducing an extra branch.
fn blelloch_up_sweep_digits(d: u32) {
  // Unrolled for RS_RADIX_SIZE == 256u
  let ui1 = (d + 1u) * 2u * 1u - 1u;   if (ui1   < WG_SIZE) { temp[ui1]   += temp[ui1 - 1u]; }     workgroupBarrier();
  let ui2 = (d + 1u) * 2u * 2u - 1u;   if (ui2   < WG_SIZE) { temp[ui2]   += temp[ui2 - 2u]; }     workgroupBarrier();
  let ui4 = (d + 1u) * 2u * 4u - 1u;   if (ui4   < WG_SIZE) { temp[ui4]   += temp[ui4 - 4u]; }     workgroupBarrier();
  let ui8 = (d + 1u) * 2u * 8u - 1u;   if (ui8   < WG_SIZE) { temp[ui8]   += temp[ui8 - 8u]; }     workgroupBarrier();
  let ui16 = (d + 1u) * 2u * 16u - 1u; if (ui16  < WG_SIZE) { temp[ui16]  += temp[ui16 - 16u]; }   workgroupBarrier();
  let ui32 = (d + 1u) * 2u * 32u - 1u; if (ui32  < WG_SIZE) { temp[ui32]  += temp[ui32 - 32u]; }   workgroupBarrier();
  let ui64 = (d + 1u) * 2u * 64u - 1u; if (ui64  < WG_SIZE) { temp[ui64]  += temp[ui64 - 64u]; }   workgroupBarrier();
  let ui128 = (d + 1u) * 2u * 128u - 1u; if (ui128 < WG_SIZE) { temp[ui128] += temp[ui128 - 128u]; } workgroupBarrier();
}

fn blelloch_down_sweep_digits(d: u32) {
  if (d == 0u) { temp[WG_SIZE - 1u] = 0u; }
  workgroupBarrier();
  let di128 = (d + 1u) * 2u * 128u - 1u; if (di128 < WG_SIZE) { let t = temp[di128 - 128u]; temp[di128 - 128u] = temp[di128]; temp[di128] += t; } workgroupBarrier();
  let di64  = (d + 1u) * 2u * 64u  - 1u; if (di64  < WG_SIZE) { let t = temp[di64  - 64u];  temp[di64  - 64u]  = temp[di64];  temp[di64]  += t; } workgroupBarrier();
  let di32  = (d + 1u) * 2u * 32u  - 1u; if (di32  < WG_SIZE) { let t = temp[di32  - 32u];  temp[di32  - 32u]  = temp[di32];  temp[di32]  += t; } workgroupBarrier();
  let di16  = (d + 1u) * 2u * 16u  - 1u; if (di16  < WG_SIZE) { let t = temp[di16  - 16u];  temp[di16  - 16u]  = temp[di16];  temp[di16]  += t; } workgroupBarrier();
  let di8   = (d + 1u) * 2u * 8u   - 1u; if (di8   < WG_SIZE) { let t = temp[di8   - 8u];   temp[di8   - 8u]   = temp[di8];   temp[di8]   += t; } workgroupBarrier();
  let di4   = (d + 1u) * 2u * 4u   - 1u; if (di4   < WG_SIZE) { let t = temp[di4   - 4u];   temp[di4   - 4u]   = temp[di4];   temp[di4]   += t; } workgroupBarrier();
  let di2   = (d + 1u) * 2u * 2u   - 1u; if (di2   < WG_SIZE) { let t = temp[di2   - 2u];   temp[di2   - 2u]   = temp[di2];   temp[di2]   += t; } workgroupBarrier();
  let di1   = (d + 1u) * 2u * 1u   - 1u; if (di1   < WG_SIZE) { let t = temp[di1   - 1u];   temp[di1   - 1u]   = temp[di1];   temp[di1]   += t; } workgroupBarrier();
}

// ---------------------------------------------------------------------------
// (A) L0 pass
// Per-digit tile scan over wg_histograms -> produces:
//   - wg_prefixes (exclusive per element inside each digit plane)
//   - l0_sums     (tile totals for hierarchical accumulation)
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_l0_tile_scan(
  @builtin(workgroup_id)        wid : vec3<u32>,   // x: t0, y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let t0    = wid.x;
  let digit = wid.y;

  let start = t0 * WG_SIZE;
  // Number of active (in-bounds) lanes for this tile along dispatch_x.
  let valid = select(0u, min(WG_SIZE, infos.dispatch_x - start), infos.dispatch_x > start);

  let tid = lid.x; // lane id

  var v : u32 = 0u;
  if (tid < valid) { v = wg_histograms[idx_hist(digit, start + tid)]; }
  temp[tid] = v;
  workgroupBarrier();

  // Blelloch scan over tile
  let total = blelloch_up_sweep_tile(tid);
  blelloch_down_sweep_tile_exclusive(tid);

  if (tid < valid) { wg_prefixes[idx_hist(digit, start + tid)] = temp[tid]; }
  if (tid == 0u)    { l0_sums[idx_l0(digit, t0)] = select(0u, total, valid > 0u); }
}

// ---------------------------------------------------------------------------
// (B) L1 pass over l0_sums
// Scan l0_sums in tiles to produce l0_offsets (exclusive within tile) and
// l1_sums (totals per L1 tile). This is structurally identical to (A) but the
// source array is l0_sums and destination for element-level offsets is l0_offsets.
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_l1_tile_scan_on_l0_sums(
  @builtin(workgroup_id)        wid : vec3<u32>,   // x: t1, y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let t1    = wid.x;
  let digit = wid.y;

  let t0_len = infos.l0_t;
  let start  = t1 * WG_SIZE;
  let valid  = select(0u, min(WG_SIZE, t0_len - start), t0_len > start);

  let tid = lid.x;

  var v : u32 = 0u;
  if (tid < valid) { v = l0_sums[idx_l0(digit, start + tid)]; }
  temp[tid] = v;
  workgroupBarrier();

  let total = blelloch_up_sweep_tile(tid);
  blelloch_down_sweep_tile_exclusive(tid);

  if (tid < valid) { l0_offsets[idx_l0(digit, start + tid)] = temp[tid]; }
  if (tid == 0u)    { l1_sums[idx_l1(digit, t1)] = select(0u, total, valid > 0u); }
}

// ---------------------------------------------------------------------------
// (C) Scan l1_sums -> l1_offsets (single workgroup per digit)
// Assumes infos.l1_t <= WG_SIZE. Add further level if this can be exceeded.
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_scan_l1_sums(
  @builtin(workgroup_id)        wid : vec3<u32>,   // y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let digit = wid.y;
  let T = infos.l1_t;

  let tid = lid.x;

  var v : u32 = 0u;
  if (tid < T) { v = l1_sums[idx_l1(digit, tid)]; }
  temp[tid] = v;
  workgroupBarrier();

  blelloch_up_sweep_tile(tid); // total not needed here
  blelloch_down_sweep_tile_exclusive(tid);
  if (tid < T) { l1_offsets[idx_l1(digit, tid)] = temp[tid]; }
}

// ---------------------------------------------------------------------------
// (D) Add l1_offsets into l0_offsets for each corresponding L0 tile.
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_add_l1_to_l0_offsets(
  @builtin(workgroup_id)        wid : vec3<u32>,   // x: t1, y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let t1    = wid.x;
  let digit = wid.y;

  let t0_len = infos.l0_t;
  let start  = t1 * WG_SIZE;
  let valid  = select(0u, min(WG_SIZE, t0_len - start), t0_len > start);
  let add    = l1_offsets[idx_l1(digit, t1)];

  let tid = lid.x;
  if (tid < valid) {
    let idx = idx_l0(digit, start + tid);
    l0_offsets[idx] += add;
  }
}

// ---------------------------------------------------------------------------
// (E) Add final l0_offsets back to element-level wg_prefixes.
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_add_l0_to_elements(
  @builtin(workgroup_id)        wid : vec3<u32>,   // x: t0, y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let t0    = wid.x;
  let digit = wid.y;

  let start = t0 * WG_SIZE;
  let valid = select(0u, min(WG_SIZE, infos.dispatch_x - start), infos.dispatch_x > start);
  let add   = l0_offsets[idx_l0(digit, t0)];

  let tid = lid.x;
  if (tid < valid) {
    let idx = idx_hist(digit, start + tid);
    wg_prefixes[idx] += add;
  }
}

@compute @workgroup_size(WG_SIZE)
fn compute_digit_base(
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let d = lid.x; // digit 0..255

  // Gather total count for digit d into temp[d]
  var tot : u32 = 0u;
  if (infos.dispatch_x > 0u) {
    let last = infos.dispatch_x - 1u;
    let idx  = idx_hist(d, last);
    tot = wg_prefixes[idx] + wg_histograms[idx];
  }
  temp[d] = tot;
  workgroupBarrier();

  // Blelloch exclusive scan over digits -------------------------------
  blelloch_up_sweep_digits(d);
  blelloch_down_sweep_digits(d);
  // Exclusive result -> digit_base
  digit_base[d] = temp[d];
}

@compute @workgroup_size(WG_SIZE)
fn compute_digit_base1(
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let d = lid.x; // digit 0..255 (one lane per digit)
  // Gather total count for digit d (tile total for that digit plane)
  let idx  = idx_hist(d, infos.dispatch_x - 1u);
  temp[d] = wg_prefixes[idx] + wg_histograms[idx];
  workgroupBarrier();
  // Hillis-Steele inclusive scan (log2(256)=8 iterations)
  // offset 1
  let add1   = select(0u, temp[d - 1u],   d >= 1u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add1,   d >= 1u);   workgroupBarrier();
  // offset 2
  let add2   = select(0u, temp[d - 2u],   d >= 2u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add2,   d >= 2u);   workgroupBarrier();
  // offset 4
  let add4   = select(0u, temp[d - 4u],   d >= 4u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add4,   d >= 4u);   workgroupBarrier();
  // offset 8
  let add8   = select(0u, temp[d - 8u],   d >= 8u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add8,   d >= 8u);   workgroupBarrier();
  // offset 16
  let add16  = select(0u, temp[d - 16u],  d >= 16u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add16,  d >= 16u);  workgroupBarrier();
  // offset 32
  let add32  = select(0u, temp[d - 32u],  d >= 32u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add32,  d >= 32u);  workgroupBarrier();
  // offset 64
  let add64  = select(0u, temp[d - 64u],  d >= 64u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add64,  d >= 64u);  workgroupBarrier();
  // offset 128
  let add128 = select(0u, temp[d - 128u], d >= 128u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add128, d >= 128u); workgroupBarrier();
  // Convert inclusive -> exclusive: shift right by one (digit 0 -> 0)
  digit_base[d] = select(0u, temp[d - 1u], d > 0u);
}`,ui=32,Pt=new ArrayBuffer(ui),at={canvas_size:new Uint32Array(Pt,0,2),max_sh_deg:new Uint32Array(Pt,8,1),cur_sh_deg:new Uint32Array(Pt,12,1),gaussian_scaling:new Float32Array(Pt,16,1),kernel_size:new Float32Array(Pt,20,1),mip_spatting:new Uint32Array(Pt,24,1),walltime:new Float32Array(Pt,28,1)};function oi(d){at.canvas_size[0]=d.width>>>0,at.canvas_size[1]=d.height>>>0,at.max_sh_deg[0]=d.max_sh_deg>>>0,at.cur_sh_deg[0]=(d.cur_sh_deg??d.max_sh_deg)>>>0,at.gaussian_scaling[0]=d.gaussian_scaling??1,at.kernel_size[0]=d.kernel_size??.3,at.mip_spatting[0]=(typeof d.mip_spatting=="boolean"?d.mip_spatting?1:0:d.mip_spatting??0)>>>0,at.walltime[0]=d.walltime??0}function En(d,f){d.queue.writeBuffer(f,0,Pt)}function Mn(d,f,y){y&&d&&f&&En(d,f)}function Ol(d,f,y,G=!0){at.cur_sh_deg[0]=d>>>0,Mn(f??null,y??null,G)}function Ll(d,f,y,G=!0){at.gaussian_scaling[0]=d,Mn(f??null,y??null,G)}function zl(d,f,y,G=!0){at.mip_spatting[0]=d?1:0,Mn(f??null,y??null,G)}function ii(d,f,y,G=!0){at.kernel_size[0]=d,Mn(f??null,y??null,G)}const Vl=256,Fl=ui,Nl=8,Wl=12,ci=8,ft=1<<ci,Dt=256,ai=32/ci;function Us(d,f){return{sort_indices_buffer:f.createBuffer({label:"ping-pong payload (indices)",size:d*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:f.createBuffer({label:"ping-pong keys (depths)",size:d*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function ql(d,f){const y=d.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),G=d.createPipelineLayout({bindGroupLayouts:[y]}),I=C=>d.createComputePipeline({layout:G,compute:{module:f,entryPoint:C,constants:{WG_SIZE:Dt}}});return{l0TileScan:I("prefix_l0_tile_scan"),l1TileScanOnL0:I("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:I("prefix_scan_l1_sums"),addL1ToL0:I("prefix_add_l1_to_l0_offsets"),addL0ToElems:I("prefix_add_l0_to_elements"),computeDigitBase:I("compute_digit_base"),prefixBindGroupLayout:y}}function Zl(d,f,y){const G=d.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),I=d.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),C=d.createPipelineLayout({bindGroupLayouts:[G]}),V=d.createPipelineLayout({bindGroupLayouts:[I]}),W=[];for(let M=0;M<ai;M++){const F={PASS_ID:M,RS_RADIX_LOG2:ci,RS_RADIX_SIZE:ft};W.push({localHistogram:d.createComputePipeline({layout:C,compute:{module:f,entryPoint:"local_histogram_pass",constants:F}}),scatterElements:d.createComputePipeline({layout:V,compute:{module:y,entryPoint:"scatter_elements",constants:F}})})}return{passes:W,localHistogramBindGroupLayout:G,scatterBindGroupLayout:I}}function $l(d){const f=d.createShaderModule({label:"local histogram",code:Al}),y=d.createShaderModule({label:"scatter",code:Rl}),G=d.createShaderModule({label:"blelloch prefix",code:Tl}),I=ql(d,G),C=Zl(d,f,y);return{localHistogramBindGroupLayout:C.localHistogramBindGroupLayout,scatterBindGroupLayout:C.scatterBindGroupLayout,passes:C.passes,hierarchicalBlelloch:I}}class jl{constructor(f,y,G,I,C){R(this,"device");R(this,"pc");R(this,"presentationFormat");R(this,"camera_buffer");R(this,"render_settings_buffer");R(this,"draw_indirect_buffer");R(this,"splat_2d_buffer");R(this,"querySet");R(this,"resolveBuffer");R(this,"resultBuffer");R(this,"queriesPerFrame",Nl);R(this,"queryCapacityFrames",200);R(this,"sort_prefixBindGroup");R(this,"sort_pipelines");R(this,"sort_localHistogramBindGroups");R(this,"sort_scatterBindGroups");R(this,"lastFrame",0);R(this,"frameCount",0);R(this,"preprocessPipeline");R(this,"cullPipeline");R(this,"renderPipeline");R(this,"indirectPipeline");R(this,"sort_info_buffer");R(this,"sort_ping_pong");R(this,"crsBg");R(this,"gsBg");R(this,"cullBg2");R(this,"preprocessBg1");R(this,"renderSplatsBindGroup");R(this,"indirectBindGroup");R(this,"sh_color_rgba_buffer");R(this,"sh_solvers_buffer");R(this,"showPerfDialogNext",!1);R(this,"requestReorderNextFrame",!1);R(this,"reorderInFlight",!1);R(this,"downloadOnceNextRead",!1);R(this,"downloadOnceFileName","fps_metrics");R(this,"allFrameTimes",[]);const V=C.includes("shader-f16"),W=C.includes("timestamp-query");V&&Ve("🚀 using shader-f16"),W&&Ve("⏰ using timestamp-query"),this.pc=f,this.device=y,this.presentationFormat=G,this.camera_buffer=I,y.addEventListener("uncapturederror",Xe=>{console.error("A WebGPU error was not captured:",Xe.error)}),this._setupTimestampQueries(),this._setupBuffers(f.sh_degree);const M=(Math.floor((this.pc.num_points+Dt-1)/Dt)+1)*Dt,F=Math.ceil(M/Dt);console.log(`keys count adjusted: ${M}`),console.log(`key size: ${this.pc.num_points}`);const D=y.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=$l(y);const O=[Us(M,y),Us(M,y)],ee=y.createBuffer({label:"workgroup histograms",size:F*ft*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),ne=y.createBuffer({label:"workgroup prefixes",size:F*ft*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),H=y.createBuffer({label:"digit base",size:ft*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),N=Math.ceil(F/Dt),Y=Math.ceil(N/Dt),X=y.createBuffer({label:"prefix l0 sums",size:N*ft*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),z=y.createBuffer({label:"prefix l0 offsets",size:N*ft*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Q=y.createBuffer({label:"prefix l1 sums",size:Y*ft*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),T=y.createBuffer({label:"prefix l1 offsets",size:Y*ft*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=y.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:D}},{binding:1,resource:{buffer:ee}},{binding:2,resource:{buffer:ne}},{binding:3,resource:{buffer:X}},{binding:4,resource:{buffer:z}},{binding:5,resource:{buffer:Q}},{binding:6,resource:{buffer:T}},{binding:7,resource:{buffer:H}}]}),this.sort_localHistogramBindGroups=[y.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:D}},{binding:1,resource:{buffer:O[0].sort_depths_buffer}},{binding:2,resource:{buffer:ee}}]}),y.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:D}},{binding:1,resource:{buffer:O[1].sort_depths_buffer}},{binding:2,resource:{buffer:ee}}]})],this.sort_scatterBindGroups=[y.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:D}},{binding:1,resource:{buffer:H}},{binding:2,resource:{buffer:O[0].sort_depths_buffer}},{binding:3,resource:{buffer:O[1].sort_depths_buffer}},{binding:4,resource:{buffer:O[0].sort_indices_buffer}},{binding:5,resource:{buffer:O[1].sort_indices_buffer}},{binding:6,resource:{buffer:ne}}]}),y.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:D}},{binding:1,resource:{buffer:H}},{binding:2,resource:{buffer:O[1].sort_depths_buffer}},{binding:3,resource:{buffer:O[0].sort_depths_buffer}},{binding:4,resource:{buffer:O[1].sort_indices_buffer}},{binding:5,resource:{buffer:O[0].sort_indices_buffer}},{binding:6,resource:{buffer:ne}}]})],this.sort_info_buffer=D,this.sort_ping_pong=O;const J=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),ge=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ue=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),ve=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:J,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"gaussians + splats",layout:ge,entries:[{binding:0,resource:{buffer:this.pc.gaussian_3d_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:ue,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg2",layout:ve,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.pc.sh_buffer}},{binding:2,resource:{buffer:this.sh_solvers_buffer}},{binding:3,resource:{buffer:this.sh_color_rgba_buffer}}]});const Ge=this.device.createShaderModule({code:Dl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:Ge,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]});const be=this.device.createShaderModule({code:Ul});this.cullPipeline=this.device.createComputePipeline({label:"preprocess_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[J,ge,ue]}),compute:{module:be,entryPoint:"preprocess_cull"}});const Te=this.device.createShaderModule({code:V?Zs:Il});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess",layout:this.device.createPipelineLayout({bindGroupLayouts:[J,ve]}),compute:{module:Te,entryPoint:"preprocess"}});const Ee=this.device.createShaderModule({code:V?Ml:Gl});this.renderPipeline=this.device.createRenderPipeline({label:"render",layout:"auto",vertex:{module:Ee,entryPoint:"vs_main"},fragment:{module:Ee,entryPoint:"fs_main",targets:[{format:this.presentationFormat,blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"gaussian splats rendering",layout:this.renderPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sh_color_rgba_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}}]})}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}async debugReadSortedIndices(f=30){const y=Math.max(0,Math.min(f,this.pc.num_points)),G=y*Uint32Array.BYTES_PER_ELEMENT;if(G===0){console.log("[DEBUG] No indices to read.");return}const I=this.device.createBuffer({size:G,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),C=this.device.createCommandEncoder();C.copyBufferToBuffer(this.sort_ping_pong[0].sort_indices_buffer,0,I,0,G),this.device.queue.submit([C.finish()]),await I.mapAsync(GPUMapMode.READ);const V=new Uint32Array(I.getMappedRange());console.log("[DEBUG] Sorted indices (first",y,"):",Array.from(V)),I.unmap()}frame(f,y){const I=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame;{f.clearBuffer(this.sort_info_buffer,0,4);const C=f.beginComputePass({label:"cull",timestampWrites:{querySet:this.querySet,beginningOfPassWriteIndex:I+0,endOfPassWriteIndex:I+1}});C.setPipeline(this.cullPipeline),C.setBindGroup(0,this.crsBg),C.setBindGroup(1,this.gsBg),C.setBindGroup(2,this.cullBg2);const V=Math.ceil(this.pc.num_points/Vl);C.dispatchWorkgroups(V,1,1),C.end()}{const C=f.beginComputePass({label:"calculate indirect dispatch"});C.setPipeline(this.indirectPipeline),C.setBindGroup(0,this.indirectBindGroup),C.dispatchWorkgroups(1,1,1),C.end()}{const C=f.beginComputePass({label:"preprocess",timestampWrites:{querySet:this.querySet,beginningOfPassWriteIndex:I+2,endOfPassWriteIndex:I+3}});C.setPipeline(this.preprocessPipeline),C.setBindGroup(0,this.crsBg),C.setBindGroup(1,this.preprocessBg1),C.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),C.end()}for(let C=0;C<ai;C++){const V=C&1,W=this.sort_pipelines.passes[C],M=this.sort_localHistogramBindGroups[V],F=this.sort_scatterBindGroups[V];{const D=f.beginComputePass({label:`upsweep_round${C}`,timestampWrites:C==0?{querySet:this.querySet,beginningOfPassWriteIndex:I+4}:void 0});D.setPipeline(W.localHistogram),D.setBindGroup(0,M),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),D.end()}{const D=f.beginComputePass({label:`prefix_round${C} - l0TileScan`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),D.end()}{const D=f.beginComputePass({label:`prefix_round${C} - l1TileScanOnL0`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),D.end()}{const D=f.beginComputePass({label:`prefix_round${C} - l1ScanSums`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroups(1,ft,1),D.end()}{const D=f.beginComputePass({label:`prefix_round${C} - addL1ToL0`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),D.end()}{const D=f.beginComputePass({label:`prefix_round${C} - addL0ToElems`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),D.end()}{const D=f.beginComputePass({label:`prefix_round${C} - computeDigitBase`});D.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),D.setBindGroup(0,this.sort_prefixBindGroup),D.dispatchWorkgroups(1,1,1),D.end()}{const D=f.beginComputePass({label:`scatter_round${C}`,timestampWrites:C==ai-1?{querySet:this.querySet,endOfPassWriteIndex:I+5}:void 0});D.setPipeline(W.scatterElements),D.setBindGroup(0,F),D.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),D.end()}}{const C=f.beginRenderPass({label:"render",colorAttachments:[{view:y,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],timestampWrites:{querySet:this.querySet,beginningOfPassWriteIndex:I+6,endOfPassWriteIndex:I+7}});C.setPipeline(this.renderPipeline),C.setBindGroup(0,this.renderSplatsBindGroup),C.drawIndirect(this.draw_indirect_buffer,0),C.end()}this.frameCount++}async readPerfMetrics(){const f=this.device.createCommandEncoder({label:"timestamp resolve encoder"});f.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),f.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8),this.device.queue.submit([f.finish()]),await this.device.queue.onSubmittedWorkDone();const y=[["Total",7,0],["Culling",1,0],["Preprocess",3,2],["Sort",5,4],["Render",7,6]];if(this.frameCount<=0)return;await this.resultBuffer.mapAsync(GPUMapMode.READ);const G=new BigInt64Array(this.resultBuffer.getMappedRange()),I=Math.min(this.frameCount,this.queryCapacityFrames),C=(this.lastFrame+this.frameCount-I)%this.queryCapacityFrames,V=Array.from({length:y.length},()=>[]);let W=0;for(let H=0;H<I;H++){const N=(C+H)%this.queryCapacityFrames,Y=N*this.queriesPerFrame;let X=!0;for(let z=0;z<y.length;z++){const[Q,T,J]=y[z];if(G[Y+J]===0n||G[Y+T]===0n||G[Y+T]<G[Y+J]){X=!1;break}}if(!X){N%60===0&&console.debug("[timestamp] frame slot",N,"contains unwritten (0) timestamps, skipped in stats");continue}W++;for(let z=0;z<y.length;z++){const[Q,T,J]=y[z],ge=Number(G[Y+J]),ue=Number(G[Y+T]);V[z].push((ue-ge)/1e6)}}if(W===0){this.resultBuffer.unmap(),console.warn("[timestamp] No complete frames available (some timestamps are 0). It may be the first frame or the GPU is still filling.");return}this.allFrameTimes.push(...V[0]);const M=[];let F=0,D=0,O=0;for(let H=0;H<y.length;H++){const N=y[H][0],Y=V[H];let X=0;if(N==="Total"){const z=this.allFrameTimes;X=z.reduce((J,ge)=>J+ge,0)/z.length;const Q=[...z].sort((J,ge)=>J-ge);F=Q[Math.floor(Q.length*.99)]||0;const T=z.reduce((J,ge)=>J+Math.pow(ge-X,2),0)/z.length;D=Math.sqrt(T),O=X}else X=Y.reduce((z,Q)=>z+Q,0)/Y.length;M.push([N,X])}this.lastFrame+=this.frameCount,this.frameCount=0;const ne=`[TIMESTAMP - ${this.constructor.name}]
`+M.map(([H,N])=>`${H}: ${N.toFixed(3)}ms`).join(`
`)+`
Total P99: ${F.toFixed(3)}ms
Total STD: ${D.toFixed(3)}ms
Total AVG: ${O.toFixed(3)}ms
Stats computed over ${this.allFrameTimes.length} frames (cumulative)
${this.lastFrame} frames rendered since start`;if(console.log(ne),console.log("All Frame Times (Total, ms):",JSON.stringify(this.allFrameTimes)),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const H=`Stage,ms
`,N=M.map(([z,Q])=>`${z},${Q.toFixed(3)}`).join(`
`),Y="data:text/csv;charset=utf-8,"+encodeURIComponent(H+N),X=document.createElement("a");X.href=Y,X.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(X),X.click(),X.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(ne)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const f=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:f,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:f,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(f){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:Fl,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const y=document.querySelector("canvas"),G=y?y.width:1,I=y?y.height:1;oi({width:G,height:I,max_sh_deg:f}),En(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"2d gaussians buffer",size:this.pc.num_points*Wl,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.STORAGE}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0]));const C=12;this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:this.pc.num_points*C,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.sh_color_rgba_buffer=this.device.createBuffer({label:"sh_color_rgba",size:this.pc.num_points*Uint32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(f){if(f&&f.trim().length>0){const y=f.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=y.length>0?y:this.downloadOnceFileName}else{const y=new Date,G=`${y.getFullYear()}${String(y.getMonth()+1).padStart(2,"0")}${String(y.getDate()).padStart(2,"0")}_${String(y.getHours()).padStart(2,"0")}${String(y.getMinutes()).padStart(2,"0")}${String(y.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${G}`}this.downloadOnceNextRead=!0}requestReorder(){this.requestReorderNextFrame=!0}async maybeReorderAfterSubmit(){if(!(!this.requestReorderNextFrame||this.reorderInFlight)){this.reorderInFlight=!0,this.requestReorderNextFrame=!1;try{const f=this.pc.num_points;if(!f)return;Ve(`Reordering ${f} splats...`);const y=16*4,G=this.device.createBuffer({size:y,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),I=this.device.createBuffer({size:f*4,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),C=12,V=this.device.createBuffer({size:f*C,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),W=this.device.createCommandEncoder();W.copyBufferToBuffer(this.sort_info_buffer,0,G,0,y),W.copyBufferToBuffer(this.sort_ping_pong[0].sort_indices_buffer,0,I,0,f*4),W.copyBufferToBuffer(this.sh_solvers_buffer,0,V,0,f*C),this.device.queue.submit([W.finish()]),await this.device.queue.onSubmittedWorkDone(),await Promise.all([G.mapAsync(GPUMapMode.READ),I.mapAsync(GPUMapMode.READ),V.mapAsync(GPUMapMode.READ)]);const M=new Uint32Array(G.getMappedRange()),F=Math.min(M[0]??0,f),D=new Uint32Array(I.getMappedRange(),0,F),O=new DataView(V.getMappedRange()),ee=new Uint32Array(F);for(let T=0;T<F;T++){const J=D[T]>>>0,ge=O.getUint32(J*C+8,!0);ee[T]=ge>>>0}const ne=new Uint8Array(f);for(let T=0;T<F;T++)ne[ee[T]]=1;const H=new Uint32Array(f);for(let T=0;T<F;T++)H[T]=ee[T];let N=F;for(let T=0;T<f;T++)ne[T]===0&&(H[N++]=T);const Y=this.pc.gs_stride,X=this.pc.sh_stride,z=new Float16Array($t(f*Y)),Q=new Float16Array($t(f*X));for(let T=0;T<f;T++){const J=H[T]>>>0;z.set(this.pc.gaussian_cpu.subarray(J*Y,(J+1)*Y),T*Y),Q.set(this.pc.sh_cpu.subarray(J*X,(J+1)*X),T*X)}this.pc.gaussian_cpu=z,this.pc.sh_cpu=Q,this.device.queue.writeBuffer(this.pc.gaussian_3d_buffer,0,new Uint16Array(z.buffer)),this.device.queue.writeBuffer(this.pc.sh_buffer,0,new Uint16Array(Q.buffer)),G.unmap(),I.unmap(),V.unmap(),G.destroy(),I.destroy(),V.destroy(),Ve(`Reordered ${f} splats, moved ${F} alive splats to the front.`)}catch(f){console.warn("[reorder] failed:",f)}finally{this.reorderInFlight=!1}}}}const Hl=`const CUTOFF = log(255.);

struct Splat {
    // 4x f16 packed as u32
    // vec of the quad
    v_0: u32,
    v_1: u32,
    // 2x f16 packed as u32
    // center of the quad
    pos: u32,
};

struct RenderSettings {
    canvas_size: vec2<u32>, // width, height
    max_sh_deg: u32,
    cur_sh_deg: u32,
    gaussian_scaling: f32,
    kernel_size: f32,
    mip_spatting: u32,
    walltime: f32,
};

struct GeneralInfo {
    keys_size: u32,  // Total number of keys (for context)
    dispatch_x: u32,  // Number of workgroups along x for histogram source
    dispatch_y: u32,  // (digits) normally RS_RADIX_SIZE or batched digits
    dispatch_z: u32,
    l0_x: u32,  // Mirrors grid dims for L0 (informational)
    l0_y: u32,
    l0_z: u32,
    l0_t: u32,  // Number of L0 tiles per digit
    l1_x: u32,  // Mirrors grid dims for L1 (informational)
    l1_y: u32,
    l1_z: u32,
    l1_t: u32,  // Number of L1 tiles over L0 tiles per digit
};


// Group 0: static (not re-created on resize) now also holds tile_list (persistent)
@group(0) @binding(0) var<uniform> render_settings: RenderSettings;
@group(0) @binding(1) var<storage, read> sort_infos: GeneralInfo;          // provides keys_size
@group(0) @binding(2) var<storage, read> points_2d : array<Splat>;
@group(0) @binding(3) var<storage, read> color : array<u32>;
@group(0) @binding(4) var<storage, read> depth : array<u32>;            // (optional / reserved)
@group(0) @binding(5) var<storage, read> tile_list    : array<u32>;        // flattened per-tile sorted indices (persistent)

// Group 1: resize-only tile_offsets
@group(1) @binding(0) var<storage, read> tile_offsets : array<u32>;        // length = numTiles+1 (recreated on resize)

// Group 2: resize-only texture target
@group(2) @binding(0) var out_texture: texture_storage_2d<rgba8unorm, write>;

// TODO: 
fn fast_inverse_2x2(T: mat2x2<f32>) -> mat2x2<f32> {
    let a = T[0][0];
    let b = T[0][1];
    let c = T[1][0];
    let d = T[1][1];
    let det = a * d - b * c;
    let inv_det = 1.0 / det;
    return mat2x2<f32>(
        vec2<f32>(d, -b) * inv_det,
        vec2<f32>(-c, a) * inv_det
    );
}

const TILE_SIZE: u32 = 16u;   // must match binning pass

@compute @workgroup_size(TILE_SIZE, TILE_SIZE, 1)
fn tile_based_main(
    @builtin(global_invocation_id)    global_id: vec3<u32>,
    @builtin(workgroup_id)            wid: vec3<u32>,
    @builtin(num_workgroups)          num_wg: vec3<u32>,
    @builtin(local_invocation_index)  local_idx: u32,
) {
    if global_id.x >= render_settings.canvas_size.x || global_id.y >= render_settings.canvas_size.y { return; }
    // let in_bounds = global_id.x < render_settings.canvas_size.x && global_id.y < render_settings.canvas_size.y;

    // Identify tile for this pixel (each workgroup == one tile by construction)
    let tile_id = wid.y * num_wg.x + wid.x;
    let num_tiles = num_wg.x * num_wg.y;
    if tile_id >= num_tiles { return; }

    let start: u32 = tile_offsets[tile_id];
    let end: u32 = tile_offsets[tile_id + 1u];
    // let len: u32 = end - start;
    var accumulate_opacity: f32 = 1.0;
    var final_color = vec3<f32>(0.0, 0.0, 0.0);

    // Direct iteration (may be unsorted)
    let screen_pos = vec2<f32>(global_id.xy) + vec2<f32>(0.5, 0.5);
    let clip_pos = screen_pos / vec2<f32>(render_settings.canvas_size) * 2.0 - 1.0;
    for (var i: u32 = start; i < end; i++) {
        let idx = tile_list[i];
        let p = points_2d[idx];
        let color = unpack4x8unorm(color[idx]);

        let center = unpack2x16float(p.pos);
        let T = mat2x2<f32>(unpack2x16float(p.v_0), unpack2x16float(p.v_1));
        let inv_T = fast_inverse_2x2(T);
        let diff = clip_pos - center;
        let d = inv_T * diff / 2.0;
        let power = dot(d, d);
        if power > CUTOFF { continue; }

        let opacity = min(0.999, color.a * exp(-power));
        if opacity < 0.001 { continue; }

        final_color += vec3<f32>(color.rgb) * opacity * accumulate_opacity;
        accumulate_opacity *= 1.0 - opacity;
        if accumulate_opacity < 0.001 {
            break;
        }
    }

    textureStore(out_texture, vec2<u32>(global_id.x, render_settings.canvas_size.y - global_id.y - 1u), vec4<f32>(final_color, 1.0));
}`,Yl=`@group(0) @binding(0) var our_texture: texture_2d<f32>;

@vertex
fn vs_main(@builtin(vertex_index) in_vertex_index: u32) -> @builtin(position) vec4<f32> {
    // A single triangle to cover the screen
    const pos = array(
        vec2<f32>(-1.0, -1.0), 
        vec2<f32>(3.0, -1.0), 
        vec2<f32>(-1.0, 3.0)
    );
    return vec4<f32>(pos[in_vertex_index], 0.0, 1.0);
}

@fragment
fn fs_main(@builtin(position) frag_coord: vec4<f32>) -> @location(0) vec4<f32> {
    let dims = textureDimensions(our_texture);
    let tex_coords = vec2<u32>(floor(frag_coord.xy));
    // Clamp coordinates to be safe
    let clamped_coords = clamp(tex_coords, vec2<u32>(0,0), dims - vec2<u32>(1,1));
    return textureLoad(our_texture, vec2<u32>(clamped_coords.x, dims.y - clamped_coords.y), 0);
}`,Kl=`const WG_SIZE = 256u;
const TILE_SIZE = 16u;
override RS_RADIX_LOG2 = 8u;  // 2 bit radices
override RS_RADIX_SIZE = 1u << RS_RADIX_LOG2;    // 4 entries into the radix table

struct GeneralInfo{
  keys_size : u32, preprocess_dispatch_x: u32, preprocess_dispatch_y: u32, preprocess_dispatch_z: u32,
  total_tile_depth_pair: u32, sort_dispatch_x: u32, sort_dispatch_y: u32, sort_dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32, // t0
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32, // t1
};


// Updated compact RenderSettings layout (32 bytes)
struct RenderSettings {
    canvas_size: vec2<u32>, // width, height
    max_sh_deg: u32,
    cur_sh_deg: u32,
    gaussian_scaling: f32,
    kernel_size: f32,
    mip_spatting: u32,
    walltime: f32,
};

@group(0) @binding(0) var<storage, read_write> infos  : GeneralInfo;
@group(0) @binding(1) var<uniform>    render_settings : RenderSettings;

@group(1) @binding(0) var<storage, read> tile_counts : array<u32>; // length = numTiles
@group(1) @binding(1) var<storage, read_write> tile_offsets : array<u32>; // length = numTiles + 1

@compute @workgroup_size(1)
fn write_dispatch_triples(
    @builtin(global_invocation_id) gid: vec3<u32>,
    // @builtin(workgroup_id)        wid: vec3<u32>,
    // @builtin(local_invocation_id) lid: vec3<u32>
) {
    if (gid.x == 0u) {
        // Histogram/Scatter dispatch X (elements divided by WG_SIZE)
        infos.preprocess_dispatch_x = (infos.keys_size + WG_SIZE - 1u) / WG_SIZE;
        infos.preprocess_dispatch_y = 1u;
        infos.preprocess_dispatch_z = 1u;

        infos.sort_dispatch_x = (infos.total_tile_depth_pair + WG_SIZE - 1u) / WG_SIZE;
        infos.sort_dispatch_y = 1u;
        infos.sort_dispatch_z = 1u;

        // Two-level tile counts
        let t0 = (infos.sort_dispatch_x + WG_SIZE - 1u) / WG_SIZE;
        let t1 = (t0 + WG_SIZE - 1u) / WG_SIZE;

        // Triples for L0/L1 plus t0/t1
        infos.l0_x = t0; infos.l0_y = RS_RADIX_SIZE; infos.l0_z = 1u; infos.l0_t = t0;
        infos.l1_x = t1; infos.l1_y = RS_RADIX_SIZE; infos.l1_z = 1u; infos.l1_t = t1;

        let tiles_xy = (render_settings.canvas_size + TILE_SIZE - 1u) / TILE_SIZE;
        let num_tiles = tiles_xy.x * tiles_xy.y;
        var sum: u32 = 0u;
        for (var t: u32 = 0u; t < num_tiles; t++) {
            let c = tile_counts[t];
            tile_offsets[t] = sum; // exclusive
            sum += c;
        }
        // store total at element num_tiles
        tile_offsets[num_tiles] = sum;
    }
}`,Xl=`const WG_SIZE = 256u;
const TILE_SIZE = 16u;
const CUTOFF = log(255.);

// Culling & index compaction pass extracted from preprocess.wgsl
// This file only contains the minimal definitions required for the cull pass.

struct GeneralInfo{
  keys_size : atomic<u32>, preprocess_dispatch_x: u32, preprocess_dispatch_y: u32, preprocess_dispatch_z: u32,
  total_tile_depth_pair: atomic<u32>, sort_dispatch_x: u32, sort_dispatch_y: u32, sort_dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32, // t0
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32, // t1
};

struct CameraUniforms {
    view: mat4x4<f32>,
    view_inv: mat4x4<f32>,
    proj: mat4x4<f32>,
    proj_inv: mat4x4<f32>,
    viewport: vec2<f32>,
    focal: vec2<f32>
};

struct Gaussian {
    // // (3+1)x f16 packed as u32
    // pos_opacity: array<u32,2>,
    // // 6x f16 sparse cov matrix
    // cov: array<u32,3>
    xy: u32,
    zw: u32,
    cov01: u32,
    cov23: u32,
    cov45: u32,
};

struct Splat {
    // 4x f16 packed as u32
    // vec of the quad
    v_0: u32,
    v_1: u32,
    // 2x f16 packed as u32
    // center of the quad
    pos: u32,
};

// Updated compact RenderSettings layout (32 bytes)
struct RenderSettings {
    canvas_size: vec2<u32>, // width, height
    max_sh_deg: u32,
    cur_sh_deg: u32,
    gaussian_scaling: f32,
    kernel_size: f32,
    mip_spatting: u32,
    walltime: f32,
}

struct SHSolver {
    // dir_opacity: vec4<f16>,
    dir_xy: u32,
    dir_z_opacity: u32,
    idx: u32,
}

@group(0) @binding(0) var<uniform> camera: CameraUniforms;
@group(0) @binding(1) var<uniform> render_settings: RenderSettings;

// Group 1: screen-size independent (persistent) GPU data
@group(1) @binding(0) var<storage, read> gaussians : array<Gaussian>;
@group(1) @binding(1) var<storage, read_write> points_2d : array<Splat>;
@group(1) @binding(2) var<storage, read_write> sort_pairs : array<vec2<u32>>; // .x tile_id, .y depth bits
@group(1) @binding(3) var<storage, read_write> sort_infos : GeneralInfo;      // atomic counters & dispatch info
@group(1) @binding(4) var<storage, read_write> sh_solvers : array<SHSolver>;  // compact alive records
@group(1) @binding(5) var<storage, read_write> tile_list : array<u32>;        // original per-tile indices (paired with sort_pairs)

// Group 2: screen-size dependent atomics (recreated on resize)
@group(2) @binding(0) var<storage, read_write> tile_counts : array<atomic<u32>>;


var<workgroup> scan0: array<u32, WG_SIZE>; // for prefix sum
var<workgroup> scan1: array<u32, WG_SIZE>; // for prefix sum
var<workgroup> group_base: u32;
// PASS 1: culling & index compaction
@compute @workgroup_size(WG_SIZE)
fn preprocess_cull(@builtin(global_invocation_id) gid: vec3<u32>, @builtin(local_invocation_id) lid: vec3<u32>) {
    var alive = 0u;
    var depth: f32;
    var v_0: vec2<f32>;
    var v_1: vec2<f32>;
    var v_center: vec2<f32>;
    var opacity: f32;
    var dir: vec3<f32>;
    var radius_scale: f32;

    let idx = gid.x;
    if idx < arrayLength(&gaussians) {
        let vertex = gaussians[idx];
        let xyzw = vec4<f32>(unpack2x16float(vertex.xy), unpack2x16float(vertex.zw));
        let xyz = xyzw.xyz;
        opacity = xyzw.w;
        let cov01 = unpack2x16float(vertex.cov01);
        let cov23 = unpack2x16float(vertex.cov23);
        let cov45 = unpack2x16float(vertex.cov45);

        var camspace = camera.view * vec4<f32>(xyz, 1.0);
        let pos2d = camera.proj * camspace;
    
        let bounds = 1.2 * pos2d.w;
        let z = pos2d.z / pos2d.w;
        // if z > 0. && z < 1. && pos2d.x >= -bounds && pos2d.x <= bounds && pos2d.y >= -bounds && pos2d.y <= bounds {
        // if pos2d.w > 0. && z > 0. && z < 1. {
        if z > 0. && z < 1. && pos2d.x >= -bounds && pos2d.x <= bounds && pos2d.y >= -bounds && pos2d.y <= bounds {
            let focal: vec2<f32> = camera.focal;
            let viewport: vec2<f32> = camera.viewport;
            let scaling: f32 = render_settings.gaussian_scaling;

            let Vrk = mat3x3<f32>(
                cov01.x, cov01.y, cov23.x,
                cov01.y, cov23.y, cov45.x,
                cov23.x, cov45.x, cov45.y,
            ) * scaling * scaling;
            let J: mat3x3<f32> = mat3x3<f32>(
                focal.x / camspace.z,
                0.0,
                -(focal.x * camspace.x) / (camspace.z * camspace.z),
                0.0,
                -focal.y / camspace.z,
                (focal.y * camspace.y) / (camspace.z * camspace.z),
                0.0,
                0.0,
                0.0
            );

            let W = transpose(mat3x3<f32>(camera.view[0].xyz, camera.view[1].xyz, camera.view[2].xyz));
            let T = W * J; // DEBUG: extremely large values observed!
            let cov = transpose(T) * Vrk * T;

            // let kernel_size = KERNEL_SIZE;
            let kernel_size: f32 = render_settings.kernel_size;
            if bool(render_settings.mip_spatting) {
                // according to Mip-Splatting by Yu et al. 2023
                let det_0: f32 = max(1e-6, cov[0][0] * cov[1][1] - cov[0][1] * cov[0][1]);
                let det_1: f32 = max(1e-6, (cov[0][0] + kernel_size) * (cov[1][1] + kernel_size) - cov[0][1] * cov[0][1]);
                var coef: f32 = sqrt(det_0 / (det_1 + 1e-6) + 1e-6);

                if (det_0 <= 1e-6 || det_1 <= 1e-6) {
                    coef = 0.0;
                }
                opacity *= coef;
            }
            
            if opacity > 1.0 / 255.0 {
                opacity = min(opacity, 1.0);

                let diagonal1 = cov[0][0] + kernel_size;
                let offDiagonal = cov[0][1];
                let diagonal2 = cov[1][1] + kernel_size;

                let mid = 0.5 * (diagonal1 + diagonal2);
                let radius = length(vec2<f32>((diagonal1 - diagonal2) / 2.0, offDiagonal));
                // eigenvalues of the 2D screen space splat
                let lambda1 = mid + radius;
                let lambda2 = max(mid - radius, 0.1);

                let diagonalVector = normalize(vec2<f32>(offDiagonal, lambda1 - diagonal1));
                
                // scaled eigenvectors in screen space 
                v_0 = sqrt(2.0 * lambda1) * diagonalVector / viewport;
                v_1 = sqrt(2.0 * lambda2) * vec2<f32>(diagonalVector.y, -diagonalVector.x) / viewport;
                v_center = pos2d.xy / pos2d.w;

                radius_scale = sqrt(log(255.0 * opacity));
                // let extent = sqrt(v_0 * v_0 + v_1 * v_1) * radius_scale * 2.0;
                // let extent = sqrt(v_0 * v_0 + v_1 * v_1) * CUTOFF * 2.0;
                let extent: vec2<f32> = (abs(v_0) + abs(v_1)) * radius_scale * 2.0;

                let min_pos = v_center - extent;
                let max_pos = v_center + extent;
                if max_pos.x > -1.0 && max_pos.y > -1.0 && min_pos.x < 1.0 && min_pos.y < 1.0 {
                    alive = 1u;
                    let camera_pos = vec3<f32>(camera.view_inv[3].xyz);
                    dir = normalize(xyz - camera_pos);
                    let zfar = -camera.proj[3][2] / (camera.proj[2][2] - 1.0);
                    depth = zfar - pos2d.z;
                }
            }
        }
    }
    scan0[lid.x] = alive;

    workgroupBarrier();

    if (lid.x >= 1u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 1u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 2u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 2u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >= 4u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 4u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 8u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 8u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >= 16u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 16u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 32u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 32u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    if (lid.x >= 64u) { scan1[lid.x] = scan0[lid.x] + scan0[lid.x - 64u]; } else { scan1[lid.x] = scan0[lid.x]; } workgroupBarrier();
    if (lid.x >= 128u) { scan0[lid.x] = scan1[lid.x] + scan1[lid.x - 128u]; } else { scan0[lid.x] = scan1[lid.x]; } workgroupBarrier();
    // var addend256: u32 = 0u; if (lid.x >= 256u) { addend256 = scan[lid.x - 256u]; } workgroupBarrier(); scan[lid.x] = scan[lid.x] + addend256; workgroupBarrier();

    // Only perform one global atomic when this workgroup has survivors; then broadcast the base index
    if (lid.x == 0u) {
        let group_cnt  = scan0[WG_SIZE - 1u];      // Total survivors in this workgroup
        if (group_cnt != 0u) {
            group_base = atomicAdd(&sort_infos.keys_size, group_cnt);
        }
    }
    workgroupBarrier();

    // Write out compacted indices in order
    if (alive == 1u) {
        let store_idx = group_base + scan0[lid.x] - 1u;
        sh_solvers[store_idx] = SHSolver(
            // vec4<f16>(vec3<f16>(dir), f16(opacity)),
            pack2x16float(dir.xy),
            pack2x16float(vec2<f32>(dir.z, opacity)),
            idx,
        );
        points_2d[store_idx] = Splat(
            pack2x16float(v_0),
            pack2x16float(v_1),
            pack2x16float(v_center),
        );

        let e = (abs(v_0) + abs(v_1)) * radius_scale * 2;
        let size_size = vec4<u32>(render_settings.canvas_size, render_settings.canvas_size);
        let pixel_min_max = vec4<u32>((vec4<f32>(v_center - e, v_center + e) * 0.5 + vec4<f32>(0.5, 0.5, 0.5, 0.5)) * vec4<f32>(size_size));
        let bounds_min_max = clamp(pixel_min_max, vec4<u32>(0u), size_size - vec4<u32>(1u));
        let tiles_xy = (render_settings.canvas_size + TILE_SIZE - 1u) / TILE_SIZE;

        let tile_ranges = bounds_min_max / vec4<u32>(TILE_SIZE, TILE_SIZE, TILE_SIZE, TILE_SIZE);
        let nx = tiles_xy.x;
        let tile_depth_pair_count: u32 = (tile_ranges.z - tile_ranges.x + 1u) * (tile_ranges.w - tile_ranges.y + 1u);
        let tile_depth_pair_offset: u32 = atomicAdd(&sort_infos.total_tile_depth_pair, tile_depth_pair_count);
        var tmp_i = 0u;
        for (var ty = tile_ranges.y; ty <= tile_ranges.w; ty++) {
            for (var tx = tile_ranges.x; tx <= tile_ranges.z; tx++) {
                let tile_id = ty * nx + tx;
                let dst_id = tile_depth_pair_offset + tmp_i;
                atomicAdd(&tile_counts[tile_id], 1u);
                sort_pairs[dst_id] = vec2<u32>(tile_id, bitcast<u32>(depth) ^ 0xffffffffu); // bitwise NOT to sort descending by depth
                tile_list[dst_id] = store_idx;
                tmp_i += 1u;
            }
        }
    }
}`,Ql=`// Pair-based radix sort scatter stage.
// Payload comparison objects are pairs_src/pairs_dst (tile_id, depth_bits)
// keys_src/keys_dst store indices (permutation) accompanying the pair ordering.

override PASS_ID = 0u;
const WG_SIZE = 256u;
const WORDS_PER_WG : u32 = WG_SIZE / 32u; // 8 words for 256
override RS_RADIX_LOG2 = 8u;
override RS_RADIX_SIZE = 1u << RS_RADIX_LOG2; // 256
// Keep an override for SORT_COMPONENT (mirrors histogram shader API); not used directly here yet.
override SORT_COMPONENT = 0u;

struct GeneralInfo{
  keys_size : u32, preprocess_dispatch_x: u32, preprocess_dispatch_y: u32, preprocess_dispatch_z: u32,
  total_tile_depth_pair: u32, sort_dispatch_x: u32, sort_dispatch_y: u32, sort_dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32,
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32,
};

@group(0) @binding(0) var<storage, read> infos: GeneralInfo;
@group(0) @binding(1) var<storage, read> digit_base : array<u32>;
// Reordered bindings: pairs first (2,3) then keys (4,5)
@group(0) @binding(2) var<storage, read> pairs_src : array<vec2<u32>>;
@group(0) @binding(3) var<storage, read_write> pairs_dst : array<vec2<u32>>;
@group(0) @binding(4) var<storage, read> tile_list_src : array<u32>;
@group(0) @binding(5) var<storage, read_write> tile_list_dst : array<u32>;
@group(0) @binding(6) var<storage, read> wg_prefixes : array<u32>;

struct BinWords { words: array<atomic<u32>, WORDS_PER_WG + 1> }
var<workgroup> bin_flags : array<BinWords, RS_RADIX_SIZE>;

@compute @workgroup_size(WG_SIZE)
fn scatter_elements(
    @builtin(workgroup_id) wid: vec3<u32>,
    @builtin(local_invocation_id) lid: vec3<u32>
) {
    // zero selected digit row words (manually unrolled 8 words)
    atomicStore(&bin_flags[lid.x].words[0], 0u);
    atomicStore(&bin_flags[lid.x].words[1], 0u);
    atomicStore(&bin_flags[lid.x].words[2], 0u);
    atomicStore(&bin_flags[lid.x].words[3], 0u);
    atomicStore(&bin_flags[lid.x].words[4], 0u);
    atomicStore(&bin_flags[lid.x].words[5], 0u);
    atomicStore(&bin_flags[lid.x].words[6], 0u);
    atomicStore(&bin_flags[lid.x].words[7], 0u);
    workgroupBarrier();

    let pos = wid.x * WG_SIZE + lid.x;
    let n = infos.total_tile_depth_pair;
    var key: u32 = 0u; var digit: u32 = 0u;
    if (pos < n) {
        key = select(pairs_src[pos].x, pairs_src[pos].y, SORT_COMPONENT == 1u);
        digit = extractBits(key, PASS_ID * RS_RADIX_LOG2, RS_RADIX_LOG2);
        let myWord = lid.x >> 5u;
        let myBit = 1u << (lid.x & 31u);
        atomicOr(&bin_flags[digit].words[myWord], myBit);
    }
    workgroupBarrier();

    if (pos < n) {
        let myWord = lid.x >> 5u;
        let myBit = 1u << (lid.x & 31u);
        var rank_in_row: u32 = 0u;
        for (var w = 0u; w < myWord; w++) {
            let bits = atomicLoad(&bin_flags[digit].words[w]);
            rank_in_row += countOneBits(bits);
        }
        let cur = atomicLoad(&bin_flags[digit].words[myWord]);
        rank_in_row += countOneBits(cur & (myBit - 1u));
        let global_pos = digit_base[digit] + wg_prefixes[digit * infos.sort_dispatch_x + wid.x] + rank_in_row;
        tile_list_dst[global_pos] = tile_list_src[pos];
        pairs_dst[global_pos] = pairs_src[pos];
    }
}
`,Jl=`// Pair-based radix sort: local histogram pass using updated GeneralInfo layout.
// Keys: selected field (depth or tile id) provided in keys_src
// Payload: vec2<u32> pairs kept in parallel buffer (scatter stage handles)

override PASS_ID = 0u;  // Pass ID for current radix sort pass
const WG_SIZE = 256u;
override RS_RADIX_LOG2 = 8u;  // 8 bit radices
override RS_RADIX_SIZE = 1u << RS_RADIX_LOG2;    // 256 entries into the radix table

struct GeneralInfo{
  keys_size : u32, preprocess_dispatch_x: u32, preprocess_dispatch_y: u32, preprocess_dispatch_z: u32,
  total_tile_depth_pair: u32, sort_dispatch_x: u32, sort_dispatch_y: u32, sort_dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32,
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32,
};

@group(0) @binding(0) var<storage, read> infos : GeneralInfo;
@group(0) @binding(1) var<storage, read> pairs_src : array<vec2<u32>>; // full pair array (moved to group0/binding2)
@group(0) @binding(2) var<storage, read_write> wg_histograms : array<u32>; // [digit][wg]

// Override: which component of the pair to sort on this phase.
// 0u -> use .x component; 1u -> use .y component.
override SORT_COMPONENT = 0u;

var<workgroup> local_histogram : array<atomic<u32>, RS_RADIX_SIZE>;

@compute @workgroup_size(WG_SIZE)
fn local_histogram_pass(
    @builtin(workgroup_id) wid: vec3<u32>,
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(num_workgroups) wgs: vec3<u32>
) {
    if lid.x < RS_RADIX_SIZE { atomicStore(&local_histogram[lid.x], 0u); }
    workgroupBarrier();

    let pos = wid.x * WG_SIZE + lid.x;
    let n = infos.total_tile_depth_pair;
    if (pos < n) {
        // var key : u32 = p.x; // default
        // if (SORT_COMPONENT == 1u) { key = p.y; }
        let key: u32 = select(pairs_src[pos].x, pairs_src[pos].y, SORT_COMPONENT == 1u);
        let digit = extractBits(key, PASS_ID * RS_RADIX_LOG2, RS_RADIX_LOG2);
        atomicAdd(&local_histogram[digit], 1u);
    }
    workgroupBarrier();

    if lid.x < RS_RADIX_SIZE {
        wg_histograms[wid.x + lid.x * infos.sort_dispatch_x] = atomicLoad(&local_histogram[lid.x]);
    }
}
`,eu=`// ============================================================================
// 2-Level (Nested) Blelloch Prefix Scan Kernels (Radix Sort histogram phase)
// ----------------------------------------------------------------------------
// This file implements a hierarchical exclusive prefix sum over workgroup
// histograms laid out as [digit][workgroup]. We use a tile size equal to the
// workgroup size so each invocation owns exactly one element (no inner loops).
//
// Pipeline of passes for one radix digit plane (repeated for all digits):
//   (A) prefix_l0_tile_scan              : per-element scan in tiles of wg histograms
//       -> produces wg_prefixes (exclusive) + l0_sums (per tile totals)
//   (B) prefix_l1_tile_scan_on_l0_sums   : scan l0_sums producing l0_offsets + l1_sums
//   (C) prefix_scan_l1_sums              : scan l1_sums producing l1_offsets
//   (D) prefix_add_l1_to_l0_offsets      : add l1_offsets back to l0_offsets
//   (E) prefix_add_l0_to_elements        : add final l0_offsets to element prefixes
//   (F) compute_digit_base               : final scan across digits to get digit_base
//
// All scans are Blelloch (exclusive) using a shared workgroup array \`temp\`.
// We intentionally keep loops with compile-time bounds (WG_SIZE) for the
// compiler to unroll/optimize. No algorithmic / memory access pattern change
// has been made—only clarity improvements and richer commentary.
//
// NOTE: RS_RADIX_SIZE == WG_SIZE (256) here, allowing reuse of the same
// Blelloch logic for digit_base without an extra buffer.
// ============================================================================

override WG_SIZE        : u32 = 256u;  // 1 thread ↔ 1 element (no inner striding)
override RS_RADIX_SIZE  : u32 = 256u;  // Number of radix digits processed per pass

// Dispatch / tiling metadata passed from host.
// l0_t: number of L0 tiles      (ceil(dispatch_x / WG_SIZE))
// l1_t: number of L1 tiles over l0_t (ceil(l0_t / WG_SIZE))
struct GeneralInfo{
  keys_size : u32, preprocess_dispatch_x: u32, preprocess_dispatch_y: u32, preprocess_dispatch_z: u32,
  total_tile_depth_pair: u32, sort_dispatch_x: u32, sort_dispatch_y: u32, sort_dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32, // t0
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32, // t1
};

// in/out buffers
@group(0) @binding(0) var<storage, read>        infos         : GeneralInfo;
@group(0) @binding(1) var<storage, read>        wg_histograms : array<u32>; // [digit][wg]
@group(0) @binding(2) var<storage, read_write>  wg_prefixes   : array<u32>; // [digit][wg] (exclusive prefix for each digit)
@group(0) @binding(3) var<storage, read_write>  l0_sums       : array<u32>; // [digit][t0]   per L0 tile total
@group(0) @binding(4) var<storage, read_write>  l0_offsets    : array<u32>; // [digit][t0]   exclusive scan over l0_sums
@group(0) @binding(5) var<storage, read_write>  l1_sums       : array<u32>; // [digit][t1]   per L1 tile total (over l0_sums)
@group(0) @binding(6) var<storage, read_write>  l1_offsets    : array<u32>; // [digit][t1]   exclusive scan over l1_sums
@group(0) @binding(7) var<storage, read_write>  digit_base    : array<u32>; // length RS_RADIX_SIZE exclusive base per digit

fn idx_hist(d: u32, wg: u32) -> u32 { return d * infos.sort_dispatch_x + wg; }
fn idx_l0 (d: u32, t0: u32) -> u32 { return d * infos.l0_t + t0; }
fn idx_l1 (d: u32, t1: u32) -> u32 { return d * infos.l1_t + t1; }
// Shared scratch used by all kernels (size == WG_SIZE). For digit_base the
// size matches RS_RADIX_SIZE.
var<workgroup> temp : array<u32, WG_SIZE>;

// ---------------------------------------------------------------------------
// Reusable Blelloch scan helpers (tile-sized, operating on \`temp\`).
// We split into up-sweep (returning total) and down-sweep (producing exclusive)
// so callers needing the tile total (for hierarchical sums) can read it.
// These operate over the full WG_SIZE; inactive lanes should have been
// initialized with 0 beforehand.
// ---------------------------------------------------------------------------
// NOTE: Manually unrolled for WG_SIZE == 256u (log2=8). If WG_SIZE changes,
// regenerate this sequence (offsets: 1,2,4,8,16,32,64,128).
fn blelloch_up_sweep_tile(tid: u32) -> u32 {
  let ui1 = (tid + 1u) * 2u * 1u - 1u;   if (ui1   < WG_SIZE) { temp[ui1]   += temp[ui1 - 1u]; }     workgroupBarrier();
  let ui2 = (tid + 1u) * 2u * 2u - 1u;   if (ui2   < WG_SIZE) { temp[ui2]   += temp[ui2 - 2u]; }     workgroupBarrier();
  let ui4 = (tid + 1u) * 2u * 4u - 1u;   if (ui4   < WG_SIZE) { temp[ui4]   += temp[ui4 - 4u]; }     workgroupBarrier();
  let ui8 = (tid + 1u) * 2u * 8u - 1u;   if (ui8   < WG_SIZE) { temp[ui8]   += temp[ui8 - 8u]; }     workgroupBarrier();
  let ui16 = (tid + 1u) * 2u * 16u - 1u; if (ui16  < WG_SIZE) { temp[ui16]  += temp[ui16 - 16u]; }   workgroupBarrier();
  let ui32 = (tid + 1u) * 2u * 32u - 1u; if (ui32  < WG_SIZE) { temp[ui32]  += temp[ui32 - 32u]; }   workgroupBarrier();
  let ui64 = (tid + 1u) * 2u * 64u - 1u; if (ui64  < WG_SIZE) { temp[ui64]  += temp[ui64 - 64u]; }   workgroupBarrier();
  let ui128 = (tid + 1u) * 2u * 128u - 1u; if (ui128 < WG_SIZE) { temp[ui128] += temp[ui128 - 128u]; } workgroupBarrier();
  return temp[WG_SIZE - 1u]; // inclusive total
}

fn blelloch_down_sweep_tile_exclusive(tid: u32) {
  if (tid == 0u) { temp[WG_SIZE - 1u] = 0u; }
  workgroupBarrier();
  let di128 = (tid + 1u) * 2u * 128u - 1u; if (di128 < WG_SIZE) { let t = temp[di128 - 128u]; temp[di128 - 128u] = temp[di128]; temp[di128] += t; } workgroupBarrier();
  let di64  = (tid + 1u) * 2u * 64u  - 1u; if (di64  < WG_SIZE) { let t = temp[di64  - 64u];  temp[di64  - 64u]  = temp[di64];  temp[di64]  += t; } workgroupBarrier();
  let di32  = (tid + 1u) * 2u * 32u  - 1u; if (di32  < WG_SIZE) { let t = temp[di32  - 32u];  temp[di32  - 32u]  = temp[di32];  temp[di32]  += t; } workgroupBarrier();
  let di16  = (tid + 1u) * 2u * 16u  - 1u; if (di16  < WG_SIZE) { let t = temp[di16  - 16u];  temp[di16  - 16u]  = temp[di16];  temp[di16]  += t; } workgroupBarrier();
  let di8   = (tid + 1u) * 2u * 8u   - 1u; if (di8   < WG_SIZE) { let t = temp[di8   - 8u];   temp[di8   - 8u]   = temp[di8];   temp[di8]   += t; } workgroupBarrier();
  let di4   = (tid + 1u) * 2u * 4u   - 1u; if (di4   < WG_SIZE) { let t = temp[di4   - 4u];   temp[di4   - 4u]   = temp[di4];   temp[di4]   += t; } workgroupBarrier();
  let di2   = (tid + 1u) * 2u * 2u   - 1u; if (di2   < WG_SIZE) { let t = temp[di2   - 2u];   temp[di2   - 2u]   = temp[di2];   temp[di2]   += t; } workgroupBarrier();
  let di1   = (tid + 1u) * 2u * 1u   - 1u; if (di1   < WG_SIZE) { let t = temp[di1   - 1u];   temp[di1   - 1u]   = temp[di1];   temp[di1]   += t; } workgroupBarrier();
}

// Separate helpers for digit_base scan (RS_RADIX_SIZE may conceptually differ
// though equal here). Kept distinct to avoid introducing an extra branch.
fn blelloch_up_sweep_digits(d: u32) {
  // Unrolled for RS_RADIX_SIZE == 256u
  let ui1 = (d + 1u) * 2u * 1u - 1u;   if (ui1   < RS_RADIX_SIZE) { temp[ui1]   += temp[ui1 - 1u]; }     workgroupBarrier();
  let ui2 = (d + 1u) * 2u * 2u - 1u;   if (ui2   < RS_RADIX_SIZE) { temp[ui2]   += temp[ui2 - 2u]; }     workgroupBarrier();
  let ui4 = (d + 1u) * 2u * 4u - 1u;   if (ui4   < RS_RADIX_SIZE) { temp[ui4]   += temp[ui4 - 4u]; }     workgroupBarrier();
  let ui8 = (d + 1u) * 2u * 8u - 1u;   if (ui8   < RS_RADIX_SIZE) { temp[ui8]   += temp[ui8 - 8u]; }     workgroupBarrier();
  let ui16 = (d + 1u) * 2u * 16u - 1u; if (ui16  < RS_RADIX_SIZE) { temp[ui16]  += temp[ui16 - 16u]; }   workgroupBarrier();
  let ui32 = (d + 1u) * 2u * 32u - 1u; if (ui32  < RS_RADIX_SIZE) { temp[ui32]  += temp[ui32 - 32u]; }   workgroupBarrier();
  let ui64 = (d + 1u) * 2u * 64u - 1u; if (ui64  < RS_RADIX_SIZE) { temp[ui64]  += temp[ui64 - 64u]; }   workgroupBarrier();
  let ui128 = (d + 1u) * 2u * 128u - 1u; if (ui128 < RS_RADIX_SIZE) { temp[ui128] += temp[ui128 - 128u]; } workgroupBarrier();
}

fn blelloch_down_sweep_digits(d: u32) {
  if (d == 0u) { temp[RS_RADIX_SIZE - 1u] = 0u; }
  workgroupBarrier();
  let di128 = (d + 1u) * 2u * 128u - 1u; if (di128 < RS_RADIX_SIZE) { let t = temp[di128 - 128u]; temp[di128 - 128u] = temp[di128]; temp[di128] += t; } workgroupBarrier();
  let di64  = (d + 1u) * 2u * 64u  - 1u; if (di64  < RS_RADIX_SIZE) { let t = temp[di64  - 64u];  temp[di64  - 64u]  = temp[di64];  temp[di64]  += t; } workgroupBarrier();
  let di32  = (d + 1u) * 2u * 32u  - 1u; if (di32  < RS_RADIX_SIZE) { let t = temp[di32  - 32u];  temp[di32  - 32u]  = temp[di32];  temp[di32]  += t; } workgroupBarrier();
  let di16  = (d + 1u) * 2u * 16u  - 1u; if (di16  < RS_RADIX_SIZE) { let t = temp[di16  - 16u];  temp[di16  - 16u]  = temp[di16];  temp[di16]  += t; } workgroupBarrier();
  let di8   = (d + 1u) * 2u * 8u   - 1u; if (di8   < RS_RADIX_SIZE) { let t = temp[di8   - 8u];   temp[di8   - 8u]   = temp[di8];   temp[di8]   += t; } workgroupBarrier();
  let di4   = (d + 1u) * 2u * 4u   - 1u; if (di4   < RS_RADIX_SIZE) { let t = temp[di4   - 4u];   temp[di4   - 4u]   = temp[di4];   temp[di4]   += t; } workgroupBarrier();
  let di2   = (d + 1u) * 2u * 2u   - 1u; if (di2   < RS_RADIX_SIZE) { let t = temp[di2   - 2u];   temp[di2   - 2u]   = temp[di2];   temp[di2]   += t; } workgroupBarrier();
  let di1   = (d + 1u) * 2u * 1u   - 1u; if (di1   < RS_RADIX_SIZE) { let t = temp[di1   - 1u];   temp[di1   - 1u]   = temp[di1];   temp[di1]   += t; } workgroupBarrier();
}

// ---------------------------------------------------------------------------
// (A) L0 pass
// Per-digit tile scan over wg_histograms -> produces:
//   - wg_prefixes (exclusive per element inside each digit plane)
//   - l0_sums     (tile totals for hierarchical accumulation)
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_l0_tile_scan(
  @builtin(workgroup_id)        wid : vec3<u32>,   // x: t0, y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let t0    = wid.x;
  let digit = wid.y;

  let start = t0 * WG_SIZE;
  // Number of active (in-bounds) lanes for this tile along dispatch_x.
  let valid = select(0u, min(WG_SIZE, infos.sort_dispatch_x - start), infos.sort_dispatch_x > start);

  let tid = lid.x; // lane id

  var v : u32 = 0u;
  if (tid < valid) { v = wg_histograms[idx_hist(digit, start + tid)]; }
  temp[tid] = v;
  workgroupBarrier();

  // Blelloch scan over tile
  let total = blelloch_up_sweep_tile(tid);
  blelloch_down_sweep_tile_exclusive(tid);

  if (tid < valid) { wg_prefixes[idx_hist(digit, start + tid)] = temp[tid]; }
  if (tid == 0u)    { l0_sums[idx_l0(digit, t0)] = select(0u, total, valid > 0u); }
}

// ---------------------------------------------------------------------------
// (B) L1 pass over l0_sums
// Scan l0_sums in tiles to produce l0_offsets (exclusive within tile) and
// l1_sums (totals per L1 tile). This is structurally identical to (A) but the
// source array is l0_sums and destination for element-level offsets is l0_offsets.
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_l1_tile_scan_on_l0_sums(
  @builtin(workgroup_id)        wid : vec3<u32>,   // x: t1, y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let t1    = wid.x;
  let digit = wid.y;

  let t0_len = infos.l0_t;
  let start  = t1 * WG_SIZE;
  let valid  = select(0u, min(WG_SIZE, t0_len - start), t0_len > start);

  let tid = lid.x;

  var v : u32 = 0u;
  if (tid < valid) { v = l0_sums[idx_l0(digit, start + tid)]; }
  temp[tid] = v;
  workgroupBarrier();

  let total = blelloch_up_sweep_tile(tid);
  blelloch_down_sweep_tile_exclusive(tid);

  if (tid < valid) { l0_offsets[idx_l0(digit, start + tid)] = temp[tid]; }
  if (tid == 0u)    { l1_sums[idx_l1(digit, t1)] = select(0u, total, valid > 0u); }
}

// ---------------------------------------------------------------------------
// (C) Scan l1_sums -> l1_offsets (single workgroup per digit)
// Assumes infos.l1_t <= WG_SIZE. Add further level if this can be exceeded.
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_scan_l1_sums(
  @builtin(workgroup_id)        wid : vec3<u32>,   // y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let digit = wid.y;
  let T = infos.l1_t;

  let tid = lid.x;

  var v : u32 = 0u;
  if (tid < T) { v = l1_sums[idx_l1(digit, tid)]; }
  temp[tid] = v;
  workgroupBarrier();

  blelloch_up_sweep_tile(tid); // total not needed here
  blelloch_down_sweep_tile_exclusive(tid);
  if (tid < T) { l1_offsets[idx_l1(digit, tid)] = temp[tid]; }
}

// ---------------------------------------------------------------------------
// (D) Add l1_offsets into l0_offsets for each corresponding L0 tile.
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_add_l1_to_l0_offsets(
  @builtin(workgroup_id)        wid : vec3<u32>,   // x: t1, y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let t1    = wid.x;
  let digit = wid.y;

  let t0_len = infos.l0_t;
  let start  = t1 * WG_SIZE;
  let valid  = select(0u, min(WG_SIZE, t0_len - start), t0_len > start);
  let add    = l1_offsets[idx_l1(digit, t1)];

  let tid = lid.x;
  if (tid < valid) {
    let idx = idx_l0(digit, start + tid);
    l0_offsets[idx] += add;
  }
}

// ---------------------------------------------------------------------------
// (E) Add final l0_offsets back to element-level wg_prefixes.
// ---------------------------------------------------------------------------
@compute @workgroup_size(WG_SIZE)
fn prefix_add_l0_to_elements(
  @builtin(workgroup_id)        wid : vec3<u32>,   // x: t0, y: digit
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let t0    = wid.x;
  let digit = wid.y;

  let start = t0 * WG_SIZE;
  let valid = select(0u, min(WG_SIZE, infos.sort_dispatch_x - start), infos.sort_dispatch_x > start);
  let add   = l0_offsets[idx_l0(digit, t0)];

  let tid = lid.x;
  if (tid < valid) {
    let idx = idx_hist(digit, start + tid);
    wg_prefixes[idx] += add;
  }
}

@compute @workgroup_size(WG_SIZE)
fn compute_digit_base(
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let d = lid.x; // digit 0..255

  // Gather total count for digit d into temp[d]
  var tot : u32 = 0u;
  if (infos.sort_dispatch_x > 0u) {
    let last = infos.sort_dispatch_x - 1u;
    let idx  = idx_hist(d, last);
    tot = wg_prefixes[idx] + wg_histograms[idx];
  }
  temp[d] = tot;
  workgroupBarrier();

  // Blelloch exclusive scan over digits -------------------------------
  blelloch_up_sweep_digits(d);
  blelloch_down_sweep_digits(d);
  // Exclusive result -> digit_base
  digit_base[d] = temp[d];
}

@compute @workgroup_size(WG_SIZE)
fn compute_digit_base1(
  @builtin(local_invocation_id) lid : vec3<u32>
) {
  let d = lid.x; // digit 0..255 (one lane per digit)
  // Gather total count for digit d (tile total for that digit plane)
  let idx  = idx_hist(d, infos.sort_dispatch_x - 1u);
  temp[d] = wg_prefixes[idx] + wg_histograms[idx];
  workgroupBarrier();
  // Hillis-Steele inclusive scan (log2(256)=8 iterations)
  // offset 1
  let add1   = select(0u, temp[d - 1u],   d >= 1u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add1,   d >= 1u);   workgroupBarrier();
  // offset 2
  let add2   = select(0u, temp[d - 2u],   d >= 2u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add2,   d >= 2u);   workgroupBarrier();
  // offset 4
  let add4   = select(0u, temp[d - 4u],   d >= 4u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add4,   d >= 4u);   workgroupBarrier();
  // offset 8
  let add8   = select(0u, temp[d - 8u],   d >= 8u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add8,   d >= 8u);   workgroupBarrier();
  // offset 16
  let add16  = select(0u, temp[d - 16u],  d >= 16u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add16,  d >= 16u);  workgroupBarrier();
  // offset 32
  let add32  = select(0u, temp[d - 32u],  d >= 32u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add32,  d >= 32u);  workgroupBarrier();
  // offset 64
  let add64  = select(0u, temp[d - 64u],  d >= 64u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add64,  d >= 64u);  workgroupBarrier();
  // offset 128
  let add128 = select(0u, temp[d - 128u], d >= 128u);
  workgroupBarrier(); temp[d] = temp[d] + select(0u, add128, d >= 128u); workgroupBarrier();
  // Convert inclusive -> exclusive: shift right by one (digit 0 -> 0)
  digit_base[d] = select(0u, temp[d - 1u], d > 0u);
}`,Pn=256,Rs=16,tu=ui,nu=10,iu=12,di=8,su=1<<di,si=32/di;class ru{constructor(f,y,G,I,C){R(this,"device");R(this,"pc");R(this,"presentationFormat");R(this,"canvas");R(this,"camera_buffer");R(this,"render_settings_buffer");R(this,"splat_2d_buffer");R(this,"querySet");R(this,"resolveBuffer");R(this,"resultBuffer");R(this,"queriesPerFrame",nu);R(this,"queryCapacityFrames",200);R(this,"lastFrame",0);R(this,"frameCount",0);R(this,"aliveInfoBuffer");R(this,"preprocessPipeline");R(this,"cullPipeline");R(this,"rasterPipeline");R(this,"displayPipeline");R(this,"indirectPipeline");R(this,"rasterBgl1");R(this,"rsPingPongPairs");R(this,"rsPingPongIndicies");R(this,"rsWgHistograms");R(this,"rsWgPrefixes");R(this,"rsDigitBase");R(this,"rsL0Sums");R(this,"rsL0Offsets");R(this,"rsL1Sums");R(this,"rsL1Offsets");R(this,"rsPrefixBindGroup");R(this,"rsLocalHistogramPairsBindGroups",[]);R(this,"rsScatterBindGroups",[]);R(this,"rsPipelines");R(this,"crsBg");R(this,"cullBg1");R(this,"cullBg2");R(this,"preprocessBg1");R(this,"rasterBindGroup0");R(this,"rasterBindGroup1");R(this,"indirectBindGroup0");R(this,"indirectBindGroup1");R(this,"sh_color_rgba_buffer");R(this,"sh_solvers_buffer");R(this,"depths_buffer");R(this,"tileCountsBuffer");R(this,"tileOffsetsBuffer");R(this,"tileInfo",{tilesX:0,tilesY:0,capacity:0});R(this,"showPerfDialogNext",!1);R(this,"requestReorderNextFrame",!1);R(this,"reorderInFlight",!1);R(this,"downloadOnceNextRead",!1);R(this,"downloadOnceFileName","fps_metrics");const V=C.includes("shader-f16"),W=C.includes("timestamp-query");V&&Ve("🚀 using shader-f16"),W&&Ve("⏰ using timestamp-query"),this.canvas=document.querySelector("canvas"),this.pc=f,this.device=y,this.presentationFormat=G,this.camera_buffer=I,this._setupTimestampQueries(),this._setupBuffers(f.sh_degree),this._setupTileBuffers(),this._initPairRadix();const M=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),F=this.device.createBindGroupLayout({label:"cull group1 persistent",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),D=this.device.createBindGroupLayout({label:"cull group2 resize (tile_counts)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),O=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:M,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg2",layout:O,entries:[{binding:0,resource:{buffer:this.aliveInfoBuffer}},{binding:1,resource:{buffer:this.pc.sh_buffer}},{binding:2,resource:{buffer:this.sh_solvers_buffer}},{binding:3,resource:{buffer:this.sh_color_rgba_buffer}}]}),this.cullBg1=this.device.createBindGroup({label:"cull group1",layout:F,entries:[{binding:0,resource:{buffer:this.pc.gaussian_3d_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}},{binding:2,resource:{buffer:this.rsPingPongPairs[0]}},{binding:3,resource:{buffer:this.aliveInfoBuffer}},{binding:4,resource:{buffer:this.sh_solvers_buffer}},{binding:5,resource:{buffer:this.rsPingPongIndicies[0]}}]}),this.cullBg2=this.device.createBindGroup({label:"cull group2",layout:D,entries:[{binding:0,resource:{buffer:this.tileCountsBuffer}}]});const ee=this.device.createShaderModule({code:Kl});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:ee,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup0=this.device.createBindGroup({label:"indirect dispatch bind group 0",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.aliveInfoBuffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.indirectBindGroup1=this.device.createBindGroup({label:"indirect dispatch bind group 1",layout:this.indirectPipeline.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:this.tileCountsBuffer}},{binding:1,resource:{buffer:this.tileOffsetsBuffer}}]});const ne=this.device.createShaderModule({code:Xl});this.cullPipeline=this.device.createComputePipeline({label:"preprocess_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[M,F,D]}),compute:{module:ne,entryPoint:"preprocess_cull"}});const H=this.device.createShaderModule({code:Zs});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess",layout:this.device.createPipelineLayout({bindGroupLayouts:[M,O]}),compute:{module:H,entryPoint:"preprocess"}});const N=this.device.createShaderModule({code:Hl}),Y=this.device.createBindGroupLayout({label:"raster static layout (g0)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});this.rasterBgl1=this.device.createBindGroupLayout({label:"raster tile layout (g1)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]});const X=this.device.createBindGroupLayout({label:"raster texture layout (g2)",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:"rgba8unorm",viewDimension:"2d"}}]}),z=this.device.createPipelineLayout({bindGroupLayouts:[Y,this.rasterBgl1,X]});this.rasterPipeline=this.device.createComputePipeline({label:"software raster",layout:z,compute:{module:N,entryPoint:"tile_based_main"}});const Q=this.device.createShaderModule({code:Yl});this.displayPipeline=this.device.createRenderPipeline({label:"display",layout:"auto",vertex:{module:Q,entryPoint:"vs_main"},fragment:{module:Q,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"triangle-list"}}),this.rasterBindGroup0=this.device.createBindGroup({label:"raster static BG (g0)",layout:Y,entries:[{binding:0,resource:{buffer:this.render_settings_buffer}},{binding:1,resource:{buffer:this.aliveInfoBuffer}},{binding:2,resource:{buffer:this.splat_2d_buffer}},{binding:3,resource:{buffer:this.sh_color_rgba_buffer}},{binding:4,resource:{buffer:this.depths_buffer}},{binding:5,resource:{buffer:this.rsPingPongIndicies[1]}}]}),this.rasterBindGroup1=this.device.createBindGroup({label:"tile raster bind group 1",layout:this.rasterBgl1,entries:[{binding:0,resource:{buffer:this.tileOffsetsBuffer}}]}),window.debugPrintTileSplatCounts=this.debugPrintTileSplatCounts.bind(this)}get totalQueryCount(){return this.queriesPerFrame*this.queryCapacityFrames}async debugReadSortedIndices(f=30){console.log("[DEBUG] sorter removed")}frame(f,y){const I=(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame;{f.clearBuffer(this.aliveInfoBuffer,0,20),f.clearBuffer(this.tileCountsBuffer,0);const C=f.beginComputePass({label:"cull",timestampWrites:{querySet:this.querySet,beginningOfPassWriteIndex:I+0,endOfPassWriteIndex:I+1}});C.setPipeline(this.cullPipeline),C.setBindGroup(0,this.crsBg),C.setBindGroup(1,this.cullBg1),C.setBindGroup(2,this.cullBg2);const V=Math.ceil(this.pc.num_points/Pn);C.dispatchWorkgroups(V,1,1),C.end()}{const C=f.beginComputePass({label:"calculate indirect dispatch"});C.setPipeline(this.indirectPipeline),C.setBindGroup(0,this.indirectBindGroup0),C.setBindGroup(1,this.indirectBindGroup1),C.dispatchWorkgroups(1,1,1),C.end()}{const C=f.beginComputePass({label:"preprocess",timestampWrites:{querySet:this.querySet,beginningOfPassWriteIndex:I+2,endOfPassWriteIndex:I+3}});C.setPipeline(this.preprocessPipeline),C.setBindGroup(0,this.crsBg),C.setBindGroup(1,this.preprocessBg1),C.dispatchWorkgroupsIndirect(this.aliveInfoBuffer,4),C.end()}this._pairRadixSort(f);{const C=f.beginComputePass({label:"software raster",timestampWrites:{querySet:this.querySet,beginningOfPassWriteIndex:I+4,endOfPassWriteIndex:I+5}});C.setPipeline(this.rasterPipeline),C.setBindGroup(0,this.rasterBindGroup0),C.setBindGroup(1,this.rasterBindGroup1),C.setBindGroup(2,this.device.createBindGroup({layout:this.rasterPipeline.getBindGroupLayout(2),entries:[{binding:0,resource:y}]}));const V=this.canvas.width,W=this.canvas.height;C.dispatchWorkgroups(Math.ceil(V/Rs),Math.ceil(W/Rs),1),C.end()}this._resolveTimestamps(f),this.frameCount++}async readPerfMetrics(){const f=[["Total",5,0],["Culling",1,0],["Preprocess",3,2],["Sort",4,3],["Rasterization",5,4]];if(this.frameCount<=0)return;await this.resultBuffer.mapAsync(GPUMapMode.READ);const y=new BigInt64Array(this.resultBuffer.getMappedRange()),G=Math.min(this.frameCount,this.queryCapacityFrames),I=(this.lastFrame+this.frameCount-G)%this.queryCapacityFrames,C=new Array(f.length).fill(0);for(let F=0;F<G;F++){const O=(I+F)%this.queryCapacityFrames*this.queriesPerFrame;for(let ee=0;ee<f.length;ee++){const[ne,H,N]=f[ee],Y=Number(y[O+N]),X=Number(y[O+H]);C[ee]+=(X-Y)/1e6}}const V=f.map(([F],D)=>[F,C[D]/G]);this.lastFrame+=this.frameCount,this.frameCount=0;const M=`[TIMESTAMP - ${this.constructor.name}]
`+V.map(([F,D])=>`${F}: ${D.toFixed(3)}ms`).join(`
`)+`
${this.lastFrame} frames rendered
`;if(console.log(M),this.downloadOnceNextRead){this.downloadOnceNextRead=!1;const F=`Stage,ms
`,D=V.map(([ne,H])=>`${ne},${H.toFixed(3)}`).join(`
`),O="data:text/csv;charset=utf-8,"+encodeURIComponent(F+D),ee=document.createElement("a");ee.href=O,ee.download=`${this.downloadOnceFileName}.csv`,document.body.appendChild(ee),ee.click(),ee.remove()}if(this.showPerfDialogNext){this.showPerfDialogNext=!1;try{alert(M)}catch{console.warn("Unable to show dialog; metrics printed to console.")}}this.resultBuffer.unmap()}_initPairRadix(){const f=this.tileInfo.capacity||1;this.rsPingPongPairs=[0,1].map(z=>this.device.createBuffer({label:`pair_pairs_${z}`,size:f*(4+4),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})),this.rsPingPongIndicies=[0,1].map(z=>this.device.createBuffer({label:`pair_keys_${z}`,size:f*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}));const y=256,G=Math.ceil(f/Pn);this.rsWgHistograms=this.device.createBuffer({label:"pair_wg_hist",size:G*y*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.rsWgPrefixes=this.device.createBuffer({label:"pair_wg_prefix",size:G*y*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.rsDigitBase=this.device.createBuffer({label:"pair_digit_base",size:y*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST});const I=Math.ceil(G/Pn),C=Math.ceil(I/Pn);this.rsL0Sums=this.device.createBuffer({label:"pair_l0_sums",size:I*y*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.rsL0Offsets=this.device.createBuffer({label:"pair_l0_offs",size:I*y*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.rsL1Sums=this.device.createBuffer({label:"pair_l1_sums",size:C*y*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.rsL1Offsets=this.device.createBuffer({label:"pair_l1_offs",size:C*y*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST});const V=this.device.createShaderModule({code:Jl}),W=this.device.createShaderModule({code:Ql}),M=this.device.createShaderModule({code:eu}),F=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),D=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),O=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),ee=this.device.createPipelineLayout({bindGroupLayouts:[D]}),ne=this.device.createPipelineLayout({bindGroupLayouts:[O]}),H=this.device.createPipelineLayout({bindGroupLayouts:[F]}),N=z=>this.device.createComputePipeline({layout:H,compute:{module:M,entryPoint:z}}),Y={l0TileScan:N("prefix_l0_tile_scan"),l1TileScanOnL0:N("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:N("prefix_scan_l1_sums"),addL1ToL0:N("prefix_add_l1_to_l0_offsets"),addL0ToElems:N("prefix_add_l0_to_elements"),computeDigitBase:N("compute_digit_base"),prefixBindGroupLayout:F},X=[];for(let z=0;z<si;z++){const Q={PASS_ID:z,RS_RADIX_LOG2:di,RS_RADIX_SIZE:y},T=this.device.createComputePipeline({layout:ee,compute:{module:V,entryPoint:"local_histogram_pass",constants:{...Q,SORT_COMPONENT:0}}}),J=this.device.createComputePipeline({layout:ee,compute:{module:V,entryPoint:"local_histogram_pass",constants:{...Q,SORT_COMPONENT:1}}}),ge=this.device.createComputePipeline({layout:ne,compute:{module:W,entryPoint:"scatter_elements",constants:{...Q,SORT_COMPONENT:0}}}),ue=this.device.createComputePipeline({layout:ne,compute:{module:W,entryPoint:"scatter_elements",constants:{...Q,SORT_COMPONENT:1}}});X.push({localHistogramComp0:T,localHistogramComp1:J,scatterElements0:ge,scatterElements1:ue})}this.rsPipelines={passes:X,hierarchical:Y},this.rsPrefixBindGroup=this.device.createBindGroup({layout:F,entries:[{binding:0,resource:{buffer:this.aliveInfoBuffer}},{binding:1,resource:{buffer:this.rsWgHistograms}},{binding:2,resource:{buffer:this.rsWgPrefixes}},{binding:3,resource:{buffer:this.rsL0Sums}},{binding:4,resource:{buffer:this.rsL0Offsets}},{binding:5,resource:{buffer:this.rsL1Sums}},{binding:6,resource:{buffer:this.rsL1Offsets}},{binding:7,resource:{buffer:this.rsDigitBase}}]}),this.rsLocalHistogramPairsBindGroups=[0,1].map(z=>this.device.createBindGroup({layout:D,entries:[{binding:0,resource:{buffer:this.aliveInfoBuffer}},{binding:1,resource:{buffer:this.rsPingPongPairs[z]}},{binding:2,resource:{buffer:this.rsWgHistograms}}]})),this.rsScatterBindGroups=[0,1].map(z=>this.device.createBindGroup({layout:O,entries:[{binding:0,resource:{buffer:this.aliveInfoBuffer}},{binding:1,resource:{buffer:this.rsDigitBase}},{binding:2,resource:{buffer:this.rsPingPongPairs[z]}},{binding:3,resource:{buffer:this.rsPingPongPairs[1-z]}},{binding:4,resource:{buffer:this.rsPingPongIndicies[z]}},{binding:5,resource:{buffer:this.rsPingPongIndicies[1-z]}},{binding:6,resource:{buffer:this.rsWgPrefixes}}]}))}_pairRadixSort(f){this._runPairSortPhase(f,!1,si),this._runPairSortPhase(f,!0,si)}_runPairSortPhase(f,y,G){for(let I=0;I<G;I++){const C=I&1,V=this.rsPipelines.passes[I];{const W=f.beginComputePass({label:(y?"tile":"depth")+`_hist_${I}`});W.setPipeline(y?V.localHistogramComp0:V.localHistogramComp1),W.setBindGroup(0,this.rsLocalHistogramPairsBindGroups[C]),W.dispatchWorkgroupsIndirect(this.aliveInfoBuffer,20),W.end()}{const W=f.beginComputePass({label:(y?"tile":"depth")+`_prefix_${I}`});W.setBindGroup(0,this.rsPrefixBindGroup),W.setPipeline(this.rsPipelines.hierarchical.l0TileScan),W.dispatchWorkgroupsIndirect(this.aliveInfoBuffer,32),W.setPipeline(this.rsPipelines.hierarchical.l1TileScanOnL0),W.dispatchWorkgroupsIndirect(this.aliveInfoBuffer,48),W.setPipeline(this.rsPipelines.hierarchical.l1ScanSums),W.dispatchWorkgroups(1,su,1),W.setPipeline(this.rsPipelines.hierarchical.addL1ToL0),W.dispatchWorkgroupsIndirect(this.aliveInfoBuffer,48),W.setPipeline(this.rsPipelines.hierarchical.addL0ToElems),W.dispatchWorkgroupsIndirect(this.aliveInfoBuffer,32),W.setPipeline(this.rsPipelines.hierarchical.computeDigitBase),W.dispatchWorkgroups(1,1,1),W.end()}{const W=f.beginComputePass({label:(y?"tile":"depth")+`_scatter_${I}`});W.setPipeline(y?V.scatterElements0:V.scatterElements1),W.setBindGroup(0,this.rsScatterBindGroups[C]),W.dispatchWorkgroupsIndirect(this.aliveInfoBuffer,20),W.end()}}}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:this.totalQueryCount});const f=this.totalQueryCount*8;this.resolveBuffer=this.device.createBuffer({size:f,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:f,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupBuffers(f){this.aliveInfoBuffer=this.device.createBuffer({label:"alive_info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:tu,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const y=this.canvas.width,G=this.canvas.height;oi({width:y,height:G,max_sh_deg:f}),En(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"2d gaussians buffer",size:this.pc.num_points*iu,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.STORAGE});const I=12;this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:this.pc.num_points*I,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.sh_color_rgba_buffer=this.device.createBuffer({label:"sh_color_rgba",size:this.pc.num_points*Uint32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.depths_buffer=this.device.createBuffer({label:"depths",size:this.pc.num_points*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}_setupTileBuffers(){var D,O;const f=this.canvas.width,y=this.canvas.height,G=16,I=Math.ceil(f/G),C=Math.ceil(y/G),V=I*C,W=Math.max(this.pc.num_points*8,1);this.tileInfo={tilesX:I,tilesY:C,capacity:W};const M=V*4,F=(V+1)*4;(D=this.tileCountsBuffer)==null||D.destroy(),(O=this.tileOffsetsBuffer)==null||O.destroy(),this.tileCountsBuffer=this.device.createBuffer({label:"tileCounts",size:M,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.tileOffsetsBuffer=this.device.createBuffer({label:"tileOffsets",size:F,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}onResize(){const f=this.canvas.width,y=this.canvas.height;try{oi({width:f,height:y,max_sh_deg:this.pc.sh_degree}),En(this.device,this.render_settings_buffer)}catch{}this._setupTileBuffers(),this.cullBg2=this.device.createBindGroup({label:"cull group2 (tile_counts resized)",layout:this.cullPipeline.getBindGroupLayout(2),entries:[{binding:0,resource:{buffer:this.tileCountsBuffer}}]}),this.indirectBindGroup1=this.device.createBindGroup({label:"indirect dispatch bind group 1",layout:this.indirectPipeline.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:this.tileCountsBuffer}},{binding:1,resource:{buffer:this.tileOffsetsBuffer}}]}),this.rasterBindGroup1=this.device.createBindGroup({label:"tile raster bind group 1",layout:this.rasterBgl1,entries:[{binding:0,resource:{buffer:this.tileOffsetsBuffer}}]})}_resolveTimestamps(f){f.resolveQuerySet(this.querySet,0,this.totalQueryCount,this.resolveBuffer,0),f.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.totalQueryCount*8)}requestPerfDialog(){this.showPerfDialogNext=!0}requestDownloadMetrics(f){if(f&&f.trim().length>0){const y=f.trim().replace(/[^a-zA-Z0-9_\-]/g,"_");this.downloadOnceFileName=y.length>0?y:this.downloadOnceFileName}else{const y=new Date,G=`${y.getFullYear()}${String(y.getMonth()+1).padStart(2,"0")}${String(y.getDate()).padStart(2,"0")}_${String(y.getHours()).padStart(2,"0")}${String(y.getMinutes()).padStart(2,"0")}${String(y.getSeconds()).padStart(2,"0")}`;this.downloadOnceFileName=`fps_metrics_${G}`}this.downloadOnceNextRead=!0}requestReorder(){this.requestReorderNextFrame=!0}async debugPrintTileSplatCounts(f=128){try{const y=this.tileInfo.tilesX,G=this.tileInfo.tilesY,I=y*G;if(I===0){console.warn("[tile-debug] no tiles");return}const C=(I+1)*4,V=this.device.createBuffer({label:"tileOffsetsReadback",size:C,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),W=this.device.createCommandEncoder();W.copyBufferToBuffer(this.tileOffsetsBuffer,0,V,0,C),this.device.queue.submit([W.finish()]),await this.device.queue.onSubmittedWorkDone(),await V.mapAsync(GPUMapMode.READ);const M=new Uint32Array(V.getMappedRange()),F=new Array(I),D=new Array(I);for(let z=0;z<I;z++)F[z]=M[z+1]-M[z],D[z]=F[z];D.sort(),V.unmap(),V.destroy();let O=0,ee=Number.MAX_SAFE_INTEGER,ne=0,H=D[Math.floor(I/2)];for(let z of F)O=Math.max(O,z),ee=Math.min(ee,z),ne+=z;const N=ne/I;console.log(`[tile-debug] tiles=${I} (${y}x${G}) total_splats=${ne} avg=${N.toFixed(2)} med=${H} min=${ee} max=${O}`);const Y=Math.min(I,f);let X=[];for(let z=0;z<Y;z++){const Q=Math.floor(z/y),T=z%y;X.push(`(${T},${Q}):${F[z]}`)}console.log("[tile-debug] first "+Y+" tiles => "+X.join(" "))}catch(y){console.warn("[tile-debug] failed",y)}}async maybeReorderAfterSubmit(){if(!(!this.requestReorderNextFrame||this.reorderInFlight)){this.reorderInFlight=!0,this.requestReorderNextFrame=!1;try{const f=this.pc.num_points;if(!f)return;Ve(`Reordering ${f} splats...`);const y=16*4,G=this.device.createBuffer({size:y,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),I=this.device.createBuffer({size:f*4,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),C=12,V=this.device.createBuffer({size:f*C,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),W=this.device.createCommandEncoder();W.copyBufferToBuffer(this.aliveInfoBuffer,0,G,0,y),W.copyBufferToBuffer(this.sh_solvers_buffer,0,I,0,f*4),W.copyBufferToBuffer(this.sh_solvers_buffer,0,V,0,f*C),this.device.queue.submit([W.finish()]),await this.device.queue.onSubmittedWorkDone(),await Promise.all([G.mapAsync(GPUMapMode.READ),I.mapAsync(GPUMapMode.READ),V.mapAsync(GPUMapMode.READ)]);const M=new Uint32Array(G.getMappedRange()),F=Math.min(M[0]??0,f),D=new Uint32Array(I.getMappedRange(),0,F),O=new DataView(V.getMappedRange()),ee=new Uint32Array(F);for(let T=0;T<F;T++){const J=D[T]>>>0,ge=O.getUint32(J*C+8,!0);ee[T]=ge>>>0}const ne=new Uint8Array(f);for(let T=0;T<F;T++)ne[ee[T]]=1;const H=new Uint32Array(f);for(let T=0;T<F;T++)H[T]=ee[T];let N=F;for(let T=0;T<f;T++)ne[T]===0&&(H[N++]=T);const Y=this.pc.gs_stride,X=this.pc.sh_stride,z=new Float16Array(f*Y),Q=new Float16Array(f*X);for(let T=0;T<f;T++){const J=H[T]>>>0;z.set(this.pc.gaussian_cpu.subarray(J*Y,(J+1)*Y),T*Y),Q.set(this.pc.sh_cpu.subarray(J*X,(J+1)*X),T*X)}this.pc.gaussian_cpu=z,this.pc.sh_cpu=Q,this.device.queue.writeBuffer(this.pc.gaussian_3d_buffer,0,new Uint16Array(z.buffer)),this.device.queue.writeBuffer(this.pc.sh_buffer,0,new Uint16Array(Q.buffer)),G.unmap(),I.unmap(),V.unmap(),G.destroy(),I.destroy(),V.destroy(),Ve(`Reordered ${f} splats, moved ${F} alive splats to the front.`)}catch(f){console.warn("[reorder] failed:",f)}finally{this.reorderInFlight=!1}}}}const ou=`struct CameraUniforms {
    view: mat4x4<f32>,
    view_inv: mat4x4<f32>,
    proj: mat4x4<f32>,
    proj_inv: mat4x4<f32>,
    
    viewport: vec2<f32>,
    focal: vec2<f32>
};

struct Gaussian {
    // (3+1)x f16 packed as u32
    pos_opacity: array<u32,2>,
    // 6x f16 sparse cov matrix
    cov: array<u32,3>
}

@group(0) @binding(0)
var<uniform> camera: CameraUniforms;

@group(1) @binding(0)
var<storage,read> gaussians : array<Gaussian>;

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) color: vec3<f32>,
};

@vertex
fn vs_main(
    @builtin(vertex_index) in_vertex_index: u32,
) -> VertexOutput {
    var out: VertexOutput;

    let vertex = gaussians[in_vertex_index];
    let a = unpack2x16float(vertex.pos_opacity[0]);
    let b = unpack2x16float(vertex.pos_opacity[1]);
    let xyz = vec3<f32>(a.x, a.y, b.x);
    // var opacity = b.y;

    var camspace = camera.view * vec4<f32>(xyz, 1.);
    let pos2d = camera.proj * camspace;
    // let bounds = 1.2 * pos2d.w;
    // let z = pos2d.z / pos2d.w;

    out.position = pos2d;

    // Color by original splat index magnitude: map index in [0, N-1] to a hue
    let count = arrayLength(&gaussians);
    let denom = max(1u, count - 1u);
    let t = f32(in_vertex_index) / f32(denom);

    // Smooth cosine palette (continuous, no hard transitions)
    // rgb = 0.5 + 0.5 * cos(2π * (t + phase))
    let tt = vec3<f32>(t, t, t);
    let phase = vec3<f32>(0.0, 0.3333333, 0.6666667);
    var rgb = 0.5 + 0.5 * cos(6.28318530718 * (tt + phase));
    // Optional contrast/brightness tweak
    rgb = rgb * 0.9 + vec3<f32>(0.05);
    out.color = clamp(rgb, vec3<f32>(0.0), vec3<f32>(1.0));
    // out.position = pos2d / pos2d.w;
    // out.position = vec4<f32>(xyz, 1.);

    return out;
}

// @vertex
// fn vs_main(
//     @builtin(vertex_index) in_vertex_index: u32,
// ) -> VertexOutput {
//     var out: VertexOutput;

//     let vertex = gaussians[in_vertex_index];
//     let a = unpack2x16float(vertex.pos_opacity[0]);
//     let b = unpack2x16float(vertex.pos_opacity[1]);
//     let xyz = vec3<f32>(a.x, a.y, b.x);
//     var camspace = camera.view * vec4<f32>(xyz, 1.);
//     let pos2d = camera.proj * camspace;
//     _ = pos2d;

//     let x = in_vertex_index % 100u;
//     let y = in_vertex_index / 100u;

//     let pos = vec4f( f32(x) * 0.01, f32(y) * 0.01, 0. , 1.);
//     out.position = pos;

//     return out;
// }

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    return vec4<f32>(in.color, 1.0);
}`,un=2;class au{constructor(f,y,G,I){R(this,"device");R(this,"pc");R(this,"presentationFormat");R(this,"camera_buffer");R(this,"querySet");R(this,"resolveBuffer");R(this,"resultBuffer");R(this,"renderPipeline");R(this,"cameraBindGroup");R(this,"gaussianBindGroup");this.pc=f,this.device=y,this.presentationFormat=G,this.camera_buffer=I,this._setupTimestampQueries(),this._setupPipeline(),this._setupBindGroups()}frame(f,y){const G=f.beginRenderPass({label:"point cloud render",colorAttachments:[{view:y,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}],timestampWrites:{querySet:this.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}});G.setPipeline(this.renderPipeline),G.setBindGroup(0,this.cameraBindGroup),G.setBindGroup(1,this.gaussianBindGroup),G.draw(this.pc.num_points),G.end(),this._resolveTimestamps(f)}async readPerfMetrics(){await this.resultBuffer.mapAsync(GPUMapMode.READ);const f=new BigInt64Array(this.resultBuffer.getMappedRange()),y=Number(f[1]-f[0])/1e6,G=this.constructor.name;console.log(`[TIMESTAMP - ${G}] Point Cloud Render: ${y.toFixed(3)}ms`),this.resultBuffer.unmap()}_setupTimestampQueries(){this.querySet=this.device.createQuerySet({type:"timestamp",count:un}),this.resolveBuffer=this.device.createBuffer({size:un*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:un*8,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}_setupPipeline(){const f=this.device.createShaderModule({code:ou});this.renderPipeline=this.device.createRenderPipeline({label:"point cloud render pipeline",layout:"auto",vertex:{module:f,entryPoint:"vs_main"},fragment:{module:f,entryPoint:"fs_main",targets:[{format:this.presentationFormat}]},primitive:{topology:"point-list"}})}_setupBindGroups(){this.cameraBindGroup=this.device.createBindGroup({label:"point cloud camera",layout:this.renderPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.camera_buffer}}]}),this.gaussianBindGroup=this.device.createBindGroup({label:"point cloud gaussians",layout:this.renderPipeline.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:this.pc.gaussian_3d_buffer}}]})}_resolveTimestamps(f){f.resolveQuerySet(this.querySet,0,un,this.resolveBuffer,0),f.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,un*8)}}function lu(d,f){return 2*Math.atan(f/(2*d))}function uu(d,f){const y=ze.mulScalar(f,-1);return nt.translate(d,y)}function cu(d,f,y,G){const I=Math.tan(G/2),C=Math.tan(y/2),V=I*d,W=-V,M=C*d,F=-M,D=nt.create();return D[0]=2*d/(M-F),D[5]=-2*d/(V-W),D[2]=(M+F)/(M-F),D[6]=(V+W)/(V-W),D[14]=1,D[10]=f/(f-d),D[11]=-(f*d)/(f-d),nt.transpose(D,D),D}async function du(d){Ve(`loading scene camera file... : ${d}`);const y=await(await fetch(d)).json();return Ve(`loaded cameras count: ${y.length}`),y.map(G=>{const I=ze.clone(G.position),C=nt.fromMat3(_l.create(...G.rotation.flat()));return{position:I,rotation:C}})}const pu=4*2,hu=4*16,$s=4*hu+2*pu;function fu(d){return d.createBuffer({label:"camera uniform",size:$s,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const Gt=new Float32Array($s/Float32Array.BYTES_PER_ELEMENT);class _u{constructor(f,y){R(this,"uniform_buffer");R(this,"position",ze.create());R(this,"rotation",nt.create());R(this,"fovY",45/180*Math.PI);R(this,"fovX");R(this,"focal",Ds.create());R(this,"viewport",Ds.create());R(this,"view_matrix",nt.identity());R(this,"proj_matrix",nt.identity());R(this,"look",ze.create(0,0,1));R(this,"up",ze.create(0,1,0));R(this,"right",ze.create(1,0,0));this.canvas=f,this.device=y,this.uniform_buffer=fu(y),this.on_update_canvas()}on_update_canvas(){const f=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=f,this.focal[1]=f,this.fovX=lu(f,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.update_buffer()}update_buffer(){let f=0;this.view_matrix=uu(this.rotation,this.position),this.proj_matrix=cu(.01,100,this.fovX,this.fovY);const y=nt.inverse(this.view_matrix);ze.transformMat4Upper3x3(ze.create(0,0,1),y,this.look),ze.normalize(this.look,this.look),ze.cross(this.up,this.look,this.right),ze.normalize(this.right,this.right),Gt.set(this.view_matrix,f),f+=16,Gt.set(y,f),f+=16,Gt.set(this.proj_matrix,f),f+=16,Gt.set(nt.inverse(this.proj_matrix),f),f+=16,Gt.set(this.viewport,f),f+=2,Gt.set(this.focal,f),f+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,Gt)}set_preset(f){ze.copy(f.position,this.position),nt.copy(f.rotation,this.rotation),this.update_buffer()}}class mu{constructor(f){R(this,"element");R(this,"enabled",!0);R(this,"panning",!1);R(this,"rotating",!1);R(this,"lastX");R(this,"lastY");this.camera=f,this.register_element(f.canvas)}register_element(f){this.element&&this.element!=f&&(this.element.removeEventListener("pointerdown",this.downCallback.bind(this)),this.element.removeEventListener("pointermove",this.moveCallback.bind(this)),this.element.removeEventListener("pointerup",this.upCallback.bind(this)),this.element.removeEventListener("wheel",this.wheelCallback.bind(this))),this.element=f,this.element.addEventListener("pointerdown",this.downCallback.bind(this)),this.element.addEventListener("pointermove",this.moveCallback.bind(this)),this.element.addEventListener("pointerup",this.upCallback.bind(this)),this.element.addEventListener("wheel",this.wheelCallback.bind(this)),this.element.addEventListener("contextmenu",y=>{y.preventDefault()})}downCallback(f){this.enabled&&f.isPrimary&&(f.button===0?(this.rotating=!0,this.panning=!1):(this.rotating=!1,this.panning=!0),this.lastX=f.pageX,this.lastY=f.pageY)}moveCallback(f){if(!this.enabled||!(this.rotating||this.panning))return;const y=f.pageX-this.lastX,G=f.pageY-this.lastY;this.lastX=f.pageX,this.lastY=f.pageY,this.rotating?this.rotate(y,G):this.panning&&this.pan(y,G)}upCallback(f){this.rotating=!1,this.panning=!1,f.preventDefault()}wheelCallback(f){if(!this.enabled)return;f.preventDefault();const y=ze.mulScalar(this.camera.look,-f.deltaY*.001);ze.add(y,this.camera.position,this.camera.position),this.camera.update_buffer()}rotate(f,y){const G=nt.fromQuat(ml.fromEuler(y*.01,-f*.01,0,"xyz"));nt.mul(G,this.camera.rotation,this.camera.rotation),this.camera.update_buffer()}pan(f,y){const G=ze.copy(this.camera.up);ze.mulScalar(G,-y*.01,G),ze.add(G,this.camera.position,this.camera.position),ze.copy(this.camera.right,G),ze.mulScalar(G,-f*.01,G),ze.add(G,this.camera.position,this.camera.position),this.camera.update_buffer()}}function js(d){const f=d.toLowerCase();return f.endsWith(".glb")||f.endsWith(".gltf")?"gltf":"ply"}function gu(d){return new Promise(f=>{const y=document.createElement("input");y.type="file",y.accept=d,y.style.display="none",y.onchange=()=>{var G;return f(((G=y.files)==null?void 0:G[0])??null)},document.body.appendChild(y),y.click(),setTimeout(()=>document.body.removeChild(y),1e3)})}function vu(d,f,y,G){const I=document.getElementById("ui-panel-container"),C=document.getElementById("sh-degree-input"),V=document.getElementById("sort-select"),W=document.getElementById("renderer-select"),M=document.getElementById("animation-checkbox"),F=document.getElementById("load-button"),D=document.getElementById("quick-links");F.onclick=async()=>{const H=await gu(".ply,.glb,.gltf");if(H){const N=parseInt(C.value)||3,Y=qs(V.value);I.style.display="none";const z=js(H.name)==="gltf"?await El(H,d,N,Y):await xl(H,d,N,Y);y(z)}};const O=()=>{const H=C.value||"3",N=V.value,Y=W?W.value:"gaussian",X=M?M.checked?"1":"0":"1";D.innerHTML="";const z=[{label:"Bicycle",path:"scenes/bicycle/bicycle_30000.ply",cam:"scenes/bicycle/cameras.json"},{label:"Bicycle Cleaned",path:"scenes/bicycle/bicycle_30000.cleaned.ply",cam:"scenes/bicycle/cameras.json"},{label:"Bonsai",path:"scenes/bonsai/bonsai_30000.ply",cam:"scenes/bonsai/cameras.json"},{label:"Garden",path:"scenes/garden/garden_30000.ply",cam:"scenes/garden/cameras.json"},{label:"Train",path:"scenes/train/train_30000.ply",cam:"scenes/train/cameras.json"},{label:"Truck",path:"scenes/truck/truck_30000.ply",cam:"scenes/truck/cameras.json"},{label:"Van Gogh Room",path:"scenes/van_gogh_room/van_gogh_room.ply",cam:"scenes/van_gogh_room/cameras.json"}];for(const Q of z){const T=`?model_url=${encodeURIComponent(Q.path)}&camera_url=${encodeURIComponent(Q.cam)}&clip_sh_degree=${encodeURIComponent(H)}&sort=${encodeURIComponent(N)}&renderer=${encodeURIComponent(Y)}&animation=${X}`,J=document.createElement("a");J.textContent=`🔗 ${Q.label}`,J.href=T,J.className="ui-link",J.target="_blank",D.appendChild(J)}};C.addEventListener("input",O),V.addEventListener("change",O),W==null||W.addEventListener("change",O),M==null||M.addEventListener("change",O),O();const ee=new URLSearchParams(window.location.search),ne=ee.get("model_url");if(ne){I.style.display="none";const H=ee.get("clip_sh_degree")??"3",N=parseInt(H),Y=ee.get("renderer");W&&Y&&(W.value=Y),G(ne,N,f,Y)}}async function bu(d,f,y,G){const I=new _u(d,y),C=new mu(I);let V=!1;const W=()=>{V=!0},M=()=>{V=!1};d.addEventListener("pointerdown",W),window.addEventListener("pointerup",M);const F=new ResizeObserver(()=>{const ue=window.devicePixelRatio||1;d.width=Math.ceil(ue*d.clientWidth),d.height=Math.ceil(ue*d.clientHeight),I.on_update_canvas()});F.observe(d);const D="rgba8unorm";f.configure({device:y,format:D,alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});const O=new URLSearchParams(window.location.search);O.get("model_url");const ee=O.get("camera_url")??"scenes/bicycle/cameras.json",ne=O.get("clip_sh_degree")??"3",H=O.get("sort")??null,N=qs(H);let X=O.get("animation")==="1";C.enabled=!X;const z=await du(ee);I.set_preset(z[0]);const Q={gaussian_scaling:1,renderer:"gaussian",animate:X,sh_degree:parseInt(ne),metrics_filename:"fps_metrics",mip_splatting:!1,kernel_size:.3},T=O.get("renderer"),J=new Bl.Pane({title:"Config",expanded:!1});J.addInput(Q,"animate",{label:"Animate"}).on("change",ue=>{X=ue.value,C.enabled=!ue.value}),vu(y,N,ue=>ge(ue),async(ue,ve,Ge,be)=>{const Ee=js(ue)==="gltf"?await Cl(ue,y,ve,Ge):await yl(ue,y,ve,Ge);be&&(Q.renderer=be),ge(Ee)});function ge(ue){let ve=null,Ge=null,be=null;function Te(){return ve||(ve=new jl(ue,y,D,I.uniform_buffer,G),ii(Q.kernel_size,y,ve.render_settings_buffer)),ve}function Ee(){return Ge||(Ge=new au(ue,y,D,I.uniform_buffer))}function Xe(){if(!be)return be=new ru(ue,y,D,I.uniform_buffer,G),ii(Q.kernel_size,y,be.render_settings_buffer),new ResizeObserver(()=>{const Be=window.devicePixelRatio||1;d.width=Math.ceil(Be*d.clientWidth),d.height=Math.ceil(Be*d.clientHeight),be.onResize()}).observe(d),be}function De(K){switch(K){case"gaussian":return Te();case"pointcloud":return Ee();case"tile_based":return Xe()}}T&&(Q.renderer=T);let ce=De(Q.renderer);F.observe(d);{J.addInput(Q,"renderer",{options:{pointcloud:"pointcloud",gaussian:"gaussian",tile_based:"tile_based"}}).on("change",Ce=>{const Se=Ce.value;ce=De(Se)});const K=new Float32Array([1]);J.addInput(Q,"gaussian_scaling",{min:0,max:1}).on("change",Ce=>{K[0]=Ce.value,Ll(Ce.value,y,ce.render_settings_buffer)}),J.addInput(Q,"mip_splatting",{label:"Mip splatting"}).on("change",Ce=>{zl(Ce.value,y,ce.render_settings_buffer)});const Be=ue.sh_degree,we={value:Be};J.addInput(we,"value",{label:"SH degree",min:0,max:Be,step:1}).on("change",Ce=>{const Se=Math.max(0,Math.min(Be,Ce.value|0));Ol(Se,y,ce.render_settings_buffer)}),J.addInput(Q,"kernel_size",{label:"Kernel size",min:0,max:2,step:.01}).on("change",Ce=>{ii(Ce.value,y,ce.render_settings_buffer)}),J.addInput(Q,"metrics_filename",{label:"Metrics filename"}),J.addButton({title:"💾 Download FPS metrics"}).on("click",()=>{ce.requestDownloadMetrics(Q.metrics_filename)}),J.addButton({title:"🔍 Show perf metrics"}).on("click",()=>{ce.requestPerfDialog()}),J.addButton({title:"🚀 Compact visible Gaussians"}).on("click",()=>{ce.requestReorder()})}document.addEventListener("keydown",K=>{switch(K.key){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":const Be=parseInt(K.key);console.log(`set to camera preset ${Be}`),I.set_preset(z[Be]);break;case"d":case"D":console.log("[DEBUG] Reading sorted indices..."),Te().debugReadSortedIndices(30).catch(we=>{console.error("[DEBUG] Failed to read sorted indices:",we)});break}});let fe=performance.now();async function se(){const K=performance.now(),Be=(K-fe)/1e3;if(fe=K,X&&!V){const Qe=.2*Be,de=nt.rotationY(Qe);ze.transformMat4(I.position,de,I.position);const xe=nt.rotationY(-Qe);nt.mul(I.rotation,xe,I.rotation),I.update_buffer()}const we=y.createCommandEncoder(),Ce=f.getCurrentTexture().createView();ce.frame(we,Ce),y.queue.submit([we.finish()]),requestAnimationFrame(se)}requestAnimationFrame(se)}}(async()=>{if(navigator.gpu===void 0){const C=document.querySelector("#title");C.innerText="WebGPU is not supported in this browser.";return}const d=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(d===null){const C=document.querySelector("#title");C.innerText="No adapter is available for WebGPU.";return}const f=["timestamp-query"];d.features.has("shader-f16")&&f.push("shader-f16");const y=await d.requestDevice({requiredLimits:{maxComputeWorkgroupStorageSize:d.limits.maxComputeWorkgroupStorageSize,maxBufferSize:d.limits.maxBufferSize,maxStorageBufferBindingSize:d.limits.maxStorageBufferBindingSize,maxStorageBuffersPerShaderStage:10},requiredFeatures:f}),G=document.querySelector("#webgpu-canvas");vl(G!==null);const I=G.getContext("webgpu");bu(G,I,y,f)})();
