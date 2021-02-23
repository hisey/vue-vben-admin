import{P as t,bG as e,g as n,K as r,L as i,d as a,x as o,i as s,aj as c,N as l,X as f,bU as u,H as p,S as d,bV as b,bW as h,ah as v,Y as y,z as g,T as m,E as O,bX as P,M as x,bJ as j}from"./index.8a947221.js";import{U as T}from"./UpOutlined.66b37b38.js";import{L as w}from"./LeftOutlined.081aa009.js";import{D as B}from"./DownOutlined.e3879b2b.js";import{R as C}from"./RightOutlined.d3306906.js";import{P as S}from"./PlusOutlined.fcbfe0fd.js";var k=37,R=38,$=39,K=40,E={width:0,height:0,overflow:"hidden",position:"absolute"},A={name:"Sentinel",props:{setRef:t.func,prevElement:t.any,nextElement:t.any},methods:{onKeyDown:function(t){var n=t.target,r=t.which,i=t.shiftKey,a=this.$props,o=a.nextElement,s=a.prevElement;r===e.TAB&&document.activeElement===n&&(!i&&o&&o.focus(),i&&s&&s.focus())}},render:function(){var t=this.$props.setRef;return n("div",{tabindex:0,ref:t,style:E,onKeydown:this.onKeyDown,role:"presentation"},[r(this)])}};function N(t,e){for(var n=function(t){var e=[];return t.forEach((function(t){i(t)&&e.push(t)})),e}(t),r=0;r<n.length;r++)if(n[r].key===e)return r;return-1}function W(t,e){t.transform=e,t.webkitTransform=e,t.mozTransform=e}function D(t){return("transform"in t||"webkitTransform"in t||"MozTransform"in t)&&window.atob}function _(t){return"left"===t||"right"===t}function I(t,e){var n,r,i,a=_(e)?"marginTop":"marginLeft";return n={},r=a,i="".concat(100*-t,"%"),r in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n}function z(t,e){return+window.getComputedStyle(t).getPropertyValue(e).replace("px","")}function H(t){return Object.keys(t).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=t[n]),e}),{})}function F(t,e){return+t.getPropertyValue(e).replace("px","")}function L(t,e,n,r,i){var a=z(i,"padding-".concat(t));if(!r||!r.parentNode)return a;var o=r.parentNode.childNodes;return Array.prototype.some.call(o,(function(i){if(!i.tagName)return!1;var o=window.getComputedStyle(i);return i!==r?(a+=F(o,"margin-".concat(t)),a+=i[e],a+=F(o,"margin-".concat(n)),"content-box"===o.boxSizing&&(a+=F(o,"border-".concat(t,"-width"))+F(o,"border-".concat(n,"-width"))),!1):(a+=F(o,"margin-".concat(t)),!0)})),a}function G(){return(G=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function M(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function U(t){var e;return t.children.forEach((function(t){!t||u(e)||t.disabled||(e=t.key)})),e}var V=a({name:"Tabs",mixins:[o],inheritAttrs:!1,props:{destroyInactiveTabPane:t.looseBool,renderTabBar:t.func.isRequired,renderTabContent:t.func.isRequired,navWrapper:t.func.def((function(t){return t})),children:t.any.def([]),prefixCls:t.string.def("ant-tabs"),tabBarPosition:t.string.def("top"),activeKey:t.oneOfType([t.string,t.number]),defaultActiveKey:t.oneOfType([t.string,t.number]),direction:t.string.def("ltr"),tabBarGutter:t.number},setup:function(t){var e;e=void 0!==t.activeKey?t.activeKey:void 0!==t.defaultActiveKey?t.defaultActiveKey:U(t);var n=s({_activeKey:e});return c((function(){void 0!==t.activeKey?n._activeKey=t.activeKey:function(t,e){return t.children.map((function(t){return t&&t.key})).indexOf(e)>=0}(t,n._activeKey)||(n._activeKey=U(t))}),{flush:"sync"}),{state:n}},created:function(){this.panelSentinelStart=void 0,this.panelSentinelEnd=void 0,this.sentinelStart=void 0,this.sentinelEnd=void 0,l("sentinelContext",this)},beforeUnmount:function(){this.destroy=!0,cancelAnimationFrame(this.sentinelId)},methods:{onTabClick:function(t,e){this.tabBar.props&&this.tabBar.props.onTabClick&&this.tabBar.props.onTabClick(t,e),this.setActiveKey(t)},onNavKeyDown:function(t){var e=t.keyCode;if(e===$||e===K){t.preventDefault();var n=this.getNextActiveKey(!0);this.onTabClick(n)}else if(e===k||e===R){t.preventDefault();var r=this.getNextActiveKey(!1);this.onTabClick(r)}},onScroll:function(t){var e=t.target;e===t.currentTarget&&e.scrollLeft>0&&(e.scrollLeft=0)},setSentinelStart:function(t){this.sentinelStart=t},setSentinelEnd:function(t){this.sentinelEnd=t},setPanelSentinelStart:function(t){t!==this.panelSentinelStart&&this.updateSentinelContext(),this.panelSentinelStart=t},setPanelSentinelEnd:function(t){t!==this.panelSentinelEnd&&this.updateSentinelContext(),this.panelSentinelEnd=t},setActiveKey:function(t){this.state._activeKey!==t&&(void 0===this.$props.activeKey&&(this.state._activeKey=t),this.__emit("update:activeKey",t),this.__emit("change",t))},getNextActiveKey:function(t){var e=this.state._activeKey,n=[];this.$props.children.forEach((function(e){var r,i;e&&!(null===(r=e.props)||void 0===r?void 0:r.disabled)&&""!==(null===(i=e.props)||void 0===i?void 0:i.disabled)&&(t?n.push(e):n.unshift(e))}));var r=n.length,i=r&&n[0].key;return n.forEach((function(t,a){t.key===e&&(i=a===r-1?n[0].key:n[a+1].key)})),i},updateSentinelContext:function(){var t=this;this.destroy||(cancelAnimationFrame(this.sentinelId),this.sentinelId=requestAnimationFrame((function(){t.destroy||t.$forceUpdate()})))}},render:function(){var t,e=this.$props,r=e.prefixCls,a=e.navWrapper,o=e.tabBarPosition,s=e.renderTabContent,c=e.renderTabBar,l=e.destroyInactiveTabPane,u=e.direction,p=e.tabBarGutter,d=this.$attrs,b=d.class;d.onChange;var h=d.style,v=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(d,["class","onChange","style"]),y=(M(t={},b,b),M(t,r,1),M(t,"".concat(r,"-").concat(o),1),M(t,"".concat(r,"-rtl"),"rtl"===u),t);this.tabBar=c();var g=f(this.tabBar,{prefixCls:r,navWrapper:a,tabBarPosition:o,panels:e.children,activeKey:this.state._activeKey,direction:u,tabBarGutter:p,onKeydown:this.onNavKeyDown,onTabClick:this.onTabClick,key:"tabBar"}),m=f(s(),{prefixCls:r,tabBarPosition:o,activeKey:this.state._activeKey,destroyInactiveTabPane:l,direction:u,onChange:this.setActiveKey,children:e.children,key:"tabContent"}),O=n(A,{key:"sentinelStart",setRef:this.setSentinelStart,nextElement:this.panelSentinelStart},null),P=n(A,{key:"sentinelEnd",setRef:this.setSentinelEnd,prevElement:this.panelSentinelEnd},null),x=[];"bottom"===o?x.push(O,m,P,g):x.push(g,O,m,P);var j,T=G(G({},H(v)),{style:h,onScroll:this.onScroll,class:y});return n("div",T,"function"==typeof(j=x)||"[object Object]"===Object.prototype.toString.call(j)&&!i(j)?x:{default:function(){return[x]}})}});function q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var X=a({name:"TabPane",props:{active:t.looseBool,destroyInactiveTabPane:t.looseBool,forceRender:t.looseBool,placeholder:t.any,rootPrefixCls:t.string,tab:t.any,closable:t.looseBool,disabled:t.looseBool},setup:function(){return{isActived:void 0,sentinelContext:p("sentinelContext",{})}},render:function(){var t,e=this.$props,i=e.destroyInactiveTabPane,a=e.active,o=e.forceRender,s=e.rootPrefixCls,c=r(this),l=d(this,"placeholder");this.isActived=this.isActived||a;var f,u,p="".concat(s,"-tabpane"),b=(q(t={},p,1),q(t,"".concat(p,"-inactive"),!a),q(t,"".concat(p,"-active"),a),t),h=(i?a:this.isActived)||o,v=this.sentinelContext,y=v.sentinelStart,g=v.sentinelEnd,m=v.setPanelSentinelStart,O=v.setPanelSentinelEnd;return a&&h&&(f=n(A,{setRef:m,prevElement:y},null),u=n(A,{setRef:O,nextElement:g},null)),n("div",{class:b,role:"tabpanel","aria-hidden":a?"false":"true"},[f,h?c:l,u])}});function Y(){return(Y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function Z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var J=a({name:"TabContent",inheritAttrs:!1,props:{animated:t.looseBool.def(!0),animatedWithMargin:t.looseBool.def(!0),prefixCls:t.string.def("ant-tabs"),activeKey:t.oneOfType([t.string,t.number]),tabBarPosition:t.string,direction:t.string,destroyInactiveTabPane:t.looseBool,children:t.any},computed:{classes:function(){var t,e=this.animated,n=this.prefixCls,r=this.$attrs.class;return Z(t={},r,!!r),Z(t,"".concat(n,"-content"),!0),Z(t,"".concat(n,e?"-content-animated":"-content-no-animated"),!0),t}},methods:{getTabPanes:function(t){var e=this.$props,n=e.activeKey,r=[];return t.forEach((function(t){if(t){var i=t.key,a=n===i;r.push(f(t,{active:a,destroyInactiveTabPane:e.destroyInactiveTabPane,rootPrefixCls:e.prefixCls}))}})),r}},render:function(){var t,e=this.activeKey,r=this.tabBarPosition,i=this.animated,a=this.animatedWithMargin,o=this.direction,s=this.classes,c=this.children,l={};if(i&&c){var f=N(c,e);if(-1!==f){var u=a?I(f,r):{transform:t=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",r=_(e)?"translateY":"translateX";return _(e)||"rtl"!==n?"".concat(r,"(").concat(100*-t,"%) translateZ(0)"):"".concat(r,"(").concat(100*t,"%) translateZ(0)")}(f,r,o),WebkitTransform:t,MozTransform:t};l=Y(Y({},this.$attrs.style),u)}else l=Y(Y({},this.$attrs.style),{display:"none"})}return n("div",{class:s,style:l},[this.getTabPanes(c||[])])}}),Q=function(t){if("undefined"!=typeof window&&window.document&&window.document.documentElement){var e=Array.isArray(t)?t:[t],n=window.document.documentElement;return e.some((function(t){return t in n.style}))}return!1}(["flex","webkitFlex","Flex","msFlex"]);function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function et(t,e){var n=t.$props,r=n.styles,i=void 0===r?{}:r,a=n.panels,o=n.activeKey,s=n.direction,c=t.getRef("root"),l=t.getRef("nav")||c,f=t.getRef("inkBar"),u=t.getRef("activeTab"),p=f.style,d=t.$props.tabBarPosition,b=N(a,o);if(e&&(p.display="none"),u){var h=u,v=D(p);if(W(p,""),p.width="",p.height="",p.left="",p.top="",p.bottom="",p.right="","top"===d||"bottom"===d){var y=function(t,e){return L("left","offsetWidth","right",t,e)}(h,l),g=h.offsetWidth;g===c.offsetWidth?g=0:i.inkBar&&void 0!==i.inkBar.width&&(g=parseFloat(i.inkBar.width,10))&&(y+=(h.offsetWidth-g)/2),"rtl"===s&&(y=z(h,"margin-left")-y),v?W(p,"translate3d(".concat(y,"px,0,0)")):p.left="".concat(y,"px"),p.width="".concat(g,"px")}else{var m=function(t,e){return L("top","offsetHeight","bottom",t,e)}(h,l),O=h.offsetHeight;i.inkBar&&void 0!==i.inkBar.height&&(O=parseFloat(i.inkBar.height,10))&&(m+=(h.offsetHeight-O)/2),v?(W(p,"translate3d(0,".concat(m,"px,0)")),p.top="0"):p.top="".concat(m,"px"),p.height="".concat(O,"px")}}p.display=-1!==b?"block":"none"}var nt={name:"InkTabBarNode",mixins:[o],inheritAttrs:!1,props:{inkBarAnimated:{type:Boolean,default:!0},direction:t.string,prefixCls:String,styles:Object,tabBarPosition:String,saveRef:t.func.def((function(){})),getRef:t.func.def((function(){})),panels:t.array,activeKey:t.oneOfType([t.string,t.number])},updated:function(){var t=this;this.$nextTick((function(){et(t)}))},mounted:function(){var t=this;this.$nextTick((function(){et(t,!0)}))},render:function(){var t,e=this.prefixCls,r=this.styles,i=void 0===r?{}:r,a=this.inkBarAnimated,o="".concat(e,"-ink-bar"),s=(tt(t={},o,!0),tt(t,"".concat(o,a?"-animated":"-no-animated"),!0),t);return n("div",{style:i.inkBar,class:s,key:"inkBar",ref:this.saveRef("inkBar")},null)}};function rt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function it(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?rt(Object(n),!0).forEach((function(e){at(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function at(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ot(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!i(t)}function st(){}var ct={name:"TabBarTabsNode",mixins:[o],inheritAttrs:!1,props:{activeKey:t.oneOfType([t.string,t.number]),panels:t.any.def([]),prefixCls:t.string.def(""),tabBarGutter:t.any.def(null),onTabClick:t.func,saveRef:t.func.def(st),getRef:t.func.def(st),renderTabBarNode:t.func,tabBarPosition:t.string,direction:t.string},render:function(){var t=this,e=this.$props,r=e.panels,i=e.activeKey,a=e.prefixCls,o=e.tabBarGutter,s=e.saveRef,c=e.tabBarPosition,l=e.direction,f=[],u=this.renderTabBarNode||this.$slots.renderTabBarNode;return r.forEach((function(e,p){if(e){var h=b(e),v=e.key,y=i===v?"".concat(a,"-tab-active"):"";y+=" ".concat(a,"-tab");var g={},m=h.disabled;m?y+=" ".concat(a,"-tab-disabled"):g.onClick=function(){t.__emit("tabClick",v)};var O=d(e,"tab"),P=o&&p===r.length-1?0:o;P="number"==typeof P?"".concat(P,"px"):P;var x="rtl"===l?"marginLeft":"marginRight",j=at({},_(c)?"marginBottom":x,P),T=n("div",it(it({role:"tab","aria-disabled":m?"true":"false","aria-selected":i===v?"true":"false"},g),{},{class:y.trim(),key:v,style:j,ref:i===v?s("activeTab"):st}),ot(O)?O:{default:function(){return[O]}});u&&(T=u(T)),f.push(T)}})),n("div",{ref:this.saveRef("navTabsContainer")},ot(f)?f:{default:function(){return[f]}})}};function lt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ft(){return(ft=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function ut(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pt(){}var dt={name:"TabBarRootNode",mixins:[o],inheritAttrs:!1,props:{saveRef:t.func.def(pt),getRef:t.func.def(pt),prefixCls:t.string.def(""),tabBarPosition:t.string.def("top"),extraContent:t.any},methods:{onKeyDown:function(t){this.__emit("keydown",t)}},render:function(){var t,e=this.prefixCls,a=this.onKeyDown,o=this.tabBarPosition,s=this.extraContent,c=this.$attrs,l=c.class,u=c.style;c.onKeydown;var p,d=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(c,["class","style","onKeydown"]),b=(ut(t={},"".concat(e,"-bar"),!0),ut(t,l,!!l),t),h="top"===o||"bottom"===o,v=h?{float:"right"}:{},y=r(this),g=y;return s&&(g=[f(s,{key:"extra",style:ft({},v)}),f(y,{key:"content"})],g=h?g:g.reverse()),n("div",function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?lt(Object(n),!0).forEach((function(e){ut(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):lt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({role:"tablist",class:b,tabindex:"0",onKeydown:a,style:u,ref:this.saveRef("root")},H(d)),"function"==typeof(p=g)||"[object Object]"===Object.prototype.toString.call(p)&&!i(p)?g:{default:function(){return[g]}})}};function bt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ht(){return(ht=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var vt={name:"ScrollableTabBarNode",mixins:[o],inheritAttrs:!1,props:{activeKey:t.any,getRef:t.func.def((function(){})),saveRef:t.func.def((function(){})),tabBarPosition:t.oneOf(["left","right","top","bottom"]).def("left"),prefixCls:t.string.def(""),scrollAnimated:t.looseBool.def(!0),navWrapper:t.func.def((function(t){return t})),prevIcon:t.any,nextIcon:t.any,direction:t.string},data:function(){return this.offset=0,this.prevProps=ht({},this.$props),{next:!1,prev:!1}},watch:{tabBarPosition:function(){var t=this;this.tabBarPositionChange=!0,this.$nextTick((function(){t.setOffset(0)}))}},mounted:function(){var t=this;this.$nextTick((function(){t.updatedCal(),t.debouncedResize=h((function(){t.setNextPrev(),t.scrollToActiveTab()}),200),t.resizeObserver=new v(t.debouncedResize),t.resizeObserver.observe(t.$props.getRef("container"))}))},updated:function(){var t=this;this.$nextTick((function(){t.updatedCal(t.prevProps),t.prevProps=ht({},t.$props)}))},beforeUnmount:function(){this.resizeObserver&&this.resizeObserver.disconnect(),this.debouncedResize&&this.debouncedResize.cancel&&this.debouncedResize.cancel()},methods:{updatedCal:function(t){var e=this,n=this.$props;t&&t.tabBarPosition!==n.tabBarPosition?this.setOffset(0):this.isNextPrevShown(this.$data)!==this.isNextPrevShown(this.setNextPrev())?(this.$forceUpdate(),this.$nextTick((function(){e.scrollToActiveTab()}))):t&&n.activeKey===t.activeKey||this.scrollToActiveTab()},setNextPrev:function(){var t=this.$props.getRef("nav"),e=this.$props.getRef("navTabsContainer"),n=this.getScrollWH(e||t),r=this.getOffsetWH(this.$props.getRef("container"))+1,i=this.getOffsetWH(this.$props.getRef("navWrap")),a=this.offset,o=r-n,s=this.next,c=this.prev;if(o>=0)s=!1,this.setOffset(0,!1),a=0;else if(o<a)s=!0;else{s=!1;var l=i-n;this.setOffset(l,!1),a=l}return c=a<0,this.setNext(s),this.setPrev(c),{next:s,prev:c}},getOffsetWH:function(t){var e=this.$props.tabBarPosition,n="offsetWidth";return"left"!==e&&"right"!==e||(n="offsetHeight"),t[n]},getScrollWH:function(t){var e=this.tabBarPosition,n="scrollWidth";return"left"!==e&&"right"!==e||(n="scrollHeight"),t[n]},getOffsetLT:function(t){var e=this.$props.tabBarPosition,n="left";return"left"!==e&&"right"!==e||(n="top"),t.getBoundingClientRect()[n]},setOffset:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Math.min(0,t);if(this.offset!==n){this.offset=n;var r={},i=this.$props.tabBarPosition,a=this.$props.getRef("nav").style,o=D(a);"left"===i||"right"===i?r=o?{value:"translate3d(0,".concat(n,"px,0)")}:{name:"top",value:"".concat(n,"px")}:o?("rtl"===this.$props.direction&&(n=-n),r={value:"translate3d(".concat(n,"px,0,0)")}):r={name:"left",value:"".concat(n,"px")},o?W(a,r.value):a[r.name]=r.value,e&&this.setNextPrev()}},setPrev:function(t){this.prev!==t&&(this.prev=t)},setNext:function(t){this.next!==t&&(this.next=t)},isNextPrevShown:function(t){return t?t.next||t.prev:this.next||this.prev},prevTransitionEnd:function(t){if("opacity"===t.propertyName){var e=this.$props.getRef("container");this.scrollToActiveTab({target:e,currentTarget:e})}},scrollToActiveTab:function(t){var e=this.$props.getRef("activeTab"),n=this.$props.getRef("navWrap");if((!t||t.target===t.currentTarget)&&e){var r=this.isNextPrevShown()&&this.lastNextPrevShown;if(this.lastNextPrevShown=this.isNextPrevShown(),r){var i=this.getScrollWH(e),a=this.getOffsetWH(n),o=this.offset,s=this.getOffsetLT(n),c=this.getOffsetLT(e);s>c?(o+=s-c,this.setOffset(o)):s+a<c+i&&(o-=c+i-(s+a),this.setOffset(o))}}},prevClick:function(t){this.__emit("prevClick",t);var e=this.$props.getRef("navWrap"),n=this.getOffsetWH(e),r=this.offset;this.setOffset(r+n)},nextClick:function(t){this.__emit("nextClick",t);var e=this.$props.getRef("navWrap"),n=this.getOffsetWH(e),r=this.offset;this.setOffset(r-n)}},render:function(){var t,e,i,a,o=this.next,s=this.prev,c=this.$props,l=c.prefixCls,f=c.scrollAnimated,u=c.navWrapper,p=d(this,"prevIcon"),b=d(this,"nextIcon"),h=s||o,v=n("span",{onClick:s&&this.prevClick,unselectable:"unselectable",class:(t={},bt(t,"".concat(l,"-tab-prev"),1),bt(t,"".concat(l,"-tab-btn-disabled"),!s),bt(t,"".concat(l,"-tab-arrow-show"),h),t),onTransitionend:this.prevTransitionEnd},[p||n("span",{class:"".concat(l,"-tab-prev-icon")},null)]),y=n("span",{onClick:o&&this.nextClick,unselectable:"unselectable",class:(e={},bt(e,"".concat(l,"-tab-next"),1),bt(e,"".concat(l,"-tab-btn-disabled"),!o),bt(e,"".concat(l,"-tab-arrow-show"),h),e)},[b||n("span",{class:"".concat(l,"-tab-next-icon")},null)]),g="".concat(l,"-nav"),m=(bt(i={},g,!0),bt(i,"".concat(g,f?"-animated":"-no-animated"),!0),i);return n("div",{class:(a={},bt(a,"".concat(l,"-nav-container"),1),bt(a,"".concat(l,"-nav-container-scrolling"),h),a),key:"container",ref:this.saveRef("container")},[v,y,n("div",{class:"".concat(l,"-nav-wrap"),ref:this.saveRef("navWrap")},[n("div",{class:"".concat(l,"-nav-scroll")},[n("div",{class:m,ref:this.saveRef("nav")},[u(r(this))])])])])}},yt={props:{children:t.func.def((function(){return null}))},methods:{getRef:function(t){return this[t]},saveRef:function(t){var e=this;return function(n){n&&(e[t]=n)}}},render:function(){var t=this;return this.children((function(e){return t.saveRef(e)}),(function(e){return t.getRef(e)}))}};function gt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function mt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?gt(Object(n),!0).forEach((function(e){Ot(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):gt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Ot(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Pt(){return(Pt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var xt=a({name:"ScrollableInkTabBar",inheritAttrs:!1,render:function(){var t=this,e=this.$attrs.children;return n(yt,{children:function(r,a){var o,s;return n(dt,mt({saveRef:r},t.$attrs),"function"==typeof(s=o=n(vt,mt({saveRef:r,getRef:a},t.$attrs),{default:function(){return[n(ct,mt({saveRef:r},Pt(Pt({},t.$attrs),{renderTabBarNode:e})),null),n(nt,mt({saveRef:r,getRef:a},t.$attrs),null)]}}))||"[object Object]"===Object.prototype.toString.call(s)&&!i(s)?o:{default:function(){return[o]}})}},null)}});function jt(){return(jt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function Tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wt(t){return(wt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var Bt=a({name:"TabBar",inheritAttrs:!1,props:{prefixCls:t.string,centered:t.looseBool.def(!1),tabBarStyle:t.style,tabBarExtraContent:t.VNodeChild,type:t.oneOf(y("line","card","editable-card")),tabPosition:t.oneOf(y("top","right","bottom","left")).def("top"),tabBarPosition:t.oneOf(y("top","right","bottom","left")),size:t.oneOf(y("default","small","large")),animated:{type:[Boolean,Object],default:void 0},renderTabBar:t.func,panels:t.array.def([]),activeKey:t.oneOfType([t.string,t.number]),tabBarGutter:t.number},render:function(){var t,e=this.$props,r=e.centered,i=e.tabBarStyle,a=e.animated,o=void 0===a||a,s=e.renderTabBar,c=e.tabBarExtraContent,l=e.tabPosition,f=e.prefixCls,u=e.type,p=void 0===u?"line":u,d=e.size,b="object"===wt(o)?o.inkBar:o,h="left"===l||"right"===l,v=n("span",{class:"".concat(f,"-tab-prev-icon")},[n(h?T:w,{class:"".concat(f,"-tab-prev-icon-target")},null)]),y=n("span",{class:"".concat(f,"-tab-next-icon")},[n(h?B:C,{class:"".concat(f,"-tab-next-icon-target")},null)]),g=(Tt(t={},this.$attrs.class,this.$attrs.class),Tt(t,"".concat(f,"-centered-bar"),r),Tt(t,"".concat(f,"-").concat(l,"-bar"),!0),Tt(t,"".concat(f,"-").concat(d,"-bar"),!!d),Tt(t,"".concat(f,"-card-bar"),p&&p.indexOf("card")>=0),t),m=jt(jt(jt({},this.$props),this.$attrs),{children:null,inkBarAnimated:b,extraContent:c,prevIcon:v,nextIcon:y,style:i,class:g});return s?s(jt(jt({},m),{DefaultTabBar:xt})):n(xt,m,null)}});function Ct(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function St(){return(St=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function kt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Rt(t){return(Rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var $t=a({TabPane:X,name:"ATabs",inheritAttrs:!1,props:{prefixCls:t.string,activeKey:t.oneOfType([t.string,t.number]),defaultActiveKey:t.oneOfType([t.string,t.number]),hideAdd:t.looseBool.def(!1),centered:t.looseBool.def(!1),tabBarStyle:t.object,tabBarExtraContent:t.any,destroyInactiveTabPane:t.looseBool.def(!1),type:t.oneOf(y("line","card","editable-card")),tabPosition:t.oneOf(["top","right","bottom","left"]).def("top"),size:t.oneOf(["default","small","large"]),animated:g(t.oneOfType([t.looseBool,t.object])),tabBarGutter:t.number,renderTabBar:t.func,onChange:{type:Function},onTabClick:t.func,onPrevClick:{type:Function},onNextClick:{type:Function},onEdit:{type:Function}},emits:["update:activeKey","edit","change"],setup:function(){return{configProvider:p("configProvider",x)}},mounted:function(){var t=" no-flex",e=m(this);e&&!Q&&-1===e.className.indexOf(t)&&(e.className+=t)},methods:{removeTab:function(t,e){e.stopPropagation(),u(t)&&this.$emit("edit",t,"remove")},handleChange:function(t){this.$emit("update:activeKey",t),this.$emit("change",t)},createNewTab:function(t){this.$emit("edit",t,"add")}},render:function(){var t,e,a=this,o=O(this),s=o.prefixCls,c=o.size,l=o.type,u=void 0===l?"line":l,p=o.tabPosition,h=o.animated,v=void 0===h||h,y=o.hideAdd,g=o.renderTabBar,m=this.$attrs,x=m.class,T=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(m,["class"]),w=(0,this.configProvider.getPrefixCls)("tabs",s),B=P(r(this)),C=d(this,"tabBarExtraContent"),k="object"===Rt(v)?v.tabPane:v;"line"!==u&&(k="animated"in o&&k);var R,$=(kt(t={},x,x),kt(t,"".concat(w,"-vertical"),"left"===p||"right"===p),kt(t,"".concat(w,"-").concat(c),!!c),kt(t,"".concat(w,"-card"),u.indexOf("card")>=0),kt(t,"".concat(w,"-").concat(u),!0),kt(t,"".concat(w,"-no-animation"),!k),t),K=[];"editable-card"===u&&(K=[],B.forEach((function(t,e){var r=b(t).closable,i=(r=void 0===r||r)?n(j,{class:"".concat(w,"-close-x"),onClick:function(e){return a.removeTab(t.key,e)}},null):null;K.push(f(t,{tab:n("div",{class:r?void 0:"".concat(w,"-tab-unclosable")},[d(t,"tab"),i]),key:t.key||e}))})),y||(C=n("span",null,[n(S,{class:"".concat(w,"-new-tab"),onClick:this.createNewTab},null),C]))),C=C?n("div",{class:"".concat(w,"-extra-content")},"function"==typeof(R=C)||"[object Object]"===Object.prototype.toString.call(R)&&!i(R)?C:{default:function(){return[C]}}):null;var E=g||this.$slots.renderTabBar,A=St(St(St(St({},o),{prefixCls:w,tabBarExtraContent:C,renderTabBar:E}),T),{children:B}),N=(kt(e={},"".concat(w,"-").concat(p,"-content"),!0),kt(e,"".concat(w,"-card-content"),u.indexOf("card")>=0),e),W=St(St(St(St({},o),{prefixCls:w,tabBarPosition:p,renderTabBar:function(){return n(Bt,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ct(Object(n),!0).forEach((function(e){kt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ct(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({key:"tabBar"},A),null)},renderTabContent:function(){return n(J,{class:N,animated:k,animatedWithMargin:!0},null)},children:K.length>0?K:B}),T),{onChange:this.handleChange,class:$});return n(V,W,null)}});function Kt(){return(Kt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}$t.TabPane=Kt(Kt({},X),{name:"ATabPane",__ANT_TAB_PANE:!0}),$t.TabContent=Kt(Kt({},J),{name:"ATabContent"}),$t.install=function(t){return t.component($t.name,$t),t.component($t.TabPane.name,$t.TabPane),t.component($t.TabContent.name,$t.TabContent),t};export{$t as T};
