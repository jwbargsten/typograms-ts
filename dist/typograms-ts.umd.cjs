(function(a){typeof define=="function"&&define.amd?define(a):a()})(function(){"use strict";function a(e,n={}){const t=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.entries(n).forEach(([l,r])=>t.setAttribute(l,`${r}`)),t}function M(e,n){const t=a("g");for(let l=0;l<=e*30;l+=3){const r=a("line",{x1:l,y1:0,x2:l,y2:54*n,class:"grid"});t.appendChild(r)}for(let l=0;l<=n*54;l+=3){const r=a("line",{x1:0,y1:l,x2:30*e,y2:l,class:"grid"});t.appendChild(r)}return t}function o([e,n,t,l,r,c,p,f]){const i=a("g");if(e){const s=a("line",{x1:15,y1:0,x2:15,y2:27,class:"part"});i.appendChild(s)}if(n){const s=a("line",{x1:15,y1:27,x2:30,y2:27,class:"part"});i.appendChild(s)}if(t){const s=a("line",{x1:15,y1:27,x2:15,y2:54,class:"part"});i.appendChild(s)}if(l){const s=a("line",{x1:0,y1:27,x2:15,y2:27,class:"part"});i.appendChild(s)}if(r){const s=a("line",{x1:30,y1:0,x2:15,y2:27,class:"part"});i.appendChild(s)}if(c){const s=a("line",{x1:15,y1:27,x2:30,y2:54,class:"part"});i.appendChild(s)}if(p){const s=a("line",{x1:15,y1:27,x2:0,y2:54,class:"part"});i.appendChild(s)}if(f){const s=a("line",{x1:0,y1:0,x2:15,y2:27,class:"part"});i.appendChild(s)}return i}function $(e,n){const t=a("g"),l=a("text",{"dominant-baseline":"central"}),r=document.createTextNode(e);l.appendChild(r),n&&l.setAttribute("class","reserved");const c=[[15,24]];return l.setAttribute("transform",c.map(([p,f])=>`translate(${p}, ${f})`).join(" ")),t.appendChild(l),t}function w(e,[n,t]){let l=" ",r=" ",c=" ",p=" ",f=" ",i=" ",s=" ",d=" ";return t>0&&(r=e[t-1][n]||" "),n<e[t].length-1&&(c=e[t][n+1]||" "),t<e.length-1&&(p=e[t+1][n]||" "),n>0&&(l=e[t][n-1]||" "),t>0&&n<e[t-1].length-1&&(f=e[t-1][n+1]||" "),t+1<e.length&&n<e[t+1].length&&(i=e[t+1][n+1]||" "),t<e.length-1&&n>0&&(s=e[t+1][n-1]||" "),t>0&&n>0&&(d=e[t-1][n-1]||" "),[r,c,p,l,f,i,s,d]}function G([,e,,n,t,l,r,c]){const p=a("g");if(e=="_"){const f=a("line",{x1:"18",y1:"51",x2:"30",y2:"51",class:"part"});p.appendChild(f)}if(n=="_"){const f=a("line",{x1:"0",y1:"51",x2:"12",y2:"51",class:"part"});p.appendChild(f)}if(t=="_"){const f=a("line",{x1:"12",y1:"-3",x2:"30",y2:"-3",class:"part"});p.appendChild(f)}if(c=="_"){const f=a("line",{x1:"0",y1:"-3",x2:"18",y2:"-3",class:"part"});p.appendChild(f)}return p.appendChild(o([!(t=="/"&&c=="\\"),["-"].includes(e),!(r=="/"&&l=="\\"),["-"].includes(n),t=="/",l=="\\",r=="/",c=="\\"])),p}function L([e,,n,,,,,]){return o([["|"].includes(e),!0,["|"].includes(n),!0,!1,!1,!1,!1])}function v(){const e=a("g"),n=a("line",{x1:"9",y1:"27",x2:"24",y2:"27",class:"part"});return e.appendChild(n),e}function b(e){const n=L(e);return n.setAttribute("transform","translate(0 24)"),n}function m([e,,n]){const t=a("g");{const l=a("line",{x1:"15",y1:"0",x2:"15",y2:"60",class:"part",style:"stroke-dasharray: 15; stroke-dashoffset: 0;"});t.appendChild(l)}if(e=="+"){const l=a("line",{x1:"15",y1:"-24",x2:"15",y2:"-15",class:"part"});t.appendChild(l)}if(n=="+"){const l=a("line",{x1:"15",y1:"60",x2:"15",y2:"78",class:"part"});t.appendChild(l)}return t}function k(){const e=a("g"),n=a("line",{x1:"0",y1:"21",x2:"30",y2:"21",class:"part"});e.appendChild(n);const t=a("line",{x1:"0",y1:"30",x2:"30",y2:"30",class:"part"});return e.appendChild(t),e}function _([e,n,t,l,r,c,p,f]){const i=a("g"),s=a("circle",{cx:"0",cy:"0",r:"21",stroke:"none",transform:"translate(15, 27)"});return i.appendChild(s),i.appendChild(o([["+","|"].includes(e),["+","-"].includes(n),["+","|"].includes(t),["+","-"].includes(l),["/"].includes(r),["\\"].includes(c),["/"].includes(p),["\\"].includes(f)])),i}function z([e,n,t,l,r,c,p,f]){const i=a("g"),s=a("circle",{cx:"0",cy:"0",r:"18","stroke-width":"6",fill:"none",stroke:"black",transform:"translate(15, 27)"});i.appendChild(s);const d=o([["+","|"].includes(e),["+","-"].includes(n),["+","|"].includes(t),["+","-"].includes(l),["/"].includes(r),["\\"].includes(c),["/"].includes(p),["\\"].includes(f)]);i.appendChild(d);const g=a("circle",{cx:"0",cy:"0",r:"15",fill:"white",opacity:"100%",transform:"translate(15, 27)"});return i.appendChild(g),i}function E(e){const[n,t,l,r]=e,c=a("g");if(c.appendChild(o([["|"].includes(n),!1,["|"].includes(l),!1,!0,!1,!0,!1])),t=="\\"){const p=o([!1,!1,!1,!1,!1,!1,!0,!1]);p.setAttribute("transform","translate(30 -54)"),p.setAttribute("clip-path","polygon(-3 0, 0 0, 0 54, -3 54)"),c.appendChild(p)}if(r=="\\"){const p=o([!1,!1,!1,!1,!0,!1,!1,!1]);p.setAttribute("transform","translate(-30 54)"),p.setAttribute("clip-path","polygon(15 -6, 33 -6, 33 6, 15 6)"),c.appendChild(p)}if(t=="_"){const p=b(e);c.appendChild(p)}return c}function j(e){const[n,t,l,r]=e,c=a("g");if(c.appendChild(o([["|"].includes(n),!1,["|"].includes(l),!1,!1,!0,!1,!0])),r=="/"){const p=o([!1,!1,!1,!1,!1,!0,!1,!1]);p.setAttribute("transform","translate(-30 -54)"),p.setAttribute("clip-path","polygon(15 0, 30 0, 30 54, 15 54)"),c.appendChild(p)}if(t=="/"){const p=o([!1,!1,!1,!1,!1,!1,!1,!0]);p.setAttribute("transform","translate(30 54)"),p.setAttribute("clip-path","polygon(-3 0, 0 0, 0 6, -3 6)"),c.appendChild(p)}if(r=="_"){const p=b(e);c.appendChild(p)}return c}function N([e,n,t,l,r,c,p,f]){const i=a("g"),s=a("polygon"),d=[[0,0],[42,0],[42,42],[0,42]];return s.setAttribute("points",d.map(([g,x])=>`${g},${x}`).join(" ")),s.setAttribute("transform","translate(-6, 6)"),i.appendChild(s),i.appendChild(o([["+","|"].includes(e),["+","-"].includes(n),["+","|"].includes(t),["+","-"].includes(l),["/"].includes(r),["\\"].includes(c),["/"].includes(p),["\\"].includes(f)])),i}function O([e,n,t,l,r,c,p,f]){const i=a("g"),s=["*","#","-","+","~",">",".","'","`"].includes(n),d=["*","#","-","+","~","<",".","'","`"].includes(l),g=["*","#","|","+",".","`","^"].includes(e),x=["*","#","|","+","'","`","v"].includes(t),h=["/","*","#"].includes(r),C=["\\","*","#"].includes(c),A=["\\","*","#"].includes(f),y=["/","*","#"].includes(p);if(i.appendChild(o([g,s,x,d,h,C,y,A])),(d||s)&&(x||g)){const u=a("polygon",{points:"0,0 6,0 6,6 0,6",transform:"translate(-3 -3) translate(15 27)"});i.appendChild(u)}if(h||A){const u=o([!1,!1,!1,!1,!1,A,h,!1]);u.setAttribute("clip-path","polygon(0 -3, 30 -3, 30 0, 0 0)"),i.appendChild(u)}if(C||y){const u=o([!1,!1,!1,!1,y,!1,!1,C]);u.setAttribute("clip-path","polygon(0 27, 15 27, 15 30, 0 30)"),i.appendChild(u)}if(y||A){const u=o([!1,!1,!1,!1,y&&C,A&&h,!1,!1]);u.setAttribute("clip-path","polygon(-3 0, 0 0, 0 54, -3 54)"),i.appendChild(u)}if(C||h){const u=o([!1,!1,!1,!1,!1,!1,h&&A,C&&y]);u.setAttribute("clip-path","polygon(15 0, 30 0, 30 54, 15 54)"),i.appendChild(u)}if(s||d){const u=o([!1,!1,!1,!1,s||y,A,h,d||C]);u.setAttribute("clip-path","polygon(-3 24, 30 24, 30 30, -3 30)"),i.appendChild(u)}return i}function T([e,n,t,l,r,c,p,f]){const i=a("g");if((n=="-"||n=="+")&&(t=="|"||t=="'"||t=="`"||t=="+")){const s=a("path",{d:`
        M 30 24
        A 18 18, 0, 0, 0, 12 42
        L 12 54
        L 18 54
        L 18 42
        A 12 12, 0, 0, 1, 30 30
        Z`});i.appendChild(s)}if((l=="-"||l=="+")&&(t=="|"||t=="'"||t=="`"||t=="+")){const s=a("path",{d:`
        M 0 24
        A 18 18, 0, 0, 1, 18 42
        L 18 54
        L 12 54
        L 12 42
        A 12 12, 0, 0, 0, 0 30        
        Z`});i.appendChild(s)}if((n=="-"||n=="+")&&(e=="|"||e=="."||e=="+")){const s=a("path",{d:`
        M 30 30
        A 18 18, 0, 0, 1, 12 12
        L 12 0
        L 18 0
        L 18 12
        A 12 12, 0, 0, 0, 30 24
        Z`});i.appendChild(s)}if((l=="-"||l=="+")&&(e=="|"||e=="."||e=="+")){const s=a("path",{d:`
        M 0 30
        A 18 18, 0, 0, 0, 18 12
        L 18 0
        L 12 0
        L 12 12
        A 12 12, 0, 0, 1, 0 24
        Z`});i.appendChild(s)}if(n=="-"&&r=="/"){const s=a("path",{d:`
        M 30 30
        A 12 12, 0, 0, 1, 18 18
        L 18 15
        L 24 15
        L 24 18
        A 6 6, 0, 0, 0, 30 24
        Z`});i.appendChild(s);const d=o([!1,!1,!1,!1,!0,!1,!1,!1]);d.setAttribute("clip-path","polygon(15px -10px, 30px -10px, 30px 30px, 2px 15px)"),i.appendChild(d)}if(n=="-"&&f=="\\"){const s=a("path",{d:`
        M -3 0
        A 60 60, 0, 0, 0, 30 30
        L 30 24
        A 60 60, 0, 0, 1, 0 -6
        Z`});i.appendChild(s)}if(l=="-"&&r=="/"){const s=a("path",{d:`
        M 0 30
        A 60 60, 0, 0, 0, 33 0
        L 30 -6
        A 60 60, 0, 0, 1, 0 24
        Z`});i.appendChild(s)}if(l=="-"&&f=="\\"){const s=a("path",{d:`
        M 0 30
        A 12 12, 0, 0, 0, 12 18
        L 12 15
        L 6 15
        L 6 18
        A 6 6, 0, 0, 1, 0 24
        Z`});i.appendChild(s);const d=o([!1,!1,!1,!1,!1,!1,!1,!0]);d.setAttribute("clip-path","polygon(-3 -3, 12 -3, 12 18, -3 18)"),i.appendChild(d)}if(t=="|"&&r=="/"){const s=a("path",{d:`
        M 12 54
        A 120 120, 0, 0, 1, 30 -6
        L 37 -6
        A 120 120, 0, 0, 0, 18 54
        Z`});i.appendChild(s)}if(e=="|"&&c=="\\"){const s=a("path",{d:`
        M 30 60
        A 120 120, 0, 0, 1, 12 0
        L 18 0
        A 120 120, 0, 0, 0, 37 60
        Z`});i.appendChild(s)}if(e=="|"&&p=="/"){const s=a("path",{d:`
        M 0 60
        A 120 120, 0, 0, 0, 18 0
        L 12 0
        A 120 120, 0, 0, 1, -7 60
        Z`});i.appendChild(s)}if(t=="|"&&f=="\\"){const s=a("path",{d:`
        M 12 54
        A 120 120, 0, 0, 0, -7 -6
        L 0 -6
        A 120 120, 0, 0, 1, 18 54
        Z`});i.appendChild(s)}if(n=="-"&&p=="/"){const s=a("path",{d:`
        M 0 48
        A 42 42, 0, 0, 1, 30 24
        L 30 30
        A 42 42, 0, 0, 0, 6 48
        Z`});i.appendChild(s);const d=o([!1,!1,!1,!1,!1,!1,!0,!1]);d.setAttribute("clip-path","polygon(-3 15, 12 15, 12 30, -3 30)"),i.appendChild(d)}if(l=="-"&&c=="\\"){const s=a("path",{d:`
        M 0 24
        A 42 42, 0, 0, 1, 30 48
        L 24 48
        A 42 42, 0, 0, 0, 0 30
        Z`});i.appendChild(s);const d=o([!1,!1,!1,!1,!1,!0,!1,!1]);d.setAttribute("clip-path","polygon(-3 15, 12 15, 21 30, -3 30)"),i.appendChild(d)}if(l=="-"&&p=="/"){const s=a("path",{d:`
        M 0 24
        A 12 12, 0, 0, 1, 12 39
        L 6 39
        A 6 6, 0, 0, 0, 0 30
        Z`});i.appendChild(s);const d=o([!1,!1,!1,!1,!1,!1,!0,!1]);d.setAttribute("clip-path","polygon(-3 6, 12 6, 12 30, -3 30)"),i.appendChild(d)}if(n=="-"&&c=="\\"){const s=a("path",{d:`
        M 30 24
        A 12 12, 0, 0, 0, 18 39
        L 24 39
        A 6 6, 0, 0, 1, 30 30 
        Z`});i.appendChild(s);const d=o([!1,!1,!1,!1,!1,!0,!1,!1]);d.setAttribute("clip-path","polygon(3 6, 18 6, 18 30, 3 30)"),i.appendChild(d)}if(p=="/"&&c=="\\"){const s=a("path",{d:`
        M 3 42
        A 15 15, 0, 0, 1, 27 42
        L 25 51
        A 9 9, 0, 0, 0, 5 51
        Z`});i.appendChild(s);const d=o([!1,!1,!1,!1,!1,!0,!0,!1]);d.setAttribute("clip-path","polygon(-3 15, 33 15, 33 30, -3 30)"),i.appendChild(d)}if(f=="\\"&&r=="/"){const s=a("path",{d:`
        M 3 12
        A 15 15, 0, 0, 0, 27 12
        L 22 9
        A 9 9, 0, 0, 1, 8 9
        Z`});i.appendChild(s);const d=o([!1,!1,!1,!1,!0,!1,!1,!0]);d.setAttribute("clip-path","polygon(-3 -3, 33 -3, 33 12, -3 12)"),i.appendChild(d)}if(r=="/"&&c=="\\"){const s=a("path",{d:`
        M 22 9
        A 30 30, 0, 0, 0, 22 45
        L 28 45
        A 30 30, 0, 0, 1, 28 9
        Z`});i.appendChild(s);const d=o([!1,!1,!1,!1,!0,!0,!1,!1]);d.setAttribute("clip-path","polygon(6 -3, 33 -3, 33 57, 6 57)"),i.appendChild(d)}if(f=="\\"&&p=="/"){const s=a("path",{d:`
        M 8 9
        A 30 30, 0, 0, 1, 8 45
        L 2 45
        A 30 30, 0, 0, 0, 2 9
        Z`});i.appendChild(s);const d=o([!1,!1,!1,!1,!1,!1,!0,!0]);d.setAttribute("clip-path","polygon(-3 -3, 9 -3, 9 57, -3 57)"),i.appendChild(d)}return i}function q([,e]){const n=a("g"),t=a("polygon",{points:"0,0 42,18 0,36"});let l=0;return(e=="*"||e=="o"||e=="#")&&(l-=18),t.setAttribute("transform",`translate(${l} 9)`),n.appendChild(t),n}function B([,,,e]){const n=a("g"),t=a("polygon",{points:"0,0 42,18 0,36"});let l=30;return(e=="*"||e=="o"||e=="#")&&(l+=18),t.setAttribute("transform",`translate(${l} 9) translate(0 36) rotate(180)`),n.appendChild(t),n}function D([e,,n,,t,,,l]){const r=a("g"),c=a("polygon",{points:"0,0 42,18 0,36"});let p=36;return n==" "?p=12:n=="_"?p+=18:(n=="*"||n=="o"||n=="#")&&(p-=18),t=="/"?c.setAttribute("transform",`translate(-36 33) rotate(${90+22.5}, 42, 18)`):l=="\\"?c.setAttribute("transform",`translate(-18 33) rotate(${90-22.5}, 42, 18)`):c.setAttribute("transform",`translate(33 ${p}) rotate(90)`),r.appendChild(c),r.appendChild(o([["|","+"].includes(e),!1,["|","+"].includes(e),!1,["/"].includes(t),!1,!1,["\\"].includes(l)])),r}function S([e,,n,,,t,l]){const r=a("g"),c=a("polygon",{points:"0,0 42,18 0,36"});let p=42;return e=="-"&&(p-=15),l=="/"?c.setAttribute("transform",`translate(-18 -15) rotate(${-45-22.5}, 42, 18)`):t=="\\"?c.setAttribute("transform",`translate(-36 -15) rotate(${-90-22.5}, 42, 18)`):c.setAttribute("transform",`translate(-3 ${p}) rotate(-90)`),r.appendChild(c),r.appendChild(o([!1,!1,["+","|"].includes(n),!1,!1,["\\"].includes(t),["/"].includes(l),!1])),r}function Q(){let e={"|":G,"-":L,"~":v,_:b,":":m,"=":k,"*":_,o:z,"/":E,"\\":j,"#":N,"+":O,".":T,">":q,"<":B,v:D,"^":S};return Object.entries({"┌":"+","┐":"+","└":"+","┘":"+","─":"-","►":">","'":".","`":".",V:"v"}).forEach(([t,l])=>{e[t]=r=>e[l](r)}),e}const Z=Q();function V(e){const n=a("g");for(let t=0;t<e.length;t++)for(let l=0;l<e[t].length;l++){const r=e[t][l];if(r==" "||r=='"')continue;const c=a("g");let p=!1;for(let s=0;s<l;s++)e[t][s]=='"'&&(p=!p);const f=w(e,[l,t]);if(r.match(/[A-Za-z0-9]/)){const[,s,,d]=f;p=p||!!d.match(/[A-Za-uw-z0-9]/)||!!s.match(/[A-Za-uw-z0-9]/)}const i=!!Z[r]&&!p;i&&c.appendChild(Z[r](f)),c.appendChild($(r,i)),c.setAttribute("transform",`translate(${l*30} ${t*54})`),n.appendChild(c)}return n}function W(e,n){const t=e.split(`
`).map(f=>f.trimEnd().split(""));t.splice(-1);let l=0;const r=t.length;for(let f=0;f<t.length;f++)for(let i=0;i<t[f].length;i++)t[f].length>l&&(l=t[i].length);const c=n.padding;let p=a("svg",{width:l*30*n.zoom,height:r*54*n.zoom,debug:n.debug,viewBox:`${-c} ${-c} ${l*30+2*c} ${r*54+2*c}`,class:"debug typograms"});return p.appendChild(V(t)),n.debug&&p.appendChild(M(l,r)),p}document.addEventListener("DOMContentLoaded",function(){for(const e of document.querySelectorAll("pre[data-typogram]")){if(e.hasAttribute("data-typogram-disabled"))continue;const n=e.textContent,t=Number(e.getAttribute("data-typogram-zoom")||.3),l=Number(e.getAttribute("data-typogram-padding")||6),r=e.hasAttribute("data-typogram-debug");if(n){const c=W(n,{zoom:t,debug:r,padding:l});e==null||e.replaceWith(c)}}})});
//# sourceMappingURL=typograms-ts.umd.cjs.map
