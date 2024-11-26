(function(i){typeof define=="function"&&define.amd?define(i):i()})(function(){"use strict";function i(n,e={}){const t=document.createElementNS("http://www.w3.org/2000/svg",n);return Object.entries(e).forEach(([l,c])=>t.setAttribute(l,`${c}`)),t}function w(n,e){const t=i("g");for(let l=0;l<=n*30;l+=3){const c=i("line",{x1:l,y1:0,x2:l,y2:54*e,class:"grid"});t.appendChild(c)}for(let l=0;l<=e*54;l+=3){const c=i("line",{x1:0,y1:l,x2:30*n,y2:l,class:"grid"});t.appendChild(c)}return t}function o([n,e,t,l,c,r,p,f]){const a=i("g");if(n){const s=i("line",{x1:15,y1:0,x2:15,y2:27,class:"part"});a.appendChild(s)}if(e){const s=i("line",{x1:15,y1:27,x2:30,y2:27,class:"part"});a.appendChild(s)}if(t){const s=i("line",{x1:15,y1:27,x2:15,y2:54,class:"part"});a.appendChild(s)}if(l){const s=i("line",{x1:0,y1:27,x2:15,y2:27,class:"part"});a.appendChild(s)}if(c){const s=i("line",{x1:30,y1:0,x2:15,y2:27,class:"part"});a.appendChild(s)}if(r){const s=i("line",{x1:15,y1:27,x2:30,y2:54,class:"part"});a.appendChild(s)}if(p){const s=i("line",{x1:15,y1:27,x2:0,y2:54,class:"part"});a.appendChild(s)}if(f){const s=i("line",{x1:0,y1:0,x2:15,y2:27,class:"part"});a.appendChild(s)}return a}function $(n,e){const t=i("g"),l=i("text",{"dominant-baseline":"central"}),c=document.createTextNode(n);l.appendChild(c),e&&l.setAttribute("class","reserved");const r=[[15,24]];return l.setAttribute("transform",r.map(([p,f])=>`translate(${p}, ${f})`).join(" ")),t.appendChild(l),t}function m(n,[e,t]){let l=" ",c=" ",r=" ",p=" ",f=" ",a=" ",s=" ",d=" ";return t>0&&(c=n[t-1][e]||" "),e<n[t].length-1&&(r=n[t][e+1]||" "),t<n.length-1&&(p=n[t+1][e]||" "),e>0&&(l=n[t][e-1]||" "),t>0&&e<n[t-1].length-1&&(f=n[t-1][e+1]||" "),t+1<n.length&&e<n[t+1].length&&(a=n[t+1][e+1]||" "),t<n.length-1&&e>0&&(s=n[t+1][e-1]||" "),t>0&&e>0&&(d=n[t-1][e-1]||" "),[c,r,p,l,f,a,s,d]}function G([,n,,e,t,l,c,r]){const p=i("g");if(n=="_"){const f=i("line",{x1:"18",y1:"51",x2:"30",y2:"51",class:"part"});p.appendChild(f)}if(e=="_"){const f=i("line",{x1:"0",y1:"51",x2:"12",y2:"51",class:"part"});p.appendChild(f)}if(t=="_"){const f=i("line",{x1:"12",y1:"-3",x2:"30",y2:"-3",class:"part"});p.appendChild(f)}if(r=="_"){const f=i("line",{x1:"0",y1:"-3",x2:"18",y2:"-3",class:"part"});p.appendChild(f)}return p.appendChild(o([!(t=="/"&&r=="\\"),["-"].includes(n),!(c=="/"&&l=="\\"),["-"].includes(e),t=="/",l=="\\",c=="/",r=="\\"])),p}function L([n,,e,,,,,]){return o([["|"].includes(n),!0,["|"].includes(e),!0,!1,!1,!1,!1])}function v(){const n=i("g"),e=i("line",{x1:"9",y1:"27",x2:"24",y2:"27",class:"part"});return n.appendChild(e),n}function x(n){const e=L(n);return e.setAttribute("transform","translate(0 24)"),e}function z([n,,e]){const t=i("g");{const l=i("line",{x1:"15",y1:"0",x2:"15",y2:"60",class:"part",style:"stroke-dasharray: 15; stroke-dashoffset: 0;"});t.appendChild(l)}if(n=="+"){const l=i("line",{x1:"15",y1:"-24",x2:"15",y2:"-15",class:"part"});t.appendChild(l)}if(e=="+"){const l=i("line",{x1:"15",y1:"60",x2:"15",y2:"78",class:"part"});t.appendChild(l)}return t}function k(){const n=i("g"),e=i("line",{x1:"0",y1:"21",x2:"30",y2:"21",class:"part"});n.appendChild(e);const t=i("line",{x1:"0",y1:"30",x2:"30",y2:"30",class:"part"});return n.appendChild(t),n}function _([n,e,t,l,c,r,p,f]){const a=i("g"),s=i("circle",{cx:"0",cy:"0",r:"21",stroke:"none",transform:"translate(15, 27)"});return a.appendChild(s),a.appendChild(o([["+","|"].includes(n),["+","-"].includes(e),["+","|"].includes(t),["+","-"].includes(l),["/"].includes(c),["\\"].includes(r),["/"].includes(p),["\\"].includes(f)])),a}function N([n,e,t,l,c,r,p,f]){const a=i("g"),s=i("circle",{cx:"0",cy:"0",r:"18","stroke-width":"6",fill:"none",stroke:"black",transform:"translate(15, 27)"});a.appendChild(s);const d=o([["+","|"].includes(n),["+","-"].includes(e),["+","|"].includes(t),["+","-"].includes(l),["/"].includes(c),["\\"].includes(r),["/"].includes(p),["\\"].includes(f)]);a.appendChild(d);const g=i("circle",{cx:"0",cy:"0",r:"15",fill:"white",opacity:"100%",transform:"translate(15, 27)"});return a.appendChild(g),a}function E(n){const[e,t,l,c]=n,r=i("g");if(r.appendChild(o([["|"].includes(e),!1,["|"].includes(l),!1,!0,!1,!0,!1])),t=="\\"){const p=o([!1,!1,!1,!1,!1,!1,!0,!1]);p.setAttribute("transform","translate(30 -54)"),p.setAttribute("clip-path","polygon(-3 0, 0 0, 0 54, -3 54)"),r.appendChild(p)}if(c=="\\"){const p=o([!1,!1,!1,!1,!0,!1,!1,!1]);p.setAttribute("transform","translate(-30 54)"),p.setAttribute("clip-path","polygon(15 -6, 33 -6, 33 6, 15 6)"),r.appendChild(p)}if(t=="_"){const p=x(n);r.appendChild(p)}return r}function j(n){const[e,t,l,c]=n,r=i("g");if(r.appendChild(o([["|"].includes(e),!1,["|"].includes(l),!1,!1,!0,!1,!0])),c=="/"){const p=o([!1,!1,!1,!1,!1,!0,!1,!1]);p.setAttribute("transform","translate(-30 -54)"),p.setAttribute("clip-path","polygon(15 0, 30 0, 30 54, 15 54)"),r.appendChild(p)}if(t=="/"){const p=o([!1,!1,!1,!1,!1,!1,!1,!0]);p.setAttribute("transform","translate(30 54)"),p.setAttribute("clip-path","polygon(-3 0, 0 0, 0 6, -3 6)"),r.appendChild(p)}if(c=="_"){const p=x(n);r.appendChild(p)}return r}function S([n,e,t,l,c,r,p,f]){const a=i("g"),s=i("polygon"),d=[[0,0],[42,0],[42,42],[0,42]];return s.setAttribute("points",d.map(([g,b])=>`${g},${b}`).join(" ")),s.setAttribute("transform","translate(-6, 6)"),a.appendChild(s),a.appendChild(o([["+","|"].includes(n),["+","-"].includes(e),["+","|"].includes(t),["+","-"].includes(l),["/"].includes(c),["\\"].includes(r),["/"].includes(p),["\\"].includes(f)])),a}function q([n,e,t,l,c,r,p,f]){const a=i("g"),s=["*","#","-","+","~",">",".","'","`"].includes(e),d=["*","#","-","+","~","<",".","'","`"].includes(l),g=["*","#","|","+",".","`","^"].includes(n),b=["*","#","|","+","'","`","v"].includes(t),h=["/","*","#"].includes(c),A=["\\","*","#"].includes(r),C=["\\","*","#"].includes(f),y=["/","*","#"].includes(p);if(a.appendChild(o([g,s,b,d,h,A,y,C])),(d||s)&&(b||g)){const u=i("polygon",{points:"0,0 6,0 6,6 0,6",transform:"translate(-3 -3) translate(15 27)"});a.appendChild(u)}if(h||C){const u=o([!1,!1,!1,!1,!1,C,h,!1]);u.setAttribute("clip-path","polygon(0 -3, 30 -3, 30 0, 0 0)"),a.appendChild(u)}if(A||y){const u=o([!1,!1,!1,!1,y,!1,!1,A]);u.setAttribute("clip-path","polygon(0 27, 15 27, 15 30, 0 30)"),a.appendChild(u)}if(y||C){const u=o([!1,!1,!1,!1,y&&A,C&&h,!1,!1]);u.setAttribute("clip-path","polygon(-3 0, 0 0, 0 54, -3 54)"),a.appendChild(u)}if(A||h){const u=o([!1,!1,!1,!1,!1,!1,h&&C,A&&y]);u.setAttribute("clip-path","polygon(15 0, 30 0, 30 54, 15 54)"),a.appendChild(u)}if(s||d){const u=o([!1,!1,!1,!1,s||y,C,h,d||A]);u.setAttribute("clip-path","polygon(-3 24, 30 24, 30 30, -3 30)"),a.appendChild(u)}return a}function B([n,e,t,l,c,r,p,f]){const a=i("g");if((e=="-"||e=="+")&&(t=="|"||t=="'"||t=="`"||t=="+")){const s=i("path",{d:`
        M 30 24
        A 18 18, 0, 0, 0, 12 42
        L 12 54
        L 18 54
        L 18 42
        A 12 12, 0, 0, 1, 30 30
        Z`});a.appendChild(s)}if((l=="-"||l=="+")&&(t=="|"||t=="'"||t=="`"||t=="+")){const s=i("path",{d:`
        M 0 24
        A 18 18, 0, 0, 1, 18 42
        L 18 54
        L 12 54
        L 12 42
        A 12 12, 0, 0, 0, 0 30        
        Z`});a.appendChild(s)}if((e=="-"||e=="+")&&(n=="|"||n=="."||n=="+")){const s=i("path",{d:`
        M 30 30
        A 18 18, 0, 0, 1, 12 12
        L 12 0
        L 18 0
        L 18 12
        A 12 12, 0, 0, 0, 30 24
        Z`});a.appendChild(s)}if((l=="-"||l=="+")&&(n=="|"||n=="."||n=="+")){const s=i("path",{d:`
        M 0 30
        A 18 18, 0, 0, 0, 18 12
        L 18 0
        L 12 0
        L 12 12
        A 12 12, 0, 0, 1, 0 24
        Z`});a.appendChild(s)}if(e=="-"&&c=="/"){const s=i("path",{d:`
        M 30 30
        A 12 12, 0, 0, 1, 18 18
        L 18 15
        L 24 15
        L 24 18
        A 6 6, 0, 0, 0, 30 24
        Z`});a.appendChild(s);const d=o([!1,!1,!1,!1,!0,!1,!1,!1]);d.setAttribute("clip-path","polygon(15px -10px, 30px -10px, 30px 30px, 2px 15px)"),a.appendChild(d)}if(e=="-"&&f=="\\"){const s=i("path",{d:`
        M -3 0
        A 60 60, 0, 0, 0, 30 30
        L 30 24
        A 60 60, 0, 0, 1, 0 -6
        Z`});a.appendChild(s)}if(l=="-"&&c=="/"){const s=i("path",{d:`
        M 0 30
        A 60 60, 0, 0, 0, 33 0
        L 30 -6
        A 60 60, 0, 0, 1, 0 24
        Z`});a.appendChild(s)}if(l=="-"&&f=="\\"){const s=i("path",{d:`
        M 0 30
        A 12 12, 0, 0, 0, 12 18
        L 12 15
        L 6 15
        L 6 18
        A 6 6, 0, 0, 1, 0 24
        Z`});a.appendChild(s);const d=o([!1,!1,!1,!1,!1,!1,!1,!0]);d.setAttribute("clip-path","polygon(-3 -3, 12 -3, 12 18, -3 18)"),a.appendChild(d)}if(t=="|"&&c=="/"){const s=i("path",{d:`
        M 12 54
        A 120 120, 0, 0, 1, 30 -6
        L 37 -6
        A 120 120, 0, 0, 0, 18 54
        Z`});a.appendChild(s)}if(n=="|"&&r=="\\"){const s=i("path",{d:`
        M 30 60
        A 120 120, 0, 0, 1, 12 0
        L 18 0
        A 120 120, 0, 0, 0, 37 60
        Z`});a.appendChild(s)}if(n=="|"&&p=="/"){const s=i("path",{d:`
        M 0 60
        A 120 120, 0, 0, 0, 18 0
        L 12 0
        A 120 120, 0, 0, 1, -7 60
        Z`});a.appendChild(s)}if(t=="|"&&f=="\\"){const s=i("path",{d:`
        M 12 54
        A 120 120, 0, 0, 0, -7 -6
        L 0 -6
        A 120 120, 0, 0, 1, 18 54
        Z`});a.appendChild(s)}if(e=="-"&&p=="/"){const s=i("path",{d:`
        M 0 48
        A 42 42, 0, 0, 1, 30 24
        L 30 30
        A 42 42, 0, 0, 0, 6 48
        Z`});a.appendChild(s);const d=o([!1,!1,!1,!1,!1,!1,!0,!1]);d.setAttribute("clip-path","polygon(-3 15, 12 15, 12 30, -3 30)"),a.appendChild(d)}if(l=="-"&&r=="\\"){const s=i("path",{d:`
        M 0 24
        A 42 42, 0, 0, 1, 30 48
        L 24 48
        A 42 42, 0, 0, 0, 0 30
        Z`});a.appendChild(s);const d=o([!1,!1,!1,!1,!1,!0,!1,!1]);d.setAttribute("clip-path","polygon(-3 15, 12 15, 21 30, -3 30)"),a.appendChild(d)}if(l=="-"&&p=="/"){const s=i("path",{d:`
        M 0 24
        A 12 12, 0, 0, 1, 12 39
        L 6 39
        A 6 6, 0, 0, 0, 0 30
        Z`});a.appendChild(s);const d=o([!1,!1,!1,!1,!1,!1,!0,!1]);d.setAttribute("clip-path","polygon(-3 6, 12 6, 12 30, -3 30)"),a.appendChild(d)}if(e=="-"&&r=="\\"){const s=i("path",{d:`
        M 30 24
        A 12 12, 0, 0, 0, 18 39
        L 24 39
        A 6 6, 0, 0, 1, 30 30 
        Z`});a.appendChild(s);const d=o([!1,!1,!1,!1,!1,!0,!1,!1]);d.setAttribute("clip-path","polygon(3 6, 18 6, 18 30, 3 30)"),a.appendChild(d)}if(p=="/"&&r=="\\"){const s=i("path",{d:`
        M 3 42
        A 15 15, 0, 0, 1, 27 42
        L 25 51
        A 9 9, 0, 0, 0, 5 51
        Z`});a.appendChild(s);const d=o([!1,!1,!1,!1,!1,!0,!0,!1]);d.setAttribute("clip-path","polygon(-3 15, 33 15, 33 30, -3 30)"),a.appendChild(d)}if(f=="\\"&&c=="/"){const s=i("path",{d:`
        M 3 12
        A 15 15, 0, 0, 0, 27 12
        L 22 9
        A 9 9, 0, 0, 1, 8 9
        Z`});a.appendChild(s);const d=o([!1,!1,!1,!1,!0,!1,!1,!0]);d.setAttribute("clip-path","polygon(-3 -3, 33 -3, 33 12, -3 12)"),a.appendChild(d)}if(c=="/"&&r=="\\"){const s=i("path",{d:`
        M 22 9
        A 30 30, 0, 0, 0, 22 45
        L 28 45
        A 30 30, 0, 0, 1, 28 9
        Z`});a.appendChild(s);const d=o([!1,!1,!1,!1,!0,!0,!1,!1]);d.setAttribute("clip-path","polygon(6 -3, 33 -3, 33 57, 6 57)"),a.appendChild(d)}if(f=="\\"&&p=="/"){const s=i("path",{d:`
        M 8 9
        A 30 30, 0, 0, 1, 8 45
        L 2 45
        A 30 30, 0, 0, 0, 2 9
        Z`});a.appendChild(s);const d=o([!1,!1,!1,!1,!1,!1,!0,!0]);d.setAttribute("clip-path","polygon(-3 -3, 9 -3, 9 57, -3 57)"),a.appendChild(d)}return a}function O([,n]){const e=i("g"),t=i("polygon",{points:"0,0 42,18 0,36"});let l=0;return(n=="*"||n=="o"||n=="#")&&(l-=18),t.setAttribute("transform",`translate(${l} 9)`),e.appendChild(t),e}function T([,,,n]){const e=i("g"),t=i("polygon",{points:"0,0 42,18 0,36"});let l=30;return(n=="*"||n=="o"||n=="#")&&(l+=18),t.setAttribute("transform",`translate(${l} 9) translate(0 36) rotate(180)`),e.appendChild(t),e}function D([n,,e,,t,,,l]){const c=i("g"),r=i("polygon",{points:"0,0 42,18 0,36"});let p=36;return e==" "?p=12:e=="_"?p+=18:(e=="*"||e=="o"||e=="#")&&(p-=18),t=="/"?r.setAttribute("transform",`translate(-36 33) rotate(${90+22.5}, 42, 18)`):l=="\\"?r.setAttribute("transform",`translate(-18 33) rotate(${90-22.5}, 42, 18)`):r.setAttribute("transform",`translate(33 ${p}) rotate(90)`),c.appendChild(r),c.appendChild(o([["|","+"].includes(n),!1,["|","+"].includes(n),!1,["/"].includes(t),!1,!1,["\\"].includes(l)])),c}function W([n,,e,,,t,l]){const c=i("g"),r=i("polygon",{points:"0,0 42,18 0,36"});let p=42;return n=="-"&&(p-=15),l=="/"?r.setAttribute("transform",`translate(-18 -15) rotate(${-45-22.5}, 42, 18)`):t=="\\"?r.setAttribute("transform",`translate(-36 -15) rotate(${-90-22.5}, 42, 18)`):r.setAttribute("transform",`translate(-3 ${p}) rotate(-90)`),c.appendChild(r),c.appendChild(o([!1,!1,["+","|"].includes(e),!1,!1,["\\"].includes(t),["/"].includes(l),!1])),c}function I(){let n={"|":G,"-":L,"~":v,_:x,":":z,"=":k,"*":_,o:N,"/":E,"\\":j,"#":S,"+":q,".":B,">":O,"<":T,v:D,"^":W};return Object.entries({"┌":"+","┐":"+","└":"+","┘":"+","─":"-","►":">","'":".","`":".",V:"v"}).forEach(([t,l])=>{n[t]=c=>n[l](c)}),n}function Q(n,e){const t=n.length;let l=0;for(;l<t&&e(n[l],l);)l++;return n.slice(l)}const Z=I();function V(n){const e=i("g");for(let t=0;t<n.length;t++)for(let l=0;l<n[t].length;l++){const c=n[t][l];if(c==" "||c=='"')continue;const r=i("g");let p=!1;for(let s=0;s<l;s++)n[t][s]=='"'&&(p=!p);const f=m(n,[l,t]);if(c.match(/[A-Za-z0-9]/)){const[,s,,d]=f;p=p||!!d.match(/[A-Za-uw-z0-9]/)||!!s.match(/[A-Za-uw-z0-9]/)}const a=!!Z[c]&&!p;a&&r.appendChild(Z[c](f)),r.appendChild($(c,a)),r.setAttribute("transform",`translate(${l*30} ${t*54})`),e.appendChild(r)}return e}function M(n,e){const t=Q(n.split(`
`),a=>!a);t.splice(-1);const l=t.map(a=>a.trimEnd().split("")),c=l.reduce((a,s)=>Math.max(a,s.length),-1/0),r=l.length,p=e.padding;let f=i("svg",{width:c*30*e.zoom,height:r*54*e.zoom,debug:e.debug,viewBox:`${-p} ${-p} ${c*30+2*p} ${r*54+2*p}`,class:"debug typograms"});return f.appendChild(V(l)),e.debug&&f.appendChild(w(c,r)),f}document.addEventListener("DOMContentLoaded",function(){var n;for(const e of document.querySelectorAll("pre[data-typogram]")){if(e.hasAttribute("data-typogram-disabled"))continue;const t=e.textContent,l=Number(e.getAttribute("data-typogram-zoom")||.3),c=Number(e.getAttribute("data-typogram-padding")||6),r=e.hasAttribute("data-typogram-debug");if(t){const p=M(t,{zoom:l,debug:r,padding:c});e==null||e.replaceWith(p)}}for(const e of document.querySelectorAll("script[type='text/typogram']")){if(e.hasAttribute("disabled"))continue;const t=e.textContent,l=Number(e.getAttribute("zoom")||.3),c=Number(e.getAttribute("padding")||0),r=e.hasAttribute("grid");if(t){const p=M(t,{zoom:l,debug:r,padding:c});(n=e==null?void 0:e.parentNode)==null||n.insertBefore(p,e.nextSibling)}}})});
//# sourceMappingURL=typograms-ts.umd.cjs.map
