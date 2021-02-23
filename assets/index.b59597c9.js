import{Y as t,d as o,i as n,N as r,a3 as e,a4 as c,h as a,H as s,M as f,G as i,g as u,P as l}from"./index.8a947221.js";import{r as p,a as y}from"./responsiveObserve.c545f1cc.js";function b(){return(b=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function d(t,o,n){return o in t?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n,t}function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var v=t("top","middle","bottom","stretch"),g=t("start","end","center","space-around","space-between"),x=o({name:"ARow",setup:function(t,o){var l,v=o.slots,g=n({gutter:void 0});r("rowContext",g),e((function(){l=p.subscribe((function(o){var n=t.gutter||0;(!Array.isArray(n)&&"object"===m(n)||Array.isArray(n)&&("object"===m(n[0])||"object"===m(n[1])))&&(x.value=o)}))})),c((function(){p.unsubscribe(l)}));var x=a({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),h=s("configProvider",f).getPrefixCls;return function(){var o,n,r=t.prefixCls,e=t.justify,c=t.align,a=h("row",r),s=function(){var o=[0,0],n=t.gutter,r=void 0===n?0:n;return(Array.isArray(r)?r:[r,0]).forEach((function(t,n){if("object"===m(t))for(var r=0;r<y.length;r++){var e=y[r];if(x.value[e]&&void 0!==t[e]){o[n]=t[e];break}}else o[n]=t||0})),o}(),f=i(a,(d(o={},"".concat(a,"-").concat(e),e),d(o,"".concat(a,"-").concat(c),c),o)),l=b(b({},s[0]>0?{marginLeft:"".concat(s[0]/-2,"px"),marginRight:"".concat(s[0]/-2,"px")}:{}),s[1]>0?{marginTop:"".concat(s[1]/-2,"px"),marginBottom:"".concat(s[1]/-2,"px")}:{});return g.gutter=s,u("div",{class:f,style:l},[null===(n=v.default)||void 0===n?void 0:n.call(v)])}}});function h(t,o,n){return o in t?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n,t}function j(){return(j=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}x.props={type:l.oneOf(["flex"]),align:l.oneOf(v),justify:l.oneOf(g),prefixCls:l.string,gutter:l.oneOfType([l.object,l.number,l.array]).def(0)};var S=o({name:"ACol",setup:function(t,o){var n=o.slots,r=s("configProvider",f),e=s("rowContext",{});return function(){var o,c,a=e.gutter,s=t.prefixCls,f=t.span,l=t.order,p=t.offset,y=t.push,b=t.pull,d=t.flex,m=r.getPrefixCls("col",s),v={};["xs","sm","md","lg","xl","xxl"].forEach((function(o){var n,r={},e=t[o];"number"==typeof e?r.span=e:"object"===O(e)&&(r=e||{}),v=j(j({},v),(h(n={},"".concat(m,"-").concat(o,"-").concat(r.span),void 0!==r.span),h(n,"".concat(m,"-").concat(o,"-order-").concat(r.order),r.order||0===r.order),h(n,"".concat(m,"-").concat(o,"-offset-").concat(r.offset),r.offset||0===r.offset),h(n,"".concat(m,"-").concat(o,"-push-").concat(r.push),r.push||0===r.push),h(n,"".concat(m,"-").concat(o,"-pull-").concat(r.pull),r.pull||0===r.pull),n))}));var g=i(m,(h(o={},"".concat(m,"-").concat(f),void 0!==f),h(o,"".concat(m,"-order-").concat(l),l),h(o,"".concat(m,"-offset-").concat(p),p),h(o,"".concat(m,"-push-").concat(y),y),h(o,"".concat(m,"-pull-").concat(b),b),o),v),x={};return a&&(x=j(j(j({},a[0]>0?{paddingLeft:"".concat(a[0]/2,"px"),paddingRight:"".concat(a[0]/2,"px")}:{}),a[1]>0?{paddingTop:"".concat(a[1]/2,"px"),paddingBottom:"".concat(a[1]/2,"px")}:{}),x)),d&&(x.flex=function(t){return"number"==typeof t?"".concat(t," ").concat(t," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?"0 0 ".concat(t):t}(d)),u("div",{class:g,style:x},[null===(c=n.default)||void 0===c?void 0:c.call(n)])}}}),w=l.oneOfType([l.string,l.number]),A=l.shape({span:w,order:w,offset:w,push:w,pull:w}).loose,C=l.oneOfType([l.string,l.number,A]);S.props={span:w,order:w,offset:w,push:w,pull:w,xs:C,sm:C,md:C,lg:C,xl:C,xxl:C,prefixCls:l.string,flex:w};export{S as A,x as a};
