var e=Object.assign;import{ac as t,d as n,h as s,c as l,a3 as o,D as i,bQ as c,j as a,g as r,F as u,L as d,aO as m,dm as p,dn as f,ak as h}from"./index.8a947221.js";import{M as y}from"./index.d94421bb.js";/* empty css              */import{D as b}from"./index.6704907b.js";const v={width:t.number.def(156),customEvent:{type:Object,default:null},styles:t.style,showIcon:t.bool.def(!0),axis:{type:Object,default:()=>({x:0,y:0})},items:{type:Array,default:()=>[]}};function x(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!d(e)}const j=e=>{const{item:t}=e;return r("span",{style:"display: inline-block; width: 100%;",onClick:e.handler.bind(null,t)},[e.showIcon&&t.icon&&r(m,{class:"mr-2",icon:t.icon},null),r("span",null,[t.label])])};var w=n({name:"ContextMenu",props:v,setup(t){const n=s(null),d=s(!1),m=l((()=>{const{axis:n,items:s,styles:l,width:o}=t,{x:i,y:c}=n||{x:0,y:0},a=40*(s||[]).length,r=o,u=document.body,d=u.clientWidth<i+r?i-r:i,m=u.clientHeight<c+a?c-a:c;return e(e({},l),{width:`${o}px`,left:`${d+1}px`,top:`${m+1}px`})}));function p(e,t){const{handler:n,disabled:s}=e;s||(d.value=!1,null==t||t.stopPropagation(),null==t||t.preventDefault(),null==n||n())}function f(e){return e.map((e=>{const{disabled:n,label:s,children:l,divider:o=!1}=e,i=o?r(b,{key:`d-${s}`},null):null;if(!l||0===l.length){let l;return r(u,null,[r(y.Item,{disabled:n,class:"context-menu__item",key:s},x(l=r(j,{showIcon:t.showIcon,item:e,handler:p},null))?l:{default:()=>[l]}),i])}return a(d)?r(y.SubMenu,{key:s,disabled:n,popupClassName:"context-menu__popup"},{title:()=>r(j,{showIcon:t.showIcon,item:e,handler:p},null),default:()=>f(l)}):null}))}return o((()=>{i((()=>d.value=!0))})),c((()=>{const e=a(n);e&&document.body.removeChild(e)})),()=>{let e;const{items:s}=t;return a(d)?r(y,{inlineIndent:12,mode:"vertical",class:"context-menu",ref:n,style:a(m)},x(e=f(s))?e:{default:()=>[e]}):null}}});const L={domList:[],resolve:()=>{}},k=function(e){const{event:t}=e||{};if(t&&(null==t||t.preventDefault()),p)return new Promise((n=>{const s=document.body,l=document.createElement("div"),o={};e.styles&&(o.styles=e.styles),e.items&&(o.items=e.items),e.event&&(o.customEvent=t,o.axis={x:t.clientX,y:t.clientY});const i=r(w,o);f(i,l);const c=function(){L.resolve("")};L.domList.push(l);const a=function(){L.domList.forEach((e=>{try{e&&s.removeChild(e)}catch(t){}})),s.removeEventListener("click",c),s.removeEventListener("scroll",c)};L.resolve=function(...e){a(),n(e[0])},a(),s.appendChild(l),s.addEventListener("click",c),s.addEventListener("scroll",c)}))},E=function(){L&&(L.resolve(""),L.domList=[])};function I(e=!0){return h()&&e&&c((()=>{E()})),[k,E]}export{I as u};
