(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))D(S);new MutationObserver(S=>{for(const k of S)if(k.type==="childList")for(const O of k.addedNodes)O.tagName==="LINK"&&O.rel==="modulepreload"&&D(O)}).observe(document,{childList:!0,subtree:!0});function z(S){const k={};return S.integrity&&(k.integrity=S.integrity),S.referrerPolicy&&(k.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?k.credentials="include":S.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function D(S){if(S.ep)return;S.ep=!0;const k=z(S);fetch(S.href,k)}})();function Be(u,_){return class extends u{constructor(...z){super(...z),_(this)}}}const De=Be(Array,u=>u.fill(0));let T=1e-6;function Me(u){function _(g=0,h=0){const x=new u(2);return g!==void 0&&(x[0]=g,h!==void 0&&(x[1]=h)),x}const z=_;function D(g,h,x){const n=x??new u(2);return n[0]=g,n[1]=h,n}function S(g,h){const x=h??new u(2);return x[0]=Math.ceil(g[0]),x[1]=Math.ceil(g[1]),x}function k(g,h){const x=h??new u(2);return x[0]=Math.floor(g[0]),x[1]=Math.floor(g[1]),x}function O(g,h){const x=h??new u(2);return x[0]=Math.round(g[0]),x[1]=Math.round(g[1]),x}function F(g,h=0,x=1,n){const c=n??new u(2);return c[0]=Math.min(x,Math.max(h,g[0])),c[1]=Math.min(x,Math.max(h,g[1])),c}function G(g,h,x){const n=x??new u(2);return n[0]=g[0]+h[0],n[1]=g[1]+h[1],n}function B(g,h,x,n){const c=n??new u(2);return c[0]=g[0]+h[0]*x,c[1]=g[1]+h[1]*x,c}function R(g,h){const x=g[0],n=g[1],c=h[0],s=h[1],r=Math.sqrt(x*x+n*n),t=Math.sqrt(c*c+s*s),o=r*t,p=o&&fn(g,h)/o;return Math.acos(p)}function Y(g,h,x){const n=x??new u(2);return n[0]=g[0]-h[0],n[1]=g[1]-h[1],n}const Q=Y;function $(g,h){return Math.abs(g[0]-h[0])<T&&Math.abs(g[1]-h[1])<T}function H(g,h){return g[0]===h[0]&&g[1]===h[1]}function K(g,h,x,n){const c=n??new u(2);return c[0]=g[0]+x*(h[0]-g[0]),c[1]=g[1]+x*(h[1]-g[1]),c}function J(g,h,x,n){const c=n??new u(2);return c[0]=g[0]+x[0]*(h[0]-g[0]),c[1]=g[1]+x[1]*(h[1]-g[1]),c}function V(g,h,x){const n=x??new u(2);return n[0]=Math.max(g[0],h[0]),n[1]=Math.max(g[1],h[1]),n}function nn(g,h,x){const n=x??new u(2);return n[0]=Math.min(g[0],h[0]),n[1]=Math.min(g[1],h[1]),n}function j(g,h,x){const n=x??new u(2);return n[0]=g[0]*h,n[1]=g[1]*h,n}const Pn=j;function yn(g,h,x){const n=x??new u(2);return n[0]=g[0]/h,n[1]=g[1]/h,n}function vn(g,h){const x=h??new u(2);return x[0]=1/g[0],x[1]=1/g[1],x}const In=vn;function un(g,h,x){const n=x??new u(3),c=g[0]*h[1]-g[1]*h[0];return n[0]=0,n[1]=0,n[2]=c,n}function fn(g,h){return g[0]*h[0]+g[1]*h[1]}function tn(g){const h=g[0],x=g[1];return Math.sqrt(h*h+x*x)}const Bn=tn;function ln(g){const h=g[0],x=g[1];return h*h+x*x}const kn=ln;function an(g,h){const x=g[0]-h[0],n=g[1]-h[1];return Math.sqrt(x*x+n*n)}const q=an;function Z(g,h){const x=g[0]-h[0],n=g[1]-h[1];return x*x+n*n}const W=Z;function cn(g,h){const x=h??new u(2),n=g[0],c=g[1],s=Math.sqrt(n*n+c*c);return s>1e-5?(x[0]=n/s,x[1]=c/s):(x[0]=0,x[1]=0),x}function Dn(g,h){const x=h??new u(2);return x[0]=-g[0],x[1]=-g[1],x}function N(g,h){const x=h??new u(2);return x[0]=g[0],x[1]=g[1],x}const Wn=N;function Mn(g,h,x){const n=x??new u(2);return n[0]=g[0]*h[0],n[1]=g[1]*h[1],n}const qn=Mn;function Gn(g,h,x){const n=x??new u(2);return n[0]=g[0]/h[0],n[1]=g[1]/h[1],n}const On=Gn;function Tn(g=1,h){const x=h??new u(2),n=Math.random()*2*Math.PI;return x[0]=Math.cos(n)*g,x[1]=Math.sin(n)*g,x}function w(g){const h=g??new u(2);return h[0]=0,h[1]=0,h}function b(g,h,x){const n=x??new u(2),c=g[0],s=g[1];return n[0]=c*h[0]+s*h[4]+h[12],n[1]=c*h[1]+s*h[5]+h[13],n}function f(g,h,x){const n=x??new u(2),c=g[0],s=g[1];return n[0]=h[0]*c+h[4]*s+h[8],n[1]=h[1]*c+h[5]*s+h[9],n}function e(g,h,x,n){const c=n??new u(2),s=g[0]-h[0],r=g[1]-h[1],t=Math.sin(x),o=Math.cos(x);return c[0]=s*o-r*t+h[0],c[1]=s*t+r*o+h[1],c}function a(g,h,x){const n=x??new u(2);return cn(g,n),j(n,h,n)}function i(g,h,x){const n=x??new u(2);return tn(g)>h?a(g,h,n):N(g,n)}function l(g,h,x){const n=x??new u(2);return K(g,h,.5,n)}return{create:_,fromValues:z,set:D,ceil:S,floor:k,round:O,clamp:F,add:G,addScaled:B,angle:R,subtract:Y,sub:Q,equalsApproximately:$,equals:H,lerp:K,lerpV:J,max:V,min:nn,mulScalar:j,scale:Pn,divScalar:yn,inverse:vn,invert:In,cross:un,dot:fn,length:tn,len:Bn,lengthSq:ln,lenSq:kn,distance:an,dist:q,distanceSq:Z,distSq:W,normalize:cn,negate:Dn,copy:N,clone:Wn,multiply:Mn,mul:qn,divide:Gn,div:On,random:Tn,zero:w,transformMat4:b,transformMat3:f,rotate:e,setLength:a,truncate:i,midpoint:l}}const ue=new Map;function ve(u){let _=ue.get(u);return _||(_=Me(u),ue.set(u,_)),_}function Ge(u){function _(t,o,p){const d=new u(3);return t!==void 0&&(d[0]=t,o!==void 0&&(d[1]=o,p!==void 0&&(d[2]=p))),d}const z=_;function D(t,o,p,d){const y=d??new u(3);return y[0]=t,y[1]=o,y[2]=p,y}function S(t,o){const p=o??new u(3);return p[0]=Math.ceil(t[0]),p[1]=Math.ceil(t[1]),p[2]=Math.ceil(t[2]),p}function k(t,o){const p=o??new u(3);return p[0]=Math.floor(t[0]),p[1]=Math.floor(t[1]),p[2]=Math.floor(t[2]),p}function O(t,o){const p=o??new u(3);return p[0]=Math.round(t[0]),p[1]=Math.round(t[1]),p[2]=Math.round(t[2]),p}function F(t,o=0,p=1,d){const y=d??new u(3);return y[0]=Math.min(p,Math.max(o,t[0])),y[1]=Math.min(p,Math.max(o,t[1])),y[2]=Math.min(p,Math.max(o,t[2])),y}function G(t,o,p){const d=p??new u(3);return d[0]=t[0]+o[0],d[1]=t[1]+o[1],d[2]=t[2]+o[2],d}function B(t,o,p,d){const y=d??new u(3);return y[0]=t[0]+o[0]*p,y[1]=t[1]+o[1]*p,y[2]=t[2]+o[2]*p,y}function R(t,o){const p=t[0],d=t[1],y=t[2],v=o[0],m=o[1],M=o[2],P=Math.sqrt(p*p+d*d+y*y),I=Math.sqrt(v*v+m*m+M*M),E=P*I,L=E&&fn(t,o)/E;return Math.acos(L)}function Y(t,o,p){const d=p??new u(3);return d[0]=t[0]-o[0],d[1]=t[1]-o[1],d[2]=t[2]-o[2],d}const Q=Y;function $(t,o){return Math.abs(t[0]-o[0])<T&&Math.abs(t[1]-o[1])<T&&Math.abs(t[2]-o[2])<T}function H(t,o){return t[0]===o[0]&&t[1]===o[1]&&t[2]===o[2]}function K(t,o,p,d){const y=d??new u(3);return y[0]=t[0]+p*(o[0]-t[0]),y[1]=t[1]+p*(o[1]-t[1]),y[2]=t[2]+p*(o[2]-t[2]),y}function J(t,o,p,d){const y=d??new u(3);return y[0]=t[0]+p[0]*(o[0]-t[0]),y[1]=t[1]+p[1]*(o[1]-t[1]),y[2]=t[2]+p[2]*(o[2]-t[2]),y}function V(t,o,p){const d=p??new u(3);return d[0]=Math.max(t[0],o[0]),d[1]=Math.max(t[1],o[1]),d[2]=Math.max(t[2],o[2]),d}function nn(t,o,p){const d=p??new u(3);return d[0]=Math.min(t[0],o[0]),d[1]=Math.min(t[1],o[1]),d[2]=Math.min(t[2],o[2]),d}function j(t,o,p){const d=p??new u(3);return d[0]=t[0]*o,d[1]=t[1]*o,d[2]=t[2]*o,d}const Pn=j;function yn(t,o,p){const d=p??new u(3);return d[0]=t[0]/o,d[1]=t[1]/o,d[2]=t[2]/o,d}function vn(t,o){const p=o??new u(3);return p[0]=1/t[0],p[1]=1/t[1],p[2]=1/t[2],p}const In=vn;function un(t,o,p){const d=p??new u(3),y=t[2]*o[0]-t[0]*o[2],v=t[0]*o[1]-t[1]*o[0];return d[0]=t[1]*o[2]-t[2]*o[1],d[1]=y,d[2]=v,d}function fn(t,o){return t[0]*o[0]+t[1]*o[1]+t[2]*o[2]}function tn(t){const o=t[0],p=t[1],d=t[2];return Math.sqrt(o*o+p*p+d*d)}const Bn=tn;function ln(t){const o=t[0],p=t[1],d=t[2];return o*o+p*p+d*d}const kn=ln;function an(t,o){const p=t[0]-o[0],d=t[1]-o[1],y=t[2]-o[2];return Math.sqrt(p*p+d*d+y*y)}const q=an;function Z(t,o){const p=t[0]-o[0],d=t[1]-o[1],y=t[2]-o[2];return p*p+d*d+y*y}const W=Z;function cn(t,o){const p=o??new u(3),d=t[0],y=t[1],v=t[2],m=Math.sqrt(d*d+y*y+v*v);return m>1e-5?(p[0]=d/m,p[1]=y/m,p[2]=v/m):(p[0]=0,p[1]=0,p[2]=0),p}function Dn(t,o){const p=o??new u(3);return p[0]=-t[0],p[1]=-t[1],p[2]=-t[2],p}function N(t,o){const p=o??new u(3);return p[0]=t[0],p[1]=t[1],p[2]=t[2],p}const Wn=N;function Mn(t,o,p){const d=p??new u(3);return d[0]=t[0]*o[0],d[1]=t[1]*o[1],d[2]=t[2]*o[2],d}const qn=Mn;function Gn(t,o,p){const d=p??new u(3);return d[0]=t[0]/o[0],d[1]=t[1]/o[1],d[2]=t[2]/o[2],d}const On=Gn;function Tn(t=1,o){const p=o??new u(3),d=Math.random()*2*Math.PI,y=Math.random()*2-1,v=Math.sqrt(1-y*y)*t;return p[0]=Math.cos(d)*v,p[1]=Math.sin(d)*v,p[2]=y*t,p}function w(t){const o=t??new u(3);return o[0]=0,o[1]=0,o[2]=0,o}function b(t,o,p){const d=p??new u(3),y=t[0],v=t[1],m=t[2],M=o[3]*y+o[7]*v+o[11]*m+o[15]||1;return d[0]=(o[0]*y+o[4]*v+o[8]*m+o[12])/M,d[1]=(o[1]*y+o[5]*v+o[9]*m+o[13])/M,d[2]=(o[2]*y+o[6]*v+o[10]*m+o[14])/M,d}function f(t,o,p){const d=p??new u(3),y=t[0],v=t[1],m=t[2];return d[0]=y*o[0*4+0]+v*o[1*4+0]+m*o[2*4+0],d[1]=y*o[0*4+1]+v*o[1*4+1]+m*o[2*4+1],d[2]=y*o[0*4+2]+v*o[1*4+2]+m*o[2*4+2],d}function e(t,o,p){const d=p??new u(3),y=t[0],v=t[1],m=t[2];return d[0]=y*o[0]+v*o[4]+m*o[8],d[1]=y*o[1]+v*o[5]+m*o[9],d[2]=y*o[2]+v*o[6]+m*o[10],d}function a(t,o,p){const d=p??new u(3),y=o[0],v=o[1],m=o[2],M=o[3]*2,P=t[0],I=t[1],E=t[2],L=v*E-m*I,U=m*P-y*E,A=y*I-v*P;return d[0]=P+L*M+(v*A-m*U)*2,d[1]=I+U*M+(m*L-y*A)*2,d[2]=E+A*M+(y*U-v*L)*2,d}function i(t,o){const p=o??new u(3);return p[0]=t[12],p[1]=t[13],p[2]=t[14],p}function l(t,o,p){const d=p??new u(3),y=o*4;return d[0]=t[y+0],d[1]=t[y+1],d[2]=t[y+2],d}function g(t,o){const p=o??new u(3),d=t[0],y=t[1],v=t[2],m=t[4],M=t[5],P=t[6],I=t[8],E=t[9],L=t[10];return p[0]=Math.sqrt(d*d+y*y+v*v),p[1]=Math.sqrt(m*m+M*M+P*P),p[2]=Math.sqrt(I*I+E*E+L*L),p}function h(t,o,p,d){const y=d??new u(3),v=[],m=[];return v[0]=t[0]-o[0],v[1]=t[1]-o[1],v[2]=t[2]-o[2],m[0]=v[0],m[1]=v[1]*Math.cos(p)-v[2]*Math.sin(p),m[2]=v[1]*Math.sin(p)+v[2]*Math.cos(p),y[0]=m[0]+o[0],y[1]=m[1]+o[1],y[2]=m[2]+o[2],y}function x(t,o,p,d){const y=d??new u(3),v=[],m=[];return v[0]=t[0]-o[0],v[1]=t[1]-o[1],v[2]=t[2]-o[2],m[0]=v[2]*Math.sin(p)+v[0]*Math.cos(p),m[1]=v[1],m[2]=v[2]*Math.cos(p)-v[0]*Math.sin(p),y[0]=m[0]+o[0],y[1]=m[1]+o[1],y[2]=m[2]+o[2],y}function n(t,o,p,d){const y=d??new u(3),v=[],m=[];return v[0]=t[0]-o[0],v[1]=t[1]-o[1],v[2]=t[2]-o[2],m[0]=v[0]*Math.cos(p)-v[1]*Math.sin(p),m[1]=v[0]*Math.sin(p)+v[1]*Math.cos(p),m[2]=v[2],y[0]=m[0]+o[0],y[1]=m[1]+o[1],y[2]=m[2]+o[2],y}function c(t,o,p){const d=p??new u(3);return cn(t,d),j(d,o,d)}function s(t,o,p){const d=p??new u(3);return tn(t)>o?c(t,o,d):N(t,d)}function r(t,o,p){const d=p??new u(3);return K(t,o,.5,d)}return{create:_,fromValues:z,set:D,ceil:S,floor:k,round:O,clamp:F,add:G,addScaled:B,angle:R,subtract:Y,sub:Q,equalsApproximately:$,equals:H,lerp:K,lerpV:J,max:V,min:nn,mulScalar:j,scale:Pn,divScalar:yn,inverse:vn,invert:In,cross:un,dot:fn,length:tn,len:Bn,lengthSq:ln,lenSq:kn,distance:an,dist:q,distanceSq:Z,distSq:W,normalize:cn,negate:Dn,copy:N,clone:Wn,multiply:Mn,mul:qn,divide:Gn,div:On,random:Tn,zero:w,transformMat4:b,transformMat4Upper3x3:f,transformMat3:e,transformQuat:a,getTranslation:i,getAxis:l,getScaling:g,rotateX:h,rotateY:x,rotateZ:n,setLength:c,truncate:s,midpoint:r}}const le=new Map;function ee(u){let _=le.get(u);return _||(_=Ge(u),le.set(u,_)),_}function ke(u){const _=ve(u),z=ee(u);function D(e,a,i,l,g,h,x,n,c){const s=new u(12);return s[3]=0,s[7]=0,s[11]=0,e!==void 0&&(s[0]=e,a!==void 0&&(s[1]=a,i!==void 0&&(s[2]=i,l!==void 0&&(s[4]=l,g!==void 0&&(s[5]=g,h!==void 0&&(s[6]=h,x!==void 0&&(s[8]=x,n!==void 0&&(s[9]=n,c!==void 0&&(s[10]=c))))))))),s}function S(e,a,i,l,g,h,x,n,c,s){const r=s??new u(12);return r[0]=e,r[1]=a,r[2]=i,r[3]=0,r[4]=l,r[5]=g,r[6]=h,r[7]=0,r[8]=x,r[9]=n,r[10]=c,r[11]=0,r}function k(e,a){const i=a??new u(12);return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=0,i[4]=e[4],i[5]=e[5],i[6]=e[6],i[7]=0,i[8]=e[8],i[9]=e[9],i[10]=e[10],i[11]=0,i}function O(e,a){const i=a??new u(12),l=e[0],g=e[1],h=e[2],x=e[3],n=l+l,c=g+g,s=h+h,r=l*n,t=g*n,o=g*c,p=h*n,d=h*c,y=h*s,v=x*n,m=x*c,M=x*s;return i[0]=1-o-y,i[1]=t+M,i[2]=p-m,i[3]=0,i[4]=t-M,i[5]=1-r-y,i[6]=d+v,i[7]=0,i[8]=p+m,i[9]=d-v,i[10]=1-r-o,i[11]=0,i}function F(e,a){const i=a??new u(12);return i[0]=-e[0],i[1]=-e[1],i[2]=-e[2],i[4]=-e[4],i[5]=-e[5],i[6]=-e[6],i[8]=-e[8],i[9]=-e[9],i[10]=-e[10],i}function G(e,a,i){const l=i??new u(12);return l[0]=e[0]*a,l[1]=e[1]*a,l[2]=e[2]*a,l[4]=e[4]*a,l[5]=e[5]*a,l[6]=e[6]*a,l[8]=e[8]*a,l[9]=e[9]*a,l[10]=e[10]*a,l}const B=G;function R(e,a,i){const l=i??new u(12);return l[0]=e[0]+a[0],l[1]=e[1]+a[1],l[2]=e[2]+a[2],l[4]=e[4]+a[4],l[5]=e[5]+a[5],l[6]=e[6]+a[6],l[8]=e[8]+a[8],l[9]=e[9]+a[9],l[10]=e[10]+a[10],l}function Y(e,a){const i=a??new u(12);return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[4]=e[4],i[5]=e[5],i[6]=e[6],i[8]=e[8],i[9]=e[9],i[10]=e[10],i}const Q=Y;function $(e,a){return Math.abs(e[0]-a[0])<T&&Math.abs(e[1]-a[1])<T&&Math.abs(e[2]-a[2])<T&&Math.abs(e[4]-a[4])<T&&Math.abs(e[5]-a[5])<T&&Math.abs(e[6]-a[6])<T&&Math.abs(e[8]-a[8])<T&&Math.abs(e[9]-a[9])<T&&Math.abs(e[10]-a[10])<T}function H(e,a){return e[0]===a[0]&&e[1]===a[1]&&e[2]===a[2]&&e[4]===a[4]&&e[5]===a[5]&&e[6]===a[6]&&e[8]===a[8]&&e[9]===a[9]&&e[10]===a[10]}function K(e){const a=e??new u(12);return a[0]=1,a[1]=0,a[2]=0,a[4]=0,a[5]=1,a[6]=0,a[8]=0,a[9]=0,a[10]=1,a}function J(e,a){const i=a??new u(12);if(i===e){let o;return o=e[1],e[1]=e[4],e[4]=o,o=e[2],e[2]=e[8],e[8]=o,o=e[6],e[6]=e[9],e[9]=o,i}const l=e[0*4+0],g=e[0*4+1],h=e[0*4+2],x=e[1*4+0],n=e[1*4+1],c=e[1*4+2],s=e[2*4+0],r=e[2*4+1],t=e[2*4+2];return i[0]=l,i[1]=x,i[2]=s,i[4]=g,i[5]=n,i[6]=r,i[8]=h,i[9]=c,i[10]=t,i}function V(e,a){const i=a??new u(12),l=e[0*4+0],g=e[0*4+1],h=e[0*4+2],x=e[1*4+0],n=e[1*4+1],c=e[1*4+2],s=e[2*4+0],r=e[2*4+1],t=e[2*4+2],o=t*n-c*r,p=-t*x+c*s,d=r*x-n*s,y=1/(l*o+g*p+h*d);return i[0]=o*y,i[1]=(-t*g+h*r)*y,i[2]=(c*g-h*n)*y,i[4]=p*y,i[5]=(t*l-h*s)*y,i[6]=(-c*l+h*x)*y,i[8]=d*y,i[9]=(-r*l+g*s)*y,i[10]=(n*l-g*x)*y,i}function nn(e){const a=e[0],i=e[0*4+1],l=e[0*4+2],g=e[1*4+0],h=e[1*4+1],x=e[1*4+2],n=e[2*4+0],c=e[2*4+1],s=e[2*4+2];return a*(h*s-c*x)-g*(i*s-c*l)+n*(i*x-h*l)}const j=V;function Pn(e,a,i){const l=i??new u(12),g=e[0],h=e[1],x=e[2],n=e[4+0],c=e[4+1],s=e[4+2],r=e[8+0],t=e[8+1],o=e[8+2],p=a[0],d=a[1],y=a[2],v=a[4+0],m=a[4+1],M=a[4+2],P=a[8+0],I=a[8+1],E=a[8+2];return l[0]=g*p+n*d+r*y,l[1]=h*p+c*d+t*y,l[2]=x*p+s*d+o*y,l[4]=g*v+n*m+r*M,l[5]=h*v+c*m+t*M,l[6]=x*v+s*m+o*M,l[8]=g*P+n*I+r*E,l[9]=h*P+c*I+t*E,l[10]=x*P+s*I+o*E,l}const yn=Pn;function vn(e,a,i){const l=i??K();return e!==l&&(l[0]=e[0],l[1]=e[1],l[2]=e[2],l[4]=e[4],l[5]=e[5],l[6]=e[6]),l[8]=a[0],l[9]=a[1],l[10]=1,l}function In(e,a){const i=a??_.create();return i[0]=e[8],i[1]=e[9],i}function un(e,a,i){const l=i??_.create(),g=a*4;return l[0]=e[g+0],l[1]=e[g+1],l}function fn(e,a,i,l){const g=l===e?e:Y(e,l),h=i*4;return g[h+0]=a[0],g[h+1]=a[1],g}function tn(e,a){const i=a??_.create(),l=e[0],g=e[1],h=e[4],x=e[5];return i[0]=Math.sqrt(l*l+g*g),i[1]=Math.sqrt(h*h+x*x),i}function Bn(e,a){const i=a??z.create(),l=e[0],g=e[1],h=e[2],x=e[4],n=e[5],c=e[6],s=e[8],r=e[9],t=e[10];return i[0]=Math.sqrt(l*l+g*g+h*h),i[1]=Math.sqrt(x*x+n*n+c*c),i[2]=Math.sqrt(s*s+r*r+t*t),i}function ln(e,a){const i=a??new u(12);return i[0]=1,i[1]=0,i[2]=0,i[4]=0,i[5]=1,i[6]=0,i[8]=e[0],i[9]=e[1],i[10]=1,i}function kn(e,a,i){const l=i??new u(12),g=a[0],h=a[1],x=e[0],n=e[1],c=e[2],s=e[1*4+0],r=e[1*4+1],t=e[1*4+2],o=e[2*4+0],p=e[2*4+1],d=e[2*4+2];return e!==l&&(l[0]=x,l[1]=n,l[2]=c,l[4]=s,l[5]=r,l[6]=t),l[8]=x*g+s*h+o,l[9]=n*g+r*h+p,l[10]=c*g+t*h+d,l}function an(e,a){const i=a??new u(12),l=Math.cos(e),g=Math.sin(e);return i[0]=l,i[1]=g,i[2]=0,i[4]=-g,i[5]=l,i[6]=0,i[8]=0,i[9]=0,i[10]=1,i}function q(e,a,i){const l=i??new u(12),g=e[0*4+0],h=e[0*4+1],x=e[0*4+2],n=e[1*4+0],c=e[1*4+1],s=e[1*4+2],r=Math.cos(a),t=Math.sin(a);return l[0]=r*g+t*n,l[1]=r*h+t*c,l[2]=r*x+t*s,l[4]=r*n-t*g,l[5]=r*c-t*h,l[6]=r*s-t*x,e!==l&&(l[8]=e[8],l[9]=e[9],l[10]=e[10]),l}function Z(e,a){const i=a??new u(12),l=Math.cos(e),g=Math.sin(e);return i[0]=1,i[1]=0,i[2]=0,i[4]=0,i[5]=l,i[6]=g,i[8]=0,i[9]=-g,i[10]=l,i}function W(e,a,i){const l=i??new u(12),g=e[4],h=e[5],x=e[6],n=e[8],c=e[9],s=e[10],r=Math.cos(a),t=Math.sin(a);return l[4]=r*g+t*n,l[5]=r*h+t*c,l[6]=r*x+t*s,l[8]=r*n-t*g,l[9]=r*c-t*h,l[10]=r*s-t*x,e!==l&&(l[0]=e[0],l[1]=e[1],l[2]=e[2]),l}function cn(e,a){const i=a??new u(12),l=Math.cos(e),g=Math.sin(e);return i[0]=l,i[1]=0,i[2]=-g,i[4]=0,i[5]=1,i[6]=0,i[8]=g,i[9]=0,i[10]=l,i}function Dn(e,a,i){const l=i??new u(12),g=e[0*4+0],h=e[0*4+1],x=e[0*4+2],n=e[2*4+0],c=e[2*4+1],s=e[2*4+2],r=Math.cos(a),t=Math.sin(a);return l[0]=r*g-t*n,l[1]=r*h-t*c,l[2]=r*x-t*s,l[8]=r*n+t*g,l[9]=r*c+t*h,l[10]=r*s+t*x,e!==l&&(l[4]=e[4],l[5]=e[5],l[6]=e[6]),l}const N=an,Wn=q;function Mn(e,a){const i=a??new u(12);return i[0]=e[0],i[1]=0,i[2]=0,i[4]=0,i[5]=e[1],i[6]=0,i[8]=0,i[9]=0,i[10]=1,i}function qn(e,a,i){const l=i??new u(12),g=a[0],h=a[1];return l[0]=g*e[0*4+0],l[1]=g*e[0*4+1],l[2]=g*e[0*4+2],l[4]=h*e[1*4+0],l[5]=h*e[1*4+1],l[6]=h*e[1*4+2],e!==l&&(l[8]=e[8],l[9]=e[9],l[10]=e[10]),l}function Gn(e,a){const i=a??new u(12);return i[0]=e[0],i[1]=0,i[2]=0,i[4]=0,i[5]=e[1],i[6]=0,i[8]=0,i[9]=0,i[10]=e[2],i}function On(e,a,i){const l=i??new u(12),g=a[0],h=a[1],x=a[2];return l[0]=g*e[0*4+0],l[1]=g*e[0*4+1],l[2]=g*e[0*4+2],l[4]=h*e[1*4+0],l[5]=h*e[1*4+1],l[6]=h*e[1*4+2],l[8]=x*e[2*4+0],l[9]=x*e[2*4+1],l[10]=x*e[2*4+2],l}function Tn(e,a){const i=a??new u(12);return i[0]=e,i[1]=0,i[2]=0,i[4]=0,i[5]=e,i[6]=0,i[8]=0,i[9]=0,i[10]=1,i}function w(e,a,i){const l=i??new u(12);return l[0]=a*e[0*4+0],l[1]=a*e[0*4+1],l[2]=a*e[0*4+2],l[4]=a*e[1*4+0],l[5]=a*e[1*4+1],l[6]=a*e[1*4+2],e!==l&&(l[8]=e[8],l[9]=e[9],l[10]=e[10]),l}function b(e,a){const i=a??new u(12);return i[0]=e,i[1]=0,i[2]=0,i[4]=0,i[5]=e,i[6]=0,i[8]=0,i[9]=0,i[10]=e,i}function f(e,a,i){const l=i??new u(12);return l[0]=a*e[0*4+0],l[1]=a*e[0*4+1],l[2]=a*e[0*4+2],l[4]=a*e[1*4+0],l[5]=a*e[1*4+1],l[6]=a*e[1*4+2],l[8]=a*e[2*4+0],l[9]=a*e[2*4+1],l[10]=a*e[2*4+2],l}return{add:R,clone:Q,copy:Y,create:D,determinant:nn,equals:H,equalsApproximately:$,fromMat4:k,fromQuat:O,get3DScaling:Bn,getAxis:un,getScaling:tn,getTranslation:In,identity:K,inverse:V,invert:j,mul:yn,mulScalar:B,multiply:Pn,multiplyScalar:G,negate:F,rotate:q,rotateX:W,rotateY:Dn,rotateZ:Wn,rotation:an,rotationX:Z,rotationY:cn,rotationZ:N,scale:qn,scale3D:On,scaling:Mn,scaling3D:Gn,set:S,setAxis:fn,setTranslation:vn,translate:kn,translation:ln,transpose:J,uniformScale:w,uniformScale3D:f,uniformScaling:Tn,uniformScaling3D:b}}const de=new Map;function Ee(u){let _=de.get(u);return _||(_=ke(u),de.set(u,_)),_}function Ue(u){const _=ee(u);function z(n,c,s,r,t,o,p,d,y,v,m,M,P,I,E,L){const U=new u(16);return n!==void 0&&(U[0]=n,c!==void 0&&(U[1]=c,s!==void 0&&(U[2]=s,r!==void 0&&(U[3]=r,t!==void 0&&(U[4]=t,o!==void 0&&(U[5]=o,p!==void 0&&(U[6]=p,d!==void 0&&(U[7]=d,y!==void 0&&(U[8]=y,v!==void 0&&(U[9]=v,m!==void 0&&(U[10]=m,M!==void 0&&(U[11]=M,P!==void 0&&(U[12]=P,I!==void 0&&(U[13]=I,E!==void 0&&(U[14]=E,L!==void 0&&(U[15]=L)))))))))))))))),U}function D(n,c,s,r,t,o,p,d,y,v,m,M,P,I,E,L,U){const A=U??new u(16);return A[0]=n,A[1]=c,A[2]=s,A[3]=r,A[4]=t,A[5]=o,A[6]=p,A[7]=d,A[8]=y,A[9]=v,A[10]=m,A[11]=M,A[12]=P,A[13]=I,A[14]=E,A[15]=L,A}function S(n,c){const s=c??new u(16);return s[0]=n[0],s[1]=n[1],s[2]=n[2],s[3]=0,s[4]=n[4],s[5]=n[5],s[6]=n[6],s[7]=0,s[8]=n[8],s[9]=n[9],s[10]=n[10],s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function k(n,c){const s=c??new u(16),r=n[0],t=n[1],o=n[2],p=n[3],d=r+r,y=t+t,v=o+o,m=r*d,M=t*d,P=t*y,I=o*d,E=o*y,L=o*v,U=p*d,A=p*y,X=p*v;return s[0]=1-P-L,s[1]=M+X,s[2]=I-A,s[3]=0,s[4]=M-X,s[5]=1-m-L,s[6]=E+U,s[7]=0,s[8]=I+A,s[9]=E-U,s[10]=1-m-P,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function O(n,c){const s=c??new u(16);return s[0]=-n[0],s[1]=-n[1],s[2]=-n[2],s[3]=-n[3],s[4]=-n[4],s[5]=-n[5],s[6]=-n[6],s[7]=-n[7],s[8]=-n[8],s[9]=-n[9],s[10]=-n[10],s[11]=-n[11],s[12]=-n[12],s[13]=-n[13],s[14]=-n[14],s[15]=-n[15],s}function F(n,c,s){const r=s??new u(16);return r[0]=n[0]+c[0],r[1]=n[1]+c[1],r[2]=n[2]+c[2],r[3]=n[3]+c[3],r[4]=n[4]+c[4],r[5]=n[5]+c[5],r[6]=n[6]+c[6],r[7]=n[7]+c[7],r[8]=n[8]+c[8],r[9]=n[9]+c[9],r[10]=n[10]+c[10],r[11]=n[11]+c[11],r[12]=n[12]+c[12],r[13]=n[13]+c[13],r[14]=n[14]+c[14],r[15]=n[15]+c[15],r}function G(n,c,s){const r=s??new u(16);return r[0]=n[0]*c,r[1]=n[1]*c,r[2]=n[2]*c,r[3]=n[3]*c,r[4]=n[4]*c,r[5]=n[5]*c,r[6]=n[6]*c,r[7]=n[7]*c,r[8]=n[8]*c,r[9]=n[9]*c,r[10]=n[10]*c,r[11]=n[11]*c,r[12]=n[12]*c,r[13]=n[13]*c,r[14]=n[14]*c,r[15]=n[15]*c,r}const B=G;function R(n,c){const s=c??new u(16);return s[0]=n[0],s[1]=n[1],s[2]=n[2],s[3]=n[3],s[4]=n[4],s[5]=n[5],s[6]=n[6],s[7]=n[7],s[8]=n[8],s[9]=n[9],s[10]=n[10],s[11]=n[11],s[12]=n[12],s[13]=n[13],s[14]=n[14],s[15]=n[15],s}const Y=R;function Q(n,c){return Math.abs(n[0]-c[0])<T&&Math.abs(n[1]-c[1])<T&&Math.abs(n[2]-c[2])<T&&Math.abs(n[3]-c[3])<T&&Math.abs(n[4]-c[4])<T&&Math.abs(n[5]-c[5])<T&&Math.abs(n[6]-c[6])<T&&Math.abs(n[7]-c[7])<T&&Math.abs(n[8]-c[8])<T&&Math.abs(n[9]-c[9])<T&&Math.abs(n[10]-c[10])<T&&Math.abs(n[11]-c[11])<T&&Math.abs(n[12]-c[12])<T&&Math.abs(n[13]-c[13])<T&&Math.abs(n[14]-c[14])<T&&Math.abs(n[15]-c[15])<T}function $(n,c){return n[0]===c[0]&&n[1]===c[1]&&n[2]===c[2]&&n[3]===c[3]&&n[4]===c[4]&&n[5]===c[5]&&n[6]===c[6]&&n[7]===c[7]&&n[8]===c[8]&&n[9]===c[9]&&n[10]===c[10]&&n[11]===c[11]&&n[12]===c[12]&&n[13]===c[13]&&n[14]===c[14]&&n[15]===c[15]}function H(n){const c=n??new u(16);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function K(n,c){const s=c??new u(16);if(s===n){let C;return C=n[1],n[1]=n[4],n[4]=C,C=n[2],n[2]=n[8],n[8]=C,C=n[3],n[3]=n[12],n[12]=C,C=n[6],n[6]=n[9],n[9]=C,C=n[7],n[7]=n[13],n[13]=C,C=n[11],n[11]=n[14],n[14]=C,s}const r=n[0*4+0],t=n[0*4+1],o=n[0*4+2],p=n[0*4+3],d=n[1*4+0],y=n[1*4+1],v=n[1*4+2],m=n[1*4+3],M=n[2*4+0],P=n[2*4+1],I=n[2*4+2],E=n[2*4+3],L=n[3*4+0],U=n[3*4+1],A=n[3*4+2],X=n[3*4+3];return s[0]=r,s[1]=d,s[2]=M,s[3]=L,s[4]=t,s[5]=y,s[6]=P,s[7]=U,s[8]=o,s[9]=v,s[10]=I,s[11]=A,s[12]=p,s[13]=m,s[14]=E,s[15]=X,s}function J(n,c){const s=c??new u(16),r=n[0*4+0],t=n[0*4+1],o=n[0*4+2],p=n[0*4+3],d=n[1*4+0],y=n[1*4+1],v=n[1*4+2],m=n[1*4+3],M=n[2*4+0],P=n[2*4+1],I=n[2*4+2],E=n[2*4+3],L=n[3*4+0],U=n[3*4+1],A=n[3*4+2],X=n[3*4+3],C=I*X,sn=A*E,rn=v*X,on=A*m,dn=v*E,_n=I*m,pn=o*X,gn=A*p,hn=o*E,xn=I*p,mn=o*m,bn=v*p,Sn=M*U,zn=L*P,En=d*U,Un=L*y,An=d*P,Nn=M*y,Kn=r*U,Vn=L*t,jn=r*P,Qn=M*t,Jn=r*y,ne=d*t,re=C*y+on*P+dn*U-(sn*y+rn*P+_n*U),oe=sn*t+pn*P+xn*U-(C*t+gn*P+hn*U),ae=rn*t+gn*y+mn*U-(on*t+pn*y+bn*U),ce=_n*t+hn*y+bn*P-(dn*t+xn*y+mn*P),wn=1/(r*re+d*oe+M*ae+L*ce);return s[0]=wn*re,s[1]=wn*oe,s[2]=wn*ae,s[3]=wn*ce,s[4]=wn*(sn*d+rn*M+_n*L-(C*d+on*M+dn*L)),s[5]=wn*(C*r+gn*M+hn*L-(sn*r+pn*M+xn*L)),s[6]=wn*(on*r+pn*d+bn*L-(rn*r+gn*d+mn*L)),s[7]=wn*(dn*r+xn*d+mn*M-(_n*r+hn*d+bn*M)),s[8]=wn*(Sn*m+Un*E+An*X-(zn*m+En*E+Nn*X)),s[9]=wn*(zn*p+Kn*E+Qn*X-(Sn*p+Vn*E+jn*X)),s[10]=wn*(En*p+Vn*m+Jn*X-(Un*p+Kn*m+ne*X)),s[11]=wn*(Nn*p+jn*m+ne*E-(An*p+Qn*m+Jn*E)),s[12]=wn*(En*I+Nn*A+zn*v-(An*A+Sn*v+Un*I)),s[13]=wn*(jn*A+Sn*o+Vn*I-(Kn*I+Qn*A+zn*o)),s[14]=wn*(Kn*v+ne*A+Un*o-(Jn*A+En*o+Vn*v)),s[15]=wn*(Jn*I+An*o+Qn*v-(jn*v+ne*I+Nn*o)),s}function V(n){const c=n[0],s=n[0*4+1],r=n[0*4+2],t=n[0*4+3],o=n[1*4+0],p=n[1*4+1],d=n[1*4+2],y=n[1*4+3],v=n[2*4+0],m=n[2*4+1],M=n[2*4+2],P=n[2*4+3],I=n[3*4+0],E=n[3*4+1],L=n[3*4+2],U=n[3*4+3],A=M*U,X=L*P,C=d*U,sn=L*y,rn=d*P,on=M*y,dn=r*U,_n=L*t,pn=r*P,gn=M*t,hn=r*y,xn=d*t,mn=A*p+sn*m+rn*E-(X*p+C*m+on*E),bn=X*s+dn*m+gn*E-(A*s+_n*m+pn*E),Sn=C*s+_n*p+hn*E-(sn*s+dn*p+xn*E),zn=on*s+pn*p+xn*m-(rn*s+gn*p+hn*m);return c*mn+o*bn+v*Sn+I*zn}const nn=J;function j(n,c,s){const r=s??new u(16),t=n[0],o=n[1],p=n[2],d=n[3],y=n[4+0],v=n[4+1],m=n[4+2],M=n[4+3],P=n[8+0],I=n[8+1],E=n[8+2],L=n[8+3],U=n[12+0],A=n[12+1],X=n[12+2],C=n[12+3],sn=c[0],rn=c[1],on=c[2],dn=c[3],_n=c[4+0],pn=c[4+1],gn=c[4+2],hn=c[4+3],xn=c[8+0],mn=c[8+1],bn=c[8+2],Sn=c[8+3],zn=c[12+0],En=c[12+1],Un=c[12+2],An=c[12+3];return r[0]=t*sn+y*rn+P*on+U*dn,r[1]=o*sn+v*rn+I*on+A*dn,r[2]=p*sn+m*rn+E*on+X*dn,r[3]=d*sn+M*rn+L*on+C*dn,r[4]=t*_n+y*pn+P*gn+U*hn,r[5]=o*_n+v*pn+I*gn+A*hn,r[6]=p*_n+m*pn+E*gn+X*hn,r[7]=d*_n+M*pn+L*gn+C*hn,r[8]=t*xn+y*mn+P*bn+U*Sn,r[9]=o*xn+v*mn+I*bn+A*Sn,r[10]=p*xn+m*mn+E*bn+X*Sn,r[11]=d*xn+M*mn+L*bn+C*Sn,r[12]=t*zn+y*En+P*Un+U*An,r[13]=o*zn+v*En+I*Un+A*An,r[14]=p*zn+m*En+E*Un+X*An,r[15]=d*zn+M*En+L*Un+C*An,r}const Pn=j;function yn(n,c,s){const r=s??H();return n!==r&&(r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r[4]=n[4],r[5]=n[5],r[6]=n[6],r[7]=n[7],r[8]=n[8],r[9]=n[9],r[10]=n[10],r[11]=n[11]),r[12]=c[0],r[13]=c[1],r[14]=c[2],r[15]=1,r}function vn(n,c){const s=c??_.create();return s[0]=n[12],s[1]=n[13],s[2]=n[14],s}function In(n,c,s){const r=s??_.create(),t=c*4;return r[0]=n[t+0],r[1]=n[t+1],r[2]=n[t+2],r}function un(n,c,s,r){const t=r===n?r:R(n,r),o=s*4;return t[o+0]=c[0],t[o+1]=c[1],t[o+2]=c[2],t}function fn(n,c){const s=c??_.create(),r=n[0],t=n[1],o=n[2],p=n[4],d=n[5],y=n[6],v=n[8],m=n[9],M=n[10];return s[0]=Math.sqrt(r*r+t*t+o*o),s[1]=Math.sqrt(p*p+d*d+y*y),s[2]=Math.sqrt(v*v+m*m+M*M),s}function tn(n,c,s,r,t){const o=t??new u(16),p=Math.tan(Math.PI*.5-.5*n);if(o[0]=p/c,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=p,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[11]=-1,o[12]=0,o[13]=0,o[15]=0,Number.isFinite(r)){const d=1/(s-r);o[10]=r*d,o[14]=r*s*d}else o[10]=-1,o[14]=-s;return o}function Bn(n,c,s,r=1/0,t){const o=t??new u(16),p=1/Math.tan(n*.5);if(o[0]=p/c,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=p,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[11]=-1,o[12]=0,o[13]=0,o[15]=0,r===1/0)o[10]=0,o[14]=s;else{const d=1/(r-s);o[10]=s*d,o[14]=r*s*d}return o}function ln(n,c,s,r,t,o,p){const d=p??new u(16);return d[0]=2/(c-n),d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=2/(r-s),d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1/(t-o),d[11]=0,d[12]=(c+n)/(n-c),d[13]=(r+s)/(s-r),d[14]=t/(t-o),d[15]=1,d}function kn(n,c,s,r,t,o,p){const d=p??new u(16),y=c-n,v=r-s,m=t-o;return d[0]=2*t/y,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=2*t/v,d[6]=0,d[7]=0,d[8]=(n+c)/y,d[9]=(r+s)/v,d[10]=o/m,d[11]=-1,d[12]=0,d[13]=0,d[14]=t*o/m,d[15]=0,d}function an(n,c,s,r,t,o=1/0,p){const d=p??new u(16),y=c-n,v=r-s;if(d[0]=2*t/y,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=2*t/v,d[6]=0,d[7]=0,d[8]=(n+c)/y,d[9]=(r+s)/v,d[11]=-1,d[12]=0,d[13]=0,d[15]=0,o===1/0)d[10]=0,d[14]=t;else{const m=1/(o-t);d[10]=t*m,d[14]=o*t*m}return d}const q=_.create(),Z=_.create(),W=_.create();function cn(n,c,s,r){const t=r??new u(16);return _.normalize(_.subtract(c,n,W),W),_.normalize(_.cross(s,W,q),q),_.normalize(_.cross(W,q,Z),Z),t[0]=q[0],t[1]=q[1],t[2]=q[2],t[3]=0,t[4]=Z[0],t[5]=Z[1],t[6]=Z[2],t[7]=0,t[8]=W[0],t[9]=W[1],t[10]=W[2],t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function Dn(n,c,s,r){const t=r??new u(16);return _.normalize(_.subtract(n,c,W),W),_.normalize(_.cross(s,W,q),q),_.normalize(_.cross(W,q,Z),Z),t[0]=q[0],t[1]=q[1],t[2]=q[2],t[3]=0,t[4]=Z[0],t[5]=Z[1],t[6]=Z[2],t[7]=0,t[8]=W[0],t[9]=W[1],t[10]=W[2],t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function N(n,c,s,r){const t=r??new u(16);return _.normalize(_.subtract(n,c,W),W),_.normalize(_.cross(s,W,q),q),_.normalize(_.cross(W,q,Z),Z),t[0]=q[0],t[1]=Z[0],t[2]=W[0],t[3]=0,t[4]=q[1],t[5]=Z[1],t[6]=W[1],t[7]=0,t[8]=q[2],t[9]=Z[2],t[10]=W[2],t[11]=0,t[12]=-(q[0]*n[0]+q[1]*n[1]+q[2]*n[2]),t[13]=-(Z[0]*n[0]+Z[1]*n[1]+Z[2]*n[2]),t[14]=-(W[0]*n[0]+W[1]*n[1]+W[2]*n[2]),t[15]=1,t}function Wn(n,c){const s=c??new u(16);return s[0]=1,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=1,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=1,s[11]=0,s[12]=n[0],s[13]=n[1],s[14]=n[2],s[15]=1,s}function Mn(n,c,s){const r=s??new u(16),t=c[0],o=c[1],p=c[2],d=n[0],y=n[1],v=n[2],m=n[3],M=n[1*4+0],P=n[1*4+1],I=n[1*4+2],E=n[1*4+3],L=n[2*4+0],U=n[2*4+1],A=n[2*4+2],X=n[2*4+3],C=n[3*4+0],sn=n[3*4+1],rn=n[3*4+2],on=n[3*4+3];return n!==r&&(r[0]=d,r[1]=y,r[2]=v,r[3]=m,r[4]=M,r[5]=P,r[6]=I,r[7]=E,r[8]=L,r[9]=U,r[10]=A,r[11]=X),r[12]=d*t+M*o+L*p+C,r[13]=y*t+P*o+U*p+sn,r[14]=v*t+I*o+A*p+rn,r[15]=m*t+E*o+X*p+on,r}function qn(n,c){const s=c??new u(16),r=Math.cos(n),t=Math.sin(n);return s[0]=1,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=r,s[6]=t,s[7]=0,s[8]=0,s[9]=-t,s[10]=r,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function Gn(n,c,s){const r=s??new u(16),t=n[4],o=n[5],p=n[6],d=n[7],y=n[8],v=n[9],m=n[10],M=n[11],P=Math.cos(c),I=Math.sin(c);return r[4]=P*t+I*y,r[5]=P*o+I*v,r[6]=P*p+I*m,r[7]=P*d+I*M,r[8]=P*y-I*t,r[9]=P*v-I*o,r[10]=P*m-I*p,r[11]=P*M-I*d,n!==r&&(r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r[12]=n[12],r[13]=n[13],r[14]=n[14],r[15]=n[15]),r}function On(n,c){const s=c??new u(16),r=Math.cos(n),t=Math.sin(n);return s[0]=r,s[1]=0,s[2]=-t,s[3]=0,s[4]=0,s[5]=1,s[6]=0,s[7]=0,s[8]=t,s[9]=0,s[10]=r,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function Tn(n,c,s){const r=s??new u(16),t=n[0*4+0],o=n[0*4+1],p=n[0*4+2],d=n[0*4+3],y=n[2*4+0],v=n[2*4+1],m=n[2*4+2],M=n[2*4+3],P=Math.cos(c),I=Math.sin(c);return r[0]=P*t-I*y,r[1]=P*o-I*v,r[2]=P*p-I*m,r[3]=P*d-I*M,r[8]=P*y+I*t,r[9]=P*v+I*o,r[10]=P*m+I*p,r[11]=P*M+I*d,n!==r&&(r[4]=n[4],r[5]=n[5],r[6]=n[6],r[7]=n[7],r[12]=n[12],r[13]=n[13],r[14]=n[14],r[15]=n[15]),r}function w(n,c){const s=c??new u(16),r=Math.cos(n),t=Math.sin(n);return s[0]=r,s[1]=t,s[2]=0,s[3]=0,s[4]=-t,s[5]=r,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=1,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function b(n,c,s){const r=s??new u(16),t=n[0*4+0],o=n[0*4+1],p=n[0*4+2],d=n[0*4+3],y=n[1*4+0],v=n[1*4+1],m=n[1*4+2],M=n[1*4+3],P=Math.cos(c),I=Math.sin(c);return r[0]=P*t+I*y,r[1]=P*o+I*v,r[2]=P*p+I*m,r[3]=P*d+I*M,r[4]=P*y-I*t,r[5]=P*v-I*o,r[6]=P*m-I*p,r[7]=P*M-I*d,n!==r&&(r[8]=n[8],r[9]=n[9],r[10]=n[10],r[11]=n[11],r[12]=n[12],r[13]=n[13],r[14]=n[14],r[15]=n[15]),r}function f(n,c,s){const r=s??new u(16);let t=n[0],o=n[1],p=n[2];const d=Math.sqrt(t*t+o*o+p*p);t/=d,o/=d,p/=d;const y=t*t,v=o*o,m=p*p,M=Math.cos(c),P=Math.sin(c),I=1-M;return r[0]=y+(1-y)*M,r[1]=t*o*I+p*P,r[2]=t*p*I-o*P,r[3]=0,r[4]=t*o*I-p*P,r[5]=v+(1-v)*M,r[6]=o*p*I+t*P,r[7]=0,r[8]=t*p*I+o*P,r[9]=o*p*I-t*P,r[10]=m+(1-m)*M,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}const e=f;function a(n,c,s,r){const t=r??new u(16);let o=c[0],p=c[1],d=c[2];const y=Math.sqrt(o*o+p*p+d*d);o/=y,p/=y,d/=y;const v=o*o,m=p*p,M=d*d,P=Math.cos(s),I=Math.sin(s),E=1-P,L=v+(1-v)*P,U=o*p*E+d*I,A=o*d*E-p*I,X=o*p*E-d*I,C=m+(1-m)*P,sn=p*d*E+o*I,rn=o*d*E+p*I,on=p*d*E-o*I,dn=M+(1-M)*P,_n=n[0],pn=n[1],gn=n[2],hn=n[3],xn=n[4],mn=n[5],bn=n[6],Sn=n[7],zn=n[8],En=n[9],Un=n[10],An=n[11];return t[0]=L*_n+U*xn+A*zn,t[1]=L*pn+U*mn+A*En,t[2]=L*gn+U*bn+A*Un,t[3]=L*hn+U*Sn+A*An,t[4]=X*_n+C*xn+sn*zn,t[5]=X*pn+C*mn+sn*En,t[6]=X*gn+C*bn+sn*Un,t[7]=X*hn+C*Sn+sn*An,t[8]=rn*_n+on*xn+dn*zn,t[9]=rn*pn+on*mn+dn*En,t[10]=rn*gn+on*bn+dn*Un,t[11]=rn*hn+on*Sn+dn*An,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t}const i=a;function l(n,c){const s=c??new u(16);return s[0]=n[0],s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=n[1],s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=n[2],s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function g(n,c,s){const r=s??new u(16),t=c[0],o=c[1],p=c[2];return r[0]=t*n[0*4+0],r[1]=t*n[0*4+1],r[2]=t*n[0*4+2],r[3]=t*n[0*4+3],r[4]=o*n[1*4+0],r[5]=o*n[1*4+1],r[6]=o*n[1*4+2],r[7]=o*n[1*4+3],r[8]=p*n[2*4+0],r[9]=p*n[2*4+1],r[10]=p*n[2*4+2],r[11]=p*n[2*4+3],n!==r&&(r[12]=n[12],r[13]=n[13],r[14]=n[14],r[15]=n[15]),r}function h(n,c){const s=c??new u(16);return s[0]=n,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=n,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=n,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function x(n,c,s){const r=s??new u(16);return r[0]=c*n[0*4+0],r[1]=c*n[0*4+1],r[2]=c*n[0*4+2],r[3]=c*n[0*4+3],r[4]=c*n[1*4+0],r[5]=c*n[1*4+1],r[6]=c*n[1*4+2],r[7]=c*n[1*4+3],r[8]=c*n[2*4+0],r[9]=c*n[2*4+1],r[10]=c*n[2*4+2],r[11]=c*n[2*4+3],n!==r&&(r[12]=n[12],r[13]=n[13],r[14]=n[14],r[15]=n[15]),r}return{add:F,aim:cn,axisRotate:a,axisRotation:f,cameraAim:Dn,clone:Y,copy:R,create:z,determinant:V,equals:$,equalsApproximately:Q,fromMat3:S,fromQuat:k,frustum:kn,frustumReverseZ:an,getAxis:In,getScaling:fn,getTranslation:vn,identity:H,inverse:J,invert:nn,lookAt:N,mul:Pn,mulScalar:B,multiply:j,multiplyScalar:G,negate:O,ortho:ln,perspective:tn,perspectiveReverseZ:Bn,rotate:i,rotateX:Gn,rotateY:Tn,rotateZ:b,rotation:e,rotationX:qn,rotationY:On,rotationZ:w,scale:g,scaling:l,set:D,setAxis:un,setTranslation:yn,translate:Mn,translation:Wn,transpose:K,uniformScale:x,uniformScaling:h}}const fe=new Map;function Ae(u){let _=fe.get(u);return _||(_=Ue(u),fe.set(u,_)),_}function Le(u){const _=ee(u);function z(w,b,f,e){const a=new u(4);return w!==void 0&&(a[0]=w,b!==void 0&&(a[1]=b,f!==void 0&&(a[2]=f,e!==void 0&&(a[3]=e)))),a}const D=z;function S(w,b,f,e,a){const i=a??new u(4);return i[0]=w,i[1]=b,i[2]=f,i[3]=e,i}function k(w,b,f){const e=f??new u(4),a=b*.5,i=Math.sin(a);return e[0]=i*w[0],e[1]=i*w[1],e[2]=i*w[2],e[3]=Math.cos(a),e}function O(w,b){const f=b??_.create(3),e=Math.acos(w[3])*2,a=Math.sin(e*.5);return a>T?(f[0]=w[0]/a,f[1]=w[1]/a,f[2]=w[2]/a):(f[0]=1,f[1]=0,f[2]=0),{angle:e,axis:f}}function F(w,b){const f=tn(w,b);return Math.acos(2*f*f-1)}function G(w,b,f){const e=f??new u(4),a=w[0],i=w[1],l=w[2],g=w[3],h=b[0],x=b[1],n=b[2],c=b[3];return e[0]=a*c+g*h+i*n-l*x,e[1]=i*c+g*x+l*h-a*n,e[2]=l*c+g*n+a*x-i*h,e[3]=g*c-a*h-i*x-l*n,e}const B=G;function R(w,b,f){const e=f??new u(4),a=b*.5,i=w[0],l=w[1],g=w[2],h=w[3],x=Math.sin(a),n=Math.cos(a);return e[0]=i*n+h*x,e[1]=l*n+g*x,e[2]=g*n-l*x,e[3]=h*n-i*x,e}function Y(w,b,f){const e=f??new u(4),a=b*.5,i=w[0],l=w[1],g=w[2],h=w[3],x=Math.sin(a),n=Math.cos(a);return e[0]=i*n-g*x,e[1]=l*n+h*x,e[2]=g*n+i*x,e[3]=h*n-l*x,e}function Q(w,b,f){const e=f??new u(4),a=b*.5,i=w[0],l=w[1],g=w[2],h=w[3],x=Math.sin(a),n=Math.cos(a);return e[0]=i*n+l*x,e[1]=l*n-i*x,e[2]=g*n+h*x,e[3]=h*n-g*x,e}function $(w,b,f,e){const a=e??new u(4),i=w[0],l=w[1],g=w[2],h=w[3];let x=b[0],n=b[1],c=b[2],s=b[3],r=i*x+l*n+g*c+h*s;r<0&&(r=-r,x=-x,n=-n,c=-c,s=-s);let t,o;if(1-r>T){const p=Math.acos(r),d=Math.sin(p);t=Math.sin((1-f)*p)/d,o=Math.sin(f*p)/d}else t=1-f,o=f;return a[0]=t*i+o*x,a[1]=t*l+o*n,a[2]=t*g+o*c,a[3]=t*h+o*s,a}function H(w,b){const f=b??new u(4),e=w[0],a=w[1],i=w[2],l=w[3],g=e*e+a*a+i*i+l*l,h=g?1/g:0;return f[0]=-e*h,f[1]=-a*h,f[2]=-i*h,f[3]=l*h,f}function K(w,b){const f=b??new u(4);return f[0]=-w[0],f[1]=-w[1],f[2]=-w[2],f[3]=w[3],f}function J(w,b){const f=b??new u(4),e=w[0]+w[5]+w[10];if(e>0){const a=Math.sqrt(e+1);f[3]=.5*a;const i=.5/a;f[0]=(w[6]-w[9])*i,f[1]=(w[8]-w[2])*i,f[2]=(w[1]-w[4])*i}else{let a=0;w[5]>w[0]&&(a=1),w[10]>w[a*4+a]&&(a=2);const i=(a+1)%3,l=(a+2)%3,g=Math.sqrt(w[a*4+a]-w[i*4+i]-w[l*4+l]+1);f[a]=.5*g;const h=.5/g;f[3]=(w[i*4+l]-w[l*4+i])*h,f[i]=(w[i*4+a]+w[a*4+i])*h,f[l]=(w[l*4+a]+w[a*4+l])*h}return f}function V(w,b,f,e,a){const i=a??new u(4),l=w*.5,g=b*.5,h=f*.5,x=Math.sin(l),n=Math.cos(l),c=Math.sin(g),s=Math.cos(g),r=Math.sin(h),t=Math.cos(h);switch(e){case"xyz":i[0]=x*s*t+n*c*r,i[1]=n*c*t-x*s*r,i[2]=n*s*r+x*c*t,i[3]=n*s*t-x*c*r;break;case"xzy":i[0]=x*s*t-n*c*r,i[1]=n*c*t-x*s*r,i[2]=n*s*r+x*c*t,i[3]=n*s*t+x*c*r;break;case"yxz":i[0]=x*s*t+n*c*r,i[1]=n*c*t-x*s*r,i[2]=n*s*r-x*c*t,i[3]=n*s*t+x*c*r;break;case"yzx":i[0]=x*s*t+n*c*r,i[1]=n*c*t+x*s*r,i[2]=n*s*r-x*c*t,i[3]=n*s*t-x*c*r;break;case"zxy":i[0]=x*s*t-n*c*r,i[1]=n*c*t+x*s*r,i[2]=n*s*r+x*c*t,i[3]=n*s*t-x*c*r;break;case"zyx":i[0]=x*s*t-n*c*r,i[1]=n*c*t+x*s*r,i[2]=n*s*r-x*c*t,i[3]=n*s*t+x*c*r;break;default:throw new Error(`Unknown rotation order: ${e}`)}return i}function nn(w,b){const f=b??new u(4);return f[0]=w[0],f[1]=w[1],f[2]=w[2],f[3]=w[3],f}const j=nn;function Pn(w,b,f){const e=f??new u(4);return e[0]=w[0]+b[0],e[1]=w[1]+b[1],e[2]=w[2]+b[2],e[3]=w[3]+b[3],e}function yn(w,b,f){const e=f??new u(4);return e[0]=w[0]-b[0],e[1]=w[1]-b[1],e[2]=w[2]-b[2],e[3]=w[3]-b[3],e}const vn=yn;function In(w,b,f){const e=f??new u(4);return e[0]=w[0]*b,e[1]=w[1]*b,e[2]=w[2]*b,e[3]=w[3]*b,e}const un=In;function fn(w,b,f){const e=f??new u(4);return e[0]=w[0]/b,e[1]=w[1]/b,e[2]=w[2]/b,e[3]=w[3]/b,e}function tn(w,b){return w[0]*b[0]+w[1]*b[1]+w[2]*b[2]+w[3]*b[3]}function Bn(w,b,f,e){const a=e??new u(4);return a[0]=w[0]+f*(b[0]-w[0]),a[1]=w[1]+f*(b[1]-w[1]),a[2]=w[2]+f*(b[2]-w[2]),a[3]=w[3]+f*(b[3]-w[3]),a}function ln(w){const b=w[0],f=w[1],e=w[2],a=w[3];return Math.sqrt(b*b+f*f+e*e+a*a)}const kn=ln;function an(w){const b=w[0],f=w[1],e=w[2],a=w[3];return b*b+f*f+e*e+a*a}const q=an;function Z(w,b){const f=b??new u(4),e=w[0],a=w[1],i=w[2],l=w[3],g=Math.sqrt(e*e+a*a+i*i+l*l);return g>1e-5?(f[0]=e/g,f[1]=a/g,f[2]=i/g,f[3]=l/g):(f[0]=0,f[1]=0,f[2]=0,f[3]=1),f}function W(w,b){return Math.abs(w[0]-b[0])<T&&Math.abs(w[1]-b[1])<T&&Math.abs(w[2]-b[2])<T&&Math.abs(w[3]-b[3])<T}function cn(w,b){return w[0]===b[0]&&w[1]===b[1]&&w[2]===b[2]&&w[3]===b[3]}function Dn(w){const b=w??new u(4);return b[0]=0,b[1]=0,b[2]=0,b[3]=1,b}const N=_.create(),Wn=_.create(),Mn=_.create();function qn(w,b,f){const e=f??new u(4),a=_.dot(w,b);return a<-.999999?(_.cross(Wn,w,N),_.len(N)<1e-6&&_.cross(Mn,w,N),_.normalize(N,N),k(N,Math.PI,e),e):a>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(_.cross(w,b,N),e[0]=N[0],e[1]=N[1],e[2]=N[2],e[3]=1+a,Z(e,e))}const Gn=new u(4),On=new u(4);function Tn(w,b,f,e,a,i){const l=i??new u(4);return $(w,e,a,Gn),$(b,f,a,On),$(Gn,On,2*a*(1-a),l),l}return{create:z,fromValues:D,set:S,fromAxisAngle:k,toAxisAngle:O,angle:F,multiply:G,mul:B,rotateX:R,rotateY:Y,rotateZ:Q,slerp:$,inverse:H,conjugate:K,fromMat:J,fromEuler:V,copy:nn,clone:j,add:Pn,subtract:yn,sub:vn,mulScalar:In,scale:un,divScalar:fn,dot:tn,lerp:Bn,length:ln,len:kn,lengthSq:an,lenSq:q,normalize:Z,equalsApproximately:W,equals:cn,identity:Dn,rotationTo:qn,sqlerp:Tn}}const _e=new Map;function Re(u){let _=_e.get(u);return _||(_=Le(u),_e.set(u,_)),_}function Oe(u){function _(f,e,a,i){const l=new u(4);return f!==void 0&&(l[0]=f,e!==void 0&&(l[1]=e,a!==void 0&&(l[2]=a,i!==void 0&&(l[3]=i)))),l}const z=_;function D(f,e,a,i,l){const g=l??new u(4);return g[0]=f,g[1]=e,g[2]=a,g[3]=i,g}function S(f,e){const a=e??new u(4);return a[0]=Math.ceil(f[0]),a[1]=Math.ceil(f[1]),a[2]=Math.ceil(f[2]),a[3]=Math.ceil(f[3]),a}function k(f,e){const a=e??new u(4);return a[0]=Math.floor(f[0]),a[1]=Math.floor(f[1]),a[2]=Math.floor(f[2]),a[3]=Math.floor(f[3]),a}function O(f,e){const a=e??new u(4);return a[0]=Math.round(f[0]),a[1]=Math.round(f[1]),a[2]=Math.round(f[2]),a[3]=Math.round(f[3]),a}function F(f,e=0,a=1,i){const l=i??new u(4);return l[0]=Math.min(a,Math.max(e,f[0])),l[1]=Math.min(a,Math.max(e,f[1])),l[2]=Math.min(a,Math.max(e,f[2])),l[3]=Math.min(a,Math.max(e,f[3])),l}function G(f,e,a){const i=a??new u(4);return i[0]=f[0]+e[0],i[1]=f[1]+e[1],i[2]=f[2]+e[2],i[3]=f[3]+e[3],i}function B(f,e,a,i){const l=i??new u(4);return l[0]=f[0]+e[0]*a,l[1]=f[1]+e[1]*a,l[2]=f[2]+e[2]*a,l[3]=f[3]+e[3]*a,l}function R(f,e,a){const i=a??new u(4);return i[0]=f[0]-e[0],i[1]=f[1]-e[1],i[2]=f[2]-e[2],i[3]=f[3]-e[3],i}const Y=R;function Q(f,e){return Math.abs(f[0]-e[0])<T&&Math.abs(f[1]-e[1])<T&&Math.abs(f[2]-e[2])<T&&Math.abs(f[3]-e[3])<T}function $(f,e){return f[0]===e[0]&&f[1]===e[1]&&f[2]===e[2]&&f[3]===e[3]}function H(f,e,a,i){const l=i??new u(4);return l[0]=f[0]+a*(e[0]-f[0]),l[1]=f[1]+a*(e[1]-f[1]),l[2]=f[2]+a*(e[2]-f[2]),l[3]=f[3]+a*(e[3]-f[3]),l}function K(f,e,a,i){const l=i??new u(4);return l[0]=f[0]+a[0]*(e[0]-f[0]),l[1]=f[1]+a[1]*(e[1]-f[1]),l[2]=f[2]+a[2]*(e[2]-f[2]),l[3]=f[3]+a[3]*(e[3]-f[3]),l}function J(f,e,a){const i=a??new u(4);return i[0]=Math.max(f[0],e[0]),i[1]=Math.max(f[1],e[1]),i[2]=Math.max(f[2],e[2]),i[3]=Math.max(f[3],e[3]),i}function V(f,e,a){const i=a??new u(4);return i[0]=Math.min(f[0],e[0]),i[1]=Math.min(f[1],e[1]),i[2]=Math.min(f[2],e[2]),i[3]=Math.min(f[3],e[3]),i}function nn(f,e,a){const i=a??new u(4);return i[0]=f[0]*e,i[1]=f[1]*e,i[2]=f[2]*e,i[3]=f[3]*e,i}const j=nn;function Pn(f,e,a){const i=a??new u(4);return i[0]=f[0]/e,i[1]=f[1]/e,i[2]=f[2]/e,i[3]=f[3]/e,i}function yn(f,e){const a=e??new u(4);return a[0]=1/f[0],a[1]=1/f[1],a[2]=1/f[2],a[3]=1/f[3],a}const vn=yn;function In(f,e){return f[0]*e[0]+f[1]*e[1]+f[2]*e[2]+f[3]*e[3]}function un(f){const e=f[0],a=f[1],i=f[2],l=f[3];return Math.sqrt(e*e+a*a+i*i+l*l)}const fn=un;function tn(f){const e=f[0],a=f[1],i=f[2],l=f[3];return e*e+a*a+i*i+l*l}const Bn=tn;function ln(f,e){const a=f[0]-e[0],i=f[1]-e[1],l=f[2]-e[2],g=f[3]-e[3];return Math.sqrt(a*a+i*i+l*l+g*g)}const kn=ln;function an(f,e){const a=f[0]-e[0],i=f[1]-e[1],l=f[2]-e[2],g=f[3]-e[3];return a*a+i*i+l*l+g*g}const q=an;function Z(f,e){const a=e??new u(4),i=f[0],l=f[1],g=f[2],h=f[3],x=Math.sqrt(i*i+l*l+g*g+h*h);return x>1e-5?(a[0]=i/x,a[1]=l/x,a[2]=g/x,a[3]=h/x):(a[0]=0,a[1]=0,a[2]=0,a[3]=0),a}function W(f,e){const a=e??new u(4);return a[0]=-f[0],a[1]=-f[1],a[2]=-f[2],a[3]=-f[3],a}function cn(f,e){const a=e??new u(4);return a[0]=f[0],a[1]=f[1],a[2]=f[2],a[3]=f[3],a}const Dn=cn;function N(f,e,a){const i=a??new u(4);return i[0]=f[0]*e[0],i[1]=f[1]*e[1],i[2]=f[2]*e[2],i[3]=f[3]*e[3],i}const Wn=N;function Mn(f,e,a){const i=a??new u(4);return i[0]=f[0]/e[0],i[1]=f[1]/e[1],i[2]=f[2]/e[2],i[3]=f[3]/e[3],i}const qn=Mn;function Gn(f){const e=f??new u(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}function On(f,e,a){const i=a??new u(4),l=f[0],g=f[1],h=f[2],x=f[3];return i[0]=e[0]*l+e[4]*g+e[8]*h+e[12]*x,i[1]=e[1]*l+e[5]*g+e[9]*h+e[13]*x,i[2]=e[2]*l+e[6]*g+e[10]*h+e[14]*x,i[3]=e[3]*l+e[7]*g+e[11]*h+e[15]*x,i}function Tn(f,e,a){const i=a??new u(4);return Z(f,i),nn(i,e,i)}function w(f,e,a){const i=a??new u(4);return un(f)>e?Tn(f,e,i):cn(f,i)}function b(f,e,a){const i=a??new u(4);return H(f,e,.5,i)}return{create:_,fromValues:z,set:D,ceil:S,floor:k,round:O,clamp:F,add:G,addScaled:B,subtract:R,sub:Y,equalsApproximately:Q,equals:$,lerp:H,lerpV:K,max:J,min:V,mulScalar:nn,scale:j,divScalar:Pn,inverse:yn,invert:vn,dot:In,length:un,len:fn,lengthSq:tn,lenSq:Bn,distance:ln,dist:kn,distanceSq:an,distSq:q,normalize:Z,negate:W,copy:cn,clone:Dn,multiply:N,mul:Wn,divide:Mn,div:qn,zero:Gn,transformMat4:On,setLength:Tn,truncate:w,midpoint:b}}const pe=new Map;function Te(u){let _=pe.get(u);return _||(_=Oe(u),pe.set(u,_)),_}function se(u,_,z,D,S,k){return{mat3:Ee(u),mat4:Ae(_),quat:Re(z),vec2:ve(D),vec3:ee(S),vec4:Te(k)}}const{mat3:We,mat4:Rn,quat:qe,vec2:ge,vec3:en,vec4:Mt}=se(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);se(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);se(De,Array,Array,Array,Array,Array);const he=document.querySelector("#log");let Ln=null,Xn=null;function me(){if(Ln)return Ln;Ln=document.createElement("div"),Ln.className="ply-spinner-overlay";const u=document.createElement("div");return u.className="ply-spinner",Ln.appendChild(u),Xn=document.createElement("div"),Xn.className="ply-spinner-label",Ln.appendChild(Xn),Ln.style.display="none",document.body.appendChild(Ln),Ln}function Ze(u){me(),Xn&&u&&(Xn.textContent=u),Ln&&(Ln.style.display="flex")}function $n(u){me(),Xn&&(Xn.textContent=u)}function He(){Ln&&(Ln.style.display="none")}function be(u){console.error(u),he&&(he.textContent=u)}function te(u,_){return 2*Math.atan(_/(2*u))}function Ce(u,_){const z=en.mulScalar(_,-1);return Rn.translate(u,z)}function Fe(u,_,z,D){const S=Math.tan(D/2),k=Math.tan(z/2),O=S*u,F=-O,G=k*u,B=-G,R=Rn.create();return R[0]=2*u/(G-B),R[5]=-2*u/(O-F),R[2]=(G+B)/(G-B),R[6]=(O+F)/(O-F),R[14]=1,R[10]=_/(_-u),R[11]=-(_*u)/(_-u),Rn.transpose(R,R),R}async function Ye(u){const z=await(await fetch(u)).json();return`${z.length}`,z.map(D=>{const S=en.clone(D.position),k=Rn.fromMat3(We.create(...D.rotation.flat()));return{position:S,rotation:k,fx:D.fx,fy:D.fy,img_width:D.width,img_height:D.height,img_name:D.img_name}})}const Xe=4*2,$e=4*16,Se=4*$e+2*Xe;function Ne(u){return u.createBuffer({label:"camera uniform",size:Se,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}const Fn=new Float32Array(Se/Float32Array.BYTES_PER_ELEMENT);class Ke{constructor(_,z){this.canvas=_,this.device=z,this.uniform_buffer=Ne(z),this.on_update_canvas()}on_update_canvas(){const _=.5*this.canvas.height/Math.tan(this.fovY*.5);this.focal[0]=_,this.focal[1]=_,this.fovX=te(_,this.canvas.width),this.viewport[0]=this.canvas.width,this.viewport[1]=this.canvas.height,this.update_buffer()}uniform_buffer;position=en.create();rotation=Rn.create();fovY=45/180*Math.PI;fovX;focal=ge.create();viewport=ge.create();view_matrix=Rn.identity();proj_matrix=Rn.identity();look=en.create(0,0,1);up=en.create(0,1,0);right=en.create(1,0,0);update_buffer(){let _=0;this.view_matrix=Ce(this.rotation,this.position),this.proj_matrix=Fe(.01,100,this.fovX,this.fovY);const z=Rn.inverse(this.view_matrix);en.transformMat4Upper3x3(en.create(0,0,1),z,this.look),en.normalize(this.look,this.look),en.cross(this.up,this.look,this.right),en.normalize(this.right,this.right),Fn.set(this.view_matrix,_),_+=16,Fn.set(z,_),_+=16,Fn.set(this.proj_matrix,_),_+=16,Fn.set(Rn.inverse(this.proj_matrix),_),_+=16,Fn.set(this.viewport,_),_+=2,Fn.set(this.focal,_),_+=2,this.device.queue.writeBuffer(this.uniform_buffer,0,Fn)}set_preset(_){en.copy(_.position,this.position),Rn.copy(_.rotation,this.rotation),this.update_buffer()}set_eval_preset(_,z=1){en.copy(_.position,this.position),Rn.copy(_.rotation,this.rotation);const D=Math.floor((_.img_width??this.canvas.width)/z),S=Math.floor((_.img_height??this.canvas.height)/z),k=(_.fx??this.focal[0])/z,O=(_.fy??this.focal[1])/z;this.canvas.width=D,this.canvas.height=S,this.focal[0]=k,this.focal[1]=O,this.fovY=te(O,S),this.fovX=te(k,D),this.viewport[0]=D,this.viewport[1]=S,this.update_buffer()}}class Ve{constructor(_){this.camera=_,this.register_element(_.canvas),document.addEventListener("mousemove",this.lockedMouseMoveCallback),document.addEventListener("pointerlockchange",this.pointerLockChangeCallback),window.addEventListener("blur",this.windowBlurCallback),document.addEventListener("visibilitychange",this.visibilityChangeCallback)}element;_enabled=!0;pressedKeys=new Set;movementSpeed=1;boostMultiplier=3;rotationSpeed=1;pointerLockSensitivity=.002;get enabled(){return this._enabled}set enabled(_){this._enabled=_,_||(this.clearInteractionState(),this.releasePointerLock())}register_element(_){this.element&&this.element!=_&&(document.pointerLockElement===this.element&&document.exitPointerLock(),this.element.removeEventListener("pointerdown",this.downCallback.bind(this)),this.element.removeEventListener("pointermove",this.moveCallback.bind(this)),this.element.removeEventListener("pointerup",this.upCallback.bind(this)),this.element.removeEventListener("wheel",this.wheelCallback.bind(this)),this.element.removeEventListener("keydown",this.keyDownCallback.bind(this)),this.element.removeEventListener("keyup",this.keyUpCallback.bind(this)),this.element.removeEventListener("blur",this.canvasBlurCallback)),this.element=_,this.element.addEventListener("pointerdown",this.downCallback.bind(this)),this.element.addEventListener("pointermove",this.moveCallback.bind(this)),this.element.addEventListener("pointerup",this.upCallback.bind(this)),this.element.addEventListener("wheel",this.wheelCallback.bind(this)),this.element.addEventListener("keydown",this.keyDownCallback.bind(this)),this.element.addEventListener("keyup",this.keyUpCallback.bind(this)),this.element.addEventListener("blur",this.canvasBlurCallback),this.element.addEventListener("contextmenu",z=>{z.preventDefault()}),this.element.tabIndex=0}panning=!1;rotating=!1;lastX;lastY;canvasBlurCallback=()=>{this.clearInteractionState()};windowBlurCallback=()=>{this.clearInteractionState(),this.releasePointerLock()};visibilityChangeCallback=()=>{document.hidden&&(this.clearInteractionState(),this.releasePointerLock())};pointerLockChangeCallback=()=>{this.isPointerLocked()?(this.rotating=!1,this.panning=!1):this.clearInteractionState()};lockedMouseMoveCallback=_=>{!this.enabled||!this.isPointerLocked()||_.movementX===0&&_.movementY===0||this.rotateRadians(_.movementY*this.pointerLockSensitivity,-_.movementX*this.pointerLockSensitivity)};downCallback(_){this.element.focus({preventScroll:!0}),!(!this.enabled||this.isPointerLocked())&&_.isPrimary&&(_.button===0?(this.rotating=!0,this.panning=!1):(this.rotating=!1,this.panning=!0),this.lastX=_.pageX,this.lastY=_.pageY)}moveCallback(_){if(!this.enabled||this.isPointerLocked()||!(this.rotating||this.panning))return;const z=_.pageX-this.lastX,D=_.pageY-this.lastY;this.lastX=_.pageX,this.lastY=_.pageY,this.rotating?this.rotate(z,D):this.panning&&this.pan(z,D)}upCallback(_){this.rotating=!1,this.panning=!1,_.preventDefault()}wheelCallback(_){if(!this.enabled)return;_.preventDefault();const z=en.mulScalar(this.camera.look,-_.deltaY*.001);en.add(z,this.camera.position,this.camera.position),this.camera.update_buffer()}isControlKey(_){return _==="KeyW"||_==="KeyA"||_==="KeyS"||_==="KeyD"||_==="KeyQ"||_==="KeyE"}keyDownCallback(_){if(!(!this.enabled||_.ctrlKey||_.metaKey||_.altKey)){if(_.code==="Backquote"){if(_.repeat)return;_.preventDefault(),this.togglePointerLock();return}if(_.code==="ShiftLeft"||_.code==="ShiftRight"){this.pressedKeys.add(_.code);return}this.isControlKey(_.code)&&(this.pressedKeys.add(_.code),_.preventDefault())}}keyUpCallback(_){if(_.code==="ShiftLeft"||_.code==="ShiftRight"){this.pressedKeys.delete(_.code);return}this.isControlKey(_.code)&&(this.pressedKeys.delete(_.code),!_.ctrlKey&&!_.metaKey&&!_.altKey&&_.preventDefault())}isPointerLocked(){return document.pointerLockElement===this.element}togglePointerLock(){if(this.isPointerLocked()){document.exitPointerLock();return}const _=this.element.requestPointerLock;typeof _=="function"&&Promise.resolve(_.call(this.element)).catch(()=>{})}releasePointerLock(){this.isPointerLocked()&&document.exitPointerLock()}clearInteractionState(){this.pressedKeys.clear(),this.rotating=!1,this.panning=!1}update(_){if(!this.enabled||this.pressedKeys.size===0)return!1;const z=Number(this.pressedKeys.has("KeyW"))-Number(this.pressedKeys.has("KeyS")),D=Number(this.pressedKeys.has("KeyA"))-Number(this.pressedKeys.has("KeyD")),S=Number(this.pressedKeys.has("KeyQ"))-Number(this.pressedKeys.has("KeyE"));if(z===0&&D===0&&S===0)return!1;const k=Math.min(Math.max(_,0),.1);if(z!==0||D!==0){const O=Math.hypot(z,D),F=this.pressedKeys.has("ShiftLeft")||this.pressedKeys.has("ShiftRight"),G=this.movementSpeed*(F?this.boostMultiplier:1)*k/O;this.camera.position[0]+=(this.camera.look[0]*z+this.camera.right[0]*D)*G,this.camera.position[1]+=(this.camera.look[1]*z+this.camera.right[1]*D)*G,this.camera.position[2]+=(this.camera.look[2]*z+this.camera.right[2]*D)*G}return S!==0&&this.rotateRadians(0,0,S*this.rotationSpeed*k,!1),this.camera.update_buffer(),!0}rotateRadians(_,z,D=0,S=!0){const k=Rn.fromQuat(qe.fromEuler(_,z,D,"xyz"));Rn.mul(k,this.camera.rotation,this.camera.rotation),S&&this.camera.update_buffer()}rotate(_,z){this.rotateRadians(z*.01,-_*.01)}pan(_,z){const D=en.copy(this.camera.up);en.mulScalar(D,-z*.01,D),en.add(D,this.camera.position,this.camera.position),en.copy(this.camera.right,D),en.mulScalar(D,-_*.01,D),en.add(D,this.camera.position,this.camera.position),this.camera.update_buffer()}}const je=`enable f16;

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
}`,ze=32,Cn=new ArrayBuffer(ze),Hn={canvas_size:new Uint32Array(Cn,0,2),max_sh_deg:new Uint32Array(Cn,8,1),cur_sh_deg:new Uint32Array(Cn,12,1),gaussian_scaling:new Float32Array(Cn,16,1),kernel_size:new Float32Array(Cn,20,1),mip_spatting:new Uint32Array(Cn,24,1),walltime:new Float32Array(Cn,28,1)};function ut(u){Hn.canvas_size[0]=u.width>>>0,Hn.canvas_size[1]=u.height>>>0,Hn.max_sh_deg[0]=u.max_sh_deg>>>0,Hn.cur_sh_deg[0]=(u.cur_sh_deg??u.max_sh_deg)>>>0,Hn.gaussian_scaling[0]=u.gaussian_scaling??1,Hn.kernel_size[0]=u.kernel_size??.3,Hn.mip_spatting[0]=(typeof u.mip_spatting=="boolean"?u.mip_spatting?1:0:u.mip_spatting??0)>>>0,Hn.walltime[0]=u.walltime??0}function lt(u,_){u.queue.writeBuffer(_,0,Cn)}const dt=256,ft=ze,_t=24,pt=12,gt=16,ht=8,ie=8,Zn=1<<ie,Yn=256,Pe=32/ie;function xe(u,_){return{sort_indices_buffer:_.createBuffer({label:"ping-pong payload (indices)",size:u*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),sort_depths_buffer:_.createBuffer({label:"ping-pong keys (depths)",size:u*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})}}function xt(u,_){const z=u.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),D=u.createPipelineLayout({bindGroupLayouts:[z]}),S=k=>u.createComputePipeline({layout:D,compute:{module:_,entryPoint:k,constants:{WG_SIZE:Yn}}});return{l0TileScan:S("prefix_l0_tile_scan"),l1TileScanOnL0:S("prefix_l1_tile_scan_on_l0_sums"),l1ScanSums:S("prefix_scan_l1_sums"),addL1ToL0:S("prefix_add_l1_to_l0_offsets"),addL0ToElems:S("prefix_add_l0_to_elements"),computeDigitBase:S("compute_digit_base"),prefixBindGroupLayout:z}}function wt(u,_,z){const D=u.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),S=u.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),k=u.createPipelineLayout({bindGroupLayouts:[D]}),O=u.createPipelineLayout({bindGroupLayouts:[S]}),F=[];for(let G=0;G<Pe;G++){const B={PASS_ID:G,RS_RADIX_LOG2:ie,RS_RADIX_SIZE:Zn};F.push({localHistogram:u.createComputePipeline({layout:k,compute:{module:_,entryPoint:"local_histogram_pass",constants:B}}),scatterElements:u.createComputePipeline({layout:O,compute:{module:z,entryPoint:"scatter_elements",constants:B}})})}return{passes:F,localHistogramBindGroupLayout:D,scatterBindGroupLayout:S}}function yt(u){const _=u.createShaderModule({label:"local histogram",code:at}),z=u.createShaderModule({label:"scatter",code:ot}),D=u.createShaderModule({label:"blelloch prefix",code:ct}),S=xt(u,D),k=wt(u,_,z);return{localHistogramBindGroupLayout:k.localHistogramBindGroupLayout,scatterBindGroupLayout:k.scatterBindGroupLayout,passes:k.passes,hierarchicalBlelloch:S}}class vt{device;pc;presentationFormat;camera_buffer;render_settings_buffer;draw_indirect_buffer;splat_2d_buffer;preprocessPipeline;cullPipeline;renderPipeline;indirectPipeline;sort_info_buffer;sort_ping_pong;crsBg;gsBg;cullBg2;preprocessBg1;renderSplatsBindGroup;indirectBindGroup;sh_color_rgba_buffer;sh_solvers_buffer;splatSize;colorSize;constructor(_,z,D,S,k,O=!1,F=!1,G=!0){this.pc=_,this.device=z;const B=k.includes("shader-f16")&&G,R=(this.pc.ply_precision??"f16")==="f16";this.splatSize=R?pt:_t,this.colorSize=R?ht:gt,`${this.pc.ply_precision??"f16"}`,this.presentationFormat=D,this.camera_buffer=S,z.addEventListener("uncapturederror",N=>{console.error("A WebGPU error was not captured:",N.error)}),this._setupBuffers(_.sh_degree);const Y=(Math.floor((this.pc.num_points+Yn-1)/Yn)+1)*Yn,Q=Math.ceil(Y/Yn);`${this.pc.num_points}`;const $=z.createBuffer({label:"sort info",size:16*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT});this.sort_pipelines=yt(z);const H=[xe(Y,z),xe(Y,z)],K=z.createBuffer({label:"workgroup histograms",size:Q*Zn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),J=z.createBuffer({label:"workgroup prefixes",size:Q*Zn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),V=z.createBuffer({label:"digit base",size:Zn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),nn=Math.ceil(Q/Yn),j=Math.ceil(nn/Yn),Pn=z.createBuffer({label:"prefix l0 sums",size:nn*Zn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),yn=z.createBuffer({label:"prefix l0 offsets",size:nn*Zn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),vn=z.createBuffer({label:"prefix l1 sums",size:j*Zn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),In=z.createBuffer({label:"prefix l1 offsets",size:j*Zn*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.sort_prefixBindGroup=z.createBindGroup({label:"prefix 2L bind group",layout:this.sort_pipelines.hierarchicalBlelloch.prefixBindGroupLayout,entries:[{binding:0,resource:{buffer:$}},{binding:1,resource:{buffer:K}},{binding:2,resource:{buffer:J}},{binding:3,resource:{buffer:Pn}},{binding:4,resource:{buffer:yn}},{binding:5,resource:{buffer:vn}},{binding:6,resource:{buffer:In}},{binding:7,resource:{buffer:V}}]}),this.sort_localHistogramBindGroups=[z.createBindGroup({label:"localHistogram src=0",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:$}},{binding:1,resource:{buffer:H[0].sort_depths_buffer}},{binding:2,resource:{buffer:K}}]}),z.createBindGroup({label:"localHistogram src=1",layout:this.sort_pipelines.localHistogramBindGroupLayout,entries:[{binding:0,resource:{buffer:$}},{binding:1,resource:{buffer:H[1].sort_depths_buffer}},{binding:2,resource:{buffer:K}}]})],this.sort_scatterBindGroups=[z.createBindGroup({label:"scatter 0->1",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:$}},{binding:1,resource:{buffer:V}},{binding:2,resource:{buffer:H[0].sort_depths_buffer}},{binding:3,resource:{buffer:H[1].sort_depths_buffer}},{binding:4,resource:{buffer:H[0].sort_indices_buffer}},{binding:5,resource:{buffer:H[1].sort_indices_buffer}},{binding:6,resource:{buffer:J}}]}),z.createBindGroup({label:"scatter 1->0",layout:this.sort_pipelines.scatterBindGroupLayout,entries:[{binding:0,resource:{buffer:$}},{binding:1,resource:{buffer:V}},{binding:2,resource:{buffer:H[1].sort_depths_buffer}},{binding:3,resource:{buffer:H[0].sort_depths_buffer}},{binding:4,resource:{buffer:H[1].sort_indices_buffer}},{binding:5,resource:{buffer:H[0].sort_indices_buffer}},{binding:6,resource:{buffer:J}}]})],this.sort_info_buffer=$,this.sort_ping_pong=H;const un=this.device.createBindGroupLayout({label:"camera + renderSettings",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),fn=this.device.createBindGroupLayout({label:"gaussians + splats",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),tn=this.device.createBindGroupLayout({label:"cullBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),Bn=this.device.createBindGroupLayout({label:"preprocessBgl2",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]});this.crsBg=this.device.createBindGroup({label:"camera + renderSettings",layout:un,entries:[{binding:0,resource:{buffer:this.camera_buffer}},{binding:1,resource:{buffer:this.render_settings_buffer}}]}),this.gsBg=this.device.createBindGroup({label:"gaussians + splats",layout:fn,entries:[{binding:0,resource:{buffer:this.pc.gaussian_3d_buffer}},{binding:1,resource:{buffer:this.splat_2d_buffer}}]}),this.cullBg2=this.device.createBindGroup({label:"cullBg2",layout:tn,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.sort_ping_pong[0].sort_depths_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}},{binding:3,resource:{buffer:this.sh_solvers_buffer}}]}),this.preprocessBg1=this.device.createBindGroup({label:"preprocessBg2",layout:Bn,entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.pc.sh_buffer}},{binding:2,resource:{buffer:this.sh_solvers_buffer}},{binding:3,resource:{buffer:this.sh_color_rgba_buffer}}]});const ln=this.device.createShaderModule({code:st});this.indirectPipeline=this.device.createComputePipeline({label:"indirect dispatch calc",layout:"auto",compute:{module:ln,entryPoint:"write_dispatch_triples",constants:{RS_RADIX_SIZE:256}}}),this.indirectBindGroup=this.device.createBindGroup({label:"indirect dispatch bind group",layout:this.indirectPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.sort_info_buffer}},{binding:1,resource:{buffer:this.draw_indirect_buffer}}]});const kn=R?it:rt,an=this.device.createShaderModule({code:kn});this.cullPipeline=this.device.createComputePipeline({label:"preprocess_cull",layout:this.device.createPipelineLayout({bindGroupLayouts:[un,fn,tn]}),compute:{module:an,entryPoint:"preprocess_cull",constants:{DISABLE_AABB_CULL:O?1:0,DISABLE_OPACITY_RADIUS:F?1:0}}});const q=B?R?je:Qe:R?Je:nt,Z=this.device.createShaderModule({code:q});this.preprocessPipeline=this.device.createComputePipeline({label:"preprocess",layout:this.device.createPipelineLayout({bindGroupLayouts:[un,Bn]}),compute:{module:Z,entryPoint:"preprocess"}});const W=R?et:tt,cn=this.device.createShaderModule({code:W}),Dn={DISABLE_OPACITY_RADIUS:F?1:0};this.renderPipeline=this.device.createRenderPipeline({label:"render",layout:"auto",vertex:{module:cn,entryPoint:"vs_main",constants:Dn},fragment:{module:cn,entryPoint:"fs_main",constants:Dn,targets:[{format:"rgba16float",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},primitive:{topology:"triangle-strip",cullMode:"none"}}),this.renderSplatsBindGroup=this.device.createBindGroup({label:"gaussian splats rendering",layout:this.renderPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.splat_2d_buffer}},{binding:1,resource:{buffer:this.sh_color_rgba_buffer}},{binding:2,resource:{buffer:this.sort_ping_pong[0].sort_indices_buffer}}]})}frame(_,z){(this.lastFrame+this.frameCount)%this.queryCapacityFrames*this.queriesPerFrame;{_.clearBuffer(this.sort_info_buffer,0,4);const S=_.beginComputePass({label:"cull",timestampWrites:void 0});S.setPipeline(this.cullPipeline),S.setBindGroup(0,this.crsBg),S.setBindGroup(1,this.gsBg),S.setBindGroup(2,this.cullBg2);const k=Math.ceil(this.pc.num_points/dt);S.dispatchWorkgroups(k,1,1),S.end()}{const S=_.beginComputePass({label:"calculate indirect dispatch"});S.setPipeline(this.indirectPipeline),S.setBindGroup(0,this.indirectBindGroup),S.dispatchWorkgroups(1,1,1),S.end()}{const S=_.beginComputePass({label:"preprocess",timestampWrites:void 0});S.setPipeline(this.preprocessPipeline),S.setBindGroup(0,this.crsBg),S.setBindGroup(1,this.preprocessBg1),S.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),S.end()}for(let S=0;S<Pe;S++){const k=S&1,O=this.sort_pipelines.passes[S],F=this.sort_localHistogramBindGroups[k],G=this.sort_scatterBindGroups[k];{const B=_.beginComputePass({label:`upsweep_round${S}`,timestampWrites:void 0});B.setPipeline(O.localHistogram),B.setBindGroup(0,F),B.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),B.end()}{const B=_.beginComputePass({label:`prefix_round${S} - l0TileScan`});B.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l0TileScan),B.setBindGroup(0,this.sort_prefixBindGroup),B.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),B.end()}{const B=_.beginComputePass({label:`prefix_round${S} - l1TileScanOnL0`});B.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1TileScanOnL0),B.setBindGroup(0,this.sort_prefixBindGroup),B.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),B.end()}{const B=_.beginComputePass({label:`prefix_round${S} - l1ScanSums`});B.setPipeline(this.sort_pipelines.hierarchicalBlelloch.l1ScanSums),B.setBindGroup(0,this.sort_prefixBindGroup),B.dispatchWorkgroups(1,Zn,1),B.end()}{const B=_.beginComputePass({label:`prefix_round${S} - addL1ToL0`});B.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL1ToL0),B.setBindGroup(0,this.sort_prefixBindGroup),B.dispatchWorkgroupsIndirect(this.sort_info_buffer,32),B.end()}{const B=_.beginComputePass({label:`prefix_round${S} - addL0ToElems`});B.setPipeline(this.sort_pipelines.hierarchicalBlelloch.addL0ToElems),B.setBindGroup(0,this.sort_prefixBindGroup),B.dispatchWorkgroupsIndirect(this.sort_info_buffer,16),B.end()}{const B=_.beginComputePass({label:`prefix_round${S} - computeDigitBase`});B.setPipeline(this.sort_pipelines.hierarchicalBlelloch.computeDigitBase),B.setBindGroup(0,this.sort_prefixBindGroup),B.dispatchWorkgroups(1,1,1),B.end()}{const B=_.beginComputePass({label:`scatter_round${S}`,timestampWrites:void 0});B.setPipeline(O.scatterElements),B.setBindGroup(0,G),B.dispatchWorkgroupsIndirect(this.sort_info_buffer,4),B.end()}}{const S=_.beginRenderPass({label:"render",colorAttachments:[{view:z,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,0]}],timestampWrites:void 0});S.setPipeline(this.renderPipeline),S.setBindGroup(0,this.renderSplatsBindGroup),S.drawIndirect(this.draw_indirect_buffer,0),S.end()}}_setupBuffers(_){this.render_settings_buffer=this.device.createBuffer({label:"render settings",size:ft,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const z=document.querySelector("canvas"),D=z?z.width:1,S=z?z.height:1;ut({width:D,height:S,max_sh_deg:_}),lt(this.device,this.render_settings_buffer),this.splat_2d_buffer=this.device.createBuffer({label:"2d gaussians buffer",size:this.pc.num_points*this.splatSize,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),this.draw_indirect_buffer=this.device.createBuffer({label:"draw indirect",size:4*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDIRECT}),this.device.queue.writeBuffer(this.draw_indirect_buffer,0,new Uint32Array([4,0,0,0]));const k=12;this.sh_solvers_buffer=this.device.createBuffer({label:"sh_solvers",size:this.pc.num_points*k,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.sh_color_rgba_buffer=this.device.createBuffer({label:"sh_color_rgba",size:this.pc.num_points*this.colorSize,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})}}function we(u,_){if(!u)throw new Error(_&&(typeof _=="string"?_:_()))}function ye(u){return u+3&-4}const Ie=2,mt=10,bt=mt*Ie;async function St(u,_,z,D){Ze("downloading glTF...");try{return await zt({url:u},_,z,D)}finally{He()}}async function zt(u,_,z,D){return new Promise((S,k)=>{const O=new Worker(new URL(""+new URL("gltf-worker-9f59880e.js",import.meta.url).href,self.location),{type:"module"});O.onmessage=F=>{const G=F.data;if(G?.type==="error"){be(`glTF worker error: ${G.message??"unknown error"}`),O.terminate(),k(new Error(G.message??"Worker error"));return}else if(G?.type==="download_progress"){const B=G.totalBytes,R=G.loadedBytes/(1024*1024),Y=B?B/(1024*1024):void 0,Q=(G.speedBps??0)/(1024*1024),$=B?Math.min(99,Math.floor(G.loadedBytes/B*100)):void 0,H=Y?`total ${Y.toFixed(1)} MB`:"total -- MB",K=Y&&$!==void 0?`${R.toFixed(1)} MB downloaded (${$}%)`:`${R.toFixed(1)} MB downloaded`,J=`${Q.toFixed(2)} MB/s`;$n(`downloading glTF ...
${H}, ${K}
${J}`);return}else if(G?.type==="fetched"){`${G.byteLength}`,$n("parsing glTF...");return}else if(G?.type==="buffer_info"){G.useShared;return}else if(G?.type==="sorting"){const B=G.method??(G.sort?`${G.sort} sorting`:"sorting"),R=G.bitsPerAxis?` (${G.bitsPerAxis} bits/axis)`:"",Y=typeof G.points=="number"?` ${G.points} splats`:"";$n(`${B}${R}${Y}
reordering...`);return}else if(G?.type==="parse_progress"){const B=G.total??0,R=G.read??0,Y=B>0?Math.floor(R/B*100):0;$n(`parsing glTF ...
${R}/${B} splats (${Y}%)`);return}else if(G?.type==="done"){const B=G.num_points,R=G.final_sh_degree,Y=G.gs_stride,Q=G.sh_stride,$=new Float16Array(G.gaussian_cpu),H=new Float16Array(G.sh_cpu),K=_.createBuffer({label:"gltf input 3d gaussians data buffer",size:ye(B*bt),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});_.queue.writeBuffer(K,0,$);const J=Q*Ie,V=_.createBuffer({label:"gltf input spherical harmonics data buffer",size:ye(B*J),usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE});_.queue.writeBuffer(V,0,H),O.terminate(),S({num_points:B,ply_precision:"f16",gaussian_3d_buffer:K,sh_buffer:V,sh_degree:R,gaussian_cpu:$,sh_cpu:H,gs_stride:Y,sh_stride:Q})}},O.onerror=F=>{O.terminate(),k(F)},u instanceof ArrayBuffer?($n("parsing glTF..."),O.postMessage({type:"start",glbBuffer:u,sh_degree:z,sort:D},[u])):O.postMessage({type:"start_url",url:u.url,sh_degree:z,sort:D})})}const Pt="/demo/scenes/van_gogh_room/van_gogh_room_spz.glb",It="scenes/van_gogh_room/cameras.json";async function Bt(u,_,z,D){const S=new URLSearchParams(window.location.search),k=S.get("model_url")??Pt,O=S.get("camera_url")??It,F=Math.max(0,Math.min(4,Number.parseInt(S.get("clip_sh_degree")??"0",10)||0)),G=new Ke(u,z),B=new Ve(G),R=()=>{const V=window.devicePixelRatio||1,nn=Math.max(1,Math.ceil(u.clientWidth*V)),j=Math.max(1,Math.ceil(u.clientHeight*V));u.width===nn&&u.height===j||(u.width=nn,u.height=j,G.on_update_canvas())};new ResizeObserver(R).observe(u),R(),_.configure({device:z,format:"rgba16float",alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING});const Q=await Ye(O);if(Q.length===0)throw new Error("No camera presets are available.");G.set_preset(Q[0]);const $=await St(k,z,F,null),H=new vt($,z,"rgba16float",G.uniform_buffer,D,!1,!1,!0);let K=performance.now();function J(V){const nn=(V-K)/1e3;K=V,B.update(nn);const j=z.createCommandEncoder();H.frame(j,_.getCurrentTexture().createView()),z.queue.submit([j.finish()]),requestAnimationFrame(J)}requestAnimationFrame(J)}async function Dt(){if(!navigator.gpu)throw new Error("WebGPU is not supported in this browser.");const u=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!u)throw new Error("No WebGPU adapter is available.");const _=[];u.features.has("shader-f16")&&_.push("shader-f16");const z=await u.requestDevice({requiredLimits:{maxComputeWorkgroupStorageSize:u.limits.maxComputeWorkgroupStorageSize,maxBufferSize:u.limits.maxBufferSize,maxStorageBufferBindingSize:u.limits.maxStorageBufferBindingSize,maxStorageBuffersPerShaderStage:10},requiredFeatures:_}),D=document.querySelector("#webgpu-canvas");we(D!==null);const S=D.getContext("webgpu");we(S!==null),await Bt(D,S,z,_)}Dt().catch(u=>{const _=u instanceof Error?u.message:String(u);be(_)});
