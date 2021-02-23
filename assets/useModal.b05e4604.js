var e=Object.assign;import{a as l,ac as n,aj as o,j as t,d as a,aK as s,g as r,cB as i,L as c,cC as u,cD as d,aW as f,aX as p,h as g,c as h,aV as m,a3 as b,bQ as v,D as C,r as F,bv as k,o as y,f as H,p as M,w as O,aZ as S,bJ as P,u as w,F as x,s as T,m as j,q as $,t as W,b8 as B,cA as R,ab as E,ak as A,cE as N,bs as _,aP as L,i as V,cF as D,cG as I,l as q,cH as X,aa as z}from"./index.8a947221.js";import{u as Y}from"./useTimeout.4ab89dd3.js";import{u as G}from"./useWindowSizeFn.0acae6c2.js";import{_ as J,a as K}from"./ScrollContainer.7c8aaa6b.js";import{F as Q,a as Z}from"./FullscreenOutlined.88a165f5.js";import{i as U}from"./isEqual.222c6e0f.js";const{t:ee}=l(),le={visible:n.bool,scrollTop:n.bool.def(!0),height:n.number,minHeight:n.number,draggable:n.bool.def(!0),centered:n.bool,cancelText:n.string.def(ee("common.cancelText")),okText:n.string.def(ee("common.okText")),closeFunc:Function},ne=Object.assign({},le,{defaultFullscreen:n.bool,canFullscreen:n.bool.def(!0),wrapperFooterOffset:n.number.def(0),helpMessage:[String,Array],useWrapper:n.bool.def(!0),loading:n.bool,loadingTip:n.string,showCancelBtn:n.bool.def(!0),showOkBtn:n.bool.def(!0),wrapperProps:Object,afterClose:Function,bodyStyle:Object,closable:n.bool.def(!0),closeIcon:Object,confirmLoading:n.bool,destroyOnClose:n.bool,footer:Object,getContainer:Function,mask:n.bool.def(!0),maskClosable:n.bool.def(!0),keyboard:n.bool.def(!0),maskStyle:Object,okType:n.string.def("primary"),okButtonProps:Object,cancelButtonProps:Object,title:n.string,visible:n.bool,width:[String,Number],wrapClassName:n.string,zIndex:n.number});function oe(e){const l=(e,l)=>getComputedStyle(e)[l],n=n=>{if(!n)return;n.setAttribute("data-drag",t(e.draggable));const o=n.querySelector(".ant-modal-header"),a=n.querySelector(".ant-modal");o&&a&&t(e.draggable)&&(o.style.cursor="move",o.onmousedown=e=>{if(!e)return;const n=e.clientX,o=e.clientY,t=document.body.clientWidth,s=document.documentElement.clientHeight,r=a.offsetWidth,i=a.offsetHeight,c=a.offsetLeft,u=t-a.offsetLeft-r,d=a.offsetTop,f=s-a.offsetTop-i,p=l(a,"left"),g=l(a,"top");let h=+p,m=+g;p.includes("%")?(h=+document.body.clientWidth*(+p.replace(/%/g,"")/100),m=+document.body.clientHeight*(+g.replace(/%/g,"")/100)):(h=+p.replace(/px/g,""),m=+g.replace(/px/g,"")),document.onmousemove=function(e){let l=e.clientX-n,t=e.clientY-o;-l>c?l=-c:l>u&&(l=u),-t>d?t=-d:t>f&&(t=f),a.style.cssText+=`;left:${l+h}px;top:${t+m}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})};o((()=>{t(e.visible)&&t(e.draggable)&&Y((()=>{(()=>{const o=document.querySelectorAll(".ant-modal-wrap");for(const a of Array.from(o)){if(!a)continue;const o=l(a,"display"),s=a.getAttribute("data-drag");"none"!==o&&(null===s||t(e.destroyOnClose))&&n(a)}})()}),30)}))}var te=a({name:"Modal",inheritAttrs:!1,props:ne,setup(l,{slots:n}){const{visible:o,draggable:a,destroyOnClose:f}=s(l),p=d();return oe({visible:o,destroyOnClose:f,draggable:a}),()=>{let o;const a=e(e({},t(p)),l);return r(u,a,"function"==typeof(s=o=i(n))||"[object Object]"===Object.prototype.toString.call(s)&&!c(s)?o:{default:()=>[o]});var s}}});const ae=Symbol();function se(){return p(ae)}var re=a({name:"ModalWrapper",components:{ScrollContainer:J},inheritAttrs:!1,props:{loading:n.bool,useWrapper:n.bool.def(!0),modalHeaderHeight:n.number.def(57),modalFooterHeight:n.number.def(74),minHeight:n.number.def(200),height:n.number,footerOffset:n.number.def(0),visible:n.bool,fullScreen:n.bool,loadingTip:n.string},emits:["height-change","ext-height"],setup(e,{emit:l}){const n=g(null),a=g(null),s=g(0),r=g(0);let i=0;G(u.bind(null,!1)),f({redoModalHeight:u},ae);const c=h((()=>({minHeight:`${e.minHeight}px`,height:`${t(s)}px`})));async function u(){if(!e.visible)return;const o=t(n);if(!o)return;const r=o.$el.parentElement;if(r){r.style.padding="0",await C();try{const n=r.parentElement&&r.parentElement.parentElement;if(!n)return;const o=getComputedStyle(n).top,c=Number.parseInt(o);let u=window.innerHeight-2*c+(e.footerOffset||0)-e.modalFooterHeight-e.modalHeaderHeight;c<40&&(u-=26),await C();const d=t(a);if(!d)return;await C(),i=d.scrollHeight,e.fullScreen?s.value=window.innerHeight-e.modalFooterHeight-e.modalHeaderHeight-28:s.value=e.height?e.height:i>u?u:i,l("height-change",t(s))}catch(c){}}}return o((()=>{e.useWrapper&&u()})),m((()=>e.fullScreen),(e=>{u(),e?r.value=s.value:s.value=r.value})),b((()=>{const{modalHeaderHeight:n,modalFooterHeight:o}=e;l("ext-height",n+o)})),v((()=>{})),{wrapperRef:n,spinRef:a,spinStyle:c,scrollTop:async function(){C((()=>{var e;const l=t(n);l&&(null==(e=null==l?void 0:l.scrollTo)||e.call(l,0))}))},setModalHeight:u}}});re.render=function(e,l,n,o,t,a){const s=F("ScrollContainer"),i=k("loading");return y(),H(s,{ref:"wrapperRef"},{default:M((()=>[O(r("div",{ref:"spinRef",style:e.spinStyle,"loading-tip":e.loadingTip},[S(e.$slots,"default")],12,["loading-tip"]),[[i,e.loading]])])),_:3},512)};var ie=a({name:"ModalClose",components:{FullscreenExitOutlined:Q,FullscreenOutlined:Z,CloseOutlined:P},props:{canFullscreen:n.bool.def(!0),fullScreen:n.bool},emits:["cancel","fullscreen"],setup(e,{emit:l}){const{prefixCls:n}=w("basic-modal-close");return{getClass:h((()=>[n,`${n}--custom`,{[`${n}--can-full`]:e.canFullscreen}])),prefixCls:n,handleCancel:function(){l("cancel")},handleFullScreen:function(e){null==e||e.stopPropagation(),null==e||e.preventDefault(),l("fullscreen")}}}});ie.render=function(e,l,n,o,t,a){const s=F("FullscreenExitOutlined"),i=F("FullscreenOutlined"),c=F("CloseOutlined");return y(),H("div",{class:e.getClass},[e.canFullscreen?(y(),H(x,{key:0},[e.fullScreen?(y(),H(s,{key:0,role:"full",onClick:e.handleFullScreen},null,8,["onClick"])):(y(),H(i,{key:1,role:"close",onClick:e.handleFullScreen},null,8,["onClick"]))],64)):T("",!0),r(c,{onClick:e.handleCancel},null,8,["onClick"])],2)};var ce=a({name:"BasicModalFooter",props:ne,emits:["ok","cancel"],setup:(e,{emit:l})=>({handleOk:function(){l("ok")},handleCancel:function(){l("cancel")}})});ce.render=function(e,l,n,o,t,a){const s=F("a-button");return y(),H("div",null,[S(e.$slots,"insertFooter"),e.showCancelBtn?(y(),H(s,j({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:M((()=>[$(W(e.cancelText),1)])),_:1},16,["onClick"])):T("",!0),S(e.$slots,"centerFooter"),e.showOkBtn?(y(),H(s,j({key:1,type:e.okType,onClick:e.handleOk,loading:e.confirmLoading},e.okButtonProps),{default:M((()=>[$(W(e.okText),1)])),_:1},16,["type","onClick","loading"])):T("",!0),S(e.$slots,"appendFooter")])};var ue=a({name:"BasicModalHeader",components:{BasicTitle:K},props:{helpMessage:{type:[String,Array]},title:n.string}});ue.render=function(e,l,n,o,t,a){const s=F("BasicTitle");return y(),H(s,{helpMessage:e.helpMessage},{default:M((()=>[$(W(e.title),1)])),_:1},8,["helpMessage"])};var de=a({name:"BasicModal",components:{Modal:te,ModalWrapper:re,ModalClose:ie,ModalFooter:ce,ModalHeader:ue},inheritAttrs:!1,props:ne,emits:["visible-change","height-change","cancel","ok","register"],setup(l,{emit:n,attrs:a}){const s=g(!1),r=g(null),i=g(null),c=g(0),u={setModalProps:function(e){if(r.value=N(t(r)||{},e),!Reflect.has(e,"visible"))return;s.value=!!e.visible},emitVisible:void 0,redoModalHeight:()=>{C((()=>{t(i)&&t(i).setModalHeight()}))}},d=A();d&&n("register",u,d.uid);const f=h((()=>e(e({},l),t(r)))),{handleFullScreen:p,getWrapClassName:b,fullScreenRef:v}=function(e){const l=g(!1);return{getWrapClassName:h((()=>{const n=t(e.wrapClassName)||"";return t(l)?`fullscreen-modal ${n} `:t(n)})),handleFullScreen:function(e){e&&e.stopPropagation(),l.value=!t(l)},fullScreenRef:l}}({modalWrapperRef:i,extHeightRef:c,wrapClassName:B(f.value,"wrapClassName")}),F=h((()=>{const l=e(e({},t(f)),{visible:t(s),title:void 0});return e(e({},l),{wrapClassName:t(b)})})),k=h((()=>e(e({},a),t(F))));return o((()=>{s.value=!!l.visible,v.value=!!l.defaultFullscreen})),m((()=>t(s)),(e=>{var o;n("visible-change",e),d&&(null==(o=u.emitVisible)||o.call(u,e,d.uid)),C((()=>{l.scrollTop&&e&&t(i)&&t(i).scrollTop()}))}),{immediate:!1}),{handleCancel:async function(e){if(null==e||e.stopPropagation(),l.closeFunc&&E(l.closeFunc)){const e=await l.closeFunc();s.value=!e}else s.value=!1,n("cancel")},getBindValue:k,getProps:F,handleFullScreen:p,fullScreenRef:v,getMergeProps:f,handleOk:function(){n("ok")},visibleRef:s,omit:R,modalWrapperRef:i,handleExtHeight:function(e){c.value=e},handleHeightChange:function(e){n("height-change",e)},handleTitleDbClick:function(e){l.canFullscreen&&(e.stopPropagation(),p(e))}}}});de.render=function(e,l,n,o,t,a){const s=F("ModalClose"),i=F("ModalHeader"),c=F("ModalFooter"),u=F("ModalWrapper"),d=F("Modal");return y(),H(d,j({onCancel:e.handleCancel},e.getBindValue),_({default:M((()=>[r(u,j({useWrapper:e.getProps.useWrapper,footerOffset:e.wrapperFooterOffset,fullScreen:e.fullScreenRef,ref:"modalWrapperRef",loading:e.getProps.loading,minHeight:e.getProps.minHeight,height:e.getProps.height,visible:e.visibleRef,modalFooterHeight:void 0===e.footer||e.footer?void 0:0},e.omit(e.getProps.wrapperProps,"visible","height"),{onExtHeight:e.handleExtHeight,onHeightChange:e.handleHeightChange}),{default:M((()=>[S(e.$slots,"default")])),_:3},16,["useWrapper","footerOffset","fullScreen","loading","minHeight","height","visible","modalFooterHeight","onExtHeight","onHeightChange"])])),_:2},[e.$slots.closeIcon?void 0:{name:"closeIcon",fn:M((()=>[r(s,{canFullscreen:e.getProps.canFullscreen,fullScreen:e.fullScreenRef,onCancel:e.handleCancel,onFullscreen:e.handleFullScreen},null,8,["canFullscreen","fullScreen","onCancel","onFullscreen"])]))},e.$slots.title?void 0:{name:"title",fn:M((()=>[r(i,{helpMessage:e.getProps.helpMessage,title:e.getMergeProps.title,onDblclick:e.handleTitleDbClick},null,8,["helpMessage","title","onDblclick"])]))},e.$slots.footer?void 0:{name:"footer",fn:M((()=>[r(c,j(e.getProps,{onOk:e.handleOk,onCancel:e.handleCancel}),_({_:2},[L(Object.keys(e.$slots),(l=>({name:l,fn:M((n=>[S(e.$slots,l,n)]))})))]),1040,["onOk","onCancel"])]))},L(Object.keys(e.omit(e.$slots,"default")),(l=>({name:l,fn:M((n=>[S(e.$slots,l,n)]))})))]),1040,["onCancel"])};const fe=V({}),pe=V({});function ge(){D();const e=g(null),l=g(!1),n=g("");const o=()=>{const l=t(e);return l||X("useModal instance is undefined!"),l};return[function(o,a){n.value=a,v((()=>{e.value=null,l.value=!1,fe[t(n)]=null})),t(l)&&I()&&o===t(e)||(e.value=o,o.emitVisible=(e,l)=>{pe[l]=e})},{setModalProps:e=>{var l;null==(l=o())||l.setModalProps(e)},getVisible:h((()=>pe[~~t(n)])),redoModalHeight:()=>{var e,l;null==(l=null==(e=o())?void 0:e.redoModalHeight)||l.call(e)},openModal:(e=!0,l,a=!0)=>{var s;if(null==(s=o())||s.setModalProps({visible:e}),!l)return;if(a)return fe[t(n)]=null,void(fe[t(n)]=l);U(q(fe[t(n)]),l)||(fe[t(n)]=l)}}]}const he=e=>{const l=g(null),n=A(),a=g(""),s=()=>{const e=t(l);return e||X("useModalInner instance is undefined!"),e};return o((()=>{const l=fe[t(a)];l&&e&&E(e)&&C((()=>{e(l)}))})),[(e,o)=>{z((()=>{l.value=null})),a.value=o,l.value=e,null==n||n.emit("register",e,o)},{changeLoading:(e=!0)=>{var l;null==(l=s())||l.setModalProps({loading:e})},getVisible:h((()=>pe[~~t(a)])),changeOkLoading:(e=!0)=>{var l;null==(l=s())||l.setModalProps({confirmLoading:e})},closeModal:()=>{var e;null==(e=s())||e.setModalProps({visible:!1})},setModalProps:e=>{var l;null==(l=s())||l.setModalProps(e)}}]};export{de as _,se as a,he as b,ge as u};
