(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))D(S);new MutationObserver(S=>{for(const E of S)if(E.type==="childList")for(const O of E.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&D(O)}).observe(document,{childList:!0,subtree:!0});function z(S){const E={};return S.integrity&&(E.integrity=S.integrity),S.referrerPolicy&&(E.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?E.credentials="include":S.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function D(S){if(S.ep)return;S.ep=!0;const E=z(S);fetch(S.href,E)}})();function De(u,g){return class extends u{constructor(...z){super(...z),g(this)}}}const Ge=De(Array,u=>u.fill(0));let T=1e-6;function Me(u){function g(p=0,h=0){const x=new u(2);return p!==void 0&&(x[0]=p,h!==void 0&&(x[1]=h)),x}const z=g;function D(p,h,x){const n=x??new u(2);return n[0]=p,n[1]=h,n}function S(p,h){const x=h??new u(2);return x[0]=Math.ceil(p[0]),x[1]=Math.ceil(p[1]),x}function E(p,h){const x=h??new u(2);return x[0]=Math.floor(p[0]),x[1]=Math.floor(p[1]),x}function O(p,h){const x=h??new u(2);return x[0]=Math.round(p[0]),x[1]=Math.round(p[1]),x}function q(p,h=0,x=1,n){const c=n??new u(2);return c[0]=Math.min(x,Math.max(h,p[0])),c[1]=Math.min(x,Math.max(h,p[1])),c}function M(p,h,x){const n=x??new u(2);return n[0]=p[0]+h[0],n[1]=p[1]+h[1],n}function B(p,h,x,n){const c=n??new u(2);return c[0]=p[0]+h[0]*x,c[1]=p[1]+h[1]*x,c}function R(p,h){const x=p[0],n=p[1],c=h[0],s=h[1],r=Math.sqrt(x*x+n*n),t=Math.sqrt(c*c+s*s),o=r*t,_=o&&fn(p,h)/o;return Math.acos(_)}function Y(p,h,x){const n=x??new u(2);return n[0]=p[0]-h[0],n[1]=p[1]-h[1],n}const Q=Y;function N(p,h){return Math.abs(p[0]-h[0])<T&&Math.abs(p[1]-h[1])<T}function C(p,h){return p[0]===h[0]&&p[1]===h[1]}function K(p,h,x,n){const c=n??new u(2);return c[0]=p[0]+x*(h[0]-p[0]),c[1]=p[1]+x*(h[1]-p[1]),c}function J(p,h,x,n){const c=n??new u(2);return c[0]=p[0]+x[0]*(h[0]-p[0]),c[1]=p[1]+x[1]*(h[1]-p[1]),c}function V(p,h,x){const n=x??new u(2);return n[0]=Math.max(p[0],h[0]),n[1]=Math.max(p[1],h[1]),n}function nn(p,h,x){const n=x??new u(2);return n[0]=Math.min(p[0],h[0]),n[1]=Math.min(p[1],h[1]),n}function j(p,h,x){const n=x??new u(2);return n[0]=p[0]*h,n[1]=p[1]*h,n}const In=j;function yn(p,h,x){const n=x??new u(2);return n[0]=p[0]/h,n[1]=p[1]/h,n}function vn(p,h){const x=h??new u(2);return x[0]=1/p[0],x[1]=1/p[1],x}const Bn=vn;function un(p,h,x){const n=x??new u(3),c=p[0]*h[1]-p[1]*h[0];return n[0]=0,n[1]=0,n[2]=c,n}function fn(p,h){return p[0]*h[0]+p[1]*h[1]}function tn(p){const h=p[0],x=p[1];return Math.sqrt(h*h+x*x)}const Dn=tn;function ln(p){const h=p[0],x=p[1];return h*h+x*x}const kn=ln;function an(p,h){const x=p[0]-h[0],n=p[1]-h[1];return Math.sqrt(x*x+n*n)}const Z=an;function H(p,h){const x=p[0]-h[0],n=p[1]-h[1];return x*x+n*n}const W=H;function cn(p,h){const x=h??new u(2),n=p[0],c=p[1],s=Math.sqrt(n*n+c*c);return s>1e-5?(x[0]=n/s,x[1]=c/s):(x[0]=0,x[1]=0),x}function Gn(p,h){const x=h??new u(2);return x[0]=-p[0],x[1]=-p[1],x}function $(p,h){const x=h??new u(2);return x[0]=p[0],x[1]=p[1],x}const Wn=$;function Mn(p,h,x){const n=x??new u(2);return n[0]=p[0]*h[0],n[1]=p[1]*h[1],n}const qn=Mn;function En(p,h,x){const n=x??new u(2);return n[0]=p[0]/h[0],n[1]=p[1]/h[1],n}const On=En;function Tn(p=1,h){const x=h??new u(2),n=Math.random()*2*Math.PI;return x[0]=Math.cos(n)*p,x[1]=Math.sin(n)*p,x}function w(p){const h=p??new u(2);return h[0]=0,h[1]=0,h}function b(p,h,x){const n=x??new u(2),c=p[0],s=p[1];return n[0]=c*h[0]+s*h[4]+h[12],n[1]=c*h[1]+s*h[5]+h[13],n}function f(p,h,x){const n=x??new u(2),c=p[0],s=p[1];return n[0]=h[0]*c+h[4]*s+h[8],n[1]=h[1]*c+h[5]*s+h[9],n}function e(p,h,x,n){const c=n??new u(2),s=p[0]-h[0],r=p[1]-h[1],t=Math.sin(x),o=Math.cos(x);return c[0]=s*o-r*t+h[0],c[1]=s*t+r*o+h[1],c}function a(p,h,x){const n=x??new u(2);return cn(p,n),j(n,h,n)}function i(p,h,x){const n=x??new u(2);return tn(p)>h?a(p,h,n):$(p,n)}function l(p,h,x){const n=x??new u(2);return K(p,h,.5,n)}return{create:g,fromValues:z,set:D,ceil:S,floor:E,round:O,clamp:q,add:M,addScaled:B,angle:R,subtract:Y,sub:Q,equalsApproximately:N,equals:C,lerp:K,lerpV:J,max:V,min:nn,mulScalar:j,scale:In,divScalar:yn,inverse:vn,invert:Bn,cross:un,dot:fn,length:tn,len:Dn,lengthSq:ln,lenSq:kn,distance:an,dist:Z,distanceSq:H,distSq:W,normalize:cn,negate:Gn,copy:$,clone:Wn,multiply:Mn,mul:qn,divide:En,div:On,random:Tn,zero:w,transformMat4:b,transformMat3:f,rotate:e,setLength:a,truncate:i,midpoint:l}}const ue=new Map;function me(u){let g=ue.get(u);return g||(g=Me(u),ue.set(u,g)),g}function Ee(u){function g(t,o,_){const d=new u(3);return t!==void 0&&(d[0]=t,o!==void 0&&(d[1]=o,_!==void 0&&(d[2]=_))),d}const z=g;function D(t,o,_,d){const y=d??new u(3);return y[0]=t,y[1]=o,y[2]=_,y}function S(t,o){const _=o??new u(3);return _[0]=Math.ceil(t[0]),_[1]=Math.ceil(t[1]),_[2]=Math.ceil(t[2]),_}function E(t,o){const _=o??new u(3);return _[0]=Math.floor(t[0]),_[1]=Math.floor(t[1]),_[2]=Math.floor(t[2]),_}function O(t,o){const _=o??new u(3);return _[0]=Math.round(t[0]),_[1]=Math.round(t[1]),_[2]=Math.round(t[2]),_}function q(t,o=0,_=1,d){const y=d??new u(3);return y[0]=Math.min(_,Math.max(o,t[0])),y[1]=Math.min(_,Math.max(o,t[1])),y[2]=Math.min(_,Math.max(o,t[2])),y}function M(t,o,_){const d=_??new u(3);return d[0]=t[0]+o[0],d[1]=t[1]+o[1],d[2]=t[2]+o[2],d}function B(t,o,_,d){const y=d??new u(3);return y[0]=t[0]+o[0]*_,y[1]=t[1]+o[1]*_,y[2]=t[2]+o[2]*_,y}function R(t,o){const _=t[0],d=t[1],y=t[2],v=o[0],m=o[1],G=o[2],P=Math.sqrt(_*_+d*d+y*y),I=Math.sqrt(v*v+m*m+G*G),k=P*I,L=k&&fn(t,o)/k;return Math.acos(L)}function Y(t,o,_){const d=_??new u(3);return d[0]=t[0]-o[0],d[1]=t[1]-o[1],d[2]=t[2]-o[2],d}const Q=Y;function N(t,o){return Math.abs(t[0]-o[0])<T&&Math.abs(t[1]-o[1])<T&&Math.abs(t[2]-o[2])<T}function C(t,o){return t[0]===o[0]&&t[1]===o[1]&&t[2]===o[2]}function K(t,o,_,d){const y=d??new u(3);return y[0]=t[0]+_*(o[0]-t[0]),y[1]=t[1]+_*(o[1]-t[1]),y[2]=t[2]+_*(o[2]-t[2]),y}function J(t,o,_,d){const y=d??new u(3);return y[0]=t[0]+_[0]*(o[0]-t[0]),y[1]=t[1]+_[1]*(o[1]-t[1]),y[2]=t[2]+_[2]*(o[2]-t[2]),y}function V(t,o,_){const d=_??new u(3);return d[0]=Math.max(t[0],o[0]),d[1]=Math.max(t[1],o[1]),d[2]=Math.max(t[2],o[2]),d}function nn(t,o,_){const d=_??new u(3);return d[0]=Math.min(t[0],o[0]),d[1]=Math.min(t[1],o[1]),d[2]=Math.min(t[2],o[2]),d}function j(t,o,_){const d=_??new u(3);return d[0]=t[0]*o,d[1]=t[1]*o,d[2]=t[2]*o,d}const In=j;function yn(t,o,_){const d=_??new u(3);return d[0]=t[0]/o,d[1]=t[1]/o,d[2]=t[2]/o,d}function vn(t,o){const _=o??new u(3);return _[0]=1/t[0],_[1]=1/t[1],_[2]=1/t[2],_}const Bn=vn;function un(t,o,_){const d=_??new u(3),y=t[2]*o[0]-t[0]*o[2],v=t[0]*o[1]-t[1]*o[0];return d[0]=t[1]*o[2]-t[2]*o[1],d[1]=y,d[2]=v,d}function fn(t,o){return t[0]*o[0]+t[1]*o[1]+t[2]*o[2]}function tn(t){const o=t[0],_=t[1],d=t[2];return Math.sqrt(o*o+_*_+d*d)}const Dn=tn;function ln(t){const o=t[0],_=t[1],d=t[2];return o*o+_*_+d*d}const kn=ln;function an(t,o){const _=t[0]-o[0],d=t[1]-o[1],y=t[2]-o[2];return Math.sqrt(_*_+d*d+y*y)}const Z=an;function H(t,o){const _=t[0]-o[0],d=t[1]-o[1],y=t[2]-o[2];return _*_+d*d+y*y}const W=H;function cn(t,o){const _=o??new u(3),d=t[0],y=t[1],v=t[2],m=Math.sqrt(d*d+y*y+v*v);return m>1e-5?(_[0]=d/m,_[1]=y/m,_[2]=v/m):(_[0]=0,_[1]=0,_[2]=0),_}function Gn(t,o){const _=o??new u(3);return _[0]=-t[0],_[1]=-t[1],_[2]=-t[2],_}function $(t,o){const _=o??new u(3);return _[0]=t[0],_[1]=t[1],_[2]=t[2],_}const Wn=$;function Mn(t,o,_){const d=_??new u(3);return d[0]=t[0]*o[0],d[1]=t[1]*o[1],d[2]=t[2]*o[2],d}const qn=Mn;function En(t,o,_){const d=_??new u(3);return d[0]=t[0]/o[0],d[1]=t[1]/o[1],d[2]=t[2]/o[2],d}const On=En;function Tn(t=1,o){const _=o??new u(3),d=Math.random()*2*Math.PI,y=Math.random()*2-1,v=Math.sqrt(1-y*y)*t;return _[0]=Math.cos(d)*v,_[1]=Math.sin(d)*v,_[2]=y*t,_}function w(t){const o=t??new u(3);return o[0]=0,o[1]=0,o[2]=0,o}function b(t,o,_){const d=_??new u(3),y=t[0],v=t[1],m=t[2],G=o[3]*y+o[7]*v+o[11]*m+o[15]||1;return d[0]=(o[0]*y+o[4]*v+o[8]*m+o[12])/G,d[1]=(o[1]*y+o[5]*v+o[9]*m+o[13])/G,d[2]=(o[2]*y+o[6]*v+o[10]*m+o[14])/G,d}function f(t,o,_){const d=_??new u(3),y=t[0],v=t[1],m=t[2];return d[0]=y*o[0*4+0]+v*o[1*4+0]+m*o[2*4+0],d[1]=y*o[0*4+1]+v*o[1*4+1]+m*o[2*4+1],d[2]=y*o[0*4+2]+v*o[1*4+2]+m*o[2*4+2],d}function e(t,o,_){const d=_??new u(3),y=t[0],v=t[1],m=t[2];return d[0]=y*o[0]+v*o[4]+m*o[8],d[1]=y*o[1]+v*o[5]+m*o[9],d[2]=y*o[2]+v*o[6]+m*o[10],d}function a(t,o,_){const d=_??new u(3),y=o[0],v=o[1],m=o[2],G=o[3]*2,P=t[0],I=t[1],k=t[2],L=v*k-m*I,U=m*P-y*k,A=y*I-v*P;return d[0]=P+L*G+(v*A-m*U)*2,d[1]=I+U*G+(m*L-y*A)*2,d[2]=k+A*G+(y*U-v*L)*2,d}function i(t,o){const _=o??new u(3);return _[0]=t[12],_[1]=t[13],_[2]=t[14],_}function l(t,o,_){const d=_??new u(3),y=o*4;return d[0]=t[y+0],d[1]=t[y+1],d[2]=t[y+2],d}function p(t,o){const _=o??new u(3),d=t[0],y=t[1],v=t[2],m=t[4],G=t[5],P=t[6],I=t[8],k=t[9],L=t[10];return _[0]=Math.sqrt(d*d+y*y+v*v),_[1]=Math.sqrt(m*m+G*G+P*P),_[2]=Math.sqrt(I*I+k*k+L*L),_}function h(t,o,_,d){const y=d??new u(3),v=[],m=[];return v[0]=t[0]-o[0],v[1]=t[1]-o[1],v[2]=t[2]-o[2],m[0]=v[0],m[1]=v[1]*Math.cos(_)-v[2]*Math.sin(_),m[2]=v[1]*Math.sin(_)+v[2]*Math.cos(_),y[0]=m[0]+o[0],y[1]=m[1]+o[1],y[2]=m[2]+o[2],y}function x(t,o,_,d){const y=d??new u(3),v=[],m=[];return v[0]=t[0]-o[0],v[1]=t[1]-o[1],v[2]=t[2]-o[2],m[0]=v[2]*Math.sin(_)+v[0]*Math.cos(_),m[1]=v[1],m[2]=v[2]*Math.cos(_)-v[0]*Math.sin(_),y[0]=m[0]+o[0],y[1]=m[1]+o[1],y[2]=m[2]+o[2],y}function n(t,o,_,d){const y=d??new u(3),v=[],m=[];return v[0]=t[0]-o[0],v[1]=t[1]-o[1],v[2]=t[2]-o[2],m[0]=v[0]*Math.cos(_)-v[1]*Math.sin(_),m[1]=v[0]*Math.sin(_)+v[1]*Math.cos(_),m[2]=v[2],y[0]=m[0]+o[0],y[1]=m[1]+o[1],y[2]=m[2]+o[2],y}function c(t,o,_){const d=_??new u(3);return cn(t,d),j(d,o,d)}function s(t,o,_){const d=_??new u(3);return tn(t)>o?c(t,o,d):$(t,d)}function r(t,o,_){const d=_??new u(3);return K(t,o,.5,d)}return{create:g,fromValues:z,set:D,ceil:S,floor:E,round:O,clamp:q,add:M,addScaled:B,angle:R,subtract:Y,sub:Q,equalsApproximately:N,equals:C,lerp:K,lerpV:J,max:V,min:nn,mulScalar:j,scale:In,divScalar:yn,inverse:vn,invert:Bn,cross:un,dot:fn,length:tn,len:Dn,lengthSq:ln,lenSq:kn,distance:an,dist:Z,distanceSq:H,distSq:W,normalize:cn,negate:Gn,copy:$,clone:Wn,multiply:Mn,mul:qn,divide:En,div:On,random:Tn,zero:w,transformMat4:b,transformMat4Upper3x3:f,transformMat3:e,transformQuat:a,getTranslation:i,getAxis:l,getScaling:p,rotateX:h,rotateY:x,rotateZ:n,setLength:c,truncate:s,midpoint:r}}const le=new Map;function ee(u){let g=le.get(u);return g||(g=Ee(u),le.set(u,g)),g}function ke(u){const g=me(u),z=ee(u);function D(e,a,i,l,p,h,x,n,c){const s=new u(12);return s[3]=0,s[7]=0,s[11]=0,e!==void 0&&(s[0]=e,a!==void 0&&(s[1]=a,i!==void 0&&(s[2]=i,l!==void 0&&(s[4]=l,p!==void 0&&(s[5]=p,h!==void 0&&(s[6]=h,x!==void 0&&(s[8]=x,n!==void 0&&(s[9]=n,c!==void 0&&(s[10]=c))))))))),s}function S(e,a,i,l,p,h,x,n,c,s){const r=s??new u(12);return r[0]=e,r[1]=a,r[2]=i,r[3]=0,r[4]=l,r[5]=p,r[6]=h,r[7]=0,r[8]=x,r[9]=n,r[10]=c,r[11]=0,r}function E(e,a){const i=a??new u(12);return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=0,i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=0,i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=0,i}function O(e,a){const i=a??new u(12),l=e[0],p=e[1],h=e[2],x=e[3],n=l+l,c=p+p,s=h+h,r=l*n,t=p*n,o=p*c,_=h*n,d=h*c,y=h*s,v=x*n,m=x*c,G=x*s;return i[0]=1-o-y,i[1]=t+G,i[2]=_-m,i[3]=0,i[4]=t-G,i[5]=1-r-y,i[6]=d+v,i[7]=0,i[8]=_+m,i[9]=d-v,i[10]=1-r-o,i[11]=0,i}function q(e,a){const i=a??new u(12);return i[0]=-e[0],i[1]=-e[1],i[2]=-e[2],i[4]=-e[4],i[5]=-e[5],i[6]=-e[6],i[8]=-e[8],i[9]=-e[9],i[10]=-e[10],i}function M(e,a,i){const l=i??new u(12);return l[0]=e[0]*a,l[1]=e[1]*a,l[2]=e[2]*a,l[4]=e[4]*a,l[5]=e[5]*a,l[6]=e[6]*a,l[8]=e[8]*a,l[9]=e[9]*a,l[10]=e[10]*a,l}const B=M;function R(e,a,i){const l=i??new u(12);return l[0]=e[0]+a[0],l[1]=e[1]+a[1],l[2]=e[2]+a[2],l[4]=e[4]+a[4],l[5]=e[5]+a[5],l[6]=e[6]+a[6],l[8]=e[8]+a[8],l[9]=e[9]+a[9],l[10]=e[10]+a[10],l}function Y(e,a){const i=a??new u(12);return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[8]=e[8],i[9]=e[9],i[10]=e[10],i}const Q=Y;function N(e,a){return Math.abs(e[0]-a[0])<T&&Math.abs(e[1]-a[1])<T&&Math.abs(e[2]-a[2])<T&&Math.abs(e[4]-a[4])<T&&Math.abs(e[5]-a[5])<T&&Math.abs(e[6]-a[6])<T&&Math.abs(e[8]-a[8])<T&&Math.abs(e[9]-a[9])<T&&Math.abs(e[10]-a[10])<T}function C(e,a){return e[0]===a[0]&&e[1]===a[1]&&e[2]===a[2]&&e[4]===a[4]&&e[5]===a[5]&&e[6]===a[6]&&e[8]===a[8]&&e[9]===a[9]&&e[10]===a[10]}function K(e){const a=e??new u(12);return a[0]=1,a[1]=0,a[2]=0,a[4]=0,a[5]=1,a[6]=0,a[8]=0,a[9]=0,a[10]=1,a}function J(e,a){const i=a??new u(12);if(i===e){let o;return o=e[1],e[1]=e[4],e[4]=o,o=e[2],e[2]=e[8],e[8]=o,o=e[6],e[6]=e[9],e[9]=o,i}const l=e[0*4+0],p=e[0*4+1],h=e[0*4+2],x=e[1*4+0],n=e[1*4+1],c=e[1*4+2],s=e[2*4+0],r=e[2*4+1],t=e[2*4+2];return i[0]=l,i[1]=x,i[2]=s,i[4]=p,i[5]=n,i[6]=r,i[8]=h,i[9]=c,i[10]=t,i}function V(e,a){const i=a??new u(12),l=e[0*4+0],p=e[0*4+1],h=e[0*4+2],x=e[1*4+0],n=e[1*4+1],c=e[1*4+2],s=e[2*4+0],r=e[2*4+1],t=e[2*4+2],o=t*n-c*r,_=-t*x+c*s,d=r*x-n*s,y=1/(l*o+p*_+h*d);return i[0]=o*y,i[1]=(-t*p+h*r)*y,i[2]=(c*p-h*n)*y,i[4]=_*y,i[5]=(t*l-h*s)*y,i[6]=(-c*l+h*x)*y,i[8]=d*y,i[9]=(-r*l+p*s)*y,i[10]=(n*l-p*x)*y,i}function nn(e){const a=e[0],i=e[0*4+1],l=e[0*4+2],p=e[1*4+0],h=e[1*4+1],x=e[1*4+2],n=e[2*4+0],c=e[2*4+1],s=e[2*4+2];return a*(h*s-c*x)-p*(i*s-c*l)+n*(i*x-h*l)}const j=V;function In(e,a,i){const l=i??new u(12),p=e[0],h=e[1],x=e[2],n=e[4+0],c=e[4+1],s=e[4+2],r=e[8+0],t=e[8+1],o=e[8+2],_=a[0],d=a[1],y=a[2],v=a[4+0],m=a[4+1],G=a[4+2],P=a[8+0],I=a[8+1],k=a[8+2];return l[0]=p*_+n*d+r*y,l[1]=h*_+c*d+t*y,l[2]=x*_+s*d+o*y,l[4]=p*v+n*m+r*G,l[5]=h*v+c*m+t*G,l[6]=x*v+s*m+o*G,l[8]=p*P+n*I+r*k,l[9]=h*P+c*I+t*k,l[10]=x*P+s*I+o*k,l}const yn=In;function vn(e,a,i){const l=i??K();return e!==l&&(l[0]=e[0],l[1]=e[1],l[2]=e[2],l[4]=e[4],l[5]=e[5],l[6]=e[6]),l[8]=a[0],l[9]=a[1],l[10]=1,l}function Bn(e,a){const i=a??g.create();return i[0]=e[8],i[1]=e[9],i}function un(e,a,i){const l=i??g.create(),p=a*4;return l[0]=e[p+0],l[1]=e[p+1],l}function fn(e,a,i,l){const p=l===e?e:Y(e,l),h=i*4;return p[h+0]=a[0],p[h+1]=a[1],p}function tn(e,a){const i=a??g.create(),l=e[0],p=e[1],h=e[4],x=e[5];return i[0]=Math.sqrt(l*l+p*p),i[1]=Math.sqrt(h*h+x*x),i}function Dn(e,a){const i=a??z.create(),l=e[0],p=e[1],h=e[2],x=e[4],n=e[5],c=e[6],s=e[8],r=e[9],t=e[10];return i[0]=Math.sqrt(l*l+p*p+h*h),i[1]=Math.sqrt(x*x+n*n+c*c),i[2]=Math.sqrt(s*s+r*r+t*t),i}function ln(e,a){const i=a??new u(12);return i[0]=1,i[1]=0,i[2]=0,i[4]=0,i[5]=1,i[6]=0,i[8]=e[0],i[9]=e[1],i[10]=1,i}function kn(e,a,i){const l=i??new u(12),p=a[0],h=a[1],x=e[0],n=e[1],c=e[2],s=e[1*4+0],r=e[1*4+1],t=e[1*4+2],o=e[2*4+0],_=e[2*4+1],d=e[2*4+2];return e!==l&&(l[0]=x,l[1]=n,l[2]=c,l[4]=s,l[5]=r,l[6]=t),l[8]=x*p+s*h+o,l[9]=n*p+r*h+_,l[10]=c*p+t*h+d,l}function an(e,a){const i=a??new u(12),l=Math.cos(e),p=Math.sin(e);return i[0]=l,i[1]=p,i[2]=0,i[4]=-p,i[5]=l,i[6]=0,i[8]=0,i[9]=0,i[10]=1,i}function Z(e,a,i){const l=i??new u(12),p=e[0*4+0],h=e[0*4+1],x=e[0*4+2],n=e[1*4+0],c=e[1*4+1],s=e[1*4+2],r=Math.cos(a),t=Math.sin(a);return l[0]=r*p+t*n,l[1]=r*h+t*c,l[2]=r*x+t*s,l[4]=r*n-t*p,l[5]=r*c-t*h,l[6]=r*s-t*x,e!==l&&(l[8]=e[8],l[9]=e[9],l[10]=e[10]),l}function H(e,a){const i=a??new u(12),l=Math.cos(e),p=Math.sin(e);return i[0]=1,i[1]=0,i[2]=0,i[4]=0,i[5]=l,i[6]=p,i[8]=0,i[9]=-p,i[10]=l,i}function W(e,a,i){const l=i??new u(12),p=e[4],h=e[5],x=e[6],n=e[8],c=e[9],s=e[10],r=Math.cos(a),t=Math.sin(a);return l[4]=r*p+t*n,l[5]=r*h+t*c,l[6]=r*x+t*s,l[8]=r*n-t*p,l[9]=r*c-t*h,l[10]=r*s-t*x,e!==l&&(l[0]=e[0],l[1]=e[1],l[2]=e[2]),l}function cn(e,a){const i=a??new u(12),l=Math.cos(e),p=Math.sin(e);return i[0]=l,i[1]=0,i[2]=-p,i[4]=0,i[5]=1,i[6]=0,i[8]=p,i[9]=0,i[10]=l,i}function Gn(e,a,i){const l=i??new u(12),p=e[0*4+0],h=e[0*4+1],x=e[0*4+2],n=e[2*4+0],c=e[2*4+1],s=e[2*4+2],r=Math.cos(a),t=Math.sin(a);return l[0]=r*p-t*n,l[1]=r*h-t*c,l[2]=r*x-t*s,l[8]=r*n+t*p,l[9]=r*c+t*h,l[10]=r*s+t*x,e!==l&&(l[4]=e[4],l[5]=e[5],l[6]=e[6]),l}const $=an,Wn=Z;function Mn(e,a){const i=a??new u(12);return i[0]=e[0],i[1]=0,i[2]=0,i[4]=0,i[5]=e[1],i[6]=0,i[8]=0,i[9]=0,i[10]=1,i}function qn(e,a,i){const l=i??new u(12),p=a[0],h=a[1];return l[0]=p*e[0*4+0],l[1]=p*e[0*4+1],l[2]=p*e[0*4+2],l[4]=h*e[1*4+0],l[5]=h*e[1*4+1],l[6]=h*e[1*4+2],e!==l&&(l[8]=e[8],l[9]=e[9],l[10]=e[10]),l}function En(e,a){const i=a??new u(12);return i[0]=e[0],i[1]=0,i[2]=0,i[4]=0,i[5]=e[1],i[6]=0,i[8]=0,i[9]=0,i[10]=e[2],i}function On(e,a,i){const l=i??new u(12),p=a[0],h=a[1],x=a[2];return l[0]=p*e[0*4+0],l[1]=p*e[0*4+1],l[2]=p*e[0*4+2],l[4]=h*e[1*4+0],l[5]=h*e[1*4+1],l[6]=h*e[1*4+2],l[8]=x*e[2*4+0],l[9]=x*e[2*4+1],l[10]=x*e[2*4+2],l}function Tn(e,a){const i=a??new u(12);return i[0]=e,i[1]=0,i[2]=0,i[4]=0,i[5]=e,i[6]=0,i[8]=0,i[9]=0,i[10]=1,i}function w(e,a,i){const l=i??new u(12);return l[0]=a*e[0*4+0],l[1]=a*e[0*4+1],l[2]=a*e[0*4+2],l[4]=a*e[1*4+0],l[5]=a*e[1*4+1],l[6]=a*e[1*4+2],e!==l&&(l[8]=e[8],l[9]=e[9],l[10]=e[10]),l}function b(e,a){const i=a??new u(12);return i[0]=e,i[1]=0,i[2]=0,i[4]=0,i[5]=e,i[6]=0,i[8]=0,i[9]=0,i[10]=e,i}function f(e,a,i){const l=i??new u(12);return l[0]=a*e[0*4+0],l[1]=a*e[0*4+1],l[2]=a*e[0*4+2],l[4]=a*e[1*4+0],l[5]=a*e[1*4+1],l[6]=a*e[1*4+2],l[8]=a*e[2*4+0],l[9]=a*e[2*4+1],l[10]=a*e[2*4+2],l}return{add:R,clone:Q,copy:Y,create:D,determinant:nn,equals:C,equalsApproximately:N,fromMat4:E,fromQuat:O,get3DScaling:Dn,getAxis:un,getScaling:tn,getTranslation:Bn,identity:K,inverse:V,invert:j,mul:yn,mulScalar:B,multiply:In,multiplyScalar:M,negate:q,rotate:Z,rotateX:W,rotateY:Gn,rotateZ:Wn,rotation:an,rotationX:H,rotationY:cn,rotationZ:$,scale:qn,scale3D:On,scaling:Mn,scaling3D:En,set:S,setAxis:fn,setTranslation:vn,translate:kn,translation:ln,transpose:J,uniformScale:w,uniformScale3D:f,uniformScaling:Tn,uniformScaling3D:b}}const de=new Map;function Ue(u){let g=de.get(u);return g||(g=ke(u),de.set(u,g)),g}function Ae(u){const g=ee(u);function z(n,c,s,r,t,o,_,d,y,v,m,G,P,I,k,L){const U=new u(16);return n!==void 0&&(U[0]=n,c!==void 0&&(U[1]=c,s!==void 0&&(U[2]=s,r!==void 0&&(U[3]=r,t!==void 0&&(U[4]=t,o!==void 0&&(U[5]=o,_!==void 0&&(U[6]=_,d!==void 0&&(U[7]=d,y!==void 0&&(U[8]=y,v!==void 0&&(U[9]=v,m!==void 0&&(U[10]=m,G!==void 0&&(U[11]=G,P!==void 0&&(U[12]=P,I!==void 0&&(U[13]=I,k!==void 0&&(U[14]=k,L!==void 0&&(U[15]=L)))))))))))))))),U}function D(n,c,s,r,t,o,_,d,y,v,m,G,P,I,k,L,U){const A=U??new u(16);return A[0]=n,A[1]=c,A[2]=s,A[3]=r,A[4]=t,A[5]=o,A[6]=_,A[7]=d,A[8]=y,A[9]=v,A[10]=m,A[11]=G,A[12]=P,A[13]=I,A[14]=k,A[15]=L,A}function S(n,c){const s=c??new u(16);return s[0]=n[0],s[1]=n[1],s[2]=n[2],s[3]=0,s[4]=n[4],s[5]=n[5],s[6]=n[6],s[7]=0,s[8]=n[8],s[9]=n[9],s[10]=n[10],s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function E(n,c){const s=c??new u(16),r=n[0],t=n[1],o=n[2],_=n[3],d=r+r,y=t+t,v=o+o,m=r*d,G=t*d,P=t*y,I=o*d,k=o*y,L=o*v,U=_*d,A=_*y,X=_*v;return s[0]=1-P-L,s[1]=G+X,s[2]=I-A,s[3]=0,s[4]=G-X,s[5]=1-m-L,s[6]=k+U,s[7]=0,s[8]=I+A,s[9]=k-U,s[10]=1-m-P,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function O(n,c){const s=c??new u(16);return s[0]=-n[0],s[1]=-n[1],s[2]=-n[2],s[3]=-n[3],s[4]=-n[4],s[5]=-n[5],s[6]=-n[6],s[7]=-n[7],s[8]=-n[8],s[9]=-n[9],s[10]=-n[10],s[11]=-n[11],s[12]=-n[12],s[13]=-n[13],s[14]=-n[14],s[15]=-n[15],s}function q(n,c,s){const r=s??new u(16);return r[0]=n[0]+c[0],r[1]=n[1]+c[1],r[2]=n[2]+c[2],r[3]=n[3]+c[3],r[4]=n[4]+c[4],r[5]=n[5]+c[5],r[6]=n[6]+c[6],r[7]=n[7]+c[7],r[8]=n[8]+c[8],r[9]=n[9]+c[9],r[10]=n[10]+c[10],r[11]=n[11]+c[11],r[12]=n[12]+c[12],r[13]=n[13]+c[13],r[14]=n[14]+c[14],r[15]=n[15]+c[15],r}function M(n,c,s){const r=s??new u(16);return r[0]=n[0]*c,r[1]=n[1]*c,r[2]=n[2]*c,r[3]=n[3]*c,r[4]=n[4]*c,r[5]=n[5]*c,r[6]=n[6]*c,r[7]=n[7]*c,r[8]=n[8]*c,r[9]=n[9]*c,r[10]=n[10]*c,r[11]=n[11]*c,r[12]=n[12]*c,r[13]=n[13]*c,r[14]=n[14]*c,r[15]=n[15]*c,r}const B=M;function R(n,c){const s=c??new u(16);return s[0]=n[0],s[1]=n[1],s[2]=n[2],s[3]=n[3],s[4]=n[4],s[5]=n[5],s[6]=n[6],s[7]=n[7],s[8]=n[8],s[9]=n[9],s[10]=n[10],s[11]=n[11],s[12]=n[12],s[13]=n[13],s[14]=n[14],s[15]=n[15],s}const Y=R;function Q(n,c){return Math.abs(n[0]-c[0])<T&&Math.abs(n[1]-c[1])<T&&Math.abs(n[2]-c[2])<T&&Math.abs(n[3]-c[3])<T&&Math.abs(n[4]-c[4])<T&&Math.abs(n[5]-c[5])<T&&Math.abs(n[6]-c[6])<T&&Math.abs(n[7]-c[7])<T&&Math.abs(n[8]-c[8])<T&&Math.abs(n[9]-c[9])<T&&Math.abs(n[10]-c[10])<T&&Math.abs(n[11]-c[11])<T&&Math.abs(n[12]-c[12])<T&&Math.abs(n[13]-c[13])<T&&Math.abs(n[14]-c[14])<T&&Math.abs(n[15]-c[15])<T}function N(n,c){return n[0]===c[0]&&n[1]===c[1]&&n[2]===c[2]&&n[3]===c[3]&&n[4]===c[4]&&n[5]===c[5]&&n[6]===c[6]&&n[7]===c[7]&&n[8]===c[8]&&n[9]===c[9]&&n[10]===c[10]&&n[11]===c[11]&&n[12]===c[12]&&n[13]===c[13]&&n[14]===c[14]&&n[15]===c[15]}function C(n){const c=n??new u(16);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function K(n,c){const s=c??new u(16);if(s===n){let F;return F=n[1],n[1]=n[4],n[4]=F,F=n[2],n[2]=n[8],n[8]=F,F=n[3],n[3]=n[12],n[12]=F,F=n[6],n[6]=n[9],n[9]=F,F=n[7],n[7]=n[13],n[13]=F,F=n[11],n[11]=n[14],n[14]=F,s}const r=n[0*4+0],t=n[0*4+1],o=n[0*4+2],_=n[0*4+3],d=n[1*4+0],y=n[1*4+1],v=n[1*4+2],m=n[1*4+3],G=n[2*4+0],P=n[2*4+1],I=n[2*4+2],k=n[2*4+3],L=n[3*4+0],U=n[3*4+1],A=n[3*4+2],X=n[3*4+3];return s[0]=r,s[1]=d,s[2]=G,s[3]=L,s[4]=t,s[5]=y,s[6]=P,s[7]=U,s[8]=o,s[9]=v,s[10]=I,s[11]=A,s[12]=_,s[13]=m,s[14]=k,s[15]=X,s}function J(n,c){const s=c??new u(16),r=n[0*4+0],t=n[0*4+1],o=n[0*4+2],_=n[0*4+3],d=n[1*4+0],y=n[1*4+1],v=n[1*4+2],m=n[1*4+3],G=n[2*4+0],P=n[2*4+1],I=n[2*4+2],k=n[2*4+3],L=n[3*4+0],U=n[3*4+1],A=n[3*4+2],X=n[3*4+3],F=I*X,sn=A*k,rn=v*X,on=A*m,dn=v*k,_n=I*m,pn=o*X,gn=A*_,hn=o*k,xn=I*_,mn=o*m,bn=v*_,Sn=G*U,zn=L*P,Un=d*U,An=L*y,Rn=d*P,$n=G*y,Kn=r*U,Vn=L*t,jn=r*P,Qn=G*t,Jn=r*y,ne=d*t,re=F*y+on*P+dn*U-(sn*y+rn*P+_n*U),oe=sn*t+pn*P+xn*U-(F*t+gn*P+hn*U),ae=rn*t+gn*y+mn*U-(on*t+pn*y+bn*U),ce=_n*t+hn*y+bn*P-(dn*t+xn*y+mn*P),wn=1/(r*re+d*oe+G*ae+L*ce);return s[0]=wn*re,s[1]=wn*oe,s[2]=wn*ae,s[3]=wn*ce,s[4]=wn*(sn*d+rn*G+_n*L-(F*d+on*G+dn*L)),s[5]=wn*(F*r+gn*G+hn*L-(sn*r+pn*G+xn*L)),s[6]=wn*(on*r+pn*d+bn*L-(rn*r+gn*d+mn*L)),s[7]=wn*(dn*r+xn*d+mn*G-(_n*r+hn*d+bn*G)),s[8]=wn*(Sn*m+An*k+Rn*X-(zn*m+Un*k+$n*X)),s[9]=wn*(zn*_+Kn*k+Qn*X-(Sn*_+Vn*k+jn*X)),s[10]=wn*(Un*_+Vn*m+Jn*X-(An*_+Kn*m+ne*X)),s[11]=wn*($n*_+jn*m+ne*k-(Rn*_+Qn*m+Jn*k)),s[12]=wn*(Un*I+$n*A+zn*v-(Rn*A+Sn*v+An*I)),s[13]=wn*(jn*A+Sn*o+Vn*I-(Kn*I+Qn*A+zn*o)),s[14]=wn*(Kn*v+ne*A+An*o-(Jn*A+Un*o+Vn*v)),s[15]=wn*(Jn*I+Rn*o+Qn*v-(jn*v+ne*I+$n*o)),s}function V(n){const c=n[0],s=n[0*4+1],r=n[0*4+2],t=n[0*4+3],o=n[1*4+0],_=n[1*4+1],d=n[1*4+2],y=n[1*4+3],v=n[2*4+0],m=n[2*4+1],G=n[2*4+2],P=n[2*4+3],I=n[3*4+0],k=n[3*4+1],L=n[3*4+2],U=n[3*4+3],A=G*U,X=L*P,F=d*U,sn=L*y,rn=d*P,on=G*y,dn=r*U,_n=L*t,pn=r*P,gn=G*t,hn=r*y,xn=d*t,mn=A*_+sn*m+rn*k-(X*_+F*m+on*k),bn=X*s+dn*m+gn*k-(A*s+_n*m+pn*k),Sn=F*s+_n*_+hn*k-(sn*s+dn*_+xn*k),zn=on*s+pn*_+xn*m-(rn*s+gn*_+hn*m);return c*mn+o*bn+v*Sn+I*zn}const nn=J;function j(n,c,s){const r=s??new u(16),t=n[0],o=n[1],_=n[2],d=n[3],y=n[4+0],v=n[4+1],m=n[4+2],G=n[4+3],P=n[8+0],I=n[8+1],k=n[8+2],L=n[8+3],U=n[12+0],A=n[12+1],X=n[12+2],F=n[12+3],sn=c[0],rn=c[1],on=c[2],dn=c[3],_n=c[4+0],pn=c[4+1],gn=c[4+2],hn=c[4+3],xn=c[8+0],mn=c[8+1],bn=c[8+2],Sn=c[8+3],zn=c[12+0],Un=c[12+1],An=c[12+2],Rn=c[12+3];return r[0]=t*sn+y*rn+P*on+U*dn,r[1]=o*sn+v*rn+I*on+A*dn,r[2]=_*sn+m*rn+k*on+X*dn,r[3]=d*sn+G*rn+L*on+F*dn,r[4]=t*_n+y*pn+P*gn+U*hn,r[5]=o*_n+v*pn+I*gn+A*hn,r[6]=_*_n+m*pn+k*gn+X*hn,r[7]=d*_n+G*pn+L*gn+F*hn,r[8]=t*xn+y*mn+P*bn+U*Sn,r[9]=o*xn+v*mn+I*bn+A*Sn,r[10]=_*xn+m*mn+k*bn+X*Sn,r[11]=d*xn+G*mn+L*bn+F*Sn,r[12]=t*zn+y*Un+P*An+U*Rn,r[13]=o*zn+v*Un+I*An+A*Rn,r[14]=_*zn+m*Un+k*An+X*Rn,r[15]=d*zn+G*Un+L*An+F*Rn,r}const In=j;function yn(n,c,s){const r=s??C();return n!==r&&(r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r[4]=n[4],r[5]=n[5],r[6]=n[6],r[7]=n[7],r[8]=n[8],r[9]=n[9],r[10]=n[10],r[11]=n[11]),r[12]=c[0],r[13]=c[1],r[14]=c[2],r[15]=1,r}function vn(n,c){const s=c??g.create();return s[0]=n[12],s[1]=n[13],s[2]=n[14],s}function Bn(n,c,s){const r=s??g.create(),t=c*4;return r[0]=n[t+0],r[1]=n[t+1],r[2]=n[t+2],r}function un(n,c,s,r){const t=r===n?r:R(n,r),o=s*4;return t[o+0]=c[0],t[o+1]=c[1],t[o+2]=c[2],t}function fn(n,c){const s=c??g.create(),r=n[0],t=n[1],o=n[2],_=n[4],d=n[5],y=n[6],v=n[8],m=n[9],G=n[10];return s[0]=Math.sqrt(r*r+t*t+o*o),s[1]=Math.sqrt(_*_+d*d+y*y),s[2]=Math.sqrt(v*v+m*m+G*G),s}function tn(n,c,s,r,t){const o=t??new u(16),_=Math.tan(Math.PI*.5-.5*n);if(o[0]=_/c,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=_,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[11]=-1,o[12]=0,o[13]=0,o[15]=0,Number.isFinite(r)){const d=1/(s-r);o[10]=r*d,o[14]=r*s*d}else o[10]=-1,o[14]=-s;return o}function Dn(n,c,s,r=1/0,t){const o=t??new u(16),_=1/Math.tan(n*.5);if(o[0]=_/c,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=_,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[11]=-1,o[12]=0,o[13]=0,o[15]=0,r===1/0)o[10]=0,o[14]=s;else{const d=1/(r-s);o[10]=s*d,o[14]=r*s*d}return o}function ln(n,c,s,r,t,o,_){const d=_??new u(16);return d[0]=2/(c-n),d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=2/(r-s),d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1/(t-o),d[11]=0,d[12]=(c+n)/(n-c),d[13]=(r+s)/(s-r),d[14]=t/(t-o),d[15]=1,d}function kn(n,c,s,r,t,o,_){const d=_??new u(16),y=c-n,v=r-s,m=t-o;return d[0]=2*t/y,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=2*t/v,d[6]=0,d[7]=0,d[8]=(n+c)/y,d[9]=(r+s)/v,d[10]=o/m,d[11]=-1,d[12]=0,d[13]=0,d[14]=t*o/m,d[15]=0,d}function an(n,c,s,r,t,o=1/0,_){const d=_??new u(16),y=c-n,v=r-s;if(d[0]=2*t/y,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=2*t/v,d[6]=0,d[7]=0,d[8]=(n+c)/y,d[9]=(r+s)/v,d[11]=-1,d[12]=0,d[13]=0,d[15]=0,o===1/0)d[10]=0,d[14]=t;else{const m=1/(o-t);d[10]=t*m,d[14]=o*t*m}return d}const Z=g.create(),H=g.create(),W=g.create();function cn(n,c,s,r){const t=r??new u(16);return g.normalize(g.subtract(c,n,W),W),g.normalize(g.cross(s,W,Z),Z),g.normalize(g.cross(W,Z,H),H),t[0]=Z[0],t[1]=Z[1],t[2]=Z[2],t[3]=0,t[4]=H[0],t[5]=H[1],t[6]=H[2],t[7]=0,t[8]=W[0],t[9]=W[1],t[10]=W[2],t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function Gn(n,c,s,r){const t=r??new u(16);return g.normalize(g.subtract(n,c,W),W),g.normalize(g.cross(s,W,Z),Z),g.normalize(g.cross(W,Z,H),H),t[0]=Z[0],t[1]=Z[1],t[2]=Z[2],t[3]=0,t[4]=H[0],t[5]=H[1],t[6]=H[2],t[7]=0,t[8]=W[0],t[9]=W[1],t[10]=W[2],t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function $(n,c,s,r){const t=r??new u(16);return g.normalize(g.subtract(n,c,W),W),g.normalize(g.cross(s,W,Z),Z),g.normalize(g.cross(W,Z,H),H),t[0]=Z[0],t[1]=H[0],t[2]=W[0],t[3]=0,t[4]=Z[1],t[5]=H[1],t[6]=W[1],t[7]=0,t[8]=Z[2],t[9]=H[2],t[10]=W[2],t[11]=0,t[12]=-(Z[0]*n[0]+Z[1]*n[1]+Z[2]*n[2]),t[13]=-(H[0]*n[0]+H[1]*n[1]+H[2]*n[2]),t[14]=-(W[0]*n[0]+W[1]*n[1]+W[2]*n[2]),t[15]=1,t}function Wn(n,c){const s=c??new u(16);return s[0]=1,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=1,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=1,s[11]=0,s[12]=n[0],s[13]=n[1],s[14]=n[2],s[15]=1,s}function Mn(n,c,s){const r=s??new u(16),t=c[0],o=c[1],_=c[2],d=n[0],y=n[1],v=n[2],m=n[3],G=n[1*4+0],P=n[1*4+1],I=n[1*4+2],k=n[1*4+3],L=n[2*4+0],U=n[2*4+1],A=n[2*4+2],X=n[2*4+3],F=n[3*4+0],sn=n[3*4+1],rn=n[3*4+2],on=n[3*4+3];return n!==r&&(r[0]=d,r[1]=y,r[2]=v,r[3]=m,r[4]=G,r[5]=P,r[6]=I,r[7]=k,r[8]=L,r[9]=U,r[10]=A,r[11]=X),r[12]=d*t+G*o+L*_+F,r[13]=y*t+P*o+U*_+sn,r[14]=v*t+I*o+A*_+rn,r[15]=m*t+k*o+X*_+on,r}function qn(n,c){const s=c??new u(16),r=Math.cos(n),t=Math.sin(n);return s[0]=1,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=r,s[6]=t,s[7]=0,s[8]=0,s[9]=-t,s[10]=r,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function En(n,c,s){const r=s??new u(16),t=n[4],o=n[5],_=n[6],d=n[7],y=n[8],v=n[9],m=n[10],G=n[11],P=Math.cos(c),I=Math.sin(c);return r[4]=P*t+I*y,r[5]=P*o+I*v,r[6]=P*_+I*m,r[7]=P*d+I*G,r[8]=P*y-I*t,r[9]=P*v-I*o,r[10]=P*m-I*_,r[11]=P*G-I*d,n!==r&&(r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r[12]=n[12],r[13]=n[13],r[14]=n[14],r[15]=n[15]),r}function On(n,c){const s=c??new u(16),r=Math.cos(n),t=Math.sin(n);return s[0]=r,s[1]=0,s[2]=-t,s[3]=0,s[4]=0,s[5]=1,s[6]=0,s[7]=0,s[8]=t,s[9]=0,s[10]=r,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function Tn(n,c,s){const r=s??new u(16),t=n[0*4+0],o=n[0*4+1],_=n[0*4+2],d=n[0*4+3],y=n[2*4+0],v=n[2*4+1],m=n[2*4+2],G=n[2*4+3],P=Math.cos(c),I=Math.sin(c);return r[0]=P*t-I*y,r[1]=P*o-I*v,r[2]=P*_-I*m,r[3]=P*d-I*G,r[8]=P*y+I*t,r[9]=P*v+I*o,r[10]=P*m+I*_,r[11]=P*G+I*d,n!==r&&(r[4]=n[4],r[5]=n[5],r[6]=n[6],r[7]=n[7],r[12]=n[12],r[13]=n[13],r[14]=n[14],r[15]=n[15]),r}function w(n,c){const s=c??new u(16),r=Math.cos(n),t=Math.sin(n);return s[0]=r,s[1]=t,s[2]=0,s[3]=0,s[4]=-t,s[5]=r,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=1,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function b(n,c,s){const r=s??new u(16),t=n[0*4+0],o=n[0*4+1],_=n[0*4+2],d=n[0*4+3],y=n[1*4+0],v=n[1*4+1],m=n[1*4+2],G=n[1*4+3],P=Math.cos(c),I=Math.sin(c);return r[0]=P*t+I*y,r[1]=P*o+I*v,r[2]=P*_+I*m,r[3]=P*d+I*G,r[4]=P*y-I*t,r[5]=P*v-I*o,r[6]=P*m-I*_,r[7]=P*G-I*d,n!==r&&(r[8]=n[8],r[9]=n[9],r[10]=n[10],r[11]=n[11],r[12]=n[12],r[13]=n[13],r[14]=n[14],r[15]=n[15]),r}function f(n,c,s){const r=s??new u(16);let t=n[0],o=n[1],_=n[2];const d=Math.sqrt(t*t+o*o+_*_);t/=d,o/=d,_/=d;const y=t*t,v=o*o,m=_*_,G=Math.cos(c),P=Math.sin(c),I=1-G;return r[0]=y+(1-y)*G,r[1]=t*o*I+_*P,r[2]=t*_*I-o*P,r[3]=0,r[4]=t*o*I-_*P,r[5]=v+(1-v)*G,r[6]=o*_*I+t*P,r[7]=0,r[8]=t*_*I+o*P,r[9]=o*_*I-t*P,r[10]=m+(1-m)*G,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}const e=f;function a(n,c,s,r){const t=r??new u(16);let o=c[0],_=c[1],d=c[2];const y=Math.sqrt(o*o+_*_+d*d);o/=y,_/=y,d/=y;const v=o*o,m=_*_,G=d*d,P=Math.cos(s),I=Math.sin(s),k=1-P,L=v+(1-v)*P,U=o*_*k+d*I,A=o*d*k-_*I,X=o*_*k-d*I,F=m+(1-m)*P,sn=_*d*k+o*I,rn=o*d*k+_*I,on=_*d*k-o*I,dn=G+(1-G)*P,_n=n[0],pn=n[1],gn=n[2],hn=n[3],xn=n[4],mn=n[5],bn=n[6],Sn=n[7],zn=n[8],Un=n[9],An=n[10],Rn=n[11];return t[0]=L*_n+U*xn+A*zn,t[1]=L*pn+U*mn+A*Un,t[2]=L*gn+U*bn+A*An,t[3]=L*hn+U*Sn+A*Rn,t[4]=X*_n+F*xn+sn*zn,t[5]=X*pn+F*mn+sn*Un,t[6]=X*gn+F*bn+sn*An,t[7]=X*hn+F*Sn+sn*Rn,t[8]=rn*_n+on*xn+dn*zn,t[9]=rn*pn+on*mn+dn*Un,t[10]=rn*gn+on*bn+dn*An,t[11]=rn*hn+on*Sn+dn*Rn,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t}const i=a;function l(n,c){const s=c??new u(16);return s[0]=n[0],s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=n[1],s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=n[2],s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function p(n,c,s){const r=s??new u(16),t=c[0],o=c[1],_=c[2];return r[0]=t*n[0*4+0],r[1]=t*n[0*4+1],r[2]=t*n[0*4+2],r[3]=t*n[0*4+3],r[4]=o*n[1*4+0],r[5]=o*n[1*4+1],r[6]=o*n[1*4+2],r[7]=o*n[1*4+3],r[8]=_*n[2*4+0],r[9]=_*n[2*4+1],r[10]=_*n[2*4+2],r[11]=_*n[2*4+3],n!==r&&(r[12]=n[12],r[13]=n[13],r[14]=n[14],r[15]=n[15]),r}function h(n,c){const s=c??new u(16);return s[0]=n,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=n,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=n,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function x(n,c,s){const r=s??new u(16);return r[0]=c*n[0*4+0],r[1]=c*n[0*4+1],r[2]=c*n[0*4+2],r[3]=c*n[0*4+3],r[4]=c*n[1*4+0],r[5]=c*n[1*4+1],r[6]=c*n[1*4+2],r[7]=c*n[1*4+3],r[8]=c*n[2*4+0],r[9]=c*n[2*4+1],r[10]=c*n[2*4+2],r[11]=c*n[2*4+3],n!==r&&(r[12]=n[12],r[13]=n[13],r[14]=n[14],r[15]=n[15]),r}return{add:q,aim:cn,axisRotate:a,axisRotation:f,cameraAim:Gn,clone:Y,copy:R,create:z,determinant:V,equals:N,equalsApproximately:Q,fromMat3:S,fromQuat:E,frustum:kn,frustumReverseZ:an,getAxis:Bn,getScaling:fn,getTranslation:vn,identity:C,inverse:J,invert:nn,lookAt:$,mul:In,mulScalar:B,multiply:j,multiplyScalar:M,negate:O,ortho:ln,perspective:tn,perspectiveReverseZ:Dn,rotate:i,rotateX:En,rotateY:Tn,rotateZ:b,rotation:e,rotationX:qn,rotationY:On,rotationZ:w,scale:p,scaling:l,set:D,setAxis:un,setTranslation:yn,translate:Mn,translation:Wn,transpose:K,uniformScale:x,uniformScaling:h}}const fe=new Map;function Re(u){let g=fe.get(u);return g||(g=Ae(u),fe.set(u,g)),g}function Le(u){const g=ee(u);function z(w,b,f,e){const a=new u(4);return w!==void 0&&(a[0]=w,b!==void 0&&(a[1]=b,f!==void 0&&(a[2]=f,e!==void 0&&(a[3]=e)))),a}const D=z;function S(w,b,f,e,a){const i=a??new u(4);return i[0]=w,i[1]=b,i[2]=f,i[3]=e,i}function E(w,b,f){const e=f??new u(4),a=b*.5,i=Math.sin(a);return e[0]=i*w[0],e[1]=i*w[1],e[2]=i*w[2],e[3]=Math.cos(a),e}function O(w,b){const f=b??g.create(3),e=Math.acos(w[3])*2,a=Math.sin(e*.5);return a>T?(f[0]=w[0]/a,f[1]=w[1]/a,f[2]=w[2]/a):(f[0]=1,f[1]=0,f[2]=0),{angle:e,axis:f}}function q(w,b){const f=tn(w,b);return Math.acos(2*f*f-1)}function M(w,b,f){const e=f??new u(4),a=w[0],i=w[1],l=w[2],p=w[3],h=b[0],x=b[1],n=b[2],c=b[3];return e[0]=a*c+p*h+i*n-l*x,e[1]=i*c+p*x+l*h-a*n,e[2]=l*c+p*n+a*x-i*h,e[3]=p*c-a*h-i*x-l*n,e}const B=M;function R(w,b,f){const e=f??new u(4),a=b*.5,i=w[0],l=w[1],p=w[2],h=w[3],x=Math.sin(a),n=Math.cos(a);return e[0]=i*n+h*x,e[1]=l*n+p*x,e[2]=p*n-l*x,e[3]=h*n-i*x,e}function Y(w,b,f){const e=f??new u(4),a=b*.5,i=w[0],l=w[1],p=w[2],h=w[3],x=Math.sin(a),n=Math.cos(a);return e[0]=i*n-p*x,e[1]=l*n+h*x,e[2]=p*n+i*x,e[3]=h*n-l*x,e}function Q(w,b,f){const e=f??new u(4),a=b*.5,i=w[0],l=w[1],p=w[2],h=w[3],x=Math.sin(a),n=Math.cos(a);return e[0]=i*n+l*x,e[1]=l*n-i*x,e[2]=p*n+h*x,e[3]=h*n-p*x,e}function N(w,b,f,e){const a=e??new u(4),i=w[0],l=w[1],p=w[2],h=w[3];let x=b[0],n=b[1],c=b[2],s=b[3],r=i*x+l*n+p*c+h*s;r<0&&(r=-r,x=-x,n=-n,c=-c,s=-s);let t,o;if(1-r>T){const _=Math.acos(r),d=Math.sin(_);t=Math.sin((1-f)*_)/d,o=Math.sin(f*_)/d}else t=1-f,o=f;return a[0]=t*i+o*x,a[1]=t*l+o*n,a[2]=t*p+o*c,a[3]=t*h+o*s,a}function C(w,b){const f=b??new u(4),e=w[0],a=w[1],i=w[2],l=w[3],p=e*e+a*a+i*i+l*l,h=p?1/p:0;return f[0]=-e*h,f[1]=-a*h,f[2]=-i*h,f[3]=l*h,f}function K(w,b){const f=b??new u(4);return f[0]=-w[0],f[1]=-w[1],f[2]=-w[2],f[3]=w[3],f}function J(w,b){const f=b??new u(4),e=w[0]+w[5]+w[10];if(e>0){const a=Math.sqrt(e+1);f[3]=.5*a;const i=.5/a;f[0]=(w[6]-w[9])*i,f[1]=(w[8]-w[2])*i,f[2]=(w[1]-w[4])*i}else{let a=0;w[5]>w[0]&&(a=1),w[10]>w[a*4+a]&&(a=2);const i=(a+1)%3,l=(a+2)%3,p=Math.sqrt(w[a*4+a]-w[i*4+i]-w[l*4+l]+1);f[a]=.5*p;const h=.5/p;f[3]=(w[i*4+l]-w[l*4+i])*h,f[i]=(w[i*4+a]+w[a*4+i])*h,f[l]=(w[l*4+a]+w[a*4+l])*h}return f}function V(w,b,f,e,a){const i=a??new u(4),l=w*.5,p=b*.5,h=f*.5,x=Math.sin(l),n=Math.cos(l),c=Math.sin(p),s=Math.cos(p),r=Math.sin(h),t=Math.cos(h);switch(e){case"xyz":i[0]=x*s*t+n*c*r,i[1]=n*c*t-x*s*r,i[2]=n*s*r+x*c*t,i[3]=n*s*t-x*c*r;break;case"xzy":i[0]=x*s*t-n*c*r,i[1]=n*c*t-x*s*r,i[2]=n*s*r+x*c*t,i[3]=n*s*t+x*c*r;break;case"yxz":i[0]=x*s*t+n*c*r,i[1]=n*c*t-x*s*r,i[2]=n*s*r-x*c*t,i[3]=n*s*t+x*c*r;break;case"yzx":i[0]=x*s*t+n*c*r,i[1]=n*c*t+x*s*r,i[2]=n*s*r-x*c*t,i[3]=n*s*t-x*c*r;break;case"zxy":i[0]=x*s*t-n*c*r,i[1]=n*c*t+x*s*r,i[2]=n*s*r+x*c*t,i[3]=n*s*t-x*c*r;break;case"zyx":i[0]=x*s*t-n*c*r,i[1]=n*c*t+x*s*r,i[2]=n*s*r-x*c*t,i[3]=n*s*t+x*c*r;break;default:throw new Error(`Unknown rotation order: ${e}`)}return i}function nn(w,b){const f=b??new u(4);return f[0]=w[0],f[1]=w[1],f[2]=w[2],f[3]=w[3],f}const j=nn;function In(w,b,f){const e=f??new u(4);return e[0]=w[0]+b[0],e[1]=w[1]+b[1],e[2]=w[2]+b[2],e[3]=w[3]+b[3],e}function yn(w,b,f){const e=f??new u(4);return e[0]=w[0]-b[0],e[1]=w[1]-b[1],e[2]=w[2]-b[2],e[3]=w[3]-b[3],e}const vn=yn;function Bn(w,b,f){const e=f??new u(4);return e[0]=w[0]*b,e[1]=w[1]*b,e[2]=w[2]*b,e[3]=w[3]*b,e}const un=Bn;function fn(w,b,f){const e=f??new u(4);return e[0]=w[0]/b,e[1]=w[1]/b,e[2]=w[2]/b,e[3]=w[3]/b,e}function tn(w,b){return w[0]*b[0]+w[1]*b[1]+w[2]*b[2]+w[3]*b[3]}function Dn(w,b,f,e){const a=e??new u(4);return a[0]=w[0]+f*(b[0]-w[0]),a[1]=w[1]+f*(b[1]-w[1]),a[2]=w[2]+f*(b[2]-w[2]),a[3]=w[3]+f*(b[3]-w[3]),a}function ln(w){const b=w[0],f=w[1],e=w[2],a=w[3];return Math.sqrt(b*b+f*f+e*e+a*a)}const kn=ln;function an(w){const b=w[0],f=w[1],e=w[2],a=w[3];return b*b+f*f+e*e+a*a}const Z=an;function H(w,b){const f=b??new u(4),e=w[0],a=w[1],i=w[2],l=w[3],p=Math.sqrt(e*e+a*a+i*i+l*l);return p>1e-5?(f[0]=e/p,f[1]=a/p,f[2]=i/p,f[3]=l/p):(f[0]=0,f[1]=0,f[2]=0,f[3]=1),f}function W(w,b){return Math.abs(w[0]-b[0])<T&&Math.abs(w[1]-b[1])<T&&Math.abs(w[2]-b[2])<T&&Math.abs(w[3]-b[3])<T}function cn(w,b){return w[0]===b[0]&&w[1]===b[1]&&w[2]===b[2]&&w[3]===b[3]}function Gn(w){const b=w??new u(4);return b[0]=0,b[1]=0,b[2]=0,b[3]=1,b}const $=g.create(),Wn=g.create(),Mn=g.create();function qn(w,b,f){const e=f??new u(4),a=g.dot(w,b);return a<-.999999?(g.cross(Wn,w,$),g.len($)<1e-6&&g.cross(Mn,w,$),g.normalize($,$),E($,Math.PI,e),e):a>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(g.cross(w,b,$),e[0]=$[0],e[1]=$[1],e[2]=$[2],e[3]=1+a,H(e,e))}const En=new u(4),On=new u(4);function Tn(w,b,f,e,a,i){const l=i??new u(4);return N(w,e,a,En),N(b,f,a,On),N(En,On,2*a*(1-a),l),l}return{create:z,fromValues:D,set:S,fromAxisAngle:E,toAxisAngle:O,angle:q,multiply:M,mul:B,rotateX:R,rotateY:Y,rotateZ:Q,slerp:N,inverse:C,conjugate:K,fromMat:J,fromEuler:V,copy:nn,clone:j,add:In,subtract:yn,sub:vn,mulScalar:Bn,scale:un,divScalar:fn,dot:tn,lerp:Dn,length:ln,len:kn,lengthSq:an,lenSq:Z,normalize:H,equalsApproximately:W,equals:cn,identity:Gn,rotationTo:qn,sqlerp:Tn}}const _e=new Map;function Oe(u){let g=_e.get(u);return g||(g=Le(u),_e.set(u,g)),g}function Te(u){function g(f,e,a,i){const l=new u(4);return f!==void 0&&(l[0]=f,e!==void 0&&(l[1]=e,a!==void 0&&(l[2]=a,i!==void 0&&(l[3]=i)))),l}const z=g;function D(f,e,a,i,l){const p=l??new u(4);return p[0]=f,p[1]=e,p[2]=a,p[3]=i,p}function S(f,e){const a=e??new u(4);return a[0]=Math.ceil(f[0]),a[1]=Math.ceil(f[1]),a[2]=Math.ceil(f[2]),a[3]=Math.ceil(f[3]),a}function E(f,e){const a=e??new u(4);return a[0]=Math.floor(f[0]),a[1]=Math.floor(f[1]),a[2]=Math.floor(f[2]),a[3]=Math.floor(f[3]),a}function O(f,e){const a=e??new u(4);return a[0]=Math.round(f[0]),a[1]=Math.round(f[1]),a[2]=Math.round(f[2]),a[3]=Math.round(f[3]),a}function q(f,e=0,a=1,i){const l=i??new u(4);return l[0]=Math.min(a,Math.max(e,f[0])),l[1]=Math.min(a,Math.max(e,f[1])),l[2]=Math.min(a,Math.max(e,f[2])),l[3]=Math.min(a,Math.max(e,f[3])),l}function M(f,e,a){const i=a??new u(4);return i[0]=f[0]+e[0],i[1]=f[1]+e[1],i[2]=f[2]+e[2],i[3]=f[3]+e[3],i}function B(f,e,a,i){const l=i??new u(4);return l[0]=f[0]+e[0]*a,l[1]=f[1]+e[1]*a,l[2]=f[2]+e[2]*a,l[3]=f[3]+e[3]*a,l}function R(f,e,a){const i=a??new u(4);return i[0]=f[0]-e[0],i[1]=f[1]-e[1],i[2]=f[2]-e[2],i[3]=f[3]-e[3],i}const Y=R;function Q(f,e){return Math.abs(f[0]-e[0])<T&&Math.abs(f[1]-e[1])<T&&Math.abs(f[2]-e[2])<T&&Math.abs(f[3]-e[3])<T}function N(f,e){return f[0]===e[0]&&f[1]===e[1]&&f[2]===e[2]&&f[3]===e[3]}function C(f,e,a,i){const l=i??new u(4);return l[0]=f[0]+a*(e[0]-f[0]),l[1]=f[1]+a*(e[1]-f[1]),l[2]=f[2]+a*(e[2]-f[2]),l[3]=f[3]+a*(e[3]-f[3]),l}function K(f,e,a,i){const l=i??new u(4);return l[0]=f[0]+a[0]*(e[0]-f[0]),l[1]=f[1]+a[1]*(e[1]-f[1]),l[2]=f[2]+a[2]*(e[2]-f[2]),l[3]=f[3]+a[3]*(e[3]-f[3]),l}function J(f,e,a){const i=a??new u(4);return i[0]=Math.max(f[0],e[0]),i[1]=Math.max(f[1],e[1]),i[2]=Math.max(f[2],e[2]),i[3]=Math.max(f[3],e[3]),i}function V(f,e,a){const i=a??new u(4);return i[0]=Math.min(f[0],e[0]),i[1]=Math.min(f[1],e[1]),i[2]=Math.min(f[2],e[2]),i[3]=Math.min(f[3],e[3]),i}function nn(f,e,a){const i=a??new u(4);return i[0]=f[0]*e,i[1]=f[1]*e,i[2]=f[2]*e,i[3]=f[3]*e,i}const j=nn;function In(f,e,a){const i=a??new u(4);return i[0]=f[0]/e,i[1]=f[1]/e,i[2]=f[2]/e,i[3]=f[3]/e,i}function yn(f,e){const a=e??new u(4);return a[0]=1/f[0],a[1]=1/f[1],a[2]=1/f[2],a[3]=1/f[3],a}const vn=yn;function Bn(f,e){return f[0]*e[0]+f[1]*e[1]+f[2]*e[2]+f[3]*e[3]}function un(f){const e=f[0],a=f[1],i=f[2],l=f[3];return Math.sqrt(e*e+a*a+i*i+l*l)}const fn=un;function tn(f){const e=f[0],a=f[1],i=f[2],l=f[3];return e*e+a*a+i*i+l*l}const Dn=tn;function ln(f,e){const a=f[0]-e[0],i=f[1]-e[1],l=f[2]-e[2],p=f[3]-e[3];return Math.sqrt(a*a+i*i+l*l+p*p)}const kn=ln;function an(f,e){const a=f[0]-e[0],i=f[1]-e[1],l=f[2]-e[2],p=f[3]-e[3];return a*a+i*i+l*l+p*p}const Z=an;function H(f,e){const a=e??new u(4),i=f[0],l=f[1],p=f[2],h=f[3],x=Math.sqrt(i*i+l*l+p*p+h*h);return x>1e-5?(a[0]=i/x,a[1]=l/x,a[2]=p/x,a[3]=h/x):(a[0]=0,a[1]=0,a[2]=0,a[3]=0),a}function W(f,e){const a=e??new u(4);return a[0]=-f[0],a[1]=-f[1],a[2]=-f[2],a[3]=-f[3],a}function cn(f,e){const a=e??new u(4);return a[0]=f[0],a[1]=f[1],a[2]=f[2],a[3]=f[3],a}const Gn=cn;function $(f,e,a){const i=a??new u(4);return i[0]=f[0]*e[0],i[1]=f[1]*e[1],i[2]=f[2]*e[2],i[3]=f[3]*e[3],i}const Wn=$;function Mn(f,e,a){const i=a??new u(4);return i[0]=f[0]/e[0],i[1]=f[1]/e[1],i[2]=f[2]/e[2],i[3]=f[3]/e[3],i}const qn=Mn;function En(f){const e=f??new u(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}function On(f,e,a){const i=a??new u(4),l=f[0],p=f[1],h=f[2],x=f[3];return i[0]=e[0]*l+e[4]*p+e[8]*h+e[12]*x,i[1]=e[1]*l+e[5]*p+e[9]*h+e[13]*x,i[2]=e[2]*l+e[6]*p+e[10]*h+e[14]*x,i[3]=e[3]*l+e[7]*p+e[11]*h+e[15]*x,i}function Tn(f,e,a){const i=a??new u(4);return H(f,i),nn(i,e,i)}function w(f,e,a){const i=a??new u(4);return un(f)>e?Tn(f,e,i):cn(f,i)}function b(f,e,a){const i=a??new u(4);return C(f,e,.5,i)}return{create:g,fromValues:z,set:D,ceil:S,floor:E,round:O,clamp:q,add:M,addScaled:B,subtract:R,sub:Y,equalsApproximately:Q,equals:N,lerp:C,lerpV:K,max:J,min:V,mulScalar:nn,scale:j,divScalar:In,inverse:yn,invert:vn,dot:Bn,length:un,len:fn,lengthSq:tn,lenSq:Dn,distance:ln,dist:kn,distanceSq:an,distSq:Z,normalize:H,negate:W,copy:cn,clone:Gn,multiply:$,mul:Wn,divide:Mn,div:qn,zero:En,transformMat4:On,setLength:Tn,truncate:w,midpoint:b}}const pe=new Map;function We(u){let g=pe.get(u);return g||(g=Te(u),pe.set(u,g)),g}function se(u,g,z,D,S,E){return{mat3:Ue(u),mat4:Re(g),quat:Oe(z),vec2:me(D),vec3:ee(S),vec4:We(E)}}const{mat3:qe,mat4:Pn,quat:ge,vec2:he,vec3:en,vec4:Gt}=se(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);se(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);se(Ge,Array,Array,Array,Array,Array);const xe=document.querySelector("#log");let Ln=null,Xn=null;function be(){if(Ln)return Ln;Ln=document.createElement("div"),Ln.className="ply-spinner-overlay";const u=document.createElement("div");return u.className="ply-spinner",Ln.appendChild(u),Xn=document.createElement("div"),Xn.className="ply-spinner-label",Ln.appendChild(Xn),Ln.style.display="none",document.body.appendChild(Ln),Ln}function Ze(u){be(),Xn&&u&&(Xn.textContent=u),Ln&&(Ln.style.display="flex")}function Nn(u){be(),Xn&&(Xn.textContent=u)}function He(){Ln&&(Ln.style.display="none")}function Se(u){console.error(u),xe&&(xe.textContent=u)}function te(u,g){return 2*Math.atan(g/(2*u))}function Ce(u,g){const z=en.mulScalar(g,-1);return Pn.translate(u,z)}function Fe(u,g,z,D){const S=Math.tan(D/2),E=Math.tan(z/2),O=S*u,q=-O,M=E*u,B=-M,R=Pn.create();return R[0]=2*u/(M-B),R[5]=-2*u/(O-q),R[2]=(M+B)/(M-B),R[6]=(O+q)/(O-q),R[14]=1,R[10]=g/(g-u),R[11]=-(g*u)/(g-u),Pn.transpose(R,R),R}async function Ye(u){const z=await(await fetch(u)).json();return`${z.length}`,z.map(D=>{const S=en.clone(D.position),E=Pn.fromMat3(qe.create(...D.rotation.flat()));return{position:S,rotation:E,fx:D.fx,fy:D.fy,img_width:D.width,img_height:D.height,img_name:D.img_name}})}const Xe=4*2,Ne=4*16,ze=4*Ne+2*Xe;function $e(u){return u.createBuffer({label:"camera uniform",size:ze,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const Fn=new Float32Array(ze/Float32Array.BYTES_PER_ELEMENT);class Ke{constructor(g,z){this.canvas=g,this.device=z,this.uniform_buffer=$e(z),this.on_update_canvas()}on_update_canvas(){const g=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=g,this.focal[1]=g,this.fovX=te(g,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.update_buffer()}uniform_buffer;position=en.create();rotation=Pn.create();fovY=45/180*Math.PI;fovX;focal=he.create();viewport=he.create();view_matrix=Pn.identity();proj_matrix=Pn.identity();look=en.create(0,0,1);up=en.create(0,1,0);right=en.create(1,0,0);update_buffer(){let g=0;this.view_matrix=Ce(this.rotation,this.position),this.proj_matrix=Fe(.01,100,this.fovX,this.fovY);const z=Pn.inverse(this.view_matrix);en.transformMat4Upper3x3(en.create(0,0,1),z,this.look),en.normalize(this.look,this.look),en.cross(this.up,this.look,this.right),en.normalize(this.right,this.right),Fn.set(this.view_matrix,g),g+=16,Fn.set(z,g),g+=16,Fn.set(this.proj_matrix,g),g+=16,Fn.set(Pn.inverse(this.proj_matrix),g),g+=16,Fn.set(this.viewport,g),g+=2,Fn.set(this.focal,g),g+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,Fn)}set_preset(g){en.copy(g.position,this.position),Pn.copy(g.rotation,this.rotation),this.update_buffer()}set_eval_preset(g,z=1){en.copy(g.position,this.position),Pn.copy(g.rotation,this.rotation);const D=Math.floor((g.img_width??this.canvas.width)/z),S=Math.floor((g.img_height??this.canvas.height)/z),E=(g.fx??this.focal[0])/z,O=(g.fy??this.focal[1])/z;this.canvas.width=D,this.canvas.height=S,this.focal[0]=E,this.focal[1]=O,this.fovY=te(O,S),this.fovX=te(E,D),this.viewport[0]=D,this.viewport[1]=S,this.update_buffer()}}class Ve{constructor(g){this.camera=g,this.register_element(g.canvas)}element;enabled=!0;pressedKeys=new Set;movementSpeed=1;boostMultiplier=3;rotationSpeed=1;register_element(g){this.element&&this.element!=g&&(this.element.removeEventListener("pointerdown",this.downCallback.bind(this)),this.element.removeEventListener("pointermove",this.moveCallback.bind(this)),this.element.removeEventListener("pointerup",this.upCallback.bind(this)),this.element.removeEventListener("wheel",this.wheelCallback.bind(this))),this.element=g,this.element.addEventListener("pointerdown",this.downCallback.bind(this)),this.element.addEventListener("pointermove",this.moveCallback.bind(this)),this.element.addEventListener("pointerup",this.upCallback.bind(this)),this.element.addEventListener("wheel",this.wheelCallback.bind(this)),this.element.addEventListener("keydown",this.keyDownCallback.bind(this)),this.element.addEventListener("keyup",this.keyUpCallback.bind(this)),this.element.addEventListener("contextmenu",z=>{z.preventDefault()}),this.element.tabIndex=0,window.addEventListener("blur",this.clearKeys.bind(this)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clearKeys()})}panning=!1;rotating=!1;lastX;lastY;downCallback(g){this.element.focus({preventScroll:!0}),this.enabled&&g.isPrimary&&(g.button===0?(this.rotating=!0,this.panning=!1):(this.rotating=!1,this.panning=!0),this.lastX=g.pageX,this.lastY=g.pageY)}moveCallback(g){if(!this.enabled||!(this.rotating||this.panning))return;const z=g.pageX-this.lastX,D=g.pageY-this.lastY;this.lastX=g.pageX,this.lastY=g.pageY,this.rotating?this.rotate(z,D):this.panning&&this.pan(z,D)}upCallback(g){this.rotating=!1,this.panning=!1,g.preventDefault()}wheelCallback(g){if(!this.enabled)return;g.preventDefault();const z=en.mulScalar(this.camera.look,-g.deltaY*.001);en.add(z,this.camera.position,this.camera.position),this.camera.update_buffer()}isControlKey(g){return g==="KeyW"||g==="KeyA"||g==="KeyS"||g==="KeyD"||g==="ArrowUp"||g==="ArrowLeft"||g==="ArrowDown"||g==="ArrowRight"||g==="KeyQ"||g==="KeyE"}keyDownCallback(g){if(g.code==="ShiftLeft"||g.code==="ShiftRight"){this.pressedKeys.add(g.code);return}!this.enabled||!this.isControlKey(g.code)||g.ctrlKey||g.metaKey||g.altKey||(this.pressedKeys.add(g.code),g.preventDefault())}keyUpCallback(g){if(g.code==="ShiftLeft"||g.code==="ShiftRight"){this.pressedKeys.delete(g.code);return}this.isControlKey(g.code)&&(this.pressedKeys.delete(g.code),g.preventDefault())}clearKeys(){this.pressedKeys.clear()}update(g){if(!this.enabled||this.pressedKeys.size===0)return!1;const z=Number(this.pressedKeys.has("KeyW"))-Number(this.pressedKeys.has("KeyS")),D=Number(this.pressedKeys.has("KeyA"))-Number(this.pressedKeys.has("KeyD")),S=Number(this.pressedKeys.has("ArrowDown"))-Number(this.pressedKeys.has("ArrowUp")),E=Number(this.pressedKeys.has("ArrowLeft"))-Number(this.pressedKeys.has("ArrowRight")),O=Number(this.pressedKeys.has("KeyQ"))-Number(this.pressedKeys.has("KeyE"));if(z===0&&D===0&&S===0&&E===0&&O===0)return!1;const q=Math.min(Math.max(g,0),.1);if(z!==0||D!==0){const M=Math.hypot(z,D),B=this.pressedKeys.has("ShiftLeft")||this.pressedKeys.has("ShiftRight"),R=this.movementSpeed*(B?this.boostMultiplier:1)*q/M;this.camera.position[0]+=(this.camera.look[0]*z+this.camera.right[0]*D)*R,this.camera.position[1]+=(this.camera.look[1]*z+this.camera.right[1]*D)*R,this.camera.position[2]+=(this.camera.look[2]*z+this.camera.right[2]*D)*R}if(S!==0||E!==0||O!==0){const M=Pn.fromQuat(ge.fromEuler(S*this.rotationSpeed*q,E*this.rotationSpeed*q,O*this.rotationSpeed*q,"xyz"));Pn.mul(M,this.camera.rotation,this.camera.rotation)}return this.camera.update_buffer(),!0}rotate(g,z){const D=Pn.fromQuat(ge.fromEuler(z*.01,-g*.01,0,"xyz"));Pn.mul(D,this.camera.rotation,this.camera.rotation),this.camera.update_buffer()}pan(g,z){const D=en.copy(this.camera.up);en.mulScalar(D,-z*.01,D),en.add(D,this.camera.position,this.camera.position),en.copy(this.camera.right,D),en.mulScalar(D,-g*.01,D),en.add(D,this.camera.position,this.camera.position),this.camera.update_buffer()}}const je=`enable f16;

struct GeneralInfo{
  keys_size : u32, dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32,
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32,
};

const WG_SIZE = 256u;

const PI: f32 = acos(-1.0);

const SH_C0: f16 = f16(sqrt(1.0 / (4.0 * PI)));

const SH_C1: f16 = f16(sqrt(3.0 / (4.0 * PI)));

const SH_C2: array<f16, 5> = array<f16, 5>(
    f16(sqrt(15.0 / (4.0 * PI))),
    f16(-sqrt(15.0 / (4.0 * PI))),
    f16(sqrt(5.0 / (16.0 * PI))),
    f16(-sqrt(15.0 / (4.0 * PI))),
    f16(sqrt(15.0 / (16.0 * PI)))
);

const SH_C3: array<f16, 7> = array<f16, 7>(
    f16(-sqrt(35.0 / (32.0 * PI))),
    f16(sqrt(105.0 / (4.0 * PI))),
    f16(-sqrt(21.0 / (32.0 * PI))),
    f16(sqrt(7.0 / (16.0 * PI))),
    f16(-sqrt(21.0 / (32.0 * PI))),
    f16(sqrt(105.0 / (16.0 * PI))),
    f16(-sqrt(35.0 / (32.0 * PI)))
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
@group(1) @binding(3) var<storage, read_write> colors : array<vec2<u32>>;

fn sh_coef(idx: u32) -> vec3<f16> {
    let sh = sh_coefs[idx];
    return vec3<f16>(sh.r, sh.g, sh.b);
}

fn evaluate_sh(dir: vec3<f16>, v_idx: u32, max_sh_deg: u32, sh_deg: u32) -> vec3<f16> {
    let sh_base = (max_sh_deg + 1u) * (max_sh_deg + 1u) * v_idx;

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

            result += SH_C2[0] * xy * sh_coef(sh_base + 4u) +
                      SH_C2[1] * yz * sh_coef(sh_base + 5u) +
                      SH_C2[2] * (2.0 * zz - xx - yy) * sh_coef(sh_base + 6u) +
                      SH_C2[3] * xz * sh_coef(sh_base + 7u) +
                      SH_C2[4] * (xx - yy) * sh_coef(sh_base + 8u);

            if sh_deg > 2u {
                result += SH_C3[0] * y * (3.0 * xx - yy) * sh_coef(sh_base + 9u) +
                          SH_C3[1] * xy * z * sh_coef(sh_base + 10u) +
                          SH_C3[2] * y * (4.0 * zz - xx - yy) * sh_coef(sh_base + 11u) +
                          SH_C3[3] * z * (2.0 * zz - 3.0 * xx - 3.0 * yy) * sh_coef(sh_base + 12u) +
                          SH_C3[4] * x * (4.0 * zz - xx - yy) * sh_coef(sh_base + 13u) +
                          SH_C3[5] * z * (xx - yy) * sh_coef(sh_base + 14u) +
                          SH_C3[6] * x * (xx - 3.0 * yy) * sh_coef(sh_base + 15u);
            }
        }
    }

    return max(result + 0.5, vec3(0.0));
}

@compute @workgroup_size(WG_SIZE)
fn preprocess(@builtin(global_invocation_id) gid: vec3<u32>) {
    if gid.x >= sort_infos.keys_size { return; }

    let solver = sh_solvers[gid.x];
    let dir = vec3<f16>(solver.dir_xy, solver.dir_z_opacity.x);
    let opacity_val = f32(solver.dir_z_opacity.y);

    let rgb = evaluate_sh(dir, solver.idx, render_settings.max_sh_deg, render_settings.cur_sh_deg);
    let rgb_f32 = vec3<f32>(rgb);
    colors[gid.x] = vec2<u32>(
        pack2x16float(rgb_f32.rg),
        pack2x16float(vec2<f32>(rgb_f32.b, opacity_val)),
    );
}
`,Qe=`enable f16;

struct GeneralInfo{
  keys_size : u32, dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32,
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32,
};

const WG_SIZE = 256u;

const PI: f32 = acos(-1.0);

const SH_C0: f16 = f16(sqrt(1.0 / (4.0 * PI)));

const SH_C1: f16 = f16(sqrt(3.0 / (4.0 * PI)));

const SH_C2: array<f16, 5> = array<f16, 5>(
    f16(sqrt(15.0 / (4.0 * PI))),
    f16(-sqrt(15.0 / (4.0 * PI))),
    f16(sqrt(5.0 / (16.0 * PI))),
    f16(-sqrt(15.0 / (4.0 * PI))),
    f16(sqrt(15.0 / (16.0 * PI)))
);

const SH_C3: array<f16, 7> = array<f16, 7>(
    f16(-sqrt(35.0 / (32.0 * PI))),
    f16(sqrt(105.0 / (4.0 * PI))),
    f16(-sqrt(21.0 / (32.0 * PI))),
    f16(sqrt(7.0 / (16.0 * PI))),
    f16(-sqrt(21.0 / (32.0 * PI))),
    f16(sqrt(105.0 / (16.0 * PI))),
    f16(-sqrt(35.0 / (32.0 * PI)))
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
@group(1) @binding(1) var<storage, read> sh_coefs : array<f32>;
@group(1) @binding(2) var<storage, read> sh_solvers : array<SHSolver>;
@group(1) @binding(3) var<storage, read_write> colors : array<vec4<f32>>;

fn sh_coef(idx: u32) -> vec3<f16> {
    return vec3<f16>(f16(sh_coefs[idx * 3u + 0u]), f16(sh_coefs[idx * 3u + 1u]), f16(sh_coefs[idx * 3u + 2u]));
}

fn evaluate_sh(dir: vec3<f16>, v_idx: u32, max_sh_deg: u32, sh_deg: u32) -> vec3<f16> {
    let sh_base = (max_sh_deg + 1u) * (max_sh_deg + 1u) * v_idx;

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

            result += SH_C2[0] * xy * sh_coef(sh_base + 4u) +
                      SH_C2[1] * yz * sh_coef(sh_base + 5u) +
                      SH_C2[2] * (2.0 * zz - xx - yy) * sh_coef(sh_base + 6u) +
                      SH_C2[3] * xz * sh_coef(sh_base + 7u) +
                      SH_C2[4] * (xx - yy) * sh_coef(sh_base + 8u);

            if sh_deg > 2u {
                result += SH_C3[0] * y * (3.0 * xx - yy) * sh_coef(sh_base + 9u) +
                          SH_C3[1] * xy * z * sh_coef(sh_base + 10u) +
                          SH_C3[2] * y * (4.0 * zz - xx - yy) * sh_coef(sh_base + 11u) +
                          SH_C3[3] * z * (2.0 * zz - 3.0 * xx - 3.0 * yy) * sh_coef(sh_base + 12u) +
                          SH_C3[4] * x * (4.0 * zz - xx - yy) * sh_coef(sh_base + 13u) +
                          SH_C3[5] * z * (xx - yy) * sh_coef(sh_base + 14u) +
                          SH_C3[6] * x * (xx - 3.0 * yy) * sh_coef(sh_base + 15u);
            }
        }
    }

    return max(result + 0.5, vec3(0.0));
}

@compute @workgroup_size(WG_SIZE)
fn preprocess(@builtin(global_invocation_id) gid: vec3<u32>) {
    if gid.x >= sort_infos.keys_size { return; }

    let solver = sh_solvers[gid.x];
    let dir = vec3<f16>(solver.dir_xy, solver.dir_z_opacity.x);
    let opacity_val = f32(solver.dir_z_opacity.y);

    let rgb = evaluate_sh(dir, solver.idx, render_settings.max_sh_deg, render_settings.cur_sh_deg);
    let rgb_f32 = vec3<f32>(rgb);
    colors[gid.x] = vec4<f32>(rgb_f32.r, rgb_f32.g, rgb_f32.b, opacity_val);
}
`,Je=`struct GeneralInfo{
  keys_size : u32, dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32,
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32,
};

const WG_SIZE = 256u;

const PI: f32 = acos(-1.0);

const SH_C0: f32 = sqrt(1.0 / (4.0 * PI));

const SH_C1: f32 = sqrt(3.0 / (4.0 * PI));

const SH_C2: array<f32, 5> = array<f32, 5>(
    sqrt(15.0 / (4.0 * PI)),
    -sqrt(15.0 / (4.0 * PI)),
    sqrt(5.0 / (16.0 * PI)),
    -sqrt(15.0 / (4.0 * PI)),
    sqrt(15.0 / (16.0 * PI))
);

const SH_C3: array<f32, 7> = array<f32, 7>(
    -sqrt(35.0 / (32.0 * PI)),
    sqrt(105.0 / (4.0 * PI)),
    -sqrt(21.0 / (32.0 * PI)),
    sqrt(7.0 / (16.0 * PI)),
    -sqrt(21.0 / (32.0 * PI)),
    sqrt(105.0 / (16.0 * PI)),
    -sqrt(35.0 / (32.0 * PI))
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
@group(1) @binding(3) var<storage, read_write> colors : array<vec2<u32>>;

fn sh_coef(idx: u32) -> vec3<f32> {
    let ri = idx * 3u + 0u;
    let gi = idx * 3u + 1u;
    let bi = idx * 3u + 2u;
    let r = unpack2x16float(sh_coefs[ri >> 1])[ri & 1u];
    let g = unpack2x16float(sh_coefs[gi >> 1])[gi & 1u];
    let b = unpack2x16float(sh_coefs[bi >> 1])[bi & 1u];
    return vec3<f32>(r, g, b);
}

fn evaluate_sh(dir: vec3<f32>, v_idx: u32, max_sh_deg: u32, sh_deg: u32) -> vec3<f32> {
    let sh_base = (max_sh_deg + 1u) * (max_sh_deg + 1u) * v_idx;

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

            result += SH_C2[0] * xy * sh_coef(sh_base + 4u) +
                      SH_C2[1] * yz * sh_coef(sh_base + 5u) +
                      SH_C2[2] * (2.0 * zz - xx - yy) * sh_coef(sh_base + 6u) +
                      SH_C2[3] * xz * sh_coef(sh_base + 7u) +
                      SH_C2[4] * (xx - yy) * sh_coef(sh_base + 8u);

            if sh_deg > 2u {
                result += SH_C3[0] * y * (3.0 * xx - yy) * sh_coef(sh_base + 9u) +
                          SH_C3[1] * xy * z * sh_coef(sh_base + 10u) +
                          SH_C3[2] * y * (4.0 * zz - xx - yy) * sh_coef(sh_base + 11u) +
                          SH_C3[3] * z * (2.0 * zz - 3.0 * xx - 3.0 * yy) * sh_coef(sh_base + 12u) +
                          SH_C3[4] * x * (4.0 * zz - xx - yy) * sh_coef(sh_base + 13u) +
                          SH_C3[5] * z * (xx - yy) * sh_coef(sh_base + 14u) +
                          SH_C3[6] * x * (xx - 3.0 * yy) * sh_coef(sh_base + 15u);
            }
        }
    }

    return max(result + 0.5, vec3(0.0));
}

@compute @workgroup_size(WG_SIZE)
fn preprocess(@builtin(global_invocation_id) gid: vec3<u32>) {
    if gid.x >= sort_infos.keys_size { return; }

    let solver = sh_solvers[gid.x];
    let dir_opacity = vec4<f32>(unpack2x16float(solver.dir_xy), unpack2x16float(solver.dir_z_opacity));

    let rgb_f32 = evaluate_sh(dir_opacity.xyz, solver.idx, render_settings.max_sh_deg, render_settings.cur_sh_deg);
    let opacity_val = dir_opacity.w;
    colors[gid.x] = vec2<u32>(
        pack2x16float(rgb_f32.rg),
        pack2x16float(vec2<f32>(rgb_f32.b, opacity_val)),
    );
}
`,nt=`struct GeneralInfo{
  keys_size : u32, dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32,
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32,
};

const WG_SIZE = 256u;

const PI: f32 = acos(-1.0);

const SH_C0: f32 = sqrt(1.0 / (4.0 * PI));

const SH_C1: f32 = sqrt(3.0 / (4.0 * PI));

const SH_C2: array<f32, 5> = array<f32, 5>(
    sqrt(15.0 / (4.0 * PI)),
    -sqrt(15.0 / (4.0 * PI)),
    sqrt(5.0 / (16.0 * PI)),
    -sqrt(15.0 / (4.0 * PI)),
    sqrt(15.0 / (16.0 * PI))
);

const SH_C3: array<f32, 7> = array<f32, 7>(
    -sqrt(35.0 / (32.0 * PI)),
    sqrt(105.0 / (4.0 * PI)),
    -sqrt(21.0 / (32.0 * PI)),
    sqrt(7.0 / (16.0 * PI)),
    -sqrt(21.0 / (32.0 * PI)),
    sqrt(105.0 / (16.0 * PI)),
    -sqrt(35.0 / (32.0 * PI))
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
@group(1) @binding(1) var<storage, read> sh_coefs : array<f32>;
@group(1) @binding(2) var<storage, read> sh_solvers : array<SHSolver>;
@group(1) @binding(3) var<storage, read_write> colors : array<vec4<f32>>;

fn sh_coef(idx: u32) -> vec3<f32> {
    return vec3<f32>(sh_coefs[idx * 3u + 0u], sh_coefs[idx * 3u + 1u], sh_coefs[idx * 3u + 2u]);
}

fn evaluate_sh(dir: vec3<f32>, v_idx: u32, max_sh_deg: u32, sh_deg: u32) -> vec3<f32> {
    let sh_base = (max_sh_deg + 1u) * (max_sh_deg + 1u) * v_idx;

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

            result += SH_C2[0] * xy * sh_coef(sh_base + 4u) +
                      SH_C2[1] * yz * sh_coef(sh_base + 5u) +
                      SH_C2[2] * (2.0 * zz - xx - yy) * sh_coef(sh_base + 6u) +
                      SH_C2[3] * xz * sh_coef(sh_base + 7u) +
                      SH_C2[4] * (xx - yy) * sh_coef(sh_base + 8u);

            if sh_deg > 2u {
                result += SH_C3[0] * y * (3.0 * xx - yy) * sh_coef(sh_base + 9u) +
                          SH_C3[1] * xy * z * sh_coef(sh_base + 10u) +
                          SH_C3[2] * y * (4.0 * zz - xx - yy) * sh_coef(sh_base + 11u) +
                          SH_C3[3] * z * (2.0 * zz - 3.0 * xx - 3.0 * yy) * sh_coef(sh_base + 12u) +
                          SH_C3[4] * x * (4.0 * zz - xx - yy) * sh_coef(sh_base + 13u) +
                          SH_C3[5] * z * (xx - yy) * sh_coef(sh_base + 14u) +
                          SH_C3[6] * x * (xx - 3.0 * yy) * sh_coef(sh_base + 15u);
            }
        }
    }

    return max(result + 0.5, vec3(0.0));
}

@compute @workgroup_size(WG_SIZE)
fn preprocess(@builtin(global_invocation_id) gid: vec3<u32>) {
    if gid.x >= sort_infos.keys_size { return; }

    let solver = sh_solvers[gid.x];
    let dir_opacity = vec4<f32>(unpack2x16float(solver.dir_xy), unpack2x16float(solver.dir_z_opacity));

    let rgb_f32 = evaluate_sh(dir_opacity.xyz, solver.idx, render_settings.max_sh_deg, render_settings.cur_sh_deg);
    let opacity_val = dir_opacity.w;
    colors[gid.x] = vec4<f32>(rgb_f32.r, rgb_f32.g, rgb_f32.b, opacity_val);
}
`,et=`// Oriented-quad Gaussian render shader — ply_precision=f16 variant

const CUTOFF = log(255.);

override DISABLE_OPACITY_RADIUS: u32 = 0u;

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) @interpolate(flat) color: vec4<f32>,
    @location(1) uv: vec2<f32>,
};

struct Splat {
    v_0: u32,
    v_1: u32,
    center_ndc: u32,
};

@group(0) @binding(0) var<storage, read> points_2d : array<Splat>;
@group(0) @binding(1) var<storage, read> color : array<vec2<u32>>;
@group(0) @binding(2) var<storage, read> indices : array<u32>;

@vertex
fn vs_main(
    @builtin(vertex_index) vid: u32,
    @builtin(instance_index) iid: u32
) -> VertexOutput {
    let idx = indices[iid];
    let vertex = points_2d[idx];

    let rg = unpack2x16float(color[idx].x);
    let ba = unpack2x16float(color[idx].y);
    let rgba = vec4<f32>(rg, ba);

    let v0 = unpack2x16float(vertex.v_0);
    let v1 = unpack2x16float(vertex.v_1);
    let center = unpack2x16float(vertex.center_ndc);

    // Opacity-adaptive radius_scale (disabled → fixed worst-case radius)
    var rs: f32;
    if DISABLE_OPACITY_RADIUS == 1u {
        rs = sqrt(CUTOFF);
    } else {
        rs = sqrt(log(max(1.0, 255.0 * rgba.a)));
    }

    let corner = vec2<f32>(f32((vid & 1u) == 0u) * 2.0 - 1.0, f32(vid < 2u) * 2.0 - 1.0);
    let ndc = center + v0 * corner.x * rs + v1 * corner.y * rs;

    return VertexOutput(
        vec4<f32>(ndc, 0.0, 1.0),
        rgba,
        corner,
    );
}

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    let sigma_sq = dot(in.uv, in.uv);
    let opacity = in.color.a;

    var cutoff_val: f32;
    if DISABLE_OPACITY_RADIUS == 1u {
        cutoff_val = CUTOFF;
    } else {
        cutoff_val = log(max(1.0, 255.0 * opacity));
    }
    let alpha = min(0.99, opacity * exp(-cutoff_val * sigma_sq));

    if alpha < 1.0 / 255.0 {
        return vec4<f32>(0.0);
    }
    return vec4<f32>(in.color.rgb, 1.0) * alpha;
}
`,tt=`// Oriented-quad Gaussian render shader — ply_precision=f32 variant

const CUTOFF = log(255.);

override DISABLE_OPACITY_RADIUS: u32 = 0u;

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) @interpolate(flat) color: vec4<f32>,
    @location(1) uv: vec2<f32>,
};

struct Splat {
    v_0_x: f32, v_0_y: f32,
    v_1_x: f32, v_1_y: f32,
    center_ndc_x: f32, center_ndc_y: f32,
};

@group(0) @binding(0) var<storage, read> points_2d : array<Splat>;
@group(0) @binding(1) var<storage, read> color : array<vec4<f32>>;
@group(0) @binding(2) var<storage, read> indices : array<u32>;

@vertex
fn vs_main(
    @builtin(vertex_index) vid: u32,
    @builtin(instance_index) iid: u32
) -> VertexOutput {
    let idx = indices[iid];
    let vertex = points_2d[idx];

    let rgba = color[idx];
    let v0 = vec2<f32>(vertex.v_0_x, vertex.v_0_y);
    let v1 = vec2<f32>(vertex.v_1_x, vertex.v_1_y);
    let center = vec2<f32>(vertex.center_ndc_x, vertex.center_ndc_y);

    // Opacity-adaptive radius_scale (disabled → fixed worst-case radius)
    var rs: f32;
    if DISABLE_OPACITY_RADIUS == 1u {
        rs = sqrt(CUTOFF);
    } else {
        rs = sqrt(log(max(1.0, 255.0 * rgba.a)));
    }

    let corner = vec2<f32>(f32((vid & 1u) == 0u) * 2.0 - 1.0, f32(vid < 2u) * 2.0 - 1.0);
    let ndc = center + v0 * corner.x * rs + v1 * corner.y * rs;

    return VertexOutput(
        vec4<f32>(ndc, 0.0, 1.0),
        rgba,
        corner,
    );
}

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    let sigma_sq = dot(in.uv, in.uv);
    let opacity = in.color.a;

    var cutoff_val: f32;
    if DISABLE_OPACITY_RADIUS == 1u {
        cutoff_val = CUTOFF;
    } else {
        cutoff_val = log(max(1.0, 255.0 * opacity));
    }
    let alpha = min(0.99, opacity * exp(-cutoff_val * sigma_sq));

    if alpha < 1.0 / 255.0 {
        return vec4<f32>(0.0);
    }
    return vec4<f32>(in.color.rgb, 1.0) * alpha;
}
`,st=`const WG_SIZE = 256u;
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
}`,it=`// Culling & index compaction pass — ply_precision=f16 variant

struct GeneralInfo{
  keys_size : atomic<u32>, dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32,
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32,
};

const WG_SIZE = 256u;
const CUTOFF = log(255.);

override DISABLE_AABB_CULL: u32 = 0u;
override DISABLE_OPACITY_RADIUS: u32 = 0u;

struct CameraUniforms {
    view: mat4x4<f32>,
    view_inv: mat4x4<f32>,
    proj: mat4x4<f32>,
    proj_inv: mat4x4<f32>,
    viewport: vec2<f32>,
    focal: vec2<f32>
};

struct Gaussian {
    xy: u32,
    zw: u32,
    cov01: u32,
    cov23: u32,
    cov45: u32,
};

struct Splat {
    v_0: u32,        // pack2x16float — eigenvector 0 in NDC (unbaked)
    v_1: u32,        // pack2x16float — eigenvector 1 in NDC (unbaked)
    center_ndc: u32,  // pack2x16float — center in NDC
};

struct RenderSettings {
    canvas_size: vec2<u32>,
    max_sh_deg: u32,
    cur_sh_deg: u32,
    gaussian_scaling: f32,
    kernel_size: f32,
    mip_spatting: u32,
    walltime: f32,
}

struct SHSolver {
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

var<workgroup> scan0: array<u32, WG_SIZE>;
var<workgroup> scan1: array<u32, WG_SIZE>;
var<workgroup> group_base: u32;

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

        var camspace = camera.view * vec4<f32>(xyz, 1.0);
        let pos2d = camera.proj * camspace;

        let z = pos2d.z / pos2d.w;
        if camspace.z > 0.2 && z > 0.0 && z < 1.0 {
            let focal: vec2<f32> = camera.focal;
            let viewport: vec2<f32> = camera.viewport;
            let scaling: f32 = render_settings.gaussian_scaling;

            let cov01 = unpack2x16float(vertex.cov01);
            let cov23 = unpack2x16float(vertex.cov23);
            let cov45 = unpack2x16float(vertex.cov45);
            let Vrk = mat3x3<f32>(
                cov01.x, cov01.y, cov23.x,
                cov01.y, cov23.y, cov45.x,
                cov23.x, cov45.x, cov45.y,
            ) * scaling * scaling;

            var t = camspace.xyz;
            let tan_fovx = viewport.x / (2.0 * focal.x);
            let tan_fovy = viewport.y / (2.0 * focal.y);
            let limx = 1.3 * tan_fovx;
            let limy = 1.3 * tan_fovy;
            t.x = clamp(t.x / t.z, -limx, limx) * t.z;
            t.y = clamp(t.y / t.z, -limy, limy) * t.z;

            let J: mat3x3<f32> = mat3x3<f32>(
                focal.x / t.z,
                0.0,
                -(focal.x * t.x) / (t.z * t.z),
                0.0,
                focal.y / t.z,
                -(focal.y * t.y) / (t.z * t.z),
                0.0,
                0.0,
                0.0
            );

            let W = transpose(mat3x3<f32>(camera.view[0].xyz, camera.view[1].xyz, camera.view[2].xyz));
            let T = W * J;
            let cov = transpose(T) * Vrk * T;

            let kernel_size: f32 = render_settings.kernel_size;
            if bool(render_settings.mip_spatting) {
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
                let eigRadius = length(vec2<f32>((diagonal1 - diagonal2) / 2.0, offDiagonal));
                let lambda1 = mid + eigRadius;
                let lambda2 = max(mid - eigRadius, 0.1);

                // Guard against degenerate isotropic case
                var diagonalVector: vec2<f32>;
                if eigRadius < 1e-6 {
                    diagonalVector = vec2<f32>(1.0, 0.0);
                } else {
                    diagonalVector = normalize(vec2<f32>(offDiagonal, lambda1 - diagonal1));
                }

                // NDC ↔ pixel: Δndc = Δpixel * (2/W, -2/H) because NDC Y-up, pixel Y-down
                let pixel_to_ndc = vec2<f32>(2.0, -2.0) / viewport;
                v_0 = sqrt(2.0 * lambda1) * diagonalVector * pixel_to_ndc;
                v_1 = sqrt(2.0 * lambda2) * vec2<f32>(diagonalVector.y, -diagonalVector.x) * pixel_to_ndc;
                v_center = pos2d.xy / pos2d.w;

                var radius_scale: f32;
                if DISABLE_OPACITY_RADIUS == 1u {
                    radius_scale = sqrt(CUTOFF);
                } else {
                    radius_scale = sqrt(log(255.0 * opacity));
                }

                let camera_pos = vec3<f32>(camera.view_inv[3].xyz);
                dir = normalize(xyz - camera_pos);

                let zfar = -camera.proj[3][2] / (camera.proj[2][2] - 1.0);
                depth = zfar - pos2d.z;

                let half_extent = (abs(v_0) + abs(v_1)) * radius_scale;
                if DISABLE_AABB_CULL == 1u {
                    alive = 1u;
                } else {
                    let min_pos = v_center - half_extent;
                    let max_pos = v_center + half_extent;
                    if max_pos.x > -1.0 && max_pos.y > -1.0 && min_pos.x < 1.0 && min_pos.y < 1.0 {
                        alive = 1u;
                    }
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

    if (lid.x == 0u) {
        let group_cnt  = scan0[WG_SIZE - 1u];
        if (group_cnt != 0u) {
            group_base = atomicAdd(&sort_infos.keys_size, group_cnt);
        }
    }
    workgroupBarrier();

    if (alive == 1u) {
        let store_idx = group_base + scan0[lid.x] - 1u;
        sh_solvers[store_idx] = SHSolver(
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
}
`,rt=`// Culling & index compaction pass — ply_precision=f32 variant

struct GeneralInfo{
  keys_size : atomic<u32>, dispatch_x: u32, dispatch_y: u32, dispatch_z: u32,
  l0_x : u32, l0_y : u32, l0_z : u32, l0_t : u32,
  l1_x : u32, l1_y : u32, l1_z : u32, l1_t : u32,
};

const WG_SIZE = 256u;
const CUTOFF = log(255.);

override DISABLE_AABB_CULL: u32 = 0u;
override DISABLE_OPACITY_RADIUS: u32 = 0u;

struct CameraUniforms {
    view: mat4x4<f32>,
    view_inv: mat4x4<f32>,
    proj: mat4x4<f32>,
    proj_inv: mat4x4<f32>,
    viewport: vec2<f32>,
    focal: vec2<f32>
};

struct Gaussian {
    x: f32, y: f32, z: f32,
    opacity: f32,
    cov0: f32, cov1: f32, cov2: f32,
    cov3: f32, cov4: f32, cov5: f32,
};

struct Splat {
    v_0_x: f32, v_0_y: f32,
    v_1_x: f32, v_1_y: f32,
    center_ndc_x: f32, center_ndc_y: f32,
};

struct RenderSettings {
    canvas_size: vec2<u32>,
    max_sh_deg: u32,
    cur_sh_deg: u32,
    gaussian_scaling: f32,
    kernel_size: f32,
    mip_spatting: u32,
    walltime: f32,
}

struct SHSolver {
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

var<workgroup> scan0: array<u32, WG_SIZE>;
var<workgroup> scan1: array<u32, WG_SIZE>;
var<workgroup> group_base: u32;

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
        let xyz = vec3<f32>(vertex.x, vertex.y, vertex.z);
        opacity = vertex.opacity;

        var camspace = camera.view * vec4<f32>(xyz, 1.0);
        let pos2d = camera.proj * camspace;

        let z = pos2d.z / pos2d.w;
        if camspace.z > 0.2 && z > 0.0 && z < 1.0 {
            let focal: vec2<f32> = camera.focal;
            let viewport: vec2<f32> = camera.viewport;
            let scaling: f32 = render_settings.gaussian_scaling;

            let Vrk = mat3x3<f32>(
                vertex.cov0, vertex.cov1, vertex.cov2,
                vertex.cov1, vertex.cov3, vertex.cov4,
                vertex.cov2, vertex.cov4, vertex.cov5,
            ) * scaling * scaling;

            var t = camspace.xyz;
            let tan_fovx = viewport.x / (2.0 * focal.x);
            let tan_fovy = viewport.y / (2.0 * focal.y);
            let limx = 1.3 * tan_fovx;
            let limy = 1.3 * tan_fovy;
            t.x = clamp(t.x / t.z, -limx, limx) * t.z;
            t.y = clamp(t.y / t.z, -limy, limy) * t.z;

            let J: mat3x3<f32> = mat3x3<f32>(
                focal.x / t.z,
                0.0,
                -(focal.x * t.x) / (t.z * t.z),
                0.0,
                focal.y / t.z,
                -(focal.y * t.y) / (t.z * t.z),
                0.0,
                0.0,
                0.0
            );

            let W = transpose(mat3x3<f32>(camera.view[0].xyz, camera.view[1].xyz, camera.view[2].xyz));
            let T = W * J;
            let cov = transpose(T) * Vrk * T;

            let kernel_size: f32 = render_settings.kernel_size;
            if bool(render_settings.mip_spatting) {
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
                let eigRadius = length(vec2<f32>((diagonal1 - diagonal2) / 2.0, offDiagonal));
                let lambda1 = mid + eigRadius;
                let lambda2 = max(mid - eigRadius, 0.1);

                var diagonalVector: vec2<f32>;
                if eigRadius < 1e-6 {
                    diagonalVector = vec2<f32>(1.0, 0.0);
                } else {
                    diagonalVector = normalize(vec2<f32>(offDiagonal, lambda1 - diagonal1));
                }

                // NDC ↔ pixel: Δndc = Δpixel * (2/W, -2/H) because NDC Y-up, pixel Y-down
                let pixel_to_ndc = vec2<f32>(2.0, -2.0) / viewport;
                v_0 = sqrt(2.0 * lambda1) * diagonalVector * pixel_to_ndc;
                v_1 = sqrt(2.0 * lambda2) * vec2<f32>(diagonalVector.y, -diagonalVector.x) * pixel_to_ndc;
                v_center = pos2d.xy / pos2d.w;

                var radius_scale: f32;
                if DISABLE_OPACITY_RADIUS == 1u {
                    radius_scale = sqrt(CUTOFF);
                } else {
                    radius_scale = sqrt(log(255.0 * opacity));
                }

                let camera_pos = vec3<f32>(camera.view_inv[3].xyz);
                dir = normalize(xyz - camera_pos);

                let zfar = -camera.proj[3][2] / (camera.proj[2][2] - 1.0);
                depth = zfar - pos2d.z;

                let half_extent = (abs(v_0) + abs(v_1)) * radius_scale;
                if DISABLE_AABB_CULL == 1u {
                    alive = 1u;
                } else {
                    let min_pos = v_center - half_extent;
                    let max_pos = v_center + half_extent;
                    if max_pos.x > -1.0 && max_pos.y > -1.0 && min_pos.x < 1.0 && min_pos.y < 1.0 {
                        alive = 1u;
                    }
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

    if (lid.x == 0u) {
        let group_cnt  = scan0[WG_SIZE - 1u];
        if (group_cnt != 0u) {
            group_base = atomicAdd(&sort_infos.keys_size, group_cnt);
        }
    }
    workgroupBarrier();

    if (alive == 1u) {
        let store_idx = group_base + scan0[lid.x] - 1u;
        sh_solvers[store_idx] = SHSolver(
            pack2x16float(dir.xy),
            pack2x16float(vec2<f32>(dir.z, opacity)),
            idx,
        );
        points_2d[store_idx] = Splat(
            v_0.x, v_0.y,
            v_1.x, v_1.y,
            v_center.x, v_center.y,
        );
        sort_depths[store_idx] = bitcast<u32>(depth);
        sort_indices[store_idx] = store_idx;
    }
}
`,ot=`// shader implementing gpu radix sort.

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
`,at=`// shader implementing gpu radix sort.

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
`,ct=`// ============================================================================
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
}`,Pe=32,Cn=new ArrayBuffer(Pe),Hn={canvas_size:new Uint32Array(Cn,0,2),max_sh_deg:new Uint32Array(Cn,8,1),cur_sh_deg:new Uint32Array(Cn,12,1),gaussian_scaling:new Float32Array(Cn,16,1),kernel_size:new Float32Array(Cn,20,1),mip_spatting:new Uint32Array(Cn,24,1),walltime:new Float32Array(Cn,28,1)};function ut(u){Hn.canvas_size[0]=u.width>>>0,Hn.canvas_size[1]=u.height>>>0,Hn.max_sh_deg[0]=u.max_sh_deg>>>0,Hn.cur_sh_deg[0]=(u.cur_sh_deg??u.max_sh_deg)>>>0,Hn.gaussian_scaling[0]=u.gaussian_scaling??1,Hn.kernel_size[0]=u.kernel_size??.3,Hn.mip_spatting[0]=(typeof u.mip_spatting=="boolean"?u.mip_spatting?1:0:u.mip_spatting??0)>>>0,Hn.walltime[0]=u.walltime??0}function lt(u,g){u.queue.writeBuffer(g,0,Cn)}const dt=256,ft=Pe,_t=24,pt=12,gt=16,ht=8,ie=8,Zn=1<<ie,Yn=256,Ie=32/ie;function we(u,g){return{sort_indices_buffer:g.createBuffer({label:"ping-pong payload (indices)",size:u*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:g.createBuffer({label:"ping-pong keys (depths)",size:u*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function xt(u,g){const z=u.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),D=u.createPipelineLayout({bindGroupLayouts:[z]}),S=E=>u.createComputePipeline({layout:D,compute:{module:g,entryPoint:E,constants:{WG_SIZE:Yn}}});return{l0TileScan:S("prefix_l0_tile_scan"),l1TileScanOnL0:S("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:S("prefix_scan_l1_sums"),addL1ToL0:S("prefix_add_l1_to_l0_offsets"),addL0ToElems:S("prefix_add_l0_to_elements"),computeDigitBase:S("compute_digit_base"),prefixBindGroupLayout:z}}function wt(u,g,z){const D=u.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),S=u.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),E=u.createPipelineLayout({bindGroupLayouts:[D]}),O=u.createPipelineLayout({bindGroupLayouts:[S]}),q=[];for(let M=0;M<Ie;M++){const B={PASS_ID:M,RS_RADIX_LOG2:ie,RS_RADIX_SIZE:Zn};q.push({localHistogram:u.createComputePipeline({layout:E,compute:{module:g,entryPoint:"local_histogram_pass",constants:B}}),scatterElements:u.createComputePipeline({layout:O,compute:{module:z,entryPoint:"scatter_elements",constants:B}})})}return{passes:q,localHistogramBindGroupLayout:D,scatterBindGroupLayout:S}}function yt(u){const g=u.createShaderModule({label:"local histogram",code:at}),z=u.createShaderModule({label:"scatter",code:ot}),D=u.createShaderModule({label:"blelloch prefix",code:ct}),S=xt(u,D),E=wt(u,g,z);return{localHistogramBindGroupLayout:E.localHistogramBindGroupLayout,scatterBindGroupLayout:E.scatterBindGroupLayout,passes:E.passes,hierarchicalBlelloch:S}}class vt{device;pc;presentationFormat;camera_buffer;render_settings_buffer;draw_indirect_buffer;splat_2d_buffer;preprocessPipeline;cullPipeline;renderPipeline;indirectPipeline;sort_info_buffer;sort_ping_pong;crsBg;gsBg;cullBg2;preprocessBg1;renderSplatsBindGroup;indirectBindGroup;sh_color_rgba_buffer;sh_solvers_buffer;splatSize;colorSize;constructor(g,z,D,S,E,O=!1,q=!1,M=!0){this.pc=g,this.device=z;const B=E.includes("shader-f16")&&M,R=(this.pc.ply_precision??"f16")==="f16";this.splatSize=R?pt:_t,this.colorSize=R?ht:gt,`${this.pc.ply_precision??"f16"}`,this.presentationFormat=D,this.camera_buffer=S,z.addEventListener("uncapturederror",$=>{console.error("A WebGPU error was not captured:",$.error)}),this._setupBuffers(g.sh_degree);const Y=(Math.floor((this.pc.num_points+Yn-1)/Yn)+1)*Yn,Q=Math.ceil(Y/Yn);`${this.pc.num_points}`;const N=z.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=yt(z);const C=[we(Y,z),we(Y,z)],K=z.createBuffer({label:"workgroup histograms",size:Q*Zn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),J=z.createBuffer({label:"workgroup prefixes",size:Q*Zn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),V=z.createBuffer({label:"digit base",size:Zn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),nn=Math.ceil(Q/Yn),j=Math.ceil(nn/Yn),In=z.createBuffer({label:"prefix l0 sums",size:nn*Zn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),yn=z.createBuffer({label:"prefix l0 offsets",size:nn*Zn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),vn=z.createBuffer({label:"prefix l1 sums",size:j*Zn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Bn=z.createBuffer({label:"prefix l1 offsets",size:j*Zn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=z.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:K}},{binding:2,resource:{buffer:J}},{binding:3,resource:{buffer:In}},{binding:4,resource:{buffer:yn}},{binding:5,resource:{buffer:vn}},{binding:6,resource:{buffer:Bn}},{binding:7,resource:{buffer:V}}]}),this.sort_localHistogramBindGroups=[z.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:C[0].sort_depths_buffer}},{binding:2,resource:{buffer:K}}]}),z.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:C[1].sort_depths_buffer}},{binding:2,resource:{buffer:K}}]})],this.sort_scatterBindGroups=[z.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:V}},{binding:2,resource:{buffer:C[0].sort_depths_buffer}},{binding:3,resource:{buffer:C[1].sort_depths_buffer}},{binding:4,resource:{buffer:C[0].sort_indices_buffer}},{binding:5,resource:{buffer:C[1].sort_indices_buffer}},{binding:6,resource:{buffer:J}}]}),z.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:V}},{binding:2,resource:{buffer:C[1].sort_depths_buffer}},{binding:3,resource:{buffer:C[0].sort_depths_buffer}},{binding:4,resource:{buffer:C[1].sort_indices_buffer}},{binding:5,resource:{buffer:C[0].sort_indices_buffer}},{binding:6,resource:{buffer:J}}]})],this.sort_info_buffer=N,this.sort_ping_pong=C;const un=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),fn=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),tn=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),Dn=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:un,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"gaussians + splats",layout:fn,entries:[{binding:0,resource:{buffer:this.pc.gaussian_3d_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:tn,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg2",layout:Dn,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.pc.sh_buffer}},{binding:2,resource:{buffer:this.sh_solvers_buffer}},{binding:3,resource:{buffer:this.sh_color_rgba_buffer}}]});const ln=this.device.createShaderModule({code:st});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:ln,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]});const kn=R?it:rt,an=this.device.createShaderModule({code:kn});this.cullPipeline=this.device.createComputePipeline({label:"preprocess_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[un,fn,tn]}),compute:{module:an,entryPoint:"preprocess_cull",constants:{DISABLE_AABB_CULL:O?1:0,DISABLE_OPACITY_RADIUS:q?1:0}}});const Z=B?R?je:Qe:R?Je:nt,H=this.device.createShaderModule({code:Z});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess",layout:this.device.createPipelineLayout({bindGroupLayouts:[un,Dn]}),compute:{module:H,entryPoint:"preprocess"}});const W=R?et:tt,cn=this.device.createShaderModule({code:W}),Gn={DISABLE_OPACITY_RADIUS:q?1:0};this.renderPipeline=this.device.createRenderPipeline({label:"render",layout:"auto",vertex:{module:cn,entryPoint:"vs_main",constants:Gn},fragment:{module:cn,entryPoint:"fs_main",constants:Gn,targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"gaussian splats rendering",layout:this.renderPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sh_color_rgba_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}}]})}frame(g,z){(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame;{g.clearBuffer(this.sort_info_buffer,0,4);const S=g.beginComputePass({label:"cull",timestampWrites:void 0});S.setPipeline(this.cullPipeline),S.setBindGroup(0,this.crsBg),S.setBindGroup(1,this.gsBg),S.setBindGroup(2,this.cullBg2);const E=Math.ceil(this.pc.num_points/dt);S.dispatchWorkgroups(E,1,1),S.end()}{const S=g.beginComputePass({label:"calculate indirect dispatch"});S.setPipeline(this.indirectPipeline),S.setBindGroup(0,this.indirectBindGroup),S.dispatchWorkgroups(1,1,1),S.end()}{const S=g.beginComputePass({label:"preprocess",timestampWrites:void 0});S.setPipeline(this.preprocessPipeline),S.setBindGroup(0,this.crsBg),S.setBindGroup(1,this.preprocessBg1),S.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),S.end()}for(let S=0;S<Ie;S++){const E=S&1,O=this.sort_pipelines.passes[S],q=this.sort_localHistogramBindGroups[E],M=this.sort_scatterBindGroups[E];{const B=g.beginComputePass({label:`upsweep_round${S}`,timestampWrites:void 0});B.setPipeline(O.localHistogram),B.setBindGroup(0,q),B.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),B.end()}{const B=g.beginComputePass({label:`prefix_round${S} - l0TileScan`});B.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),B.setBindGroup(0,this.sort_prefixBindGroup),B.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),B.end()}{const B=g.beginComputePass({label:`prefix_round${S} - l1TileScanOnL0`});B.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),B.setBindGroup(0,this.sort_prefixBindGroup),B.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),B.end()}{const B=g.beginComputePass({label:`prefix_round${S} - l1ScanSums`});B.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),B.setBindGroup(0,this.sort_prefixBindGroup),B.dispatchWorkgroups(1,Zn,1),B.end()}{const B=g.beginComputePass({label:`prefix_round${S} - addL1ToL0`});B.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),B.setBindGroup(0,this.sort_prefixBindGroup),B.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),B.end()}{const B=g.beginComputePass({label:`prefix_round${S} - addL0ToElems`});B.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),B.setBindGroup(0,this.sort_prefixBindGroup),B.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),B.end()}{const B=g.beginComputePass({label:`prefix_round${S} - computeDigitBase`});B.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),B.setBindGroup(0,this.sort_prefixBindGroup),B.dispatchWorkgroups(1,1,1),B.end()}{const B=g.beginComputePass({label:`scatter_round${S}`,timestampWrites:void 0});B.setPipeline(O.scatterElements),B.setBindGroup(0,M),B.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),B.end()}}{const S=g.beginRenderPass({label:"render",colorAttachments:[{view:z,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],timestampWrites:void 0});S.setPipeline(this.renderPipeline),S.setBindGroup(0,this.renderSplatsBindGroup),S.drawIndirect(this.draw_indirect_buffer,0),S.end()}}_setupBuffers(g){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:ft,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const z=document.querySelector("canvas"),D=z?z.width:1,S=z?z.height:1;ut({width:D,height:S,max_sh_deg:g}),lt(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"2d gaussians buffer",size:this.pc.num_points*this.splatSize,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0]));const E=12;this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:this.pc.num_points*E,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.sh_color_rgba_buffer=this.device.createBuffer({label:"sh_color_rgba",size:this.pc.num_points*this.colorSize,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}}function ye(u,g){if(!u)throw new Error(g&&(typeof g=="string"?g:g()))}function ve(u){return u+3&-4}const Be=2,mt=10,bt=mt*Be;async function St(u,g,z,D){Ze("downloading glTF...");try{return await zt({url:u},g,z,D)}finally{He()}}async function zt(u,g,z,D){return new Promise((S,E)=>{const O=new Worker(new URL(""+new URL("gltf-worker-9f59880e.js",import.meta.url).href,self.location),{type:"module"});O.onmessage=q=>{const M=q.data;if(M?.type==="error"){Se(`glTF worker error: ${M.message??"unknown error"}`),O.terminate(),E(new Error(M.message??"Worker error"));return}else if(M?.type==="download_progress"){const B=M.totalBytes,R=M.loadedBytes/(1024*1024),Y=B?B/(1024*1024):void 0,Q=(M.speedBps??0)/(1024*1024),N=B?Math.min(99,Math.floor(M.loadedBytes/B*100)):void 0,C=Y?`total ${Y.toFixed(1)} MB`:"total -- MB",K=Y&&N!==void 0?`${R.toFixed(1)} MB downloaded (${N}%)`:`${R.toFixed(1)} MB downloaded`,J=`${Q.toFixed(2)} MB/s`;Nn(`downloading glTF ...
${C}, ${K}
${J}`);return}else if(M?.type==="fetched"){`${M.byteLength}`,Nn("parsing glTF...");return}else if(M?.type==="buffer_info"){M.useShared;return}else if(M?.type==="sorting"){const B=M.method??(M.sort?`${M.sort} sorting`:"sorting"),R=M.bitsPerAxis?` (${M.bitsPerAxis} bits/axis)`:"",Y=typeof M.points=="number"?` ${M.points} splats`:"";Nn(`${B}${R}${Y}
reordering...`);return}else if(M?.type==="parse_progress"){const B=M.total??0,R=M.read??0,Y=B>0?Math.floor(R/B*100):0;Nn(`parsing glTF ...
${R}/${B} splats (${Y}%)`);return}else if(M?.type==="done"){const B=M.num_points,R=M.final_sh_degree,Y=M.gs_stride,Q=M.sh_stride,N=new Float16Array(M.gaussian_cpu),C=new Float16Array(M.sh_cpu),K=g.createBuffer({label:"gltf input 3d gaussians data buffer",size:ve(B*bt),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});g.queue.writeBuffer(K,0,N);const J=Q*Be,V=g.createBuffer({label:"gltf input spherical harmonics data buffer",size:ve(B*J),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});g.queue.writeBuffer(V,0,C),O.terminate(),S({num_points:B,ply_precision:"f16",gaussian_3d_buffer:K,sh_buffer:V,sh_degree:R,gaussian_cpu:N,sh_cpu:C,gs_stride:Y,sh_stride:Q})}},O.onerror=q=>{O.terminate(),E(q)},u instanceof ArrayBuffer?(Nn("parsing glTF..."),O.postMessage({type:"start",glbBuffer:u,sh_degree:z,sort:D},[u])):O.postMessage({type:"start_url",url:u.url,sh_degree:z,sort:D})})}const Pt="/demo/scenes/van_gogh_room/van_gogh_room_spz.glb",It="scenes/van_gogh_room/cameras.json";async function Bt(u,g,z,D){const S=new URLSearchParams(window.location.search),E=S.get("model_url")??Pt,O=S.get("camera_url")??It,q=Math.max(0,Math.min(4,Number.parseInt(S.get("clip_sh_degree")??"0",10)||0)),M=new Ke(u,z),B=new Ve(M),R=()=>{const V=window.devicePixelRatio||1,nn=Math.max(1,Math.ceil(u.clientWidth*V)),j=Math.max(1,Math.ceil(u.clientHeight*V));u.width===nn&&u.height===j||(u.width=nn,u.height=j,M.on_update_canvas())};new ResizeObserver(R).observe(u),R(),g.configure({device:z,format:"rgba16float",alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});const Q=await Ye(O);if(Q.length===0)throw new Error("No camera presets are available.");M.set_preset(Q[0]);const N=await St(E,z,q,null),C=new vt(N,z,"rgba16float",M.uniform_buffer,D,!1,!1,!0);let K=performance.now();function J(V){const nn=(V-K)/1e3;K=V,B.update(nn);const j=z.createCommandEncoder();C.frame(j,g.getCurrentTexture().createView()),z.queue.submit([j.finish()]),requestAnimationFrame(J)}requestAnimationFrame(J)}async function Dt(){if(!navigator.gpu)throw new Error("WebGPU is not supported in this browser.");const u=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!u)throw new Error("No WebGPU adapter is available.");const g=[];u.features.has("shader-f16")&&g.push("shader-f16");const z=await u.requestDevice({requiredLimits:{maxComputeWorkgroupStorageSize:u.limits.maxComputeWorkgroupStorageSize,maxBufferSize:u.limits.maxBufferSize,maxStorageBufferBindingSize:u.limits.maxStorageBufferBindingSize,maxStorageBuffersPerShaderStage:10},requiredFeatures:g}),D=document.querySelector("#webgpu-canvas");ye(D!==null);const S=D.getContext("webgpu");ye(S!==null),await Bt(D,S,z,g)}Dt().catch(u=>{const g=u instanceof Error?u.message:String(u);Se(g)});
