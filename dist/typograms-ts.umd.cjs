(function(i){typeof define=="function"&&define.amd?define(i):i()})(function(){"use strict";function i(e,l={}){const t=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.entries(l).forEach(([n,c])=>t.setAttribute(n,`${c}`)),t}function M(e,l){const t=i("g");for(let n=0;n<=e*30;n+=3){const c=i("line",{x1:n,y1:0,x2:n,y2:54*l,class:"grid"});t.appendChild(c)}for(let n=0;n<=l*54;n+=3){const c=i("line",{x1:0,y1:n,x2:30*e,y2:n,class:"grid"});t.appendChild(c)}return t}function o([e,l,t,n,c,r,p,d]){const a=i("g");if(e){const s=i("line",{x1:15,y1:0,x2:15,y2:27,class:"part"});a.appendChild(s)}if(l){const s=i("line",{x1:15,y1:27,x2:30,y2:27,class:"part"});a.appendChild(s)}if(t){const s=i("line",{x1:15,y1:27,x2:15,y2:54,class:"part"});a.appendChild(s)}if(n){const s=i("line",{x1:0,y1:27,x2:15,y2:27,class:"part"});a.appendChild(s)}if(c){const s=i("line",{x1:30,y1:0,x2:15,y2:27,class:"part"});a.appendChild(s)}if(r){const s=i("line",{x1:15,y1:27,x2:30,y2:54,class:"part"});a.appendChild(s)}if(p){const s=i("line",{x1:15,y1:27,x2:0,y2:54,class:"part"});a.appendChild(s)}if(d){const s=i("line",{x1:0,y1:0,x2:15,y2:27,class:"part"});a.appendChild(s)}return a}function $(e,l){const t=i("g"),n=i("text",{"dominant-baseline":"central"}),c=document.createTextNode(e);n.appendChild(c),l&&n.setAttribute("class","reserved");const r=[[15,24]];return n.setAttribute("transform",r.map(([p,d])=>`translate(${p}, ${d})`).join(" ")),t.appendChild(n),t}function w(e,[l,t]){let n=" ",c=" ",r=" ",p=" ",d=" ",a=" ",s=" ",f=" ";return t>0&&(c=e[t-1][l]||" "),l<e[t].length-1&&(r=e[t][l+1]||" "),t<e.length-1&&(p=e[t+1][l]||" "),l>0&&(n=e[t][l-1]||" "),t>0&&l<e[t-1].length-1&&(d=e[t-1][l+1]||" "),t+1<e.length&&l<e[t+1].length&&(a=e[t+1][l+1]||" "),t<e.length-1&&l>0&&(s=e[t+1][l-1]||" "),t>0&&l>0&&(f=e[t-1][l-1]||" "),[c,r,p,n,d,a,s,f]}function G([,e,,l,t,n,c,r]){const p=i("g");if(e=="_"){const d=i("line",{x1:"18",y1:"51",x2:"30",y2:"51",class:"part"});p.appendChild(d)}if(l=="_"){const d=i("line",{x1:"0",y1:"51",x2:"12",y2:"51",class:"part"});p.appendChild(d)}if(t=="_"){const d=i("line",{x1:"12",y1:"-3",x2:"30",y2:"-3",class:"part"});p.appendChild(d)}if(r=="_"){const d=i("line",{x1:"0",y1:"-3",x2:"18",y2:"-3",class:"part"});p.appendChild(d)}return p.appendChild(o([!(t=="/"&&r=="\\"),["-"].includes(e),!(c=="/"&&n=="\\"),["-"].includes(l),t=="/",n=="\\",c=="/",r=="\\"])),p}function L([e,,l,,,,,]){return o([["|"].includes(e),!0,["|"].includes(l),!0,!1,!1,!1,!1])}function v(){const e=i("g"),l=i("line",{x1:"9",y1:"27",x2:"24",y2:"27",class:"part"});return e.appendChild(l),e}function b(e){const l=L(e);return l.setAttribute("transform","translate(0 24)"),l}function k([e,,l]){const t=i("g");{const n=i("line",{x1:"15",y1:"0",x2:"15",y2:"60",class:"part",style:"stroke-dasharray: 15; stroke-dashoffset: 0;"});t.appendChild(n)}if(e=="+"){const n=i("line",{x1:"15",y1:"-24",x2:"15",y2:"-15",class:"part"});t.appendChild(n)}if(l=="+"){const n=i("line",{x1:"15",y1:"60",x2:"15",y2:"78",class:"part"});t.appendChild(n)}return t}function _(){const e=i("g"),l=i("line",{x1:"0",y1:"21",x2:"30",y2:"21",class:"part"});e.appendChild(l);const t=i("line",{x1:"0",y1:"30",x2:"30",y2:"30",class:"part"});return e.appendChild(t),e}function E([e,l,t,n,c,r,p,d]){const a=i("g"),s=i("circle",{cx:"0",cy:"0",r:"21",stroke:"none",transform:"translate(15, 27)"});return a.appendChild(s),a.appendChild(o([["+","|"].includes(e),["+","-"].includes(l),["+","|"].includes(t),["+","-"].includes(n),["/"].includes(c),["\\"].includes(r),["/"].includes(p),["\\"].includes(d)])),a}function j([e,l,t,n,c,r,p,d]){const a=i("g"),s=i("circle",{cx:"0",cy:"0",r:"18","stroke-width":"6",fill:"none",stroke:"black",transform:"translate(15, 27)"});a.appendChild(s);const f=o([["+","|"].includes(e),["+","-"].includes(l),["+","|"].includes(t),["+","-"].includes(n),["/"].includes(c),["\\"].includes(r),["/"].includes(p),["\\"].includes(d)]);a.appendChild(f);const g=i("circle",{cx:"0",cy:"0",r:"15",fill:"white",opacity:"100%",transform:"translate(15, 27)"});return a.appendChild(g),a}function z(e){const[l,t,n,c]=e,r=i("g");if(r.appendChild(o([["|"].includes(l),!1,["|"].includes(n),!1,!0,!1,!0,!1])),t=="\\"){const p=o([!1,!1,!1,!1,!1,!1,!0,!1]);p.setAttribute("transform","translate(30 -54)"),p.setAttribute("clip-path","polygon(-3 0, 0 0, 0 54, -3 54)"),r.appendChild(p)}if(c=="\\"){const p=o([!1,!1,!1,!1,!0,!1,!1,!1]);p.setAttribute("transform","translate(-30 54)"),p.setAttribute("clip-path","polygon(15 -6, 33 -6, 33 6, 15 6)"),r.appendChild(p)}if(t=="_"){const p=b(e);r.appendChild(p)}return r}function m(e){const[l,t,n,c]=e,r=i("g");if(r.appendChild(o([["|"].includes(l),!1,["|"].includes(n),!1,!1,!0,!1,!0])),c=="/"){const p=o([!1,!1,!1,!1,!1,!0,!1,!1]);p.setAttribute("transform","translate(-30 -54)"),p.setAttribute("clip-path","polygon(15 0, 30 0, 30 54, 15 54)"),r.appendChild(p)}if(t=="/"){const p=o([!1,!1,!1,!1,!1,!1,!1,!0]);p.setAttribute("transform","translate(30 54)"),p.setAttribute("clip-path","polygon(-3 0, 0 0, 0 6, -3 6)"),r.appendChild(p)}if(c=="_"){const p=b(e);r.appendChild(p)}return r}function N([e,l,t,n,c,r,p,d]){const a=i("g"),s=i("polygon"),f=[[0,0],[42,0],[42,42],[0,42]];return s.setAttribute("points",f.map(([g,x])=>`${g},${x}`).join(" ")),s.setAttribute("transform","translate(-6, 6)"),a.appendChild(s),a.appendChild(o([["+","|"].includes(e),["+","-"].includes(l),["+","|"].includes(t),["+","-"].includes(n),["/"].includes(c),["\\"].includes(r),["/"].includes(p),["\\"].includes(d)])),a}function O([e,l,t,n,c,r,p,d]){const a=i("g"),s=["*","#","-","+","~",">",".","'","`"].includes(l),f=["*","#","-","+","~","<",".","'","`"].includes(n),g=["*","#","|","+",".","`","^"].includes(e),x=["*","#","|","+","'","`","v"].includes(t),h=["/","*","#"].includes(c),C=["\\","*","#"].includes(r),A=["\\","*","#"].includes(d),y=["/","*","#"].includes(p);if(a.appendChild(o([g,s,x,f,h,C,y,A])),(f||s)&&(x||g)){const u=i("polygon",{points:"0,0 6,0 6,6 0,6",transform:"translate(-3 -3) translate(15 27)"});a.appendChild(u)}if(h||A){const u=o([!1,!1,!1,!1,!1,A,h,!1]);u.setAttribute("clip-path","polygon(0 -3, 30 -3, 30 0, 0 0)"),a.appendChild(u)}if(C||y){const u=o([!1,!1,!1,!1,y,!1,!1,C]);u.setAttribute("clip-path","polygon(0 27, 15 27, 15 30, 0 30)"),a.appendChild(u)}if(y||A){const u=o([!1,!1,!1,!1,y&&C,A&&h,!1,!1]);u.setAttribute("clip-path","polygon(-3 0, 0 0, 0 54, -3 54)"),a.appendChild(u)}if(C||h){const u=o([!1,!1,!1,!1,!1,!1,h&&A,C&&y]);u.setAttribute("clip-path","polygon(15 0, 30 0, 30 54, 15 54)"),a.appendChild(u)}if(s||f){const u=o([!1,!1,!1,!1,s||y,A,h,f||C]);u.setAttribute("clip-path","polygon(-3 24, 30 24, 30 30, -3 30)"),a.appendChild(u)}return a}function T([e,l,t,n,c,r,p,d]){const a=i("g");if((l=="-"||l=="+")&&(t=="|"||t=="'"||t=="`"||t=="+")){const s=i("path",{d:`
        M 30 24
        A 18 18, 0, 0, 0, 12 42
        L 12 54
        L 18 54
        L 18 42
        A 12 12, 0, 0, 1, 30 30
        Z`});a.appendChild(s)}if((n=="-"||n=="+")&&(t=="|"||t=="'"||t=="`"||t=="+")){const s=i("path",{d:`
        M 0 24
        A 18 18, 0, 0, 1, 18 42
        L 18 54
        L 12 54
        L 12 42
        A 12 12, 0, 0, 0, 0 30        
        Z`});a.appendChild(s)}if((l=="-"||l=="+")&&(e=="|"||e=="."||e=="+")){const s=i("path",{d:`
        M 30 30
        A 18 18, 0, 0, 1, 12 12
        L 12 0
        L 18 0
        L 18 12
        A 12 12, 0, 0, 0, 30 24
        Z`});a.appendChild(s)}if((n=="-"||n=="+")&&(e=="|"||e=="."||e=="+")){const s=i("path",{d:`
        M 0 30
        A 18 18, 0, 0, 0, 18 12
        L 18 0
        L 12 0
        L 12 12
        A 12 12, 0, 0, 1, 0 24
        Z`});a.appendChild(s)}if(l=="-"&&c=="/"){const s=i("path",{d:`
        M 30 30
        A 12 12, 0, 0, 1, 18 18
        L 18 15
        L 24 15
        L 24 18
        A 6 6, 0, 0, 0, 30 24
        Z`});a.appendChild(s);const f=o([!1,!1,!1,!1,!0,!1,!1,!1]);f.setAttribute("clip-path","polygon(15px -10px, 30px -10px, 30px 30px, 2px 15px)"),a.appendChild(f)}if(l=="-"&&d=="\\"){const s=i("path",{d:`
        M -3 0
        A 60 60, 0, 0, 0, 30 30
        L 30 24
        A 60 60, 0, 0, 1, 0 -6
        Z`});a.appendChild(s)}if(n=="-"&&c=="/"){const s=i("path",{d:`
        M 0 30
        A 60 60, 0, 0, 0, 33 0
        L 30 -6
        A 60 60, 0, 0, 1, 0 24
        Z`});a.appendChild(s)}if(n=="-"&&d=="\\"){const s=i("path",{d:`
        M 0 30
        A 12 12, 0, 0, 0, 12 18
        L 12 15
        L 6 15
        L 6 18
        A 6 6, 0, 0, 1, 0 24
        Z`});a.appendChild(s);const f=o([!1,!1,!1,!1,!1,!1,!1,!0]);f.setAttribute("clip-path","polygon(-3 -3, 12 -3, 12 18, -3 18)"),a.appendChild(f)}if(t=="|"&&c=="/"){const s=i("path",{d:`
        M 12 54
        A 120 120, 0, 0, 1, 30 -6
        L 37 -6
        A 120 120, 0, 0, 0, 18 54
        Z`});a.appendChild(s)}if(e=="|"&&r=="\\"){const s=i("path",{d:`
        M 30 60
        A 120 120, 0, 0, 1, 12 0
        L 18 0
        A 120 120, 0, 0, 0, 37 60
        Z`});a.appendChild(s)}if(e=="|"&&p=="/"){const s=i("path",{d:`
        M 0 60
        A 120 120, 0, 0, 0, 18 0
        L 12 0
        A 120 120, 0, 0, 1, -7 60
        Z`});a.appendChild(s)}if(t=="|"&&d=="\\"){const s=i("path",{d:`
        M 12 54
        A 120 120, 0, 0, 0, -7 -6
        L 0 -6
        A 120 120, 0, 0, 1, 18 54
        Z`});a.appendChild(s)}if(l=="-"&&p=="/"){const s=i("path",{d:`
        M 0 48
        A 42 42, 0, 0, 1, 30 24
        L 30 30
        A 42 42, 0, 0, 0, 6 48
        Z`});a.appendChild(s);const f=o([!1,!1,!1,!1,!1,!1,!0,!1]);f.setAttribute("clip-path","polygon(-3 15, 12 15, 12 30, -3 30)"),a.appendChild(f)}if(n=="-"&&r=="\\"){const s=i("path",{d:`
        M 0 24
        A 42 42, 0, 0, 1, 30 48
        L 24 48
        A 42 42, 0, 0, 0, 0 30
        Z`});a.appendChild(s);const f=o([!1,!1,!1,!1,!1,!0,!1,!1]);f.setAttribute("clip-path","polygon(-3 15, 12 15, 21 30, -3 30)"),a.appendChild(f)}if(n=="-"&&p=="/"){const s=i("path",{d:`
        M 0 24
        A 12 12, 0, 0, 1, 12 39
        L 6 39
        A 6 6, 0, 0, 0, 0 30
        Z`});a.appendChild(s);const f=o([!1,!1,!1,!1,!1,!1,!0,!1]);f.setAttribute("clip-path","polygon(-3 6, 12 6, 12 30, -3 30)"),a.appendChild(f)}if(l=="-"&&r=="\\"){const s=i("path",{d:`
        M 30 24
        A 12 12, 0, 0, 0, 18 39
        L 24 39
        A 6 6, 0, 0, 1, 30 30 
        Z`});a.appendChild(s);const f=o([!1,!1,!1,!1,!1,!0,!1,!1]);f.setAttribute("clip-path","polygon(3 6, 18 6, 18 30, 3 30)"),a.appendChild(f)}if(p=="/"&&r=="\\"){const s=i("path",{d:`
        M 3 42
        A 15 15, 0, 0, 1, 27 42
        L 25 51
        A 9 9, 0, 0, 0, 5 51
        Z`});a.appendChild(s);const f=o([!1,!1,!1,!1,!1,!0,!0,!1]);f.setAttribute("clip-path","polygon(-3 15, 33 15, 33 30, -3 30)"),a.appendChild(f)}if(d=="\\"&&c=="/"){const s=i("path",{d:`
        M 3 12
        A 15 15, 0, 0, 0, 27 12
        L 22 9
        A 9 9, 0, 0, 1, 8 9
        Z`});a.appendChild(s);const f=o([!1,!1,!1,!1,!0,!1,!1,!0]);f.setAttribute("clip-path","polygon(-3 -3, 33 -3, 33 12, -3 12)"),a.appendChild(f)}if(c=="/"&&r=="\\"){const s=i("path",{d:`
        M 22 9
        A 30 30, 0, 0, 0, 22 45
        L 28 45
        A 30 30, 0, 0, 1, 28 9
        Z`});a.appendChild(s);const f=o([!1,!1,!1,!1,!0,!0,!1,!1]);f.setAttribute("clip-path","polygon(6 -3, 33 -3, 33 57, 6 57)"),a.appendChild(f)}if(d=="\\"&&p=="/"){const s=i("path",{d:`
        M 8 9
        A 30 30, 0, 0, 1, 8 45
        L 2 45
        A 30 30, 0, 0, 0, 2 9
        Z`});a.appendChild(s);const f=o([!1,!1,!1,!1,!1,!1,!0,!0]);f.setAttribute("clip-path","polygon(-3 -3, 9 -3, 9 57, -3 57)"),a.appendChild(f)}return a}function q([,e]){const l=i("g"),t=i("polygon",{points:"0,0 42,18 0,36"});let n=0;return(e=="*"||e=="o"||e=="#")&&(n-=18),t.setAttribute("transform",`translate(${n} 9)`),l.appendChild(t),l}function B([,,,e]){const l=i("g"),t=i("polygon",{points:"0,0 42,18 0,36"});let n=30;return(e=="*"||e=="o"||e=="#")&&(n+=18),t.setAttribute("transform",`translate(${n} 9) translate(0 36) rotate(180)`),l.appendChild(t),l}function D([e,,l,,t,,,n]){const c=i("g"),r=i("polygon",{points:"0,0 42,18 0,36"});let p=36;return l==" "?p=12:l=="_"?p+=18:(l=="*"||l=="o"||l=="#")&&(p-=18),t=="/"?r.setAttribute("transform",`translate(-36 33) rotate(${90+22.5}, 42, 18)`):n=="\\"?r.setAttribute("transform",`translate(-18 33) rotate(${90-22.5}, 42, 18)`):r.setAttribute("transform",`translate(33 ${p}) rotate(90)`),c.appendChild(r),c.appendChild(o([["|","+"].includes(e),!1,["|","+"].includes(e),!1,["/"].includes(t),!1,!1,["\\"].includes(n)])),c}function S([e,,l,,,t,n]){const c=i("g"),r=i("polygon",{points:"0,0 42,18 0,36"});let p=42;return e=="-"&&(p-=15),n=="/"?r.setAttribute("transform",`translate(-18 -15) rotate(${-45-22.5}, 42, 18)`):t=="\\"?r.setAttribute("transform",`translate(-36 -15) rotate(${-90-22.5}, 42, 18)`):r.setAttribute("transform",`translate(-3 ${p}) rotate(-90)`),c.appendChild(r),c.appendChild(o([!1,!1,["+","|"].includes(l),!1,!1,["\\"].includes(t),["/"].includes(n),!1])),c}function Q(){let e={"|":G,"-":L,"~":v,_:b,":":k,"=":_,"*":E,o:j,"/":z,"\\":m,"#":N,"+":O,".":T,">":q,"<":B,v:D,"^":S};return Object.entries({"┌":"+","┐":"+","└":"+","┘":"+","─":"-","►":">","'":".","`":".",V:"v"}).forEach(([t,n])=>{e[t]=c=>e[n](c)}),e}const Z=Q();function V(e){const l=i("g");for(let t=0;t<e.length;t++)for(let n=0;n<e[t].length;n++){const c=e[t][n];if(c==" "||c=='"')continue;const r=i("g");let p=!1;for(let s=0;s<n;s++)e[t][s]=='"'&&(p=!p);const d=w(e,[n,t]);if(c.match(/[A-Za-z0-9]/)){const[,s,,f]=d;p=p||!!f.match(/[A-Za-uw-z0-9]/)||!!s.match(/[A-Za-uw-z0-9]/)}const a=!!Z[c]&&!p;a&&r.appendChild(Z[c](d)),r.appendChild($(c,a)),r.setAttribute("transform",`translate(${n*30} ${t*54})`),l.appendChild(r)}return l}function W(e,l,t){const n=e.split(`
`).map(a=>a.trimEnd().split(""));n.splice(-1);let c=0;const r=n.length;for(let a=0;a<n.length;a++)for(let s=0;s<n[a].length;s++)n[a].length>c&&(c=n[s].length);const p=0;let d=i("svg",{width:c*30*l,height:r*54*l,debug:t,viewBox:`${-p} ${-p} ${c*30+2*p} ${r*54+2*p}`,class:"debug typograms"});return d.appendChild(V(n)),t&&d.appendChild(M(c,r)),d}document.addEventListener("DOMContentLoaded",function(){for(const e of document.querySelectorAll("pre[data-typogram]")){if(e.hasAttribute("disabled"))continue;const l=e.textContent,t=Number(e.getAttribute("zoom")||.3),n=e.hasAttribute("grid");if(l){const c=W(l,t,n);e==null||e.replaceWith(c)}}})});
//# sourceMappingURL=typograms-ts.umd.cjs.map
