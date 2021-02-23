import{d as e,aO as t,u as a,a as n,r as s,o,f as r,g as l,t as c,br as i,h as u,d1 as p,de as d,a3 as f,a4 as h,ab as m,j as v,bN as C,cx as x,bO as g,bp as b,b2 as _,cp as y,df as k,bD as w,D as $,aJ as S,c as E,bv as I,a$ as A,w as j,v as D,F as N,aP as R,s as O,b1 as T,bI as M,a_ as U}from"./index.8a947221.js";/* empty css              */import{I as F}from"./index.2c4e33f6.js";import{C as K}from"./clickOutside.1357c514.js";import{b as L,u as P,d as W}from"./useHeaderSetting.7df844bc.js";import{u as z}from"./useScrollTo.a0f2ab62.js";import{S as H}from"./SearchOutlined.b19280fd.js";import"./vendor.3b1829c7.js";import"./EyeOutlined.3f7d1401.js";import"./domUtils.e0b91801.js";var B=e({name:"AppSearchFooter",components:{Icon:t},setup(){const{prefixCls:e}=a("app-search-footer"),{t:t}=n();return{prefixCls:e,t:t}}});const J=i("data-v-5f9e3562")(((e,t,a,n,i,u)=>{const p=s("Icon");return o(),r("div",{class:`${e.prefixCls}`},[l("span",{class:`${e.prefixCls}__item`},[l(p,{icon:"ant-design:enter-outlined"})],2),l("span",null,c(e.t("component.app.toSearch")),1),l("span",{class:`${e.prefixCls}__item`},[l(p,{icon:"bi:arrow-up"})],2),l("span",{class:`${e.prefixCls}__item`},[l(p,{icon:"bi:arrow-down"})],2),l("span",null,c(e.t("component.app.toNavigate")),1),l("span",{class:`${e.prefixCls}__item`},[l(p,{icon:"mdi:keyboard-esc"})],2),l("span",null,c(e.t("common.closeText")),1)],2)}));B.render=J,B.__scopeId="data-v-5f9e3562";const q=["keydown"],G={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Q={esc:"Escape",tab:"Tab",enter:"Enter",space:" ",up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete"]},V={ctrl:e=>e.ctrlKey,shift:e=>e.shiftKey,alt:e=>e.altKey,meta:e=>e.metaKey};function X(e,t){if(!e.key)return!1;if(x(t))return e.keyCode===t;const a=t.split(".");let n=0;for(const s of a){const t=V[s],a=Q[s],o=G[s];(t&&t(e)||(a&&g(a)?a.includes(e.key):a===e.key)||(o&&g(o)?o.includes(e.keyCode):o===e.keyCode)||e.key.toUpperCase()===s.toUpperCase())&&n++}return n===a.length}function Y(e,t=d,a={}){const{events:n=q,target:s}=a;let o;function r(a){if(function(e){return m(e)?e:C(e)||x(e)?t=>X(t,e):g(e)?t=>e.some((e=>X(t,e))):e?()=>!0:()=>!1}(e)(a))return t(a)}f((()=>{if(o=function(e,t){if(!e)return t;return m(e)?e():v(e)}(s,window),o)for(const e of n)o.addEventListener(e,r)})),h((()=>{if(o)for(const e of n)o.removeEventListener(e,r)}))}var Z,ee;function te(e,t,a){const s=u([]),o=u(""),r=u(-1);let l=[];const{t:c}=n(),i=S(),[p]=b((function(e){null==e||e.stopPropagation();const t=e.target.value;if(o.value=t.trim(),!t)return void(s.value=[]);const a=function(e){const t=["",...[...e].map((e=>{return["$","(",")","*","+",".","[","]","?","\\","^","{","}","|"].includes(t=e)?`\\${t}`:t;var t})),""].join(".*");return new RegExp(t)}(v(o)),n=w(l,(e=>a.test(e.name)));s.value=d(n,a),r.value=0}),200);function d(e,t,a){const n=[];return e.forEach((e=>{const{name:s,path:o,icon:r,children:l}=e;t.test(s)&&!(null==l?void 0:l.length)&&n.push({name:(null==a?void 0:a.name)?`${a.name} > ${s}`:s,path:o,icon:r}),Array.isArray(l)&&l.length&&n.push(...d(l,t,e))})),n}function f(){const a=v(e);if(!a||!Array.isArray(a)||0===a.length||!v(t))return;const n=a[v(r)];if(!n)return;const s=v(t);if(!s)return;const o=n.offsetTop+n.offsetHeight,l=s.offsetHeight,{start:c}=z({el:s,duration:100,to:o-l});c()}async function h(){if(!s.value.length)return;const e=v(s),t=v(r);if(0===e.length||t<0)return;const a=e[t];m(),await $(),i(a.path)}function m(){s.value=[],a("close")}return _((async()=>{const e=await L();l=y(e),k(l,(e=>{e.name=c(e.name)}))})),Y(["enter","up","down","esc"],(e=>{switch(e.keyCode){case 38:s.value.length&&(r.value--,r.value<0&&(r.value=s.value.length-1),f());break;case 40:s.value.length&&(r.value++,r.value>s.value.length-1&&(r.value=0),f());break;case 13:h();break;case 27:m()}})),{handleSearch:p,searchResult:s,keyword:o,activeIndex:r,handleMouseenter:function(e){const t=e.target.dataset.index;r.value=Number(t)},handleEnter:h}}(ee=Z||(Z={}))[ee.UP=38]="UP",ee[ee.DOWN=40]="DOWN",ee[ee.ENTER=13]="ENTER",ee[ee.ESC=27]="ESC";var ae=e({name:"AppSearchModal",components:{Icon:t,SearchOutlined:H,AppSearchFooter:B,[F.name]:F},directives:{clickOutside:K},props:{visible:Boolean},emits:["close"],setup(e,{emit:t}){const s=u(null),{prefixCls:o}=a("app-search-modal"),{t:r}=n(),[l,c]=function(){const e=u([]);return p((()=>{e.value=[]})),[e,t=>a=>{e.value[t]=a}]}(),{getIsMobile:i}=P(),{handleSearch:d,searchResult:f,keyword:h,activeIndex:m,handleEnter:C,handleMouseenter:x}=te(l,s,t),g=E((()=>!h||0===v(f).length)),b=E((()=>[o,{[`${o}--mobile`]:v(i)}]));return{t:r,prefixCls:o,getClass:b,handleSearch:d,searchResult:f,activeIndex:m,getIsNotData:g,handleEnter:C,setRefs:c,scrollWrap:s,handleMouseenter:x,handleClose:function(){f.value=[],t("close")}}}});const ne=i("data-v-19f6df22"),se=ne(((e,t,a,n,i,u)=>{const p=s("SearchOutlined"),d=s("a-input"),f=s("Icon"),h=s("AppSearchFooter"),m=I("click-outside");return o(),r(M,{to:"body"},[l(T,{name:"zoom-fade",mode:"out-in"},{default:ne((()=>[e.visible?(o(),r("div",{key:0,class:e.getClass,onClick:t[4]||(t[4]=A((()=>{}),["stop"]))},[j(l("div",{class:`${e.prefixCls}-content`},[l("div",{class:`${e.prefixCls}-input__wrapper`},[l(d,{class:`${e.prefixCls}-input`,placeholder:e.t("common.searchText"),"allow-clear":"",onChange:e.handleSearch},{prefix:ne((()=>[l(p)])),_:1},8,["class","placeholder","onChange"]),l("span",{class:`${e.prefixCls}-cancel`,onClick:t[1]||(t[1]=(...t)=>e.handleClose&&e.handleClose(...t))},c(e.t("common.cancelText")),3)],2),j(l("div",{class:`${e.prefixCls}-not-data`},c(e.t("component.app.searchNotData")),3),[[D,e.getIsNotData]]),j(l("ul",{class:`${e.prefixCls}-list`,ref:"scrollWrap"},[(o(!0),r(N,null,R(e.searchResult,((a,n)=>(o(),r("li",{ref:e.setRefs(n),key:a.path,"data-index":n,onMouseenter:t[2]||(t[2]=(...t)=>e.handleMouseenter&&e.handleMouseenter(...t)),onClick:t[3]||(t[3]=(...t)=>e.handleEnter&&e.handleEnter(...t)),class:[`${e.prefixCls}-list__item`,{[`${e.prefixCls}-list__item--active`]:e.activeIndex===n}]},[l("div",{class:`${e.prefixCls}-list__item-icon`},[l(f,{icon:a.icon||"mdi:form-select",size:20},null,8,["icon"])],2),l("div",{class:`${e.prefixCls}-list__item-text`},c(a.name),3),l("div",{class:`${e.prefixCls}-list__item-enter`},[l(f,{icon:"ant-design:enter-outlined",size:20})],2)],42,["data-index"])))),128))],2),[[D,!e.getIsNotData]]),l(h)],2),[[m,e.handleClose]])],2)):O("",!0)])),_:1})])}));ae.render=se,ae.__scopeId="data-v-19f6df22";var oe=e({name:"AppSearch",components:{AppSearchModal:ae,Tooltip:U},setup(){const e=u(!1),{prefixCls:t}=a("app-search"),{getShowSearch:s}=W(),{t:o}=n();function r(){e.value=!0}function c(){e.value=!1}return()=>s.value?l("div",{class:t,onClick:r},[l(U,null,{title:()=>o("common.searchText"),default:()=>l(H,null,null)}),l(ae,{onClose:c,visible:v(e)},null)]):null}});oe.__scopeId="data-v-6cfe5d58";export default oe;
